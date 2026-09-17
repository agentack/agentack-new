import { z } from 'zod'

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  companyName: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters'),
  estimatedBudget: z
    .string()
    .min(1, 'Estimated budget is required'),
  projectUrgency: z
    .string()
    .min(1, 'Project urgency is required'),
  notes: z
    .string()
    .max(2000, 'Notes must be less than 2000 characters')
    .optional()
    .or(z.literal('')),
})

export type ContactFormData = z.infer<typeof contactSchema>