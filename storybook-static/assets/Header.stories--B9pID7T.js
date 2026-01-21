import{j as e}from"./iframe-B_omF_R9.js";import{H as l}from"./Header-B-WqzuvJ.js";/* empty css               *//* empty css                 */import"./preload-helper-Ct5FWWRu.js";import"./Monogram-Ct6H_8uF.js";const b={title:"FAION/Layout/Header",component:l,parameters:{layout:"fullscreen",docs:{description:{component:`
Header component following the Faion "Digital Journal" aesthetic.

## Features
- Sticky positioning with backdrop blur
- FN Monogram logo with click navigation
- Desktop navigation links with active states
- Mobile hamburger menu with full-screen drawer
- Scroll detection for shadow effect
- Login and CTA buttons

## Props
- **links**: Custom navigation links array
- **currentPage**: Current active page for highlighting
- **showLogin**: Toggle login button visibility
- **ctaText**: Customize CTA button text
- **onNavigate/onCtaClick/onLoginClick**: Callback handlers
        `}}},tags:["autodocs"],argTypes:{currentPage:{control:"select",options:["/methodologies","/agent","/pricing","/docs"],description:"Current page path for active state"},showLogin:{control:"boolean",description:"Show login button"},ctaText:{control:"text",description:"CTA button text"},onNavigate:{action:"navigate"},onCtaClick:{action:"cta-click"},onLoginClick:{action:"login-click"}}},o={args:{currentPage:"/"}},t={name:"Methodologies Active",args:{currentPage:"/methodologies"}},r={name:"Custom Navigation",args:{links:[{label:"Home",href:"/"},{label:"Features",href:"/features"},{label:"Pricing",href:"/pricing"},{label:"Blog",href:"/blog"},{label:"Contact",href:"/contact"}],currentPage:"/features",ctaText:"Start Free Trial"}},a={name:"Without Login Button",args:{showLogin:!1,ctaText:"Sign Up"}},n={name:"With Scroll Content",args:{currentPage:"/"},render:s=>e.jsxs("div",{className:"fn-scroll-demo",children:[e.jsx(l,{...s}),e.jsxs("div",{className:"fn-scroll-demo__content",children:[e.jsx("h1",{className:"fn-scroll-demo__title",children:"Scroll to see header effects"}),e.jsx("p",{className:"fn-scroll-demo__text",children:"The header uses a semi-transparent background with backdrop blur effect. When you scroll, a subtle shadow appears to indicate the header is floating."}),e.jsx("div",{className:"fn-scroll-demo__box",children:e.jsx("p",{children:"This burgundy block demonstrates the blur effect as you scroll behind the header."})}),[...Array(8)].map((d,c)=>e.jsx("p",{className:"fn-scroll-demo__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},c))]})]}),decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-scroll-demo {
            min-height: 250vh;
            background-color: #FAF9F6;
          }
          .fn-scroll-demo__content {
            padding: 48px;
            max-width: 800px;
            margin: 0 auto;
          }
          .fn-scroll-demo__title {
            font-family: Georgia, serif;
            font-size: 48px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
          .fn-scroll-demo__text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
            margin-top: 24px;
          }
          .fn-scroll-demo__box {
            margin-top: 48px;
            padding: 32px;
            background-color: #5D1F2D;
            border-radius: 8px;
            color: #FAF9F6;
            font-family: Inter, sans-serif;
          }
        `}),e.jsx(s,{})]})]},i={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile, navigation links are hidden and a hamburger menu appears. Click the menu button to open the mobile drawer."}}},args:{currentPage:"/"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: '/'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Methodologies Active',
  args: {
    currentPage: '/methodologies'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Custom Navigation',
  args: {
    links: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Features',
      href: '/features'
    }, {
      label: 'Pricing',
      href: '/pricing'
    }, {
      label: 'Blog',
      href: '/blog'
    }, {
      label: 'Contact',
      href: '/contact'
    }],
    currentPage: '/features',
    ctaText: 'Start Free Trial'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Without Login Button',
  args: {
    showLogin: false,
    ctaText: 'Sign Up'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Scroll Content',
  args: {
    currentPage: '/'
  },
  render: args => <div className="fn-scroll-demo">
      <Header {...args} />
      <div className="fn-scroll-demo__content">
        <h1 className="fn-scroll-demo__title">Scroll to see header effects</h1>
        <p className="fn-scroll-demo__text">
          The header uses a semi-transparent background with backdrop blur effect.
          When you scroll, a subtle shadow appears to indicate the header is floating.
        </p>
        <div className="fn-scroll-demo__box">
          <p>This burgundy block demonstrates the blur effect as you scroll behind the header.</p>
        </div>
        {[...Array(8)].map((_, i) => <p key={i} className="fn-scroll-demo__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>)}
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-scroll-demo {
            min-height: 250vh;
            background-color: #FAF9F6;
          }
          .fn-scroll-demo__content {
            padding: 48px;
            max-width: 800px;
            margin: 0 auto;
          }
          .fn-scroll-demo__title {
            font-family: Georgia, serif;
            font-size: 48px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
          .fn-scroll-demo__text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
            margin-top: 24px;
          }
          .fn-scroll-demo__box {
            margin-top: 48px;
            padding: 32px;
            background-color: #5D1F2D;
            border-radius: 8px;
            color: #FAF9F6;
            font-family: Inter, sans-serif;
          }
        \`}</style>
        <Story />
      </>]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'On mobile, navigation links are hidden and a hamburger menu appears. Click the menu button to open the mobile drawer.'
      }
    }
  },
  args: {
    currentPage: '/'
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","MethodologiesActive","CustomLinks","NoLogin","WithScrollContent","MobileView"];export{r as CustomLinks,o as Default,t as MethodologiesActive,i as MobileView,a as NoLogin,n as WithScrollContent,x as __namedExportsOrder,b as default};
