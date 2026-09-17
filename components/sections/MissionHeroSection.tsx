'use client'

import { useLanguage } from '@/lib/i18n/context'
import { Badge } from '@/components/ui/Badge'

interface MissionHeroSectionProps {
  heading?: string
  subtitle?: string
}

export function MissionHeroSection({
  heading: _heading,
  subtitle: _subtitle,
}: MissionHeroSectionProps) {
  const { t } = useLanguage()
  const heading = _heading ?? t.sections.missionHero.heading
  const subtitle = _subtitle ?? t.sections.missionHero.subtitle
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-0 via-navy-1 to-navy-2 pt-[160px] pb-[100px]">
      <div className="absolute inset-0 grid-pattern" />
      <div className="glow-orb w-[380px] h-[380px] bg-accent/12 -top-24 right-0" />

      <div className="relative max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <Badge variant="green" className="mb-6">Agentack</Badge>
        <h1 className="font-display font-medium text-[34px] sm:text-[44px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-bright mb-6">
          {heading}
        </h1>
        <p className="font-body font-normal text-[19px] leading-[1.75] text-muted max-w-[580px] mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  )
}