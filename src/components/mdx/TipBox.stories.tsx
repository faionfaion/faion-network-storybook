import type { Meta, StoryObj } from '@storybook/react';
import TipBox from './TipBox';

const meta: Meta<typeof TipBox> = {
  title: 'MDX/TipBox',
  component: TipBox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'MDX callout component with tip, warning, info, success, and error variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['tip', 'warning', 'info', 'success', 'error'],
      description: 'Variant type',
    },
    title: {
      control: 'text',
      description: 'Optional title',
    },
    compact: {
      control: 'boolean',
      description: 'Compact size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TipBox>;

export const Tip: Story = {
  args: {
    variant: 'tip',
    children: 'Use the SCAMPER framework when brainstorming new product ideas. It helps you think systematically about improvements to existing solutions.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Make sure to validate your idea before investing significant time in development. Many founders skip this step and regret it later.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This methodology is part of the faion-researcher skill and can be accessed via MCP server.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'You have completed all the prerequisites! You can now proceed to the advanced topics.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'This approach is deprecated. Please refer to the updated methodology in the next section.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TipBox variant="tip">
        This is a helpful tip for better results.
      </TipBox>
      <TipBox variant="warning">
        Be careful when modifying this configuration.
      </TipBox>
      <TipBox variant="info">
        Additional information about this feature.
      </TipBox>
      <TipBox variant="success">
        Your changes have been saved successfully.
      </TipBox>
      <TipBox variant="error">
        An error occurred. Please try again.
      </TipBox>
    </div>
  ),
};

export const CustomTitle: Story = {
  args: {
    variant: 'tip',
    title: 'Pro Tip',
    children: 'Combine this methodology with the Mom Test for better validation results.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoTitle: Story = {
  args: {
    variant: 'info',
    title: '',
    children: 'This is a note without a title. Sometimes you just need a simple callout.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  render: () => (
    <div style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TipBox variant="tip" compact>
        Quick tip: Start small.
      </TipBox>
      <TipBox variant="warning" compact>
        Warning: This action cannot be undone.
      </TipBox>
      <TipBox variant="info" compact>
        Note: Requires Plus subscription.
      </TipBox>
    </div>
  ),
};

export const InArticle: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', marginBottom: '12px', color: '#1C1C1E' }}>
        Validating Your Idea
      </h2>
      <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '0' }}>
        Before you start building, it is crucial to validate that people actually want your product.
        The Mom Test is a framework for having these conversations without leading the witness.
      </p>

      <TipBox variant="tip" title="Key Insight">
        Ask about their past behavior, not hypothetical futures. People are terrible at predicting
        what they will do, but honest about what they have done.
      </TipBox>

      <p style={{ color: '#4A4A4A', lineHeight: 1.7, marginBottom: '0' }}>
        Start by talking to at least 20 potential customers before writing any code.
        Document their pain points and look for patterns.
      </p>

      <TipBox variant="warning">
        Avoid asking "Would you use this?" or "Would you pay for this?" These questions
        lead to false positives. Instead, ask about their current solutions and frustrations.
      </TipBox>

      <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
        Once you have validated demand, you can move on to building your MVP.
      </p>
    </div>
  ),
};

export const WithLongContent: Story = {
  args: {
    variant: 'info',
    title: 'Important Note',
    children: (
      <>
        <p style={{ marginTop: 0 }}>
          This methodology requires careful consideration of multiple factors:
        </p>
        <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
          <li>Market size and growth potential</li>
          <li>Competition landscape analysis</li>
          <li>Technical feasibility assessment</li>
          <li>Go-to-market strategy alignment</li>
        </ul>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '640px' }}>
        <Story />
      </div>
    ),
  ],
};
