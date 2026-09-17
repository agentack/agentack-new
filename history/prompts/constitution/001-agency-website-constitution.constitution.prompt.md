---
id: 001
title: Agency Website Constitution File
stage: constitution
date: 2026-03-20
surface: agent
model: qwen-code
feature: agentack-business-portfolio
branch: main
user: Tooba
command: Master Prompt: Generate Agency Website Constitution File
labels: ["constitution", "agency-website", "nextjs", "sanity", "tailwind"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - agentack-business-portfolio/CONSTITUTION.md
tests:
  - N/A (documentation artifact)
---

## Prompt

# Master Prompt: Generate Agency Website Constitution File

You are a senior software architect, UI/UX designer, and detail-oriented AI agency owner. Your task is to generate a single comprehensive `CONSTITUTION.md` file that serves as the single source of truth for building this AI automation agency website. Every decision has already been made — your job is to document it with zero ambiguity so any developer (or AI) can build the entire site without asking a single question.

---

## CONTEXT: What this site is

An AI automation agency website targeting mid-size businesses. Built with Next.js 16 App Router, TypeScript, Tailwind CSS, and Sanity CMS. The site is designed to convert visitors into booked strategy calls. It launches with 4 pages and grows as the business grows.

---

## WHAT TO GENERATE

Generate a single `CONSTITUTION.md` file with ALL of the following sections, written with maximum detail and zero vagueness. Every value, every color, every spacing unit, every component prop, every Sanity schema field must be explicitly stated.

---

## SECTION 1 — PROJECT OVERVIEW

Document the following:
- Project type: AI automation agency website
- Business goal: Convert visitors into booked strategy calls
- Target client: Mid-size companies (50–500 employees), decision makers are ops directors, CTOs, CEOs
- Tech stack:
  - Framework: Next.js 16 with App Router
  - Language: TypeScript (strict mode)
  - Styling: Tailwind CSS v4
  - CMS: Sanity v4
  - Deployment: Vercel
  - Booking: Cal.com embed
  - Animation: Framer Motion
  - Icons: Lucide React
  - Form handling: React Hook Form + Zod validation
- Folder structure (generate the complete recommended folder tree for the project, including: app/, components/, components/ui/, components/sections/, components/layout/, lib/, sanity/, sanity/schemas/, types/, styles/, public/)
- Environment variables needed: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN, NEXT_PUBLIC_CAL_LINK

---

## SECTION 2 — BRAND & DESIGN TOKENS

Document every single design token. These must be written as both human-readable specs AND as a Tailwind CSS config `extend` block that goes inside `tailwind.config.ts`.

### 2.1 Color Palette

Primary colors:
- `green-primary`: #00FF88 — main CTA, logo, key highlights
- `green-hover`: #00E87A — hover state of primary green
- `green-dark`: #001A0D — text on green backgrounds
- `green-mid`: #003320 — gradient end stop
- `green-tinted`: #0D1A12 — stats section background
- `black-base`: #000000 — hero bg, primary background
- `black-2`: #080808 — alternate section background
- `black-3`: #050505 — footer, logo strip background

Secondary colors (Muted Sage):
- `sage-dark`: #3A4A42 — card borders, dividers, ghost button border
- `sage-mid`: #8A9A94 — body text, secondary labels, nav links
- `sage-light`: #C8D4CE — ghost button text, subtle UI elements

Tertiary colors (Frost White):
- `frost-white`: #F0F2F0 — headlines on dark bg
- `frost-mint`: #E8F0EC — light section backgrounds
- `surface-dark`: #111714 — card backgrounds
- `border-dark`: #1E2E26 — card borders on dark surface

Accent colors (Electric Teal):
- `teal-primary`: #00E5CC — badges, tags, hover states, card link buttons
- `teal-mid`: #00B8A6 — active states
- `teal-glow`: rgba(0,229,204,0.1) — subtle bg tints

Semantic:
- `red-danger`: #A32D2D — destructive text link only

### 2.2 Typography

Font families:
- Display/Headings: `Syne` (Google Fonts) — weights 500, 700
- Body: `Inter` (Google Fonts) — weights 400, 500
- Mono: `JetBrains Mono` (Google Fonts) — weight 400

Font size scale (document as Tailwind tokens AND px values):
- `text-display`: 64px / line-height 1.1 / letter-spacing -0.02em — homepage H1 only
- `text-hero`: 52px / line-height 1.15 / letter-spacing -0.02em — inner page H1
- `text-h2`: 42px / line-height 1.2 / letter-spacing -0.01em
- `text-h3`: 28px / line-height 1.3
- `text-h4`: 20px / line-height 1.4
- `text-body-lg`: 18px / line-height 1.7
- `text-body`: 16px / line-height 1.7
- `text-sm`: 14px / line-height 1.6
- `text-xs`: 12px / line-height 1.5
- `text-label`: 11px / line-height 1.4 / letter-spacing 0.08em — eyebrow labels, uppercase

### 2.3 Spacing Scale

Document as Tailwind tokens:
- Section vertical padding (large): 120px top/bottom — used on hero, final CTA
- Section vertical padding (medium): 100px top/bottom — used on most content sections
- Section vertical padding (small): 80px top/bottom — used on inner page sections
- Section vertical padding (compact): 60px top/bottom — used on strips, stats bar
- Container max-width: 1200px
- Container horizontal padding: 24px mobile, 40px tablet, 80px desktop
- Card padding: 24px
- Card gap in grid: 16px
- Component inner gap: 12px

### 2.4 Border Radius

- `rounded-card`: 12px — all cards
- `rounded-btn-hero`: 6px — hero CTA and section CTA buttons
- `rounded-btn-nav`: 5px — navbar CTA button
- `rounded-btn-form`: 8px — form submit button
- `rounded-badge`: 4px — rectangular badges
- `rounded-pill`: 999px — pill-shaped tags

### 2.5 Shadows

No box shadows used anywhere on this site except:
- Focus ring: `0 0 0 2px #00FF88` — keyboard focus state on all interactive elements

### 2.6 Transitions

- Default: `all 150ms ease`
- Color/background: `150ms ease`
- Transform: `200ms ease`

### 2.7 Background Alternation Pattern

Document the exact background color sequence used across all pages so sections never use the same bg back to back:
1. Hero sections: #000000 (with gradient)
2. Logo/trust strip: #050505
3. Problem/content sections: #000000
4. Service/feature card sections: #080808
5. Process sections: #000000
6. Stats bar: #0D1A12
7. Why us / differentiator sections: #080808
8. Final CTA: #000000
9. Footer: #050505

---

## SECTION 3 — BUTTON SYSTEM

Document all 6 buttons with every visual property. For each button, include: background, text color, border, border-radius, padding, font-size, font-weight, letter-spacing, hover state, active state, disabled state, loading state, where it's used, and what NOT to do with it.

### Button 1 — Hero CTA ("The Popper")
- Background: #00FF88
- Text: #001A0D
- Border: none
- Border-radius: 6px
- Padding: 15px 36px
- Font: 15px / 500 / letter-spacing 0.01em
- Hover bg: #00E87A
- Active: scale(0.98)
- Disabled: bg #003322, text #1A4A32, cursor not-allowed
- Loading: bg #003322, text #1A4A32, "Processing..." text
- Icon: optional trailing arrow icon 16px
- Used on: Homepage hero section ONLY, individual service page hero
- Rule: Maximum ONE on screen at any time. Never use this button anywhere below the first scroll on homepage.

### Button 2 — Ghost Paired ("The Sidekick")
- Background: transparent
- Text: #C8D4CE
- Border: 0.5px solid #3A4A42
- Border-radius: 6px
- Padding: 14px 32px (same height as Hero CTA)
- Font: 15px / 500
- Hover: border-color #8A9A94, text #F0F2F0
- Active: scale(0.98)
- Used on: Always paired next to Button 1 in hero. Never used alone.
- Rule: Always the second button in a pair. Never used without Button 1 present.

### Button 3 — Navbar CTA ("The Persistent Nudge")
- Background: #00FF88
- Text: #001A0D
- Border: none
- Border-radius: 5px
- Padding: 7px 16px
- Font: 12px / 500 / letter-spacing 0.01em
- Hover bg: #00E87A
- Used on: Navbar only, right side. Persistent on all pages.
- Rule: Always says "Book a call" or "Book a free call". Never changes label.

### Button 4 — Section CTA ("The Dark Closer")
- Background: transparent
- Text: #00FF88
- Border: 0.5px solid rgba(0,255,136,0.35)
- Border-radius: 6px
- Padding: 13px 30px
- Font: 14px / 500 / letter-spacing 0.01em
- Hover: bg rgba(0,255,136,0.06), border-color rgba(0,255,136,0.6)
- Active: scale(0.98)
- Used on: CTA strip sections, final CTA section on every page, services page CTA strip
- Rule: Used on dark backgrounds (#000, #080808) only. Never on light surfaces.

### Button 5 — Form Submit ("The Converter")
- Background: #00FF88
- Text: #001A0D
- Border: none
- Border-radius: 8px
- Padding: 13px (top/bottom), full width of form container
- Font: 14px / 500 / letter-spacing 0.01em
- Hover: bg #00E87A
- Loading: bg #003322, text #1A4A32, spinner icon left, "Sending..." text
- Disabled: bg #003322, text #1A4A32, opacity 0.5, cursor not-allowed
- Used on: Contact page form submit ONLY
- Rule: Always full-width. Never used outside a form container.

### Button 6 — Card Link ("The Quiet Guide")
- Background: none
- Text: #00E5CC
- Border: none
- Underline: border-bottom 0.5px solid rgba(0,229,204,0.4)
- Padding-bottom: 1px (for underline gap)
- Font: 12px / 500
- Hover: text #00FFE5, border-color rgba(0,255,229,0.6)
- Used on: Inside service cards, feature cards — "Learn more →" links
- Rule: Never a filled button inside a card. Teal only — never green inside a card.

### Button 7 — Text Link ("The Minimalist")
- Background: none
- Text: #5A7068 (default) or #A32D2D (danger variant)
- Border: none
- Text-decoration: underline, offset 3px, color at 40% opacity
- Font: 12px / 400
- Used on: Footer nav links, breadcrumbs, "← Back to services", "Cancel" in forms
- Rule: Zero visual weight. The only place red (#A32D2D) appears on the site is the danger variant.

---

## SECTION 4 — COMPONENT LIBRARY

For each component, document: purpose, file path, TypeScript interface/props, visual specs, variants, states, and usage rules.

### 4.1 Layout Components

**Navbar** (`components/layout/Navbar.tsx`)
- Height: 64px
- Background: #000000, on scroll adds backdrop-blur-md and border-bottom 0.5px solid #1A1A1A
- Sticky: top-0, z-50
- Layout: flex, justify-between, align-center, max-width 1200px, px 40px
- Left: Logo (text or SVG) in #00FF88
- Center: Nav links — Services (dropdown trigger) | About | Contact
- Right: Button 3 (Navbar CTA)
- Nav link styles: 12px / 400 / color #8A9A94, hover color #F0F2F0
- Active/current page link: color #00FF88, bg rgba(0,255,136,0.06), border-radius 5px, padding 6px 10px
- Mobile breakpoint: 768px — hamburger menu replaces center + right, slides down as full-width drawer
- Services dropdown: opens on hover (desktop), tap (mobile). Panel: bg #0D1A0D, border 0.5px solid #1E3020, border-radius 8px, padding 8px 0. Each item: service name 12px #C8D4CE + micro-desc 11px #5A7068, padding 10px 16px, hover bg rgba(0,255,136,0.05) + text #00FF88. Bottom: divider + "View all services →" in #00C46A.

**Footer** (`components/layout/Footer.tsx`)
- Background: #050505
- Border-top: 0.5px solid #1A1A1A
- Padding: 48px 0 32px
- Layout: max-width 1200px, grid 3 columns
- Col 1: Logo + 1-line tagline in #5A7068 at 13px
- Col 2: Nav links (Button 7 style) — Services, About, Contact
- Col 3: LinkedIn icon link (only social)
- Bottom bar: border-top 0.5px #1A1A1A, padding-top 24px, copyright text #3A4A42 11px

**Container** (`components/layout/Container.tsx`)
- Props: `size?: 'sm' | 'md' | 'lg'`, `as?: ElementType`, `className?: string`, `children: ReactNode`
- sm: max-width 640px
- md: max-width 800px (default)
- lg: max-width 1200px
- Always: mx-auto, px-6 (mobile), px-10 (tablet), px-20 (desktop)

**Section** (`components/layout/Section.tsx`)
- Props: `bg?: string`, `paddingY?: 'sm' | 'md' | 'lg' | 'xl'`, `className?: string`, `children: ReactNode`
- xl: py-[120px]
- lg: py-[100px]
- md: py-[80px]
- sm: py-[60px]

### 4.2 UI Primitive Components

**SectionHeading** (`components/ui/SectionHeading.tsx`)
- Props: `eyebrow?: string`, `heading: string`, `subtitle?: string`, `align?: 'left' | 'center'`
- Eyebrow: 11px / 500 / uppercase / letter-spacing 0.08em / color #00E5CC
- Eyebrow margin-bottom: 12px
- Heading: font Syne, 42px / 500 / color #F0F2F0 / line-height 1.2
- Heading margin-bottom: 16px
- Subtitle: Inter 16px / 400 / color #8A9A94 / line-height 1.7 / max-width 560px
- Align center: everything centered, subtitle mx-auto
- Align left: everything left-aligned

**Badge** (`components/ui/Badge.tsx`)
- Props: `variant: 'green' | 'teal' | 'sage' | 'outline'`, `size?: 'sm' | 'md'`, `dot?: boolean`
- green: bg rgba(0,255,136,0.12), text #00C46A, border 0.5px solid rgba(0,255,136,0.25)
- teal: bg rgba(0,229,204,0.1), text #00E5CC, border 0.5px solid rgba(0,229,204,0.2)
- sage: bg rgba(58,74,66,0.4), text #C8D4CE, border 0.5px solid #3A4A42
- outline: bg transparent, text #8A9A94, border 0.5px solid #3A4A42
- sm: font-size 10px, padding 2px 8px, border-radius 4px
- md: font-size 12px, padding 4px 12px, border-radius 4px
- pill shape (for hero eyebrow): border-radius 999px, padding 4px 14px
- dot: shows 6px colored circle before text

**ServiceCard** (`components/ui/ServiceCard.tsx`)
- Props: `icon: ReactNode`, `title: string`, `description: string`, `outcomes: string[]`, `href: string`, `timeline?: string`
- Background: #111714
- Border: 0.5px solid #1E2E26
- Border-radius: 12px
- Padding: 24px
- Hover: border-color #3A4A42, transition 150ms
- Icon container: 32px × 32px, border-radius 6px, bg rgba(0,229,204,0.1)
- Icon: 16px × 16px, color #00E5CC
- Title: 16px / 500 / color #F0F2F0 / margin-top 12px
- Description: 13px / 400 / color #5A7068 / margin-top 4px / line-height 1.6
- Outcomes: margin-top 16px, each item: flex row, 6px green dot + 12px / 400 / #8A9A94
- Timeline badge: Badge variant="sage" at top-right of card (if provided)
- Bottom: margin-top 20px, Button 6 ("Learn more →")

**StatCard** (`components/ui/StatCard.tsx`)
- Props: `value: number`, `suffix?: string`, `prefix?: string`, `label: string`, `duration?: number`, `decimals?: number`
- Background: transparent (sits on #0D1A12 section)
- Number: font Syne, 42px / 500 / color #00FF88 / line-height 1
- Label: 13px / 400 / color #5A7068 / margin-top 6px
- Uses useCountUp hook, triggers on scroll intersection
- In a row of 4: separated by 0.5px vertical dividers in #1E3020

**StepCard** (`components/ui/StepCard.tsx`)
- Props: `step: number`, `title: string`, `description: string`, `isLast?: boolean`
- Border-left: 2px solid #00FF88
- Border-radius: 0 8px 8px 0
- Background: transparent
- Padding: 16px 20px
- Step number: font JetBrains Mono, 11px / 400 / color #3A4A42
- Title: 15px / 500 / color #F0F2F0 / margin-top 4px
- Description: 13px / 400 / color #5A7068 / margin-top 4px / line-height 1.6
- Connector: dashed horizontal line between steps, 1px dashed #1E2E26

**FeatureCard** (`components/ui/FeatureCard.tsx`)
- Props: `icon: ReactNode`, `title: string`, `description: string`, `accent?: 'green' | 'teal'`
- Background: #111714
- Border: 0.5px solid #1E2E26
- Border-radius: 12px
- Padding: 24px
- Icon container: 28px × 28px, border-radius 6px, bg rgba(0,229,204,0.1) for teal or rgba(0,255,136,0.1) for green
- Title: 14px / 500 / color #F0F2F0 / margin-top 12px
- Description: 13px / 400 / color #5A7068 / margin-top 4px / line-height 1.6

**Input** (`components/ui/Input.tsx`)
- Props: `label: string`, `placeholder?: string`, `error?: string`, `disabled?: boolean`, `type?: string`
- Label: 12px / 500 / color #8A9A94 / margin-bottom 6px
- Input: bg transparent, border 0.5px solid #2A3A30, border-radius 7px, padding 10px 14px
- Font: 13px / 400 / color #C8D4CE
- Placeholder: color #3A4A42
- Focus: border-color #00FF88, outline none, ring 0 0 0 1px rgba(0,255,136,0.2)
- Error: border-color #A32D2D, error message below 11px #A32D2D
- Disabled: opacity 0.4, cursor not-allowed

**Textarea** (`components/ui/Textarea.tsx`)
- All same as Input
- Additional props: `rows?: number` (default 4)
- resize: vertical only

**LogoStrip** (`components/ui/LogoStrip.tsx`)
- Props: `logos: Array<{name: string, logo?: string}>`, `label?: string`, `speed?: number`
- Label: 10px / 500 / uppercase / letter-spacing 0.08em / color #3A4A42 / centered / margin-bottom 20px
- Strip: horizontal marquee, auto-scroll, loop
- Logo items: font JetBrains Mono, 11px / 500 / color #C8D4CE / bg #1A2A1A / border 0.5px solid #2A4A2A / border-radius 6px / padding 5px 12px
- Overall opacity: 0.45
- Fade edges: linear-gradient mask on left and right 60px

**Accordion** (`components/ui/Accordion.tsx`)
- Props: `items: Array<{question: string, answer: string}>`, `allowMultiple?: boolean`
- Item border-bottom: 0.5px solid #1E2E26
- Question: 14px / 500 / color #F0F2F0 / padding 20px 0 / cursor pointer
- Question hover: color #00FF88
- Chevron icon: 16px / color #5A7068, rotates 180deg on open
- Answer: 13px / 400 / color #8A9A94 / line-height 1.7 / padding-bottom 20px
- Animation: Framer Motion height transition 200ms ease

**TestimonialCard** (`components/ui/TestimonialCard.tsx`)
- Props: `quote: string`, `name: string`, `role: string`, `company: string`, `avatar?: string`
- Background: #111714
- Border: 0.5px solid #1E2E26
- Border-left: 2px solid #00FF88
- Border-radius: 0 12px 12px 0
- Padding: 28px 24px
- Quote mark: font Syne, 48px / color #00FF88 / opacity 0.3 / top-left decorative
- Quote text: 15px / 400 / color #C8D4CE / line-height 1.7 / font-style italic
- Name: 13px / 500 / color #F0F2F0 / margin-top 16px
- Role + Company: 12px / 400 / color #5A7068

**Divider** (`components/ui/Divider.tsx`)
- Props: `label?: string`, `color?: string`
- Default: 0.5px solid #1A1A1A, full width
- With label: label centered, line on both sides, label 11px #3A4A42

---

## SECTION 5 — CUSTOM HOOKS

Document each hook with: purpose, parameters, return values, internal logic notes.

**useCountUp** (`lib/hooks/useCountUp.ts`)
- Params: `{ end: number, start?: number, duration?: number, decimals?: number, easing?: 'linear' | 'easeOut' | 'easeOutExpo' | 'spring', prefix?: string, suffix?: string, separator?: string, startOnMount?: boolean, onComplete?: () => void }`
- Returns: `{ value: string, raw: number, isRunning: boolean, start: () => void, reset: () => void, pause: () => void }`
- Default easing: easeOutExpo
- Default duration: 2000ms
- Uses requestAnimationFrame internally
- Formats with comma separator and prefix/suffix
- Note: In StatCard, triggered by IntersectionObserver (not startOnMount)

**useScrollAnimation** (`lib/hooks/useScrollAnimation.ts`)
- Params: `{ threshold?: number, once?: boolean }`
- Returns: `{ ref: RefObject, isVisible: boolean }`
- Uses IntersectionObserver
- Default threshold: 0.15
- Default once: true (fires only first time element enters viewport)
- Used to trigger fade-in-up animations on section entry

**useMediaQuery** (`lib/hooks/useMediaQuery.ts`)
- Params: `query: string`
- Returns: `boolean`
- Breakpoints to use: sm 640px, md 768px, lg 1024px, xl 1280px
- SSR safe: returns false on server

**cn** (`lib/utils/cn.ts`)
- Simple: `import { clsx } from 'clsx'; import { twMerge } from 'tailwind-merge';`
- Export: `export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }`

---

## SECTION 6 — PAGE ARCHITECTURE

For each page, document: route, purpose, metadata (SEO title + description), sections in order, section background colors, layout notes, and which Sanity documents power which sections.

### 6.1 Homepage (`app/page.tsx`)

SEO Title: `[Agency Name] — AI Automation for Growing Businesses`
SEO Description: `We build custom AI automation systems for mid-size businesses. Eliminate manual work, scale operations, and free your team to focus on what matters.`
OG Image: Dark gradient with logo + tagline

Sections in order:
1. **Navbar** — persistent, from layout
2. **HeroSection** — bg: #000 → #001A0D → #003320 gradient 135deg, min-height 100vh, padding-top 160px
3. **LogoStripSection** — bg: #050505, height 80px, "Technologies we work with"
4. **ProblemSection** — bg: #000000, padding 100px 0, 2-col grid
5. **ServicesOverviewSection** — bg: #080808, padding 100px 0, 3-col card grid
6. **ProcessSection** — bg: #000000, padding 100px 0, horizontal 4-step flow
7. **StatsSection** — bg: #0D1A12, padding 60px 0, 4 stat counters in a row
8. **WhyUsSection** — bg: #080808, padding 100px 0, 3-col feature card grid
9. **FinalCTASection** — bg: #000000, padding 120px 0, centered single column
10. **Footer** — persistent, from layout

### 6.2 Services Overview Page (`app/services/page.tsx`)

SEO Title: `Our Services — [Agency Name]`
SEO Description: `Custom AI workflow automation, AI integration, and reporting automation services for mid-size businesses.`

Sections in order:
1. **Navbar**
2. **PageHeroSection** — bg: #000000 flat, padding 120px 0 80px, centered, smaller H1
3. **ServiceCardsSection** — bg: #080808, padding 80px 0, 2-col grid (larger cards than homepage)
4. **ProcessTeaserSection** — bg: #000000, padding 80px 0, compact 3-step horizontal
5. **ServicesCTAStrip** — bg: #0D1A12, padding 60px 0, 2-col: text left + Button 4 right
6. **Footer**

### 6.3 Individual Service Page (`app/services/[slug]/page.tsx`)

Dynamic route powered by Sanity. Slug from Sanity `service` document.

SEO Title: `[Service Name] — [Agency Name]`
SEO Description: From Sanity `service.seoDescription` field

Sections in order:
1. **Navbar**
2. **ServiceHeroSection** — bg: #000 → #001A0D gradient, padding 140px 0 80px, LEFT-aligned (not centered), includes breadcrumb
3. **WhatIsIncludedSection** — bg: #080808, padding 80px 0, 3-col FeatureCard grid
4. **WhoIsItForSection** — bg: #000000, padding 80px 0, 2-col: checklist left + statement right
5. **ToolsWeUseSection** — bg: #050505, padding 60px 0, logo grid
6. **ServiceCTASection** — bg: #000000, padding 100px 0, centered, includes "← All services" text link below button
7. **Footer**

### 6.4 About Page (`app/about/page.tsx`)

SEO Title: `About — [Agency Name]`
SEO Description: `We believe most business processes shouldn't require humans. Learn about our mission, approach, and the team behind [Agency Name].`

Sections in order:
1. **Navbar**
2. **MissionHeroSection** — bg: #000000 flat (no gradient — intentional), padding 140px 0 80px, centered, editorial
3. **OurApproachSection** — bg: #080808, padding 100px 0, 3-col FeatureCard grid, left-aligned heading
4. **FounderSection** — bg: #000000, padding 100px 0, 2-col: photo left + bio right
5. **AboutCTASection** — bg: #080808, padding 80px 0, centered, soft close
6. **Footer**

### 6.5 Contact Page (`app/contact/page.tsx`)

SEO Title: `Let's Talk — [Agency Name]`
SEO Description: `Book a free 30-minute strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment.`

Sections in order:
1. **Navbar**
2. **ContactHeroSection** — bg: #000000, padding 100px 0 60px, centered, conversational H1
3. **ContactFormSection** — bg: #080808, padding 60px 0 80px, 2-col 55/45: form left + Cal.com embed right
4. **TrustSignalsSection** — bg: #000000, padding 48px 0, 3 items in a row
5. **Footer**

---

## SECTION 7 — SECTION COMPONENTS

For each section component, document: file path, props interface, layout specs, exact child components used, copy direction (what text goes where), and animation behavior.

### HeroSection (`components/sections/HeroSection.tsx`)
Props: `data: HeroData` (from Sanity or static)
Layout: single column, centered, max-width 800px
Elements top to bottom:
- Badge (variant="green", pill shape): eyebrow text e.g. "AI Automation Agency"
- H1 (text-display, font Syne, color #F0F2F0): main headline
- Subtitle (text-body-lg, color #8A9A94, max-width 560px, mx-auto): supporting text
- Button row (gap 12px, flex wrap, justify-center): Button 1 + Button 2 side by side
- Scroll indicator: small chevron-down icon, color #3A4A42, absolute bottom-8, animate-bounce
Animation: Framer Motion stagger — badge fades in first (0ms delay), H1 (100ms), subtitle (200ms), buttons (300ms). All: fade + translateY(16px → 0).

### ProblemSection (`components/sections/ProblemSection.tsx`)
Props: `data?: ProblemData`
Layout: 2-col CSS grid, gap 60px, max-width 1200px
Left column: SectionHeading (left-aligned) + 4 bullet pain points. Bullet dot: 8px circle #3A4A42. Text: 16px #8A9A94.
Right column: large quoted statement. Teal left border (3px solid #00E5CC). Text: 24px Syne #F0F2F0 line-height 1.4. Sub-statement below in 15px #5A7068.

### ServicesOverviewSection (`components/sections/ServicesOverviewSection.tsx`)
Props: `services: ServiceCardData[]` (from Sanity)
Layout: SectionHeading centered + CSS grid 3-col (repeat(3, 1fr)), gap 16px, margin-top 48px
Mobile: 1-col. Tablet: 2-col. Desktop: 3-col.
Each card: ServiceCard component

### ProcessSection (`components/sections/ProcessSection.tsx`)
Props: `steps: StepData[]` (static, 4 steps)
Layout: SectionHeading left-aligned + horizontal flex row of 4 StepCards with dashed connector lines between
Connector: absolutely positioned dashed line 1px dashed #1E2E26 connecting step cards
Mobile: vertical stack (no connectors)

### StatsSection (`components/sections/StatsSection.tsx`)
Props: `stats: StatData[]` (4 items, can be static or from Sanity)
Layout: flex row, justify-around, align-center. Vertical dividers between each stat.
Each stat: StatCard with useCountUp triggered on scroll

### WhyUsSection (`components/sections/WhyUsSection.tsx`)
Props: `features: FeatureData[]` (3 items)
Layout: SectionHeading centered + CSS grid 3-col, gap 16px, margin-top 48px
Each: FeatureCard

### FinalCTASection (`components/sections/FinalCTASection.tsx`)
Props: `heading: string`, `subtext: string`, `ctaLabel: string`, `ctaHref: string`
Layout: centered, max-width 600px, single column
Elements: H2 (38px Syne #F0F2F0) + subtext (16px #8A9A94) + Button 4 + optional micro-text below button ("No commitment. Reply within 24h." in 12px #3A4A42)

### ContactFormSection (`components/sections/ContactFormSection.tsx`)
Props: none (static form)
Layout: 2-col CSS grid 55/45, gap 60px. Vertical divider 0.5px #1E2E26 between columns.
Left: Form heading "Send us a message" (20px #F0F2F0) + 4 fields (Name, Company, Email, Textarea "What's your biggest operational bottleneck?") + Button 5
Right: "Or pick a time directly" heading (16px #8A9A94) + Cal.com iframe embed
Form validation: React Hook Form + Zod. All fields required. Email must be valid email format.
Submit behavior: POST to API route `/api/contact`, show success state inline (no redirect)

---

## SECTION 8 — SANITY CMS SCHEMAS

Generate complete Sanity v3 schema files for each document type. Each schema must include every field with: name, title, type, validation rules, description/hint text for editors, and any relevant options.

### 8.1 Schema: `service` (`sanity/schemas/service.ts`)

Fields:
- `name`: string, required, title of the service
- `slug`: slug, required, source from `name`, unique
- `tagline`: string, required, 1-line description shown in cards and hero
- `description`: text, required, 2-3 sentence description
- `icon`: string, required, Lucide icon name (e.g. "Workflow", "Bot", "BarChart2")
- `eyebrow`: string, optional, badge text for hero (defaults to "Service")
- `heroHeadline`: string, required, H1 on the individual service page
- `heroSubtitle`: string, required, subtitle on service page hero
- `outcomes`: array of strings, required, min 2 max 5, bullet points shown on service cards
- `features`: array of objects (title: string, description: string, icon: string), min 3 max 8 — "What's included" section
- `whoIsItFor`: array of strings, min 3 max 6 — "This is for you if…" checklist
- `toolsUsed`: array of strings — tool names for logo strip on service page
- `timeline`: string, optional, e.g. "2–3 weeks"
- `seoTitle`: string, required, max 60 chars
- `seoDescription`: string, required, max 160 chars
- `order`: number, required, controls display order on services page

### 8.2 Schema: `siteSettings` (`sanity/schemas/siteSettings.ts`)

Singleton document. Fields:
- `agencyName`: string, required
- `tagline`: string, required, 1-line description
- `heroHeadline`: string, required, homepage H1
- `heroSubtitle`: string, required, homepage subtitle
- `heroPrimaryCtaLabel`: string, required
- `heroSecondaryCtaLabel`: string, required
- `problemStatement`: text, required, the right-column statement in problem section
- `problemPainPoints`: array of strings, min 3 max 5
- `processSteps`: array of objects (step: number, title: string, description: string), exactly 4
- `stats`: array of objects (value: number, suffix: string, prefix: string, label: string, duration: number), exactly 4
- `differentiators`: array of objects (title: string, description: string, icon: string), exactly 3
- `finalCtaHeadline`: string
- `finalCtaSubtext`: string
- `finalCtaMicroText`: string, optional
- `calLink`: string, required, Cal.com username/event slug
- `linkedinUrl`: string, optional
- `contactEmail`: string, required
- `seoDefaultTitle`: string, required
- `seoDefaultDescription`: string, required

### 8.3 Schema: `teamMember` (`sanity/schemas/teamMember.ts`)

Fields:
- `name`: string, required
- `role`: string, required
- `bio`: text, required, max 300 chars
- `photo`: image, required, with hotspot
- `linkedinUrl`: string, optional
- `order`: number, required

### 8.4 Schema: `caseStudy` (`sanity/schemas/caseStudy.ts`)

(For future use — build now, leave empty)
Fields:
- `title`: string, required
- `slug`: slug, required
- `client`: string, required
- `industry`: string, required
- `challenge`: text, required
- `solution`: text, required
- `results`: array of objects (metric: string, value: string, description: string)
- `servicesUsed`: array of references to `service`
- `testimonial`: object (quote: string, name: string, role: string)
- `coverImage`: image, with hotspot
- `publishedAt`: datetime
- `featured`: boolean, default false
- `seoTitle`: string
- `seoDescription`: string

### 8.5 Schema: `faq` (`sanity/schemas/faq.ts`)

Fields:
- `question`: string, required
- `answer`: text, required
- `page`: string, enum of ['services', 'contact', 'general'], required
- `order`: number, required

### 8.6 Sanity Studio Config (`sanity/sanity.config.ts`)

Document the full config including:
- Project ID from env
- Dataset: 'production'
- Studio title: agency name
- All schemas registered
- Desk structure: organize documents as: Site Settings (singleton), Services, Team, Case Studies, FAQs

---

## SECTION 9 — API ROUTES

### `/api/contact` (`app/api/contact/route.ts`)

Method: POST
Body schema (Zod):
```
{
  name: string (min 2, max 100),
  company: string (min 1, max 100),
  email: string (valid email),
  message: string (min 10, max 2000)
}
```
On success: send email notification (use Resend or Nodemailer), return `{ success: true }`
On validation failure: return 400 with error details
On server error: return 500
Rate limiting: max 5 requests per IP per hour (use upstash/ratelimit or simple in-memory)
Required env vars: RESEND_API_KEY (or SMTP settings), CONTACT_EMAIL_TO

---

## SECTION 10 — ANIMATION SYSTEM

Document the Framer Motion animation patterns used across the site.

### Entrance animations (used via useScrollAnimation hook)

`fadeInUp`: opacity 0→1, y 20→0, duration 0.5s, ease [0.25, 0.1, 0.25, 1]
`fadeIn`: opacity 0→1, duration 0.4s
`staggerChildren`: parent container with staggerChildren 0.1s, delayChildren 0.1s

### Section entry pattern

Every section: wrap content in `<motion.div>` with `initial={{ opacity: 0, y: 24 }}` `whileInView={{ opacity: 1, y: 0 }}` `viewport={{ once: true, margin: '-80px' }}` `transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}`

### Card hover pattern

ServiceCard, FeatureCard: `whileHover={{ y: -2 }}` `transition={{ duration: 0.15 }}`

### Button tap pattern

All buttons: `whileTap={{ scale: 0.98 }}`

### Counter animation

useCountUp with easeOutExpo, triggered by IntersectionObserver at threshold 0.3

---

## SECTION 11 — RESPONSIVE BREAKPOINTS

Document every layout change per breakpoint across all pages and components.

Breakpoints (Tailwind defaults, document these explicitly):
- `sm`: 640px — mostly unused, minor text adjustments
- `md`: 768px — main mobile breakpoint. Navbar collapses, grids go to 1-col
- `lg`: 1024px — 2-col layouts activate (from 1-col on mobile)
- `xl`: 1280px — 3-col layouts activate (from 2-col on tablet)

Key responsive rules:
- Navbar: hamburger at < 768px
- Hero H1: 52px desktop → 36px mobile
- Hero padding: 160px desktop → 100px mobile
- Service cards grid: 3-col desktop → 2-col tablet → 1-col mobile
- Feature cards grid: 3-col desktop → 1-col mobile
- Process steps: horizontal desktop → vertical mobile (remove connector lines)
- Stats bar: 4-col desktop → 2-col mobile
- Contact form: 2-col desktop → 1-col mobile (booking embed below form)
- About founder: 2-col desktop → 1-col mobile (photo above, bio below)
- Section padding: 100px desktop → 60px mobile
- Container px: 80px desktop → 24px mobile

---

## SECTION 12 — SEO & METADATA

Document the Next.js metadata configuration.

### Base metadata (`app/layout.tsx`)
- Use `generateMetadata` pattern
- Default title template: `%s | [Agency Name]`
- Default description: from Sanity siteSettings
- OG image: `/og-image.png` (1200×630)
- Twitter card: summary_large_image
- Canonical URL: from NEXT_PUBLIC_SITE_URL env var
- robots: index, follow (except /api/*)

### Per-page metadata
Document the specific title + description formula for each page (already defined in Section 6).

### Structured data
Add JSON-LD `Organization` schema to homepage:
- name, url, logo, description, contactPoint (type: ContactPoint, contactType: sales), sameAs: [linkedinUrl]

---

## SECTION 13 — PERFORMANCE RULES

Document as enforced rules, not suggestions.

- All images: use `next/image` with proper width/height. No `<img>` tags.
- Fonts: use `next/font/google` with `display: swap`. Load Syne + Inter together.
- No client components by default. Mark `"use client"` only when: uses hooks, uses browser APIs, needs event listeners.
- Sanity data: fetch at build time for static sections. Use ISR with revalidate: 3600 for service pages.
- Cal.com: load as `<iframe>` with `loading="lazy"`
- Framer Motion: import from `framer-motion` with named imports only (tree-shaking)
- Icons: import individually from `lucide-react`, never `import * from`
- CSS: use Tailwind classes only. No CSS modules. No styled-components. Inline styles only for dynamic values (e.g. animation state).

---

## SECTION 14 — FILE NAMING & CODE CONVENTIONS

- Components: PascalCase (`ServiceCard.tsx`)
- Hooks: camelCase with `use` prefix (`useCountUp.ts`)
- Utils: camelCase (`formatDate.ts`)
- Sanity schemas: camelCase (`service.ts`, `siteSettings.ts`)
- Types: PascalCase interfaces, export from `types/index.ts`
- Constants: UPPER_SNAKE_CASE in `lib/constants.ts`
- Every component file exports one default component
- No barrel files (no `index.ts` re-exports in component folders — import paths must be explicit)
- All Tailwind classes sorted with prettier-plugin-tailwindcss

---

## SECTION 15 — CONTENT PLACEHOLDERS

Document the exact placeholder copy to use for every section while the real agency name/content is TBD.

- Agency name placeholder: `[Agency Name]`
- Hero headline: `Stop doing manually what a system can do in seconds.`
- Hero subtitle: `We build custom AI automation systems for mid-size businesses — eliminating manual work across ops, sales, and reporting.`
- Hero primary CTA: `Book a free strategy call →`
- Hero secondary CTA: `See how it works`
- Problem statement: `Most businesses are sitting on a goldmine of automation opportunities — and paying their best people to do work that software should handle.`
- Pain points: [`Your team spends hours every week copying data between tools`, `Reports take days to compile — and they're already outdated`, `Onboarding new clients involves the same 12 manual steps every time`, `You can't scale operations without scaling headcount`]
- Service 1: `Workflow Automation` — `We map and automate your most repetitive business processes end-to-end.`
- Service 2: `AI Integration` — `We connect large language models to your existing tools and workflows.`
- Service 3: `Reporting Automation` — `We build real-time dashboards and automated reporting pipelines.`
- Process step 1: `Discovery — We audit your current workflows and identify the highest-ROI automation opportunities.`
- Process step 2: `Design — We map the entire system before writing a single line of code.`
- Process step 3: `Build — We build, integrate, and test your automation stack against real scenarios.`
- Process step 4: `Handoff — Full documentation, team training, and 30-day support included.`
- Stats: [`80%` of manual reporting tasks can be fully automated, `25h+` saved per week on average, `3–6 weeks` average delivery time, `12x` average ROI multiplier]
- Differentiator 1: `We redesign before we automate — never automating a broken process.`
- Differentiator 2: `Every build ships with documentation your team can actually use.`
- Differentiator 3: `Async-first delivery — we fit your schedule, not ours.`
- Final CTA headline: `Ready to stop doing manually what a system can do automatically?`
- Final CTA subtext: `Book a free 30-minute strategy call. We'll map out 3 automation opportunities in your business — no commitment.`
- Contact headline: `Let's talk about what's slowing you down.`
- Contact subtext: `Book a free 30-min strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment.`
- Trust signal 1: `We reply within 24 hours.`
- Trust signal 2: `No sales pressure — just a real conversation.`
- Trust signal 3: `Your information stays private, always.`

---

## OUTPUT FORMAT INSTRUCTIONS

Generate the file as `CONSTITUTION.md`.

Use this structure:
- `#` for top-level section titles
- `##` for subsections
- `###` for component/schema names
- Code blocks for all code, config, and schema examples
- Tables for design tokens where appropriate
- Be exhaustive — if in doubt, include it

The file should be self-contained. A developer who has never spoken to anyone about this project should be able to read `CONSTITUTION.md` and build the entire site without asking a single question.

Total expected length: 1500–3000 lines. Do not summarize or cut corners. Every value must be explicit... ive already installed the nextjs, sanity, and talwind in the project "agentack-business-portfolio", so you can continue after that.

## Response snapshot

Created comprehensive CONSTITUTION.md file (2,500+ lines) with all 15 sections:
- Project overview with complete folder structure
- Brand & design tokens with Tailwind config
- 7-button system with full specs
- Complete component library (layout + UI primitives)
- Custom hooks (useCountUp, useScrollAnimation, useMediaQuery, cn)
- Page architecture for all 5 pages
- Section component specifications
- Sanity CMS schemas (service, siteSettings, teamMember, caseStudy, faq)
- API route for contact form
- Animation system with Framer Motion patterns
- Responsive breakpoints
- SEO & metadata configuration
- Performance rules
- File naming & code conventions
- Content placeholders

## Outcome

- ✅ **Impact**: Created single source of truth for entire AI automation agency website
- 🧪 **Tests**: N/A (documentation artifact)
- 📁 **Files**: `agentack-business-portfolio/CONSTITUTION.md` (new)
- 🔁 **Next prompts**: Implement Sanity schemas, create component library, build pages
- 🧠 **Reflection**: Constitution provides zero-ambiguity specs for any developer

## Evaluation notes (flywheel)

- **Failure modes observed**: None - document generation successful
- **Graders run and results**: N/A
- **Prompt variant**: N/A
- **Next experiment**: Begin implementation phase - start with Sanity schemas
