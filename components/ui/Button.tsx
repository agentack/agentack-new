'use client'

import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'hero-cta' | 'ghost-paired' | 'navbar-cta' | 'section-cta' | 'form-submit' | 'card-link' | 'text-link'
  isLoading?: boolean
  children: React.ReactNode
  href?: string
  className?: string
}

const variantStyles = {
  'hero-cta': 'bg-accent text-accent-deep font-medium text-[16px] tracking-[0.01em] px-[36px] py-[15px] rounded-btn-hero shadow-glow hover:bg-accent-strong hover:shadow-glow active:scale-[0.98] disabled:bg-[#24175C] disabled:text-[#948FC8] disabled:shadow-none disabled:cursor-not-allowed transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'ghost-paired': 'bg-transparent text-soft font-medium text-[16px] px-[32px] py-[14px] rounded-btn-hero border border-accent-border hover:border-accent hover:text-bright hover:bg-accent-tint active:scale-[0.98] transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'navbar-cta': 'bg-accent text-accent-deep font-medium text-[15px] tracking-[0.01em] px-[18px] py-[9px] rounded-btn-nav hover:bg-accent-strong transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'section-cta': 'bg-accent-tint text-accent font-medium text-[15px] tracking-[0.01em] px-[30px] py-[13px] rounded-btn-hero border border-accent-border hover:bg-[rgba(122,90,240,0.16)] hover:border-accent-strong hover:text-accent-strong active:scale-[0.98] transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'form-submit': 'bg-accent text-accent-deep font-medium text-[15px] tracking-[0.01em] px-[13px] py-[13px] rounded-btn-form w-full hover:bg-accent-strong disabled:bg-[#24175C] disabled:text-[#948FC8] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'card-link': 'bg-transparent text-teal-primary font-medium text-[13px] border-b border-[rgba(244,199,90,0.4)] pb-[1px] hover:text-[#FFD77A] hover:border-[rgba(244,199,90,0.7)] transition-all duration-150 ease inline-flex items-center justify-center gap-2',
  'text-link': 'bg-transparent text-ghost font-normal text-[13px] underline underline-offset-[3px] decoration-[rgba(108,113,137,0.4)] inline-flex items-center justify-center gap-2',
}

const dangerTextLinkStyle = 'bg-transparent text-red-danger font-normal text-[13px] underline underline-offset-[3px] decoration-[rgba(163,45,45,0.4)] inline-flex items-center justify-center gap-2'

export function Button({ variant, isLoading, children, href, className, disabled, ...props }: ButtonProps) {
  const isDisabled = disabled || isLoading
  const baseClasses = cn(
    variantStyles[variant],
    isDisabled && 'cursor-not-allowed',
    className
  )

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </>
  )

  // Render as anchor tag if href is provided (except for card-link and text-link which have special handling)
  if (href && variant !== 'text-link' && variant !== 'card-link') {
    return (
      <Link href={href} className={baseClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    )
  }

  // Render as anchor tag for card-link and text-link variants (without isLoading spinner)
  if (href && (variant === 'text-link' || variant === 'card-link')) {
    return (
      <Link href={href} className={baseClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} disabled={isDisabled} {...props}>
      {content}
    </button>
  )
}

// Danger variant for text-link (destructive actions like Cancel, Delete)
export function DangerTextLink({ children, href, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  const classes = cn(dangerTextLinkStyle, className)

  if (href) {
    return (
      <Link href={href} className={classes} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  )
}