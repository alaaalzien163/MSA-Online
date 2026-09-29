/**
 * Contact link helpers.
 *
 * Builds ready-to-use href values from the official channels in
 * src/config/site.js, keeping this logic out of UI components. Instagram and
 * WhatsApp are already full URLs; email is turned into a mailto: link.
 */
import { siteConfig } from '../config/site.js'

/**
 * @param {{ instagram: string, whatsapp: string, email: string }} contact
 * @returns {{ instagram: string, whatsapp: string, email: string }}
 */
export function buildContactLinks(contact) {
  return {
    instagram: contact.instagram ?? '',
    whatsapp: contact.whatsapp ?? '',
    email: contact.email ? `mailto:${contact.email}` : '',
  }
}

/** Ready-to-use contact links for the configured site. */
export const contactLinks = buildContactLinks(siteConfig.contact)

/**
 * Return the WhatsApp link with a pre-written message attached.
 *
 * WhatsApp reads the `text` query parameter and pre-fills the chat input, so
 * the visitor only has to press send. The message is localised by the caller.
 *
 * @param {string} [message] pre-written message (already translated)
 * @returns {string} wa.me URL, or '' when WhatsApp is not configured
 */
export function whatsappLinkWithMessage(message) {
  const base = contactLinks.whatsapp
  if (!base) return ''
  const text = String(message ?? '').trim()
  if (!text) return base
  const separator = base.includes('?') ? '&' : '?'
  return `${base}${separator}text=${encodeURIComponent(text)}`
}

export default contactLinks
