# Contact Page Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Assigned To**: [Team Member 3]  
**Status**: Ready for Implementation

---

## Overview

**Route**: `/contact`  
**Sections**: 5  
**Dependencies**: Shared specs + Navbar + Footer + API routes

---

## SEO Metadata

**File**: `app/contact/page.tsx`

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Let's Talk — [Agency Name]",
  description: 'Book a free 30-minute strategy call. We\'ll identify your top 3 automation opportunities — no pitch, no commitment.',
}
```

---

## Section Order

| # | Component | Background | Padding | Notes |
|---|-----------|------------|---------|-------|
| 1 | Navbar | `#000000` | — | Layout |
| 2 | ContactHeroSection | `#000000` | `py-[100px]` top, `pb-[60px]` | Centered |
| 3 | ContactFormSection | `#080808` | `pt-[60px]`, `pb-[80px]` | 2-col 55/45 |
| 4 | TrustSignalsSection | `#000000` | `py-[48px]` | 3 items |
| 5 | Footer | `#050505` | — | Layout |

---

## Section 1: Navbar

**Component**: `components/layout/Navbar.tsx`  
**Spec**: `features/01-navbar.md`

---

## Section 2: ContactHeroSection

**Component**: `components/sections/ContactHeroSection.tsx`  
**Background**: `#000000`

```typescript
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactHeroSection() {
  return (
    <section className="bg-black-base pt-[100px] pb-[60px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <SectionHeading
          heading="Let's talk about what's slowing you down."
          subtitle="Book a free 30-min strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment."
          align="center"
        />
      </div>
    </section>
  )
}
```

---

## Section 3: ContactFormSection

**Component**: `components/sections/ContactFormSection.tsx`  
**Background**: `#080808`

### Layout

- 2-col CSS grid 55/45
- Gap: 60px
- Vertical divider: 0.5px `#1E2E26`

### Left Column: Form

- Fields: Name, Company, Email, Message
- Submit: Button 5 (Form Submit)

### Right Column: Cal.com Embed

- Heading: "Or pick a time directly"
- Iframe: Cal.com booking page

### Implementation

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(1, 'Company is required').max(100),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})

type FormData = z.infer<typeof formSchema>

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setIsSuccess(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section className="bg-black-2 py-[60px]">
        <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
          <div className="text-center">
            <h3 className="font-display font-medium text-[28px] text-frost-white mb-4">
              Message Sent
            </h3>
            <p className="font-body font-normal text-[16px] text-sage-mid">
              We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-black-2 pt-[60px] pb-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[60px]">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-medium text-[20px] text-frost-white mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Input
                id="name"
                label="Name"
                placeholder="John Doe"
                error={errors.name?.message}
                register={register('name')}
              />
              <Input
                id="company"
                label="Company"
                placeholder="Acme Inc."
                error={errors.company?.message}
                register={register('company')}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="john@company.com"
                error={errors.email?.message}
                register={register('email')}
              />
              <Textarea
                id="message"
                label="Message"
                placeholder="What's your biggest operational bottleneck?"
                rows={5}
                error={errors.message?.message}
                register={register('message')}
              />
              <Button
                type="submit"
                variant="form-submit"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Right: Cal.com Embed */}
          <div className="lg:col-span-2 border-l border-[#1E2E26] pl-0 lg:pl-[60px]">
            <h3 className="font-body font-medium text-[16px] text-sage-mid mb-4">
              Or pick a time directly
            </h3>
            <iframe
              src={process.env.NEXT_PUBLIC_CAL_LINK}
              className="w-full h-[600px] rounded-card border border-border-dark"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## Section 4: TrustSignalsSection

**Component**: `components/sections/TrustSignalsSection.tsx`  
**Background**: `#000000`

```typescript
import { CheckCircle } from 'lucide-react'

const trustSignals = [
  'We reply within 24 hours.',
  'No sales pressure — just a real conversation.',
  'Your information stays private, always.',
]

export function TrustSignalsSection() {
  return (
    <section className="bg-black-base py-[48px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-wrap justify-center gap-8">
          {trustSignals.map((signal, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-primary" />
              <span className="font-body font-normal text-[14px] text-sage-mid">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Section 5: Footer

**Component**: `components/layout/Footer.tsx`  
**Spec**: `features/02-footer.md`

---

## API Route: /api/contact

**File**: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // TODO: Send email via Resend
    console.log('Contact form submission:', validated)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
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
NEXT_PUBLIC_CAL_LINK=https://cal.com/your-username/30min
RESEND_API_KEY=<resend-api-key>
CONTACT_EMAIL_TO=hello@yourdomain.com
```

---

## Implementation Checklist

- [ ] Create `app/contact/page.tsx` with metadata
- [ ] Create ContactHeroSection component
- [ ] Create ContactFormSection component with form validation
- [ ] Create TrustSignalsSection component
- [ ] Create `/api/contact` route
- [ ] Set up Cal.com embed
- [ ] Test form submission
- [ ] Test error states
- [ ] Test success state
- [ ] Test responsive behavior

---

## Dependencies

- `shared/01-design-system.md` ✅
- `shared/02-component-library.md` ✅
- `features/01-navbar.md` ✅
- `features/02-footer.md` ✅
- `features/04-api-routes.md` ✅

---

**Next Page Spec**: `pages/02-services-overview.md`
