import { site } from "./site";

export const legalPage = {
  privacy: {
    metaTitle: "Privacy | TalentTekPro",
    metaDescription:
      "How TalentTekPro collects, uses, and protects personal information on talenttekpro.com.",
    hero: {
      eyebrow: "Legal / Privacy",
      title: "Privacy policy",
      support: `Controller: ${site.legalName}. Contact: ${site.email}.`,
    },
    sections: [
      {
        heading: "Who we are",
        body: `${site.legalName} (“TalentTekPro,” “we”) operates talenttekpro.com and related services for tech talent acquisition and digital delivery.`,
      },
      {
        heading: "What we collect",
        body: "Contact details you submit (name, email, company, message), technical logs (IP, user agent), and cookie/analytics data as described in our Cookies notice.",
      },
      {
        heading: "How we use data",
        body: "To respond to inquiries, operate and improve the site, secure our systems, and fulfill contractual or legal obligations. We do not sell personal data.",
      },
      {
        heading: "Retention",
        body: "Inquiry records are kept as long as needed for the conversation and legitimate business records, then deleted or anonymized.",
      },
      {
        heading: "Your rights",
        body: `Depending on your region you may request access, correction, deletion, or restriction. Email ${site.email} to exercise rights.`,
      },
      {
        heading: "Contact",
        body: `${site.legalName} · ${site.email}`,
      },
    ],
  },
  terms: {
    metaTitle: "Terms | TalentTekPro",
    metaDescription:
      "Terms that govern use of talenttekpro.com and the services described on it.",
    hero: {
      eyebrow: "Legal / Terms",
      title: "Terms of use",
      support: `These terms govern use of talenttekpro.com operated by ${site.legalName}.`,
    },
    sections: [
      {
        heading: "Acceptance",
        body: "By using this site you agree to these terms and our Privacy and Cookies notices. If you do not agree, do not use the site.",
      },
      {
        heading: "Services described",
        body: "Case studies, pricing fixtures, and metrics on this site are illustrative unless covered by a signed MSA/SOW. Engagements begin only under written agreement.",
      },
      {
        heading: "Intellectual property",
        body: "Site content, branding, and design are owned by TalentTekPro or licensors. You may not copy or redistribute without permission.",
      },
      {
        heading: "Disclaimer",
        body: "The site is provided “as is.” We disclaim warranties to the fullest extent permitted by law regarding accuracy and uninterrupted access.",
      },
      {
        heading: "Limitation of liability",
        body: "To the extent permitted by law, TalentTekPro is not liable for indirect or consequential damages arising from site use.",
      },
      {
        heading: "Contact",
        body: `Questions: ${site.email}`,
      },
    ],
  },
  cookies: {
    metaTitle: "Cookies | TalentTekPro",
    metaDescription:
      "How TalentTekPro uses cookies and similar technologies on talenttekpro.com.",
    hero: {
      eyebrow: "Legal / Cookies",
      title: "Cookies notice",
      support: "How we use cookies and similar technologies on talenttekpro.com.",
    },
    sections: [
      {
        heading: "What are cookies",
        body: "Cookies are small files stored on your device that help the site function, remember preferences, and understand usage.",
      },
      {
        heading: "Essential",
        body: "Required for security, load balancing, and basic navigation. These cannot be disabled if you use the site.",
      },
      {
        heading: "Analytics",
        body: "Optional analytics help us understand which pages are useful. We minimize identifiers where practical.",
      },
      {
        heading: "Preferences",
        body: "May remember UI choices such as reduced-motion preferences when implemented.",
      },
      {
        heading: "Managing cookies",
        body: `You can control cookies in your browser settings. Blocking essential cookies may break parts of the site. Contact ${site.email} with questions.`,
      },
    ],
  },
} as const;
