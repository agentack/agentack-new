'use client'

import { useLanguage } from '@/lib/i18n/context'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

interface ServiceCTASectionProps {
  serviceName: string
  ctaLabel?: string
  subtext?: string
}

export function ServiceCTASection({
  serviceName,
  ctaLabel: _ctaLabel,
  subtext: _subtext,
}: ServiceCTASectionProps) {
  const { t } = useLanguage()
  const ctaLabel = _ctaLabel ?? t.sections.serviceCta.ctaLabel
  const subtext = _subtext ?? t.sections.serviceCta.subtext

  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[600px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <SectionHeading
          heading={t.sections.serviceCta.heading.replace('{name}', serviceName.toLowerCase())}
          subtitle={subtext}
          align="center"
        />

        <div className="mt-8">
          <Button variant="section-cta" href="/contact">
            {ctaLabel}
          </Button>
        </div>

        <Link
          href="/services"
          className="inline-block mt-6 text-accent text-[13px] font-medium hover:text-accent-strong transition-colors"
        >
          {t.sections.serviceCta.backLink}
        </Link>
      </div>
    </section>
  )
}
