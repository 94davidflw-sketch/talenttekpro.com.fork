import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import {
  blogPage,
  getBlogPost,
  getRelatedPosts,
} from "@/content/blog";
import { cta } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPage.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: `${post.title} | Blog | TalentTekPro`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const sections = post.body.filter((section) => section.heading);

  return (
    <main className="flex-1">
      <PageHero
        layout="viewport"
        eyebrow={`${post.category} · ${post.read} read`}
        title={post.title}
        support={post.excerpt}
        image={post.cover}
      />

      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-20 -right-10 hidden h-44 w-52 text-[#1E60FF] lg:block"
          reverse
        >
          <SoftRegion variant="wave" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] transition-colors hover:text-[#1E60FF]"
            >
              <ArrowLeft className="size-4" aria-hidden />
              All articles
            </Link>

            <aside className="mt-8 flex max-w-xl flex-col justify-between rounded-[1.5rem] bg-[#F5F9FC] p-6 md:p-7">
                <div>
                  <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                    Written by
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#051937]">
                    {post.author}
                  </p>
                  <p className="mt-1 text-sm text-[#64748B]">{post.role}</p>

                  <dl className="mt-8 space-y-4 border-t border-[#1E60FF]/10 pt-6 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[#94A3B8]">Published</dt>
                      <dd className="font-medium text-[#051937]">{post.date}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[#94A3B8]">Reading time</dt>
                      <dd className="inline-flex items-center gap-1.5 font-medium text-[#051937]">
                        <Clock3 className="size-3.5 text-[#1E60FF]" aria-hidden />
                        {post.read}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[#94A3B8]">Topic</dt>
                      <dd className="font-medium text-[#1E60FF]">{post.category}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8">
                  <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                    Topics
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium",
                          i % 3 === 0 && "bg-[#EFF6FF] text-[#1E60FF]",
                          i % 3 === 1 && "bg-[#ECFEFF] text-[#0891B2]",
                          i % 3 === 2 && "bg-[#F0FDF4] text-[#16A34A]",
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
            </aside>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="relative z-[1] overflow-visible bg-[#F8FBFE] section-pad !pt-4 md:!pt-6">
        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <article className="lg:col-span-8">
                {post.body.map((section, index) => (
                  <div
                    key={section.heading ?? `section-${index}`}
                    className={index > 0 ? "mt-12" : undefined}
                  >
                    {section.heading ? (
                      <h2
                        id={section.heading
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}
                        className="section-title scroll-mt-28 !text-[1.65rem] md:!text-[1.85rem]"
                      >
                        {section.heading}
                      </h2>
                    ) : null}
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 56)}
                        className={cn(
                          "text-base leading-[1.8] text-[#475569] md:text-[1.05rem]",
                          section.heading ? "mt-5" : "mt-5 first:mt-0",
                        )}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {index === 0 ? (
                      <blockquote className="relative mt-10 border-l-2 border-[#1E60FF] bg-white px-6 py-5 shadow-[0_12px_36px_rgba(5,25,55,0.06)] md:px-8 md:py-6">
                        <p className="font-display text-xl leading-snug font-semibold tracking-tight text-[#051937] md:text-2xl">
                          {post.pullQuote}
                        </p>
                      </blockquote>
                    ) : null}
                  </div>
                ))}
              </article>

              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_14px_40px_rgba(5,25,55,0.06)] md:p-7">
                    <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                      Key takeaways
                    </p>
                    <ul className="mt-5 space-y-4">
                      {post.takeaways.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-[#475569]"
                        >
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#1E60FF]">
                            <Check className="size-3" strokeWidth={2.5} aria-hidden />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {sections.length > 0 ? (
                    <nav
                      aria-label="On this page"
                      className="mt-6 rounded-[1.5rem] bg-white p-6 shadow-[0_14px_40px_rgba(5,25,55,0.06)] md:p-7"
                    >
                      <p className="text-[0.75rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                        On this page
                      </p>
                      <ol className="mt-4 space-y-3">
                        {sections.map((section, i) => {
                          const id = section.heading!
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/(^-|-$)/g, "");
                          return (
                            <li key={id}>
                              <a
                                href={`#${id}`}
                                className="group flex gap-3 text-sm text-[#64748B] transition-colors hover:text-[#1E60FF]"
                              >
                                <span className="font-mono text-xs text-[#94A3B8] group-hover:text-[#1E60FF]">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span>{section.heading}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </nav>
                  ) : null}
                </div>
              </aside>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="relative z-[1] overflow-visible bg-white section-pad">
          <SectionEdge fill="#ffffff" variant="soft" position="top" />
          <Container className="relative z-10">
            <RevealOnScroll>
              <p className="text-[0.8125rem] font-medium tracking-[0.16em] text-[#475569] uppercase">
                Keep reading
              </p>
              <span className="mt-3 block h-px w-10 bg-[#1E60FF]" aria-hidden />
              <h2 className="section-title mt-5">
                Related{" "}
                <span className="hero-gradient-text">notes.</span>
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-[#F8FBFE] shadow-[0_14px_40px_rgba(5,25,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(5,25,55,0.08)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SafeImage
                        src={item.cover.src}
                        alt={item.cover.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-sm text-[#64748B]">
                        <span className="font-medium text-[#1E60FF]">
                          {item.category}
                        </span>
                        <span aria-hidden> · </span>
                        {item.read} read
                      </p>
                      <h3 className="card-title mt-2 transition-colors group-hover:text-[#1E60FF]">
                        {item.title}
                      </h3>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#1E60FF]">
                        Read article
                        <ArrowUpRight className="size-4" aria-hidden />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </RevealOnScroll>
          </Container>
        </section>
      ) : null}

      <PageCta
        headline={blogPage.cta.headline}
        headlineAccent={blogPage.cta.headlineAccent}
        support={blogPage.cta.support}
        primary={cta.primary}
        secondary={{ label: "Back to journal", href: "/blog" }}
        showEmail
      />
    </main>
  );
}
