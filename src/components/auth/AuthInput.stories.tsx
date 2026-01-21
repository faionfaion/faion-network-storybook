import type { Meta, StoryObj } from '@storybook/react';
import AuthInput from './AuthInput';

const meta: Meta<typeof AuthInput> = {
  title: 'Auth/AuthInput',
  component: AuthInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Styled input for authentication forms with label, error state, and password toggle.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthInput>;

// Mail icon
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Lock icon
const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/**
 * Default text input
 */
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * With left icon
 */
export const WithIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    leftIcon: <MailIcon />,
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Password with toggle
 */
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    leftIcon: <LockIcon />,
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * With error
 */
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    error: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * With helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Create a password',
    type: 'password',
    showPasswordToggle: true,
    helperText: 'Must be at least 8 characters',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    disabled: true,
    defaultValue: 'disabled@example.com',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Without label
 */
export const WithoutLabel: Story = {
  args: {
    placeholder: 'Search...',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Complete auth form example
 */
export const AuthForm: Story = {
  render: () => (
    <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AuthInput
        label="Email"
        placeholder="you@example.com"
        type="email"
        leftIcon={<MailIcon />}
      />
      <AuthInput
        label="Password"
        placeholder="Enter your password"
        type="password"
        showPasswordToggle
        leftIcon={<LockIcon />}
      />
    </div>
  ),
};
