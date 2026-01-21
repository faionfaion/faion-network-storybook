import type { Meta, StoryObj } from '@storybook/react';
import DocumentationPage from '../components/DocumentationPage';

const meta: Meta<typeof DocumentationPage> = {
  title: 'Pages/Documentation',
  component: DocumentationPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Design System Documentation - "The Digital Journal" / "Intellectual Serenity" aesthetic. Includes Design Philosophy, Color Palette, Typography System, Iconography, UI Components, Layout & Spacing, and Accessibility guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onNavigate: {
      action: 'navigate',
      description: 'Navigation callback when header links are clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DocumentationPage>;

export const Default: Story = {
  args: {
    onNavigate: (page: string) => console.log(`Navigate to: ${page}`),
  },
};

export const FullPage: Story = {
  name: 'Full Documentation Page',
  args: {
    onNavigate: (page: string) => console.log(`Navigate to: ${page}`),
  },
  parameters: {
    docs: {
      description: {
        story: 'The complete documentation page with sticky sidebar navigation, all sections including: Design Philosophy, Color Palette, Typography System, Iconography & Graphics, UI Components (Buttons, Cards, Level Badges), Layout & Spacing (8-Point Grid System), and Accessibility (WCAG 2.2 AA).',
      },
    },
  },
};
