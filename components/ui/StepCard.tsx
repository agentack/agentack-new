'use client'

interface StepCardProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative h-full">
      <div className="relative flex h-full flex-col rounded-card border border-border-soft bg-gradient-to-b from-lifted to-panel px-6 py-5 transition-all duration-200 hover:border-accent-border">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono font-normal text-[12px] text-ghost tabular-nums">
            {String(step).padStart(2, '0')}
          </span>
          <span className="h-px flex-1 bg-accent-border-soft" />
        </div>
        <h3 className="font-body font-medium text-[16px] text-bright">
          {title}
        </h3>
        <p className="font-body font-normal text-[14px] leading-[1.65] text-muted mt-2">
          {description}
        </p>
        <span className="mt-4 inline-flex w-6 h-6 items-center justify-center rounded-full border border-accent-border text-accent font-mono text-[11px]">
          {step}
        </span>
      </div>
    </div>
  )
}