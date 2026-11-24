import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow text-blue ${className}`}>{children}</p>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary: "bg-blue text-white hover:bg-ink",
    secondary: "border border-ink text-ink hover:bg-ink hover:text-white",
    light: "bg-white text-blue hover:bg-ink hover:text-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section className="border-b border-rule pt-16 pb-14 md:pt-24 md:pb-20">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{intro}</p>}
      </Container>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-blue text-white">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div>
          <p className="eyebrow text-lavender">Let&apos;s talk</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">
            Ready to be found, understood and chosen<span className="dot !bg-white" />
          </h2>
        </div>
        <ButtonLink href="/contact" variant="light">
          Start a conversation
        </ButtonLink>
      </Container>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
