import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Tink Digital about AEO, SEO, website builds, strategy, digital advertising or content.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const options = [
    ...(site.email ? [{ label: "Email", value: site.email, href: `mailto:${site.email}` }] : []),
    { label: "Phone", value: site.phone, href: site.phoneHref },
    { label: "LinkedIn", value: "Tineke Madgwick", href: site.linkedin },
  ];

  return (
    <>
      <PageHero
        doodle="arrowDown"
        note="go on, say hi"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk
          </>
        }
        intro="Tell me a bit about your business and what you'd like to change. I'll come back to you with honest thoughts on where to start, whether or not we end up working together."
      />
      <section className="py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {options.map((o) => (
            <a
              key={o.label}
              href={o.href}
              {...(o.label === "LinkedIn" ? { target: "_blank", rel: "noopener" } : {})}
              className="group rounded-3xl border border-rule bg-white p-8 transition-colors hover:border-blue hover:bg-blue hover:text-white"
            >
              <p className="eyebrow text-blue group-hover:text-lavender">{o.label}</p>
              <p className="mt-4 font-serif text-2xl">{o.value}</p>
            </a>
          ))}
        </Container>
        <Container className="mt-12">
          <p className="text-muted">Based in {site.location}. Working with brands across New Zealand and Australia.</p>
        </Container>
      </section>
    </>
  );
}
