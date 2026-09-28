export type CareerRole = {
  slug: string;
  track: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export const careersPage = {
  metaTitle: "Careers | Join TalentTekPro",
  metaDescription:
    "Build the work you want to be known for: senior recruiting, engineering, and delivery roles.",
  hero: {
    eyebrow: "Careers",
    title: "Build the work.",
    titleAccent: "Known for it.",
    support:
      "We hire exceptional people, pay competitively, and give them problems that compound: GenAI platforms, enterprise delivery, and talent systems.",
  },
  benefits: {
    headline: "What you",
    headlineAccent: "get.",
    support: "Remote-first craft, real learning budget, and colleagues who raise the bar.",
    items: [
      { title: "Remote-first", body: "Work from where you do your best thinking." },
      { title: "Learning budget", body: "Courses, conferences, and tools on us." },
      { title: "Top-tier gear", body: "Machine, monitor, and setup that keep pace." },
      { title: "Health & wellness", body: "Coverage that respects how hard we ship." },
      { title: "Flexible PTO", body: "Take the time you need, no points system." },
      { title: "Senior colleagues", body: "Learn beside people who have done the work." },
    ],
  },
  culture: {
    headline: "How we",
    headlineAccent: "work.",
    items: [
      {
        title: "Senior bar",
        body: "Client engagements stay at a senior level, no bait-and-switch staffing.",
      },
      {
        title: "Transparent milestones",
        body: "Delivery plans you can see, challenge, and own.",
      },
      {
        title: "AI-native practice",
        body: "The tools we sell are the tools we use every day.",
      },
      {
        title: "Global craft",
        body: "A distributed team united by quality, not time zones.",
      },
    ],
  },
  roles: {
    headline: "Open",
    headlineAccent: "roles.",
    applyNote:
      "Open a role for the full description, then apply with your LinkedIn and résumé. We review every senior-track application.",
    items: [
      {
        slug: "junior-full-stack-software-engineer",
        track: "Engineering",
        title: "Junior Full Stack Software Engineer",
        location: "Remote · Americas & EU",
        type: "Full-time",
        summary:
          "Ship production features across the stack with mentorship from senior engineers on real client and internal products.",
        about:
          "You’ll work inside small product squads: React/Next.js on the front, Node or similar APIs on the back, while learning delivery habits that hold up in production.",
        responsibilities: [
          "Build and ship UI and API features with code review and clear acceptance criteria.",
          "Write tests and docs for the surfaces you own.",
          "Pair with seniors on architecture decisions and debugging production issues.",
          "Contribute to sprint planning, demos, and hand-off notes.",
        ],
        requirements: [
          "1–3 years of professional software experience (or strong equivalent projects).",
          "Comfort with TypeScript/JavaScript and at least one modern web framework.",
          "Willingness to learn across front-end and back-end.",
          "Clear written English and remote collaboration habits.",
        ],
        niceToHave: ["Next.js or NestJS exposure", "Basic CI/CD familiarity", "Interest in AI-assisted workflows"],
      },
      {
        slug: "senior-full-stack-engineer",
        track: "Engineering",
        title: "Senior Full-Stack Engineer",
        location: "Remote · Global",
        type: "Full-time",
        summary:
          "Own end-to-end product surfaces for client embeds and TalentTekPro platforms: architecture through production.",
        about:
          "You’ll lead technical delivery on digital product and platform work: design systems, APIs, performance, and the judgment to keep scope honest under real deadlines.",
        responsibilities: [
          "Architect and ship full-stack features with measurable outcomes.",
          "Mentor mid and junior engineers; raise the code and review bar.",
          "Partner with product and talent leads on scoping and risk.",
          "Own observability, release quality, and hand-off to client teams when needed.",
        ],
        requirements: [
          "5+ years building production web systems.",
          "Deep TypeScript and modern React; solid Node or comparable backend experience.",
          "Track record of leading technical decisions on shipped products.",
          "Comfortable in client-facing engineering conversations.",
        ],
        niceToHave: ["Next.js App Router", "Cloud platform experience", "Prior consulting or embed experience"],
      },
      {
        slug: "ai-ml-engineer",
        track: "Data & AI",
        title: "AI / ML Engineer",
        location: "Remote · Global",
        type: "Full-time",
        summary:
          "Build production AI features: retrieval, agents, evals, and model routing that clients and our own talent systems can trust.",
        about:
          "You’ll turn applied AI into reliable product surfaces: RAG pipelines, scoring systems, and agent workflows with gates that survive real traffic.",
        responsibilities: [
          "Design and ship ML/LLM features with clear eval and fallback strategies.",
          "Integrate retrieval, embeddings, and model routing into product APIs.",
          "Partner with engineering and talent teams on hiring and matching use cases.",
          "Document assumptions, costs, and operational runbooks.",
        ],
        requirements: [
          "3+ years in ML engineering or applied AI in production.",
          "Strong Python and familiarity with modern LLM tooling.",
          "Experience shipping retrieval or agent systems beyond prototypes.",
          "Ability to explain trade-offs to non-ML stakeholders.",
        ],
        niceToHave: ["RAG eval frameworks", "TypeScript service integration", "Hiring or HR-tech domain experience"],
      },
      {
        slug: "technical-recruiter",
        track: "Talent",
        title: "Technical Recruiter",
        location: "Remote · Americas",
        type: "Full-time",
        summary:
          "Source and close senior engineering talent with scorecards that predict ramp, not just keyword matches.",
        about:
          "You’ll run full-cycle search for client and internal roles, partnering with engineers on intake, panels, and debriefs that keep the senior bar honest.",
        responsibilities: [
          "Own role intake, market mapping, and shortlists for technical roles.",
          "Build diversity-aware pipelines and structured interview loops.",
          "Partner with delivery leads on timeline and offer strategy.",
          "Maintain clean ATS hygiene and candidate experience.",
        ],
        requirements: [
          "3+ years recruiting software engineers or adjacent technical roles.",
          "Comfort discussing stack trade-offs with hiring managers.",
          "Proven ability to close senior candidates in competitive markets.",
          "Excellent written and spoken English.",
        ],
        niceToHave: ["Agency or RPO experience", "Executive / staff-level search", "Familiarity with AI-assisted sourcing tools"],
      },
      {
        slug: "virtual-assistant",
        track: "Operations",
        title: "Virtual Assistant",
        location: "Remote · LATAM & Europe",
        type: "Full-time / contract",
        summary:
          "Keep founders and delivery leads unblocked: calendar, research, follow-ups, and light ops that stay accurate under pace.",
        about:
          "You’ll support leadership and project teams with administrative excellence: scheduling, inbox triage, document prep, and coordination across time zones.",
        responsibilities: [
          "Manage calendars, travel logistics, and meeting prep.",
          "Triage email and Slack; escalate what needs a decision.",
          "Maintain shared trackers, notes, and lightweight process docs.",
          "Support recruiting and delivery ops with research and coordination.",
        ],
        requirements: [
          "2+ years supporting executives or busy technical teams remotely.",
          "Excellent written English and discretion with confidential work.",
          "Strong Google Workspace / Notion (or similar) fluency.",
          "Reliable overlap with Americas business hours.",
        ],
        niceToHave: ["Agency or consulting ops experience", "Light design or presentation skills", "Spanish or Portuguese"],
      },
      {
        slug: "pr-communications-assistant",
        track: "Marketing",
        title: "Public Relations & Communications Assistant",
        location: "Remote · U.S. only",
        type: "Full-time / contract",
        summary:
          "Help tell the TalentTekPro story: drafts, media lists, social support, and campaign coordination that stay on brand.",
        about:
          "You’ll support PR and communications programs: outreach lists, draft copy, event support, and tracking coverage for a hybrid talent + delivery brand.",
        responsibilities: [
          "Maintain media and influencer lists; support outreach campaigns.",
          "Draft short-form copy, bios, and briefing notes under guidance.",
          "Track coverage, mentions, and campaign timelines.",
          "Coordinate with leadership on announcements and case-study storytelling.",
        ],
        requirements: [
          "1–3 years in PR, communications, or marketing support roles.",
          "Strong writing and editorial judgment in American English.",
          "U.S.-based with reliable East/Central business-hour coverage.",
          "Comfort juggling multiple deadlines without losing accuracy.",
        ],
        niceToHave: ["B2B or tech brand experience", "Basic CMS / social scheduling tools", "Interest in talent and engineering storytelling"],
      },
    ] satisfies CareerRole[],
  },
  cta: {
    headline: "Ready to",
    headlineAccent: "build with us?",
    support: "Tell us what you want to be known for: we’ll reply with next steps.",
  },
} as const;

export function getCareerRole(slug: string) {
  return careersPage.roles.items.find((role) => role.slug === slug);
}
