import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../context/language-store.js'
import { whatsappLinkWithMessage } from '../utils/contactLinks.js'
import { Icon } from '../components/common/icons.jsx'

/**
 * About Us page (route: /about).
 *
 * Full-page version of the About content: mission, who the platform serves
 * (job seekers and business owners), what we offer, and a WhatsApp CTA. Text is
 * translated; structure is defined locally.
 */

// Who we help — icon per audience.
const AUDIENCE = [
  { id: 'seekers', icon: 'target' },
  { id: 'employers', icon: 'users' },
]

// What we offer — `id` maps to aboutPage.offer.<id> in the locale files.
const OFFERS = [
  { id: 'jobs', icon: 'briefcase' },
  { id: 'cv', icon: 'document' },
  { id: 'advertising', icon: 'users' },
]

function About() {
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
    show: { transition: reduceMotion ? {} : { staggerChildren: 0.08 } },
  }

  const contactHref = whatsappLinkWithMessage(t('whatsapp.generalMessage'))

  return (
    <div className="py-12 sm:py-16">
      {/* Header */}
      <motion.header
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={fade}
          className="text-sm font-semibold uppercase tracking-widest text-accent"
        >
          {t('aboutPage.label')}
        </motion.p>
        <motion.h1
          variants={fade}
          className="mt-4 text-4xl font-bold tracking-tight text-heading sm:text-5xl"
        >
          {t('aboutPage.title')}
        </motion.h1>
        <motion.p variants={fade} className="mt-6 text-lg leading-relaxed text-content">
          {t('aboutPage.intro')}
        </motion.p>
      </motion.header>

      {/* Mission */}
      <motion.section
        aria-labelledby="mission-heading"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-surface-2 p-8 text-center sm:p-10"
      >
        <h2
          id="mission-heading"
          className="text-2xl font-bold tracking-tight text-heading sm:text-3xl"
        >
          {t('aboutPage.missionTitle')}
        </h2>
        <motion.p variants={fade} className="mt-4 leading-relaxed text-content">
          {t('aboutPage.mission')}
        </motion.p>
      </motion.section>

      {/* Who we help */}
      <section aria-labelledby="who-heading" className="mt-16">
        <h2
          id="who-heading"
          className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl"
        >
          {t('aboutPage.whoTitle')}
        </h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2"
        >
          {AUDIENCE.map((item) => (
            <motion.li
              key={item.id}
              variants={fade}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                {t(`aboutPage.${item.id}Title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-content">
                {t(`aboutPage.${item.id}Description`)}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* What we offer */}
      <section aria-labelledby="offer-heading" className="mt-16">
        <h2
          id="offer-heading"
          className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl"
        >
          {t('aboutPage.offerTitle')}
        </h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3"
        >
          {OFFERS.map((item) => (
            <motion.li
              key={item.id}
              variants={fade}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                {t(`aboutPage.offer.${item.id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-content">
                {t(`aboutPage.offer.${item.id}.description`)}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* CTA */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-center"
      >
        <motion.a
          variants={fade}
          href={contactHref}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-hover outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          {t('aboutPage.cta')}
          <span className="sr-only">{t('common.opensInNewTab')}</span>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default About
