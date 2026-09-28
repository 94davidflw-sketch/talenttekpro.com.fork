/**
 * Landing page copy & fixtures: replace metrics/clients before production launch.
 */

export const home = {
  hero: {
    index: "001 / TalentTekPro / Est. 2021",
    brand: "TalentTekPro",
    headline: "Build the team. Ship the system.",
    support:
      "AI-assisted tech talent and embedded engineering squads: one partner from shortlist to production.",
  },
  manifesto: {
    index: "002 / Manifesto",
    headline: "TalentTekPro charts how enterprises",
    headlineAccent: "hire and build.",
    body: "Consulting-led talent strategy, AI-powered matching, squads that stay through launch. We measure every engagement by time-to-productivity and systems that hold in production.",
  },
  impact: {
    index: "003 / Impact",
    eyebrow: "By the numbers",
    headline: "Built for",
    headlineAccent: "measurable impact.",
    metrics: [
      { label: "client satisfaction", value: 98, suffix: "%", detail: "across 50+ delivered projects" },
      { label: "projects & placements", value: 50, suffix: "+", detail: "since founding" },
      { label: "countries served", value: 10, suffix: "+", detail: "distributed senior team" },
      { label: "uptime managed", value: 99.9, suffix: "%", detail: "production-grade reliability" },
      { label: "clients served", value: 40, suffix: "+", detail: "startups to enterprise" },
      { label: "years experience", value: 5, suffix: "+", detail: "talent + delivery practice" },
    ],
  },
  platform: {
    index: "004 / Platform",
    eyebrow: "Command surface",
    headline: "Real-time",
    headlineAccent: "talent & delivery",
    support:
      "The same surface our recruiters and delivery leads use: funnel health, match routing, and sprint velocity in one place.",
    tabs: [
      {
        id: "talent-os",
        label: "Talent OS",
        title: "Hiring operations",
        description: "Monitor open reqs, shortlist velocity and pipeline health across every search.",
        stats: [
          { label: "open reqs", value: "18" },
          { label: "avg shortlist", value: "9d" },
          { label: "fill rate", value: "94%" },
        ],
      },
      {
        id: "ai-match",
        label: "AI Match",
        title: "Multi-signal routing",
        description:
          "Skills, timezone, seniority and culture signals behind one match layer your team controls.",
        stats: [
          { label: "match score", value: "94" },
          { label: "signals", value: "12" },
          { label: "eval gate", value: "pass" },
        ],
      },
      {
        id: "ship",
        label: "Ship Velocity",
        title: "Delivery velocity",
        description: "Sprint progress, burn rate and risk register: demoable increments every two weeks.",
        stats: [
          { label: "velocity", value: "+24%" },
          { label: "deploys", value: "12" },
          { label: "p99", value: "48ms" },
        ],
      },
    ],
  },
  cases: {
    index: "005 / Case Studies",
    eyebrow: "Featured projects",
    headline: "Work that hired and shipped.",
    support:
      "Talent placements and production systems: the engagements where we hired the team and shipped the product.",
  },
  solutions: {
    index: "006 / Solutions",
    headline: "Tailored talent and technology for real-world scale.",
    support:
      "We design hiring pipelines and production systems that cut risk and raise velocity.",
    disciplines: [
      {
        num: "01",
        title: "Tech Talent Acquisition",
        href: "/services#talent",
        bullets: ["Role intake", "Sourced shortlists", "Diversity pipelines", "Executive tech search"],
      },
      {
        num: "02",
        title: "Embedded Squads",
        href: "/services#squads",
        bullets: ["Product squads", "Platform pods", "3–12 month embeds", "Knowledge transfer"],
      },
      {
        num: "03",
        title: "Contract & Contract-to-Hire",
        href: "/services#contract",
        bullets: ["Contract eng", "C2H paths", "Ramp plans", "Replacement paths"],
      },
      {
        num: "04",
        title: "Applied AI for Hiring & Products",
        href: "/services#ai",
        bullets: ["Match scoring", "RAG copilots", "Agent workflows", "Eval gates"],
      },
      {
        num: "05",
        title: "Digital Engineering",
        href: "/services#engineering",
        bullets: ["Web & mobile", "Design systems", "API platforms", "Performance"],
      },
      {
        num: "06",
        title: "Cloud & Platform",
        href: "/services#cloud",
        bullets: ["Migration", "Kubernetes", "Serverless", "FinOps"],
      },
      {
        num: "07",
        title: "Consulting & Workforce Strategy",
        href: "/services#consulting",
        bullets: ["Roadmaps", "Hub setup", "Diligence", "Vendor selection"],
      },
      {
        num: "08",
        title: "Managed Delivery / SRE",
        href: "/services#managed",
        bullets: ["24/7 monitoring", "Incidents", "Capacity", "Cost optimization"],
      },
    ],
  },
  industries: {
    index: "008 / Industries",
    eyebrow: "Industries",
    headline: "Trusted across industries",
    headlineAccent: "that ship.",
    support:
      "From logistics to healthcare, we help industry leaders solve complex problems with reliable, scalable technology and the senior talent to run it.",
    items: [
      {
        title: "Logistics",
        description:
          "Optimize supply chains and fleet operations with real-time visibility and AI-driven routing.",
        tag: "Supply Chain",
        tone: "blue",
      },
      {
        title: "Healthcare",
        description:
          "Secure patient platforms and clinical workflows that meet compliance without slowing delivery.",
        tag: "Healthcare",
        tone: "teal",
      },
      {
        title: "Manufacturing",
        description:
          "Connect plant systems, quality data, and planning so production stays predictable.",
        tag: "Industrial",
        tone: "violet",
      },
      {
        title: "Retail",
        description:
          "Unify commerce, inventory, and personalization for experiences that convert.",
        tag: "Commerce",
        tone: "orange",
      },
      {
        title: "Energy",
        description:
          "Modernize grid, asset, and customer systems with secure cloud-native platforms.",
        tag: "Utilities",
        tone: "sky",
      },
    ],
  },
  approach: {
    index: "007 / Approach",
    eyebrow: "Our process",
    headline: "Unlock the potential of",
    headlineAccent: "your business.",
    body: "TalentTekPro blends workforce strategy with deep technical delivery. We learn your constraints, then match people and architecture to the same success metrics.",
    principles: {
      headline: "How we",
      headlineAccent: "operate.",
      items: [
        {
          title: "Customized solutions",
          body: "Scorecards, architecture, and staffing shaped to your constraints, not a catalog template.",
        },
        {
          title: "Quality & reliability",
          body: "Senior bar on every engagement. Foundations before feature theater.",
        },
        {
          title: "AI-native delivery",
          body: "Matching and delivery automation we use ourselves, then bring to your stack.",
        },
        {
          title: "Global delivery",
          body: "Onshore strategy with nearshore and offshore execution that stays accountable.",
        },
      ],
    },
    phases: {
      headline: "From discover",
      headlineAccent: "to scale.",
      support: "Four phases. One accountable partner for talent and delivery.",
      items: [
        {
          num: "01",
          label: "discover",
          title: "Discover",
          body: "Map constraints, stakeholders, success metrics (hire + system).",
        },
        {
          num: "02",
          label: "match-design",
          title: "Match & Design",
          body: "Role scorecards, architecture ADRs, delivery roadmap.",
        },
        {
          num: "03",
          label: "build-embed",
          title: "Build & Embed",
          body: "Two-week sprints; talent ramps beside the squad.",
        },
        {
          num: "04",
          label: "scale",
          title: "Scale",
          body: "Harden, hand off, optimize hiring loops and platforms for growth.",
        },
      ],
    },
    cta: { label: "Start a project", href: "/contact" },
  },
  partners: {
    index: "009 / Trust",
    headline: "Trusted across industries",
    headlineAccent: "that ship.",
    marquee: [
      "FinTech",
      "HealthTech",
      "Retail",
      "Industrial IoT",
      "SaaS",
      "Media",
      "Energy",
      "Logistics",
      "Public Sector",
      "Marketplaces",
    ],
    certifications: [
      { label: "SOC 2–minded delivery", detail: "Controls-first engagements" },
      { label: "ISO 27001–aligned ops", detail: "Security as default" },
      { label: "Cloud partner practice", detail: "AWS · Azure · GCP patterns" },
      { label: "Senior bar only", detail: "No juniors on critical paths" },
    ],
  },
  testimonials: {
    index: "010 / Voices",
    eyebrow: "Client success stories",
    headline: "Real teams.",
    headlineAccent: "Real results.",
    support:
      "See how forward-thinking companies are building the future with TalentTekPro.",
    items: [
      {
        quote:
          "TalentTekPro translated our hiring plan into a production-ready squad in under a quarter, and stayed through launch.",
        name: "James Caldwell",
        title: "CTO",
        company: "Vertex Financial",
        initials: "JC",
      },
      {
        quote:
          "One partner for talent and delivery meant our architecture and workforce plan finally moved in the same direction.",
        name: "Maria Santos",
        title: "VP Technology",
        company: "Nova Health",
        initials: "MS",
      },
      {
        quote:
          "They turned our GenAI roadmap into a guarded production feature set, with the engineers to own it.",
        name: "Robert Hayes",
        title: "CDO",
        company: "Quantix Capital",
        initials: "RH",
      },
    ],
  },
  careers: {
    index: "011 / Careers",
    headline: "Join our",
    headlineAccent: "team.",
    roles: [
      {
        track: "Engineering",
        title: "Senior Full-Stack Engineer",
        location: "Remote · Global",
        href: "/careers/senior-full-stack-engineer",
      },
      {
        track: "Data & AI",
        title: "AI / ML Engineer",
        location: "Remote · Global",
        href: "/careers/ai-ml-engineer",
      },
      {
        track: "Talent",
        title: "Technical Recruiter",
        location: "Remote · Americas",
        href: "/careers/technical-recruiter",
      },
      {
        track: "Engineering",
        title: "Junior Full Stack Software Engineer",
        location: "Remote · Americas & EU",
        href: "/careers/junior-full-stack-software-engineer",
      },
    ],
  },
  blog: {
    index: "012 / Journal",
    headline: "The latest",
    headlineAccent: "articles.",
    posts: [
      {
        category: "AI & ML",
        title: "Production RAG with model routing that survives scale",
        href: "/blog/production-rag-routing",
        read: "8 min",
      },
      {
        category: "Hiring Ops",
        title: "Scorecards that predict time-to-productivity",
        href: "/blog/scorecards-time-to-productivity",
        read: "6 min",
      },
      {
        category: "DevOps",
        title: "Zero-downtime deploys we actually trust",
        href: "/blog/zero-downtime-deploys",
        read: "7 min",
      },
    ],
  },
  faq: {
    index: "013 / FAQ",
    headline: "Common",
    headlineAccent: "questions.",
    items: [
      {
        q: "What engagement models do you offer?",
        a: "Fixed-scope projects, embedded squads, retainers, talent search, and managed delivery alone or combined.",
      },
      {
        q: "How quickly can you start?",
        a: "Discovery can begin within one week. Full teams and searches typically mobilize in 2–3 weeks.",
      },
      {
        q: "Do you work with startups or only enterprise?",
        a: "Both: from Series A ventures to Fortune-scale enterprises that need senior talent and shipping capacity.",
      },
    ],
    cta: { label: "View all FAQs", href: "/faq" },
  },
  getStarted: {
    index: "014 / Get Started",
    eyebrow: "Get started today",
    headline: "Ready to explore your possibilities?",
    headlineAccent: "Talk to us today.",
    support: "Free consultancy: talent, delivery, or both. No obligation.",
  },
} as const;
