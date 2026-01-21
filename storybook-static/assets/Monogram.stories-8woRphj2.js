import{j as e}from"./iframe-B_omF_R9.js";import{M as a}from"./Monogram-Ct6H_8uF.js";/* empty css                 */import"./preload-helper-Ct5FWWRu.js";const u={title:"FAION/Layout/Monogram",component:a,parameters:{layout:"centered",docs:{description:{component:`
FN Monogram - "The Publisher's Seal"

A sophisticated brand mark following the Faion "Digital Journal" aesthetic.

## Features
- Three size variants (small, medium, large)
- Optional "Faion Network" label with divider
- Clickable variant with hover states
- Deep Burgundy background with serif typography

## Usage
- **Header**: Medium size, clickable, navigates to home
- **Footer**: Medium size with optional label
- **Marketing**: Large size with label for brand presence
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Size variant"},showLabel:{control:"boolean",description:'Show "Faion Network" label'},onClick:{action:"clicked",description:"Click handler (renders as button when provided)"}}},s={args:{size:"medium",showLabel:!1}},r={args:{size:"small",showLabel:!1}},o={args:{size:"large",showLabel:!1}},i={name:"With Label",args:{size:"medium",showLabel:!0}},l={name:"Large With Label",args:{size:"large",showLabel:!0}},d={args:{size:"medium",showLabel:!1,onClick:()=>console.log("Monogram clicked")},parameters:{docs:{description:{story:"When onClick is provided, the monogram renders as a button with hover states."}}}},m={name:"All Sizes",render:()=>e.jsxs("div",{className:"fn-size-demo",children:[e.jsxs("div",{className:"fn-size-demo__item",children:[e.jsx(a,{size:"small"}),e.jsx("p",{className:"fn-size-demo__label",children:"Small (32px)"})]}),e.jsxs("div",{className:"fn-size-demo__item",children:[e.jsx(a,{size:"medium"}),e.jsx("p",{className:"fn-size-demo__label",children:"Medium (40px)"})]}),e.jsxs("div",{className:"fn-size-demo__item",children:[e.jsx(a,{size:"large"}),e.jsx("p",{className:"fn-size-demo__label",children:"Large (56px)"})]})]}),decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-size-demo {
            display: flex;
            align-items: flex-end;
            gap: 48px;
          }
          .fn-size-demo__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .fn-size-demo__label {
            font-family: Inter, sans-serif;
            font-size: 12px;
            color: #4A4A4A;
          }
        `}),e.jsx(n,{})]})]},t={name:"Branding Variations",render:()=>e.jsxs("div",{className:"fn-brand-demo",children:[e.jsxs("div",{className:"fn-brand-demo__row",children:[e.jsx("p",{className:"fn-brand-demo__label",children:"Icon only (header/nav)"}),e.jsx(a,{size:"medium"})]}),e.jsxs("div",{className:"fn-brand-demo__row",children:[e.jsx("p",{className:"fn-brand-demo__label",children:"With label (footer/marketing)"}),e.jsx(a,{size:"medium",showLabel:!0})]}),e.jsxs("div",{className:"fn-brand-demo__row",children:[e.jsx("p",{className:"fn-brand-demo__label",children:"Large with label (hero sections)"}),e.jsx(a,{size:"large",showLabel:!0})]})]}),decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-brand-demo {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .fn-brand-demo__row {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .fn-brand-demo__label {
            font-family: Inter, sans-serif;
            font-size: 12px;
            color: #4A4A4A;
          }
        `}),e.jsx(n,{})]})]},c={name:"On Dark Background",render:()=>e.jsx("div",{className:"fn-dark-demo",children:e.jsx(a,{size:"medium",showLabel:!0})}),decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-dark-demo {
            background-color: #1C1C1E;
            padding: 48px;
            border-radius: 8px;
          }
          .fn-dark-demo .fn-monogram__label {
            color: #E5E5E0;
          }
          .fn-dark-demo .fn-monogram__divider {
            background-color: #4A4A4A;
          }
        `}),e.jsx(n,{})]})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    showLabel: false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    showLabel: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    showLabel: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    size: 'medium',
    showLabel: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Large With Label',
  args: {
    size: 'large',
    showLabel: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    showLabel: false,
    onClick: () => console.log('Monogram clicked')
  },
  parameters: {
    docs: {
      description: {
        story: 'When onClick is provided, the monogram renders as a button with hover states.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="fn-size-demo">
      <div className="fn-size-demo__item">
        <Monogram size="small" />
        <p className="fn-size-demo__label">Small (32px)</p>
      </div>
      <div className="fn-size-demo__item">
        <Monogram size="medium" />
        <p className="fn-size-demo__label">Medium (40px)</p>
      </div>
      <div className="fn-size-demo__item">
        <Monogram size="large" />
        <p className="fn-size-demo__label">Large (56px)</p>
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-size-demo {
            display: flex;
            align-items: flex-end;
            gap: 48px;
          }
          .fn-size-demo__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .fn-size-demo__label {
            font-family: Inter, sans-serif;
            font-size: 12px;
            color: #4A4A4A;
          }
        \`}</style>
        <Story />
      </>]
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Branding Variations',
  render: () => <div className="fn-brand-demo">
      <div className="fn-brand-demo__row">
        <p className="fn-brand-demo__label">Icon only (header/nav)</p>
        <Monogram size="medium" />
      </div>
      <div className="fn-brand-demo__row">
        <p className="fn-brand-demo__label">With label (footer/marketing)</p>
        <Monogram size="medium" showLabel />
      </div>
      <div className="fn-brand-demo__row">
        <p className="fn-brand-demo__label">Large with label (hero sections)</p>
        <Monogram size="large" showLabel />
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-brand-demo {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .fn-brand-demo__row {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .fn-brand-demo__label {
            font-family: Inter, sans-serif;
            font-size: 12px;
            color: #4A4A4A;
          }
        \`}</style>
        <Story />
      </>]
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'On Dark Background',
  render: () => <div className="fn-dark-demo">
      <Monogram size="medium" showLabel />
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-dark-demo {
            background-color: #1C1C1E;
            padding: 48px;
            border-radius: 8px;
          }
          .fn-dark-demo .fn-monogram__label {
            color: #E5E5E0;
          }
          .fn-dark-demo .fn-monogram__divider {
            background-color: #4A4A4A;
          }
        \`}</style>
        <Story />
      </>]
}`,...c.parameters?.docs?.source}}};const h=["Default","Small","Large","WithLabel","LargeWithLabel","Clickable","AllSizes","BrandingVariations","OnDarkBackground"];export{m as AllSizes,t as BrandingVariations,d as Clickable,s as Default,o as Large,l as LargeWithLabel,c as OnDarkBackground,r as Small,i as WithLabel,h as __namedExportsOrder,u as default};
