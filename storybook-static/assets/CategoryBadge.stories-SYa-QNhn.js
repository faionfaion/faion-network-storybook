import{j as e}from"./iframe-B_omF_R9.js";/* empty css                      */import"./preload-helper-Ct5FWWRu.js";const w={product:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),development:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),ai:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),e.jsx("path",{d:"M2 17l10 5 10-5"}),e.jsx("path",{d:"M2 12l10 5 10-5"})]}),methodology:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})};function a({name:c,type:t="default",size:h="medium",clickable:j=!1,onClick:u,href:y,icon:C,showIcon:b=!1,className:k=""}){const v=j||!!u||!!y,g=["fn-category-badge",`fn-category-badge--${t}`,h!=="medium"&&`fn-category-badge--${h}`,v&&"fn-category-badge--clickable",k].filter(Boolean).join(" "),f=C||w[t],x=e.jsxs(e.Fragment,{children:[b&&f&&e.jsx("span",{className:"fn-category-badge__icon",children:f}),e.jsx("span",{children:c})]});return y?e.jsx("a",{href:y,className:g,onClick:u,children:x}):v?e.jsx("button",{type:"button",className:g,onClick:u,children:x}):e.jsx("span",{className:g,children:x})}a.__docgenInfo={description:`CategoryBadge - Color-coded category badge

Displays a category name with optional icon and color based on type.`,methods:[],displayName:"CategoryBadge",props:{name:{required:!0,tsType:{name:"string"},description:"Category name to display"},type:{required:!1,tsType:{name:"union",raw:`| 'product'
| 'business'
| 'marketing'
| 'development'
| 'devops'
| 'design'
| 'ai'
| 'methodology'
| 'tool'
| 'case-study'
| 'guide'
| 'research'
| 'project'
| 'sdd'
| 'default'`,elements:[{name:"literal",value:"'product'"},{name:"literal",value:"'business'"},{name:"literal",value:"'marketing'"},{name:"literal",value:"'development'"},{name:"literal",value:"'devops'"},{name:"literal",value:"'design'"},{name:"literal",value:"'ai'"},{name:"literal",value:"'methodology'"},{name:"literal",value:"'tool'"},{name:"literal",value:"'case-study'"},{name:"literal",value:"'guide'"},{name:"literal",value:"'research'"},{name:"literal",value:"'project'"},{name:"literal",value:"'sdd'"},{name:"literal",value:"'default'"}]},description:"Category type (for color)",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether badge is clickable",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},href:{required:!1,tsType:{name:"string"},description:"Link URL"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const I={title:"Content/CategoryBadge",component:a,parameters:{layout:"centered",docs:{description:{component:"Color-coded category badge for content items."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["product","business","marketing","development","devops","design","ai","methodology","tool","case-study","guide","research","project","sdd","default"],description:"Category type for color"},size:{control:"select",options:["small","medium","large"],description:"Size variant"},clickable:{control:"boolean",description:"Whether badge is clickable"},showIcon:{control:"boolean",description:"Show category icon"}}},n={args:{name:"Development",type:"development",size:"medium"}},o={render:()=>{const c=[{name:"Product",type:"product"},{name:"Business",type:"business"},{name:"Marketing",type:"marketing"},{name:"Development",type:"development"},{name:"DevOps",type:"devops"},{name:"Design",type:"design"},{name:"AI/ML",type:"ai"},{name:"Methodology",type:"methodology"},{name:"Tool",type:"tool"},{name:"Case Study",type:"case-study"},{name:"Guide",type:"guide"},{name:"Research",type:"research"},{name:"Project",type:"project"},{name:"SDD",type:"sdd"},{name:"Other",type:"default"}];return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",maxWidth:"600px"},children:c.map(t=>e.jsx(a,{name:t.name,type:t.type},t.type))})}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{name:"Small",type:"development",size:"small"}),e.jsx(a,{name:"Medium",type:"development",size:"medium"}),e.jsx(a,{name:"Large",type:"development",size:"large"})]})},s={args:{name:"Development",type:"development",clickable:!0,onClick:()=>alert("Clicked!")}},i={args:{name:"AI/ML",type:"ai",href:"#ai-ml"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{name:"Development",type:"development",showIcon:!0}),e.jsx(a,{name:"AI/ML",type:"ai",showIcon:!0}),e.jsx(a,{name:"Methodology",type:"methodology",showIcon:!0}),e.jsx(a,{name:"Product",type:"product",showIcon:!0})]})},d={render:()=>e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",maxWidth:"360px"},children:[e.jsx("div",{style:{marginBottom:"12px"},children:e.jsx(a,{name:"SDD",type:"sdd",size:"small"})}),e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"8px",color:"#1C1C1E"},children:"SDD Workflow Overview"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",lineHeight:1.5},children:"Learn the complete Specification-Driven Development workflow from idea to implementation."})]})},p={render:()=>e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",maxWidth:"400px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"12px",color:"#1C1C1E"},children:"Building a RAG Pipeline"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:[e.jsx(a,{name:"AI/ML",type:"ai",size:"small"}),e.jsx(a,{name:"Development",type:"development",size:"small"}),e.jsx(a,{name:"Guide",type:"guide",size:"small"})]}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",lineHeight:1.5},children:"Step-by-step guide to building production-ready RAG systems with vector databases."})]})},m={args:{name:"Custom",type:"default",showIcon:!0,icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Development',
    type: 'development',
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const categories: {
      name: string;
      type: CategoryType;
    }[] = [{
      name: 'Product',
      type: 'product'
    }, {
      name: 'Business',
      type: 'business'
    }, {
      name: 'Marketing',
      type: 'marketing'
    }, {
      name: 'Development',
      type: 'development'
    }, {
      name: 'DevOps',
      type: 'devops'
    }, {
      name: 'Design',
      type: 'design'
    }, {
      name: 'AI/ML',
      type: 'ai'
    }, {
      name: 'Methodology',
      type: 'methodology'
    }, {
      name: 'Tool',
      type: 'tool'
    }, {
      name: 'Case Study',
      type: 'case-study'
    }, {
      name: 'Guide',
      type: 'guide'
    }, {
      name: 'Research',
      type: 'research'
    }, {
      name: 'Project',
      type: 'project'
    }, {
      name: 'SDD',
      type: 'sdd'
    }, {
      name: 'Other',
      type: 'default'
    }];
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      maxWidth: '600px'
    }}>
        {categories.map(cat => <CategoryBadge key={cat.type} name={cat.name} type={cat.type} />)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <CategoryBadge name="Small" type="development" size="small" />
      <CategoryBadge name="Medium" type="development" size="medium" />
      <CategoryBadge name="Large" type="development" size="large" />
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Development',
    type: 'development',
    clickable: true,
    onClick: () => alert('Clicked!')
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'AI/ML',
    type: 'ai',
    href: '#ai-ml'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <CategoryBadge name="Development" type="development" showIcon />
      <CategoryBadge name="AI/ML" type="ai" showIcon />
      <CategoryBadge name="Methodology" type="methodology" showIcon />
      <CategoryBadge name="Product" type="product" showIcon />
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    background: '#FFFFFF',
    border: '1px solid #E5E5E0',
    borderRadius: '8px',
    maxWidth: '360px'
  }}>
      <div style={{
      marginBottom: '12px'
    }}>
        <CategoryBadge name="SDD" type="sdd" size="small" />
      </div>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      marginBottom: '8px',
      color: '#1C1C1E'
    }}>
        SDD Workflow Overview
      </h3>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      lineHeight: 1.5
    }}>
        Learn the complete Specification-Driven Development workflow from idea to implementation.
      </p>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    background: '#FFFFFF',
    border: '1px solid #E5E5E0',
    borderRadius: '8px',
    maxWidth: '400px'
  }}>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      marginBottom: '12px',
      color: '#1C1C1E'
    }}>
        Building a RAG Pipeline
      </h3>
      <div style={{
      display: 'flex',
      gap: '8px',
      marginBottom: '12px'
    }}>
        <CategoryBadge name="AI/ML" type="ai" size="small" />
        <CategoryBadge name="Development" type="development" size="small" />
        <CategoryBadge name="Guide" type="guide" size="small" />
      </div>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      lineHeight: 1.5
    }}>
        Step-by-step guide to building production-ready RAG systems with vector databases.
      </p>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Custom',
    type: 'default',
    showIcon: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
  }
}`,...m.parameters?.docs?.source}}};const A=["Default","AllCategories","AllSizes","Clickable","WithLink","WithIcon","InArticleCard","MultipleBadges","CustomIcon"];export{o as AllCategories,r as AllSizes,s as Clickable,m as CustomIcon,n as Default,d as InArticleCard,p as MultipleBadges,l as WithIcon,i as WithLink,A as __namedExportsOrder,I as default};
