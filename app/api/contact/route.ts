import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from 'next-sanity'
import { contactSchema } from '@/lib/validators/contact'
import { apiVersion, dataset, projectId } from '@/sanity/env'

// Lazy initialize Resend client
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not configured. Email sending will be skipped.')
    return null
  }
  const { Resend } = require('resend')
  return new Resend(apiKey)
}

// Server-side Sanity client (writes with API token)
function getSanityClient() {
  const token = process.env.SANITY_API_TOKEN
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  })
}

const FOUNDER_EMAILS = [
  'missahsanahsan@gmail.com',
  'toobtq@gmail.com',
]

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const HOUR_MS = 60 * 60 * 1000
const MAX_REQUESTS = 5

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + HOUR_MS })
    return { allowed: true, remaining: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: MAX_REQUESTS - record.count }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting (from x-forwarded-for header)
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0] ?? 'unknown'

    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Please try again later.',
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validated = contactSchema.parse(body)

    const { fullName, email, companyName, estimatedBudget, projectUrgency, notes } =
      validated

    // 1. Store the inquiry in Sanity (best-effort, emails still send if this fails)
    let inquiryId: string | null = null
    try {
      const sanityClient = getSanityClient()
      if (process.env.SANITY_API_TOKEN) {
        const doc = await sanityClient.create({
          _type: 'inquiry',
          fullName,
          email,
          companyName,
          estimatedBudget,
          projectUrgency,
          notes: notes || '',
          status: 'booked',
          submittedAt: new Date().toISOString(),
        })
        inquiryId = doc._id
      } else {
        console.warn('SANITY_API_TOKEN is not configured. Inquiry storage skipped.')
      }
    } catch (error) {
      console.error('Failed to store inquiry in Sanity:', error)
    }

    const resend = getResendClient()
    if (!resend) {
      console.log('Email sending skipped (no API key configured)')
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully',
      })
    }

    const from = 'Agentack <onboarding@agentack.co>'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agentack.co'
    const studioLink = `${siteUrl}/admin/studio`

    // 2. Email 1: confirmation to the client
    await resend.emails.send({
      from,
      to: [email],
      subject: 'We received your message — Agentack',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #5A3AD8; padding: 20px; border-radius: 8px 8px 0 0; }
              .header h1 { margin: 0; color: #fff; font-size: 22px; }
              .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
              .value { background: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px; white-space: pre-wrap; }
              .footer { background: #333; color: #fff; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thanks, ${fullName}!</h1>
              </div>
              <div class="content">
                <p>We received your message and a member of the Agentack team will reach out to you <strong>within 24 hours</strong>.</p>
                <p>Here's a quick summary of what you sent us:</p>
                <div class="field">
                  <span class="label">Company</span>
                  <div class="value">${companyName}</div>
                </div>
                <div class="field">
                  <span class="label">Estimated budget</span>
                  <div class="value">${estimatedBudget}</div>
                </div>
                <div class="field">
                  <span class="label">Project urgency</span>
                  <div class="value">${projectUrgency}</div>
                </div>
                ${notes
                  ? `<div class="field">
                  <span class="label">Notes</span>
                  <div class="value">${notes}</div>
                </div>`
                  : ''}
                <p>In the meantime, feel free to book a time directly: <a href="${process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com'}">schedule a call</a>.</p>
              </div>
              <div class="footer">
                <p>Agentack — AI Workforce for Modern Businesses</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    // 3. Emails 2 & 3: reminders to the founders to check Sanity
    const founderEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #5A3AD8; padding: 20px; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; color: #fff; font-size: 22px; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
            .cta { display: inline-block; background: #5A3AD8; color: #fff; padding: 12px 22px; border-radius: 8px; text-decoration: none; font-weight: bold; }
            .footer { background: #333; color: #fff; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New message on agentack.co</h1>
            </div>
            <div class="content">
              <p>Someone sent a message through the Agentack contact form:</p>
              <p><strong>${fullName}</strong> · ${email}</p>
              <p>Full project details are saved as a new inquiry in Sanity. Please review it and update the status (Booked / Meeting / Closed / Gone) with any notes.</p>
              <p><a class="cta" href="${studioLink}">Open Sanity Studio → Contact Inquiries</a></p>
              <p style="color:#777; font-size:13px;">Reach out to the lead within 24 hours.</p>
            </div>
            <div class="footer">
              <p>Agentack — AI Workforce for Modern Businesses</p>
            </div>
          </div>
        </body>
      </html>
    `

    for (const founderEmail of FOUNDER_EMAILS) {
      await resend.emails.send({
        from,
        to: [founderEmail],
        subject: `Someone sent a message on Agentack — check Sanity`,
        html: founderEmailHtml,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      )
    }

    // Handle Resend API errors
    if (error instanceof Error) {
      console.error('Contact form error:', error)
      return NextResponse.json(
        {
          error: 'Failed to send message',
          message: error.message,
        },
        { status: 500 }
      )
    }

    // Handle unknown errors
    console.error('Unknown contact form error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'An unexpected error occurred',
      },
      { status: 500 }
    )
  }
}