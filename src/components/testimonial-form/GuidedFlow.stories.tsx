import type { Meta, StoryObj } from '@storybook/react';
import GuidedFlow from './GuidedFlow';

const meta: Meta<typeof GuidedFlow> = {
  title: 'TestimonialForm/GuidedFlow',
  component: GuidedFlow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Multi-step guided testimonial flow with progress indicator.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GuidedFlow>;

const sampleQuestions = [
  {
    id: 'role',
    question: 'What best describes your role?',
    options: [
      { label: 'Solopreneur / Founder', value: 'solopreneur' },
      { label: 'Developer / Engineer', value: 'developer' },
      { label: 'Product Manager', value: 'pm' },
      { label: 'Designer', value: 'designer' },
    ],
    allowCustom: true,
  },
  {
    id: 'feature',
    question: 'What feature did you find most valuable?',
    options: [
      { label: 'SDD Methodology', value: 'sdd' },
      { label: 'AI Agents & Skills', value: 'agents' },
      { label: 'Marketing Strategies', value: 'marketing' },
      { label: 'Product Development', value: 'product' },
    ],
    allowCustom: true,
  },
  {
    id: 'impact',
    question: 'How has Faion Network impacted your work?',
    options: [
      { label: 'Saved me significant time', value: 'time' },
      { label: 'Improved my product quality', value: 'quality' },
      { label: 'Helped me launch faster', value: 'launch' },
      { label: 'Better organized my workflow', value: 'workflow' },
    ],
    allowCustom: true,
  },
  {
    id: 'recommend',
    question: 'Would you recommend Faion Network?',
    options: [
      { label: 'Yes, to everyone!', value: 'yes_all' },
      { label: 'Yes, to solopreneurs', value: 'yes_solo' },
      { label: 'Yes, to developers', value: 'yes_dev' },
      { label: 'Maybe, depends on use case', value: 'maybe' },
    ],
    allowCustom: false,
  },
];

const generatePreview = (answers: Record<string, string>): string => {
  return `As a ${answers.role || 'user'}, I found the ${answers.feature || 'features'} most valuable. It has ${answers.impact || 'helped me'} in my work. I would definitely ${answers.recommend || 'recommend it'}!`;
};

export const Default: Story = {
  args: {
    questions: sampleQuestions,
    onComplete: (answers) => console.log('Completed:', answers),
    onGeneratePreview: generatePreview,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TwoQuestions: Story = {
  args: {
    questions: sampleQuestions.slice(0, 2),
    onComplete: (answers) => console.log('Completed:', answers),
    onGeneratePreview: generatePreview,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
