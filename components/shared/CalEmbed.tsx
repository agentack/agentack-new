'use client'

import { useLanguage } from '@/lib/i18n/context'

interface CalEmbedProps {
  calLink?: string
  className?: string
}

export function CalEmbed({ calLink, className }: CalEmbedProps) {
  const { t } = useLanguage()
  const embedUrl = calLink || process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com'

  return (
    <div className={className}>
      <iframe
        src={embedUrl}
        className="w-full h-[600px] rounded-card border border-border-dark"
        title={t.ui.scheduleCall}
        loading="lazy"
        style={{ background: 'transparent' }}
      />
    </div>
  )
}
