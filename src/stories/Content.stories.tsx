import type { Meta, StoryObj } from '@storybook/react';
import {
  Content,
  ContentHeading,
  ContentText,
  ContentBlockquote,
  ContentList,
  ContentLink,
  ContentDivider,
  ContentLabel,
} from '../components/Content';
import '../components/Content.css';

const meta: Meta<typeof Content> = {
  title: 'Components/Content',
  component: Content,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Editorial content components following the "Digital Journal" typography system. Includes headings (serif), body text (sans-serif), blockquotes, lists, links, and dividers. Uses pure CSS (no Tailwind). Responsive: 320px-1440px.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Content>;

export const AllElements: Story = {
  name: 'All Content Elements',
  render: () => (
    <div className="fn-page-bg">
      <Content maxWidth="medium">
        <ContentLabel>Design System</ContentLabel>

        <ContentHeading level={1}>
          The Digital Journal Aesthetic
        </ContentHeading>

        <ContentText size="large">
          The design rejects "tech startup" trends in favor of clarity, permanence, and authority.
          It should feel like a high-end physical object digitized.
        </ContentText>

        <ContentDivider />

        <ContentHeading level={2}>
          Typography as Interface
        </ContentHeading>

        <ContentText>
          We use a Dual-Font System: a Serif for the "Voice" (Brand) and a Sans-Serif for
          "Utility" (Interface). This creates a clear hierarchy between editorial content
          and functional UI elements.
        </ContentText>

        <ContentBlockquote>
          "Typography is the interface. Content is the experience."
        </ContentBlockquote>

        <ContentHeading level={3}>
          Core Principles
        </ContentHeading>

        <ContentList
          items={[
            'Content-first design philosophy',
            'Warm alabaster backgrounds for reduced eye strain',
            'Strict 8-point grid system for mathematical harmony',
            <>Learn more about <ContentLink href="#">the SDD framework</ContentLink> in our docs</>,
          ]}
        />

        <ContentHeading level={4}>
          Implementation Notes
        </ContentHeading>

        <ContentText size="small">
          All spacing values are multiples of 8px. This provides mathematical harmony
          and scales perfectly across all screen sizes.
        </ContentText>
      </Content>
    </div>
  ),
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAF9F6', padding: '48px', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export const Headings: Story = {
  name: 'Heading Hierarchy',
  render: () => (
    <Content maxWidth="wide">
      <div style={{ marginBottom: '32px' }}>
        <ContentLabel>Level 1 - Display</ContentLabel>
        <ContentHeading level={1}>Display Heading (48px desktop)</ContentHeading>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <ContentLabel>Level 2 - Section</ContentLabel>
        <ContentHeading level={2}>Section Heading (36px desktop)</ContentHeading>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <ContentLabel>Level 3 - Subsection</ContentLabel>
        <ContentHeading level={3}>Subsection Heading (24px desktop)</ContentHeading>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <ContentLabel>Level 4 - Detail</ContentLabel>
        <ContentHeading level={4}>Detail Heading (18px desktop)</ContentHeading>
      </div>
    </Content>
  ),
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAF9F6', padding: '48px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TextSizes: Story = {
  name: 'Text Sizes',
  render: () => (
    <Content maxWidth="medium">
      <ContentLabel>Large (18px desktop) - Lead paragraphs</ContentLabel>
      <ContentText size="large">
        The design rejects "tech startup" trends (gradients, neon, dark mode) in favor
        of clarity, permanence, and authority.
      </ContentText>

      <ContentLabel>Base (16px desktop) - Body copy</ContentLabel>
      <ContentText size="base">
        Body copy is set in a geometric sans-serif at 16px with a line height of 170%
        for optimal readability across all devices and screen sizes.
      </ContentText>

      <ContentLabel>Small (14px desktop) - Captions & notes</ContentLabel>
      <ContentText size="small">
        Small text is used for captions, footnotes, and supplementary information
        that supports the main content without competing for attention.
      </ContentText>
    </Content>
  ),
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAF9F6', padding: '48px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Blockquotes: Story = {
  name: 'Blockquotes',
  render: () => (
    <Content maxWidth="medium">
      <ContentText>
        The following quote demonstrates the editorial blockquote style with
        a burgundy left border and serif italic typography:
      </ContentText>

      <ContentBlockquote>
        "Typography is the interface. Content is the experience. Every design
        decision should serve the reader, not the designer."
      </ContentBlockquote>

      <ContentText>
        Blockquotes use the serif typeface in italic to highlight the "human"
        voice and create visual distinction from body text.
      </ContentText>
    </Content>
  ),
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAF9F6', padding: '48px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Lists: Story = {
  name: 'Lists',
  render: () => (
    <Content maxWidth="medium">
      <ContentHeading level={3}>Unordered List</ContentHeading>
      <ContentList
        items={[
          'Content-first design philosophy',
          'Warm alabaster backgrounds',
          'Strict 8-point grid system',
          'Dual-font typography hierarchy',
        ]}
      />

      <ContentHeading level={3}>Ordered List</ContentHeading>
      <ContentList
        ordered
        items={[
          'Define the content structure',
          'Apply typography hierarchy',
          'Implement spacing rhythm',
          'Verify accessibility compliance',
        ]}
      />
    </Content>
  ),
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAF9F6', padding: '48px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Links: Story = {
  name: 'Inline Links',
  render: () => (
    <Content maxWidth="medium">
      <ContentText>
        The design system rejects "tech startup" trends. Learn more about{' '}
        <ContentLink href="#">the SDD framework</ContentLink> in our documentation.
        You can also explore <ContentLink href="#">color guidelines</ContentLink> and{' '}
        <ContentLink href="#">typography specifications</ContentLink>.
      </ContentText>

      <div style={{
        marginTop: '24px',
        padding: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <ContentText size="small">
          <strong>Link Style:</strong> Deep Burgundy (#5D1F2D), underlined, 80% opacity on hover
        </ContentText>
      </div>
    </Content>
  ),
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAF9F6', padding: '48px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ColumnWidths: Story = {
  name: 'Column Widths',
  render: () => (
    <>
      <div style={{ marginBottom: '48px' }}>
        <ContentLabel>Narrow (600px desktop)</ContentLabel>
        <Content maxWidth="narrow" className="fn-demo-box">
          <ContentText>
            Narrow columns are ideal for focused reading experiences like articles
            and documentation sections.
          </ContentText>
        </Content>
      </div>

      <div style={{ marginBottom: '48px' }}>
        <ContentLabel>Medium (700px desktop) - Default</ContentLabel>
        <Content maxWidth="medium" className="fn-demo-box">
          <ContentText>
            Medium width is the default "book column" providing optimal readability
            at 60-75 characters per line.
          </ContentText>
        </Content>
      </div>

      <div>
        <ContentLabel>Wide (900px desktop)</ContentLabel>
        <Content maxWidth="wide" className="fn-demo-box">
          <ContentText>
            Wide columns accommodate content that needs more horizontal space, such as
            tables, code blocks, or side-by-side comparisons.
          </ContentText>
        </Content>
      </div>
    </>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-demo-box {
            background: white;
            border: 1px solid #E5E5E0;
            padding: 24px;
            border-radius: 8px;
            margin-top: 8px;
          }
          .fn-demo-box .fn-text {
            margin-bottom: 0;
          }
        `}</style>
        <div style={{ backgroundColor: '#FAF9F6', padding: '48px' }}>
          <Story />
        </div>
      </>
    ),
  ],
};

export const ArticleExample: Story = {
  name: 'Article Layout Example',
  render: () => (
    <Content maxWidth="medium" className="fn-article">
      <ContentLabel>Methodology</ContentLabel>

      <ContentHeading level={1}>
        Building Scalable Design Systems
      </ContentHeading>

      <ContentText size="large">
        A comprehensive guide to creating design systems that scale with your
        organization while maintaining consistency and developer experience.
      </ContentText>

      <ContentDivider />

      <ContentHeading level={2}>
        Introduction
      </ContentHeading>

      <ContentText>
        Design systems are more than component libraries. They represent a shared
        language between design and development, ensuring consistency across products
        while accelerating delivery.
      </ContentText>

      <ContentBlockquote>
        "A design system is a living document that evolves with your product
        and organization."
      </ContentBlockquote>

      <ContentHeading level={2}>
        Core Principles
      </ContentHeading>

      <ContentText>
        When building a design system, consider these foundational principles:
      </ContentText>

      <ContentList
        items={[
          <>
            <strong>Consistency</strong> — Every component should follow the same
            patterns and conventions
          </>,
          <>
            <strong>Flexibility</strong> — Components should adapt to various contexts
            without breaking
          </>,
          <>
            <strong>Documentation</strong> — Clear guidelines help teams adopt the
            system effectively
          </>,
          <>
            <strong>Accessibility</strong> — Built-in compliance with{' '}
            <ContentLink href="#">WCAG 2.2 AA standards</ContentLink>
          </>,
        ]}
      />

      <ContentDivider />

      <ContentText size="small">
        Last updated: January 2026 · Version 2.0
      </ContentText>
    </Content>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-article {
            margin: 0 auto;
          }
        `}</style>
        <div style={{ backgroundColor: '#FAF9F6', padding: '48px 24px', minHeight: '100vh' }}>
          <Story />
        </div>
      </>
    ),
  ],
};

export const ResponsiveDemo: Story = {
  name: 'Responsive (resize window)',
  render: () => (
    <Content maxWidth="medium" className="fn-article">
      <ContentLabel>Responsive Demo</ContentLabel>

      <ContentHeading level={1}>
        Resize the Window
      </ContentHeading>

      <ContentText size="large">
        This demo shows how content adapts from 320px mobile to 1440px desktop.
        Try resizing the browser window to see the responsive behavior.
      </ContentText>

      <ContentHeading level={2}>
        Breakpoints
      </ContentHeading>

      <ContentList
        items={[
          '320px - Mobile (base styles)',
          '640px - Small tablet (sm:)',
          '768px - Tablet/Desktop (md:)',
        ]}
      />

      <ContentBlockquote>
        "Design for the smallest screen first, then enhance for larger screens."
      </ContentBlockquote>

      <ContentText>
        All typography, spacing, and layout adjusts smoothly across these breakpoints,
        maintaining readability and visual hierarchy at every size.
      </ContentText>
    </Content>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-article {
            margin: 0 auto;
          }
        `}</style>
        <div style={{ backgroundColor: '#FAF9F6', padding: '24px', minHeight: '100vh' }}>
          <Story />
        </div>
      </>
    ),
  ],
};
