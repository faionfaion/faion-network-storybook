import{j as e}from"./iframe-B_omF_R9.js";import"./PaywallOverlay-Bgfnmi5c.js";import"./PaywallCTA-C-gRdULe.js";import"./ContentGate-CpnbBMWE.js";import"./PremiumContent-C7GKKaoi.js";import"./PremiumLoadingSkeleton-DZo68rDk.js";import{L as q}from"./LockedBadge-Bib7e-34.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";/* empty css                       *//* empty css                   *//* empty css                    *//* empty css                       *//* empty css                               *//* empty css                    */const I=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),k=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),_=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),U={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"};function i({title:t,excerpt:u,imageUrl:g,imageAlt:b,category:f,date:h,readTime:y,difficulty:m,isPremium:j=!1,premiumTier:T="plus",variant:A="default",onClick:x,href:v,className:S=""}){const D=["fn-article-card",`fn-article-card--${A}`,S].filter(Boolean).join(" "),w=()=>{x?x():v&&(window.location.href=v)},C=p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),w())};return e.jsxs("article",{className:D,onClick:w,onKeyDown:C,role:"link",tabIndex:0,children:[e.jsxs("div",{className:"fn-article-card__image",children:[g?e.jsx("img",{src:g,alt:b||t,loading:"lazy"}):e.jsx("div",{className:"fn-article-card__image-placeholder",children:e.jsx("div",{className:"fn-article-card__image-placeholder-icon",children:e.jsx(_,{})})}),f&&e.jsx("span",{className:"fn-article-card__category-badge",children:f}),j&&e.jsx("div",{className:"fn-article-card__premium-badge",children:e.jsx(q,{tier:T,size:"small"})})]}),e.jsxs("div",{className:"fn-article-card__content",children:[e.jsx("h3",{className:"fn-article-card__title",children:t}),u&&e.jsx("p",{className:"fn-article-card__excerpt",children:u}),e.jsxs("div",{className:"fn-article-card__meta",children:[h&&e.jsxs("span",{className:"fn-article-card__meta-item",children:[e.jsx("span",{className:"fn-article-card__meta-icon",children:e.jsx(I,{})}),h]}),y&&e.jsxs("span",{className:"fn-article-card__meta-item",children:[e.jsx("span",{className:"fn-article-card__meta-icon",children:e.jsx(k,{})}),y," min read"]}),m&&e.jsx("span",{className:`fn-article-card__difficulty fn-article-card__difficulty--${m}`,children:U[m]})]})]})]})}i.__docgenInfo={description:`ArticleCard - Card component for article previews

Displays article with image, title, excerpt, and metadata.`,methods:[],displayName:"ArticleCard",props:{title:{required:!0,tsType:{name:"string"},description:"Article title"},excerpt:{required:!1,tsType:{name:"string"},description:"Article excerpt"},imageUrl:{required:!1,tsType:{name:"string"},description:"Featured image URL"},imageAlt:{required:!1,tsType:{name:"string"},description:"Image alt text"},category:{required:!1,tsType:{name:"string"},description:"Category name"},date:{required:!1,tsType:{name:"string"},description:"Publication date"},readTime:{required:!1,tsType:{name:"number"},description:"Read time in minutes"},difficulty:{required:!1,tsType:{name:"union",raw:"'beginner' | 'intermediate' | 'advanced'",elements:[{name:"literal",value:"'beginner'"},{name:"literal",value:"'intermediate'"},{name:"literal",value:"'advanced'"}]},description:"Difficulty level"},isPremium:{required:!1,tsType:{name:"boolean"},description:"Whether article is premium",defaultValue:{value:"false",computed:!1}},premiumTier:{required:!1,tsType:{name:"union",raw:"'plus' | 'pro' | 'team' | 'ultimate'",elements:[{name:"literal",value:"'plus'"},{name:"literal",value:"'pro'"},{name:"literal",value:"'team'"},{name:"literal",value:"'ultimate'"}]},description:"Premium tier required",defaultValue:{value:"'plus'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'horizontal' | 'compact' | 'featured'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'featured'"}]},description:"Card variant",defaultValue:{value:"'default'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},href:{required:!1,tsType:{name:"string"},description:"Article URL for link"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const $={title:"Content/ArticleCard",component:i,parameters:{layout:"centered",docs:{description:{component:"Card component for displaying article previews with image, title, excerpt, and metadata."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","horizontal","compact","featured"],description:"Card variant"},difficulty:{control:"select",options:["beginner","intermediate","advanced"],description:"Difficulty level"},isPremium:{control:"boolean",description:"Whether article is premium"}}},r={args:{title:"How to Build a $20K/month Solo Business",excerpt:"Learn the proven methodology that successful solopreneurs use to build sustainable businesses from scratch.",imageUrl:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",category:"Business",date:"Jan 15, 2026",readTime:12,difficulty:"beginner"},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})]},a={args:{title:"Advanced SDD Implementation Patterns",excerpt:"Deep dive into specification-driven development with real-world examples and code samples.",imageUrl:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",category:"Development",date:"Jan 18, 2026",readTime:18,difficulty:"advanced",isPremium:!0,premiumTier:"pro"},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})]},n={args:{title:"Getting Started with AI Agents",excerpt:"A beginner-friendly introduction to building AI agents using the Faion Network framework.",category:"AI/ML",date:"Jan 20, 2026",readTime:8,difficulty:"beginner"},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})]},s={args:{title:"Complete Guide to RAG Pipelines",excerpt:"Everything you need to know about building production-ready Retrieval Augmented Generation systems.",imageUrl:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",category:"AI/ML",date:"Jan 12, 2026",readTime:25,difficulty:"intermediate",variant:"horizontal"},decorators:[t=>e.jsx("div",{style:{width:"720px"},children:e.jsx(t,{})})]},o={args:{title:"Quick Start: SDD in 5 Minutes",excerpt:"Get started with Specification-Driven Development in just 5 minutes.",imageUrl:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",category:"Guide",date:"Jan 21, 2026",readTime:5,difficulty:"beginner",variant:"compact"},decorators:[t=>e.jsx("div",{style:{width:"280px"},children:e.jsx(t,{})})]},d={args:{title:"The Ultimate Solopreneur Guide: From Employee to $20K/month",excerpt:"Our flagship guide covering everything from finding your niche to scaling your solo business. Includes 500+ methodologies across 15 skills.",imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",category:"Featured",date:"Jan 1, 2026",readTime:45,difficulty:"beginner",variant:"featured",isPremium:!0},decorators:[t=>e.jsx("div",{style:{width:"480px"},children:e.jsx(t,{})})]},c={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px",maxWidth:"1200px"},children:[e.jsx(i,{title:"Introduction to SDD",excerpt:"Learn the fundamentals of Specification-Driven Development.",imageUrl:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",category:"Methodology",date:"Jan 15, 2026",readTime:8,difficulty:"beginner"}),e.jsx(i,{title:"Building Your First AI Agent",excerpt:"Step-by-step guide to creating an AI agent using our framework.",imageUrl:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",category:"AI/ML",date:"Jan 16, 2026",readTime:15,difficulty:"intermediate",isPremium:!0}),e.jsx(i,{title:"Market Research Methodology",excerpt:"How to validate your business idea before building.",imageUrl:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",category:"Research",date:"Jan 17, 2026",readTime:10,difficulty:"beginner"}),e.jsx(i,{title:"DevOps for Solopreneurs",excerpt:"Setting up CI/CD pipelines when you are a one-person team.",imageUrl:"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",category:"DevOps",date:"Jan 18, 2026",readTime:20,difficulty:"advanced",isPremium:!0,premiumTier:"pro"}),e.jsx(i,{title:"UX Research on a Budget",excerpt:"Conducting effective user research without breaking the bank.",imageUrl:"https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",category:"UX/UI",date:"Jan 19, 2026",readTime:12,difficulty:"beginner"}),e.jsx(i,{title:"Landing Page Optimization",excerpt:"Increase conversions with these proven landing page techniques.",imageUrl:"https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",category:"Marketing",date:"Jan 20, 2026",readTime:14,difficulty:"intermediate",isPremium:!0})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{title:"Getting Started Guide",excerpt:"Perfect for beginners new to the framework.",category:"Guide",date:"Jan 21, 2026",readTime:5,difficulty:"beginner"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{title:"Configuration Deep Dive",excerpt:"For those who have completed the basics.",category:"Guide",date:"Jan 21, 2026",readTime:15,difficulty:"intermediate"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{title:"Custom Extensions",excerpt:"Advanced patterns for experienced users.",category:"Guide",date:"Jan 21, 2026",readTime:25,difficulty:"advanced"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'How to Build a $20K/month Solo Business',
    excerpt: 'Learn the proven methodology that successful solopreneurs use to build sustainable businesses from scratch.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    category: 'Business',
    date: 'Jan 15, 2026',
    readTime: 12,
    difficulty: 'beginner'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Advanced SDD Implementation Patterns',
    excerpt: 'Deep dive into specification-driven development with real-world examples and code samples.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    category: 'Development',
    date: 'Jan 18, 2026',
    readTime: 18,
    difficulty: 'advanced',
    isPremium: true,
    premiumTier: 'pro'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Getting Started with AI Agents',
    excerpt: 'A beginner-friendly introduction to building AI agents using the Faion Network framework.',
    category: 'AI/ML',
    date: 'Jan 20, 2026',
    readTime: 8,
    difficulty: 'beginner'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Complete Guide to RAG Pipelines',
    excerpt: 'Everything you need to know about building production-ready Retrieval Augmented Generation systems.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    category: 'AI/ML',
    date: 'Jan 12, 2026',
    readTime: 25,
    difficulty: 'intermediate',
    variant: 'horizontal'
  },
  decorators: [Story => <div style={{
    width: '720px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick Start: SDD in 5 Minutes',
    excerpt: 'Get started with Specification-Driven Development in just 5 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    category: 'Guide',
    date: 'Jan 21, 2026',
    readTime: 5,
    difficulty: 'beginner',
    variant: 'compact'
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'The Ultimate Solopreneur Guide: From Employee to $20K/month',
    excerpt: 'Our flagship guide covering everything from finding your niche to scaling your solo business. Includes 500+ methodologies across 15 skills.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    category: 'Featured',
    date: 'Jan 1, 2026',
    readTime: 45,
    difficulty: 'beginner',
    variant: 'featured',
    isPremium: true
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    maxWidth: '1200px'
  }}>
      <ArticleCard title="Introduction to SDD" excerpt="Learn the fundamentals of Specification-Driven Development." imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" category="Methodology" date="Jan 15, 2026" readTime={8} difficulty="beginner" />
      <ArticleCard title="Building Your First AI Agent" excerpt="Step-by-step guide to creating an AI agent using our framework." imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" category="AI/ML" date="Jan 16, 2026" readTime={15} difficulty="intermediate" isPremium />
      <ArticleCard title="Market Research Methodology" excerpt="How to validate your business idea before building." imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" category="Research" date="Jan 17, 2026" readTime={10} difficulty="beginner" />
      <ArticleCard title="DevOps for Solopreneurs" excerpt="Setting up CI/CD pipelines when you are a one-person team." imageUrl="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80" category="DevOps" date="Jan 18, 2026" readTime={20} difficulty="advanced" isPremium premiumTier="pro" />
      <ArticleCard title="UX Research on a Budget" excerpt="Conducting effective user research without breaking the bank." imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" category="UX/UI" date="Jan 19, 2026" readTime={12} difficulty="beginner" />
      <ArticleCard title="Landing Page Optimization" excerpt="Increase conversions with these proven landing page techniques." imageUrl="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80" category="Marketing" date="Jan 20, 2026" readTime={14} difficulty="intermediate" isPremium />
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <div style={{
      width: '300px'
    }}>
        <ArticleCard title="Getting Started Guide" excerpt="Perfect for beginners new to the framework." category="Guide" date="Jan 21, 2026" readTime={5} difficulty="beginner" />
      </div>
      <div style={{
      width: '300px'
    }}>
        <ArticleCard title="Configuration Deep Dive" excerpt="For those who have completed the basics." category="Guide" date="Jan 21, 2026" readTime={15} difficulty="intermediate" />
      </div>
      <div style={{
      width: '300px'
    }}>
        <ArticleCard title="Custom Extensions" excerpt="Advanced patterns for experienced users." category="Guide" date="Jan 21, 2026" readTime={25} difficulty="advanced" />
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const V=["Default","WithPremiumBadge","NoImage","Horizontal","Compact","Featured","ArticleGrid","AllDifficulties"];export{l as AllDifficulties,c as ArticleGrid,o as Compact,r as Default,d as Featured,s as Horizontal,n as NoImage,a as WithPremiumBadge,V as __namedExportsOrder,$ as default};
