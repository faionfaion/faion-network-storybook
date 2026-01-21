import type { Meta, StoryObj } from '@storybook/react';
import AuthFormCard from './AuthFormCard';

const meta: Meta<typeof AuthFormCard> = {
  title: 'Auth/AuthFormCard',
  component: AuthFormCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'warm',
      values: [{ name: 'warm', value: '#FAF9F6' }],
    },
    docs: {
      description: {
        component:
          'Card wrapper for authentication forms. Provides consistent styling for login, signup, and password reset.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthFormCard>;

// Simple logo placeholder
const LogoPlaceholder = () => (
  <div
    style={{
      width: '48px',
      height: '48px',
      backgroundColor: '#5D1F2D',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      margin: '0 auto',
    }}
  >
    FN
  </div>
);

// Simple form placeholder
const FormPlaceholder = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <label
        style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        Email
      </label>
      <input
        type="email"
        placeholder="you@example.com"
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
        placeholder="Your password"
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
    <button
      style={{
        width: '100%',
        padding: '14px 24px',
        backgroundColor: '#5D1F2D',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
        marginTop: '8px',
      }}
    >
      Sign In
    </button>
  </div>
);

/**
 * Login form card
 */
export const Login: Story = {
  args: {
    logo: <LogoPlaceholder />,
    title: 'Welcome Back',
    subtitle: 'Sign in to your account to continue',
    children: <FormPlaceholder />,
    footer: (
      <>
        Don&apos;t have an account? <a href="#signup">Sign up</a>
      </>
    ),
  },
};

/**
 * Signup form card
 */
export const Signup: Story = {
  args: {
    logo: <LogoPlaceholder />,
    title: 'Create Account',
    subtitle: 'Start your solopreneur journey today',
    children: <FormPlaceholder />,
    footer: (
      <>
        Already have an account? <a href="#login">Sign in</a>
      </>
    ),
  },
};

/**
 * Without logo
 */
export const WithoutLogo: Story = {
  args: {
    title: 'Reset Password',
    subtitle: 'Enter your email to receive a reset link',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #E5E5E0',
              borderRadius: '6px',
              boxSizing: 'border-box',
            }}
          />
        </div>
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
          Send Reset Link
        </button>
      </div>
    ),
    footer: (
      <>
        Remember your password? <a href="#login">Sign in</a>
      </>
    ),
  },
};

/**
 * Medium width
 */
export const MediumWidth: Story = {
  args: {
    title: 'Complete Your Profile',
    subtitle: 'Tell us a bit about yourself',
    maxWidth: 'md',
    children: <FormPlaceholder />,
  },
};

/**
 * Large width
 */
export const LargeWidth: Story = {
  args: {
    title: 'Connect Your Accounts',
    maxWidth: 'lg',
    children: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <button
          style={{
            padding: '14px',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          Google
        </button>
        <button
          style={{
            padding: '14px',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          GitHub
        </button>
        <button
          style={{
            padding: '14px',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          LinkedIn
        </button>
        <button
          style={{
            padding: '14px',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          Twitter
        </button>
      </div>
    ),
  },
};

/**
 * Minimal - content only
 */
export const Minimal: Story = {
  args: {
    children: <FormPlaceholder />,
  },
};
