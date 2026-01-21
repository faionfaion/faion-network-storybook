import type { Meta, StoryObj } from '@storybook/react';
import PolicySection from './PolicySection';

const meta: Meta<typeof PolicySection> = {
  title: 'Legal/PolicySection',
  component: PolicySection,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Expandable section for legal policy pages like Privacy Policy and Terms of Service.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PolicySection>;

export const Default: Story = {
  args: {
    title: 'Information We Collect',
    id: 'information-collection',
    defaultExpanded: true,
    children: (
      <>
        <p>
          We collect information you provide directly to us, such as when you create an account,
          make a purchase, or contact us for support.
        </p>
        <p>This information may include:</p>
        <ul>
          <li>Name and email address</li>
          <li>Billing information and payment details</li>
          <li>Profile information and preferences</li>
          <li>Communications and correspondence with us</li>
        </ul>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Collapsed: Story = {
  args: {
    title: 'How We Use Your Information',
    id: 'information-use',
    defaultExpanded: false,
    children: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
        </ul>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MultipleSections: Story = {
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <PolicySection title="1. Introduction" id="introduction" defaultExpanded={false}>
        <p>
          Welcome to Faion Network. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our service.
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this
          privacy policy, please do not access the site.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We Collect" id="information-collection" defaultExpanded={true}>
        <h3>Personal Data</h3>
        <p>
          Personally identifiable information, such as your name, shipping address, email address,
          and telephone number, that you voluntarily give to us when you register.
        </p>
        <h3>Derivative Data</h3>
        <p>
          Information our servers automatically collect when you access the Site, such as your IP
          address, browser type, operating system, access times.
        </p>
      </PolicySection>

      <PolicySection title="3. Use of Your Information" id="use-information" defaultExpanded={false}>
        <p>Having accurate information about you permits us to provide you with a smooth experience.</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Process your transactions</li>
          <li>Email you regarding your account or order</li>
          <li>Fulfill and manage purchases, orders, payments</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Contact Us" id="contact" defaultExpanded={false}>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:privacy@faion.net">privacy@faion.net</a>
        </p>
      </PolicySection>
    </div>
  ),
};
