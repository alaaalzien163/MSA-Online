import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './theme-store.js'

const STORAGE_KEY = 'msa-online-theme'
const THEMES = ['light', 'dark']

// The site's default appearance, used when the visitor has no saved choice.
const DEFAULT_THEME = 'light'

// Browser UI (address bar / notch) colors, kept in sync with the real
// --background tokens declared in src/index.css.
const THEME_COLORS = { light: '#ffffff', dark: '#070c18' }

/**
 * Resolve the initial theme.
 * Priority: saved preference → light (the site default).
 * The OS (prefers-color-scheme) preference is deliberately NOT consulted, so a
 * visitor on a dark-mode device still gets the light theme until they opt in.
 */
function getInitialTheme() {
  if (typeof window === 'undefined') return DEFAULT_THEME
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (THEMES.includes(saved)) return saved
  } catch {
    /* localStorage unavailable */
  }
  return DEFAULT_THEME
}

/**
 * ThemeProvider
 *
 * Owns the light/dark theme state, exposes a toggle/setter, keeps the
 * <html data-theme> attribute in sync, and persists explicit user choices to
 * localStorage. Light is the default; an explicit dark choice is remembered and
 * wins on subsequent visits.
 */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  // Reflect the current theme on the document element, and keep the
  // <meta name="theme-color"> tag in sync so mobile browser chrome matches.
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-theme', theme)

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLORS[theme] ?? THEME_COLORS.light)
  }, [theme])

  // Explicit user selection — persist so it wins on the next visit.
  const setTheme = useCallback((next) => {
    if (!THEMES.includes(next)) return
    setThemeState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore persistence errors */
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
