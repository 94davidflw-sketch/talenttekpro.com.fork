import type { Metadata } from "next";
import {
  Brain,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Compass,
  FileSignature,
  Folders,
  Handshake,
  HeartPulse,
  Layers,
  Search,
  ShieldCheck,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { servicesPage } from "@/content/services";
import { media } from "@/content/media";
import { cta } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: servicesPage.metaTitle,
  description: servicesPage.metaDescription,
};

const tones = [
  {
    iconBg: "bg-[#1E60FF]",
    check: "text-[#1E60FF]",
    num: "text-blue-300",
    corner: "bg-[#DBEAFE]",
  },
  {
    iconBg: "bg-[#0D9488]",
    check: "text-[#0D9488]",
    num: "text-teal-300",
    corner: "bg-[#CCFBF1]",
  },
  {
    iconBg: "bg-[#0284C7]",
    check: "text-[#0284C7]",
    num: "text-sky-300",
    corner: "bg-[#E0F2FE]",
  },
  {
    iconBg: "bg-[#2563EB]",
    check: "text-[#2563EB]",
    num: "text-blue-300",
    corner: "bg-[#DBEAFE]",
  },
  {
    iconBg: "bg-[#0891B2]",
    check: "text-[#0891B2]",
    num: "text-cyan-300",
    corner: "bg-[#CFFAFE]",
  },
  {
    iconBg: "bg-[#16A34A]",
    check: "text-[#16A34A]",
    num: "text-green-300",
    corner: "bg-[#DCFCE7]",
  },
  {
    iconBg: "bg-[#1E60FF]",
    check: "text-[#1E60FF]",
    num: "text-blue-300",
    corner: "bg-[#EFF6FF]",
  },
  {
    iconBg: "bg-[#059669]",
    check: "text-[#059669]",
    num: "text-emerald-300",
    corner: "bg-[#D1FAE5]",
  },
] as const;

const icons: LucideIcon[] = [
  Users,
  UsersRound,
  FileSignature,
  Brain,
  Code2,
  Cloud,
  Compass,
  HeartPulse,
];

const modelMeta: {
  icon: LucideIcon;
  iconWrap: string;
  iconColor: string;
}[] = [
  {
    icon: Folders,
    iconWrap: "bg-[#EFF6FF]",
    iconColor: "text-[#1E60FF]",
  },
  {
    icon: UsersRound,
    iconWrap: "bg-[#ECFEFF]",
    iconColor: "text-[#0891B2]",
  },
  {
    icon: Handshake,
    iconWrap: "bg-[#F0FDF4]",
    iconColor: "text-[#16A34A]",
  },
  {
    icon: Search,
    iconWrap: "bg-[#EFF6FF]",
    iconColor: "text-[#2563EB]",
  },
  {
    icon: ShieldCheck,
    iconWrap: "bg-[#CCFBF1]",
    iconColor: "text-[#0D9488]",
  },
  {
    icon: Layers,
    iconWrap: "bg-[#DBEAFE]",
    iconColor: "text-[#1E60FF]",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHero
        layout="viewport"
        className="hero--clear hero--m-clean"
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        titleAccent={servicesPage.hero.titleAccent}
        support={servicesPage.hero.support}
        image={media.servicesHero}
      />

      {/* Integrated intro: text + pillars, no second image */}
      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-20 -right-10 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="cloud" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase">
                How we work
              </p>
              <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
              <h2 className="section-title mt-5">
                {servicesPage.integrated.headline}{" "}
                <span className="hero-gradient-text">
                  {servicesPage.integrated.headlineAccent}
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#64748B] md:text-lg">
                {servicesPage.integrated.body}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
              {servicesPage.integrated.pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="relative border-t border-[#1E60FF]/20 pt-6"
                >
                  <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#1E60FF]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="card-title mt-3">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Disciplines */}
      <section className="relative z-[1] overflow-visible bg-[#F5F9FC] section-pad">
        <SectionEdge fill="#F5F9FC" variant="wave" position="top" />
        <ScrollShape
          className="top-[28%] -left-12 h-48 w-52 text-[#1E60FF] md:h-64 md:w-64"
        >
          <SoftRegion variant="pebble" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase">
                Disciplines
              </p>
              <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
              <h2 className="section-title mt-5">
                {servicesPage.disciplines.headline}{" "}
                <span className="hero-gradient-text">
                  {servicesPage.disciplines.headlineAccent}
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
                {servicesPage.disciplines.support}
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {servicesPage.disciplines.items.map((d, i) => {
                const tone = tones[i % tones.length];
                const Icon = icons[i % icons.length];
                return (
                  <article
                    key={d.id}
                    id={d.id}
                    className="group relative flex min-h-[280px] scroll-mt-28 flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(5,25,55,0.06)]"
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <span
                        className={cn(
                          "grid size-11 shrink-0 place-items-center rounded-2xl text-white shadow-sm",
                          tone.iconBg,
                        )}
                      >
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span
                        className={cn(
                          "font-display text-2xl font-semibold tracking-tight",
                          tone.num,
                        )}
                      >
                        {d.num}
                      </span>
                    </div>

                    <h3 className="card-title relative z-10 mt-5">{d.title}</h3>
                    <p className="relative z-10 mt-2 text-sm text-[#94A3B8]">
                      {d.aim}
                    </p>

                    <ul className="relative z-10 mt-4 flex-1 space-y-2.5">
                      {d.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm leading-snug text-[#64748B]"
                        >
                          <Check
                            className={cn("mt-0.5 size-4 shrink-0", tone.check)}
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={cn(
                        "pointer-events-none absolute right-0 bottom-0 size-[5.5rem] rounded-tl-full",
                        tone.corner,
                      )}
                      aria-hidden
                    />
                  </article>
                );
              })}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Engagement models */}
      <section className="relative z-[1] overflow-visible bg-[#F8FBFE] section-pad">
        <SectionEdge fill="#F8FBFE" variant="bump" position="top" />
        <ScrollShape
          className="bottom-12 -right-6 h-36 w-44 text-[#00B4FF] md:h-48 md:w-56"
          reverse
        >
          <SoftRegion variant="bean" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase">
                  Engagement
                </p>
                <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
                <h2 className="section-title mt-5">
                  {servicesPage.models.headline}{" "}
                  <span className="hero-gradient-text">
                    {servicesPage.models.headlineAccent}
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#64748B] md:text-lg">
                  {servicesPage.models.support}
                </p>
              </div>
              <p className="inline-flex items-center gap-2 text-sm text-[#64748B] lg:pb-1">
                <BriefcaseBusiness
                  className="size-4 text-[#1E60FF]"
                  aria-hidden
                />
                Combine models under one partner
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {servicesPage.models.items.map((m, i) => {
                const meta = modelMeta[i % modelMeta.length];
                const Icon = meta.icon;
                return (
                  <article
                    key={m.id}
                    className="group flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-[0_14px_40px_rgba(5,25,55,0.06)] transition-transform duration-300 hover:-translate-y-1 md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={cn(
                          "grid size-12 place-items-center rounded-[0.9rem]",
                          meta.iconWrap,
                          meta.iconColor,
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#94A3B8]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="card-title mt-6">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#1E60FF]">
                      {m.aim}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748B]">
                      {m.body}
                    </p>

                    <div className="mt-6 flex items-end justify-between gap-3 border-t border-[#1E60FF]/10 pt-5">
                      <div>
                        <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-[#94A3B8] uppercase">
                          Best for
                        </p>
                        <p className="mt-1 text-sm text-[#475569]">{m.bestFor}</p>
                      </div>
                      <p className="shrink-0 text-sm font-semibold text-[#1E60FF]">
                        {m.price}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={servicesPage.cta.headline}
        headlineAccent={servicesPage.cta.headlineAccent}
        support={servicesPage.cta.support}
        primary={cta.proposal}
      />
    </main>
  );
}
