import type { Meta, StoryObj } from '@storybook/react';
import SocialLoginButton from './SocialLoginButton';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'Auth/SocialLoginButton',
  component: SocialLoginButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Social login buttons for Google, GitHub, LinkedIn, Twitter/X, Apple, and Microsoft.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialLoginButton>;

/**
 * Google login
 */
export const Google: Story = {
  args: {
    provider: 'google',
  },
};

/**
 * GitHub login
 */
export const GitHub: Story = {
  args: {
    provider: 'github',
  },
};

/**
 * LinkedIn login
 */
export const LinkedIn: Story = {
  args: {
    provider: 'linkedin',
  },
};

/**
 * Twitter/X login
 */
export const Twitter: Story = {
  args: {
    provider: 'twitter',
  },
};

/**
 * Apple login
 */
export const Apple: Story = {
  args: {
    provider: 'apple',
  },
};

/**
 * Microsoft login
 */
export const Microsoft: Story = {
  args: {
    provider: 'microsoft',
  },
};

/**
 * Full width variant
 */
export const FullWidth: Story = {
  args: {
    provider: 'google',
    fullWidth: true,
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Icon only
 */
export const IconOnly: Story = {
  args: {
    provider: 'google',
    iconOnly: true,
  },
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    provider: 'google',
    isLoading: true,
    fullWidth: true,
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Custom label
 */
export const CustomLabel: Story = {
  args: {
    provider: 'github',
    label: 'Sign in with GitHub',
  },
};

/**
 * All providers
 */
export const AllProviders: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
      <SocialLoginButton provider="google" fullWidth />
      <SocialLoginButton provider="github" fullWidth />
      <SocialLoginButton provider="linkedin" fullWidth />
      <SocialLoginButton provider="twitter" fullWidth />
      <SocialLoginButton provider="apple" fullWidth />
      <SocialLoginButton provider="microsoft" fullWidth />
    </div>
  ),
};

/**
 * Icon buttons row
 */
export const IconButtonsRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <SocialLoginButton provider="google" iconOnly />
      <SocialLoginButton provider="github" iconOnly />
      <SocialLoginButton provider="linkedin" iconOnly />
      <SocialLoginButton provider="twitter" iconOnly />
    </div>
  ),
};
