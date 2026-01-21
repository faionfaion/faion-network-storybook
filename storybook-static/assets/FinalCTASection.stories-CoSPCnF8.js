import{j as e}from"./iframe-B_omF_R9.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";function l({headline:u,subheadline:i,primaryCta:d="Get Started Now",secondaryCta:o,onPrimaryClick:c,onSecondaryClick:m,variant:p="default"}){return e.jsx("section",{className:`fn-final-cta fn-final-cta--${p}`,children:e.jsxs("div",{className:"fn-final-cta__container",children:[e.jsx("h2",{className:"fn-final-cta__headline",children:u}),i&&e.jsx("p",{className:"fn-final-cta__subheadline",children:i}),e.jsxs("div",{className:"fn-final-cta__buttons",children:[e.jsx("button",{className:"fn-final-cta__btn fn-final-cta__btn--primary",onClick:c,children:d}),o&&e.jsx("button",{className:"fn-final-cta__btn fn-final-cta__btn--secondary",onClick:m,children:o})]})]})})}l.__docgenInfo={description:`FinalCTASection - Landing page final call-to-action section

Strong closing section encouraging conversion.`,methods:[],displayName:"FinalCTASection",props:{headline:{required:!0,tsType:{name:"string"},description:"Section headline"},subheadline:{required:!1,tsType:{name:"string"},description:"Optional subheadline"},primaryCta:{required:!1,tsType:{name:"string"},description:"Primary CTA button text",defaultValue:{value:"'Get Started Now'",computed:!1}},secondaryCta:{required:!1,tsType:{name:"string"},description:"Secondary CTA button text"},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Primary CTA click handler"},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Secondary CTA click handler"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'burgundy'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'burgundy'"}]},description:"Background variant",defaultValue:{value:"'default'",computed:!1}}}};const h={title:"FAION/Landing/FinalCTASection",component:l,parameters:{layout:"fullscreen",docs:{description:{component:`
Final call-to-action section for landing pages.

## Features
- Two variants: default (Warm Alabaster) and burgundy
- Primary and optional secondary CTA buttons
- Large, impactful headline
- Responsive layout

## Usage
Place at the bottom of landing pages before the footer as a strong closing call-to-action.
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","burgundy"]},onPrimaryClick:{action:"primary-click"},onSecondaryClick:{action:"secondary-click"}}},a={args:{headline:"Ready to Start Your Solopreneur Journey?",subheadline:"Join thousands of solopreneurs who are building successful businesses with our proven methodologies.",primaryCta:"Get Started Now",secondaryCta:"View Pricing"}},n={name:"Burgundy Background",args:{headline:"Start Building Today",subheadline:"502 methodologies, 15 skills, 1 AI agent. Everything you need to succeed as a solopreneur.",primaryCta:"Start Free Trial",secondaryCta:"Contact Sales",variant:"burgundy"}},r={name:"Single CTA",args:{headline:"Join the Waitlist",subheadline:"Be the first to know when we launch. No spam, just updates.",primaryCta:"Join Now",variant:"default"}},t={name:"Burgundy Single CTA",args:{headline:"Transform Your Business",subheadline:"Learn the frameworks used by successful solopreneurs.",primaryCta:"Get Access",variant:"burgundy"}},s={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"}},args:{headline:"Ready to Start?",subheadline:"Join thousands building successful businesses.",primaryCta:"Get Started",secondaryCta:"Learn More",variant:"burgundy"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Ready to Start Your Solopreneur Journey?',
    subheadline: 'Join thousands of solopreneurs who are building successful businesses with our proven methodologies.',
    primaryCta: 'Get Started Now',
    secondaryCta: 'View Pricing'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Burgundy Background',
  args: {
    headline: 'Start Building Today',
    subheadline: '502 methodologies, 15 skills, 1 AI agent. Everything you need to succeed as a solopreneur.',
    primaryCta: 'Start Free Trial',
    secondaryCta: 'Contact Sales',
    variant: 'burgundy'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Single CTA',
  args: {
    headline: 'Join the Waitlist',
    subheadline: 'Be the first to know when we launch. No spam, just updates.',
    primaryCta: 'Join Now',
    variant: 'default'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Burgundy Single CTA',
  args: {
    headline: 'Transform Your Business',
    subheadline: 'Learn the frameworks used by successful solopreneurs.',
    primaryCta: 'Get Access',
    variant: 'burgundy'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    headline: 'Ready to Start?',
    subheadline: 'Join thousands building successful businesses.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
    variant: 'burgundy'
  }
}`,...s.parameters?.docs?.source}}};const b=["Default","BurgundyVariant","SingleCTA","BurgundySingleCTA","MobileView"];export{t as BurgundySingleCTA,n as BurgundyVariant,a as Default,s as MobileView,r as SingleCTA,b as __namedExportsOrder,h as default};
