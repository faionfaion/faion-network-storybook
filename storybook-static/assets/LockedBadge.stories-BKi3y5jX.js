import{j as e}from"./iframe-B_omF_R9.js";import{L as r}from"./LockedBadge-Bib7e-34.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                    */const x={title:"Paywall/LockedBadge",component:r,parameters:{layout:"centered",docs:{description:{component:"Badge indicating locked/premium content with lock icon and tier text."}}},tags:["autodocs"],argTypes:{tier:{control:"select",options:["plus","pro","team","ultimate"],description:"Tier variant"},size:{control:"select",options:["small","medium","large"],description:"Size variant"},outline:{control:"boolean",description:"Outline style"},showIcon:{control:"boolean",description:"Show lock icon"},text:{control:"text",description:"Custom text"}}},s={args:{tier:"plus",size:"medium",showIcon:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{tier:"plus"}),e.jsx(r,{tier:"pro"}),e.jsx(r,{tier:"team"}),e.jsx(r,{tier:"ultimate"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{size:"small",tier:"plus"}),e.jsx(r,{size:"medium",tier:"plus"}),e.jsx(r,{size:"large",tier:"plus"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{tier:"plus",outline:!0}),e.jsx(r,{tier:"pro",outline:!0}),e.jsx(r,{tier:"team",outline:!0}),e.jsx(r,{tier:"ultimate",outline:!0})]})},a={args:{tier:"pro",showIcon:!1}},l={args:{text:"Premium Only",tier:"plus",showIcon:!0}},n={render:()=>e.jsxs("div",{style:{fontFamily:"Inter, sans-serif"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",marginBottom:"16px"},children:[e.jsx("h3",{style:{margin:0,fontFamily:"Georgia, serif",fontSize:"18px",color:"#1C1C1E"},children:"Advanced SDD Methodology"}),e.jsx(r,{tier:"pro",size:"small"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",marginBottom:"16px"},children:[e.jsx("h3",{style:{margin:0,fontFamily:"Georgia, serif",fontSize:"18px",color:"#1C1C1E"},children:"AI Agent Framework"}),e.jsx(r,{tier:"plus",size:"small"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:0,fontFamily:"Georgia, serif",fontSize:"18px",color:"#1C1C1E"},children:"Enterprise SSO Setup"}),e.jsx(r,{tier:"ultimate",size:"small"})]})]})},d={args:{text:"Premium",icon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tier: 'plus',
    size: 'medium',
    showIcon: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <LockedBadge tier="plus" />
      <LockedBadge tier="pro" />
      <LockedBadge tier="team" />
      <LockedBadge tier="ultimate" />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <LockedBadge size="small" tier="plus" />
      <LockedBadge size="medium" tier="plus" />
      <LockedBadge size="large" tier="plus" />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <LockedBadge tier="plus" outline />
      <LockedBadge tier="pro" outline />
      <LockedBadge tier="team" outline />
      <LockedBadge tier="ultimate" outline />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tier: 'pro',
    showIcon: false
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Premium Only',
    tier: 'plus',
    showIcon: true
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      marginBottom: '16px'
    }}>
        <h3 style={{
        margin: 0,
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        color: '#1C1C1E'
      }}>
          Advanced SDD Methodology
        </h3>
        <LockedBadge tier="pro" size="small" />
      </div>

      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      marginBottom: '16px'
    }}>
        <h3 style={{
        margin: 0,
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        color: '#1C1C1E'
      }}>
          AI Agent Framework
        </h3>
        <LockedBadge tier="plus" size="small" />
      </div>

      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px'
    }}>
        <h3 style={{
        margin: 0,
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        color: '#1C1C1E'
      }}>
          Enterprise SSO Setup
        </h3>
        <LockedBadge tier="ultimate" size="small" />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Premium',
    icon: <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
  }
}`,...d.parameters?.docs?.source}}};const g=["Default","AllTiers","AllSizes","OutlineVariant","NoIcon","CustomText","InContext","WithCustomIcon"];export{o as AllSizes,t as AllTiers,l as CustomText,s as Default,n as InContext,a as NoIcon,i as OutlineVariant,d as WithCustomIcon,g as __namedExportsOrder,x as default};
