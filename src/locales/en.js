/**
 * English translations.
 *
 * Not the default: the site opens in Arabic (see DEFAULT_LANG in
 * src/context/LanguageContext.jsx). These strings are also the fallback for any
 * key missing from src/locales/ar.js. Keys are shared with ar.js — keep the two
 * files in sync when adding strings.
 */
export const en = {
  // Brand description (used in the footer).
  siteDescription:
    'MSA Online is a career and recruitment platform for discovering job opportunities, supporting recruitment, and building professional CVs.',

  common: {
    logoAlt: 'MSA Online logo',
    opensInNewTab: '(opens in a new tab)',
    skipToContent: 'Skip to main content',
  },

  // SEO / social metadata — drives <title>, <meta name="description">,
  // Open Graph and Twitter/X tags. Kept here so both languages stay in sync.
  seo: {
    title: 'MSA Online | Jobs & Career Opportunities',
    description:
      'MSA Online helps individuals discover job opportunities and build professional CVs for their career journey.',
    contactTitle: 'Build Your Professional CV | MSA Online',
    contactDescription:
      'Build a professional CV with MSA Online and reach employers directly. Get in touch through Instagram, WhatsApp, or email.',
    notFoundTitle: 'Page Not Found | MSA Online',
    notFoundDescription:
      'The page you are looking for does not exist. Return to MSA Online to discover job opportunities and build your professional CV.',
  },

  nav: {
    primary: 'Primary',
    home: 'Home',
    about: 'About',
    jobs: 'Jobs',
    buildCv: 'Build Your CV',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  language: {
    label: 'Language',
    en: 'EN',
    ar: 'AR',
    switchToEnglish: 'Switch to English',
    switchToArabic: 'Switch to Arabic',
  },

  theme: {
    label: 'Theme',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },

  splash: {
    loading: 'Loading',
    ariaLabel: 'MSA Online is loading',
  },

  hero: {
    label: 'MSA Online',
    heading: 'Discover Opportunities. Build Your Future.',
    description:
      'Explore career opportunities and get professional support to build a strong CV that helps you move closer to your next opportunity.',
    viewJobs: 'View Jobs',
    buildCv: 'Build Your CV',
  },

  about: {
    title: 'About MSA Online',
    intro:
      'MSA Online is a career and recruitment platform focused on connecting people with opportunities. We help you discover job openings, access professional career support, and build a strong CV — all in one place.',
    features: {
      'job-opportunities': {
        title: 'Job Opportunities',
        description:
          'Browse and discover career openings across a range of roles and industries.',
      },
      'career-support': {
        title: 'Career Support',
        description:
          'Get professional guidance and resources to support your career journey.',
      },
      'cv-building': {
        title: 'CV Building',
        description:
          'Create a clear, professional CV designed to help you stand out to employers.',
      },
    },
  },

  jobs: {
    title: 'Explore Job Opportunities',
    description:
      'Discover the latest career opportunities through MSA Online on Instagram.',
    exploreCta: 'Explore Jobs',
  },

  cv: {
    label: 'MSA Online',
    title: 'Build Your Professional CV',
    intro:
      'MSA Online helps you present your experience, skills, and education in a clear, professional CV. Get personal support to structure and refine your CV so it makes a strong impression.',
    benefitsTitle: 'Why prepare your CV with us',
    benefits: {
      structure: {
        title: 'Professional structure',
        description:
          'A clean, well-organized layout that presents your information in a logical order.',
      },
      experience: {
        title: 'Clear presentation of experience',
        description:
          'Your work history presented clearly, highlighting what matters most to employers.',
      },
      skills: {
        title: 'Better presentation of skills',
        description:
          'Your skills organized and emphasized so your strengths stand out at a glance.',
      },
      formatting: {
        title: 'Career-focused formatting',
        description:
          'Formatting tailored to your goals and the roles you want to apply for.',
      },
    },
    contactTitle: 'Get in touch to get started',
    contactIntro:
      'Reach out through any of the channels below and we will help you build your CV.',
    messageUsOn: 'Message us on',
  },

  channels: {
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    email: 'Email',
  },

  a11y: {
    instagram: 'Open MSA Online Instagram',
    whatsapp: 'Contact MSA Online on WhatsApp',
    email: 'Email MSA Online',
  },

  footer: {
    explore: 'Explore',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },

  notFound: {
    title: '404 — Page not found',
    message: 'The page you are looking for does not exist.',
    back: 'Back to Home',
  },
}

export default en
