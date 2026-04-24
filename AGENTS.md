# faion-network-storybook

Component library + design system for faion-net. 123 components, 70+ design tokens.

Repo: `faionfaion/faion-network-storybook`
Stack: React, Storybook, Vite, Tailwind
Runtime: faion-net (`storybook.faion.net`, nginx static from `/var/www/storybook.faion.net/`)

## Deploy

`../deploy-storybook.sh` — push, pull, build-storybook, rsync to webroot.

## Source of truth

This is **the** design-token source. FE syncs from here (Feature 038 sync done).

---

## Extended documentation


## Overview

Design system and component library for Faion Network. Theme: "The Digital Journal".

**Live:** [storybook.faion.net](https://storybook.faion.net)

**Figma:** [Faion network landing](https://www.figma.com/design/JD3ScvEaN311UUe2qnqPGf/Faion-network-landing)

## Commands

```bash
npm run dev           # Vite dev server (port 5173)
npm run storybook     # Storybook dev (port 6006)
npm run build-storybook  # Build static storybook
```

## Deploy

```bash
~/deploy-scripts/deploy-storybook-faion-net.sh
```

## Design System

### Theme: "The Digital Journal"

Visual metaphor: Premium printed media, academic journals, architectural blueprints.

### Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Warm Alabaster | `#FAF9F6` | `--background` | Main canvas |
| Pure Cream | `#FFFFFF` | `--card` | Cards, surfaces |
| Soft Charcoal | `#1C1C1E` | `--foreground` | Primary text |
| Graphite | `#4A4A4A` | `--muted-foreground` | Body text |
| Taupe Grey | `#E5E5E0` | `--border` | Borders |
| Deep Burgundy | `#5D1F2D` | `--primary` | Brand accent |

### Typography

| Type | Font | Usage |
|------|------|-------|
| Serif | Georgia, Merriweather | Headlines, quotes, stats |
| Sans-serif | Inter | Body, UI elements |

### Spacing (8-Point Grid)

All spacing multiples of 8px:
- Micro: 4, 8, 16, 24, 32
- Macro: 48, 64, 80, 120, 160

## Structure

```
src/
├── components/
│   ├── ui/           # Base components (Button, Card, Badge...)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LandingPage.tsx
│   ├── PricingPage.tsx
│   ├── ArticlePage.tsx
│   └── DocumentationPage.tsx
├── stories/          # Storybook stories
├── styles/
│   └── globals.css   # CSS variables, base styles
└── imports/          # SVG paths, assets
```

## Components

### Core UI

| Component | File | Description |
|-----------|------|-------------|
| Button | `ui/Button.tsx` | Primary, secondary, ghost variants |
| Card | `ui/Card.tsx` | White bg, border, hover lift |
| Badge | `ui/Badge.tsx` | Neutral, accent variants |
| Typography | `ui/Typography.tsx` | DisplayH1, HeadingH2/H3, BodyText, StatNumber, Label |

### Layout

| Component | File | Description |
|-----------|------|-------------|
| Header | `Header.tsx` | Logo, nav, auth buttons |
| Footer | `Footer.tsx` | Links, copyright |

### Pages

| Component | File | Description |
|-----------|------|-------------|
| LandingPage | `LandingPage.tsx` | Hero, stats, features, pricing |
| PricingPage | `PricingPage.tsx` | Pricing tiers |
| ArticlePage | `ArticlePage.tsx` | Article template |
| DocumentationPage | `DocumentationPage.tsx` | Docs layout |

## Stories

| Story | Path | Description |
|-------|------|-------------|
| Introduction | `Introduction.stories.tsx` | Design system overview |
| Colors | `Colors.stories.tsx` | Color palette |
| Typography | `Typography.stories.tsx` | Font system |
| Spacing | `Spacing.stories.tsx` | 8-point grid |
| Button | `Button.stories.tsx` | Button variants |
| Card | `Card.stories.tsx` | Card component |
| Badge | `Badge.stories.tsx` | Badge variants |

## Related

- **Constitution:** `~/aidocs/sdd/faion-net/CLAUDE.md`
- **Frontend:** `~/faion-net-fe/`
- **Backend:** `~/faion-net-be/`

---

*Last updated: 2026-01-20*
