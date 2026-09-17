# Navbar Feature Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

The Navbar is a shared component used across ALL pages. Complete this before any page development.

---

## Visual Specs

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | `#000000` |
| On Scroll | `backdrop-blur-md` + border `#1A1A1A` |
| Position | `sticky top-0 z-50` |
| Max Width | 1200px |
| Horizontal Padding | 40px |

---

## Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]    Services  About  Contact    [Book a call]        │
└─────────────────────────────────────────────────────────────┘
```

**Desktop**:
- Left: Logo (`#00FF88`)
- Center: Nav links (Services dropdown, About, Contact)
- Right: Button 3 (Navbar CTA)

**Mobile** (< 768px):
- Hamburger menu
- Full-width drawer on open

---

## Props

```typescript
// No props - uses static config or Sanity siteSettings
```

---

## Implementation

**File**: `components/layout/Navbar.tsx`

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
                <Link href="/services/workflow-automation" className="block px-4 py-2.5 hover:bg-[rgba(0,255,136,0.05)] hover:text-green-primary">
                  <div className="text-[12px] text-frost-white">Workflow Automation</div>
                  <div className="text-[11px] text-[#5A7068]">End-to-end process automation</div>
                </Link>
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

---

## Integration

**File**: `app/layout.tsx`

```typescript
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## Acceptance Criteria

- [ ] Sticky on scroll
- [ ] Backdrop blur on scroll
- [ ] Services dropdown on hover
- [ ] Mobile hamburger menu
- [ ] Mobile drawer animation
- [ ] Active page highlighting
- [ ] All links functional

---

**Required by**: ALL page specs
