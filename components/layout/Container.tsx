import { cn } from '@/lib/utils/cn'

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

const sizeClasses = {
  sm: 'max-w-[640px]',
  md: 'max-w-[800px]',
  lg: 'max-w-[1200px]',
}

export function Container({ size = 'lg', as: Component = 'div', className, children }: ContainerProps) {
  return (
    <Component className={cn(
      'mx-auto px-[24px] md:px-[40px] lg:px-[80px]',
      sizeClasses[size],
      className
    )}>
      {children}
    </Component>
  )
}
