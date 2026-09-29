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

export default contactLinks
