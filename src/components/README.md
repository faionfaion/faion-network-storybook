# Component Library Structure

This directory contains all UI components for the Faion Network platform.

## Directory Organization

```
components/
├── ui/                   # Core UI (shadcn + custom styling)
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Typography.tsx
│   └── ...
│
├── landing/              # Landing Page Sections (P0)
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   └── ...
│
├── pricing/              # Pricing Components (P0)
│   ├── PricingCard.tsx
│   ├── PricingToggle.tsx
│   └── ...
│
├── testimonials/         # Testimonial Components (P0)
│   ├── TestimonialCard.tsx
│   ├── TestimonialCarousel.tsx
│   └── ...
│
├── auth/                 # Authentication Components (P0)
│   ├── AuthFormCard.tsx
│   ├── SocialLoginButton.tsx
│   └── ...
│
├── paywall/              # Paywall & Premium (P0)
│   ├── PaywallOverlay.tsx
│   ├── ContentGate.tsx
│   └── ...
│
├── content/              # Content & Articles (P1)
│   ├── ArticleCard.tsx
│   ├── TableOfContents.tsx
│   ├── SearchBar.tsx
│   └── ...
│
├── mdx/                  # MDX Components (P1)
│   ├── KeyTakeaways.tsx
│   ├── TipBox.tsx
│   ├── CodeExample.tsx
│   └── ...
│
├── blog/                 # Blog Components (P1)
│   ├── BlogPostCard.tsx
│   ├── AuthorBio.tsx
│   └── ...
│
├── testimonial-form/     # Testimonial Form (P1)
│   ├── TestimonialForm.tsx
│   ├── GuidedFlow.tsx
│   └── ...
│
├── legal/                # Legal & Cookies (P1)
│   ├── CookieBanner.tsx
│   ├── PolicySection.tsx
│   └── ...
│
├── team/                 # Team Management (P2)
│   ├── DashboardCard.tsx
│   ├── MembersTable.tsx
│   └── ...
│
├── audio/                # Audio Components (P2)
│   ├── AudioPlayer.tsx
│   └── ...
│
├── user-dashboard/       # User Dashboard (P1)
│   ├── SubscriptionCard.tsx
│   ├── ProfileForm.tsx
│   └── ...
│
├── Header.tsx            # Site header
├── Footer.tsx            # Site footer
├── Monogram.tsx          # Logo/monogram
└── index.ts              # Main barrel export
```

## Component Categories by Priority

### P0 - Critical (63 components)
- **Core UI** (14): Button, Card, Badge, Typography, Input, etc.
- **Layout** (8): Header, Footer, MinimalLayout, etc.
- **Feedback** (10): Dialog, Alert, Tooltip, etc.
- **Landing** (11): HeroSection, PricingSection, etc.
- **Pricing** (5): PricingCard, PricingToggle, etc.
- **Testimonials** (4): TestimonialCard, StarRating, etc.
- **Auth** (5): AuthFormCard, SocialLoginButton, etc.
- **Paywall** (6): PaywallOverlay, ContentGate, etc.

### P1 - Important (60 components)
- **Content** (16): ArticleCard, SearchBar, Pagination, etc.
- **MDX** (11): TipBox, CodeExample, StepByStep, etc.
- **Blog** (9): BlogPostCard, ShareButtons, etc.
- **Testimonial Form** (9): GuidedFlow, QuestionStep, etc.
- **Legal** (5): CookieBanner, PolicySection, etc.
- **User Dashboard** (10): SubscriptionCard, ProfileForm, etc.

### P2 - Nice to Have (10 components)
- **Team** (7): MembersTable, InviteModal, etc.
- **Audio** (3): AudioPlayer, PlaybackSpeed, etc.

## Design System

**Theme:** "The Digital Journal" - Premium printed media aesthetic

### Colors
- Warm Alabaster (#FAF9F6) - Main background
- Pure Cream (#FFFFFF) - Cards, surfaces
- Soft Charcoal (#1C1C1E) - Primary text
- Graphite (#4A4A4A) - Body text
- Taupe Grey (#E5E5E0) - Borders
- Deep Burgundy (#5D1F2D) - Brand accent

### Typography
- **Serif:** Georgia (headlines, quotes)
- **Sans-serif:** Inter (body, UI)
- **Monospace:** JetBrains Mono (code)

### Spacing
8-point grid: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 80px, 120px, 160px

## Naming Conventions

- **Components:** PascalCase (`PricingCard.tsx`)
- **Folders:** kebab-case (`user-dashboard/`)
- **CSS Modules:** Component name (`Button.css`)
- **Stories:** Component name + `.stories.tsx`

## Barrel Exports

Each folder has an `index.ts` that exports all components:

```typescript
// Example: src/components/pricing/index.ts
export { PricingCard } from './PricingCard';
export { PricingToggle } from './PricingToggle';
export { PromoCodeInput } from './PromoCodeInput';
```

Main export from `src/components/index.ts` aggregates all categories.

---

*Component Library v1.0.0*
*Total: 133 components (27 existing + 106 new)*
