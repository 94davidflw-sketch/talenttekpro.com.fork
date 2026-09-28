export type HeroTone = "ink" | "light" | "plate";

/**
 * Tone of the copy over each full-screen hero, from the luminance of the
 * region the text actually covers (object-cover, centered).
 * `base` is the phone crop. `md` is the desktop crop.
 * ink: light photo, navy type.
 * light: dark photo, white type.
 * plate: mixed photo (people and clothing), navy type on a light field.
 * Unlisted images are light backgrounds, so the copy stays navy.
 */
const HERO_TONES: Record<string, { base: HeroTone; md: HeroTone }> = {
  "/media/heroes/process-meeting.jpg": { base: "plate", md: "plate" },
  "/media/heroes/about-boardroom.jpg": { base: "plate", md: "plate" },
  "/media/heroes/careers-desks.jpg": { base: "plate", md: "plate" },
  "/media/cases/case-pipeline.png": { base: "plate", md: "plate" },
};

export function heroToneAttrs(src: string) {
  const tone = HERO_TONES[src] ?? { base: "ink" as const, md: "ink" as const };
  return {
    "data-hero-tone": tone.base,
    "data-hero-tone-md": tone.md,
  } as const;
}
