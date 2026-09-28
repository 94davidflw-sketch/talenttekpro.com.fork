import { engagementModels } from "./services";

export const pricingPage = {
  metaTitle: "Pricing | TalentTekPro",
  metaDescription:
    "Transparent starting points for projects, squads, retainers, and talent search: custom after discovery.",
  hero: {
    eyebrow: "Pricing / Engagement",
    title: "Starting points.",
    titleAccent: "Custom after discovery.",
    support:
      "Talent search fees and delivery SOWs are scoped after we understand constraints, success metrics, and timeline.",
  },
  models: engagementModels,
  note: "Figures are fixtures for planning conversations, not a public rate card. Every engagement begins with a short discovery.",
  cta: {
    headline: "Need a scoped proposal?",
    support: "Share talent needs, delivery goals, or both.",
  },
} as const;
