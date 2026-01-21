import{r as p,j as e}from"./iframe-B_omF_R9.js";/* empty css                            */import"./preload-helper-Ct5FWWRu.js";const j=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.333 8h9.334M9 4.667L12.667 8 9 11.333",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),A=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.333 4L6 11.333 2.667 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function h({text:t,onSubscribe:d,successMessage:f="Thanks! Check your inbox.",className:w=""}){const[r,x]=p.useState(""),[s,u]=p.useState("idle"),[S,g]=p.useState(""),b=["fn-newsletter-inline",w].filter(Boolean).join(" "),v=async m=>{if(m.preventDefault(),!(!r||s==="loading")){u("loading"),g("");try{await d(r),u("success"),x("")}catch(y){u("error"),g(y instanceof Error?y.message:"Something went wrong.")}}};return s==="success"?e.jsxs("div",{className:`${b} fn-newsletter-inline--success`,children:[e.jsx("span",{className:"fn-newsletter-inline__success-icon",children:e.jsx(A,{})}),e.jsx("span",{className:"fn-newsletter-inline__success-text",children:f})]}):e.jsxs("div",{className:b,children:[e.jsx("p",{className:"fn-newsletter-inline__text",children:t}),e.jsxs("form",{onSubmit:v,className:"fn-newsletter-inline__form",children:[e.jsx("input",{type:"email",value:r,onChange:m=>x(m.target.value),placeholder:"your@email.com",className:"fn-newsletter-inline__input",required:!0,disabled:s==="loading"}),e.jsx("button",{type:"submit",className:"fn-newsletter-inline__button",disabled:s==="loading"||!r,"aria-label":"Subscribe",children:s==="loading"?e.jsx("span",{className:"fn-newsletter-inline__loading",children:"..."}):e.jsx(j,{})})]}),s==="error"&&e.jsx("p",{className:"fn-newsletter-inline__error",children:S})]})}h.__docgenInfo={description:`NewsletterInlineCTA - Compact inline newsletter signup

Inline CTA for newsletter subscription within article content.
More subtle than the full section, designed for mid-content placement.`,methods:[],displayName:"NewsletterInlineCTA",props:{text:{required:!0,tsType:{name:"string"},description:"CTA text"},onSubscribe:{required:!0,tsType:{name:"signature",type:"function",raw:"(email: string) => Promise<void>",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"Submit handler"},successMessage:{required:!1,tsType:{name:"string"},description:"Success message",defaultValue:{value:"'Thanks! Check your inbox.'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const W={title:"Blog/NewsletterInlineCTA",component:h,parameters:{layout:"padded",docs:{description:{component:"Compact inline newsletter signup for mid-content placement."}}},tags:["autodocs"]},l=async t=>{console.log("Subscribing:",t),await new Promise(d=>setTimeout(d,1500))},k=async()=>{throw await new Promise(t=>setTimeout(t,1e3)),new Error("This email is already subscribed.")},n={args:{text:"Enjoying this article? Get more insights delivered to your inbox.",onSubscribe:l},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},o={args:{text:"Subscribe for weekly tips:",onSubscribe:l},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},i={args:{text:"Get notified about new articles:",onSubscribe:k},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},a={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"The MVP approach allows you to test your core hypothesis with minimal investment. Instead of spending months building a full product, you focus on the essential features that validate your business idea."}),e.jsx(h,{text:"Want more product development tips? Subscribe to our newsletter.",onSubscribe:l}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginTop:"24px"},children:"Now that you understand the importance of starting small, let us dive into the specific steps for building your MVP."})]})},c={args:{text:"Join 10,000+ readers:",onSubscribe:l,successMessage:"You are in! Welcome to the community."},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Enjoying this article? Get more insights delivered to your inbox.',
    onSubscribe: mockSubscribe
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Subscribe for weekly tips:',
    onSubscribe: mockSubscribe
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Get notified about new articles:',
    onSubscribe: mockSubscribeError
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        The MVP approach allows you to test your core hypothesis with minimal investment.
        Instead of spending months building a full product, you focus on the essential
        features that validate your business idea.
      </p>

      <NewsletterInlineCTA text="Want more product development tips? Subscribe to our newsletter." onSubscribe={mockSubscribe} />

      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginTop: '24px'
    }}>
        Now that you understand the importance of starting small, let us dive into the
        specific steps for building your MVP.
      </p>
    </article>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Join 10,000+ readers:',
    onSubscribe: mockSubscribe,
    successMessage: 'You are in! Welcome to the community.'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};const C=["Default","ShortText","WithErrorHandling","InArticle","CustomSuccessMessage"];export{c as CustomSuccessMessage,n as Default,a as InArticle,o as ShortText,i as WithErrorHandling,C as __namedExportsOrder,W as default};
