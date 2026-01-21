import{j as e}from"./iframe-B_omF_R9.js";/* empty css                      */import"./preload-helper-Ct5FWWRu.js";const _=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e.jsx("line",{x1:"8",y1:"8",x2:"14",y2:"14"}),e.jsx("line",{x1:"14",y1:"8",x2:"8",y2:"14"})]});function j(t,r){return!r||!t?t:t.split(new RegExp(`(${r})`,"gi")).map((n,g)=>n.toLowerCase()===r.toLowerCase()?e.jsx("mark",{className:"fn-search-results__highlight",children:n},g):n)}function R(){return e.jsx("div",{className:"fn-search-results__loading",children:[1,2,3].map(t=>e.jsxs("div",{className:"fn-search-results__loading-item",children:[e.jsx("div",{className:"fn-search-results__loading-title"}),e.jsx("div",{className:"fn-search-results__loading-text"}),e.jsx("div",{className:"fn-search-results__loading-text fn-search-results__loading-text--short"})]},t))})}function y({results:t,query:r="",isLoading:f=!1,emptyTitle:n="No results found",emptyText:g="Try adjusting your search terms or browse our categories.",emptyState:v,showCount:w=!0,onResultClick:S,className:i=""}){return f?e.jsx("div",{className:`fn-search-results ${i}`,children:e.jsx(R,{})}):t.length===0?v?e.jsx("div",{className:`fn-search-results ${i}`,children:v}):e.jsx("div",{className:`fn-search-results ${i}`,children:e.jsxs("div",{className:"fn-search-results__empty",children:[e.jsx("div",{className:"fn-search-results__empty-icon",children:e.jsx(_,{})}),e.jsx("h3",{className:"fn-search-results__empty-title",children:n}),e.jsx("p",{className:"fn-search-results__empty-text",children:g})]})}):e.jsxs("div",{className:`fn-search-results ${i}`,children:[w&&e.jsx("div",{className:"fn-search-results__header",children:e.jsxs("span",{className:"fn-search-results__count",children:[e.jsx("strong",{children:t.length})," ",t.length===1?"result":"results",r&&` for "${r}"`]})}),e.jsx("ul",{className:"fn-search-results__list",children:t.map(s=>e.jsx("li",{className:"fn-search-results__item",children:e.jsxs("a",{href:s.href||"#",className:"fn-search-results__link",onClick:D=>{S&&(D.preventDefault(),S(s))},children:[e.jsx("div",{className:"fn-search-results__item-header",children:e.jsx("h3",{className:"fn-search-results__item-title",children:j(s.title,r)})}),s.excerpt&&e.jsx("p",{className:"fn-search-results__item-excerpt",children:j(s.excerpt,r)}),e.jsxs("div",{className:"fn-search-results__item-meta",children:[s.category&&e.jsx("span",{className:"fn-search-results__category",children:s.category}),s.meta&&e.jsx("span",{children:s.meta})]})]})},s.id))})]})}y.__docgenInfo={description:`SearchResults - Search results display component

Displays search results with highlighting, categories, and pagination.`,methods:[],displayName:"SearchResults",props:{results:{required:!0,tsType:{name:"Array",elements:[{name:"SearchResultItem"}],raw:"SearchResultItem[]"},description:"Search results"},query:{required:!1,tsType:{name:"string"},description:"Search query (for highlighting)",defaultValue:{value:"''",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether results are loading",defaultValue:{value:"false",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No results found'",computed:!1}},emptyText:{required:!1,tsType:{name:"string"},description:"Empty state text",defaultValue:{value:"'Try adjusting your search terms or browse our categories.'",computed:!1}},emptyState:{required:!1,tsType:{name:"ReactNode"},description:"Custom empty state"},showCount:{required:!1,tsType:{name:"boolean"},description:"Show results count",defaultValue:{value:"true",computed:!1}},onResultClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(result: SearchResultItem) => void",signature:{arguments:[{type:{name:"SearchResultItem"},name:"result"}],return:{name:"void"}}},description:"Result click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const b={title:"Content/SearchResults",component:y,parameters:{layout:"padded",docs:{description:{component:"Search results display component with highlighting, categories, and empty/loading states."}}},tags:["autodocs"],argTypes:{isLoading:{control:"boolean",description:"Loading state"},showCount:{control:"boolean",description:"Show results count"}}},a=[{id:"1",title:"SDD Workflow Overview",excerpt:"Learn the complete Specification-Driven Development workflow from idea to implementation. This methodology covers all phases of the development lifecycle.",category:"Methodology",meta:"8 min read",href:"#"},{id:"2",title:"Writing Specifications with SMART Criteria",excerpt:"Create effective specifications using the SMART framework. Learn how to write clear, measurable, and achievable requirements.",category:"SDD",meta:"12 min read",href:"#"},{id:"3",title:"SDD Task Creation and Parallelization",excerpt:"Break down your implementation into parallel tasks. Learn how to identify dependencies and optimize your workflow.",category:"SDD",meta:"15 min read",href:"#"},{id:"4",title:"Design Documents Best Practices",excerpt:"Write effective design documents that bridge specifications and implementation. Includes templates and real examples.",category:"Development",meta:"10 min read",href:"#"}],o={args:{results:a,query:"SDD",showCount:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]},l={args:{results:a,query:"specification",showCount:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]},d={args:{results:[],isLoading:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]},c={args:{results:[],query:"xyznonexistent",emptyTitle:"No results found",emptyText:"Try adjusting your search terms or browse our categories."},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]},p={args:{results:a,query:"SDD",showCount:!1},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]},u={args:{results:[a[0]],query:"workflow",showCount:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]},m={args:{results:[],emptyState:e.jsxs("div",{style:{textAlign:"center",padding:"48px 24px"},children:[e.jsx("div",{style:{width:"80px",height:"80px",background:"#FAF9F6",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#5D1F2D",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]})}),e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"20px",marginBottom:"8px",color:"#1C1C1E"},children:"Start your search"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"16px"},children:"Enter a keyword to search through 502 methodologies."}),e.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap"},children:["SDD","RAG","MVP","DevOps"].map(t=>e.jsx("button",{style:{padding:"6px 12px",background:"#FAF9F6",border:"1px solid #E5E5E0",borderRadius:"4px",fontFamily:"Inter, sans-serif",fontSize:"13px",color:"#4A4A4A",cursor:"pointer"},children:t},t))})]})},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]},h={render:()=>e.jsxs("div",{style:{maxWidth:"720px"},children:[e.jsx("div",{style:{marginBottom:"24px"},children:e.jsx("input",{type:"search",placeholder:"Search methodologies...",defaultValue:"SDD",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"8px",fontFamily:"Inter, sans-serif",fontSize:"14px",outline:"none"}})}),e.jsx(y,{results:a,query:"SDD",showCount:!0})]})},x={args:{results:[...a,{id:"5",title:"RAG Pipeline Implementation",excerpt:"Build production-ready Retrieval Augmented Generation systems with vector databases.",category:"AI/ML",meta:"20 min read",href:"#"},{id:"6",title:"Prompt Engineering Patterns",excerpt:"Master the art of writing effective prompts for LLMs with proven patterns and techniques.",category:"AI/ML",meta:"18 min read",href:"#"},{id:"7",title:"Docker for Solopreneurs",excerpt:"Containerize your applications with Docker. Learn the fundamentals and best practices.",category:"DevOps",meta:"14 min read",href:"#"},{id:"8",title:"Landing Page Optimization",excerpt:"Increase conversions with proven landing page techniques and A/B testing strategies.",category:"Marketing",meta:"11 min read",href:"#"}],query:"",showCount:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"720px"},children:e.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    results: sampleResults,
    query: 'SDD',
    showCount: true
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    results: sampleResults,
    query: 'specification',
    showCount: true
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    results: [],
    isLoading: true
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    results: [],
    query: 'xyznonexistent',
    emptyTitle: 'No results found',
    emptyText: 'Try adjusting your search terms or browse our categories.'
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    results: sampleResults,
    query: 'SDD',
    showCount: false
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    results: [sampleResults[0]],
    query: 'workflow',
    showCount: true
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    results: [],
    emptyState: <div style={{
      textAlign: 'center',
      padding: '48px 24px'
    }}>
        <div style={{
        width: '80px',
        height: '80px',
        background: '#FAF9F6',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px'
      }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5D1F2D" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '20px',
        marginBottom: '8px',
        color: '#1C1C1E'
      }}>
          Start your search
        </h3>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        marginBottom: '16px'
      }}>
          Enter a keyword to search through 502 methodologies.
        </p>
        <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
          {['SDD', 'RAG', 'MVP', 'DevOps'].map(term => <button key={term} style={{
          padding: '6px 12px',
          background: '#FAF9F6',
          border: '1px solid #E5E5E0',
          borderRadius: '4px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#4A4A4A',
          cursor: 'pointer'
        }}>
              {term}
            </button>)}
        </div>
      </div>
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px'
  }}>
      <div style={{
      marginBottom: '24px'
    }}>
        <input type="search" placeholder="Search methodologies..." defaultValue="SDD" style={{
        width: '100%',
        padding: '12px 16px',
        border: '1px solid #E5E5E0',
        borderRadius: '8px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        outline: 'none'
      }} />
      </div>
      <SearchResults results={sampleResults} query="SDD" showCount={true} />
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    results: [...sampleResults, {
      id: '5',
      title: 'RAG Pipeline Implementation',
      excerpt: 'Build production-ready Retrieval Augmented Generation systems with vector databases.',
      category: 'AI/ML',
      meta: '20 min read',
      href: '#'
    }, {
      id: '6',
      title: 'Prompt Engineering Patterns',
      excerpt: 'Master the art of writing effective prompts for LLMs with proven patterns and techniques.',
      category: 'AI/ML',
      meta: '18 min read',
      href: '#'
    }, {
      id: '7',
      title: 'Docker for Solopreneurs',
      excerpt: 'Containerize your applications with Docker. Learn the fundamentals and best practices.',
      category: 'DevOps',
      meta: '14 min read',
      href: '#'
    }, {
      id: '8',
      title: 'Landing Page Optimization',
      excerpt: 'Increase conversions with proven landing page techniques and A/B testing strategies.',
      category: 'Marketing',
      meta: '11 min read',
      href: '#'
    }],
    query: '',
    showCount: true
  },
  decorators: [Story => <div style={{
    maxWidth: '720px'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};const W=["Default","WithHighlighting","Loading","Empty","NoCount","SingleResult","CustomEmptyState","WithSearchBar","ManyResults"];export{m as CustomEmptyState,o as Default,c as Empty,d as Loading,x as ManyResults,p as NoCount,u as SingleResult,l as WithHighlighting,h as WithSearchBar,W as __namedExportsOrder,b as default};
