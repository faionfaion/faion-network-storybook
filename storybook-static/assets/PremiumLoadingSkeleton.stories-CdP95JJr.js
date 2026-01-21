import{j as e}from"./iframe-B_omF_R9.js";import{P as d}from"./PremiumLoadingSkeleton-DZo68rDk.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                               */const h={title:"Paywall/PremiumLoadingSkeleton",component:d,parameters:{layout:"padded",docs:{description:{component:"Loading skeleton for premium content areas with shimmer animation."}}},tags:["autodocs"],argTypes:{layout:{control:"select",options:["article","card","grid"],description:"Layout preset"},lines:{control:{type:"range",min:1,max:8},description:"Number of lines"},showTitle:{control:"boolean",description:"Show title skeleton"},showMedia:{control:"boolean",description:"Show media skeleton"},columns:{control:"select",options:[2,3],description:"Grid columns"},cardCount:{control:{type:"range",min:1,max:9},description:"Number of cards"}}},r={args:{layout:"article",lines:4,showTitle:!0,showMedia:!1}},o={args:{layout:"article",lines:4,showTitle:!0,showMedia:!0,mediaAspect:"video"}},s={args:{layout:"card"}},a={args:{layout:"grid",columns:2,cardCount:4}},t={args:{layout:"grid",columns:3,cardCount:6}},n={args:{layout:"article",lines:2,showTitle:!0,showMedia:!1}},i={args:{layout:"article",lines:0,showTitle:!1,showMedia:!0,mediaAspect:"wide"}},c={render:()=>e.jsxs("div",{style:{padding:"32px",background:"#FAF9F6",borderRadius:"8px",border:"1px solid #E5E5E0"},children:[e.jsx("div",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"24px",textAlign:"center"},children:"Checking subscription status..."}),e.jsx(d,{layout:"article",lines:4,showTitle:!0,showMedia:!0})]})},l={render:()=>e.jsxs("div",{children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",color:"#1C1C1E",marginBottom:"24px"},children:"Loading methodologies..."}),e.jsx(d,{layout:"grid",columns:3,cardCount:6})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'article',
    lines: 4,
    showTitle: true,
    showMedia: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'article',
    lines: 4,
    showTitle: true,
    showMedia: true,
    mediaAspect: 'video'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'card'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 2,
    cardCount: 4
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3,
    cardCount: 6
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'article',
    lines: 2,
    showTitle: true,
    showMedia: false
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'article',
    lines: 0,
    showTitle: false,
    showMedia: true,
    mediaAspect: 'wide'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '32px',
    background: '#FAF9F6',
    borderRadius: '8px',
    border: '1px solid #E5E5E0'
  }}>
      <div style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      marginBottom: '24px',
      textAlign: 'center'
    }}>
        Checking subscription status...
      </div>
      <PremiumLoadingSkeleton layout="article" lines={4} showTitle={true} showMedia={true} />
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      color: '#1C1C1E',
      marginBottom: '24px'
    }}>
        Loading methodologies...
      </h2>
      <PremiumLoadingSkeleton layout="grid" columns={3} cardCount={6} />
    </div>
}`,...l.parameters?.docs?.source}}};const y=["Article","ArticleWithMedia","Card","Grid2Columns","Grid3Columns","MinimalLines","MediaOnly","InContentGateContext","MultipleCards"];export{r as Article,o as ArticleWithMedia,s as Card,a as Grid2Columns,t as Grid3Columns,c as InContentGateContext,i as MediaOnly,n as MinimalLines,l as MultipleCards,y as __namedExportsOrder,h as default};
