/**
 * Hero visual configuration.
 *
 * The homepage Hero shows a representative recruitment image instead of the
 * MSA Online logo (the logo stays in the navbar, footer, and splash screen).
 *
 * REAL PHOTO (preferred): drop an approved, career/recruitment-themed image
 * into `public/hero/` (see public/hero/README.md) and set `src` below, e.g.
 * `src: '/hero/hero.jpg'`. Optionally provide a `srcSet` string for responsive
 * sizes. Until a real image is supplied, `src` stays `null` and the Hero
 * renders a brand-coloured illustration (HeroIllustration.jsx) — no fake photo,
 * no invented office.
 *
 * `alt` text is translated via the `hero.imageAlt` locale key.
 */
export const heroImage = {
  /** Real image path in /public, or null to use the brand illustration. */
  src: null,
  /** Optional responsive srcset string (same subject, multiple widths). */
  srcSet: null,
  /** Layout hint for the browser when a srcSet is provided. */
  sizes: '(min-width: 1024px) 40rem, 100vw',
  /** Intrinsic dimensions of the real image (prevents layout shift). */
  width: 1280,
  height: 960,
}

/** True when an approved real image is configured. */
export const hasHeroImage = Boolean(heroImage.src)

export default heroImage
