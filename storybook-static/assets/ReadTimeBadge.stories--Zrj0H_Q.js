import{j as e}from"./iframe-B_omF_R9.js";import{R as n}from"./ReadTimeBadge-CAd9F2or.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                      */const y={title:"Content/ReadTimeBadge",component:n,parameters:{layout:"centered",docs:{description:{component:"Badge displaying estimated reading time with clock icon."}}},tags:["autodocs"],argTypes:{minutes:{control:{type:"range",min:1,max:60},description:"Read time in minutes"},size:{control:"select",options:["small","medium","large"],description:"Size variant"},showIcon:{control:"boolean",description:"Show clock icon"},showBackground:{control:"boolean",description:"Show background"}}},s={args:{minutes:8}},a={args:{minutes:3}},r={args:{minutes:25}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{minutes:8,size:"small"}),e.jsx(n,{minutes:8,size:"medium"}),e.jsx(n,{minutes:8,size:"large"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{minutes:5,showBackground:!0}),e.jsx(n,{minutes:12,showBackground:!0}),e.jsx(n,{minutes:30,showBackground:!0})]})},t={args:{minutes:10,showIcon:!1}},d={args:{minutes:15,formatLabel:p=>`${p} minutes`}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{minutes:1}),e.jsx(n,{minutes:5}),e.jsx(n,{minutes:10}),e.jsx(n,{minutes:20}),e.jsx(n,{minutes:45})]})},m={render:()=>e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",maxWidth:"360px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"8px",color:"#1C1C1E"},children:"How to Build a Solo Business"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"12px",lineHeight:1.5},children:"Learn the proven methodology for building a sustainable solo business."}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{minutes:12}),e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A"},children:"Jan 15, 2026"})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"12px 16px",background:"#FAF9F6",borderRadius:"8px"},children:[e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A"},children:"Published Jan 21, 2026"}),e.jsx("span",{style:{color:"#E5E5E0"},children:"|"}),e.jsx(n,{minutes:8}),e.jsx("span",{style:{color:"#E5E5E0"},children:"|"}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#2E7D32",background:"#E8F5E9",padding:"2px 6px",borderRadius:"4px"},children:"Beginner"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    minutes: 8
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    minutes: 3
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    minutes: 25
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <ReadTimeBadge minutes={8} size="small" />
      <ReadTimeBadge minutes={8} size="medium" />
      <ReadTimeBadge minutes={8} size="large" />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <ReadTimeBadge minutes={5} showBackground />
      <ReadTimeBadge minutes={12} showBackground />
      <ReadTimeBadge minutes={30} showBackground />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    minutes: 10,
    showIcon: false
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    minutes: 15,
    formatLabel: m => \`\${m} minutes\`
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <ReadTimeBadge minutes={1} />
      <ReadTimeBadge minutes={5} />
      <ReadTimeBadge minutes={10} />
      <ReadTimeBadge minutes={20} />
      <ReadTimeBadge minutes={45} />
    </div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    background: '#FFFFFF',
    border: '1px solid #E5E5E0',
    borderRadius: '8px',
    maxWidth: '360px'
  }}>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      marginBottom: '8px',
      color: '#1C1C1E'
    }}>
        How to Build a Solo Business
      </h3>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      marginBottom: '12px',
      lineHeight: 1.5
    }}>
        Learn the proven methodology for building a sustainable solo business.
      </p>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <ReadTimeBadge minutes={12} />
        <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#4A4A4A'
      }}>
          Jan 15, 2026
        </span>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    padding: '12px 16px',
    background: '#FAF9F6',
    borderRadius: '8px'
  }}>
      <span style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      color: '#4A4A4A'
    }}>
        Published Jan 21, 2026
      </span>
      <span style={{
      color: '#E5E5E0'
    }}>|</span>
      <ReadTimeBadge minutes={8} />
      <span style={{
      color: '#E5E5E0'
    }}>|</span>
      <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      color: '#2E7D32',
      background: '#E8F5E9',
      padding: '2px 6px',
      borderRadius: '4px'
    }}>
        Beginner
      </span>
    </div>
}`,...c.parameters?.docs?.source}}};const h=["Default","ShortRead","LongRead","AllSizes","WithBackground","NoIcon","CustomFormat","VariousReadTimes","InArticleCard","InMetaRow"];export{o as AllSizes,d as CustomFormat,s as Default,m as InArticleCard,c as InMetaRow,r as LongRead,t as NoIcon,a as ShortRead,l as VariousReadTimes,i as WithBackground,h as __namedExportsOrder,y as default};
