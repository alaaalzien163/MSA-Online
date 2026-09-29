import { motion, useReducedMotion } from 'framer-motion'
import { contactLinks } from '../../utils/contactLinks.js'
import { useLanguage } from '../../context/language-store.js'
import { Icon } from '../common/icons.jsx'

/**
 * Jobs section (Home / #jobs).
 *
 * A focused call-to-action: heading, short description, and a single button
 * that opens the MSA Online Instagram page (URL from the centralized config).
 * No job cards/listings/data. Text is translated; themed via semantic tokens.
 */
function Jobs() {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const fade = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.3 : 0.5, ease: 'easeOut' },
    },
  }
  const container = {
    hidden: {},
    show: { transition: reduceMotion ? {} : { staggerChildren: 0.1 } },
  }

  return (
    <section
      id="jobs"
      aria-labelledby="jobs-heading"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface-2 px-6 py-14 text-center sm:px-10 sm:py-16"
      >
        <motion.span
          variants={fade}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent"
        >
          <Icon name="briefcase" className="h-7 w-7" />
        </motion.span>

        <motion.h2
          id="jobs-heading"
          variants={fade}
          className="mt-6 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
        >
          {t('jobs.title')}
        </motion.h2>

        <motion.p
          variants={fade}
          className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-content"
        >
          {t('jobs.description')}
        </motion.p>

        <motion.div variants={fade} className="mt-8">
          <motion.a
            href={contactLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            <Icon name="instagram" className="h-5 w-5" />
            {t('jobs.exploreCta')}
            <span className="sr-only">{t('common.opensInNewTab')}</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Jobs
