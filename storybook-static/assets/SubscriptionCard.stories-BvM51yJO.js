import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function x({plan:n,tier:a,billing:h,price:c,nextBillingDate:u,isActive:d=!0,onManage:m,onUpgrade:g,className:v=""}){const f=["fn-subscription-card",`fn-subscription-card--${a}`,d?"":"fn-subscription-card--inactive",v].filter(Boolean).join(" "),p=u?new Date(u).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):null,b=a==="free"||a==="plus";return e.jsxs("div",{className:f,children:[e.jsxs("div",{className:"fn-subscription-card__header",children:[e.jsxs("div",{className:"fn-subscription-card__plan-info",children:[e.jsx("span",{className:"fn-subscription-card__label",children:"Current Plan"}),e.jsxs("div",{className:"fn-subscription-card__plan-row",children:[e.jsx("h3",{className:"fn-subscription-card__plan-name",children:n}),e.jsx("span",{className:`fn-subscription-card__status fn-subscription-card__status--${d?"active":"inactive"}`,children:d?"Active":"Inactive"})]})]}),e.jsx(j,{tier:a})]}),(c!==void 0||p)&&e.jsxs("div",{className:"fn-subscription-card__details",children:[c!==void 0&&e.jsxs("div",{className:"fn-subscription-card__detail",children:[e.jsx("span",{className:"fn-subscription-card__detail-label",children:"Price"}),e.jsxs("span",{className:"fn-subscription-card__detail-value",children:["$",c,"/",h==="annual"?"year":"month"]})]}),p&&e.jsxs("div",{className:"fn-subscription-card__detail",children:[e.jsx("span",{className:"fn-subscription-card__detail-label",children:"Next billing"}),e.jsx("span",{className:"fn-subscription-card__detail-value",children:p})]})]}),e.jsxs("div",{className:"fn-subscription-card__actions",children:[b&&g&&e.jsx("button",{type:"button",className:"fn-subscription-card__button fn-subscription-card__button--primary",onClick:g,children:"Upgrade Plan"}),m&&a!=="free"&&e.jsx("button",{type:"button",className:"fn-subscription-card__button fn-subscription-card__button--secondary",onClick:m,children:"Manage Subscription"})]})]})}function j({tier:n}){const a={free:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 8v8"}),e.jsx("path",{d:"M8 12h8"})]}),plus:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),pro:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),e.jsx("path",{d:"M2 17l10 5 10-5"}),e.jsx("path",{d:"M2 12l10 5 10-5"})]}),team:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),ultimate:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}),e.jsx("path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}),e.jsx("path",{d:"M4 22h16"}),e.jsx("path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}),e.jsx("path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}),e.jsx("path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"})]})};return e.jsx("div",{className:`fn-subscription-card__icon fn-subscription-card__icon--${n}`,children:a[n]||a.free})}x.__docgenInfo={description:`SubscriptionCard - Displays current subscription status

Shows plan details, billing info, and subscription management actions.`,methods:[],displayName:"SubscriptionCard",props:{plan:{required:!0,tsType:{name:"string"},description:"Current plan name"},tier:{required:!0,tsType:{name:"union",raw:"'free' | 'plus' | 'pro' | 'team' | 'ultimate'",elements:[{name:"literal",value:"'free'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'pro'"},{name:"literal",value:"'team'"},{name:"literal",value:"'ultimate'"}]},description:"Plan tier: free, plus, pro, team, ultimate"},billing:{required:!1,tsType:{name:"union",raw:"'monthly' | 'annual'",elements:[{name:"literal",value:"'monthly'"},{name:"literal",value:"'annual'"}]},description:"Billing cycle"},price:{required:!1,tsType:{name:"number"},description:"Price amount"},nextBillingDate:{required:!1,tsType:{name:"string"},description:"Next billing date (ISO string)"},isActive:{required:!1,tsType:{name:"boolean"},description:"Whether subscription is active",defaultValue:{value:"true",computed:!1}},onManage:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for manage subscription"},onUpgrade:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for upgrade"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const k={title:"UserDashboard/SubscriptionCard",component:x,parameters:{layout:"padded",docs:{description:{component:"Displays current subscription status with plan details and management actions."}}},tags:["autodocs"]},r={args:{plan:"Free",tier:"free",isActive:!0,onUpgrade:()=>console.log("Upgrade clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})]},s={args:{plan:"Plus",tier:"plus",billing:"monthly",price:19,nextBillingDate:"2026-02-15",isActive:!0,onManage:()=>console.log("Manage clicked"),onUpgrade:()=>console.log("Upgrade clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})]},i={args:{plan:"Pro",tier:"pro",billing:"annual",price:350,nextBillingDate:"2027-01-15",isActive:!0,onManage:()=>console.log("Manage clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})]},t={args:{plan:"Team (5 seats)",tier:"team",billing:"annual",price:1750,nextBillingDate:"2027-01-15",isActive:!0,onManage:()=>console.log("Manage clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})]},o={args:{plan:"Ultimate (20 seats)",tier:"ultimate",billing:"annual",price:2100,nextBillingDate:"2027-01-15",isActive:!0,onManage:()=>console.log("Manage clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})]},l={args:{plan:"Plus",tier:"plus",billing:"monthly",price:19,isActive:!1,onUpgrade:()=>console.log("Reactivate clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Free',
    tier: 'free',
    isActive: true,
    onUpgrade: () => console.log('Upgrade clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Plus',
    tier: 'plus',
    billing: 'monthly',
    price: 19,
    nextBillingDate: '2026-02-15',
    isActive: true,
    onManage: () => console.log('Manage clicked'),
    onUpgrade: () => console.log('Upgrade clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Pro',
    tier: 'pro',
    billing: 'annual',
    price: 350,
    nextBillingDate: '2027-01-15',
    isActive: true,
    onManage: () => console.log('Manage clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Team (5 seats)',
    tier: 'team',
    billing: 'annual',
    price: 1750,
    nextBillingDate: '2027-01-15',
    isActive: true,
    onManage: () => console.log('Manage clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Ultimate (20 seats)',
    tier: 'ultimate',
    billing: 'annual',
    price: 2100,
    nextBillingDate: '2027-01-15',
    isActive: true,
    onManage: () => console.log('Manage clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    plan: 'Plus',
    tier: 'plus',
    billing: 'monthly',
    price: 19,
    isActive: false,
    onUpgrade: () => console.log('Reactivate clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};const M=["FreeTier","PlusTier","ProTier","TeamTier","UltimateTier","Inactive"];export{r as FreeTier,l as Inactive,s as PlusTier,i as ProTier,t as TeamTier,o as UltimateTier,M as __namedExportsOrder,k as default};
