import type { Meta, StoryObj } from '@storybook/react';
import { Badge, LevelBadge } from '../components/ui/Badge';
import { Circle, Hammer, TrendingUp, Cpu } from 'lucide-react';
import '../components/ui/Badge.css';

const meta: Meta<typeof Badge> = {
  title: 'FAION/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge components following the Faion "Digital Journal" aesthetic. Includes simple badges and Level Badges (Technical Specification Labels). Pure CSS implementation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral Badge',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent Badge',
  },
};

export const AllBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="accent">Accent</Badge>
    </div>
  ),
};

export const LevelBadges: Story = {
  name: 'Level Badges (Complexity Indicators)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LevelBadge level="starter" icon={<Circle size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">Best for beginners</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LevelBadge level="builder" icon={<Hammer size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">For those actively building</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LevelBadge level="scaler" icon={<TrendingUp size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">Focused on growth</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LevelBadge level="geek" icon={<Cpu size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">Deep technical dives</span>
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-badge-desc {
            font-family: Inter, sans-serif;
            font-size: 14px;
            color: #4A4A4A;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const LevelBadgeSpecs: Story = {
  name: 'Level Badge Specifications',
  render: () => (
    <div className="fn-specs-container">
      <h3 className="fn-specs-title">Technical Specifications</h3>
      <ul className="fn-specs-list">
        <li>Container: Transparent fill, 1px solid border, 6px radius</li>
        <li>Typography: Uppercase Sans-serif (Inter), 11px, tracking 0.04em</li>
        <li>Icons: 14px size, 1.5px stroke, outline only</li>
        <li>Padding: 4px vertical, 8px horizontal</li>
        <li>Height: 24px</li>
      </ul>
      <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <LevelBadge level="starter" icon={<Circle size={14} strokeWidth={1.5} />} />
        <LevelBadge level="builder" icon={<Hammer size={14} strokeWidth={1.5} />} />
        <LevelBadge level="scaler" icon={<TrendingUp size={14} strokeWidth={1.5} />} />
        <LevelBadge level="geek" icon={<Cpu size={14} strokeWidth={1.5} />} />
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-specs-container {
            background-color: #FAF9F6;
            padding: 32px;
            border-radius: 8px;
          }
          .fn-specs-title {
            font-family: Georgia, serif;
            font-size: 20px;
            color: #1C1C1E;
            margin-bottom: 16px;
          }
          .fn-specs-list {
            font-family: Inter, sans-serif;
            font-size: 14px;
            color: #4A4A4A;
            line-height: 2;
            padding-left: 20px;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};
