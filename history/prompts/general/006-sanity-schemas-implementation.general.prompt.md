---
id: 006
title: Sanity CMS Schemas Implementation - 4 Document Types + Queries
stage: spec
date: 2026-03-22
surface: agent
model: qwen-code
feature: agentack-business-portfolio
branch: main
user: USER
command: Implement shared/03-sanity-schemas.md - All Sanity schemas, client, and queries
labels: ["sanity-cms", "schemas", "content-management", "foundation"]
links:
  spec: specs/shared/03-sanity-schemas.md
  ticket: null
  adr: null
  pr: null
files:
  - agentack-business-portfolio/sanity/schemaTypes/service.ts
  - agentack-business-portfolio/sanity/schemaTypes/siteSettings.ts
  - agentack-business-portfolio/sanity/schemaTypes/teamMember.ts
  - agentack-business-portfolio/sanity/schemaTypes/faq.ts
  - agentack-business-portfolio/sanity/schemaTypes/index.ts
  - agentack-business-portfolio/sanity/structure.ts
  - agentack-business-portfolio/lib/sanity/queries.ts
  - agentack-business-portfolio/lib/sanity/client.ts
tests:
  - npm run build (PASS)
---

## Prompt

Implement Phase 3: shared/03-sanity-schemas.md with all Sanity CMS schemas, client setup, and GROQ queries. Make sure to get it done 100% because this is the foundation for all content management.

## Response snapshot

Implemented complete Sanity CMS setup with 4 document schemas and supporting infrastructure:

**Schemas (sanity/schemaTypes/):**

1. **service.ts** - Service document for dynamic service pages:
   - Fields: name, slug, tagline, description, icon (Lucide name)
   - Hero section: heroHeadline, heroSubtitle
   - Content: outcomes (array), features (object array with title/description/icon)
   - Marketing: whoIsItFor (array), toolsUsed (array), timeline
   - SEO: seoTitle (max 60), seoDescription (max 160)
   - order (for sorting)
   - Validation: required fields, min/max lengths

2. **siteSettings.ts** - Singleton for global site configuration:
   - General: agencyName, tagline, linkedinUrl, contactEmail
   - Homepage Hero: heroHeadline, heroSubtitle, heroPrimaryCtaLabel, heroSecondaryCtaLabel
   - Problem Section: problemStatement, problemPainPoints (3-5 items)
   - Process: processSteps (exactly 4 steps with step number, title, description)
   - Stats: stats array (exactly 4 items with value, suffix, prefix, label, duration)
   - Differentiators: differentiators array (exactly 3 items with title, description, icon)
   - Final CTA: finalCtaHeadline, finalCtaSubtext, finalCtaMicroText
   - Contact: calLink (Cal.com URL)
   - SEO: seoDefaultTitle, seoDefaultDescription
   - Organized in groups: general, homepage, seo, contact

3. **teamMember.ts** - Team member profiles for About page:
   - Fields: name, role, bio (max 300 chars), photo (image with hotspot), linkedinUrl, order

4. **faq.ts** - FAQ entries for accordion sections:
   - Fields: question, answer, page (services/contact/general), order

**Infrastructure:**

- **sanity/schemaTypes/index.ts** - Exports all 4 schemas in types array
- **sanity/structure.ts** - Custom desk structure with siteSettings as singleton (appears at top)
- **lib/sanity/queries.ts** - GROQ queries:
  - siteSettingsQuery: Gets singleton settings
  - servicesQuery: Gets all services ordered
  - serviceBySlugQuery: Gets single service by slug (for dynamic pages)
  - teamMembersQuery: Gets all team members ordered
  - faqsByPageQuery: Gets FAQs filtered by page
- **lib/sanity/client.ts** - Re-exports client from sanity/lib/client for easier imports

**Build status:** ✅ PASS - TypeScript compilation successful

**Note:** Removed `.unique()` from slug validation as it's not available in Sanity v4 API.

## Outcome

- ✅ Impact: Complete CMS foundation ready for content entry - all page specs can now fetch data from Sanity
- 🧪 Tests: npm run build PASSED
- 📁 Files: 8 files created/modified (4 schemas, index, structure, queries, client re-export)
- 🔁 Next prompts: Implement features/01-navbar.md and features/02-footer.md (shared layout components)
- 🧠 Reflection: Sanity schemas are critical for page development - all dynamic content depends on these being correct

## Evaluation notes (flywheel)

- Failure modes observed: `.unique()` validation not available in Sanity v4 - removed, uniqueness is handled by Sanity's slug input
- Graders run and results (PASS/FAIL): PASS - build successful
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Proceed to Phase 4 (Navbar + Footer)
