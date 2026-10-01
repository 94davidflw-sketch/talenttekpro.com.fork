import { PageHero } from "@/components/page/PageHero";
import { LegalSections } from "@/components/page/LegalSections";
import { legalPage } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: legalPage.privacy.metaTitle,
  description: legalPage.privacy.metaDescription,
  path: "/privacy",
});

export default function PrivacyPage() {
  const { hero, sections } = legalPage.privacy;
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
