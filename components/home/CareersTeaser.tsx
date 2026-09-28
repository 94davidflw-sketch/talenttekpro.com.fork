"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { home } from "@/content/home";
import { SectionEdge } from "@/components/ui/SectionShell";

export function CareersTeaser() {
  return (
    <section className="relative z-[1] overflow-visible bg-[#F0F7FC] section-pad">
      <SectionEdge fill="#F0F7FC" variant="soft" position="top" />
      {/* Soft twin-lobe region */}
      <ScrollShape
        className="top-[30%] right-[12%] h-32 w-44 text-[#1E60FF] md:h-40 md:w-52"
        reverse
      >
        <SoftRegion variant="bean" />
      </ScrollShape>

      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-title">
                {home.careers.headline}{" "}
                <span className="hero-gradient-text">
                  {home.careers.headlineAccent}
                </span>
              </h2>
            </div>
            <LinkArrow href="/careers">All roles</LinkArrow>
          </div>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {home.careers.roles.map((role) => (
              <li key={role.title}>
                <Link
                  href={role.href}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs tracking-wide text-faint uppercase">
                      {role.track}
                    </p>
                    <p className="card-title mt-1 transition-colors group-hover:text-teal">
                      {role.title}
                    </p>
                  </div>
                  <p className="text-sm text-muted group-hover:text-teal">
                    {role.location} →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
