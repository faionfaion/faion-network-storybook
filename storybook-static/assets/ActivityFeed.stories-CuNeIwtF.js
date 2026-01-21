import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function u({items:t,maxItems:r=5,showViewAll:f=!0,viewAllHref:n="/activity",className:o=""}){const a=["fn-activity-feed",o].filter(Boolean).join(" "),c=t.slice(0,r);return t.length===0?e.jsxs("div",{className:a,children:[e.jsx("h3",{className:"fn-activity-feed__title",children:"Recent Activity"}),e.jsxs("div",{className:"fn-activity-feed__empty",children:[e.jsx(v,{}),e.jsx("p",{children:"No activity yet. Start exploring to see your history here."})]})]}):e.jsxs("div",{className:a,children:[e.jsx("h3",{className:"fn-activity-feed__title",children:"Recent Activity"}),e.jsx("div",{className:"fn-activity-feed__list",children:c.map(i=>e.jsxs("div",{className:"fn-activity-feed__item",children:[e.jsx("div",{className:`fn-activity-feed__icon fn-activity-feed__icon--${i.type}`,children:e.jsx(y,{type:i.type})}),e.jsxs("div",{className:"fn-activity-feed__content",children:[i.href?e.jsx("a",{href:i.href,className:"fn-activity-feed__item-title",children:i.title}):e.jsx("span",{className:"fn-activity-feed__item-title",children:i.title}),i.description&&e.jsx("span",{className:"fn-activity-feed__item-description",children:i.description}),e.jsx("span",{className:"fn-activity-feed__timestamp",children:x(i.timestamp)})]})]},i.id))}),f&&t.length>r&&e.jsx("div",{className:"fn-activity-feed__footer",children:e.jsx("a",{href:n,className:"fn-activity-feed__view-all",children:"View all activity"})})]})}function y({type:t}){switch(t){case"read":return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),e.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]});case"completed":return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]});case"saved":return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})});case"started":return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polygon",{points:"10 8 16 12 10 16 10 8"})]});case"achievement":return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"8",r:"7"}),e.jsx("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"})]});default:return null}}function v(){return e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 6v6l4 2"})]})}function x(t){const r=new Date(t),n=new Date().getTime()-r.getTime(),o=Math.floor(n/(1e3*60)),a=Math.floor(n/(1e3*60*60)),c=Math.floor(n/(1e3*60*60*24));return o<1?"Just now":o<60?`${o}m ago`:a<24?`${a}h ago`:c<7?`${c}d ago`:r.toLocaleDateString("en-US",{month:"short",day:"numeric"})}u.__docgenInfo={description:`ActivityFeed - Shows recent user activity

Displays a timeline of recent actions like reading, completing, or saving content.`,methods:[],displayName:"ActivityFeed",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ActivityItem"}],raw:"ActivityItem[]"},description:"Activity items to display"},maxItems:{required:!1,tsType:{name:"number"},description:"Maximum items to show",defaultValue:{value:"5",computed:!1}},showViewAll:{required:!1,tsType:{name:"boolean"},description:'Show "View all" link',defaultValue:{value:"true",computed:!1}},viewAllHref:{required:!1,tsType:{name:"string"},description:"View all link href",defaultValue:{value:"'/activity'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const j={title:"UserDashboard/ActivityFeed",component:u,parameters:{layout:"padded",docs:{description:{component:"Displays a timeline of recent user activity like reading, completing, or saving content."}}},tags:["autodocs"]},s=new Date,h=[{id:"1",type:"completed",title:"SDD Workflow Overview",description:"Completed the methodology",href:"/methodologies/sdd-workflow-overview",timestamp:new Date(s.getTime()-900*1e3).toISOString()},{id:"2",type:"read",title:"RAG Pipeline Architecture",href:"/methodologies/rag-pipeline",timestamp:new Date(s.getTime()-7200*1e3).toISOString()},{id:"3",type:"saved",title:"GTM Strategy Framework",description:"Added to favorites",href:"/methodologies/gtm-strategy",timestamp:new Date(s.getTime()-300*60*1e3).toISOString()},{id:"4",type:"started",title:"Product Management Roadmap",description:"Started learning path",href:"/roadmaps/product-management",timestamp:new Date(s.getTime()-1440*60*1e3).toISOString()},{id:"5",type:"achievement",title:"First 10 Methodologies",description:"Unlocked achievement",timestamp:new Date(s.getTime()-4320*60*1e3).toISOString()},{id:"6",type:"read",title:"RICE Prioritization",href:"/methodologies/rice-prioritization",timestamp:new Date(s.getTime()-7200*60*1e3).toISOString()}],d={args:{items:h,maxItems:5,showViewAll:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},l={args:{items:h,maxItems:10,showViewAll:!1},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},m={args:{items:[]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},p={args:{items:h.slice(0,2),maxItems:5,showViewAll:!1},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    maxItems: 5,
    showViewAll: true
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    maxItems: 10,
    showViewAll: false
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems.slice(0, 2),
    maxItems: 5,
    showViewAll: false
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};const k=["Default","AllItems","Empty","FewItems"];export{l as AllItems,d as Default,m as Empty,p as FewItems,k as __namedExportsOrder,j as default};
