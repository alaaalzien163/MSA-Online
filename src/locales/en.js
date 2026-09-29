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
    aboutTitle: 'About Us | MSA Online',
    aboutDescription:
      'Learn about MSA Online — a career and recruitment platform connecting job seekers and business owners.',
    contactTitle: 'Build Your Professional CV | MSA Online',
    contactDescription:
      'Build a professional CV with MSA Online and reach employers directly. Get in touch through Instagram, WhatsApp, or email.',
    privacyTitle: 'Privacy Policy | MSA Online',
    privacyDescription:
      'How MSA Online handles information when you use this website or contact us directly.',
    termsTitle: 'Terms of Use | MSA Online',
    termsDescription:
      'The terms governing your use of the MSA Online website and services.',
    jobPostingPolicyTitle: 'Job Posting Policy | MSA Online',
    jobPostingPolicyDescription:
      'The rules for job openings submitted to MSA Online for advertising on our platforms.',
    notFoundTitle: 'Page Not Found | MSA Online',
    notFoundDescription:
      'The page you are looking for does not exist. Return to MSA Online to discover job opportunities and build your professional CV.',
  },

  nav: {
    primary: 'Primary',
    home: 'Home',
    about: 'About',
    jobs: 'Jobs',
    employers: 'Employers',
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
    audience:
      'We help job seekers and business owners connect with suitable career opportunities faster and more easily.',
    viewJobs: 'View Jobs',
    buildCv: 'Build Your CV',
    imageAlt: 'A professional exploring career opportunities with MSA Online',
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

  // About Us page (/about).
  aboutPage: {
    label: 'About Us',
    title: 'About MSA Online',
    intro:
      'MSA Online is a career and recruitment platform focused on connecting people with opportunities. We help job seekers present themselves professionally, and we help business owners reach an audience that is actively looking for work.',
    missionTitle: 'Our mission',
    mission:
      'To make it faster and easier for job seekers and business owners to find each other, by combining career content, professional CV support, and a reachable audience on Instagram and WhatsApp.',
    whoTitle: 'Who we help',
    seekersTitle: 'Job seekers',
    seekersDescription:
      'Discover job openings, get career guidance, and build a professional CV that presents your experience clearly.',
    employersTitle: 'Business owners',
    employersDescription:
      'Advertise your job opening to an audience interested in employment and reach candidates who are ready to apply.',
    offerTitle: 'What we offer',
    offer: {
      jobs: {
        title: 'Job opportunities',
        description:
          'The latest openings are announced on our Instagram page, with new posts added regularly.',
      },
      cv: {
        title: 'Professional CV building',
        description:
          'Personal support to structure and refine your CV so it makes a strong impression.',
      },
      advertising: {
        title: 'Job advertising for employers',
        description:
          'Publish your vacancy to our audience and connect with suitable candidates faster.',
      },
    },
    cta: 'Contact us on WhatsApp',
  },

  jobs: {
    title: 'Latest Job Openings',
    description: 'Follow the latest job openings on Instagram.',
    exploreCta: 'Explore Jobs on Instagram',
  },

  employers: {
    label: 'For Employers',
    title: 'Looking for employees?',
    description:
      'Advertise your job opening to an audience interested in employment via the MSA Online platform.',
    cta: 'Post a Job',
    note: 'Send us the details on WhatsApp and we will publish your opening to our audience on Instagram.',
  },

  // Pre-written WhatsApp messages, appended to the wa.me link as ?text=.
  whatsapp: {
    cvMessage:
      'Hello, I would like to create a professional CV. Please provide details and pricing.',
    jobMessage:
      'Hello, I would like to advertise a job vacancy through MSA Online. Please provide me with the details and pricing.',
    generalMessage: 'Hello, I would like to ask about MSA Online services.',
  },

  // Persistent floating action button (all pages).
  floating: {
    contactWhatsApp: 'Contact us via WhatsApp',
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
    pages: 'Pages',
    rights: 'All rights reserved.',
  },

  // Legal pages. These are DRAFT scaffolding — see `legal.draftNotice`. The
  // content is intentionally generic and must be reviewed/completed by the
  // owner (ideally with legal advice) before it is relied upon.
  legal: {
    label: 'Legal',
    draftNotice: {
      title: 'Draft content — not reviewed',
      body: 'This page is a starting template provided for convenience. It is not legal advice and has not been reviewed by a legal professional. Replace it with your finalised policy before relying on it.',
    },
    lastUpdatedLabel: 'Last updated',
    lastUpdated: 'To be set',
    privacy: {
      title: 'Privacy Policy',
      intro:
        'This policy explains how MSA Online handles information when you use this website or contact us directly.',
      sections: [
        {
          title: 'Information we collect',
          body: 'This website does not have accounts, forms, or a database, and it does not collect personal information automatically. We only receive information that you choose to send us when you contact us by WhatsApp, Instagram, or email.',
        },
        {
          title: 'How we use information',
          body: 'Information you send is used only to respond to your enquiry and to provide the services you request, such as building a CV or advertising a job opening.',
        },
        {
          title: 'Sharing',
          body: 'We do not sell your information. Information may be shared with third-party platforms (such as WhatsApp, Instagram, or email providers) only as needed to communicate with you.',
        },
        {
          title: 'Retention',
          body: 'We keep information only for as long as needed for the purpose it was provided, or as required by law.',
        },
        {
          title: 'Your rights',
          body: 'You may ask us to access, correct, or delete the information you have sent us by contacting us through any of the channels listed on this site.',
        },
        {
          title: 'Contact',
          body: 'For any privacy question, contact us using the details in the footer of this website.',
        },
      ],
    },
    terms: {
      title: 'Terms of Use',
      intro:
        'These terms govern your use of the MSA Online website. By using the site, you agree to them.',
      sections: [
        {
          title: 'Acceptance of terms',
          body: 'By accessing or using this website you agree to be bound by these terms. If you do not agree, please do not use the site.',
        },
        {
          title: 'Use of the site',
          body: 'You agree to use the site lawfully and not to misuse it, attempt to disrupt it, or use it for fraudulent purposes.',
        },
        {
          title: 'Intellectual property',
          body: 'The MSA Online name, logo, and site content are owned by MSA Online and may not be reused without permission.',
        },
        {
          title: 'Third-party links',
          body: 'The site links to external platforms such as Instagram and WhatsApp. We are not responsible for the content or practices of those platforms.',
        },
        {
          title: 'Disclaimer',
          body: 'The site is provided on an "as is" basis. We do not guarantee that job openings or other information will be complete, accurate, or always available.',
        },
        {
          title: 'Changes',
          body: 'We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.',
        },
      ],
    },
    jobPostingPolicy: {
      title: 'Job Posting Policy',
      intro:
        'These rules apply to job openings submitted to MSA Online for advertising on our platforms.',
      sections: [
        {
          title: 'Scope',
          body: 'This policy covers job openings submitted by employers for publication through MSA Online, including posts on our Instagram page.',
        },
        {
          title: 'Accuracy',
          body: 'Employers must submit accurate, current information and must have genuine, available positions. Misleading openings will be removed.',
        },
        {
          title: 'Prohibited content',
          body: 'We do not accept discriminatory listings, requests for payment from applicants, pyramid or commission-only schemes presented as employment, or any unlawful content.',
        },
        {
          title: 'Review',
          body: 'All submissions are reviewed before publication. We may edit for clarity or refuse any submission at our discretion.',
        },
        {
          title: 'Removal',
          body: 'We may remove a posting at any time, including when a position is filled or when a submission breaches this policy.',
        },
        {
          title: 'Contact',
          body: 'To submit a job opening or ask about this policy, contact us through the channels listed on this site.',
        },
      ],
    },
  },

  notFound: {
    title: '404 — Page not found',
    message: 'The page you are looking for does not exist.',
    back: 'Back to Home',
  },
}

export default en
