import{r,j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function f({src:a,title:g,duration:w,onPlay:P,onPause:A,onComplete:x,className:D=""}){const s=r.useRef(null),[i,v]=r.useState(!1),[h,y]=r.useState(0),[l,b]=r.useState(w||0),[_,C]=r.useState(1),[B,k]=r.useState(!1),T=["fn-audio-player",D].filter(Boolean).join(" ");r.useEffect(()=>{const t=s.current;if(!t)return;const o=()=>{b(t.duration),k(!0)},n=()=>{y(t.currentTime)},j=()=>{v(!1),y(0),x?.()};return t.addEventListener("loadedmetadata",o),t.addEventListener("timeupdate",n),t.addEventListener("ended",j),()=>{t.removeEventListener("loadedmetadata",o),t.removeEventListener("timeupdate",n),t.removeEventListener("ended",j)}},[x]);const L=()=>{const t=s.current;t&&(i?(t.pause(),A?.()):(t.play(),P?.()),v(!i))},I=t=>{const o=s.current;if(!o)return;const n=parseFloat(t.target.value);o.currentTime=n,y(n)},E=t=>{const o=s.current;o&&(o.playbackRate=t,C(t))},S=t=>{const o=Math.floor(t/60),n=Math.floor(t%60);return`${o}:${n.toString().padStart(2,"0")}`},W=l>0?h/l*100:0;return e.jsxs("div",{className:T,children:[e.jsx("audio",{ref:s,src:a,preload:"metadata"}),g&&e.jsxs("div",{className:"fn-audio-player__header",children:[e.jsx(z,{}),e.jsx("span",{className:"fn-audio-player__title",children:g})]}),e.jsxs("div",{className:"fn-audio-player__controls",children:[e.jsx("button",{type:"button",className:"fn-audio-player__play-btn",onClick:L,"aria-label":i?"Pause":"Play",children:i?e.jsx(F,{}):e.jsx(N,{})}),e.jsxs("div",{className:"fn-audio-player__progress-container",children:[e.jsx("input",{type:"range",className:"fn-audio-player__progress",min:0,max:l||100,value:h,onChange:I,style:{"--progress":`${W}%`},"aria-label":"Seek"}),e.jsxs("div",{className:"fn-audio-player__time",children:[e.jsx("span",{children:S(h)}),e.jsx("span",{children:"/"}),e.jsx("span",{children:S(l)})]})]})]}),e.jsx("div",{className:"fn-audio-player__speed",children:[.5,1,1.5,2].map(t=>e.jsxs("button",{type:"button",className:`fn-audio-player__speed-btn ${_===t?"fn-audio-player__speed-btn--active":""}`,onClick:()=>E(t),children:[t,"x"]},t))})]})}function N(){return e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})}function F(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),e.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]})}function z(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 18v-6a9 9 0 0 1 18 0v6"}),e.jsx("path",{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"})]})}f.__docgenInfo={description:`AudioPlayer - Full audio player with controls

Displays audio playback controls with progress bar and speed options.`,methods:[],displayName:"AudioPlayer",props:{src:{required:!0,tsType:{name:"string"},description:"Audio source URL"},title:{required:!1,tsType:{name:"string"},description:"Title of the audio"},duration:{required:!1,tsType:{name:"number"},description:"Duration in seconds (optional, for display before loading)"},onPlay:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when playback starts"},onPause:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when playback pauses"},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when playback completes"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const U={title:"Audio/AudioPlayer",component:f,parameters:{layout:"padded",docs:{description:{component:"Full audio player with play/pause, progress bar, and speed controls."}}},tags:["autodocs"]},m="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",d={args:{src:m,title:"Listen to this article",onPlay:()=>console.log("Playing"),onPause:()=>console.log("Paused"),onComplete:()=>console.log("Completed")},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]},c={args:{src:m,onPlay:()=>console.log("Playing"),onPause:()=>console.log("Paused")},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]},u={args:{src:m,title:"SDD Methodology Overview",duration:750},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]},p={render:()=>e.jsxs("div",{style:{maxWidth:"700px",fontFamily:"Georgia, serif"},children:[e.jsx("h1",{style:{fontSize:"32px",color:"#1C1C1E",marginBottom:"16px"},children:"Getting Started with SDD"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"15px",color:"#4A4A4A",marginBottom:"24px"},children:"Learn the fundamentals of Specification-Driven Development and how it can transform your workflow."}),e.jsx(f,{src:m,title:"Listen to this article",duration:450}),e.jsx("div",{style:{marginTop:"32px",fontFamily:"Inter, sans-serif",fontSize:"15px",lineHeight:1.7,color:"#4A4A4A"},children:e.jsx("p",{children:"Specification-Driven Development (SDD) is a methodology that puts specifications at the center of your development workflow. Instead of diving straight into code, you start by defining what you're building in clear, measurable terms..."})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleAudioUrl,
    title: 'Listen to this article',
    onPlay: () => console.log('Playing'),
    onPause: () => console.log('Paused'),
    onComplete: () => console.log('Completed')
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleAudioUrl,
    onPlay: () => console.log('Playing'),
    onPause: () => console.log('Paused')
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleAudioUrl,
    title: 'SDD Methodology Overview',
    duration: 750 // 12:30
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '700px',
    fontFamily: 'Georgia, serif'
  }}>
      <h1 style={{
      fontSize: '32px',
      color: '#1C1C1E',
      marginBottom: '16px'
    }}>
        Getting Started with SDD
      </h1>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Learn the fundamentals of Specification-Driven Development and how it can transform your workflow.
      </p>
      <AudioPlayer src={sampleAudioUrl} title="Listen to this article" duration={450} />
      <div style={{
      marginTop: '32px',
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      lineHeight: 1.7,
      color: '#4A4A4A'
    }}>
        <p>
          Specification-Driven Development (SDD) is a methodology that puts specifications at the center of
          your development workflow. Instead of diving straight into code, you start by defining what you're
          building in clear, measurable terms...
        </p>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};const H=["Default","WithoutTitle","WithPresetDuration","InArticleContext"];export{d as Default,p as InArticleContext,u as WithPresetDuration,c as WithoutTitle,H as __namedExportsOrder,U as default};
