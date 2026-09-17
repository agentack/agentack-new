'use client'

import { useLanguage } from '@/lib/i18n/context'
import { LogoStrip } from '@/components/ui/LogoStrip'

const LOGOS = [
  { name: 'Zapier' },
  { name: 'Make' },
  { name: 'OpenAI' },
  { name: 'Anthropic' },
  { name: 'Airtable' },
  { name: 'Notion' },
  { name: 'Slack' },
  { name: 'HubSpot' },
]

export function LogoStripSection() {
  const { t } = useLanguage()
  return (
    <section className="bg-abyss py-[56px] border-b border-accent-border-soft">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <LogoStrip logos={LOGOS} label={t.sections.logoStrip.label} speed={30} />
      </div>
    </section>
  )
}