import type { Metadata } from "next";
import { Container, CtaBand, PageHero, DotI } from "@/components/ui";
import { featured, upcoming, work, type WorkItem } from "@/content/work";

export const metadata: Metadata = {
  title: "Work: helping brands be seen and known online",
  description:
    "AEO, SEO, website builds, strategy, digital advertising and content for brands across New Zealand and Australia.",
  alternates: { canonical: "/work" },
};

const capabilities = [
  { name: "AEO", note: "Getting brands cited and recommended by ChatGPT and Google's AI answers." },
  { name: "SEO", note: "Technical fixes, schema and content that help search engines understand you." },
  { name: "Website builds", note: "Fast, efficient website builds, without the high cost." },
  { name: "Strategy", note: "Positioning, messaging and a plan that joins the channels up." },
  { name: "Digital advertising", note: "Search and social campaigns aimed at the people who matter." },
  { name: "Content creation", note: "Blogs, landing pages, product copy and email that answer real questions." },
];

function Card({ item }: { item: WorkItem }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-rule bg-white p-8">
      <p className="text-sm text-muted">{item.context}</p>
      <h3 className="mt-3 text-2xl">{item.title}</h3>
      <p className="mt-4 flex-1 text-muted">{item.body}</p>
      {item.result && <p className="mt-6 font-serif text-xl text-blue">{item.result}</p>}
      <ul className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <li key={t} className="rounded-full border border-rule px-3 py-1 text-xs font-semibold tracking-wide text-muted">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        doodle="spiral"
        note="a few things we have made"
        eyebrow="Work"
        title={
          <>
            Helping brands be seen and known online
          </>
        }
        intro="Whether it's AEO, SEO, a new website, strategy, digital advertising or content, the goal is the same: make it easy for the right people to find you and choose you."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.name} className="bg-paper p-8">
                <h2 className="text-2xl">{c.name}</h2>
                <p className="mt-3 text-muted">{c.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <Container>
          <p className="eyebrow text-lavender">Featured projects</p>
          <div className="mt-8 divide-y divide-rule-dark border-y border-rule-dark">
            {[featured, upcoming].map((item) => (
              <div key={item.title} className="grid items-center gap-8 py-10 md:grid-cols-2">
                <div>
                  <h2 className="text-4xl md:text-5xl">
                    <DotI>{item.title}</DotI>
                  </h2>
                  <p className="mt-2 text-white/60">{item.context}</p>
                </div>
                <div>
                  <p className="text-lg text-white/80">{item.body}</p>
                  <p className="mt-6 inline-flex rounded-full bg-blue px-4 py-1.5 text-sm font-semibold">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <h2 className="max-w-3xl text-4xl md:text-5xl"><DotI>Agency and client work</DotI></h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Much of our founder&apos;s recent work was delivered inside an agency team, so client names stay
            private. Here&apos;s the kind of work we lead.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {work.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
