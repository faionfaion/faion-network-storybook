import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromoCodeInput from '../../components/pricing/PromoCodeInput';
import '../../components/pricing/PromoCodeInput.css';

const meta: Meta<typeof PromoCodeInput> = {
  title: 'FAION/Pricing/PromoCodeInput',
  component: PromoCodeInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Promo code input field with apply button.

## Features
- Input with uppercase transformation
- Apply button with loading state
- Error and success message support
- Disabled state support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    success: { control: 'text' },
    onApply: { action: 'apply-code' },
  },
};

export default meta;
type Story = StoryObj<typeof PromoCodeInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter promo code',
    buttonText: 'Apply',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithError: Story = {
  name: 'With Error',
  args: {
    error: 'Invalid promo code. Please check and try again.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithSuccess: Story = {
  name: 'With Success',
  args: {
    success: 'Code SAVE20 applied! You save 20%.',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Promo codes disabled',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// Interactive example
const InteractivePromo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleApply = (code: string) => {
    setError('');
    setSuccess('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (code === 'SAVE20') {
        setSuccess('Code SAVE20 applied! You save 20%.');
      } else {
        setError('Invalid promo code. Please check and try again.');
      }
    }, 1500);
  };

  return (
    <div style={{ width: '400px' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', marginBottom: '12px' }}>
        Try entering "SAVE20" for a valid code
      </p>
      <PromoCodeInput
        onApply={handleApply}
        isLoading={isLoading}
        error={error}
        success={success}
      />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractivePromo />,
};

export const MobileView: Story = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
};
