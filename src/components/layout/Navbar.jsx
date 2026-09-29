import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { NAVBAR_LINKS, SECTION_IDS } from '../../config/navigation.js'
import { useScrolled } from '../../hooks/useScrolled.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import { useLanguage } from '../../context/language-store.js'
import LanguageSwitcher from '../common/LanguageSwitcher.jsx'
import ThemeToggle from '../common/ThemeToggle.jsx'
import logo, { brandLogoSrcSet, brandLogoWidth, brandLogoHeight } from '../../utils/logo.js'

/**
 * Navbar
 *
 * Responsive, accessible site navigation:
 * - Sticky + scroll-aware (surface background once scrolled)
 * - Brand logo (6.png) linking home
 * - Desktop links + language switcher + theme toggle
 * - Mobile: theme toggle + hamburger in the bar; links + switcher in the menu
 * - Bilingual, RTL-aware, and themed via semantic tokens
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  const scrolled = useScrolled(8)
  const activeId = useActiveSection(SECTION_IDS)
  const { t } = useLanguage()
  const burgerRef = useRef(null)
  const menuRef = useRef(null)
  const wasOpen = useRef(false)

  // Focus management for the mobile menu (WCAG 2.4.3):
  // move focus into the menu on open, return it to the toggle on close.
  useEffect(() => {
    if (menuOpen) {
      wasOpen.current = true
      const first = menuRef.current?.querySelector('a[href], button')
      first?.focus()
    } else if (wasOpen.current) {
      wasOpen.current = false
      burgerRef.current?.focus()
    }
  }, [menuOpen])

  // Escape closes the menu; Tab is kept inside it so keyboard focus cannot
  // wander to the page content hidden behind the locked overlay.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        return
      }
      if (e.key !== 'Tab') return
      const menu = menuRef.current
      if (!menu) return
      const focusable = Array.from(
        menu.querySelectorAll('a[href], button:not([disabled])'),
      ).filter((el) => el.getClientRects().length > 0)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (e.shiftKey && (active === first || !menu.contains(active))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (active === last || !menu.contains(active))) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  // In-page links are marked active by scroll-spy (only on the home route);
  // route links (e.g. /contact) are marked as the current page.
  const linkState = (link) => {
    const isRouteLink = link.href.startsWith('/') && !link.href.startsWith('/#')
    if (isRouteLink) {
      return pathname === link.href ? 'page' : undefined
    }
    return pathname === '/' && activeId === link.id ? 'true' : undefined
  }

  const linkBase =
    'rounded-md px-1 py-1 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-surface/80 backdrop-blur'
          : 'border-b border-transparent bg-surface/60 backdrop-blur-sm'
      }`}
    >
      <nav
        aria-label={t('nav.primary')}
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3"
      >
        {/* Brand logo */}
        <Link
          to="/#home"
          onClick={closeMenu}
          aria-label={t('common.logoAlt')}
          className="inline-flex shrink-0 items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <img
            src={logo}
            srcSet={brandLogoSrcSet}
            sizes="69px"
            alt={t('common.logoAlt')}
            className="h-9 w-auto sm:h-10"
            width={brandLogoWidth}
            height={brandLogoHeight}
          />
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop navigation + language */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-7">
              {NAVBAR_LINKS.map((link) => {
                const current = linkState(link)
                if (link.cta) {
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.href}
                        aria-current={current}
                        className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {t(`nav.${link.tKey}`)}
                      </Link>
                    </li>
                  )
                }
                return (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      aria-current={current}
                      className={`${linkBase} ${
                        current
                          ? 'text-accent'
                          : 'text-content hover:text-accent'
                      }`}
                    >
                      {t(`nav.${link.tKey}`)}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <LanguageSwitcher />
          </div>

          {/* Theme toggle — always visible */}
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            ref={burgerRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-heading outline-none hover:bg-surface-2 focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            <span className="sr-only">
              {menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-surface md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {NAVBAR_LINKS.map((link) => {
                const current = linkState(link)
                return (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      onClick={closeMenu}
                      aria-current={current}
                      className={`block rounded-md px-3 py-3 text-base font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        link.cta
                          ? 'mt-1 bg-primary text-center text-white hover:bg-primary-hover'
                          : current
                            ? 'text-accent'
                            : 'text-content hover:bg-surface-2 hover:text-accent'
                      }`}
                    >
                      {t(`nav.${link.tKey}`)}
                    </Link>
                  </li>
                )
              })}
              <li className="mt-3 border-t border-border pt-4">
                <LanguageSwitcher />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
