'use client'

import { useLanguage } from '@/lib/i18n/context'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from './Badge'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  outcomes: string[]
  href: string
  timeline?: string
}

export function ServiceCard({ icon, title, description, outcomes, href, timeline }: ServiceCardProps) {
  const { t } = useLanguage()
  return (
    <div className="group relative flex h-full flex-col bg-panel border border-border-soft rounded-card p-6 shadow-card transition-all duration-200 hover:border-accent-border hover:-translate-y-1">
      {timeline && (
        <div className="flex justify-end mb-2">
          <Badge variant="sage" size="sm">{timeline}</Badge>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-[10px] bg-accent-tint border border-accent-border-soft flex items-center justify-center text-accent-strong">
          {icon}
        </div>
      </div>

      <h3 className="font-body font-medium text-[17px] text-bright">
        {title}
      </h3>

      <p className="font-body font-normal text-[14px] leading-[1.6] text-muted mt-1">
        {description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
            <span className="font-body font-normal text-[13px] text-muted leading-relaxed">{outcome}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-teal-primary font-medium text-[13px] border-b border-[rgba(244,199,90,0.4)] pb-[1px] group-hover:text-[#FFD77A] group-hover:border-[rgba(244,199,90,0.7)] transition-colors"
        >
          {t.ui.learnMore}
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}