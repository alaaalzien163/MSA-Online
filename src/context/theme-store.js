import { createContext, useContext } from 'react'

/**
 * Theme context + hook.
 *
 * Kept separate from the provider component so the provider file only exports
 * a component (keeps React Fast Refresh happy).
 */
export const ThemeContext = createContext(null)

/** Access the theme context (theme, toggleTheme, setTheme). */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
