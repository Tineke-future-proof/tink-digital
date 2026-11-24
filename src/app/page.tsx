import Link from "next/link";
import { ButtonLink, Container, CtaBand, Eyebrow } from "@/components/ui";
import { pillars } from "@/content/services";
import { featured, work } from "@/content/work";

const proofPoints = [
  { label: "Years in marketing", value: "20" },
  { label: "Where I've worked", value: "FMCG, beauty, health, finance, agency" },
  { label: "Where I work", value: "New Zealand and Australia" },
];

export default function Home() {
  const agencyAeo = work[0];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <div aria-hidden className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue md:-top-24 md:-right-24 md:h-[28rem] md:w-[28rem]" />
        <Container className="relative py-20 md:py-32">
          <Eyebrow>Trusted • Indexed • Noticed • Known</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-[5.5rem]">
            Get found, understood and chosen<span className="dot" />
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl">
            I help brands show up where people are looking, on Google and in AI answers, and in the real world.
            AEO, SEO, website builds, strategy, digital advertising and content, joined up.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              How I can help
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* TINK */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What I do</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl">Four things every brand needs to be</h2>
            <p className="mt-5 text-lg text-muted">
              Tink stands for what I help you become. Each one builds on the last, and together they make you the
              obvious choice.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-rule bg-rule md:grid-cols-2">
            {pillars.map((p) => (
              <Link
                key={p.slug}
                href={`/services#${p.slug}`}
                className="group bg-white p-8 transition-colors hover:bg-ink hover:text-white md:p-10"
              >
                <p className="font-serif text-6xl font-semibold text-blue group-hover:text-lavender">{p.letter}</p>
                <h3 className="mt-4 text-2xl md:text-3xl">{p.word}</h3>
                <p className="eyebrow mt-2 !tracking-[0.18em] text-muted group-hover:text-white/60">{p.title}</p>
                <p className="mt-4 text-muted group-hover:text-white/80">{p.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-ink py-20 text-white md:py-28">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow text-lavender">Why it matters now</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Search has changed. Most marketing hasn&apos;t caught up.</h2>
          </div>
          <div className="space-y-5 text-lg text-white/80">
            <p>
              People still search on Google, but more and more of them ask ChatGPT, Google&apos;s AI answers and
              other tools to recommend a business. If those tools don&apos;t know who you are, or describe you
              wrong, you&apos;re not in the conversation.
            </p>
            <p>
              I&apos;ve spent the past year building AEO from the ground up and testing it in public. I bring that
              together with nearly two decades of brand, PR and digital marketing, so the technical work and the
              story you tell actually line up.
            </p>
          </div>
        </Container>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-28">
        <Container>
          <Eyebrow>Selected work</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[agencyAeo, featured].map((item) => (
              <article key={item.title} className="flex flex-col rounded-3xl border border-rule bg-white p-8 md:p-10">
                <p className="text-sm text-muted">{item.context}</p>
                <h3 className="mt-3 text-2xl md:text-3xl">{item.title}</h3>
                <p className="mt-4 text-muted">{item.body}</p>
                {item.result && <p className="mt-6 font-serif text-xl text-blue">{item.result}</p>}
                {item.status && (
                  <p className="mt-6 inline-flex w-fit rounded-full bg-paper px-3 py-1 text-sm font-semibold text-blue">
                    {item.status}
                  </p>
                )}
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/work" variant="secondary">
              See more work
            </ButtonLink>
          </div>

          <dl className="mt-20 grid gap-8 border-t border-rule pt-10 md:grid-cols-3">
            {proofPoints.map((p) => (
              <div key={p.label}>
                <dt className="eyebrow text-muted">{p.label}</dt>
                <dd className="mt-3 font-serif text-2xl">{p.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
