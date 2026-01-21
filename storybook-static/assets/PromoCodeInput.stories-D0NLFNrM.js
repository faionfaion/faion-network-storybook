import{r as f,j as e}from"./iframe-B_omF_R9.js";/* empty css                       */import"./preload-helper-Ct5FWWRu.js";function x({onApply:r,placeholder:i="Enter promo code",buttonText:g="Apply",isLoading:s=!1,error:a,success:o,disabled:n=!1}){const[t,v]=f.useState(""),S=h=>{h.preventDefault(),t.trim()&&!s&&!n&&r(t.trim().toUpperCase())};return e.jsxs("div",{className:"fn-promo-input",children:[e.jsxs("form",{className:"fn-promo-input__form",onSubmit:S,children:[e.jsx("input",{type:"text",value:t,onChange:h=>v(h.target.value),placeholder:i,className:`fn-promo-input__field ${a?"fn-promo-input__field--error":""} ${o?"fn-promo-input__field--success":""}`,disabled:n||s}),e.jsx("button",{type:"submit",className:"fn-promo-input__button",disabled:!t.trim()||s||n,children:s?e.jsx("span",{className:"fn-promo-input__spinner"}):g})]}),a&&e.jsx("p",{className:"fn-promo-input__message fn-promo-input__message--error",children:a}),o&&e.jsx("p",{className:"fn-promo-input__message fn-promo-input__message--success",children:o})]})}x.__docgenInfo={description:`PromoCodeInput - Input for applying promo codes

Used in checkout/pricing flows for discount codes.`,methods:[],displayName:"PromoCodeInput",props:{onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:"Apply promo code handler"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Enter promo code'",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Button text",defaultValue:{value:"'Apply'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Is loading",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message"},success:{required:!1,tsType:{name:"string"},description:"Success message"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}}}};const A={title:"FAION/Pricing/PromoCodeInput",component:x,parameters:{layout:"centered",docs:{description:{component:`
Promo code input field with apply button.

## Features
- Input with uppercase transformation
- Apply button with loading state
- Error and success message support
- Disabled state support
        `}}},tags:["autodocs"],argTypes:{isLoading:{control:"boolean"},disabled:{control:"boolean"},error:{control:"text"},success:{control:"text"},onApply:{action:"apply-code"}}},d={args:{placeholder:"Enter promo code",buttonText:"Apply"},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},c={args:{isLoading:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},p={name:"With Error",args:{error:"Invalid promo code. Please check and try again."},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},l={name:"With Success",args:{success:"Code SAVE20 applied! You save 20%.",disabled:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},u={args:{disabled:!0,placeholder:"Promo codes disabled"},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},b=()=>{const[r,i]=f.useState(!1),[g,s]=f.useState(""),[a,o]=f.useState(""),n=t=>{s(""),o(""),i(!0),setTimeout(()=>{i(!1),t==="SAVE20"?o("Code SAVE20 applied! You save 20%."):s("Invalid promo code. Please check and try again.")},1500)};return e.jsxs("div",{style:{width:"400px"},children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"12px"},children:'Try entering "SAVE20" for a valid code'}),e.jsx(x,{onApply:n,isLoading:r,error:g,success:a})]})},m={render:()=>e.jsx(b,{})},y={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"}},args:{},decorators:[r=>e.jsx("div",{style:{width:"100%",padding:"16px"},children:e.jsx(r,{})})]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter promo code',
    buttonText: 'Apply'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  args: {
    error: 'Invalid promo code. Please check and try again.'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Success',
  args: {
    success: 'Code SAVE20 applied! You save 20%.',
    disabled: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Promo codes disabled'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InteractivePromo />
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {},
  decorators: [Story => <div style={{
    width: '100%',
    padding: '16px'
  }}>
        <Story />
      </div>]
}`,...y.parameters?.docs?.source}}};const E=["Default","Loading","WithError","WithSuccess","Disabled","Interactive","MobileView"];export{d as Default,u as Disabled,m as Interactive,c as Loading,y as MobileView,p as WithError,l as WithSuccess,E as __namedExportsOrder,A as default};
