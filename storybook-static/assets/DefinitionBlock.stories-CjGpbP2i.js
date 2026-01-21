import{j as e}from"./iframe-B_omF_R9.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";const C=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),I=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");function i({term:t,definition:v,children:b,phonetic:h,category:u,example:f,id:k,compact:A=!1,inline:g=!1,className:j=""}){const p=k||I(t),y=v||b,x=["fn-definition-block",A&&"fn-definition-block--compact",g&&"fn-definition-block--inline",j].filter(Boolean).join(" ");return g?e.jsxs("div",{className:x,id:p,children:[e.jsx("div",{className:"fn-definition-block__header",children:e.jsx("dt",{className:"fn-definition-block__term",children:t})}),e.jsx("dd",{className:"fn-definition-block__definition",children:y})]}):e.jsxs("div",{className:x,children:[e.jsx("span",{id:p,className:"fn-definition-block__anchor"}),e.jsxs("div",{className:"fn-definition-block__header",children:[e.jsx("h4",{className:"fn-definition-block__term",children:t}),e.jsx("a",{href:`#${p}`,className:"fn-definition-block__link","aria-label":`Link to ${t} definition`,title:"Copy link to this definition",children:e.jsx(C,{})})]}),h&&e.jsx("p",{className:"fn-definition-block__phonetic",children:h}),e.jsx("p",{className:"fn-definition-block__definition",children:y}),u&&e.jsx("span",{className:"fn-definition-block__category",children:u}),f&&e.jsxs("div",{className:"fn-definition-block__example",children:[e.jsx("p",{className:"fn-definition-block__example-label",children:"Example"}),e.jsx("p",{className:"fn-definition-block__example-text",children:f})]})]})}i.__docgenInfo={description:`DefinitionBlock - MDX component for term definitions

Styled block with term and definition, linkable for glossary.`,methods:[],displayName:"DefinitionBlock",props:{term:{required:!0,tsType:{name:"string"},description:"The term being defined"},definition:{required:!1,tsType:{name:"string"},description:"Definition text or children"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children content (alternative to definition prop)"},phonetic:{required:!1,tsType:{name:"string"},description:"Optional phonetic spelling"},category:{required:!1,tsType:{name:"string"},description:"Optional category/tag"},example:{required:!1,tsType:{name:"string"},description:"Optional example usage"},id:{required:!1,tsType:{name:"string"},description:"Unique ID for anchor link"},compact:{required:!1,tsType:{name:"boolean"},description:"Compact variant",defaultValue:{value:"false",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"Inline variant for glossary lists",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const T={title:"MDX/DefinitionBlock",component:i,parameters:{layout:"padded",docs:{description:{component:"MDX component for term definitions with linkable anchors."}}},tags:["autodocs"],argTypes:{term:{control:"text",description:"The term being defined"},definition:{control:"text",description:"Definition text"},phonetic:{control:"text",description:"Optional phonetic spelling"},category:{control:"text",description:"Optional category/tag"},example:{control:"text",description:"Optional example usage"},compact:{control:"boolean",description:"Compact variant"},inline:{control:"boolean",description:"Inline variant for glossary lists"}}},o={args:{term:"SDD (Specification-Driven Development)",definition:"A methodology that emphasizes creating detailed specifications before implementation. It ensures clear requirements, reduces rework, and enables better collaboration between stakeholders and developers."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},n={args:{term:"SCAMPER",phonetic:"/ˈskampər/",definition:"A creative thinking technique that uses seven types of questions to spark new ideas: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, and Reverse.",category:"Research"},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},r={args:{term:"MVP (Minimum Viable Product)",definition:"The simplest version of a product that can be released to early customers to validate assumptions and gather feedback.",category:"Product",example:"Dropbox launched with just a demo video explaining the concept, before building the actual product. This MVP validated demand with minimal investment."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},a={args:{term:"RAG (Retrieval-Augmented Generation)",definition:"An AI technique that combines large language models with external knowledge retrieval. The system first retrieves relevant documents, then uses them as context for generating accurate, grounded responses.",category:"AI/ML"},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},s={args:{term:"API",definition:"Application Programming Interface - a set of rules and protocols that allows different software applications to communicate with each other.",compact:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsx(t,{})})]},c={render:()=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsxs("dl",{style:{margin:0},children:[e.jsx(i,{term:"CI/CD",definition:"Continuous Integration and Continuous Deployment",inline:!0}),e.jsx(i,{term:"IaC",definition:"Infrastructure as Code - managing infrastructure through code files",inline:!0}),e.jsx(i,{term:"K8s",definition:"Kubernetes - container orchestration platform",inline:!0})]})})},d={render:()=>e.jsxs("div",{style:{maxWidth:"720px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",marginBottom:"24px",color:"#1C1C1E"},children:"Glossary"}),e.jsx(i,{term:"Acceptance Criteria",definition:"Specific conditions that a software feature must meet to be accepted by the stakeholder. Usually written in Given-When-Then format.",category:"BA",id:"acceptance-criteria"}),e.jsx(i,{term:"Backlog",definition:"A prioritized list of work items (features, bugs, tasks) that need to be completed. In Agile, the product backlog is managed by the Product Owner.",category:"PM",id:"backlog"}),e.jsx(i,{term:"Constitution",definition:"In SDD methodology, the foundational document that defines project standards, architecture decisions, and core principles. It serves as the source of truth for all development decisions.",category:"SDD",id:"constitution"})]})},l={render:()=>e.jsxs("div",{style:{maxWidth:"720px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",marginBottom:"12px",color:"#1C1C1E"},children:"Understanding the Mom Test"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"Before we dive into the methodology, let us define some key terms you will encounter."}),e.jsx(i,{term:"The Mom Test",definition:"A set of rules for having customer conversations that reveal truth instead of false positives. Named because even your mom would give you honest feedback if you follow these rules.",category:"Research",example:"Instead of asking 'Would you buy this?', ask 'Tell me about the last time you had this problem. What did you do?'"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginTop:"24px"},children:"The key insight from the Mom Test is that people are terrible at predicting their future behavior, but they can accurately describe their past actions and frustrations."})]})},m={args:{term:"MCP (Model Context Protocol)",phonetic:"/em-siː-piː/",definition:"A protocol developed by Anthropic for connecting AI models to external tools and data sources. It enables Claude to access real-time information, execute code, and interact with external services through a standardized interface.",category:"AI",example:"A developer configures an MCP server to give Claude access to their codebase, allowing the AI to read files, run tests, and make edits directly.",id:"mcp"},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'SDD (Specification-Driven Development)',
    definition: 'A methodology that emphasizes creating detailed specifications before implementation. It ensures clear requirements, reduces rework, and enables better collaboration between stakeholders and developers.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'SCAMPER',
    phonetic: '/ˈskampər/',
    definition: 'A creative thinking technique that uses seven types of questions to spark new ideas: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, and Reverse.',
    category: 'Research'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'MVP (Minimum Viable Product)',
    definition: 'The simplest version of a product that can be released to early customers to validate assumptions and gather feedback.',
    category: 'Product',
    example: 'Dropbox launched with just a demo video explaining the concept, before building the actual product. This MVP validated demand with minimal investment.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'RAG (Retrieval-Augmented Generation)',
    definition: 'An AI technique that combines large language models with external knowledge retrieval. The system first retrieves relevant documents, then uses them as context for generating accurate, grounded responses.',
    category: 'AI/ML'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'API',
    definition: 'Application Programming Interface - a set of rules and protocols that allows different software applications to communicate with each other.',
    compact: true
  },
  decorators: [Story => <div style={{
    maxWidth: '480px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '640px'
  }}>
      <dl style={{
      margin: 0
    }}>
        <DefinitionBlock term="CI/CD" definition="Continuous Integration and Continuous Deployment" inline />
        <DefinitionBlock term="IaC" definition="Infrastructure as Code - managing infrastructure through code files" inline />
        <DefinitionBlock term="K8s" definition="Kubernetes - container orchestration platform" inline />
      </dl>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      marginBottom: '24px',
      color: '#1C1C1E'
    }}>
        Glossary
      </h2>

      <DefinitionBlock term="Acceptance Criteria" definition="Specific conditions that a software feature must meet to be accepted by the stakeholder. Usually written in Given-When-Then format." category="BA" id="acceptance-criteria" />

      <DefinitionBlock term="Backlog" definition="A prioritized list of work items (features, bugs, tasks) that need to be completed. In Agile, the product backlog is managed by the Product Owner." category="PM" id="backlog" />

      <DefinitionBlock term="Constitution" definition="In SDD methodology, the foundational document that defines project standards, architecture decisions, and core principles. It serves as the source of truth for all development decisions." category="SDD" id="constitution" />
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      marginBottom: '12px',
      color: '#1C1C1E'
    }}>
        Understanding the Mom Test
      </h2>
      <p style={{
      color: '#4A4A4A',
      lineHeight: 1.7,
      marginBottom: '24px'
    }}>
        Before we dive into the methodology, let us define some key terms you will encounter.
      </p>

      <DefinitionBlock term="The Mom Test" definition="A set of rules for having customer conversations that reveal truth instead of false positives. Named because even your mom would give you honest feedback if you follow these rules." category="Research" example="Instead of asking 'Would you buy this?', ask 'Tell me about the last time you had this problem. What did you do?'" />

      <p style={{
      color: '#4A4A4A',
      lineHeight: 1.7,
      marginTop: '24px'
    }}>
        The key insight from the Mom Test is that people are terrible at predicting their future behavior,
        but they can accurately describe their past actions and frustrations.
      </p>
    </div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'MCP (Model Context Protocol)',
    phonetic: '/em-siː-piː/',
    definition: 'A protocol developed by Anthropic for connecting AI models to external tools and data sources. It enables Claude to access real-time information, execute code, and interact with external services through a standardized interface.',
    category: 'AI',
    example: 'A developer configures an MCP server to give Claude access to their codebase, allowing the AI to read files, run tests, and make edits directly.',
    id: 'mcp'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};const M=["Default","WithPhonetic","WithExample","WithCategory","Compact","Inline","Glossary","InArticle","Complete"];export{s as Compact,m as Complete,o as Default,d as Glossary,l as InArticle,c as Inline,a as WithCategory,r as WithExample,n as WithPhonetic,M as __namedExportsOrder,T as default};
