import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { pricingPage } from "@/content/pricing";
import { cta } from "@/content/site";

export const metadata: Metadata = {
  title: pricingPage.metaTitle,
  description: pricingPage.metaDescription,
};

export default function PricingPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow={pricingPage.hero.eyebrow}
        title={pricingPage.hero.title}
        titleAccent={pricingPage.hero.titleAccent}
        support={pricingPage.hero.support}
      />

      <section className="section-elevated border-t border-border section-pad">
        <Container>
          <RevealOnScroll>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pricingPage.models.map((m) => (
                <div
                  key={m.id}
                  className="rounded-sm border border-border bg-surface p-5 border-t-2 border-t-teal/60"
                >
                  <h2 className="font-display text-lg font-semibold text-text">{m.name}</h2>
                  <p className="mt-2 text-sm text-muted">{m.aim}</p>
                  <p className="mt-4 font-mono text-sm text-teal">{m.price}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-sm text-muted">{pricingPage.note}</p>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={pricingPage.cta.headline}
        support={pricingPage.cta.support}
        primary={cta.proposal}
      />
    </main>
  );
}
