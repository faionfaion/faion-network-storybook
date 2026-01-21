import type { Meta, StoryObj } from '@storybook/react';
import { Input, Textarea, InputWithIcon, FormField } from '../components/ui/Input';
import '../components/ui/Input.css';

const meta: Meta<typeof Input> = {
  title: 'FAION/Core UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Input and Textarea components following the Faion "Digital Journal" aesthetic.

## Features
- White background with Taupe Grey border
- Burgundy focus ring
- Error state with red border
- Disabled state with reduced opacity
- Size variants (small, default, large)
- Icon support (left/right)
- FormField wrapper with label and validation

## Sub-components
- **Input**: Standard text input
- **Textarea**: Multi-line text input
- **InputWithIcon**: Input with icon slots
- **FormField**: Label, hint, and error wrapper
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the input',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ========== INPUT STATES ==========

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Focused: Story = {
  args: {
    placeholder: 'Click to see focus state',
    autoFocus: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithValue: Story = {
  args: {
    defaultValue: 'John Doe',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Invalid input',
    error: true,
    defaultValue: 'invalid@',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Disabled content',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// ========== SIZE VARIANTS ==========

export const SmallSize: Story = {
  args: {
    placeholder: 'Small input',
    inputSize: 'small',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LargeSize: Story = {
  args: {
    placeholder: 'Large input',
    inputSize: 'large',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// ========== INPUT TYPES ==========

export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'name@example.com',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// ========== TEXTAREA ==========

export const TextareaDefault: StoryObj<typeof Textarea> = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Textarea placeholder="Enter your message..." />
    </div>
  ),
};

export const TextareaWithValue: StoryObj<typeof Textarea> = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Textarea
        defaultValue="This is a longer text that spans multiple lines. The textarea component is designed for multi-line text input with proper styling that matches the Digital Journal theme."
      />
    </div>
  ),
};

export const TextareaError: StoryObj<typeof Textarea> = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Textarea
        error
        placeholder="This field has an error"
      />
    </div>
  ),
};

export const TextareaDisabled: StoryObj<typeof Textarea> = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Textarea
        disabled
        defaultValue="This textarea is disabled"
      />
    </div>
  ),
};

export const TextareaNoResize: StoryObj<typeof Textarea> = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Textarea
        resize={false}
        placeholder="This textarea cannot be resized"
      />
    </div>
  ),
};

// ========== INPUT WITH ICON ==========

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const WithIconLeft: StoryObj<typeof InputWithIcon> = {
  render: () => (
    <div style={{ width: '320px' }}>
      <InputWithIcon
        iconLeft={<SearchIcon />}
        placeholder="Search..."
      />
    </div>
  ),
};

export const WithIconRight: StoryObj<typeof InputWithIcon> = {
  render: () => (
    <div style={{ width: '320px' }}>
      <InputWithIcon
        iconRight={<EyeIcon />}
        type="password"
        placeholder="Enter password"
      />
    </div>
  ),
};

export const WithIconBoth: StoryObj<typeof InputWithIcon> = {
  render: () => (
    <div style={{ width: '320px' }}>
      <InputWithIcon
        iconLeft={<MailIcon />}
        iconRight={<SearchIcon />}
        placeholder="Search emails..."
      />
    </div>
  ),
};

// ========== FORM FIELD ==========

export const FormFieldExample: StoryObj<typeof FormField> = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField label="Email Address" required hint="We'll never share your email">
        <Input type="email" placeholder="name@example.com" />
      </FormField>
    </div>
  ),
};

export const FormFieldWithError: StoryObj<typeof FormField> = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField label="Email Address" required error="Please enter a valid email address">
        <Input type="email" error defaultValue="invalid@" />
      </FormField>
    </div>
  ),
};

export const FormFieldTextarea: StoryObj<typeof FormField> = {
  render: () => (
    <div style={{ width: '400px' }}>
      <FormField label="Message" hint="Max 500 characters">
        <Textarea placeholder="Type your message here..." />
      </FormField>
    </div>
  ),
};

// ========== SHOWCASE ==========

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <Input placeholder="Enter text..." />
      </div>
      <div>
        <p className="fn-story-label">FOCUSED (click to see)</p>
        <Input placeholder="Click me" />
      </div>
      <div>
        <p className="fn-story-label">ERROR</p>
        <Input error defaultValue="Invalid value" />
      </div>
      <div>
        <p className="fn-story-label">DISABLED</p>
        <Input disabled defaultValue="Cannot edit" />
      </div>
      <div>
        <p className="fn-story-label">WITH ICON</p>
        <InputWithIcon iconLeft={<SearchIcon />} placeholder="Search..." />
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
      <div>
        <p className="fn-story-label">SMALL</p>
        <Input inputSize="small" placeholder="Small input" />
      </div>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <Input placeholder="Default input" />
      </div>
      <div>
        <p className="fn-story-label">LARGE</p>
        <Input inputSize="large" placeholder="Large input" />
      </div>
    </div>
  ),
  decorators: [
    (Story) => (
      <>
        <style>{`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px', padding: '24px', backgroundColor: '#FAF9F6', borderRadius: '8px' }}>
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', margin: 0, color: '#1C1C1E' }}>Contact Form</h3>

      <FormField label="Full Name" required>
        <Input placeholder="John Doe" />
      </FormField>

      <FormField label="Email" required hint="We'll respond within 24 hours">
        <InputWithIcon iconLeft={<MailIcon />} type="email" placeholder="john@example.com" />
      </FormField>

      <FormField label="Subject">
        <Input placeholder="How can we help?" />
      </FormField>

      <FormField label="Message" required>
        <Textarea placeholder="Tell us more about your inquiry..." />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete contact form using the Input components.',
      },
    },
  },
};
