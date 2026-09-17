'use client'

import { useCountUp } from '@/lib/hooks/useCountUp'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  decimals?: number
}

export function StatCard({ value, suffix, prefix, label, duration = 2000, decimals = 0 }: StatCardProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3, once: true })
  const { value: animatedValue } = useCountUp({
    end: value,
    duration,
    decimals,
    prefix,
    suffix,
    separator: ',',
    startOnMount: false,
  })

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-medium text-[44px] leading-[1] tracking-[-0.02em] text-accent-strong">
        {isVisible ? animatedValue : '0'}
      </div>
      <div className="font-body font-normal text-[14px] text-muted mt-2">
        {label}
      </div>
    </div>
  )
}