import{r as u,j as e}from"./iframe-B_omF_R9.js";import{C as a}from"./ConsentToggle-CzkSncsM.js";import"./preload-helper-Ct5FWWRu.js";function m({isOpen:t,onClose:s,onSave:i,initialPreferences:r,className:f=""}){const[n,p]=u.useState(r);if(!t)return null;const k=()=>{i(n),s()},x=()=>{i({essential:!0,functional:!0,analytics:!0,marketing:!0}),s()},h=()=>{i({essential:!0,functional:!1,analytics:!1,marketing:!1}),s()},y=["fn-cookie-modal",f].filter(Boolean).join(" ");return e.jsx("div",{className:"fn-cookie-modal__overlay",onClick:s,children:e.jsxs("div",{className:y,role:"dialog","aria-modal":"true","aria-labelledby":"cookie-modal-title",onClick:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"fn-cookie-modal__header",children:[e.jsx("h2",{id:"cookie-modal-title",className:"fn-cookie-modal__title",children:"Cookie Preferences"}),e.jsx("button",{type:"button",className:"fn-cookie-modal__close",onClick:s,"aria-label":"Close",children:e.jsx(b,{})})]}),e.jsxs("div",{className:"fn-cookie-modal__content",children:[e.jsx("p",{className:"fn-cookie-modal__description",children:"We use cookies to provide you with the best possible experience. You can customize your preferences below. Essential cookies cannot be disabled as they are required for the website to function properly."}),e.jsxs("div",{className:"fn-cookie-modal__toggles",children:[e.jsx(a,{label:"Essential Cookies",description:"Required for basic site functionality like page navigation and secure areas. Cannot be disabled.",checked:n.essential,onChange:()=>{},disabled:!0}),e.jsx(a,{label:"Functional Cookies",description:"Remember your preferences, language settings, and provide enhanced features.",checked:n.functional,onChange:o=>p({...n,functional:o})}),e.jsx(a,{label:"Analytics Cookies",description:"Help us understand how visitors interact with our website to improve user experience.",checked:n.analytics,onChange:o=>p({...n,analytics:o})}),e.jsx(a,{label:"Marketing Cookies",description:"Used to track visitors across websites to display relevant advertisements.",checked:n.marketing,onChange:o=>p({...n,marketing:o})})]})]}),e.jsxs("div",{className:"fn-cookie-modal__footer",children:[e.jsx("div",{className:"fn-cookie-modal__footer-left",children:e.jsx("button",{type:"button",className:"fn-cookie-modal__button fn-cookie-modal__button--text",onClick:h,children:"Reject All"})}),e.jsxs("div",{className:"fn-cookie-modal__footer-right",children:[e.jsx("button",{type:"button",className:"fn-cookie-modal__button fn-cookie-modal__button--secondary",onClick:x,children:"Accept All"}),e.jsx("button",{type:"button",className:"fn-cookie-modal__button fn-cookie-modal__button--primary",onClick:k,children:"Save Preferences"})]})]})]})})}function b(){return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}m.__docgenInfo={description:`CookiePreferencesModal - Modal for managing cookie preferences

Allows users to customize their cookie consent preferences by category.`,methods:[],displayName:"CookiePreferencesModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close handler"},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(preferences: CookiePreferences) => void",signature:{arguments:[{type:{name:"CookiePreferences"},name:"preferences"}],return:{name:"void"}}},description:"Save handler with preferences"},initialPreferences:{required:!0,tsType:{name:"CookiePreferences"},description:"Initial cookie preferences"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const j={title:"Legal/CookiePreferencesModal",component:m,parameters:{layout:"fullscreen",docs:{description:{component:"Modal for managing cookie consent preferences by category."}}},tags:["autodocs"]},g={essential:!0,functional:!1,analytics:!1,marketing:!1},l={args:{isOpen:!0,onClose:()=>console.log("Closed"),onSave:t=>console.log("Saved preferences:",t),initialPreferences:g}},c={args:{isOpen:!0,onClose:()=>console.log("Closed"),onSave:t=>console.log("Saved preferences:",t),initialPreferences:{essential:!0,functional:!0,analytics:!0,marketing:!0}}},d={render:function(){const[s,i]=u.useState(!1),[r,f]=u.useState(g);return e.jsxs("div",{style:{padding:"40px",background:"#FAF9F6",minHeight:"400px"},children:[e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",color:"#1C1C1E",marginBottom:"16px"},children:"Cookie Settings Demo"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",color:"#4A4A4A",marginBottom:"24px"},children:"Click the button below to open the cookie preferences modal."}),e.jsx("button",{onClick:()=>i(!0),style:{fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:500,padding:"10px 20px",background:"#5D1F2D",color:"#FFFFFF",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Manage Cookie Preferences"}),e.jsxs("div",{style:{marginTop:"32px",padding:"16px",background:"#FFFFFF",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",fontWeight:600,color:"#1C1C1E",marginBottom:"12px"},children:"Current Preferences:"}),e.jsxs("ul",{style:{fontFamily:"Inter, sans-serif",fontSize:"13px",color:"#4A4A4A",margin:0,paddingLeft:"20px"},children:[e.jsxs("li",{children:["Essential: ",r.essential?"Enabled":"Disabled"]}),e.jsxs("li",{children:["Functional: ",r.functional?"Enabled":"Disabled"]}),e.jsxs("li",{children:["Analytics: ",r.analytics?"Enabled":"Disabled"]}),e.jsxs("li",{children:["Marketing: ",r.marketing?"Enabled":"Disabled"]})]})]})]}),e.jsx(m,{isOpen:s,onClose:()=>i(!1),onSave:n=>{f(n),console.log("Saved:",n)},initialPreferences:r})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Closed'),
    onSave: prefs => console.log('Saved preferences:', prefs),
    initialPreferences: defaultPreferences
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => console.log('Closed'),
    onSave: prefs => console.log('Saved preferences:', prefs),
    initialPreferences: {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [savedPrefs, setSavedPrefs] = useState<CookiePreferences>(defaultPreferences);
    return <div style={{
      padding: '40px',
      background: '#FAF9F6',
      minHeight: '400px'
    }}>
        <div style={{
        maxWidth: '600px'
      }}>
          <h2 style={{
          fontFamily: 'Georgia, serif',
          color: '#1C1C1E',
          marginBottom: '16px'
        }}>
            Cookie Settings Demo
          </h2>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          color: '#4A4A4A',
          marginBottom: '24px'
        }}>
            Click the button below to open the cookie preferences modal.
          </p>
          <button onClick={() => setIsOpen(true)} style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          padding: '10px 20px',
          background: '#5D1F2D',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
            Manage Cookie Preferences
          </button>

          <div style={{
          marginTop: '32px',
          padding: '16px',
          background: '#FFFFFF',
          borderRadius: '8px'
        }}>
            <h3 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#1C1C1E',
            marginBottom: '12px'
          }}>
              Current Preferences:
            </h3>
            <ul style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#4A4A4A',
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>Essential: {savedPrefs.essential ? 'Enabled' : 'Disabled'}</li>
              <li>Functional: {savedPrefs.functional ? 'Enabled' : 'Disabled'}</li>
              <li>Analytics: {savedPrefs.analytics ? 'Enabled' : 'Disabled'}</li>
              <li>Marketing: {savedPrefs.marketing ? 'Enabled' : 'Disabled'}</li>
            </ul>
          </div>
        </div>

        <CookiePreferencesModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSave={prefs => {
        setSavedPrefs(prefs);
        console.log('Saved:', prefs);
      }} initialPreferences={savedPrefs} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const P=["Default","AllEnabled","Interactive"];export{c as AllEnabled,l as Default,d as Interactive,P as __namedExportsOrder,j as default};
