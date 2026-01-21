import type { Meta, StoryObj } from '@storybook/react';
import LicenseCard from './LicenseCard';

const meta: Meta<typeof LicenseCard> = {
  title: 'UserDashboard/LicenseCard',
  component: LicenseCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays MCP license information with key management and connection status.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LicenseCard>;

export const PersonalLicense: Story = {
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    type: 'personal',
    status: 'active',
    expiresAt: '2027-01-15',
    activeConnections: 1,
    maxConnections: 1,
    onRegenerate: () => console.log('Regenerate clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '450px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CommercialLicense: Story = {
  args: {
    licenseKey: 'lic_com_xyz789abc456def123ghi012jkl',
    type: 'commercial',
    status: 'active',
    expiresAt: '2027-01-15',
    activeConnections: 0,
    maxConnections: 1,
    onRegenerate: () => console.log('Regenerate clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '450px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TeamLicense: Story = {
  args: {
    licenseKey: 'lic_team_mno345pqr678stu901vwx234yz',
    type: 'team',
    status: 'active',
    expiresAt: '2027-01-15',
    seats: 5,
    activeConnections: 3,
    maxConnections: 5,
    onRegenerate: () => console.log('Regenerate clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '450px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ExpiredLicense: Story = {
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    type: 'personal',
    status: 'expired',
    expiresAt: '2025-12-15',
    activeConnections: 0,
    maxConnections: 1,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '450px' }}>
        <Story />
      </div>
    ),
  ],
};

export const RevokedLicense: Story = {
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    type: 'commercial',
    status: 'revoked',
    activeConnections: 0,
    maxConnections: 1,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '450px' }}>
        <Story />
      </div>
    ),
  ],
};
