import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function d({members:a,onRowClick:s,onRemove:m,onChangeRole:c,className:p=""}){const b=["fn-members-table",p].filter(Boolean).join(" "),u=n=>new Date(n).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return e.jsx("div",{className:b,children:e.jsxs("table",{className:"fn-members-table__table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Member"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Joined"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:a.map(n=>e.jsxs("tr",{onClick:()=>s?.(n),className:s?"fn-members-table__row--clickable":"",children:[e.jsx("td",{children:e.jsxs("div",{className:"fn-members-table__member",children:[e.jsx("div",{className:"fn-members-table__avatar",children:h(n.name||n.email)}),e.jsxs("div",{className:"fn-members-table__info",children:[e.jsx("span",{className:"fn-members-table__name",children:n.name||"Pending"}),e.jsx("span",{className:"fn-members-table__email",children:n.email})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`fn-members-table__role fn-members-table__role--${n.role}`,children:n.role.charAt(0).toUpperCase()+n.role.slice(1)})}),e.jsx("td",{children:e.jsxs("span",{className:`fn-members-table__status fn-members-table__status--${n.status}`,children:[e.jsx("span",{className:"fn-members-table__status-dot"}),n.status==="active"?"Active":"Pending"]})}),e.jsx("td",{children:e.jsx("span",{className:"fn-members-table__date",children:u(n.joinedAt)})}),e.jsx("td",{children:e.jsxs("div",{className:"fn-members-table__actions",onClick:l=>l.stopPropagation(),children:[n.role!=="owner"&&c&&e.jsxs("select",{className:"fn-members-table__role-select",value:n.role,onChange:l=>c(n.id,l.target.value),children:[e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"member",children:"Member"})]}),n.role!=="owner"&&m&&e.jsx("button",{type:"button",className:"fn-members-table__remove",onClick:()=>m(n.id),children:"Remove"}),n.role==="owner"&&e.jsx("span",{className:"fn-members-table__no-actions",children:"-"})]})})]},n.id))})]})})}function h(a){return a.split(/[\s@]/).slice(0,2).map(s=>s[0]?.toUpperCase()||"").join("")}d.__docgenInfo={description:`MembersTable - Table view of team members

Full table layout for displaying team members with actions.`,methods:[],displayName:"MembersTable",props:{members:{required:!0,tsType:{name:"Array",elements:[{name:"TableMember"}],raw:"TableMember[]"},description:"List of team members"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(member: TableMember) => void",signature:{arguments:[{type:{name:"TableMember"},name:"member"}],return:{name:"void"}}},description:"Handler for row click"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Handler for removing member"},onChangeRole:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, role: 'admin' | 'member') => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"union",raw:"'admin' | 'member'",elements:[{name:"literal",value:"'admin'"},{name:"literal",value:"'member'"}]},name:"role"}],return:{name:"void"}}},description:"Handler for role change"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const j={title:"TeamManagement/MembersTable",component:d,parameters:{layout:"padded",docs:{description:{component:"Full table layout for displaying team members with actions."}}},tags:["autodocs"]},i=[{id:"1",name:"Ruslan Faion",email:"ruslan@faion.net",role:"owner",status:"active",joinedAt:"2025-01-01"},{id:"2",name:"Jane Developer",email:"jane@company.com",role:"admin",status:"active",joinedAt:"2025-06-15"},{id:"3",name:"John Smith",email:"john.smith@company.com",role:"member",status:"active",joinedAt:"2025-08-20"},{id:"4",email:"pending@company.com",role:"member",status:"pending",joinedAt:"2026-01-15"}],r={args:{members:i,onChangeRole:(a,s)=>console.log("Change role:",a,s),onRemove:a=>console.log("Remove:",a)},decorators:[a=>e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(a,{})})]},o={args:{members:i,onRowClick:a=>console.log("Row clicked:",a),onChangeRole:(a,s)=>console.log("Change role:",a,s),onRemove:a=>console.log("Remove:",a)},decorators:[a=>e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(a,{})})]},t={args:{members:i},decorators:[a=>e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(a,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    members: mockMembers,
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: id => console.log('Remove:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '900px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    members: mockMembers,
    onRowClick: member => console.log('Row clicked:', member),
    onChangeRole: (id, role) => console.log('Change role:', id, role),
    onRemove: id => console.log('Remove:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '900px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    members: mockMembers
  },
  decorators: [Story => <div style={{
    maxWidth: '900px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};const v=["Default","WithRowClick","ReadOnly"];export{r as Default,t as ReadOnly,o as WithRowClick,v as __namedExportsOrder,j as default};
