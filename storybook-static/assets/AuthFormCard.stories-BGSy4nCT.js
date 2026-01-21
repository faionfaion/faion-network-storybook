import{j as e}from"./iframe-B_omF_R9.js";/* empty css                     */import"./preload-helper-Ct5FWWRu.js";function u({title:d,subtitle:l,logo:c,children:x,footer:p,maxWidth:g="sm"}){return e.jsxs("div",{className:`fn-auth-card fn-auth-card--${g}`,children:[(c||d||l)&&e.jsxs("div",{className:"fn-auth-card__header",children:[c&&e.jsx("div",{className:"fn-auth-card__logo",children:c}),d&&e.jsx("h1",{className:"fn-auth-card__title",children:d}),l&&e.jsx("p",{className:"fn-auth-card__subtitle",children:l})]}),e.jsx("div",{className:"fn-auth-card__content",children:x}),p&&e.jsx("div",{className:"fn-auth-card__footer",children:p})]})}u.__docgenInfo={description:`AuthFormCard - Container for authentication forms

Styled wrapper for login, signup, and password reset forms.
Follows the "Digital Journal" theme.`,methods:[],displayName:"AuthFormCard",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"Card title"},subtitle:{required:!1,tsType:{name:"string"},description:"Subtitle or description"},logo:{required:!1,tsType:{name:"ReactNode"},description:"Logo element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Main content (form)"},footer:{required:!1,tsType:{name:"ReactNode"},description:"Footer content (alternate actions)"},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Max width variant",defaultValue:{value:"'sm'",computed:!1}}}};const f={title:"Auth/AuthFormCard",component:u,parameters:{layout:"centered",backgrounds:{default:"warm",values:[{name:"warm",value:"#FAF9F6"}]},docs:{description:{component:"Card wrapper for authentication forms. Provides consistent styling for login, signup, and password reset."}}},tags:["autodocs"]},m=()=>e.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:"#5D1F2D",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",margin:"0 auto"},children:"FN"}),a=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:500},children:"Email"}),e.jsx("input",{type:"email",placeholder:"you@example.com",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontSize:"16px",boxSizing:"border-box"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px",fontWeight:500},children:"Password"}),e.jsx("input",{type:"password",placeholder:"Your password",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",fontSize:"16px",boxSizing:"border-box"}})]}),e.jsx("button",{style:{width:"100%",padding:"14px 24px",backgroundColor:"#5D1F2D",color:"white",border:"none",borderRadius:"6px",fontSize:"16px",fontWeight:500,cursor:"pointer",marginTop:"8px"},children:"Sign In"})]}),r={args:{logo:e.jsx(m,{}),title:"Welcome Back",subtitle:"Sign in to your account to continue",children:e.jsx(a,{}),footer:e.jsxs(e.Fragment,{children:["Don't have an account? ",e.jsx("a",{href:"#signup",children:"Sign up"})]})}},o={args:{logo:e.jsx(m,{}),title:"Create Account",subtitle:"Start your solopreneur journey today",children:e.jsx(a,{}),footer:e.jsxs(e.Fragment,{children:["Already have an account? ",e.jsx("a",{href:"#login",children:"Sign in"})]})}},t={args:{title:"Reset Password",subtitle:"Enter your email to receive a reset link",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"14px"},children:"Email"}),e.jsx("input",{type:"email",placeholder:"you@example.com",style:{width:"100%",padding:"12px 16px",border:"1px solid #E5E5E0",borderRadius:"6px",boxSizing:"border-box"}})]}),e.jsx("button",{style:{width:"100%",padding:"14px 24px",backgroundColor:"#5D1F2D",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Send Reset Link"})]}),footer:e.jsxs(e.Fragment,{children:["Remember your password? ",e.jsx("a",{href:"#login",children:"Sign in"})]})}},n={args:{title:"Complete Your Profile",subtitle:"Tell us a bit about yourself",maxWidth:"md",children:e.jsx(a,{})}},i={args:{title:"Connect Your Accounts",maxWidth:"lg",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx("button",{style:{padding:"14px",border:"1px solid #E5E5E0",borderRadius:"6px",backgroundColor:"white",cursor:"pointer"},children:"Google"}),e.jsx("button",{style:{padding:"14px",border:"1px solid #E5E5E0",borderRadius:"6px",backgroundColor:"white",cursor:"pointer"},children:"GitHub"}),e.jsx("button",{style:{padding:"14px",border:"1px solid #E5E5E0",borderRadius:"6px",backgroundColor:"white",cursor:"pointer"},children:"LinkedIn"}),e.jsx("button",{style:{padding:"14px",border:"1px solid #E5E5E0",borderRadius:"6px",backgroundColor:"white",cursor:"pointer"},children:"Twitter"})]})}},s={args:{children:e.jsx(a,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <LogoPlaceholder />,
    title: 'Welcome Back',
    subtitle: 'Sign in to your account to continue',
    children: <FormPlaceholder />,
    footer: <>
        Don&apos;t have an account? <a href="#signup">Sign up</a>
      </>
  }
}`,...r.parameters?.docs?.source},description:{story:"Login form card",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <LogoPlaceholder />,
    title: 'Create Account',
    subtitle: 'Start your solopreneur journey today',
    children: <FormPlaceholder />,
    footer: <>
        Already have an account? <a href="#login">Sign in</a>
      </>
  }
}`,...o.parameters?.docs?.source},description:{story:"Signup form card",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Reset Password',
    subtitle: 'Enter your email to receive a reset link',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px'
        }}>
            Email
          </label>
          <input type="email" placeholder="you@example.com" style={{
          width: '100%',
          padding: '12px 16px',
          border: '1px solid #E5E5E0',
          borderRadius: '6px',
          boxSizing: 'border-box'
        }} />
        </div>
        <button style={{
        width: '100%',
        padding: '14px 24px',
        backgroundColor: '#5D1F2D',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
          Send Reset Link
        </button>
      </div>,
    footer: <>
        Remember your password? <a href="#login">Sign in</a>
      </>
  }
}`,...t.parameters?.docs?.source},description:{story:"Without logo",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Complete Your Profile',
    subtitle: 'Tell us a bit about yourself',
    maxWidth: 'md',
    children: <FormPlaceholder />
  }
}`,...n.parameters?.docs?.source},description:{story:"Medium width",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Connect Your Accounts',
    maxWidth: 'lg',
    children: <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }}>
        <button style={{
        padding: '14px',
        border: '1px solid #E5E5E0',
        borderRadius: '6px',
        backgroundColor: 'white',
        cursor: 'pointer'
      }}>
          Google
        </button>
        <button style={{
        padding: '14px',
        border: '1px solid #E5E5E0',
        borderRadius: '6px',
        backgroundColor: 'white',
        cursor: 'pointer'
      }}>
          GitHub
        </button>
        <button style={{
        padding: '14px',
        border: '1px solid #E5E5E0',
        borderRadius: '6px',
        backgroundColor: 'white',
        cursor: 'pointer'
      }}>
          LinkedIn
        </button>
        <button style={{
        padding: '14px',
        border: '1px solid #E5E5E0',
        borderRadius: '6px',
        backgroundColor: 'white',
        cursor: 'pointer'
      }}>
          Twitter
        </button>
      </div>
  }
}`,...i.parameters?.docs?.source},description:{story:"Large width",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <FormPlaceholder />
  }
}`,...s.parameters?.docs?.source},description:{story:"Minimal - content only",...s.parameters?.docs?.description}}};const j=["Login","Signup","WithoutLogo","MediumWidth","LargeWidth","Minimal"];export{i as LargeWidth,r as Login,n as MediumWidth,s as Minimal,o as Signup,t as WithoutLogo,j as __namedExportsOrder,f as default};
