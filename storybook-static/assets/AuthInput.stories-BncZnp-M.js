import{r as g,j as e}from"./iframe-B_omF_R9.js";/* empty css                  */import"./preload-helper-Ct5FWWRu.js";const P=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),T=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),p=g.forwardRef(({label:s,error:r,helperText:h,showPasswordToggle:b=!1,leftIcon:m,rightIcon:x,type:y="text",className:S="",...w},I)=>{const[u,_]=g.useState(!1),f=y==="password",E=f&&u?"text":y;return e.jsxs("div",{className:`fn-auth-input ${S}`,children:[s&&e.jsx("label",{className:"fn-auth-input__label",children:s}),e.jsxs("div",{className:`fn-auth-input__wrapper ${r?"fn-auth-input__wrapper--error":""} ${w.disabled?"fn-auth-input__wrapper--disabled":""}`,children:[m&&e.jsx("span",{className:"fn-auth-input__icon fn-auth-input__icon--left",children:m}),e.jsx("input",{ref:I,type:E,className:"fn-auth-input__field","aria-invalid":!!r,...w}),f&&b?e.jsx("button",{type:"button",className:"fn-auth-input__toggle",onClick:()=>_(!u),"aria-label":u?"Hide password":"Show password",tabIndex:-1,children:u?e.jsx(T,{}):e.jsx(P,{})}):x?e.jsx("span",{className:"fn-auth-input__icon fn-auth-input__icon--right",children:x}):null]}),r&&e.jsx("p",{className:"fn-auth-input__error",children:r}),h&&!r&&e.jsx("p",{className:"fn-auth-input__helper",children:h})]})});p.displayName="AuthInput";p.__docgenInfo={description:`AuthInput - Styled input for authentication forms

Enhanced input with label, error state, and password toggle.
Follows the "Digital Journal" theme.`,methods:[],displayName:"AuthInput",props:{label:{required:!1,tsType:{name:"string"},description:"Input label"},error:{required:!1,tsType:{name:"string"},description:"Error message"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},showPasswordToggle:{required:!1,tsType:{name:"boolean"},description:"Show password toggle for password fields",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Left icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right icon (overridden by password toggle if enabled)"},type:{defaultValue:{value:"'text'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const A={title:"Auth/AuthInput",component:p,parameters:{layout:"centered",docs:{description:{component:"Styled input for authentication forms with label, error state, and password toggle."}}},tags:["autodocs"]},j=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]}),v=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),a={args:{label:"Email",placeholder:"you@example.com",type:"email"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},t={args:{label:"Email",placeholder:"you@example.com",type:"email",leftIcon:e.jsx(j,{})},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},o={args:{label:"Password",placeholder:"Enter your password",type:"password",showPasswordToggle:!0,leftIcon:e.jsx(v,{})},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},l={args:{label:"Email",placeholder:"you@example.com",type:"email",error:"Please enter a valid email address",defaultValue:"invalid-email"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},i={args:{label:"Password",placeholder:"Create a password",type:"password",showPasswordToggle:!0,helperText:"Must be at least 8 characters"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},d={args:{label:"Email",placeholder:"you@example.com",disabled:!0,defaultValue:"disabled@example.com"},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},n={args:{placeholder:"Search..."},decorators:[s=>e.jsx("div",{style:{width:"320px"},children:e.jsx(s,{})})]},c={render:()=>e.jsxs("div",{style:{width:"320px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(p,{label:"Email",placeholder:"you@example.com",type:"email",leftIcon:e.jsx(j,{})}),e.jsx(p,{label:"Password",placeholder:"Enter your password",type:"password",showPasswordToggle:!0,leftIcon:e.jsx(v,{})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...a.parameters?.docs?.source},description:{story:"Default text input",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    leftIcon: <MailIcon />
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...t.parameters?.docs?.source},description:{story:"With left icon",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showPasswordToggle: true,
    leftIcon: <LockIcon />
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...o.parameters?.docs?.source},description:{story:"Password with toggle",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    error: 'Please enter a valid email address',
    defaultValue: 'invalid-email'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...l.parameters?.docs?.source},description:{story:"With error",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Create a password',
    type: 'password',
    showPasswordToggle: true,
    helperText: 'Must be at least 8 characters'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...i.parameters?.docs?.source},description:{story:"With helper text",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    disabled: true,
    defaultValue: 'disabled@example.com'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...d.parameters?.docs?.source},description:{story:"Disabled state",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...n.parameters?.docs?.source},description:{story:"Without label",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <AuthInput label="Email" placeholder="you@example.com" type="email" leftIcon={<MailIcon />} />
      <AuthInput label="Password" placeholder="Enter your password" type="password" showPasswordToggle leftIcon={<LockIcon />} />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Complete auth form example",...c.parameters?.docs?.description}}};const R=["Default","WithIcon","Password","WithError","WithHelperText","Disabled","WithoutLabel","AuthForm"];export{c as AuthForm,a as Default,d as Disabled,o as Password,l as WithError,i as WithHelperText,t as WithIcon,n as WithoutLabel,R as __namedExportsOrder,A as default};
