import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.js'
import { useLanguage } from '../context/language-store.js'

/**
 * 404 Not Found page. Text is translated via the language helper.
 */
function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-heading">
        {t('notFound.title')}
      </h1>
      <p className="mt-3 text-content">{t('notFound.message')}</p>
      <Link
        to={ROUTES.home}
        className="mt-4 inline-block rounded-md text-accent underline underline-offset-4 outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {t('notFound.back')}
      </Link>
    </section>
  )
}

export default NotFound
