import{j as e}from"./iframe-B_omF_R9.js";import{F as l,a as m}from"./Footer-01LSqXP5.js";/* empty css               *//* empty css                 */import"./preload-helper-Ct5FWWRu.js";import"./Monogram-Ct6H_8uF.js";const h={title:"FAION/Layout/Footer",component:l,parameters:{layout:"fullscreen",docs:{description:{component:`
Footer component following the Faion "Digital Journal" aesthetic.

## Features
- Brand section with monogram and tagline
- Social media links (Twitter, LinkedIn, GitHub)
- Configurable link columns
- Copyright notice
- Simple variant for minimal pages

## Variants
- **Footer**: Full footer with columns and social links
- **FooterSimple**: Minimal footer with copyright and essential links
        `}}},tags:["autodocs"],argTypes:{showSocial:{control:"boolean",description:"Show social media links"},copyright:{control:"text",description:"Custom copyright text"},onNavigate:{action:"navigate"}}},n={args:{}},a={name:"Without Social Links",args:{showSocial:!1}},t={name:"Custom Columns",args:{columns:[{title:"Platform",links:[{label:"Features",href:"/features"},{label:"Integrations",href:"/integrations"},{label:"API",href:"/api"}]},{title:"Company",links:[{label:"About",href:"/about"},{label:"Careers",href:"/careers"},{label:"Contact",href:"/contact"}]},{title:"Support",links:[{label:"Help Center",href:"/help"},{label:"Community",href:"/community"},{label:"Status",href:"/status"}]}],copyright:"2026 Custom Company. All rights reserved."}},o={name:"Simple Variant",render:()=>e.jsx(m,{}),parameters:{docs:{description:{story:"Minimal footer variant with just copyright and essential navigation links."}}}},r={name:"In Page Context",args:{},render:s=>e.jsxs("div",{className:"fn-page",children:[e.jsxs("div",{className:"fn-page__content",children:[e.jsx("h1",{className:"fn-page__title",children:"Page Content"}),e.jsx("p",{className:"fn-page__text",children:"This demonstrates how the footer appears at the bottom of a page with content above it. The footer maintains proper spacing and visual hierarchy."}),e.jsx("p",{className:"fn-page__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),e.jsx(l,{...s})]}),decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-page {
            background-color: #FAF9F6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .fn-page__content {
            flex: 1;
            padding: 64px 32px;
            max-width: 800px;
            margin: 0 auto;
          }
          .fn-page__title {
            font-family: Georgia, serif;
            font-size: 48px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
          .fn-page__text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
            margin-top: 16px;
          }
        `}),e.jsx(s,{})]})]},i={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile, columns stack and the layout adapts to smaller screens."}}},args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Without Social Links',
  args: {
    showSocial: false
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Custom Columns',
  args: {
    columns: [{
      title: 'Platform',
      links: [{
        label: 'Features',
        href: '/features'
      }, {
        label: 'Integrations',
        href: '/integrations'
      }, {
        label: 'API',
        href: '/api'
      }]
    }, {
      title: 'Company',
      links: [{
        label: 'About',
        href: '/about'
      }, {
        label: 'Careers',
        href: '/careers'
      }, {
        label: 'Contact',
        href: '/contact'
      }]
    }, {
      title: 'Support',
      links: [{
        label: 'Help Center',
        href: '/help'
      }, {
        label: 'Community',
        href: '/community'
      }, {
        label: 'Status',
        href: '/status'
      }]
    }],
    copyright: '2026 Custom Company. All rights reserved.'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Simple Variant',
  render: () => <FooterSimple />,
  parameters: {
    docs: {
      description: {
        story: 'Minimal footer variant with just copyright and essential navigation links.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'In Page Context',
  args: {},
  render: args => <div className="fn-page">
      <div className="fn-page__content">
        <h1 className="fn-page__title">Page Content</h1>
        <p className="fn-page__text">
          This demonstrates how the footer appears at the bottom of a page with content above it.
          The footer maintains proper spacing and visual hierarchy.
        </p>
        <p className="fn-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Footer {...args} />
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-page {
            background-color: #FAF9F6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .fn-page__content {
            flex: 1;
            padding: 64px 32px;
            max-width: 800px;
            margin: 0 auto;
          }
          .fn-page__title {
            font-family: Georgia, serif;
            font-size: 48px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
          .fn-page__text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
            margin-top: 16px;
          }
        \`}</style>
        <Story />
      </>]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'On mobile, columns stack and the layout adapts to smaller screens.'
      }
    }
  },
  args: {}
}`,...i.parameters?.docs?.source}}};const x=["Default","WithoutSocial","CustomColumns","Simple","InPageContext","MobileView"];export{t as CustomColumns,n as Default,r as InPageContext,i as MobileView,o as Simple,a as WithoutSocial,x as __namedExportsOrder,h as default};
