import type { Metadata } from "next";
import { Container, CtaBand, JsonLd, PageHero, DotI } from "@/components/ui";
import Doodle from "@/components/Doodle";
import { faqs, pillars } from "@/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services: AEO, SEO, website builds and content",
  description:
    "AEO, SEO, website builds, brand strategy, PR, digital advertising, content and HubSpot email, organised around four goals: trusted, indexed, noticed and known.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": pillars.map((p) => ({
      "@type": "Service",
      name: p.title,
      description: p.summary,
      provider: { "@id": `${site.url}/#business` },
      areaServed: site.areaServed,
    })),
  };

  return (
    <>
      <PageHero
        doodle="star"
        note="four ways to be the obvious choice"
        eyebrow="Services"
        title={
          <>
            Trusted. Indexed. Noticed. Known
          </>
        }
        intro="Everything I do is about one thing: making sure the right people find you, understand what you do, and choose you. Pick one area or bring them together."
      />

      {pillars.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className={`scroll-mt-24 border-b border-rule py-16 md:py-24 ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-serif text-8xl font-semibold text-blue">{p.letter}</p>
              <h2 className="mt-4 text-4xl md:text-5xl"><DotI>{p.word}</DotI></h2>
              <p className="eyebrow mt-3 !tracking-[0.18em] text-muted">{p.title}</p>
            </div>
            <div>
              <p className="text-lg md:text-xl">{p.intro}</p>
              <ul className="mt-8 divide-y divide-rule border-y border-rule">
                {p.services.map((s) => (
                  <li key={s} className="flex items-center gap-4 py-4">
                    <Doodle name="check" className="h-5 w-5 shrink-0 text-blue" animate={false} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl md:text-5xl"><DotI>Common questions</DotI></h2>
          <div className="divide-y divide-rule border-y border-rule">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl">
                  {f.q}
                  <span aria-hidden className="text-blue transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
    </>
  );
}
