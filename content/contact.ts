export const contactPage = {
  metaTitle: "Contact | TalentTekPro",
  metaDescription:
    "Start a project or get a quote: talent, delivery, or both.",
  hero: {
    eyebrow: "Contact",
    title: "Your brief.",
    titleAccent: "Hire or ship.",
    support:
      "Share a short brief. We’ll reply with next steps for talent, delivery, or a hybrid engagement.",
  },
  intro: {
    headline: "Brief us once.",
    headlineAccent: "Hear back with a plan.",
    support:
      "Whether you need senior talent, an embedded squad, or a scoped delivery engagement: one form is enough to start a serious conversation.",
  },
  needs: [
    {
      id: "Talent",
      title: "Talent",
      description: "Search, shortlists, and senior hiring support.",
    },
    {
      id: "Delivery",
      title: "Delivery",
      description: "Product, platform, or engineering execution.",
    },
    {
      id: "Both",
      title: "Hybrid",
      description: "Hire and ship under one accountable partner.",
    },
  ] as const,
  timelines: [
    "As soon as possible",
    "Within 30 days",
    "1–3 months",
    "Exploring options",
  ] as const,
  fields: {
    name: "Full name",
    email: "Work email",
    company: "Company",
    role: "Your role",
    need: "Engagement type",
    timeline: "Target timeline",
    message: "Project brief",
    submit: "Request a proposal",
  },
  process: {
    headline: "What happens next",
    items: [
      {
        step: "01",
        title: "We review your brief",
        body: "A partner reads for fit across talent, delivery, and timeline.",
      },
      {
        step: "02",
        title: "We reply with next steps",
        body: "Expect a clear response within 1–2 business days, not an auto-reply.",
      },
      {
        step: "03",
        title: "We scope together",
        body: "Discovery call, engagement shape, and a proposal you can act on.",
      },
    ],
  },
  details: {
    emailLabel: "Direct email",
    responseLabel: "Typical response",
    responseValue: "1–2 business days",
    focusLabel: "Best suited for",
    focusValue:
      "Series A–enterprise teams needing senior talent, embedded squads, or production delivery.",
    note: "Include stack, roles, and timing constraints if you have them. It shortens the back-and-forth.",
  },
} as const;
