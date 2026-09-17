# Services Overview Page Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Assigned To**: [Team Member 1]  
**Status**: Ready for Implementation

---

## Overview

**Route**: `/services`  
**Sections**: 6  
**Dependencies**: Shared specs + Navbar + Footer

---

## SEO Metadata

```typescript
export const metadata: Metadata = {
  title: 'Our Services — [Agency Name]',
  description: 'Custom AI workflow automation, AI integration, and reporting automation services for mid-size businesses.',
}
```

---

## Section Order

| # | Component | Background | Padding | Data Source |
|---|-----------|------------|---------|-------------|
| 1 | Navbar | `#000000` | — | Layout |
| 2 | ServicesPageHeroSection | `#000000` | `py-[120px]` top, `pb-[80px]` | Static |
| 3 | ServiceCardsSection | `#080808` | `py-[80px]` | Sanity services |
| 4 | ProcessTeaserSection | `#000000` | `py-[80px]` | Sanity siteSettings |
| 5 | ServicesCTAStrip | `#0D1A12` | `py-[60px]` | Static |
| 6 | Footer | `#050505` | — | Layout |

---

## Section 2: ServicesPageHeroSection

```typescript
export function ServicesPageHeroSection() {
  return (
    <section className="bg-black-base pt-[120px] pb-[80px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <h1 className="font-display font-medium text-[52px] leading-[1.15] tracking-[-0.02em] text-frost-white mb-6">
          Our Services
        </h1>
        <p className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px] mx-auto">
          Custom AI automation systems designed for your specific workflows.
        </p>
      </div>
    </section>
  )
}
```

---

## Section 3: ServiceCardsSection

**Layout**: 2-col grid (larger cards than homepage)

```typescript
import { ServiceCard } from '@/components/ui/ServiceCard'

export function ServiceCardsSection({ services }) {
  return (
    <section className="bg-black-2 py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Section 4: ProcessTeaserSection

**Layout**: Compact 3-step horizontal (uses first 3 steps from siteSettings)

---

## Section 5: ServicesCTAStrip

```typescript
import { Button } from '@/components/ui/Button'

export function ServicesCTAStrip() {
  return (
    <section className="bg-green-tinted py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="font-display font-medium text-[38px] text-frost-white mb-2">
              Ready to automate your workflows?
            </h2>
            <p className="font-body font-normal text-[16px] text-sage-mid">
              Book a free strategy call to discuss your automation needs.
            </p>
          </div>
          <Button variant="section-cta">
            Book a free strategy call
          </Button>
        </div>
      </div>
    </section>
  )
}
```

---

## Implementation Checklist

- [ ] Create `app/services/page.tsx`
- [ ] Fetch services from Sanity
- [ ] Create all section components
- [ ] Test 2-col card grid
- [ ] Test responsive behavior

---

**Next Page Spec**: `pages/03-service-detail.md`
