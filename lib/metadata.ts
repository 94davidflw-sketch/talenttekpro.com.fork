import type { Metadata } from "next";
import { site } from "@/content/site";

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
