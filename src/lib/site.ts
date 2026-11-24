// Single source of truth for Tink Digital's details.
// TODO before launch: set NEXT_PUBLIC_SITE_URL, confirm the contact email, then set NEXT_PUBLIC_SITE_LIVE=true.

export const site = {
  name: "Tink Digital",
  founder: "Tineke Madgwick",
  tagline: "Trusted • Indexed • Noticed • Known",
  positioning: "We help brands get found, understood and chosen, online and in the real world.",
  description:
    "Tink Digital helps New Zealand and Australian brands get found, understood and chosen across Google and AI search, through AEO, SEO, website builds, strategy, digital advertising and content.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tinkdigital.co",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "tineke@tinkdigital.co",
  phone: "021 804 603",
  phoneHref: "tel:+6421804603",
  linkedin: "https://www.linkedin.com/in/tineke-madgwick-26003425/",
  location: "Whangamatā, New Zealand",
  areaServed: ["New Zealand", "Australia"],
  // The site stays out of search engines until this is "true".
  live: process.env.NEXT_PUBLIC_SITE_LIVE === "true",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];
