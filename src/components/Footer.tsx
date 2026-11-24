import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/brand/tink-digital-primary-white.svg" alt="Tink Digital" width={260} height={130} />
          <p className="mt-6 max-w-sm text-white/70">{site.positioning}</p>
        </div>
        <div>
          <p className="eyebrow text-lavender">Explore</p>
          <ul className="mt-5 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-lavender">Get in touch</p>
          <ul className="mt-5 space-y-2 text-white/80">
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            )}
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.linkedin} className="hover:text-white" rel="noopener" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-rule-dark">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/50 md:flex-row md:justify-between">
          <p>© Tink Digital. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">{site.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
