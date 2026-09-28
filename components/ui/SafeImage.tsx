import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /** Absolute fill inside a `relative` parent (same role as next/image `fill`). */
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
};

/**
 * Native img with suppressHydrationWarning.
 * Avoids next/image SSR mismatches: `0` vs `"0px"` fill styles and
 * extension-injected `filter: blur(0px)` on <img>.
 */
export function SafeImage({
  src,
  alt,
  className,
  style,
  fill = false,
  width,
  height,
  priority = false,
}: SafeImageProps) {
  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        className={cn("absolute inset-0 h-full w-full", className)}
        style={style}
        suppressHydrationWarning
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      className={className}
      style={style}
      suppressHydrationWarning
    />
  );
}
