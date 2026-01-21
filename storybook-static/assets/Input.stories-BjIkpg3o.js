import{j as e}from"./iframe-B_omF_R9.js";import{I as a,T as s,a as o,F as t}from"./Input-CA3R2Fs4.js";/* empty css              */import"./preload-helper-Ct5FWWRu.js";const k={title:"FAION/Core UI/Input",component:a,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{inputSize:{control:"select",options:["small","default","large"],description:"Size of the input"},error:{control:"boolean",description:"Error state"},disabled:{control:"boolean",description:"Disabled state"},placeholder:{control:"text",description:"Placeholder text"}}},l={args:{placeholder:"Enter your text..."},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},i={args:{placeholder:"Click to see focus state",autoFocus:!0},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},d={args:{defaultValue:"John Doe"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},n={args:{placeholder:"Invalid input",error:!0,defaultValue:"invalid@"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},c={args:{placeholder:"Cannot edit",disabled:!0,defaultValue:"Disabled content"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},p={args:{placeholder:"Small input",inputSize:"small"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},h={args:{placeholder:"Large input",inputSize:"large"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},m={args:{type:"email",placeholder:"name@example.com"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},u={args:{type:"password",placeholder:"Enter password"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},x={args:{type:"number",placeholder:"0",min:0,max:100},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},y={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{placeholder:"Enter your message..."})})},g={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{defaultValue:"This is a longer text that spans multiple lines. The textarea component is designed for multi-line text input with proper styling that matches the Digital Journal theme."})})},f={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{error:!0,placeholder:"This field has an error"})})},v={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{disabled:!0,defaultValue:"This textarea is disabled"})})},j={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{resize:!1,placeholder:"This textarea cannot be resized"})})},L=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.3-4.3"})]}),z=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),W=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),S={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{iconLeft:e.jsx(L,{}),placeholder:"Search..."})})},w={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{iconRight:e.jsx(W,{}),type:"password",placeholder:"Enter password"})})},b={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{iconLeft:e.jsx(z,{}),iconRight:e.jsx(L,{}),placeholder:"Search emails..."})})},F={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{label:"Email Address",required:!0,hint:"We'll never share your email",children:e.jsx(a,{type:"email",placeholder:"name@example.com"})})})},I={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{label:"Email Address",required:!0,error:"Please enter a valid email address",children:e.jsx(a,{type:"email",error:!0,defaultValue:"invalid@"})})})},E={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{label:"Message",hint:"Max 500 characters",children:e.jsx(s,{placeholder:"Type your message here..."})})})},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"320px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DEFAULT"}),e.jsx(a,{placeholder:"Enter text..."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"FOCUSED (click to see)"}),e.jsx(a,{placeholder:"Click me"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"ERROR"}),e.jsx(a,{error:!0,defaultValue:"Invalid value"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DISABLED"}),e.jsx(a,{disabled:!0,defaultValue:"Cannot edit"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"WITH ICON"}),e.jsx(o,{iconLeft:e.jsx(L,{}),placeholder:"Search..."})]})]}),decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(r,{})]})]},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"320px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"SMALL"}),e.jsx(a,{inputSize:"small",placeholder:"Small input"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DEFAULT"}),e.jsx(a,{placeholder:"Default input"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"LARGE"}),e.jsx(a,{inputSize:"large",placeholder:"Large input"})]})]}),decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(r,{})]})]},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px",padding:"24px",backgroundColor:"#FAF9F6",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"24px",margin:0,color:"#1C1C1E"},children:"Contact Form"}),e.jsx(t,{label:"Full Name",required:!0,children:e.jsx(a,{placeholder:"John Doe"})}),e.jsx(t,{label:"Email",required:!0,hint:"We'll respond within 24 hours",children:e.jsx(o,{iconLeft:e.jsx(z,{}),type:"email",placeholder:"john@example.com"})}),e.jsx(t,{label:"Subject",children:e.jsx(a,{placeholder:"How can we help?"})}),e.jsx(t,{label:"Message",required:!0,children:e.jsx(s,{placeholder:"Tell us more about your inquiry..."})})]}),parameters:{docs:{description:{story:"Example of a complete contact form using the Input components."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text...'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Click to see focus state',
    autoFocus: true
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'John Doe'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Invalid input',
    error: true,
    defaultValue: 'invalid@'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Disabled content'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Small input',
    inputSize: 'small'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Large input',
    inputSize: 'large'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'name@example.com'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <Textarea placeholder="Enter your message..." />
    </div>
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <Textarea defaultValue="This is a longer text that spans multiple lines. The textarea component is designed for multi-line text input with proper styling that matches the Digital Journal theme." />
    </div>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <Textarea error placeholder="This field has an error" />
    </div>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <Textarea disabled defaultValue="This textarea is disabled" />
    </div>
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <Textarea resize={false} placeholder="This textarea cannot be resized" />
    </div>
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <InputWithIcon iconLeft={<SearchIcon />} placeholder="Search..." />
    </div>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <InputWithIcon iconRight={<EyeIcon />} type="password" placeholder="Enter password" />
    </div>
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <InputWithIcon iconLeft={<MailIcon />} iconRight={<SearchIcon />} placeholder="Search emails..." />
    </div>
}`,...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Email Address" required hint="We'll never share your email">
        <Input type="email" placeholder="name@example.com" />
      </FormField>
    </div>
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Email Address" required error="Please enter a valid email address">
        <Input type="email" error defaultValue="invalid@" />
      </FormField>
    </div>
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <FormField label="Message" hint="Max 500 characters">
        <Textarea placeholder="Type your message here..." />
      </FormField>
    </div>
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '320px'
  }}>
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
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '320px'
  }}>
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
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px',
    padding: '24px',
    backgroundColor: '#FAF9F6',
    borderRadius: '8px'
  }}>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      margin: 0,
      color: '#1C1C1E'
    }}>Contact Form</h3>

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
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete contact form using the Input components.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};const M=["Default","Focused","WithValue","ErrorState","Disabled","SmallSize","LargeSize","EmailInput","PasswordInput","NumberInput","TextareaDefault","TextareaWithValue","TextareaError","TextareaDisabled","TextareaNoResize","WithIconLeft","WithIconRight","WithIconBoth","FormFieldExample","FormFieldWithError","FormFieldTextarea","AllStates","AllSizes","FormExample"];export{D as AllSizes,T as AllStates,l as Default,c as Disabled,m as EmailInput,n as ErrorState,i as Focused,A as FormExample,F as FormFieldExample,E as FormFieldTextarea,I as FormFieldWithError,h as LargeSize,x as NumberInput,u as PasswordInput,p as SmallSize,y as TextareaDefault,v as TextareaDisabled,f as TextareaError,j as TextareaNoResize,g as TextareaWithValue,b as WithIconBoth,S as WithIconLeft,w as WithIconRight,d as WithValue,M as __namedExportsOrder,k as default};
