import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PricingToggle from '../../components/pricing/PricingToggle';
import '../../components/pricing/PricingToggle.css';

const meta: Meta<typeof PricingToggle> = {
  title: 'FAION/Pricing/PricingToggle',
  component: PricingToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Monthly/Annual billing toggle.

## Features
- Two-option toggle (Monthly/Annual)
- Discount badge on annual option
- Controlled component pattern
- Responsive layout
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isAnnual: { control: 'boolean' },
    discountBadge: { control: 'text' },
    onChange: { action: 'toggle-change' },
  },
};

export default meta;
type Story = StoryObj<typeof PricingToggle>;

// Interactive wrapper
const InteractiveToggle = (args: typeof PricingToggle.prototype.props) => {
  const [isAnnual, setIsAnnual] = useState(args.isAnnual || false);
  return (
    <PricingToggle
      {...args}
      isAnnual={isAnnual}
      onChange={setIsAnnual}
    />
  );
};

export const Default: Story = {
  args: {
    isAnnual: false,
    discountBadge: 'Save 20%',
  },
  render: (args) => <InteractiveToggle {...args} />,
};

export const AnnualSelected: Story = {
  name: 'Annual Selected',
  args: {
    isAnnual: true,
    discountBadge: 'Save 20%',
  },
  render: (args) => <InteractiveToggle {...args} />,
};

export const CustomLabels: Story = {
  name: 'Custom Labels',
  args: {
    isAnnual: false,
    monthlyLabel: 'Pay Monthly',
    annualLabel: 'Pay Yearly',
    discountBadge: '2 Months Free',
  },
  render: (args) => <InteractiveToggle {...args} />,
};

export const NoBadge: Story = {
  name: 'Without Badge',
  args: {
    isAnnual: false,
    discountBadge: '',
  },
  render: (args) => <InteractiveToggle {...args} />,
};

export const MobileView: Story = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    isAnnual: false,
    discountBadge: 'Save 20%',
  },
  render: (args) => <InteractiveToggle {...args} />,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
};
