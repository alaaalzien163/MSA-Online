import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../../context/language-store.js'
import { Icon } from './icons.jsx'

/**
 * LegalPage
 *
 * Shared layout for the legal pages (Privacy Policy, Terms of Use, Job Posting
 * Policy). These are DRAFT scaffolds: a visible notice makes clear that the
 * content is a template that has not been legally reviewed, so it is never
 * mistaken for a finalised policy.
 *
 * Content comes from `legal.<pageKey>` in the locale files: `title`, `intro`,
 * and a `sections` array of `{ title, body }` (English is the fallback for any
 * missing Arabic string).
 *
 * @param {{ pageKey: 'privacy' | 'terms' | 'jobPostingPolicy' }} props
 */
function LegalPage({ pageKey }) {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const sections = t(`legal.${pageKey}.sections`)
  const list = Array.isArray(sections) ? sections : []

  const fade = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.3 : 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="py-12 sm:py-16">
      <motion.header
        initial="hidden"
        animate="show"
        variants={fade}
        className="mx-auto max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t('legal.label')}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          {t(`legal.${pageKey}.title`)}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-content">
          {t(`legal.${pageKey}.intro`)}
        </p>
        <p className="mt-4 text-sm text-content/80">
          {t('legal.lastUpdatedLabel')}: {t('legal.lastUpdated')}
        </p>
      </motion.header>

      {/* Draft notice — intentionally prominent. */}
      <div
        role="note"
        className="mx-auto mt-8 flex max-w-3xl gap-3 rounded-2xl border border-accent/40 bg-accent-soft p-5"
      >
        <Icon name="alert" className="h-6 w-6 shrink-0 text-accent" />
        <div>
          <p className="font-semibold text-heading">{t('legal.draftNotice.title')}</p>
          <p className="mt-1 text-sm leading-relaxed text-content">
            {t('legal.draftNotice.body')}
          </p>
        </div>
      </div>

      {/* Sections */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, show: { transition: reduceMotion ? {} : { staggerChildren: 0.06 } } }}
        className="mx-auto mt-12 max-w-3xl"
      >
        <ol className="flex flex-col gap-8">
          {list.map((section, index) => (
            <motion.li key={section.title} variants={fade} className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold text-heading">
                <span className="me-2 text-accent">{index + 1}.</span>
                {section.title}
              </h2>
              <p className="mt-2 leading-relaxed text-content">{section.body}</p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </div>
  )
}

export default LegalPage
