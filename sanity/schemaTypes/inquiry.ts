import { defineField, defineType } from 'sanity'

export const inquiry = defineType({
  name: 'inquiry',
  title: 'Contact Inquiries',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estimatedBudget',
      title: 'Estimated Budget',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectUrgency',
      title: 'Project Urgency',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'notes',
      title: 'Notes (from client)',
      type: 'text',
      rows: 4,
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Booked', value: 'booked' },
          { title: 'Meeting', value: 'meeting' },
          { title: 'Closed', value: 'closed' },
          { title: 'Gone', value: 'gone' },
        ],
        layout: 'radio',
      },
      initialValue: 'booked',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founderNotes',
      title: 'Description / Notes (founders)',
      type: 'text',
      rows: 6,
      description: 'Internal notes and follow-up details',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  initialValue: {
    status: 'booked',
    submittedAt: new Date().toISOString(),
  },
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'companyName',
      status: 'status',
    },
    prepare: ({ title, subtitle, status }) => ({
      title: title || 'Untitled inquiry',
      subtitle: subtitle || '—',
    }),
  },
})