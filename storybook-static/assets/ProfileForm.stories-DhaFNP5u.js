import{r as p,j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function b({initialData:a,onSubmit:m,onCancel:h,className:y=""}){const[o,g]=p.useState(a),[c,x]=p.useState(!1),[_,d]=p.useState(null),j=["fn-profile-form",y].filter(Boolean).join(" "),n=f=>{const{name:r,value:v}=f.target;g(N=>({...N,[r]:v})),d(null)},S=async f=>{f.preventDefault(),x(!0),d(null);try{await m(o)}catch(r){d(r instanceof Error?r.message:"Failed to update profile")}finally{x(!1)}};return e.jsxs("form",{className:j,onSubmit:S,children:[e.jsxs("div",{className:"fn-profile-form__header",children:[e.jsx("h3",{className:"fn-profile-form__title",children:"Profile Information"}),e.jsx("p",{className:"fn-profile-form__description",children:"Update your personal information and how others see you."})]}),_&&e.jsx("div",{className:"fn-profile-form__error",role:"alert",children:_}),e.jsxs("div",{className:"fn-profile-form__fields",children:[e.jsxs("div",{className:"fn-profile-form__field",children:[e.jsxs("label",{htmlFor:"profile-name",className:"fn-profile-form__label",children:["Full Name ",e.jsx("span",{className:"fn-profile-form__required",children:"*"})]}),e.jsx("input",{type:"text",id:"profile-name",name:"name",value:o.name,onChange:n,className:"fn-profile-form__input",required:!0})]}),e.jsxs("div",{className:"fn-profile-form__field",children:[e.jsxs("label",{htmlFor:"profile-email",className:"fn-profile-form__label",children:["Email ",e.jsx("span",{className:"fn-profile-form__required",children:"*"})]}),e.jsx("input",{type:"email",id:"profile-email",name:"email",value:o.email,onChange:n,className:"fn-profile-form__input",required:!0})]}),e.jsxs("div",{className:"fn-profile-form__row",children:[e.jsxs("div",{className:"fn-profile-form__field",children:[e.jsx("label",{htmlFor:"profile-job-title",className:"fn-profile-form__label",children:"Job Title"}),e.jsx("input",{type:"text",id:"profile-job-title",name:"jobTitle",value:o.jobTitle||"",onChange:n,className:"fn-profile-form__input",placeholder:"e.g., Software Engineer"})]}),e.jsxs("div",{className:"fn-profile-form__field",children:[e.jsx("label",{htmlFor:"profile-company",className:"fn-profile-form__label",children:"Company"}),e.jsx("input",{type:"text",id:"profile-company",name:"company",value:o.company||"",onChange:n,className:"fn-profile-form__input",placeholder:"e.g., Acme Inc."})]})]}),e.jsxs("div",{className:"fn-profile-form__field",children:[e.jsx("label",{htmlFor:"profile-bio",className:"fn-profile-form__label",children:"Bio"}),e.jsx("textarea",{id:"profile-bio",name:"bio",value:o.bio||"",onChange:n,className:"fn-profile-form__textarea",rows:3,placeholder:"Tell us a bit about yourself..."}),e.jsxs("span",{className:"fn-profile-form__hint",children:[o.bio?.length||0,"/200 characters"]})]})]}),e.jsxs("div",{className:"fn-profile-form__actions",children:[h&&e.jsx("button",{type:"button",className:"fn-profile-form__button fn-profile-form__button--secondary",onClick:h,disabled:c,children:"Cancel"}),e.jsx("button",{type:"submit",className:"fn-profile-form__button fn-profile-form__button--primary",disabled:c,children:c?"Saving...":"Save Changes"})]})]})}b.__docgenInfo={description:`ProfileForm - User profile editing form

Allows users to update their profile information.`,methods:[],displayName:"ProfileForm",props:{initialData:{required:!0,tsType:{name:"ProfileData"},description:"Initial profile data"},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProfileData) => Promise<void>",signature:{arguments:[{type:{name:"ProfileData"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"Submit handler"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const w={title:"UserDashboard/ProfileForm",component:b,parameters:{layout:"padded",docs:{description:{component:"Form for editing user profile information."}}},tags:["autodocs"]},u=async a=>{console.log("Submitting:",a),await new Promise(m=>setTimeout(m,1500))},F=async()=>{throw await new Promise(a=>setTimeout(a,1e3)),new Error("Failed to update profile. Please try again.")},i={args:{initialData:{name:"Ruslan Faion",email:"ruslan@faion.net",jobTitle:"Software Developer",company:"Faion Network",bio:"Building tools for solopreneurs."},onSubmit:u,onCancel:()=>console.log("Cancelled")},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]},l={args:{initialData:{name:"John Doe",email:"john@example.com"},onSubmit:u,onCancel:()=>console.log("Cancelled")},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]},t={args:{initialData:{name:"Ruslan Faion",email:"ruslan@faion.net"},onSubmit:F,onCancel:()=>console.log("Cancelled")},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]},s={args:{initialData:{name:"Ruslan Faion",email:"ruslan@faion.net",jobTitle:"Founder",company:"Faion Network"},onSubmit:u},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    initialData: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      jobTitle: 'Software Developer',
      company: 'Faion Network',
      bio: 'Building tools for solopreneurs.'
    },
    onSubmit: mockSubmit,
    onCancel: () => console.log('Cancelled')
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initialData: {
      name: 'John Doe',
      email: 'john@example.com'
    },
    onSubmit: mockSubmit,
    onCancel: () => console.log('Cancelled')
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialData: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net'
    },
    onSubmit: mockSubmitError,
    onCancel: () => console.log('Cancelled')
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialData: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      jobTitle: 'Founder',
      company: 'Faion Network'
    },
    onSubmit: mockSubmit
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};const P=["Default","MinimalData","WithError","WithoutCancel"];export{i as Default,l as MinimalData,t as WithError,s as WithoutCancel,P as __namedExportsOrder,w as default};
