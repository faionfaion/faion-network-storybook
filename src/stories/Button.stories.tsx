import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/Button';
import '../components/ui/Button.css';

const meta: Meta<typeof Button> = {
  title: 'FAION/Core UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Button component following the Faion "Digital Journal" aesthetic.

## Variants
- **Primary**: Deep Burgundy (#5D1F2D) - Main CTAs
- **Secondary**: Charcoal outlined - Secondary actions
- **Outline**: Taupe border - Subtle actions
- **Ghost**: No border - Tertiary actions
- **Link**: Text only - Inline links
- **Destructive**: Red - Danger actions

## Accessibility
- WCAG AA compliant contrast ratios
- Visible focus rings for keyboard navigation
- Disabled states clearly indicated
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'icon'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interactions',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ========== INDIVIDUAL VARIANTS ==========

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

// ========== SIZES ==========

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

// ========== STATES ==========

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// ========== SHOWCASE STORIES ==========

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <p className="fn-story-label">PRIMARY</p>
        <Button variant="primary">Primary Button</Button>
      </div>
      <div>
        <p className="fn-story-label">SECONDARY</p>
        <Button variant="secondary">Secondary Button</Button>
      </div>
      <div>
        <p className="fn-story-label">OUTLINE</p>
        <Button variant="outline">Outline Button</Button>
      </div>
      <div>
        <p className="fn-story-label">GHOST</p>
        <Button variant="ghost">Ghost Button</Button>
      </div>
      <div>
        <p className="fn-story-label">LINK</p>
        <Button variant="link">Link Button</Button>
      </div>
      <div>
        <p className="fn-story-label">DESTRUCTIVE</p>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="outline">Default</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </div>
    </div>
  ),
};

export const ButtonPair: Story = {
  name: 'CTA Button Pair',
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="primary">Get Started</Button>
      <Button variant="secondary">Learn More</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for primary and secondary action buttons together.',
      },
    },
  },
};

export const FormButtons: Story = {
  name: 'Form Action Buttons',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', width: '400px' }}>
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Save Changes</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for form submission with cancel option.',
      },
    },
  },
};

export const DangerZone: Story = {
  name: 'Danger Zone Actions',
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete Account</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pattern for destructive actions that require confirmation.',
      },
    },
  },
};
