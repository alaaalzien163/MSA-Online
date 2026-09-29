/**
 * Centralized site configuration for MSA Online.
 *
 * Single source of truth for branding, metadata, and official contact
 * channels. Components read from this file and never hardcode these values.
 */
export const siteConfig = {
  name: 'MSA Online',
  shortName: 'MSA',
  tagline: 'Discover Opportunities. Build Your Future.',
  description:
    'MSA Online is a career and recruitment platform for discovering job opportunities, supporting recruitment, and building professional CVs.',

  // Footer copyright year.
  copyrightYear: 2026,

  // Official contact channels. Instagram/WhatsApp are full URLs; email is an
  // address (turned into a mailto: link by utils/contactLinks.js).
  contact: {
    instagram: 'https://www.instagram.com/msa__online',
    whatsapp: 'https://wa.me/963940077500',
    email: 'msa.online5@gmail.com',
  },
}

export default siteConfig
