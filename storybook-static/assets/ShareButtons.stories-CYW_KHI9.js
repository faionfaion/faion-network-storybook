import{r as w,j as e}from"./iframe-B_omF_R9.js";/* empty css                     */import"./preload-helper-Ct5FWWRu.js";const b=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.27 1.67h2.97l-6.49 7.42 7.63 10.08h-5.98l-4.68-6.12-5.36 6.12H.39l6.94-7.93L0 1.67h6.13l4.23 5.6 4.91-5.6zm-1.04 15.72h1.65L5.87 3.36H4.1l10.13 14.03z",fill:"currentColor"})}),k=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.04 17.04h-2.96v-4.64c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.72h-2.96V7.5h2.84v1.3h.04a3.11 3.11 0 012.8-1.54c3 0 3.56 1.97 3.56 4.54v5.24zM4.45 6.2a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zm1.48 10.84h-2.97V7.5h2.97v9.54zM18.52 0H1.48A1.46 1.46 0 000 1.44v17.12C0 19.34.66 20 1.48 20h17.04c.81 0 1.48-.66 1.48-1.44V1.44C20 .66 19.34 0 18.52 0z",fill:"currentColor"})}),C=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18.9 0H1.1C.49 0 0 .49 0 1.1v17.8c0 .61.49 1.1 1.1 1.1h9.58v-7.75H8.08v-3.02h2.6V6.98c0-2.57 1.57-3.97 3.86-3.97 1.1 0 2.04.08 2.31.12v2.69h-1.59c-1.24 0-1.48.59-1.48 1.46v1.92h2.97l-.39 3.02h-2.58V20h5.06c.61 0 1.1-.49 1.1-1.1V1.1C20 .49 19.51 0 18.9 0z",fill:"currentColor"})}),j=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8.33 11.67a4.17 4.17 0 005.89 0l2.5-2.5a4.16 4.16 0 00-5.89-5.89l-1.43 1.43",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M11.67 8.33a4.17 4.17 0 00-5.89 0l-2.5 2.5a4.16 4.16 0 005.89 5.89l1.42-1.43",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),S=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16.667 5L7.5 14.167 3.333 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),h={twitter:{icon:b,label:"Share on X",getUrl:(t,r)=>`https://twitter.com/intent/tweet?url=${encodeURIComponent(t)}&text=${encodeURIComponent(r)}`},linkedin:{icon:k,label:"Share on LinkedIn",getUrl:(t,r)=>`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(t)}`},facebook:{icon:C,label:"Share on Facebook",getUrl:t=>`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t)}`},copy:{icon:j,label:"Copy link",getUrl:()=>null}};function p({url:t,title:r,platforms:m=["twitter","linkedin","copy"],className:g=""}){const[i,u]=w.useState(!1),f=["fn-share-buttons",g].filter(Boolean).join(" "),x=async()=>{try{await navigator.clipboard.writeText(t),u(!0),setTimeout(()=>u(!1),2e3)}catch(n){console.error("Failed to copy:",n)}},y=n=>{if(n==="copy"){x();return}const o=h[n].getUrl(t,r);o&&window.open(o,"_blank","noopener,noreferrer,width=600,height=400")};return e.jsxs("div",{className:f,children:[e.jsx("span",{className:"fn-share-buttons__label",children:"Share"}),e.jsx("div",{className:"fn-share-buttons__buttons",children:m.map(n=>{const o=h[n],v=n==="copy"&&i?S:o.icon;return e.jsx("button",{type:"button",className:`fn-share-buttons__button fn-share-buttons__button--${n} ${n==="copy"&&i?"fn-share-buttons__button--copied":""}`,onClick:()=>y(n),"aria-label":n==="copy"&&i?"Link copied!":o.label,title:n==="copy"&&i?"Link copied!":o.label,children:e.jsx(v,{})},n)})})]})}p.__docgenInfo={description:`ShareButtons - Social sharing buttons

Displays buttons for sharing content on social media platforms.
Includes copy to clipboard functionality.`,methods:[],displayName:"ShareButtons",props:{url:{required:!0,tsType:{name:"string"},description:"URL to share"},title:{required:!0,tsType:{name:"string"},description:"Title for sharing"},platforms:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"'twitter' | 'linkedin' | 'facebook' | 'copy'",elements:[{name:"literal",value:"'twitter'"},{name:"literal",value:"'linkedin'"},{name:"literal",value:"'facebook'"},{name:"literal",value:"'copy'"}]}],raw:"SharePlatform[]"},description:"Platforms to display",defaultValue:{value:"['twitter', 'linkedin', 'copy']",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const F={title:"Blog/ShareButtons",component:p,parameters:{layout:"padded",docs:{description:{component:"Social sharing buttons with Twitter/X, LinkedIn, Facebook, and copy link options."}}},tags:["autodocs"]},s={args:{url:"https://faion.net/blog/building-first-mvp",title:"Building Your First MVP: A Complete Guide"},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},l={args:{url:"https://faion.net/blog/building-first-mvp",title:"Building Your First MVP: A Complete Guide",platforms:["twitter","linkedin","facebook","copy"]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},a={args:{url:"https://faion.net/blog/building-first-mvp",title:"Building Your First MVP: A Complete Guide",platforms:["twitter"]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},c={args:{url:"https://faion.net/blog/building-first-mvp",title:"Building Your First MVP: A Complete Guide",platforms:["copy"]},decorators:[t=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(t,{})})]},d={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px"},children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"13px",color:"#4A4A4A"},children:"Jan 15, 2026 · 8 min read"})}),e.jsx(p,{url:"https://faion.net/blog/building-first-mvp",title:"Building Your First MVP"})]}),e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"36px",fontWeight:700,lineHeight:1.2,color:"#1C1C1E"},children:"Building Your First MVP: A Complete Guide"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide'
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide',
    platforms: ['twitter', 'linkedin', 'facebook', 'copy']
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide',
    platforms: ['twitter']
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    url: 'https://faion.net/blog/building-first-mvp',
    title: 'Building Your First MVP: A Complete Guide',
    platforms: ['copy']
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    }}>
        <div>
          <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#4A4A4A'
        }}>
            Jan 15, 2026 · 8 min read
          </span>
        </div>
        <ShareButtons url="https://faion.net/blog/building-first-mvp" title="Building Your First MVP" />
      </div>
      <h1 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1C1C1E'
    }}>
        Building Your First MVP: A Complete Guide
      </h1>
    </article>
}`,...d.parameters?.docs?.source}}};const M=["Default","AllPlatforms","TwitterOnly","CopyOnly","InArticleHeader"];export{l as AllPlatforms,c as CopyOnly,s as Default,d as InArticleHeader,a as TwitterOnly,M as __namedExportsOrder,F as default};
