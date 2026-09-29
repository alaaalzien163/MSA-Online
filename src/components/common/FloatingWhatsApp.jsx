import { useLanguage } from '../../context/language-store.js'
import { whatsappLinkWithMessage } from '../../utils/contactLinks.js'
import { Icon } from './icons.jsx'

/**
 * FloatingWhatsApp
 *
 * Persistent "Contact us via WhatsApp" action, pinned to the bottom corner of
 * every page (logical `end` corner, so it flips with RTL). Opens WhatsApp with
 * a pre-written message. The label is shown from the `sm` breakpoint up; below
 * that it collapses to an icon-only button whose accessible name carries the
 * full text.
 *
 * Rendered below the splash overlay (z-[60]) and navbar (z-50).
 */
function FloatingWhatsApp() {
  const { t } = useLanguage()

  const href = whatsappLinkWithMessage(t('whatsapp.cvMessage'))
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t('floating.contactWhatsApp')} ${t('common.opensInNewTab')}`}
      className="fixed bottom-4 end-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon name="whatsapp" className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">{t('floating.contactWhatsApp')}</span>
    </a>
  )
}

export default FloatingWhatsApp
