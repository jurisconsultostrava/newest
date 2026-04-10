'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, defaultLocale, t } from './i18n'

interface LangContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  tr: typeof t.de
}

const LangContext = createContext<LangContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  tr: t.de,
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const saved = localStorage.getItem('revestium-lang') as Locale | null
    if (saved && (saved === 'de' || saved === 'en' || saved === 'cs')) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('revestium-lang', l)
  }

  return (
    <LangContext.Provider value={{ locale, setLocale, tr: t[locale] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
