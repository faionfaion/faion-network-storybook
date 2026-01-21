import{r as l,j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function h({isOpen:m,onClose:t,onInvite:i,availableSeats:n,className:f=""}){const[g,x]=l.useState(""),[_,y]=l.useState("member"),[b,I]=l.useState(!1),[j,o]=l.useState(null);if(!m)return null;const S=["fn-invite-modal",f].filter(Boolean).join(" "),C=s=>s.split(/[,\n]/).map(a=>a.trim().toLowerCase()).filter(a=>a&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)),N=async s=>{s.preventDefault(),o(null);const a=C(g);if(a.length===0){o("Please enter at least one valid email address");return}if(n!==void 0&&a.length>n){o(`You can only invite ${n} more member${n!==1?"s":""}`);return}I(!0);try{await i(a,_),x(""),y("member"),t()}catch(F){o(F instanceof Error?F.message:"Failed to send invitations")}finally{I(!1)}},r=C(g).length;return e.jsx("div",{className:"fn-invite-modal__overlay",onClick:t,children:e.jsxs("div",{className:S,role:"dialog","aria-modal":"true","aria-labelledby":"invite-modal-title",onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{className:"fn-invite-modal__header",children:[e.jsx("h2",{id:"invite-modal-title",className:"fn-invite-modal__title",children:"Invite Team Members"}),e.jsx("button",{type:"button",className:"fn-invite-modal__close",onClick:t,"aria-label":"Close",children:e.jsx(k,{})})]}),e.jsxs("form",{onSubmit:N,children:[e.jsxs("div",{className:"fn-invite-modal__content",children:[j&&e.jsx("div",{className:"fn-invite-modal__error",role:"alert",children:j}),e.jsxs("div",{className:"fn-invite-modal__field",children:[e.jsx("label",{htmlFor:"invite-emails",className:"fn-invite-modal__label",children:"Email Addresses"}),e.jsx("textarea",{id:"invite-emails",className:"fn-invite-modal__textarea",value:g,onChange:s=>{x(s.target.value),o(null)},placeholder:"Enter email addresses, separated by commas or new lines",rows:4}),e.jsxs("div",{className:"fn-invite-modal__hint",children:[r>0&&e.jsxs("span",{children:[r," valid email",r!==1?"s":""]}),n!==void 0&&e.jsxs("span",{children:[n," seat",n!==1?"s":""," available"]})]})]}),e.jsxs("div",{className:"fn-invite-modal__field",children:[e.jsx("label",{htmlFor:"invite-role",className:"fn-invite-modal__label",children:"Role"}),e.jsxs("select",{id:"invite-role",className:"fn-invite-modal__select",value:_,onChange:s=>y(s.target.value),children:[e.jsx("option",{value:"member",children:"Member - Can use the product"}),e.jsx("option",{value:"admin",children:"Admin - Can manage team members"})]})]})]}),e.jsxs("div",{className:"fn-invite-modal__footer",children:[e.jsx("button",{type:"button",className:"fn-invite-modal__button fn-invite-modal__button--secondary",onClick:t,disabled:b,children:"Cancel"}),e.jsx("button",{type:"submit",className:"fn-invite-modal__button fn-invite-modal__button--primary",disabled:b||r===0,children:b?"Sending...":`Send Invite${r>1?"s":""}`})]})]})]})})}function k(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}h.__docgenInfo={description:`InviteModal - Modal for inviting team members

Allows inviting multiple email addresses with role selection.`,methods:[],displayName:"InviteModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},onInvite:{required:!0,tsType:{name:"signature",type:"function",raw:"(emails: string[], role: 'admin' | 'member') => Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"emails"},{type:{name:"union",raw:"'admin' | 'member'",elements:[{name:"literal",value:"'admin'"},{name:"literal",value:"'member'"}]},name:"role"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"Invite handler"},availableSeats:{required:!1,tsType:{name:"number"},description:"Available seats remaining"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const M={title:"TeamManagement/InviteModal",component:h,parameters:{layout:"fullscreen",docs:{description:{component:"Modal for inviting team members with email input and role selection."}}},tags:["autodocs"]},v=async(m,t)=>{console.log("Inviting:",m,"with role:",t),await new Promise(i=>setTimeout(i,1500))},d={args:{isOpen:!0,onClose:()=>console.log("Close"),onInvite:v}},c={args:{isOpen:!0,onClose:()=>console.log("Close"),onInvite:v,availableSeats:3}},u={args:{isOpen:!0,onClose:()=>console.log("Close"),onInvite:v,availableSeats:0}},p={render:function(){const[t,i]=l.useState(!1);return e.jsxs("div",{style:{padding:"40px",background:"#FAF9F6",minHeight:"300px"},children:[e.jsx("button",{onClick:()=>i(!0),style:{fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:500,padding:"10px 20px",background:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Invite Team Members"}),e.jsx(h,{isOpen:t,onClose:()=>i(!1),onInvite:async(n,f)=>{await v(n,f),i(!1)},availableSeats:5})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Close'),
    onInvite: mockInvite
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Close'),
    onInvite: mockInvite,
    availableSeats: 3
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Close'),
    onInvite: mockInvite,
    availableSeats: 0
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: '40px',
      background: '#FAF9F6',
      minHeight: '300px'
    }}>
        <button onClick={() => setIsOpen(true)} style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        padding: '10px 20px',
        background: '#5D1F2D',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
          Invite Team Members
        </button>

        <InviteModal isOpen={isOpen} onClose={() => setIsOpen(false)} onInvite={async (emails, role) => {
        await mockInvite(emails, role);
        setIsOpen(false);
      }} availableSeats={5} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const A=["Default","WithSeatLimit","NoSeatsAvailable","Interactive"];export{d as Default,p as Interactive,u as NoSeatsAvailable,c as WithSeatLimit,A as __namedExportsOrder,M as default};
