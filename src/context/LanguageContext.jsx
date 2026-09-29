import { useCallback, useEffect, useMemo, useState } from 'react'
import { en } from '../locales/en.js'
import { ar } from '../locales/ar.js'
import { LanguageContext } from './language-store.js'

const MESSAGES = { en, ar }
const STORAGE_KEY = 'msa-lang'
// Arabic is the site's default language; English remains available via the
// switcher and still acts as the fallback for any missing Arabic string.
const DEFAULT_LANG = 'ar'
const SUPPORTED = ['en', 'ar']

/** Read the persisted language (falls back to the default). */
function getInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED.includes(stored)) return stored
  } catch {
    /* localStorage unavailable — use default */
  }
  return DEFAULT_LANG
}

/** Resolve a dot-path (e.g. "nav.home") against a nested messages object. */
function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) return acc[key]
    return undefined
  }, obj)
}

/**
 * LanguageProvider
 *
 * Provides the current language, direction, a setter, and a translate helper.
 * Persists the choice to localStorage and keeps <html lang/dir> in sync so the
 * whole document switches between LTR/English and RTL/Arabic.
 */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  // Keep the document element and storage in sync with the active language.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      document.documentElement.dir = dir
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore persistence errors */
    }
  }, [lang, dir])

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next)
  }, [])

  /**
   * Translate a dot-path key for the active language. Falls back to English,
   * then to the key itself, so a missing string is never a blank UI.
   */
  const t = useCallback(
    (key) => {
      const value =
        resolvePath(MESSAGES[lang], key) ?? resolvePath(MESSAGES.en, key)
      return value ?? key
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, dir, setLang, t, supported: SUPPORTED }),
    [lang, dir, setLang, t],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
