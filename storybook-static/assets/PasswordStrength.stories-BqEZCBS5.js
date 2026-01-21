import{r as g,j as e}from"./iframe-B_omF_R9.js";/* empty css                         */import"./preload-helper-Ct5FWWRu.js";function w({password:s,showRequirements:u=!0,minLength:n=8}){const{strength:o,requirements:x}=g.useMemo(()=>{const r=[{label:`At least ${n} characters`,met:s.length>=n},{label:"Contains uppercase letter",met:/[A-Z]/.test(s)},{label:"Contains lowercase letter",met:/[a-z]/.test(s)},{label:"Contains number",met:/[0-9]/.test(s)},{label:"Contains special character",met:/[^A-Za-z0-9]/.test(s)}],a=r.filter(y=>y.met).length;let t;return s.length===0?t={score:0,label:"",color:"transparent"}:a<=1?t={score:1,label:"Weak",color:"#dc2626"}:a<=2?t={score:2,label:"Fair",color:"#f59e0b"}:a<=3?t={score:3,label:"Good",color:"#eab308"}:a===4?t={score:4,label:"Strong",color:"#22c55e"}:t={score:5,label:"Very Strong",color:"#16a34a"},{strength:t,requirements:r}},[s,n]);return s.length===0?null:e.jsxs("div",{className:"fn-password-strength",children:[e.jsxs("div",{className:"fn-password-strength__meter",children:[e.jsx("div",{className:"fn-password-strength__bar",children:[1,2,3,4,5].map(r=>e.jsx("div",{className:`fn-password-strength__segment ${r<=o.score?"fn-password-strength__segment--filled":""}`,style:{backgroundColor:r<=o.score?o.color:void 0}},r))}),o.label&&e.jsx("span",{className:"fn-password-strength__label",style:{color:o.color},children:o.label})]}),u&&e.jsx("ul",{className:"fn-password-strength__requirements",children:x.map((r,a)=>e.jsxs("li",{className:`fn-password-strength__requirement ${r.met?"fn-password-strength__requirement--met":""}`,children:[e.jsx("span",{className:"fn-password-strength__check",children:r.met?e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}):e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("circle",{cx:"12",cy:"12",r:"10"})})}),e.jsx("span",{className:"fn-password-strength__text",children:r.label})]},a))})]})}w.__docgenInfo={description:`PasswordStrength - Password strength indicator

Shows visual strength meter and requirements checklist.
Follows the "Digital Journal" theme.`,methods:[],displayName:"PasswordStrength",props:{password:{required:!0,tsType:{name:"string"},description:"Password to evaluate"},showRequirements:{required:!1,tsType:{name:"boolean"},description:"Show requirements list",defaultValue:{value:"true",computed:!1}},minLength:{required:!1,tsType:{name:"number"},description:"Minimum length requirement",defaultValue:{value:"8",computed:!1}}}};const b={title:"Auth/PasswordStrength",component:w,parameters:{layout:"centered",docs:{description:{component:"Password strength indicator with visual meter and requirements checklist."}}},tags:["autodocs"]},d={args:{password:"pass"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},i={args:{password:"password"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},c={args:{password:"Password1"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},l={args:{password:"Password1!"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},p={args:{password:"MyS3cur3P@ssw0rd!"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},m={args:{password:"Password1",showRequirements:!1},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},h={render:()=>{const[s,u]=g.useState("");return e.jsxs("div",{style:{width:"320px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:500},children:"Password"}),e.jsx("input",{type:"password",value:s,onChange:n=>u(n.target.value),placeholder:"Enter a password",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontSize:"16px",boxSizing:"border-box"}})]}),e.jsx(w,{password:s})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'pass'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...d.parameters?.docs?.source},description:{story:"Weak password",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'password'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...i.parameters?.docs?.source},description:{story:"Fair password",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'Password1'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...c.parameters?.docs?.source},description:{story:"Good password",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'Password1!'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...l.parameters?.docs?.source},description:{story:"Strong password",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'MyS3cur3P@ssw0rd!'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...p.parameters?.docs?.source},description:{story:"Very strong password",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    password: 'Password1',
    showRequirements: false
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...m.parameters?.docs?.source},description:{story:"Without requirements list",...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [password, setPassword] = useState('');
    return <div style={{
      width: '320px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: 500
        }}>
            Password
          </label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter a password" style={{
          width: '100%',
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontSize: '16px',
          boxSizing: 'border-box'
        }} />
        </div>
        <PasswordStrength password={password} />
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Interactive demo",...h.parameters?.docs?.description}}};const j=["Weak","Fair","Good","Strong","VeryStrong","MeterOnly","Interactive"];export{i as Fair,c as Good,h as Interactive,m as MeterOnly,l as Strong,p as VeryStrong,d as Weak,j as __namedExportsOrder,b as default};
