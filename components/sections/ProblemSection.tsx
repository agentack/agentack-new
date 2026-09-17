'use client'

import { useLanguage } from '@/lib/i18n/context'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface ProblemSectionProps {
  heading: string
  subtitle: string
  painPoints: string[]
  statement: string
  subStatement: string
}

export function ProblemSection({
  heading,
  subtitle,
  painPoints,
  statement,
  subStatement,
}: ProblemSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="relative bg-void py-[110px] overflow-hidden">
      <div className="absolute top-0 right-0 w-[360px] h-[360px] glow-orb bg-accent/8 opacity-60" />

      <div className="relative max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px]">
          {/* Left Column: Heading + Pain Points */}
          <div>
            <SectionHeading
              eyebrow={t.sections.problem.eyebrow}
              heading={heading}
              subtitle={subtitle}
              align="left"
            />

            <ul className="mt-9 space-y-4">
              {painPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 rounded-card border border-border-soft bg-panel px-5 py-4 transition-colors duration-200 hover:border-accent-border"
                >
                  <span className="w-5 h-5 mt-0.5 rounded-[7px] bg-accent-tint border border-accent-border-soft flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-body font-normal text-[16px] text-muted leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Statement */}
          <div className="flex flex-col justify-center">
            <div className="relative rounded-card bg-gradient-to-b from-lifted to-panel border border-accent-border-soft p-10">
              <div className="absolute top-6 right-8 font-display text-[96px] leading-none text-accent opacity-10 select-none">
                &ldquo;
              </div>
              <p className="font-display font-medium text-[26px] leading-[1.4] text-bright">
                {statement}
              </p>
              <div className="mt-6 h-px w-16 bg-accent-border" />
              <p className="font-body font-normal text-[16px] text-muted mt-6">
                {subStatement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}