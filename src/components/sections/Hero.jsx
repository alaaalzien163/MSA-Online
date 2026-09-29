import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { heroCtas } from '../../data/home.js'
import { heroImage, hasHeroImage } from '../../config/heroImage.js'
import { useLanguage } from '../../context/language-store.js'
import HeroIllustration from './HeroIllustration.jsx'

/**
 * Hero section (Home / #home).
 *
 * Mobile-first, two-column on larger screens. Text is translated via the
 * language helper. The visual is a representative recruitment image — a real
 * approved photo when configured (src/config/heroImage.js), otherwise a
 * brand-coloured illustration. The MSA Online logo intentionally does NOT
 * appear here (it lives in the navbar, footer, and splash) so it no longer
 * dominates the homepage. RTL-aware (logical text alignment / column order).
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

          {/* Who the platform is for — job seekers and business owners. */}
          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-content/80 lg:mx-0"
          >
            {t('hero.audience')}
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

        {/* Recruitment visual — real approved photo when configured, otherwise
            a brand illustration. Placed after the text on mobile (content-first
            hierarchy) and on the trailing side on desktop. */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.3 : 0.7, ease: 'easeOut' }}
          className="lg:order-last"
        >
          {hasHeroImage ? (
            <img
              src={heroImage.src}
              srcSet={heroImage.srcSet ?? undefined}
              sizes={heroImage.srcSet ? heroImage.sizes : undefined}
              alt={t('hero.imageAlt')}
              className="mx-auto aspect-[4/3] w-full max-w-xl rounded-3xl border border-border object-cover shadow-sm"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={heroImage.width}
              height={heroImage.height}
            />
          ) : (
            <HeroIllustration className="mx-auto w-full max-w-xl" />
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
