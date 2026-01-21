import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionStep from './QuestionStep';

const meta: Meta<typeof QuestionStep> = {
  title: 'TestimonialForm/QuestionStep',
  component: QuestionStep,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Single question step in the guided testimonial flow.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuestionStep>;

const sampleQuestion = {
  id: 'feature',
  question: 'What feature did you find most valuable?',
  options: [
    { label: 'SDD Methodology', value: 'sdd' },
    { label: 'AI Agents', value: 'agents' },
    { label: 'Marketing Strategies', value: 'marketing' },
    { label: 'Product Development', value: 'product' },
  ],
  allowCustom: true,
};

const simpleQuestion = {
  id: 'recommendation',
  question: 'Would you recommend Faion Network to a friend?',
  options: [
    { label: 'Yes, definitely!', value: 'yes' },
    { label: 'Maybe, depends on their needs', value: 'maybe' },
    { label: 'Not sure yet', value: 'not_sure' },
  ],
  allowCustom: false,
};

export const Default: Story = {
  args: {
    question: sampleQuestion,
    value: '',
    onChange: (value) => console.log('Selected:', value),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithSelectedValue: Story = {
  args: {
    question: sampleQuestion,
    value: 'agents',
    onChange: (value) => console.log('Selected:', value),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutCustomOption: Story = {
  args: {
    question: simpleQuestion,
    value: '',
    onChange: (value) => console.log('Selected:', value),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Interactive: Story = {
  render: function InteractiveQuestionStep() {
    const [value, setValue] = useState('');

    return (
      <div style={{ maxWidth: '500px' }}>
        <QuestionStep
          question={sampleQuestion}
          value={value}
          onChange={setValue}
        />
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#4A4A4A',
          marginTop: '16px',
        }}>
          Selected value: <strong>{value || '(none)'}</strong>
        </p>
      </div>
    );
  },
};
