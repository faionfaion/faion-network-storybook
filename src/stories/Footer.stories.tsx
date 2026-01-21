import type { Meta, StoryObj } from '@storybook/react';
import Footer, { FooterSimple } from '../components/Footer';
import '../components/Footer.css';
import '../components/Monogram.css';

const meta: Meta<typeof Footer> = {
  title: 'FAION/Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Footer component following the Faion "Digital Journal" aesthetic.

## Features
- Brand section with monogram and tagline
- Social media links (Twitter, LinkedIn, GitHub)
- Configurable link columns
- Copyright notice
- Simple variant for minimal pages

## Variants
- **Footer**: Full footer with columns and social links
- **FooterSimple**: Minimal footer with copyright and essential links
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showSocial: {
      control: 'boolean',
      description: 'Show social media links',
    },
    copyright: {
      control: 'text',
      description: 'Custom copyright text',
    },
    onNavigate: { action: 'navigate' },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};

export const WithoutSocial: Story = {
  name: 'Without Social Links',
  args: {
    showSocial: false,
  },
};

export const CustomColumns: Story = {
  name: 'Custom Columns',
  args: {
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Integrations', href: '/integrations' },
          { label: 'API', href: '/api' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center', href: '/help' },
          { label: 'Community', href: '/community' },
          { label: 'Status', href: '/status' },
        ],
      },
    ],
    copyright: '2026 Custom Company. All rights reserved.',
  },
};

export const Simple: Story = {
  name: 'Simple Variant',
  render: () => <FooterSimple />,
  parameters: {
    docs: {
      description: {
        story: 'Minimal footer variant with just copyright and essential navigation links.',
      },
    },
  },
};

export const InPageContext: Story = {
  name: 'In Page Context',
  args: {},
  render: (args) => (
    <div className="fn-page">
      <div className="fn-page__content">
        <h1 className="fn-page__title">Page Content</h1>
        <p className="fn-page__text">
          This demonstrates how the footer appears at the bottom of a page with content above it.
          The footer maintains proper spacing and visual hierarchy.
        </p>
        <p className="fn-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Footer {...args} />
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-page {
            background-color: #FAF9F6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .fn-page__content {
            flex: 1;
            padding: 64px 32px;
            max-width: 800px;
            margin: 0 auto;
          }
          .fn-page__title {
            font-family: Georgia, serif;
            font-size: 48px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
          .fn-page__text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
            margin-top: 16px;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const MobileView: Story = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'On mobile, columns stack and the layout adapts to smaller screens.',
      },
    },
  },
  args: {},
};
