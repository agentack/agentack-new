'use client'

import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  variant: 'green' | 'teal' | 'sage' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  children: React.ReactNode
  className?: string
}

export function Badge({ variant, size = 'md', dot, children, className }: BadgeProps) {
  const variantStyles = {
    green: 'bg-accent-tint text-accent-strong border-accent-border',
    teal: 'bg-[rgba(244,199,90,0.12)] text-teal-primary border-[rgba(244,199,90,0.28)]',
    sage: 'bg-[rgba(58,47,120,0.35)] text-soft border-[rgba(90,58,216,0.3)]',
    outline: 'bg-transparent text-muted border-[rgba(90,58,216,0.3)]',
  }

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-[13px] px-3 py-1',
  }

  const dotColors = {
    green: 'bg-azure',
    teal: 'bg-teal-primary',
    sage: 'bg-soft',
    outline: 'bg-muted',
  }

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 border rounded-pill',
      variantStyles[variant],
      sizeStyles[size],
      className
    )}>
      {dot && (
        <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[variant])} />
      )}
      {children}
    </span>
  )
}