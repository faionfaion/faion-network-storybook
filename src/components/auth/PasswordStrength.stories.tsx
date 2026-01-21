import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PasswordStrength from './PasswordStrength';

const meta: Meta<typeof PasswordStrength> = {
  title: 'Auth/PasswordStrength',
  component: PasswordStrength,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Password strength indicator with visual meter and requirements checklist.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PasswordStrength>;

/**
 * Weak password
 */
export const Weak: Story = {
  args: {
    password: 'pass',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Fair password
 */
export const Fair: Story = {
  args: {
    password: 'password',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Good password
 */
export const Good: Story = {
  args: {
    password: 'Password1',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Strong password
 */
export const Strong: Story = {
  args: {
    password: 'Password1!',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Very strong password
 */
export const VeryStrong: Story = {
  args: {
    password: 'MyS3cur3P@ssw0rd!',
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Without requirements list
 */
export const MeterOnly: Story = {
  args: {
    password: 'Password1',
    showRequirements: false,
  },
  decorators: [(Story) => <div style={{ width: '320px' }}><Story /></div>],
};

/**
 * Interactive demo
 */
export const Interactive: Story = {
  render: () => {
    const [password, setPassword] = useState('');
    return (
      <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #E5E5E0',
              borderRadius: '6px',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <PasswordStrength password={password} />
      </div>
    );
  },
};
