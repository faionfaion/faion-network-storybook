import{j as e,r as f}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function a({isPlaying:p,onClick:i,size:u="md",variant:y="primary",className:g=""}){const m=["fn-audio-button",`fn-audio-button--${u}`,`fn-audio-button--${y}`,g].filter(Boolean).join(" ");return e.jsx("button",{type:"button",className:m,onClick:i,"aria-label":p?"Pause audio":"Play audio",children:p?e.jsx(v,{}):e.jsx(x,{})})}function x(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})}function v(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),e.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]})}a.__docgenInfo={description:`AudioButton - Play/pause button for audio

Compact button for triggering audio playback.`,methods:[],displayName:"AudioButton",props:{isPlaying:{required:!0,tsType:{name:"boolean"},description:"Whether audio is playing"},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Button size",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Button variant",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const k={title:"Audio/AudioButton",component:a,parameters:{layout:"padded",docs:{description:{component:"Compact play/pause button for triggering audio playback."}}},tags:["autodocs"]},s={args:{isPlaying:!1,onClick:()=>console.log("Clicked"),variant:"primary",size:"md"}},n={args:{isPlaying:!0,onClick:()=>console.log("Clicked"),variant:"primary",size:"md"}},r={args:{isPlaying:!1,onClick:()=>console.log("Clicked"),variant:"secondary",size:"md"}},l={args:{isPlaying:!1,onClick:()=>console.log("Clicked"),variant:"ghost",size:"md"}},t={args:{isPlaying:!1,onClick:()=>console.log("Clicked"),variant:"primary",size:"sm"}},o={args:{isPlaying:!1,onClick:()=>console.log("Clicked"),variant:"primary",size:"lg"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#6B6B6B",width:"100px"},children:"Sizes:"}),e.jsx(a,{isPlaying:!1,onClick:()=>{},size:"sm"}),e.jsx(a,{isPlaying:!1,onClick:()=>{},size:"md"}),e.jsx(a,{isPlaying:!1,onClick:()=>{},size:"lg"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#6B6B6B",width:"100px"},children:"Variants:"}),e.jsx(a,{isPlaying:!1,onClick:()=>{},variant:"primary"}),e.jsx(a,{isPlaying:!1,onClick:()=>{},variant:"secondary"}),e.jsx(a,{isPlaying:!1,onClick:()=>{},variant:"ghost"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#6B6B6B",width:"100px"},children:"Playing:"}),e.jsx(a,{isPlaying:!0,onClick:()=>{},variant:"primary"}),e.jsx(a,{isPlaying:!0,onClick:()=>{},variant:"secondary"}),e.jsx(a,{isPlaying:!0,onClick:()=>{},variant:"ghost"})]})]})},d={render:function(){const[i,u]=f.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{isPlaying:i,onClick:()=>u(!i),size:"lg",variant:"primary"}),e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:i?"Playing...":"Click to play"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isPlaying: true,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'secondary',
    size: 'md'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'ghost',
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isPlaying: false,
    onClick: () => console.log('Clicked'),
    variant: 'primary',
    size: 'lg'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#6B6B6B',
        width: '100px'
      }}>
          Sizes:
        </span>
        <AudioButton isPlaying={false} onClick={() => {}} size="sm" />
        <AudioButton isPlaying={false} onClick={() => {}} size="md" />
        <AudioButton isPlaying={false} onClick={() => {}} size="lg" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#6B6B6B',
        width: '100px'
      }}>
          Variants:
        </span>
        <AudioButton isPlaying={false} onClick={() => {}} variant="primary" />
        <AudioButton isPlaying={false} onClick={() => {}} variant="secondary" />
        <AudioButton isPlaying={false} onClick={() => {}} variant="ghost" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#6B6B6B',
        width: '100px'
      }}>
          Playing:
        </span>
        <AudioButton isPlaying={true} onClick={() => {}} variant="primary" />
        <AudioButton isPlaying={true} onClick={() => {}} variant="secondary" />
        <AudioButton isPlaying={true} onClick={() => {}} variant="ghost" />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [isPlaying, setIsPlaying] = useState(false);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <AudioButton isPlaying={isPlaying} onClick={() => setIsPlaying(!isPlaying)} size="lg" variant="primary" />
        <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>
          {isPlaying ? 'Playing...' : 'Click to play'}
        </span>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const h=["Primary","Playing","Secondary","Ghost","Small","Large","AllVariants","Interactive"];export{c as AllVariants,l as Ghost,d as Interactive,o as Large,n as Playing,s as Primary,r as Secondary,t as Small,h as __namedExportsOrder,k as default};
