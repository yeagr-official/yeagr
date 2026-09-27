# Handoff: yeagr brand rebrand

## Overview
This package rebrands the existing **yeagr** Next.js site (programmatic-SEO flight/route
intelligence) with a new brand identity inspired by **Chuck Yeager** — the first pilot to
break the sound barrier. The new system is **premium, pioneer-spirited**: deep **Altitude
Navy**, a faceted **brushed-silver star** (the general's mark), and **brass** as the
"heat-of-flight" accent. Wordmark is lowercase **yeagr** in a geometric typeface.

The task is a **repaint, not a rebuild.** The site's information architecture, pSEO routes
(`/routes`, `/airports`, `/airlines`, `/connections`, `/guides`), data, structured data
(JSON-LD), sitemap, robots, and analytics all **stay exactly as they are** — that machinery
is what makes the site Google-first, and it must not regress. Only the *visual layer*
changes: colors, fonts, the logo, and a few CSS surfaces.

## About the design files
The files in `design-references/` are **design references created in HTML** — prototypes
showing the intended look and feel, **not** production code to copy line-for-line:
- `Yeagr Logo Explorations.dc.html` — 4 logo directions + the recommended mark across light/dark/mono/brass and down to favicon size.
- `Yeagr Brand Guidelines.dc.html` — colors (with hex/oklch), typography, voice, logo anatomy, clearspace, misuse.
- `Yeagr Homepage.dc.html` — a premium landing concept (aspirational/consumer tone).

> Open them in a browser to view (they load the sibling `support.js`). They are the
> **source of truth for the visual language.** Recreate that language in the existing
> Next.js + Tailwind codebase using its established patterns — do not ship the HTML.

The `code/` folder contains **apply-ready replacements** for the real repo files
(`tailwind.config.ts`, `app/globals.css`, `components/logo.tsx`, `app/icon.tsx`) plus a
patch note for `app/layout.tsx`. These ARE meant to be dropped into the repo.

## Fidelity
**High-fidelity.** Colors, type, spacing, and the logo geometry are final. Match them
exactly. The homepage *concept* (`Yeagr Homepage.dc.html`) is more consumer/aspirational
than the current pSEO homepage — treat its **visual styling** as canonical, but keep the
current homepage's **content sections and SEO copy**. Don't replace the route-intelligence
homepage with the marketing concept unless the team explicitly decides to.

---

## The rebrand at a glance

| Layer | Current | New |
|---|---|---|
| Primary dark / ink | `#101214` (near-black) | **`#11203D` Altitude Navy** |
| Light surface | `#F7F8F6` | **`#F2EFE8` Contrail White** (warm) |
| Accent | `#B8FF4D` lime + `#1F6FFF` blue | **`#C8954E` Brass** (single accent) |
| Energy accent | `#FFB84D` amber | **`#E2703A` Boom Orange** (rare, <5%) |
| Metallic | — | **Brushed Silver** gradient (the star) |
| Display / wordmark | Inter, "Yeagr" | **Space Grotesk**, lowercase "yeagr" |
| Body | Inter | **Hanken Grotesk** |
| Mono / data labels | system mono | **Space Mono** |
| Logo | globe + plane + star SVG | **faceted silver 5-point star** |

**Token-name strategy:** the new `tailwind.config.ts` keeps every existing token *name*
(`runway`, `cloud`, `jetstream`, `signal`, `amber`, …) and only repoints the *values*, so
**no className anywhere in the app needs to change**. `jetstream` and `signal` both become
Brass; `runway` becomes navy; `cloud` becomes contrail white. New tokens `silver`, `ink`,
`brass` are added for new work.

---

## Design tokens

```
Altitude Navy   #11203D   oklch(0.26 0.06 258)   primary dark surface + ink text  (token: runway)
Midnight Ink    #0B1426                            deepest panel / hovers          (token: graphite / ink)
Contrail White  #F2EFE8                            primary light surface           (token: cloud)
Brushed Silver  #C2C8D2 (gradient #EDEFF2→#787F8C) the star / hairlines            (token: altitude / silver)
Brass           #C8954E                            primary accent                  (token: jetstream / signal / brass)
Boom Orange     #E2703A                            rare energy accent (<5%)        (token: amber)
Slate text      #5A6172                            secondary body text on light
```
Star gradients: light facet `#FFFFFF → #E4E8EE → #BFC6D1`; dark facet `#9BA1AD → #787F8C → #565D6B` (135° pinwheel).

**Type scale (as used in the references)**
- Display/H1: Space Grotesk 700, `-0.03em` to `-0.05em` tracking, 56–88px hero.
- H2: Space Grotesk 600, `-0.02em`, 34–46px.
- Body: Hanken Grotesk 400/500, 15–20px, line-height ~1.6.
- Eyebrows/labels/data: Space Mono, 11–13px, `0.16–0.28em` letter-spacing, often Brass.

**Radius / shadow:** radii 3–6px (crisp, not pill). `shadow-flight: 0 24px 80px rgba(11,20,38,0.16)`.

---

## Files to change (exact)

1. **`tailwind.config.ts`** → replace with `code/tailwind.config.ts` (repoints colors, wires font CSS vars, adds `font-display`).
2. **`app/globals.css`** → replace with `code/globals.css` (surface, selection, `.flight-grid`, `.route-line`, `.dark-panel`, and a base rule giving all headings the display font — so headings get Space Grotesk with zero per-element edits).
3. **`components/logo.tsx`** → replace with `code/logo.tsx` (faceted silver `YeagrMark`, new `YeagrMarkFlat`, lowercase wordmark in `font-display`). Keeps the `Link` + aria pattern; the footer's `[&_span:last-child]:text-cloud` override still works.
4. **`app/layout.tsx`** → apply `code/layout.fonts.patch.tsx`: add the three `next/font/google` imports, put their `.variable`s on `<html>`, update `themeColor` to `#11203D`, refresh brand strings.
5. **`app/icon.tsx`** → replace with `code/icon.tsx`. Then apply the same navy/silver-star treatment to **`app/opengraph-image.tsx`** and **`app/twitter-image.tsx`** (add wordmark + "Break the barrier." in Brass).

That's the whole rebrand. Everything below is verification, not new work.

## Component-by-component check (no code changes needed — verify after token swap)
- **`site-header.tsx`** — sticky `bg-cloud/86` → warm white blur; nav hover `hover:bg-runway/5` → navy tint; CTA `bg-runway` → navy. ✔ inherits.
- **`route-search.tsx`** — `.scan-card`, navy submit button, mono labels. ✔ inherits. Optionally add the brass "to" node dot seen in the homepage concept.
- **`footer.tsx`** — `bg-runway` → navy; link `hover:text-signal` → brass. ✔ inherits.
- **Cards** (`route-card`, `airport-card`, `airline-card`, `guide-card`, `score-bar`, `section-heading`) — eyebrows on `text-jetstream`/`text-signal` → brass; `score-bar` fills that used lime/blue now read as brass. ✔ inherits. **Verify `score-bar` still communicates good/bad** now that the green is gone — if it relied on green=good, introduce a second hue (e.g. navy fill vs. faint track) rather than re-adding green.
- **`app/page.tsx`** — hero `flight-grid`, `dark-panel` preview, `bg-runway` airline section. ✔ inherits. The hero eyebrow uses `text-jetstream` (now brass). Update the hero `<h1>` copy to the brand voice if desired ("Find the smarter way to fly." is fine for SEO; "Break the barrier." is the brand line).

## Interactions & behavior (unchanged)
All existing behavior stays: `RouteSearch` form posts to `/routes` and fires the
`route_search_submitted` PostHog event; `TrackedLink` CTAs keep their event payloads;
sticky header; smooth scroll. The logo gains a subtle `group-hover:-translate-y-0.5` lift
(already in `code/logo.tsx`).

## Voice & copy (optional, from the guidelines)
Test-pilot calm — certain, spare, on the flyer's side. Brand line: **"Break the barrier."**
Avoid hype/exclamations/emoji. Keep SEO-critical titles descriptive; use the brand line as
hero/marketing copy, not as page `<title>`s.

## Assets
- **Star mark**: fully vector, defined inline in `code/logo.tsx` (no image files). Light + dark variants included.
- **Favicon / OG**: regenerated by `app/icon.tsx` / `opengraph-image.tsx` / `twitter-image.tsx` (next/og) — see `code/icon.tsx`.
- **Photography**: the homepage concept uses striped placeholders labeled `[ DESTINATION PHOTO ]` — supply real imagery before using that layout. The current pSEO pages use no photography and don't need any.
- **Fonts**: Space Grotesk, Hanken Grotesk, Space Mono — all Google Fonts, self-hosted via `next/font` (no manual files).

---

## Go live (from this repo's package.json)
The site is a **static export** (`next.config.ts: output: "export"`) deployed to
**Cloudflare Pages** via Wrangler.

```bash
# 1. install + run the rebrand locally
npm install
npm run dev                 # verify the repaint at http://localhost:3000

# 2. lint + production build (static export -> ./out)
npm run lint
npm run build:cloudflare    # sets NEXT_PUBLIC_SITE_URL=https://www.yeagr.com

# 3. deploy
npm run deploy:cloudflare   # wrangler pages deploy out --project-name yeagr --branch main

# 4. ping search engines after deploy (preserves the Google-first edge)
npm run seo:indexnow
```
Pre-deploy checklist: contrast passes on navy/brass (brass text on navy is fine for
labels; for small body text prefer `cloud`/`cloud/68`), favicon + OG images regenerated,
`themeColor` updated, no leftover lime/blue, `score-bar` legibility confirmed.

## Suggested prompt for Claude Code / Codex
> Apply the yeagr rebrand in this repo. Replace `tailwind.config.ts`, `app/globals.css`,
> `components/logo.tsx`, and `app/icon.tsx` with the versions in
> `design_handoff_yeagr_rebrand/code/`. Apply `layout.fonts.patch.tsx` to `app/layout.tsx`
> (next/font for Space Grotesk + Hanken Grotesk + Space Mono, theme color #11203D). Do NOT
> change routes, data, JSON-LD, sitemap, robots, or analytics. After applying, run
> `npm run lint` and `npm run dev`, then walk every page and confirm no lime-green or blue
> remains and the `score-bar` still reads clearly without green. Match the visual language
> in `design-references/`.
