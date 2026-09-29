import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../../context/language-store.js'
import { whatsappLinkWithMessage } from '../../utils/contactLinks.js'
import { Icon } from '../common/icons.jsx'

/**
 * Employers section (Home / #employers).
 *
 * Speaks to business owners: advertises the job-advertising service and offers
 * a single "Post a Job" action that opens WhatsApp with a pre-written message.
 * This balances the page so it serves both job seekers and employers.
 */
function Employers() {
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

  const postJobHref = whatsappLinkWithMessage(t('whatsapp.jobMessage'))

  return (
    <section
      id="employers"
      aria-labelledby="employers-heading"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-border bg-surface px-6 py-12 text-center sm:px-10 lg:flex-row lg:justify-between lg:gap-12 lg:text-start"
      >
        <div className="lg:max-w-xl">
          <motion.span
            variants={fade}
            className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            <Icon name="users" className="h-4 w-4" />
            {t('employers.label')}
          </motion.span>

          <motion.h2
            id="employers-heading"
            variants={fade}
            className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
          >
            {t('employers.title')}
          </motion.h2>

          <motion.p
            variants={fade}
            className="mt-4 text-lg leading-relaxed text-content"
          >
            {t('employers.description')}
          </motion.p>

          <motion.p variants={fade} className="mt-3 text-sm leading-relaxed text-content">
            {t('employers.note')}
          </motion.p>
        </div>

        <motion.div variants={fade} className="shrink-0">
          <motion.a
            href={postJobHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:w-auto"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            {t('employers.cta')}
            <span className="sr-only">{t('common.opensInNewTab')}</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Employers
