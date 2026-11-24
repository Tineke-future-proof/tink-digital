import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";
import { Container } from "./ui";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="Tink Digital home" className="shrink-0">
          <Image src="/brand/tink-digital-horizontal-light.svg" alt="Tink Digital" width={150} height={37} priority />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.href === "/contact" ? (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue"
              >
                {item.label}
              </Link>
            ) : (
              <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-blue">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-ink px-4 py-2 text-sm font-semibold">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-3 flex w-56 flex-col rounded-2xl border border-rule bg-white p-3 shadow-lg"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 font-medium hover:bg-paper">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
