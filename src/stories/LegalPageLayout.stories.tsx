import type { Meta, StoryObj } from '@storybook/react';
import LegalPageLayout from '../components/layout/LegalPageLayout';
import '../components/layout/LegalPageLayout.css';
import '../components/Header.css';
import '../components/Footer.css';
import '../components/Monogram.css';

const meta: Meta<typeof LegalPageLayout> = {
  title: 'FAION/Layout/LegalPageLayout',
  component: LegalPageLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Typography-focused layout for legal pages.

## Features
- Header and Footer included
- Content area max-width for readability (720px)
- Typography optimized for long-form reading
- Last updated date display
- Table of contents support with anchor links

## Use Cases
- Terms of Service
- Privacy Policy
- Cookie Policy
- Refund Policy
- Acceptable Use Policy
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Page title',
    },
    lastUpdated: {
      control: 'text',
      description: 'Last updated date',
    },
    onNavigate: { action: 'navigate' },
  },
};

export default meta;
type Story = StoryObj<typeof LegalPageLayout>;

const sampleContent = (
  <>
    <h2 id="introduction">Introduction</h2>
    <p>
      Welcome to Faion Network. These Terms of Service govern your use of our website and services.
      By accessing or using Faion Network, you agree to be bound by these terms.
    </p>
    <p>
      Please read these terms carefully before using our services. If you do not agree with any part
      of these terms, you may not access the service.
    </p>

    <h2 id="definitions">Definitions</h2>
    <p>For the purposes of these Terms of Service:</p>
    <ul>
      <li><strong>"Service"</strong> refers to the Faion Network platform, website, and related services.</li>
      <li><strong>"User"</strong> refers to any individual who accesses or uses the Service.</li>
      <li><strong>"Content"</strong> refers to methodologies, articles, guides, and other materials available through the Service.</li>
      <li><strong>"Subscription"</strong> refers to paid access to premium features and content.</li>
    </ul>

    <h2 id="account">Account Terms</h2>
    <h3 id="account-registration">Registration</h3>
    <p>
      To access certain features of the Service, you must create an account. You agree to provide
      accurate, current, and complete information during registration.
    </p>
    <h3 id="account-security">Account Security</h3>
    <p>
      You are responsible for maintaining the security of your account credentials. Faion Network
      will not be liable for any loss or damage arising from unauthorized access to your account.
    </p>

    <h2 id="subscriptions">Subscriptions and Payment</h2>
    <p>
      Faion Network offers various subscription tiers. By subscribing, you agree to pay the applicable
      fees as described at the time of purchase.
    </p>
    <ul>
      <li>Subscriptions are billed in advance on a monthly or annual basis.</li>
      <li>You may cancel your subscription at any time.</li>
      <li>Refunds are provided in accordance with our Refund Policy.</li>
    </ul>

    <h2 id="contact">Contact Us</h2>
    <p>
      If you have any questions about these Terms of Service, please contact us at{' '}
      <a href="mailto:legal@faion.net">legal@faion.net</a>.
    </p>
  </>
);

export const Default: Story = {
  args: {
    title: 'Terms of Service',
    lastUpdated: 'January 15, 2026',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'definitions', title: 'Definitions' },
      { id: 'account', title: 'Account Terms' },
      { id: 'account-registration', title: 'Registration', level: 2 },
      { id: 'account-security', title: 'Account Security', level: 2 },
      { id: 'subscriptions', title: 'Subscriptions and Payment' },
      { id: 'contact', title: 'Contact Us' },
    ],
    children: sampleContent,
  },
};

export const PrivacyPolicy: Story = {
  name: 'Privacy Policy',
  args: {
    title: 'Privacy Policy',
    lastUpdated: 'January 10, 2026',
    tableOfContents: [
      { id: 'collection', title: 'Information We Collect' },
      { id: 'use', title: 'How We Use Information' },
      { id: 'sharing', title: 'Information Sharing' },
      { id: 'security', title: 'Data Security' },
      { id: 'rights', title: 'Your Rights' },
    ],
    children: (
      <>
        <h2 id="collection">Information We Collect</h2>
        <p>
          We collect information you provide directly to us, including when you create an account,
          make a purchase, or contact us for support.
        </p>

        <h2 id="use">How We Use Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services,
          process transactions, and communicate with you.
        </p>

        <h2 id="sharing">Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with service providers
          who assist us in operating our platform.
        </p>

        <h2 id="security">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access or disclosure.
        </p>

        <h2 id="rights">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. Contact us
          at <a href="mailto:privacy@faion.net">privacy@faion.net</a> to exercise these rights.
        </p>
      </>
    ),
  },
};

export const WithoutTOC: Story = {
  name: 'Without Table of Contents',
  args: {
    title: 'Cookie Policy',
    lastUpdated: 'December 1, 2025',
    children: (
      <>
        <p>
          This Cookie Policy explains how Faion Network uses cookies and similar technologies
          when you visit our website.
        </p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help
          websites remember your preferences and improve your browsing experience.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. Note that disabling certain
          cookies may affect the functionality of our website.
        </p>
      </>
    ),
  },
};

export const WithoutLastUpdated: Story = {
  name: 'Without Last Updated',
  args: {
    title: 'Acceptable Use Policy',
    children: (
      <>
        <p>
          This Acceptable Use Policy outlines the rules and guidelines for using Faion Network services.
        </p>

        <h2>Prohibited Activities</h2>
        <p>You may not use our services to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Transmit malware or harmful code</li>
          <li>Attempt to gain unauthorized access to our systems</li>
        </ul>

        <h2>Enforcement</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate this policy.
        </p>
      </>
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
    title: 'Terms of Service',
    lastUpdated: 'January 15, 2026',
    tableOfContents: [
      { id: 'intro', title: 'Introduction' },
      { id: 'terms', title: 'Terms' },
    ],
    children: (
      <>
        <h2 id="intro">Introduction</h2>
        <p>
          Welcome to Faion Network. These Terms govern your use of our services.
        </p>
        <h2 id="terms">Terms</h2>
        <p>
          By using our service, you agree to these terms.
        </p>
      </>
    ),
  },
};
