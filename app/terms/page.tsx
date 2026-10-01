import { PageHero } from "@/components/page/PageHero";
import { LegalSections } from "@/components/page/LegalSections";
import { legalPage } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: legalPage.terms.metaTitle,
  description: legalPage.terms.metaDescription,
  path: "/terms",
});

export default function TermsPage() {
  const { hero, sections } = legalPage.terms;
  return (
    <main className="flex-1">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
      />
      <LegalSections sections={sections} />
    </main>
  );
}
