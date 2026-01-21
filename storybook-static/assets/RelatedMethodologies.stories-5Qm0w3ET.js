import{j as e}from"./iframe-B_omF_R9.js";/* empty css                             */import"./preload-helper-Ct5FWWRu.js";const p=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.333 8h9.334M9 4.667L12.667 8 9 11.333",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});function c({methodologies:o,title:l="Related Methodologies",className:d=""}){const m=["fn-related-methodologies",d].filter(Boolean).join(" ");return o.length===0?null:e.jsxs("div",{className:m,children:[e.jsx("h3",{className:"fn-related-methodologies__title",children:l}),e.jsx("ul",{className:"fn-related-methodologies__list",children:o.map(t=>{const g=t.href?"a":"div";return e.jsx("li",{className:"fn-related-methodologies__item",children:e.jsxs(g,{className:"fn-related-methodologies__link",...t.href?{href:t.href}:{},children:[e.jsxs("div",{className:"fn-related-methodologies__info",children:[e.jsx("span",{className:"fn-related-methodologies__category",children:t.category}),e.jsx("span",{className:"fn-related-methodologies__name",children:t.title})]}),t.href&&e.jsx("span",{className:"fn-related-methodologies__arrow",children:e.jsx(p,{})})]})},t.id)})})]})}c.__docgenInfo={description:`RelatedMethodologies - Related content links for MDX

Displays a list of related methodologies with category badges.
Useful for cross-linking content and improving navigation.`,methods:[],displayName:"RelatedMethodologies",props:{methodologies:{required:!0,tsType:{name:"Array",elements:[{name:"Methodology"}],raw:"Methodology[]"},description:"List of related methodologies"},title:{required:!1,tsType:{name:"string"},description:"Section title",defaultValue:{value:"'Related Methodologies'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const S={title:"MDX/RelatedMethodologies",component:c,parameters:{layout:"padded",docs:{description:{component:"Related content links for cross-referencing methodologies within articles."}}},tags:["autodocs"]},h=[{id:"M-PM-001",title:"MVP Planning",category:"Product",href:"/methodology/mvp-planning"},{id:"M-PM-005",title:"User Story Mapping",category:"Product",href:"/methodology/user-story-mapping"},{id:"M-PM-012",title:"RICE Prioritization",category:"Product",href:"/methodology/rice-prioritization"}],u=[{id:"M-RES-003",title:"Market Research",category:"Research",href:"/methodology/market-research"},{id:"M-DEV-045",title:"API Design",category:"Development",href:"/methodology/api-design"},{id:"M-MKT-012",title:"GTM Strategy",category:"Marketing",href:"/methodology/gtm-strategy"},{id:"M-UX-008",title:"User Research",category:"UX Design",href:"/methodology/user-research"}],y=[{id:"M-SDD-001",title:"SDD Workflow Overview",category:"SDD",href:"/methodology/sdd-workflow-overview"},{id:"M-SDD-002",title:"Writing Specifications",category:"SDD",href:"/methodology/writing-specifications"},{id:"M-SDD-003",title:"Design Documents",category:"SDD",href:"/methodology/design-documents"},{id:"M-SDD-004",title:"Implementation Plans",category:"SDD",href:"/methodology/implementation-plans"},{id:"M-SDD-005",title:"Task Execution",category:"SDD",href:"/methodology/task-execution"}],r={args:{methodologies:h},decorators:[o=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(o,{})})]},i={args:{methodologies:u,title:"Explore Related Topics"},decorators:[o=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(o,{})})]},s={args:{methodologies:y,title:"SDD Methodology Series"},decorators:[o=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(o,{})})]},a={args:{methodologies:h.map(({id:o,title:l,category:d})=>({id:o,title:l,category:d}))},decorators:[o=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(o,{})})]},n={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",marginBottom:"16px",color:"#1C1C1E"},children:"Building Your First MVP"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"The MVP (Minimum Viable Product) approach allows you to test your core hypothesis with minimal investment. This methodology guide will walk you through the process step by step."}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"Before diving in, make sure you have completed your market research and have a clear understanding of your target users."}),e.jsx(c,{methodologies:[{id:"M-RES-003",title:"Market Research",category:"Research",href:"#"},{id:"M-PM-005",title:"User Story Mapping",category:"Product",href:"#"},{id:"M-UX-001",title:"User Personas",category:"UX Design",href:"#"}],title:"Prerequisites"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginTop:"24px"},children:"Once you have completed the MVP, continue with these methodologies to iterate and improve your product."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    methodologies: productMethodologies
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    methodologies: mixedMethodologies,
    title: 'Explore Related Topics'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    methodologies: sddMethodologies,
    title: 'SDD Methodology Series'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    methodologies: productMethodologies.map(({
      id,
      title,
      category
    }) => ({
      id,
      title,
      category
    }))
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        Building Your First MVP
      </h2>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        The MVP (Minimum Viable Product) approach allows you to test your core hypothesis
        with minimal investment. This methodology guide will walk you through the process
        step by step.
      </p>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Before diving in, make sure you have completed your market research and have a clear
        understanding of your target users.
      </p>

      <RelatedMethodologies methodologies={[{
      id: 'M-RES-003',
      title: 'Market Research',
      category: 'Research',
      href: '#'
    }, {
      id: 'M-PM-005',
      title: 'User Story Mapping',
      category: 'Product',
      href: '#'
    }, {
      id: 'M-UX-001',
      title: 'User Personas',
      category: 'UX Design',
      href: '#'
    }]} title="Prerequisites" />

      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginTop: '24px'
    }}>
        Once you have completed the MVP, continue with these methodologies to iterate
        and improve your product.
      </p>
    </article>
}`,...n.parameters?.docs?.source}}};const D=["Default","MixedCategories","SDDSeries","WithoutLinks","InArticle"];export{r as Default,n as InArticle,i as MixedCategories,s as SDDSeries,a as WithoutLinks,D as __namedExportsOrder,S as default};
