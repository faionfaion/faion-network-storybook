import{j as n,r as u}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function c({value:e,onChange:s,options:a=[.5,.75,1,1.25,1.5,2],className:m=""}){const g=["fn-playback-speed",m].filter(Boolean).join(" ");return n.jsx("div",{className:g,role:"group","aria-label":"Playback speed",children:a.map(o=>n.jsxs("button",{type:"button",className:`fn-playback-speed__option ${e===o?"fn-playback-speed__option--active":""}`,onClick:()=>s(o),"aria-pressed":e===o,children:[o,"x"]},o))})}c.__docgenInfo={description:`PlaybackSpeed - Speed selector for audio/video playback

Allows selecting playback speed from predefined options.`,methods:[],displayName:"PlaybackSpeed",props:{value:{required:!0,tsType:{name:"number"},description:"Current playback speed"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(speed: number) => void",signature:{arguments:[{type:{name:"number"},name:"speed"}],return:{name:"void"}}},description:"Change handler"},options:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Available speed options",defaultValue:{value:"[0.5, 0.75, 1, 1.25, 1.5, 2]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const x={title:"Audio/PlaybackSpeed",component:c,parameters:{layout:"padded",docs:{description:{component:"Speed selector buttons for audio/video playback."}}},tags:["autodocs"]},t={args:{value:1,onChange:e=>console.log("Speed:",e)}},r={args:{value:1.5,onChange:e=>console.log("Speed:",e)}},p={args:{value:1,onChange:e=>console.log("Speed:",e),options:[.5,1,1.5,2]}},d={args:{value:1,onChange:e=>console.log("Speed:",e),options:[1,1.5,2]}},i={render:function(){const[s,a]=u.useState(1);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(c,{value:s,onChange:a}),n.jsxs("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:["Current speed: ",s,"x"]})]})}},l={render:function(){const[s,a]=u.useState(1);return n.jsxs("div",{style:{maxWidth:"400px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"12px",padding:"20px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[n.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:500,color:"#1C1C1E"},children:"Playback Speed"}),n.jsxs("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"13px",color:"#6B6B6B"},children:[s,"x"]})]}),n.jsx(c,{value:s,onChange:a})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1,
    onChange: speed => console.log('Speed:', speed)
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1.5,
    onChange: speed => console.log('Speed:', speed)
  }
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1,
    onChange: speed => console.log('Speed:', speed),
    options: [0.5, 1, 1.5, 2]
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1,
    onChange: speed => console.log('Speed:', speed),
    options: [1, 1.5, 2]
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [speed, setSpeed] = useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <PlaybackSpeed value={speed} onChange={setSpeed} />
        <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>
          Current speed: {speed}x
        </span>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function InContextStory() {
    const [speed, setSpeed] = useState(1);
    return <div style={{
      maxWidth: '400px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '12px',
      padding: '20px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
          <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          color: '#1C1C1E'
        }}>
            Playback Speed
          </span>
          <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#6B6B6B'
        }}>
            {speed}x
          </span>
        </div>
        <PlaybackSpeed value={speed} onChange={setSpeed} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const S=["Default","Selected1_5x","CustomOptions","SimpleOptions","Interactive","InContext"];export{p as CustomOptions,t as Default,l as InContext,i as Interactive,r as Selected1_5x,d as SimpleOptions,S as __namedExportsOrder,x as default};
