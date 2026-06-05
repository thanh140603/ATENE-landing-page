import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { COPY_JA, COPY_EN, type Copy } from '../../consts/copy'

export type Locale = 'ja' | 'en'

type I18nContextValue = {
  locale: Locale
  copy: Copy
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ja')

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      copy: locale === 'ja' ? COPY_JA : COPY_EN,
      setLocale,
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

