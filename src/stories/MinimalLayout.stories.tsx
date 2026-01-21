import type { Meta, StoryObj } from '@storybook/react';
import MinimalLayout from '../components/layout/MinimalLayout';
import '../components/layout/MinimalLayout.css';
import '../components/Monogram.css';

const meta: Meta<typeof MinimalLayout> = {
  title: 'FAION/Layout/MinimalLayout',
  component: MinimalLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Minimal centered layout for authentication pages.

## Features
- Centered card layout with FN Monogram
- Warm Alabaster background
- Proper vertical centering
- Three width variants (narrow, default, wide)
- Responsive (full-width on mobile)

## Use Cases
- Login page
- Signup page
- Password reset
- Email verification
- Simple forms
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['narrow', 'default', 'wide'],
      description: 'Content area max width',
    },
    showMonogram: {
      control: 'boolean',
      description: 'Show FN monogram above content',
    },
    onLogoClick: { action: 'logo-click' },
  },
};

export default meta;
type Story = StoryObj<typeof MinimalLayout>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E', margin: '0 0 8px 0' }}>
          Welcome back
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: '0 0 24px 0' }}>
          Sign in to your account to continue
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="email"
            placeholder="Email address"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #E5E5E0',
              borderRadius: '6px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #E5E5E0',
              borderRadius: '6px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            }}
          />
          <button
            style={{
              width: '100%',
              padding: '12px 24px',
              backgroundColor: '#5D1F2D',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    ),
  },
};

export const Signup: Story = {
  name: 'Signup Form',
  args: {
    maxWidth: 'wide',
    children: (
      <div>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E', margin: '0 0 8px 0' }}>
          Create your account
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: '0 0 24px 0' }}>
          Start your solopreneur journey today
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input placeholder="First name" style={{ padding: '12px 16px', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '14px' }} />
            <input placeholder="Last name" style={{ padding: '12px 16px', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '14px' }} />
          </div>
          <input placeholder="Email address" style={{ padding: '12px 16px', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '14px' }} />
          <input type="password" placeholder="Password" style={{ padding: '12px 16px', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '14px' }} />
          <button style={{ padding: '12px 24px', backgroundColor: '#5D1F2D', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontFamily: 'Inter', fontWeight: '500', cursor: 'pointer' }}>
            Create account
          </button>
        </div>
      </div>
    ),
  },
};

export const PasswordReset: Story = {
  name: 'Password Reset',
  args: {
    maxWidth: 'narrow',
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E', margin: '0 0 8px 0' }}>
          Reset password
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: '0 0 24px 0' }}>
          Enter your email and we'll send you a reset link
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input placeholder="Email address" style={{ padding: '12px 16px', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '14px' }} />
          <button style={{ padding: '12px 24px', backgroundColor: '#5D1F2D', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontFamily: 'Inter', fontWeight: '500', cursor: 'pointer' }}>
            Send reset link
          </button>
        </div>
      </div>
    ),
  },
};

export const WithFooter: Story = {
  name: 'With Footer',
  args: {
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E', margin: '0 0 24px 0' }}>
          Sign in
        </h2>
        <button style={{ width: '100%', padding: '12px', backgroundColor: '#5D1F2D', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontFamily: 'Inter', fontWeight: '500', cursor: 'pointer' }}>
          Continue
        </button>
      </div>
    ),
    footer: (
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', margin: 0 }}>
        By continuing, you agree to our{' '}
        <a href="/terms" style={{ color: '#5D1F2D' }}>Terms</a> and{' '}
        <a href="/privacy" style={{ color: '#5D1F2D' }}>Privacy Policy</a>
      </p>
    ),
  },
};

export const NoMonogram: Story = {
  name: 'Without Monogram',
  args: {
    showMonogram: false,
    children: (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: '#1C1C1E', margin: '0 0 8px 0' }}>
          Verify your email
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: '0 0 24px 0' }}>
          We sent a verification link to your email
        </p>
        <button style={{ padding: '12px 24px', backgroundColor: '#5D1F2D', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontFamily: 'Inter', fontWeight: '500', cursor: 'pointer' }}>
          Open email app
        </button>
      </div>
    ),
  },
};

export const MobileView: Story = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    children: (
      <div>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#1C1C1E', margin: '0 0 8px 0' }}>
          Sign in
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: '0 0 24px 0' }}>
          Welcome back
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input placeholder="Email" style={{ padding: '12px 16px', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '14px' }} />
          <input type="password" placeholder="Password" style={{ padding: '12px 16px', border: '1px solid #E5E5E0', borderRadius: '6px', fontFamily: 'Inter', fontSize: '14px' }} />
          <button style={{ padding: '12px 24px', backgroundColor: '#5D1F2D', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontFamily: 'Inter', fontWeight: '500', cursor: 'pointer' }}>
            Sign in
          </button>
        </div>
      </div>
    ),
  },
};
