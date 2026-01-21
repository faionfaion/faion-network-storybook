import{j as e}from"./iframe-B_omF_R9.js";import{H as p}from"./Header-B-WqzuvJ.js";import{F as m}from"./Footer-01LSqXP5.js";/* empty css               *//* empty css               *//* empty css                 *//* empty css                        */import"./preload-helper-Ct5FWWRu.js";import"./Monogram-Ct6H_8uF.js";function d({title:u,lastUpdated:c,tableOfContents:a,children:h,onNavigate:l}){return e.jsxs("div",{className:"fn-legal-layout",children:[e.jsx(p,{onNavigate:l}),e.jsx("main",{className:"fn-legal-layout__main",children:e.jsxs("article",{className:"fn-legal-layout__article",children:[e.jsxs("header",{className:"fn-legal-layout__header",children:[e.jsx("h1",{className:"fn-legal-layout__title",children:u}),c&&e.jsxs("p",{className:"fn-legal-layout__updated",children:["Last updated: ",c]})]}),a&&a.length>0&&e.jsxs("nav",{className:"fn-legal-layout__toc","aria-label":"Table of contents",children:[e.jsx("h2",{className:"fn-legal-layout__toc-title",children:"Contents"}),e.jsx("ul",{className:"fn-legal-layout__toc-list",children:a.map(t=>e.jsx("li",{className:`fn-legal-layout__toc-item fn-legal-layout__toc-item--level-${t.level||1}`,children:e.jsx("a",{href:`#${t.id}`,className:"fn-legal-layout__toc-link",children:t.title})},t.id))})]}),e.jsx("div",{className:"fn-legal-layout__content",children:h})]})}),e.jsx(m,{onNavigate:l})]})}d.__docgenInfo={description:`LegalPageLayout - Typography-focused layout for legal pages

Used for: Terms of Service, Privacy Policy, Cookie Policy
Features:
- Header and Footer included
- Content area max-width for readability
- Typography optimized for long-form reading
- Last updated date display
- Table of contents support`,methods:[],displayName:"LegalPageLayout",props:{title:{required:!0,tsType:{name:"string"},description:"Page title"},lastUpdated:{required:!1,tsType:{name:"string"},description:"Last updated date"},tableOfContents:{required:!1,tsType:{name:"Array",elements:[{name:"TableOfContentsItem"}],raw:"TableOfContentsItem[]"},description:"Table of contents items"},children:{required:!0,tsType:{name:"ReactNode"},description:"Main content"},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:"Callback when navigation link clicked"}}};const k={title:"FAION/Layout/LegalPageLayout",component:d,parameters:{layout:"fullscreen",docs:{description:{component:`
Typography-focused layout for legal pages.

## Features
- Header and Footer included
- Content area max-width for readability (720px)
- Typography optimized for long-form reading
- Last updated date display
- Table of contents support with anchor links

## Use Cases
- Terms of Service
- Privacy Policy
- Cookie Policy
- Refund Policy
- Acceptable Use Policy
        `}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Page title"},lastUpdated:{control:"text",description:"Last updated date"},onNavigate:{action:"navigate"}}},y=e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"introduction",children:"Introduction"}),e.jsx("p",{children:"Welcome to Faion Network. These Terms of Service govern your use of our website and services. By accessing or using Faion Network, you agree to be bound by these terms."}),e.jsx("p",{children:"Please read these terms carefully before using our services. If you do not agree with any part of these terms, you may not access the service."}),e.jsx("h2",{id:"definitions",children:"Definitions"}),e.jsx("p",{children:"For the purposes of these Terms of Service:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:'"Service"'})," refers to the Faion Network platform, website, and related services."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'"User"'})," refers to any individual who accesses or uses the Service."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'"Content"'})," refers to methodologies, articles, guides, and other materials available through the Service."]}),e.jsxs("li",{children:[e.jsx("strong",{children:'"Subscription"'})," refers to paid access to premium features and content."]})]}),e.jsx("h2",{id:"account",children:"Account Terms"}),e.jsx("h3",{id:"account-registration",children:"Registration"}),e.jsx("p",{children:"To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration."}),e.jsx("h3",{id:"account-security",children:"Account Security"}),e.jsx("p",{children:"You are responsible for maintaining the security of your account credentials. Faion Network will not be liable for any loss or damage arising from unauthorized access to your account."}),e.jsx("h2",{id:"subscriptions",children:"Subscriptions and Payment"}),e.jsx("p",{children:"Faion Network offers various subscription tiers. By subscribing, you agree to pay the applicable fees as described at the time of purchase."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Subscriptions are billed in advance on a monthly or annual basis."}),e.jsx("li",{children:"You may cancel your subscription at any time."}),e.jsx("li",{children:"Refunds are provided in accordance with our Refund Policy."})]}),e.jsx("h2",{id:"contact",children:"Contact Us"}),e.jsxs("p",{children:["If you have any questions about these Terms of Service, please contact us at"," ",e.jsx("a",{href:"mailto:legal@faion.net",children:"legal@faion.net"}),"."]})]}),i={args:{title:"Terms of Service",lastUpdated:"January 15, 2026",tableOfContents:[{id:"introduction",title:"Introduction"},{id:"definitions",title:"Definitions"},{id:"account",title:"Account Terms"},{id:"account-registration",title:"Registration",level:2},{id:"account-security",title:"Account Security",level:2},{id:"subscriptions",title:"Subscriptions and Payment"},{id:"contact",title:"Contact Us"}],children:y}},o={name:"Privacy Policy",args:{title:"Privacy Policy",lastUpdated:"January 10, 2026",tableOfContents:[{id:"collection",title:"Information We Collect"},{id:"use",title:"How We Use Information"},{id:"sharing",title:"Information Sharing"},{id:"security",title:"Data Security"},{id:"rights",title:"Your Rights"}],children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"collection",children:"Information We Collect"}),e.jsx("p",{children:"We collect information you provide directly to us, including when you create an account, make a purchase, or contact us for support."}),e.jsx("h2",{id:"use",children:"How We Use Information"}),e.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you."}),e.jsx("h2",{id:"sharing",children:"Information Sharing"}),e.jsx("p",{children:"We do not sell your personal information. We may share information with service providers who assist us in operating our platform."}),e.jsx("h2",{id:"security",children:"Data Security"}),e.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure."}),e.jsx("h2",{id:"rights",children:"Your Rights"}),e.jsxs("p",{children:["You have the right to access, correct, or delete your personal information. Contact us at ",e.jsx("a",{href:"mailto:privacy@faion.net",children:"privacy@faion.net"})," to exercise these rights."]})]})}},r={name:"Without Table of Contents",args:{title:"Cookie Policy",lastUpdated:"December 1, 2025",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This Cookie Policy explains how Faion Network uses cookies and similar technologies when you visit our website."}),e.jsx("h2",{children:"What Are Cookies"}),e.jsx("p",{children:"Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience."}),e.jsx("h2",{children:"Types of Cookies We Use"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Essential Cookies:"})," Required for the website to function properly."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Analytics Cookies:"})," Help us understand how visitors use our site."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preference Cookies:"})," Remember your settings and preferences."]})]}),e.jsx("h2",{children:"Managing Cookies"}),e.jsx("p",{children:"You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website."})]})}},n={name:"Without Last Updated",args:{title:"Acceptable Use Policy",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This Acceptable Use Policy outlines the rules and guidelines for using Faion Network services."}),e.jsx("h2",{children:"Prohibited Activities"}),e.jsx("p",{children:"You may not use our services to:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Violate any applicable laws or regulations"}),e.jsx("li",{children:"Infringe on intellectual property rights"}),e.jsx("li",{children:"Transmit malware or harmful code"}),e.jsx("li",{children:"Attempt to gain unauthorized access to our systems"})]}),e.jsx("h2",{children:"Enforcement"}),e.jsx("p",{children:"We reserve the right to suspend or terminate accounts that violate this policy."})]})}},s={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"}},args:{title:"Terms of Service",lastUpdated:"January 15, 2026",tableOfContents:[{id:"intro",title:"Introduction"},{id:"terms",title:"Terms"}],children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"intro",children:"Introduction"}),e.jsx("p",{children:"Welcome to Faion Network. These Terms govern your use of our services."}),e.jsx("h2",{id:"terms",children:"Terms"}),e.jsx("p",{children:"By using our service, you agree to these terms."})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Terms of Service',
    lastUpdated: 'January 15, 2026',
    tableOfContents: [{
      id: 'introduction',
      title: 'Introduction'
    }, {
      id: 'definitions',
      title: 'Definitions'
    }, {
      id: 'account',
      title: 'Account Terms'
    }, {
      id: 'account-registration',
      title: 'Registration',
      level: 2
    }, {
      id: 'account-security',
      title: 'Account Security',
      level: 2
    }, {
      id: 'subscriptions',
      title: 'Subscriptions and Payment'
    }, {
      id: 'contact',
      title: 'Contact Us'
    }],
    children: sampleContent
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Privacy Policy',
  args: {
    title: 'Privacy Policy',
    lastUpdated: 'January 10, 2026',
    tableOfContents: [{
      id: 'collection',
      title: 'Information We Collect'
    }, {
      id: 'use',
      title: 'How We Use Information'
    }, {
      id: 'sharing',
      title: 'Information Sharing'
    }, {
      id: 'security',
      title: 'Data Security'
    }, {
      id: 'rights',
      title: 'Your Rights'
    }],
    children: <>
        <h2 id="collection">Information We Collect</h2>
        <p>
          We collect information you provide directly to us, including when you create an account,
          make a purchase, or contact us for support.
        </p>

        <h2 id="use">How We Use Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services,
          process transactions, and communicate with you.
        </p>

        <h2 id="sharing">Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share information with service providers
          who assist us in operating our platform.
        </p>

        <h2 id="security">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access or disclosure.
        </p>

        <h2 id="rights">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. Contact us
          at <a href="mailto:privacy@faion.net">privacy@faion.net</a> to exercise these rights.
        </p>
      </>
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without Table of Contents',
  args: {
    title: 'Cookie Policy',
    lastUpdated: 'December 1, 2025',
    children: <>
        <p>
          This Cookie Policy explains how Faion Network uses cookies and similar technologies
          when you visit our website.
        </p>

        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help
          websites remember your preferences and improve your browsing experience.
        </p>

        <h2>Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. Note that disabling certain
          cookies may affect the functionality of our website.
        </p>
      </>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Without Last Updated',
  args: {
    title: 'Acceptable Use Policy',
    children: <>
        <p>
          This Acceptable Use Policy outlines the rules and guidelines for using Faion Network services.
        </p>

        <h2>Prohibited Activities</h2>
        <p>You may not use our services to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Transmit malware or harmful code</li>
          <li>Attempt to gain unauthorized access to our systems</li>
        </ul>

        <h2>Enforcement</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate this policy.
        </p>
      </>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    title: 'Terms of Service',
    lastUpdated: 'January 15, 2026',
    tableOfContents: [{
      id: 'intro',
      title: 'Introduction'
    }, {
      id: 'terms',
      title: 'Terms'
    }],
    children: <>
        <h2 id="intro">Introduction</h2>
        <p>
          Welcome to Faion Network. These Terms govern your use of our services.
        </p>
        <h2 id="terms">Terms</h2>
        <p>
          By using our service, you agree to these terms.
        </p>
      </>
  }
}`,...s.parameters?.docs?.source}}};const P=["Default","PrivacyPolicy","WithoutTOC","WithoutLastUpdated","MobileView"];export{i as Default,s as MobileView,o as PrivacyPolicy,n as WithoutLastUpdated,r as WithoutTOC,P as __namedExportsOrder,k as default};
