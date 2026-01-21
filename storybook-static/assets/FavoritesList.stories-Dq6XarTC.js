import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function m({items:s,maxItems:l=5,onRemove:d,showViewAll:v=!0,viewAllHref:f="/favorites",className:p=""}){const c=["fn-favorites-list",p].filter(Boolean).join(" "),h=s.slice(0,l);return s.length===0?e.jsxs("div",{className:c,children:[e.jsx("h3",{className:"fn-favorites-list__title",children:"Favorites"}),e.jsxs("div",{className:"fn-favorites-list__empty",children:[e.jsx(u,{}),e.jsx("p",{children:"No favorites yet. Save methodologies to access them quickly."})]})]}):e.jsxs("div",{className:c,children:[e.jsx("h3",{className:"fn-favorites-list__title",children:"Favorites"}),e.jsx("div",{className:"fn-favorites-list__items",children:h.map(t=>e.jsxs("div",{className:"fn-favorites-list__item",children:[e.jsxs("a",{href:t.href,className:"fn-favorites-list__item-link",children:[e.jsx("span",{className:"fn-favorites-list__item-title",children:t.title}),e.jsx("span",{className:"fn-favorites-list__item-category",children:t.category})]}),d&&e.jsx("button",{type:"button",className:"fn-favorites-list__remove",onClick:()=>d(t.id),"aria-label":`Remove ${t.title} from favorites`,children:e.jsx(x,{})})]},t.id))}),v&&s.length>l&&e.jsx("div",{className:"fn-favorites-list__footer",children:e.jsxs("a",{href:f,className:"fn-favorites-list__view-all",children:["View all ",s.length," favorites"]})})]})}function u(){return e.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})})}function x(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}m.__docgenInfo={description:`FavoritesList - Shows user's saved/favorited content

Displays a list of bookmarked methodologies or articles.`,methods:[],displayName:"FavoritesList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"FavoriteItem"}],raw:"FavoriteItem[]"},description:"Favorite items to display"},maxItems:{required:!1,tsType:{name:"number"},description:"Maximum items to show",defaultValue:{value:"5",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Handler for removing a favorite"},showViewAll:{required:!1,tsType:{name:"boolean"},description:'Show "View all" link',defaultValue:{value:"true",computed:!1}},viewAllHref:{required:!1,tsType:{name:"string"},description:"View all link href",defaultValue:{value:"'/favorites'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const w={title:"UserDashboard/FavoritesList",component:m,parameters:{layout:"padded",docs:{description:{component:"Displays user's saved/favorited content with remove functionality."}}},tags:["autodocs"]},n=[{id:"1",title:"SDD Workflow Overview",category:"SDD Methodology",href:"/methodologies/sdd-workflow-overview"},{id:"2",title:"RAG Pipeline Architecture",category:"ML Engineering",href:"/methodologies/rag-pipeline"},{id:"3",title:"GTM Strategy Framework",category:"Marketing",href:"/methodologies/gtm-strategy"},{id:"4",title:"RICE Prioritization",category:"Product Management",href:"/methodologies/rice-prioritization"},{id:"5",title:"User Story Mapping",category:"Business Analysis",href:"/methodologies/user-story-mapping"},{id:"6",title:"Docker Fundamentals",category:"DevOps",href:"/methodologies/docker-fundamentals"}],o={args:{items:n,maxItems:5,showViewAll:!0,onRemove:s=>console.log("Remove:",s)},decorators:[s=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})]},r={args:{items:n.slice(0,4),maxItems:5,showViewAll:!1},decorators:[s=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})]},i={args:{items:[]},decorators:[s=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})]},a={args:{items:n.slice(0,2),maxItems:5,showViewAll:!1,onRemove:s=>console.log("Remove:",s)},decorators:[s=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    maxItems: 5,
    showViewAll: true,
    onRemove: id => console.log('Remove:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems.slice(0, 4),
    maxItems: 5,
    showViewAll: false
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems.slice(0, 2),
    maxItems: 5,
    showViewAll: false,
    onRemove: id => console.log('Remove:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const j=["Default","WithoutRemove","Empty","FewItems"];export{o as Default,i as Empty,a as FewItems,r as WithoutRemove,j as __namedExportsOrder,w as default};
