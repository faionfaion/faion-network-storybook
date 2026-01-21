import{j as e}from"./iframe-B_omF_R9.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";const p=()=>e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"5.333",y:"14.667",width:"21.334",height:"14.666",rx:"2",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M9.333 14.667V9.333a6.667 6.667 0 1113.334 0v5.334",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),u=()=>e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M11 16l3.5 3.5 7-7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),h=()=>e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"16",cy:"10.667",r:"5.333",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M5.333 28c0-5.891 4.776-10.667 10.667-10.667S26.667 22.11 26.667 28",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),g={not_authenticated:{icon:h,title:"Sign in to Submit",description:"You need to be signed in to your account to submit a testimonial.",cta:{text:"Sign In",href:"/login"}},not_paid:{icon:p,title:"Paid Subscribers Only",description:"Testimonials are only available to paid subscribers. Upgrade your plan to share your experience.",cta:{text:"View Plans",href:"/pricing"}},already_submitted:{icon:u,title:"Thanks for Your Testimonial!",description:"You have already submitted a testimonial. We appreciate your support!"}};function d({reason:t,existingTestimonial:s,className:l=""}){const c=["fn-eligibility-gate",l].filter(Boolean).join(" "),i=g[t],m=i.icon;return e.jsxs("div",{className:c,children:[e.jsx("span",{className:`fn-eligibility-gate__icon fn-eligibility-gate__icon--${t}`,children:e.jsx(m,{})}),e.jsx("h3",{className:"fn-eligibility-gate__title",children:i.title}),e.jsx("p",{className:"fn-eligibility-gate__description",children:i.description}),t==="already_submitted"&&s&&e.jsx("div",{className:"fn-eligibility-gate__existing",children:e.jsxs("blockquote",{className:"fn-eligibility-gate__quote",children:['"',s.content,'"']})}),i.cta&&e.jsx("a",{href:i.cta.href,className:"fn-eligibility-gate__cta",children:i.cta.text})]})}d.__docgenInfo={description:`EligibilityGate - Gating component for testimonial eligibility

Shows appropriate message when user is not eligible to submit.`,methods:[],displayName:"EligibilityGate",props:{reason:{required:!0,tsType:{name:"union",raw:"'not_authenticated' | 'not_paid' | 'already_submitted'",elements:[{name:"literal",value:"'not_authenticated'"},{name:"literal",value:"'not_paid'"},{name:"literal",value:"'already_submitted'"}]},description:"Reason for ineligibility"},existingTestimonial:{required:!1,tsType:{name:"TestimonialData"},description:"Existing testimonial if already submitted"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const f={title:"TestimonialForm/EligibilityGate",component:d,parameters:{layout:"padded",docs:{description:{component:"Gating component shown when user is not eligible to submit a testimonial."}}},tags:["autodocs"]},o={args:{reason:"not_authenticated"},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},n={args:{reason:"not_paid"},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},r={args:{reason:"already_submitted",existingTestimonial:{mode:"freeform",content:"Faion Network has been a game-changer for my solopreneur journey. The SDD methodology helped me ship my first product in half the time I expected. I cannot recommend it enough!",displayName:"full",jobTitle:"Founder",company:"My Startup",consentGiven:!0}},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},a={args:{reason:"already_submitted"},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'not_authenticated'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'not_paid'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'already_submitted',
    existingTestimonial: {
      mode: 'freeform',
      content: 'Faion Network has been a game-changer for my solopreneur journey. The SDD methodology helped me ship my first product in half the time I expected. I cannot recommend it enough!',
      displayName: 'full',
      jobTitle: 'Founder',
      company: 'My Startup',
      consentGiven: true
    }
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    reason: 'already_submitted'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const _=["NotAuthenticated","NotPaid","AlreadySubmitted","AlreadySubmittedNoPreview"];export{r as AlreadySubmitted,a as AlreadySubmittedNoPreview,o as NotAuthenticated,n as NotPaid,_ as __namedExportsOrder,f as default};
