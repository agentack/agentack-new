import { cn } from '@/lib/utils/cn'

interface SectionProps {
  bg?: string
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}

const paddingClasses = {
  xl: 'py-[120px]',
  lg: 'py-[100px]',
  md: 'py-[80px]',
  sm: 'py-[60px]',
}

export function Section({ bg, paddingY = 'lg', className, children }: SectionProps) {
  return (
    <section className={cn(paddingClasses[paddingY], className)} style={{ backgroundColor: bg }}>
      {children}
    </section>
  )
}
