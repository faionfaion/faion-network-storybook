import type { Meta, StoryObj } from '@storybook/react';
import {
  DisplayH1,
  HeadingH2,
  HeadingH3,
  BodyText,
  Label,
  StatNumber,
} from '../components/ui/Typography';
import '../components/ui/Typography.css';

const meta: Meta = {
  title: 'Faion/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Typography System

Faion Network uses a **Dual-Font System**:
- **Serif** (Georgia/Merriweather) → Voice of the Brand (Headlines, Quotes, Big Numbers)
- **Sans-Serif** (Inter) → Utility (Body, UI Elements)

### Hierarchy
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Display H1 | Serif | 64-80px | Normal |
| Section H2 | Serif | 32-40px | Normal |
| Subsection H3 | Serif | 24px | Normal |
| Body | Sans | 16-18px | Normal |
| UI Labels | Sans | 11-12px | Semibold, Uppercase |
| Stat Numbers | Serif | 56px | Normal |

Pure CSS implementation.
        `,
      },
    },
  },
};

export default meta;

export const Display: StoryObj = {
  render: () => (
    <DisplayH1>Display Headline</DisplayH1>
  ),
};

export const SectionHeadline: StoryObj = {
  render: () => (
    <HeadingH2>Section Headline</HeadingH2>
  ),
};

export const SubsectionHeadline: StoryObj = {
  render: () => (
    <HeadingH3>Subsection Headline</HeadingH3>
  ),
};

export const Body: StoryObj = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <BodyText>
        Body copy is set in a geometric sans-serif at 16-18px with a line height of 150% for optimal readability across all devices and screen sizes. The design rejects "tech startup" trends in favor of clarity, permanence, and authority.
      </BodyText>
    </div>
  ),
};

export const UILabel: StoryObj = {
  render: () => (
    <Label>UI Label Text</Label>
  ),
};

export const StatisticNumber: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StatNumber>24M+</StatNumber>
      <Label className="fn-mt-2">Active Users</Label>
    </div>
  ),
};

export const FullHierarchy: StoryObj = {
  name: 'Complete Hierarchy',
  render: () => (
    <div className="fn-hierarchy-demo">
      <div className="fn-hierarchy-demo__item">
        <DisplayH1>Display</DisplayH1>
        <p className="fn-hierarchy-demo__desc">Modern Serif • 64-80px • Tight tracking (-0.03em)</p>
      </div>

      <div className="fn-hierarchy-demo__item">
        <HeadingH2>Section Headlines</HeadingH2>
        <p className="fn-hierarchy-demo__desc">Modern Serif • 32-40px • Tracking (-0.02em)</p>
      </div>

      <div className="fn-hierarchy-demo__item">
        <HeadingH3>Subsection Headlines</HeadingH3>
        <p className="fn-hierarchy-demo__desc">Modern Serif • 24px • Normal tracking</p>
      </div>

      <div className="fn-hierarchy-demo__item">
        <BodyText>
          Body copy is set in a geometric sans-serif at 16-18px with a line height of 150% for optimal readability across all devices and screen sizes.
        </BodyText>
        <p className="fn-hierarchy-demo__desc">Geometric Sans (Inter) • 16-18px • Line Height: 160%</p>
      </div>

      <div className="fn-hierarchy-demo__item fn-hierarchy-demo__item--no-border">
        <Label>UI Labels</Label>
        <p className="fn-hierarchy-demo__desc">Geometric Sans • Uppercase • 11-12px • Wide tracking (0.15em)</p>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-hierarchy-demo {
            max-width: 700px;
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .fn-hierarchy-demo__item {
            padding-bottom: 24px;
            border-bottom: 1px solid #E5E5E0;
          }
          .fn-hierarchy-demo__item--no-border {
            border-bottom: none;
          }
          .fn-hierarchy-demo__desc {
            font-family: Inter, sans-serif;
            font-size: 14px;
            color: #4A4A4A;
            margin-top: 12px;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const EditorialTypography: StoryObj = {
  name: 'Editorial Elements',
  render: () => (
    <div className="fn-editorial-demo">
      {/* Inline Links */}
      <div className="fn-editorial-demo__section">
        <Label className="fn-mb-4">Inline Links</Label>
        <BodyText>
          The design system rejects "tech startup" trends. Learn more about{' '}
          <a href="#" className="fn-editorial-link">the SDD framework</a>{' '}
          in our documentation.
        </BodyText>
      </div>

      {/* Blockquote */}
      <div className="fn-editorial-demo__section">
        <Label className="fn-mb-4">Blockquotes</Label>
        <blockquote className="fn-editorial-blockquote">
          <p className="fn-editorial-blockquote__text">
            "Typography is the interface. Content is the experience."
          </p>
        </blockquote>
      </div>

      {/* Lists */}
      <div className="fn-editorial-demo__section">
        <Label className="fn-mb-4">Lists</Label>
        <ul className="fn-editorial-list">
          <li>Content-first design philosophy</li>
          <li>Warm alabaster backgrounds</li>
          <li>Strict 8-point grid system</li>
        </ul>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-editorial-demo {
            max-width: 600px;
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .fn-editorial-demo__section {}
          .fn-editorial-link {
            color: #5D1F2D;
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 2px;
          }
          .fn-editorial-blockquote {
            border-left: 4px solid #5D1F2D;
            padding-left: 24px;
            margin: 0;
          }
          .fn-editorial-blockquote__text {
            font-family: Georgia, Merriweather, serif;
            font-size: 20px;
            line-height: 1.6;
            font-style: italic;
            color: #1C1C1E;
          }
          .fn-editorial-list {
            list-style: none;
            padding: 0;
            margin: 0;
            padding-left: 24px;
          }
          .fn-editorial-list li {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
            position: relative;
            margin-bottom: 12px;
          }
          .fn-editorial-list li::before {
            content: '•';
            position: absolute;
            left: -24px;
            color: #5D1F2D;
            font-weight: bold;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};
