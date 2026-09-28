"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  HeartPulse,
  Factory,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SafeImage } from "@/components/ui/SafeImage";
import { home } from "@/content/home";
import { projects, type Project } from "@/content/projects";
import { SectionEdge } from "@/components/ui/SectionShell";
import { cn } from "@/lib/cn";

const categoryMeta: Record<
  string,
  { icon: LucideIcon; className: string }
> = {
  "Web App": {
    icon: Smartphone,
    className: "bg-[#1E60FF] text-white",
  },
  Healthcare: {
    icon: HeartPulse,
    className: "bg-[#0D9488] text-white",
  },
  "E-commerce": {
    icon: ShoppingBag,
    className: "bg-[#7C3AED] text-white",
  },
  SaaS: {
    icon: Building2,
    className: "bg-[#0284C7] text-white",
  },
  Industrial: {
    icon: Factory,
    className: "bg-[#475569] text-white",
  },
};

const tagTones = [
  "bg-[#EFF6FF] text-[#1E60FF]",
  "bg-[#ECFEFF] text-[#0891B2]",
  "bg-[#F5F3FF] text-[#7C3AED]",
  "bg-[#F0FDF4] text-[#16A34A]",
] as const;

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const meta = categoryMeta[project.category] ?? {
    icon: Sparkles,
    className: "bg-[#1E60FF] text-white",
  };
  const CatIcon = meta.icon;

  return (
    <Link
      href={project.href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_14px_40px_rgba(5,25,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(5,25,55,0.12)]",
        featured && "lg:h-full",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[280px] lg:flex-1" : "aspect-[16/11]",
        )}
      >
        <SafeImage
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={featured}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span
          className={cn(
            "absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide shadow-sm",
            meta.className,
          )}
        >
          <CatIcon className="size-3.5" aria-hidden />
          {project.category}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          featured ? "p-5 md:p-6" : "p-4 md:p-5",
        )}
      >
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium",
                tagTones[i % tagTones.length],
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={cn(
            "card-title mt-3 transition-colors group-hover:text-[#1E60FF]",
          )}
        >
          {project.title}
        </h3>
        <p
          className={cn(
            "mt-2 leading-relaxed text-[#64748B]",
            featured ? "text-sm" : "line-clamp-2 text-xs md:text-sm",
          )}
        >
          {project.description}
        </p>

        {featured && project.href === "/projects/dating-web-app" ? (
          <div className="relative mt-4 hidden min-h-[7.5rem] flex-1 overflow-hidden rounded-2xl lg:block">
            <SafeImage
              src="/media/cases/dating-detail.png"
              alt="A phone showing a dating match with a soft blue heart between two profiles."
              fill
              className="object-cover object-center"
            />
          </div>
        ) : null}

        <div
          className={cn(
            "flex items-center justify-between pt-5",
            featured && project.href === "/projects/dating-web-app"
              ? "mt-auto lg:mt-4"
              : "mt-auto",
          )}
        >
          <div className="flex items-center gap-3 text-xs text-[#64748B]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5 text-[#94A3B8]" aria-hidden />
              {project.year}
            </span>
            {featured ? (
              <span className="inline-flex items-center gap-1 font-medium text-[#1E60FF]">
                <Star className="size-3.5 fill-current" aria-hidden />
                Featured
              </span>
            ) : null}
          </div>
          <span
            className={cn(
              "grid place-items-center rounded-full border border-[#1E60FF]/25 text-[#1E60FF] transition-colors group-hover:border-[#1E60FF] group-hover:bg-[#1E60FF] group-hover:text-white",
              featured ? "size-11" : "size-9",
            )}
            aria-hidden
          >
            <ArrowUpRight className={featured ? "size-5" : "size-4"} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CaseStudies() {
  const [featured, ...rest] = projects;
  const secondary = rest.slice(0, 4);

  return (
    <section className="relative z-[1] overflow-visible bg-[#F0F7FC] section-pad">
      <SectionEdge fill="#F0F7FC" variant="soft" position="top" />
      {/* One shape: soft ribbon region */}
      <ScrollShape
        className="left-[6%] top-[40%] h-36 w-52 text-[#1E60FF] md:h-44 md:w-60"
      >
        <SoftRegion variant="ribbon" />
      </ScrollShape>
      <Container>
        <RevealOnScroll>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase md:text-sm">
                {home.cases.eyebrow}
              </p>
              <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
              <h2 className="section-title mt-5">
                Work that{" "}
                <span className="hero-gradient-text">hired</span> and{" "}
                <span className="hero-gradient-text">shipped.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748B] md:text-lg">
                {home.cases.support}
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#1E60FF] transition-colors hover:text-[#051937]"
            >
              View all projects
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
            <ProjectCard project={featured} featured />
            <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              {secondary.map((item) => (
                <ProjectCard key={item.href} project={item} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
