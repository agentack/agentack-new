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
      validation: (Rule) => Rule.email(),
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
      group: 'homepage',
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Hero Primary CTA Label',
      type: 'string',
      initialValue: 'Book a free strategy call',
      group: 'homepage',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Hero Secondary CTA Label',
      type: 'string',
      initialValue: 'View our services',
      group: 'homepage',
    }),

    // Problem Section
    defineField({
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'text',
      rows: 3,
      group: 'homepage',
    }),
    defineField({
      name: 'problemPainPoints',
      title: 'Pain Points',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'homepage',
    }),

    // Process Steps
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'step', type: 'number' }),
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 3 }),
        ],
      }],
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
          defineField({ name: 'value', type: 'number' }),
          defineField({ name: 'suffix', type: 'string' }),
          defineField({ name: 'prefix', type: 'string' }),
          defineField({ name: 'label', type: 'string' }),
          defineField({ name: 'duration', type: 'number', initialValue: 2000 }),
        ],
      }],
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
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 3 }),
          defineField({ name: 'icon', type: 'string' }),
        ],
      }],
      group: 'homepage',
    }),

    // Final CTA
    defineField({
      name: 'finalCtaHeadline',
      title: 'Final CTA Headline',
      type: 'string',
      group: 'homepage',
    }),
    defineField({
      name: 'finalCtaSubtext',
      title: 'Final CTA Subtext',
      type: 'text',
      rows: 3,
      group: 'homepage',
    }),
    defineField({
      name: 'finalCtaMicroText',
      title: 'Final CTA Micro Text',
      type: 'string',
      group: 'homepage',
    }),

    // Contact & Booking
    defineField({
      name: 'calLink',
      title: 'Cal.com Link',
      type: 'url',
      group: 'contact',
    }),

    // SEO
    defineField({
      name: 'seoDefaultTitle',
      title: 'Default SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDefaultDescription',
      title: 'Default SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
  ],
})
