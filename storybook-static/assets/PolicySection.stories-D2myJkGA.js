import{r as m,j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function i({title:n,id:r,children:c,defaultExpanded:l=!0,className:d=""}){const[o,u]=m.useState(l),p=["fn-policy-section",o?"fn-policy-section--expanded":"",d].filter(Boolean).join(" ");return e.jsxs("section",{className:p,id:r,children:[e.jsxs("button",{type:"button",className:"fn-policy-section__header",onClick:()=>u(!o),"aria-expanded":o,"aria-controls":`${r}-content`,children:[e.jsx("h2",{className:"fn-policy-section__title",children:n}),e.jsx("span",{className:"fn-policy-section__icon",children:e.jsx(h,{})})]}),e.jsx("div",{id:`${r}-content`,className:"fn-policy-section__content",hidden:!o,children:e.jsx("div",{className:"fn-policy-section__body",children:c})})]})}function h(){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})}i.__docgenInfo={description:`PolicySection - Expandable section for legal policy pages

Used in Privacy Policy and Terms of Service pages for collapsible content sections.`,methods:[],displayName:"PolicySection",props:{title:{required:!0,tsType:{name:"string"},description:"Section title"},id:{required:!0,tsType:{name:"string"},description:"Section anchor ID"},children:{required:!0,tsType:{name:"ReactNode"},description:"Section content"},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"Whether section is expanded by default",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const x={title:"Legal/PolicySection",component:i,parameters:{layout:"padded",docs:{description:{component:"Expandable section for legal policy pages like Privacy Policy and Terms of Service."}}},tags:["autodocs"]},t={args:{title:"Information We Collect",id:"information-collection",defaultExpanded:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support."}),e.jsx("p",{children:"This information may include:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Name and email address"}),e.jsx("li",{children:"Billing information and payment details"}),e.jsx("li",{children:"Profile information and preferences"}),e.jsx("li",{children:"Communications and correspondence with us"})]})]})},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},a={args:{title:"How We Use Your Information",id:"information-use",defaultExpanded:!1,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"We use the information we collect to:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Provide, maintain, and improve our services"}),e.jsx("li",{children:"Process transactions and send related information"}),e.jsx("li",{children:"Send you technical notices and support messages"}),e.jsx("li",{children:"Respond to your comments and questions"})]})]})},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},s={render:()=>e.jsxs("div",{style:{maxWidth:"700px"},children:[e.jsxs(i,{title:"1. Introduction",id:"introduction",defaultExpanded:!1,children:[e.jsx("p",{children:"Welcome to Faion Network. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service."}),e.jsx("p",{children:"Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."})]}),e.jsxs(i,{title:"2. Information We Collect",id:"information-collection",defaultExpanded:!0,children:[e.jsx("h3",{children:"Personal Data"}),e.jsx("p",{children:"Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register."}),e.jsx("h3",{children:"Derivative Data"}),e.jsx("p",{children:"Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times."})]}),e.jsxs(i,{title:"3. Use of Your Information",id:"use-information",defaultExpanded:!1,children:[e.jsx("p",{children:"Having accurate information about you permits us to provide you with a smooth experience."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Create and manage your account"}),e.jsx("li",{children:"Process your transactions"}),e.jsx("li",{children:"Email you regarding your account or order"}),e.jsx("li",{children:"Fulfill and manage purchases, orders, payments"})]})]}),e.jsxs(i,{title:"4. Contact Us",id:"contact",defaultExpanded:!1,children:[e.jsx("p",{children:"If you have questions or comments about this Privacy Policy, please contact us at:"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",e.jsx("a",{href:"mailto:privacy@faion.net",children:"privacy@faion.net"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Information We Collect',
    id: 'information-collection',
    defaultExpanded: true,
    children: <>
        <p>
          We collect information you provide directly to us, such as when you create an account,
          make a purchase, or contact us for support.
        </p>
        <p>This information may include:</p>
        <ul>
          <li>Name and email address</li>
          <li>Billing information and payment details</li>
          <li>Profile information and preferences</li>
          <li>Communications and correspondence with us</li>
        </ul>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'How We Use Your Information',
    id: 'information-use',
    defaultExpanded: false,
    children: <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices and support messages</li>
          <li>Respond to your comments and questions</li>
        </ul>
      </>
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '700px'
  }}>
      <PolicySection title="1. Introduction" id="introduction" defaultExpanded={false}>
        <p>
          Welcome to Faion Network. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our service.
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this
          privacy policy, please do not access the site.
        </p>
      </PolicySection>

      <PolicySection title="2. Information We Collect" id="information-collection" defaultExpanded={true}>
        <h3>Personal Data</h3>
        <p>
          Personally identifiable information, such as your name, shipping address, email address,
          and telephone number, that you voluntarily give to us when you register.
        </p>
        <h3>Derivative Data</h3>
        <p>
          Information our servers automatically collect when you access the Site, such as your IP
          address, browser type, operating system, access times.
        </p>
      </PolicySection>

      <PolicySection title="3. Use of Your Information" id="use-information" defaultExpanded={false}>
        <p>Having accurate information about you permits us to provide you with a smooth experience.</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Process your transactions</li>
          <li>Email you regarding your account or order</li>
          <li>Fulfill and manage purchases, orders, payments</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Contact Us" id="contact" defaultExpanded={false}>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:privacy@faion.net">privacy@faion.net</a>
        </p>
      </PolicySection>
    </div>
}`,...s.parameters?.docs?.source}}};const v=["Default","Collapsed","MultipleSections"];export{a as Collapsed,t as Default,s as MultipleSections,v as __namedExportsOrder,x as default};
