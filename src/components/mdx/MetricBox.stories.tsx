import type { Meta, StoryObj } from '@storybook/react';
import MetricBox from './MetricBox';

const meta: Meta<typeof MetricBox> = {
  title: 'MDX/MetricBox',
  component: MetricBox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Single metric display with optional change indicator for dashboards and statistics.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    changeType: {
      control: 'select',
      options: ['positive', 'negative', 'neutral'],
      description: 'Type of change for styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricBox>;

export const Default: Story = {
  args: {
    value: '502',
    label: 'Methodologies',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPositiveChange: Story = {
  args: {
    value: '$24.5K',
    label: 'Monthly Revenue',
    change: '+15%',
    changeType: 'positive',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithNegativeChange: Story = {
  args: {
    value: '3.2%',
    label: 'Churn Rate',
    change: '-0.5%',
    changeType: 'negative',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithNeutralChange: Story = {
  args: {
    value: '1,234',
    label: 'Active Users',
    change: '0%',
    changeType: 'neutral',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MetricGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '16px',
      maxWidth: '800px',
    }}>
      <MetricBox value="502" label="Methodologies" />
      <MetricBox value="15" label="Skills" />
      <MetricBox value="8" label="Languages" />
      <MetricBox value="24/7" label="Support" />
    </div>
  ),
};

export const DashboardMetrics: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '16px',
      maxWidth: '800px',
    }}>
      <MetricBox
        value="$24.5K"
        label="Revenue"
        change="+15%"
        changeType="positive"
      />
      <MetricBox
        value="1,234"
        label="Users"
        change="+8%"
        changeType="positive"
      />
      <MetricBox
        value="3.2%"
        label="Churn"
        change="-0.5%"
        changeType="negative"
      />
      <MetricBox
        value="4.8"
        label="Rating"
        change="+0.2"
        changeType="positive"
      />
    </div>
  ),
};

export const InArticle: Story = {
  render: () => (
    <article style={{ maxWidth: '800px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '28px', marginBottom: '16px', color: '#1C1C1E' }}>
        Framework by the Numbers
      </h2>
      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A', marginBottom: '24px' }}>
        The Faion Network provides comprehensive coverage across all aspects of solopreneur success.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
        marginBottom: '24px',
      }}>
        <MetricBox value="502" label="Methodologies" />
        <MetricBox value="15" label="AI Skills" />
        <MetricBox value="1" label="AI Agent" />
      </div>

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4A4A' }}>
        From research to launch, every methodology is battle-tested and designed
        for real-world application.
      </p>
    </article>
  ),
};
