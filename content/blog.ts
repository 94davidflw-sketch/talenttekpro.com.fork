import type { MediaAsset } from "@/content/media";

const BLOG_BRAND =
  "Brand accents: deep navy #051937, cyan #00D2FF, royal blue #1E60FF. No purple, no logos, no readable text, no watermarks.";

const BLOG_MARKETING =
  "Premium SaaS marketing illustration: one clear hero metaphor, soft studio light on deep navy, polished 3D, calm empty space. Clean like Stripe/Linear marketing art — not busy, not sparse empty cubes.";

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  author: string;
  role: string;
  featured: boolean;
  cover: Pick<MediaAsset, "id" | "src" | "path" | "prompt" | "alt">;
  tags: string[];
  takeaways: string[];
  pullQuote: string;
  body: {
    heading?: string;
    paragraphs: string[];
  }[];
};

export const blogPage = {
  metaTitle: "Blog | TalentTekPro field notes & essays",
  metaDescription:
    "Essays and post-mortems from recruiters and engineers who shipped the work.",
  hero: {
    eyebrow: "Journal",
    title: "Field notes from the",
    titleAccent: "engine room.",
    support:
      "Essays and post-mortems from recruiters and engineers who shipped the work: talent, delivery, and the systems between them.",
  },
  stats: [
    { value: "7", label: "Field notes" },
    { value: "2", label: "Disciplines" },
    { value: "Weekly", label: "Cadence" },
  ],
  categories: [
    "All",
    "Talent",
    "AI & ML",
    "DevOps",
    "Hiring Ops",
    "SaaS",
    "Architecture",
  ] as const,
  posts: [
    {
      slug: "production-rag-routing",
      category: "AI & ML",
      title: "Production RAG with model routing that survives scale",
      excerpt:
        "How we gate model choice, evals, and fallbacks so retrieval stays useful under real traffic.",
      read: "8 min",
      date: "Mar 12, 2026",
      author: "Maya Chen",
      role: "Staff ML Engineer",
      featured: true,
      cover: {
        id: "blog-production-rag-routing",
        src: "/media/blog/production-rag-routing.png",
        path: "/media/blog/production-rag-routing.png",
        prompt: `${BLOG_MARKETING} Meaning: RAG routing. One cyan filament passing through two clear gates into a royal-blue core. Simple and readable. 16:9. ${BLOG_BRAND}`,
        alt: "A cyan filament passing gates into a royal-blue core.",
      },
      tags: ["RAG", "Routing", "Evals", "Latency"],
      takeaways: [
        "Treat model choice as an operational control with scored gates, not a one-off prompt tweak.",
        "Log every route decision with the retrieval score that triggered it.",
        "Ship offline evals and online shadow traffic before users see a new route.",
      ],
      pullQuote:
        "The fix is not a bigger prompt. It is a routing and evaluation system that treats model choice as an operational control.",
      body: [
        {
          paragraphs: [
            "Most RAG demos look sharp in a notebook and fall apart the first week of production traffic. Latency spikes, retrieval quality drifts, and the wrong model answers with confidence. Teams respond by stuffing more context into the prompt or swapping models mid-sprint and the outage pattern repeats.",
            "We ship RAG as a gated pipeline: retrieve, score, route, generate, then verify. Each stage has a clear failure mode and a fallback that keeps answers useful when the preferred path is slow or low-confidence. That discipline is what separates a demo from a system you can operate on a Friday.",
          ],
        },
        {
          heading: "Gate model choice, don’t guess",
          paragraphs: [
            "Cheap models handle high-volume, low-risk queries. Stronger models unlock when retrieval confidence is thin, the domain is regulated, or the user is mid-workflow. Routing rules are written as score thresholds and policy tags, not as one-off if-statements buried in the handler.",
            "We keep a short allowlist of models per environment and log every route decision with the retrieval score that triggered it. That audit trail is what makes Friday incidents diagnosable instead of folklore.",
            "When a route fires unexpectedly often, the dashboard shows it. Product and ML review the threshold together, usually the retrieval index drifted, not the model itself.",
          ],
        },
        {
          heading: "Evals before feature theater",
          paragraphs: [
            "Offline eval sets cover citation faithfulness, refusal quality, and latency budgets. Online shadow traffic compares candidates without exposing users until the gate passes. If an eval regresses, the route rolls back automatically.",
            "We refuse to ship a “better” model that fails faithfulness even if latency looks prettier. Feature theater is swapping models for the release note. Real progress is a gate that keeps retrieval useful under real load.",
          ],
        },
        {
          heading: "What we measure in week one",
          paragraphs: [
            "p95 end-to-end latency by route, citation hit rate on a frozen eval pack, and fallback rate under peak. If fallback rate climbs, we investigate retrieval before we buy a larger model.",
            "The result is a system the team can change without rewriting the product surface every sprint and answers that still hold when traffic is ugly.",
          ],
        },
      ],
    },
    {
      slug: "scorecards-time-to-productivity",
      category: "Hiring Ops",
      title: "Scorecards that predict time-to-productivity",
      excerpt:
        "Interview signals that correlate with ramp, not just algorithm trivia.",
      read: "6 min",
      date: "Feb 28, 2026",
      author: "Jordan Hale",
      role: "Director of Talent",
      featured: false,
      cover: {
        id: "blog-scorecards-time-to-productivity",
        src: "/media/blog/scorecards-time-to-productivity.png",
        path: "/media/blog/scorecards-time-to-productivity.png",
        prompt: `${BLOG_MARKETING} Meaning: hiring scorecards. Two frosted scorecard panels beside one upward royal-blue arrow. Clear and simple. 16:9. ${BLOG_BRAND}`,
        alt: "Two scorecard panels beside an upward royal-blue arrow.",
      },
      tags: ["Scorecards", "Ramp", "Panels", "Rubrics"],
      takeaways: [
        "Score for behaviors that show up in the first 30–60 days, not puzzle speed alone.",
        "Use one shared rubric language across recruiters and hiring managers.",
        "Debrief with evidence first; recommendation second.",
      ],
      pullQuote:
        "We design scorecards around time-to-productivity: the behaviors and artifacts that show up in the first 30–60 days on a real team.",
      body: [
        {
          paragraphs: [
            "Most interview scorecards measure what is easy to ask, not what predicts ramp. Algorithm trivia and whiteboard puzzles feel rigorous and often select for people who interview well rather than ship in your context.",
            "We design scorecards around time-to-productivity: the behaviors and artifacts that show up in the first 30–60 days on a real team. That shift changes who you hire and how fast they contribute.",
          ],
        },
        {
          heading: "Signals that travel",
          paragraphs: [
            "Work-sample reviews, system tradeoff discussions, and written decision notes correlate better with ramp than puzzle speed. Panels score against observable evidence, then debrief with a shared rubric before any hire recommendation.",
            "When hiring managers and recruiters use the same scorecard language, feedback loops tighten and you stop debating gut feel in Slack after the fact.",
          ],
        },
        {
          heading: "Closing the loop after day 60",
          paragraphs: [
            "We spot-check new hires against the scorecard that hired them. If a strong hire underperformed on a dimension we scored lightly, that dimension gets weight next cycle. The scorecard is a living instrument, not a PDF in a drive.",
          ],
        },
      ],
    },
    {
      slug: "zero-downtime-deploys",
      category: "DevOps",
      title: "Zero-downtime deploys we actually trust",
      excerpt:
        "Kubernetes + GitHub Actions patterns that survive Friday afternoon releases.",
      read: "7 min",
      date: "Feb 14, 2026",
      author: "Sam Okonkwo",
      role: "Principal Platform Engineer",
      featured: false,
      cover: {
        id: "blog-zero-downtime-deploys",
        src: "/media/blog/zero-downtime-deploys.png",
        path: "/media/blog/zero-downtime-deploys.png",
        prompt: `${BLOG_MARKETING} Meaning: zero-downtime deploys. Two nested soft cyan rings with one royal-blue check-mark glow. Clear and simple. 16:9. ${BLOG_BRAND}`,
        alt: "Two nested cyan rings with a royal-blue success glow.",
      },
      tags: ["Kubernetes", "CI/CD", "Canaries", "Rollback"],
      takeaways: [
        "Promote the same build artifact across environments, never rebuild for prod.",
        "Canaries need real traffic and real metrics, not a green health check alone.",
        "Make rollback a first-class pipeline path, not a hero move.",
      ],
      pullQuote:
        "Friday releases survive when rollback is a first-class path, not a hero move.",
      body: [
        {
          paragraphs: [
            "Zero-downtime is a promise teams make casually and break under pressure. Trust comes from boring, repeatable patterns: health checks that mean something, rollout policies that fail closed, and pipelines that refuse to promote without evidence.",
          ],
        },
        {
          heading: "Kubernetes + Actions, without drama",
          paragraphs: [
            "We use progressive rollouts with readiness gates, migration jobs that run before traffic shifts, and GitHub Actions that publish artifacts once and promote the same build across environments. Canaries get real traffic and real metrics, not a green health endpoint alone.",
            "Friday releases survive when rollback is a first-class path, not a hero move. If the canary fails, the previous revision is still warm and the pipeline already knows how to put it back.",
          ],
        },
        {
          heading: "Migrations that don’t strand traffic",
          paragraphs: [
            "Schema changes land expand-contract. Features that depend on new columns stay dark until the expand step is verified. The deploy pipeline blocks promote if a migration job has not reported success, even if the container image is fine.",
          ],
        },
      ],
    },
    {
      slug: "saas-mvp-to-scale",
      category: "SaaS",
      title: "SaaS MVP to scale: NestJS, Stripe, PostHog",
      excerpt:
        "A pragmatic stack path from first paying customers to multi-tenant reality.",
      read: "9 min",
      date: "Jan 30, 2026",
      author: "Elena Ruiz",
      role: "Engineering Lead",
      featured: false,
      cover: {
        id: "blog-saas-mvp-to-scale",
        src: "/media/blog/saas-mvp-to-scale.png",
        path: "/media/blog/saas-mvp-to-scale.png",
        prompt: `${BLOG_MARKETING} Meaning: SaaS scale. One small frosted block growing into three connected blocks. Clear growth metaphor. 16:9. ${BLOG_BRAND}`,
        alt: "A small frosted block growing into three connected blocks.",
      },
      tags: ["NestJS", "Stripe", "PostHog", "Multi-tenant"],
      takeaways: [
        "Earn complexity: isolate tenants in data and auth before splitting infrastructure.",
        "Instrument usage early so architecture decisions follow product truth.",
        "Billing and entitlements belong in one coherent model from day one.",
      ],
      pullQuote:
        "The goal is not a perfect stack on day one. It is a stack you can operate, observe, and evolve without a rewrite.",
      body: [
        {
          paragraphs: [
            "Early SaaS needs speed without painting the team into a corner. We favor a path that earns the right to complexity: NestJS for clear service boundaries, Stripe for billing that does not invent itself, and PostHog for product truth before vanity dashboards.",
          ],
        },
        {
          heading: "From first invoice to multi-tenant",
          paragraphs: [
            "Tenant isolation starts as disciplined data modeling and auth boundaries, then hardens into separate resources only when metrics demand it. Feature flags and usage events tell you when the MVP shape is lying, usually before the architecture does.",
            "The goal is not a perfect stack on day one. It is a stack you can operate, observe, and evolve without a rewrite when the tenth customer asks for something the first never needed.",
          ],
        },
        {
          heading: "Where teams usually overbuild",
          paragraphs: [
            "Microservices before a clear domain boundary. Custom billing before Stripe’s model is exhausted. Dashboards before event schemas. We push teams to ship the boring path first and add seams only when PostHog and support tickets agree something is on fire.",
          ],
        },
      ],
    },
    {
      slug: "staff-engineer-interviews",
      category: "Talent",
      title: "Structured interviewing for staff engineers",
      excerpt:
        "Panels, rubrics, and debriefs that keep the senior bar honest.",
      read: "5 min",
      date: "Jan 16, 2026",
      author: "Priya Nair",
      role: "Senior Technical Recruiter",
      featured: false,
      cover: {
        id: "blog-staff-engineer-interviews",
        src: "/media/blog/staff-engineer-interviews.png",
        path: "/media/blog/staff-engineer-interviews.png",
        prompt: `${BLOG_MARKETING} Meaning: staff interviews. Three small panels pointing to one central rubric circle. Clear and simple. 16:9. ${BLOG_BRAND}`,
        alt: "Three small panels pointing to one central rubric circle.",
      },
      tags: ["Staff+", "Panels", "Debriefs", "Senior bar"],
      takeaways: [
        "Separate system design, influence, and execution into distinct sessions.",
        "Start debriefs with scorecard evidence, never the hire recommendation.",
        "Write prompts that force tradeoffs, not textbook recitation.",
      ],
      pullQuote:
        "Structure is how you keep seniority honest without turning the loop into theater.",
      body: [
        {
          paragraphs: [
            "Staff-level interviews collapse when every panelist invents their own bar. Structure is how you keep seniority honest without turning the loop into theater.",
          ],
        },
        {
          heading: "Panels with a shared bar",
          paragraphs: [
            "We separate system design, leadership influence, and execution depth into distinct sessions with explicit rubrics. Debriefs start with evidence against the scorecard, then move to recommendation, never the reverse.",
            "Candidates feel the difference: clearer prompts, fairer comparisons, and fewer “strong but vague” outcomes that waste everyone’s time.",
          ],
        },
        {
          heading: "What “staff” means on the scorecard",
          paragraphs: [
            "We look for scope that crosses teams, decisions that leave written residue, and the ability to say no with a path forward. Titles vary by company; the scorecard does not. That is how you hire staff engineers who actually operate at staff altitude.",
          ],
        },
      ],
    },
    {
      slug: "adr-first-delivery",
      category: "Architecture",
      title: "ADRs before feature theater",
      excerpt:
        "Why we write architecture decision records in week one of every embed.",
      read: "6 min",
      date: "Jan 8, 2026",
      author: "Chris Vogel",
      role: "Principal Architect",
      featured: false,
      cover: {
        id: "blog-adr-first-delivery",
        src: "/media/blog/adr-first-delivery.png",
        path: "/media/blog/adr-first-delivery.png",
        prompt: `${BLOG_MARKETING} Meaning: architecture decisions. One frosted decision slab with two cyan branch paths. Clear ADR metaphor. 16:9. ${BLOG_BRAND}`,
        alt: "One frosted decision slab with two cyan branch paths.",
      },
      tags: ["ADRs", "Embeds", "Tradeoffs", "Governance"],
      takeaways: [
        "Capture constraints in week one: compliance, latency, ownership, non-goals.",
        "Keep ADRs short (context, decision, consequences) next to the code.",
        "Use ADRs to explain change cost when stakeholders rotate.",
      ],
      pullQuote:
        "When stakeholders change, the ADR still explains why the system looks the way it does.",
      body: [
        {
          paragraphs: [
            "Feature velocity without decision memory creates the same debate every quarter. Architecture decision records (ADRs) are how we make tradeoffs durable and how embedded teams avoid rebuilding context from Slack archaeology.",
          ],
        },
        {
          heading: "Week-one discipline",
          paragraphs: [
            "In the first week of an embed we capture the constraints that already exist: compliance, latency budgets, ownership boundaries, and non-goals. New ADRs are short: context, decision, consequences. They live next to the code that depends on them.",
            "When stakeholders change, the ADR still explains why the system looks the way it does and what would have to be true to change it. That is how you ship features without feature theater.",
          ],
        },
        {
          heading: "What we refuse to ADR",
          paragraphs: [
            "Implementation trivia, ticket-level choices, and reversible naming debates. If a decision does not constrain future work or spending, it stays in the PR. ADRs earn their keep by surviving the next reorg.",
          ],
        },
      ],
    },
    {
      slug: "signals-before-the-page",
      category: "DevOps",
      title: "Signals before the page",
      excerpt:
        "The few traces and budgets we write down before an incident, not after the thread starts.",
      read: "6 min",
      date: "Dec 18, 2025",
      author: "Noah Park",
      role: "Platform Engineer",
      featured: false,
      cover: {
        id: "blog-signals-before-the-page",
        src: "/media/blog/signals-before-the-page.png",
        path: "/media/blog/signals-before-the-page.png",
        prompt: `${BLOG_MARKETING} Meaning: quiet production signals. One frosted glass panel standing in a soft cyan ring. Pale studio, no text. 16:9. ${BLOG_BRAND}`,
        alt: "A frosted glass panel standing inside a soft cyan ring.",
      },
      tags: ["Traces", "Budgets", "On-call"],
      takeaways: [
        "Name the three signals that would have explained the last incident.",
        "Set a latency and error budget before the feature ships, not during the page.",
        "Keep the on-call view to those signals so the page stays specific.",
      ],
      pullQuote:
        "A page is useful when the signal was chosen before the incident, not invented in the thread.",
      body: [
        {
          paragraphs: [
            "Most on-call noise comes from dashboards that grew after the last outage. The useful signals are the ones written down while the system is quiet: what would tell you the product is actually failing, and what you can ignore until morning.",
          ],
        },
        {
          heading: "Three signals, not thirty",
          paragraphs: [
            "We ask every embed to name three traces before launch: the user path that must stay fast, the dependency that fails closed, and the queue that hides work. Everything else can wait. A page that lists thirty charts trains people to mute it.",
            "Those three live next to the service, with a latency budget and an error budget. If either budget burns, the page says which signal moved. If neither moved, it is not a page.",
          ],
        },
        {
          heading: "Write it before Friday",
          paragraphs: [
            "The record is short: signal, owner, budget, and what “fine” looks like. We add it in the same week as the ADR, so the decision and the way we watch it ship together.",
            "When the incident comes, the thread starts from that note. The team is not inventing a theory from a wall of graphs. That is how on-call stays calm without pretending the system never fails.",
          ],
        },
      ],
    },
  ] satisfies BlogPost[],
  cta: {
    headline: "Want notes like these on",
    headlineAccent: "your roadmap?",
    support: "Talk to us about talent, delivery, or both.",
  },
} as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPage.posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return [...blogPage.posts].slice(0, limit);
  const sameCategory = blogPage.posts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = blogPage.posts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
