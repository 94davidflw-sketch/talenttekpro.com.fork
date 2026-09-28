"use client";

import {
  Building2,
  Factory,
  HeartPulse,
  ShoppingCart,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

const tones: Record<
  string,
  { iconWrap: string; icon: string; dot: string; tag: string; panel: string }
> = {
  blue: {
    iconWrap: "bg-[#EFF6FF]",
    icon: "text-[#1E60FF]",
    dot: "bg-[#1E60FF]",
    tag: "text-[#1E60FF]",
    panel: "border-[#1E60FF]/12",
  },
  teal: {
    iconWrap: "bg-[#ECFDF5]",
    icon: "text-[#0D9488]",
    dot: "bg-[#0D9488]",
    tag: "text-[#0D9488]",
    panel: "border-[#0D9488]/12",
  },
  violet: {
    iconWrap: "bg-[#F5F3FF]",
    icon: "text-[#7C3AED]",
    dot: "bg-[#7C3AED]",
    tag: "text-[#7C3AED]",
    panel: "border-[#7C3AED]/12",
  },
  orange: {
    iconWrap: "bg-[#FFF7ED]",
    icon: "text-[#EA580C]",
    dot: "bg-[#EA580C]",
    tag: "text-[#EA580C]",
    panel: "border-[#EA580C]/12",
  },
  sky: {
    iconWrap: "bg-[#F0F9FF]",
    icon: "text-[#0284C7]",
    dot: "bg-[#0284C7]",
    tag: "text-[#0284C7]",
    panel: "border-[#0284C7]/12",
  },
};

const icons: Record<string, LucideIcon> = {
  Logistics: Truck,
  Healthcare: HeartPulse,
  Manufacturing: Factory,
  Retail: ShoppingCart,
  Energy: Zap,
};

type IndustryItem = (typeof home.industries.items)[number];

function MarqueePills({
  items,
  trackKey,
}: {
  items: readonly IndustryItem[];
  trackKey: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={trackKey === "b"}>
      {items.map((item, i) => {
        const Icon = icons[item.title] ?? Building2;
        const tone = tones[item.tone] ?? tones.blue;
        return (
          <span
            key={`${trackKey}-${item.title}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[#D7E4F0] bg-white px-4 py-2.5 text-sm font-medium whitespace-nowrap text-[#051937] shadow-[0_8px_22px_rgba(5,25,55,0.05)]"
          >
            <span
              className={cn(
                "grid size-7 place-items-center rounded-full",
                tone.iconWrap,
                tone.icon,
              )}
            >
              <Icon className="size-3.5" strokeWidth={2} aria-hidden />
            </span>
            {item.title}
          </span>
        );
      })}
    </div>
  );
}

export function Industries() {
  const items = home.industries.items;
  const loopItems = [...items, ...items, ...items];

  return (
    <section
      id="industries"
      className="relative z-[1] scroll-mt-28 overflow-visible bg-white section-pad"
    >
      <SectionEdge fill="#ffffff" variant="soft" position="top" />
      <ScrollShape
        className="bottom-[12%] -left-14 h-52 w-44 text-[#00B4FF] md:h-64 md:w-56"
        reverse
      >
        <SoftRegion variant="petal" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase md:text-sm">
              {home.industries.eyebrow}
            </p>
            <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
            <h2 className="section-title mt-5">
              {home.industries.headline}{" "}
              <span className="hero-gradient-text">
                {home.industries.headlineAccent}
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#64748B] md:text-lg">
              {home.industries.support}
            </p>
          </div>
        </RevealOnScroll>
      </Container>

      <Container className="relative z-10 mt-10">
        <div className="marquee-fade overflow-x-clip">
          <div className="animate-marquee flex w-max">
            <MarqueePills items={loopItems} trackKey="a" />
            <MarqueePills items={loopItems} trackKey="b" />
          </div>
        </div>
      </Container>

      <Container className="relative z-10 mt-12">
        <RevealOnScroll>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {items.map((item) => {
              const tone = tones[item.tone] ?? tones.blue;
              const Icon = icons[item.title] ?? Building2;
              return (
                <article
                  key={item.title}
                  className={cn(
                    "flex h-full flex-col rounded-[1.5rem] border bg-white p-6 shadow-[0_16px_40px_rgba(5,25,55,0.06)] transition-transform duration-300 hover:-translate-y-1",
                    tone.panel,
                  )}
                >
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-[0.9rem]",
                      tone.iconWrap,
                      tone.icon,
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>

                  <h3 className="card-title mt-6">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>

                  <p
                    className={cn(
                      "mt-6 flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase",
                      tone.tag,
                    )}
                  >
                    <span
                      className={cn("size-1.5 shrink-0 rounded-full", tone.dot)}
                      aria-hidden
                    />
                    {item.tag}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10">
            <LinkArrow href="/contact">Discuss your industry</LinkArrow>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
