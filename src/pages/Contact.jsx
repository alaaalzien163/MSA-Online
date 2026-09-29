import { motion, useReducedMotion } from 'framer-motion'
import { contactLinks } from '../utils/contactLinks.js'
import { cvBenefits } from '../data/cv.js'
import { useLanguage } from '../context/language-store.js'
import { Icon } from '../components/common/icons.jsx'

/**
 * Build Your CV page (route: /contact).
 *
 * Explains MSA Online's CV support, lists benefits, and provides contact CTAs
 * (WhatsApp, Instagram, Email). Text is translated via the language helper;
 * contact hrefs come from the centralized config. No backend/auth/database.
 */

// Channel metadata: href + icon + priority. Labels are translated at render.
const CHANNELS = [
  { key: 'whatsapp', href: contactLinks.whatsapp, icon: 'whatsapp', external: true, primary: true },
  { key: 'instagram', href: contactLinks.instagram, icon: 'instagram', external: true },
  { key: 'email', href: contactLinks.email, icon: 'mail', external: false },
].filter((c) => Boolean(c.href))

function Contact() {
  const reduceMotion = useReducedMotion()
  const { t } = useLanguage()

  const externalProps = (external) =>
    external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

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
          {t('cv.label')}
        </motion.p>
        <motion.h1
          variants={fade}
          className="mt-4 text-4xl font-bold tracking-tight text-heading sm:text-5xl"
        >
          {t('cv.title')}
        </motion.h1>
        <motion.p
          variants={fade}
          className="mt-6 text-lg leading-relaxed text-content"
        >
          {t('cv.intro')}
        </motion.p>
      </motion.header>

      {/* Benefits */}
      <section aria-labelledby="benefits-heading" className="mt-16">
        <h2
          id="benefits-heading"
          className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl"
        >
          {t('cv.benefitsTitle')}
        </h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2"
        >
          {cvBenefits.map((benefit) => (
            <motion.li
              key={benefit.id}
              variants={fade}
              className="group flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon name={benefit.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-heading">
                  {t(`cv.benefits.${benefit.id}.title`)}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-content">
                  {t(`cv.benefits.${benefit.id}.description`)}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Contact CTAs */}
      <section aria-labelledby="contact-heading" className="mt-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface-2 p-8 text-center sm:p-10">
          <h2
            id="contact-heading"
            className="text-2xl font-bold tracking-tight text-heading sm:text-3xl"
          >
            {t('cv.contactTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-content">{t('cv.contactIntro')}</p>

          {/* Contact CTAs — one balanced row on tablet/desktop, wraps on small
              mobile. Grid is direction-aware (RTL/LTR) automatically. */}
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CHANNELS.map((channel) => {
              const isPrimary = Boolean(channel.primary)
              const label = isPrimary
                ? `${t('cv.messageUsOn')} ${t(`channels.${channel.key}`)}`
                : t(`channels.${channel.key}`)
              const colorClass = isPrimary
                ? 'bg-primary text-white hover:bg-primary-hover'
                : 'border border-accent text-accent hover:bg-accent-soft'
              return (
                <li
                  key={channel.key}
                  className={channel.key === 'email' ? 'max-sm:col-span-2' : ''}
                >
                  <motion.a
                    href={channel.href}
                    {...externalProps(channel.external)}
                    whileHover={!reduceMotion && isPrimary ? { scale: 1.02 } : undefined}
                    whileTap={!reduceMotion && isPrimary ? { scale: 0.98 } : undefined}
                    className={`flex h-full w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${colorClass}`}
                  >
                    <Icon name={channel.icon} className="h-5 w-5 shrink-0" />
                    {label}
                    {channel.external && (
                      <span className="sr-only">{t('common.opensInNewTab')}</span>
                    )}
                  </motion.a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Contact
