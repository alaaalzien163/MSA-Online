/**
 * Home page structure.
 *
 * Non-translatable structure only (icons, ids, CTA targets). All user-facing
 * text lives in src/locales and is resolved by id via the translate helper.
 */

// Hero call-to-action targets.
export const heroCtas = {
  primary: '/#jobs',
  secondary: '/contact',
}

// About feature blocks. `id` maps to about.features.<id> in the locale files.
export const aboutFeatures = [
  { id: 'job-opportunities', icon: 'briefcase' },
  { id: 'career-support', icon: 'compass' },
  { id: 'cv-building', icon: 'document' },
]

export default { heroCtas, aboutFeatures }
