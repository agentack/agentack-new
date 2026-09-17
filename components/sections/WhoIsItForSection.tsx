'use client'

import { useLanguage } from '@/lib/i18n/context'
import { CheckCircle } from 'lucide-react'

interface WhoIsItForSectionProps {
  items: string[]
  statement?: string
}

export function WhoIsItForSection({
  items,
  statement: _statement,
}: WhoIsItForSectionProps) {
  const { t } = useLanguage()
  const statement = _statement ?? t.sections.whoIsItFor.defaultStatement
  return (
    <section className="bg-black-base py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          {/* Left: Checklist */}
          <div>
            <h2 className="font-display font-medium text-[42px] leading-[1.2] tracking-[-0.01em] text-frost-white mb-6">
              {t.sections.whoIsItFor.heading}
            </h2>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body font-normal text-[17px] leading-[1.7] text-sage-mid">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Statement */}
          <div className="flex flex-col justify-center">
            <div className="border-l-2 border-teal-primary pl-6">
              <p className="font-display text-[24px] leading-[1.4] text-frost-white">
                {statement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
