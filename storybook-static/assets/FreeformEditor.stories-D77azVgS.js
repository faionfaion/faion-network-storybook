import{j as r,r as d}from"./iframe-B_omF_R9.js";import{F as i}from"./FreeformEditor-DTVkBV3G.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                       */const g={title:"TestimonialForm/FreeformEditor",component:i,parameters:{layout:"padded",docs:{description:{component:"Text area for free-form testimonial writing with character limits."}}},tags:["autodocs"]},o={args:{value:"",onChange:e=>console.log("Value:",e)},decorators:[e=>r.jsx("div",{style:{maxWidth:"600px"},children:r.jsx(e,{})})]},a={args:{value:"Faion Network has been a game-changer for my solopreneur journey. The SDD methodology helped me ship my first product in half the time I expected.",onChange:e=>console.log("Value:",e)},decorators:[e=>r.jsx("div",{style:{maxWidth:"600px"},children:r.jsx(e,{})})]},t={args:{value:"Great product!",onChange:e=>console.log("Value:",e),minLength:50},decorators:[e=>r.jsx("div",{style:{maxWidth:"600px"},children:r.jsx(e,{})})]},n={args:{value:"A".repeat(1e3),onChange:e=>console.log("Value:",e),maxLength:1e3},decorators:[e=>r.jsx("div",{style:{maxWidth:"600px"},children:r.jsx(e,{})})]},s={render:function(){const[l,c]=d.useState("");return r.jsx("div",{style:{maxWidth:"600px"},children:r.jsx(i,{value:l,onChange:c,minLength:50,maxLength:500})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    onChange: value => console.log('Value:', value)
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Faion Network has been a game-changer for my solopreneur journey. The SDD methodology helped me ship my first product in half the time I expected.',
    onChange: value => console.log('Value:', value)
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Great product!',
    onChange: value => console.log('Value:', value),
    minLength: 50
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'A'.repeat(1000),
    onChange: value => console.log('Value:', value),
    maxLength: 1000
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function InteractiveFreeformEditor() {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: '600px'
    }}>
        <FreeformEditor value={value} onChange={setValue} minLength={50} maxLength={500} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","WithContent","TooShort","AtMaxLength","Interactive"];export{n as AtMaxLength,o as Default,s as Interactive,t as TooShort,a as WithContent,x as __namedExportsOrder,g as default};
