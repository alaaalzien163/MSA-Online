import { createContext, useContext } from 'react'

/**
 * Language context + hook.
 *
 * Kept separate from the provider component so the provider file only exports
 * a component (keeps React Fast Refresh happy).
 */
export const LanguageContext = createContext(null)

/** Access the language context (lang, dir, setLang, t). */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
