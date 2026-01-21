import{j as e}from"./iframe-B_omF_R9.js";import{D as i}from"./DifficultyBadge-DU1H8V_K.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                        */const v={title:"Content/DifficultyBadge",component:i,parameters:{layout:"centered",docs:{description:{component:"Color-coded badge showing content difficulty level."}}},tags:["autodocs"],argTypes:{level:{control:"select",options:["beginner","intermediate","advanced"],description:"Difficulty level"},size:{control:"select",options:["small","medium","large"],description:"Size variant"},showIcon:{control:"boolean",description:"Show icon"},useDot:{control:"boolean",description:"Use dot indicator"},outline:{control:"boolean",description:"Outline style"}}},r={args:{level:"beginner"}},t={args:{level:"intermediate"}},s={args:{level:"advanced"}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(i,{level:"beginner"}),e.jsx(i,{level:"intermediate"}),e.jsx(i,{level:"advanced"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(i,{level:"intermediate",size:"small"}),e.jsx(i,{level:"intermediate",size:"medium"}),e.jsx(i,{level:"intermediate",size:"large"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(i,{level:"beginner",showIcon:!0}),e.jsx(i,{level:"intermediate",showIcon:!0}),e.jsx(i,{level:"advanced",showIcon:!0})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(i,{level:"beginner",useDot:!0}),e.jsx(i,{level:"intermediate",useDot:!0}),e.jsx(i,{level:"advanced",useDot:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(i,{level:"beginner",outline:!0}),e.jsx(i,{level:"intermediate",outline:!0}),e.jsx(i,{level:"advanced",outline:!0})]})},c={args:{level:"beginner",label:"Easy"}},p={render:()=>e.jsxs("div",{style:{maxWidth:"400px"},children:[e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"16px",margin:0,color:"#1C1C1E"},children:"Getting Started with SDD"}),e.jsx(i,{level:"beginner",size:"small"})]}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:0},children:"Learn the fundamentals of Specification-Driven Development."})]}),e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",marginBottom:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"16px",margin:0,color:"#1C1C1E"},children:"RAG Pipeline Implementation"}),e.jsx(i,{level:"intermediate",size:"small"})]}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:0},children:"Build production-ready RAG systems with vector databases."})]}),e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"16px",margin:0,color:"#1C1C1E"},children:"Custom Agent Architecture"}),e.jsx(i,{level:"advanced",size:"small"})]}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:0},children:"Design and implement custom AI agent architectures."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'beginner'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'intermediate'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'advanced'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <DifficultyBadge level="beginner" />
      <DifficultyBadge level="intermediate" />
      <DifficultyBadge level="advanced" />
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <DifficultyBadge level="intermediate" size="small" />
      <DifficultyBadge level="intermediate" size="medium" />
      <DifficultyBadge level="intermediate" size="large" />
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <DifficultyBadge level="beginner" showIcon />
      <DifficultyBadge level="intermediate" showIcon />
      <DifficultyBadge level="advanced" showIcon />
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <DifficultyBadge level="beginner" useDot />
      <DifficultyBadge level="intermediate" useDot />
      <DifficultyBadge level="advanced" useDot />
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <DifficultyBadge level="beginner" outline />
      <DifficultyBadge level="intermediate" outline />
      <DifficultyBadge level="advanced" outline />
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'beginner',
    label: 'Easy'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      marginBottom: '16px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
          <h3 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          margin: 0,
          color: '#1C1C1E'
        }}>
            Getting Started with SDD
          </h3>
          <DifficultyBadge level="beginner" size="small" />
        </div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: 0
      }}>
          Learn the fundamentals of Specification-Driven Development.
        </p>
      </div>

      <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px',
      marginBottom: '16px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
          <h3 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          margin: 0,
          color: '#1C1C1E'
        }}>
            RAG Pipeline Implementation
          </h3>
          <DifficultyBadge level="intermediate" size="small" />
        </div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: 0
      }}>
          Build production-ready RAG systems with vector databases.
        </p>
      </div>

      <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
          <h3 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          margin: 0,
          color: '#1C1C1E'
        }}>
            Custom Agent Architecture
          </h3>
          <DifficultyBadge level="advanced" size="small" />
        </div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: 0
      }}>
          Design and implement custom AI agent architectures.
        </p>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};const f=["Beginner","Intermediate","Advanced","AllLevels","AllSizes","WithIcon","WithDot","Outline","CustomLabel","InContext"];export{s as Advanced,a as AllLevels,l as AllSizes,r as Beginner,c as CustomLabel,p as InContext,t as Intermediate,d as Outline,o as WithDot,n as WithIcon,f as __namedExportsOrder,v as default};
