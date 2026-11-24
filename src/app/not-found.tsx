import { ButtonLink, Container, DotI } from "@/components/ui";
import Doodle from "@/components/Doodle";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Doodle name="squiggle" className="h-10 w-28 text-blue" />
        <p className="eyebrow mt-4 text-blue">404</p>
        <h1 className="mt-5 text-5xl md:text-7xl"><DotI>
          This page isn&apos;t indexed
        </DotI></h1>
        <p className="mt-6 max-w-xl text-lg text-muted">Ironic, we know. Let&apos;s get you back on track.</p>
        <div className="mt-10">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
