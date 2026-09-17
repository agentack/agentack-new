'use client'

import { useLanguage } from '@/lib/i18n/context'
import { LogoStrip } from '@/components/ui/LogoStrip'

interface ToolsWeUseSectionProps {
  tools?: string[]
  label?: string
}

export function ToolsWeUseSection({
  tools = [],
  label: _label,
}: ToolsWeUseSectionProps) {
  const { t } = useLanguage()
  const label = _label ?? t.sections.toolsWeUse.label
  const logos = tools.map((name) => ({ name }))

  if (logos.length === 0) {
    return null
  }

  return (
    <section className="bg-black-3 py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <LogoStrip logos={logos} label={label} speed={30} />
      </div>
    </section>
  )
}
