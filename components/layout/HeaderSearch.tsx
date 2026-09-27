"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { searchKindLabel, searchSite, type SearchHit, type SearchKind } from "@/lib/search";

const KIND_ORDER: SearchKind[] = ["case-study", "service", "blog"];

const OPEN_EASE = "easeInOut" as const;
const OPEN_TIME = 0.7;

type HeaderSearchProps = {
  className?: string;
  forceClosed?: boolean;
  onOpen?: () => void;
  /** inverse = white icon for transparent hero overlay */
  tone?: "default" | "inverse";
};

export function HeaderSearch({
  className,
  forceClosed,
  onOpen,
  tone = "default",
}: HeaderSearchProps) {
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const lockRef = useRef<{ html: string; body: string } | null>(null);
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const motionTime = reduce ? 0 : OPEN_TIME;

  const results = useMemo(() => searchSite(query), [query]);
  const grouped = KIND_ORDER.map((kind) => ({
    kind,
    items: results.filter((hit) => hit.kind === kind),
  })).filter((group) => group.items.length > 0);

  const unlockPage = () => {
    const saved = lockRef.current;
    if (!saved) return;
    lockRef.current = null;
    document.documentElement.style.overflow = saved.html;
    document.body.style.overflow = saved.body;
  };

  const lockPage = () => {
    if (lockRef.current) return;
    const html = document.documentElement;
    const body = document.body;
    lockRef.current = {
      html: html.style.overflow,
      body: body.style.overflow,
    };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  };

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  const openSearch = () => {
    onOpen?.();
    setOpen(true);
  };

  useEffect(() => {
    setMounted(true);
    return () => unlockPage();
  }, []);

  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (forceClosed) close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceClosed]);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    lockPage();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const overlay =
    mounted &&
    createPortal(
      <AnimatePresence onExitComplete={unlockPage}>
        {open ? (
          <motion.div
            key="site-search"
            className="search-scrim fixed inset-x-0 bottom-0 top-[var(--ttp-header-h)] z-40"
            initial={{ "--search-blur": "0px", "--search-dim": 0 }}
            animate={{ "--search-blur": "12px", "--search-dim": 0.28 }}
            exit={{ "--search-blur": "0px", "--search-dim": 0 }}
            transition={{ duration: motionTime, ease: OPEN_EASE }}
          >
            <button
              type="button"
              aria-label="Close search"
              className="absolute inset-0"
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="site-search-title"
              className="relative border-b border-black/[0.06] bg-white shadow-[0_18px_48px_rgba(5,25,55,0.12)]"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: motionTime, ease: OPEN_EASE }}
            >
              <h2 id="site-search-title" className="sr-only">
                Search
              </h2>
              <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 md:px-6 lg:px-8">
                <Search className="size-5 shrink-0 text-[#94A3B8]" aria-hidden />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search stack, services, articles"
                  className="search-field h-16 min-w-0 flex-1 border-0 bg-transparent text-base text-[#051937] shadow-none outline-none ring-0 placeholder:text-[#94A3B8] md:text-[1.05rem]"
                />
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={close}
                  className="grid size-9 shrink-0 place-items-center rounded-full text-[#94A3B8] transition-colors hover:bg-[#F8FAFC] hover:text-[#051937]"
                >
                  <X className="size-4" />
                </button>
              </div>
              {query.trim() ? (
                <motion.div
                  className="mx-auto max-w-[1200px] px-2 pb-3 md:px-3 lg:px-5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: motionTime * 0.75, ease: OPEN_EASE }}
                >
                  <ResultsBody query={query} grouped={grouped} onNavigate={close} />
                </motion.div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        aria-label="Open search"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openSearch}
        className={cn(
          "grid size-10 place-items-center rounded-full transition-colors",
          tone === "inverse"
            ? "text-white hover:bg-white/12 hover:text-white"
            : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#051937]",
          className,
        )}
      >
        <Search className="size-5" />
      </button>
      {overlay}
    </>
  );
}

function ResultsBody({
  query,
  grouped,
  onNavigate,
}: {
  query: string;
  grouped: { kind: SearchKind; items: SearchHit[] }[];
  onNavigate: () => void;
}) {
  if (grouped.length === 0) {
    return (
      <p className="px-3 py-4 text-sm text-[#64748B] md:px-4">
        No matches for “{query.trim()}”.
      </p>
    );
  }

  return (
    <div className="max-h-[min(22rem,50vh)] overflow-y-auto pb-2">
      {grouped.map((group) => (
        <section key={group.kind} className="px-1 py-1">
          <p className="px-3 py-1.5 text-[0.68rem] font-medium tracking-[0.14em] text-[#94A3B8] uppercase">
            {searchKindLabel[group.kind]}
          </p>
          <ul>
            {group.items.map((hit) => (
              <ResultRow key={hit.href} hit={hit} onNavigate={onNavigate} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function ResultRow({ hit, onNavigate }: { hit: SearchHit; onNavigate: () => void }) {
  return (
    <li>
      <Link
        href={hit.href}
        onClick={onNavigate}
        className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F8FAFC]"
      >
        <p className="text-sm font-medium text-[#051937]">{hit.title}</p>
        {hit.hint ? (
          <p className="mt-0.5 text-xs leading-snug text-[#64748B]">{hit.hint}</p>
        ) : null}
      </Link>
    </li>
  );
}
