import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../../context/language-store.js'
import logo, { brandLogoSrcSet, brandLogoWidth, brandLogoHeight } from '../../utils/logo.js'

/**
 * SplashScreen
 *
 * A short, polished branded loading overlay shown on initial app load.
 * - The MSA Online logo (6.png) is the primary element, on a light lockup card
 *   so it stays clear in both light and dark themes (image is never edited).
 * - Overlay background uses the theme token, so there's no light/dark flash.
 * - Subtle fade + scale-up entrance; smooth fade-out via parent AnimatePresence.
 * - Respects prefers-reduced-motion; visible text is translated.
 *
 * @param {() => void} onComplete - Called when the splash duration elapses.
 * @param {number} [duration=1500] - Visible duration in ms (full-motion).
 */
function SplashScreen({ onComplete, duration = 1500 }) {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  useEffect(() => {
    const visibleFor = reduceMotion ? 500 : duration
    const timer = setTimeout(() => onComplete?.(), visibleFor)
    return () => clearTimeout(timer)
  }, [onComplete, duration, reduceMotion])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: 'easeInOut' }}
      role="status"
      aria-live="polite"
      aria-label={t('splash.ariaLabel')}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0.3 : 0.6, ease: 'easeOut' }}
      >
        {/* Logo lockup — light card keeps the logo clear in both themes */}
        <div className="flex items-center justify-center rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <img
            src={logo}
            srcSet={brandLogoSrcSet}
            sizes="256px"
            alt={t('common.logoAlt')}
            className="h-auto w-48 sm:w-56 md:w-64"
            width={brandLogoWidth}
            height={brandLogoHeight}
          />
        </div>

        {/* Subtle loading indicator */}
        <div className="h-0.5 w-40 overflow-hidden rounded-full bg-border">
          {!reduceMotion && (
            <motion.div
              className="h-full w-1/3 rounded-full bg-accent"
              initial={{ x: '-120%' }}
              animate={{ x: '360%' }}
              transition={{
                duration: 1.1,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
          )}
        </div>

        <span className="sr-only">{t('splash.loading')}</span>
      </motion.div>
    </motion.div>
  )
}

export default SplashScreen
