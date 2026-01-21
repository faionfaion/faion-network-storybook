import{r as h,j as e}from"./iframe-B_omF_R9.js";/* empty css                     */import"./preload-helper-Ct5FWWRu.js";function v({headline:r,description:s,placeholder:S="Enter your email",buttonText:x="Subscribe",privacyText:f,successMessage:T="Thanks for subscribing! Check your inbox.",errorMessage:_,isLoading:g=!1,isSuccess:j=!1,onSubmit:k,variant:w="inline"}){const[b,E]=h.useState(""),[N,a]=h.useState(null),[P,C]=h.useState(!1),F=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),G=async t=>{if(t.preventDefault(),a(null),!b.trim()){a("Please enter your email address");return}if(!F(b)){a("Please enter a valid email address");return}try{await k?.(b),C(!0)}catch{a("Something went wrong. Please try again.")}},M=j||P,y=_||N;return e.jsxs("div",{className:`fn-email-capture fn-email-capture--${w}`,children:[(r||s)&&e.jsxs("div",{className:"fn-email-capture__header",children:[r&&e.jsx("h3",{className:"fn-email-capture__headline",children:r}),s&&e.jsx("p",{className:"fn-email-capture__description",children:s})]}),M?e.jsxs("div",{className:"fn-email-capture__success",children:[e.jsx("span",{className:"fn-email-capture__success-icon",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),e.jsx("p",{className:"fn-email-capture__success-text",children:T})]}):e.jsxs(e.Fragment,{children:[e.jsxs("form",{className:"fn-email-capture__form",onSubmit:G,children:[e.jsxs("div",{className:"fn-email-capture__input-wrapper",children:[e.jsx("input",{type:"email",className:`fn-email-capture__input ${y?"fn-email-capture__input--error":""}`,placeholder:S,value:b,onChange:t=>{E(t.target.value),a(null)},disabled:g,"aria-label":"Email address","aria-invalid":!!y}),e.jsx("button",{type:"submit",className:"fn-email-capture__button",disabled:g,children:g?e.jsx("span",{className:"fn-email-capture__spinner"}):x})]}),y&&e.jsx("p",{className:"fn-email-capture__error",children:y})]}),f&&e.jsx("p",{className:"fn-email-capture__privacy",children:f})]})]})}v.__docgenInfo={description:`EmailCapture - Newsletter signup form

Clean email capture with validation and states.
Follows the "Digital Journal" theme.`,methods:[],displayName:"EmailCapture",props:{headline:{required:!1,tsType:{name:"ReactNode"},description:"Headline text"},description:{required:!1,tsType:{name:"string"},description:"Description text"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder for email input",defaultValue:{value:"'Enter your email'",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Submit button text",defaultValue:{value:"'Subscribe'",computed:!1}},privacyText:{required:!1,tsType:{name:"ReactNode"},description:"Privacy notice text"},successMessage:{required:!1,tsType:{name:"string"},description:"Success message",defaultValue:{value:"'Thanks for subscribing! Check your inbox.'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message (overrides validation errors)"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},isSuccess:{required:!1,tsType:{name:"boolean"},description:"Success state (form submitted)",defaultValue:{value:"false",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string) => void | Promise<void>",signature:{arguments:[{type:{name:"string"},name:"email"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Form submit handler"},variant:{required:!1,tsType:{name:"union",raw:"'inline' | 'stacked' | 'centered'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'stacked'"},{name:"literal",value:"'centered'"}]},description:"Layout variant",defaultValue:{value:"'inline'",computed:!1}}}};const L={title:"Landing/EmailCapture",component:v,parameters:{layout:"padded",docs:{description:{component:"Email capture form for newsletter signups. Features validation, loading, success, and error states."}}},tags:["autodocs"]},i={args:{headline:"Stay Updated",description:"Get the latest methodologies and insights delivered to your inbox.",placeholder:"Enter your email",buttonText:"Subscribe",privacyText:e.jsxs(e.Fragment,{children:["By subscribing, you agree to our"," ",e.jsx("a",{href:"#privacy",children:"Privacy Policy"}),"."]}),onSubmit:r=>(console.log("Submitted:",r),new Promise(s=>setTimeout(s,1e3)))}},n={args:{headline:"Join 10,000+ Solopreneurs",description:"Get weekly insights on building a profitable solo business.",buttonText:"Get Free Access",variant:"centered",privacyText:"No spam. Unsubscribe anytime.",onSubmit:r=>console.log("Submitted:",r)}},o={args:{headline:"Download the Free Guide",description:"Enter your email to receive the complete solopreneur starter pack.",buttonText:"Send Me the Guide",variant:"stacked",onSubmit:r=>console.log("Submitted:",r)},decorators:[r=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})]},c={args:{headline:"Join Our Newsletter",isLoading:!0,onSubmit:()=>{}}},l={args:{headline:"Join Our Newsletter",isSuccess:!0,successMessage:"Welcome aboard! Check your inbox for a confirmation email."}},d={args:{headline:"Join Our Newsletter",errorMessage:"This email is already subscribed. Try another one.",onSubmit:()=>{}}},u={args:{placeholder:"Your email address",buttonText:"Subscribe",privacyText:"We respect your privacy.",onSubmit:r=>console.log("Submitted:",r)}},m={args:{headline:"Get Early Access",description:"Be the first to try new features.",buttonText:"Join Waitlist",onSubmit:r=>console.log("Submitted:",r)},decorators:[r=>e.jsx("div",{style:{background:"#1C1C1E",padding:"48px",borderRadius:"8px"},children:e.jsx("div",{style:{color:"#FAF9F6"},children:e.jsx(r,{})})})]},p={args:{headline:"Subscribe to Updates",privacyText:e.jsxs(e.Fragment,{children:["By subscribing, you agree to receive marketing communications from us. You can unsubscribe at any time by clicking the link in our emails. Read our ",e.jsx("a",{href:"#privacy",children:"Privacy Policy"})," and"," ",e.jsx("a",{href:"#terms",children:"Terms of Service"}),"."]}),onSubmit:r=>console.log("Submitted:",r)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Stay Updated',
    description: 'Get the latest methodologies and insights delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    privacyText: <>
        By subscribing, you agree to our{' '}
        <a href="#privacy">Privacy Policy</a>.
      </>,
    onSubmit: email => {
      console.log('Submitted:', email);
      return new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Default inline layout",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Join 10,000+ Solopreneurs',
    description: 'Get weekly insights on building a profitable solo business.',
    buttonText: 'Get Free Access',
    variant: 'centered',
    privacyText: 'No spam. Unsubscribe anytime.',
    onSubmit: email => console.log('Submitted:', email)
  }
}`,...n.parameters?.docs?.source},description:{story:"Centered variant",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Download the Free Guide',
    description: 'Enter your email to receive the complete solopreneur starter pack.',
    buttonText: 'Send Me the Guide',
    variant: 'stacked',
    onSubmit: email => console.log('Submitted:', email)
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source},description:{story:"Stacked variant",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Join Our Newsletter',
    isLoading: true,
    onSubmit: () => {}
  }
}`,...c.parameters?.docs?.source},description:{story:"Loading state",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Join Our Newsletter',
    isSuccess: true,
    successMessage: 'Welcome aboard! Check your inbox for a confirmation email.'
  }
}`,...l.parameters?.docs?.source},description:{story:"Success state",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Join Our Newsletter',
    errorMessage: 'This email is already subscribed. Try another one.',
    onSubmit: () => {}
  }
}`,...d.parameters?.docs?.source},description:{story:"Error state",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Your email address',
    buttonText: 'Subscribe',
    privacyText: 'We respect your privacy.',
    onSubmit: email => console.log('Submitted:', email)
  }
}`,...u.parameters?.docs?.source},description:{story:"Minimal - no headline",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Get Early Access',
    description: 'Be the first to try new features.',
    buttonText: 'Join Waitlist',
    onSubmit: email => console.log('Submitted:', email)
  },
  decorators: [Story => <div style={{
    background: '#1C1C1E',
    padding: '48px',
    borderRadius: '8px'
  }}>
        <div style={{
      color: '#FAF9F6'
    }}>
          <Story />
        </div>
      </div>]
}`,...m.parameters?.docs?.source},description:{story:"Custom styling in dark section",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Subscribe to Updates',
    privacyText: <>
        By subscribing, you agree to receive marketing communications from us.
        You can unsubscribe at any time by clicking the link in our emails.
        Read our <a href="#privacy">Privacy Policy</a> and{' '}
        <a href="#terms">Terms of Service</a>.
      </>,
    onSubmit: email => console.log('Submitted:', email)
  }
}`,...p.parameters?.docs?.source},description:{story:"With long privacy text",...p.parameters?.docs?.description}}};const B=["Default","Centered","Stacked","Loading","Success","Error","Minimal","InDarkSection","LongPrivacyText"];export{n as Centered,i as Default,d as Error,m as InDarkSection,c as Loading,p as LongPrivacyText,u as Minimal,o as Stacked,l as Success,B as __namedExportsOrder,L as default};
