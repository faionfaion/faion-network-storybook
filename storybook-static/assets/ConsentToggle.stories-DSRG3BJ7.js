import{j as n,r as c}from"./iframe-B_omF_R9.js";import{C as s}from"./ConsentToggle-CzkSncsM.js";import"./preload-helper-Ct5FWWRu.js";const C={title:"Legal/ConsentToggle",component:s,parameters:{layout:"padded",docs:{description:{component:"Toggle switch for cookie consent preferences."}}},tags:["autodocs"]},o={args:{label:"Analytics Cookies",description:"Help us improve the site by collecting anonymous usage data.",checked:!1,onChange:e=>console.log("Changed:",e)},decorators:[e=>n.jsx("div",{style:{maxWidth:"500px"},children:n.jsx(e,{})})]},t={args:{label:"Functional Cookies",description:"Remember your preferences and language settings.",checked:!0,onChange:e=>console.log("Changed:",e)},decorators:[e=>n.jsx("div",{style:{maxWidth:"500px"},children:n.jsx(e,{})})]},a={args:{label:"Essential Cookies",description:"Required for basic site functionality. Cannot be disabled.",checked:!0,onChange:e=>console.log("Changed:",e),disabled:!0},decorators:[e=>n.jsx("div",{style:{maxWidth:"500px"},children:n.jsx(e,{})})]},r={render:function(){const[i,l]=c.useState(!1),[d,g]=c.useState(!1),[u,p]=c.useState(!0);return n.jsxs("div",{style:{maxWidth:"500px"},children:[n.jsx(s,{label:"Essential Cookies",description:"Required for basic site functionality. Cannot be disabled.",checked:!0,onChange:()=>{},disabled:!0}),n.jsx(s,{label:"Functional Cookies",description:"Remember your preferences and language settings.",checked:i,onChange:l}),n.jsx(s,{label:"Analytics Cookies",description:"Help us improve the site by collecting anonymous usage data.",checked:d,onChange:g}),n.jsx(s,{label:"Payment Cookies",description:"Enable secure payment processing through Stripe.",checked:u,onChange:p})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Analytics Cookies',
    description: 'Help us improve the site by collecting anonymous usage data.',
    checked: false,
    onChange: checked => console.log('Changed:', checked)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Functional Cookies',
    description: 'Remember your preferences and language settings.',
    checked: true,
    onChange: checked => console.log('Changed:', checked)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Essential Cookies',
    description: 'Required for basic site functionality. Cannot be disabled.',
    checked: true,
    onChange: checked => console.log('Changed:', checked),
    disabled: true
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function AllTogglesStory() {
    const [functional, setFunctional] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [payment, setPayment] = useState(true);
    return <div style={{
      maxWidth: '500px'
    }}>
        <ConsentToggle label="Essential Cookies" description="Required for basic site functionality. Cannot be disabled." checked={true} onChange={() => {}} disabled />
        <ConsentToggle label="Functional Cookies" description="Remember your preferences and language settings." checked={functional} onChange={setFunctional} />
        <ConsentToggle label="Analytics Cookies" description="Help us improve the site by collecting anonymous usage data." checked={analytics} onChange={setAnalytics} />
        <ConsentToggle label="Payment Cookies" description="Enable secure payment processing through Stripe." checked={payment} onChange={setPayment} />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const b=["Default","Checked","Disabled","AllToggles"];export{r as AllToggles,t as Checked,o as Default,a as Disabled,b as __namedExportsOrder,C as default};
