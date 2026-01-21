import{r as w,j as e}from"./iframe-B_omF_R9.js";/* empty css            */import"./preload-helper-Ct5FWWRu.js";const A=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5 7.5l5 5 5-5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function d({items:t,schemaMarkup:p=!0,className:f=""}){const[m,y]=w.useState(new Set),g=["fn-faq",f].filter(Boolean).join(" "),x=n=>{const s=new Set(m);s.has(n)?s.delete(n):s.add(n),y(s)},h=p?{"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map(n=>({"@type":"Question",name:n.question,acceptedAnswer:{"@type":"Answer",text:n.answer}}))}:null;return e.jsxs("div",{className:g,children:[p&&h&&e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h)}}),e.jsx("div",{className:"fn-faq__list",children:t.map((n,s)=>{const o=m.has(s);return e.jsxs("div",{className:`fn-faq__item ${o?"fn-faq__item--open":""}`,children:[e.jsxs("button",{type:"button",className:"fn-faq__question",onClick:()=>x(s),"aria-expanded":o,"aria-controls":`faq-answer-${s}`,children:[e.jsx("span",{className:"fn-faq__question-text",children:n.question}),e.jsx("span",{className:`fn-faq__icon ${o?"fn-faq__icon--open":""}`,children:e.jsx(A,{})})]}),e.jsx("div",{id:`faq-answer-${s}`,className:"fn-faq__answer",role:"region","aria-labelledby":`faq-question-${s}`,hidden:!o,children:e.jsx("div",{className:"fn-faq__answer-content",children:n.answer})})]},s)})})]})}d.__docgenInfo={description:`FAQ - Frequently Asked Questions accordion for MDX

Displays a collapsible list of questions and answers.
Supports JSON-LD schema markup for SEO.`,methods:[],displayName:"FAQ",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"FAQItem"}],raw:"FAQItem[]"},description:"List of FAQ items"},schemaMarkup:{required:!1,tsType:{name:"boolean"},description:"Enable JSON-LD schema markup for SEO",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const j={title:"MDX/FAQ",component:d,parameters:{layout:"padded",docs:{description:{component:"Frequently Asked Questions accordion with optional JSON-LD schema markup for SEO."}}},tags:["autodocs"],argTypes:{schemaMarkup:{control:"boolean",description:"Enable JSON-LD schema markup for SEO"}}},u=[{question:"What is Faion Network?",answer:"Faion Network is a comprehensive platform for solopreneurs that combines educational content with an AI development framework. It includes 502 methodologies across 15 skills, designed to help you build and scale your business."},{question:"How much does it cost?",answer:"We offer several pricing tiers: Free (limited access), Plus ($19/month for personal use), Pro ($35/month for commercial use), and Team ($35/seat/month for organizations)."},{question:"What is SDD?",answer:"SDD (Specification-Driven Development) is our methodology that emphasizes clear documentation before implementation. It helps you build products systematically with reduced rework and improved quality."},{question:"How do I access the AI agents and skills?",answer:"Our content is delivered via MCP (Model Context Protocol) server. After subscribing, you configure your Claude Code to connect to mcp.faion.net with your license key."}],S=[{question:"What technologies do you cover?",answer:"We cover a wide range including Python, JavaScript/TypeScript, React, Django, FastAPI, Docker, Kubernetes, AWS/GCP, and AI/ML tools like LangChain and vector databases."},{question:"Can I use the framework for client work?",answer:"Yes, with our Pro or Team plans. The Plus plan is for personal projects only, while Pro and Team allow commercial use including client projects and agency work."},{question:"Is there a free trial?",answer:"Yes! Our Free tier gives you 30% access to methodologies, allowing you to evaluate the content before subscribing. No credit card required to start."}],a={args:{items:u},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},r={args:{items:S},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},i={args:{items:u,schemaMarkup:!1},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},c={args:{items:[{question:"What is the refund policy?",answer:"We offer a 30-day money-back guarantee. If you are not satisfied with your subscription, contact us within 30 days for a full refund."}]},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},l={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",marginBottom:"16px",color:"#1C1C1E"},children:"Frequently Asked Questions"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"Have questions? We have got answers. If you cannot find what you are looking for, reach out to our support team."}),e.jsx(d,{items:u}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginTop:"24px"},children:"Still have questions? Email us at support@faion.net."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicFAQs
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: technicalFAQs
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicFAQs,
    schemaMarkup: false
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      question: 'What is the refund policy?',
      answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with your subscription, contact us within 30 days for a full refund.'
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Frequently Asked Questions
      </h2>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Have questions? We have got answers. If you cannot find what you are looking for,
        reach out to our support team.
      </p>

      <FAQ items={basicFAQs} />

      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginTop: '24px'
    }}>
        Still have questions? Email us at support@faion.net.
      </p>
    </article>
}`,...l.parameters?.docs?.source}}};const F=["Default","TechnicalFAQs","WithoutSchemaMarkup","SingleItem","InArticle"];export{a as Default,l as InArticle,c as SingleItem,r as TechnicalFAQs,i as WithoutSchemaMarkup,F as __namedExportsOrder,j as default};
