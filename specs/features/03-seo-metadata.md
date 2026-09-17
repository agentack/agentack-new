# SEO & Metadata Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

All pages must implement consistent SEO metadata. This spec defines the pattern.

---

## Base Layout Metadata

**File**: `app/layout.tsx`

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | [Agency Name]',
    default: '[Agency Name] — AI Automation for Growing Businesses',
  },
  description: 'We build custom AI automation systems for mid-size businesses.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: '[Agency Name]',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '[Agency Name] — AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

---

## Per-Page Metadata Pattern

**Every page spec includes its own metadata:**

```typescript
// app/[page]/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title — [Agency Name]',
  description: 'Page-specific description (max 160 chars)',
}
```

---

## Dynamic Route Metadata

**For service detail pages:**

```typescript
// app/services/[slug]/page.tsx
import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { serviceBySlugQuery } from '@/lib/sanity/queries'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await client.fetch(serviceBySlugQuery, { slug: params.slug })
  
  if (!service) {
    return {}
  }
  
  return {
    title: `${service.name} — [Agency Name]`,
    description: service.seoDescription,
  }
}
```

---

## Structured Data (JSON-LD)

**Add to homepage (`app/page.tsx`):**

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '[Agency Name]',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.svg`,
      description: 'We build custom AI automation systems for mid-size businesses.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@yourdomain.com',
      },
      sameAs: [
        'https://linkedin.com/company/[agency-name]',
      ],
    }),
  }}
/>
```

---

## Page-Specific Metadata Reference

| Page | Title | Description |
|------|-------|-------------|
| Homepage | `[Agency Name] — AI Automation for Growing Businesses` | `We build custom AI automation systems for mid-size businesses. Eliminate manual work, scale operations, and free your team to focus on what matters.` |
| Services | `Our Services — [Agency Name]` | `Custom AI workflow automation, AI integration, and reporting automation services for mid-size businesses.` |
| Service Detail | `[Service Name] — [Agency Name]` | From Sanity `service.seoDescription` |
| About | `About — [Agency Name]` | `We believe most business processes shouldn't require humans. Learn about our mission, approach, and the team behind [Agency Name].` |
| Contact | `Let's Talk — [Agency Name]` | `Book a free 30-minute strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment.` |

---

## Implementation Checklist

- [ ] Add base metadata to `app/layout.tsx`
- [ ] Add page-specific metadata to each page
- [ ] Implement dynamic metadata for service pages
- [ ] Add JSON-LD structured data to homepage
- [ ] Create `/og-image.png` (1200×630)
- [ ] Set `NEXT_PUBLIC_SITE_URL` env var
- [ ] Test with Google Rich Results Test

---

**Required by**: All page specs
