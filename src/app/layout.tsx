import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { PencilDefs } from "@/components/Doodle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tink Digital | AEO, SEO and digital marketing in New Zealand",
    template: "%s | Tink Digital",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NZ",
    images: [{ url: "/brand/tink-digital-primary-on-blue.png", width: 1284, height: 768, alt: "Tink Digital" }],
  },
  robots: site.live ? { index: true, follow: true } : { index: false, follow: false },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.name,
      slogan: site.tagline,
      description: site.description,
      url: site.url,
      logo: `${site.url}/brand/tink-digital-mark-on-blue.png`,
      image: `${site.url}/brand/tink-digital-primary-on-blue.png`,
      telephone: "+64 21 804 603",
      ...(site.email ? { email: site.email } : {}),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Whangamatā",
        addressRegion: "Waikato",
        addressCountry: "NZ",
      },
      areaServed: site.areaServed.map((name) => ({ "@type": "Country", name })),
      founder: { "@id": `${site.url}/about#tineke` },
      knowsAbout: [
        "Answer engine optimisation",
        "Search engine optimisation",
        "Schema markup",
        "Brand strategy",
        "Public relations",
        "Website development",
        "Shopify",
        "HubSpot",
        "Digital advertising",
        "Content marketing",
      ],
      sameAs: [site.linkedin],
    },
    {
      "@type": "Person",
      "@id": `${site.url}/about#tineke`,
      name: site.founder,
      jobTitle: "Founder",
      worksFor: { "@id": `${site.url}/#business` },
      url: `${site.url}/about`,
      sameAs: [site.linkedin],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NZ" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <PencilDefs />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
