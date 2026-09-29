import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { GetStarted } from "@/components/home/GetStarted";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/effects/CountUp";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { SafeImage } from "@/components/ui/SafeImage";
import { aboutPage } from "@/content/about";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHero
        layout="viewport"
        className="hero-open hero--light-overlay hero--m-lines"
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        titleAccent={aboutPage.hero.titleAccent}
        support={aboutPage.hero.support}
        image={media.aboutHero}
      />

      {/* Who we are */}
      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-20 -right-10 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="pebble" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <h2 className="section-title">
                  {aboutPage.who.headline}{" "}
                  <span className="hero-gradient-text">
                    {aboutPage.who.headlineAccent}
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B]">
                  {aboutPage.who.body}
                </p>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(5,25,55,0.12)] md:rounded-[1.75rem] lg:col-span-6">
                <SafeImage
                  src={media.manifesto.src}
                  alt={media.manifesto.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Metrics */}
      <section className="relative z-[1] overflow-visible bg-[#F0F7FC] section-pad">
        <SectionEdge fill="#F0F7FC" variant="wave" position="top" />
        <ScrollShape
          className="bottom-10 -left-8 h-36 w-44 text-[#1E60FF] md:h-48 md:w-52"
        >
          <SoftRegion variant="wave" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title text-center">
              {aboutPage.metrics.headline}{" "}
              <span className="hero-gradient-text">
                {aboutPage.metrics.headlineAccent}
              </span>
            </h2>
            <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aboutPage.metrics.items.map((m) => (
                <div
                  key={m.label}
                  className="rounded-[1.35rem] bg-white px-6 py-7 shadow-[0_14px_36px_rgba(5,25,55,0.06)]"
                >
                  <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                    {m.label}
                  </dt>
                  <dd className="font-display mt-3 text-4xl font-bold tracking-tight text-[#1E60FF] md:text-5xl">
                    <CountUp value={m.value} suffix={m.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Principles */}
      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="bump" position="top" />
        <ScrollShape
          className="top-16 -right-6 h-40 w-44 text-[#00B4FF] md:h-52 md:w-56"
          reverse
        >
          <SoftRegion variant="softFacet" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {aboutPage.principles.headline}{" "}
              <span className="hero-gradient-text">
                {aboutPage.principles.headlineAccent}
              </span>
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {aboutPage.principles.items.map((p) => (
                <article key={p.num} className="border-t-2 border-[#1E60FF]/35 pt-5">
                  <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                    {p.num}
                  </p>
                  <h3 className="card-title mt-2">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Timeline */}
      <section className="relative z-[1] overflow-visible bg-[#EAF3FB] section-pad">
        <SectionEdge fill="#EAF3FB" variant="valley" position="top" />
        <ScrollShape
          className="top-24 -left-6 h-36 w-44 text-[#1E60FF] md:h-48 md:w-52"
        >
          <SoftRegion variant="swirl" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <h2 className="section-title">
              {aboutPage.timeline.headline}{" "}
              <span className="hero-gradient-text">
                {aboutPage.timeline.headlineAccent}
              </span>
            </h2>
            <ol className="mt-10 space-y-8 border-l-2 border-[#1E60FF]/25 pl-8">
              {aboutPage.timeline.items.map((t) => (
                <li key={t.year} className="relative">
                  <span
                    className="absolute top-1.5 -left-[2.45rem] size-3 rounded-full bg-[#1E60FF]"
                    aria-hidden
                  />
                  <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                    {t.year}
                  </p>
                  <p className="mt-1.5 text-base leading-relaxed text-[#64748B]">
                    {t.event}
                  </p>
                </li>
              ))}
            </ol>
          </RevealOnScroll>
        </Container>
      </section>

      <GetStarted />
    </main>
  );
}
