"use client";

import { motion } from "framer-motion";
import { Clock3, Play, Rocket, Star, Users } from "lucide-react";
import { HeroRise } from "@/components/effects/HeroRise";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { cta } from "@/content/site";
import { cn } from "@/lib/cn";
import { heroToneAttrs } from "@/lib/heroTone";

const heroStats = [
  {
    value: "150+",
    label: "Skilled Engineers",
    icon: Users,
    tint: "bg-[#E8F0FF] text-[#1E60FF]",
  },
  {
    value: "100%",
    label: "Remote & Flexible",
    icon: Clock3,
    tint: "bg-[#E8FBF0] text-[#16A34A]",
  },
  {
    value: "50+",
    label: "Successful Projects",
    icon: Rocket,
    tint: "bg-[#F3E8FF] text-[#7C3AED]",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Star,
    tint: "bg-[#E0F7FF] text-[#0284C7]",
  },
];

export function Hero() {
  return (
    <section
      id="home-hero"
      {...heroToneAttrs(media.landing.src)}
      className="hero-copy relative z-20 h-svh min-h-svh overflow-hidden"
    >
      {/* Layer 1 — full-bleed photograph (no color washes — keep image clear) */}
      <SafeImage
        src={media.landing.src}
        alt={media.landing.alt}
        fill
        priority
        className="border-0 object-cover object-center outline-none ring-0"
      />

      {/* Layer 2 — content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 items-center px-5 pt-[var(--ttp-header-h)] sm:px-8 md:px-[9%] lg:px-[10%]">
          <HeroRise className="max-w-[600px] -translate-y-[4%] md:-translate-y-[6%]">
            <h1 className="hero-copy-text font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.98] tracking-tight">
              <span className="block text-[var(--hero-title)]">Build the team.</span>
              <span className="mt-1 block text-[var(--hero-accent)]">Ship the system.</span>
            </h1>

            <p className="hero-copy-text mt-5 max-w-[520px] text-[17px] leading-[1.6] font-medium text-[var(--hero-support)] md:text-lg">
              {home.hero.support}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={cta.primary.href}
                className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#246BFF] px-[26px] text-sm font-semibold text-white shadow-[0_10px_28px_rgba(36,107,255,0.28)] transition-colors hover:bg-[#3B7AFF]"
              >
                {cta.primary.label}
              </Link>
              <Link
                href={cta.secondary.href}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-[#051937]/16 bg-white/70 px-[26px] text-sm font-semibold text-[#051937] shadow-[0_4px_18px_rgba(20,50,100,0.1)] backdrop-blur-md transition-colors hover:bg-white/90"
              >
                <Play className="size-3.5 fill-current" aria-hidden />
                {cta.secondary.label}
              </Link>
            </div>
          </HeroRise>
        </div>

        {/* Floating glass stats — overlaps bottom of photograph */}
        <div className="mx-auto w-full max-w-[1180px] shrink-0 px-4 pb-3.5 md:px-6 md:pb-4">
          <motion.div
            className="rounded-[1.75rem] border border-white/55 bg-white/88 px-3 py-4 shadow-[0_16px_40px_rgba(28,58,110,0.12)] backdrop-blur-[20px] sm:px-4 md:rounded-[2rem] md:px-2 md:py-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <dl className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
              {heroStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={cn(
                      "flex items-center gap-3 px-2 sm:px-3 md:justify-center md:px-4",
                      i > 0 && "md:border-l md:border-[#051937]/08",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full md:size-10",
                        stat.tint,
                      )}
                    >
                      <Icon className="size-4 md:size-[1.125rem]" aria-hidden />
                    </span>
                    <div>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="font-display text-[1.35rem] font-bold tracking-tight text-[#051937] md:text-[1.55rem]">
                        {stat.value}
                      </dd>
                      <p className="text-[13px] font-medium text-[#64748B] md:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
