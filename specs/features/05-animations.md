# Animations Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

Framer Motion animation patterns used across all pages. All team members must follow these patterns for consistency.

---

## Installation

```bash
npm install framer-motion
```

---

## Section Entrance Animation

**Pattern**: All sections use fade-in-up on scroll

**File**: Wrap section content in `motion.div`

```typescript
'use client'

import { motion } from 'framer-motion'

export function SectionComponent() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Section content */}
      </motion.div>
    </section>
  )
}
```

**Alternative**: Use `useScrollAnimation` hook from `shared/04-custom-hooks.md`

```typescript
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export function SectionComponent() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Content */}
    </motion.div>
  )
}
```

---

## Stagger Children Animation

**Pattern**: For lists, grids, card groups

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Usage
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## Card Hover Animation

**Pattern**: ServiceCard, FeatureCard, TestimonialCard

```typescript
<motion.div
  whileHover={{ y: -2 }}
  transition={{ duration: 0.15 }}
>
  {/* Card content */}
</motion.div>
```

---

## Button Tap Animation

**Pattern**: All buttons

```typescript
<motion.button
  whileTap={{ scale: 0.98 }}
>
  {/* Button content */}
</motion.button>
```

---

## Hero Section Stagger

**Pattern**: Homepage hero, service hero

```typescript
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0 }}
>
  <Badge variant="green">Eyebrow</Badge>
</motion.div>

<motion.h1
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  Headline
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  Subtitle
</motion.p>

<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  {/* Buttons */}
</motion.div>
```

---

## Counter Animation

**Pattern**: StatsSection

**Use**: `useCountUp` hook from `shared/04-custom-hooks.md`

```typescript
import { useCountUp } from '@/lib/hooks/useCountUp'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'

export function StatCard({ value, label }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3, once: true })
  const { value: animatedValue } = useCountUp({
    end: value,
    duration: 2000,
    easing: 'easeOutExpo',
  })

  return (
    <div ref={ref}>
      {isVisible && (
        <div className="font-display text-[42px] text-green-primary">
          {animatedValue}
        </div>
      )}
      <div className="text-sage-mid">{label}</div>
    </div>
  )
}
```

---

## Scroll Indicator Animation

**Pattern**: Hero section chevron

```typescript
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.5 }}
>
  <ChevronDown className="w-6 h-6 animate-bounce" />
</motion.div>
```

---

## Logo Strip Marquee

**Pattern**: LogoStripSection, ToolsWeUseSection

```typescript
import { motion } from 'framer-motion'

<motion.div
  className="flex gap-4"
  animate={{ x: [0, -50] }}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: 'linear',
  }}
>
  {/* Logos */}
</motion.div>
```

---

## Accordion Animation

**Pattern**: FAQ accordion

```typescript
import { motion, AnimatePresence } from 'framer-motion'

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'ease' }}
    >
      {/* Answer content */}
    </motion.div>
  )}
</AnimatePresence>
```

---

## Easing Functions Reference

| Name | Cubic Bezier | Usage |
|------|--------------|-------|
| Standard | `[0.25, 0.1, 0.25, 1]` | Section entrances |
| Ease Out | `[0, 0, 0.2, 1]` | General animations |
| Ease Out Expo | `[0.16, 1, 0.3, 1]` | Counter animations, hero |
| Spring | `[0.34, 1.56, 0.64, 1]` | Playful interactions |

---

## Performance Guidelines

1. **Use `will-change` sparingly** — Only on animated elements
2. **Animate transform and opacity** — Avoid animating width, height, top, left
3. **Use `once: true`** — Don't re-animate on every scroll
4. **Reduce motion for accessibility**:

```typescript
import { useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()

<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
  animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
  transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
>
```

---

## Implementation Checklist

- [ ] Install framer-motion
- [ ] Create animation utility helpers (optional)
- [ ] Apply section entrance animation to all sections
- [ ] Apply stagger animation to card grids
- [ ] Apply hover animation to all cards
- [ ] Apply tap animation to all buttons
- [ ] Apply stagger animation to hero sections
- [ ] Implement useCountUp for stats
- [ ] Test with reduced motion preference

---

**Required by**: All page specs
