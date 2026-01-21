import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Warm Alabaster',
      values: [
        { name: 'Warm Alabaster', value: '#FAF9F6' },
        { name: 'Pure Cream', value: '#FFFFFF' },
        { name: 'Soft Charcoal', value: '#1C1C1E' },
      ],
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
