"use client";

import { useEffect, useState } from "react";

const CLIP = "/assets/imgs/04-Talent-to-Technology.mp4";
const POSTER = "/assets/imgs/Frame.png";

/**
 * Looping banner for inner-page heroes.
 * The home page does not use this. Text stays above the picture.
 */
export function HeroMovie() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPlay(true);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={POSTER}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {play ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={CLIP}
          poster={POSTER}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          disablePictureInPicture
        />
      ) : null}
    </div>
  );
}
