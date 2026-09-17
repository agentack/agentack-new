# Footer Feature Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

Shared component used across ALL pages.

---

## Visual Specs

| Property | Value |
|----------|-------|
| Background | `#050505` |
| Border Top | 0.5px solid `#1A1A1A` |
| Padding | 48px 0 32px |
| Layout | 3 columns |

---

## Implementation

**File**: `components/layout/Footer.tsx`

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

---

## Integration

**File**: `app/layout.tsx`

```typescript
import { Footer } from '@/components/layout/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ... */}
        <Footer />
      </body>
    </html>
  )
}
```

---

## Acceptance Criteria

- [ ] 3-column layout on desktop
- [ ] 1-column layout on mobile
- [ ] LinkedIn icon link functional
- [ ] Copyright year dynamic
- [ ] All nav links functional

---

**Required by**: ALL page specs
