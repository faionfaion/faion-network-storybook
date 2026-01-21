import{j as e}from"./iframe-B_omF_R9.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";function h({headline:p,subheadline:d,primaryCta:y="Get Started",secondaryCta:u,onPrimaryClick:f,onSecondaryClick:g,avatars:n=[],socialProofText:c,stats:m=[]}){return e.jsx("section",{className:"fn-hero",children:e.jsxs("div",{className:"fn-hero__container",children:[e.jsxs("div",{className:"fn-hero__content",children:[e.jsx("h1",{className:"fn-hero__headline",children:p}),d&&e.jsx("p",{className:"fn-hero__subheadline",children:d}),e.jsxs("div",{className:"fn-hero__ctas",children:[e.jsx("button",{className:"fn-hero__cta fn-hero__cta--primary",onClick:f,children:y}),u&&e.jsx("button",{className:"fn-hero__cta fn-hero__cta--secondary",onClick:g,children:u})]}),(n.length>0||c)&&e.jsxs("div",{className:"fn-hero__social-proof",children:[n.length>0&&e.jsx("div",{className:"fn-hero__avatars",children:n.slice(0,5).map((a,r)=>e.jsx("div",{className:"fn-hero__avatar",style:{zIndex:n.length-r},children:a.src?e.jsx("img",{src:a.src,alt:a.alt}):e.jsx("span",{children:a.initials||a.alt.charAt(0)})},r))}),c&&e.jsx("p",{className:"fn-hero__social-text",children:c})]})]}),m.length>0&&e.jsx("div",{className:"fn-hero__stats",children:m.map((a,r)=>e.jsxs("div",{className:"fn-hero__stat",children:[e.jsx("span",{className:"fn-hero__stat-value",children:a.value}),e.jsx("span",{className:"fn-hero__stat-label",children:a.label})]},r))})]})})}h.__docgenInfo={description:`HeroSection - Landing page hero component

Full-width section with headline, subheadline, CTAs, and social proof.
Follows the "Digital Journal" theme with Warm Alabaster background.`,methods:[],displayName:"HeroSection",props:{headline:{required:!0,tsType:{name:"ReactNode"},description:"Main headline"},subheadline:{required:!1,tsType:{name:"string"},description:"Subheadline text"},primaryCta:{required:!1,tsType:{name:"string"},description:"Primary CTA button text",defaultValue:{value:"'Get Started'",computed:!1}},secondaryCta:{required:!1,tsType:{name:"string"},description:"Secondary CTA button text"},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Primary CTA click handler"},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Secondary CTA click handler"},avatars:{required:!1,tsType:{name:"Array",elements:[{name:"SocialProofAvatar"}],raw:"SocialProofAvatar[]"},description:"Social proof avatars",defaultValue:{value:"[]",computed:!1}},socialProofText:{required:!1,tsType:{name:"string"},description:"Social proof text"},stats:{required:!1,tsType:{name:"Array",elements:[{name:"HeroStat"}],raw:"HeroStat[]"},description:"Statistics to display",defaultValue:{value:"[]",computed:!1}}}};const w={title:"FAION/Landing/HeroSection",component:h,parameters:{layout:"fullscreen",docs:{description:{component:`
Landing page hero section following the "Digital Journal" theme.

## Features
- Full-width Warm Alabaster background
- Serif headline with sans-serif subheadline
- Primary (Deep Burgundy) and secondary CTAs
- Social proof with avatars
- Key statistics display

## Props
- **headline**: Main headline (supports ReactNode for emphasis)
- **subheadline**: Supporting text
- **primaryCta/secondaryCta**: Button text
- **avatars**: Social proof avatars
- **stats**: Key statistics to display
        `}}},tags:["autodocs"],argTypes:{primaryCta:{control:"text"},secondaryCta:{control:"text"},onPrimaryClick:{action:"primary-click"},onSecondaryClick:{action:"secondary-click"}}},s={args:{headline:e.jsxs(e.Fragment,{children:["The Ultimate Solopreneur Guide",e.jsx("br",{}),e.jsx("span",{style:{color:"#5D1F2D"},children:"+SDD Framework"})]}),subheadline:"One person can earn $20K+/month working for themselves. We will show you how to find your niche, start while employed, and reach full income in 18-24 months.",primaryCta:"Get Started",secondaryCta:"Learn More",avatars:[{initials:"JW",alt:"Justin Welsh"},{initials:"DK",alt:"Dan Koe"},{initials:"SA",alt:"Sahil A"},{initials:"TF",alt:"Tim Ferriss"}],socialProofText:"Join 5,000+ solopreneurs already learning",stats:[{value:"502",label:"Methodologies"},{value:"15",label:"Skills"},{value:"$20K+",label:"Target Income"}]}},t={name:"Minimal (No Stats)",args:{headline:"Build Your Solo Business",subheadline:"Learn the frameworks and methodologies used by successful solopreneurs.",primaryCta:"Start Free"}},o={name:"Without Social Proof",args:{headline:e.jsxs(e.Fragment,{children:["502 Proven Methodologies",e.jsx("br",{}),"for Solopreneurs"]}),subheadline:"From idea validation to scaling your business. Everything you need in one framework.",primaryCta:"Explore Methodologies",secondaryCta:"View Pricing",stats:[{value:"15",label:"Skills"},{value:"502",label:"Methodologies"},{value:"1",label:"AI Agent"}]}},i={name:"Product Launch Style",args:{headline:e.jsxs(e.Fragment,{children:["Introducing Faion Network",e.jsx("br",{}),e.jsx("span",{style:{color:"#5D1F2D"},children:"AI-Powered Development"})]}),subheadline:"The complete framework for building products with AI. From specification to deployment.",primaryCta:"Join Waitlist",secondaryCta:"Watch Demo",avatars:[{initials:"A",alt:"User A"},{initials:"B",alt:"User B"},{initials:"C",alt:"User C"},{initials:"D",alt:"User D"},{initials:"E",alt:"User E"}],socialProofText:"2,847 developers on the waitlist"}},l={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"}},args:{headline:"The Ultimate Solopreneur Guide",subheadline:"Learn how to build a $20K+/month solo business.",primaryCta:"Get Started",secondaryCta:"Learn More",stats:[{value:"502",label:"Methodologies"},{value:"15",label:"Skills"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    headline: <>
        The Ultimate Solopreneur Guide<br />
        <span style={{
        color: '#5D1F2D'
      }}>+SDD Framework</span>
      </>,
    subheadline: 'One person can earn $20K+/month working for themselves. We will show you how to find your niche, start while employed, and reach full income in 18-24 months.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
    avatars: [{
      initials: 'JW',
      alt: 'Justin Welsh'
    }, {
      initials: 'DK',
      alt: 'Dan Koe'
    }, {
      initials: 'SA',
      alt: 'Sahil A'
    }, {
      initials: 'TF',
      alt: 'Tim Ferriss'
    }],
    socialProofText: 'Join 5,000+ solopreneurs already learning',
    stats: [{
      value: '502',
      label: 'Methodologies'
    }, {
      value: '15',
      label: 'Skills'
    }, {
      value: '$20K+',
      label: 'Target Income'
    }]
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Minimal (No Stats)',
  args: {
    headline: 'Build Your Solo Business',
    subheadline: 'Learn the frameworks and methodologies used by successful solopreneurs.',
    primaryCta: 'Start Free'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Without Social Proof',
  args: {
    headline: <>
        502 Proven Methodologies<br />
        for Solopreneurs
      </>,
    subheadline: 'From idea validation to scaling your business. Everything you need in one framework.',
    primaryCta: 'Explore Methodologies',
    secondaryCta: 'View Pricing',
    stats: [{
      value: '15',
      label: 'Skills'
    }, {
      value: '502',
      label: 'Methodologies'
    }, {
      value: '1',
      label: 'AI Agent'
    }]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Product Launch Style',
  args: {
    headline: <>
        Introducing Faion Network<br />
        <span style={{
        color: '#5D1F2D'
      }}>AI-Powered Development</span>
      </>,
    subheadline: 'The complete framework for building products with AI. From specification to deployment.',
    primaryCta: 'Join Waitlist',
    secondaryCta: 'Watch Demo',
    avatars: [{
      initials: 'A',
      alt: 'User A'
    }, {
      initials: 'B',
      alt: 'User B'
    }, {
      initials: 'C',
      alt: 'User C'
    }, {
      initials: 'D',
      alt: 'User D'
    }, {
      initials: 'E',
      alt: 'User E'
    }],
    socialProofText: '2,847 developers on the waitlist'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    headline: 'The Ultimate Solopreneur Guide',
    subheadline: 'Learn how to build a $20K+/month solo business.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
    stats: [{
      value: '502',
      label: 'Methodologies'
    }, {
      value: '15',
      label: 'Skills'
    }]
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","Minimal","WithoutSocialProof","ProductLaunch","MobileView"];export{s as Default,t as Minimal,l as MobileView,i as ProductLaunch,o as WithoutSocialProof,x as __namedExportsOrder,w as default};
