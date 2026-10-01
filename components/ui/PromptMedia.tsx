"use client";

import { useState, type MouseEvent } from "react";
import { Check, Copy } from "lucide-react";
import { mediaFilename, type MediaAsset } from "@/content/media";
import { cn } from "@/lib/cn";

export type PromptMediaAsset = Pick<
  MediaAsset,
  "src" | "path" | "prompt" | "alt" | "mobileSrc"
> & { id?: string };

type PromptMediaProps = {
  asset: PromptMediaAsset;
  className?: string;
  /** Extra classes for the faded background image */
  imageClassName?: string;
  priority?: boolean;
};

/**
 * Generation workspace for content images: faded placeholder + prompt + copy.
 * Save generated files to `asset.path` under /public, then point `src` there.
 */
export function PromptMedia({
  asset,
  className,
  imageClassName,
  priority = false,
}: PromptMediaProps) {
  const [copied, setCopied] = useState(false);
  const filename = mediaFilename({ path: asset.path });
  const savePath = asset.path;

  async function onCopy(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(asset.prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable
    }
  }

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-[#051937]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "absolute inset-0 h-full w-full object-cover opacity-[0.35]",
          imageClassName,
        )}
        suppressHydrationWarning
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#051937]/95 via-[#051937]/70 to-[#051937]/45"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between gap-3 p-3 md:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
              Save as
            </p>
            <p
              className="mt-0.5 truncate font-mono text-xs font-medium text-[#E2E8F0] md:text-sm"
              title={savePath}
            >
              {filename}
            </p>
            <p className="mt-0.5 truncate font-mono text-[0.65rem] text-[#64748B]">
              {savePath}
            </p>
          </div>
          <button
            type="button"
            onClick={onCopy}
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-full border transition-colors",
              copied
                ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-300"
                : "border-white/20 bg-white/10 text-white hover:border-[#00D2FF]/50 hover:bg-[#00D2FF]/15 hover:text-[#00D2FF]",
            )}
            aria-label={copied ? "Prompt copied" : `Copy prompt for ${filename}`}
            title={copied ? "Copied" : "Copy prompt"}
          >
            {copied ? (
              <Check className="size-4" aria-hidden />
            ) : (
              <Copy className="size-4" aria-hidden />
            )}
          </button>
        </div>

        <p className="line-clamp-4 text-left text-[0.7rem] leading-relaxed text-[#CBD5E1] md:line-clamp-5 md:text-xs">
          {asset.prompt}
        </p>
      </div>
    </div>
  );
}
