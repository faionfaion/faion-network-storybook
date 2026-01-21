import{j as e}from"./iframe-B_omF_R9.js";import{B as r}from"./Button-qKon32FP.js";/* empty css               */import"./preload-helper-Ct5FWWRu.js";const D={title:"FAION/Core UI/Button",component:r,parameters:{layout:"centered",docs:{description:{component:`
Button component following the Faion "Digital Journal" aesthetic.

## Variants
- **Primary**: Deep Burgundy (#5D1F2D) - Main CTAs
- **Secondary**: Charcoal outlined - Secondary actions
- **Outline**: Taupe border - Subtle actions
- **Ghost**: No border - Tertiary actions
- **Link**: Text only - Inline links
- **Destructive**: Red - Danger actions

## Accessibility
- WCAG AA compliant contrast ratios
- Visible focus rings for keyboard navigation
- Disabled states clearly indicated
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","link","destructive"],description:"Visual style variant"},size:{control:"select",options:["small","medium","large","icon"],description:"Button size"},fullWidth:{control:"boolean",description:"Make button full width"},disabled:{control:"boolean",description:"Disable button interactions"}}},t={args:{variant:"primary",children:"Primary Button"}},a={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"outline",children:"Outline Button"}},s={args:{variant:"ghost",children:"Ghost Button"}},i={args:{variant:"link",children:"Link Button"}},o={args:{variant:"destructive",children:"Delete"}},l={args:{variant:"primary",size:"small",children:"Small Button"}},c={args:{variant:"primary",size:"medium",children:"Medium Button"}},d={args:{variant:"primary",size:"large",children:"Large Button"}},u={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},p={args:{variant:"primary",fullWidth:!0,children:"Full Width Button"},decorators:[B=>e.jsx("div",{style:{width:"400px"},children:e.jsx(B,{})})]},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"PRIMARY"}),e.jsx(r,{variant:"primary",children:"Primary Button"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"SECONDARY"}),e.jsx(r,{variant:"secondary",children:"Secondary Button"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"OUTLINE"}),e.jsx(r,{variant:"outline",children:"Outline Button"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"GHOST"}),e.jsx(r,{variant:"ghost",children:"Ghost Button"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"LINK"}),e.jsx(r,{variant:"link",children:"Link Button"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DESTRUCTIVE"}),e.jsx(r,{variant:"destructive",children:"Destructive Button"})]})]}),decorators:[B=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(B,{})]})]},y={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(r,{variant:"primary",size:"small",children:"Small"}),e.jsx(r,{variant:"primary",size:"medium",children:"Medium"}),e.jsx(r,{variant:"primary",size:"large",children:"Large"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"primary",children:"Default"}),e.jsx(r,{variant:"primary",disabled:!0,children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"secondary",children:"Default"}),e.jsx(r,{variant:"secondary",disabled:!0,children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"outline",children:"Default"}),e.jsx(r,{variant:"outline",disabled:!0,children:"Disabled"})]})]})},g={name:"CTA Button Pair",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(r,{variant:"primary",children:"Get Started"}),e.jsx(r,{variant:"secondary",children:"Learn More"})]}),parameters:{docs:{description:{story:"Common pattern for primary and secondary action buttons together."}}}},x={name:"Form Action Buttons",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"flex-end",width:"400px"},children:[e.jsx(r,{variant:"ghost",children:"Cancel"}),e.jsx(r,{variant:"primary",children:"Save Changes"})]}),parameters:{docs:{description:{story:"Common pattern for form submission with cancel option."}}}},h={name:"Danger Zone Actions",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{variant:"destructive",children:"Delete Account"})]}),parameters:{docs:{description:{story:"Pattern for destructive actions that require confirmation."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Delete'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Medium Button'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
      <div>
        <p className="fn-story-label">PRIMARY</p>
        <Button variant="primary">Primary Button</Button>
      </div>
      <div>
        <p className="fn-story-label">SECONDARY</p>
        <Button variant="secondary">Secondary Button</Button>
      </div>
      <div>
        <p className="fn-story-label">OUTLINE</p>
        <Button variant="outline">Outline Button</Button>
      </div>
      <div>
        <p className="fn-story-label">GHOST</p>
        <Button variant="ghost">Ghost Button</Button>
      </div>
      <div>
        <p className="fn-story-label">LINK</p>
        <Button variant="link">Link Button</Button>
      </div>
      <div>
        <p className="fn-story-label">DESTRUCTIVE</p>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        \`}</style>
        <Story />
      </>]
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </div>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Button variant="outline">Default</Button>
        <Button variant="outline" disabled>Disabled</Button>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'CTA Button Pair',
  render: () => <div style={{
    display: 'flex',
    gap: '12px'
  }}>
      <Button variant="primary">Get Started</Button>
      <Button variant="secondary">Learn More</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for primary and secondary action buttons together.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Form Action Buttons',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
    width: '400px'
  }}>
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Save Changes</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for form submission with cancel option.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Danger Zone Actions',
  render: () => <div style={{
    display: 'flex',
    gap: '12px'
  }}>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete Account</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pattern for destructive actions that require confirmation.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const A=["Primary","Secondary","Outline","Ghost","Link","Destructive","Small","Medium","Large","Disabled","FullWidth","AllVariants","AllSizes","AllStates","ButtonPair","FormButtons","DangerZone"];export{y as AllSizes,v as AllStates,m as AllVariants,g as ButtonPair,h as DangerZone,o as Destructive,u as Disabled,x as FormButtons,p as FullWidth,s as Ghost,d as Large,i as Link,c as Medium,n as Outline,t as Primary,a as Secondary,l as Small,A as __namedExportsOrder,D as default};
