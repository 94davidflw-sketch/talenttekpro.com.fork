import {
  Brain,
  Globe2,
  GraduationCap,
  HeartPulse,
  Laptop,
  Sparkles,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { careersPage } from "@/content/careers";
import { media } from "@/content/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: careersPage.metaTitle,
  description: careersPage.metaDescription,
};

const benefitIcons = [
  Globe2,
  GraduationCap,
  Laptop,
  HeartPulse,
  Sparkles,
  Users,
] as const;

const cultureIcons = [Users, Sparkles, Brain, Globe2] as const;

export default function CareersPage() {
  return (
    <main className="flex-1">
      <PageHero
        layout="viewport"
        className="hero-open hero--light-overlay hero--veil-strong hero--m-photo"
        mobileActions={[
          { href: "#open-roles", label: "See open roles →", variant: "primary" },
          { href: "/about", label: "Learn about our team", variant: "ghost" },
        ]}
        eyebrow={careersPage.hero.eyebrow}
        title={careersPage.hero.title}
        titleAccent={careersPage.hero.titleAccent}
        support={careersPage.hero.support}
        image={media.careersHero}
      />

      {/* Benefits */}
      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-16 -right-8 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="cloud" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {careersPage.benefits.headline}{" "}
              <span className="hero-gradient-text">
                {careersPage.benefits.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              {careersPage.benefits.support}
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {careersPage.benefits.items.map((item, i) => {
                const Icon = benefitIcons[i] ?? Sparkles;
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

      {/* Culture */}
      <section className="relative z-[1] overflow-visible bg-[#F0F7FC] section-pad">
        <SectionEdge fill="#F0F7FC" variant="wave" position="top" />
        <ScrollShape
          className="bottom-12 -left-6 h-36 w-44 text-[#1E60FF] md:h-48 md:w-56"
        >
          <SoftRegion variant="kidney" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {careersPage.culture.headline}{" "}
              <span className="hero-gradient-text">
                {careersPage.culture.headlineAccent}
              </span>
            </h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {careersPage.culture.items.map((item, i) => {
                const Icon = cultureIcons[i] ?? Sparkles;
                return (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#1E60FF] shadow-[0_8px_24px_rgba(5,25,55,0.06)]">
                      <Icon className="size-4" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748B] md:text-[0.95rem]">
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

      {/* Open roles */}
      <section
        id="open-roles"
        className="relative z-[1] scroll-mt-28 overflow-visible bg-[#EAF3FB] section-pad"
      >
        <SectionEdge fill="#EAF3FB" variant="bump" position="top" />
        <ScrollShape
          className="top-20 -right-4 h-36 w-44 text-[#1E60FF] md:h-48 md:w-56"
          reverse
        >
          <SoftRegion variant="amoeba" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {careersPage.roles.headline}{" "}
              <span className="hero-gradient-text">
                {careersPage.roles.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
              {careersPage.roles.applyNote}
            </p>
            <ul className="mt-10 divide-y divide-[#D7E4F0] border-y border-[#D7E4F0]">
              {careersPage.roles.items.map((role) => (
                <li
                  key={role.slug}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                      {role.track}
                    </p>
                    <p className="card-title mt-1.5">{role.title}</p>
                    <p className="mt-1 text-sm text-[#64748B]">{role.location}</p>
                  </div>
                  <Button
                    href={`/careers/${role.slug}`}
                    variant="secondary"
                    className="shrink-0 rounded-full"
                  >
                    Apply →
                  </Button>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={careersPage.cta.headline}
        headlineAccent={careersPage.cta.headlineAccent}
        support={careersPage.cta.support}
        primary={{ label: "View open roles →", href: "#open-roles" }}
        showEmail
      />
    </main>
  );
}
