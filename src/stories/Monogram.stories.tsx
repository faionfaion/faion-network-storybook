import type { Meta, StoryObj } from '@storybook/react';
import Monogram from '../components/Monogram';
import '../components/Monogram.css';

const meta: Meta<typeof Monogram> = {
  title: 'FAION/Layout/Monogram',
  component: Monogram,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
FN Monogram - "The Publisher's Seal"

A sophisticated brand mark following the Faion "Digital Journal" aesthetic.

## Features
- Three size variants (small, medium, large)
- Optional "Faion Network" label with divider
- Clickable variant with hover states
- Deep Burgundy background with serif typography

## Usage
- **Header**: Medium size, clickable, navigates to home
- **Footer**: Medium size with optional label
- **Marketing**: Large size with label for brand presence
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show "Faion Network" label',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler (renders as button when provided)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Monogram>;

export const Default: Story = {
  args: {
    size: 'medium',
    showLabel: false,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    showLabel: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    showLabel: false,
  },
};

export const WithLabel: Story = {
  name: 'With Label',
  args: {
    size: 'medium',
    showLabel: true,
  },
};

export const LargeWithLabel: Story = {
  name: 'Large With Label',
  args: {
    size: 'large',
    showLabel: true,
  },
};

export const Clickable: Story = {
  args: {
    size: 'medium',
    showLabel: false,
    onClick: () => console.log('Monogram clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'When onClick is provided, the monogram renders as a button with hover states.',
      },
    },
  },
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="fn-size-demo">
      <div className="fn-size-demo__item">
        <Monogram size="small" />
        <p className="fn-size-demo__label">Small (32px)</p>
      </div>
      <div className="fn-size-demo__item">
        <Monogram size="medium" />
        <p className="fn-size-demo__label">Medium (40px)</p>
      </div>
      <div className="fn-size-demo__item">
        <Monogram size="large" />
        <p className="fn-size-demo__label">Large (56px)</p>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-size-demo {
            display: flex;
            align-items: flex-end;
            gap: 48px;
          }
          .fn-size-demo__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .fn-size-demo__label {
            font-family: Inter, sans-serif;
            font-size: 12px;
            color: #4A4A4A;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const BrandingVariations: Story = {
  name: 'Branding Variations',
  render: () => (
    <div className="fn-brand-demo">
      <div className="fn-brand-demo__row">
        <p className="fn-brand-demo__label">Icon only (header/nav)</p>
        <Monogram size="medium" />
      </div>
      <div className="fn-brand-demo__row">
        <p className="fn-brand-demo__label">With label (footer/marketing)</p>
        <Monogram size="medium" showLabel />
      </div>
      <div className="fn-brand-demo__row">
        <p className="fn-brand-demo__label">Large with label (hero sections)</p>
        <Monogram size="large" showLabel />
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-brand-demo {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .fn-brand-demo__row {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .fn-brand-demo__label {
            font-family: Inter, sans-serif;
            font-size: 12px;
            color: #4A4A4A;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const OnDarkBackground: Story = {
  name: 'On Dark Background',
  render: () => (
    <div className="fn-dark-demo">
      <Monogram size="medium" showLabel />
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-dark-demo {
            background-color: #1C1C1E;
            padding: 48px;
            border-radius: 8px;
          }
          .fn-dark-demo .fn-monogram__label {
            color: #E5E5E0;
          }
          .fn-dark-demo .fn-monogram__divider {
            background-color: #4A4A4A;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};
