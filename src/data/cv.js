/**
 * "Build Your CV" page structure.
 *
 * Non-translatable structure only (icons, ids). All user-facing text lives in
 * src/locales (cv.*) and is resolved by id via the translate helper. Contact
 * channel values live in src/config/site.js.
 */

// Benefit blocks. `id` maps to cv.benefits.<id> in the locale files.
export const cvBenefits = [
  { id: 'structure', icon: 'layout' },
  { id: 'experience', icon: 'list' },
  { id: 'skills', icon: 'star' },
  { id: 'formatting', icon: 'target' },
]

export default { cvBenefits }
