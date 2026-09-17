# Agentack Business Portfolio — Constitution

**Version**: 1.0.0  
**Ratified**: 2026-03-20  
**Last Amended**: 2026-03-20

---

## SECTION 1 — PROJECT OVERVIEW

### 1.1 Project Type

AI automation agency website targeting mid-size businesses (50–500 employees). Decision makers are ops directors, CTOs, and CEOs. The site is designed to convert visitors into booked strategy calls.

### 1.2 Business Goal

Convert website visitors into booked strategy calls through clear value proposition, social proof, and frictionless booking flow.

### 1.3 Target Client Profile

- **Company Size**: 50–500 employees
- **Decision Makers**: Ops Directors, CTOs, CEOs
- **Pain Points**: Manual data entry, repetitive reporting, scaling operations requires scaling headcount
- **Geography**: Primary markets — North America, Europe
- **Industries**: SaaS, Professional Services, E-commerce, Healthcare Tech, FinTech

### 1.4 Tech Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Next.js | 16.x | App Router, SSR, static generation |
| Language | TypeScript | 5.x | Type safety, strict mode |
| Styling | Tailwind CSS | 4.x | Utility-first CSS |
| CMS | Sanity | 4.x | Content management |
| Deployment | Vercel | — | Hosting, edge functions |
| Booking | Cal.com | — | Strategy call scheduling |
| Animation | Framer Motion | 12.x | Entrance animations, micro-interactions |
| Icons | Lucide React | latest | Icon library |
| Form Handling | React Hook Form + Zod | latest | Form validation |
| Fonts | Google Fonts | — | Syne, Inter, JetBrains Mono |

### 1.5 Folder Structure

```
agentack-business-portfolio/
├── app/
│   ├── admin/
│   │   └── studio/
│   │       └── [[...tool]]/
│   │           └── page.tsx          # Sanity Studio mount
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # Contact form handler
│   ├── contact/
│   │   └── page.tsx                  # Contact page
│   ├── services/
│   │   ├── [slug]/
│   │   │   └── page.tsx              # Individual service page (dynamic)
│   │   └── page.tsx                  # Services overview
│   ├── about/
│   │   └── page.tsx                  # About page
│   ├── globals.css                   # Global styles, Tailwind imports
│   ├── layout.tsx                    # Root layout with metadata
│   └── page.tsx                      # Homepage
├── components/
│   ├── layout/
│   │   ├── Container.tsx             # Max-width container wrapper
│   │   ├── Footer.tsx                # Site footer
│   │   ├── Navbar.tsx                # Sticky navigation
│   │   └── Section.tsx               # Section wrapper with padding variants
│   ├── sections/
│   │   ├── ContactFormSection.tsx    # Contact page form + Cal.com embed
│   │   ├── ContactHeroSection.tsx    # Contact page hero
│   │   ├── FinalCTASection.tsx       # Bottom CTA on all pages
│   │   ├── FounderSection.tsx        # About page founder bio
│   │   ├── HeroSection.tsx           # Homepage hero
│   │   ├── LogoStripSection.tsx      # Technology logo marquee
│   │   ├── MissionHeroSection.tsx    # About page hero
│   │   ├── OurApproachSection.tsx    # About page approach cards
│   │   ├── PageHeroSection.tsx       # Generic inner page hero
│   │   ├── ProblemSection.tsx        # Homepage problem statement
│   │   ├── ProcessSection.tsx        # Homepage 4-step process
│   │   ├── ProcessTeaserSection.tsx  # Services page compact process
│   │   ├── ServiceHeroSection.tsx    # Individual service page hero
│   │   ├── ServicesCTAStrip.tsx      # Services page CTA bar
│   │   ├── ServicesOverviewSection.tsx # Homepage services grid
│   │   ├── ServicesPageHeroSection.tsx # Services overview hero
│   │   ├── StatsSection.tsx          # Homepage stats counter bar
│   │   ├── TrustSignalsSection.tsx   # Contact page trust badges
│   │   ├── WhatIsIncludedSection.tsx # Service page features grid
│   │   ├── WhoIsItForSection.tsx     # Service page audience checklist
│   │   ├── WhyUsSection.tsx          # Homepage differentiators
│   │   └── ToolsWeUseSection.tsx     # Service page tools grid
│   ├── ui/
│   │   ├── Accordion.tsx             # FAQ accordion
│   │   ├── Badge.tsx                 # Eyebrow badges/tags
│   │   ├── Divider.tsx               # Section dividers
│   │   ├── FeatureCard.tsx           # Feature/benefit card
│   │   ├── Input.tsx                 # Form input field
│   │   ├── LogoStrip.tsx             # Auto-scrolling logo marquee
│   │   ├── ServiceCard.tsx           # Service overview card
│   │   ├── StatCard.tsx              # Animated stat counter
│   │   ├── StepCard.tsx              # Process step card
│   │   ├── TestimonialCard.tsx       # Testimonial quote card
│   │   ├── Textarea.tsx              # Form textarea field
│   │   └── Button.tsx                # Button component with variants
│   └── shared/
│       ├── CalEmbed.tsx              # Cal.com iframe wrapper
│       └── SEO.tsx                   # JSON-LD structured data
├── lib/
│   ├── hooks/
│   │   ├── useCountUp.ts             # Number counter animation
│   │   ├── useMediaQuery.ts          # Responsive breakpoint hook
│   │   └── useScrollAnimation.ts     # IntersectionObserver animation trigger
│   ├── utils/
│   │   └── cn.ts                     # Classname merger (clsx + twMerge)
│   ├── constants.ts                  # Static copy, placeholder content
│   └── sanity/
│       ├── client.ts                 # Sanity client instance
│       └── queries.ts                # GROQ queries
├── sanity/
│   ├── schemas/
│   │   ├── faq.ts                    # FAQ document schema
│   │   ├── service.ts                # Service document schema
│   │   ├── siteSettings.ts           # Singleton site config schema
│   │   ├── teamMember.ts             # Team member schema
│   │   └── caseStudy.ts              # Case study schema (future)
│   ├── lib/
│   │   └── client.ts                 # Sanity client (if separate)
│   ├── env.ts                        # Sanity env vars (existing)
│   ├── sanity.config.ts              # Sanity Studio config (existing)
│   └── structure.ts                  # Sanity desk structure (existing)
├── styles/
│   └── globals.css                   # Tailwind base, components (merged into app/globals.css)
├── types/
│   ├── index.ts                      # Shared TypeScript interfaces
│   └── sanity.ts                     # Sanity-generated types
├── public/
│   ├── fonts/                        # Self-hosted fonts (if needed)
│   ├── images/
│   │   └── og-image.png              # Default OG image (1200×630)
│   └── logo/
│       └── logo.svg                  # Agency logo
├── .env.local                        # Local environment variables
├── .env.example                      # Environment variable template
├── next.config.ts                    # Next.js config
├── tailwind.config.ts                # Tailwind theme extensions
├── tsconfig.json                     # TypeScript config
├── package.json                      # Dependencies
└── README.md                         # Project documentation
```

### 1.6 Environment Variables

Create `.env.local` and `.env.example` with the following:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-20
SANITY_API_TOKEN=<write-token-for-ISR>

# Cal.com Booking
NEXT_PUBLIC_CAL_LINK=https://cal.com/your-username/30min

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Contact Form (Resend)
RESEND_API_KEY=<resend-api-key>
CONTACT_EMAIL_TO=hello@yourdomain.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=<google-analytics-id>
```

---

## SECTION 2 — BRAND & DESIGN TOKENS

### 2.1 Color Palette

#### Primary Colors (Green System)

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `green-primary` | `#00FF88` | Main CTA buttons, logo, key highlights |
| `green-hover` | `#00E87A` | Hover state of primary green |
| `green-dark` | `#001A0D` | Text on green backgrounds |
| `green-mid` | `#003320` | Gradient end stops |
| `green-tinted` | `#0D1A12` | Stats section background |

#### Secondary Colors (Muted Sage)

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `sage-dark` | `#3A4A42` | Card borders, dividers, ghost button borders |
| `sage-mid` | `#8A9A94` | Body text, secondary labels, nav links |
| `sage-light` | `#C8D4CE` | Ghost button text, subtle UI elements |

#### Tertiary Colors (Frost White)

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `frost-white` | `#F0F2F0` | Headlines on dark backgrounds |
| `frost-mint` | `#E8F0EC` | Light section backgrounds |
| `surface-dark` | `#111714` | Card backgrounds |
| `border-dark` | `#1E2E26` | Card borders on dark surfaces |

#### Accent Colors (Electric Teal)

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `teal-primary` | `#00E5CC` | Badges, tags, hover states, card link buttons |
| `teal-mid` | `#00B8A6` | Active states |
| `teal-glow` | `rgba(0,229,204,0.1)` | Subtle background tints |

#### Semantic Colors

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `red-danger` | `#A32D2D` | Destructive text links ONLY (Cancel, Delete) |

### 2.2 Tailwind CSS Configuration

Add the following to `tailwind.config.ts`:

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
        // Primary Green
        'green-primary': '#00FF88',
        'green-hover': '#00E87A',
        'green-dark': '#001A0D',
        'green-mid': '#003320',
        'green-tinted': '#0D1A12',
        
        // Base Blacks
        'black-base': '#000000',
        'black-2': '#080808',
        'black-3': '#050505',
        
        // Muted Sage
        'sage-dark': '#3A4A42',
        'sage-mid': '#8A9A94',
        'sage-light': '#C8D4CE',
        
        // Frost White
        'frost-white': '#F0F2F0',
        'frost-mint': '#E8F0EC',
        'surface-dark': '#111714',
        'border-dark': '#1E2E26',
        
        // Electric Teal
        'teal-primary': '#00E5CC',
        'teal-mid': '#00B8A6',
        
        // Semantic
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
        'container-px-mobile': '24px',
        'container-px-tablet': '40px',
        'container-px-desktop': '80px',
      },
      borderRadius: {
        'card': '12px',
        'btn-hero': '6px',
        'btn-nav': '5px',
        'btn-form': '8px',
        'badge': '4px',
        'pill': '999px',
      },
      transitionDuration: {
        'DEFAULT': '150ms',
        'color': '150ms',
        'transform': '200ms',
      },
      boxShadow: {
        'focus': '0 0 0 2px #00FF88',
      },
    },
  },
  plugins: [],
} satisfies Config
```

### 2.3 Typography

#### Font Families

| Usage | Font | Weights | Source |
|-------|------|---------|--------|
| Display/Headings | Syne | 500, 700 | Google Fonts |
| Body | Inter | 400, 500 | Google Fonts |
| Mono | JetBrains Mono | 400 | Google Fonts |

#### Font Size Scale

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

#### Font Implementation in `app/layout.tsx`

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
```

### 2.4 Spacing Scale

#### Section Vertical Padding

| Token | Value | Usage |
|-------|-------|-------|
| `py-section-xl` | 120px top/bottom | Hero sections, final CTA |
| `py-section-lg` | 100px top/bottom | Most content sections |
| `py-section-md` | 80px top/bottom | Inner page sections |
| `py-section-sm` | 60px top/bottom | Strips, stats bar |

#### Container & Layout Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `container-max` | 1200px | Max content width |
| `container-px-mobile` | 24px | Mobile horizontal padding |
| `container-px-tablet` | 40px | Tablet horizontal padding |
| `container-px-desktop` | 80px | Desktop horizontal padding |
| `card-padding` | 24px | Internal card padding |
| `card-gap` | 16px | Gap between cards in grid |
| `component-gap` | 12px | Gap between inline components |

### 2.5 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-card` | 12px | All cards |
| `rounded-btn-hero` | 6px | Hero CTA, section CTA buttons |
| `rounded-btn-nav` | 5px | Navbar CTA button |
| `rounded-btn-form` | 8px | Form submit button |
| `rounded-badge` | 4px | Rectangular badges |
| `rounded-pill` | 999px | Pill-shaped tags |

### 2.6 Shadows

**Rule**: No box shadows used anywhere on this site EXCEPT:

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-focus` | `0 0 0 2px #00FF88` | Keyboard focus state on interactive elements |

### 2.7 Transitions

| Property | Duration | Easing | Usage |
|----------|----------|--------|-------|
| Default | 150ms | ease | General transitions |
| Color/Background | 150ms | ease | Hover state changes |
| Transform | 200ms | ease | Scale, translate animations |

### 2.8 Background Alternation Pattern

Sections must NEVER use the same background color consecutively. Follow this sequence:

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

## SECTION 3 — BUTTON SYSTEM

### Button Component API (`components/ui/Button.tsx`)

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'hero-cta' | 'ghost-paired' | 'navbar-cta' | 'section-cta' | 'form-submit' | 'card-link' | 'text-link'
  isLoading?: boolean
  children: React.ReactNode
  href?: string  // If provided, renders as anchor tag
}
```

### Button 1 — Hero CTA ("The Popper")

| Property | Value |
|----------|-------|
| **Background** | `#00FF88` |
| **Text Color** | `#001A0D` |
| **Border** | none |
| **Border Radius** | 6px (`rounded-btn-hero`) |
| **Padding** | 15px 36px |
| **Font Size** | 15px |
| **Font Weight** | 500 |
| **Letter Spacing** | 0.01em |
| **Hover Background** | `#00E87A` |
| **Active State** | `scale(0.98)` |
| **Disabled Background** | `#003322` |
| **Disabled Text** | `#1A4A32` |
| **Disabled Cursor** | not-allowed |
| **Loading Background** | `#003322` |
| **Loading Text** | `#1A4A32` |
| **Loading Label** | "Processing..." |
| **Icon** | Optional trailing arrow (16px) |

**Usage Rules**:
- Used on: Homepage hero section ONLY, individual service page hero
- **CRITICAL**: Maximum ONE on screen at any time
- **CRITICAL**: Never use this button anywhere below the first scroll on homepage

**Tailwind Classes**:
```tsx
className="bg-green-primary text-green-dark font-medium text-[15px] tracking-[0.01em] px-[36px] py-[15px] rounded-btn-hero hover:bg-green-hover active:scale-[0.98] disabled:bg-[#003322] disabled:text-[#1A4A32] disabled:cursor-not-allowed transition-all duration-150 ease"
```

### Button 2 — Ghost Paired ("The Sidekick")

| Property | Value |
|----------|-------|
| **Background** | transparent |
| **Text Color** | `#C8D4CE` (sage-light) |
| **Border** | 0.5px solid `#3A4A42` (sage-dark) |
| **Border Radius** | 6px (`rounded-btn-hero`) |
| **Padding** | 14px 32px (same height as Hero CTA) |
| **Font Size** | 15px |
| **Font Weight** | 500 |
| **Hover Border** | `#8A9A94` (sage-mid) |
| **Hover Text** | `#F0F2F0` (frost-white) |
| **Active State** | `scale(0.98)` |

**Usage Rules**:
- Used on: Always paired next to Button 1 in hero
- **CRITICAL**: Never used alone
- **CRITICAL**: Always the second button in a pair

**Tailwind Classes**:
```tsx
className="bg-transparent text-sage-light font-medium text-[15px] px-[32px] py-[14px] rounded-btn-hero border border-sage-dark hover:border-sage-mid hover:text-frost-white active:scale-[0.98] transition-all duration-150 ease"
```

### Button 3 — Navbar CTA ("The Persistent Nudge")

| Property | Value |
|----------|-------|
| **Background** | `#00FF88` |
| **Text Color** | `#001A0D` |
| **Border** | none |
| **Border Radius** | 5px (`rounded-btn-nav`) |
| **Padding** | 7px 16px |
| **Font Size** | 12px |
| **Font Weight** | 500 |
| **Letter Spacing** | 0.01em |
| **Hover Background** | `#00E87A` |

**Usage Rules**:
- Used on: Navbar only, right side
- Persistent on all pages
- Label always: "Book a call" or "Book a free call"

**Tailwind Classes**:
```tsx
className="bg-green-primary text-green-dark font-medium text-[12px] tracking-[0.01em] px-[16px] py-[7px] rounded-btn-nav hover:bg-green-hover transition-all duration-150 ease"
```

### Button 4 — Section CTA ("The Dark Closer")

| Property | Value |
|----------|-------|
| **Background** | transparent |
| **Text Color** | `#00FF88` |
| **Border** | 0.5px solid `rgba(0,255,136,0.35)` |
| **Border Radius** | 6px (`rounded-btn-hero`) |
| **Padding** | 13px 30px |
| **Font Size** | 14px |
| **Font Weight** | 500 |
| **Letter Spacing** | 0.01em |
| **Hover Background** | `rgba(0,255,136,0.06)` |
| **Hover Border** | `rgba(0,255,136,0.6)` |
| **Active State** | `scale(0.98)` |

**Usage Rules**:
- Used on: CTA strip sections, final CTA section on every page, services page CTA strip
- **CRITICAL**: Used on dark backgrounds (`#000`, `#080808`) only
- **CRITICAL**: Never on light surfaces

**Tailwind Classes**:
```tsx
className="bg-transparent text-green-primary font-medium text-[14px] tracking-[0.01em] px-[30px] py-[13px] rounded-btn-hero border border-[rgba(0,255,136,0.35)] hover:bg-[rgba(0,255,136,0.06)] hover:border-[rgba(0,255,136,0.6)] active:scale-[0.98] transition-all duration-150 ease"
```

### Button 5 — Form Submit ("The Converter")

| Property | Value |
|----------|-------|
| **Background** | `#00FF88` |
| **Text Color** | `#001A0D` |
| **Border** | none |
| **Border Radius** | 8px (`rounded-btn-form`) |
| **Padding** | 13px top/bottom |
| **Width** | Full width of form container |
| **Font Size** | 14px |
| **Font Weight** | 500 |
| **Letter Spacing** | 0.01em |
| **Hover Background** | `#00E87A` |
| **Loading Background** | `#003322` |
| **Loading Text** | `#1A4A32` |
| **Loading Label** | "Sending..." with spinner icon left |
| **Disabled Background** | `#003322` |
| **Disabled Text** | `#1A4A32` |
| **Disabled Opacity** | 0.5 |
| **Disabled Cursor** | not-allowed |

**Usage Rules**:
- Used on: Contact page form submit ONLY
- **CRITICAL**: Always full-width
- **CRITICAL**: Never used outside a form container

**Tailwind Classes**:
```tsx
className="bg-green-primary text-green-dark font-medium text-[14px] tracking-[0.01em] px-[13px] py-[13px] rounded-btn-form w-full hover:bg-green-hover disabled:bg-[#003322] disabled:text-[#1A4A32] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ease"
```

### Button 6 — Card Link ("The Quiet Guide")

| Property | Value |
|----------|-------|
| **Background** | none |
| **Text Color** | `#00E5CC` (teal-primary) |
| **Border** | none |
| **Underline** | border-bottom 0.5px solid `rgba(0,229,204,0.4)` |
| **Padding Bottom** | 1px (for underline gap) |
| **Font Size** | 12px |
| **Font Weight** | 500 |
| **Hover Text** | `#00FFE5` |
| **Hover Border** | `rgba(0,255,229,0.6)` |

**Usage Rules**:
- Used on: Inside service cards, feature cards — "Learn more →" links
- **CRITICAL**: Never a filled button inside a card
- **CRITICAL**: Teal only — never green inside a card

**Tailwind Classes**:
```tsx
className="bg-transparent text-teal-primary font-medium text-[12px] border-b border-[rgba(0,229,204,0.4)] pb-[1px] hover:text-[#00FFE5] hover:border-[rgba(0,255,229,0.6)] transition-all duration-150 ease"
```

### Button 7 — Text Link ("The Minimalist")

| Property | Value |
|----------|-------|
| **Background** | none |
| **Text Color** | `#5A7068` (default) or `#A32D2D` (danger variant) |
| **Border** | none |
| **Text Decoration** | underline, offset 3px, color at 40% opacity |
| **Font Size** | 12px |
| **Font Weight** | 400 |

**Usage Rules**:
- Used on: Footer nav links, breadcrumbs, "← Back to services", "Cancel" in forms
- **CRITICAL**: Zero visual weight
- **CRITICAL**: The only place red (`#A32D2D`) appears on the site is the danger variant

**Tailwind Classes**:
```tsx
// Default variant
className="bg-transparent text-[#5A7068] font-normal text-[12px] underline underline-offset-[3px] decoration-[rgba(90,112,104,0.4)]"

// Danger variant
className="bg-transparent text-red-danger font-normal text-[12px] underline underline-offset-[3px] decoration-[rgba(163,45,45,0.4)]"
```

---

## SECTION 4 — COMPONENT LIBRARY

### 4.1 Layout Components

#### Navbar (`components/layout/Navbar.tsx`)

**Props**: None (uses static config or Sanity siteSettings)

**Visual Specs**:
| Property | Value |
|----------|-------|
| Height | 64px |
| Background | `#000000`, on scroll adds `backdrop-blur-md` and `border-bottom 0.5px solid #1A1A1A` |
| Position | `sticky top-0 z-50` |
| Layout | `flex justify-between items-center`, max-width 1200px, px 40px |

**Structure**:
- **Left**: Logo (text or SVG) in `#00FF88`
- **Center**: Nav links — Services (dropdown trigger) | About | Contact
- **Right**: Button 3 (Navbar CTA)

**Nav Link Styles**:
- Font: 12px / 400
- Color: `#8A9A94` (sage-mid)
- Hover color: `#F0F2F0` (frost-white)
- Active/current page: color `#00FF88`, bg `rgba(0,255,136,0.06)`, border-radius 5px, padding 6px 10px

**Mobile Breakpoint (768px)**:
- Hamburger menu replaces center + right
- Slides down as full-width drawer
- Drawer background: `#000000`, full viewport height

**Services Dropdown**:
- Opens on hover (desktop), tap (mobile)
- Panel: bg `#0D1A0D`, border 0.5px solid `#1E3020`, border-radius 8px, padding 8px 0
- Each item: service name 12px `#C8D4CE` + micro-desc 11px `#5A7068`, padding 10px 16px
- Hover: bg `rgba(0,255,136,0.05)` + text `#00FF88`
- Bottom: divider + "View all services →" in `#00C46A`

**Implementation**:
```typescript
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`
      sticky top-0 z-50 h-16 bg-black-base transition-all duration-150
      ${isScrolled ? 'backdrop-blur-md border-b border-[#1A1A1A]' : ''}
    `}>
      <div className="max-w-[1200px] mx-auto px-[40px] h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-green-primary font-display font-medium text-xl">
          [Agency Name]
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className="text-sage-mid text-[12px] font-normal hover:text-frost-white flex items-center gap-1">
              Services
              <ChevronDown className={`w-3 h-3 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#0D1A0D] border border-[#1E3020] rounded-lg py-2 min-w-[240px]">
                {/* Service items mapped from Sanity */}
                <Link href="/services/workflow-automation" className="block px-4 py-2.5 hover:bg-[rgba(0,255,136,0.05)] hover:text-green-primary">
                  <div className="text-[12px] text-frost-white">Workflow Automation</div>
                  <div className="text-[11px] text-[#5A7068]">End-to-end process automation</div>
                </Link>
                {/* More items... */}
                <div className="border-t border-[#1E3020] mt-2 pt-2 px-4">
                  <Link href="/services" className="text-[12px] text-[#00C46A]">View all services →</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-sage-mid text-[12px] font-normal hover:text-frost-white">
            About
          </Link>
          <Link href="/contact" className="text-sage-mid text-[12px] font-normal hover:text-frost-white">
            Contact
          </Link>

          {/* Navbar CTA */}
          <Link href="/contact" className="bg-green-primary text-green-dark font-medium text-[12px] tracking-[0.01em] px-[16px] py-[7px] rounded-btn-nav hover:bg-green-hover transition-all duration-150">
            Book a call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-frost-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black-base border-b border-[#1A1A1A] py-8 px-6 flex flex-col gap-6">
          <Link href="/services" className="text-frost-white text-[14px]">Services</Link>
          <Link href="/about" className="text-frost-white text-[14px]">About</Link>
          <Link href="/contact" className="text-frost-white text-[14px]">Contact</Link>
          <Link href="/contact" className="bg-green-primary text-green-dark font-medium text-[14px] text-center py-3 rounded-btn-hero">
            Book a call
          </Link>
        </div>
      )}
    </nav>
  )
}
```

#### Footer (`components/layout/Footer.tsx`)

**Visual Specs**:
| Property | Value |
|----------|-------|
| Background | `#050505` (black-3) |
| Border Top | 0.5px solid `#1A1A1A` |
| Padding | 48px 0 32px |
| Layout | max-width 1200px, grid 3 columns |

**Structure**:
- **Col 1**: Logo + 1-line tagline in `#5A7068` at 13px
- **Col 2**: Nav links (Button 7 style) — Services, About, Contact
- **Col 3**: LinkedIn icon link (only social)

**Bottom Bar**:
- Border-top: 0.5px `#1A1A1A`
- Padding-top: 24px
- Copyright text: `#3A4A42` 11px

```typescript
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black-3 border-t border-[#1A1A1A] py-12">
      <div className="max-w-[1200px] mx-auto px-[40px] grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Col 1: Logo + Tagline */}
        <div>
          <div className="text-green-primary font-display font-medium text-xl mb-3">
            [Agency Name]
          </div>
          <p className="text-[#5A7068] text-[13px]">
            We build custom AI automation systems for mid-size businesses.
          </p>
        </div>

        {/* Col 2: Nav Links */}
        <div className="flex flex-col gap-3">
          <Link href="/services" className="text-sage-mid text-[12px] hover:text-frost-white">
            Services
          </Link>
          <Link href="/about" className="text-sage-mid text-[12px] hover:text-frost-white">
            About
          </Link>
          <Link href="/contact" className="text-sage-mid text-[12px] hover:text-frost-white">
            Contact
          </Link>
        </div>

        {/* Col 3: LinkedIn */}
        <div>
          <a 
            href="https://linkedin.com/company/[agency-name]" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sage-mid hover:text-frost-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-[40px] mt-8 pt-6 border-t border-[#1A1A1A]">
        <p className="text-sage-dark text-[11px]">
          © {new Date().getFullYear()} [Agency Name]. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
```

#### Container (`components/layout/Container.tsx`)

**Props**:
```typescript
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}
```

**Size Variants**:
| Size | Max Width |
|------|-----------|
| `sm` | 640px |
| `md` | 800px (default) |
| `lg` | 1200px |

**Always Applied**:
- `mx-auto`
- `px-[24px]` mobile
- `px-[40px]` tablet
- `px-[80px]` desktop

```typescript
import { cn } from '@/lib/utils/cn'

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

export function Container({ size = 'md', as: Component = 'div', className, children }: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-[640px]',
    md: 'max-w-[800px]',
    lg: 'max-w-[1200px]',
  }

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

#### Section (`components/layout/Section.tsx`)

**Props**:
```typescript
interface SectionProps {
  bg?: string
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}
```

**Padding Variants**:
| Variant | Padding |
|---------|---------|
| `xl` | `py-[120px]` |
| `lg` | `py-[100px]` |
| `md` | `py-[80px]` |
| `sm` | `py-[60px]` |

```typescript
import { cn } from '@/lib/utils/cn'

interface SectionProps {
  bg?: string
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}

export function Section({ bg, paddingY = 'lg', className, children }: SectionProps) {
  const paddingClasses = {
    xl: 'py-[120px]',
    lg: 'py-[100px]',
    md: 'py-[80px]',
    sm: 'py-[60px]',
  }

  return (
    <section className={cn(paddingClasses[paddingY], className)} style={{ backgroundColor: bg }}>
      {children}
    </section>
  )
}
```

### 4.2 UI Primitive Components

#### SectionHeading (`components/ui/SectionHeading.tsx`)

**Props**:
```typescript
interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
}
```

**Visual Specs**:
| Element | Font | Color | Margin |
|---------|------|-------|--------|
| Eyebrow | 11px / 500 / uppercase / 0.08em | `#00E5CC` | mb-3 (12px) |
| Heading | Syne 42px / 500 / 1.2 | `#F0F2F0` | mb-4 (16px) |
| Subtitle | Inter 16px / 400 / 1.7 | `#8A9A94` | — |
| Subtitle Max Width | — | — | 560px |

```typescript
import { cn } from '@/lib/utils/cn'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, heading, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left')}>
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

#### Badge (`components/ui/Badge.tsx`)

**Props**:
```typescript
interface BadgeProps {
  variant: 'green' | 'teal' | 'sage' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  children: React.ReactNode
  className?: string
}
```

**Variant Styles**:
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| `green` | `rgba(0,255,136,0.12)` | `#00C46A` | `rgba(0,255,136,0.25)` |
| `teal` | `rgba(0,229,204,0.1)` | `#00E5CC` | `rgba(0,229,204,0.2)` |
| `sage` | `rgba(58,74,66,0.4)` | `#C8D4CE` | `#3A4A42` |
| `outline` | transparent | `#8A9A94` | `#3A4A42` |

**Size Variants**:
| Size | Font Size | Padding | Border Radius |
|------|-----------|---------|---------------|
| `sm` | 10px | 2px 8px | 4px |
| `md` | 12px | 4px 12px | 4px |
| `pill` | 12px | 4px 14px | 999px |

```typescript
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
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', variant === 'green' ? 'bg-[#00C46A]' : variant === 'teal' ? 'bg-teal-primary' : 'bg-sage-light')} />}
      {children}
    </span>
  )
}
```

#### ServiceCard (`components/ui/ServiceCard.tsx`)

**Props**:
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

**Visual Specs**:
| Property | Value |
|----------|-------|
| Background | `#111714` (surface-dark) |
| Border | 0.5px solid `#1E2E26` (border-dark) |
| Border Radius | 12px (rounded-card) |
| Padding | 24px |
| Hover Border | `#3A4A42` (sage-dark) |
| Transition | 150ms |

**Icon Container**:
- Size: 32px × 32px
- Border Radius: 6px
- Background: `rgba(0,229,204,0.1)`
- Icon: 16px × 16px, color `#00E5CC`

**Typography**:
| Element | Font | Color | Margin |
|---------|------|-------|--------|
| Title | 16px / 500 | `#F0F2F0` | mt-3 (12px) |
| Description | 13px / 400 / 1.6 | `#5A7068` | mt-1 (4px) |
| Outcomes | 12px / 400 | `#8A9A94` | mt-4 (16px) |
| Outcome Dot | 6px circle | `#00FF88` | — |

```typescript
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
      
      {/* Icon */}
      <div className="w-8 h-8 rounded-btn-hero bg-[rgba(0,229,204,0.1)] flex items-center justify-center text-teal-primary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-body font-medium text-[16px] text-frost-white mt-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body font-normal text-[13px] leading-[1.6] text-[#5A7068] mt-1">
        {description}
      </p>

      {/* Outcomes */}
      <ul className="mt-4 space-y-2">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-primary mt-1.5 flex-shrink-0" />
            <span className="font-body font-normal text-[12px] text-sage-mid">{outcome}</span>
          </li>
        ))}
      </ul>

      {/* Learn More Link */}
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

#### StatCard (`components/ui/StatCard.tsx`)

**Props**:
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

**Visual Specs**:
| Property | Value |
|----------|-------|
| Background | transparent (sits on `#0D1A12` section) |
| Number Font | Syne 42px / 500 |
| Number Color | `#00FF88` |
| Number Line Height | 1 |
| Label Font | 13px / 400 |
| Label Color | `#5A7068` |
| Label Margin | mt-1.5 (6px) |

**Animation**:
- Uses `useCountUp` hook
- Triggers on scroll intersection (threshold 0.3)
- Default duration: 2000ms
- Easing: easeOutExpo

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

  // Note: In actual implementation, trigger on IntersectionObserver
  // This is simplified for the template

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

#### StepCard (`components/ui/StepCard.tsx`)

**Props**:
```typescript
interface StepCardProps {
  step: number
  title: string
  description: string
  isLast?: boolean
}
```

**Visual Specs**:
| Property | Value |
|----------|-------|
| Border Left | 2px solid `#00FF88` |
| Border Radius | 0 8px 8px 0 |
| Background | transparent |
| Padding | 16px 20px |

**Typography**:
| Element | Font | Color | Margin |
|---------|------|-------|--------|
| Step Number | JetBrains Mono 11px / 400 | `#3A4A42` | — |
| Title | 15px / 500 | `#F0F2F0` | mt-1 (4px) |
| Description | 13px / 400 / 1.6 | `#5A7068` | mt-1 (4px) |

**Connector**:
- Dashed horizontal line between steps
- 1px dashed `#1E2E26`

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
      
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute top-1/2 left-full w-8 border-t border-dashed border-[#1E2E26] hidden lg:block" />
      )}
    </div>
  )
}
```

#### FeatureCard (`components/ui/FeatureCard.tsx`)

**Props**:
```typescript
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'green' | 'teal'
}
```

**Visual Specs**:
| Property | Value |
|----------|-------|
| Background | `#111714` (surface-dark) |
| Border | 0.5px solid `#1E2E26` (border-dark) |
| Border Radius | 12px (rounded-card) |
| Padding | 24px |

**Icon Container**:
- Size: 28px × 28px
- Border Radius: 6px
- Background: `rgba(0,229,204,0.1)` for teal or `rgba(0,255,136,0.1)` for green

**Typography**:
| Element | Font | Color | Margin |
|---------|------|-------|--------|
| Title | 14px / 500 | `#F0F2F0` | mt-3 (12px) |
| Description | 13px / 400 / 1.6 | `#5A7068` | mt-1 (4px) |

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

#### Input (`components/ui/Input.tsx`)

**Props**:
```typescript
interface InputProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  type?: string
  id: string
  register?: any  // React Hook Form register
}
```

**Visual Specs**:
| Element | Property | Value |
|---------|----------|-------|
| Label | Font | 12px / 500 |
| Label | Color | `#8A9A94` |
| Label | Margin Bottom | 6px |
| Input | Background | transparent |
| Input | Border | 0.5px solid `#2A3A30` |
| Input | Border Radius | 7px |
| Input | Padding | 10px 14px |
| Input | Font | 13px / 400 |
| Input | Color | `#C8D4CE` |
| Input | Placeholder | `#3A4A42` |
| Focus | Border Color | `#00FF88` |
| Focus | Ring | `0 0 0 1px rgba(0,255,136,0.2)` |
| Error | Border Color | `#A32D2D` |
| Error Message | Font | 11px |
| Error Message | Color | `#A32D2D` |

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

#### Textarea (`components/ui/Textarea.tsx`)

**Props**:
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

**Same as Input**, plus:
- `rows`: default 4
- `resize`: vertical only

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

#### LogoStrip (`components/ui/LogoStrip.tsx`)

**Props**:
```typescript
interface LogoStripProps {
  logos: Array<{ name: string; logo?: string }>
  label?: string
  speed?: number
}
```

**Visual Specs**:
| Element | Property | Value |
|---------|----------|-------|
| Label | Font | 10px / 500 / uppercase / 0.08em |
| Label | Color | `#3A4A42` |
| Label | Alignment | centered |
| Label | Margin Bottom | 20px |
| Logo Item | Font | JetBrains Mono 11px / 500 |
| Logo Item | Color | `#C8D4CE` |
| Logo Item | Background | `#1A2A1A` |
| Logo Item | Border | 0.5px solid `#2A4A2A` |
| Logo Item | Border Radius | 6px |
| Logo Item | Padding | 5px 12px |
| Strip | Opacity | 0.45 |
| Strip | Fade Edges | linear-gradient mask left/right 60px |

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
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r from-black-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-black-base to-transparent z-10" />
        
        {/* Marquee */}
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

#### Accordion (`components/ui/Accordion.tsx`)

**Props**:
```typescript
interface AccordionProps {
  items: Array<{ question: string; answer: string }>
  allowMultiple?: boolean
}
```

**Visual Specs**:
| Element | Property | Value |
|---------|----------|-------|
| Item Border Bottom | — | 0.5px solid `#1E2E26` |
| Question | Font | 14px / 500 |
| Question | Color | `#F0F2F0` |
| Question | Padding | 20px 0 |
| Question | Cursor | pointer |
| Question | Hover Color | `#00FF88` |
| Chevron | Size | 16px |
| Chevron | Color | `#5A7068` |
| Chevron | Rotate | 180deg on open |
| Answer | Font | 13px / 400 / 1.7 |
| Answer | Color | `#8A9A94` |
| Answer | Padding Bottom | 20px |
| Animation | — | Framer Motion height 200ms ease |

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
    if (allowMultiple) {
      setOpenIndex(openIndex === index ? null : index)
    } else {
      setOpenIndex(openIndex === index ? null : index)
    }
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

#### TestimonialCard (`components/ui/TestimonialCard.tsx`)

**Props**:
```typescript
interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}
```

**Visual Specs**:
| Property | Value |
|----------|-------|
| Background | `#111714` (surface-dark) |
| Border | 0.5px solid `#1E2E26` (border-dark) |
| Border Left | 2px solid `#00FF88` |
| Border Radius | 0 12px 12px 0 |
| Padding | 28px 24px |

**Typography**:
| Element | Font | Color | Notes |
|---------|------|-------|-------|
| Quote Mark | Syne 48px | `#00FF88` | opacity 0.3, decorative |
| Quote Text | 15px / 400 / 1.7 | `#C8D4CE` | italic |
| Name | 13px / 500 | `#F0F2F0` | mt-4 (16px) |
| Role + Company | 12px / 400 | `#5A7068` | — |

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
      {/* Decorative Quote Mark */}
      <div className="font-display text-[48px] text-green-primary opacity-30 absolute top-4 left-4">
        "
      </div>
      
      {/* Quote Text */}
      <p className="font-body font-normal text-[15px] leading-[1.7] text-sage-light italic relative z-10">
        {quote}
      </p>

      {/* Attribution */}
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

#### Divider (`components/ui/Divider.tsx`)

**Props**:
```typescript
interface DividerProps {
  label?: string
  color?: string
  className?: string
}
```

**Default**:
- 0.5px solid `#1A1A1A`
- Full width

**With Label**:
- Label centered, line on both sides
- Label: 11px `#3A4A42`

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

## SECTION 5 — CUSTOM HOOKS

### useCountUp (`lib/hooks/useCountUp.ts`)

**Purpose**: Animate numbers from a start value to an end value with configurable easing, duration, and formatting.

**Parameters**:
```typescript
interface UseCountUpOptions {
  end: number                    // Target value
  start?: number                 // Starting value (default: 0)
  duration?: number              // Animation duration in ms (default: 2000)
  decimals?: number              // Decimal places (default: 0)
  easing?: 'linear' | 'easeOut' | 'easeOutExpo' | 'spring'  // default: 'easeOutExpo'
  prefix?: string                // e.g., "$", "+"
  suffix?: string                // e.g., "%", "h+"
  separator?: string             // e.g., "," for thousands (default: ',')
  startOnMount?: boolean         // Auto-start on mount (default: true)
  onComplete?: () => void        // Callback when animation finishes
}
```

**Returns**:
```typescript
{
  value: string,      // Formatted string value
  raw: number,        // Current raw numeric value
  isRunning: boolean, // Animation in progress
  start: () => void,  // Manually start animation
  reset: () => void,  // Reset to start value
  pause: () => void,  // Pause animation
}
```

**Internal Logic**:
- Uses `requestAnimationFrame` for smooth animation
- Applies easing function to interpolation
- Formats output with separator, prefix, suffix
- Handles negative numbers correctly

**Implementation**:
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

### useScrollAnimation (`lib/hooks/useScrollAnimation.ts`)

**Purpose**: Trigger animations when elements enter viewport using IntersectionObserver.

**Parameters**:
```typescript
interface UseScrollAnimationOptions {
  threshold?: number   // Intersection threshold (default: 0.15)
  once?: boolean       // Fire only first time (default: true)
}
```

**Returns**:
```typescript
{
  ref: RefObject<HTMLDivElement>,  // Attach to element
  isVisible: boolean,              // Currently in viewport
}
```

**Implementation**:
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

### useMediaQuery (`lib/hooks/useMediaQuery.ts`)

**Purpose**: Responsive breakpoint detection, SSR-safe.

**Parameters**:
```typescript
query: string  // e.g., '(min-width: 768px)'
```

**Returns**: `boolean`

**Breakpoints**:
| Name | Value | Tailwind |
|------|-------|----------|
| sm | 640px | `sm` |
| md | 768px | `md` |
| lg | 1024px | `lg` |
| xl | 1280px | `xl` |

**Implementation**:
```typescript
'use client'

import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // SSR safe: return false on server
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

// Convenience hooks
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

### cn Utility (`lib/utils/cn.ts`)

**Purpose**: Merge Tailwind classes with collision resolution.

**Dependencies**: `clsx`, `tailwind-merge`

**Installation**:
```bash
npm install clsx tailwind-merge
```

**Implementation**:
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## SECTION 6 — PAGE ARCHITECTURE

### 6.1 Homepage (`app/page.tsx`)

**Route**: `/`

**SEO Metadata**:
```typescript
export const metadata = {
  title: '[Agency Name] — AI Automation for Growing Businesses',
  description: 'We build custom AI automation systems for mid-size businesses. Eliminate manual work, scale operations, and free your team to focus on what matters.',
  openGraph: {
    title: '[Agency Name] — AI Automation for Growing Businesses',
    description: 'We build custom AI automation systems for mid-size businesses.',
    images: ['/og-image.png'],
  },
}
```

**Sections in Order**:

| Order | Component | Background | Padding | Notes |
|-------|-----------|------------|---------|-------|
| 1 | Navbar | `#000000` | — | Persistent from layout |
| 2 | HeroSection | Gradient `#000` → `#001A0D` → `#003320` | `py-[120px]` top + `pt-[160px]` | Min-height 100vh |
| 3 | LogoStripSection | `#050505` | `py-[60px]` | Height 80px, "Technologies we work with" |
| 4 | ProblemSection | `#000000` | `py-[100px]` | 2-col grid |
| 5 | ServicesOverviewSection | `#080808` | `py-[100px]` | 3-col card grid |
| 6 | ProcessSection | `#000000` | `py-[100px]` | Horizontal 4-step flow |
| 7 | StatsSection | `#0D1A12` | `py-[60px]` | 4 stat counters |
| 8 | WhyUsSection | `#080808` | `py-[100px]` | 3-col feature card grid |
| 9 | FinalCTASection | `#000000` | `py-[120px]` | Centered single column |
| 10 | Footer | `#050505` | — | Persistent from layout |

**Sanity Data**:
- Hero, problem, process, stats, differentiators, final CTA → `siteSettings` singleton
- Services overview → `service` documents (query: `order asc`)

---

### 6.2 Services Overview Page (`app/services/page.tsx`)

**Route**: `/services`

**SEO Metadata**:
```typescript
export const metadata = {
  title: 'Our Services — [Agency Name]',
  description: 'Custom AI workflow automation, AI integration, and reporting automation services for mid-size businesses.',
}
```

**Sections in Order**:

| Order | Component | Background | Padding | Notes |
|-------|-----------|------------|---------|-------|
| 1 | Navbar | `#000000` | — | Persistent |
| 2 | ServicesPageHeroSection | `#000000` (flat) | `py-[120px]` top, `pb-[80px]` bottom | Centered, smaller H1 |
| 3 | ServiceCardsSection | `#080808` | `py-[80px]` | 2-col grid (larger cards) |
| 4 | ProcessTeaserSection | `#000000` | `py-[80px]` | Compact 3-step horizontal |
| 5 | ServicesCTAStrip | `#0D1A12` | `py-[60px]` | 2-col: text left + Button 4 right |
| 6 | Footer | `#050505` | — | Persistent |

**Sanity Data**:
- All services → `service` documents (query: `order asc`)

---

### 6.3 Individual Service Page (`app/services/[slug]/page.tsx`)

**Route**: `/services/[slug]`

**Dynamic**: Slug from Sanity `service` document

**SEO Metadata**:
```typescript
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug)
  return {
    title: `${service.name} — [Agency Name]`,
    description: service.seoDescription,
  }
}
```

**Sections in Order**:

| Order | Component | Background | Padding | Notes |
|-------|-----------|------------|---------|-------|
| 1 | Navbar | `#000000` | — | Persistent |
| 2 | ServiceHeroSection | Gradient `#000` → `#001A0D` | `py-[140px]` top, `pb-[80px]` | LEFT-aligned, includes breadcrumb |
| 3 | WhatIsIncludedSection | `#080808` | `py-[80px]` | 3-col FeatureCard grid |
| 4 | WhoIsItForSection | `#000000` | `py-[80px]` | 2-col: checklist left + statement right |
| 5 | ToolsWeUseSection | `#050505` | `py-[60px]` | Logo grid |
| 6 | ServiceCTASection | `#000000` | `py-[100px]` | Centered, includes "← All services" link |
| 7 | Footer | `#050505` | — | Persistent |

**Sanity Data**:
- All content → `service` document by slug

---

### 6.4 About Page (`app/about/page.tsx`)

**Route**: `/about`

**SEO Metadata**:
```typescript
export const metadata = {
  title: 'About — [Agency Name]',
  description: 'We believe most business processes shouldn\'t require humans. Learn about our mission, approach, and the team behind [Agency Name].',
}
```

**Sections in Order**:

| Order | Component | Background | Padding | Notes |
|-------|-----------|------------|---------|-------|
| 1 | Navbar | `#000000` | — | Persistent |
| 2 | MissionHeroSection | `#000000` (flat, no gradient) | `py-[140px]` top, `pb-[80px]` | Centered, editorial |
| 3 | OurApproachSection | `#080808` | `py-[100px]` | 3-col FeatureCard grid, left-aligned heading |
| 4 | FounderSection | `#000000` | `py-[100px]` | 2-col: photo left + bio right |
| 5 | AboutCTASection | `#080808` | `py-[80px]` | Centered, soft close |
| 6 | Footer | `#050505` | — | Persistent |

**Sanity Data**:
- Founder info → `teamMember` (where `role` contains "Founder")

---

### 6.5 Contact Page (`app/contact/page.tsx`)

**Route**: `/contact`

**SEO Metadata**:
```typescript
export const metadata = {
  title: 'Let\'s Talk — [Agency Name]',
  description: 'Book a free 30-minute strategy call. We\'ll identify your top 3 automation opportunities — no pitch, no commitment.',
}
```

**Sections in Order**:

| Order | Component | Background | Padding | Notes |
|-------|-----------|------------|---------|-------|
| 1 | Navbar | `#000000` | — | Persistent |
| 2 | ContactHeroSection | `#000000` | `py-[100px]` top, `pb-[60px]` | Centered, conversational H1 |
| 3 | ContactFormSection | `#080808` | `pt-[60px]`, `pb-[80px]` | 2-col 55/45: form left + Cal.com embed right |
| 4 | TrustSignalsSection | `#000000` | `py-[48px]` | 3 items in a row |
| 5 | Footer | `#050505` | — | Persistent |

**Sanity Data**:
- Cal.com link → `siteSettings.calLink`

---

## SECTION 7 — SECTION COMPONENTS

### HeroSection (`components/sections/HeroSection.tsx`)

**Props**:
```typescript
interface HeroSectionProps {
  data: {
    eyebrow: string
    headline: string
    subtitle: string
    primaryCtaLabel: string
    secondaryCtaLabel: string
  }
}
```

**Layout**:
- Single column, centered
- Max-width: 800px

**Elements (top to bottom)**:
1. Badge (variant="green", pill shape): eyebrow text
2. H1 (text-display, font Syne, color `#F0F2F0`): main headline
3. Subtitle (text-body-lg, color `#8A9A94`, max-width 560px, mx-auto): supporting text
4. Button row (gap 12px, flex wrap, justify-center): Button 1 + Button 2
5. Scroll indicator: chevron-down icon, color `#3A4A42`, absolute bottom-8, animate-bounce

**Animation**:
- Framer Motion stagger
- Badge: 0ms delay
- H1: 100ms delay
- Subtitle: 200ms delay
- Buttons: 300ms delay
- All: fade + translateY(16px → 0)

```typescript
'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

interface HeroSectionProps {
  data: {
    eyebrow: string
    headline: string
    subtitle: string
    primaryCtaLabel: string
    secondaryCtaLabel: string
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-[160px] pb-[120px] bg-gradient-to-br from-black-base via-[#001A0D] to-[#003320]">
      <div className="max-w-[800px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Badge variant="green" className="rounded-pill mb-4">
            {data.eyebrow}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-medium text-[64px] leading-[1.1] tracking-[-0.02em] text-frost-white mb-6"
        >
          {data.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body font-normal text-[18px] leading-[1.7] text-sage-mid max-w-[560px] mx-auto mb-8"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <button className="bg-green-primary text-green-dark font-medium text-[15px] tracking-[0.01em] px-[36px] py-[15px] rounded-btn-hero hover:bg-green-hover active:scale-[0.98] transition-all duration-150">
            {data.primaryCtaLabel}
          </button>
          <button className="bg-transparent text-sage-light font-medium text-[15px] px-[32px] py-[14px] rounded-btn-hero border border-sage-dark hover:border-sage-mid hover:text-frost-white active:scale-[0.98] transition-all duration-150">
            {data.secondaryCtaLabel}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-sage-dark animate-bounce" />
      </motion.div>
    </section>
  )
}
```

### ProblemSection (`components/sections/ProblemSection.tsx`)

**Props**:
```typescript
interface ProblemSectionProps {
  data?: {
    heading: string
    subtitle: string
    painPoints: string[]
    statement: string
    subStatement: string
  }
}
```

**Layout**:
- 2-col CSS grid
- Gap: 60px
- Max-width: 1200px

**Left Column**:
- SectionHeading (left-aligned)
- 4 bullet pain points
- Bullet dot: 8px circle `#3A4A42`
- Text: 16px `#8A9A94`

**Right Column**:
- Large quoted statement
- Teal left border: 3px solid `#00E5CC`
- Text: 24px Syne `#F0F2F0` line-height 1.4
- Sub-statement below: 15px `#5A7068`

```typescript
import { SectionHeading } from '@/components/ui/SectionHeading'

interface ProblemSectionProps {
  data?: {
    heading: string
    subtitle: string
    painPoints: string[]
    statement: string
    subStatement: string
  }
}

export function ProblemSection({ data }: ProblemSectionProps) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          {/* Left Column */}
          <div>
            <SectionHeading 
              heading={data?.heading || 'The Problem'}
              subtitle={data?.subtitle || 'Most businesses are stuck with manual processes.'}
              align="left"
            />
            
            <ul className="mt-8 space-y-4">
              {data?.painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-sage-dark mt-2 flex-shrink-0" />
                  <span className="font-body font-normal text-[16px] text-sage-mid">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="border-l-2 border-teal-primary pl-6">
            <blockquote className="font-display text-[24px] leading-[1.4] text-frost-white">
              "{data?.statement}"
            </blockquote>
            <p className="font-body font-normal text-[15px] text-[#5A7068] mt-3">
              {data?.subStatement}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### ServicesOverviewSection (`components/sections/ServicesOverviewSection.tsx`)

**Props**:
```typescript
interface ServicesOverviewSectionProps {
  services: Array<{
    icon: React.ReactNode
    title: string
    description: string
    outcomes: string[]
    href: string
    timeline?: string
  }>
}
```

**Layout**:
- SectionHeading centered
- CSS grid 3-col (`repeat(3, 1fr)`)
- Gap: 16px
- Margin-top: 48px

**Responsive**:
- Mobile: 1-col
- Tablet: 2-col
- Desktop: 3-col

```typescript
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'

interface ServicesOverviewSectionProps {
  services: Array<{
    icon: React.ReactNode
    title: string
    description: string
    outcomes: string[]
    href: string
    timeline?: string
  }>
}

export function ServicesOverviewSection({ services }: ServicesOverviewSectionProps) {
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Services"
          heading="What We Build"
          subtitle="Custom AI automation systems designed for your specific workflows."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

### ProcessSection (`components/sections/ProcessSection.tsx`)

**Props**:
```typescript
interface ProcessSectionProps {
  steps: Array<{
    step: number
    title: string
    description: string
  }>
}
```

**Layout**:
- SectionHeading left-aligned
- Horizontal flex row of 4 StepCards
- Dashed connector lines between steps
- Connector: absolutely positioned `1px dashed #1E2E26`

**Mobile**:
- Vertical stack (no connectors)

```typescript
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StepCard } from '@/components/ui/StepCard'

interface ProcessSectionProps {
  steps: Array<{
    step: number
    title: string
    description: string
  }>
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="bg-black-base py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Process"
          heading="How We Work"
          subtitle="A proven framework for delivering automation that actually ships."
          align="left"
        />

        <div className="relative mt-12">
          {/* Desktop: Horizontal */}
          <div className="hidden lg:flex gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex-1">
                <StepCard 
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  isLast={i === steps.length - 1}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, i) => (
              <StepCard 
                key={i}
                step={step.step}
                title={step.title}
                description={step.description}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

### StatsSection (`components/sections/StatsSection.tsx`)

**Props**:
```typescript
interface StatsSectionProps {
  stats: Array<{
    value: number
    suffix?: string
    prefix?: string
    label: string
  }>
}
```

**Layout**:
- Flex row, justify-around, align-center
- Vertical dividers between each stat
- Divider: 0.5px `#1E3020`

**Each Stat**:
- StatCard with useCountUp triggered on scroll

```typescript
import { StatCard } from '@/components/ui/StatCard'

interface StatsSectionProps {
  stats: Array<{
    value: number
    suffix?: string
    prefix?: string
    label: string
  }>
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-green-tinted py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-wrap justify-around items-center gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              <StatCard {...stat} />
              {i < stats.length - 1 && (
                <div className="w-px h-12 bg-[#1E3020] mx-8 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### WhyUsSection (`components/sections/WhyUsSection.tsx`)

**Props**:
```typescript
interface WhyUsSectionProps {
  features: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
}
```

**Layout**:
- SectionHeading centered
- CSS grid 3-col
- Gap: 16px
- Margin-top: 48px

```typescript
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FeatureCard } from '@/components/ui/FeatureCard'

interface WhyUsSectionProps {
  features: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
}

export function WhyUsSection({ features }: WhyUsSectionProps) {
  return (
    <section className="bg-black-2 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <SectionHeading
          eyebrow="Why Us"
          heading="The Difference"
          subtitle="We don't just build automation. We redesign your workflows from the ground up."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

### FinalCTASection (`components/sections/FinalCTASection.tsx`)

**Props**:
```typescript
interface FinalCTASectionProps {
  heading: string
  subtext: string
  ctaLabel: string
  ctaHref: string
  microText?: string
}
```

**Layout**:
- Centered
- Max-width: 600px
- Single column

**Elements**:
1. H2 (38px Syne `#F0F2F0`)
2. Subtext (16px `#8A9A94`)
3. Button 4
4. Optional micro-text (12px `#3A4A42`)

```typescript
import Link from 'next/link'

interface FinalCTASectionProps {
  heading: string
  subtext: string
  ctaLabel: string
  ctaHref: string
  microText?: string
}

export function FinalCTASection({ heading, subtext, ctaLabel, ctaHref, microText }: FinalCTASectionProps) {
  return (
    <section className="bg-black-base py-[120px]">
      <div className="max-w-[600px] mx-auto px-[24px] md:px-[40px] lg:px-[80px] text-center">
        <h2 className="font-display font-medium text-[38px] leading-[1.2] text-frost-white mb-4">
          {heading}
        </h2>
        <p className="font-body font-normal text-[16px] leading-[1.7] text-sage-mid mb-8">
          {subtext}
        </p>
        <Link 
          href={ctaHref}
          className="inline-block bg-transparent text-green-primary font-medium text-[14px] tracking-[0.01em] px-[30px] py-[13px] rounded-btn-hero border border-[rgba(0,255,136,0.35)] hover:bg-[rgba(0,255,136,0.06)] hover:border-[rgba(0,255,136,0.6)] active:scale-[0.98] transition-all duration-150"
        >
          {ctaLabel}
        </Link>
        {microText && (
          <p className="font-body font-normal text-[12px] text-sage-dark mt-4">
            {microText}
          </p>
        )}
      </div>
    </section>
  )
}
```

### ContactFormSection (`components/sections/ContactFormSection.tsx`)

**Props**: None (static form)

**Layout**:
- 2-col CSS grid 55/45
- Gap: 60px
- Vertical divider: 0.5px `#1E2E26` between columns

**Left Column**:
- Form heading: "Send us a message" (20px `#F0F2F0`)
- 4 fields: Name, Company, Email, Textarea
- Textarea placeholder: "What's your biggest operational bottleneck?"
- Button 5 (Form Submit)

**Right Column**:
- Heading: "Or pick a time directly" (16px `#8A9A94`)
- Cal.com iframe embed

**Form Validation**:
- React Hook Form + Zod
- All fields required
- Email must be valid format

**Submit Behavior**:
- POST to `/api/contact`
- Show success state inline (no redirect)

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(1, 'Company is required').max(100),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})

type FormData = z.infer<typeof formSchema>

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setIsSuccess(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section className="bg-black-2 py-[60px]">
        <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
          <div className="text-center">
            <h3 className="font-display font-medium text-[28px] text-frost-white mb-4">
              Message Sent
            </h3>
            <p className="font-body font-normal text-[16px] text-sage-mid">
              We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-black-2 pt-[60px] pb-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-[60px]">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-medium text-[20px] text-frost-white mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Input
                id="name"
                label="Name"
                placeholder="John Doe"
                error={errors.name?.message}
                register={register('name')}
              />
              <Input
                id="company"
                label="Company"
                placeholder="Acme Inc."
                error={errors.company?.message}
                register={register('company')}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="john@company.com"
                error={errors.email?.message}
                register={register('email')}
              />
              <Textarea
                id="message"
                label="Message"
                placeholder="What's your biggest operational bottleneck?"
                rows={5}
                error={errors.message?.message}
                register={register('message')}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-primary text-green-dark font-medium text-[14px] tracking-[0.01em] px-[13px] py-[13px] rounded-btn-form w-full hover:bg-green-hover disabled:bg-[#003322] disabled:text-[#1A4A32] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right: Cal.com Embed */}
          <div className="lg:col-span-2 border-l border-[#1E2E26] pl-0 lg:pl-[60px]">
            <h3 className="font-body font-medium text-[16px] text-sage-mid mb-4">
              Or pick a time directly
            </h3>
            <iframe
              src={process.env.NEXT_PUBLIC_CAL_LINK}
              className="w-full h-[600px] rounded-card border border-border-dark"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## SECTION 8 — SANITY CMS SCHEMAS

### 8.1 Schema: `service` (`sanity/schemas/service.ts`)

```typescript
import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The display name of this service',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().unique(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: '1-line description shown in cards and hero',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: '2-3 sentence description',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Lucide icon name (e.g., "Workflow", "Bot", "BarChart2")',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Badge',
      type: 'string',
      description: 'Badge text for hero (defaults to "Service")',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'H1 on the individual service page',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Subtitle on service page hero',
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(2).max(5),
      description: 'Bullet points shown on service cards',
    }),
    defineField({
      name: 'features',
      title: 'Features (What\'s Included)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide icon name',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(3).max(8),
    }),
    defineField({
      name: 'whoIsItFor',
      title: 'Who Is It For',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3).max(6),
      description: '"This is for you if…" checklist',
    }),
    defineField({
      name: 'toolsUsed',
      title: 'Tools We Use',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tool names for logo strip on service page',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      description: 'e.g., "2–3 weeks"',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
      description: 'Controls display order on services page (lower = first)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title,
        subtitle: `${subtitle} ${order ? `(Order: ${order})` : ''}`,
      }
    },
  },
})
```

### 8.2 Schema: `siteSettings` (`sanity/schemas/siteSettings.ts`)

```typescript
import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton: only one document allowed
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'homepage', title: 'Homepage Content' },
    { name: 'seo', title: 'SEO' },
    { name: 'contact', title: 'Contact & Booking' },
  ],
  fields: [
    // General
    defineField({
      name: 'agencyName',
      title: 'Agency Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: '1-line description',
      group: 'general',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'general',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      group: 'general',
    }),

    // Homepage Hero
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'homepage',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      group: 'homepage',
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Hero Primary CTA Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'homepage',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Hero Secondary CTA Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'homepage',
    }),

    // Problem Section
    defineField({
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: 'The right-column statement in problem section',
      group: 'homepage',
    }),
    defineField({
      name: 'problemPainPoints',
      title: 'Pain Points',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3).max(5),
      group: 'homepage',
    }),

    // Process Steps
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Number',
              type: 'number',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'title', step: 'step' },
            prepare({ title, step }) {
              return { title: `Step ${step}: ${title}` }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().length(4),
      group: 'homepage',
    }),

    // Stats
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'number',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'suffix',
              title: 'Suffix',
              type: 'string',
              description: 'e.g., "%", "h+", "x"',
            }),
            defineField({
              name: 'prefix',
              title: 'Prefix',
              type: 'string',
              description: 'e.g., "$", "+"',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'duration',
              title: 'Animation Duration (ms)',
              type: 'number',
              initialValue: 2000,
            }),
          ],
          preview: {
            select: { value: 'value', label: 'label', suffix: 'suffix' },
            prepare({ value, label, suffix }) {
              return { title: `${value}${suffix || ''}`, subtitle: label }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().length(4),
      group: 'homepage',
    }),

    // Differentiators
    defineField({
      name: 'differentiators',
      title: 'Differentiators (Why Us)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Lucide icon name',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      validation: (Rule) => Rule.required().length(3),
      group: 'homepage',
    }),

    // Final CTA
    defineField({
      name: 'finalCtaHeadline',
      title: 'Final CTA Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'homepage',
    }),
    defineField({
      name: 'finalCtaSubtext',
      title: 'Final CTA Subtext',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      group: 'homepage',
    }),
    defineField({
      name: 'finalCtaMicroText',
      title: 'Final CTA Micro Text',
      type: 'string',
      description: 'Optional text below button',
      group: 'homepage',
    }),

    // Contact & Booking
    defineField({
      name: 'calLink',
      title: 'Cal.com Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Full Cal.com booking URL',
      group: 'contact',
    }),

    // SEO
    defineField({
      name: 'seoDefaultTitle',
      title: 'Default SEO Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'seo',
    }),
    defineField({
      name: 'seoDefaultDescription',
      title: 'Default SEO Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      group: 'seo',
    }),
  ],
})
```

### 8.3 Schema: `teamMember` (`sanity/schemas/teamMember.ts`)

```typescript
import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})
```

### 8.4 Schema: `caseStudy` (`sanity/schemas/caseStudy.ts`)

```typescript
import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  // For future use — build now, leave empty
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().unique(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'metric',
              title: 'Metric',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: { metric: 'metric', value: 'value' },
            prepare({ metric, value }) {
              return { title: `${metric}: ${value}` }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'servicesUsed',
      title: 'Services Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
  ],
})
```

### 8.5 Schema: `faq` (`sanity/schemas/faq.ts`)

```typescript
import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Services', value: 'services' },
          { title: 'Contact', value: 'contact' },
          { title: 'General', value: 'general' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'page',
    },
  },
})
```

### 8.6 Sanity Studio Config (`sanity/sanity.config.ts`)

Update existing config:

```typescript
'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './env'
import { schema } from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  basePath: '/admin/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // Studio title from env or default
  title: process.env.NEXT_PUBLIC_SANITY_STUDIO_TITLE || '[Agency Name] Studio',
})
```

### Sanity Desk Structure (`sanity/structure.ts`)

```typescript
import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings singleton
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
      S.divider(),
      
      // Services
      ...S.documentTypeListItems('service')
        .filter((listItem) => listItem.getId() === 'service')
        .map((item) =>
          item.title('Services').child(
            S.documentList()
              .schemaType('service')
              .title('All Services')
              .filter('_type == "service"')
              .order('order asc')
          )
        ),
      
      // Team
      S.listItem()
        .title('Team')
        .child(
          S.documentList()
            .schemaType('teamMember')
            .title('All Team Members')
            .filter('_type == "teamMember"')
            .order('order asc')
        ),
      
      // Case Studies
      S.listItem()
        .title('Case Studies')
        .child(
          S.documentList()
            .schemaType('caseStudy')
            .title('All Case Studies')
            .filter('_type == "caseStudy"')
        ),
      
      // FAQs
      S.listItem()
        .title('FAQs')
        .child(
          S.documentList()
            .schemaType('faq')
            .title('All FAQs')
            .filter('_type == "faq"')
            .order('order asc')
        ),
    ])
```

---

## SECTION 9 — API ROUTES

### `/api/contact` (`app/api/contact/route.ts`)

**Method**: POST

**Body Schema (Zod)**:
```typescript
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(1, 'Company is required').max(100),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})
```

**Implementation**:
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validators/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiting (use upstash/ratelimit for production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const hour = 60 * 60 * 1000
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + hour })
    return true
  }

  if (record.count >= 5) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate body
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // Send email via Resend
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL_TO || 'hello@yourdomain.com'],
      subject: `New Contact Form Submission from ${validated.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Company:</strong> ${validated.company}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validated.message}</p>
      `,
      replyTo: validated.email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

**Required Environment Variables**:
```bash
RESEND_API_KEY=<resend-api-key>
CONTACT_EMAIL_TO=hello@yourdomain.com
```

---

## SECTION 10 — ANIMATION SYSTEM

### Framer Motion Animation Patterns

**Installation**:
```bash
npm install framer-motion
```

### Entrance Animations

**fadeInUp**:
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
}
```

**fadeIn**:
```typescript
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
}
```

**staggerChildren**:
```typescript
const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}
```

### Section Entry Pattern

Every section wrapper:
```typescript
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
>
  {children}
</motion.div>
```

### Card Hover Pattern

ServiceCard, FeatureCard:
```typescript
<motion.div
  whileHover={{ y: -2 }}
  transition={{ duration: 0.15 }}
>
  {children}
</motion.div>
```

### Button Tap Pattern

All buttons:
```typescript
<motion.button
  whileTap={{ scale: 0.98 }}
>
  {children}
</motion.button>
```

### Counter Animation

useCountUp with easeOutExpo, triggered by IntersectionObserver at threshold 0.3:
```typescript
const { ref, isVisible } = useScrollAnimation({ threshold: 0.3, once: true })

return (
  <div ref={ref}>
    {isVisible && <StatCard {...props} />}
  </div>
)
```

---

## SECTION 11 — RESPONSIVE BREAKPOINTS

### Tailwind Default Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Minor text adjustments |
| `md` | 768px | Main mobile breakpoint. Navbar collapses, grids go to 1-col |
| `lg` | 1024px | 2-col layouts activate (from 1-col on mobile) |
| `xl` | 1280px | 3-col layouts activate (from 2-col on tablet) |

### Key Responsive Rules

| Component | Desktop (≥1024px) | Tablet (768–1023px) | Mobile (<768px) |
|-----------|-------------------|---------------------|-----------------|
| Navbar | Full nav + CTA | Full nav + CTA | Hamburger menu, full-width drawer |
| Hero H1 | 64px (display) | 52px (hero) | 36px |
| Hero Padding | pt-[160px] pb-[120px] | pt-[140px] pb-[100px] | pt-[120px] pb-[80px] |
| Service Cards Grid | 3-col | 2-col | 1-col |
| Feature Cards Grid | 3-col | 2-col | 1-col |
| Process Steps | Horizontal row | Horizontal row | Vertical stack (no connectors) |
| Stats Bar | 4-col row with dividers | 2-col row | 1-col stack |
| Contact Form | 2-col 55/45 | 2-col 55/45 | 1-col (booking embed below form) |
| About Founder | 2-col (photo left, bio right) | 2-col | 1-col (photo above, bio below) |
| Section Padding | py-[100px] | py-[80px] | py-[60px] |
| Container Padding | px-[80px] | px-[40px] | px-[24px] |

---

## SECTION 12 — SEO & METADATA

### Base Metadata (`app/layout.tsx`)

```typescript
import type { Metadata } from 'next'
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | [Agency Name]',
    default: '[Agency Name] — AI Automation for Growing Businesses',
  },
  description: 'We build custom AI automation systems for mid-size businesses. Eliminate manual work, scale operations, and free your team to focus on what matters.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: '[Agency Name]',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '[Agency Name] — AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### Per-Page Metadata

See Section 6 for each page's specific title and description.

### Structured Data (JSON-LD)

Add to homepage (`app/page.tsx`):

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '[Agency Name]',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.svg`,
      description: 'We build custom AI automation systems for mid-size businesses.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@yourdomain.com',
      },
      sameAs: [
        'https://linkedin.com/company/[agency-name]',
      ],
    }),
  }}
/>
```

---

## SECTION 13 — PERFORMANCE RULES

### Enforced Rules

1. **Images**: Use `next/image` with proper width/height. NO `<img>` tags.
   ```typescript
   import Image from 'next/image'
   <Image src="/path.jpg" alt="Description" width={800} height={600} />
   ```

2. **Fonts**: Use `next/font/google` with `display: swap`. Load Syne + Inter together.

3. **Client Components**: Mark `"use client"` ONLY when:
   - Uses hooks (useState, useEffect, etc.)
   - Uses browser APIs (localStorage, window, etc.)
   - Needs event listeners (onClick, onScroll, etc.)

4. **Sanity Data**: 
   - Fetch at build time for static sections
   - Use ISR with `revalidate: 3600` for service pages

5. **Cal.com**: Load as `<iframe>` with `loading="lazy"`

6. **Framer Motion**: Import from `framer-motion` with named imports only (tree-shaking)
   ```typescript
   import { motion, AnimatePresence } from 'framer-motion'
   ```

7. **Icons**: Import individually from `lucide-react`, NEVER `import * from`
   ```typescript
   import { ChevronDown, Menu } from 'lucide-react'  // ✅
   import * as Icons from 'lucide-react'              // ❌
   ```

8. **CSS**: Use Tailwind classes only. NO CSS modules. NO styled-components. Inline styles only for dynamic values (e.g., animation state).

---

## SECTION 14 — FILE NAMING & CODE CONVENTIONS

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ServiceCard.tsx` |
| Hooks | camelCase with `use` prefix | `useCountUp.ts` |
| Utils | camelCase | `formatDate.ts` |
| Sanity Schemas | camelCase | `service.ts`, `siteSettings.ts` |
| Types | PascalCase interfaces | `Service.ts` |
| Constants | UPPER_SNAKE_CASE | `CONTACT_EMAIL` |

### Code Conventions

1. **Every component file exports one default component**
   ```typescript
   export default function ServiceCard() { ... }
   ```

2. **No barrel files** (no `index.ts` re-exports in component folders)
   - Import paths must be explicit:
   ```typescript
   import { ServiceCard } from '@/components/ui/ServiceCard'  // ✅
   import { ServiceCard } from '@/components/ui'              // ❌
   ```

3. **All Tailwind classes sorted** with `prettier-plugin-tailwindcss`
   ```bash
   npm install -D prettier prettier-plugin-tailwindcss
   ```

4. **TypeScript strict mode** enabled in `tsconfig.json`

5. **ESLint** rules enforced via `eslint-config-next`

---

## SECTION 15 — CONTENT PLACEHOLDERS

Use these exact placeholders while real agency name/content is TBD.

### Agency Identity

- **Agency Name Placeholder**: `[Agency Name]`

### Homepage Hero

- **Headline**: `Stop doing manually what a system can do in seconds.`
- **Subtitle**: `We build custom AI automation systems for mid-size businesses — eliminating manual work across ops, sales, and reporting.`
- **Primary CTA**: `Book a free strategy call →`
- **Secondary CTA**: `See how it works`

### Problem Section

- **Statement**: `Most businesses are sitting on a goldmine of automation opportunities — and paying their best people to do work that software should handle.`
- **Pain Points**:
  1. `Your team spends hours every week copying data between tools`
  2. `Reports take days to compile — and they're already outdated`
  3. `Onboarding new clients involves the same 12 manual steps every time`
  4. `You can't scale operations without scaling headcount`

### Services

- **Service 1**:
  - Name: `Workflow Automation`
  - Tagline: `We map and automate your most repetitive business processes end-to-end.`

- **Service 2**:
  - Name: `AI Integration`
  - Tagline: `We connect large language models to your existing tools and workflows.`

- **Service 3**:
  - Name: `Reporting Automation`
  - Tagline: `We build real-time dashboards and automated reporting pipelines.`

### Process Steps

1. **Discovery**: `We audit your current workflows and identify the highest-ROI automation opportunities.`
2. **Design**: `We map the entire system before writing a single line of code.`
3. **Build**: `We build, integrate, and test your automation stack against real scenarios.`
4. **Handoff**: `Full documentation, team training, and 30-day support included.`

### Stats

1. **80%** — `of manual reporting tasks can be fully automated`
2. **25h+** — `saved per week on average`
3. **3–6 weeks** — `average delivery time`
4. **12x** — `average ROI multiplier`

### Differentiators (Why Us)

1. `We redesign before we automate — never automating a broken process.`
2. `Every build ships with documentation your team can actually use.`
3. `Async-first delivery — we fit your schedule, not ours.`

### Final CTA

- **Headline**: `Ready to stop doing manually what a system can do automatically?`
- **Subtext**: `Book a free 30-minute strategy call. We'll map out 3 automation opportunities in your business — no commitment.`
- **Micro Text**: `No commitment. Reply within 24 hours.`

### Contact Page

- **Headline**: `Let's talk about what's slowing you down.`
- **Subtext**: `Book a free 30-min strategy call. We'll identify your top 3 automation opportunities — no pitch, no commitment.`

### Trust Signals

1. `We reply within 24 hours.`
2. `No sales pressure — just a real conversation.`
3. `Your information stays private, always.`

---

## APPENDIX A — ENVIRONMENT VARIABLES CHECKLIST

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-20
SANITY_API_TOKEN=

# Cal.com Booking
NEXT_PUBLIC_CAL_LINK=https://cal.com/your-username/30min

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Contact Form (Resend)
RESEND_API_KEY=
CONTACT_EMAIL_TO=hello@yourdomain.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=
```

---

## APPENDIX B — DEPENDENCY INSTALLATION

```bash
# Core (already installed)
npm install next@16 react@19 react-dom@19 typescript tailwindcss@4 @tailwindcss/postcss sanity next-sanity @sanity/image-url

# Animation
npm install framer-motion

# Forms
npm install react-hook-form @hookform/resolvers zod

# Icons
npm install lucide-react

# Utilities
npm install clsx tailwind-merge

# Email (Contact Form)
npm install resend

# Type checking
npm install -D @types/node @types/react @types/react-dom eslint eslint-config-next
```

---

**END OF CONSTITUTION**

This document is the single source of truth. Any developer should be able to build the entire site from this file without asking questions.
