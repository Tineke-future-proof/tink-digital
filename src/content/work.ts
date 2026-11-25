// Client work is described without names, except where the client has agreed to be named.

export type WorkItem = {
  title: string;
  context: string;
  body: string;
  pillars: ("Trusted" | "Indexed" | "Noticed" | "Known")[];
  tags: string[];
  result?: string;
  status?: string;
  link?: string;
};

export const featured: WorkItem = {
  title: "Diamond Thai Boxing",
  context: "Muay Thai gym, Whangamatā",
  body: "A new website for a local Muay Thai gym, built in just a week, with supporting social posts and a content calendar.",
  pillars: ["Indexed", "Known"],
  tags: ["Website build", "Local SEO", "Schema"],
  status: "Visit the live site",
  link: "https://www.diamondthaiwhanga.co",
};

// Hidden for now (not shown on the site). Webb Design & Build is a content and visibility engagement,
// not a website build: rewrite this before showing it again.
export const upcoming: WorkItem = {
  title: "Webb Design & Build",
  context: "Design and build, Whangamatā",
  body: "Content creation and visibility for a licensed design-and-build firm creating quality beach homes.",
  pillars: ["Noticed", "Known"],
  tags: ["Content", "Visibility"],
  status: "Coming soon",
};

export const work: WorkItem[] = [
  {
    title: "Building AEO practice",
    context: "Digital agency, New Zealand and Australia",
    body: "Answer engine optimisation capability: the methodology, schema and entity optimisation, audits, and monthly reporting.",
    pillars: ["Noticed", "Indexed"],
    tags: ["AEO", "Schema", "Entity optimisation"],
  },
  {
    title: "Moving an agency website off a hosted CMS",
    context: "Digital agency",
    body: "Worked on the move of an agency website from HubSpot CMS to Next.js on Vercel, built with Claude Code, followed by performance tuning to make the new site faster.",
    pillars: ["Indexed"],
    tags: ["Website build", "Migration", "Performance"],
  },
  {
    title: "Email nurture for an education brand",
    context: "Education provider, Australia and New Zealand",
    body: "Designed and built HubSpot email nurture journeys for two distinct audiences, alongside campaign content, technical SEO fixes and monthly performance reporting.",
    pillars: ["Known", "Indexed"],
    tags: ["HubSpot", "Email nurture", "Reporting"],
  },
  {
    title: "SEO and AEO for a New Zealand consumer brand",
    context: "Consumer products, New Zealand",
    body: "Ongoing SEO and AEO, marketing automation and product launch support, working alongside the in-house marketing team and reviewing their SEO work.",
    pillars: ["Noticed", "Indexed", "Known"],
    tags: ["SEO", "AEO", "Automation", "Product launch"],
  },
  {
    title: "Audit and reporting for a health retailer",
    context: "Pharmacy and health retailer on Shopify",
    body: "An SEO and AEO audit, plus monthly performance reporting that explains what changed and why it matters.",
    pillars: ["Indexed", "Known"],
    tags: ["Shopify", "SEO audit", "Reporting"],
  },
  {
    title: "Shopify build for a fashion boutique",
    context: "Independent fashion retailer",
    body: "A full Shopify build, from setup through to launch, with launch support afterwards.",
    pillars: ["Indexed", "Known"],
    tags: ["Shopify", "Website build"],
  },
];
