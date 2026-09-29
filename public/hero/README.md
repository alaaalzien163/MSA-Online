# Hero image

Drop the approved, career/recruitment-themed Hero photo in this folder, then
point the app at it in `src/config/heroImage.js`:

```js
export const heroImage = {
  src: '/hero/hero.jpg',        // this file
  srcSet: '/hero/hero-800.jpg 800w, /hero/hero-1280.jpg 1280w', // optional
  sizes: '(min-width: 1024px) 40rem, 100vw',
  width: 1280,
  height: 960,
}
```

Guidelines:

- Use a real, approved image (a person job-hunting on a laptop, a professional
  interview, a team, or a similar recruitment/career scene).
- Do NOT use a random unrelated stock photo or a fabricated MSA Online office.
- Recommended: landscape, roughly 4:3, at least 1280px wide, optimised
  (JPG/WebP, ideally < 200 KB).
- The alt text is set via the `hero.imageAlt` key in `src/locales/en.js` and
  `src/locales/ar.js` — update it to describe the chosen image.

Until a file is added here and referenced in the config, the Hero shows a
brand-coloured illustration instead (no fake photo is shipped).
