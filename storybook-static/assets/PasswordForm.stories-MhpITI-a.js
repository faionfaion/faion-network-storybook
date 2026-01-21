import{r as n,j as s}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function j({onSubmit:e,minLength:a=8,className:r=""}){const[p,f]=n.useState(""),[i,w]=n.useState(""),[h,g]=n.useState(""),[d,N]=n.useState(!1),[_,x]=n.useState(!1),[v,o]=n.useState(null),[P,b]=n.useState(!1),k=["fn-password-form",r].filter(Boolean).join(" "),l=E(i,a),C=async t=>{if(t.preventDefault(),o(null),i!==h){o("Passwords do not match");return}if(i.length<a){o(`Password must be at least ${a} characters`);return}x(!0);try{await e(p,i),b(!0),f(""),w(""),g(""),setTimeout(()=>b(!1),3e3)}catch(S){o(S instanceof Error?S.message:"Failed to update password")}finally{x(!1)}};return s.jsxs("form",{className:k,onSubmit:C,children:[s.jsxs("div",{className:"fn-password-form__header",children:[s.jsx("h3",{className:"fn-password-form__title",children:"Change Password"}),s.jsx("p",{className:"fn-password-form__description",children:"Update your password to keep your account secure."})]}),v&&s.jsx("div",{className:"fn-password-form__error",role:"alert",children:v}),P&&s.jsx("div",{className:"fn-password-form__success",role:"status",children:"Password updated successfully!"}),s.jsxs("div",{className:"fn-password-form__fields",children:[s.jsxs("div",{className:"fn-password-form__field",children:[s.jsx("label",{htmlFor:"current-password",className:"fn-password-form__label",children:"Current Password"}),s.jsx("div",{className:"fn-password-form__input-wrapper",children:s.jsx("input",{type:d?"text":"password",id:"current-password",value:p,onChange:t=>{f(t.target.value),o(null)},className:"fn-password-form__input",required:!0})})]}),s.jsxs("div",{className:"fn-password-form__field",children:[s.jsx("label",{htmlFor:"new-password",className:"fn-password-form__label",children:"New Password"}),s.jsx("div",{className:"fn-password-form__input-wrapper",children:s.jsx("input",{type:d?"text":"password",id:"new-password",value:i,onChange:t=>{w(t.target.value),o(null)},className:"fn-password-form__input",minLength:a,required:!0})}),i&&s.jsxs("div",{className:"fn-password-form__strength",children:[s.jsx("div",{className:"fn-password-form__strength-bar",children:s.jsx("div",{className:`fn-password-form__strength-fill fn-password-form__strength-fill--${l.level}`,style:{width:`${l.percent}%`}})}),s.jsx("span",{className:`fn-password-form__strength-label fn-password-form__strength-label--${l.level}`,children:l.label})]})]}),s.jsxs("div",{className:"fn-password-form__field",children:[s.jsx("label",{htmlFor:"confirm-password",className:"fn-password-form__label",children:"Confirm New Password"}),s.jsx("div",{className:"fn-password-form__input-wrapper",children:s.jsx("input",{type:d?"text":"password",id:"confirm-password",value:h,onChange:t=>{g(t.target.value),o(null)},className:"fn-password-form__input",minLength:a,required:!0})})]}),s.jsxs("label",{className:"fn-password-form__checkbox",children:[s.jsx("input",{type:"checkbox",checked:d,onChange:t=>N(t.target.checked)}),s.jsx("span",{children:"Show passwords"})]})]}),s.jsx("div",{className:"fn-password-form__actions",children:s.jsx("button",{type:"submit",className:"fn-password-form__button",disabled:_,children:_?"Updating...":"Update Password"})})]})}function E(e,a){if(!e)return{level:"weak",label:"Weak",percent:0};let r=0;return e.length>=a&&(r+=1),e.length>=12&&(r+=1),/[a-z]/.test(e)&&(r+=1),/[A-Z]/.test(e)&&(r+=1),/[0-9]/.test(e)&&(r+=1),/[^a-zA-Z0-9]/.test(e)&&(r+=1),r<=2?{level:"weak",label:"Weak",percent:25}:r<=3?{level:"fair",label:"Fair",percent:50}:r<=4?{level:"good",label:"Good",percent:75}:{level:"strong",label:"Strong",percent:100}}j.__docgenInfo={description:`PasswordForm - Change password form

Allows users to update their account password with validation.`,methods:[],displayName:"PasswordForm",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(currentPassword: string, newPassword: string) => Promise<void>",signature:{arguments:[{type:{name:"string"},name:"currentPassword"},{type:{name:"string"},name:"newPassword"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"Submit handler"},minLength:{required:!1,tsType:{name:"number"},description:"Minimum password length",defaultValue:{value:"8",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const q={title:"UserDashboard/PasswordForm",component:j,parameters:{layout:"padded",docs:{description:{component:"Form for changing account password with strength indicator."}}},tags:["autodocs"]},y=async(e,a)=>{console.log("Changing password:",{currentPassword:e,newPassword:a}),await new Promise(r=>setTimeout(r,1500))},F=async()=>{throw await new Promise(e=>setTimeout(e,1e3)),new Error("Current password is incorrect")},c={args:{onSubmit:y,minLength:8},decorators:[e=>s.jsx("div",{style:{maxWidth:"400px"},children:s.jsx(e,{})})]},m={args:{onSubmit:y,minLength:12},decorators:[e=>s.jsx("div",{style:{maxWidth:"400px"},children:s.jsx(e,{})})]},u={args:{onSubmit:F,minLength:8},decorators:[e=>s.jsx("div",{style:{maxWidth:"400px"},children:s.jsx(e,{})})]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: mockSubmit,
    minLength: 8
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: mockSubmit,
    minLength: 12
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: mockSubmitError,
    minLength: 8
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};const T=["Default","LongerMinLength","WithError"];export{c as Default,m as LongerMinLength,u as WithError,T as __namedExportsOrder,q as default};
