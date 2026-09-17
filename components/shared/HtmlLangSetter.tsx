'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/lib/i18n/context'

export function HtmlLangSetter() {
  const { locale, dir } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir])

  return null
}
