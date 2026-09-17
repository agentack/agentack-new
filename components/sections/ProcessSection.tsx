'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StepCard } from '@/components/ui/StepCard'

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessSectionProps {
  steps: ProcessStep[]
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow={t.sections.process.eyebrow}
          heading={t.sections.process.heading}
          subtitle={t.sections.process.subtitle}
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
