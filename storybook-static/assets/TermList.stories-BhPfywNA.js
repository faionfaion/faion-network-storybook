import{j as e}from"./iframe-B_omF_R9.js";/* empty css                 */import"./preload-helper-Ct5FWWRu.js";const A=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),D=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),N=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.jsx("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})]}),k=(t,s)=>{if(!s||s.trim()==="")return t;const l=new RegExp(`(${s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return t.split(l).map((a,c)=>l.test(a)?e.jsx("mark",{className:"fn-term-list__highlight",children:a},c):a)},L=t=>{const s=new Map;return t.forEach(i=>{const a=i.term[0].toUpperCase();s.has(a)||s.set(a,[]),s.get(a).push(i)}),new Map([...s.entries()].sort((i,a)=>i[0].localeCompare(a[0])))};function T({terms:t,variant:s="default",groupByLetter:l=!1,showCategory:i=!0,expandable:a=!1,highlightQuery:c,onTermClick:d,className:w=""}){const S=["fn-term-list",`fn-term-list--${s}`,w].filter(Boolean).join(" "),_=r=>{d?d(r):r.href&&(window.location.href=r.href)},C=r=>{const n=d||r.href?"button":"div";return e.jsxs(n,{className:`fn-term-list__item ${a?"fn-term-list__item--expandable":""}`,onClick:d||r.href?()=>_(r):void 0,type:n==="button"?"button":void 0,children:[e.jsxs("div",{className:"fn-term-list__header",children:[e.jsx("h3",{className:"fn-term-list__term",children:k(r.term,c)}),i&&r.category&&e.jsx("span",{className:"fn-term-list__category",children:r.category}),(d||r.href)&&e.jsx("span",{className:"fn-term-list__arrow",children:e.jsx(D,{})}),a&&e.jsx("span",{className:"fn-term-list__expand",children:e.jsx(A,{})})]}),e.jsx("p",{className:"fn-term-list__definition",children:k(r.definition,c)}),s==="detailed"&&r.description&&e.jsx("p",{className:"fn-term-list__description",children:r.description}),s==="detailed"&&r.relatedTerms&&r.relatedTerms.length>0&&e.jsxs("div",{className:"fn-term-list__related",children:[e.jsxs("span",{className:"fn-term-list__related-label",children:[e.jsx(N,{})," Related:"]}),r.relatedTerms.map((j,W)=>e.jsx("span",{className:"fn-term-list__related-term",children:j},W))]})]},r.id)};if(l){const r=L(t);return e.jsx("div",{className:S,children:[...r.entries()].map(([n,j])=>e.jsxs("div",{className:"fn-term-list__group",children:[e.jsx("h2",{className:"fn-term-list__letter",id:`letter-${n}`,children:n}),e.jsx("div",{className:"fn-term-list__items",children:j.map(C)})]},n))})}return e.jsx("div",{className:S,children:e.jsx("div",{className:"fn-term-list__items",children:t.map(C)})})}T.__docgenInfo={description:`TermList - Displays a list of glossary terms with definitions

Used in the Terminology Dictionary to display terms grouped by letter.`,methods:[],displayName:"TermList",props:{terms:{required:!0,tsType:{name:"Array",elements:[{name:"Term"}],raw:"Term[]"},description:"List of terms"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'detailed' | 'cards'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'detailed'"},{name:"literal",value:"'cards'"}]},description:"List variant",defaultValue:{value:"'default'",computed:!1}},groupByLetter:{required:!1,tsType:{name:"boolean"},description:"Group by first letter",defaultValue:{value:"false",computed:!1}},showCategory:{required:!1,tsType:{name:"boolean"},description:"Show category badges",defaultValue:{value:"true",computed:!1}},expandable:{required:!1,tsType:{name:"boolean"},description:"Expandable definitions",defaultValue:{value:"false",computed:!1}},highlightQuery:{required:!1,tsType:{name:"string"},description:"Search highlight query"},onTermClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(term: Term) => void",signature:{arguments:[{type:{name:"Term"},name:"term"}],return:{name:"void"}}},description:"Click handler for terms"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const M={title:"Content/TermList",component:T,parameters:{layout:"padded",docs:{description:{component:"Displays a list of glossary terms with definitions. Used in the Terminology Dictionary."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","detailed","cards"],description:"List variant"},groupByLetter:{control:"boolean",description:"Group terms by first letter"},showCategory:{control:"boolean",description:"Show category badges"},expandable:{control:"boolean",description:"Expandable definitions"}}},o=[{id:"1",term:"API",definition:"Application Programming Interface - a set of protocols and tools for building software applications.",category:"Development",href:"/glossary/api"},{id:"2",term:"Backlog",definition:"A prioritized list of work items (user stories, bugs, tasks) that a development team maintains.",category:"Agile",relatedTerms:["Sprint","User Story","Kanban"]},{id:"3",term:"CI/CD",definition:"Continuous Integration and Continuous Deployment - practices that enable frequent code changes with automated testing and deployment.",description:"CI/CD pipelines automate the process of building, testing, and deploying code changes, reducing manual errors and enabling faster release cycles.",category:"DevOps",relatedTerms:["Pipeline","Automation","Testing"]},{id:"4",term:"MCP",definition:"Model Context Protocol - a protocol for communication between AI models and external systems.",category:"AI/ML",href:"/glossary/mcp"},{id:"5",term:"MVP",definition:"Minimum Viable Product - a product with just enough features to satisfy early customers and provide feedback for future development.",category:"Product",relatedTerms:["MLP","RAT","Prototype"]},{id:"6",term:"SDD",definition:"Specification-Driven Development - a methodology that emphasizes writing detailed specifications before implementation.",description:"SDD ensures that all stakeholders have a clear understanding of requirements before development begins, reducing rework and miscommunication.",category:"Methodology",relatedTerms:["TDD","BDD","Specification"]}],b=[...o,{id:"7",term:"Agile",definition:"An iterative approach to project management and software development that helps teams deliver value faster.",category:"Methodology"},{id:"8",term:"Agent",definition:"An autonomous AI entity that can perform tasks and make decisions based on its programming and environment.",category:"AI/ML"},{id:"9",term:"Solopreneur",definition:"An entrepreneur who runs their business alone, without partners or employees.",category:"Business"},{id:"10",term:"Sprint",definition:"A fixed-length iteration (usually 1-4 weeks) in which a development team completes a set of work.",category:"Agile"}],m={args:{terms:o},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},p={args:{terms:o,variant:"compact"},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},u={args:{terms:o,variant:"detailed"},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},h={args:{terms:o,variant:"cards",onTermClick:t=>console.log("Clicked:",t)},decorators:[t=>e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(t,{})})]},g={args:{terms:b,groupByLetter:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},f={args:{terms:o,highlightQuery:"development"},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},y={args:{terms:o,showCategory:!1},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},x={args:{terms:o,onTermClick:t=>alert(`Clicked: ${t.term}`)},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},v={render:()=>e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",fontWeight:700,color:"#1C1C1E",margin:"0 0 8px"},children:"Terminology Dictionary"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"16px",color:"#4A4A4A",margin:0},children:"50+ terms and definitions used throughout the Faion Network platform"})]}),e.jsx("div",{style:{marginBottom:"24px"},children:e.jsx("input",{type:"search",placeholder:"Search terms...",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"8px",fontFamily:"Inter, sans-serif",fontSize:"15px"}})}),e.jsx(T,{terms:b,groupByLetter:!0,variant:"default",onTermClick:t=>console.log("Navigate to:",t.href)})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    terms: mockTerms
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    terms: mockTerms,
    variant: 'compact'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    terms: mockTerms,
    variant: 'detailed'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    terms: mockTerms,
    variant: 'cards',
    onTermClick: term => console.log('Clicked:', term)
  },
  decorators: [Story => <div style={{
    maxWidth: '900px'
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    terms: moreTerms,
    groupByLetter: true
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    terms: mockTerms,
    highlightQuery: 'development'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    terms: mockTerms,
    showCategory: false
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    terms: mockTerms,
    onTermClick: term => alert(\`Clicked: \${term.term}\`)
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '800px'
  }}>
      <div style={{
      marginBottom: '32px'
    }}>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        fontWeight: 700,
        color: '#1C1C1E',
        margin: '0 0 8px'
      }}>
          Terminology Dictionary
        </h1>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        color: '#4A4A4A',
        margin: 0
      }}>
          50+ terms and definitions used throughout the Faion Network platform
        </p>
      </div>

      {/* Search */}
      <div style={{
      marginBottom: '24px'
    }}>
        <input type="search" placeholder="Search terms..." style={{
        width: '100%',
        padding: '12px 16px',
        border: '1px solid #E5E5E0',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px'
      }} />
      </div>

      {/* Terms */}
      <TermList terms={moreTerms} groupByLetter={true} variant="default" onTermClick={term => console.log('Navigate to:', term.href)} />
    </div>
}`,...v.parameters?.docs?.source}}};const P=["Default","Compact","Detailed","Cards","GroupedByLetter","WithHighlight","WithoutCategories","Clickable","InGlossaryPage"];export{h as Cards,x as Clickable,p as Compact,m as Default,u as Detailed,g as GroupedByLetter,v as InGlossaryPage,f as WithHighlight,y as WithoutCategories,P as __namedExportsOrder,M as default};
