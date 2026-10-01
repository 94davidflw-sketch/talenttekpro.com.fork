import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { PageCta } from "@/components/page/PageCta";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { CareerApplyForm } from "@/components/careers/CareerApplyForm";
import { careersPage, getCareerRole } from "@/content/careers";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careersPage.roles.items.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getCareerRole(slug);
  if (!role) return { title: { absolute: "Role | TalentTekPro" } };
  return pageMetadata({
    title: `${role.title} | Careers | TalentTekPro`,
    description: role.summary,
    path: `/careers/${role.slug}`,
  });
}

export default async function CareerRolePage({ params }: Props) {
  const { slug } = await params;
  const role = getCareerRole(slug);
  if (!role) notFound();

  return (
    <main className="flex-1">
      <PageHero
        eyebrow={`${role.track} · ${role.type}`}
        title={role.title}
        support={`${role.location}: ${role.summary}`}
      />

      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <Container>
          <RevealOnScroll>
            <Link
              href="/careers#open-roles"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] transition-colors hover:text-[#1E60FF]"
            >
              <ArrowLeft className="size-4" aria-hidden />
              All open roles
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <h2 className="section-title">About the role</h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#64748B]">
                  {role.about}
                </p>

                <h3 className="card-title mt-10">What you’ll do</h3>
                <ul className="mt-4 space-y-3">
                  {role.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-[#64748B] md:text-[0.95rem]"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1E60FF]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="card-title mt-10">What we’re looking for</h3>
                <ul className="mt-4 space-y-3">
                  {role.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-[#64748B] md:text-[0.95rem]"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#1E60FF]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {role.niceToHave && role.niceToHave.length > 0 ? (
                  <>
                    <h3 className="card-title mt-10">Nice to have</h3>
                    <ul className="mt-4 space-y-3">
                      {role.niceToHave.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-[#64748B] md:text-[0.95rem]"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#94A3B8]" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>

              <aside
                id="apply"
                className="scroll-mt-28 lg:col-span-5"
              >
                <div className="rounded-2xl border border-black/[0.06] bg-[#F8FAFC] p-6 md:p-7">
                  <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                    Apply
                  </p>
                  <h2 className="card-title mt-2">Send your application</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    LinkedIn and a résumé upload are required. We’ll reply with next steps.
                  </p>
                  <div className="mt-6">
                    <CareerApplyForm roleTitle={role.title} />
                  </div>
                </div>
              </aside>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <PageCta
        headline={careersPage.cta.headline}
        headlineAccent={careersPage.cta.headlineAccent}
        support={careersPage.cta.support}
        primary={{ label: "View all roles →", href: "/careers#open-roles" }}
        showEmail
      />
    </main>
  );
}
