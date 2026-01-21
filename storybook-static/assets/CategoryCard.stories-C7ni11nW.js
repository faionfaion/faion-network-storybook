import{j as e}from"./iframe-B_omF_R9.js";/* empty css                     */import"./preload-helper-Ct5FWWRu.js";const M=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M3 3h7v7H3z"}),e.jsx("path",{d:"M14 3h7v7h-7z"}),e.jsx("path",{d:"M14 14h7v7h-7z"}),e.jsx("path",{d:"M3 14h7v7H3z"})]}),k=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]});function n({name:r,description:a,count:o,icon:f,variant:j="default",onClick:v,href:C,showArrow:w=!0,className:A=""}){const I=["fn-category-card",`fn-category-card--${j}`,A].filter(Boolean).join(" "),D=t=>{v&&(t.preventDefault(),v())},P=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),v?.())},S=j==="compact"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fn-category-card__icon",children:f||e.jsx(M,{})}),e.jsxs("div",{className:"fn-category-card__content",children:[e.jsxs("div",{className:"fn-category-card__header",children:[e.jsx("h3",{className:"fn-category-card__name",children:r}),o!==void 0&&e.jsx("span",{className:"fn-category-card__count",children:o})]}),a&&e.jsx("p",{className:"fn-category-card__description",children:a})]}),w&&e.jsx("div",{className:"fn-category-card__arrow",children:e.jsx(k,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fn-category-card__icon",children:f||e.jsx(M,{})}),e.jsxs("div",{className:"fn-category-card__header",children:[e.jsx("h3",{className:"fn-category-card__name",children:r}),o!==void 0&&e.jsx("span",{className:"fn-category-card__count",children:o})]}),a&&e.jsx("p",{className:"fn-category-card__description",children:a}),w&&e.jsx("div",{className:"fn-category-card__arrow",children:e.jsx(k,{})})]});return C?e.jsx("a",{href:C,className:I,onClick:D,children:S}):e.jsx("article",{className:I,onClick:D,onKeyDown:P,role:"link",tabIndex:0,children:S})}n.__docgenInfo={description:`CategoryCard - Card for category overview

Displays category with icon, name, description, and item count.`,methods:[],displayName:"CategoryCard",props:{name:{required:!0,tsType:{name:"string"},description:"Category name"},description:{required:!1,tsType:{name:"string"},description:"Category description"},count:{required:!1,tsType:{name:"number"},description:"Item count (articles/methodologies)"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Category icon"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'featured'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'featured'"}]},description:"Card variant",defaultValue:{value:"'default'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},href:{required:!1,tsType:{name:"string"},description:"Link URL"},showArrow:{required:!1,tsType:{name:"boolean"},description:"Show arrow on hover",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const b={title:"Content/CategoryCard",component:n,parameters:{layout:"centered",docs:{description:{component:"Card component for category overview with icon, name, description, and count."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","featured"],description:"Card variant"},showArrow:{control:"boolean",description:"Show arrow on hover"}}},g=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),x=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),e.jsx("path",{d:"M2 17l10 5 10-5"}),e.jsx("path",{d:"M2 12l10 5 10-5"})]}),y=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),h=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),s={args:{name:"Development",description:"Python, JavaScript/TypeScript, backend, APIs, testing, and automation.",count:106,icon:e.jsx(g,{})},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},i={args:{name:"AI/ML",description:"LLM APIs, RAG pipelines, embeddings, and AI agents.",count:42,icon:e.jsx(x,{}),variant:"compact"},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},c={args:{name:"SDD Methodology",description:"Specification-Driven Development workflow from idea to implementation.",count:17,variant:"featured"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},d={args:{name:"Product Management",count:33,icon:e.jsx(y,{})},decorators:[r=>e.jsx("div",{style:{width:"280px"},children:e.jsx(r,{})})]},p={args:{name:"Marketing",description:"GTM strategy, landing pages, SEO, content marketing, and ads.",icon:e.jsx(h,{})},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px",maxWidth:"1000px"},children:[e.jsx(n,{name:"SDD",description:"Specification-Driven Development workflow.",count:17,variant:"featured"}),e.jsx(n,{name:"Development",description:"Full-stack development with Python, JavaScript, and TypeScript.",count:106,icon:e.jsx(g,{})}),e.jsx(n,{name:"AI/ML",description:"LLM APIs, RAG pipelines, embeddings, and AI agents.",count:42,icon:e.jsx(x,{})}),e.jsx(n,{name:"Product",description:"MVP planning, roadmaps, and user story mapping.",count:33,icon:e.jsx(y,{})}),e.jsx(n,{name:"Marketing",description:"GTM strategy, SEO, content marketing, and ads.",count:86,icon:e.jsx(h,{})}),e.jsx(n,{name:"DevOps",description:"Docker, Kubernetes, CI/CD, and infrastructure.",count:26})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"480px"},children:[e.jsx(n,{name:"Development",description:"Python, JS/TS, backend, APIs, testing",count:106,icon:e.jsx(g,{}),variant:"compact"}),e.jsx(n,{name:"AI/ML",description:"LLM APIs, RAG, embeddings, agents",count:42,icon:e.jsx(x,{}),variant:"compact"}),e.jsx(n,{name:"Product",description:"MVP, roadmaps, user stories",count:33,icon:e.jsx(y,{}),variant:"compact"}),e.jsx(n,{name:"Marketing",description:"GTM, SEO, content, ads",count:86,icon:e.jsx(h,{}),variant:"compact"})]})},u={render:()=>e.jsxs("div",{style:{width:"280px",padding:"24px",background:"#FAF9F6",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"16px",marginBottom:"16px",color:"#1C1C1E"},children:"Browse Categories"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{name:"SDD",count:17,variant:"compact",showArrow:!1}),e.jsx(n,{name:"Development",count:106,icon:e.jsx(g,{}),variant:"compact",showArrow:!1}),e.jsx(n,{name:"AI/ML",count:42,icon:e.jsx(x,{}),variant:"compact",showArrow:!1})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Development',
    description: 'Python, JavaScript/TypeScript, backend, APIs, testing, and automation.',
    count: 106,
    icon: <DevelopmentIcon />
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'AI/ML',
    description: 'LLM APIs, RAG pipelines, embeddings, and AI agents.',
    count: 42,
    icon: <AIIcon />,
    variant: 'compact'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'SDD Methodology',
    description: 'Specification-Driven Development workflow from idea to implementation.',
    count: 17,
    variant: 'featured'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Product Management',
    count: 33,
    icon: <ProductIcon />
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Marketing',
    description: 'GTM strategy, landing pages, SEO, content marketing, and ads.',
    icon: <MarketingIcon />
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    maxWidth: '1000px'
  }}>
      <CategoryCard name="SDD" description="Specification-Driven Development workflow." count={17} variant="featured" />
      <CategoryCard name="Development" description="Full-stack development with Python, JavaScript, and TypeScript." count={106} icon={<DevelopmentIcon />} />
      <CategoryCard name="AI/ML" description="LLM APIs, RAG pipelines, embeddings, and AI agents." count={42} icon={<AIIcon />} />
      <CategoryCard name="Product" description="MVP planning, roadmaps, and user story mapping." count={33} icon={<ProductIcon />} />
      <CategoryCard name="Marketing" description="GTM strategy, SEO, content marketing, and ads." count={86} icon={<MarketingIcon />} />
      <CategoryCard name="DevOps" description="Docker, Kubernetes, CI/CD, and infrastructure." count={26} />
    </div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '480px'
  }}>
      <CategoryCard name="Development" description="Python, JS/TS, backend, APIs, testing" count={106} icon={<DevelopmentIcon />} variant="compact" />
      <CategoryCard name="AI/ML" description="LLM APIs, RAG, embeddings, agents" count={42} icon={<AIIcon />} variant="compact" />
      <CategoryCard name="Product" description="MVP, roadmaps, user stories" count={33} icon={<ProductIcon />} variant="compact" />
      <CategoryCard name="Marketing" description="GTM, SEO, content, ads" count={86} icon={<MarketingIcon />} variant="compact" />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px',
    padding: '24px',
    background: '#FAF9F6',
    borderRadius: '8px'
  }}>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '16px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Browse Categories
      </h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <CategoryCard name="SDD" count={17} variant="compact" showArrow={false} />
        <CategoryCard name="Development" count={106} icon={<DevelopmentIcon />} variant="compact" showArrow={false} />
        <CategoryCard name="AI/ML" count={42} icon={<AIIcon />} variant="compact" showArrow={false} />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const N=["Default","Compact","Featured","NoDescription","NoCount","CategoryGrid","CompactList","InSidebar"];export{l as CategoryGrid,i as Compact,m as CompactList,s as Default,c as Featured,u as InSidebar,p as NoCount,d as NoDescription,N as __namedExportsOrder,b as default};
