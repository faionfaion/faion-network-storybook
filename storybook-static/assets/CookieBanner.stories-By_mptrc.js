import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function i({onAcceptAll:o,onRejectAll:t,onCustomize:c,privacyPolicyUrl:s,className:l=""}){const a=["fn-cookie-banner",l].filter(Boolean).join(" ");return e.jsx("div",{className:a,role:"dialog","aria-label":"Cookie consent","aria-modal":"false",children:e.jsxs("div",{className:"fn-cookie-banner__container",children:[e.jsxs("div",{className:"fn-cookie-banner__content",children:[e.jsx("div",{className:"fn-cookie-banner__icon",children:e.jsx(d,{})}),e.jsx("div",{className:"fn-cookie-banner__text",children:e.jsxs("p",{className:"fn-cookie-banner__message",children:["We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Read our"," ",e.jsx("a",{href:s,className:"fn-cookie-banner__link",children:"Privacy Policy"})," ","to learn more."]})})]}),e.jsxs("div",{className:"fn-cookie-banner__actions",children:[e.jsx("button",{type:"button",className:"fn-cookie-banner__button fn-cookie-banner__button--secondary",onClick:t,children:"Reject All"}),e.jsx("button",{type:"button",className:"fn-cookie-banner__button fn-cookie-banner__button--secondary",onClick:c,children:"Customize"}),e.jsx("button",{type:"button",className:"fn-cookie-banner__button fn-cookie-banner__button--primary",onClick:o,children:"Accept All"})]})]})})}function d(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"8",cy:"9",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"8",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"10",cy:"14",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"16",cy:"13",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"12",cy:"17",r:"1",fill:"currentColor"})]})}i.__docgenInfo={description:`CookieBanner - GDPR-compliant cookie consent banner

Fixed bottom banner for cookie consent with accept/reject/customize options.`,methods:[],displayName:"CookieBanner",props:{onAcceptAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for accepting all cookies"},onRejectAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for rejecting all cookies"},onCustomize:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for opening cookie preferences"},privacyPolicyUrl:{required:!0,tsType:{name:"string"},description:"URL to privacy policy"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const u={title:"Legal/CookieBanner",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"GDPR-compliant cookie consent banner with accept/reject/customize options."}}},tags:["autodocs"]},n={args:{onAcceptAll:()=>console.log("Accepted all cookies"),onRejectAll:()=>console.log("Rejected all cookies"),onCustomize:()=>console.log("Opening cookie preferences"),privacyPolicyUrl:"/privacy-policy"},decorators:[o=>e.jsxs("div",{style:{minHeight:"300px",position:"relative"},children:[e.jsxs("div",{style:{padding:"40px",background:"#FAF9F6"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",color:"#1C1C1E"},children:"Page Content"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A"},children:"This is the page content behind the cookie banner."})]}),e.jsx(o,{})]})]},r={args:{onAcceptAll:()=>console.log("Accepted all cookies"),onRejectAll:()=>console.log("Rejected all cookies"),onCustomize:()=>console.log("Opening cookie preferences"),privacyPolicyUrl:"/privacy-policy"},decorators:[o=>e.jsxs("div",{style:{minHeight:"600px",position:"relative"},children:[e.jsxs("div",{style:{padding:"40px",background:"#FAF9F6"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",color:"#1C1C1E",marginBottom:"24px"},children:"Welcome to Faion Network"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",lineHeight:1.6,maxWidth:"600px"},children:"Faion Network is a comprehensive methodology framework for software development. Browse our 502 methodologies across 15 domains to enhance your development workflow."}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",lineHeight:1.6,maxWidth:"600px",marginTop:"16px"},children:"Our tools help teams collaborate more effectively and deliver high-quality software faster."})]}),e.jsx(o,{})]})]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onAcceptAll: () => console.log('Accepted all cookies'),
    onRejectAll: () => console.log('Rejected all cookies'),
    onCustomize: () => console.log('Opening cookie preferences'),
    privacyPolicyUrl: '/privacy-policy'
  },
  decorators: [Story => <div style={{
    minHeight: '300px',
    position: 'relative'
  }}>
        <div style={{
      padding: '40px',
      background: '#FAF9F6'
    }}>
          <h1 style={{
        fontFamily: 'Georgia, serif',
        color: '#1C1C1E'
      }}>Page Content</h1>
          <p style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A'
      }}>
            This is the page content behind the cookie banner.
          </p>
        </div>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    onAcceptAll: () => console.log('Accepted all cookies'),
    onRejectAll: () => console.log('Rejected all cookies'),
    onCustomize: () => console.log('Opening cookie preferences'),
    privacyPolicyUrl: '/privacy-policy'
  },
  decorators: [Story => <div style={{
    minHeight: '600px',
    position: 'relative'
  }}>
        <div style={{
      padding: '40px',
      background: '#FAF9F6'
    }}>
          <h1 style={{
        fontFamily: 'Georgia, serif',
        color: '#1C1C1E',
        marginBottom: '24px'
      }}>
            Welcome to Faion Network
          </h1>
          <p style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A',
        lineHeight: 1.6,
        maxWidth: '600px'
      }}>
            Faion Network is a comprehensive methodology framework for software development.
            Browse our 502 methodologies across 15 domains to enhance your development workflow.
          </p>
          <p style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A',
        lineHeight: 1.6,
        maxWidth: '600px',
        marginTop: '16px'
      }}>
            Our tools help teams collaborate more effectively and deliver high-quality software faster.
          </p>
        </div>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};const y=["Default","WithContent"];export{n as Default,r as WithContent,y as __namedExportsOrder,u as default};
