import{j as e}from"./iframe-B_omF_R9.js";import{P as t}from"./PremiumContent-C7GKKaoi.js";import"./preload-helper-Ct5FWWRu.js";import"./LockedBadge-Bib7e-34.js";/* empty css                    *//* empty css                       */const y={title:"Paywall/PremiumContent",component:t,parameters:{layout:"padded",docs:{description:{component:"Wrapper component for premium content sections with locked/unlocked states."}}},tags:["autodocs"],argTypes:{isLocked:{control:"boolean",description:"Whether content is locked"},tier:{control:"select",options:["plus","pro","team","ultimate"],description:"Required tier"},showHeader:{control:"boolean",description:"Show header with badge"},highlighted:{control:"boolean",description:"Highlighted border"},label:{control:"text",description:"Label text"}}},r=()=>e.jsxs("div",{style:{fontFamily:"Inter, sans-serif"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"20px",marginBottom:"12px",color:"#1C1C1E"},children:"Step-by-Step Implementation Guide"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"16px"},children:"Follow these detailed steps to implement the SDD methodology in your project. Each step includes practical examples and code snippets."}),e.jsxs("ol",{style:{color:"#4A4A4A",lineHeight:1.7,paddingLeft:"20px",marginBottom:"16px"},children:[e.jsx("li",{style:{marginBottom:"8px"},children:"Create your specification document"}),e.jsx("li",{style:{marginBottom:"8px"},children:"Define acceptance criteria"}),e.jsx("li",{style:{marginBottom:"8px"},children:"Generate implementation tasks"}),e.jsx("li",{style:{marginBottom:"8px"},children:"Execute with quality gates"})]}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7},children:"The framework ensures consistent quality while accelerating your development workflow."})]}),n={args:{isLocked:!1,tier:"plus",label:"Premium Content",showHeader:!0},render:o=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{...o,children:e.jsx(r,{})})})},i={args:{isLocked:!0,tier:"plus",label:"Premium Content",showHeader:!0,unlockTitle:"Unlock This Guide",unlockText:"Get instant access to step-by-step instructions.",unlockButtonText:"Get Plus Access"},render:o=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{...o,children:e.jsx(r,{})})})},s={args:{isLocked:!0,tier:"pro",label:"Pro Content",showHeader:!0,unlockTitle:"Pro Feature",unlockText:"Upgrade to Pro for commercial usage rights.",unlockButtonText:"Upgrade to Pro"},render:o=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{...o,children:e.jsx(r,{})})})},l={args:{isLocked:!1,tier:"plus",label:"Featured Methodology",showHeader:!0,highlighted:!0},render:o=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{...o,children:e.jsx(r,{})})})},a={args:{isLocked:!1,tier:"plus",showHeader:!1},render:o=>e.jsx("div",{style:{maxWidth:"640px"},children:e.jsx(t,{...o,children:e.jsx(r,{})})})},c={render:()=>e.jsxs("div",{style:{maxWidth:"720px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",marginBottom:"16px",color:"#1C1C1E"},children:"How to Build a Solo Business"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"This comprehensive guide covers everything you need to know about building a successful solo business from scratch."}),e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",marginBottom:"12px",color:"#1C1C1E"},children:"Introduction"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"32px"},children:"Many aspiring solopreneurs struggle to find a clear path forward. This guide will give you the framework you need to succeed."}),e.jsx(t,{isLocked:!0,tier:"plus",label:"Premium Section",unlockTitle:"Continue Reading",unlockText:"Subscribe to access the full methodology guide.",unlockButtonText:"Get Plus for $19/month",children:e.jsx(r,{})}),e.jsxs("div",{style:{marginTop:"32px"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",marginBottom:"12px",color:"#1C1C1E"},children:"Conclusion"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7},children:"With the right methodology, anyone can build a profitable solo business."})]})]})},d={render:()=>e.jsxs("div",{style:{maxWidth:"720px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{tier:"plus",label:"Plus Feature",isLocked:!1,children:e.jsxs("div",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A"},children:[e.jsx("strong",{children:"Basic Methodology"})," - Available with Plus subscription"]})}),e.jsx(t,{tier:"pro",label:"Pro Feature",isLocked:!0,unlockTitle:"Pro Required",unlockText:"This advanced feature requires Pro.",unlockButtonText:"Upgrade",children:e.jsxs("div",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A"},children:[e.jsx("strong",{children:"Advanced Templates"})," - Commercial usage templates"]})}),e.jsx(t,{tier:"ultimate",label:"Ultimate Feature",isLocked:!0,highlighted:!0,unlockTitle:"Ultimate Required",unlockText:"Enterprise features for large teams.",unlockButtonText:"Get Ultimate",children:e.jsxs("div",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A"},children:[e.jsx("strong",{children:"SSO Configuration"})," - Enterprise single sign-on setup"]})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: false,
    tier: 'plus',
    label: 'Premium Content',
    showHeader: true
  },
  render: args => <div style={{
    maxWidth: '640px'
  }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: true,
    tier: 'plus',
    label: 'Premium Content',
    showHeader: true,
    unlockTitle: 'Unlock This Guide',
    unlockText: 'Get instant access to step-by-step instructions.',
    unlockButtonText: 'Get Plus Access'
  },
  render: args => <div style={{
    maxWidth: '640px'
  }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: true,
    tier: 'pro',
    label: 'Pro Content',
    showHeader: true,
    unlockTitle: 'Pro Feature',
    unlockText: 'Upgrade to Pro for commercial usage rights.',
    unlockButtonText: 'Upgrade to Pro'
  },
  render: args => <div style={{
    maxWidth: '640px'
  }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: false,
    tier: 'plus',
    label: 'Featured Methodology',
    showHeader: true,
    highlighted: true
  },
  render: args => <div style={{
    maxWidth: '640px'
  }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isLocked: false,
    tier: 'plus',
    showHeader: false
  },
  render: args => <div style={{
    maxWidth: '640px'
  }}>
      <PremiumContent {...args}>
        <SampleContent />
      </PremiumContent>
    </div>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h1 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '32px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        How to Build a Solo Business
      </h1>
      <p style={{
      color: '#4A4A4A',
      lineHeight: 1.7,
      marginBottom: '24px'
    }}>
        This comprehensive guide covers everything you need to know about building
        a successful solo business from scratch.
      </p>

      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      marginBottom: '12px',
      color: '#1C1C1E'
    }}>
        Introduction
      </h2>
      <p style={{
      color: '#4A4A4A',
      lineHeight: 1.7,
      marginBottom: '32px'
    }}>
        Many aspiring solopreneurs struggle to find a clear path forward. This guide
        will give you the framework you need to succeed.
      </p>

      <PremiumContent isLocked={true} tier="plus" label="Premium Section" unlockTitle="Continue Reading" unlockText="Subscribe to access the full methodology guide." unlockButtonText="Get Plus for $19/month">
        <SampleContent />
      </PremiumContent>

      <div style={{
      marginTop: '32px'
    }}>
        <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        marginBottom: '12px',
        color: '#1C1C1E'
      }}>
          Conclusion
        </h2>
        <p style={{
        color: '#4A4A4A',
        lineHeight: 1.7
      }}>
          With the right methodology, anyone can build a profitable solo business.
        </p>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <PremiumContent tier="plus" label="Plus Feature" isLocked={false}>
        <div style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A'
      }}>
          <strong>Basic Methodology</strong> - Available with Plus subscription
        </div>
      </PremiumContent>

      <PremiumContent tier="pro" label="Pro Feature" isLocked={true} unlockTitle="Pro Required" unlockText="This advanced feature requires Pro." unlockButtonText="Upgrade">
        <div style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A'
      }}>
          <strong>Advanced Templates</strong> - Commercial usage templates
        </div>
      </PremiumContent>

      <PremiumContent tier="ultimate" label="Ultimate Feature" isLocked={true} highlighted unlockTitle="Ultimate Required" unlockText="Enterprise features for large teams." unlockButtonText="Get Ultimate">
        <div style={{
        fontFamily: 'Inter, sans-serif',
        color: '#4A4A4A'
      }}>
          <strong>SSO Configuration</strong> - Enterprise single sign-on setup
        </div>
      </PremiumContent>
    </div>
}`,...d.parameters?.docs?.source}}};const f=["Unlocked","Locked","ProTier","Highlighted","NoHeader","InArticleContext","MultipleBlocks"];export{l as Highlighted,c as InArticleContext,i as Locked,d as MultipleBlocks,a as NoHeader,s as ProTier,n as Unlocked,f as __namedExportsOrder,y as default};
