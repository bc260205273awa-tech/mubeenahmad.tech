export interface SocialLink {
  label: string
  url: string
  handle?: string
}

export type ProjectStatus = 'Live' | 'Internal' | 'Case study'

export interface CaseStudyDecision {
  lead: string
  tradeoff: string
}

export interface CaseStudyGalleryItem {
  image: string
  caption: string
  fullWidth?: boolean
}

export interface CaseStudy {
  problem: string
  whatIDid: string[]
  decisions: CaseStudyDecision[]
  outcome: string[]
  gallery: CaseStudyGalleryItem[]
  privacyNote?: string
}

export interface Project {
  slug: string
  title: string
  year: string
  role: string
  category: string
  oneLiner: string
  stack: string[]
  status: ProjectStatus
  liveUrl?: string
  repoUrl?: string
  coverImage: string
  featured: boolean
  caseStudy: CaseStudy
}

export interface Experience {
  company: string
  companyUrl?: string
  role: string
  period: string
  location: string
  summary: string
  accomplishments: string[]
  technologies: string[]
  simpleWords?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  location: string
  details?: string
}

export interface SkillGroup {
  group: string
  category: string
  items: string[]
}

export interface Service {
  index: string
  title: string
  description: string
  technologies: string[]
  example: string
  deliverables?: string[]
}

export interface Language {
  language: string
  proficiency: string
}

export interface ProofStat {
  value: string
  label: string
}

export interface ProfileHero {
  eyebrow: string
  availability: string
  headline: {
    line1: string
    line2Em: string
    line2Rest: string
    line3: string
  }
  intro: string
  portraitUrl?: string
}

export interface TrustOrganization {
  name: string
  url?: string
  descriptor: string
}

export interface TrustPrinciple {
  index: string
  title: string
  description: string
}

export interface TrustSection {
  label: string
  organizations: TrustOrganization[]
  principles: TrustPrinciple[]
}

export interface Profile {
  name: string
  tagline: string
  headline: string
  bio: string[]
  hero: ProfileHero
  proofStats: ProofStat[]
  trust: TrustSection
  email: string
  phone: string
  location: {
    city: string
    region: string
    country: string
    display: string
  }
  status: {
    availableForHire: boolean
    currentFocus: string
  }
  socials: {
    github: SocialLink
    linkedin: SocialLink
    twitter: SocialLink
    agency: SocialLink
    whatsapp?: SocialLink
  }
  languages: Language[]
  skillsGrowthNote: string
  skills: SkillGroup[]
  services: Service[]
  experienceAdminNote?: string
  educationSelfTaughtNote?: string
  experience: Experience[]
  education?: Education[]
  projects: Project[]
}

export const profile: Profile = {
  name: "Mubeen Ahmad",
  tagline: "Full-Stack Developer & Systems Builder",
  headline: "Self-taught engineer building high-utility ERP systems, managed backends, and precise digital products.",
  bio: [
    "Self-taught full-stack developer based in Vehari, Pakistan, specializing in high-load operational software, institutional ERP platforms, and bespoke web applications.",
    "Sole developer of khanhub.com.pk — a centralized multi-role management infrastructure orchestrating 16+ distinct departments and 5 connected web properties with granular access control, financial logging, and LLM-powered tool-calling automation.",
    "Co-founder at MR DEVS (mrdevs.dev), building modern web applications, custom CRM platforms, and targeted software tools."
  ],
  hero: {
    eyebrow: "Full-Stack Developer, Vehari, Pakistan",
    availability: "Available for remote roles and select projects",
    headline: {
      line1: "I build the software that",
      line2Em: "runs",
      line2Rest: "hospitals, colleges",
      line3: "and the businesses behind them.",
    },
    intro: "Self-taught engineer who architected the 16+ department ERP running Khan Hub. Now building high-utility software and bespoke digital systems for clients through MR DEVS.",
    portraitUrl: "/mubeen.webp",
  },
  proofStats: [
    { value: "16+", label: "departments" },
    { value: "1", label: "sole developer" },
    { value: "5", label: "live subdomains" },
    { value: "2026", label: "mr devs active" },
  ],
  trust: {
    label: "Trusted with real work",
    organizations: [
      {
        name: "Khan Hub",
        url: "https://khanhub.com.pk",
        descriptor: "ERP, 16+ departments",
      },
      {
        name: "Gulzar Surgical & General Hospital",
        url: undefined,
        descriptor: "Patient booking website",
      },
      {
        name: "MR DEVS",
        url: "https://mrdevs.dev",
        descriptor: "Co-founded agency & CRM",
      },
      {
        name: "CodeAlpha",
        url: undefined,
        descriptor: "Web development internship",
      },
    ],
    principles: [
      {
        index: "01",
        title: "Production, not demos",
        description: "Systems used daily by real staff.",
      },
      {
        index: "02",
        title: "Owned end to end",
        description: "From first conversation with staff to launch and support.",
      },
      {
        index: "03",
        title: "Plain-English communicator",
        description: "I explain technical work to non-technical teams.",
      },
    ],
  },
  email: "mubeenahma1123@gmail.com",
  phone: "TODO_REAL_VALUE",
  location: {
    city: "Vehari",
    region: "Punjab",
    country: "Pakistan",
    display: "Vehari, Punjab, Pakistan"
  },
  status: {
    availableForHire: true,
    currentFocus: "Scaling institutional ERP infrastructure & expanding biometric / LLM integrations at Khan Hub."
  },
  socials: {
    github: {
      label: "GitHub",
      url: "TODO_REAL_VALUE",
      handle: "TODO_REAL_VALUE"
    },
    linkedin: {
      label: "LinkedIn",
      url: "TODO_REAL_VALUE",
      handle: "TODO_REAL_VALUE"
    },
    twitter: {
      label: "X (Twitter)",
      url: "TODO_REAL_VALUE",
      handle: "TODO_REAL_VALUE"
    },
    agency: {
      label: "MR DEVS",
      url: "https://mrdevs.dev",
      handle: "mrdevs.dev"
    },
    whatsapp: {
      label: "WhatsApp",
      url: "https://wa.me/TODO_REAL_VALUE",
      handle: "WhatsApp"
    }
  },
  languages: [
    { language: "Urdu", proficiency: "Native" },
    { language: "English", proficiency: "Strong" }
  ],
  skillsGrowthNote: "Currently deepening: Node.js, backend architecture.",
  skills: [
    {
      group: "Frontend",
      category: "Frontend",
      items: [
        "Next.js",
        "React",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
        "Lenis"
      ]
    },
    {
      group: "Backend and Data",
      category: "Backend and Data",
      items: [
        "Firebase (Firestore, Auth, Rules, FCM)",
        "Supabase (Postgres, Auth, Realtime)",
        "Node.js (Foundational)",
        "REST APIs"
      ]
    },
    {
      group: "AI",
      category: "AI",
      items: [
        "Groq API",
        "Llama 3.3 70B",
        "LLM Tool-Calling",
        "Voice Pipelines",
        "Biometric Attendance (in progress)",
        "EmailJS"
      ]
    },
    {
      group: "Tools",
      category: "Tools",
      items: [
        "Git & GitHub",
        "Vercel",
        "Chrome Extensions API",
        "Excel",
        "Word"
      ]
    }
  ],
  services: [
    {
      index: "01",
      title: "Management systems and ERPs",
      description: "Centralized operational platforms architected with granular role-based permissions, multi-tier approvals, cashier ledgers, and institutional dashboards.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "Supabase",
        "Role-Based Access",
        "Audit Logs"
      ],
      example: "Khan Hub ERP — unified 16+ departments, cashier fee balancing, approval hierarchies, and immutable audit logs.",
      deliverables: [
        "Role-based authentication & route guards",
        "Cashier, billing, and salary management registers",
        "Department-level dashboards and reporting",
        "Push notification dispatch via FCM"
      ]
    },
    {
      index: "02",
      title: "Websites and web apps",
      description: "Fast, mobile-first web applications built with Next.js, React, and Vue, engineered for sub-second loads and fluid responsive typography.",
      technologies: [
        "Next.js",
        "React",
        "Vue.js",
        "Tailwind CSS",
        "GSAP",
        "Lenis"
      ],
      example: "MR DEVS agency portal, Gulzar Hospital patient booking, and JobReel fast video recruitment platform.",
      deliverables: [
        "Strict TypeScript application architecture",
        "Database schema design and granular security rules",
        "Real-time event subscriptions and state sync",
        "Vercel / Cloud deployment with continuous delivery"
      ]
    },
    {
      index: "03",
      title: "AI features inside real products",
      description: "Practical LLM integration utilizing structured tool-calling schemas, speech-to-text pipelines, and direct database queries.",
      technologies: [
        "Groq API",
        "Llama 3.3 70B",
        "LLM Tool-Calling",
        "Voice Pipelines",
        "Function Calling"
      ],
      example: "Khan Hub executive voice assistant with Groq + Llama 3.3 70B tool-calling for real-time institutional operations.",
      deliverables: [
        "Groq & open-weights model integrations (Llama 3.3 70B)",
        "Structured tool-calling for ERP query retrieval",
        "Voice input processing & synthesized responses",
        "Transactional email and external API bindings"
      ]
    },
    {
      index: "04",
      title: "Rescue and maintenance",
      description: "Diagnosing and fixing live production bugs, database security rule hardening, legacy code cleanup, and stability recovery.",
      technologies: [
        "Bug Triage",
        "Security Rules",
        "Firestore Data Cleanup",
        "Auth Hardening",
        "Refactoring"
      ],
      example: "Resolved live Cross-Origin-Opener-Policy auth blocking on production and secured locked-down Firestore rules.",
      deliverables: [
        "Production bug diagnosis and rapid hotfixes",
        "Security rules audit and zero-trust permissions",
        "Database schema sanitization and orphaned record cleanup",
        "Authentication hardening and session recovery"
      ]
    }
  ],
  experienceAdminNote: "Also handled fee collection, cashier and salary records, so I understand the work the software supports.",
  educationSelfTaughtNote: "Self-taught developer. I learned by building and running real systems.",
  experience: [
    {
      company: "MR DEVS",
      companyUrl: "https://mrdevs.dev",
      role: "Chief Executive Officer / Co-founder",
      period: "Jul 2026 – Present",
      location: "Vehari, Punjab, Pakistan",
      summary: "Co-founded web and software engineering agency delivering custom digital systems and high-utility CRM tools.",
      accomplishments: [
        "Co-founded web and software engineering agency delivering bespoke web applications, custom CRM platforms, and client digital systems.",
        "Architected MR.DEVS CRM with React 19, Vite, Tailwind CSS, and Supabase featuring full lead management, real-time team chat, and performance leaderboards.",
        "Authored custom Chrome extension to synchronize external client leads directly into the CRM pipeline with zero manual entry.",
        "Established direct client delivery standards, system architecture specifications, and zero-defect QA processes."
      ],
      technologies: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Chrome Extensions API"
      ]
    },
    {
      company: "Khan Hub Pvt. Ltd.",
      companyUrl: "https://khanhub.com.pk",
      role: "Software & Web Developer",
      period: "Oct 2025 – Present",
      location: "Vehari, Punjab, Pakistan",
      summary: "Sole engineer architecting and maintaining khanhub.com.pk — a comprehensive multi-role ERP unifying 16+ departmental operations and 5 public-facing web properties.",
      simpleWords: "In simple words: Instead of staff managing students, patients, donations, and billing across paper notebooks and scattered Excel files, I built one single private system where every department does their daily job.",
      accomplishments: [
        "Designed and implemented discrete dashboards and access controls for 16+ departments, including hospital, rehabilitation centre, college, head office, welfare division, and job centre.",
        "Engineered role-based access control (RBAC), multi-level approval workflows, cashier fee registers, salary records, and immutable audit logs.",
        "Architected an executive AI voice assistant for head office powered by Groq and Llama 3.3 70B with tool-calling capabilities and structured schema retrieval.",
        "Currently developing hardware-level integration for fingerprint and facial recognition attendance tracking."
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
        "FCM",
        "Groq API",
        "Llama 3.3 70B",
        "REST APIs"
      ]
    },
    {
      company: "CodeAlpha",
      companyUrl: undefined,
      role: "Web Development Intern",
      period: "Jul – Aug 2025",
      location: "Remote",
      summary: "Completed a structured software development internship delivering component-driven web modules and interfaces.",
      accomplishments: [
        "Built responsive frontend features with vanilla JavaScript, modern CSS, and component libraries.",
        "Engineered mobile-first layouts, cross-browser compatibility tests, and accessible form validations.",
        "Collaborated on task milestones with Git version control, structured PR reviews, and peer code critiques."
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git",
        "Responsive Design"
      ]
    }
  ],
  education: [
    {
      institution: "Govt. Postgraduate College Vehari",
      degree: "Intermediate in Computer Science (ICS)",
      period: "2023 – Aug 2025",
      location: "Vehari, Punjab, Pakistan",
      details: "Focused on fundamentals of computer science, programming logic, mathematics, and statistics."
    },
    {
      institution: "Islamia High School Vehari",
      degree: "Secondary School Certificate (Science)",
      period: "2021 – 2023",
      location: "Vehari, Punjab, Pakistan",
      details: "Secondary education with core scientific curriculum."
    }
  ],
  projects: [
    {
      slug: "khanhub-erp",
      title: "Khan Hub ERP",
      year: "2025 – Present",
      role: "Sole Developer",
      category: "Enterprise ERP System",
      oneLiner: "Centralized multi-role operational ERP managing 16+ departments across 5 connected web properties with granular access control, financial logging, and LLM automation.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
        "FCM",
        "Groq API",
        "Llama 3.3 70B",
        "Recharts"
      ],
      status: "Internal",
      liveUrl: undefined,
      repoUrl: undefined,
      coverImage: "/work/khanhub-erp/cover.webp",
      featured: true,
      caseStudy: {
        privacyNote: "Screenshots and record displays use blurred or sample data to protect patient, staff, student, and donor confidentiality.",
        problem: "A hospital, rehab centre, college and welfare departments each ran on separate physical registers and spreadsheets. Fees, staff, salaries and departmental reports could not be tracked or audited in one place, causing operational delays and reconciliation friction.",
        whatIDid: [
          "One Next.js + TypeScript + Firebase system with separate logins and dedicated operational screens for 16+ departments.",
          "Role-based access control (admin, cashier, staff) enforced through strict Firestore security rules and approval steps.",
          "Comprehensive audit log recording every transaction, cashier submission, and record update with timestamps and user IDs.",
          "Finance and cashier screens paired with interactive Recharts dashboards for revenue tracking.",
          "Firebase Cloud Messaging (FCM) push notifications and Progressive Web App (PWA) installation support for staff devices.",
          "Digital student admission system for the college with document verification gates.",
          "Centralized donor register for the welfare division with receipt generation.",
          "A 10-slide architectural proposal for a unified billing and medicine-stock system, starting as an active hospital trial.",
          "Head-office AI voice assistant using Groq and Llama 3.3 70B with tool-calling, self-describing Firestore schemas, and two-tier memory.",
          "Five connected websites integrated into the centralized ecosystem, including JobReel.",
          "Hardware-level biometric fingerprint and facial recognition attendance integration (currently in progress)."
        ],
        decisions: [
          {
            lead: "Managed backend (Firebase) over custom Node servers.",
            tradeoff: "Selected Firebase Auth, Firestore, and Security Rules so one developer can ship, secure, and maintain 16+ departments alone without running and babysitting custom server infrastructure."
          },
          {
            lead: "Role-based access designed first, screens second.",
            tradeoff: "Defined permission matrices and Firestore security rules before building UI screens, preventing cross-department data leakage and unauthorized cashier overrides."
          },
          {
            lead: "Resolved production Cross-Origin-Opener-Policy (COOP) edge case.",
            tradeoff: "A browser security header misconfiguration broke Firebase popup sign-in in production. Isolated the origin policy conflict, corrected server response headers, and documented the root cause."
          },
          {
            lead: "AI coding agents used to speed delivery while I review and own every change.",
            tradeoff: "Used AI coding workflows to accelerate component scaffolding while personally reviewing, validating, and owning every line of architectural logic and security rule."
          }
        ],
        outcome: [
          "Sole developer who unified 16+ departments and 5 connected websites into a single operational system.",
          "Eliminated paper registers and disconnected spreadsheets across hospital, college, and head-office divisions.",
          "Staff and cashiers now balance daily collections through verified, role-segregated audit trails (TODO_REAL_VALUE daily active records handled)."
        ],
        gallery: [
          {
            image: "/work/khanhub-erp/dashboard.webp",
            caption: "Centralized multi-department dashboard with role-based routing and live status metrics",
            fullWidth: true
          },
          {
            image: "/work/khanhub-erp/cashier.webp",
            caption: "Cashier ledger interface with fee categorization and balancing audit",
            fullWidth: false
          },
          {
            image: "/work/khanhub-erp/voice-assistant.webp",
            caption: "Executive AI voice assistant with Groq + Llama 3.3 70B tool-calling schema",
            fullWidth: false
          },
          {
            image: "/work/khanhub-erp/audit-logs.webp",
            caption: "Immutable system audit trail detailing user actions, cashier submissions, and department approvals",
            fullWidth: true
          }
        ]
      }
    },
    {
      slug: "jobreel",
      title: "JobReel",
      year: "2026",
      role: "Full-Stack Developer",
      category: "Short-Video Hiring Platform",
      oneLiner: "Short-video job discovery and hiring platform featuring asynchronous video playback, Google OAuth authentication, and infinite feed pagination.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase Auth",
        "Firestore"
      ],
      status: "Live",
      liveUrl: "TODO_REAL_VALUE",
      repoUrl: "TODO_REAL_VALUE",
      coverImage: "/work/jobreel/cover.webp",
      featured: true,
      caseStudy: {
        privacyNote: "Demonstration accounts and video placeholders used for public case study preview.",
        problem: "Traditional text-only hiring fails to communicate applicant demeanor and spoken presence, slowing early-stage candidate filtering.",
        whatIDid: [
          "Developed a mobile-first short-video feed platform with fluid viewport playback and interaction handlers.",
          "Integrated Google OAuth authentication via Firebase Authentication for friction-free sign-in.",
          "Implemented user engagement mechanics including video likes and bookmarking.",
          "Engineered infinite feed pagination connected to Firestore."
        ],
        decisions: [
          {
            lead: "Client-side video playback lifecycle over preloading everything.",
            tradeoff: "Prioritized viewport intersection playback to conserve mobile bandwidth and avoid device memory exhaustion on long feeds."
          },
          {
            lead: "Firebase Auth with Google popup over custom credentials.",
            tradeoff: "Cut signup friction for jobseekers to a single tap while delegating token verification and security entirely to managed services."
          }
        ],
        outcome: [
          "High-speed short-video discovery interface running in production with zero streaming stutter.",
          "Provided jobseekers with an engaging media-first alternative to standard PDF resumes (TODO_REAL_VALUE video profiles published)."
        ],
        gallery: [
          {
            image: "/work/jobreel/feed.webp",
            caption: "Vertical video discovery feed with fluid interaction overlay",
            fullWidth: true
          },
          {
            image: "/work/jobreel/auth.webp",
            caption: "One-tap Google authentication gateway",
            fullWidth: false
          },
          {
            image: "/work/jobreel/profile.webp",
            caption: "Applicant video profile drawer and saved postings ledger",
            fullWidth: false
          }
        ]
      }
    },
    {
      slug: "mrdevs-crm",
      title: "MR.DEVS CRM",
      year: "July 2026 – Present",
      role: "Co-Founder & Lead Engineer",
      category: "Agency Operations Suite",
      oneLiner: "Custom CRM and operations suite engineered for MR DEVS with visual lead pipeline tracking, real-time team chat, leaderboard, and Chrome extension capture.",
      stack: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Chrome Extensions API"
      ],
      status: "Live",
      liveUrl: "https://mrdevs.dev",
      repoUrl: "TODO_REAL_VALUE",
      coverImage: "/work/mrdevs-crm/cover.webp",
      featured: true,
      caseStudy: {
        privacyNote: "Internal agency client leads and revenue totals are redacted in preview screenshots.",
        problem: "Our agency needed an integrated way to capture client leads while browsing profiles, track deals through pipeline stages, and collaborate in real time without paying expensive per-seat SaaS subscription fees.",
        whatIDid: [
          "Architected and built the full agency CRM using React 19, Vite, Tailwind CSS, and Supabase.",
          "Developed visual lead pipeline management and deal stage tracking.",
          "Integrated Supabase Realtime for team messaging and dynamic performance leaderboards.",
          "Authored a dedicated Chrome extension allowing one-click lead extraction from client profiles into Postgres."
        ],
        decisions: [
          {
            lead: "Supabase Realtime over maintaining a custom WebSocket server.",
            tradeoff: "Used managed Postgres change subscriptions for chat and leaderboards, freeing engineering focus for Chrome extension integration."
          },
          {
            lead: "Manifest v3 Chrome extension with direct API authentication.",
            tradeoff: "Allowed our team to capture leads directly from social and freelance sites without manual copy-pasting or switching tabs."
          }
        ],
        outcome: [
          "Currently serves as the core operational platform driving MR DEVS agency deal tracking and internal communications.",
          "Zero ongoing per-seat SaaS costs while keeping all lead and deal data in a self-owned Postgres database (TODO_REAL_VALUE leads tracked)."
        ],
        gallery: [
          {
            image: "/work/mrdevs-crm/pipeline.webp",
            caption: "Kanban pipeline visualization with drag-and-drop stage progression",
            fullWidth: true
          },
          {
            image: "/work/mrdevs-crm/chat.webp",
            caption: "Team messaging module backed by Supabase Realtime",
            fullWidth: false
          },
          {
            image: "/work/mrdevs-crm/extension.webp",
            caption: "Manifest v3 Chrome extension synchronizing browser profile data into CRM",
            fullWidth: false
          }
        ]
      }
    },
    {
      slug: "gulzar-hospital",
      title: "Gulzar Surgical & General Hospital",
      year: "2025",
      role: "Full-Stack Developer",
      category: "Healthcare Web Application",
      oneLiner: "Patient appointment booking platform with automated dual EmailJS notification dispatch to patient and hospital staff, clinical routing, and administrative management.",
      stack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "EmailJS"
      ],
      status: "Live",
      liveUrl: "TODO_REAL_VALUE",
      repoUrl: "TODO_REAL_VALUE",
      coverImage: "/work/gulzar-hospital/cover.webp",
      featured: true,
      caseStudy: {
        privacyNote: "Patient booking information, doctors' private schedules, and staff contact details are blurred in accordance with healthcare privacy standards.",
        problem: "A regional surgical hospital had no online booking presence, causing patients to experience phone delays and hospital staff to track appointment slots manually on physical registers.",
        whatIDid: [
          "Built modern responsive healthcare website with clinical department guides and accessible patient routing.",
          "Engineered automated booking flow dispatching instant confirmation emails to both patient and hospital staff via EmailJS.",
          "Constructed administrative dashboard for schedule and appointment status review."
        ],
        decisions: [
          {
            lead: "EmailJS dual-dispatch pipeline over a backend mail daemon.",
            tradeoff: "Configured client-triggered transactional email templates ensuring instant delivery to both parties without deploying or maintaining a mail server."
          },
          {
            lead: "Accessibility and clean typography over decorative aesthetics.",
            tradeoff: "Designed clear clinical department routing with large legible type so patients and elderly visitors can easily navigate services."
          }
        ],
        outcome: [
          "Directly connected patient consultation requests and established a verified digital entry point for surgical and clinical care.",
          "Delivered zero-maintenance appointment notification dispatch running reliably in production (TODO_REAL_VALUE appointment bookings dispatched)."
        ],
        gallery: [
          {
            image: "/work/gulzar-hospital/cover.webp",
            caption: "Hospital exterior and clinical navigation entry point",
            fullWidth: true
          },
          {
            image: "/work/gulzar-hospital/reception.webp",
            caption: "Appointment booking flow and clinical department directory",
            fullWidth: false
          },
          {
            image: "/work/gulzar-hospital/equipments.webp",
            caption: "Surgical facilities and department equipment directory",
            fullWidth: false
          },
          {
            image: "/work/gulzar-hospital/emergency.webp",
            caption: "Emergency service guide with direct hotline contact routing",
            fullWidth: true
          }
        ]
      }
    },
    {
      slug: "ace-cricket-club",
      title: "Ace Cricket Club",
      year: "2025",
      role: "Frontend Developer",
      category: "Sports Club Portal",
      oneLiner: "Lightweight club portal engineered with Vue.js showcasing match fixtures, squad rosters, player profiling, and club announcements.",
      stack: [
        "Vue.js",
        "JavaScript",
        "Tailwind CSS"
      ],
      status: "Live",
      liveUrl: "TODO_REAL_VALUE",
      repoUrl: "TODO_REAL_VALUE",
      coverImage: "/work/ace-cricket-club/cover.webp",
      featured: true,
      caseStudy: {
        privacyNote: "Club member contact details and private membership rosters are excluded from public case study previews.",
        problem: "Local athletic club needed a digital portal to publish match fixtures, team lineups, and player records for members and supporters.",
        whatIDid: [
          "Designed and implemented lightweight reactive component architecture in Vue.js.",
          "Created player profiles, match schedules, and announcement displays.",
          "Built mobile-friendly layouts for quick sideline access on handheld devices."
        ],
        decisions: [
          {
            lead: "Vue.js reactive components over heavy multi-page architecture.",
            tradeoff: "Used client-side reactive state for quick roster filtering and match schedule switching without full page reloads."
          },
          {
            lead: "Mobile-first typography for sideline match day reading.",
            tradeoff: "Ensured fixture dates and scores are legible in direct sunlight on mobile screens."
          }
        ],
        outcome: [
          "Delivered a high-performance club portal with fast page loads and clear fixture visibility.",
          "Club supporters and players access up-to-date match announcements on mobile devices."
        ],
        gallery: [
          {
            image: "/work/ace-cricket-club/cover.webp",
            caption: "Club squad roster and match calendar view",
            fullWidth: true
          }
        ]
      }
    },
    {
      slug: "designpro",
      title: "DesignPro",
      year: "2025",
      role: "Frontend Developer",
      category: "Agency Landing Page",
      oneLiner: "Editorial agency landing page focused on fluid kinetic typography and scroll-driven presentation.",
      stack: [
        "React",
        "GSAP",
        "Tailwind CSS"
      ],
      status: "Live",
      liveUrl: "TODO_REAL_VALUE",
      repoUrl: "TODO_REAL_VALUE",
      coverImage: "/work/designpro/cover.webp",
      featured: false,
      caseStudy: {
        problem: "Bespoke design studio concept requiring an editorial web presence driven by kinetic typography.",
        whatIDid: [
          "Built layout grids with disciplined typographic pacing and GSAP scroll choreography."
        ],
        decisions: [
          {
            lead: "Strict typography scale with zero generic gradients.",
            tradeoff: "Relied entirely on high-contrast type and hairline dividers to create an editorial visual specimen."
          }
        ],
        outcome: [
          "Delivered an editorial visual specimen highlighting precision layouts."
        ],
        gallery: [
          {
            image: "/work/designpro/cover.webp",
            caption: "Editorial kinetic landing page showcase",
            fullWidth: true
          }
        ]
      }
    },
    {
      slug: "bazaarly",
      title: "Bazaarly",
      year: "2025",
      role: "Frontend Developer",
      category: "E-Commerce Application",
      oneLiner: "Modern e-commerce application featuring catalog filtering, shopping cart state management, and direct checkout flow.",
      stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs"
      ],
      status: "Live",
      liveUrl: "TODO_REAL_VALUE",
      repoUrl: "TODO_REAL_VALUE",
      coverImage: "/work/bazaarly/cover.webp",
      featured: false,
      caseStudy: {
        problem: "Online storefront application needing client-side cart synchronization and dynamic product catalog filtering.",
        whatIDid: [
          "Engineered reactive client cart persistence, item quantity adjustment, and category filtering."
        ],
        decisions: [
          {
            lead: "Strict TypeScript interfaces for product models and cart state.",
            tradeoff: "Prevented runtime state bugs during quantity modifications and price recalculations."
          }
        ],
        outcome: [
          "Produced a high-performance, responsive e-commerce web application."
        ],
        gallery: [
          {
            image: "/work/bazaarly/cover.webp",
            caption: "E-commerce product grid and shopping cart synchronization",
            fullWidth: true
          }
        ]
      }
    },
    {
      slug: "weather-app",
      title: "Weather App",
      year: "2025",
      role: "Frontend Developer",
      category: "Utility Application",
      oneLiner: "Real-time weather reporting utility querying external meteorological APIs for atmospheric data and multi-day forecasts.",
      stack: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs"
      ],
      status: "Live",
      liveUrl: "TODO_REAL_VALUE",
      repoUrl: "TODO_REAL_VALUE",
      coverImage: "/work/weather-app/cover.webp",
      featured: false,
      caseStudy: {
        problem: "Atmospheric reporting tool requiring instant geocoded weather retrieval and clean state presentation.",
        whatIDid: [
          "Built weather lookup utility consuming REST endpoints for atmospheric conditions and forecasts."
        ],
        decisions: [
          {
            lead: "Structured asynchronous error boundaries.",
            tradeoff: "Provided clear visual fallback states during network interruptions or invalid location queries."
          }
        ],
        outcome: [
          "Clean utility reporting live temperature, humidity, and forecast metrics."
        ],
        gallery: [
          {
            image: "/work/weather-app/cover.webp",
            caption: "Meteorological forecast query interface",
            fullWidth: true
          }
        ]
      }
    }
  ]
}
