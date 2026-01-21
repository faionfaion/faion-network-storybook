import{r as y,j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function h({licenseKey:n,type:v,status:s,expiresAt:m,seats:p,activeConnections:f=0,maxConnections:j=1,onRegenerate:u,className:_=""}){const[g,a]=y.useState(!1),[t,k]=y.useState(!1),C=["fn-license-card",`fn-license-card--${s}`,_].filter(Boolean).join(" "),b=t?n:`${n.slice(0,8)}${"*".repeat(24)}`,L=async()=>{try{await navigator.clipboard.writeText(n),a(!0),setTimeout(()=>a(!1),2e3)}catch{const c=document.createElement("textarea");c.value=n,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),a(!0),setTimeout(()=>a(!1),2e3)}},x=m?new Date(m).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):null,N={personal:"Personal License",commercial:"Commercial License",team:"Team License"};return e.jsxs("div",{className:C,children:[e.jsxs("div",{className:"fn-license-card__header",children:[e.jsxs("div",{className:"fn-license-card__type-info",children:[e.jsx("span",{className:"fn-license-card__label",children:"MCP License"}),e.jsx("h3",{className:"fn-license-card__type",children:N[v]})]}),e.jsx("span",{className:`fn-license-card__status fn-license-card__status--${s}`,children:s.charAt(0).toUpperCase()+s.slice(1)})]}),e.jsxs("div",{className:"fn-license-card__key-section",children:[e.jsx("span",{className:"fn-license-card__key-label",children:"License Key"}),e.jsxs("div",{className:"fn-license-card__key-row",children:[e.jsx("code",{className:"fn-license-card__key",children:b}),e.jsx("button",{type:"button",className:"fn-license-card__key-action",onClick:()=>k(!t),"aria-label":t?"Hide license key":"Show license key",children:t?e.jsx(S,{}):e.jsx(w,{})}),e.jsx("button",{type:"button",className:"fn-license-card__key-action",onClick:L,"aria-label":"Copy license key",children:g?e.jsx(T,{}):e.jsx(R,{})})]})]}),e.jsxs("div",{className:"fn-license-card__details",children:[x&&e.jsxs("div",{className:"fn-license-card__detail",children:[e.jsx("span",{className:"fn-license-card__detail-label",children:"Expires"}),e.jsx("span",{className:"fn-license-card__detail-value",children:x})]}),p&&e.jsxs("div",{className:"fn-license-card__detail",children:[e.jsx("span",{className:"fn-license-card__detail-label",children:"Seats"}),e.jsx("span",{className:"fn-license-card__detail-value",children:p})]}),e.jsxs("div",{className:"fn-license-card__detail",children:[e.jsx("span",{className:"fn-license-card__detail-label",children:"Connections"}),e.jsxs("span",{className:"fn-license-card__detail-value",children:[f,"/",j]})]})]}),u&&s==="active"&&e.jsx("div",{className:"fn-license-card__actions",children:e.jsx("button",{type:"button",className:"fn-license-card__button",onClick:u,children:"Regenerate Key"})})]})}function w(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function S(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),e.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),e.jsx("path",{d:"M1 1l22 22"}),e.jsx("path",{d:"M8.71 8.71a4 4 0 1 0 5.66 5.66"})]})}function R(){return e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function T(){return e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}h.__docgenInfo={description:`LicenseCard - Displays MCP license information

Shows license key, status, and connection details for MCP access.`,methods:[],displayName:"LicenseCard",props:{licenseKey:{required:!0,tsType:{name:"string"},description:"License key"},type:{required:!0,tsType:{name:"union",raw:"'personal' | 'commercial' | 'team'",elements:[{name:"literal",value:"'personal'"},{name:"literal",value:"'commercial'"},{name:"literal",value:"'team'"}]},description:"License type"},status:{required:!0,tsType:{name:"union",raw:"'active' | 'expired' | 'revoked'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'expired'"},{name:"literal",value:"'revoked'"}]},description:"License status"},expiresAt:{required:!1,tsType:{name:"string"},description:"Expiration date (ISO string)"},seats:{required:!1,tsType:{name:"number"},description:"Number of seats (for team licenses)"},activeConnections:{required:!1,tsType:{name:"number"},description:"Number of active connections",defaultValue:{value:"0",computed:!1}},maxConnections:{required:!1,tsType:{name:"number"},description:"Max connections allowed",defaultValue:{value:"1",computed:!1}},onRegenerate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for regenerate key"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const K={title:"UserDashboard/LicenseCard",component:h,parameters:{layout:"padded",docs:{description:{component:"Displays MCP license information with key management and connection status."}}},tags:["autodocs"]},i={args:{licenseKey:"lic_abc123def456ghi789jkl012mno345",type:"personal",status:"active",expiresAt:"2027-01-15",activeConnections:1,maxConnections:1,onRegenerate:()=>console.log("Regenerate clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"450px"},children:e.jsx(n,{})})]},r={args:{licenseKey:"lic_com_xyz789abc456def123ghi012jkl",type:"commercial",status:"active",expiresAt:"2027-01-15",activeConnections:0,maxConnections:1,onRegenerate:()=>console.log("Regenerate clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"450px"},children:e.jsx(n,{})})]},o={args:{licenseKey:"lic_team_mno345pqr678stu901vwx234yz",type:"team",status:"active",expiresAt:"2027-01-15",seats:5,activeConnections:3,maxConnections:5,onRegenerate:()=>console.log("Regenerate clicked")},decorators:[n=>e.jsx("div",{style:{maxWidth:"450px"},children:e.jsx(n,{})})]},l={args:{licenseKey:"lic_abc123def456ghi789jkl012mno345",type:"personal",status:"expired",expiresAt:"2025-12-15",activeConnections:0,maxConnections:1},decorators:[n=>e.jsx("div",{style:{maxWidth:"450px"},children:e.jsx(n,{})})]},d={args:{licenseKey:"lic_abc123def456ghi789jkl012mno345",type:"commercial",status:"revoked",activeConnections:0,maxConnections:1},decorators:[n=>e.jsx("div",{style:{maxWidth:"450px"},children:e.jsx(n,{})})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    type: 'personal',
    status: 'active',
    expiresAt: '2027-01-15',
    activeConnections: 1,
    maxConnections: 1,
    onRegenerate: () => console.log('Regenerate clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '450px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    licenseKey: 'lic_com_xyz789abc456def123ghi012jkl',
    type: 'commercial',
    status: 'active',
    expiresAt: '2027-01-15',
    activeConnections: 0,
    maxConnections: 1,
    onRegenerate: () => console.log('Regenerate clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '450px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    licenseKey: 'lic_team_mno345pqr678stu901vwx234yz',
    type: 'team',
    status: 'active',
    expiresAt: '2027-01-15',
    seats: 5,
    activeConnections: 3,
    maxConnections: 5,
    onRegenerate: () => console.log('Regenerate clicked')
  },
  decorators: [Story => <div style={{
    maxWidth: '450px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    type: 'personal',
    status: 'expired',
    expiresAt: '2025-12-15',
    activeConnections: 0,
    maxConnections: 1
  },
  decorators: [Story => <div style={{
    maxWidth: '450px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    type: 'commercial',
    status: 'revoked',
    activeConnections: 0,
    maxConnections: 1
  },
  decorators: [Story => <div style={{
    maxWidth: '450px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};const q=["PersonalLicense","CommercialLicense","TeamLicense","ExpiredLicense","RevokedLicense"];export{r as CommercialLicense,l as ExpiredLicense,i as PersonalLicense,d as RevokedLicense,o as TeamLicense,q as __namedExportsOrder,K as default};
