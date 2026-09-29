/**
 * Media assets for UI.
 * Marketing-stock aesthetic: clear subject, polished, readable ? not busy CGI.
 */

export type MediaAsset = {
  id: string;
  src: string;
  path: string;
  poster?: string;
  prompt: string;
  alt: string;
  /** Phone-only photograph. Desktop keeps `src`. */
  mobileSrc?: string;
};

const BRAND =
  "Brand accents only when needed: deep navy #051937, cyan #00D2FF, royal blue #1E60FF. No purple, no logos, no readable UI text, no watermarks.";

const TEAM =
  "Cast only young white American men ages ~25-32, clean-cut tech professionals. No women, no other ethnicities.";

const MARKETING_PHOTO =
  "Premium SaaS marketing stock photograph style like Stripe/Notion/Linear careers pages: bright modern office, soft natural light, sharp focus on subjects, clean background, clear readable scene, professional color grade. Not cinematic fog, not dark moody drama.";

const MARKETING_ABSTRACT =
  "Premium SaaS marketing illustration style: one clear hero object centered, simple readable metaphor, soft studio lighting on deep navy #051937, subtle cyan #00D2FF and royal #1E60FF accents, polished 3D, plenty of calm empty space. Clean and premium like Stripe/Linear marketing art ? NOT busy particle storms, NOT dense lattices, NOT empty lonely cubes.";

export const media = {
  heroVideo: {
    id: "hero-video",
    src: "https://cdn.coverr.co/videos/coverr-working-on-a-computer-1584/1080p.mp4",
    path: "/media/heroes/hero-poster.jpg",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    prompt: `Unused on site. ${BRAND}`,
    alt: "Hero poster placeholder.",
  } satisfies MediaAsset,
  landing: {
    id: "landing",
    src: "/media/heroes/landing-hero.jpg",
    path: "/media/heroes/landing-hero.jpg",
    prompt: `Premium cinematic B2B tech hero. Bright modern open office, large windows, natural daylight. Young professional man (navy sweater, glasses) and woman (light grey sweater) collaborating on a laptop on the RIGHT. Softly blurred coworkers and plants in background. LEFT third quiet bright negative space for headline. No sci-fi, holograms, logos, or readable UI.`,
    alt: "Two colleagues reviewing a laptop together in a bright modern office.",
  } satisfies MediaAsset,
  manifesto: {
    id: "manifesto",
    src: "/media/heroes/manifesto.jpg",
    path: "/media/heroes/manifesto.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Two young white American men reviewing a laptop at a clean whiteboard in a bright office. Clear, simple marketing stock composition. 16:9. ${BRAND}`,
    alt: "Two young white American engineers reviewing a laptop.",
  } satisfies MediaAsset,
  approach: {
    id: "approach",
    src: "/media/heroes/approach.jpg",
    path: "/media/heroes/approach.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Two young white American men smiling and high-fiving in a bright modern office after a win. Clear simple stock photo. 16:9. ${BRAND}`,
    alt: "Two young white American teammates celebrating with a high-five.",
  } satisfies MediaAsset,
  getStarted: {
    id: "get-started",
    src: "/media/heroes/get-started.jpg",
    path: "/media/heroes/get-started.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Two young white American men leaning over a laptop on a meeting table in a bright glass conference room. Clear, hopeful CTA photo. 16:9. ${BRAND}`,
    alt: "Young white American teammates reviewing a laptop in a meeting room.",
  } satisfies MediaAsset,
  servicesHero: {
    id: "services-hero",
    src: "/media/heroes/services-hero.png",
    path: "/media/heroes/services-hero.png",
    mobileSrc: "/media/heroes/services-forms.jpg",
    prompt: `${MARKETING_ABSTRACT} Meaning: talent plus delivery. A single elegant glass sphere on the left connected by one clean cyan arc to a single royal-blue geometric module on the right ? two clear shapes, one connection. Soft studio light, deep navy background. 16:9. ${BRAND}`,
    alt: "A glass sphere connected by a cyan arc to a royal-blue module.",
  } satisfies MediaAsset,
  processHero: {
    id: "process-hero",
    src: "/media/heroes/process-meeting.jpg",
    path: "/media/heroes/process-meeting.jpg",
    mobileSrc: "/media/heroes/approach-meeting.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Three young white American men in a bright meeting room: two seated with laptops, one standing at a clean whiteboard. A normal white ceramic coffee mug on the table, not a dark novelty cup. Clear marketing stock scene. 16:9. ${BRAND}`,
    alt: "Young white American team in a bright strategy meeting.",
  } satisfies MediaAsset,
  aboutHero: {
    id: "about-hero",
    src: "/media/heroes/about-boardroom.jpg",
    path: "/media/heroes/about-boardroom.jpg",
    mobileSrc: "/media/heroes/about-waves.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Three distinct young white American men in a bright modern boardroom around a table, talking calmly. Different hair, faces, and features so they do not look like the same person. A normal white ceramic coffee mug on the table. No black novelty mugs. Clear corporate marketing stock. 16:9. ${BRAND}`,
    alt: "Three colleagues in a bright boardroom, each with a different face.",
  } satisfies MediaAsset,
  careersHero: {
    id: "careers-hero",
    src: "/media/heroes/careers-desks.jpg",
    path: "/media/heroes/careers-desks.jpg",
    mobileSrc: "/media/heroes/careers-portrait.jpg",
    prompt: `${MARKETING_PHOTO} ${TEAM} Three young white American men working together at standing desks in a bright open office. A normal white ceramic coffee mug on the desk, not a dark novelty cup. Clear friendly careers marketing photo. 16:9. ${BRAND}`,
    alt: "Young white American engineers working together in a bright office.",
  } satisfies MediaAsset,
  blogHero: {
    id: "blog-hero",
    src: "/media/blog/journal-hero.png",
    path: "/media/blog/journal-hero.png",
    prompt: `${MARKETING_ABSTRACT} Meaning: journal / field notes. One soft luminous frosted page floating above one small cyan node cluster. Very clear, simple, premium. Deep navy background. 16:9. ${BRAND}`,
    alt: "A single luminous page above a small cyan node cluster.",
  } satisfies MediaAsset,
  projectsHero: {
    id: "projects-hero",
    src: "/media/heroes/projects-hero.jpg",
    path: "/media/heroes/projects-hero.jpg",
    mobileSrc: "/media/heroes/case-studies-glass.jpg",
    prompt: `${MARKETING_ABSTRACT} Meaning: portfolio. Three frosted glass portfolio cards floating in a neat row, soft cyan edge light, one card slightly forward with royal-blue accent. Clear, orderly, premium marketing art. Deep navy background. 16:9. ${BRAND}`,
    alt: "Three frosted glass portfolio cards in a neat floating row.",
  } satisfies MediaAsset,
  contactHero: {
    id: "contact-hero",
    src: "/media/heroes/contact-desk.jpg",
    path: "/media/heroes/contact-desk.jpg",
    mobileSrc: "/media/heroes/contact-reception.jpg",
    prompt: `${MARKETING_PHOTO} Bright modern office reception desk, empty and welcoming, soft daylight, clean architecture, cyan accent on a small desk lamp. The wall sign is one simple solid white TalentTekPro mark with no inner shapes, beside a clear white TalentTekPro name. No bright logo colors, no other company names. No crowds. 16:9.`,
    alt: "Bright office reception with the TalentTekPro mark on the wall.",
  } satisfies MediaAsset,
  cases: [
    {
      id: "case-dating",
      src: "/media/cases/case-dating.png",
      path: "/media/cases/case-dating.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, realistic 3D product visualization, elegant studio lighting, subtle natural shadows, soft depth of field, refined blue accent colors, minimal composition, sophisticated technology aesthetic, realistic materials, polished glass and matte surfaces, spacious composition, crisp details, photorealistic, professional web portfolio artwork, Apple-style product presentation, no dark background, no neon glow, no excessive particles, no cyberpunk aesthetic, no text, no watermark, 16:9. Two modern smartphones displaying a premium dating/matching interface, attractive profile cards, subtle heart/connection visual, phones standing naturally on a clean white studio surface, soft daylight, pale blue environment, realistic photography, elegant and friendly, premium SaaS portfolio image.`,
      alt: "Two smartphones with a dating app connected by a soft blue heart on a bright studio surface.",
    },
    {
      id: "case-healthcare",
      src: "/media/cases/case-healthcare.png",
      path: "/media/cases/case-healthcare.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, elegant studio lighting, subtle natural shadows, soft depth of field, refined blue accent colors, minimal composition, photorealistic, professional web portfolio artwork, no dark background, no neon glow, no cyberpunk aesthetic, no text, no watermark, 16:9. Modern healthcare professional using a tablet, clean medical environment, subtle transparent health dashboard floating near the device, heart-rate and appointment data visualization, white and pale blue palette, natural daylight, realistic photography, trustworthy premium healthcare technology aesthetic.`,
      alt: "Healthcare professional with a tablet and a soft floating health dashboard.",
    },
    {
      id: "case-commerce",
      src: "/media/cases/case-commerce.png",
      path: "/media/cases/case-commerce.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, elegant studio lighting, subtle natural shadows, soft depth of field, refined blue accent colors, minimal composition, photorealistic, professional web portfolio artwork, no dark background, no neon glow, no cyberpunk aesthetic, no text, no watermark, 16:9. Premium food delivery scene with a smartphone displaying a modern food ordering app, fresh meal and grocery delivery bag beside it, bright kitchen environment, warm natural daylight, clean white background with subtle blue accents, realistic product photography, appetizing but sophisticated.`,
      alt: "Smartphone food ordering app beside a delivery bag and fresh produce.",
    },
    {
      id: "case-booking",
      src: "/media/cases/case-booking.png",
      path: "/media/cases/case-booking.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, elegant studio lighting, subtle natural shadows, soft depth of field, refined blue accent colors, minimal composition, photorealistic, professional web portfolio artwork, no dark background, no neon glow, no cyberpunk aesthetic, no text, no watermark, 16:9. Modern laptop displaying a clean office-room booking dashboard, elegant contemporary workspace, desk, plant and coffee cup, bright natural daylight, white and soft neutral interior, realistic photography, premium SaaS product presentation, minimal and organized.`,
      alt: "Laptop showing a room-booking dashboard on a bright desk with plant and coffee.",
    },
    {
      id: "case-pipeline",
      src: "/media/cases/case-pipeline.png",
      path: "/media/cases/case-pipeline.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, elegant studio lighting, subtle natural shadows, soft depth of field, refined blue accent colors, minimal composition, photorealistic, professional web portfolio artwork, no dark background, no neon glow, no cyberpunk aesthetic, no text, no watermark, 16:9. Industrial pipeline inspection scene with a compact inspection robot and tablet showing inspection data, large clean metal pipeline, professional industrial environment, daylight, realistic materials, subtle blue technology accents, photorealistic engineering photography, clean premium composition.`,
      alt: "Inspection robot and tablet beside a clean metal pipeline in daylight.",
    },
    {
      id: "case-leds",
      src: "/media/cases/case-leds.png",
      path: "/media/cases/case-leds.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, realistic 3D product visualization, elegant studio lighting, subtle natural shadows, soft depth of field, refined blue accent colors, minimal composition, no dark background, no neon glow, no text, no watermark, 16:9. Premium LED lighting catalog: two slim LED panels and one linear light bar on a white studio table, one panel softly glowing, a silver laptop beside them showing an abstract pale-blue product grid.`,
      alt: "LED light panels and a laptop on a bright white studio table.",
    },
    {
      id: "case-nutrition",
      src: "/media/cases/case-nutrition.png",
      path: "/media/cases/case-nutrition.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, elegant studio lighting, subtle natural shadows, refined blue accent colors, minimal composition, no dark background, no neon glow, no text, no watermark, 16:9. Functional nutrition products: two frosted supplement jars and a small powder tin on a white studio surface, a smartphone with an abstract pale-blue screen, a few blueberries.`,
      alt: "Frosted nutrition jars and a smartphone on a bright studio surface.",
    },
    {
      id: "case-personal-care",
      src: "/media/cases/case-personal-care.png",
      path: "/media/cases/case-personal-care.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, elegant studio lighting, subtle natural shadows, refined blue accent colors, minimal composition, no dark background, no neon glow, no text, no watermark, 16:9. Sustainable personal care: two frosted pump bottles and a glass dropper bottle on a white studio surface, one green leaf, a smartphone with an abstract pale-blue screen.`,
      alt: "Personal care bottles and a smartphone on a bright white surface.",
    },
    {
      id: "case-staffing",
      src: "/media/cases/case-staffing.png",
      path: "/media/cases/case-staffing.png",
      prompt: `Premium modern SaaS case-study hero image, bright high-key product photography, clean light background, soft white and pale blue environment, elegant studio lighting, subtle natural shadows, refined blue accent colors, minimal composition, no dark background, no neon glow, no text, no watermark, no people, 16:9. A senior platform pod: three open silver laptops in a row on a long white conference table, pale-blue chairs, bright windows, abstract dashboards only.`,
      alt: "Three laptops on a bright conference table for a platform team.",
    },
  ] satisfies MediaAsset[],
};

export function caseMedia(index: number): MediaAsset {
  return media.cases[index % media.cases.length];
}

export function mediaFilename(asset: Pick<MediaAsset, "path">): string {
  return asset.path.split("/").pop() ?? asset.path;
}
