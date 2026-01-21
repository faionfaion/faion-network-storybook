import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function r({role:m,className:l=""}){const d=["fn-role-badge",`fn-role-badge--${m}`,l].filter(Boolean).join(" "),t={owner:"Owner",admin:"Admin",member:"Member"};return e.jsx("span",{className:d,children:t[m]})}r.__docgenInfo={description:`RoleBadge - Displays team member role

Color-coded badge for owner/admin/member roles.`,methods:[],displayName:"RoleBadge",props:{role:{required:!0,tsType:{name:"union",raw:"'owner' | 'admin' | 'member'",elements:[{name:"literal",value:"'owner'"},{name:"literal",value:"'admin'"},{name:"literal",value:"'member'"}]},description:"Member role"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const p={title:"TeamManagement/RoleBadge",component:r,parameters:{layout:"padded",docs:{description:{component:"Color-coded badge for displaying team member roles."}}},tags:["autodocs"]},a={args:{role:"owner"}},o={args:{role:"admin"}},s={args:{role:"member"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{role:"owner"}),e.jsx(r,{role:"admin"}),e.jsx(r,{role:"member"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'owner'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'admin'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'member'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <RoleBadge role="owner" />
      <RoleBadge role="admin" />
      <RoleBadge role="member" />
    </div>
}`,...n.parameters?.docs?.source}}};const g=["Owner","Admin","Member","AllRoles"];export{o as Admin,n as AllRoles,s as Member,a as Owner,g as __namedExportsOrder,p as default};
