"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { SafeImage } from "@/components/ui/SafeImage";
import { home } from "@/content/home";
import { media } from "@/content/media";

export function Manifesto() {
  return (
    <section className="relative z-[1] overflow-visible bg-white pt-12 pb-14 md:pt-24 md:pb-28">
      <SectionEdge fill="#ffffff" variant="wave" position="top" />

      <ScrollShape
        className="top-[12%] right-[22%] h-44 w-36 text-[#1E60FF] md:h-56 md:w-44"
        reverse
      >
        <SoftRegion variant="droplet" />
      </ScrollShape>

      <Container className="relative z-10">
        <RevealOnScroll>
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="max-w-xl">
              <h2 className="section-title">
                {home.manifesto.headline}{" "}
                <span className="hero-gradient-text">
                  {home.manifesto.headlineAccent}
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748B] md:mt-6 md:text-lg">
                {home.manifesto.body}
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl">
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
  );
}
