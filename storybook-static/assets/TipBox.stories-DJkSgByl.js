import{j as e}from"./iframe-B_omF_R9.js";/* empty css               */import"./preload-helper-Ct5FWWRu.js";const w={tip:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M9 18h6"}),e.jsx("path",{d:"M10 22h4"}),e.jsx("path",{d:"M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"})]}),warning:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),info:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),success:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),error:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]})},b={tip:"Tip",warning:"Warning",info:"Note",success:"Success",error:"Error"};function i({variant:t="tip",title:m,children:g,compact:v=!1,icon:f,className:j=""}){const x=m!==void 0?m:b[t],y=x!=="",T=["fn-tip-box",`fn-tip-box--${t}`,v&&"fn-tip-box--compact",!y&&"fn-tip-box--no-title",j].filter(Boolean).join(" ");return e.jsxs("div",{className:T,role:"note",children:[e.jsx("span",{className:"fn-tip-box__icon",children:f||w[t]}),e.jsxs("div",{className:"fn-tip-box__content",children:[y&&e.jsx("p",{className:"fn-tip-box__title",children:x}),e.jsx("div",{className:"fn-tip-box__text",children:g})]})]})}i.__docgenInfo={description:`TipBox - MDX callout component with variants

Styled boxes for important information: tip, warning, info, success, error.`,methods:[],displayName:"TipBox",props:{variant:{required:!1,tsType:{name:"union",raw:"'tip' | 'warning' | 'info' | 'success' | 'error'",elements:[{name:"literal",value:"'tip'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:"Variant type",defaultValue:{value:"'tip'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Optional title"},children:{required:!0,tsType:{name:"ReactNode"},description:"Content text or children"},compact:{required:!1,tsType:{name:"boolean"},description:"Compact size",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const W={title:"MDX/TipBox",component:i,parameters:{layout:"padded",docs:{description:{component:"MDX callout component with tip, warning, info, success, and error variants."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["tip","warning","info","success","error"],description:"Variant type"},title:{control:"text",description:"Optional title"},compact:{control:"boolean",description:"Compact size"}}},r={args:{variant:"tip",children:"Use the SCAMPER framework when brainstorming new product ideas. It helps you think systematically about improvements to existing solutions."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},o={args:{variant:"warning",children:"Make sure to validate your idea before investing significant time in development. Many founders skip this step and regret it later."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},a={args:{variant:"info",children:"This methodology is part of the faion-researcher skill and can be accessed via MCP server."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},n={args:{variant:"success",children:"You have completed all the prerequisites! You can now proceed to the advanced topics."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},s={args:{variant:"error",children:"This approach is deprecated. Please refer to the updated methodology in the next section."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},l={render:()=>e.jsxs("div",{style:{maxWidth:"640px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{variant:"tip",children:"This is a helpful tip for better results."}),e.jsx(i,{variant:"warning",children:"Be careful when modifying this configuration."}),e.jsx(i,{variant:"info",children:"Additional information about this feature."}),e.jsx(i,{variant:"success",children:"Your changes have been saved successfully."}),e.jsx(i,{variant:"error",children:"An error occurred. Please try again."})]})},c={args:{variant:"tip",title:"Pro Tip",children:"Combine this methodology with the Mom Test for better validation results."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},d={args:{variant:"info",title:"",children:"This is a note without a title. Sometimes you just need a simple callout."},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]},p={render:()=>e.jsxs("div",{style:{maxWidth:"480px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(i,{variant:"tip",compact:!0,children:"Quick tip: Start small."}),e.jsx(i,{variant:"warning",compact:!0,children:"Warning: This action cannot be undone."}),e.jsx(i,{variant:"info",compact:!0,children:"Note: Requires Plus subscription."})]})},h={render:()=>e.jsxs("div",{style:{maxWidth:"720px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",marginBottom:"12px",color:"#1C1C1E"},children:"Validating Your Idea"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"0"},children:"Before you start building, it is crucial to validate that people actually want your product. The Mom Test is a framework for having these conversations without leading the witness."}),e.jsx(i,{variant:"tip",title:"Key Insight",children:"Ask about their past behavior, not hypothetical futures. People are terrible at predicting what they will do, but honest about what they have done."}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"0"},children:"Start by talking to at least 20 potential customers before writing any code. Document their pain points and look for patterns."}),e.jsx(i,{variant:"warning",children:'Avoid asking "Would you use this?" or "Would you pay for this?" These questions lead to false positives. Instead, ask about their current solutions and frustrations.'}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7},children:"Once you have validated demand, you can move on to building your MVP."})]})},u={args:{variant:"info",title:"Important Note",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginTop:0},children:"This methodology requires careful consideration of multiple factors:"}),e.jsxs("ul",{style:{marginBottom:0,paddingLeft:"20px"},children:[e.jsx("li",{children:"Market size and growth potential"}),e.jsx("li",{children:"Competition landscape analysis"}),e.jsx("li",{children:"Technical feasibility assessment"}),e.jsx("li",{children:"Go-to-market strategy alignment"})]})]})},decorators:[t=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tip',
    children: 'Use the SCAMPER framework when brainstorming new product ideas. It helps you think systematically about improvements to existing solutions.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Make sure to validate your idea before investing significant time in development. Many founders skip this step and regret it later.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This methodology is part of the faion-researcher skill and can be accessed via MCP server.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'You have completed all the prerequisites! You can now proceed to the advanced topics.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    children: 'This approach is deprecated. Please refer to the updated methodology in the next section.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '640px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <TipBox variant="tip">
        This is a helpful tip for better results.
      </TipBox>
      <TipBox variant="warning">
        Be careful when modifying this configuration.
      </TipBox>
      <TipBox variant="info">
        Additional information about this feature.
      </TipBox>
      <TipBox variant="success">
        Your changes have been saved successfully.
      </TipBox>
      <TipBox variant="error">
        An error occurred. Please try again.
      </TipBox>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tip',
    title: 'Pro Tip',
    children: 'Combine this methodology with the Mom Test for better validation results.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: '',
    children: 'This is a note without a title. Sometimes you just need a simple callout.'
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <TipBox variant="tip" compact>
        Quick tip: Start small.
      </TipBox>
      <TipBox variant="warning" compact>
        Warning: This action cannot be undone.
      </TipBox>
      <TipBox variant="info" compact>
        Note: Requires Plus subscription.
      </TipBox>
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      marginBottom: '12px',
      color: '#1C1C1E'
    }}>
        Validating Your Idea
      </h2>
      <p style={{
      color: '#4A4A4A',
      lineHeight: 1.7,
      marginBottom: '0'
    }}>
        Before you start building, it is crucial to validate that people actually want your product.
        The Mom Test is a framework for having these conversations without leading the witness.
      </p>

      <TipBox variant="tip" title="Key Insight">
        Ask about their past behavior, not hypothetical futures. People are terrible at predicting
        what they will do, but honest about what they have done.
      </TipBox>

      <p style={{
      color: '#4A4A4A',
      lineHeight: 1.7,
      marginBottom: '0'
    }}>
        Start by talking to at least 20 potential customers before writing any code.
        Document their pain points and look for patterns.
      </p>

      <TipBox variant="warning">
        Avoid asking "Would you use this?" or "Would you pay for this?" These questions
        lead to false positives. Instead, ask about their current solutions and frustrations.
      </TipBox>

      <p style={{
      color: '#4A4A4A',
      lineHeight: 1.7
    }}>
        Once you have validated demand, you can move on to building your MVP.
      </p>
    </div>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Important Note',
    children: <>
        <p style={{
        marginTop: 0
      }}>
          This methodology requires careful consideration of multiple factors:
        </p>
        <ul style={{
        marginBottom: 0,
        paddingLeft: '20px'
      }}>
          <li>Market size and growth potential</li>
          <li>Competition landscape analysis</li>
          <li>Technical feasibility assessment</li>
          <li>Go-to-market strategy alignment</li>
        </ul>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: '640px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};const A=["Tip","Warning","Info","Success","Error","AllVariants","CustomTitle","NoTitle","Compact","InArticle","WithLongContent"];export{l as AllVariants,p as Compact,c as CustomTitle,s as Error,h as InArticle,a as Info,d as NoTitle,n as Success,r as Tip,o as Warning,u as WithLongContent,A as __namedExportsOrder,W as default};
