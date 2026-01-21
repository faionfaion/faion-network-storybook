import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function c({title:t="Your Progress",items:i,className:m=""}){const p=["fn-progress-overview",m].filter(Boolean).join(" "),u=i.reduce((r,s)=>r+s.current,0),d=i.reduce((r,s)=>r+s.total,0),g=d>0?Math.round(u/d*100):0;return e.jsxs("div",{className:p,children:[e.jsxs("div",{className:"fn-progress-overview__header",children:[e.jsx("h3",{className:"fn-progress-overview__title",children:t}),e.jsxs("span",{className:"fn-progress-overview__overall",children:[g,"% Complete"]})]}),e.jsx("div",{className:"fn-progress-overview__items",children:i.map(r=>{const s=r.total>0?Math.round(r.current/r.total*100):0;return e.jsxs("div",{className:"fn-progress-overview__item",children:[e.jsxs("div",{className:"fn-progress-overview__item-header",children:[r.href?e.jsx("a",{href:r.href,className:"fn-progress-overview__item-label fn-progress-overview__item-label--link",children:r.label}):e.jsx("span",{className:"fn-progress-overview__item-label",children:r.label}),e.jsxs("span",{className:"fn-progress-overview__item-count",children:[r.current,"/",r.total]})]}),e.jsx("div",{className:"fn-progress-overview__bar",children:e.jsx("div",{className:"fn-progress-overview__bar-fill",style:{width:`${s}%`},role:"progressbar","aria-valuenow":r.current,"aria-valuemin":0,"aria-valuemax":r.total,"aria-label":`${r.label}: ${s}% complete`})})]},r.id)})})]})}c.__docgenInfo={description:`ProgressOverview - Shows user progress across different content areas

Displays progress bars for methodologies, roadmaps, or other tracked content.`,methods:[],displayName:"ProgressOverview",props:{title:{required:!1,tsType:{name:"string"},description:"Title of the progress section",defaultValue:{value:"'Your Progress'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"ProgressItem"}],raw:"ProgressItem[]"},description:"Progress items to display"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const f={title:"UserDashboard/ProgressOverview",component:c,parameters:{layout:"padded",docs:{description:{component:"Displays user progress across different content areas with progress bars."}}},tags:["autodocs"]},a={args:{title:"Your Progress",items:[{id:"1",label:"SDD Methodology",current:12,total:17},{id:"2",label:"Product Management",current:8,total:33},{id:"3",label:"Software Development",current:45,total:106},{id:"4",label:"Marketing",current:15,total:86}]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},n={args:{title:"Roadmap Progress",items:[{id:"1",label:"Getting Started",current:5,total:5,href:"/roadmap/getting-started"},{id:"2",label:"Building Your MVP",current:3,total:8,href:"/roadmap/mvp"},{id:"3",label:"Launch & Growth",current:0,total:12,href:"/roadmap/growth"}]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},o={args:{title:"Course Progress",items:[{id:"1",label:"SDD Fundamentals",current:7,total:10}]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},l={args:{title:"Achievements",items:[{id:"1",label:"Beginner Path",current:10,total:10},{id:"2",label:"Intermediate Path",current:15,total:15},{id:"3",label:"Advanced Path",current:8,total:8}]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Your Progress',
    items: [{
      id: '1',
      label: 'SDD Methodology',
      current: 12,
      total: 17
    }, {
      id: '2',
      label: 'Product Management',
      current: 8,
      total: 33
    }, {
      id: '3',
      label: 'Software Development',
      current: 45,
      total: 106
    }, {
      id: '4',
      label: 'Marketing',
      current: 15,
      total: 86
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Roadmap Progress',
    items: [{
      id: '1',
      label: 'Getting Started',
      current: 5,
      total: 5,
      href: '/roadmap/getting-started'
    }, {
      id: '2',
      label: 'Building Your MVP',
      current: 3,
      total: 8,
      href: '/roadmap/mvp'
    }, {
      id: '3',
      label: 'Launch & Growth',
      current: 0,
      total: 12,
      href: '/roadmap/growth'
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Course Progress',
    items: [{
      id: '1',
      label: 'SDD Fundamentals',
      current: 7,
      total: 10
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Achievements',
    items: [{
      id: '1',
      label: 'Beginner Path',
      current: 10,
      total: 10
    }, {
      id: '2',
      label: 'Intermediate Path',
      current: 15,
      total: 15
    }, {
      id: '3',
      label: 'Advanced Path',
      current: 8,
      total: 8
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};const x=["Default","WithLinks","SingleItem","AllComplete"];export{l as AllComplete,a as Default,o as SingleItem,n as WithLinks,x as __namedExportsOrder,f as default};
