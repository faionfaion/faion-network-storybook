import{j as n,r as p}from"./iframe-B_omF_R9.js";/* empty css                      */import"./preload-helper-Ct5FWWRu.js";function g({isAnnual:e,onChange:s,monthlyLabel:c="Monthly",annualLabel:d="Annual",discountBadge:u="Save 20%"}){return n.jsxs("div",{className:"fn-pricing-toggle",children:[n.jsx("button",{className:`fn-pricing-toggle__option ${e?"":"fn-pricing-toggle__option--active"}`,onClick:()=>s(!1),type:"button",children:c}),n.jsxs("button",{className:`fn-pricing-toggle__option ${e?"fn-pricing-toggle__option--active":""}`,onClick:()=>s(!0),type:"button",children:[d,u&&n.jsx("span",{className:"fn-pricing-toggle__badge",children:u})]})]})}g.__docgenInfo={description:`PricingToggle - Monthly/Annual billing toggle

Allows users to switch between billing periods.`,methods:[],displayName:"PricingToggle",props:{isAnnual:{required:!0,tsType:{name:"boolean"},description:"Is annual billing selected"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isAnnual: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isAnnual"}],return:{name:"void"}}},description:"Toggle change handler"},monthlyLabel:{required:!1,tsType:{name:"string"},description:"Monthly label",defaultValue:{value:"'Monthly'",computed:!1}},annualLabel:{required:!1,tsType:{name:"string"},description:"Annual label",defaultValue:{value:"'Annual'",computed:!1}},discountBadge:{required:!1,tsType:{name:"string"},description:"Discount badge text",defaultValue:{value:"'Save 20%'",computed:!1}}}};const y={title:"FAION/Pricing/PricingToggle",component:g,parameters:{layout:"centered",docs:{description:{component:`
Monthly/Annual billing toggle.

## Features
- Two-option toggle (Monthly/Annual)
- Discount badge on annual option
- Controlled component pattern
- Responsive layout
        `}}},tags:["autodocs"],argTypes:{isAnnual:{control:"boolean"},discountBadge:{control:"text"},onChange:{action:"toggle-change"}}},a=e=>{const[s,c]=p.useState(e.isAnnual||!1);return n.jsx(g,{...e,isAnnual:s,onChange:c})},t={args:{isAnnual:!1,discountBadge:"Save 20%"},render:e=>n.jsx(a,{...e})},r={name:"Annual Selected",args:{isAnnual:!0,discountBadge:"Save 20%"},render:e=>n.jsx(a,{...e})},o={name:"Custom Labels",args:{isAnnual:!1,monthlyLabel:"Pay Monthly",annualLabel:"Pay Yearly",discountBadge:"2 Months Free"},render:e=>n.jsx(a,{...e})},l={name:"Without Badge",args:{isAnnual:!1,discountBadge:""},render:e=>n.jsx(a,{...e})},i={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"}},args:{isAnnual:!1,discountBadge:"Save 20%"},render:e=>n.jsx(a,{...e}),decorators:[e=>n.jsx("div",{style:{width:"100%",padding:"16px"},children:n.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isAnnual: false,
    discountBadge: 'Save 20%'
  },
  render: args => <InteractiveToggle {...args} />
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Annual Selected',
  args: {
    isAnnual: true,
    discountBadge: 'Save 20%'
  },
  render: args => <InteractiveToggle {...args} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Custom Labels',
  args: {
    isAnnual: false,
    monthlyLabel: 'Pay Monthly',
    annualLabel: 'Pay Yearly',
    discountBadge: '2 Months Free'
  },
  render: args => <InteractiveToggle {...args} />
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Without Badge',
  args: {
    isAnnual: false,
    discountBadge: ''
  },
  render: args => <InteractiveToggle {...args} />
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    isAnnual: false,
    discountBadge: 'Save 20%'
  },
  render: args => <InteractiveToggle {...args} />,
  decorators: [Story => <div style={{
    width: '100%',
    padding: '16px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};const h=["Default","AnnualSelected","CustomLabels","NoBadge","MobileView"];export{r as AnnualSelected,o as CustomLabels,t as Default,i as MobileView,l as NoBadge,h as __namedExportsOrder,y as default};
