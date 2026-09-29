import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useScrollToHash } from '../../hooks/useScrollToHash.js'
import { useLanguage } from '../../context/language-store.js'

/**
 * Main application layout.
 *
 * Composes the navigation area, main content area (rendered via <Outlet />),
 * and footer area. Handles in-page hash navigation and provides a translated,
 * RTL-aware skip link for keyboard users.
 */
function MainLayout() {
  useScrollToHash()
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-background text-content">
      <a
        href="#main-content"
        className="sr-only rounded-md focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {t('common.skipToContent')}
      </a>

      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 focus:outline-none"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
