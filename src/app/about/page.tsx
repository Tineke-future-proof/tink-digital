import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaBand, PageHero, DotI } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Tineke Madgwick",
  description:
    "Tineke Madgwick has around 20 years in brand, PR and digital marketing across health, beauty, financial services and luxury goods, and built an agency AEO practice from the ground up.",
  alternates: { canonical: "/about" },
};

// Add a "years" value to any role to show time spent, e.g. years: "6 years".
const career: { org: string; role: string; years?: string }[] = [
  { org: "Digital agency, New Zealand", role: "Brand Steward. Built the agency's AEO capability from the ground up." },
  { org: "Health and wellness", role: "Marketing Manager, New Zealand, plus FMCG PR." },
  { org: "Beauty and pharmaceuticals, Melbourne", role: "Brand and product management." },
  { org: "Financial services", role: "Crisis communication management." },
  { org: "Luxury goods", role: "Business development." },
]

const credentials = [
  "Degree in Communications, majoring in Public Relations",
  "Micro-credential: SEO Strategy (DMS502MC)",
  "Micro-credential: AI in Marketing Practice (DMS507)",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        doodle="bubble"
        note="kia ora!"
        eyebrow="About"
        title={
          <>
            Hi, I&apos;m Tineke
          </>
        }
        intro="I help brands get found, understood and chosen, online and in the real world."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-14 md:grid-cols-[1.3fr_0.7fr]">
          <div className="prose-tink max-w-2xl text-lg">
            <p>
              I&apos;ve spent around 20 years in marketing, across brand management, product management, PR and
              digital strategy. I&apos;ve looked after household names in health, beauty and wellness, managed
              communications through a crisis, and sold luxury goods. That breadth is why I care as much about the
              story a brand tells as the technical work behind it.
            </p>
            <p>
              Most recently I built an agency&apos;s answer engine optimisation (AEO) practice from scratch, and
              tested it in public on the agency&apos;s own website. I became the go-to person for SEO, AEO, schema
              and entity optimisation, and worked hands-on across Shopify, HubSpot and custom website builds.
            </p>
            <p>
              Tink Digital brings all of that together. You get senior, joined-up thinking without the agency
              layers, and someone who&apos;ll tell you plainly what&apos;s working and what isn&apos;t.
            </p>
            <p>
              I&apos;m based in Whangamatā on the Coromandel Peninsula and work with brands across New Zealand and
              Australia. Locally, I&apos;m the guest judge at the Whangamatā Area School speech finals each year.
            </p>
          </div>
          <div className="flex items-start justify-center rounded-3xl bg-white p-10">
            <Image
              src="/brand/tink-digital-acronym-light.svg"
              alt="Trusted, Indexed, Noticed, Known"
              width={240}
              height={270}
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-rule bg-white py-16 md:py-24">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl"><DotI>Where I&apos;ve worked</DotI></h2>
            <ul className="mt-8 divide-y divide-rule border-y border-rule">
              {career.map((c) => (
                <li key={c.org} className="py-5">
                  <p className="flex items-baseline justify-between gap-4 font-serif text-xl">
                    {c.org}
                    {c.years && <span className="shrink-0 font-sans text-sm text-muted">{c.years}</span>}
                  </p>
                  <p className="mt-1 text-muted">{c.role}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl"><DotI>Qualifications</DotI></h2>
            <ul className="mt-8 divide-y divide-rule border-y border-rule">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-4 py-5">
                  <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-blue" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
