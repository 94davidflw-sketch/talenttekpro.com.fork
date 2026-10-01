import { Clock3, Mail, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { ScrollShape } from "@/components/effects/ScrollShape";
import { SoftRegion } from "@/components/effects/SoftRegion";
import { SectionEdge } from "@/components/ui/SectionShell";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactPage } from "@/content/contact";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHero
        layout="viewport"
        className="hero--light-overlay hero--veil-subtle hero--m-contact"
        mobileActions={[
          { href: "#brief", label: "Get a quote →", variant: "primary" },
          { href: `mailto:${site.email}`, label: "Contact sales", variant: "ghost" },
        ]}
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        titleAccent={contactPage.hero.titleAccent}
        support={contactPage.hero.support}
        image={media.contactHero}
      />

      <section className="relative z-[1] overflow-visible bg-white section-pad">
        <SectionEdge fill="#ffffff" variant="soft" position="top" />
        <ScrollShape
          className="top-24 -right-8 h-40 w-48 text-[#1E60FF] md:h-52 md:w-60"
          reverse
        >
          <SoftRegion variant="cloud" />
        </ScrollShape>

        <Container className="relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <h2 className="section-title">
                {contactPage.intro.headline}{" "}
                <span className="hero-gradient-text">
                  {contactPage.intro.headlineAccent}
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
                {contactPage.intro.support}
              </p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <div className="lg:col-span-7 xl:col-span-8">
                <div id="brief" className="scroll-mt-24 rounded-[1.75rem] border border-black/[0.05] bg-[#F8FAFC] p-6 shadow-[0_24px_60px_rgba(5,25,55,0.06)] md:p-8 lg:p-10">
                  <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#D7E4F0] pb-6">
                    <div>
                      <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#1E60FF] uppercase">
                        Proposal request
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#051937]">
                        Share your brief
                      </h3>
                    </div>
                    <p className="max-w-[14rem] text-right text-xs leading-relaxed text-[#94A3B8]">
                      All fields required so we can reply with a useful next step.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

              <aside className="lg:col-span-5 xl:col-span-4">
                <div className="space-y-6 lg:sticky lg:top-28">
                  <div className="rounded-[1.5rem] border border-black/[0.05] bg-white p-6 shadow-[0_16px_40px_rgba(5,25,55,0.04)]">
                    <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                      Direct channel
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-4 inline-flex items-center gap-3 text-base font-medium text-[#051937] transition-colors hover:text-[#1E60FF]"
                    >
                      <span className="grid size-10 place-items-center rounded-full bg-[#EFF6FF] text-[#1E60FF]">
                        <Mail className="size-4" aria-hidden />
                      </span>
                      {site.email}
                    </a>
                    <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                      {contactPage.details.note}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/[0.05] bg-white p-6 shadow-[0_16px_40px_rgba(5,25,55,0.04)]">
                    <ul className="space-y-5">
                      <li className="flex gap-3">
                        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[#F0F7FC] text-[#1E60FF]">
                          <Clock3 className="size-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[#051937]">
                            {contactPage.details.responseLabel}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                            {contactPage.details.responseValue}
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[#F0F7FC] text-[#1E60FF]">
                          <ShieldCheck className="size-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[#051937]">
                            {contactPage.details.focusLabel}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                            {contactPage.details.focusValue}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] border border-black/[0.05] bg-white p-6 shadow-[0_16px_40px_rgba(5,25,55,0.04)]">
                    <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase">
                      {contactPage.process.headline}
                    </p>
                    <ol className="mt-5 space-y-5">
                      {contactPage.process.items.map((item) => (
                        <li key={item.step} className="flex gap-4">
                          <span className="font-mono text-xs font-medium tracking-wide text-[#1E60FF]">
                            {item.step}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-[#051937]">{item.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                              {item.body}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </aside>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </main>
  );
}
