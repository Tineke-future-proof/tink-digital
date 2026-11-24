import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Insights on AEO, SEO and AI search",
  description: "Practical thinking on AEO, SEO, AI search and digital marketing for New Zealand and Australian brands.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes on getting found<span className="dot" />
          </>
        }
        intro="Practical thinking on AEO, SEO, AI search and digital marketing, written for busy business owners."
      />
      <section className="py-16 md:py-24">
        <Container>
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-rule bg-white p-10 md:p-14">
              <h2 className="text-3xl">First posts are on their way.</h2>
              <p className="mt-4 max-w-xl text-muted">
                In the meantime, follow along on LinkedIn, or get in touch if there&apos;s a question you&apos;d like
                answered.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact">Ask a question</ButtonLink>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-rule border-y border-rule">
              {posts.map((p) => (
                <li key={p.slug} className="py-8">
                  <p className="text-sm text-muted">{p.date}</p>
                  <h2 className="mt-2 text-3xl">
                    <Link href={`/blog/${p.slug}`} className="hover:text-blue">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-muted">{p.excerpt}</p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
