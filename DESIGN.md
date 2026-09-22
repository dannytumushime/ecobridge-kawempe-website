---
# gstack: design-md-format=spec
name: ECO-BRIDGE KAWEMPE
description: A community-based organization's public record — warm, real environmental work made verifiable through its own governance documents.
colors:
  primary: "#0B3D2E"        # deep forest green, the org's own brand color
  on-primary: "#F5F1E8"     # warm paper white
  surface: "#FBFAF6"        # light warm neutral
  text: "#14231D"           # near-black, slight green tint
  text-muted: "#5C6B63"
  accent: "#C98A3E"         # warm ochre, not terracotta
  success: "#2F7A4F"
  warning: "#B8862B"
  error: "#B3392C"
typography:
  display:
    fontFamily: "Clash Grotesk"
    fontWeight: 600
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Sans 3"
    fontSize: 1rem
    lineHeight: 1.6
  label:
    fontFamily: "Source Sans 3"
    fontSize: 0.75rem
    letterSpacing: 0.06em
  mono:
    fontFamily: "JetBrains Mono"
    fontFeature: tnum
rounded:
  sm: 4px
  md: 6px
  lg: 10px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-hover:
    backgroundColor: "#0F4F3B"
  input:
    borderColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  nav-link:
    textColor: "{colors.text}"
  ledger-entry:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.text-muted}"
    labelFontFamily: "{typography.mono.fontFamily}"
---

# ECO-BRIDGE KAWEMPE

## Overview

**Creative North Star:** Organic/Natural warmth grounded by a Civic Registry structure — every claim the site makes is backed by a document you can actually open, styled like a public record rather than marketing copy.

**Product context:** A 21-member volunteer environmental CBO in Kawempe Division, Kampala, mid-registration with KCCA. Primary audience: the KCCA registration officer, funder program officers doing due diligence, and the Executive Committee/Secretary who maintain the site. Secondary audience: beneficiary communities and potential members.

**Mode per surface:**
- Homepage / About / Programs: **Persuade** — warm, photo-led, real work up front.
- Governance / Verify Us page: **Read** — dense, structured, document-forward, mono accents for verifiable facts.
- CMS admin (Decap): **Operate** — plain, functional, no decoration; out of scope for this DESIGN.md.

**Reference sites:** No live competitor screenshots (Aside browser unavailable in this environment); direction informed by written research on 2026 nonprofit web best practices — differentiated visitor paths, authentic photography over stock, transparency as the primary trust signal.

**Key characteristics:**
- Deep forest green + warm paper, not the default NGO leaf-green-and-white template
- Registration numbers, dates, and committee names set in monospace — signals "this is a record," not copy
- Only real photography (10 documented activity photos); no stock images, no illustrated icons
- Grid-disciplined, predictable layout — this is a site people need to trust, not be dazzled by

## Colors

**Strategy:** Committed — deep forest green (#0B3D2E) owns the page. It's already the org's own brand color (used in the KCCA registration minutes table headers), so adopting it site-wide is continuity, not a new choice.

**Light or dark:** Light. The use scene is a funder or KCCA officer reading dense governance content, often on a mobile phone in daylight in Kampala — light, high-contrast, paper-like surfaces read best in that scene.

Primary green carries all interactive emphasis (links, buttons, active nav). The ochre accent (#C98A3E) is reserved for one thing only: marking anything the visitor can independently verify (a "Verified" badge, a document download link, a registration date) — so accent color becomes a learned signal, not decoration. Neutrals (surface #FBFAF6, text-muted #5C6B63) derive from the same warm-green-adjacent temperature as the primary, so the palette never feels like green-on-generic-gray.

## Typography

Three faces, three jobs, no overlap:

- **Clash Grotesk** (Fontshare, free) — display only. Geometric, confident, unfamiliar enough to not read as a training-data default. Headlines and section titles only; never body copy.
- **Source Sans 3** (Google Fonts, free) — body and UI. Built for long-form reading, which matters here: visitors will actually read Constitution excerpts and activity reports, not just skim a landing page.
- **JetBrains Mono** (Google Fonts, free) — reserved exclusively for verifiable data: registration numbers, dates, UGX figures, committee member names in the governance table, file sizes on document downloads. This is the typographic expression of "verify us" — if it's in mono, you can check it against the source document.

Loading: `<link>` from Fontshare (Clash Grotesk) and Google Fonts (Source Sans 3, JetBrains Mono) with `font-display: swap`; subset to Latin.

Scale: display starts at clamp(2rem, 5vw, 3.5rem) for the H1 and steps down by roughly 1.333x per level — deliberately not a single-weight-does-everything system, since one of the anti-patterns this design avoids is headings within a step of body size.

## Layout

Grid-disciplined: a single 12-column grid, max content width 1120px, consistent gutters. No asymmetric editorial breaks — the civic-registry framing depends on predictability. Section rhythm varies in height and density (photo-led sections run tall and loose; the governance/ledger section runs dense and tabular) so pages don't fall into cookie-cutter same-height-section slop despite the disciplined grid.

Mobile-first: single column below 640px, most visitors will be on phones. Breakpoints at 640px (tablet) and 1024px (desktop).

## Elevation & Depth

Minimal elevation. Cards use a 1px border in text-muted rather than a drop shadow — this is a document-styled site, and documents have edges, not shadows. Where depth is needed (e.g. a modal for a photo lightbox), use a soft offset shadow (0 4px 16px rgba(20,35,29,0.12)), never a zero-offset glow.

## Shapes

Small, restrained radii throughout (sm 4px / md 6px / lg 10px) — rounded enough to feel human, not so rounded it reads as a consumer app. Nested elements use outer radius minus the gap, never the same radius nested inside itself.

## Components

- **button-primary:** solid forest green, warm paper text, sm radius. Hover darkens to #0F4F3B — no gradient.
- **ledger-entry** (governance table rows — Executive Committee members, registration dates, financial line items): surface background, 1px text-muted border, label/value pairs with the value in mono. This is the component that carries the "public record" feeling.
- **card:** used sparingly (program summaries only) — surface background, md radius, 1px border, never nested inside another card.
- **input / nav-link:** plain, no unnecessary decoration; focus states use a 2px primary-color outline for accessibility.

States: every interactive component defines hover, focus-visible (2px solid accent outline, never removed), active (slightly darker fill), and disabled (50% opacity, no pointer events).

## Do's and Don'ts

- Do: set every verifiable fact (dates, figures, names, registration numbers) in JetBrains Mono, consistently, everywhere.
- Do: use only the 10 real activity photos; if a section has no real photo, use a plain color block, never a stock substitute.
- Do: let the governance/ledger pages be dense and document-like — resist the urge to "soften" them with marketing tone.
- Do: keep the accent color (ochre) rare — it means "you can verify this," not "this is a highlight."
- Don't: use icons-in-colored-circles, 3-column feature grids, or any stock-photo hero.
- Don't: round every corner the same amount, or nest cards inside cards.
- Don't: add decorative blobs, gradient text, or a testimonial row with invented quotes.
- Don't: let Clash Grotesk appear in body copy, or Source Sans 3 appear in a verifiable-data field.

## Motion

- **Approach:** minimal-functional — this is a credibility site, not a product demo. Motion should never be the reason someone remembers the page.
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(80ms) short(180ms) medium(300ms) — nothing longer.
- **The one authored moment:** on the Verify Us / governance page, each ledger entry fades in with a very slight upward drift (8px) as it scrolls into view, staggered by ~40ms per row — reinforces the "this is a record being revealed to you" feeling without being showy.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-22 | Initial design system created | Created by /design-consultation from the office-hours design doc and prior NGO-landscape research; adopts the org's existing brand green rather than inventing a new palette |
