import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/page/FaqList";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { faqPage } from "@/content/faq";
import { cta } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: faqPage.metaTitle,
  description: faqPage.metaDescription,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow={faqPage.hero.eyebrow}
        title={faqPage.hero.title}
        support={faqPage.hero.support}
      />

      <section className="section-dark border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <FaqList items={faqPage.items} />
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={faqPage.cta.headline}
        support={faqPage.cta.support}
        primary={cta.primary}
      />
    </main>
  );
}
