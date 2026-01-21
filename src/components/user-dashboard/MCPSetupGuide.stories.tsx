import type { Meta, StoryObj } from '@storybook/react';
import MCPSetupGuide from './MCPSetupGuide';

const meta: Meta<typeof MCPSetupGuide> = {
  title: 'UserDashboard/MCPSetupGuide',
  component: MCPSetupGuide,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Step-by-step guide for configuring Claude Code with MCP server access.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MCPSetupGuide>;

export const Default: Story = {
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    serverUrl: 'https://mcp.faion.net/sse',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomServer: Story = {
  args: {
    licenseKey: 'lic_team_xyz789abc456def123ghi012',
    serverUrl: 'https://mcp-staging.faion.net/sse',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
