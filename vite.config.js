import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

/**
 * Injects the production origin into index.html so that canonical, Open Graph
 * and Twitter/X URLs are ABSOLUTE in the static markup.
 *
 * Why this exists: social scrapers (Facebook, X, LinkedIn, WhatsApp, Slack…)
 * do not execute JavaScript, so the build-time HTML is all they ever see.
 * The origin comes from the VITE_SITE_URL env var, so production URLs are
 * configurable rather than hardcoded. With no VITE_SITE_URL set the tags fall
 * back to clean root-relative paths, which still resolve correctly against
 * whatever host the bundle is deployed to.
 */
function seoOriginPlugin() {
  return {
    name: 'msa-seo-origin',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const env = loadEnv(ctx.mode, process.cwd(), 'VITE_')
        const raw = (env.VITE_SITE_URL ?? '').trim()
        let origin = ''
        if (raw) {
          try {
            origin = new URL(raw).origin
          } catch {
            this.warn(
              `VITE_SITE_URL is not a valid absolute URL ("${raw}") - ` +
                'falling back to root-relative metadata URLs.',
            )
          }
        }

        // Absolute URLs for every social/canonical reference.
        const html2 = html
          .replaceAll('%SITE_ORIGIN%', origin)
          // Emitted only when the real production origin is known: a canonical
          // pointing at a guessed domain would be worse than none. Injected
          // here because Vite's own HTML step treats <link href> as a file
          // asset reference and fails on a bare "/".
          .replaceAll(
            /<!--%CANONICAL%-->/g,
            origin
              ? `    <link rel="canonical" href="${origin}/" />`
              : '    <!-- canonical omitted: set VITE_SITE_URL to enable -->',
          )

        return html2
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seoOriginPlugin()],
})
