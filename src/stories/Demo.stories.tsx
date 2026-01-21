import type { Meta, StoryObj } from '@storybook/react';
import '../styles/globals.css';
import '../components/ui/Button.css';
import '../components/ui/Card.css';
import '../components/ui/Typography.css';
import '../components/ui/Badge.css';
import '../components/ui/Input.css';
import '../components/ui/Form.css';
import '../components/ui/Checkbox.css';
import '../components/ui/Select.css';
import '../components/ui/Accordion.css';
import '../components/ui/Tabs.css';
import '../components/ui/Breadcrumb.css';
import '../components/Header.css';
import '../components/Footer.css';
import '../components/Monogram.css';
import '../components/layout/MinimalLayout.css';
import '../components/layout/LegalPageLayout.css';
import '../components/layout/DashboardLayout.css';
import '../components/layout/LanguageSelector.css';
import '../components/landing/HeroSection.css';
import '../components/landing/ProblemSection.css';
import '../components/landing/SolutionSection.css';
import '../components/landing/FAQSection.css';
import '../components/landing/FinalCTASection.css';
import '../components/landing/FrameworkSection.css';
import '../components/landing/ContentSection.css';
import '../components/landing/SuccessStoriesSection.css';
import '../components/landing/PricingSection.css';
import '../components/landing/CredibilitySection.css';
import '../components/landing/EmailCapture.css';
import '../components/pricing/PricingCard.css';
import '../components/pricing/PricingToggle.css';
import '../components/pricing/PromoCodeInput.css';
import '../components/pricing/PlanComparisonTable.css';
import '../components/pricing/FeatureList.css';
import '../components/testimonial/TestimonialCard.css';
import '../components/testimonial/TestimonialCarousel.css';
import '../components/testimonial/StarRating.css';
import '../components/testimonial/VerifiedBadge.css';
import '../components/auth/AuthFormCard.css';
import '../components/auth/AuthInput.css';
import '../components/auth/SocialLoginButton.css';
import '../components/auth/PasswordStrength.css';
import '../components/auth/AuthDivider.css';
import '../components/paywall/PaywallOverlay.css';
import '../components/paywall/PaywallCTA.css';
import '../components/paywall/ContentGate.css';
import '../components/paywall/LockedBadge.css';
import '../components/paywall/PremiumLoadingSkeleton.css';
import '../components/paywall/PremiumContent.css';
import '../components/content/ArticleCard.css';
import '../components/content/MethodologyCard.css';
import '../components/content/TableOfContents.css';
import '../components/content/SearchBar.css';
import '../components/content/SearchResults.css';
import '../components/content/SearchModal.css';
import '../components/content/CategoryBadge.css';
import '../components/content/CategoryFilter.css';
import '../components/content/CategoryCard.css';
import '../components/content/DifficultyBadge.css';
import '../components/content/ReadTimeBadge.css';
import '../components/content/RoadmapProgress.css';
import '../components/content/RoadmapCard.css';
import '../components/content/Pagination.css';
import '../components/content/AlphabetNav.css';
import '../components/content/TermList.css';
import '../components/mdx/KeyTakeaways.css';
import '../components/mdx/TipBox.css';
import '../components/mdx/DefinitionBlock.css';
import '../components/mdx/CodeExample.css';
import '../components/mdx/StepByStep.css';
import '../components/mdx/ComparisonTable.css';
import '../components/mdx/MetricBox.css';
import '../components/mdx/FAQ.css';
import '../components/mdx/RelatedMethodologies.css';
import '../components/mdx/Term.css';
import '../components/mdx/Blockquote.css';
import '../components/blog/BlogPostCard.css';
import '../components/blog/FeaturedPosts.css';
import '../components/blog/CategoryNav.css';
import '../components/blog/AuthorBio.css';
import '../components/blog/AuthorByline.css';
import '../components/blog/RelatedPosts.css';
import '../components/blog/ShareButtons.css';
import '../components/blog/NewsletterSection.css';
import '../components/blog/NewsletterInlineCTA.css';
import '../components/testimonial-form/ModeSelector.css';
import '../components/testimonial-form/QuestionStep.css';
import '../components/testimonial-form/GuidedFlow.css';
import '../components/testimonial-form/FreeformEditor.css';
import '../components/testimonial-form/TestimonialPreview.css';
import '../components/testimonial-form/ConsentCheckbox.css';
import '../components/testimonial-form/RewardBanner.css';
import '../components/testimonial-form/EligibilityGate.css';
import '../components/testimonial-form/TestimonialForm.css';

const meta: Meta = {
  title: 'Demo/Component Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete showcase of all Faion Network Design System components',
      },
    },
  },
};

export default meta;

// ============================================
// SECTION WRAPPER COMPONENT
// ============================================
const Section = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section style={{ marginBottom: '80px' }}>
    <div style={{ marginBottom: '32px' }}>
      <h2 className="fn-heading-h2" style={{ marginBottom: '8px' }}>
        {title}
      </h2>
      {subtitle && <p className="fn-body-text">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const Card = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      backgroundColor: 'var(--dj-pure-cream)',
      border: '1px solid var(--dj-taupe-grey)',
      borderRadius: '8px',
      padding: '24px',
      ...style,
    }}
  >
    {children}
  </div>
);

const Grid = ({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: number;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '24px',
    }}
  >
    {children}
  </div>
);

// ============================================
// MAIN DEMO STORY
// ============================================
export const FullShowcase: StoryObj = {
  name: 'Full Component Showcase',
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--dj-warm-alabaster)',
        minHeight: '100vh',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* HERO HEADER */}
      <header
        style={{
          padding: '80px 48px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: 'var(--dj-deep-burgundy)',
            color: '#FFFFFF',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            marginBottom: '24px',
          }}
        >
          Component Library v2.0
        </div>
        <h1 className="fn-display-h1" style={{ marginBottom: '24px' }}>
          Faion Network Design System
        </h1>
        <p
          className="fn-body-large"
          style={{ maxWidth: '700px', margin: '0 auto 32px' }}
        >
          A comprehensive collection of React components following the Digital Journal
          theme. Content-first design with warm organic tones and strict 8-point grid.
        </p>

        {/* Quick Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '100+', label: 'Components' },
            { value: '13', label: 'Categories' },
            { value: '6', label: 'Colors' },
            { value: '8pt', label: 'Grid' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                className="fn-stat-number"
                style={{ fontSize: '36px', marginBottom: '4px' }}
              >
                {stat.value}
              </div>
              <div className="fn-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px 80px' }}>
        {/* ============================================ */}
        {/* TYPOGRAPHY SECTION */}
        {/* ============================================ */}
        <Section
          title="Typography"
          subtitle="Dual-font system: Serif (Georgia) for voice, Sans-serif (Inter) for utility"
        >
          <Card>
            <div style={{ marginBottom: '32px' }}>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                HEADLINES (SERIF)
              </div>
              <h1 className="fn-display-h1">Display H1 - Hero Headlines</h1>
              <h2
                className="fn-heading-h2"
                style={{ marginTop: '16px' }}
              >
                Heading H2 - Section Headlines
              </h2>
              <h3
                className="fn-heading-h3"
                style={{ marginTop: '16px' }}
              >
                Heading H3 - Subsection Headlines
              </h3>
              <h4
                className="fn-heading-h4"
                style={{ marginTop: '16px' }}
              >
                Heading H4 - Card Headlines
              </h4>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                BODY TEXT (SANS-SERIF)
              </div>
              <p className="fn-body-large" style={{ marginBottom: '8px' }}>
                Body Large - Emphasized content text (18px)
              </p>
              <p className="fn-body-text" style={{ marginBottom: '8px' }}>
                Body Text - Regular content text (16px)
              </p>
              <p className="fn-body-small">Body Small - Secondary text (14px)</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                UI ELEMENTS
              </div>
              <p className="fn-label" style={{ marginBottom: '8px' }}>
                LABEL - UPPERCASE TRACKING
              </p>
              <p className="fn-overline" style={{ marginBottom: '8px' }}>
                OVERLINE - SMALL UPPERCASE
              </p>
              <p className="fn-caption">Caption - Small descriptive text</p>
            </div>

            <div>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                SPECIAL TYPOGRAPHY
              </div>
              <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start' }}>
                <div>
                  <div className="fn-stat-number">502+</div>
                  <div className="fn-caption">Stat Number</div>
                </div>
                <div style={{ flex: 1 }}>
                  <blockquote className="fn-quote">
                    "The best methodologies are those that become invisible - they simply
                    become the way you work."
                  </blockquote>
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* ============================================ */}
        {/* COLORS SECTION */}
        {/* ============================================ */}
        <Section
          title="Color Palette"
          subtitle="Digital Journal theme: Warm organic tones, not clinical white"
        >
          <Grid columns={3}>
            {[
              {
                name: 'Warm Alabaster',
                hex: '#FAF9F6',
                var: '--dj-warm-alabaster',
                usage: 'Main Canvas',
              },
              {
                name: 'Pure Cream',
                hex: '#FFFFFF',
                var: '--dj-pure-cream',
                usage: 'Cards/Surface',
              },
              {
                name: 'Soft Charcoal',
                hex: '#1C1C1E',
                var: '--dj-soft-charcoal',
                usage: 'Primary Text',
              },
              {
                name: 'Graphite',
                hex: '#4A4A4A',
                var: '--dj-graphite',
                usage: 'Body Text',
              },
              {
                name: 'Taupe Grey',
                hex: '#E5E5E0',
                var: '--dj-taupe-grey',
                usage: 'Borders',
              },
              {
                name: 'Deep Burgundy',
                hex: '#5D1F2D',
                var: '--dj-deep-burgundy',
                usage: 'Brand Accent',
              },
            ].map((color) => (
              <Card key={color.name}>
                <div
                  style={{
                    width: '100%',
                    height: '80px',
                    backgroundColor: color.hex,
                    borderRadius: '6px',
                    border: '1px solid var(--dj-taupe-grey)',
                    marginBottom: '16px',
                  }}
                />
                <h4 className="fn-heading-h4" style={{ marginBottom: '4px' }}>
                  {color.name}
                </h4>
                <code
                  style={{
                    fontSize: '13px',
                    color: 'var(--dj-deep-burgundy)',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  {color.hex}
                </code>
                <p className="fn-caption">{color.usage}</p>
              </Card>
            ))}
          </Grid>
        </Section>

        {/* ============================================ */}
        {/* BUTTONS SECTION */}
        {/* ============================================ */}
        <Section
          title="Buttons"
          subtitle="Primary, Secondary, Outline, Ghost, Link, and Destructive variants"
        >
          <Card>
            <div className="fn-label" style={{ marginBottom: '16px' }}>
              VARIANTS
            </div>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '32px',
              }}
            >
              <button className="fn-button fn-button--primary">Primary</button>
              <button className="fn-button fn-button--secondary">Secondary</button>
              <button className="fn-button fn-button--outline">Outline</button>
              <button className="fn-button fn-button--ghost">Ghost</button>
              <button className="fn-button fn-button--link">Link</button>
              <button className="fn-button fn-button--destructive">Destructive</button>
            </div>

            <div className="fn-label" style={{ marginBottom: '16px' }}>
              SIZES
            </div>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '32px',
              }}
            >
              <button className="fn-button fn-button--primary fn-button--small">
                Small
              </button>
              <button className="fn-button fn-button--primary">Default</button>
              <button className="fn-button fn-button--primary fn-button--large">
                Large
              </button>
            </div>

            <div className="fn-label" style={{ marginBottom: '16px' }}>
              STATES
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="fn-button fn-button--primary" disabled>
                Disabled
              </button>
              <button className="fn-button fn-button--primary fn-button--full" style={{ maxWidth: '300px' }}>
                Full Width
              </button>
            </div>
          </Card>
        </Section>

        {/* ============================================ */}
        {/* FORM ELEMENTS SECTION */}
        {/* ============================================ */}
        <Section
          title="Form Elements"
          subtitle="Inputs, Selects, Checkboxes, and other form controls"
        >
          <Grid columns={2}>
            <Card>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                TEXT INPUTS
              </div>
              <div className="fn-form-field" style={{ marginBottom: '16px' }}>
                <label className="fn-form-label">Email Address</label>
                <input
                  type="email"
                  className="fn-input"
                  placeholder="you@example.com"
                />
                <span className="fn-form-hint">We'll never share your email</span>
              </div>
              <div className="fn-form-field" style={{ marginBottom: '16px' }}>
                <label className="fn-form-label">Password</label>
                <input
                  type="password"
                  className="fn-input"
                  placeholder="Enter password"
                />
              </div>
              <div className="fn-form-field">
                <label className="fn-form-label">Disabled Input</label>
                <input
                  type="text"
                  className="fn-input"
                  disabled
                  value="Disabled value"
                />
              </div>
            </Card>

            <Card>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                SELECTION CONTROLS
              </div>
              <div className="fn-form-field" style={{ marginBottom: '16px' }}>
                <label className="fn-form-label">Country</label>
                <select className="fn-select">
                  <option>Select a country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                </select>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label className="fn-checkbox">
                  <input type="checkbox" className="fn-checkbox__input" defaultChecked />
                  <span className="fn-checkbox__box" />
                  <span className="fn-checkbox__label">I agree to the terms</span>
                </label>
              </div>
              <div>
                <label className="fn-checkbox">
                  <input type="checkbox" className="fn-checkbox__input" />
                  <span className="fn-checkbox__box" />
                  <span className="fn-checkbox__label">Subscribe to newsletter</span>
                </label>
              </div>
            </Card>
          </Grid>
        </Section>

        {/* ============================================ */}
        {/* BADGES SECTION */}
        {/* ============================================ */}
        <Section
          title="Badges"
          subtitle="Status indicators and category labels"
        >
          <Card>
            <div className="fn-label" style={{ marginBottom: '16px' }}>
              VARIANTS
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <span className="fn-badge fn-badge--default">Default</span>
              <span className="fn-badge fn-badge--primary">Primary</span>
              <span className="fn-badge fn-badge--secondary">Secondary</span>
              <span className="fn-badge fn-badge--success">Success</span>
              <span className="fn-badge fn-badge--warning">Warning</span>
              <span className="fn-badge fn-badge--danger">Danger</span>
              <span className="fn-badge fn-badge--outline">Outline</span>
            </div>

            <div className="fn-label" style={{ marginBottom: '16px' }}>
              USE CASES
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span className="fn-badge fn-badge--primary">NEW</span>
              <span className="fn-badge fn-badge--success">PRO</span>
              <span className="fn-badge fn-badge--warning">BETA</span>
              <span className="fn-badge fn-badge--secondary">8 min read</span>
              <span className="fn-badge fn-badge--outline">Intermediate</span>
            </div>
          </Card>
        </Section>

        {/* ============================================ */}
        {/* CARDS SECTION */}
        {/* ============================================ */}
        <Section
          title="Cards"
          subtitle="Content containers with various styles"
        >
          <Grid columns={3}>
            <div className="fn-card">
              <div className="fn-card__header">
                <h3 className="fn-card__title">Basic Card</h3>
                <p className="fn-card__description">
                  Standard card with header and content area.
                </p>
              </div>
              <div className="fn-card__content">
                <p className="fn-body-text">
                  Cards are the primary container for content in the Digital Journal
                  theme.
                </p>
              </div>
            </div>

            <div className="fn-card fn-card--interactive">
              <div className="fn-card__header">
                <h3 className="fn-card__title">Interactive Card</h3>
                <p className="fn-card__description">Hover to see the lift effect.</p>
              </div>
              <div className="fn-card__content">
                <p className="fn-body-text">
                  Interactive cards have hover states with subtle shadow and lift.
                </p>
              </div>
              <div className="fn-card__footer">
                <button className="fn-button fn-button--primary fn-button--small">
                  Learn More
                </button>
              </div>
            </div>

            <div className="fn-card fn-card--featured">
              <div className="fn-card__header">
                <span className="fn-badge fn-badge--primary">FEATURED</span>
                <h3 className="fn-card__title" style={{ marginTop: '12px' }}>
                  Featured Card
                </h3>
              </div>
              <div className="fn-card__content">
                <p className="fn-body-text">
                  Featured cards have emphasized borders and styling.
                </p>
              </div>
            </div>
          </Grid>
        </Section>

        {/* ============================================ */}
        {/* SPACING SECTION */}
        {/* ============================================ */}
        <Section
          title="8-Point Grid Spacing"
          subtitle="All spacing values are multiples of 8px"
        >
          <Card>
            <div className="fn-label" style={{ marginBottom: '16px' }}>
              SPACING SCALE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'space-1', value: '4px', width: 4 },
                { name: 'space-2', value: '8px', width: 8 },
                { name: 'space-4', value: '16px', width: 16 },
                { name: 'space-6', value: '24px', width: 24 },
                { name: 'space-8', value: '32px', width: 32 },
                { name: 'space-12', value: '48px', width: 48 },
                { name: 'space-16', value: '64px', width: 64 },
                { name: 'space-20', value: '80px', width: 80 },
                { name: 'space-30', value: '120px', width: 120 },
                { name: 'space-40', value: '160px', width: 160 },
              ].map((space) => (
                <div
                  key={space.name}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                  <code
                    style={{
                      width: '100px',
                      fontSize: '13px',
                      color: 'var(--dj-deep-burgundy)',
                    }}
                  >
                    --{space.name}
                  </code>
                  <span style={{ width: '60px', fontSize: '14px' }}>{space.value}</span>
                  <div
                    style={{
                      width: space.width,
                      height: '24px',
                      backgroundColor: 'var(--dj-deep-burgundy)',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              ))}
            </div>
          </Card>
        </Section>

        {/* ============================================ */}
        {/* CONTENT COMPONENTS SECTION */}
        {/* ============================================ */}
        <Section
          title="Content Components"
          subtitle="Article cards, badges, and content-related UI elements"
        >
          <Grid columns={2}>
            <Card>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                DIFFICULTY BADGES
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <span className="fn-difficulty-badge fn-difficulty-badge--beginner">
                  Beginner
                </span>
                <span className="fn-difficulty-badge fn-difficulty-badge--intermediate">
                  Intermediate
                </span>
                <span className="fn-difficulty-badge fn-difficulty-badge--advanced">
                  Advanced
                </span>
              </div>

              <div className="fn-label" style={{ marginBottom: '16px' }}>
                CATEGORY BADGES
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="fn-category-badge fn-category-badge--framework">
                  Framework
                </span>
                <span className="fn-category-badge fn-category-badge--methodology">
                  Methodology
                </span>
                <span className="fn-category-badge fn-category-badge--guide">Guide</span>
                <span className="fn-category-badge fn-category-badge--tutorial">
                  Tutorial
                </span>
              </div>
            </Card>

            <Card>
              <div className="fn-label" style={{ marginBottom: '16px' }}>
                READ TIME & PROGRESS
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}
              >
                <span className="fn-read-time-badge">8 min read</span>
                <span className="fn-read-time-badge fn-read-time-badge--compact">
                  12m
                </span>
              </div>

              <div className="fn-label" style={{ marginBottom: '16px' }}>
                ROADMAP PROGRESS
              </div>
              <div className="fn-roadmap-progress">
                <div className="fn-roadmap-progress__bar">
                  <div
                    className="fn-roadmap-progress__fill"
                    style={{ width: '65%' }}
                  />
                </div>
                <span className="fn-roadmap-progress__text">65% Complete</span>
              </div>
            </Card>
          </Grid>
        </Section>

        {/* ============================================ */}
        {/* MDX COMPONENTS SECTION */}
        {/* ============================================ */}
        <Section
          title="MDX Components"
          subtitle="Rich content blocks for documentation and articles"
        >
          <Grid columns={2}>
            <Card>
              <div className="fn-tip-box fn-tip-box--tip">
                <div className="fn-tip-box__header">
                  <span className="fn-tip-box__icon">i</span>
                  <span className="fn-tip-box__title">Pro Tip</span>
                </div>
                <p className="fn-tip-box__content">
                  Use the 8-point grid for all spacing decisions to maintain visual
                  consistency across your design.
                </p>
              </div>
            </Card>

            <Card>
              <div className="fn-tip-box fn-tip-box--warning">
                <div className="fn-tip-box__header">
                  <span className="fn-tip-box__icon">!</span>
                  <span className="fn-tip-box__title">Warning</span>
                </div>
                <p className="fn-tip-box__content">
                  Avoid using colors outside the defined palette to maintain brand
                  consistency.
                </p>
              </div>
            </Card>
          </Grid>

          <Card style={{ marginTop: '24px' }}>
            <div className="fn-key-takeaways">
              <h4 className="fn-key-takeaways__title">Key Takeaways</h4>
              <ul className="fn-key-takeaways__list">
                <li>Content First: Typography is the interface</li>
                <li>Warmth: Organic paper tones, not clinical white</li>
                <li>Precision: Strict 8-point grid eliminates chaos</li>
              </ul>
            </div>
          </Card>

          <Card style={{ marginTop: '24px' }}>
            <div className="fn-metric-box">
              <div className="fn-metric-box__value">87%</div>
              <div className="fn-metric-box__label">User Satisfaction</div>
              <div className="fn-metric-box__change fn-metric-box__change--positive">
                +12% from last quarter
              </div>
            </div>
          </Card>
        </Section>

        {/* ============================================ */}
        {/* BLOG COMPONENTS SECTION */}
        {/* ============================================ */}
        <Section
          title="Blog Components"
          subtitle="Components for blog posts and author information"
        >
          <Card>
            <div className="fn-author-byline" style={{ marginBottom: '24px' }}>
              <div
                className="fn-author-byline__avatar"
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--dj-deep-burgundy)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                RF
              </div>
              <div className="fn-author-byline__info">
                <div className="fn-author-byline__name">Ruslan Faion</div>
                <div className="fn-author-byline__meta">
                  Jan 21, 2026 | 8 min read
                </div>
              </div>
            </div>

            <div className="fn-share-buttons" style={{ marginBottom: '24px' }}>
              <span className="fn-label" style={{ marginRight: '16px' }}>
                Share:
              </span>
              <button className="fn-share-buttons__btn">Twitter</button>
              <button className="fn-share-buttons__btn">LinkedIn</button>
              <button className="fn-share-buttons__btn">Copy Link</button>
            </div>

            <div
              className="fn-newsletter-inline"
              style={{
                backgroundColor: 'var(--dj-warm-alabaster)',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid var(--dj-taupe-grey)',
              }}
            >
              <h4 className="fn-heading-h4" style={{ marginBottom: '8px' }}>
                Subscribe to our newsletter
              </h4>
              <p className="fn-body-small" style={{ marginBottom: '16px' }}>
                Get the latest methodologies and frameworks delivered to your inbox.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  className="fn-input"
                  placeholder="your@email.com"
                  style={{ flex: 1 }}
                />
                <button className="fn-button fn-button--primary">Subscribe</button>
              </div>
            </div>
          </Card>
        </Section>

        {/* ============================================ */}
        {/* TESTIMONIALS SECTION */}
        {/* ============================================ */}
        <Section
          title="Testimonial Components"
          subtitle="User feedback and social proof elements"
        >
          <Grid columns={2}>
            <Card>
              <div className="fn-testimonial-card">
                <div className="fn-star-rating" style={{ marginBottom: '16px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        color: 'var(--dj-warning)',
                        fontSize: '20px',
                      }}
                    >
                      *
                    </span>
                  ))}
                </div>
                <blockquote className="fn-quote" style={{ border: 'none', padding: 0 }}>
                  "This framework transformed how our team approaches product
                  development. The methodologies are practical and immediately
                  applicable."
                </blockquote>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'var(--dj-taupe-grey)',
                      borderRadius: '50%',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>Sarah Chen</div>
                    <div className="fn-caption">VP of Product, TechCorp</div>
                  </div>
                  <span className="fn-verified-badge">Verified</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="fn-mode-selector" style={{ marginBottom: '24px' }}>
                <div className="fn-label" style={{ marginBottom: '12px' }}>
                  How would you like to share your story?
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="fn-button fn-button--primary fn-button--small">
                    Guided Questions
                  </button>
                  <button className="fn-button fn-button--outline fn-button--small">
                    Free-form Writing
                  </button>
                </div>
              </div>

              <div className="fn-reward-banner">
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: 'var(--dj-success-light)',
                    borderRadius: '8px',
                    border: '1px solid var(--dj-success)',
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                    Get 2 months Pro free
                  </div>
                  <div className="fn-body-small">
                    Share your success story and receive 2 months of Pro membership.
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
        </Section>

        {/* ============================================ */}
        {/* LAYOUT COMPONENTS SECTION */}
        {/* ============================================ */}
        <Section
          title="Layout Components"
          subtitle="Page layouts, navigation, and structural elements"
        >
          <Card>
            <div className="fn-label" style={{ marginBottom: '16px' }}>
              LANGUAGE SELECTOR
            </div>
            <div
              className="fn-language-selector"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                border: '1px solid var(--dj-taupe-grey)',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '24px',
              }}
            >
              <span style={{ fontSize: '16px' }}>EN</span>
              <span className="fn-body-small">English</span>
              <span style={{ fontSize: '12px', color: 'var(--dj-graphite)' }}>v</span>
            </div>

            <div className="fn-label" style={{ marginBottom: '16px' }}>
              BREADCRUMB NAVIGATION
            </div>
            <nav className="fn-breadcrumb" style={{ marginBottom: '24px' }}>
              <ol className="fn-breadcrumb__list">
                <li className="fn-breadcrumb__item">
                  <a href="#" className="fn-breadcrumb__link">
                    Home
                  </a>
                </li>
                <li className="fn-breadcrumb__separator">/</li>
                <li className="fn-breadcrumb__item">
                  <a href="#" className="fn-breadcrumb__link">
                    Methodologies
                  </a>
                </li>
                <li className="fn-breadcrumb__separator">/</li>
                <li className="fn-breadcrumb__item fn-breadcrumb__item--current">
                  SDD Framework
                </li>
              </ol>
            </nav>

            <div className="fn-label" style={{ marginBottom: '16px' }}>
              PAGINATION
            </div>
            <nav className="fn-pagination">
              <button className="fn-pagination__btn fn-pagination__btn--prev" disabled>
                Previous
              </button>
              <div className="fn-pagination__pages">
                <button className="fn-pagination__page fn-pagination__page--active">
                  1
                </button>
                <button className="fn-pagination__page">2</button>
                <button className="fn-pagination__page">3</button>
                <span className="fn-pagination__ellipsis">...</span>
                <button className="fn-pagination__page">12</button>
              </div>
              <button className="fn-pagination__btn fn-pagination__btn--next">
                Next
              </button>
            </nav>
          </Card>
        </Section>

        {/* ============================================ */}
        {/* AUTH & PAYWALL SECTION */}
        {/* ============================================ */}
        <Section
          title="Auth & Paywall Components"
          subtitle="Authentication forms and premium content gating"
        >
          <Grid columns={2}>
            <Card>
              <div className="fn-auth-form">
                <h3 className="fn-heading-h3" style={{ marginBottom: '8px' }}>
                  Welcome back
                </h3>
                <p className="fn-body-small" style={{ marginBottom: '24px' }}>
                  Sign in to your account to continue
                </p>

                <div className="fn-form-field" style={{ marginBottom: '16px' }}>
                  <label className="fn-form-label">Email</label>
                  <input
                    type="email"
                    className="fn-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="fn-form-field" style={{ marginBottom: '24px' }}>
                  <label className="fn-form-label">Password</label>
                  <input type="password" className="fn-input" placeholder="********" />
                </div>

                <button
                  className="fn-button fn-button--primary fn-button--full"
                  style={{ marginBottom: '16px' }}
                >
                  Sign In
                </button>

                <div
                  className="fn-auth-divider"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      backgroundColor: 'var(--dj-taupe-grey)',
                    }}
                  />
                  <span className="fn-caption">or continue with</span>
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      backgroundColor: 'var(--dj-taupe-grey)',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="fn-button fn-button--outline" style={{ flex: 1 }}>
                    Google
                  </button>
                  <button className="fn-button fn-button--outline" style={{ flex: 1 }}>
                    GitHub
                  </button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="fn-paywall-overlay">
                <div
                  style={{
                    backgroundColor: 'var(--dj-warm-alabaster)',
                    padding: '32px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    border: '1px solid var(--dj-taupe-grey)',
                  }}
                >
                  <span className="fn-locked-badge" style={{ marginBottom: '16px' }}>
                    PREMIUM CONTENT
                  </span>
                  <h3 className="fn-heading-h3" style={{ marginBottom: '8px' }}>
                    Unlock Full Article
                  </h3>
                  <p className="fn-body-text" style={{ marginBottom: '24px' }}>
                    Get access to 502+ methodologies, templates, and exclusive content.
                  </p>
                  <button className="fn-button fn-button--primary">
                    Upgrade to Pro
                  </button>
                  <p className="fn-caption" style={{ marginTop: '12px' }}>
                    Starting at $19/month
                  </p>
                </div>
              </div>
            </Card>
          </Grid>
        </Section>

        {/* ============================================ */}
        {/* PRICING SECTION */}
        {/* ============================================ */}
        <Section
          title="Pricing Components"
          subtitle="Pricing cards, toggles, and feature lists"
        >
          <Card style={{ marginBottom: '24px' }}>
            <div
              className="fn-pricing-toggle"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              <span className="fn-body-text">Monthly</span>
              <div
                style={{
                  width: '48px',
                  height: '28px',
                  backgroundColor: 'var(--dj-deep-burgundy)',
                  borderRadius: '14px',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                  }}
                />
              </div>
              <span className="fn-body-text" style={{ fontWeight: 600 }}>
                Yearly
              </span>
              <span className="fn-badge fn-badge--success">Save 20%</span>
            </div>
          </Card>

          <Grid columns={3}>
            {[
              {
                name: 'Free',
                price: '$0',
                period: '/month',
                features: [
                  { text: '10 methodologies', included: true },
                  { text: 'Basic templates', included: true },
                  { text: 'Community access', included: true },
                  { text: 'Priority support', included: false },
                  { text: 'Advanced analytics', included: false },
                ],
              },
              {
                name: 'Pro',
                price: '$19',
                period: '/month',
                popular: true,
                features: [
                  { text: 'All 502+ methodologies', included: true },
                  { text: 'All templates', included: true },
                  { text: 'Priority support', included: true },
                  { text: 'Advanced analytics', included: true },
                  { text: 'Custom branding', included: false },
                ],
              },
              {
                name: 'Enterprise',
                price: '$99',
                period: '/month',
                features: [
                  { text: 'Everything in Pro', included: true },
                  { text: 'Custom branding', included: true },
                  { text: 'SSO & SAML', included: true },
                  { text: 'Dedicated support', included: true },
                  { text: 'SLA guarantee', included: true },
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`fn-pricing-card ${plan.popular ? 'fn-pricing-card--popular' : ''}`}
                style={{
                  backgroundColor: 'var(--dj-pure-cream)',
                  border: plan.popular
                    ? '2px solid var(--dj-deep-burgundy)'
                    : '1px solid var(--dj-taupe-grey)',
                  borderRadius: '12px',
                  padding: '32px',
                  position: 'relative',
                }}
              >
                {plan.popular && (
                  <span
                    className="fn-badge fn-badge--primary"
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <h3 className="fn-heading-h3" style={{ marginBottom: '8px' }}>
                  {plan.name}
                </h3>
                <div style={{ marginBottom: '24px' }}>
                  <span className="fn-stat-number" style={{ fontSize: '48px' }}>
                    {plan.price}
                  </span>
                  <span className="fn-body-small">{plan.period}</span>
                </div>
                <ul className="fn-feature-list" style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`fn-feature-list__item ${feature.included ? 'fn-feature-list__item--included' : 'fn-feature-list__item--excluded'}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 0',
                        color: feature.included
                          ? 'var(--dj-soft-charcoal)'
                          : 'var(--dj-graphite)',
                        opacity: feature.included ? 1 : 0.5,
                      }}
                    >
                      <span
                        style={{
                          color: feature.included
                            ? 'var(--dj-success)'
                            : 'var(--dj-graphite)',
                        }}
                      >
                        {feature.included ? 'V' : 'X'}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <button
                  className={`fn-button fn-button--full ${plan.popular ? 'fn-button--primary' : 'fn-button--outline'}`}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Start Trial'}
                </button>
              </div>
            ))}
          </Grid>
        </Section>

        {/* ============================================ */}
        {/* FOOTER */}
        {/* ============================================ */}
        <footer
          style={{
            marginTop: '80px',
            padding: '48px 0',
            borderTop: '1px solid var(--dj-taupe-grey)',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--dj-deep-burgundy)',
                borderRadius: '8px',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              FN
            </div>
            <h4 className="fn-heading-h4">Faion Network Design System</h4>
          </div>
          <p className="fn-caption">
            Built with care using the Digital Journal theme.
            <br />
            Content First | Warmth | Precision
          </p>
          <p className="fn-caption" style={{ marginTop: '16px' }}>
            &copy; 2026 Faion Network. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  ),
};

// ============================================
// TYPOGRAPHY ONLY STORY
// ============================================
export const TypographyShowcase: StoryObj = {
  name: 'Typography',
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--dj-warm-alabaster)',
        minHeight: '100vh',
        padding: '48px',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="fn-display-h1" style={{ marginBottom: '48px' }}>
          Typography System
        </h1>

        <Section title="Headlines (Serif)">
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Display H1 - 72px
                </div>
                <h1 className="fn-display-h1">The Digital Journal</h1>
              </div>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Heading H2 - 36px
                </div>
                <h2 className="fn-heading-h2">Section Headlines</h2>
              </div>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Heading H3 - 24px
                </div>
                <h3 className="fn-heading-h3">Subsection Headlines</h3>
              </div>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Heading H4 - 20px
                </div>
                <h4 className="fn-heading-h4">Card Headlines</h4>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Body Text (Sans-Serif)">
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Body Large - 18px
                </div>
                <p className="fn-body-large">
                  This is body large text used for emphasized content. It provides
                  better readability for important paragraphs.
                </p>
              </div>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Body Text - 16px
                </div>
                <p className="fn-body-text">
                  This is the standard body text used throughout the application. It
                  balances readability with information density.
                </p>
              </div>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Body Small - 14px
                </div>
                <p className="fn-body-small">
                  This is small body text used for secondary information, captions, and
                  metadata.
                </p>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Special Elements">
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Stat Number - 60px Serif
                </div>
                <div className="fn-stat-number">502+</div>
              </div>
              <div>
                <div className="fn-caption" style={{ marginBottom: '8px' }}>
                  Quote - 20px Serif Italic
                </div>
                <blockquote className="fn-quote">
                  "The best design systems are those that disappear - they simply become
                  the natural way you work."
                </blockquote>
              </div>
              <div>
                <div className="fn-caption" style={{ marginBottom: '16px' }}>
                  Labels & Overlines
                </div>
                <p className="fn-label">THIS IS A LABEL - 12px uppercase</p>
                <p className="fn-overline" style={{ marginTop: '8px' }}>
                  THIS IS AN OVERLINE - 11px uppercase
                </p>
              </div>
            </div>
          </Card>
        </Section>
      </div>
    </div>
  ),
};

// ============================================
// COLORS ONLY STORY
// ============================================
export const ColorsShowcase: StoryObj = {
  name: 'Colors',
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--dj-warm-alabaster)',
        minHeight: '100vh',
        padding: '48px',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="fn-display-h1" style={{ marginBottom: '48px' }}>
          Color System
        </h1>

        <Section title="Core Palette">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {[
              {
                name: 'Warm Alabaster',
                hex: '#FAF9F6',
                var: '--dj-warm-alabaster',
                usage: 'Main Canvas / Background',
              },
              {
                name: 'Pure Cream',
                hex: '#FFFFFF',
                var: '--dj-pure-cream',
                usage: 'Cards / Surfaces',
              },
              {
                name: 'Soft Charcoal',
                hex: '#1C1C1E',
                var: '--dj-soft-charcoal',
                usage: 'Primary Text',
              },
              {
                name: 'Graphite',
                hex: '#4A4A4A',
                var: '--dj-graphite',
                usage: 'Body Text / Muted',
              },
              {
                name: 'Taupe Grey',
                hex: '#E5E5E0',
                var: '--dj-taupe-grey',
                usage: 'Borders / Dividers',
              },
              {
                name: 'Deep Burgundy',
                hex: '#5D1F2D',
                var: '--dj-deep-burgundy',
                usage: 'Brand Accent / CTAs',
              },
            ].map((color) => (
              <Card key={color.name}>
                <div
                  style={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: color.hex,
                    borderRadius: '8px',
                    border: '1px solid var(--dj-taupe-grey)',
                    marginBottom: '16px',
                  }}
                />
                <h4 className="fn-heading-h4" style={{ marginBottom: '4px' }}>
                  {color.name}
                </h4>
                <code
                  style={{
                    fontSize: '14px',
                    color: 'var(--dj-deep-burgundy)',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  {color.hex}
                </code>
                <code
                  style={{
                    fontSize: '12px',
                    color: 'var(--dj-graphite)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  var({color.var})
                </code>
                <p className="fn-caption">{color.usage}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Semantic Colors">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {[
              { name: 'Success', hex: '#22C55E', light: '#DCFCE7' },
              { name: 'Warning', hex: '#F59E0B', light: '#FEF3C7' },
              { name: 'Danger', hex: '#EF4444', light: '#FEE2E2' },
              { name: 'Info', hex: '#3B82F6', light: '#DBEAFE' },
            ].map((color) => (
              <Card key={color.name}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '50%',
                      height: '60px',
                      backgroundColor: color.hex,
                      borderRadius: '6px',
                    }}
                  />
                  <div
                    style={{
                      width: '50%',
                      height: '60px',
                      backgroundColor: color.light,
                      borderRadius: '6px',
                      border: `1px solid ${color.hex}`,
                    }}
                  />
                </div>
                <h4 className="fn-heading-h4">{color.name}</h4>
                <p className="fn-caption">
                  {color.hex} / {color.light}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </div>
  ),
};

// ============================================
// BUTTONS ONLY STORY
// ============================================
export const ButtonsShowcase: StoryObj = {
  name: 'Buttons',
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--dj-warm-alabaster)',
        minHeight: '100vh',
        padding: '48px',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="fn-display-h1" style={{ marginBottom: '48px' }}>
          Button System
        </h1>

        <Section title="Variants">
          <Card>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { variant: 'primary', label: 'Primary', desc: 'Main CTA actions' },
                { variant: 'secondary', label: 'Secondary', desc: 'Secondary actions' },
                { variant: 'outline', label: 'Outline', desc: 'Tertiary actions' },
                { variant: 'ghost', label: 'Ghost', desc: 'Subtle actions' },
                { variant: 'link', label: 'Link', desc: 'Text-only actions' },
                { variant: 'destructive', label: 'Destructive', desc: 'Danger actions' },
              ].map((btn) => (
                <div
                  key={btn.variant}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                  }}
                >
                  <button className={`fn-button fn-button--${btn.variant}`}>
                    {btn.label}
                  </button>
                  <div>
                    <div className="fn-body-text" style={{ fontWeight: 600 }}>
                      {btn.label}
                    </div>
                    <div className="fn-caption">{btn.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Section>

        <Section title="Sizes">
          <Card>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <button className="fn-button fn-button--primary fn-button--small">
                  Small Button
                </button>
                <div className="fn-caption" style={{ marginTop: '8px' }}>
                  36px height
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button className="fn-button fn-button--primary">Default Button</button>
                <div className="fn-caption" style={{ marginTop: '8px' }}>
                  48px height
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button className="fn-button fn-button--primary fn-button--large">
                  Large Button
                </button>
                <div className="fn-caption" style={{ marginTop: '8px' }}>
                  56px height
                </div>
              </div>
            </div>
          </Card>
        </Section>

        <Section title="States">
          <Card>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <button className="fn-button fn-button--primary">Normal</button>
                <div className="fn-caption" style={{ marginTop: '8px' }}>
                  Default state
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button className="fn-button fn-button--primary" disabled>
                  Disabled
                </button>
                <div className="fn-caption" style={{ marginTop: '8px' }}>
                  Disabled state
                </div>
              </div>
              <div style={{ textAlign: 'center', width: '200px' }}>
                <button className="fn-button fn-button--primary fn-button--full">
                  Full Width
                </button>
                <div className="fn-caption" style={{ marginTop: '8px' }}>
                  100% width
                </div>
              </div>
            </div>
          </Card>
        </Section>
      </div>
    </div>
  ),
};

// ============================================
// FORM ELEMENTS STORY
// ============================================
export const FormElementsShowcase: StoryObj = {
  name: 'Form Elements',
  render: () => (
    <div
      style={{
        backgroundColor: 'var(--dj-warm-alabaster)',
        minHeight: '100vh',
        padding: '48px',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="fn-display-h1" style={{ marginBottom: '48px' }}>
          Form Elements
        </h1>

        <Section title="Text Inputs">
          <Card>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
              }}
            >
              <div className="fn-form-field">
                <label className="fn-form-label">Default Input</label>
                <input
                  type="text"
                  className="fn-input"
                  placeholder="Enter text..."
                />
              </div>
              <div className="fn-form-field">
                <label className="fn-form-label">With Helper Text</label>
                <input
                  type="email"
                  className="fn-input"
                  placeholder="you@example.com"
                />
                <span className="fn-form-hint">We'll never share your email</span>
              </div>
              <div className="fn-form-field">
                <label className="fn-form-label">Error State</label>
                <input
                  type="text"
                  className="fn-input fn-input--error"
                  value="Invalid input"
                />
                <span className="fn-form-error">This field is required</span>
              </div>
              <div className="fn-form-field">
                <label className="fn-form-label">Disabled</label>
                <input
                  type="text"
                  className="fn-input"
                  disabled
                  value="Disabled value"
                />
              </div>
            </div>
          </Card>
        </Section>

        <Section title="Selection Controls">
          <Card>
            <div style={{ display: 'flex', gap: '48px' }}>
              <div style={{ flex: 1 }}>
                <div className="fn-label" style={{ marginBottom: '16px' }}>
                  CHECKBOXES
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label className="fn-checkbox">
                    <input
                      type="checkbox"
                      className="fn-checkbox__input"
                      defaultChecked
                    />
                    <span className="fn-checkbox__box" />
                    <span className="fn-checkbox__label">Checked option</span>
                  </label>
                  <label className="fn-checkbox">
                    <input type="checkbox" className="fn-checkbox__input" />
                    <span className="fn-checkbox__box" />
                    <span className="fn-checkbox__label">Unchecked option</span>
                  </label>
                  <label className="fn-checkbox fn-checkbox--disabled">
                    <input type="checkbox" className="fn-checkbox__input" disabled />
                    <span className="fn-checkbox__box" />
                    <span className="fn-checkbox__label">Disabled option</span>
                  </label>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div className="fn-label" style={{ marginBottom: '16px' }}>
                  SELECT DROPDOWN
                </div>
                <div className="fn-form-field">
                  <label className="fn-form-label">Choose an option</label>
                  <select className="fn-select">
                    <option>Select...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>
        </Section>
      </div>
    </div>
  ),
};
