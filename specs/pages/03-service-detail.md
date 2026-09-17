# Service Detail Page Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Assigned To**: [Team Member 2]  
**Status**: Ready for Implementation

---

## Overview

**Route**: `/services/[slug]`  
**Sections**: 7  
**Type**: Dynamic (powered by Sanity)

---

## SEO Metadata

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)
  return {
    title: `${service.name} — [Agency Name]`,
    description: service.seoDescription,
  }
}
```

---

## Section Order

| # | Component | Background | Padding | Data Source |
|---|-----------|------------|---------|-------------|
| 1 | Navbar | `#000000` | — | Layout |
| 2 | ServiceHeroSection | Gradient | `py-[140px]` top, `pb-[80px]` | Sanity service |
| 3 | WhatIsIncludedSection | `#080808` | `py-[80px]` | Sanity service.features |
| 4 | WhoIsItForSection | `#000000` | `py-[80px]` | Sanity service.whoIsItFor |
| 5 | ToolsWeUseSection | `#050505` | `py-[60px]` | Sanity service.toolsUsed |
| 6 | ServiceCTASection | `#000000` | `py-[100px]` | Static |
| 7 | Footer | `#050505` | — | Layout |

---

## Data Fetching

```typescript
// app/services/[slug]/page.tsx
import { client } from '@/lib/sanity/client'
import { serviceBySlugQuery } from '@/lib/sanity/queries'

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await client.fetch(serviceBySlugQuery, { slug: params.slug })
  
  if (!service) {
    notFound()
  }
  
  return (
    <>
      <ServiceHeroSection data={service} />
      <WhatIsIncludedSection features={service.features} />
      <WhoIsItForSection items={service.whoIsItFor} />
      <ToolsWeUseSection tools={service.toolsUsed} />
      <ServiceCTASection serviceName={service.name} />
    </>
  )
}
```

---

## Section 2: ServiceHeroSection

**Layout**: LEFT-aligned (not centered like homepage)

```typescript
export function ServiceHeroSection({ data }) {
  return (
    <section className="relative pt-[140px] pb-[80px] bg-gradient-to-br from-black-base via-[#001A0D] to-black-base">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        {/* Breadcrumb */}
        <Link href="/services" className="text-teal-primary text-[12px] mb-4 inline-block">
          ← All services
        </Link>
        
        <Badge variant="green" className="mb-4">{data.eyebrow || 'Service'}</Badge>
        
        <h1 className="font-display font-medium text-[52px] leading-[1.15] text-frost-white mb-6">
          {data.heroHeadline}
        </h1>
        
        <p className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px]">
          {data.heroSubtitle}
        </p>
      </div>
    </section>
  )
}
```

---

## Section 3: WhatIsIncludedSection

**Layout**: 3-col FeatureCard grid

```typescript
export function WhatIsIncludedSection({ features }) {
  return (
    <section className="bg-black-2 py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="What's Included"
          heading="Everything you need to succeed"
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

## Section 4: WhoIsItForSection

**Layout**: 2-col (checklist left, statement right)

```typescript
export function WhoIsItForSection({ items }) {
  return (
    <section className="bg-black-base py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          {/* Left: Checklist */}
          <div>
            <h2 className="font-display font-medium text-[42px] text-frost-white mb-6">
              This is for you if...
            </h2>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body font-normal text-[16px] text-sage-mid">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right: Statement */}
          <div className="border-l-2 border-teal-primary pl-6">
            <p className="font-display text-[24px] leading-[1.4] text-frost-white">
              "Most businesses come to us when they're growing fast but their processes can't keep up."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## Section 5: ToolsWeUseSection

```typescript
export function ToolsWeUseSection({ tools }) {
  const logos = tools?.map(name => ({ name })) || []
  
  return (
    <section className="bg-black-3 py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <LogoStrip logos={logos} label="Tools we use" speed={30} />
      </div>
    </section>
  )
}
```

---

## Section 6: ServiceCTASection

```typescript
export function ServiceCTASection({ serviceName }) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[600px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <h2 className="font-display font-medium text-[38px] text-frost-white mb-4">
          Ready to automate {serviceName.toLowerCase()}?
        </h2>
        <p className="font-body font-normal text-[16px] text-sage-mid mb-8">
          Book a free strategy call to discuss your specific needs.
        </p>
        <Button variant="section-cta">
          Book a free strategy call
        </Button>
        <Link href="/services" className="block mt-6 text-teal-primary text-[12px]">
          ← Back to all services
        </Link>
      </div>
    </section>
  )
}
```

---

## Implementation Checklist

- [ ] Create `app/services/[slug]/page.tsx`
- [ ] Implement generateMetadata
- [ ] Fetch service data from Sanity
- [ ] Create all 5 section components
- [ ] Handle 404 for invalid slugs
- [ ] Test with real Sanity data
- [ ] Test responsive behavior

---

**Next Page Spec**: `pages/04-about.md`
