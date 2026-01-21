import{r as p,j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function u({memberId:n,memberRole:r,onChangeRole:x,onRemove:b,disabled:d=!1,className:v=""}){const[o,s]=p.useState(!1),c=p.useRef(null),h=["fn-member-actions",d?"fn-member-actions--disabled":"",v].filter(Boolean).join(" ");p.useEffect(()=>{const t=j=>{c.current&&!c.current.contains(j.target)&&s(!1)};return o&&document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[o]);const f=t=>{x(t),s(!1)},y=()=>{b(),s(!1)};return e.jsxs("div",{className:h,ref:c,children:[e.jsx("button",{type:"button",className:"fn-member-actions__trigger",onClick:()=>!d&&s(!o),disabled:d,"aria-expanded":o,"aria-haspopup":"menu","aria-label":`Actions for member ${n}`,children:e.jsx(R,{})}),o&&e.jsxs("div",{className:"fn-member-actions__menu",role:"menu",children:[e.jsxs("div",{className:"fn-member-actions__section",children:[e.jsx("span",{className:"fn-member-actions__section-label",children:"Change Role"}),e.jsxs("button",{type:"button",className:`fn-member-actions__item ${r==="admin"?"fn-member-actions__item--active":""}`,onClick:()=>f("admin"),role:"menuitem",children:[e.jsx("span",{children:"Admin"}),r==="admin"&&e.jsx(g,{})]}),e.jsxs("button",{type:"button",className:`fn-member-actions__item ${r==="member"?"fn-member-actions__item--active":""}`,onClick:()=>f("member"),role:"menuitem",children:[e.jsx("span",{children:"Member"}),r==="member"&&e.jsx(g,{})]})]}),e.jsx("div",{className:"fn-member-actions__divider"}),e.jsx("button",{type:"button",className:"fn-member-actions__item fn-member-actions__item--danger",onClick:y,role:"menuitem",children:"Remove from team"})]})]})}function R(){return e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"1"}),e.jsx("circle",{cx:"12",cy:"5",r:"1"}),e.jsx("circle",{cx:"12",cy:"19",r:"1"})]})}function g(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}u.__docgenInfo={description:`MemberActionsDropdown - Actions menu for team members

Dropdown menu with role change and remove actions.`,methods:[],displayName:"MemberActionsDropdown",props:{memberId:{required:!0,tsType:{name:"string"},description:"Member ID"},memberRole:{required:!0,tsType:{name:"union",raw:"'admin' | 'member'",elements:[{name:"literal",value:"'admin'"},{name:"literal",value:"'member'"}]},description:"Member role"},onChangeRole:{required:!0,tsType:{name:"signature",type:"function",raw:"(role: 'admin' | 'member') => void",signature:{arguments:[{type:{name:"union",raw:"'admin' | 'member'",elements:[{name:"literal",value:"'admin'"},{name:"literal",value:"'member'"}]},name:"role"}],return:{name:"void"}}},description:"Handler for role change"},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for removing member"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether dropdown is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const _={title:"TeamManagement/MemberActionsDropdown",component:u,parameters:{layout:"padded",docs:{description:{component:"Dropdown menu with role change and remove actions for team members."}}},tags:["autodocs"]},a={args:{memberId:"123",memberRole:"admin",onChangeRole:n=>console.log("Change role to:",n),onRemove:()=>console.log("Remove member")},decorators:[n=>e.jsx("div",{style:{padding:"20px",display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{})})]},i={args:{memberId:"456",memberRole:"member",onChangeRole:n=>console.log("Change role to:",n),onRemove:()=>console.log("Remove member")},decorators:[n=>e.jsx("div",{style:{padding:"20px",display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{})})]},l={args:{memberId:"789",memberRole:"admin",onChangeRole:n=>console.log("Change role to:",n),onRemove:()=>console.log("Remove member"),disabled:!0},decorators:[n=>e.jsx("div",{style:{padding:"20px",display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{})})]},m={render:()=>e.jsx("div",{style:{maxWidth:"400px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"#E5E5E0",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Inter, sans-serif",fontSize:"13px",fontWeight:600,color:"#4A4A4A"},children:"JD"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:500,color:"#1C1C1E"},children:"Jane Developer"}),e.jsx("div",{style:{fontFamily:"Inter, sans-serif",fontSize:"13px",color:"#6B6B6B"},children:"jane@company.com"})]})]}),e.jsx(u,{memberId:"123",memberRole:"admin",onChangeRole:n=>console.log("Change role to:",n),onRemove:()=>console.log("Remove member")})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    memberId: '123',
    memberRole: 'admin',
    onChangeRole: role => console.log('Change role to:', role),
    onRemove: () => console.log('Remove member')
  },
  decorators: [Story => <div style={{
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    memberId: '456',
    memberRole: 'member',
    onChangeRole: role => console.log('Change role to:', role),
    onRemove: () => console.log('Remove member')
  },
  decorators: [Story => <div style={{
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    memberId: '789',
    memberRole: 'admin',
    onChangeRole: role => console.log('Change role to:', role),
    onRemove: () => console.log('Remove member'),
    disabled: true
  },
  decorators: [Story => <div style={{
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px',
    background: '#FFFFFF',
    border: '1px solid #E5E5E0',
    borderRadius: '8px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
          <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: '#E5E5E0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          fontWeight: 600,
          color: '#4A4A4A'
        }}>
            JD
          </div>
          <div>
            <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1C1C1E'
          }}>
              Jane Developer
            </div>
            <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#6B6B6B'
          }}>
              jane@company.com
            </div>
          </div>
        </div>
        <MemberActionsDropdown memberId="123" memberRole="admin" onChangeRole={role => console.log('Change role to:', role)} onRemove={() => console.log('Remove member')} />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const w=["AdminRole","MemberRole","Disabled","InContext"];export{a as AdminRole,l as Disabled,m as InContext,i as MemberRole,w as __namedExportsOrder,_ as default};
