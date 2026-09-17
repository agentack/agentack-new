---
id: 002
title: Modular Specs for Team Development
stage: spec
date: 2026-03-20
surface: agent
model: qwen-code
feature: agentack-business-portfolio
branch: main
user: USER
command: Create modular specs from constitution for team development
labels: ["specs", "team-development", "modular-architecture", "parallel-development"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - agentack-business-portfolio/specs/00-INDEX.md
  - agentack-business-portfolio/specs/shared/01-design-system.md
  - agentack-business-portfolio/specs/shared/02-component-library.md
  - agentack-business-portfolio/specs/shared/03-sanity-schemas.md
  - agentack-business-portfolio/specs/shared/04-custom-hooks.md
  - agentack-business-portfolio/specs/features/01-navbar.md
  - agentack-business-portfolio/specs/features/02-footer.md
  - agentack-business-portfolio/specs/pages/01-homepage.md
  - agentack-business-portfolio/specs/pages/02-services-overview.md
  - agentack-business-portfolio/specs/pages/03-service-detail.md
  - agentack-business-portfolio/specs/pages/04-about.md
  - agentack-business-portfolio/specs/pages/05-contact.md
tests:
  - N/A (documentation artifact)
---

## Prompt

now we are going to make specs out of this constitution file. the specs will be locked and me and my team will be using these specs throughout the project. make specs sortedly like features, pages, sections. because i have 2 team members and they'll be working on pages seperately. you are the senior team supervisor and manager who knows what approach in specs works best while working in a team so the team members can handle each page which i'll assign them and start woking on it seperately without touching other page's specs.

## Response snapshot

Created modular spec structure with 14 spec files organized in 3 categories:

**Shared Specs** (complete first - foundation):
- `01-design-system.md` — Colors, typography, spacing, buttons (all pages depend on this)
- `02-component-library.md` — 15 reusable UI components with TypeScript interfaces
- `03-sanity-schemas.md` — CMS schemas for service, siteSettings, teamMember, faq
- `04-custom-hooks.md` — useCountUp, useScrollAnimation, useMediaQuery, cn utility

**Feature Specs** (cross-page components):
- `01-navbar.md` — Sticky navigation with mobile drawer
- `02-footer.md` — 3-column footer

**Page Specs** (assignable to team members):
- `01-homepage.md` — 10 sections, assigned to Team Member 1
- `02-services-overview.md` — 6 sections, assigned to Team Member 1
- `03-service-detail.md` — 7 sections (dynamic), assigned to Team Member 2
- `04-about.md` — 6 sections, assigned to Team Member 2
- `05-contact.md` — 5 sections + API route, assigned to Team Member 3

**Team Assignment Strategy**:
```
Team Member 1: Homepage + Services Overview
Team Member 2: Service Detail + About Page
Team Member 3: Contact Page + Sanity CMS + API Routes
```

**Spec Organization**:
- `/specs/00-INDEX.md` — Master index with dependency graph
- `/specs/shared/` — Foundation (design system, components, hooks, schemas)
- `/specs/features/` — Cross-page features (Navbar, Footer, SEO, API)
- `/specs/pages/` — Page-specific specs (independent, assignable)

Each page spec includes:
- SEO metadata
- Section order with background colors
- Data sources (Sanity queries)
- Implementation code snippets
- Acceptance criteria checklist
- Dependencies list

## Outcome

- ✅ **Impact**: Created modular spec architecture enabling parallel team development
- 🧪 **Tests**: N/A (documentation artifact)
- 📁 **Files**: 14 spec files created in organized directory structure
- 🔁 **Next prompts**: Begin implementation — start with shared specs
- 🧠 **Reflection**: Modular specs with clear dependencies prevent team conflicts

## Evaluation notes (flywheel)

- **Failure modes observed**: None — spec generation successful
- **Graders run and results**: N/A
- **Prompt variant**: N/A
- **Next experiment**: Team members can now start implementation in parallel

### Development Workflow

**Phase 1: Foundation (Days 1-2)**
1. Complete `shared/01-design-system.md` (Tailwind config)
2. Complete `shared/02-component-library.md` (15 components)
3. Complete `shared/03-sanity-schemas.md` (CMS setup)
4. Complete `shared/04-custom-hooks.md` (hooks)

**Phase 2: Shared Features (Days 3-4)**
1. Build Navbar (`features/01-navbar.md`)
2. Build Footer (`features/02-footer.md`)

**Phase 3: Page Development (Days 5-10, Parallel)**
- Team Member 1: Homepage + Services Overview
- Team Member 2: Service Detail + About
- Team Member 3: Contact + API routes + Sanity content

**Phase 4: Integration (Days 11-12)**
- Cross-page testing
- Performance optimization
- Final QA
