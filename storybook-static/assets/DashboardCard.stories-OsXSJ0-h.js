import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function i({title:n,children:o,action:r,className:l=""}){const d=["fn-dashboard-card",l].filter(Boolean).join(" ");return e.jsxs("div",{className:d,children:[e.jsxs("div",{className:"fn-dashboard-card__header",children:[e.jsx("h3",{className:"fn-dashboard-card__title",children:n}),r&&e.jsx("button",{type:"button",className:"fn-dashboard-card__action",onClick:r.onClick,children:r.label})]}),e.jsx("div",{className:"fn-dashboard-card__content",children:o})]})}i.__docgenInfo={description:`DashboardCard - Container card for dashboard sections

Used for organizing content in admin/team dashboards.`,methods:[],displayName:"DashboardCard",props:{title:{required:!0,tsType:{name:"string"},description:"Card title"},children:{required:!0,tsType:{name:"ReactNode"},description:"Card content"},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Optional action button"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const m={title:"TeamManagement/DashboardCard",component:i,parameters:{layout:"padded",docs:{description:{component:"Container card for organizing dashboard sections."}}},tags:["autodocs"]},a={args:{title:"Team Overview",children:e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",margin:0},children:"Your team has 5 active members with access to the Pro plan features."})},decorators:[n=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(n,{})})]},s={args:{title:"Team Members",action:{label:"Invite Member",onClick:()=>console.log("Invite clicked")},children:e.jsxs("div",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A"},children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"5 active members"}),e.jsx("p",{style:{margin:0},children:"2 pending invitations"})]})},decorators:[n=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(n,{})})]},t={args:{title:"Billing Summary",action:{label:"View Details",onClick:()=>console.log("View details clicked")},children:e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#6B6B6B",display:"block"},children:"Current Plan"}),e.jsx("span",{style:{fontFamily:"Georgia, serif",fontSize:"20px",fontWeight:600,color:"#1C1C1E"},children:"Team Pro"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#6B6B6B",display:"block"},children:"Monthly Cost"}),e.jsx("span",{style:{fontFamily:"Georgia, serif",fontSize:"20px",fontWeight:600,color:"#1C1C1E"},children:"$175"})]})]})},decorators:[n=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(n,{})})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Team Overview',
    children: <p style={{
      fontFamily: 'Inter, sans-serif',
      color: '#4A4A4A',
      margin: 0
    }}>
        Your team has 5 active members with access to the Pro plan features.
      </p>
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Team Members',
    action: {
      label: 'Invite Member',
      onClick: () => console.log('Invite clicked')
    },
    children: <div style={{
      fontFamily: 'Inter, sans-serif',
      color: '#4A4A4A'
    }}>
        <p style={{
        margin: '0 0 8px'
      }}>5 active members</p>
        <p style={{
        margin: 0
      }}>2 pending invitations</p>
      </div>
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Billing Summary',
    action: {
      label: 'View Details',
      onClick: () => console.log('View details clicked')
    },
    children: <div style={{
      display: 'flex',
      gap: '32px'
    }}>
        <div>
          <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#6B6B6B',
          display: 'block'
        }}>
            Current Plan
          </span>
          <span style={{
          fontFamily: 'Georgia, serif',
          fontSize: '20px',
          fontWeight: 600,
          color: '#1C1C1E'
        }}>
            Team Pro
          </span>
        </div>
        <div>
          <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#6B6B6B',
          display: 'block'
        }}>
            Monthly Cost
          </span>
          <span style={{
          fontFamily: 'Georgia, serif',
          fontSize: '20px',
          fontWeight: 600,
          color: '#1C1C1E'
        }}>
            $175
          </span>
        </div>
      </div>
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};const y=["Default","WithAction","WithComplexContent"];export{a as Default,s as WithAction,t as WithComplexContent,y as __namedExportsOrder,m as default};
