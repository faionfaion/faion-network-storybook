import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import '../components/ui/Select.css';

const meta: Meta<typeof Select> = {
  title: 'FAION/Core UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Select dropdown component following the Faion "Digital Journal" aesthetic.

## Features
- Trigger matches Input styling
- White dropdown with Taupe Grey border
- Burgundy highlight for selected option
- Smooth open/close animation
- Support for groups and separators
- Error state styling

## Sub-components
- **Select**: Root wrapper
- **SelectTrigger**: Clickable trigger button
- **SelectValue**: Displays selected value
- **SelectContent**: Dropdown container
- **SelectItem**: Individual option
- **SelectGroup**: Group of options
- **SelectLabel**: Group header
- **SelectSeparator**: Divider line
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// ========== BASIC EXAMPLES ==========

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: '280px' }}>
      <Select>
        <SelectTrigger className="fn-select-trigger">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectItem className="fn-select-item" value="option1">Option 1</SelectItem>
          <SelectItem className="fn-select-item" value="option2">Option 2</SelectItem>
          <SelectItem className="fn-select-item" value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithDefaultValue: StoryObj = {
  render: () => (
    <div style={{ width: '280px' }}>
      <Select defaultValue="option2">
        <SelectTrigger className="fn-select-trigger">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectItem className="fn-select-item" value="option1">Option 1</SelectItem>
          <SelectItem className="fn-select-item" value="option2">Option 2</SelectItem>
          <SelectItem className="fn-select-item" value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <div style={{ width: '280px' }}>
      <Select disabled>
        <SelectTrigger className="fn-select-trigger">
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectItem className="fn-select-item" value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// ========== WITH GROUPS ==========

export const WithGroups: StoryObj = {
  render: () => (
    <div style={{ width: '280px' }}>
      <Select>
        <SelectTrigger className="fn-select-trigger">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectGroup>
            <SelectLabel className="fn-select-label">Fruits</SelectLabel>
            <SelectItem className="fn-select-item" value="apple">Apple</SelectItem>
            <SelectItem className="fn-select-item" value="banana">Banana</SelectItem>
            <SelectItem className="fn-select-item" value="orange">Orange</SelectItem>
          </SelectGroup>
          <SelectSeparator className="fn-select-separator" />
          <SelectGroup>
            <SelectLabel className="fn-select-label">Vegetables</SelectLabel>
            <SelectItem className="fn-select-item" value="carrot">Carrot</SelectItem>
            <SelectItem className="fn-select-item" value="potato">Potato</SelectItem>
            <SelectItem className="fn-select-item" value="tomato">Tomato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

// ========== WITH FORM FIELD ==========

export const WithFormField: StoryObj = {
  render: () => (
    <div className="fn-select-field" style={{ width: '280px' }}>
      <label className="fn-select-field__label fn-select-field__label--required">Country</label>
      <Select>
        <SelectTrigger className="fn-select-trigger">
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectItem className="fn-select-item" value="us">United States</SelectItem>
          <SelectItem className="fn-select-item" value="uk">United Kingdom</SelectItem>
          <SelectItem className="fn-select-item" value="ca">Canada</SelectItem>
          <SelectItem className="fn-select-item" value="au">Australia</SelectItem>
          <SelectItem className="fn-select-item" value="de">Germany</SelectItem>
          <SelectItem className="fn-select-item" value="fr">France</SelectItem>
        </SelectContent>
      </Select>
      <span className="fn-select-field__hint">We'll use this for shipping calculations</span>
    </div>
  ),
};

export const WithError: StoryObj = {
  render: () => (
    <div className="fn-select-field" style={{ width: '280px' }}>
      <label className="fn-select-field__label fn-select-field__label--required">Plan</label>
      <Select>
        <SelectTrigger className="fn-select-trigger fn-select-trigger--error">
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectItem className="fn-select-item" value="free">Free</SelectItem>
          <SelectItem className="fn-select-item" value="plus">Plus - $19/mo</SelectItem>
          <SelectItem className="fn-select-item" value="pro">Pro - $35/mo</SelectItem>
        </SelectContent>
      </Select>
      <span className="fn-select-field__error">Please select a plan to continue</span>
    </div>
  ),
};

// ========== PRACTICAL EXAMPLES ==========

export const PricingTierSelect: StoryObj = {
  name: 'Pricing Tier Select',
  render: () => {
    const [tier, setTier] = useState('plus');
    return (
      <div className="fn-select-field" style={{ width: '300px' }}>
        <label className="fn-select-field__label">Subscription Plan</label>
        <Select value={tier} onValueChange={setTier}>
          <SelectTrigger className="fn-select-trigger">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="fn-select-content">
            <SelectItem className="fn-select-item" value="free">Free - $0/month</SelectItem>
            <SelectItem className="fn-select-item" value="plus">Plus - $19/month</SelectItem>
            <SelectItem className="fn-select-item" value="pro">Pro - $35/month</SelectItem>
            <SelectItem className="fn-select-item" value="team">Team - $35/seat/month</SelectItem>
          </SelectContent>
        </Select>
        <span className="fn-select-field__hint">
          {tier === 'free' && 'Basic features, non-commercial use only'}
          {tier === 'plus' && 'Full methodology access for solopreneurs'}
          {tier === 'pro' && 'Commercial use, SSO support'}
          {tier === 'team' && 'Organization features, multiple seats'}
        </span>
      </div>
    );
  },
};

export const LanguageSelect: StoryObj = {
  name: 'Language Select',
  render: () => (
    <div style={{ width: '200px' }}>
      <Select defaultValue="en">
        <SelectTrigger className="fn-select-trigger">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectItem className="fn-select-item" value="en">English</SelectItem>
          <SelectItem className="fn-select-item" value="uk">Ukrainian</SelectItem>
          <SelectItem className="fn-select-item" value="es">Spanish</SelectItem>
          <SelectItem className="fn-select-item" value="pt">Portuguese</SelectItem>
          <SelectItem className="fn-select-item" value="de">German</SelectItem>
          <SelectItem className="fn-select-item" value="fr">French</SelectItem>
          <SelectItem className="fn-select-item" value="pl">Polish</SelectItem>
          <SelectItem className="fn-select-item" value="hi">Hindi</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const CategoryFilter: StoryObj = {
  name: 'Category Filter',
  render: () => (
    <div style={{ width: '240px' }}>
      <Select>
        <SelectTrigger className="fn-select-trigger fn-select-trigger--small">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent className="fn-select-content">
          <SelectItem className="fn-select-item" value="all">All Categories</SelectItem>
          <SelectSeparator className="fn-select-separator" />
          <SelectGroup>
            <SelectLabel className="fn-select-label">Business</SelectLabel>
            <SelectItem className="fn-select-item" value="research">Research</SelectItem>
            <SelectItem className="fn-select-item" value="product">Product</SelectItem>
            <SelectItem className="fn-select-item" value="marketing">Marketing</SelectItem>
          </SelectGroup>
          <SelectSeparator className="fn-select-separator" />
          <SelectGroup>
            <SelectLabel className="fn-select-label">Technical</SelectLabel>
            <SelectItem className="fn-select-item" value="development">Development</SelectItem>
            <SelectItem className="fn-select-item" value="devops">DevOps</SelectItem>
            <SelectItem className="fn-select-item" value="ai">AI/ML</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

// ========== SHOWCASE ==========

export const AllStates: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '280px' }}>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <Select>
          <SelectTrigger className="fn-select-trigger">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="fn-select-content">
            <SelectItem className="fn-select-item" value="1">Option 1</SelectItem>
            <SelectItem className="fn-select-item" value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="fn-story-label">WITH VALUE</p>
        <Select defaultValue="selected">
          <SelectTrigger className="fn-select-trigger">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="fn-select-content">
            <SelectItem className="fn-select-item" value="selected">Selected Option</SelectItem>
            <SelectItem className="fn-select-item" value="other">Other Option</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="fn-story-label">DISABLED</p>
        <Select disabled defaultValue="disabled">
          <SelectTrigger className="fn-select-trigger">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="fn-select-content">
            <SelectItem className="fn-select-item" value="disabled">Disabled</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="fn-story-label">ERROR</p>
        <Select>
          <SelectTrigger className="fn-select-trigger fn-select-trigger--error">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent className="fn-select-content">
            <SelectItem className="fn-select-item" value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
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
