'use client'

import { useLanguage } from '@/lib/i18n/context'

interface IcpPainPointsSectionProps {
  painPoints: string[]
  whatWeSolve: string
}

export function IcpPainPointsSection({ painPoints, whatWeSolve }: IcpPainPointsSectionProps) {
  const { t } = useLanguage()
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display font-medium text-[42px] leading-[1.15] tracking-[-0.02em] text-frost-white mb-6">
              {t.sections.icpPainPoints.heading}
            </h2>
            <ul className="space-y-4">
              {painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-danger mt-2 shrink-0" />
                  <span className="font-body text-[16px] text-sage-mid">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-medium text-[42px] leading-[1.15] tracking-[-0.02em] text-frost-white mb-6">
              {t.sections.icpPainPoints.howWeHelp}
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-sage-mid">
              {whatWeSolve}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
