export const engagementModels = [
  {
    id: "project",
    name: "Project-Based",
    aim: "Fixed scope delivery",
    body: "Clear milestones, acceptance criteria, and a delivery team sized to the outcome: from discovery through launch.",
    bestFor: "Defined builds & migrations",
    price: "From $75k",
  },
  {
    id: "squad",
    name: "Embedded Squad",
    aim: "Senior team in your org",
    body: "A cross-functional pod that works inside your rituals, tools, and roadmap, then leaves knowledge behind.",
    bestFor: "Product velocity & platforms",
    price: "From $45k/mo",
  },
  {
    id: "retainer",
    name: "Retainer",
    aim: "Advisory + capacity on demand",
    body: "Reserved senior hours for architecture, hiring counsel, and surge capacity without standing up a full squad.",
    bestFor: "Ongoing advisory",
    price: "From $15k/mo",
  },
  {
    id: "search",
    name: "Talent Search",
    aim: "Retained / contingency search",
    body: "Role intake, sourced shortlists, and structured interviews for senior tech hires that need to stick.",
    bestFor: "Hard-to-fill roles",
    price: "Custom",
  },
  {
    id: "managed",
    name: "Managed Services",
    aim: "Platform ops",
    body: "Monitoring, incidents, capacity, and cost control so the systems you shipped keep holding in production.",
    bestFor: "SRE & platform ops",
    price: "Custom",
  },
  {
    id: "hybrid",
    name: "Hybrid Engagement",
    aim: "Talent + delivery as one",
    body: "Search and embed under one accountable partner: hire the bar, ship the roadmap, and keep decisions coherent.",
    bestFor: "Scale people and product",
    price: "Scoped together",
  },
] as const;

export const servicesPage = {
  metaTitle: "Services | TalentTekPro",
  metaDescription:
    "Eight disciplines under one accountable partner: talent acquisition, embedded squads, AI, cloud, and engineering.",
  hero: {
    eyebrow: "Services",
    title: "Eight practices.",
    titleAccent: "One partner.",
    support:
      "Senior recruiters and engineers under one roof: coherent hiring, faster decisions, teams that stay through launch.",
  },
  integrated: {
    headline: "Eight disciplines, one",
    headlineAccent: "accountable team.",
    body: "Talent, embedded squads, AI, cloud, and engineering so architecture and workforce plans don’t diverge.",
    pillars: [
      {
        title: "One intake",
        body: "Role, roadmap, and constraints captured once: recruiters and engineers share the same brief.",
      },
      {
        title: "Shared metrics",
        body: "Time-to-hire, ramp, and delivery outcomes live on one scorecard your stakeholders can trust.",
      },
      {
        title: "No handoff theater",
        body: "When talent and delivery sit under one partner, decisions stick through launch, not just kickoff.",
      },
    ],
  },
  disciplines: {
    headline: "Flexible talent.",
    headlineAccent: "Real impact.",
    support:
      "We provide AI-assisted tech talent and embedded engineering squads to help you build, scale, and innovate faster, without the hiring headaches.",
    items: [
      {
        id: "talent",
        num: "01",
        title: "Tech Talent Acquisition",
        aim: "Pipeline, sourcing, diversity tech hiring",
        bullets: [
          "Role intake",
          "Sourced shortlists",
          "Diversity pipelines",
          "Executive tech search",
        ],
      },
      {
        id: "squads",
        num: "02",
        title: "Embedded Squads",
        aim: "Team inside client org",
        bullets: [
          "Product squads",
          "Platform pods",
          "3–12 month embeds",
          "Knowledge transfer",
        ],
      },
      {
        id: "contract",
        num: "03",
        title: "Contract & Contract-to-Hire",
        aim: "Flexible capacity",
        bullets: [
          "Contract eng",
          "C2H paths",
          "Ramp plans",
          "Replacement guarantees",
        ],
      },
      {
        id: "ai",
        num: "04",
        title: "Applied AI for Hiring & Products",
        aim: "AI on both sides",
        bullets: ["Match scoring", "RAG copilots", "Agent workflows", "Eval gates"],
      },
      {
        id: "engineering",
        num: "05",
        title: "Digital Engineering",
        aim: "Shipped interfaces & APIs",
        bullets: ["Web & mobile", "Design systems", "API platforms", "Performance"],
      },
      {
        id: "cloud",
        num: "06",
        title: "Cloud & Platform",
        aim: "Scale foundations",
        bullets: ["Migration", "Kubernetes", "Serverless", "FinOps"],
      },
      {
        id: "consulting",
        num: "07",
        title: "Consulting & Workforce Strategy",
        aim: "Advice that binds talent + tech",
        bullets: ["Roadmaps", "GCC / hub setup", "Diligence", "Vendor selection"],
      },
      {
        id: "managed",
        num: "08",
        title: "Managed Delivery / SRE",
        aim: "Keep it running",
        bullets: ["24/7 monitoring", "Incidents", "Capacity", "Cost optimization"],
      },
    ],
  },
  models: {
    headline: "Engagement",
    headlineAccent: "models.",
    support: "Pick a shape that fits or combine them under one partner.",
    items: engagementModels,
  },
  cta: {
    headline: "Let’s scope your next hire: or",
    headlineAccent: "your next release.",
    support: "Tell us what you need: talent, delivery, or both.",
  },
} as const;
