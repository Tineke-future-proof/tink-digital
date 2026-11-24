export type Pillar = {
  letter: "T" | "I" | "N" | "K";
  word: string;
  slug: string;
  title: string;
  summary: string;
  intro: string;
  services: string[];
};

export const pillars: Pillar[] = [
  {
    letter: "T",
    word: "Trusted",
    slug: "trusted",
    title: "Brand strategy and communications",
    summary: "Clear positioning and messaging that people, and the AI tools they ask, can rely on.",
    intro:
      "Before anyone chooses you, they need to trust you. That comes from a clear brand, consistent information everywhere you appear, and communications that hold up when it matters. I bring nearly two decades of brand management and PR, from FMCG launches to crisis communication.",
    services: [
      "Brand strategy and positioning",
      "Tone of voice and key messaging",
      "PR and media relations",
      "Crisis and issues communication",
      "Trust signals: author profiles, reviews and consistent business information",
    ],
  },
  {
    letter: "I",
    word: "Indexed",
    slug: "indexed",
    title: "SEO and website builds",
    summary: "Fast, well-structured websites that search engines and AI can crawl, read and understand.",
    intro:
      "If search engines can't crawl and understand your site, nothing else matters. I fix the technical foundations, add the structured data that helps machines understand who you are, and build websites that are quick, clear and easy to keep up to date.",
    services: [
      "Technical SEO audits and fixes",
      "Schema and structured data",
      "Entity optimisation",
      "Website builds on Next.js, Shopify and HubSpot",
      "Site speed and Core Web Vitals",
    ],
  },
  {
    letter: "N",
    word: "Noticed",
    slug: "noticed",
    title: "AEO and digital advertising",
    summary: "Show up when people ask ChatGPT, Google and other AI tools for a recommendation.",
    intro:
      "More people now ask an AI for recommendations before they ever click a link. Answer engine optimisation (AEO) is how you make sure your brand is part of that answer. I pair it with targeted digital advertising so you're seen in the places that count.",
    services: [
      "AEO and AI search visibility",
      "AI visibility tracking and prompt research",
      "ChatGPT business profile setup",
      "Search and social advertising",
      "Keyword and competitor research",
    ],
  },
  {
    letter: "K",
    word: "Known",
    slug: "known",
    title: "Content, email and reporting",
    summary: "Content and email that build familiarity, and reports that tell you what's working.",
    intro:
      "Being known means people remember you and come back. I create content that answers real questions, build email journeys that keep you front of mind, and report on performance as a story you can act on, not a spreadsheet of numbers.",
    services: [
      "Content strategy and creation",
      "Blogs, landing pages and product copy",
      "Email nurture journeys and CRM automation in HubSpot",
      "Performance reporting that tells a story",
      "Ongoing monthly support",
    ],
  },
];

export const faqs = [
  {
    q: "What is AEO?",
    a: "AEO stands for answer engine optimisation. It's the work of making sure your brand is understood, cited and recommended by AI tools like ChatGPT and Google's AI answers, not just ranked in traditional search results.",
  },
  {
    q: "Do I still need SEO if I'm doing AEO?",
    a: "Yes. AI tools lean heavily on content they can find, crawl and trust, so strong SEO foundations make AEO work. I treat them as one joined-up programme.",
  },
  {
    q: "Do you work with businesses outside New Zealand?",
    a: "Yes. I'm based in Whangamatā and work with brands across New Zealand and Australia.",
  },
  {
    q: "Which platforms do you build websites on?",
    a: "Next.js on Vercel, Shopify and HubSpot. I'll recommend the one that suits your business, your budget and how much you want to manage yourself.",
  },
  {
    q: "Can you work alongside my in-house team or agency?",
    a: "Absolutely. A lot of my work is reviewing, guiding and upskilling in-house marketers so the improvements stick.",
  },
];
