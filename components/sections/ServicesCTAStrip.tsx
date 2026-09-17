'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function ServicesCTAStrip() {
  const { t } = useLanguage()
  return (
    <section className="bg-green-tinted py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display font-medium text-[38px] leading-[1.2] text-frost-white mb-2">
              {t.sections.servicesCtaStrip.heading}
            </h2>
            <p className="font-body font-normal text-[17px] text-sage-mid">
              {t.sections.servicesCtaStrip.subtext}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button variant="section-cta" href="/contact">
              {t.sections.servicesCtaStrip.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
