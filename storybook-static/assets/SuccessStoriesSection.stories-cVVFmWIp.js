import{j as e}from"./iframe-B_omF_R9.js";/* empty css                              */import"./preload-helper-Ct5FWWRu.js";function m({headline:h="Real Results from Real Solopreneurs",subheadline:c="See how others transformed their careers using our methodologies.",stories:d=[],viewAllText:p="View All Success Stories",onViewAllClick:u}){return e.jsx("section",{className:"fn-success",children:e.jsxs("div",{className:"fn-success__container",children:[e.jsxs("div",{className:"fn-success__header",children:[e.jsx("h2",{className:"fn-success__headline",children:h}),c&&e.jsx("p",{className:"fn-success__subheadline",children:c})]}),d.length>0&&e.jsx("div",{className:"fn-success__grid",children:d.map(s=>e.jsxs("div",{className:"fn-success__card",onClick:s.onClick,role:s.onClick?"button":void 0,tabIndex:s.onClick?0:void 0,children:[e.jsxs("div",{className:"fn-success__person",children:[e.jsx("div",{className:"fn-success__avatar",children:s.avatar?e.jsx("img",{src:s.avatar,alt:s.name}):e.jsx("span",{children:s.initials||s.name.charAt(0)})}),e.jsxs("div",{className:"fn-success__person-info",children:[e.jsx("span",{className:"fn-success__name",children:s.name}),e.jsxs("span",{className:"fn-success__role",children:[s.role,s.company&&` at ${s.company}`]})]})]}),e.jsxs("p",{className:"fn-success__excerpt",children:['"',s.excerpt,'"']}),s.metrics.length>0&&e.jsx("div",{className:"fn-success__metrics",children:s.metrics.map((r,f)=>e.jsxs("div",{className:"fn-success__metric",children:[e.jsx("span",{className:"fn-success__metric-label",children:r.label}),e.jsxs("div",{className:"fn-success__metric-values",children:[e.jsx("span",{className:"fn-success__metric-before",children:r.before}),e.jsx("span",{className:"fn-success__metric-arrow",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4 10H16M16 10L11 5M16 10L11 15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("span",{className:"fn-success__metric-after",children:r.after})]})]},f))}),s.caseStudyUrl&&e.jsxs("a",{href:s.caseStudyUrl,className:"fn-success__link",onClick:r=>r.stopPropagation(),children:["Read Full Story",e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3 8H13M13 8L9 4M13 8L9 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]},s.id))}),u&&e.jsx("div",{className:"fn-success__cta",children:e.jsx("button",{className:"fn-success__cta-button",onClick:u,children:p})})]})})}m.__docgenInfo={description:`SuccessStoriesSection - Landing page success stories showcase

Displays real solopreneur outcomes with before/after metrics.
Follows the "Digital Journal" theme.`,methods:[],displayName:"SuccessStoriesSection",props:{headline:{required:!1,tsType:{name:"ReactNode"},description:"Section headline",defaultValue:{value:"'Real Results from Real Solopreneurs'",computed:!1}},subheadline:{required:!1,tsType:{name:"string"},description:"Section subheadline",defaultValue:{value:"'See how others transformed their careers using our methodologies.'",computed:!1}},stories:{required:!1,tsType:{name:"Array",elements:[{name:"SuccessStory"}],raw:"SuccessStory[]"},description:"Success stories",defaultValue:{value:"[]",computed:!1}},viewAllText:{required:!1,tsType:{name:"string"},description:"CTA text for viewing all stories",defaultValue:{value:"'View All Success Stories'",computed:!1}},onViewAllClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"View all click handler"}}};const x={title:"Landing/SuccessStoriesSection",component:m,parameters:{layout:"fullscreen",docs:{description:{component:"Success stories section showcasing real solopreneur outcomes with before/after metrics and case study links."}}},tags:["autodocs"]},l=[{id:"1",name:"Alex Chen",role:"Indie SaaS Founder",initials:"AC",excerpt:"The SDD methodology helped me go from idea to $15K MRR in 8 months. The structured approach eliminated my analysis paralysis completely.",metrics:[{label:"Monthly Revenue",before:"$0",after:"$15K"},{label:"Time to MVP",before:"6 months",after:"6 weeks"}],caseStudyUrl:"#alex-chen"},{id:"2",name:"Maria Santos",role:"UX Consultant",company:"Design Studio",initials:"MS",excerpt:"I went from freelancing at $50/hour to running a productized service earning $25K/month. The marketing methodologies were game-changing.",metrics:[{label:"Monthly Income",before:"$4K",after:"$25K"},{label:"Client Acquisition",before:"Cold outreach",after:"Inbound"}],caseStudyUrl:"#maria-santos"},{id:"3",name:"David Kumar",role:"Technical Writer",initials:"DK",excerpt:"The content strategy framework helped me build an audience of 50K and launch an info-product that generates $8K/month passively.",metrics:[{label:"Monthly Passive Income",before:"$0",after:"$8K"},{label:"Email Subscribers",before:"200",after:"12K"}],caseStudyUrl:"#david-kumar"}],g=[...l,{id:"4",name:"Sarah Johnson",role:"AI Developer",initials:"SJ",excerpt:"The AI/ML methodologies accelerated my learning curve dramatically. Now I build and sell AI tools generating $20K/month.",metrics:[{label:"Monthly Revenue",before:"Employed",after:"$20K"},{label:"Products Launched",before:"0",after:"3"}],caseStudyUrl:"#sarah-johnson"},{id:"5",name:"James Wilson",role:"No-Code Developer",initials:"JW",excerpt:"Even without coding skills, I built a micro-SaaS using the product methodologies. $6K MRR and growing.",metrics:[{label:"Monthly Revenue",before:"$0",after:"$6K"}],caseStudyUrl:"#james-wilson"},{id:"6",name:"Emily Zhang",role:"Course Creator",initials:"EZ",excerpt:"The launch frameworks helped me sell 1,200 copies of my course in the first week. Best investment I ever made.",metrics:[{label:"Launch Revenue",before:"N/A",after:"$48K"},{label:"Time to Create",before:"3 months",after:"4 weeks"}],caseStudyUrl:"#emily-zhang"}],a={args:{headline:"Real Results from Real Solopreneurs",subheadline:"See how others transformed their careers using our methodologies.",stories:l,viewAllText:"View All Success Stories",onViewAllClick:()=>console.log("View all clicked")}},i={args:{headline:"From Side Hustle to Full Income",subheadline:"Join hundreds of solopreneurs who built sustainable businesses.",stories:g,viewAllText:"See More Stories",onViewAllClick:()=>console.log("View all clicked")}},n={args:{headline:"Featured Success Story",stories:[l[0]]}},o={args:{headline:"What Our Members Achieved",subheadline:"Real outcomes from the Faion Network community.",stories:l}},t={args:{headline:"Quick Wins",stories:[{id:"1",name:"Quick Starter",role:"Solopreneur",initials:"QS",excerpt:"Got my first paying customer within 2 weeks of starting.",metrics:[{label:"Time to First Customer",before:"Never",after:"2 weeks"}]},{id:"2",name:"Late Bloomer",role:"Career Changer",initials:"LB",excerpt:"At 45, I finally made the switch. Never been happier.",metrics:[{label:"Income Change",before:"$80K/yr",after:"$150K/yr"}]}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Real Results from Real Solopreneurs',
    subheadline: 'See how others transformed their careers using our methodologies.',
    stories: sampleStories,
    viewAllText: 'View All Success Stories',
    onViewAllClick: () => console.log('View all clicked')
  }
}`,...a.parameters?.docs?.source},description:{story:"Default with three success stories",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'From Side Hustle to Full Income',
    subheadline: 'Join hundreds of solopreneurs who built sustainable businesses.',
    stories: moreStories,
    viewAllText: 'See More Stories',
    onViewAllClick: () => console.log('View all clicked')
  }
}`,...i.parameters?.docs?.source},description:{story:"Extended grid with six stories",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Featured Success Story',
    stories: [sampleStories[0]]
  }
}`,...n.parameters?.docs?.source},description:{story:"Single featured story",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'What Our Members Achieved',
    subheadline: 'Real outcomes from the Faion Network community.',
    stories: sampleStories
  }
}`,...o.parameters?.docs?.source},description:{story:"Without CTA button",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Quick Wins',
    stories: [{
      id: '1',
      name: 'Quick Starter',
      role: 'Solopreneur',
      initials: 'QS',
      excerpt: 'Got my first paying customer within 2 weeks of starting.',
      metrics: [{
        label: 'Time to First Customer',
        before: 'Never',
        after: '2 weeks'
      }]
    }, {
      id: '2',
      name: 'Late Bloomer',
      role: 'Career Changer',
      initials: 'LB',
      excerpt: 'At 45, I finally made the switch. Never been happier.',
      metrics: [{
        label: 'Income Change',
        before: '$80K/yr',
        after: '$150K/yr'
      }]
    }]
  }
}`,...t.parameters?.docs?.source},description:{story:"Minimal metrics",...t.parameters?.docs?.description}}};const v=["Default","ExtendedGrid","SingleStory","WithoutCTA","MinimalMetrics"];export{a as Default,i as ExtendedGrid,t as MinimalMetrics,n as SingleStory,o as WithoutCTA,v as __namedExportsOrder,x as default};
