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
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

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
    startTimeRef.current = null
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
