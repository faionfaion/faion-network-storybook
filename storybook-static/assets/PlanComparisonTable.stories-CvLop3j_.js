import{j as e}from"./iframe-B_omF_R9.js";/* empty css                            */import"./preload-helper-Ct5FWWRu.js";const _=()=>e.jsx("svg",{className:"fn-comparison__check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),y=()=>e.jsxs("svg",{className:"fn-comparison__x",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),v=()=>e.jsxs("svg",{className:"fn-comparison__info",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]});function f({plans:a,categories:r,showCtas:h=!0,stickyHeader:g=!0}){const x=s=>typeof s=="boolean"?s?e.jsx(_,{}):e.jsx(y,{}):s;return e.jsx("div",{className:"fn-comparison",children:e.jsx("div",{className:"fn-comparison__wrapper",children:e.jsxs("table",{className:"fn-comparison__table",children:[e.jsx("thead",{className:g?"fn-comparison__thead--sticky":"",children:e.jsxs("tr",{children:[e.jsx("th",{className:"fn-comparison__th fn-comparison__th--feature",children:"Features"}),a.map(s=>e.jsx("th",{className:`fn-comparison__th fn-comparison__th--plan ${s.recommended?"fn-comparison__th--recommended":""}`,children:e.jsxs("div",{className:"fn-comparison__plan-header",children:[s.recommended&&e.jsx("span",{className:"fn-comparison__badge",children:"Most Popular"}),e.jsx("span",{className:"fn-comparison__plan-name",children:s.name}),e.jsx("span",{className:"fn-comparison__plan-price",children:s.price}),h&&s.ctaText&&e.jsx("button",{className:`fn-comparison__cta ${s.recommended?"fn-comparison__cta--primary":"fn-comparison__cta--secondary"}`,onClick:s.onCtaClick,children:s.ctaText})]})},s.id))]})}),e.jsx("tbody",{children:r.map(s=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{className:"fn-comparison__category-row",children:e.jsx("td",{className:"fn-comparison__category",colSpan:a.length+1,children:s.name})},`cat-${s.id}`),s.features.map(o=>e.jsxs("tr",{className:"fn-comparison__feature-row",children:[e.jsx("td",{className:"fn-comparison__td fn-comparison__td--feature",children:e.jsxs("span",{className:"fn-comparison__feature-name",children:[o.name,o.description&&e.jsx("span",{className:"fn-comparison__tooltip-trigger",title:o.description,children:e.jsx(v,{})})]})}),a.map(u=>e.jsx("td",{className:`fn-comparison__td fn-comparison__td--value ${u.recommended?"fn-comparison__td--recommended":""}`,children:x(o.values[u.id])},`${o.id}-${u.id}`))]},o.id))]}))})]})})})}f.__docgenInfo={description:`PlanComparisonTable - Detailed plan feature comparison

Shows all features across tiers in a table format.
Follows the "Digital Journal" theme.`,methods:[],displayName:"PlanComparisonTable",props:{plans:{required:!0,tsType:{name:"Array",elements:[{name:"ComparisonPlan"}],raw:"ComparisonPlan[]"},description:"Plans to compare"},categories:{required:!0,tsType:{name:"Array",elements:[{name:"FeatureCategory"}],raw:"FeatureCategory[]"},description:"Feature categories"},showCtas:{required:!1,tsType:{name:"boolean"},description:"Show CTAs in header",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Enable sticky header",defaultValue:{value:"true",computed:!1}}}};const N={title:"Pricing/PlanComparisonTable",component:f,parameters:{layout:"padded",docs:{description:{component:"Detailed plan comparison table showing all features across tiers with checkmarks, values, and tooltips."}}},tags:["autodocs"]},n=[{id:"free",name:"Free",price:"$0",ctaText:"Start Free"},{id:"plus",name:"Plus",price:"$19/mo",ctaText:"Get Plus"},{id:"pro",name:"Pro",price:"$35/mo",recommended:!0,ctaText:"Get Pro"},{id:"team",name:"Team",price:"$35/seat",ctaText:"Contact Sales"}],t=[{id:"access",name:"Content Access",features:[{id:"methodologies",name:"Methodology Access",description:"Number of methodologies available",values:{free:"30%",plus:"100%",pro:"100%",team:"100%"}},{id:"guide",name:"Ultimate Solopreneur Guide",description:"Full access to the comprehensive guide",values:{free:!1,plus:!0,pro:!0,team:!0}},{id:"skills",name:"AI Skills & Agents",description:"Access to all 15 skills and agents",values:{free:"Limited",plus:!0,pro:!0,team:!0}}]},{id:"usage",name:"Usage Rights",features:[{id:"personal",name:"Personal Use",description:"Use for your own products and projects",values:{free:"Non-commercial only",plus:!0,pro:!0,team:!0}},{id:"commercial",name:"Commercial Use",description:"Use for client work and paid projects",values:{free:!1,plus:!1,pro:!0,team:!0}},{id:"mcp",name:"MCP Connections",description:"Number of simultaneous MCP connections",values:{free:"1",plus:"1",pro:"1",team:"5+"}}]},{id:"team",name:"Team Features",features:[{id:"sso",name:"SSO Authentication",description:"SAML/OIDC single sign-on",values:{free:!1,plus:!1,pro:!0,team:!0}},{id:"org",name:"Organization Dashboard",description:"Manage team members and permissions",values:{free:!1,plus:!1,pro:!1,team:!0}},{id:"invites",name:"Email Invites",description:"Invite team members via email",values:{free:!1,plus:!1,pro:!1,team:!0}},{id:"roles",name:"Team Roles",description:"Owner, Admin, Member roles",values:{free:!1,plus:!1,pro:!1,team:!0}}]},{id:"support",name:"Support",features:[{id:"community",name:"Community Access",values:{free:!0,plus:!0,pro:!0,team:!0}},{id:"email-support",name:"Email Support",values:{free:!1,plus:!0,pro:!0,team:!0}},{id:"priority",name:"Priority Support",values:{free:!1,plus:!1,pro:!0,team:!0}}]}],i={args:{plans:n,categories:t,showCtas:!0,stickyHeader:!0}},c={args:{plans:n,categories:t,showCtas:!1}},l={args:{plans:n,categories:t,stickyHeader:!1}},m={args:{plans:n.slice(0,3),categories:t.map(a=>({...a,features:a.features.map(r=>({...r,values:{free:r.values.free,plus:r.values.plus,pro:r.values.pro}}))}))}},p={args:{plans:n.slice(0,3),categories:[t[0]],showCtas:!1}},d={args:{plans:n,categories:t},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px",overflow:"hidden"},children:e.jsx(a,{})})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    plans,
    categories,
    showCtas: true,
    stickyHeader: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Full comparison table with all plans",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    plans,
    categories,
    showCtas: false
  }
}`,...c.parameters?.docs?.source},description:{story:"Without CTAs",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    plans,
    categories,
    stickyHeader: false
  }
}`,...l.parameters?.docs?.source},description:{story:"Without sticky header",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    plans: plans.slice(0, 3),
    categories: categories.map(cat => ({
      ...cat,
      features: cat.features.map(f => ({
        ...f,
        values: {
          free: f.values.free,
          plus: f.values.plus,
          pro: f.values.pro
        }
      }))
    }))
  }
}`,...m.parameters?.docs?.source},description:{story:"Three plans only",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    plans: plans.slice(0, 3),
    categories: [categories[0]],
    showCtas: false
  }
}`,...p.parameters?.docs?.source},description:{story:"Minimal - single category",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    plans,
    categories
  },
  decorators: [Story => <div style={{
    maxWidth: '500px',
    overflow: 'hidden'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source},description:{story:"In scrollable container (simulates mobile)",...d.parameters?.docs?.description}}};const S=["Default","WithoutCtas","NonStickyHeader","ThreePlans","SingleCategory","InScrollableContainer"];export{i as Default,d as InScrollableContainer,l as NonStickyHeader,p as SingleCategory,m as ThreePlans,c as WithoutCtas,S as __namedExportsOrder,N as default};
