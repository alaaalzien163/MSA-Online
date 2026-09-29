import { motion, useReducedMotion } from 'framer-motion'
import { aboutFeatures } from '../../data/home.js'
import { useLanguage } from '../../context/language-store.js'
import { Icon } from '../common/icons.jsx'

/**
 * About section (Home / #about).
 *
 * Intro copy plus three feature blocks (icon + title + description). Text is
 * translated via the language helper; structure comes from data/home.js.
 * Blocks animate in on scroll and have a subtle hover lift.
 */
function About() {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const container = {
    hidden: {},
    show: {
      transition: reduceMotion ? {} : { staggerChildren: 0.1 },
    },
  }
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.3 : 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="about-heading"
          className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
        >
          {t('about.title')}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-content">
          {t('about.intro')}
        </p>
      </div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {aboutFeatures.map((feature) => (
          <motion.li
            key={feature.id}
            variants={item}
            className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <Icon name={feature.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-heading">
              {t(`about.features.${feature.id}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-content">
              {t(`about.features.${feature.id}.description`)}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default About
