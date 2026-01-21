import{r as j,j as e}from"./iframe-B_omF_R9.js";/* empty css                       */import"./preload-helper-Ct5FWWRu.js";const v=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),C=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function f({headline:x="Choose Your Plan",subheadline:m="Start free, upgrade when you need more.",plans:u=[],defaultAnnual:y=!1,monthlyLabel:P="Monthly",annualLabel:_="Annual",discountBadge:p="Save 20%",hideToggle:T=!1,footerText:g}){const[c,h]=j.useState(y);return e.jsx("section",{className:"fn-pricing-section",children:e.jsxs("div",{className:"fn-pricing-section__container",children:[e.jsxs("div",{className:"fn-pricing-section__header",children:[e.jsx("h2",{className:"fn-pricing-section__headline",children:x}),m&&e.jsx("p",{className:"fn-pricing-section__subheadline",children:m}),!T&&e.jsxs("div",{className:"fn-pricing-section__toggle",children:[e.jsx("button",{className:`fn-pricing-section__toggle-option ${c?"":"fn-pricing-section__toggle-option--active"}`,onClick:()=>h(!1),type:"button",children:P}),e.jsxs("button",{className:`fn-pricing-section__toggle-option ${c?"fn-pricing-section__toggle-option--active":""}`,onClick:()=>h(!0),type:"button",children:[_,p&&e.jsx("span",{className:"fn-pricing-section__toggle-badge",children:p})]})]})]}),u.length>0&&e.jsx("div",{className:`fn-pricing-section__grid fn-pricing-section__grid--${u.length}`,children:u.map(n=>e.jsxs("div",{className:`fn-pricing-section__card ${n.recommended?"fn-pricing-section__card--recommended":""}`,children:[(n.recommended||n.badge)&&e.jsx("div",{className:"fn-pricing-section__badge",children:n.badge||n.recommendedText||"Most Popular"}),e.jsxs("div",{className:"fn-pricing-section__card-header",children:[e.jsx("h3",{className:"fn-pricing-section__card-name",children:n.name}),n.description&&e.jsx("p",{className:"fn-pricing-section__card-description",children:n.description})]}),e.jsxs("div",{className:"fn-pricing-section__card-price",children:[e.jsx("span",{className:"fn-pricing-section__card-amount",children:c?n.annualPrice:n.monthlyPrice}),e.jsx("span",{className:"fn-pricing-section__card-period",children:n.period||(n.monthlyPrice==="Free"||n.monthlyPrice==="$0"?"":"/month")})]}),c&&n.monthlyPrice!=="Free"&&n.monthlyPrice!=="$0"&&e.jsx("p",{className:"fn-pricing-section__card-billing",children:"Billed annually"}),e.jsx("button",{className:`fn-pricing-section__card-cta ${n.recommended?"fn-pricing-section__card-cta--primary":"fn-pricing-section__card-cta--secondary"}`,onClick:n.onCtaClick,disabled:n.disabled,children:n.ctaText||"Get Started"}),e.jsx("ul",{className:"fn-pricing-section__card-features",children:n.features.map((d,b)=>e.jsxs("li",{className:`fn-pricing-section__card-feature ${d.included?"":"fn-pricing-section__card-feature--excluded"}`,title:d.tooltip,children:[e.jsx("span",{className:"fn-pricing-section__card-feature-icon",children:d.included?e.jsx(v,{}):e.jsx(C,{})}),e.jsx("span",{className:"fn-pricing-section__card-feature-text",children:d.text})]},b))})]},n.id))}),g&&e.jsx("div",{className:"fn-pricing-section__footer",children:g})]})})}f.__docgenInfo={description:`PricingSection - Landing page pricing display

Shows all pricing tiers with monthly/annual toggle.
Follows the "Digital Journal" theme.`,methods:[],displayName:"PricingSection",props:{headline:{required:!1,tsType:{name:"ReactNode"},description:"Section headline",defaultValue:{value:"'Choose Your Plan'",computed:!1}},subheadline:{required:!1,tsType:{name:"string"},description:"Section subheadline",defaultValue:{value:"'Start free, upgrade when you need more.'",computed:!1}},plans:{required:!1,tsType:{name:"Array",elements:[{name:"PricingPlan"}],raw:"PricingPlan[]"},description:"Pricing plans",defaultValue:{value:"[]",computed:!1}},defaultAnnual:{required:!1,tsType:{name:"boolean"},description:"Default billing period",defaultValue:{value:"false",computed:!1}},monthlyLabel:{required:!1,tsType:{name:"string"},description:"Monthly label for toggle",defaultValue:{value:"'Monthly'",computed:!1}},annualLabel:{required:!1,tsType:{name:"string"},description:"Annual label for toggle",defaultValue:{value:"'Annual'",computed:!1}},discountBadge:{required:!1,tsType:{name:"string"},description:"Discount badge for annual",defaultValue:{value:"'Save 20%'",computed:!1}},hideToggle:{required:!1,tsType:{name:"boolean"},description:"Hide toggle",defaultValue:{value:"false",computed:!1}},footerText:{required:!1,tsType:{name:"ReactNode"},description:"Footer text"}}};const M={title:"Landing/PricingSection",component:f,parameters:{layout:"fullscreen",docs:{description:{component:"Pricing section displaying all tiers with monthly/annual toggle. Shows Free, Plus, Pro, Team, and Ultimate plans."}}},tags:["autodocs"]},N=[{text:"MCP access (non-commercial)",included:!0},{text:"Limited methodologies (30%)",included:!0},{text:"1 MCP connection",included:!0},{text:"Ultimate Solopreneur Guide",included:!1},{text:"Commercial use",included:!1}],S=[{text:"Full methodology access",included:!0},{text:"All agents and skills",included:!0},{text:"Ultimate Solopreneur Guide",included:!0},{text:"Personal use (own products)",included:!0},{text:"1 MCP connection",included:!0},{text:"Commercial use",included:!1}],F=[{text:"Everything in Plus",included:!0},{text:"Commercial use allowed",included:!0},{text:"Client projects & agency work",included:!0},{text:"SSO authentication",included:!0},{text:"1 MCP connection",included:!0}],A=[{text:"Everything in Pro",included:!0},{text:"Organization dashboard",included:!0},{text:"Email invites for team",included:!0},{text:"Roles: Owner, Admin, Member",included:!0},{text:"5+ MCP connections",included:!0}],w=[{text:"Everything in Team",included:!0},{text:"20 MCP connections (fixed)",included:!0},{text:"70% discount vs Team",included:!0},{text:"Best value for teams",included:!0},{text:"Priority support",included:!0}],t=[{id:"free",name:"Free",description:"For evaluation & non-commercial use",monthlyPrice:"$0",annualPrice:"$0",features:N,ctaText:"Start Free"},{id:"plus",name:"Plus",description:"For solopreneurs building products",monthlyPrice:"$19",annualPrice:"$16",features:S,ctaText:"Get Plus"},{id:"pro",name:"Pro",description:"For freelancers & agencies",monthlyPrice:"$35",annualPrice:"$29",features:F,ctaText:"Get Pro",recommended:!0,recommendedText:"Most Popular"},{id:"team",name:"Team",description:"For growing teams (5+ seats)",monthlyPrice:"$35",annualPrice:"$29",period:"/seat/month",features:A,ctaText:"Contact Sales"},{id:"ultimate",name:"Ultimate",description:"For enterprises (20 seats)",monthlyPrice:"$2,100",annualPrice:"$2,100",period:"/year",features:w,ctaText:"Get Ultimate",badge:"Best Value"}],i={args:{headline:"Choose Your Plan",subheadline:"Start free, upgrade when you need more.",plans:t,footerText:"All plans include access to 502 methodologies. Need a custom plan? Contact us."}},s={args:{headline:"Simple, Transparent Pricing",subheadline:"No hidden fees. Cancel anytime.",plans:[t[0],{...t[1],recommended:!0,recommendedText:"Recommended"},t[2]]}},r={args:{headline:"Save 20% with Annual Billing",subheadline:"Get two months free when you pay annually.",plans:t.slice(0,4),defaultAnnual:!0}},a={args:{headline:"Enterprise Pricing",subheadline:"Volume discounts for larger teams.",plans:[t[3],t[4]],hideToggle:!0}},o={args:{headline:"Get Full Access",subheadline:"Everything you need to build your solopreneur business.",plans:[{...t[1],recommended:!0,recommendedText:"Full Access",description:"Complete methodology access, all skills, ultimate guide included."}],hideToggle:!0}},l={args:{headline:"Pricing Plans",subheadline:"Find the plan that fits your needs.",plans:t.slice(0,3),footerText:e.jsxs(e.Fragment,{children:["Need a custom enterprise solution?"," ",e.jsx("a",{href:"#contact",style:{color:"#5D1F2D",textDecoration:"underline"},children:"Contact our sales team"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Choose Your Plan',
    subheadline: 'Start free, upgrade when you need more.',
    plans: allPlans,
    footerText: 'All plans include access to 502 methodologies. Need a custom plan? Contact us.'
  }
}`,...i.parameters?.docs?.source},description:{story:"Full pricing section with 5 tiers",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Simple, Transparent Pricing',
    subheadline: 'No hidden fees. Cancel anytime.',
    plans: [allPlans[0],
    // Free
    {
      ...allPlans[1],
      recommended: true,
      recommendedText: 'Recommended'
    },
    // Plus
    allPlans[2] // Pro
    ]
  }
}`,...s.parameters?.docs?.source},description:{story:"Three main tiers only (simpler display)",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Save 20% with Annual Billing',
    subheadline: 'Get two months free when you pay annually.',
    plans: allPlans.slice(0, 4),
    defaultAnnual: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Annual billing selected by default",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Enterprise Pricing',
    subheadline: 'Volume discounts for larger teams.',
    plans: [allPlans[3], allPlans[4]],
    hideToggle: true
  }
}`,...a.parameters?.docs?.source},description:{story:"Without toggle (static pricing)",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Get Full Access',
    subheadline: 'Everything you need to build your solopreneur business.',
    plans: [{
      ...allPlans[1],
      recommended: true,
      recommendedText: 'Full Access',
      description: 'Complete methodology access, all skills, ultimate guide included.'
    }],
    hideToggle: true
  }
}`,...o.parameters?.docs?.source},description:{story:"Minimal - single plan highlight",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Pricing Plans',
    subheadline: 'Find the plan that fits your needs.',
    plans: allPlans.slice(0, 3),
    footerText: <>
        Need a custom enterprise solution?{' '}
        <a href="#contact" style={{
        color: '#5D1F2D',
        textDecoration: 'underline'
      }}>
          Contact our sales team
        </a>
      </>
  }
}`,...l.parameters?.docs?.source},description:{story:"With footer CTA",...l.parameters?.docs?.description}}};const E=["Default","ThreeTiers","AnnualDefault","WithoutToggle","SinglePlan","WithFooterCTA"];export{r as AnnualDefault,i as Default,o as SinglePlan,s as ThreeTiers,l as WithFooterCTA,a as WithoutToggle,E as __namedExportsOrder,M as default};
