'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

interface AboutCTASectionProps {
  heading?: string
  subtext?: string
  ctaLabel?: string
}

export function AboutCTASection({
  heading: _heading,
  subtext: _subtext,
  ctaLabel: _ctaLabel,
}: AboutCTASectionProps) {
  const { t } = useLanguage()
  const heading = _heading ?? t.sections.aboutCta.heading
  const subtext = _subtext ?? t.sections.aboutCta.subtext
  const ctaLabel = _ctaLabel ?? t.sections.aboutCta.ctaLabel
  return (
    <section className="bg-black-2 py-[80px]">
      <div className="max-w-[600px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <SectionHeading
          heading={heading}
          subtitle={subtext}
          align="center"
        />

        <div className="mt-8">
          <Button variant="section-cta" href="/contact">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
