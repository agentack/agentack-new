# Homepage Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Assigned To**: [Team Member 1]  
**Status**: Ready for Implementation

---

## Overview

**Route**: `/`  
**Sections**: 10  
**Dependencies**: All shared specs + Navbar + Footer

---

## SEO Metadata

**File**: `app/page.tsx`

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Agency Name] — AI Automation for Growing Businesses',
  description: 'We build custom AI automation systems for mid-size businesses. Eliminate manual work, scale operations, and free your team to focus on what matters.',
  openGraph: {
    title: '[Agency Name] — AI Automation for Growing Businesses',
    description: 'We build custom AI automation systems for mid-size businesses.',
    images: ['/og-image.png'],
  },
}
```

---

## Section Order

| # | Component | Background | Padding | Data Source |
|---|-----------|------------|---------|-------------|
| 1 | Navbar | `#000000` | — | Layout |
| 2 | HeroSection | Gradient | `pt-[160px] pb-[120px]` | Sanity siteSettings |
| 3 | LogoStripSection | `#050505` | `py-[60px]` | Static |
| 4 | ProblemSection | `#000000` | `py-[100px]` | Sanity siteSettings |
| 5 | ServicesOverviewSection | `#080808` | `py-[100px]` | Sanity services |
| 6 | ProcessSection | `#000000` | `py-[100px]` | Sanity siteSettings |
| 7 | StatsSection | `#0D1A12` | `py-[60px]` | Sanity siteSettings |
| 8 | WhyUsSection | `#080808` | `py-[100px]` | Sanity siteSettings |
| 9 | FinalCTASection | `#000000` | `py-[120px]` | Sanity siteSettings |
| 10 | Footer | `#050505` | — | Layout |

---

## Section 1: Navbar

**Component**: `components/layout/Navbar.tsx`  
**Spec**: `features/01-navbar.md`

---

## Section 2: HeroSection

**Component**: `components/sections/HeroSection.tsx`  
**Background**: Gradient `#000` → `#001A0D` → `#003320` (135deg)  
**Min Height**: 100vh

### Data (from Sanity siteSettings)

```typescript
{
  eyebrow: "AI Automation Agency",
  headline: siteSettings.heroHeadline,
  subtitle: siteSettings.heroSubtitle,
  primaryCtaLabel: siteSettings.heroPrimaryCtaLabel,
  secondaryCtaLabel: siteSettings.heroSecondaryCtaLabel,
}
```

### Implementation

```typescript
'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  data: {
    eyebrow: string
    headline: string
    subtitle: string
    primaryCtaLabel: string
    secondaryCtaLabel: string
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-[160px] pb-[120px] bg-gradient-to-br from-black-base via-[#001A0D] to-[#003320]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Badge variant="green" className="rounded-pill mb-4">
            {data.eyebrow}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-[64px] leading-[1.1] tracking-[-0.02em] text-frost-white mb-6"
        >
          {data.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px] mx-auto mb-8"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button variant="hero-cta">
            {data.primaryCtaLabel}
          </Button>
          <Button variant="ghost-paired">
            {data.secondaryCtaLabel}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-sage-dark animate-bounce" />
      </motion.div>
    </section>
  )
}
```

---

## Section 3: LogoStripSection

**Component**: `components/sections/LogoStripSection.tsx`  
**Background**: `#050505`

```typescript
import { LogoStrip } from '@/components/ui/LogoStrip'

const logos = [
  { name: 'Zapier' },
  { name: 'Make' },
  { name: 'OpenAI' },
  { name: 'Anthropic' },
  { name: 'Airtable' },
  { name: 'Notion' },
  { name: 'Slack' },
  { name: 'HubSpot' },
]

export function LogoStripSection() {
  return (
    <section className="bg-black-3 py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <LogoStrip logos={logos} label="Technologies we work with" speed={30} />
      </div>
    </section>
  )
}
```

---

## Section 4: ProblemSection

**Component**: `components/sections/ProblemSection.tsx`  
**Background**: `#000000`

### Data (from Sanity siteSettings)

```typescript
{
  heading: "The Problem",
  subtitle: "Most businesses are stuck with manual processes.",
  painPoints: siteSettings.problemPainPoints,
  statement: siteSettings.problemStatement,
  subStatement: "We help you fix that.",
}
```

---

## Section 5: ServicesOverviewSection

**Component**: `components/sections/ServicesOverviewSection.tsx`  
**Background**: `#080808`

### Data (from Sanity services query)

```typescript
{
  services: services.map(s => ({
    icon: <Icon name={s.icon} />,
    title: s.name,
    description: s.tagline,
    outcomes: s.outcomes,
    href: `/services/${s.slug.current}`,
    timeline: s.timeline,
  }))
}
```

---

## Section 6: ProcessSection

**Component**: `components/sections/ProcessSection.tsx`  
**Background**: `#000000`

### Data (from Sanity siteSettings.processSteps)

```typescript
{
  steps: siteSettings.processSteps.map(s => ({
    step: s.step,
    title: s.title,
    description: s.description,
  }))
}
```

---

## Section 7: StatsSection

**Component**: `components/sections/StatsSection.tsx`  
**Background**: `#0D1A12`

### Data (from Sanity siteSettings.stats)

```typescript
{
  stats: siteSettings.stats.map(s => ({
    value: s.value,
    suffix: s.suffix,
    prefix: s.prefix,
    label: s.label,
    duration: s.duration,
  }))
}
```

---

## Section 8: WhyUsSection

**Component**: `components/sections/WhyUsSection.tsx`  
**Background**: `#080808`

### Data (from Sanity siteSettings.differentiators)

```typescript
{
  features: siteSettings.differentiators.map(d => ({
    icon: <Icon name={d.icon} />,
    title: d.title,
    description: d.description,
  }))
}
```

---

## Section 9: FinalCTASection

**Component**: `components/sections/FinalCTASection.tsx`  
**Background**: `#000000`

### Data (from Sanity siteSettings)

```typescript
{
  heading: siteSettings.finalCtaHeadline,
  subtext: siteSettings.finalCtaSubtext,
  ctaLabel: "Book a free strategy call",
  ctaHref: "/contact",
  microText: siteSettings.finalCtaMicroText,
}
```

---

## Section 10: Footer

**Component**: `components/layout/Footer.tsx`  
**Spec**: `features/02-footer.md`

---

## Implementation Checklist

- [ ] Create `app/page.tsx` with metadata
- [ ] Fetch data from Sanity (siteSettings + services)
- [ ] Create all 8 section components
- [ ] Implement HeroSection with animations
- [ ] Implement LogoStripSection with marquee
- [ ] Implement ProblemSection with 2-col layout
- [ ] Implement ServicesOverviewSection with 3-col grid
- [ ] Implement ProcessSection with horizontal steps
- [ ] Implement StatsSection with useCountUp
- [ ] Implement WhyUsSection with feature cards
- [ ] Implement FinalCTASection
- [ ] Test responsive behavior
- [ ] Test animations
- [ ] Verify background alternation

---

## Dependencies

- `shared/01-design-system.md` ✅
- `shared/02-component-library.md` ✅
- `shared/03-sanity-schemas.md` ✅
- `shared/04-custom-hooks.md` ✅
- `features/01-navbar.md` ✅
- `features/02-footer.md` ✅

---

**Next Page Spec**: `pages/02-services-overview.md`
