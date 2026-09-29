/**
 * SEO and social-sharing metadata helpers.
 *
 * The app is a client-rendered SPA, so the static tags in index.html only
 * reach crawlers/social scrapers that do not execute JavaScript. This module
 * keeps the live document correct when the route or the language changes.
 *
 * Design constraints honoured here:
 *  - No new dependencies: plain DOM APIs only (no react-helmet / react-helmet-async).
 *  - Idempotent: every setter reuses an existing tag instead of appending a
 *    new one, so <head> can never accumulate duplicate title/meta/link tags.
 *  - No hardcoded production domain: the canonical origin comes from the
 *    VITE_SITE_URL build variable when provided, otherwise from the live
 *    window.location.origin, so preview/staging/production all stay correct.
 */
import siteConfig from '../config/site.js'

/** Build-time production origin override (set VITE_SITE_URL in .env). */
const CONFIGURED_SITE_URL = (import.meta.env?.VITE_SITE_URL ?? '').trim()

/** Social share image (generated from the real logo, see public/og-image.png). */
const OG_IMAGE_PATH = '/og-image.png'
const OG_IMAGE_WIDTH = 1200
const OG_IMAGE_HEIGHT = 630

/**
 * Absolute origin used for canonical/og:url/twitter:image.
 * Prefers VITE_SITE_URL; validates it; falls back to the live origin.
 */
export function getSiteOrigin() {
  if (CONFIGURED_SITE_URL) {
    try {
      return new URL(CONFIGURED_SITE_URL).origin
    } catch {
      /* malformed env value — fall through to the live origin */
    }
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return ''
}

/**
 * Build an absolute, canonical URL for a route path.
 * Strips query string and hash (they are not part of a canonical URL).
 */
export function absoluteUrl(path = '/') {
  const origin = getSiteOrigin()
  const clean = String(path).split('?')[0].split('#')[0]
  const withLeadingSlash = clean.startsWith('/') ? clean : `/${clean}`
  return origin ? `${origin}${withLeadingSlash}` : withLeadingSlash
}

/**
 * Find a <head> tag or create it once. `apply` then mutates the element, so
 * repeated calls update in place rather than duplicating the tag.
 */
function upsertHeadElement(selector, create) {
  const existing = document.head.querySelector(selector)
  if (existing) return existing
  const el = create()
  document.head.appendChild(el)
  return el
}

/**
 * Set a <meta> tag by `name` or `property`. Idempotent.
 * @param {'name'|'property'} attr
 */
export function setMeta(attr, key, content) {
  if (typeof document === 'undefined' || !content) return null
  const el = upsertHeadElement(`meta[${attr}="${key}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    return meta
  })
  el.setAttribute('content', content)
  return el
}

/** Set (or create) a <link rel="..."> tag. Idempotent. */
export function setLink(rel, href, attrs = {}) {
  if (typeof document === 'undefined' || !href) return null
  const el = upsertHeadElement(`link[rel="${rel}"]`, () => {
    const link = document.createElement('link')
    link.setAttribute('rel', rel)
    return link
  })
  el.setAttribute('href', href)
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
  return el
}

/**
 * Apply the full metadata set for a given route + language.
 * Called on mount and whenever the route or language changes.
 *
 * @param {object}   options
 * @param {string}   options.lang        'en' | 'ar'
 * @param {string}   options.title       <title> / og:title / twitter:title
 * @param {string}   options.description meta description / og / twitter
 * @param {string}   options.path        current route path
 */
export function applyMetadata({ lang, title, description, path }) {
  if (typeof document === 'undefined' || !title || !description) return

  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(OG_IMAGE_PATH)
  const imageAlt = `${siteConfig.name} logo`
  const isArabic = lang === 'ar'

  document.title = title

  setMeta('name', 'description', description)
  setLink('canonical', url)

  // Open Graph
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:site_name', siteConfig.name)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:image', imageUrl)
  setMeta('property', 'og:image:secure_url', imageUrl)
  setMeta('property', 'og:image:type', 'image/png')
  setMeta('property', 'og:image:width', String(OG_IMAGE_WIDTH))
  setMeta('property', 'og:image:height', String(OG_IMAGE_HEIGHT))
  setMeta('property', 'og:image:alt', imageAlt)
  setMeta('property', 'og:locale', isArabic ? 'ar_AR' : 'en_US')
  setMeta('property', 'og:locale:alternate', isArabic ? 'en_US' : 'ar_AR')

  // Twitter / X
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', imageUrl)
  setMeta('name', 'twitter:image:alt', imageAlt)
}
