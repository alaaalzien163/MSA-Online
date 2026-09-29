import { useTheme } from '../../context/theme-store.js'
import { useLanguage } from '../../context/language-store.js'
import { Icon } from './icons.jsx'

/**
 * ThemeToggle
 *
 * Accessible light/dark switch. Shows a moon in light mode (activates dark)
 * and a sun in dark mode (activates light). Labelled for screen readers and
 * keyboard-focusable with a visible focus ring. Styled with theme tokens so
 * it fits both themes.
 */
function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  const isDark = theme === 'dark'
  const label = isDark ? t('theme.toLight') : t('theme.toDark')

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-content transition-colors hover:border-accent hover:text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="h-5 w-5" />
    </button>
  )
}

export default ThemeToggle
