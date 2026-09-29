import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { heroCtas } from '../../data/home.js'
import { useLanguage } from '../../context/language-store.js'
import logo, { brandLogoSrcSet, brandLogoWidth, brandLogoHeight } from '../../utils/logo.js'

/**
 * Hero section (Home / #home).
 *
 * Mobile-first, two-column on larger screens. Text is translated via the
 * language helper; the MSA Online logo (6.png) is presented in a branded panel
 * as the hero visual. RTL-aware (logical text alignment).
 */
function Hero() {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  // Subtle staggered entrance; disabled when reduced motion is preferred.
  const container = {
    hidden: {},
    show: {
      transition: reduceMotion ? {} : { staggerChildren: 0.12 },
    },
  }
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.3 : 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-start"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-widest text-accent"
          >
            {t('hero.label')}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-4 text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {t('hero.heading')}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-content lg:mx-0"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              to={heroCtas.primary}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              {t('hero.viewJobs')}
            </Link>
            <Link
              to={heroCtas.secondary}
              className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-accent inset-ring-1 inset-ring-accent transition-colors hover:bg-accent-soft outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              {t('hero.buildCv')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Brand visual */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.3 : 0.7, ease: 'easeOut' }}
          className="order-first lg:order-last"
        >
          <div className="mx-auto flex max-w-lg items-center justify-center rounded-3xl border border-border bg-surface-2 p-8 sm:p-12">
            <img
              src={logo}
              srcSet={brandLogoSrcSet}
              sizes="384px"
              alt={t('common.logoAlt')}
              className="h-auto w-full max-w-sm"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={brandLogoWidth}
              height={brandLogoHeight}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
