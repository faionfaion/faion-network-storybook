import{j as e}from"./iframe-B_omF_R9.js";/* empty css                           */import"./preload-helper-Ct5FWWRu.js";function b({headline:d,asSeenInText:u="Trusted by solopreneurs at",logos:m=[],badges:p=[],metrics:g=[],variant:x="default"}){return e.jsx("section",{className:`fn-credibility fn-credibility--${x}`,children:e.jsxs("div",{className:"fn-credibility__container",children:[d&&e.jsx("h2",{className:"fn-credibility__headline",children:d}),g.length>0&&e.jsx("div",{className:"fn-credibility__metrics",children:g.map((s,f)=>e.jsxs("div",{className:"fn-credibility__metric",children:[e.jsx("span",{className:"fn-credibility__metric-value",children:s.value}),e.jsx("span",{className:"fn-credibility__metric-label",children:s.label})]},f))}),m.length>0&&e.jsxs("div",{className:"fn-credibility__logos-wrapper",children:[u&&e.jsx("p",{className:"fn-credibility__logos-label",children:u}),e.jsx("div",{className:"fn-credibility__logos",children:m.map(s=>e.jsx("div",{className:"fn-credibility__logo",children:s.url?e.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer","aria-label":s.name,children:s.logo||(s.logoUrl?e.jsx("img",{src:s.logoUrl,alt:s.name}):e.jsx("span",{className:"fn-credibility__logo-placeholder",children:s.name}))}):s.logo||(s.logoUrl?e.jsx("img",{src:s.logoUrl,alt:s.name}):e.jsx("span",{className:"fn-credibility__logo-placeholder",children:s.name}))},s.id))})]}),p.length>0&&e.jsx("div",{className:"fn-credibility__badges",children:p.map(s=>e.jsxs("div",{className:"fn-credibility__badge",children:[s.icon&&e.jsx("span",{className:"fn-credibility__badge-icon",children:s.icon}),e.jsxs("div",{className:"fn-credibility__badge-content",children:[e.jsx("span",{className:"fn-credibility__badge-text",children:s.text}),s.subtext&&e.jsx("span",{className:"fn-credibility__badge-subtext",children:s.subtext})]})]},s.id))})]})})}b.__docgenInfo={description:`CredibilitySection - Landing page trust/credibility section

Builds trust with logos, badges, and social proof.
Follows the "Digital Journal" theme with subtle styling.`,methods:[],displayName:"CredibilitySection",props:{headline:{required:!1,tsType:{name:"ReactNode"},description:"Section headline"},asSeenInText:{required:!1,tsType:{name:"string"},description:'"As seen in" or "Trusted by" text',defaultValue:{value:"'Trusted by solopreneurs at'",computed:!1}},logos:{required:!1,tsType:{name:"Array",elements:[{name:"CredibilityLogo"}],raw:"CredibilityLogo[]"},description:"Partner/feature logos",defaultValue:{value:"[]",computed:!1}},badges:{required:!1,tsType:{name:"Array",elements:[{name:"CredibilityBadge"}],raw:"CredibilityBadge[]"},description:"Trust badges",defaultValue:{value:"[]",computed:!1}},metrics:{required:!1,tsType:{name:"Array",elements:[{name:"CredibilityMetric"}],raw:"CredibilityMetric[]"},description:"Key metrics",defaultValue:{value:"[]",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'centered'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'centered'"}]},description:"Layout variant",defaultValue:{value:"'default'",computed:!1}}}};const w={title:"Landing/CredibilitySection",component:b,parameters:{layout:"fullscreen",docs:{description:{component:"Credibility section with trust badges, partner logos, and key metrics. Builds trust with subtle, professional styling."}}},tags:["autodocs"]},v=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),e.jsx("path",{d:"M9 12l2 2 4-4"})]}),_=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),j=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),S=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),c=[{id:"1",name:"TechCrunch"},{id:"2",name:"Forbes"},{id:"3",name:"Product Hunt"},{id:"4",name:"Indie Hackers"},{id:"5",name:"Hacker News"}],y=[{id:"1",icon:e.jsx(v,{}),text:"Secure & Private",subtext:"SOC 2 Type II"},{id:"2",icon:e.jsx(_,{}),text:"4.9/5 Rating",subtext:"500+ reviews"},{id:"3",icon:e.jsx(j,{}),text:"GDPR Compliant",subtext:"Data protection"},{id:"4",icon:e.jsx(S,{}),text:"8 Languages",subtext:"Global reach"}],h=[{value:"502",label:"Methodologies"},{value:"15",label:"Skills"},{value:"2,500+",label:"Active Users"},{value:"50+",label:"Countries"}],a={args:{headline:"Trusted by Thousands of Solopreneurs",asSeenInText:"As seen in",logos:c,badges:y,metrics:h}},r={args:{asSeenInText:"Featured in",logos:c}},i={args:{headline:"The Numbers Speak",metrics:h}},t={args:{headline:"Built for Trust",badges:y}},n={args:{asSeenInText:"Trusted by teams at",logos:c,variant:"minimal"}},l={args:{headline:"Join Our Community",metrics:[{value:"10K+",label:"Email Subscribers"},{value:"98%",label:"Satisfaction Rate"},{value:"24/7",label:"Support"}],variant:"centered"}},o={args:{headline:"Used by Solopreneurs Building the Future",asSeenInText:"Featured in leading publications",logos:c}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Trusted by Thousands of Solopreneurs',
    asSeenInText: 'As seen in',
    logos: sampleLogos,
    badges: sampleBadges,
    metrics: sampleMetrics
  }
}`,...a.parameters?.docs?.source},description:{story:"Full credibility section with all elements",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    asSeenInText: 'Featured in',
    logos: sampleLogos
  }
}`,...r.parameters?.docs?.source},description:{story:"Logos only (As seen in)",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'The Numbers Speak',
    metrics: sampleMetrics
  }
}`,...i.parameters?.docs?.source},description:{story:"Metrics only",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Built for Trust',
    badges: sampleBadges
  }
}`,...t.parameters?.docs?.source},description:{story:"Trust badges only",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    asSeenInText: 'Trusted by teams at',
    logos: sampleLogos,
    variant: 'minimal'
  }
}`,...n.parameters?.docs?.source},description:{story:"Minimal variant",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Join Our Community',
    metrics: [{
      value: '10K+',
      label: 'Email Subscribers'
    }, {
      value: '98%',
      label: 'Satisfaction Rate'
    }, {
      value: '24/7',
      label: 'Support'
    }],
    variant: 'centered'
  }
}`,...l.parameters?.docs?.source},description:{story:"Centered variant",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Used by Solopreneurs Building the Future',
    asSeenInText: 'Featured in leading publications',
    logos: sampleLogos
  }
}`,...o.parameters?.docs?.source},description:{story:"With headline and logos",...o.parameters?.docs?.description}}};const B=["Default","LogosOnly","MetricsOnly","BadgesOnly","Minimal","Centered","WithHeadline"];export{t as BadgesOnly,l as Centered,a as Default,r as LogosOnly,i as MetricsOnly,n as Minimal,o as WithHeadline,B as __namedExportsOrder,w as default};
