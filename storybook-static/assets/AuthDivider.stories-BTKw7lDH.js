import{j as e}from"./iframe-B_omF_R9.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";function s({text:t="or"}){return e.jsxs("div",{className:"fn-auth-divider",children:[e.jsx("div",{className:"fn-auth-divider__line"}),e.jsx("span",{className:"fn-auth-divider__text",children:t}),e.jsx("div",{className:"fn-auth-divider__line"})]})}s.__docgenInfo={description:`AuthDivider - Separator for auth forms

"Or continue with" style divider between form sections.
Follows the "Digital Journal" theme.`,methods:[],displayName:"AuthDivider",props:{text:{required:!1,tsType:{name:"string"},description:"Divider text",defaultValue:{value:"'or'",computed:!1}}}};const c={title:"Auth/AuthDivider",component:s,parameters:{layout:"centered",docs:{description:{component:"Divider component for separating auth form sections, typically between email/password and social login."}}},tags:["autodocs"]},r={args:{text:"or"},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})]},o={args:{text:"or continue with"},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})]},i={render:()=>e.jsxs("div",{style:{width:"320px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("button",{style:{width:"100%",padding:"14px 24px",backgroundColor:"#5D1F2D",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Sign In with Email"}),e.jsx(s,{text:"or continue with"}),e.jsx("button",{style:{width:"100%",padding:"12px 24px",backgroundColor:"white",border:"1px solid #E5E5E0",borderRadius:"6px",cursor:"pointer"},children:"Continue with Google"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'or'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...r.parameters?.docs?.source},description:{story:"Default divider",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'or continue with'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}><Story /></div>]
}`,...o.parameters?.docs?.source},description:{story:"With longer text",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <button style={{
      width: '100%',
      padding: '14px 24px',
      backgroundColor: '#5D1F2D',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>
        Sign In with Email
      </button>
      <AuthDivider text="or continue with" />
      <button style={{
      width: '100%',
      padding: '12px 24px',
      backgroundColor: 'white',
      border: '1px solid #E5E5E0',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>
        Continue with Google
      </button>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"In context",...i.parameters?.docs?.description}}};const p=["Default","ContinueWith","InContext"];export{o as ContinueWith,r as Default,i as InContext,p as __namedExportsOrder,c as default};
