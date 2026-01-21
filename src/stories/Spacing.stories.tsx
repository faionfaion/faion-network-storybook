import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Faion/Spacing',
  parameters: {
    docs: {
      description: {
        component: `
## 8-Point Grid System

Every margin, padding, and dimension must be a multiple of 8.

### Why 8pt?
It provides mathematical harmony and scales perfectly across all screen sizes.

### Spacing Scale
| Value | Multiplier | Use Case |
|-------|------------|----------|
| 4px | 0.5x | Minimal separation |
| 8px | 1x | Related elements |
| 16px | 2x | Grouping elements |
| 24px | 3x | Small component padding |
| 32px | 4x | Card internal padding |
| 48px | 6x | Major component separation |
| 64px | 8x | Section gap (Mobile) |
| 80px | 10x | Section gap (Desktop) |
| 120px | 15x | "Luxury Air" |
| 160px | 20x | Footer separation |
        `,
      },
    },
  },
};

export default meta;

const SpacingBlock = ({ size, label, usage }: { size: number; label: string; usage: string }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px 0',
    borderBottom: '1px solid #E5E5E0'
  }}>
    <div style={{
      width: '80px',
      fontFamily: 'Inter, monospace',
      fontSize: '15px',
      fontWeight: 500,
      color: '#1C1C1E'
    }}>
      {size}px
    </div>
    <div style={{
      width: `${size}px`,
      height: '24px',
      backgroundColor: '#5D1F2D',
      borderRadius: '4px',
      flexShrink: 0
    }} />
    <div style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '13px',
      color: '#4A4A4A'
    }}>
      <span style={{ fontWeight: 500 }}>{label}</span> — {usage}
    </div>
  </div>
);

export const MicroSpacing: StoryObj = {
  name: 'Micro Spacing (Component Layout)',
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '16px'
      }}>
        Micro Spacing (Internal Component Layout)
      </div>
      <SpacingBlock size={4} label="0.5x" usage="Minimal visual separation (Label to Input)" />
      <SpacingBlock size={8} label="1x" usage="Related elements (Icon to Text)" />
      <SpacingBlock size={16} label="2x" usage="Grouping elements within a card" />
      <SpacingBlock size={24} label="3x" usage="Standard padding for small components" />
      <SpacingBlock size={32} label="4x" usage="Separation between unrelated groups" />
    </div>
  ),
};

export const MacroSpacing: StoryObj = {
  name: 'Macro Spacing (Page Layout)',
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '16px'
      }}>
        Macro Spacing (Page Layout)
      </div>
      <SpacingBlock size={48} label="6x" usage="Major component separation" />
      <SpacingBlock size={64} label="8x" usage="Standard Section gap (Mobile)" />
      <SpacingBlock size={80} label="10x" usage="Standard Section gap (Desktop)" />
      <SpacingBlock size={120} label="15x" usage='"Luxury Air" – major narrative blocks' />
      <SpacingBlock size={160} label="20x" usage="Footer separation" />
    </div>
  ),
};

export const ComponentSpecifics: StoryObj = {
  name: 'Component Dimensions',
  render: () => (
    <div style={{
      padding: '24px',
      backgroundColor: '#FAF9F6',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      maxWidth: '500px'
    }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '16px'
      }}>
        Component Specifics
      </div>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px',
        color: '#4A4A4A',
        lineHeight: 2
      }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ fontWeight: 500, color: '#1C1C1E', width: '100px' }}>Buttons</span>
          <span>48px (Standard) or 56px (Large/Hero)</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ fontWeight: 500, color: '#1C1C1E', width: '100px' }}>Inputs</span>
          <span>48px fixed height</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ fontWeight: 500, color: '#1C1C1E', width: '100px' }}>Cards</span>
          <span>32px or 40px internal padding</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ fontWeight: 500, color: '#1C1C1E', width: '100px' }}>Columns</span>
          <span>24px or 32px gutter width</span>
        </div>
      </div>
    </div>
  ),
};

export const SpacingVisualExample: StoryObj = {
  name: 'Visual Spacing Example',
  render: () => (
    <div style={{
      padding: '32px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      maxWidth: '500px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Title block */}
        <div style={{ height: '8px', width: '96px', backgroundColor: '#5D1F2D', borderRadius: '4px' }} />

        {/* Text lines */}
        <div style={{ height: '8px', width: '100%', backgroundColor: '#E5E5E0', borderRadius: '4px' }} />
        <div style={{ height: '8px', width: '75%', backgroundColor: '#E5E5E0', borderRadius: '4px' }} />
        <div style={{ height: '8px', width: '83%', backgroundColor: '#E5E5E0', borderRadius: '4px' }} />

        {/* Divider with spacing */}
        <div style={{ height: '1px', backgroundColor: '#E5E5E0', margin: '32px 0' }} />

        {/* More text */}
        <div style={{ height: '8px', width: '100%', backgroundColor: '#E5E5E0', borderRadius: '4px' }} />
        <div style={{ height: '8px', width: '66%', backgroundColor: '#E5E5E0', borderRadius: '4px' }} />
      </div>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: '#4A4A4A',
        marginTop: '24px',
        textAlign: 'center'
      }}>
        Visual representation of spacing hierarchy
      </p>
    </div>
  ),
};

export const BookColumn: StoryObj = {
  name: 'The "Book" Column',
  render: () => (
    <div style={{ maxWidth: '700px' }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '16px'
      }}>
        Optimal Reading Width
      </div>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        color: '#4A4A4A',
        lineHeight: 1.7,
        marginBottom: '24px'
      }}>
        Limit text width to approximately 600-700px (60-75 characters per line) for optimal readability.
        This creates a comfortable reading experience similar to printed books and journals.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{
          padding: '16px',
          border: '1px solid #5D1F2D',
          borderRadius: '8px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '16px',
            backgroundColor: '#FAF9F6',
            padding: '0 8px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#5D1F2D',
            fontWeight: 500
          }}>
            600px (recommended minimum)
          </div>
          <div style={{ width: '600px', maxWidth: '100%', height: '8px', backgroundColor: '#E5E5E0', borderRadius: '4px' }} />
        </div>

        <div style={{
          padding: '16px',
          border: '1px solid #5D1F2D',
          borderRadius: '8px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '16px',
            backgroundColor: '#FAF9F6',
            padding: '0 8px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#5D1F2D',
            fontWeight: 500
          }}>
            700px (recommended maximum)
          </div>
          <div style={{ width: '700px', maxWidth: '100%', height: '8px', backgroundColor: '#E5E5E0', borderRadius: '4px' }} />
        </div>
      </div>
    </div>
  ),
};
