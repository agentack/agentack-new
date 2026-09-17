# Design System Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

This spec defines the complete design system for the Agentack Business Portfolio website. All team members MUST reference this spec when building components and pages.

---

## 1. Color Palette

### 1.1 Primary Colors (Green System)

| Token | Hex | Usage |
|-------|-----|-------|
| `green-primary` | `#00FF88` | Main CTA buttons, logo, key highlights |
| `green-hover` | `#00E87A` | Hover state of primary green |
| `green-dark` | `#001A0D` | Text on green backgrounds |
| `green-mid` | `#003320` | Gradient end stops |
| `green-tinted` | `#0D1A12` | Stats section background |

### 1.2 Base Colors (Blacks)

| Token | Hex | Usage |
|-------|-----|-------|
| `black-base` | `#000000` | Hero background, primary background |
| `black-2` | `#080808` | Alternate section background |
| `black-3` | `#050505` | Footer, logo strip background |

### 1.3 Secondary Colors (Muted Sage)

| Token | Hex | Usage |
|-------|-----|-------|
| `sage-dark` | `#3A4A42` | Card borders, dividers, ghost button borders |
| `sage-mid` | `#8A9A94` | Body text, secondary labels, nav links |
| `sage-light` | `#C8D4CE` | Ghost button text, subtle UI elements |

### 1.4 Tertiary Colors (Frost White)

| Token | Hex | Usage |
|-------|-----|-------|
| `frost-white` | `#F0F2F0` | Headlines on dark backgrounds |
| `frost-mint` | `#E8F0EC` | Light section backgrounds (unused in dark theme) |
| `surface-dark` | `#111714` | Card backgrounds |
| `border-dark` | `#1E2E26` | Card borders on dark surfaces |

### 1.5 Accent Colors (Electric Teal)

| Token | Hex | Usage |
|-------|-----|-------|
| `teal-primary` | `#00E5CC` | Badges, tags, hover states, card link buttons |
| `teal-mid` | `#00B8A6` | Active states |

### 1.6 Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `red-danger` | `#A32D2D` | Destructive text links ONLY (Cancel, Delete) |

---

## 2. Typography

### 2.1 Font Families

| Usage | Font | Weights | Source |
|-------|------|---------|--------|
| Display/Headings | Syne | 500, 700 | Google Fonts |
| Body | Inter | 400, 500 | Google Fonts |
| Mono | JetBrains Mono | 400 | Google Fonts |

### 2.2 Font Implementation

**File**: `app/layout.tsx`

```typescript
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['500', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400'],
  display: 'swap',
})
```

### 2.3 Font Size Scale

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `text-display` | 64px | 1.1 | -0.02em | Homepage H1 only |
| `text-hero` | 52px | 1.15 | -0.02em | Inner page H1 |
| `text-h2` | 42px | 1.2 | -0.01em | Section H2 |
| `text-h3` | 28px | 1.3 | — | H3 headings |
| `text-h4` | 20px | 1.4 | — | H4 headings |
| `text-body-lg` | 18px | 1.7 | — | Hero subtitles |
| `text-body` | 16px | 1.7 | — | Body paragraphs |
| `text-sm` | 14px | 1.6 | — | Small body text |
| `text-xs` | 12px | 1.5 | — | Captions, labels |
| `text-label` | 11px | 1.4 | 0.08em | Eyebrow labels (uppercase) |

---

## 3. Spacing Scale

### 3.1 Section Vertical Padding

| Token | Value | Usage |
|-------|-------|-------|
| `py-section-xl` | 120px top/bottom | Hero sections, final CTA |
| `py-section-lg` | 100px top/bottom | Most content sections |
| `py-section-md` | 80px top/bottom | Inner page sections |
| `py-section-sm` | 60px top/bottom | Strips, stats bar |

### 3.2 Container & Layout Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `container-max` | 1200px | Max content width |
| `container-px-mobile` | 24px | Mobile horizontal padding |
| `container-px-tablet` | 40px | Tablet horizontal padding |
| `container-px-desktop` | 80px | Desktop horizontal padding |
| `card-padding` | 24px | Internal card padding |
| `card-gap` | 16px | Gap between cards in grid |
| `component-gap` | 12px | Gap between inline components |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-card` | 12px | All cards |
| `rounded-btn-hero` | 6px | Hero CTA, section CTA buttons |
| `rounded-btn-nav` | 5px | Navbar CTA button |
| `rounded-btn-form` | 8px | Form submit button |
| `rounded-badge` | 4px | Rectangular badges |
| `rounded-pill` | 999px | Pill-shaped tags |

---

## 5. Shadows

**Rule**: No box shadows used anywhere on this site EXCEPT:

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-focus` | `0 0 0 2px #00FF88` | Keyboard focus state on interactive elements |

---

## 6. Transitions

| Property | Duration | Easing | Usage |
|----------|----------|--------|-------|
| Default | 150ms | ease | General transitions |
| Color/Background | 150ms | ease | Hover state changes |
| Transform | 200ms | ease | Scale, translate animations |

---

## 7. Background Alternation Pattern

**CRITICAL**: Sections must NEVER use the same background color consecutively.

| Order | Section Type | Background Color | Hex |
|-------|--------------|------------------|-----|
| 1 | Hero sections | Black with gradient | `#000000` → `#001A0D` → `#003320` |
| 2 | Logo/trust strip | Black-3 | `#050505` |
| 3 | Problem/content sections | Black-base | `#000000` |
| 4 | Service/feature card sections | Black-2 | `#080808` |
| 5 | Process sections | Black-base | `#000000` |
| 6 | Stats bar | Green-tinted | `#0D1A12` |
| 7 | Why us / differentiator sections | Black-2 | `#080808` |
| 8 | Final CTA | Black-base | `#000000` |
| 9 | Footer | Black-3 | `#050505` |

---

## 8. Button System

### 8.1 Button Variants

| ID | Name | Usage |
|----|------|-------|
| 1 | Hero CTA | Homepage hero ONLY |
| 2 | Ghost Paired | Always with Button 1 |
| 3 | Navbar CTA | Navbar only |
| 4 | Section CTA | Dark background CTAs |
| 5 | Form Submit | Contact form only |
| 6 | Card Link | Inside cards |
| 7 | Text Link | Footer, breadcrumbs |

### 8.2 Button 1 — Hero CTA ("The Popper")

**File**: `components/ui/Button.tsx` (variant: `hero-cta`)

| Property | Value |
|----------|-------|
| Background | `#00FF88` |
| Text | `#001A0D` |
| Border | none |
| Border Radius | 6px |
| Padding | 15px 36px |
| Font | 15px / 500 / 0.01em |
| Hover | `#00E87A` |
| Active | scale(0.98) |
| Disabled | bg `#003322`, text `#1A4A32` |
| Loading | bg `#003322`, text `#1A4A32`, "Processing..." |

**Rules**:
- Maximum ONE per screen
- Never use below first scroll on homepage

**Tailwind**:
```tsx
className="bg-green-primary text-green-dark font-medium text-[15px] tracking-[0.01em] px-[36px] py-[15px] rounded-btn-hero hover:bg-green-hover active:scale-[0.98]"
```

### 8.3 Button 2 — Ghost Paired ("The Sidekick")

**File**: `components/ui/Button.tsx` (variant: `ghost-paired`)

| Property | Value |
|----------|-------|
| Background | transparent |
| Text | `#C8D4CE` |
| Border | 0.5px solid `#3A4A42` |
| Border Radius | 6px |
| Padding | 14px 32px |
| Font | 15px / 500 |
| Hover | border `#8A9A94`, text `#F0F2F0` |

**Rules**:
- Always paired with Button 1
- Never used alone

### 8.4 Button 3 — Navbar CTA ("The Persistent Nudge")

**File**: `components/ui/Button.tsx` (variant: `navbar-cta`)

| Property | Value |
|----------|-------|
| Background | `#00FF88` |
| Text | `#001A0D` |
| Border Radius | 5px |
| Padding | 7px 16px |
| Font | 12px / 500 |

**Rules**:
- Navbar only
- Label always: "Book a call"

### 8.5 Button 4 — Section CTA ("The Dark Closer")

**File**: `components/ui/Button.tsx` (variant: `section-cta`)

| Property | Value |
|----------|-------|
| Background | transparent |
| Text | `#00FF88` |
| Border | 0.5px solid `rgba(0,255,136,0.35)` |
| Hover | bg `rgba(0,255,136,0.06)` |

**Rules**:
- Dark backgrounds only

### 8.6 Button 5 — Form Submit ("The Converter")

**File**: `components/ui/Button.tsx` (variant: `form-submit`)

| Property | Value |
|----------|-------|
| Background | `#00FF88` |
| Border Radius | 8px |
| Padding | 13px |
| Width | Full width |
| Font | 14px / 500 |

**Rules**:
- Form containers only
- Always full-width

### 8.7 Button 6 — Card Link ("The Quiet Guide")

**File**: `components/ui/Button.tsx` (variant: `card-link`)

| Property | Value |
|----------|-------|
| Text | `#00E5CC` |
| Underline | 0.5px solid `rgba(0,229,204,0.4)` |
| Font | 12px / 500 |

**Rules**:
- Inside cards only
- Teal only, never green

### 8.8 Button 7 — Text Link ("The Minimalist")

**File**: `components/ui/Button.tsx` (variant: `text-link`)

| Property | Value |
|----------|-------|
| Text | `#5A7068` or `#A32D2D` (danger) |
| Decoration | underline, offset 3px |
| Font | 12px / 400 |

**Rules**:
- Zero visual weight
- Red only for danger variant

---

## 9. Responsive Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Minor adjustments |
| `md` | 768px | Mobile breakpoint, navbar collapses |
| `lg` | 1024px | 2-col layouts activate |
| `xl` | 1280px | 3-col layouts activate |

---

## 10. Accessibility Requirements

### 10.1 Focus States

All interactive elements MUST have:
```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #00FF88;
}
```

### 10.2 Color Contrast

- Body text: minimum 4.5:1 contrast ratio
- Large text (18px+): minimum 3:1 contrast ratio
- Interactive elements: minimum 3:1 contrast ratio

### 10.3 Screen Reader Support

- All images require `alt` text
- All form inputs require associated `label`
- All buttons require accessible names
- Decorative elements use `aria-hidden="true"`

---

## 11. Implementation Checklist

- [ ] Add color tokens to `tailwind.config.ts`
- [ ] Configure font families in `app/layout.tsx`
- [ ] Set up font size scale in `tailwind.config.ts`
- [ ] Configure spacing scale in `tailwind.config.ts`
- [ ] Configure border radius tokens in `tailwind.config.ts`
- [ ] Create Button component with all 7 variants
- [ ] Document responsive breakpoints in team wiki
- [ ] Test focus states on all interactive elements
- [ ] Verify color contrast ratios

---

## 12. Tailwind Config Reference

**File**: `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#00FF88',
        'green-hover': '#00E87A',
        'green-dark': '#001A0D',
        'green-mid': '#003320',
        'green-tinted': '#0D1A12',
        'black-base': '#000000',
        'black-2': '#080808',
        'black-3': '#050505',
        'sage-dark': '#3A4A42',
        'sage-mid': '#8A9A94',
        'sage-light': '#C8D4CE',
        'frost-white': '#F0F2F0',
        'frost-mint': '#E8F0EC',
        'surface-dark': '#111714',
        'border-dark': '#1E2E26',
        'teal-primary': '#00E5CC',
        'teal-mid': '#00B8A6',
        'red-danger': '#A32D2D',
      },
      fontFamily: {
        display: ['var(--font-syne)'],
        body: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['52px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['42px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.3' }],
        'h4': ['20px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'sm': ['14px', { lineHeight: '1.6' }],
        'xs': ['12px', { lineHeight: '1.5' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        'section-xl': '120px',
        'section-lg': '100px',
        'section-md': '80px',
        'section-sm': '60px',
      },
      borderRadius: {
        'card': '12px',
        'btn-hero': '6px',
        'btn-nav': '5px',
        'btn-form': '8px',
        'badge': '4px',
        'pill': '999px',
      },
    },
  },
  plugins: [],
} satisfies Config
```

---

**Next Spec**: `shared/02-component-library.md`
