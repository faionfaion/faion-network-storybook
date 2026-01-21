import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Content/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Search input component with icon, clear button, and keyboard shortcut hint.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Size variant',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    showShortcut: {
      control: 'boolean',
      description: 'Show keyboard shortcut',
    },
    expandable: {
      control: 'boolean',
      description: 'Expandable mode',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search methodologies...',
    showShortcut: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithValue: Story = {
  args: {
    value: 'SDD workflow',
    placeholder: 'Search...',
    showShortcut: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Loading: Story = {
  args: {
    value: 'searching...',
    placeholder: 'Search...',
    isLoading: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Compact: Story = {
  args: {
    placeholder: 'Search...',
    size: 'compact',
    showShortcut: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NoShortcut: Story = {
  args: {
    placeholder: 'Search articles...',
    showShortcut: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Expandable: Story = {
  args: {
    placeholder: 'Search...',
    expandable: true,
    showShortcut: false,
  },
};

// Interactive controlled example
const ControlledSearchBar = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleSubmit = (query: string) => {
    setSubmitted(query);
  };

  return (
    <div style={{ width: '400px' }}>
      <SearchBar
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        placeholder="Search methodologies..."
      />
      {submitted && (
        <p style={{
          marginTop: '16px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#4A4A4A'
        }}>
          Submitted: "{submitted}"
        </p>
      )}
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledSearchBar />,
};

export const InHeader: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      background: '#FFFFFF',
      borderRadius: '8px',
      border: '1px solid #E5E5E0',
      width: '800px'
    }}>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#1C1C1E' }}>
        Faion Network
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <nav style={{ display: 'flex', gap: '24px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Methodologies</a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Docs</a>
        </nav>
        <SearchBar
          placeholder="Search..."
          size="compact"
          expandable
          showShortcut={false}
        />
      </div>
    </div>
  ),
};

export const InSearchPage: Story = {
  render: () => (
    <div style={{ maxWidth: '720px', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', marginBottom: '8px', color: '#1C1C1E' }}>
        Search Methodologies
      </h1>
      <p style={{ color: '#4A4A4A', marginBottom: '24px' }}>
        Find the methodology you need across 502 methodologies and 15 skills.
      </p>
      <SearchBar
        placeholder="Search by name, skill, or keyword..."
        autoFocus
      />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>
          Default with shortcut
        </p>
        <SearchBar placeholder="Search..." showShortcut />
      </div>
      <div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>
          With value
        </p>
        <SearchBar placeholder="Search..." value="RAG pipelines" showShortcut={false} />
      </div>
      <div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>
          Loading
        </p>
        <SearchBar placeholder="Search..." value="loading..." isLoading showShortcut={false} />
      </div>
      <div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>
          Compact
        </p>
        <SearchBar placeholder="Search..." size="compact" showShortcut={false} />
      </div>
      <div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>
          Expandable (click icon)
        </p>
        <SearchBar placeholder="Search..." expandable showShortcut={false} />
      </div>
    </div>
  ),
};
