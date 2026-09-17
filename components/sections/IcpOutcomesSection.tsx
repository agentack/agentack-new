'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface IcpOutcomesSectionProps {
  outcomes: string[]
}

export function IcpOutcomesSection({ outcomes }: IcpOutcomesSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow={t.sections.icpOutcomes.eyebrow}
          heading={t.sections.icpOutcomes.heading}
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="bg-surface-dark border border-border-dark rounded-card p-6 flex items-start gap-4"
            >
              <span className="w-8 h-8 rounded-full bg-green-primary/10 flex items-center justify-center text-green-primary font-display font-medium text-[15px] shrink-0">
                {i + 1}
              </span>
              <p className="font-body text-[15px] text-sage-mid leading-[1.7]">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
