import Link from "next/link";
import { ButtonLink, Container, CtaBand, Eyebrow, DotI } from "@/components/ui";
import Doodle, { Note } from "@/components/Doodle";
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
        <Doodle name="spiral" className="absolute top-1/2 left-4 hidden h-24 w-24 -translate-y-1/2 text-graphite 2xl:block" />
        <div className="absolute top-80 right-10 hidden w-56 text-graphite lg:block md:top-[29rem]">
          <Doodle name="arrow" className="h-20 w-28 -scale-x-100 rotate-[-20deg]" />
          <Note className="mt-1 -rotate-3">psst... AI reads this too</Note>
        </div>
        <Container className="relative py-20 md:py-32">
          <div className="flex items-center gap-3">
            <Eyebrow>Trusted • Indexed • Noticed • Known</Eyebrow>
            <Doodle name="sparkle" className="h-6 w-6 text-blue" strokeWidth={2} />
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-[5.5rem]"><DotI>
            Get found, understood and{" "}
            <span className="relative inline-block">
              chosen
              <Doodle name="underline" className="absolute -bottom-3 left-0 h-4 w-full text-blue md:-bottom-5 md:h-6" strokeWidth={3.5} />
            </span>
          </DotI></h1>
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
            <h2 className="mt-4 text-4xl md:text-5xl"><DotI>
              <span className="relative inline-block">
                Four
                <Doodle name="circle" className="absolute -inset-x-6 -inset-y-4 h-[calc(100%+2rem)] w-[calc(100%+3rem)] text-blue" />
              </span>{" "}
              things every brand needs to be
            </DotI></h2>
            <p className="mt-5 text-lg text-muted">
              Tink stands for what I help you become. Each one builds on the last, and together they make you the
              obvious choice.
            </p>
          </div>
          <div className="relative mt-14">
          <div className="absolute -top-16 right-6 hidden items-end gap-2 text-graphite lg:flex">
            <Note className="-rotate-2">pick one, or all four</Note>
            <Doodle name="arrowDown" className="h-20 w-12" />
          </div>
          <Doodle name="star" className="absolute -bottom-8 -left-8 hidden h-16 w-16 text-blue lg:block" />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-rule bg-rule md:grid-cols-2">
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
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="relative bg-ink py-20 text-white md:py-28">
        <Doodle name="loops" className="absolute top-10 right-8 hidden h-10 w-40 text-lavender lg:block" />
        <Doodle name="hatch" className="absolute bottom-10 left-6 hidden h-16 w-16 text-white/30 xl:block" />
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow text-lavender">Why it matters now</p>
            <h2 className="mt-4 text-4xl md:text-5xl"><DotI>Search has changed. Most marketing hasn&apos;t caught up.</DotI></h2>
            <Note className="mt-6 -rotate-2 text-lavender">the bit most marketing skips</Note>
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
          <div className="flex items-center gap-3">
            <Eyebrow>Selected work</Eyebrow>
            <Doodle name="squiggle" className="h-5 w-12 text-blue" />
          </div>
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
          <div className="mt-10 flex items-center gap-4">
            <ButtonLink href="/work" variant="secondary">
              See more work
            </ButtonLink>
            <div className="hidden items-center gap-2 text-graphite sm:flex">
              <Doodle name="arrow" className="h-10 w-16 -scale-x-100 rotate-[10deg]" />
              <Note className="rotate-2">more this way</Note>
            </div>
          </div>

          <dl className="mt-20 grid gap-8 border-t border-rule pt-10 md:grid-cols-3">
            {proofPoints.map((p) => (
              <div key={p.label}>
                <dt className="eyebrow text-muted">{p.label}</dt>
                <dd className="mt-3 flex items-start gap-2 font-serif text-2xl">
                  <Doodle name="check" className="mt-1 h-6 w-6 shrink-0 text-blue" />
                  {p.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
