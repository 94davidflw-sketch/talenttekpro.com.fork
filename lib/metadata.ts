import type { Metadata } from "next";
import { site } from "@/content/site";

/** Company identity for Google. Only facts already published on the site. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo/logo-no-text-512.png`,
    description: site.description,
    email: site.email,
    foundingDate: String(site.est),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      url: `${site.url}/contact`,
    },
    sameAs: site.social.map((item) => item.href),
  };
}

/** Browser title, description, canonical URL, and share tags for one public page. */
export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${input.path}`;
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      type: "website",
    },
    twitter: {
      title: input.title,
      description: input.description,
    },
  };
}
