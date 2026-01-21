import type { Meta, StoryObj } from '@storybook/react';
import LastUpdated from './LastUpdated';

const meta: Meta<typeof LastUpdated> = {
  title: 'Legal/LastUpdated',
  component: LastUpdated,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays when a legal document was last updated.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LastUpdated>;

export const LongFormat: Story = {
  args: {
    date: '2025-01-15',
    format: 'long',
  },
};

export const ShortFormat: Story = {
  args: {
    date: '2025-01-15',
    format: 'short',
  },
};

export const RelativeFormat: Story = {
  args: {
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    format: 'relative',
  },
};

export const AllFormats: Story = {
  render: () => {
    const date = '2025-01-15';
    const recentDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>
            Long format:
          </p>
          <LastUpdated date={date} format="long" />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>
            Short format:
          </p>
          <LastUpdated date={date} format="short" />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>
            Relative format (3 days ago):
          </p>
          <LastUpdated date={recentDate} format="relative" />
        </div>
      </div>
    );
  },
};

export const InContext: Story = {
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', color: '#1C1C1E', margin: 0 }}>
          Privacy Policy
        </h1>
        <LastUpdated date="2025-01-15" format="long" />
      </div>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.7, color: '#4A4A4A' }}>
        This Privacy Policy describes how Faion Network collects, uses, and shares your personal information
        when you use our services. By using our services, you agree to the collection and use of information
        in accordance with this policy.
      </p>
    </div>
  ),
};
