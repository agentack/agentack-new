# Sanity CMS Schemas Spec

**Version**: 1.0.0  
**Locked**: 2026-03-20  
**Status**: Ready for Implementation

---

## Overview

This spec defines all Sanity CMS schemas. Complete this before page development.

---

## 1. Service Schema

**File**: `sanity/schemas/service.ts`

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
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required().unique(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
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
      validation: (Rule) => Rule.required(),
      description: 'Lucide icon name (e.g., "Workflow", "Bot", "BarChart2")',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(2).max(5),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'description', type: 'text', rows: 2, validation: (Rule) => Rule.required() }),
          defineField({ name: 'icon', type: 'string' }),
        ],
      }],
      validation: (Rule) => Rule.required().min(3).max(8),
    }),
    defineField({
      name: 'whoIsItFor',
      title: 'Who Is It For',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3).max(6),
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
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
    }),
  ],
})
```

---

## 2. Site Settings Schema (Singleton)

**File**: `sanity/schemas/siteSettings.ts`

```typescript
import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'homepage', title: 'Homepage Content' },
    { name: 'seo', title: 'SEO' },
    { name: 'contact', title: 'Contact & Booking' },
  ],
  fields: [
    // General
    defineField({ name: 'agencyName', title: 'Agency Name', type: 'string', validation: (Rule) => Rule.required(), group: 'general' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', validation: (Rule) => Rule.required(), group: 'general' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url', group: 'general' }),
    defineField({ name: 'contactEmail', title: 'Contact Email', type: 'string', validation: (Rule) => Rule.required().email(), group: 'general' }),
    
    // Homepage Hero
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string', validation: (Rule) => Rule.required(), group: 'homepage' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3, validation: (Rule) => Rule.required(), group: 'homepage' }),
    defineField({ name: 'heroPrimaryCtaLabel', title: 'Hero Primary CTA Label', type: 'string', validation: (Rule) => Rule.required(), group: 'homepage' }),
    defineField({ name: 'heroSecondaryCtaLabel', title: 'Hero Secondary CTA Label', type: 'string', validation: (Rule) => Rule.required(), group: 'homepage' }),
    
    // Problem Section
    defineField({ name: 'problemStatement', title: 'Problem Statement', type: 'text', rows: 3, validation: (Rule) => Rule.required(), group: 'homepage' }),
    defineField({ name: 'problemPainPoints', title: 'Pain Points', type: 'array', of: [{ type: 'string' }], validation: (Rule) => Rule.required().min(3).max(5), group: 'homepage' }),
    
    // Process Steps
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'step', type: 'number', validation: (Rule) => Rule.required() }),
          defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
        ],
      }],
      validation: (Rule) => Rule.required().length(4),
      group: 'homepage',
    }),
    
    // Stats
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', type: 'number', validation: (Rule) => Rule.required() }),
          defineField({ name: 'suffix', type: 'string' }),
          defineField({ name: 'prefix', type: 'string' }),
          defineField({ name: 'label', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'duration', type: 'number', initialValue: 2000 }),
        ],
      }],
      validation: (Rule) => Rule.required().length(4),
      group: 'homepage',
    }),
    
    // Differentiators
    defineField({
      name: 'differentiators',
      title: 'Differentiators',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
          defineField({ name: 'icon', type: 'string' }),
        ],
      }],
      validation: (Rule) => Rule.required().length(3),
      group: 'homepage',
    }),
    
    // Final CTA
    defineField({ name: 'finalCtaHeadline', title: 'Final CTA Headline', type: 'string', validation: (Rule) => Rule.required(), group: 'homepage' }),
    defineField({ name: 'finalCtaSubtext', title: 'Final CTA Subtext', type: 'text', rows: 3, validation: (Rule) => Rule.required(), group: 'homepage' }),
    defineField({ name: 'finalCtaMicroText', title: 'Final CTA Micro Text', type: 'string', group: 'homepage' }),
    
    // Contact & Booking
    defineField({ name: 'calLink', title: 'Cal.com Link', type: 'url', validation: (Rule) => Rule.required(), group: 'contact' }),
    
    // SEO
    defineField({ name: 'seoDefaultTitle', title: 'Default SEO Title', type: 'string', validation: (Rule) => Rule.required(), group: 'seo' }),
    defineField({ name: 'seoDefaultDescription', title: 'Default SEO Description', type: 'text', rows: 3, validation: (Rule) => Rule.required(), group: 'seo' }),
  ],
})
```

---

## 3. Team Member Schema

**File**: `sanity/schemas/teamMember.ts`

```typescript
import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 5, validation: (Rule) => Rule.required().max(300) }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', validation: (Rule) => Rule.required() }),
  ],
})
```

---

## 4. FAQ Schema

**File**: `sanity/schemas/faq.ts`

```typescript
import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 5, validation: (Rule) => Rule.required() }),
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
    defineField({ name: 'order', title: 'Display Order', type: 'number', validation: (Rule) => Rule.required() }),
  ],
})
```

---

## 5. Sanity Client

**File**: `lib/sanity/client.ts`

```typescript
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
```

---

## 6. Sanity Queries

**File**: `lib/sanity/queries.ts`

```typescript
export const siteSettingsQuery = `*[_type == "siteSettings"][0]`

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  name,
  slug,
  tagline,
  description,
  icon,
  outcomes,
  timeline,
  order
}`

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  tagline,
  description,
  icon,
  heroHeadline,
  heroSubtitle,
  outcomes,
  features,
  whoIsItFor,
  toolsUsed,
  timeline,
  seoTitle,
  seoDescription
}`

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  photo,
  linkedinUrl
}`

export const faqsByPageQuery = `*[_type == "faq" && page == $page] | order(order asc) {
  question,
  answer
}`
```

---

## Implementation Checklist

- [ ] Install Sanity dependencies
- [ ] Create all schema files
- [ ] Register schemas in `sanity/schemaTypes/index.ts`
- [ ] Configure desk structure for singleton
- [ ] Create Sanity client
- [ ] Create query helpers
- [ ] Populate initial content
- [ ] Test queries in Sanity Vision

---

**Next Spec**: `shared/04-custom-hooks.md`
