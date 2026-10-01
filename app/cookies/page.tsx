import { PageHero } from "@/components/page/PageHero";
import { LegalSections } from "@/components/page/LegalSections";
import { legalPage } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: legalPage.cookies.metaTitle,
  description: legalPage.cookies.metaDescription,
  path: "/cookies",
});

export default function CookiesPage() {
  const { hero, sections } = legalPage.cookies;
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
