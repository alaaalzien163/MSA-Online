/**
 * Lightweight inline SVG icon set (stroke-based, currentColor).
 *
 * Add new icons to the `icons` map and render them via <Icon name="..." />.
 * Keeping icons inline avoids an extra dependency for a small set of glyphs.
 */

const paths = {
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M2 13h20" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polygon points="16 8 14 14 8 16 10 10 16 8" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </>
  ),
  // Contact channels
  whatsapp: (
    <>
      <path d="M3 21l1.65-4.05A8 8 0 1 1 8 19.5z" />
      <path d="M8.5 8.5c-.3 1 .2 2.2 1.1 3.2s2 1.6 3.1 1.7c.5 0 1-.4 1.2-.9.1-.3 0-.6-.2-.8l-1-.7c-.3-.2-.6-.1-.8.1l-.3.3c-.6-.3-1.1-.8-1.4-1.4l.3-.3c.2-.2.3-.5.1-.8l-.6-1c-.2-.3-.6-.4-.9-.2-.3.1-.6.3-.9.5z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  // Benefit icons
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  list: (
    <>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </>
  ),
  star: (
    <polygon points="12 3 14.9 8.9 21.4 9.8 16.7 14.4 17.8 20.9 12 17.8 6.2 20.9 7.3 14.4 2.6 9.8 9.1 8.9 12 3" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  // Social
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7" />
      <circle cx="7.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <path d="M11.5 10v7" />
    </>
  ),
  facebook: (
    <>
      <path d="M14 8h3V4.5h-3A4.5 4.5 0 0 0 9.5 9v2.5H6.5V15h3v6h3.5v-6h3l1-3.5h-4V9.5a1.5 1.5 0 0 1 1.5-1.5z" />
    </>
  ),
  x: (
    <path d="M4 4l7.5 9.5L4.5 20M20 4l-8 9.5M20 20l-4-5" />
  ),
  // Theme
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: (
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  ),
}

/**
 * @param {{ name: keyof typeof paths, className?: string }} props
 */
export function Icon({ name, className = 'h-6 w-6', ...rest }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  )
}

export default Icon
