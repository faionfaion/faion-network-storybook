import type { Meta, StoryObj } from '@storybook/react';
import { Check, Circle, ArrowRight, Hammer, TrendingUp, Cpu, X, Menu, ChevronDown, ChevronRight, Mail, Phone, MapPin, User, Settings, Search, Bell, Heart, Star, Download, Upload, Edit, Trash2, Plus, Minus, Eye, EyeOff, Lock, Unlock, Calendar, Clock, Link, ExternalLink, Copy, Share } from 'lucide-react';

const meta: Meta = {
  title: 'Faion/Iconography',
  parameters: {
    docs: {
      description: {
        component: `
## Iconography & Graphics

Imagery should feel like technical illustrations found in a scientific textbook.

### Style Guidelines
- **"Scientific Line Art"** aesthetic
- **Stroke:** 1.5px thin stroke
- **Fill:** No fill (outline only)
- **Color:** Matches text color or Deep Burgundy for accents

### Icon Sizes
| Context | Size |
|---------|------|
| Inline with text | 16px |
| Button icons | 20px |
| Feature icons | 24px |
| Hero icons | 32px+ |
        `,
      },
    },
  },
};

export default meta;

const IconDisplay = ({ icon: Icon, name, size = 24 }: { icon: any; name: string; size?: number }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    padding: '16px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E5E0',
    borderRadius: '8px',
    minWidth: '100px'
  }}>
    <Icon size={size} strokeWidth={1.5} color="#1C1C1E" />
    <span style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      color: '#4A4A4A'
    }}>
      {name}
    </span>
  </div>
);

export const IconStyle: StoryObj = {
  name: 'Icon Style',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
          Icon Style Comparison
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #5D1F2D',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <Check size={32} strokeWidth={1.5} color="#5D1F2D" />
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#5D1F2D',
              marginTop: '8px',
              fontWeight: 500
            }}>
              Correct (1.5px stroke)
            </div>
          </div>

          <div style={{
            padding: '24px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E5E0',
            borderRadius: '8px',
            textAlign: 'center',
            opacity: 0.5
          }}>
            <Check size={32} strokeWidth={3} color="#1C1C1E" />
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#4A4A4A',
              marginTop: '8px'
            }}>
              Too thick
            </div>
          </div>

          <div style={{
            padding: '24px',
            backgroundColor: '#5D1F2D',
            border: '1px solid #E5E5E0',
            borderRadius: '8px',
            textAlign: 'center',
            opacity: 0.5
          }}>
            <Check size={32} strokeWidth={1.5} color="#FFFFFF" fill="#FFFFFF" />
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#FFFFFF',
              marginTop: '8px'
            }}>
              No fills
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CommonIcons: StoryObj = {
  name: 'Common Icons',
  render: () => (
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
        Common Icons
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '12px'
      }}>
        <IconDisplay icon={Check} name="Check" />
        <IconDisplay icon={X} name="Close" />
        <IconDisplay icon={Plus} name="Plus" />
        <IconDisplay icon={Minus} name="Minus" />
        <IconDisplay icon={ArrowRight} name="Arrow" />
        <IconDisplay icon={ChevronDown} name="Chevron" />
        <IconDisplay icon={Menu} name="Menu" />
        <IconDisplay icon={Search} name="Search" />
        <IconDisplay icon={Bell} name="Bell" />
        <IconDisplay icon={Settings} name="Settings" />
        <IconDisplay icon={User} name="User" />
        <IconDisplay icon={Mail} name="Mail" />
      </div>
    </div>
  ),
};

export const ActionIcons: StoryObj = {
  name: 'Action Icons',
  render: () => (
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
        Action Icons
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '12px'
      }}>
        <IconDisplay icon={Edit} name="Edit" />
        <IconDisplay icon={Trash2} name="Delete" />
        <IconDisplay icon={Copy} name="Copy" />
        <IconDisplay icon={Share} name="Share" />
        <IconDisplay icon={Download} name="Download" />
        <IconDisplay icon={Upload} name="Upload" />
        <IconDisplay icon={Eye} name="View" />
        <IconDisplay icon={EyeOff} name="Hide" />
        <IconDisplay icon={Lock} name="Lock" />
        <IconDisplay icon={Unlock} name="Unlock" />
        <IconDisplay icon={Link} name="Link" />
        <IconDisplay icon={ExternalLink} name="External" />
      </div>
    </div>
  ),
};

export const LevelIcons: StoryObj = {
  name: 'Level Badge Icons',
  render: () => (
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
        Level Badge Icons
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #5D1F2D',
          borderRadius: '8px'
        }}>
          <Circle size={24} strokeWidth={1.5} color="#5D1F2D" />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#5D1F2D',
            fontWeight: 600
          }}>
            Starter
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #B45309',
          borderRadius: '8px'
        }}>
          <Hammer size={24} strokeWidth={1.5} color="#B45309" />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#B45309',
            fontWeight: 600
          }}>
            Builder
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #991B1B',
          borderRadius: '8px'
        }}>
          <TrendingUp size={24} strokeWidth={1.5} color="#991B1B" />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#991B1B',
            fontWeight: 600
          }}>
            Scaler
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #4C1D95',
          borderRadius: '8px'
        }}>
          <Cpu size={24} strokeWidth={1.5} color="#4C1D95" />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#4C1D95',
            fontWeight: 600
          }}>
            Geek
          </span>
        </div>
      </div>
    </div>
  ),
};

export const NodeDiagram: StoryObj = {
  name: 'Node Diagram Example',
  render: () => (
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
        Minimalist Node-Link Diagram
      </div>

      <div style={{
        padding: '48px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          {/* Node 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px solid #5D1F2D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <Check size={24} strokeWidth={1.5} color="#5D1F2D" />
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#4A4A4A'
            }}>
              Input
            </span>
          </div>

          {/* Dotted Line */}
          <div style={{
            flex: 1,
            height: '1px',
            borderTop: '2px dashed #E5E5E0',
            margin: '0 24px'
          }} />

          {/* Node 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px solid #5D1F2D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#5D1F2D',
                borderRadius: '50%'
              }} />
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#4A4A4A'
            }}>
              Process
            </span>
          </div>

          {/* Dotted Line */}
          <div style={{
            flex: 1,
            height: '1px',
            borderTop: '2px dashed #E5E5E0',
            margin: '0 24px'
          }} />

          {/* Node 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px solid #5D1F2D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px'
            }}>
              <Check size={24} strokeWidth={1.5} color="#5D1F2D" />
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#4A4A4A'
            }}>
              Output
            </span>
          </div>
        </div>
      </div>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        marginTop: '16px'
      }}>
        Diagrams use minimalist node-link style with dotted lines in Taupe Grey (#E5E5E0).
      </p>
    </div>
  ),
};
