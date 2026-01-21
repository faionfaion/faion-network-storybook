import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function s({connected:r,provider:d,className:i=""}){const u=["fn-sso-status",r?"fn-sso-status--connected":"fn-sso-status--disconnected",i].filter(Boolean).join(" ");return e.jsxs("div",{className:u,children:[e.jsx("div",{className:"fn-sso-status__indicator",children:r?e.jsx(p,{}):e.jsx(l,{})}),e.jsxs("div",{className:"fn-sso-status__content",children:[e.jsx("span",{className:"fn-sso-status__label",children:r?"SSO Connected":"SSO Not Configured"}),r&&d&&e.jsxs("span",{className:"fn-sso-status__provider",children:["via ",d]})]})]})}function p(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}function l(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]})}s.__docgenInfo={description:`SSOStatusIndicator - Shows SSO connection status

Displays whether SSO is configured and which provider is connected.`,methods:[],displayName:"SSOStatusIndicator",props:{connected:{required:!0,tsType:{name:"boolean"},description:"Whether SSO is connected"},provider:{required:!1,tsType:{name:"string"},description:"SSO provider name"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const x={title:"TeamManagement/SSOStatusIndicator",component:s,parameters:{layout:"padded",docs:{description:{component:"Displays SSO configuration status with provider information."}}},tags:["autodocs"]},o={args:{connected:!0,provider:"Okta"}},n={args:{connected:!0,provider:"Google Workspace"}},t={args:{connected:!0,provider:"Azure AD"}},a={args:{connected:!1}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{connected:!0,provider:"Okta"}),e.jsx(s,{connected:!0,provider:"Google Workspace"}),e.jsx(s,{connected:!0,provider:"Azure AD"}),e.jsx(s,{connected:!1})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    connected: true,
    provider: 'Okta'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    connected: true,
    provider: 'Google Workspace'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    connected: true,
    provider: 'Azure AD'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    connected: false
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <SSOStatusIndicator connected={true} provider="Okta" />
      <SSOStatusIndicator connected={true} provider="Google Workspace" />
      <SSOStatusIndicator connected={true} provider="Azure AD" />
      <SSOStatusIndicator connected={false} />
    </div>
}`,...c.parameters?.docs?.source}}};const g=["Connected","ConnectedGoogle","ConnectedAzure","Disconnected","AllStates"];export{c as AllStates,o as Connected,t as ConnectedAzure,n as ConnectedGoogle,a as Disconnected,g as __namedExportsOrder,x as default};
