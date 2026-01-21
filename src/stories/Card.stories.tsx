import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import '../components/ui/Card.css';
import '../components/ui/Button.css';

const meta: Meta<typeof Card> = {
  title: 'FAION/Core UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Card component following the Faion "Digital Journal" aesthetic.

## Features
- Pure Cream background with Taupe Grey border
- Optional burgundy top bar accent
- Hoverable variant with lift effect
- Elevated variant with shadow
- Responsive padding

## Sub-components
- **CardHeader**: Header section
- **CardTitle**: Title text (serif font)
- **CardDescription**: Description text
- **CardContent**: Main content area
- **CardFooter**: Footer with border-top
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual style variant',
    },
    padding: {
      control: 'select',
      options: ['none', 'compact', 'default', 'spacious'],
      description: 'Internal padding',
    },
    topBar: {
      control: 'boolean',
      description: 'Show burgundy top bar accent',
    },
    hoverable: {
      control: 'boolean',
      description: 'Enable hover lift effect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ========== BASIC EXAMPLES ==========

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a description of the card content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: '#4A4A4A' }}>
            Card content goes here. This can include any content like text, images, or other components.
          </p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithTopBar: Story = {
  args: {
    topBar: true,
    children: (
      <>
        <CardHeader>
          <CardTitle>Featured Content</CardTitle>
          <CardDescription>The burgundy top bar indicates featured or important content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: '#4A4A4A' }}>
            This card uses the topBar prop to show a burgundy accent line at the top.
          </p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Hover over this card to see the lift effect.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: '#4A4A4A' }}>
            Hoverable cards are great for lists of clickable items like articles, products, or navigation.
          </p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>No border, subtle shadow for depth.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: '#4A4A4A' }}>
            The elevated variant removes the border and adds a subtle shadow for a floating effect.
          </p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card with Actions</CardTitle>
          <CardDescription>Cards can have a footer with action buttons.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: '#4A4A4A' }}>
            Main content of the card with detailed information.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="small">Save</Button>
          <Button variant="ghost" size="small">Cancel</Button>
        </CardFooter>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// ========== PADDING VARIANTS ==========

export const CompactPadding: Story = {
  args: {
    padding: 'compact',
    children: (
      <>
        <CardHeader>
          <CardTitle>Compact Card</CardTitle>
          <CardDescription>Uses less internal padding.</CardDescription>
        </CardHeader>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SpaciousPadding: Story = {
  args: {
    padding: 'spacious',
    children: (
      <>
        <CardHeader>
          <CardTitle>Spacious Card</CardTitle>
          <CardDescription>Uses more internal padding for emphasis.</CardDescription>
        </CardHeader>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

// ========== SHOWCASE ==========

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Standard bordered card</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <p className="fn-story-label">WITH TOP BAR</p>
        <Card topBar>
          <CardHeader>
            <CardTitle>Featured Card</CardTitle>
            <CardDescription>With burgundy accent</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <p className="fn-story-label">ELEVATED</p>
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>Shadow instead of border</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <p className="fn-story-label">HOVERABLE</p>
        <Card hoverable>
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>Hover to see lift effect</CardDescription>
          </CardHeader>
        </Card>
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

export const CardGrid: Story = {
  name: 'Card Grid (3 columns)',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '900px' }}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} hoverable>
          <CardHeader>
            <CardTitle>Article {i}</CardTitle>
            <CardDescription>A brief description of this article content.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" size="small">Read more</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Cards in a responsive grid layout, commonly used for article listings.',
      },
    },
  },
};

export const PricingCard: Story = {
  name: 'Pricing Card Example',
  render: () => (
    <Card topBar padding="spacious" style={{ width: '320px' }}>
      <CardHeader>
        <CardTitle>Pro Plan</CardTitle>
        <CardDescription>Perfect for growing businesses</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: 700, color: '#1C1C1E' }}>$35</span>
          <span style={{ color: '#4A4A4A', fontSize: '14px' }}>/month</span>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {['Full methodology access', 'Commercial license', 'SSO support', 'Priority support'].map((feature) => (
            <li key={feature} style={{ padding: '8px 0', borderBottom: '1px solid #E5E5E0', color: '#4A4A4A' }}>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="primary" fullWidth>Get Started</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a pricing card with top bar accent and full-width CTA.',
      },
    },
  },
};
