import type { Meta, StoryObj } from '@storybook/react';
import SuccessStoriesSection from './SuccessStoriesSection';

const meta: Meta<typeof SuccessStoriesSection> = {
  title: 'Landing/SuccessStoriesSection',
  component: SuccessStoriesSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Success stories section showcasing real solopreneur outcomes with before/after metrics and case study links.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SuccessStoriesSection>;

const sampleStories = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'Indie SaaS Founder',
    initials: 'AC',
    excerpt:
      'The SDD methodology helped me go from idea to $15K MRR in 8 months. The structured approach eliminated my analysis paralysis completely.',
    metrics: [
      { label: 'Monthly Revenue', before: '$0', after: '$15K' },
      { label: 'Time to MVP', before: '6 months', after: '6 weeks' },
    ],
    caseStudyUrl: '#alex-chen',
  },
  {
    id: '2',
    name: 'Maria Santos',
    role: 'UX Consultant',
    company: 'Design Studio',
    initials: 'MS',
    excerpt:
      'I went from freelancing at $50/hour to running a productized service earning $25K/month. The marketing methodologies were game-changing.',
    metrics: [
      { label: 'Monthly Income', before: '$4K', after: '$25K' },
      { label: 'Client Acquisition', before: 'Cold outreach', after: 'Inbound' },
    ],
    caseStudyUrl: '#maria-santos',
  },
  {
    id: '3',
    name: 'David Kumar',
    role: 'Technical Writer',
    initials: 'DK',
    excerpt:
      'The content strategy framework helped me build an audience of 50K and launch an info-product that generates $8K/month passively.',
    metrics: [
      { label: 'Monthly Passive Income', before: '$0', after: '$8K' },
      { label: 'Email Subscribers', before: '200', after: '12K' },
    ],
    caseStudyUrl: '#david-kumar',
  },
];

const moreStories = [
  ...sampleStories,
  {
    id: '4',
    name: 'Sarah Johnson',
    role: 'AI Developer',
    initials: 'SJ',
    excerpt:
      'The AI/ML methodologies accelerated my learning curve dramatically. Now I build and sell AI tools generating $20K/month.',
    metrics: [
      { label: 'Monthly Revenue', before: 'Employed', after: '$20K' },
      { label: 'Products Launched', before: '0', after: '3' },
    ],
    caseStudyUrl: '#sarah-johnson',
  },
  {
    id: '5',
    name: 'James Wilson',
    role: 'No-Code Developer',
    initials: 'JW',
    excerpt:
      'Even without coding skills, I built a micro-SaaS using the product methodologies. $6K MRR and growing.',
    metrics: [
      { label: 'Monthly Revenue', before: '$0', after: '$6K' },
    ],
    caseStudyUrl: '#james-wilson',
  },
  {
    id: '6',
    name: 'Emily Zhang',
    role: 'Course Creator',
    initials: 'EZ',
    excerpt:
      'The launch frameworks helped me sell 1,200 copies of my course in the first week. Best investment I ever made.',
    metrics: [
      { label: 'Launch Revenue', before: 'N/A', after: '$48K' },
      { label: 'Time to Create', before: '3 months', after: '4 weeks' },
    ],
    caseStudyUrl: '#emily-zhang',
  },
];

/**
 * Default with three success stories
 */
export const Default: Story = {
  args: {
    headline: 'Real Results from Real Solopreneurs',
    subheadline:
      'See how others transformed their careers using our methodologies.',
    stories: sampleStories,
    viewAllText: 'View All Success Stories',
    onViewAllClick: () => console.log('View all clicked'),
  },
};

/**
 * Extended grid with six stories
 */
export const ExtendedGrid: Story = {
  args: {
    headline: 'From Side Hustle to Full Income',
    subheadline:
      'Join hundreds of solopreneurs who built sustainable businesses.',
    stories: moreStories,
    viewAllText: 'See More Stories',
    onViewAllClick: () => console.log('View all clicked'),
  },
};

/**
 * Single featured story
 */
export const SingleStory: Story = {
  args: {
    headline: 'Featured Success Story',
    stories: [sampleStories[0]],
  },
};

/**
 * Without CTA button
 */
export const WithoutCTA: Story = {
  args: {
    headline: 'What Our Members Achieved',
    subheadline: 'Real outcomes from the Faion Network community.',
    stories: sampleStories,
  },
};

/**
 * Minimal metrics
 */
export const MinimalMetrics: Story = {
  args: {
    headline: 'Quick Wins',
    stories: [
      {
        id: '1',
        name: 'Quick Starter',
        role: 'Solopreneur',
        initials: 'QS',
        excerpt: 'Got my first paying customer within 2 weeks of starting.',
        metrics: [{ label: 'Time to First Customer', before: 'Never', after: '2 weeks' }],
      },
      {
        id: '2',
        name: 'Late Bloomer',
        role: 'Career Changer',
        initials: 'LB',
        excerpt: 'At 45, I finally made the switch. Never been happier.',
        metrics: [{ label: 'Income Change', before: '$80K/yr', after: '$150K/yr' }],
      },
    ],
  },
};
