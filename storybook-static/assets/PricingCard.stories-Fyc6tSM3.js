import{j as e}from"./iframe-B_omF_R9.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";const P=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),C=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function t({name:r,description:l,price:g,period:u="/month",originalPrice:p,features:f,ctaText:h="Get Started",onCtaClick:y,recommended:o=!1,recommendedText:v="Most Popular",disabled:T=!1,badge:m}){return e.jsxs("div",{className:`fn-pricing-card ${o?"fn-pricing-card--recommended":""}`,children:[(o||m)&&e.jsx("div",{className:"fn-pricing-card__badge",children:m||v}),e.jsxs("div",{className:"fn-pricing-card__header",children:[e.jsx("h3",{className:"fn-pricing-card__name",children:r}),l&&e.jsx("p",{className:"fn-pricing-card__description",children:l})]}),e.jsxs("div",{className:"fn-pricing-card__price",children:[p&&e.jsx("span",{className:"fn-pricing-card__original",children:p}),e.jsx("span",{className:"fn-pricing-card__amount",children:g}),u&&e.jsx("span",{className:"fn-pricing-card__period",children:u})]}),e.jsx("button",{className:`fn-pricing-card__cta ${o?"fn-pricing-card__cta--primary":"fn-pricing-card__cta--secondary"}`,onClick:y,disabled:T,children:h}),e.jsx("ul",{className:"fn-pricing-card__features",children:f.map((n,F)=>e.jsxs("li",{className:`fn-pricing-card__feature ${n.included?"":"fn-pricing-card__feature--excluded"}`,title:n.tooltip,children:[e.jsx("span",{className:"fn-pricing-card__feature-icon",children:n.included?e.jsx(P,{}):e.jsx(C,{})}),e.jsx("span",{className:"fn-pricing-card__feature-text",children:n.text})]},F))})]})}t.__docgenInfo={description:`PricingCard - Individual pricing plan card

Displays plan details, features, and CTA.`,methods:[],displayName:"PricingCard",props:{name:{required:!0,tsType:{name:"string"},description:"Plan name"},description:{required:!1,tsType:{name:"string"},description:"Plan description"},price:{required:!0,tsType:{name:"string"},description:"Price amount"},period:{required:!1,tsType:{name:"string"},description:'Price period (e.g., "/month", "/year")',defaultValue:{value:"'/month'",computed:!1}},originalPrice:{required:!1,tsType:{name:"string"},description:"Original price if discounted"},features:{required:!0,tsType:{name:"Array",elements:[{name:"PricingFeature"}],raw:"PricingFeature[]"},description:"Features list"},ctaText:{required:!1,tsType:{name:"string"},description:"CTA button text",defaultValue:{value:"'Get Started'",computed:!1}},onCtaClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"CTA click handler"},recommended:{required:!1,tsType:{name:"boolean"},description:"Is this the recommended plan",defaultValue:{value:"false",computed:!1}},recommendedText:{required:!1,tsType:{name:"string"},description:"Recommended badge text",defaultValue:{value:"'Most Popular'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Is the CTA disabled",defaultValue:{value:"false",computed:!1}},badge:{required:!1,tsType:{name:"ReactNode"},description:"Custom badge"}}};const N={title:"FAION/Pricing/PricingCard",component:t,parameters:{layout:"centered",docs:{description:{component:`
Individual pricing plan card.

## Features
- Plan name and description
- Price display with optional original price
- Primary and secondary CTA variants
- Feature list with included/excluded states
- Recommended badge support

## Variants
- Default: Secondary CTA button
- Recommended: Primary CTA button with badge
        `}}},tags:["autodocs"],argTypes:{recommended:{control:"boolean"},disabled:{control:"boolean"},onCtaClick:{action:"cta-click"}}},j=[{text:"Full methodology access",included:!0},{text:"All agents and skills",included:!0},{text:"Personal use license",included:!0},{text:"1 MCP connection",included:!0},{text:"Commercial use",included:!1},{text:"Team management",included:!1}],x=[{text:"Full methodology access",included:!0},{text:"All agents and skills",included:!0},{text:"Commercial use license",included:!0},{text:"SSO authentication",included:!0},{text:"1 MCP connection",included:!0},{text:"Team management",included:!1}],i={args:{name:"Plus",description:"For solopreneurs and aspiring entrepreneurs",price:"$19",period:"/month",features:j,ctaText:"Get Started"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},a={args:{name:"Pro",description:"For freelancers and agencies",price:"$35",period:"/month",features:x,ctaText:"Start Free Trial",recommended:!0,recommendedText:"Most Popular"},decorators:[r=>e.jsx("div",{style:{width:"320px",paddingTop:"20px"},children:e.jsx(r,{})})]},s={name:"With Discount",args:{name:"Pro Annual",description:"Best value for professionals",price:"$29",originalPrice:"$35",period:"/month",features:x,ctaText:"Save 17%",recommended:!0,recommendedText:"Best Value"},decorators:[r=>e.jsx("div",{style:{width:"320px",paddingTop:"20px"},children:e.jsx(r,{})})]},d={name:"Free Tier",args:{name:"Free",description:"For evaluation and non-commercial use",price:"$0",period:"/forever",features:[{text:"Limited methodology access (30%)",included:!0},{text:"Non-commercial use only",included:!0},{text:"1 MCP connection",included:!0},{text:"Full methodology access",included:!1},{text:"Commercial use",included:!1}],ctaText:"Start Free"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},c={name:"Pricing Comparison",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",padding:"20px"},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{name:"Free",description:"For evaluation",price:"$0",period:"/forever",features:[{text:"30% methodology access",included:!0},{text:"Non-commercial only",included:!0},{text:"Commercial use",included:!1}],ctaText:"Start Free"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{name:"Plus",description:"For solopreneurs",price:"$19",period:"/month",features:[{text:"Full methodology access",included:!0},{text:"Personal use license",included:!0},{text:"Commercial use",included:!1}],ctaText:"Get Started"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{name:"Pro",description:"For professionals",price:"$35",period:"/month",features:[{text:"Full methodology access",included:!0},{text:"Commercial license",included:!0},{text:"SSO authentication",included:!0}],ctaText:"Start Trial",recommended:!0})})]}),parameters:{layout:"fullscreen"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Plus',
    description: 'For solopreneurs and aspiring entrepreneurs',
    price: '$19',
    period: '/month',
    features: plusFeatures,
    ctaText: 'Get Started'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Pro',
    description: 'For freelancers and agencies',
    price: '$35',
    period: '/month',
    features: proFeatures,
    ctaText: 'Start Free Trial',
    recommended: true,
    recommendedText: 'Most Popular'
  },
  decorators: [Story => <div style={{
    width: '320px',
    paddingTop: '20px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Discount',
  args: {
    name: 'Pro Annual',
    description: 'Best value for professionals',
    price: '$29',
    originalPrice: '$35',
    period: '/month',
    features: proFeatures,
    ctaText: 'Save 17%',
    recommended: true,
    recommendedText: 'Best Value'
  },
  decorators: [Story => <div style={{
    width: '320px',
    paddingTop: '20px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Free Tier',
  args: {
    name: 'Free',
    description: 'For evaluation and non-commercial use',
    price: '$0',
    period: '/forever',
    features: [{
      text: 'Limited methodology access (30%)',
      included: true
    }, {
      text: 'Non-commercial use only',
      included: true
    }, {
      text: '1 MCP connection',
      included: true
    }, {
      text: 'Full methodology access',
      included: false
    }, {
      text: 'Commercial use',
      included: false
    }],
    ctaText: 'Start Free'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Pricing Comparison',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      width: '300px'
    }}>
        <PricingCard name="Free" description="For evaluation" price="$0" period="/forever" features={[{
        text: '30% methodology access',
        included: true
      }, {
        text: 'Non-commercial only',
        included: true
      }, {
        text: 'Commercial use',
        included: false
      }]} ctaText="Start Free" />
      </div>
      <div style={{
      width: '300px'
    }}>
        <PricingCard name="Plus" description="For solopreneurs" price="$19" period="/month" features={[{
        text: 'Full methodology access',
        included: true
      }, {
        text: 'Personal use license',
        included: true
      }, {
        text: 'Commercial use',
        included: false
      }]} ctaText="Get Started" />
      </div>
      <div style={{
      width: '300px'
    }}>
        <PricingCard name="Pro" description="For professionals" price="$35" period="/month" features={[{
        text: 'Full methodology access',
        included: true
      }, {
        text: 'Commercial license',
        included: true
      }, {
        text: 'SSO authentication',
        included: true
      }]} ctaText="Start Trial" recommended />
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...c.parameters?.docs?.source}}};const $=["Default","Recommended","WithDiscount","FreeTier","PricingComparison"];export{i as Default,d as FreeTier,c as PricingComparison,a as Recommended,s as WithDiscount,$ as __namedExportsOrder,N as default};
