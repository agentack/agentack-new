'use client'

import { useLanguage } from '@/lib/i18n/context'
import { CheckCircle } from 'lucide-react'

export function TrustSignalsSection() {
  const { t } = useLanguage()
  const TRUST_SIGNALS = [
    t.sections.trustSignals.reply,
    t.sections.trustSignals.noPressure,
    t.sections.trustSignals.privacy,
  ]
  return (
    <section className="bg-black-base py-[48px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-wrap justify-center gap-8">
          {TRUST_SIGNALS.map((signal, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0" />
              <span className="font-body font-normal text-[15px] leading-[1.6] text-sage-mid">
                {signal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
