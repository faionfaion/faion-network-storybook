import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Faion/Colors',
  parameters: {
    docs: {
      description: {
        component: `
## Color Palette

The Faion Network color palette is inspired by premium printed media and academic journals.

### Philosophy
- **No gradients** - flat, solid colors only
- **No neon** - warm, organic tones
- **Paper & Ink** - the visual metaphor

### Colors
| Role | Name | HEX |
|------|------|-----|
| Main Canvas | Warm Alabaster | #FAF9F6 |
| Cards/Surface | Pure Cream | #FFFFFF |
| Primary Text | Soft Charcoal | #1C1C1E |
| Body Text | Graphite | #4A4A4A |
| Borders | Taupe Grey | #E5E5E0 |
| Brand Accent | Deep Burgundy | #5D1F2D |
        `,
      },
    },
  },
};

export default meta;

const ColorSwatch = ({
  name,
  hex,
  desc,
  textColor = '#1C1C1E'
}: {
  name: string;
  hex: string;
  desc: string;
  textColor?: string;
}) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
    <div
      style={{
        width: '64px',
        height: '64px',
        backgroundColor: hex,
        borderRadius: '8px',
        border: '1px solid #E5E5E0',
        flexShrink: 0
      }}
    />
    <div>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px',
        fontWeight: 500,
        color: '#1C1C1E',
        marginBottom: '4px'
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '13px',
        color: '#4A4A4A',
        marginBottom: '4px'
      }}>
        {hex}
      </div>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: '#4A4A4A'
      }}>
        {desc}
      </div>
    </div>
  </div>
);

export const Backgrounds: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
        Backgrounds
      </div>
      <ColorSwatch name="Warm Alabaster" hex="#FAF9F6" desc="Main Canvas" />
      <ColorSwatch name="Pure Cream" hex="#FFFFFF" desc="Cards/Surface" />
    </div>
  ),
};

export const Ink: StoryObj = {
  name: 'The Ink',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
        The Ink
      </div>
      <ColorSwatch name="Soft Charcoal" hex="#1C1C1E" desc="Primary Text" />
      <ColorSwatch name="Graphite" hex="#4A4A4A" desc="Body Text" />
      <ColorSwatch name="Taupe Grey" hex="#E5E5E0" desc="Borders" />
    </div>
  ),
};

export const Accent: StoryObj = {
  name: 'The Accent',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
        The Accent
      </div>
      <ColorSwatch name="Deep Burgundy" hex="#5D1F2D" desc="Brand Accent" />
      <div style={{
        marginTop: '16px',
        padding: '16px',
        backgroundColor: '#FAF9F6',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#4A4A4A',
          lineHeight: 1.6
        }}>
          Deep Burgundy is used sparingly for:<br />
          • Primary buttons<br />
          • Active navigation states<br />
          • Links and interactive elements<br />
          • Accent lines and decorations<br />
          • Level badge borders
        </p>
      </div>
    </div>
  ),
};

export const FullPalette: StoryObj = {
  name: 'Complete Palette',
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      padding: '32px',
      backgroundColor: '#FAF9F6',
      borderRadius: '12px'
    }}>
      {/* Backgrounds */}
      <div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 600,
          color: '#4A4A4A',
          marginBottom: '16px'
        }}>
          Backgrounds
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ColorSwatch name="Warm Alabaster" hex="#FAF9F6" desc="Main Canvas" />
          <ColorSwatch name="Pure Cream" hex="#FFFFFF" desc="Cards/Surface" />
        </div>
      </div>

      {/* Ink */}
      <div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 600,
          color: '#4A4A4A',
          marginBottom: '16px'
        }}>
          The Ink
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ColorSwatch name="Soft Charcoal" hex="#1C1C1E" desc="Primary Text" />
          <ColorSwatch name="Graphite" hex="#4A4A4A" desc="Body Text" />
          <ColorSwatch name="Taupe Grey" hex="#E5E5E0" desc="Borders" />
        </div>
      </div>

      {/* Accent */}
      <div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 600,
          color: '#4A4A4A',
          marginBottom: '16px'
        }}>
          The Accent
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ColorSwatch name="Deep Burgundy" hex="#5D1F2D" desc="Brand Accent" />
        </div>
      </div>
    </div>
  ),
};

export const SemanticColors: StoryObj = {
  name: 'Level Badge Colors',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontWeight: 600,
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
        Level Badge Colors
      </div>
      <ColorSwatch name="Starter (Burgundy)" hex="#5D1F2D" desc="Beginner content" />
      <ColorSwatch name="Builder (Amber)" hex="#B45309" desc="Active builders" />
      <ColorSwatch name="Scaler (Red)" hex="#991B1B" desc="Growth & scaling" />
      <ColorSwatch name="Geek (Purple)" hex="#4C1D95" desc="Deep technical" />
    </div>
  ),
};
