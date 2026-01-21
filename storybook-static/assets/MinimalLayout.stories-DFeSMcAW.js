import{j as e}from"./iframe-B_omF_R9.js";import{M as u}from"./Monogram-Ct6H_8uF.js";/* empty css                 *//* empty css                      */import"./preload-helper-Ct5FWWRu.js";function l({children:d,maxWidth:p="default",showMonogram:c=!0,onLogoClick:x,footer:s}){const m={narrow:"fn-minimal-layout__content--narrow",default:"fn-minimal-layout__content--default",wide:"fn-minimal-layout__content--wide"}[p];return e.jsxs("div",{className:"fn-minimal-layout",children:[e.jsxs("main",{className:"fn-minimal-layout__main",children:[c&&e.jsx("div",{className:"fn-minimal-layout__logo",children:e.jsx(u,{size:"large",onClick:x})}),e.jsx("div",{className:`fn-minimal-layout__content ${m}`,children:d})]}),s&&e.jsx("footer",{className:"fn-minimal-layout__footer",children:s})]})}l.__docgenInfo={description:`MinimalLayout - Clean centered layout for auth pages

Used for: Login, Signup, Password Reset, Email Verification
Features:
- Centered card layout
- FN Monogram at top
- Warm Alabaster background
- Proper vertical centering
- Responsive (full-width on mobile)`,methods:[],displayName:"MinimalLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content to render inside the layout"},maxWidth:{required:!1,tsType:{name:"union",raw:"'narrow' | 'default' | 'wide'",elements:[{name:"literal",value:"'narrow'"},{name:"literal",value:"'default'"},{name:"literal",value:"'wide'"}]},description:"Max width of the content area",defaultValue:{value:"'default'",computed:!1}},showMonogram:{required:!1,tsType:{name:"boolean"},description:"Show the monogram",defaultValue:{value:"true",computed:!1}},onLogoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when monogram clicked"},footer:{required:!1,tsType:{name:"ReactNode"},description:"Optional footer content"}}};const b={title:"FAION/Layout/MinimalLayout",component:l,parameters:{layout:"fullscreen",docs:{description:{component:`
Minimal centered layout for authentication pages.

## Features
- Centered card layout with FN Monogram
- Warm Alabaster background
- Proper vertical centering
- Three width variants (narrow, default, wide)
- Responsive (full-width on mobile)

## Use Cases
- Login page
- Signup page
- Password reset
- Email verification
- Simple forms
        `}}},tags:["autodocs"],argTypes:{maxWidth:{control:"select",options:["narrow","default","wide"],description:"Content area max width"},showMonogram:{control:"boolean",description:"Show FN monogram above content"},onLogoClick:{action:"logo-click"}}},o={args:{children:e.jsxs("div",{children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E",margin:"0 0 8px 0"},children:"Welcome back"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:"0 0 24px 0"},children:"Sign in to your account to continue"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("input",{type:"email",placeholder:"Email address",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter, sans-serif",fontSize:"14px"}}),e.jsx("input",{type:"password",placeholder:"Password",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter, sans-serif",fontSize:"14px"}}),e.jsx("button",{style:{width:"100%",padding:"12px 24px",backgroundColor:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",fontFamily:"Inter, sans-serif",fontWeight:"500",cursor:"pointer"},children:"Sign in"})]})]})}},r={name:"Signup Form",args:{maxWidth:"wide",children:e.jsxs("div",{children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E",margin:"0 0 8px 0"},children:"Create your account"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:"0 0 24px 0"},children:"Start your solopreneur journey today"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsx("input",{placeholder:"First name",style:{padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"14px"}}),e.jsx("input",{placeholder:"Last name",style:{padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"14px"}})]}),e.jsx("input",{placeholder:"Email address",style:{padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"14px"}}),e.jsx("input",{type:"password",placeholder:"Password",style:{padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"14px"}}),e.jsx("button",{style:{padding:"12px 24px",backgroundColor:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",fontFamily:"Inter",fontWeight:"500",cursor:"pointer"},children:"Create account"})]})]})}},n={name:"Password Reset",args:{maxWidth:"narrow",children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E",margin:"0 0 8px 0"},children:"Reset password"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:"0 0 24px 0"},children:"Enter your email and we'll send you a reset link"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("input",{placeholder:"Email address",style:{padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"14px"}}),e.jsx("button",{style:{padding:"12px 24px",backgroundColor:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",fontFamily:"Inter",fontWeight:"500",cursor:"pointer"},children:"Send reset link"})]})]})}},i={name:"With Footer",args:{children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E",margin:"0 0 24px 0"},children:"Sign in"}),e.jsx("button",{style:{width:"100%",padding:"12px",backgroundColor:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",fontFamily:"Inter",fontWeight:"500",cursor:"pointer"},children:"Continue"})]}),footer:e.jsxs("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",margin:0},children:["By continuing, you agree to our"," ",e.jsx("a",{href:"/terms",style:{color:"#5D1F2D"},children:"Terms"})," and"," ",e.jsx("a",{href:"/privacy",style:{color:"#5D1F2D"},children:"Privacy Policy"})]})}},t={name:"Without Monogram",args:{showMonogram:!1,children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E",margin:"0 0 8px 0"},children:"Verify your email"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:"0 0 24px 0"},children:"We sent a verification link to your email"}),e.jsx("button",{style:{padding:"12px 24px",backgroundColor:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",fontFamily:"Inter",fontWeight:"500",cursor:"pointer"},children:"Open email app"})]})}},a={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"}},args:{children:e.jsxs("div",{children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",color:"#1C1C1E",margin:"0 0 8px 0"},children:"Sign in"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:"0 0 24px 0"},children:"Welcome back"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("input",{placeholder:"Email",style:{padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"14px"}}),e.jsx("input",{type:"password",placeholder:"Password",style:{padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"14px"}}),e.jsx("button",{style:{padding:"12px 24px",backgroundColor:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",fontFamily:"Inter",fontWeight:"500",cursor:"pointer"},children:"Sign in"})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        color: '#1C1C1E',
        margin: '0 0 8px 0'
      }}>
          Welcome back
        </h2>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: '0 0 24px 0'
      }}>
          Sign in to your account to continue
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <input type="email" placeholder="Email address" style={{
          width: '100%',
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px'
        }} />
          <input type="password" placeholder="Password" style={{
          width: '100%',
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px'
        }} />
          <button style={{
          width: '100%',
          padding: '12px 24px',
          backgroundColor: '#5D1F2D',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '6px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
            Sign in
          </button>
        </div>
      </div>
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Signup Form',
  args: {
    maxWidth: 'wide',
    children: <div>
        <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        color: '#1C1C1E',
        margin: '0 0 8px 0'
      }}>
          Create your account
        </h2>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: '0 0 24px 0'
      }}>
          Start your solopreneur journey today
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        }}>
            <input placeholder="First name" style={{
            padding: '12px 16px',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            fontFamily: 'Inter',
            fontSize: '14px'
          }} />
            <input placeholder="Last name" style={{
            padding: '12px 16px',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            fontFamily: 'Inter',
            fontSize: '14px'
          }} />
          </div>
          <input placeholder="Email address" style={{
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontSize: '14px'
        }} />
          <input type="password" placeholder="Password" style={{
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontSize: '14px'
        }} />
          <button style={{
          padding: '12px 24px',
          backgroundColor: '#5D1F2D',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
            Create account
          </button>
        </div>
      </div>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Password Reset',
  args: {
    maxWidth: 'narrow',
    children: <div style={{
      textAlign: 'center'
    }}>
        <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        color: '#1C1C1E',
        margin: '0 0 8px 0'
      }}>
          Reset password
        </h2>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: '0 0 24px 0'
      }}>
          Enter your email and we'll send you a reset link
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <input placeholder="Email address" style={{
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontSize: '14px'
        }} />
          <button style={{
          padding: '12px 24px',
          backgroundColor: '#5D1F2D',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
            Send reset link
          </button>
        </div>
      </div>
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Footer',
  args: {
    children: <div style={{
      textAlign: 'center'
    }}>
        <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        color: '#1C1C1E',
        margin: '0 0 24px 0'
      }}>
          Sign in
        </h2>
        <button style={{
        width: '100%',
        padding: '12px',
        backgroundColor: '#5D1F2D',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        fontFamily: 'Inter',
        fontWeight: '500',
        cursor: 'pointer'
      }}>
          Continue
        </button>
      </div>,
    footer: <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      color: '#4A4A4A',
      margin: 0
    }}>
        By continuing, you agree to our{' '}
        <a href="/terms" style={{
        color: '#5D1F2D'
      }}>Terms</a> and{' '}
        <a href="/privacy" style={{
        color: '#5D1F2D'
      }}>Privacy Policy</a>
      </p>
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Without Monogram',
  args: {
    showMonogram: false,
    children: <div style={{
      textAlign: 'center'
    }}>
        <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        color: '#1C1C1E',
        margin: '0 0 8px 0'
      }}>
          Verify your email
        </h2>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: '0 0 24px 0'
      }}>
          We sent a verification link to your email
        </p>
        <button style={{
        padding: '12px 24px',
        backgroundColor: '#5D1F2D',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        fontFamily: 'Inter',
        fontWeight: '500',
        cursor: 'pointer'
      }}>
          Open email app
        </button>
      </div>
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    children: <div>
        <h2 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        color: '#1C1C1E',
        margin: '0 0 8px 0'
      }}>
          Sign in
        </h2>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: '0 0 24px 0'
      }}>
          Welcome back
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <input placeholder="Email" style={{
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontSize: '14px'
        }} />
          <input type="password" placeholder="Password" style={{
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontSize: '14px'
        }} />
          <button style={{
          padding: '12px 24px',
          backgroundColor: '#5D1F2D',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '6px',
          fontFamily: 'Inter',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
            Sign in
          </button>
        </div>
      </div>
  }
}`,...a.parameters?.docs?.source}}};const E=["Default","Signup","PasswordReset","WithFooter","NoMonogram","MobileView"];export{o as Default,a as MobileView,t as NoMonogram,n as PasswordReset,r as Signup,i as WithFooter,E as __namedExportsOrder,b as default};
