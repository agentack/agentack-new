# Component Library Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

This spec defines all reusable UI components. Team members building pages will import these components.

**Dependencies**: 
- `shared/01-design-system.md` (MUST be completed first)
- `shared/04-custom-hooks.md` (for animated components)

---

## 1. Badge Component

**File**: `components/ui/Badge.tsx`

### Props

```typescript
interface BadgeProps {
  variant: 'green' | 'teal' | 'sage' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  children: React.ReactNode
  className?: string
}
```

### Visual Specs

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| green | `rgba(0,255,136,0.12)` | `#00C46A` | `rgba(0,255,136,0.25)` |
| teal | `rgba(0,229,204,0.1)` | `#00E5CC` | `rgba(0,229,204,0.2)` |
| sage | `rgba(58,74,66,0.4)` | `#C8D4CE` | `#3A4A42` |
| outline | transparent | `#8A9A94` | `#3A4A42` |

### Size Variants

| Size | Font | Padding | Radius |
|------|------|---------|--------|
| sm | 10px | 2px 8px | 4px |
| md | 12px | 4px 12px | 4px |
| pill | 12px | 4px 14px | 999px |

### Implementation

```typescript
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
    green: 'bg-[rgba(0,255,136,0.12)] text-[#00C46A] border-[rgba(0,255,136,0.25)]',
    teal: 'bg-[rgba(0,229,204,0.1)] text-teal-primary border-[rgba(0,229,204,0.2)]',
    sage: 'bg-[rgba(58,74,66,0.4)] text-sage-light border-sage-dark',
    outline: 'bg-transparent text-sage-mid border-sage-dark',
  }

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-[12px] px-3 py-1',
  }

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 border rounded-badge',
      variantStyles[variant],
      sizeStyles[size],
      className
    )}>
      {dot && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full',
          variant === 'green' ? 'bg-[#00C46A]' :
          variant === 'teal' ? 'bg-teal-primary' :
          'bg-sage-light'
        )} />
      )}
      {children}
    </span>
  )
}
```

### Usage Examples

```tsx
<Badge variant="green" dot>AI Automation Agency</Badge>
<Badge variant="teal">Service</Badge>
<Badge variant="sage">2–3 weeks</Badge>
<Badge variant="green" size="sm" className="rounded-pill">New</Badge>
```

---

## 2. SectionHeading Component

**File**: `components/ui/SectionHeading.tsx`

### Props

```typescript
interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}
```

### Visual Specs

| Element | Font | Color | Margin |
|---------|------|-------|--------|
| Eyebrow | 11px / 500 / uppercase | `#00E5CC` | mb-3 (12px) |
| Heading | Syne 42px / 500 | `#F0F2F0` | mb-4 (16px) |
| Subtitle | Inter 16px / 400 | `#8A9A94` | — |
| Subtitle Max Width | — | — | 560px |

### Implementation

```typescript
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
        <div className="text-teal-primary font-medium text-[11px] uppercase tracking-[0.08em] mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display font-medium text-[42px] leading-[1.2] tracking-[-0.01em] text-frost-white mb-4">
        {heading}
      </h2>
      {subtitle && (
        <p className={cn(
          'font-body font-normal text-[16px] leading-[1.7] text-sage-mid',
          align === 'center' ? 'mx-auto' : ''
        )} style={{ maxWidth: align === 'center' ? '560px' : 'none' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

---

## 3. ServiceCard Component

**File**: `components/ui/ServiceCard.tsx`

### Props

```typescript
interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  outcomes: string[]
  href: string
  timeline?: string
}
```

### Visual Specs

| Property | Value |
|----------|-------|
| Background | `#111714` |
| Border | 0.5px solid `#1E2E26` |
| Border Radius | 12px |
| Padding | 24px |
| Hover Border | `#3A4A42` |

### Implementation

```typescript
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from './Badge'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  outcomes: string[]
  href: string
  timeline?: string
}

export function ServiceCard({ icon, title, description, outcomes, href, timeline }: ServiceCardProps) {
  return (
    <div className="bg-surface-dark border border-border-dark rounded-card p-6 hover:border-sage-dark transition-all duration-150 group">
      {timeline && (
        <div className="flex justify-end mb-2">
          <Badge variant="sage" size="sm">{timeline}</Badge>
        </div>
      )}
      
      <div className="w-8 h-8 rounded-btn-hero bg-[rgba(0,229,204,0.1)] flex items-center justify-center text-teal-primary">
        {icon}
      </div>

      <h3 className="font-body font-medium text-[16px] text-frost-white mt-3">
        {title}
      </h3>

      <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mt-1">
        {description}
      </p>

      <ul className="mt-4 space-y-2">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-primary mt-1.5 flex-shrink-0" />
            <span className="font-body font-normal text-[12px] text-sage-mid">{outcome}</span>
          </li>
        ))}
      </ul>

      <Link 
        href={href} 
        className="inline-flex items-center gap-1 text-teal-primary font-medium text-[12px] border-b border-[rgba(0,229,204,0.4)] pb-[1px] mt-5 group-hover:text-[#00FFE5] group-hover:border-[rgba(0,255,229,0.6)] transition-colors"
      >
        Learn more
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  )
}
```

---

## 4. FeatureCard Component

**File**: `components/ui/FeatureCard.tsx`

### Props

```typescript
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'green' | 'teal'
}
```

### Implementation

```typescript
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'green' | 'teal'
}

export function FeatureCard({ icon, title, description, accent = 'teal' }: FeatureCardProps) {
  const iconBg = accent === 'green' 
    ? 'bg-[rgba(0,255,136,0.1)]' 
    : 'bg-[rgba(0,229,204,0.1)]'
  const iconColor = accent === 'green' ? 'text-green-primary' : 'text-teal-primary'

  return (
    <div className="bg-surface-dark border border-border-dark rounded-card p-6">
      <div className={`w-7 h-7 rounded-btn-hero ${iconBg} flex items-center justify-center ${iconColor}`}>
        {icon}
      </div>
      <h3 className="font-body font-medium text-[14px] text-frost-white mt-3">
        {title}
      </h3>
      <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mt-1">
        {description}
      </p>
    </div>
  )
}
```

---

## 5. StepCard Component

**File**: `components/ui/StepCard.tsx`

### Props

```typescript
interface StepCardProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}
```

### Implementation

```typescript
interface StepCardProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}

export function StepCard({ step, title, description, isLast }: StepCardProps) {
  return (
    <div className="relative">
      <div className="border-l-2 border-green-primary rounded-r-lg bg-transparent px-5 py-4">
        <div className="font-mono font-normal text-[11px] text-sage-dark">
          STEP {step}
        </div>
        <h3 className="font-body font-medium text-[15px] text-frost-white mt-1">
          {title}
        </h3>
        <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mt-1">
          {description}
        </p>
      </div>
      
      {!isLast && (
        <div className="absolute top-1/2 left-full w-8 border-t border-dashed border-[#1E2E26] hidden lg:block" />
      )}
    </div>
  )
}
```

---

## 6. StatCard Component

**File**: `components/ui/StatCard.tsx`

### Props

```typescript
interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  decimals?: number
}
```

### Implementation

```typescript
'use client'

import { useCountUp } from '@/lib/hooks/useCountUp'
import { useRef } from 'react'

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  decimals?: number
}

export function StatCard({ value, suffix, prefix, label, duration = 2000, decimals = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { value: animatedValue } = useCountUp({
    end: value,
    duration,
    decimals,
    prefix,
    suffix,
    separator: ',',
  })

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-medium text-[42px] leading-[1] text-green-primary">
        {animatedValue}
      </div>
      <div className="font-body font-normal text-[13px] text-[#5A7068] mt-1.5">
        {label}
      </div>
    </div>
  )
}
```

---

## 7. Input Component

**File**: `components/ui/Input.tsx`

### Props

```typescript
interface InputProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  type?: string
  id: string
  register?: any
}
```

### Implementation

```typescript
interface InputProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  type?: string
  id: string
  register?: any
}

export function Input({ label, placeholder, error, disabled, type = 'text', id, register }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-body font-medium text-[12px] text-sage-mid mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
        className={`
          w-full bg-transparent border rounded-[7px] px-[14px] py-2.5
          font-body font-normal text-[13px] text-sage-light
          placeholder:text-sage-dark
          focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-[rgba(0,255,136,0.2)]
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-150
          ${error ? 'border-red-danger' : 'border-[#2A3A30]'}
        `}
      />
      {error && (
        <p className="text-red-danger text-[11px] mt-1">{error}</p>
      )}
    </div>
  )
}
```

---

## 8. Textarea Component

**File**: `components/ui/Textarea.tsx`

### Props

```typescript
interface TextareaProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  rows?: number
  id: string
  register?: any
}
```

### Implementation

```typescript
interface TextareaProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  rows?: number
  id: string
  register?: any
}

export function Textarea({ label, placeholder, error, disabled, rows = 4, id, register }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-body font-medium text-[12px] text-sage-mid mb-1.5">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
        className={`
          w-full bg-transparent border rounded-[7px] px-[14px] py-2.5
          font-body font-normal text-[13px] text-sage-light
          placeholder:text-sage-dark
          focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-[rgba(0,255,136,0.2)]
          disabled:opacity-40 disabled:cursor-not-allowed
          resize-y
          transition-all duration-150
          ${error ? 'border-red-danger' : 'border-[#2A3A30]'}
        `}
      />
      {error && (
        <p className="text-red-danger text-[11px] mt-1">{error}</p>
      )}
    </div>
  )
}
```

---

## 9. Button Component

**File**: `components/ui/Button.tsx`

### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'hero-cta' | 'ghost-paired' | 'navbar-cta' | 'section-cta' | 'form-submit' | 'card-link' | 'text-link'
  isLoading?: boolean
  children: React.ReactNode
  href?: string
  className?: string
}
```

### Implementation

```typescript
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
  'hero-cta': 'bg-green-primary text-green-dark font-medium text-[15px] tracking-[0.01em] px-[36px] py-[15px] rounded-btn-hero hover:bg-green-hover active:scale-[0.98] disabled:bg-[#003322] disabled:text-[#1A4A32]',
  'ghost-paired': 'bg-transparent text-sage-light font-medium text-[15px] px-[32px] py-[14px] rounded-btn-hero border border-sage-dark hover:border-sage-mid hover:text-frost-white active:scale-[0.98]',
  'navbar-cta': 'bg-green-primary text-green-dark font-medium text-[12px] tracking-[0.01em] px-[16px] py-[7px] rounded-btn-nav hover:bg-green-hover',
  'section-cta': 'bg-transparent text-green-primary font-medium text-[14px] tracking-[0.01em] px-[30px] py-[13px] rounded-btn-hero border border-[rgba(0,255,136,0.35)] hover:bg-[rgba(0,255,136,0.06)] hover:border-[rgba(0,255,136,0.6)] active:scale-[0.98]',
  'form-submit': 'bg-green-primary text-green-dark font-medium text-[14px] tracking-[0.01em] px-[13px] py-[13px] rounded-btn-form w-full hover:bg-green-hover disabled:bg-[#003322] disabled:text-[#1A4A32] disabled:opacity-50',
  'card-link': 'bg-transparent text-teal-primary font-medium text-[12px] border-b border-[rgba(0,229,204,0.4)] pb-[1px] hover:text-[#00FFE5] hover:border-[rgba(0,255,229,0.6)]',
  'text-link': 'bg-transparent text-[#5A7068] font-normal text-[12px] underline underline-offset-[3px] decoration-[rgba(90,112,104,0.4)]',
}

export function Button({ variant, isLoading, children, href, className, disabled, ...props }: ButtonProps) {
  const isDisabled = disabled || isLoading
  const baseClasses = cn(
    'transition-all duration-150 inline-flex items-center justify-center gap-2',
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

  if (href && variant !== 'text-link' && variant !== 'card-link') {
    return (
      <Link href={href} className={baseClasses} {...(props as any)}>
        {content}
      </Link>
    )
  }

  if (href && (variant === 'text-link' || variant === 'card-link')) {
    return (
      <Link href={href} className={baseClasses} {...(props as any)}>
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
```

---

## 10. Container Component

**File**: `components/layout/Container.tsx`

### Props

```typescript
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}
```

### Implementation

```typescript
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

export function Container({ size = 'md', as: Component = 'div', className, children }: ContainerProps) {
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
```

---

## 11. Section Component

**File**: `components/layout/Section.tsx`

### Props

```typescript
interface SectionProps {
  bg?: string
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}
```

### Implementation

```typescript
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
```

---

## 12. Divider Component

**File**: `components/ui/Divider.tsx`

### Props

```typescript
interface DividerProps {
  label?: string
  color?: string
  className?: string
}
```

### Implementation

```typescript
import { cn } from '@/lib/utils/cn'

interface DividerProps {
  label?: string
  color?: string
  className?: string
}

export function Divider({ label, color = '#1A1A1A', className }: DividerProps) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="flex-1 h-px" style={{ backgroundColor: color }} />
        <span className="text-sage-dark text-[11px] flex-shrink-0">{label}</span>
        <div className="flex-1 h-px" style={{ backgroundColor: color }} />
      </div>
    )
  }

  return (
    <div className={cn('w-full h-px', className)} style={{ backgroundColor: color }} />
  )
}
```

---

## 13. Accordion Component

**File**: `components/ui/Accordion.tsx`

### Props

```typescript
interface AccordionProps {
  items: Array<{ question: string; answer: string }>
  allowMultiple?: boolean
}
```

### Implementation

```typescript
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  items: Array<{ question: string; answer: string }>
  allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-[#1E2E26]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center py-5 text-left"
          >
            <span className="font-body font-medium text-[14px] text-frost-white hover:text-green-primary transition-colors">
              {item.question}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-sage-dark transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
            />
          </button>
          
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'ease' }}
                className="overflow-hidden"
              >
                <p className="font-body font-normal text-[13px] leading-[1.7] text-sage-mid pb-5">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
```

---

## 14. LogoStrip Component

**File**: `components/ui/LogoStrip.tsx`

### Props

```typescript
interface LogoStripProps {
  logos: Array<{ name: string; logo?: string }>
  label?: string
  speed?: number
}
```

### Implementation

```typescript
'use client'

import { motion } from 'framer-motion'

interface LogoStripProps {
  logos: Array<{ name: string; logo?: string }>
  label?: string
  speed?: number
}

export function LogoStrip({ logos, label, speed = 30 }: LogoStripProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="text-center font-body font-medium text-[10px] uppercase tracking-[0.08em] text-sage-dark mb-5">
          {label}
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r from-black-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-black-base to-transparent z-10" />
        
        <motion.div 
          className="flex gap-4"
          animate={{ x: [0, -50] }}
          transition={{ 
            repeat: Infinity, 
            duration: speed, 
            ease: 'linear' 
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 font-mono font-medium text-[11px] text-sage-light bg-[#1A2A1A] border border-[#2A4A2A] rounded-btn-hero px-3 py-1.5 opacity-[0.45]"
            >
              {logo.logo || logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
```

---

## 15. TestimonialCard Component

**File**: `components/ui/TestimonialCard.tsx`

### Props

```typescript
interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}
```

### Implementation

```typescript
interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}

export function TestimonialCard({ quote, name, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-surface-dark border border-border-dark border-l-2 border-l-green-primary rounded-r-card p-6 relative">
      <div className="font-display text-[48px] text-green-primary opacity-30 absolute top-4 left-4">
        "
      </div>
      
      <p className="font-body font-normal text-[15px] leading-[1.7] text-sage-light italic relative z-10">
        {quote}
      </p>

      <div className="mt-4">
        <div className="font-body font-medium text-[13px] text-frost-white">
          {name}
        </div>
        <div className="font-body font-normal text-[12px] text-[#5A7068]">
          {role}, {company}
        </div>
      </div>
    </div>
  )
}
```

---

## Implementation Checklist

- [ ] Create `components/ui/` directory
- [ ] Create `components/layout/` directory
- [ ] Install dependencies: `clsx`, `tailwind-merge`, `framer-motion`, `lucide-react`
- [ ] Create `lib/utils/cn.ts` utility
- [ ] Implement all 15 components
- [ ] Export components from each file
- [ ] Test each component in isolation
- [ ] Document props in TypeScript interfaces

---

**Dependencies for Page Specs**: All components above must be implemented before page development begins.

**Next Spec**: `shared/03-sanity-schemas.md`
