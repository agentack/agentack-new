# Spec Index — Agentack Business Portfolio

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Development

---

## How to Use This Index

This index maps all specs to their corresponding features and pages. Each team member can be assigned specific pages to work on independently.

### Team Assignment Strategy

```
Team Member 1: Homepage + Services Overview
Team Member 2: Individual Service Page + About Page
Team Member 3: Contact Page + Sanity CMS Setup
```

**Shared Dependencies** (must be completed first):
- `shared/01-design-system.md` — All team members reference this
- `shared/02-component-library.md` — UI components used across all pages
- `shared/03-sanity-schemas.md` — CMS setup required before page development

---

## Spec Organization

### `/specs/shared/` — Foundation (Complete First)

| Spec | Description | Required By | Priority |
|------|-------------|-------------|----------|
| `01-design-system.md` | Colors, typography, spacing, buttons | ALL pages | P0 |
| `02-component-library.md` | Reusable UI components | ALL pages | P0 |
| `03-sanity-schemas.md` | CMS schemas and queries | ALL pages | P0 |
| `04-custom-hooks.md` | React hooks (useCountUp, etc.) | ALL pages | P0 |

### `/specs/features/` — Cross-Page Features

| Spec | Description | Required By | Priority |
|------|-------------|-------------|----------|
| `01-navbar.md` | Navigation component | ALL pages | P0 |
| `02-footer.md` | Footer component | ALL pages | P0 |
| `03-seo-metadata.md` | SEO and metadata setup | ALL pages | P0 |
| `04-api-routes.md` | Backend API endpoints | Contact page | P1 |
| `05-animations.md` | Framer Motion patterns | ALL pages | P0 |

### `/specs/pages/` — Page-Specific (Assignable)

| Spec | Page | Route | Sections | Assigned To |
|------|------|-------|----------|-------------|
| `01-homepage.md` | Homepage | `/` | 10 sections | TBD |
| `02-services-overview.md` | Services Overview | `/services` | 6 sections | TBD |
| `03-service-detail.md` | Individual Service | `/services/[slug]` | 7 sections | TBD |
| `04-about.md` | About | `/about` | 6 sections | TBD |
| `05-contact.md` | Contact | `/contact` | 5 sections | TBD |

---

## Development Workflow

### Phase 1: Foundation (Days 1-2)
1. ✅ Set up design system (`shared/01-design-system.md`)
2. ✅ Build core UI components (`shared/02-component-library.md`)
3. ✅ Configure Sanity schemas (`shared/03-sanity-schemas.md`)
4. ✅ Implement custom hooks (`shared/04-custom-hooks.md`)

### Phase 2: Shared Features (Days 3-4)
1. ✅ Build Navbar (`features/01-navbar.md`)
2. ✅ Build Footer (`features/02-footer.md`)
3. ✅ Set up SEO metadata (`features/03-seo-metadata.md`)
4. ✅ Implement animations (`features/05-animations.md`)

### Phase 3: Page Development (Days 5-10, Parallel)
- **Team Member 1**: Homepage + Services Overview
- **Team Member 2**: Service Detail + About
- **Team Member 3**: Contact + API routes

### Phase 4: Integration & Testing (Days 11-12)
1. Cross-page testing
2. Performance optimization
3. Content population from Sanity
4. Final QA

---

## Dependency Graph

```
shared/01-design-system.md
        ↓
shared/02-component-library.md ← shared/04-custom-hooks.md
        ↓
features/01-navbar.md → pages/* (all pages)
features/02-footer.md → pages/* (all pages)
        ↓
shared/03-sanity-schemas.md → features/04-api-routes.md
        ↓
pages/* (all page specs)
```

---

## Spec File Naming Convention

```
<order>-<feature-name>.md

Examples:
- 01-design-system.md (shared, foundational)
- 02-component-library.md (shared, foundational)
- 01-homepage.md (page-specific)
- 01-navbar.md (feature, cross-page)
```

---

## Quick Reference

### For Team Member Working on Homepage:
Read in order:
1. `shared/01-design-system.md`
2. `shared/02-component-library.md`
3. `features/01-navbar.md`
4. `features/02-footer.md`
5. `features/05-animations.md`
6. `pages/01-homepage.md` ← Your main spec

### For Team Member Working on Contact Page:
Read in order:
1. `shared/01-design-system.md`
2. `shared/02-component-library.md`
3. `features/01-navbar.md`
4. `features/02-footer.md`
5. `features/04-api-routes.md`
6. `pages/05-contact.md` ← Your main spec

---

## Change Log

| Date | Version | Change | Author |
|------|---------|--------|--------|
| 2026-03-20 | 1.0.0 | Initial spec lock | Senior Architect |

---

## Acceptance Criteria for All Specs

Each spec must include:
- [ ] Clear file paths
- [ ] TypeScript interfaces
- [ ] Visual specs (colors, spacing, typography)
- [ ] Component composition
- [ ] Sanity data requirements
- [ ] Responsive behavior
- [ ] Animation behavior
- [ ] Accessibility requirements

---

**Next Action**: Begin with `shared/01-design-system.md`
