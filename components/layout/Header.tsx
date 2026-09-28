"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { HeaderSearch } from "@/components/layout/HeaderSearch";
import { cta, primaryNav } from "@/content/site";

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Full-screen photo heroes sit under the fixed header. Text-only pages do not. */
function hasBleedHero(pathname: string) {
  if (pathname === "/") return true;
  if (
    pathname === "/services" ||
    pathname === "/about" ||
    pathname === "/process" ||
    pathname === "/careers" ||
    pathname === "/contact" ||
    pathname === "/blog" ||
    pathname === "/projects"
  ) {
    return true;
  }
  if (pathname.startsWith("/blog/") || pathname.startsWith("/projects/")) {
    return true;
  }
  return false;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const bleedHero = hasBleedHero(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent over a full-screen hero until the user scrolls past it
  const overlay = bleedHero && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => {
      if (!bleedHero) {
        setScrolled(window.scrollY > 24);
        return;
      }
      // Stay transparent while still in the hero; solidify once past ~12% of hero height
      const hero = document.getElementById(isHome ? "home-hero" : "page-hero");
      const heroH = hero?.offsetHeight ?? 850;
      setScrolled(window.scrollY > Math.min(heroH * 0.12, 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [bleedHero, isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b-0 transition-[background-color,box-shadow,backdrop-filter] duration-300",
          overlay
            ? "bg-transparent shadow-none"
            : scrolled || open
              ? "bg-white shadow-[0_8px_32px_rgba(28,58,110,0.08)]"
              : "bg-white shadow-none",
        )}
      >
        <div className="mx-auto flex h-[var(--ttp-header-h)] max-w-[1320px] items-center justify-between gap-4 px-5 md:px-6 lg:px-8">
          <Logo
            size="nav"
            variant="mark"
            priority
            wordmarkClassName="text-[#051937] transition-colors duration-300"
          />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 xl:gap-8 lg:flex">
            {primaryNav.map((item) => {
              const active = navActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[0.9rem] font-medium tracking-[0.04em] transition-colors duration-300",
                    active
                      ? "text-[#1E60FF]"
                      : "text-[#051937] hover:text-[#1E60FF]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <HeaderSearch />
            <Link
              href={cta.quote.href}
              className="inline-flex h-11 w-[138px] items-center justify-center rounded-full bg-[#246BFF] text-sm font-semibold text-white shadow-[0_8px_22px_rgba(36,107,255,0.35)] transition-colors hover:bg-[#3B7AFF]"
            >
              {cta.quote.label} →
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <HeaderSearch forceClosed={open} onOpen={() => setOpen(false)} />
            <button
              type="button"
              className="grid size-10 place-items-center rounded-xl border border-black/10 text-[#051937] transition-colors duration-300 hover:bg-black/[0.04]"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-black/8 bg-white/95 backdrop-blur-xl lg:hidden">
            <nav className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-4">
              {primaryNav.map((item) => {
                const active = navActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-3 py-3 text-base font-medium",
                      active
                        ? "bg-[#EFF6FF] text-[#1E60FF]"
                        : "text-[#051937] hover:bg-[#F1F5F9]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 px-3">
                <Button href={cta.quote.href} className="w-full rounded-full">
                  {cta.quote.label} →
                </Button>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
      {/* Full-screen heroes sit under the fixed header — no spacer */}
      {!bleedHero ? (
        <div className="h-[var(--ttp-header-h)] shrink-0" aria-hidden />
      ) : null}
    </>
  );
}
