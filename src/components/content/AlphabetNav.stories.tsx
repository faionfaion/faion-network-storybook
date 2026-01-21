import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import AlphabetNav, { AlphabetNavProps } from './AlphabetNav';

const meta: Meta<typeof AlphabetNav> = {
  title: 'Content/AlphabetNav',
  component: AlphabetNav,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A-Z navigation for glossary and alphabetical content. Used in the Terminology Dictionary.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'sticky'],
      description: 'Navigation variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    showAll: {
      control: 'boolean',
      description: 'Show "All" option',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlphabetNav>;

// Interactive wrapper
const AlphabetNavInteractive = (args: Partial<AlphabetNavProps>) => {
  const [activeLetter, setActiveLetter] = useState<string | undefined>(args.activeLetter);
  return (
    <AlphabetNav
      {...args}
      activeLetter={activeLetter}
      onLetterClick={(letter) => setActiveLetter(letter || undefined)}
    />
  );
};

export const Default: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {},
};

export const WithActiveLetter: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {
    activeLetter: 'M',
  },
};

export const LimitedLetters: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {
    availableLetters: ['A', 'B', 'C', 'D', 'M', 'P', 'R', 'S', 'T', 'U'],
  },
};

export const Compact: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {
    variant: 'compact',
    activeLetter: 'A',
  },
};

export const SmallSize: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {
    size: 'lg',
  },
};

export const WithoutAll: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {
    showAll: false,
    activeLetter: 'A',
  },
};

export const CustomAllLabel: Story = {
  render: (args) => <AlphabetNavInteractive {...args} />,
  args: {
    allLabel: 'View All',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onLetterClick: () => {},
  },
};

export const InGlossary: Story = {
  render: () => {
    const [activeLetter, setActiveLetter] = useState<string>('');
    const availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'L', 'M', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W'];

    const terms: Record<string, Array<{ term: string; definition: string }>> = {
      '': [
        { term: 'API', definition: 'Application Programming Interface' },
        { term: 'Backlog', definition: 'A prioritized list of work for a development team' },
        { term: 'CI/CD', definition: 'Continuous Integration and Continuous Deployment' },
      ],
      'A': [
        { term: 'API', definition: 'Application Programming Interface' },
        { term: 'Agent', definition: 'An autonomous AI entity that can perform tasks' },
        { term: 'Acceptance Criteria', definition: 'Conditions that must be met for a user story to be complete' },
      ],
      'M': [
        { term: 'MCP', definition: 'Model Context Protocol - A protocol for AI model communication' },
        { term: 'Methodology', definition: 'A systematic approach or process for achieving a goal' },
        { term: 'MVP', definition: 'Minimum Viable Product' },
      ],
      'S': [
        { term: 'SDD', definition: 'Specification-Driven Development' },
        { term: 'Solopreneur', definition: 'An entrepreneur who runs their business alone' },
        { term: 'Sprint', definition: 'A time-boxed iteration in agile development' },
      ],
    };

    const displayTerms = terms[activeLetter] || terms[''];

    return (
      <div style={{ width: '800px' }}>
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 700, color: '#1C1C1E', margin: '0 0 8px' }}>
            Terminology Dictionary
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#4A4A4A', margin: 0 }}>
            Definitions of key terms used throughout the platform
          </p>
        </div>

        {/* Alphabet navigation */}
        <div style={{ marginBottom: '32px' }}>
          <AlphabetNav
            activeLetter={activeLetter}
            onLetterClick={(letter) => setActiveLetter(letter)}
            availableLetters={availableLetters}
          />
        </div>

        {/* Terms list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {displayTerms.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '20px',
                background: '#FFFFFF',
                border: '1px solid #E5E5E0',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 700, color: '#1C1C1E', margin: '0 0 8px' }}>
                {item.term}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4A4A4A', margin: 0, lineHeight: 1.6 }}>
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [letter, setLetter] = useState<string>('A');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Default</p>
          <AlphabetNav activeLetter={letter} onLetterClick={setLetter} />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4A4A4A', marginBottom: '8px' }}>Compact</p>
          <AlphabetNav activeLetter={letter} onLetterClick={setLetter} variant="compact" />
        </div>
      </div>
    );
  },
};
