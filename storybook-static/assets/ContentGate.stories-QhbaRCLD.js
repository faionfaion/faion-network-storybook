import{j as e}from"./iframe-B_omF_R9.js";import{C as t}from"./ContentGate-CpnbBMWE.js";import{P as p}from"./PaywallOverlay-Bgfnmi5c.js";import{P as m}from"./PaywallCTA-C-gRdULe.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                    *//* empty css                       *//* empty css                   */const j={title:"Paywall/ContentGate",component:t,parameters:{layout:"padded",docs:{description:{component:"Content gating component that shows different content based on subscription status."}}},tags:["autodocs"],argTypes:{requiredTier:{control:"select",options:["free","plus","pro","team","ultimate"],description:"Minimum required tier"},currentTier:{control:"select",options:["free","plus","pro","team","ultimate"],description:"Current user tier"},isLoading:{control:"boolean",description:"Loading state"},hasAccess:{control:"boolean",description:"Override access check"}}},s=()=>e.jsxs("div",{style:{padding:"32px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",marginBottom:"16px",color:"#1C1C1E"},children:"Premium Content Unlocked"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",lineHeight:1.7,marginBottom:"16px"},children:"Congratulations! You have access to this premium content. Here is the detailed step-by-step guide for implementing the methodology..."}),e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"12px",color:"#1C1C1E"},children:"Step 1: Research Your Market"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",lineHeight:1.7,marginBottom:"16px"},children:"Begin by identifying your target audience. Use the SCAMPER framework to analyze existing solutions and find opportunities for improvement. Here are the specific questions to ask..."}),e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"12px",color:"#1C1C1E"},children:"Step 2: Validate Your Idea"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",lineHeight:1.7},children:"Use the Mom Test methodology to validate your idea without leading questions. Here is a template for your validation interviews..."})]}),g=()=>e.jsxs("div",{style:{fontFamily:"Inter, system-ui, sans-serif",maxWidth:"720px"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",marginBottom:"16px",color:"#1C1C1E"},children:"How to Build a $20K/month Solo Business"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"Building a successful solo business requires a systematic approach. In this comprehensive guide, we will explore the proven methodologies used by successful solopreneurs."}),e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",marginBottom:"12px",color:"#1C1C1E"},children:"The Problem"}),e.jsx("p",{style:{color:"#4A4A4A",lineHeight:1.7,marginBottom:"24px"},children:"Most aspiring solopreneurs fail not because of lack of skills, but because they lack a structured methodology. They jump from tactic to tactic, never building real momentum."})]}),i={args:{requiredTier:"plus",currentTier:"plus",isLoading:!1},render:r=>e.jsx(t,{...r,children:e.jsx(s,{})})},a={args:{requiredTier:"plus",currentTier:"free",isLoading:!1},render:r=>e.jsx(t,{...r,fallback:e.jsx(m,{headline:"Unlock This Content",valueProp:"Get access to this methodology and 500+ more.",price:"$19",period:"/month",ctaText:"Get Plus Access"}),children:e.jsx(s,{})})},o={args:{requiredTier:"plus",currentTier:"free",isLoading:!1},render:r=>e.jsx(t,{...r,fallback:e.jsx(p,{title:"Premium Content",description:"Get full access to this article and 500+ methodologies.",ctaText:"Get Plus for $19/month",children:e.jsx(g,{})}),children:e.jsx(s,{})})},n={args:{requiredTier:"plus",currentTier:"free",isLoading:!0},render:r=>e.jsx(t,{...r,children:e.jsx(s,{})})},l={args:{requiredTier:"pro",currentTier:"plus",isLoading:!1},render:r=>e.jsx(t,{...r,fallback:e.jsx(m,{headline:"Pro Plan Required",valueProp:"This methodology is available for Pro subscribers with commercial usage rights.",price:"$35",period:"/month",ctaText:"Upgrade to Pro",features:[{text:"Commercial usage license"},{text:"Client project rights"},{text:"SSO authentication"}]}),children:e.jsx(s,{})})},c={args:{requiredTier:"ultimate",currentTier:"pro",isLoading:!1},render:r=>e.jsx(t,{...r,fallback:e.jsx(m,{headline:"Ultimate Plan Required",valueProp:"This feature is available for Ultimate subscribers with team management.",price:"$2,100",period:"/year",ctaText:"Get Ultimate",badge:"Enterprise",highlighted:!0}),children:e.jsx(s,{})})},d={args:{requiredTier:"plus",currentTier:"free",isLoading:!0},render:r=>e.jsx(t,{...r,loadingComponent:e.jsxs("div",{style:{textAlign:"center",padding:"48px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",border:"4px solid #E5E5E0",borderTopColor:"#5D1F2D",borderRadius:"50%",animation:"spin 1s linear infinite",margin:"0 auto 16px"}}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A"},children:"Checking subscription status..."}),e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}),children:e.jsx(s,{})})},u={args:{requiredTier:"ultimate",currentTier:"free",hasAccess:!0,isLoading:!1},render:r=>e.jsx(t,{...r,fallback:e.jsx(m,{headline:"You should not see this"}),children:e.jsx(s,{})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'plus',
    currentTier: 'plus',
    isLoading: false
  },
  render: args => <ContentGate {...args}>
      <PremiumContent />
    </ContentGate>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: false
  },
  render: args => <ContentGate {...args} fallback={<PaywallCTA headline="Unlock This Content" valueProp="Get access to this methodology and 500+ more." price="$19" period="/month" ctaText="Get Plus Access" />}>
      <PremiumContent />
    </ContentGate>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: false
  },
  render: args => <ContentGate {...args} fallback={<PaywallOverlay title="Premium Content" description="Get full access to this article and 500+ methodologies." ctaText="Get Plus for $19/month">
          <ArticlePreview />
        </PaywallOverlay>}>
      <PremiumContent />
    </ContentGate>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: true
  },
  render: args => <ContentGate {...args}>
      <PremiumContent />
    </ContentGate>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'pro',
    currentTier: 'plus',
    isLoading: false
  },
  render: args => <ContentGate {...args} fallback={<PaywallCTA headline="Pro Plan Required" valueProp="This methodology is available for Pro subscribers with commercial usage rights." price="$35" period="/month" ctaText="Upgrade to Pro" features={[{
    text: 'Commercial usage license'
  }, {
    text: 'Client project rights'
  }, {
    text: 'SSO authentication'
  }]} />}>
      <PremiumContent />
    </ContentGate>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'ultimate',
    currentTier: 'pro',
    isLoading: false
  },
  render: args => <ContentGate {...args} fallback={<PaywallCTA headline="Ultimate Plan Required" valueProp="This feature is available for Ultimate subscribers with team management." price="$2,100" period="/year" ctaText="Get Ultimate" badge="Enterprise" highlighted />}>
      <PremiumContent />
    </ContentGate>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'plus',
    currentTier: 'free',
    isLoading: true
  },
  render: args => <ContentGate {...args} loadingComponent={<div style={{
    textAlign: 'center',
    padding: '48px'
  }}>
          <div style={{
      width: '48px',
      height: '48px',
      border: '4px solid #E5E5E0',
      borderTopColor: '#5D1F2D',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '0 auto 16px'
    }} />
          <p style={{
      fontFamily: 'Inter, sans-serif',
      color: '#4A4A4A'
    }}>
            Checking subscription status...
          </p>
          <style>{\`@keyframes spin { to { transform: rotate(360deg); } }\`}</style>
        </div>}>
      <PremiumContent />
    </ContentGate>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    requiredTier: 'ultimate',
    currentTier: 'free',
    hasAccess: true,
    isLoading: false
  },
  render: args => <ContentGate {...args} fallback={<PaywallCTA headline="You should not see this" />}>
      <PremiumContent />
    </ContentGate>
}`,...u.parameters?.docs?.source}}};const A=["HasAccess","NoAccess","WithPaywallOverlay","Loading","ProRequired","UltimateRequired","CustomLoading","AccessOverride"];export{u as AccessOverride,d as CustomLoading,i as HasAccess,n as Loading,a as NoAccess,l as ProRequired,c as UltimateRequired,o as WithPaywallOverlay,A as __namedExportsOrder,j as default};
