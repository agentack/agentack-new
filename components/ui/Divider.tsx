import { cn } from '@/lib/utils/cn'

interface DividerProps {
  label?: string
  color?: string
  className?: string
}

export function Divider({ label, color = 'rgba(90,58,216,0.18)', className }: DividerProps) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="flex-1 h-px" style={{ backgroundColor: color }} />
        <span className="text-ghost text-[12px] flex-shrink-0">{label}</span>
        <div className="flex-1 h-px" style={{ backgroundColor: color }} />
      </div>
    )
  }

  return (
    <div className={cn('w-full h-px', className)} style={{ backgroundColor: color }} />
  )
}
