import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../../config/site.js'
import { FOOTER_LINKS } from '../../config/navigation.js'
import { ROUTES } from '../../config/routes.js'
import { contactLinks, whatsappLinkWithMessage } from '../../utils/contactLinks.js'
import { useLanguage } from '../../context/language-store.js'
import { Icon } from '../common/icons.jsx'
import logo, { brandLogoSrcSet, brandLogoWidth, brandLogoHeight } from '../../utils/logo.js'

/**
 * Footer
 *
 * Site-wide footer: branding, description, quick navigation, social links,
 * contact links, and copyright. Text is translated via the language helper;
 * links/values come from the centralized config. External links open in a new
 * tab with rel="noopener noreferrer".
 */

const external = { target: '_blank', rel: 'noopener noreferrer' }

// Official contact channels — config-derived, computed once. Instagram and
// WhatsApp open in a new tab; email uses mailto:.
const CONTACT_CHANNELS = [
  { key: 'instagram', href: contactLinks.instagram, icon: 'instagram', isExternal: true },
  { key: 'whatsapp', href: contactLinks.whatsapp, icon: 'whatsapp', isExternal: true },
  { key: 'email', href: contactLinks.email, icon: 'mail', isExternal: false },
].filter((item) => Boolean(item.href))

// Standalone pages: About Us plus the (draft) legal documents.
const PAGE_LINKS = [
  { key: 'about', href: ROUTES.about, tKey: 'aboutPage.label' },
  { key: 'privacy', href: ROUTES.privacy, tKey: 'legal.privacy.title' },
  { key: 'terms', href: ROUTES.terms, tKey: 'legal.terms.title' },
  { key: 'jobPostingPolicy', href: ROUTES.jobPostingPolicy, tKey: 'legal.jobPostingPolicy.title' },
]

function Footer() {
  const { pathname } = useLocation()
  const { t } = useLanguage()

  // The WhatsApp channel carries a pre-written, localised message so the visitor
  // only has to press send. Built here (not at module scope) to follow language.
  const channels = CONTACT_CHANNELS.map((item) =>
    item.key === 'whatsapp'
      ? { ...item, href: whatsappLinkWithMessage(t('whatsapp.generalMessage')) }
      : item,
  )

  const linkClass =
    'rounded text-sm text-content transition-colors hover:text-accent outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent'

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div>
            <Link
              to="/#home"
              aria-label={t('common.logoAlt')}
              className="inline-flex rounded outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={logo}
                srcSet={brandLogoSrcSet}
                sizes="62px"
                alt={t('common.logoAlt')}
                className="h-9 w-auto"
                width={brandLogoWidth}
                height={brandLogoHeight}
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-content">
              {t('siteDescription')}
            </p>

            {/* Contact channel icons */}
            {channels.length > 0 && (
              <ul className="mt-5 flex flex-wrap items-center gap-2">
                {channels.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      {...(item.isExternal ? external : {})}
                      // Icon-only links have no visible text, so the
                      // "opens in a new tab" hint is part of the name
                      // (aria-label overrides the element's own content).
                      aria-label={`${t(`a11y.${item.key}`)}${
                        item.isExternal ? ` ${t('common.opensInNewTab')}` : ''
                      }`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-content transition-colors hover:border-accent hover:text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Icon name={item.icon} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Quick navigation */}
          <nav aria-labelledby="footer-nav-heading">
            <h2
              id="footer-nav-heading"
              className="text-sm font-semibold uppercase tracking-wider text-heading"
            >
              {t('footer.explore')}
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              {FOOTER_LINKS.map((link) => {
                const isRouteLink =
                  link.href.startsWith('/') && !link.href.startsWith('/#')
                return (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      aria-current={
                        isRouteLink && pathname === link.href
                          ? 'page'
                          : undefined
                      }
                      className={`${linkClass} inline-block py-1.5`}
                    >
                      {t(`nav.${link.tKey}`)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2
              id="footer-contact-heading"
              className="text-sm font-semibold uppercase tracking-wider text-heading"
            >
              {t('footer.contact')}
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              {channels.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    {...(item.isExternal ? external : {})}
                    className="inline-flex items-center gap-2 rounded py-1.5 text-sm text-content transition-colors hover:text-accent outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Icon name={item.icon} className="h-4 w-4 shrink-0" />
                    <span className="break-all">
                      {item.key === 'email'
                        ? siteConfig.contact.email
                        : t(`channels.${item.key}`)}
                    </span>
                    {item.isExternal && (
                      <span className="sr-only">{t('common.opensInNewTab')}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages: About Us + legal */}
          <nav aria-labelledby="footer-pages-heading">
            <h2
              id="footer-pages-heading"
              className="text-sm font-semibold uppercase tracking-wider text-heading"
            >
              {t('footer.pages')}
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              {PAGE_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={`${linkClass} inline-block py-1.5`}
                  >
                    {t(link.tKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-content">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}.{' '}
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
