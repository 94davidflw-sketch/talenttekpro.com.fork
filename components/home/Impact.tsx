"use client";

import {
  Activity,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Globe2,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/effects/CountUp";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { SectionEdge } from "@/components/ui/SectionShell";

const metricIcons: LucideIcon[] = [
  Star,
  BriefcaseBusiness,
  Globe2,
  Activity,
  Building2,
  CalendarDays,
];

const metricAccents = [
  "bg-[#EFF6FF] text-[#1E60FF]",
  "bg-[#ECFEFF] text-[#0891B2]",
  "bg-[#F0F9FF] text-[#0284C7]",
  "bg-[#EEF2FF] text-[#4F46E5]",
  "bg-[#F0FDFA] text-[#0D9488]",
  "bg-[#EFF6FF] text-[#2563EB]",
] as const;

export function Impact() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#EAF3FB] pt-8 pb-14 md:pt-28 md:pb-28">
      <SectionEdge fill="#EAF3FB" variant="bump" position="top" />
      {/* Soft amoeba region */}
      <ScrollShape
        className="top-[22%] left-[8%] h-48 w-40 text-[#1E60FF] md:h-60 md:w-48"
      >
        <SoftRegion variant="kidney" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#1E60FF] uppercase">
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
              {home.impact.eyebrow}
              <span className="inline-block h-px w-5 bg-[#1E60FF]" aria-hidden />
            </p>
            <h2 className="section-title mt-2.5 md:mt-4">
              {home.impact.headline}{" "}
              <span className="hero-gradient-text">
                {home.impact.headlineAccent}
              </span>
            </h2>
          </div>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3 lg:gap-6">
            {home.impact.metrics.map((metric, i) => {
              const Icon = metricIcons[i % metricIcons.length];
              const accent = metricAccents[i % metricAccents.length];
              return (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-2xl bg-white/95 p-5 shadow-[0_16px_48px_rgba(5,25,55,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(5,25,55,0.12)] md:rounded-3xl md:p-7"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-[#E8F3FF]"
                    aria-hidden
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "grid size-10 place-items-center rounded-2xl md:size-11",
                        accent,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                  </div>

                  <p className="font-display relative mt-4 bg-gradient-to-r from-[#1E60FF] to-[#00D2FF] bg-clip-text text-[2rem] font-bold leading-none tracking-tight text-transparent md:mt-8 md:text-[clamp(2.4rem,3.5vw,3.25rem)]">
                    <CountUp value={metric.value} suffix={metric.suffix} />
                  </p>

                  <h3 className="relative mt-3 text-sm font-semibold tracking-wide text-[#051937] capitalize md:mt-4">
                    {metric.label}
                  </h3>
                  <p className="relative mt-1 text-sm leading-snug text-[#64748B] md:mt-2 md:leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
