/**
 * HeroIllustration
 *
 * Brand-coloured, theme-aware illustration used as the Hero visual until an
 * approved real recruitment photo is provided (see src/config/heroImage.js).
 *
 * It reads as an illustration (not a fabricated photo of a fake office): an
 * abstract career/recruitment scene — a job board, a candidate profile, a CV,
 * a briefcase, and an upward growth arrow — drawn with the semantic theme
 * tokens, so it works in both light and dark themes with no filters. Purely
 * decorative: the accessible description is provided by the parent.
 */
function HeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 480 380"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Backdrop panel */}
      <rect x="8" y="8" width="464" height="364" rx="28" className="fill-surface-2" />
      <rect
        x="8.5"
        y="8.5"
        width="463"
        height="363"
        rx="27.5"
        className="fill-none stroke-border"
      />

      {/* Soft accent blob for depth */}
      <circle cx="378" cy="96" r="66" className="fill-accent-soft" />

      {/* Job board / listings card */}
      <g>
        <rect x="44" y="70" width="220" height="248" rx="18" className="fill-surface stroke-border" strokeWidth="1.5" />
        {/* header bar */}
        <rect x="44" y="70" width="220" height="46" rx="18" className="fill-accent-soft" />
        <rect x="44" y="98" width="220" height="18" className="fill-surface" />
        <circle cx="70" cy="93" r="8" className="fill-accent" />
        <rect x="86" y="88" width="120" height="10" rx="5" className="fill-primary" opacity="0.85" />

        {/* listing rows */}
        {[140, 186, 232, 278].map((y) => (
          <g key={y}>
            <rect x="64" y={y} width="36" height="36" rx="9" className="fill-accent-soft" />
            <rect x="64" y={y} width="36" height="36" rx="9" className="fill-none stroke-accent" strokeWidth="1.5" opacity="0.6" />
            <rect x="112" y={y + 6} width="120" height="9" rx="4.5" className="fill-heading" opacity="0.55" />
            <rect x="112" y={y + 22} width="80" height="8" rx="4" className="fill-content" opacity="0.4" />
          </g>
        ))}
      </g>

      {/* Candidate profile / CV card (overlaps for depth) */}
      <g>
        <rect x="286" y="150" width="150" height="180" rx="18" className="fill-surface stroke-border" strokeWidth="1.5" />
        {/* avatar */}
        <circle cx="361" cy="196" r="26" className="fill-accent-soft" />
        <circle cx="361" cy="188" r="10" className="fill-primary" />
        <path d="M343 214a18 18 0 0 1 36 0z" className="fill-primary" />
        {/* CV lines */}
        <rect x="306" y="238" width="110" height="9" rx="4.5" className="fill-heading" opacity="0.5" />
        <rect x="306" y="256" width="90" height="8" rx="4" className="fill-content" opacity="0.4" />
        <rect x="306" y="272" width="100" height="8" rx="4" className="fill-content" opacity="0.4" />
        {/* verified / hired badge */}
        <circle cx="410" cy="300" r="16" className="fill-accent" />
        <path
          d="M403 300l5 5 9-10"
          className="fill-none stroke-surface"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Briefcase (employment) */}
      <g transform="translate(96 40)">
        <rect x="0" y="10" width="60" height="42" rx="8" className="fill-primary" />
        <path d="M22 10V5a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v5" className="fill-none stroke-primary" strokeWidth="3" transform="translate(0 4)" />
        <rect x="0" y="24" width="60" height="6" className="fill-accent" opacity="0.9" />
      </g>

      {/* Upward growth arrow */}
      <g className="stroke-accent" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M300 118l28-28 20 20 34-34" />
        <path d="M368 76h18v18" />
      </g>
    </svg>
  )
}

export default HeroIllustration
