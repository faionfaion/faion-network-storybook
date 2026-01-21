import{r as i,j as e}from"./iframe-B_omF_R9.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";const M=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})});function L(o){const r=o.querySelectorAll("h2, h3, h4"),p=[];return r.forEach(a=>{const u=a.id||a.textContent?.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"")||"",c=a.textContent||"",j=parseInt(a.tagName.charAt(1),10);u&&c&&(a.id||(a.id=u),p.push({id:u,text:c,level:j}))}),p}function A({headings:o,containerRef:r,autoExtract:p=!1,title:a="On this page",sticky:u=!0,showProgress:c=!1,defaultCollapsed:j=!1,scrollOffset:h=100,onActiveChange:O,className:D=""}){const[g,R]=i.useState(o||[]),[B,W]=i.useState(null),[f,N]=i.useState(j),[_,G]=i.useState(0),T=i.useRef(null);i.useEffect(()=>{if(p&&r?.current){const t=L(r.current);R(t)}else o&&R(o)},[p,r,o]),i.useEffect(()=>{if(g.length===0)return;const t=s=>{const n=s.filter(l=>l.isIntersecting);if(n.length>0){const m=n.sort((S,E)=>{const I=S.boundingClientRect,H=E.boundingClientRect;return I.top-H.top})[0].target.id;W(m),O?.(m)}};return T.current=new IntersectionObserver(t,{rootMargin:`-${h}px 0px -70% 0px`,threshold:0}),g.forEach(s=>{const n=document.getElementById(s.id);n&&T.current?.observe(n)}),()=>{T.current?.disconnect()}},[g,h,O]),i.useEffect(()=>{if(!c||!r?.current)return;const t=()=>{const s=r.current;if(!s)return;const n=s.getBoundingClientRect(),l=window.innerHeight,m=n.top,S=n.height,E=Math.max(0,-m+l*.5),I=S-l*.5,H=Math.min(100,Math.max(0,E/I*100));G(H)};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t)}},[c,r]);const z=i.useCallback((t,s)=>{t.preventDefault();const n=document.getElementById(s);if(n){const l=n.getBoundingClientRect().top+window.scrollY-h;window.scrollTo({top:l,behavior:"smooth"})}},[h]),q=()=>{N(!f)};if(g.length===0)return null;const P=["fn-toc",u&&"fn-toc--sticky",f&&"fn-toc--collapsed",D].filter(Boolean).join(" ");return e.jsxs("nav",{className:P,"aria-label":"Table of contents",children:[e.jsxs("div",{className:"fn-toc__header",children:[e.jsx("h4",{className:"fn-toc__title",children:a}),e.jsx("button",{className:"fn-toc__toggle",onClick:q,"aria-expanded":!f,"aria-label":f?"Expand table of contents":"Collapse table of contents",children:e.jsx(M,{})})]}),e.jsx("ul",{className:"fn-toc__nav",children:g.map(t=>e.jsx("li",{className:`fn-toc__item fn-toc__item--level-${t.level}`,children:e.jsx("a",{href:`#${t.id}`,className:`fn-toc__link ${B===t.id?"fn-toc__link--active":""}`,onClick:s=>z(s,t.id),children:t.text})},t.id))}),c&&e.jsx("div",{className:"fn-toc__progress",role:"progressbar","aria-valuenow":_,children:e.jsx("div",{className:"fn-toc__progress-bar",style:{width:`${_}%`}})})]})}A.__docgenInfo={description:`TableOfContents - Scrollspy navigation sidebar

Displays a list of headings and highlights the current section as user scrolls.`,methods:[],displayName:"TableOfContents",props:{headings:{required:!1,tsType:{name:"Array",elements:[{name:"TocHeading"}],raw:"TocHeading[]"},description:"List of headings to display"},containerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Container element to observe (for auto-extraction)"},autoExtract:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-extract headings from containerRef",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Title for the TOC",defaultValue:{value:"'On this page'",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"Whether to use sticky positioning",defaultValue:{value:"true",computed:!1}},showProgress:{required:!1,tsType:{name:"boolean"},description:"Whether to show reading progress",defaultValue:{value:"false",computed:!1}},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"Initial collapsed state (for mobile)",defaultValue:{value:"false",computed:!1}},scrollOffset:{required:!1,tsType:{name:"number"},description:"Offset for scroll calculations (e.g., for fixed header)",defaultValue:{value:"100",computed:!1}},onActiveChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"id"}],return:{name:"void"}}},description:"Callback when active heading changes"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const J={title:"Content/TableOfContents",component:A,parameters:{layout:"padded",docs:{description:{component:"Scrollspy navigation sidebar that highlights the current section as user scrolls."}}},tags:["autodocs"],argTypes:{sticky:{control:"boolean",description:"Whether to use sticky positioning"},showProgress:{control:"boolean",description:"Whether to show reading progress"},defaultCollapsed:{control:"boolean",description:"Initial collapsed state"},title:{control:"text",description:"Title for the TOC"}}},d=[{id:"introduction",text:"Introduction",level:2},{id:"getting-started",text:"Getting Started",level:2},{id:"installation",text:"Installation",level:3},{id:"configuration",text:"Configuration",level:3},{id:"core-concepts",text:"Core Concepts",level:2},{id:"specifications",text:"Specifications",level:3},{id:"design-documents",text:"Design Documents",level:3},{id:"tasks",text:"Tasks",level:3},{id:"advanced-topics",text:"Advanced Topics",level:2},{id:"custom-agents",text:"Custom Agents",level:3},{id:"integrations",text:"Integrations",level:3},{id:"conclusion",text:"Conclusion",level:2}],x={args:{headings:d,title:"On this page",sticky:!1}},y={args:{headings:d,title:"On this page",sticky:!1,showProgress:!0}},v={args:{headings:d,title:"On this page",sticky:!1,defaultCollapsed:!0}},C={args:{headings:d,title:"Table of Contents",sticky:!1}},b={args:{headings:[{id:"overview",text:"Overview",level:2},{id:"usage",text:"Usage",level:2},{id:"api",text:"API Reference",level:2}],title:"On this page",sticky:!1}},w={args:{headings:[{id:"chapter-1",text:"Chapter 1: Introduction",level:2},{id:"section-1-1",text:"Background",level:3},{id:"subsection-1-1-1",text:"Historical Context",level:4},{id:"section-1-2",text:"Motivation",level:3},{id:"chapter-2",text:"Chapter 2: Methodology",level:2},{id:"section-2-1",text:"Research Design",level:3},{id:"section-2-2",text:"Data Collection",level:3},{id:"subsection-2-2-1",text:"Survey Instruments",level:4},{id:"chapter-3",text:"Chapter 3: Results",level:2}],title:"Contents",sticky:!1}},V=()=>{const o=i.useRef(null);return e.jsxs("div",{style:{display:"flex",gap:"48px",maxWidth:"1200px"},children:[e.jsx(A,{headings:d,containerRef:o,showProgress:!0,sticky:!1}),e.jsxs("div",{ref:o,style:{flex:1,fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{id:"introduction",style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E"},children:"Introduction"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"32px"},children:"Welcome to the Faion Network documentation. This guide will walk you through everything you need to know to get started with Specification-Driven Development."}),e.jsx("h2",{id:"getting-started",style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E"},children:"Getting Started"}),e.jsx("h3",{id:"installation",style:{fontFamily:"Georgia, serif",fontSize:"22px",color:"#1C1C1E"},children:"Installation"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"To get started, you will need to configure your Claude Code settings to include the Faion Network MCP server."}),e.jsx("h3",{id:"configuration",style:{fontFamily:"Georgia, serif",fontSize:"22px",color:"#1C1C1E"},children:"Configuration"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"32px"},children:"Configure your settings.json file with your license key and preferred options."}),e.jsx("h2",{id:"core-concepts",style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E"},children:"Core Concepts"}),e.jsx("h3",{id:"specifications",style:{fontFamily:"Georgia, serif",fontSize:"22px",color:"#1C1C1E"},children:"Specifications"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"Specifications define what needs to be built, including requirements and acceptance criteria."}),e.jsx("h3",{id:"design-documents",style:{fontFamily:"Georgia, serif",fontSize:"22px",color:"#1C1C1E"},children:"Design Documents"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"Design documents explain how to implement the specification with technical details."}),e.jsx("h3",{id:"tasks",style:{fontFamily:"Georgia, serif",fontSize:"22px",color:"#1C1C1E"},children:"Tasks"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"32px"},children:"Tasks are atomic units of work that can be executed independently."}),e.jsx("h2",{id:"advanced-topics",style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E"},children:"Advanced Topics"}),e.jsx("h3",{id:"custom-agents",style:{fontFamily:"Georgia, serif",fontSize:"22px",color:"#1C1C1E"},children:"Custom Agents"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"Learn how to create custom agents for specialized workflows."}),e.jsx("h3",{id:"integrations",style:{fontFamily:"Georgia, serif",fontSize:"22px",color:"#1C1C1E"},children:"Integrations"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"32px"},children:"Connect Faion Network with your existing tools and services."}),e.jsx("h2",{id:"conclusion",style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E"},children:"Conclusion"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7},children:"You are now ready to start using Specification-Driven Development in your projects."})]})]})},k={render:()=>e.jsx(V,{})},F={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"280px 1fr",gap:"48px",maxWidth:"1200px",padding:"24px",background:"#FAF9F6",borderRadius:"8px"},children:[e.jsx("aside",{style:{background:"#FFFFFF",padding:"24px",borderRadius:"8px",border:"1px solid #E5E5E0"},children:e.jsx(A,{headings:d,title:"Contents",sticky:!1,showProgress:!0})}),e.jsxs("main",{style:{background:"#FFFFFF",padding:"32px",borderRadius:"8px",border:"1px solid #E5E5E0"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",color:"#1C1C1E",marginBottom:"16px"},children:"SDD Workflow Overview"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",lineHeight:1.7},children:"This is the main content area where your article content would appear. The table of contents on the left provides quick navigation to each section."})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    headings: sampleHeadings,
    title: 'On this page',
    sticky: false
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    headings: sampleHeadings,
    title: 'On this page',
    sticky: false,
    showProgress: true
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    headings: sampleHeadings,
    title: 'On this page',
    sticky: false,
    defaultCollapsed: true
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    headings: sampleHeadings,
    title: 'Table of Contents',
    sticky: false
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    headings: [{
      id: 'overview',
      text: 'Overview',
      level: 2
    }, {
      id: 'usage',
      text: 'Usage',
      level: 2
    }, {
      id: 'api',
      text: 'API Reference',
      level: 2
    }],
    title: 'On this page',
    sticky: false
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    headings: [{
      id: 'chapter-1',
      text: 'Chapter 1: Introduction',
      level: 2
    }, {
      id: 'section-1-1',
      text: 'Background',
      level: 3
    }, {
      id: 'subsection-1-1-1',
      text: 'Historical Context',
      level: 4
    }, {
      id: 'section-1-2',
      text: 'Motivation',
      level: 3
    }, {
      id: 'chapter-2',
      text: 'Chapter 2: Methodology',
      level: 2
    }, {
      id: 'section-2-1',
      text: 'Research Design',
      level: 3
    }, {
      id: 'section-2-2',
      text: 'Data Collection',
      level: 3
    }, {
      id: 'subsection-2-2-1',
      text: 'Survey Instruments',
      level: 4
    }, {
      id: 'chapter-3',
      text: 'Chapter 3: Results',
      level: 2
    }],
    title: 'Contents',
    sticky: false
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ArticleWithToc />
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: '48px',
    maxWidth: '1200px',
    padding: '24px',
    background: '#FAF9F6',
    borderRadius: '8px'
  }}>
      <aside style={{
      background: '#FFFFFF',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #E5E5E0'
    }}>
        <TableOfContents headings={sampleHeadings} title="Contents" sticky={false} showProgress={true} />
      </aside>
      <main style={{
      background: '#FFFFFF',
      padding: '32px',
      borderRadius: '8px',
      border: '1px solid #E5E5E0'
    }}>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#1C1C1E',
        marginBottom: '16px'
      }}>
          SDD Workflow Overview
        </h1>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A',
        lineHeight: 1.7
      }}>
          This is the main content area where your article content would appear.
          The table of contents on the left provides quick navigation to each section.
        </p>
      </main>
    </div>
}`,...F.parameters?.docs?.source}}};const K=["Default","WithProgress","Collapsed","CustomTitle","FewHeadings","DeeplyNested","WithArticle","InSidebarLayout"];export{v as Collapsed,C as CustomTitle,w as DeeplyNested,x as Default,b as FewHeadings,F as InSidebarLayout,k as WithArticle,y as WithProgress,K as __namedExportsOrder,J as default};
