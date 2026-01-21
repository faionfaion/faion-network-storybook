import{j as e}from"./iframe-B_omF_R9.js";/* empty css                  */import"./preload-helper-Ct5FWWRu.js";const u=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 12V4M8 4l-4 4M8 4l4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),x=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 4v8M8 12l-4-4M8 12l4-4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function a({value:r,label:g,change:p,changeType:d="neutral",className:m=""}){const h=["fn-metric-box",m].filter(Boolean).join(" ");return e.jsxs("div",{className:h,children:[e.jsx("div",{className:"fn-metric-box__value",children:r}),e.jsx("div",{className:"fn-metric-box__label",children:g}),p&&e.jsxs("div",{className:`fn-metric-box__change fn-metric-box__change--${d}`,children:[d==="positive"&&e.jsx(u,{}),d==="negative"&&e.jsx(x,{}),e.jsx("span",{children:p})]})]})}a.__docgenInfo={description:`MetricBox - Single metric display for MDX

Displays a key metric with optional change indicator.
Useful for dashboards, statistics sections, and KPI displays.`,methods:[],displayName:"MetricBox",props:{value:{required:!0,tsType:{name:"string"},description:"Main value (number or text)"},label:{required:!0,tsType:{name:"string"},description:"Label describing the metric"},change:{required:!1,tsType:{name:"string"},description:'Change indicator (e.g., "+15%", "-3%")'},changeType:{required:!1,tsType:{name:"union",raw:"'positive' | 'negative' | 'neutral'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'neutral'"}]},description:"Type of change for styling",defaultValue:{value:"'neutral'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const b={title:"MDX/MetricBox",component:a,parameters:{layout:"padded",docs:{description:{component:"Single metric display with optional change indicator for dashboards and statistics."}}},tags:["autodocs"],argTypes:{changeType:{control:"select",options:["positive","negative","neutral"],description:"Type of change for styling"}}},t={args:{value:"502",label:"Methodologies"},decorators:[r=>e.jsx("div",{style:{maxWidth:"200px"},children:e.jsx(r,{})})]},s={args:{value:"$24.5K",label:"Monthly Revenue",change:"+15%",changeType:"positive"},decorators:[r=>e.jsx("div",{style:{maxWidth:"200px"},children:e.jsx(r,{})})]},i={args:{value:"3.2%",label:"Churn Rate",change:"-0.5%",changeType:"negative"},decorators:[r=>e.jsx("div",{style:{maxWidth:"200px"},children:e.jsx(r,{})})]},o={args:{value:"1,234",label:"Active Users",change:"0%",changeType:"neutral"},decorators:[r=>e.jsx("div",{style:{maxWidth:"200px"},children:e.jsx(r,{})})]},n={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px",maxWidth:"800px"},children:[e.jsx(a,{value:"502",label:"Methodologies"}),e.jsx(a,{value:"15",label:"Skills"}),e.jsx(a,{value:"8",label:"Languages"}),e.jsx(a,{value:"24/7",label:"Support"})]})},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px",maxWidth:"800px"},children:[e.jsx(a,{value:"$24.5K",label:"Revenue",change:"+15%",changeType:"positive"}),e.jsx(a,{value:"1,234",label:"Users",change:"+8%",changeType:"positive"}),e.jsx(a,{value:"3.2%",label:"Churn",change:"-0.5%",changeType:"negative"}),e.jsx(a,{value:"4.8",label:"Rating",change:"+0.2",changeType:"positive"})]})},c={render:()=>e.jsxs("article",{style:{maxWidth:"800px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",marginBottom:"16px",color:"#1C1C1E"},children:"Framework by the Numbers"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"The Faion Network provides comprehensive coverage across all aspects of solopreneur success."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px",marginBottom:"24px"},children:[e.jsx(a,{value:"502",label:"Methodologies"}),e.jsx(a,{value:"15",label:"AI Skills"}),e.jsx(a,{value:"1",label:"AI Agent"})]}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A"},children:"From research to launch, every methodology is battle-tested and designed for real-world application."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: '502',
    label: 'Methodologies'
  },
  decorators: [Story => <div style={{
    maxWidth: '200px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: '$24.5K',
    label: 'Monthly Revenue',
    change: '+15%',
    changeType: 'positive'
  },
  decorators: [Story => <div style={{
    maxWidth: '200px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: '3.2%',
    label: 'Churn Rate',
    change: '-0.5%',
    changeType: 'negative'
  },
  decorators: [Story => <div style={{
    maxWidth: '200px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: '1,234',
    label: 'Active Users',
    change: '0%',
    changeType: 'neutral'
  },
  decorators: [Story => <div style={{
    maxWidth: '200px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
    maxWidth: '800px'
  }}>
      <MetricBox value="502" label="Methodologies" />
      <MetricBox value="15" label="Skills" />
      <MetricBox value="8" label="Languages" />
      <MetricBox value="24/7" label="Support" />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
    maxWidth: '800px'
  }}>
      <MetricBox value="$24.5K" label="Revenue" change="+15%" changeType="positive" />
      <MetricBox value="1,234" label="Users" change="+8%" changeType="positive" />
      <MetricBox value="3.2%" label="Churn" change="-0.5%" changeType="negative" />
      <MetricBox value="4.8" label="Rating" change="+0.2" changeType="positive" />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '800px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Framework by the Numbers
      </h2>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        The Faion Network provides comprehensive coverage across all aspects of solopreneur success.
      </p>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
      marginBottom: '24px'
    }}>
        <MetricBox value="502" label="Methodologies" />
        <MetricBox value="15" label="AI Skills" />
        <MetricBox value="1" label="AI Agent" />
      </div>

      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A'
    }}>
        From research to launch, every methodology is battle-tested and designed
        for real-world application.
      </p>
    </article>
}`,...c.parameters?.docs?.source}}};const j=["Default","WithPositiveChange","WithNegativeChange","WithNeutralChange","MetricGrid","DashboardMetrics","InArticle"];export{l as DashboardMetrics,t as Default,c as InArticle,n as MetricGrid,i as WithNegativeChange,o as WithNeutralChange,s as WithPositiveChange,j as __namedExportsOrder,b as default};
