import{r as o,j as e}from"./iframe-B_omF_R9.js";import{M as $}from"./ModeSelector-x2sFbCYN.js";import{G as J}from"./GuidedFlow-DAmito9l.js";import{F as U}from"./FreeformEditor-DTVkBV3G.js";import{T as z}from"./TestimonialPreview-vdpbC9ma.js";import{C as O}from"./ConsentCheckbox-BFlpLCMP.js";import{R as K}from"./RewardBanner-Cq-OuQOQ.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";/* empty css                     */import"./QuestionStep-DQpofJmC.js";/* empty css                     *//* empty css                   *//* empty css                       *//* empty css                           *//* empty css                        *//* empty css                     */const X=[{id:"role",question:"What best describes your role?",options:[{label:"Solopreneur / Founder",value:"solopreneur"},{label:"Developer / Engineer",value:"developer"},{label:"Product Manager",value:"pm"},{label:"Designer",value:"designer"}],allowCustom:!0},{id:"feature",question:"What feature did you find most valuable?",options:[{label:"SDD Methodology",value:"sdd"},{label:"AI Agents & Skills",value:"agents"},{label:"Marketing Strategies",value:"marketing"},{label:"Product Development",value:"product"}],allowCustom:!0},{id:"impact",question:"How has Faion Network impacted your work?",options:[{label:"Saved me significant time",value:"time"},{label:"Improved my product quality",value:"quality"},{label:"Helped me launch faster",value:"launch"},{label:"Better organized my workflow",value:"workflow"}],allowCustom:!0}];function k({onSubmit:t,userName:s="User",questions:C=X,reward:f,className:F=""}){const[a,i]=o.useState("mode"),[l,q]=o.useState("guided"),[m,y]=o.useState(""),[T,D]=o.useState({}),[r,h]=o.useState("full"),[b,E]=o.useState(""),[v,W]=o.useState(""),[x,P]=o.useState(!1),[M,w]=o.useState(""),[S,j]=o.useState(""),_=["fn-testimonial-form",F].filter(Boolean).join(" "),N=n=>{const Q=n.role||"user",V=n.feature||"features",Y=n.impact||"helped me";return`As a ${Q}, I found the ${V} most valuable. It has ${Y} in my work. I would highly recommend Faion Network to anyone looking to improve their workflow!`},A=()=>r==="anonymous"?"Anonymous":r==="first_initial"?`${s.split(" ")[0]} ${s.split(" ")[1]?.[0]||""}.`.trim():s,H=()=>{i("content")},R=n=>{D(n),y(N(n)),i("preview")},I=()=>{m.length>=50&&i("preview")},G=()=>{i("content")},B=()=>{i("details")},L=async()=>{if(!x){w("You must agree to the consent before submitting.");return}w(""),j(""),i("submitting");try{await t({mode:l,content:m,guidedAnswers:l==="guided"?T:void 0,displayName:r,jobTitle:b||void 0,company:v||void 0,consentGiven:!0}),i("success")}catch(n){j(n instanceof Error?n.message:"Something went wrong. Please try again."),i("details")}};return a==="success"?e.jsx("div",{className:_,children:e.jsxs("div",{className:"fn-testimonial-form__success",children:[e.jsx("span",{className:"fn-testimonial-form__success-icon",children:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"24",cy:"24",r:"20",stroke:"currentColor",strokeWidth:"3"}),e.jsx("path",{d:"M16 24l5.5 5.5L32 19",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h2",{className:"fn-testimonial-form__success-title",children:"Thank You!"}),e.jsx("p",{className:"fn-testimonial-form__success-text",children:"Your testimonial has been submitted successfully. We will review it and publish it soon."})]})}):e.jsxs("div",{className:_,children:[e.jsx("h2",{className:"fn-testimonial-form__title",children:"Share Your Experience"}),e.jsx("p",{className:"fn-testimonial-form__subtitle",children:"Help others discover Faion Network by sharing your story."}),f&&e.jsx(K,{title:f.title,description:f.description}),a==="mode"&&e.jsxs(e.Fragment,{children:[e.jsx($,{value:l,onChange:q}),e.jsx("button",{type:"button",className:"fn-testimonial-form__button",onClick:H,children:"Continue"})]}),a==="content"&&l==="guided"&&e.jsx(J,{questions:C,onComplete:R,onGeneratePreview:N}),a==="content"&&l==="freeform"&&e.jsxs(e.Fragment,{children:[e.jsx(U,{value:m,onChange:y,minLength:50,maxLength:1e3}),e.jsx("button",{type:"button",className:"fn-testimonial-form__button",onClick:I,disabled:m.length<50,children:"Preview"})]}),a==="preview"&&e.jsxs(e.Fragment,{children:[e.jsx(z,{content:m,displayName:A(),jobTitle:b,company:v,onEdit:G}),e.jsx("button",{type:"button",className:"fn-testimonial-form__button",onClick:B,children:"Continue to Details"})]}),(a==="details"||a==="submitting")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"fn-testimonial-form__details",children:[e.jsx("h3",{className:"fn-testimonial-form__section-title",children:"Your Information"}),e.jsxs("div",{className:"fn-testimonial-form__field",children:[e.jsx("label",{className:"fn-testimonial-form__label",children:"How to display your name"}),e.jsxs("div",{className:"fn-testimonial-form__radio-group",children:[e.jsxs("label",{className:"fn-testimonial-form__radio",children:[e.jsx("input",{type:"radio",name:"displayName",checked:r==="full",onChange:()=>h("full")}),e.jsx("span",{children:s})]}),e.jsxs("label",{className:"fn-testimonial-form__radio",children:[e.jsx("input",{type:"radio",name:"displayName",checked:r==="first_initial",onChange:()=>h("first_initial")}),e.jsxs("span",{children:[s.split(" ")[0]," ",s.split(" ")[1]?.[0]||"","."," ","(First name only)"]})]}),e.jsxs("label",{className:"fn-testimonial-form__radio",children:[e.jsx("input",{type:"radio",name:"displayName",checked:r==="anonymous",onChange:()=>h("anonymous")}),e.jsx("span",{children:"Anonymous"})]})]})]}),e.jsxs("div",{className:"fn-testimonial-form__field",children:[e.jsx("label",{className:"fn-testimonial-form__label",children:"Job Title (optional)"}),e.jsx("input",{type:"text",value:b,onChange:n=>E(n.target.value),placeholder:"e.g., Founder, Developer, Designer",className:"fn-testimonial-form__input"})]}),e.jsxs("div",{className:"fn-testimonial-form__field",children:[e.jsx("label",{className:"fn-testimonial-form__label",children:"Company (optional)"}),e.jsx("input",{type:"text",value:v,onChange:n=>W(n.target.value),placeholder:"e.g., Acme Inc.",className:"fn-testimonial-form__input"})]})]}),e.jsx(O,{checked:x,onChange:P,error:M}),S&&e.jsx("p",{className:"fn-testimonial-form__error",children:S}),e.jsx("button",{type:"button",className:"fn-testimonial-form__button fn-testimonial-form__button--primary",onClick:L,disabled:a==="submitting",children:a==="submitting"?"Submitting...":"Submit Testimonial"})]})]})}k.__docgenInfo={description:`TestimonialForm - Main testimonial submission form

Multi-step form for collecting and submitting testimonials.`,methods:[],displayName:"TestimonialForm",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: TestimonialData) => Promise<void>",signature:{arguments:[{type:{name:"TestimonialData"},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:"Submit handler"},userName:{required:!1,tsType:{name:"string"},description:"User's full name",defaultValue:{value:"'User'",computed:!1}},questions:{required:!1,tsType:{name:"Array",elements:[{name:"Question"}],raw:"Question[]"},description:"Guided questions",defaultValue:{value:`[
  {
    id: 'role',
    question: 'What best describes your role?',
    options: [
      { label: 'Solopreneur / Founder', value: 'solopreneur' },
      { label: 'Developer / Engineer', value: 'developer' },
      { label: 'Product Manager', value: 'pm' },
      { label: 'Designer', value: 'designer' },
    ],
    allowCustom: true,
  },
  {
    id: 'feature',
    question: 'What feature did you find most valuable?',
    options: [
      { label: 'SDD Methodology', value: 'sdd' },
      { label: 'AI Agents & Skills', value: 'agents' },
      { label: 'Marketing Strategies', value: 'marketing' },
      { label: 'Product Development', value: 'product' },
    ],
    allowCustom: true,
  },
  {
    id: 'impact',
    question: 'How has Faion Network impacted your work?',
    options: [
      { label: 'Saved me significant time', value: 'time' },
      { label: 'Improved my product quality', value: 'quality' },
      { label: 'Helped me launch faster', value: 'launch' },
      { label: 'Better organized my workflow', value: 'workflow' },
    ],
    allowCustom: true,
  },
]`,computed:!1}},reward:{required:!1,tsType:{name:"signature",type:"object",raw:"{ title: string; description: string }",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},description:"Reward banner config"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const ve={title:"TestimonialForm/TestimonialForm",component:k,parameters:{layout:"padded",docs:{description:{component:"Complete testimonial submission form with guided and freeform modes."}}},tags:["autodocs"]},g=async t=>{console.log("Submitting testimonial:",t),await new Promise(s=>setTimeout(s,2e3))},Z=async()=>{throw await new Promise(t=>setTimeout(t,1500)),new Error("Failed to submit. Please try again.")},u={args:{onSubmit:g,userName:"Ruslan Faion"},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},d={args:{onSubmit:g,userName:"Ruslan Faion",reward:{title:"Get 1 Month Free!",description:"Share your experience and receive one month of free access to your current plan."}},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},c={args:{onSubmit:g,userName:"Jane Developer",questions:[{id:"how_found",question:"How did you find Faion Network?",options:[{label:"Search engine",value:"search"},{label:"Social media",value:"social"},{label:"Friend referral",value:"referral"},{label:"Blog post",value:"blog"}],allowCustom:!0},{id:"satisfaction",question:"How satisfied are you with Faion Network?",options:[{label:"Extremely satisfied",value:"extremely"},{label:"Very satisfied",value:"very"},{label:"Satisfied",value:"satisfied"},{label:"Neutral",value:"neutral"}],allowCustom:!1}]},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]},p={args:{onSubmit:Z,userName:"Ruslan Faion"},decorators:[t=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(t,{})})]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: mockSubmit,
    userName: 'Ruslan Faion'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: mockSubmit,
    userName: 'Ruslan Faion',
    reward: {
      title: 'Get 1 Month Free!',
      description: 'Share your experience and receive one month of free access to your current plan.'
    }
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: mockSubmit,
    userName: 'Jane Developer',
    questions: [{
      id: 'how_found',
      question: 'How did you find Faion Network?',
      options: [{
        label: 'Search engine',
        value: 'search'
      }, {
        label: 'Social media',
        value: 'social'
      }, {
        label: 'Friend referral',
        value: 'referral'
      }, {
        label: 'Blog post',
        value: 'blog'
      }],
      allowCustom: true
    }, {
      id: 'satisfaction',
      question: 'How satisfied are you with Faion Network?',
      options: [{
        label: 'Extremely satisfied',
        value: 'extremely'
      }, {
        label: 'Very satisfied',
        value: 'very'
      }, {
        label: 'Satisfied',
        value: 'satisfied'
      }, {
        label: 'Neutral',
        value: 'neutral'
      }],
      allowCustom: false
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: mockSubmitError,
    userName: 'Ruslan Faion'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};const ge=["Default","WithReward","WithCustomQuestions","WithErrorHandling"];export{u as Default,c as WithCustomQuestions,p as WithErrorHandling,d as WithReward,ge as __namedExportsOrder,ve as default};
