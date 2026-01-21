import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function n({label:a,value:m,change:c,changeType:h="neutral",icon:d,className:v=""}){const g=["fn-stat-card",v].filter(Boolean).join(" ");return e.jsxs("div",{className:g,children:[d&&e.jsx("div",{className:"fn-stat-card__icon",children:d}),e.jsxs("div",{className:"fn-stat-card__content",children:[e.jsx("span",{className:"fn-stat-card__label",children:a}),e.jsxs("div",{className:"fn-stat-card__value-row",children:[e.jsx("span",{className:"fn-stat-card__value",children:m}),c&&e.jsx("span",{className:`fn-stat-card__change fn-stat-card__change--${h}`,children:c})]})]})]})}n.__docgenInfo={description:`StatCard - Single statistic display card

Shows a key metric with optional change indicator.`,methods:[],displayName:"StatCard",props:{label:{required:!0,tsType:{name:"string"},description:"Stat label"},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Stat value"},change:{required:!1,tsType:{name:"string"},description:'Change indicator (e.g., "+12%")'},changeType:{required:!1,tsType:{name:"union",raw:"'positive' | 'negative' | 'neutral'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'neutral'"}]},description:"Type of change",defaultValue:{value:"'neutral'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const f={title:"TeamManagement/StatCard",component:n,parameters:{layout:"padded",docs:{description:{component:"Displays a single statistic with optional change indicator and icon."}}},tags:["autodocs"]},p=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),x=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),u=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),s={args:{label:"Active Members",value:12},decorators:[a=>e.jsx("div",{style:{maxWidth:"250px"},children:e.jsx(a,{})})]},t={args:{label:"Team Members",value:8,icon:e.jsx(p,{})},decorators:[a=>e.jsx("div",{style:{maxWidth:"250px"},children:e.jsx(a,{})})]},r={args:{label:"Monthly Revenue",value:"$1,250",change:"+12.5%",changeType:"positive",icon:e.jsx(u,{})},decorators:[a=>e.jsx("div",{style:{maxWidth:"250px"},children:e.jsx(a,{})})]},i={args:{label:"Churn Rate",value:"4.2%",change:"+0.8%",changeType:"negative",icon:e.jsx(x,{})},decorators:[a=>e.jsx("div",{style:{maxWidth:"250px"},children:e.jsx(a,{})})]},o={args:{label:"API Calls",value:"45.2K",change:"+0%",changeType:"neutral"},decorators:[a=>e.jsx("div",{style:{maxWidth:"250px"},children:e.jsx(a,{})})]},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px",maxWidth:"800px"},children:[e.jsx(n,{label:"Team Members",value:8,icon:e.jsx(p,{}),change:"+2",changeType:"positive"}),e.jsx(n,{label:"Active Seats",value:"5/10"}),e.jsx(n,{label:"Monthly Cost",value:"$175",icon:e.jsx(u,{})}),e.jsx(n,{label:"API Requests",value:"12.4K",change:"+23%",changeType:"positive"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Active Members',
    value: 12
  },
  decorators: [Story => <div style={{
    maxWidth: '250px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Team Members',
    value: 8,
    icon: <UsersIcon />
  },
  decorators: [Story => <div style={{
    maxWidth: '250px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Monthly Revenue',
    value: '$1,250',
    change: '+12.5%',
    changeType: 'positive',
    icon: <DollarIcon />
  },
  decorators: [Story => <div style={{
    maxWidth: '250px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Churn Rate',
    value: '4.2%',
    change: '+0.8%',
    changeType: 'negative',
    icon: <ActivityIcon />
  },
  decorators: [Story => <div style={{
    maxWidth: '250px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'API Calls',
    value: '45.2K',
    change: '+0%',
    changeType: 'neutral'
  },
  decorators: [Story => <div style={{
    maxWidth: '250px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    maxWidth: '800px'
  }}>
      <StatCard label="Team Members" value={8} icon={<UsersIcon />} change="+2" changeType="positive" />
      <StatCard label="Active Seats" value="5/10" />
      <StatCard label="Monthly Cost" value="$175" icon={<DollarIcon />} />
      <StatCard label="API Requests" value="12.4K" change="+23%" changeType="positive" />
    </div>
}`,...l.parameters?.docs?.source}}};const S=["Default","WithIcon","PositiveChange","NegativeChange","NeutralChange","Grid"];export{s as Default,l as Grid,i as NegativeChange,o as NeutralChange,r as PositiveChange,t as WithIcon,S as __namedExportsOrder,f as default};
