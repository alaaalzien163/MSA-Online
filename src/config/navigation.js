/**
 * Primary navigation configuration.
 *
 * Single source of truth for the main nav. For in-page section links, `id`
 * matches the target section id on the Home page (used for scroll-spy active
 * state) and `href` is a `/#id` link. Route links (e.g. /contact) point to a
 * dedicated page and are excluded from scroll-spy. `tKey` maps to nav.<tKey>
 * in the locale files so labels are translated (never hardcoded in the nav).
 */
export const NAV_LINKS = [
  { id: 'home', tKey: 'home', href: '/#home' },
  { id: 'about', tKey: 'about', href: '/#about' },
  { id: 'jobs', tKey: 'jobs', href: '/#jobs' },
  { id: 'build-cv', tKey: 'buildCv', href: '/contact', cta: true },
  // Kept for the footer quick links, but hidden from the navbar (both the
  // desktop bar and the mobile menu). /contact stays reachable via "Build Your CV".
  { id: 'contact', tKey: 'contact', href: '/contact', navHidden: true },
]

/** Links rendered in the navbar / mobile menu (excludes `navHidden` entries). */
export const NAVBAR_LINKS = NAV_LINKS.filter((link) => !link.navHidden)

// Section ids used for scroll-spy — only in-page (`/#id`) links (stable ref).
export const SECTION_IDS = NAV_LINKS.filter((link) =>
  link.href.startsWith('/#'),
).map((link) => link.id)

// Footer quick links — derived from NAV_LINKS so the two stay in sync.
// "Build Your CV" (the CTA) is intentionally excluded from the quick list.
export const FOOTER_LINKS = NAV_LINKS.filter(
  (link) => !link.cta && link.id !== 'home',
).concat(NAV_LINKS.filter((link) => link.id === 'home'))

export default NAV_LINKS
