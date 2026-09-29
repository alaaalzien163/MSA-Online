import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/language-store.js'
import { ROUTES } from '../config/routes.js'
import { applyMetadata } from '../utils/seo.js'

/**
 * Per-route SEO copy keys. Anything not listed falls back to DEFAULT_SEO
 * (the 404 route), so no URL can ever render an empty/incorrect title.
 */
const ROUTE_SEO = {
  [ROUTES.home]: { title: 'seo.title', description: 'seo.description' },
  [ROUTES.about]: { title: 'seo.aboutTitle', description: 'seo.aboutDescription' },
  [ROUTES.contact]: {
    title: 'seo.contactTitle',
    description: 'seo.contactDescription',
  },
  [ROUTES.privacy]: {
    title: 'seo.privacyTitle',
    description: 'seo.privacyDescription',
  },
  [ROUTES.terms]: { title: 'seo.termsTitle', description: 'seo.termsDescription' },
  [ROUTES.jobPostingPolicy]: {
    title: 'seo.jobPostingPolicyTitle',
    description: 'seo.jobPostingPolicyDescription',
  },
}

const DEFAULT_SEO = {
  title: 'seo.notFoundTitle',
  description: 'seo.notFoundDescription',
}

/**
 * Keeps <title>, meta description, canonical, Open Graph and Twitter/X tags in
 * sync with the current route and language. Runs on mount and on every
 * route/language change; all writes are idempotent (utils/seo.js).
 */
export function useSeo() {
  const { pathname } = useLocation()
  const { t, lang } = useLanguage()

  useEffect(() => {
    const keys = ROUTE_SEO[pathname] ?? DEFAULT_SEO
    applyMetadata({
      lang,
      title: t(keys.title),
      description: t(keys.description),
      path: pathname,
    })
  }, [pathname, lang, t])
}
