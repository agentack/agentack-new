'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { type Locale, defaultLocale, locales } from './config'
import { en } from './translations/en'
import { ar } from './translations/ar'

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>
}

type TranslationMap = DeepStringify<typeof en>

const translations: Record<Locale, TranslationMap> = { en, ar }

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationMap
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  const stored = localStorage.getItem('locale') as Locale | null
  if (stored && locales.includes(stored)) return stored
  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === 'ar') return 'ar'
  return defaultLocale
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getInitialLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((locale: Locale) => {
    setLocaleState(locale)
    localStorage.setItem('locale', locale)
  }, [])

  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const defaultContext: LanguageContextValue = { locale, setLocale, t: translations[locale], dir }

  return (
    <LanguageContext.Provider value={defaultContext}>
      <div lang={locale} dir={dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
