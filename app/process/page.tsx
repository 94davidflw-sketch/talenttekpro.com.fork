import type { Metadata } from "next";
import {
  ArrowRight,
  Globe2,
  Layers,
  Map,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { processPage } from "@/content/process";
import { media } from "@/content/media";
import { cta } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: processPage.metaTitle,
  description: processPage.metaDescription,
};

const principleIcons = [Settings2, ShieldCheck, Sparkles, Globe2] as const;

const phaseStyles = [
  { icon: Map, tint: "bg-[#DBEAFE] text-[#1E60FF]" },
  { icon: Layers, tint: "bg-[#EDE9FE] text-[#7C3AED]" },
  { icon: Sparkles, tint: "bg-[#CCFBF1] text-[#0D9488]" },
  { icon: Search, tint: "bg-[#E0E7FF] text-[#4F46E5]" },
] as const;

export default function ProcessPage() {
  return (
    <main className="flex-1">
      <PageHero
        layout="viewport"
        className="hero-open hero--light-overlay hero--veil-soft"
        eyebrow={processPage.hero.eyebrow}
        title={processPage.hero.title}
        titleAccent={processPage.hero.titleAccent}
        support={processPage.hero.support}
        image={media.processHero}
      />

      {/* Principles */}
      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-16 -right-8 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="wave" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {processPage.principles.headline}{" "}
              <span className="hero-gradient-text">
                {processPage.principles.headlineAccent}
              </span>
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {processPage.principles.items.map((item, i) => {
                const Icon = principleIcons[i] ?? Settings2;
                return (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-2xl bg-[#EFF6FF] text-[#1E60FF]">
                      <Icon className="size-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                        {item.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Phases */}
      <section className="relative z-[1] overflow-visible bg-[#EAF3FB] section-pad">
        <SectionEdge fill="#EAF3FB" variant="wave" position="top" />
        <ScrollShape
          className="bottom-12 -left-6 h-36 w-44 text-[#1E60FF] md:h-48 md:w-56"
        >
          <SoftRegion variant="pebble" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {processPage.phases.headline}{" "}
              <span className="hero-gradient-text">
                {processPage.phases.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              {processPage.phases.support}
            </p>

            <ol className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {processPage.phases.items.map((phase, i) => {
                const style = phaseStyles[i] ?? phaseStyles[0];
                const Icon = style.icon;
                const isLast = i === processPage.phases.items.length - 1;

                return (
                  <li
                    key={phase.num}
                    className="relative flex h-full items-stretch gap-3"
                  >
                    <article className="flex h-full min-w-0 flex-1 flex-col items-start gap-3.5 rounded-[1.35rem] bg-white p-5 shadow-[0_14px_36px_rgba(5,25,55,0.08)] md:gap-4 md:rounded-[1.5rem] md:p-6">
                      <div className="flex w-full items-start gap-3.5 md:gap-4">
                        <span
                          className={cn(
                            "mt-0.5 grid size-11 shrink-0 place-items-center rounded-full",
                            style.tint,
                          )}
                        >
                          <Icon
                            className="size-5"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                            {phase.num} · {phase.label}
                          </p>
                          <h3 className="card-title mt-1.5">{phase.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                            {phase.body}
                          </p>
                        </div>
                      </div>
                    </article>

                    {!isLast ? (
                      <ArrowRight
                        className="pointer-events-none absolute top-1/2 -right-3 z-10 hidden size-5 -translate-y-1/2 translate-x-1/2 text-[#1E60FF] lg:block"
                        strokeWidth={2}
                        aria-hidden
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={processPage.cta.headline}
        headlineAccent={processPage.cta.headlineAccent}
        support={processPage.cta.support}
        primary={cta.primary}
        secondary={{ label: "View services", href: "/services" }}
      />
    </main>
  );
}
