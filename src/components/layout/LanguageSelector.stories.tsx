import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import LanguageSelector, { DEFAULT_LANGUAGES, type LanguageCode, type LanguageSelectorProps } from './LanguageSelector';

const meta: Meta<typeof LanguageSelector> = {
  title: 'Layout/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown component for selecting UI language. Supports 8 languages as defined in the Faion Network constitution.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'minimal'],
      description: 'Selector variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    showNativeName: {
      control: 'boolean',
      description: 'Show native language name',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSelector>;

// Interactive wrapper
const LanguageSelectorInteractive = (args: Partial<LanguageSelectorProps>) => {
  const [value, setValue] = useState<LanguageCode>(args.value || 'en');
  return (
    <LanguageSelector
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
  },
};

export const WithUkrainian: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'uk',
  },
};

export const Compact: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    variant: 'compact',
  },
};

export const Minimal: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    variant: 'minimal',
  },
};

export const SmallSize: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    size: 'lg',
  },
};

export const WithEnglishNames: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'de',
    showNativeName: false,
  },
};

export const Disabled: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    disabled: true,
  },
};

export const LimitedLanguages: Story = {
  render: (args) => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    languages: DEFAULT_LANGUAGES.slice(0, 4),
  },
};

export const InHeader: Story = {
  render: () => {
    const [value, setValue] = useState<LanguageCode>('en');
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E5E0',
        width: '800px',
      }}>
        <div style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '20px', color: '#5D1F2D' }}>
          Faion Network
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <nav style={{ display: 'flex', gap: '24px', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            <a href="#" style={{ color: '#1C1C1E', textDecoration: 'none' }}>Features</a>
            <a href="#" style={{ color: '#1C1C1E', textDecoration: 'none' }}>Pricing</a>
            <a href="#" style={{ color: '#1C1C1E', textDecoration: 'none' }}>Docs</a>
          </nav>
          <LanguageSelector
            value={value}
            onChange={setValue}
            variant="compact"
            size="sm"
          />
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [value, setValue] = useState<LanguageCode>('en');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Default</p>
          <LanguageSelector value={value} onChange={setValue} variant="default" />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Compact</p>
          <LanguageSelector value={value} onChange={setValue} variant="compact" />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Minimal</p>
          <LanguageSelector value={value} onChange={setValue} variant="minimal" />
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [value, setValue] = useState<LanguageCode>('en');
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LanguageSelector value={value} onChange={setValue} size="sm" />
        <LanguageSelector value={value} onChange={setValue} size="md" />
        <LanguageSelector value={value} onChange={setValue} size="lg" />
      </div>
    );
  },
};
