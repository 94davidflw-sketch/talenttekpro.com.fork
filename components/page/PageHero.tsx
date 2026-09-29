import Link from "next/link";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroRise } from "@/components/effects/HeroRise";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { SectionEdge } from "@/components/ui/SectionShell";
import { PromptMedia, type PromptMediaAsset } from "@/components/ui/PromptMedia";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/cn";
import { heroToneAttrs } from "@/lib/heroTone";

type PageHeroStat = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Optional trailing phrase rendered with hero-gradient-text */
  titleAccent?: string;
  support?: string;
  image?: PromptMediaAsset;
  /** Optional metrics row under the hero copy/media */
  stats?: readonly PageHeroStat[];
  className?: string;
  /** Phone-only hero buttons. Hidden from the md breakpoint up. */
  mobileActions?: readonly {
    href: string;
    label: string;
    variant: "primary" | "ghost";
  }[];
  /**
   * split: copy beside a framed photo.
   * viewport: full-screen photograph with copy over it, matching the home hero.
   */
  layout?: "split" | "viewport";
};

function isFinalMedia(image: PromptMediaAsset) {
  return image.src.startsWith("/media/") || image.src === image.path;
}

/**
 * Shared inner-page hero: matches landing typography (section-title scale),
 * light brand band, and optional curved photo edge.
 */
export function PageHero({
  eyebrow,
  title,
  titleAccent,
  support,
  image,
  stats,
  className,
  mobileActions,
  layout = "split",
}: PageHeroProps) {
  if (layout === "viewport" && image && isFinalMedia(image)) {
    return (
      <header
        id="page-hero"
        {...heroToneAttrs(image.src)}
        className={cn(
          "hero-copy relative z-20 h-svh min-h-svh overflow-hidden",
          className,
        )}
      >
        <picture className="pointer-events-none absolute inset-0 block">
          {image.mobileSrc ? (
            <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
          ) : null}
          <img
            src={image.src}
            alt={image.alt}
            decoding="async"
            fetchPriority="high"
            className="hero-photo absolute inset-0 h-full w-full border-0 object-cover object-center outline-none ring-0"
            suppressHydrationWarning
          />
        </picture>
        <div className="hero-content relative z-10 flex h-full flex-col">
          <div className="flex flex-1 items-start px-5 pt-28 pb-10 sm:px-8 md:px-[9%] md:pt-[max(5.5rem,calc(50svh-11.875rem))] md:pb-0 lg:px-[10%]">
            <HeroRise className="hero-plate relative w-full max-w-[600px]">
              <div className="absolute bottom-full left-0 mb-4 md:mb-5">
                <p className="hero-copy-text text-[0.75rem] font-medium tracking-[0.16em] text-[var(--hero-eyebrow)] uppercase md:text-[1.75rem]">
                  {eyebrow}
                </p>
                <span
                  className="mt-3 block h-px w-20 bg-[var(--hero-rule)]"
                  aria-hidden
                />
              </div>
              <h1 className="hero-copy-text font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[0.98] tracking-tight">
                <span
                  className={cn(
                    "block text-[var(--hero-title)]",
                    titleAccent && "whitespace-nowrap",
                  )}
                >
                  {title}
                </span>
                {titleAccent ? (
                  <span className="mt-1 block whitespace-nowrap text-[var(--hero-accent)]">
                    {titleAccent}
                  </span>
                ) : null}
              </h1>
              {support ? (
                <p className="hero-support hero-copy-text mt-4 max-w-[520px] text-[15px] leading-[1.55] font-medium text-[var(--hero-support)] md:mt-5 md:text-lg md:leading-[1.6]">
                  {support}
                </p>
              ) : null}
              {mobileActions && mobileActions.length > 0 ? (
                <div className="hero-mobile-actions mt-6 flex w-full max-w-[520px] flex-col gap-3 md:hidden">
                  {mobileActions.map((action) =>
                    action.variant === "primary" ? (
                      <Link
                        key={action.href + action.label}
                        href={action.href}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#1769FF] px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(23,105,255,0.28)]"
                      >
                        {action.label}
                      </Link>
                    ) : (
                      <Link
                        key={action.href + action.label}
                        href={action.href}
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#071B3A]/12 bg-white px-6 text-[15px] font-semibold text-[#071B3A] shadow-[0_4px_16px_rgba(7,27,58,0.06)]"
                      >
                        <Play className="size-3.5 fill-current" aria-hidden />
                        {action.label}
                      </Link>
                    ),
                  )}
                </div>
              ) : null}
              {stats && stats.length > 0 ? (
                <dl
                  className={cn(
                    "mt-8 grid gap-x-8 gap-y-4",
                    stats.length === 3
                      ? "grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-4",
                  )}
                >
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dt className="hero-copy-text text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--hero-stat)] uppercase">
                        {s.label}
                      </dt>
                      <dd className="hero-copy-text font-display mt-1 text-2xl font-bold tracking-tight text-[var(--hero-value)] md:text-3xl">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </HeroRise>
          </div>
        </div>
      </header>
    );
  }

  // Stats heroes use white so the curve into the next soft-blue band reads clearly
  const fill = stats && stats.length > 0 ? "#ffffff" : "#F5F9FC";

  return (
    <header
      className={cn(
        "relative z-[1] overflow-visible pt-12 pb-16 md:pt-16 md:pb-20",
        fill === "#ffffff" ? "bg-white" : "bg-[#F5F9FC]",
        className,
      )}
    >
      <SectionEdge fill={fill} variant="soft" position="bottom" />
      <Container className="relative z-10">
        <RevealOnScroll>
          <div>
            <p className="text-[1.625rem] font-medium tracking-[0.16em] text-[#475569] uppercase md:text-[1.75rem]">
              {eyebrow}
            </p>
            <span className="mt-3 block h-px w-20 bg-[#1E60FF]" aria-hidden />
          </div>
          <div
            className={
              image
                ? "mt-6 grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
                : "mt-6"
            }
          >
            <div className={image ? "lg:col-span-6" : "max-w-3xl"}>
              <h1 className="section-title">
                <span className="block">{title}</span>
                {titleAccent ? (
                  <span className="mt-1 block hero-gradient-text">
                    {titleAccent}
                  </span>
                ) : null}
              </h1>
              {support ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B] md:text-lg">
                  {support}
                </p>
              ) : null}
            </div>
            {image ? (
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(5,25,55,0.12)] md:rounded-[1.75rem] lg:col-span-6">
                {isFinalMedia(image) ? (
                  <SafeImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    className="object-cover"
                  />
                ) : (
                  <PromptMedia
                    asset={image}
                    priority
                    className="absolute inset-0 h-full w-full"
                  />
                )}
              </div>
            ) : null}
          </div>
          {stats && stats.length > 0 ? (
            <dl
              className={cn(
                "mt-10 grid gap-5 md:gap-6",
                stats.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-2 md:grid-cols-4",
              )}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                    {s.label}
                  </dt>
                  <dd className="font-display mt-2 text-3xl font-bold tracking-tight text-[#1E60FF] md:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </RevealOnScroll>
      </Container>
    </header>
  );
}
