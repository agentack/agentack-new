# API Routes Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

Backend API endpoints for the website. Currently only contact form handler.

---

## POST /api/contact

**File**: `app/api/contact/route.ts`

### Request Schema

```typescript
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(1, 'Company is required').max(100),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})
```

### Implementation

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validators/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const hour = 60 * 60 * 1000
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + hour })
    return true
  }

  if (record.count >= 5) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // Send email
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL_TO || 'hello@yourdomain.com'],
      subject: `New Contact Form Submission from ${validated.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Company:</strong> ${validated.company}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validated.message}</p>
      `,
      replyTo: validated.email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## Environment Variables

```bash
# Required for /api/contact
RESEND_API_KEY=<resend-api-key>
CONTACT_EMAIL_TO=hello@yourdomain.com
```

---

## Error Response Format

```typescript
// 400 Bad Request (Validation Error)
{
  error: 'Validation failed',
  details: [
    { path: ['email'], message: 'Invalid email' }
  ]
}

// 429 Too Many Requests
{
  error: 'Too many requests. Please try again later.'
}

// 500 Internal Server Error
{
  error: 'Internal server error'
}
```

---

## Testing

```typescript
// Test valid submission
POST /api/contact
Body: {
  name: 'John Doe',
  company: 'Acme Inc.',
  email: 'john@acme.com',
  message: 'We need help automating our reporting process.'
}
Expected: 200 OK, { success: true }

// Test invalid email
POST /api/contact
Body: { name: 'John', company: 'Acme', email: 'invalid', message: 'Test message here' }
Expected: 400 Bad Request, validation errors

// Test rate limiting
// Send 6 requests within 1 hour from same IP
// 6th request should return 429
```

---

## Implementation Checklist

- [ ] Install `resend` package
- [ ] Create validator schema in `lib/validators/contact.ts`
- [ ] Create `/api/contact/route.ts`
- [ ] Set up Resend API key
- [ ] Set up contact email
- [ ] Test form submission
- [ ] Test error states
- [ ] Test rate limiting

---

**Required by**: `pages/05-contact.md`
