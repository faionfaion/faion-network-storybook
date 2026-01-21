import type { Meta, StoryObj } from '@storybook/react';
import AuthDivider from './AuthDivider';

const meta: Meta<typeof AuthDivider> = {
  title: 'Auth/AuthDivider',
  component: AuthDivider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Divider component for separating auth form sections, typically between email/password and social login.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthDivider>;

/**
 * Default divider
 */
export const Default: Story = {
  args: {
    text: 'or',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * With longer text
 */
export const ContinueWith: Story = {
  args: {
    text: 'or continue with',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * In context
 */
export const InContext: Story = {
  render: () => (
    <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <button
        style={{
          width: '100%',
          padding: '14px 24px',
          backgroundColor: '#5D1F2D',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Sign In with Email
      </button>
      <AuthDivider text="or continue with" />
      <button
        style={{
          width: '100%',
          padding: '12px 24px',
          backgroundColor: 'white',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Continue with Google
      </button>
    </div>
  ),
};
