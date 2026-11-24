# Tink Digital website

Next.js site for Tink Digital, hosted on Vercel.

## Run locally
```
npm install
npm run dev
```

## Before launch (after 6 December 2026)
Set these in Vercel under Project Settings, Environment Variables:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your live domain, `https://www.tinkdigital.co` (already the default) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Your Tink Digital email |
| `NEXT_PUBLIC_SITE_LIVE` | `true` (until this is set, the site tells search engines not to index it) |

Then redeploy.

## Where to edit
- Contact details and site settings: `src/lib/site.ts`
- Services (Trusted, Indexed, Noticed, Known) and FAQs: `src/content/services.ts`
- Case studies: `src/content/work.ts`
- Blog posts: `src/content/posts.ts`
- Logos: `public/brand/`
