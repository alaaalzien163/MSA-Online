import { useLanguage } from '../../context/language-store.js'

/**
 * LanguageSwitcher
 *
 * Accessible EN / AR toggle. Renders a segmented control where the active
 * language is visually highlighted (accent) and exposed via aria-pressed.
 * Used in both the desktop navbar and the mobile menu.
 */
function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t } = useLanguage()

  const options = [
    { code: 'en', label: t('language.en'), aria: t('language.switchToEnglish') },
    { code: 'ar', label: t('language.ar'), aria: t('language.switchToArabic') },
  ]

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5 ${className}`}
    >
      {options.map((o) => {
        const active = lang === o.code
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            aria-label={o.aria}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
              // Active state uses the brand navy (bg-primary) rather than
              // bg-accent: white on the accent only reaches 3.28:1 in the dark
              // theme, while white on primary is >11:1 in both themes and
              // matches the other primary buttons in the design.
              active
                ? 'bg-primary text-white'
                : 'text-content hover:text-accent'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
