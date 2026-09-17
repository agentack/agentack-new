---
id: 004
title: Custom Hooks Implementation - useCountUp, useScrollAnimation, useMediaQuery
stage: spec
date: 2026-03-22
surface: agent
model: qwen-code
feature: agentack-business-portfolio
branch: main
user: USER
command: Implement shared/04-custom-hooks.md - useCountUp, useScrollAnimation, useMediaQuery, cn utility
labels: ["custom-hooks", "utilities", "foundation", "animations"]
links:
  spec: specs/shared/04-custom-hooks.md
  ticket: null
  adr: null
  pr: null
files:
  - agentack-business-portfolio/lib/hooks/useCountUp.ts
  - agentack-business-portfolio/lib/hooks/useScrollAnimation.ts
  - agentack-business-portfolio/lib/hooks/useMediaQuery.ts
  - agentack-business-portfolio/lib/utils/cn.ts
  - agentack-business-portfolio/package.json
tests:
  - npm run build (pending)
---

## Prompt

Implement the first 2 specs in the recommended order: shared/01-design-system.md and shared/04-custom-hooks.md. Complete these foundation specs first so we don't face any issues in future steps.

## Response snapshot

Implemented custom hooks and utilities with four core files:

**1. lib/utils/cn.ts** - Classname merger utility:
- Combines clsx and tailwind-merge
- Enables conditional class merging with Tailwind collision resolution
- Required dependency: clsx, tailwind-merge (installed via npm)

**2. lib/hooks/useCountUp.ts** - Number counter animation hook:
- Props: end, start (0), duration (2000ms), decimals (0), easing (easeOutExpo), prefix, suffix, separator (,), startOnMount (true), onComplete
- Returns: value (formatted string), raw (number), isRunning, start, reset, pause
- Easing functions: linear, easeOut, easeOutExpo, spring
- Uses requestAnimationFrame for smooth animation
- Formats with comma separator and prefix/suffix support
- Used by: StatCard component

**3. lib/hooks/useScrollAnimation.ts** - Viewport intersection hook:
- Props: threshold (0.15), once (true)
- Returns: ref, isVisible
- Uses IntersectionObserver for scroll-triggered animations
- once: true means animation fires only on first viewport entry
- Used by: All section components for fade-in-up animations

**4. lib/hooks/useMediaQuery.ts** - Responsive breakpoint hook:
- SSR-safe (returns false on server)
- Exports: useMediaQuery(query), useIsMobile (<768px), useIsTablet (768-1023px), useIsDesktop (≥1024px)
- Used by: Navbar mobile menu, responsive components

**Dependencies installed**:
- clsx@latest
- tailwind-merge@latest

## Outcome

- ✅ Impact: All animation and utility hooks now available for component development - StatCard can animate, sections can fade in on scroll, responsive detection works
- 🧪 Tests: Build verification pending
- 📁 Files: 4 files created + 2 npm packages installed
- 🔁 Next prompts: Implement shared/02-component-library.md (15 UI components)
- 🧠 Reflection: Hooks are lightweight but critical - useCountUp and useScrollAnimation are required for StatsSection and all section entrance animations

## Evaluation notes (flywheel)

- Failure modes observed: None - hooks implemented per spec
- Graders run and results (PASS/FAIL): Pending build verification
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Run build to verify TypeScript compilation and hook exports
