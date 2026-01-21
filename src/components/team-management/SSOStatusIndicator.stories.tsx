import type { Meta, StoryObj } from '@storybook/react';
import SSOStatusIndicator from './SSOStatusIndicator';

const meta: Meta<typeof SSOStatusIndicator> = {
  title: 'TeamManagement/SSOStatusIndicator',
  component: SSOStatusIndicator,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays SSO configuration status with provider information.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SSOStatusIndicator>;

export const Connected: Story = {
  args: {
    connected: true,
    provider: 'Okta',
  },
};

export const ConnectedGoogle: Story = {
  args: {
    connected: true,
    provider: 'Google Workspace',
  },
};

export const ConnectedAzure: Story = {
  args: {
    connected: true,
    provider: 'Azure AD',
  },
};

export const Disconnected: Story = {
  args: {
    connected: false,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SSOStatusIndicator connected={true} provider="Okta" />
      <SSOStatusIndicator connected={true} provider="Google Workspace" />
      <SSOStatusIndicator connected={true} provider="Azure AD" />
      <SSOStatusIndicator connected={false} />
    </div>
  ),
};
