import{j as o,r as c}from"./iframe-B_omF_R9.js";import{M as a}from"./ModeSelector-x2sFbCYN.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                     */const g={title:"TestimonialForm/ModeSelector",component:a,parameters:{layout:"padded",docs:{description:{component:"Toggle between guided and freeform testimonial submission modes."}}},tags:["autodocs"]},r={args:{value:"guided",onChange:e=>console.log("Mode changed:",e)},decorators:[e=>o.jsx("div",{style:{maxWidth:"500px"},children:o.jsx(e,{})})]},n={args:{value:"freeform",onChange:e=>console.log("Mode changed:",e)},decorators:[e=>o.jsx("div",{style:{maxWidth:"500px"},children:o.jsx(e,{})})]},t={render:function(){const[s,d]=c.useState("guided");return o.jsxs("div",{style:{maxWidth:"500px"},children:[o.jsx(a,{value:s,onChange:d}),o.jsxs("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginTop:"16px"},children:["Selected mode: ",o.jsx("strong",{children:s})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'guided',
    onChange: mode => console.log('Mode changed:', mode)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'freeform',
    onChange: mode => console.log('Mode changed:', mode)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function InteractiveModeSelector() {
    const [mode, setMode] = useState<TestimonialMode>('guided');
    return <div style={{
      maxWidth: '500px'
    }}>
        <ModeSelector value={mode} onChange={setMode} />
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        marginTop: '16px'
      }}>
          Selected mode: <strong>{mode}</strong>
        </p>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","FreeformSelected","Interactive"];export{r as Default,n as FreeformSelected,t as Interactive,u as __namedExportsOrder,g as default};
