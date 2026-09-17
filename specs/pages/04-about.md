# About Page Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Assigned To**: [Team Member 2]  
**Status**: Ready for Implementation

---

## Overview

**Route**: `/about`  
**Sections**: 6  
**Dependencies**: Shared specs + Navbar + Footer

---

## SEO Metadata

```typescript
export const metadata: Metadata = {
  title: 'About — [Agency Name]',
  description: 'We believe most business processes shouldn\'t require humans. Learn about our mission, approach, and the team behind [Agency Name].',
}
```

---

## Section Order

| # | Component | Background | Padding | Data Source |
|---|-----------|------------|---------|-------------|
| 1 | Navbar | `#000000` | — | Layout |
| 2 | MissionHeroSection | `#000000` (flat) | `py-[140px]` top, `pb-[80px]` | Static |
| 3 | OurApproachSection | `#080808` | `py-[100px]` | Static |
| 4 | FounderSection | `#000000` | `py-[100px]` | Sanity teamMember |
| 5 | AboutCTASection | `#080808` | `py-[80px]` | Static |
| 6 | Footer | `#050505` | — | Layout |

---

## Section 2: MissionHeroSection

**Note**: Flat background (NO gradient — intentional design choice)

```typescript
export function MissionHeroSection() {
  return (
    <section className="bg-black-base pt-[140px] pb-[80px]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <h1 className="font-display font-medium text-[52px] leading-[1.15] text-frost-white mb-6">
          About Us
        </h1>
        <p className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px] mx-auto">
          We believe most business processes shouldn't require humans. Our mission is to automate the mundane so your team can focus on what truly matters.
        </p>
      </div>
    </section>
  )
}
```

---

## Section 3: OurApproachSection

**Layout**: 3-col FeatureCard grid, left-aligned heading

```typescript
export function OurApproachSection() {
  const features = [
    {
      icon: <Search className="w-4 h-4" />,
      title: 'Audit First',
      description: 'We never automate a broken process. First we redesign, then we automate.',
      accent: 'teal' as const,
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: 'Documentation Included',
      description: 'Every build ships with comprehensive documentation your team can actually use.',
      accent: 'teal' as const,
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: 'Async-First Delivery',
      description: 'We fit your schedule, not ours. No forced meetings, no sales pressure.',
      accent: 'teal' as const,
    },
  ]

  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Our Approach"
          heading="How We're Different"
          subtitle="We don't just build automation. We redesign your workflows from the ground up."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Section 4: FounderSection

**Layout**: 2-col (photo left, bio right)

```typescript
import Image from 'next/image'

export function FounderSection({ founder }) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Left: Photo */}
          <div className="relative aspect-[4/5] rounded-card overflow-hidden">
            <Image
              src={founder.photo.asset.url}
              alt={founder.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Bio */}
          <div>
            <h2 className="font-display font-medium text-[42px] text-frost-white mb-4">
              {founder.name}
            </h2>
            <p className="font-body font-medium text-[16px] text-teal-primary mb-6">
              {founder.role}
            </p>
            <p className="font-body font-normal text-[16px] leading-[1.7] text-sage-mid mb-6">
              {founder.bio}
            </p>
            {founder.linkedinUrl && (
              <a
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-primary text-[14px] underline underline-offset-[3px]"
              >
                Connect on LinkedIn →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## Section 5: AboutCTASection

```typescript
export function AboutCTASection() {
  return (
    <section className="bg-black-2 py-[80px]">
      <div className="max-w-[600px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <h2 className="font-display font-medium text-[38px] text-frost-white mb-4">
          Want to work with us?
        </h2>
        <p className="font-body font-normal text-[16px] text-sage-mid mb-8">
          We're currently accepting new projects. Book a free strategy call to discuss your automation needs.
        </p>
        <Button variant="section-cta">
          Book a free strategy call
        </Button>
      </div>
    </section>
  )
}
```

---

## Implementation Checklist

- [ ] Create `app/about/page.tsx`
- [ ] Fetch founder data from Sanity
- [ ] Create all 4 section components
- [ ] Optimize founder photo with next/image
- [ ] Test responsive behavior
- [ ] Test 2-col layout on founder section

---

## Dependencies

- `shared/01-design-system.md` ✅
- `shared/02-component-library.md` ✅
- `shared/03-sanity-schemas.md` ✅
- `features/01-navbar.md` ✅
- `features/02-footer.md` ✅

---

**All Page Specs Complete**
