export const defaultLocale = 'en'
export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  ar: 'AR',
}
