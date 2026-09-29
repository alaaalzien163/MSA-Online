import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './theme-store.js'

const STORAGE_KEY = 'msa-online-theme'
const THEMES = ['light', 'dark']

// Browser UI (address bar / notch) colors, kept in sync with the real
// --background tokens declared in src/index.css.
const THEME_COLORS = { light: '#ffffff', dark: '#070c18' }

/**
 * Resolve the initial theme.
 * Priority: saved preference → system preference → light.
 */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (THEMES.includes(saved)) return saved
  } catch {
    /* localStorage unavailable */
  }
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

/**
 * ThemeProvider
 *
 * Owns the light/dark theme state, exposes a toggle/setter, keeps the
 * <html data-theme> attribute in sync, and persists explicit user choices to
 * localStorage. Until the user chooses explicitly, the app follows the system
 * (prefers-color-scheme) preference live.
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

  // Follow system changes until the user makes an explicit choice.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      try {
        if (!window.localStorage.getItem(STORAGE_KEY)) {
          setThemeState(e.matches ? 'dark' : 'light')
        }
      } catch {
        setThemeState(e.matches ? 'dark' : 'light')
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Explicit user selection — persist so it wins over system preference.
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
