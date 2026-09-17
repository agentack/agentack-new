# Custom Hooks Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## 1. useCountUp Hook

**File**: `lib/hooks/useCountUp.ts`

**Purpose**: Animate numbers from start to end value.

```typescript
'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

interface UseCountUpOptions {
  end: number
  start?: number
  duration?: number
  decimals?: number
  easing?: 'linear' | 'easeOut' | 'easeOutExpo' | 'spring'
  prefix?: string
  suffix?: string
  separator?: string
  startOnMount?: boolean
  onComplete?: () => void
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  easing = 'easeOutExpo',
  prefix = '',
  suffix = '',
  separator = ',',
  startOnMount = true,
  onComplete,
}: UseCountUpOptions) {
  const [value, setValue] = useState(start)
  const [isRunning, setIsRunning] = useState(false)
  const rafRef = useRef<number>()
  const startTimeRef = useRef<number>()

  const easeFunctions = {
    linear: (t: number) => t,
    easeOut: (t: number) => t * (2 - t),
    easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    spring: (t: number) => 1 - Math.pow(0.5, t * 10),
  }

  const formatNumber = useCallback((num: number) => {
    const fixed = num.toFixed(decimals)
    const parts = fixed.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return prefix + parts.join('.') + suffix
  }, [decimals, separator, prefix, suffix])

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp
    const elapsed = timestamp - startTimeRef.current
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeFunctions[easing](progress)

    const currentValue = start + (end - start) * easedProgress
    setValue(currentValue)

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate)
    } else {
      setIsRunning(false)
      setValue(end)
      onComplete?.()
    }
  }, [start, end, duration, easing, onComplete])

  const startAnimation = useCallback(() => {
    setIsRunning(true)
    startTimeRef.current = undefined
    rafRef.current = requestAnimationFrame(animate)
  }, [animate])

  const reset = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setValue(start)
    setIsRunning(false)
  }, [start])

  const pause = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setIsRunning(false)
  }, [])

  useEffect(() => {
    if (startOnMount) {
      startAnimation()
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [startOnMount, startAnimation])

  return {
    value: formatNumber(value),
    raw: value,
    isRunning,
    start: startAnimation,
    reset,
    pause,
  }
}
```

---

## 2. useScrollAnimation Hook

**File**: `lib/hooks/useScrollAnimation.ts`

**Purpose**: Trigger animations on viewport entry.

```typescript
'use client'

import { useRef, useState, useEffect } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  once?: boolean
}

export function useScrollAnimation({ threshold = 0.15, once = true }: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
```

---

## 3. useMediaQuery Hook

**File**: `lib/hooks/useMediaQuery.ts`

**Purpose**: Responsive breakpoint detection (SSR-safe).

```typescript
'use client'

import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)')
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)')
}
```

---

## 4. cn Utility

**File**: `lib/utils/cn.ts`

**Purpose**: Merge Tailwind classes with collision resolution.

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## Implementation Checklist

- [ ] Install `clsx` and `tailwind-merge`
- [ ] Create `lib/hooks/` directory
- [ ] Create `lib/utils/` directory
- [ ] Implement all 4 hooks/utilities
- [ ] Test useCountUp with StatCard
- [ ] Test useScrollAnimation with sections
- [ ] Test useMediaQuery with responsive components

---

**Next Spec**: `features/01-navbar.md`
