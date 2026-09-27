"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra delay in seconds, added before the first object in a group. */
  delay?: number;
};

/** Slow at the start, quicker through the middle, slow at the end. */
const EASE = "ease-in-out";
/** How long one object takes to rise, start to finish. */
const DURATION = 0.7;
/** Wait between the start of one object and the next. */
const STAGGER = 0.15;

function isGrid(el: HTMLElement) {
  return [...el.classList].some(
    (name) => name === "grid" || name.endsWith(":grid") || name.includes("grid-cols"),
  );
}

function isGroup(el: HTMLElement) {
  return el.tagName === "UL" || el.tagName === "OL" || el.tagName === "DL" || isGrid(el);
}

/** Cards, headings, and rows. Text inside a card stays with that card. */
function collect(root: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];

  const add = (el: HTMLElement) => {
    if (isGroup(el)) {
      for (const kid of el.children) {
        if (kid instanceof HTMLElement) add(kid);
      }
      return;
    }

    if (el.tagName !== "DIV" && el.tagName !== "SECTION") {
      out.push(el);
      return;
    }

    const kids = [...el.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
    const onlyLayout =
      kids.length > 0 &&
      kids.length <= 6 &&
      kids.every(
        (kid) =>
          kid.tagName === "DIV" ||
          kid.tagName === "UL" ||
          kid.tagName === "OL" ||
          kid.tagName === "DL",
      );

    if (kids.some(isGroup) || onlyLayout) {
      kids.forEach(add);
      return;
    }

    out.push(el);
  };

  for (const kid of root.children) {
    if (kid instanceof HTMLElement) add(kid);
  }

  return out;
}

function clearMotion(node: HTMLElement) {
  node.style.translate = "";
  node.style.opacity = "";
  node.style.transition = "";
}

/** Top to bottom, then left to right on the same row. */
function byReadingOrder(a: HTMLElement, b: HTMLElement) {
  const ra = a.getBoundingClientRect();
  const rb = b.getBoundingClientRect();
  const rowA = Math.round(ra.top / 24);
  const rowB = Math.round(rb.top / 24);
  if (rowA !== rowB) return rowA - rowB;
  return ra.left - rb.left;
}

/**
 * One rise per object, in reading order.
 * Opacity goes from hidden to solid. Color is not animated.
 */
export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const objects = collect(root);
    if (objects.length === 0) return;

    const pending = new Set<HTMLElement>();
    const timers: number[] = [];

    objects.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 48;
      if (alreadyVisible) return;

      node.style.translate = "0 40px";
      node.style.opacity = "0";
      pending.add(node);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const ready = entries
          .filter((entry) => entry.isIntersecting && pending.has(entry.target as HTMLElement))
          .map((entry) => entry.target as HTMLElement)
          .sort(byReadingOrder);

        ready.forEach((node, index) => {
          pending.delete(node);
          observer.unobserve(node);
          const wait = delay + index * STAGGER;
          const motion = `${DURATION}s ${EASE} ${wait}s`;
          node.style.transition = `translate ${motion}, opacity ${motion}`;
          node.style.translate = "0 0";
          node.style.opacity = "1";
          timers.push(
            window.setTimeout(() => clearMotion(node), (wait + DURATION + 0.08) * 1000),
          );
        });
      },
      { threshold: 0.12 },
    );

    pending.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      objects.forEach(clearMotion);
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
