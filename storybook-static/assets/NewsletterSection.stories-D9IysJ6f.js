import{r as u,j as e}from"./iframe-B_omF_R9.js";/* empty css                          */import"./preload-helper-Ct5FWWRu.js";const j=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M18.333 5l-8.333 5.833L1.667 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),k=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16.667 5L7.5 14.167 3.333 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function b({headline:s,description:c,onSubscribe:w,successMessage:x="Thanks for subscribing! Check your inbox to confirm.",className:y=""}){const[r,m]=u.useState(""),[n,l]=u.useState("idle"),[S,h]=u.useState(""),f=["fn-newsletter-section",y].filter(Boolean).join(" "),v=async d=>{if(d.preventDefault(),!(!r||n==="loading")){l("loading"),h("");try{await w(r),l("success"),m("")}catch(g){l("error"),h(g instanceof Error?g.message:"Something went wrong. Please try again.")}}};return e.jsx("section",{className:f,children:e.jsxs("div",{className:"fn-newsletter-section__content",children:[e.jsx("h2",{className:"fn-newsletter-section__headline",children:s}),e.jsx("p",{className:"fn-newsletter-section__description",children:c}),n==="success"?e.jsxs("div",{className:"fn-newsletter-section__success",children:[e.jsx("span",{className:"fn-newsletter-section__success-icon",children:e.jsx(k,{})}),e.jsx("span",{children:x})]}):e.jsxs("form",{onSubmit:v,className:"fn-newsletter-section__form",children:[e.jsxs("div",{className:"fn-newsletter-section__input-wrapper",children:[e.jsx("span",{className:"fn-newsletter-section__input-icon",children:e.jsx(j,{})}),e.jsx("input",{type:"email",value:r,onChange:d=>m(d.target.value),placeholder:"Enter your email",className:"fn-newsletter-section__input",required:!0,disabled:n==="loading"})]}),e.jsx("button",{type:"submit",className:"fn-newsletter-section__button",disabled:n==="loading"||!r,children:n==="loading"?"Subscribing...":"Subscribe"})]}),n==="error"&&e.jsx("p",{className:"fn-newsletter-section__error",children:S})]})})}b.__docgenInfo={description:`NewsletterSection - Newsletter signup section

Full-width section for newsletter subscription with headline and description.
Includes loading and success states.`,methods:[],displayName:"NewsletterSection",props:{headline:{required:!0,tsType:{name:"string"},description:"Section headline"},description:{required:!0,tsType:{name:"string"},description:"Section description"},onSubscribe:{required:!0,tsType:{name:"signature",type:"function",raw:"(email: string) => Promise<void>",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"Submit handler"},successMessage:{required:!1,tsType:{name:"string"},description:"Success message",defaultValue:{value:"'Thanks for subscribing! Check your inbox to confirm.'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const L={title:"Blog/NewsletterSection",component:b,parameters:{layout:"padded",docs:{description:{component:"Full-width newsletter signup section with email input and success/error states."}}},tags:["autodocs"]},p=async s=>{console.log("Subscribing:",s),await new Promise(c=>setTimeout(c,1500))},_=async()=>{throw await new Promise(s=>setTimeout(s,1e3)),new Error("This email is already subscribed.")},t={args:{headline:"Stay in the Loop",description:"Get weekly insights on solopreneurship, product development, and AI tools delivered straight to your inbox.",onSubscribe:p},decorators:[s=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(s,{})})]},o={args:{headline:"Join Our Newsletter",description:"Weekly tips and strategies for building your solo business.",onSubscribe:p,successMessage:"Welcome aboard! Your first email is on its way."},decorators:[s=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(s,{})})]},i={args:{headline:"Subscribe Now",description:"Join 10,000+ solopreneurs getting weekly insights.",onSubscribe:_},decorators:[s=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(s,{})})]},a={args:{headline:"Never Miss an Update",description:"Join our community of solopreneurs and get exclusive content, early access to new features, and weekly insights delivered to your inbox.",onSubscribe:p}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Stay in the Loop',
    description: 'Get weekly insights on solopreneurship, product development, and AI tools delivered straight to your inbox.',
    onSubscribe: mockSubscribe
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Join Our Newsletter',
    description: 'Weekly tips and strategies for building your solo business.',
    onSubscribe: mockSubscribe,
    successMessage: 'Welcome aboard! Your first email is on its way.'
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Subscribe Now',
    description: 'Join 10,000+ solopreneurs getting weekly insights.',
    onSubscribe: mockSubscribeError
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Never Miss an Update',
    description: 'Join our community of solopreneurs and get exclusive content, early access to new features, and weekly insights delivered to your inbox.',
    onSubscribe: mockSubscribe
  }
}`,...a.parameters?.docs?.source}}};const M=["Default","CustomSuccessMessage","WithErrorHandling","FullWidth"];export{o as CustomSuccessMessage,t as Default,a as FullWidth,i as WithErrorHandling,M as __namedExportsOrder,L as default};
