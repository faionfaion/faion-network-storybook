import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function h({members:n,currentUserId:r,onChangeRole:d,onRemove:c,onResendInvite:p,className:g=""}){const v=["fn-team-member-list",g].filter(Boolean).join(" "),x={owner:"fn-team-member-list__role--owner",admin:"fn-team-member-list__role--admin",member:"fn-team-member-list__role--member"};return e.jsxs("div",{className:v,children:[e.jsxs("div",{className:"fn-team-member-list__header",children:[e.jsx("h3",{className:"fn-team-member-list__title",children:"Team Members"}),e.jsxs("span",{className:"fn-team-member-list__count",children:[n.length," members"]})]}),e.jsx("div",{className:"fn-team-member-list__table-wrapper",children:e.jsxs("table",{className:"fn-team-member-list__table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Member"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:n.map(s=>{const u=s.id===r,b=s.role==="owner",a=!u&&!b;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"fn-team-member-list__member",children:[e.jsx("div",{className:"fn-team-member-list__avatar",children:s.avatar?e.jsx("img",{src:s.avatar,alt:""}):e.jsx("span",{children:f(s.name||s.email)})}),e.jsxs("div",{className:"fn-team-member-list__info",children:[e.jsxs("span",{className:"fn-team-member-list__name",children:[s.name||"Pending",u&&e.jsx("span",{className:"fn-team-member-list__you",children:"(you)"})]}),e.jsx("span",{className:"fn-team-member-list__email",children:s.email})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`fn-team-member-list__role ${x[s.role]}`,children:s.role.charAt(0).toUpperCase()+s.role.slice(1)})}),e.jsx("td",{children:e.jsx("span",{className:`fn-team-member-list__status fn-team-member-list__status--${s.status}`,children:s.status==="active"?"Active":"Pending"})}),e.jsx("td",{children:e.jsxs("div",{className:"fn-team-member-list__actions",children:[a&&s.status==="pending"&&p&&e.jsx("button",{type:"button",className:"fn-team-member-list__action",onClick:()=>p(s.id),children:"Resend"}),a&&d&&e.jsxs("select",{className:"fn-team-member-list__role-select",value:s.role,onChange:j=>d(s.id,j.target.value),children:[e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"member",children:"Member"})]}),a&&c&&e.jsx("button",{type:"button",className:"fn-team-member-list__action fn-team-member-list__action--danger",onClick:()=>c(s.id),children:"Remove"}),!a&&e.jsx("span",{className:"fn-team-member-list__no-actions",children:"-"})]})})]},s.id)})})]})})]})}function f(n){return n.split(/[\s@]/).slice(0,2).map(r=>r[0]?.toUpperCase()||"").join("")}h.__docgenInfo={description:`TeamMemberList - Displays organization team members

Shows team members with role management and action controls.`,methods:[],displayName:"TeamMemberList",props:{members:{required:!0,tsType:{name:"Array",elements:[{name:"TeamMember"}],raw:"TeamMember[]"},description:"List of team members"},currentUserId:{required:!1,tsType:{name:"string"},description:"Current user ID (to prevent self-actions)"},onChangeRole:{required:!1,tsType:{name:"signature",type:"function",raw:"(memberId: string, newRole: 'admin' | 'member') => void",signature:{arguments:[{type:{name:"string"},name:"memberId"},{type:{name:"union",raw:"'admin' | 'member'",elements:[{name:"literal",value:"'admin'"},{name:"literal",value:"'member'"}]},name:"newRole"}],return:{name:"void"}}},description:"Handler for role change"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(memberId: string) => void",signature:{arguments:[{type:{name:"string"},name:"memberId"}],return:{name:"void"}}},description:"Handler for removing member"},onResendInvite:{required:!1,tsType:{name:"signature",type:"function",raw:"(memberId: string) => void",signature:{arguments:[{type:{name:"string"},name:"memberId"}],return:{name:"void"}}},description:"Handler for resending invite"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const R={title:"UserDashboard/TeamMemberList",component:h,parameters:{layout:"padded",docs:{description:{component:"Displays organization team members with role management."}}},tags:["autodocs"]},l=[{id:"1",name:"Ruslan Faion",email:"ruslan@faion.net",role:"owner",status:"active",joinedAt:"2025-01-01"},{id:"2",name:"Jane Developer",email:"jane@company.com",role:"admin",status:"active",joinedAt:"2025-06-15"},{id:"3",name:"John Smith",email:"john.smith@company.com",role:"member",status:"active",joinedAt:"2025-08-20"},{id:"4",email:"pending@company.com",role:"member",status:"pending"},{id:"5",name:"Alex Johnson",email:"alex@company.com",role:"member",status:"active",joinedAt:"2025-10-01"}],t={args:{members:l,currentUserId:"1",onChangeRole:(n,r)=>console.log("Change role:",n,r),onRemove:n=>console.log("Remove:",n),onResendInvite:n=>console.log("Resend invite:",n)},decorators:[n=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(n,{})})]},o={args:{members:l,currentUserId:"2",onChangeRole:(n,r)=>console.log("Change role:",n,r),onRemove:n=>console.log("Remove:",n),onResendInvite:n=>console.log("Resend invite:",n)},decorators:[n=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(n,{})})]},i={args:{members:l,currentUserId:"3"},decorators:[n=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(n,{})})]},m={args:{members:l.slice(0,2),currentUserId:"1",onChangeRole:(n,r)=>console.log("Change role:",n,r),onRemove:n=>console.log("Remove:",n)},decorators:[n=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(n,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    members: mockMembers,
    currentUserId: '1',
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: id => console.log('Remove:', id),
    onResendInvite: id => console.log('Resend invite:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    members: mockMembers,
    currentUserId: '2',
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: id => console.log('Remove:', id),
    onResendInvite: id => console.log('Resend invite:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    members: mockMembers,
    currentUserId: '3'
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    members: mockMembers.slice(0, 2),
    currentUserId: '1',
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: id => console.log('Remove:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};const I=["Default","AsAdmin","ReadOnly","SmallTeam"];export{o as AsAdmin,t as Default,i as ReadOnly,m as SmallTeam,I as __namedExportsOrder,R as default};
