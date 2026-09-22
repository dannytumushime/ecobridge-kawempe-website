---
# gstack: design-md-format=spec
name: ECO-BRIDGE KAWEMPE
description: A community-based organization's public record. Warm, real environmental work made verifiable through its own governance documents, set in a single confident editorial serif.
colors:
  primary: "#0B3D2E"        # deep forest green, the org's own brand color
  on-primary: "#F5F1E8"     # warm paper white
  surface: "#FBFAF6"        # light warm neutral
  text: "#14231D"           # near-black, slight green tint
  text-muted: "#5C6B63"
  accent: "#A9752E"         # deep antique gold, not bright ochre
  success: "#2F7A4F"
  warning: "#8C6423"
  error: "#8C2E22"
typography:
  display:
    fontFamily: "Georgia"
    fontWeight: 700
    fontSize: "clamp(2.5rem, 6vw, 4.25rem)"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Georgia"
    fontSize: 1.0625rem
    lineHeight: 1.7
  label:
    fontFamily: "Georgia"
    fontStyle: italic
    fontSize: 0.85rem
    letterSpacing: 0.02em
  mono:
    fontFamily: "JetBrains Mono"
    fontFeature: tnum
rounded:
  sm: 3px
  md: 4px
  lg: 6px
  full: 9999px
spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 56px
  2xl: 96px
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

**Creative North Star:** One confident editorial serif, generous whitespace, and a civic-registry structure underneath it. This reads like a well-produced annual report, not a template. Every claim the site makes is backed by a document you can actually open.

**Product context:** A 21-member volunteer environmental CBO in Kawempe Division, Kampala, mid-registration with KCCA. Primary audience: the KCCA registration officer, funder program officers doing due diligence, and the Executive Committee/Secretary who maintain the site. Secondary audience: beneficiary communities and potential members.

**Mode per surface:**
- Homepage / About / Programs: **Persuade**. Warm, photo-led, real work up front.
- Governance / Verify Us page: **Read**. Dense, structured, document-forward, mono accents for verifiable facts.
- CMS admin (Decap): **Operate**. Plain, functional, no decoration; out of scope for this DESIGN.md.

**Reference sites:** No live competitor screenshots (Aside browser unavailable in this environment); direction informed by written research on 2026 nonprofit web best practices plus the client's explicit request for Georgia and a premium, non-generic feel.

**Key characteristics:**
- One typeface family (Georgia) carries the entire voice: display, body, and italic labels. No second sans-serif competing for attention.
- Deep forest green plus warm paper, not the default NGO leaf-green-and-white template.
- Registration numbers, dates, and committee names set in monospace: the one deliberate departure from the serif, and it signals "this is a record," not copy.
- Only real photography (10 documented activity photos); no stock images, no illustrated icons.
- Generous whitespace and a slower, more confident rhythm than a typical NGO landing page.

## Colors

**Strategy:** Committed. Deep forest green (#0B3D2E) owns the page. It is already the org's own brand color (used in the KCCA registration minutes table headers), so adopting it site-wide is continuity, not a new choice.

**Light or dark:** Light. The use scene is a funder or KCCA officer reading dense governance content, often on a mobile phone in daylight in Kampala. Light, high-contrast, paper-like surfaces read best in that scene.

Primary green carries all interactive emphasis (links, buttons, active nav). The gold accent (#A9752E, deepened from an earlier brighter ochre so it reads as considered rather than decorative) is reserved for one thing only: marking anything the visitor can independently verify, such as a document download link or a registration date. Accent color stays a learned signal, never decoration. Neutrals (surface #FBFAF6, text-muted #5C6B63) derive from the same warm temperature as the primary, so the palette never feels like green-on-generic-gray.

## Typography

Two faces, two jobs:

- **Georgia** (system font, licensed for web use on every major OS, zero load time) carries everything: large display headlines, section titles, body copy, and the small italic labels that mark each section ("What we do," "The public record"). One serif doing all of this work, instead of a display face fighting a separate body sans, is what makes the page feel produced rather than assembled from a component library. Georgia was also the family already used in the organization's own registration minutes, so this is a continuity choice, not an arbitrary swap.
- **JetBrains Mono** (Google Fonts, free) is reserved exclusively for verifiable data: registration numbers, dates, UGX figures, committee member names in the governance table. This is the one deliberate contrast in the system, and it is what makes "Verify Us" feel like a real record instead of a claim. Never use it for anything that is not independently checkable.

Loading: Georgia needs no `<link>`, it ships with the OS. JetBrains Mono loads from Google Fonts with `font-display: swap`, subset to Latin.

Scale: display starts at clamp(2.5rem, 6vw, 4.25rem) for the H1, bold weight, tight tracking (-0.01em). Body sits at 1.0625rem with a 1.7 line-height, generous enough that long Constitution excerpts and activity reports stay comfortable to read. Italic labels sit above headings at 0.85rem, understated rather than shouted in tracked small caps.

## Layout

Grid-disciplined: a single 12-column grid, max content width 1120px, consistent gutters. No asymmetric editorial breaks; the civic-registry framing depends on predictability. Whitespace is generous throughout (section padding runs up to 96px on desktop) so the page reads unhurried rather than dense-by-default. Section rhythm still varies in height and density (photo-led sections run tall and loose, the governance ledger runs dense and tabular) so pages do not fall into cookie-cutter same-height-section slop.

Mobile-first: single column below 640px, most visitors will be on phones. Breakpoints at 640px (tablet) and 1024px (desktop).

## Elevation & Depth

Minimal elevation. Cards use a thin hairline border in text-muted rather than a drop shadow; this is a document-styled site, and documents have edges, not shadows. Where depth is needed (a photo lightbox, for instance), use a soft offset shadow (0 8px 24px rgba(20,35,29,0.14)), never a zero-offset glow.

## Shapes

Small, restrained radii throughout (sm 3px / md 4px / lg 6px), tighter than a typical consumer app. This is deliberate: sharper corners read as more formal and considered, which suits a public record. Nested elements use outer radius minus the gap, never the same radius nested inside itself.

## Components

- **button-primary:** solid forest green, warm paper text, sm radius, no gradient. Hover darkens to #0F4F3B.
- **ledger-entry** (governance table rows: Executive Committee members, registration dates, financial line items): surface background, hairline text-muted border, label/value pairs with the value in mono. This is the component that carries the "public record" feeling, and it now sits inside Georgia body copy rather than a sans-serif shell, which sharpens the contrast between "prose" and "fact."
- **card:** used sparingly (program summaries only): surface background, md radius, hairline border, never nested inside another card.
- **input / nav-link:** plain, no unnecessary decoration; focus states use a 2px primary-color outline for accessibility.

States: every interactive component defines hover, focus-visible (2px solid accent outline, never removed), active (slightly darker fill), and disabled (50% opacity, no pointer events).

## Do's and Don'ts

- Do: set every verifiable fact (dates, figures, names, registration numbers) in JetBrains Mono, consistently, everywhere.
- Do: use only the 10 real activity photos; if a section has no real photo, use a plain color block, never a stock substitute.
- Do: let the governance/ledger pages be dense and document-like; resist the urge to soften them with marketing tone.
- Do: keep the accent color (gold) rare. It means "you can verify this," not "this is a highlight."
- Do: write in full sentences with periods and colons. No em dashes anywhere in site copy.
- Don't: use icons-in-colored-circles, 3-column feature grids, or any stock-photo hero.
- Don't: round every corner the same amount, or nest cards inside cards.
- Don't: add decorative blobs, gradient text, or a testimonial row with invented quotes.
- Don't: introduce a second typeface for body or UI text. Georgia carries all of it; mono is the only exception, and only for verifiable data.

## Motion

- **Approach:** minimal-functional. This is a credibility site, not a product demo. Motion should never be the reason someone remembers the page.
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(80ms) short(180ms) medium(300ms). Nothing longer.
- **The one authored moment:** on the Verify Us / governance page, each ledger entry fades in with a very slight upward drift (8px) as it scrolls into view, staggered by roughly 40ms per row. It reinforces the feeling of a record being revealed, without being showy.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-22 | Initial design system created | Created by /design-consultation from the office-hours design doc and prior NGO-landscape research; adopts the org's existing brand green rather than inventing a new palette |
| 2026-09-22 | Typography rebuilt around Georgia; accent deepened; spacing and radii tightened for a more premium feel; em dashes removed from all copy | Client feedback: wanted Georgia specifically, found the prior system too generic, and asked for em dashes to be removed sitewide |
