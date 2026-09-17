import { cn } from '@/lib/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, heading, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-accent font-medium text-[12px] uppercase tracking-[0.12em] mb-4">
          <span className="h-px w-8 bg-accent-border" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-accent-border" />}
        </div>
      )}
      <h2 className="font-display font-medium text-h2 text-bright mb-4 tracking-[-0.02em]">
        {heading}
      </h2>
      {subtitle && (
        <p className={cn(
          'font-body font-normal text-[17px] leading-[1.7] text-muted',
          align === 'center' ? 'mx-auto' : ''
        )} style={{ maxWidth: align === 'center' ? '600px' : 'none' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}