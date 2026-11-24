import Link from "next/link";
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import Doodle, { Note, type DoodleName } from "./Doodle";

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

export function PageHero({
  eyebrow,
  title,
  intro,
  doodle = "squiggle",
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  doodle?: DoodleName;
  note?: string;
}) {
  return (
    <section className="relative border-b border-rule pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="absolute top-20 right-8 hidden w-60 flex-col items-center text-graphite lg:flex xl:right-[calc((100vw-72rem)/2+3rem)]">
        <Doodle name={doodle} className="h-28 w-36 text-blue" />
        {note && <Note className="mt-3 -rotate-3 text-center">{note}</Note>}
      </div>
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl"><DotI>{title}</DotI></h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{intro}</p>}
      </Container>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-blue text-white">
      <Doodle name="loops" className="absolute -bottom-2 left-1/3 hidden h-12 w-52 text-white/40 md:block" />
      <Doodle name="sparkle" className="absolute top-8 right-1/3 hidden h-8 w-8 text-lavender md:block" />
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
        <div>
          <p className="eyebrow text-lavender">Let&apos;s talk</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl"><DotI>
            Ready to be found, understood and chosen
          </DotI></h2>
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

// Swaps the dot on every lowercase "i" for the brand's blue dot, like the logo.
// Used inside H1 and H2 headings only.
function dotWord(word: string, keyBase: string): ReactNode[] {
  return word.split(/(i)/).map((part, n) =>
    part === "i" ? (
      <span key={`${keyBase}-${n}`} className="ti">
        {"\u0131"}
      </span>
    ) : (
      part
    ),
  );
}

function dotText(text: string, keyBase: string): ReactNode[] {
  // Split on spaces and keep each word with an i on one line, so it can't break mid-word.
  return text.split(/(\s+)/).map((word, n) =>
    word.includes("i") ? (
      <span key={`${keyBase}-w${n}`} className="whitespace-nowrap">
        {dotWord(word, `${keyBase}-w${n}`)}
      </span>
    ) : (
      word
    ),
  );
}

function dotNode(node: ReactNode, key: string): ReactNode {
  if (typeof node === "string") return dotText(node, key);
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.props.children === undefined) return el;
    return cloneElement(el, undefined, ...Children.toArray(el.props.children).map((c, i) => dotNode(c, `${key}-${i}`)));
  }
  return node;
}

export function DotI({ children }: { children: ReactNode }) {
  return (
    <>
      {Children.toArray(children).map((c, i) => (
        <span key={i} className="contents">
          {dotNode(c, String(i))}
        </span>
      ))}
    </>
  );
}
