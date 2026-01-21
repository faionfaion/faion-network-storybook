import{r as n,j as e}from"./iframe-B_omF_R9.js";import{u as W}from"./index-CphaJNQg.js";import{c as ce,P as G,u as ae,a as O}from"./index-CAE3x1vS.js";import{u as te,a as ie,c as ne}from"./utils-C_iEjBI8.js";import{P as re}from"./index-DQmmJmiN.js";import{C as le}from"./check-CPLtyeu1.js";/* empty css                 */import"./preload-helper-Ct5FWWRu.js";import"./index-C1lO9W1D.js";import"./index-BF5zjZAA.js";import"./createLucideIcon-RZ8yy1X5.js";var z="Checkbox",[oe]=ce(z),[de,T]=oe(z);function he(s){const{__scopeCheckbox:c,checked:i,children:r,defaultChecked:a,disabled:t,form:d,name:x,onCheckedChange:h,required:b,value:u="on",internal_do_not_use_render:f}=s,[p,w]=ae({prop:i,defaultProp:a??!1,onChange:h,caller:z}),[v,N]=n.useState(null),[_,l]=n.useState(null),o=n.useRef(!1),B=v?!!d||!!v.closest("form"):!0,$={checked:p,disabled:t,setChecked:w,control:v,setControl:N,name:x,form:d,value:u,hasConsumerStoppedPropagationRef:o,required:b,defaultChecked:k(a)?!1:a,isFormControl:B,bubbleInput:_,setBubbleInput:l};return e.jsx(de,{scope:c,...$,children:fe(f)?f($):r})}var H="CheckboxTrigger",K=n.forwardRef(({__scopeCheckbox:s,onKeyDown:c,onClick:i,...r},a)=>{const{control:t,value:d,disabled:x,checked:h,required:b,setControl:u,setChecked:f,hasConsumerStoppedPropagationRef:p,isFormControl:w,bubbleInput:v}=T(H,s),N=W(a,u),_=n.useRef(h);return n.useEffect(()=>{const l=t?.form;if(l){const o=()=>f(_.current);return l.addEventListener("reset",o),()=>l.removeEventListener("reset",o)}},[t,f]),e.jsx(G.button,{type:"button",role:"checkbox","aria-checked":k(h)?"mixed":h,"aria-required":b,"data-state":Y(h),"data-disabled":x?"":void 0,disabled:x,value:d,...r,ref:N,onKeyDown:O(c,l=>{l.key==="Enter"&&l.preventDefault()}),onClick:O(i,l=>{f(o=>k(o)?!0:!o),v&&w&&(p.current=l.isPropagationStopped(),p.current||l.stopPropagation())})})});K.displayName=H;var q=n.forwardRef((s,c)=>{const{__scopeCheckbox:i,name:r,checked:a,defaultChecked:t,required:d,disabled:x,value:h,onCheckedChange:b,form:u,...f}=s;return e.jsx(he,{__scopeCheckbox:i,checked:a,defaultChecked:t,disabled:x,required:d,onCheckedChange:b,name:r,form:u,value:h,internal_do_not_use_render:({isFormControl:p})=>e.jsxs(e.Fragment,{children:[e.jsx(K,{...f,ref:c,__scopeCheckbox:i}),p&&e.jsx(V,{__scopeCheckbox:i})]})})});q.displayName=z;var X="CheckboxIndicator",J=n.forwardRef((s,c)=>{const{__scopeCheckbox:i,forceMount:r,...a}=s,t=T(X,i);return e.jsx(re,{present:r||k(t.checked)||t.checked===!0,children:e.jsx(G.span,{"data-state":Y(t.checked),"data-disabled":t.disabled?"":void 0,...a,ref:c,style:{pointerEvents:"none",...s.style}})})});J.displayName=X;var Q="CheckboxBubbleInput",V=n.forwardRef(({__scopeCheckbox:s,...c},i)=>{const{control:r,hasConsumerStoppedPropagationRef:a,checked:t,defaultChecked:d,required:x,disabled:h,name:b,value:u,form:f,bubbleInput:p,setBubbleInput:w}=T(Q,s),v=W(i,w),N=te(t),_=ie(r);n.useEffect(()=>{const o=p;if(!o)return;const B=window.HTMLInputElement.prototype,U=Object.getOwnPropertyDescriptor(B,"checked").set,ee=!a.current;if(N!==t&&U){const se=new Event("click",{bubbles:ee});o.indeterminate=k(t),U.call(o,k(t)?!1:t),o.dispatchEvent(se)}},[p,N,t,a]);const l=n.useRef(k(t)?!1:t);return e.jsx(G.input,{type:"checkbox","aria-hidden":!0,defaultChecked:d??l.current,required:x,disabled:h,name:b,value:u,form:f,...c,tabIndex:-1,ref:v,style:{...c.style,..._,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});V.displayName=Q;function fe(s){return typeof s=="function"}function k(s){return s==="indeterminate"}function Y(s){return k(s)?"indeterminate":s?"checked":"unchecked"}function Z({className:s,...c}){return e.jsx(q,{"data-slot":"checkbox",className:ne("peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",s),...c,children:e.jsx(J,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:e.jsx(le,{className:"size-3.5"})})})}Z.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const ye={title:"FAION/Core UI/Checkbox & Switch",component:Z,parameters:{layout:"centered",docs:{description:{component:`
Checkbox and Switch components following the Faion "Digital Journal" aesthetic.

## Features
- Taupe Grey border (unchecked)
- Deep Burgundy fill (checked)
- Burgundy focus ring for accessibility
- Size variants (small, default, large)
- With label and description patterns
- Disabled states

## Components
- **Checkbox**: For multiple selections
- **Switch**: For on/off toggles
        `}}},tags:["autodocs"]},m=()=>e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),g={render:()=>{const[s,c]=n.useState(!1);return e.jsx("div",{className:`fn-checkbox ${s?"fn-checkbox--checked":""}`,onClick:()=>c(!s),role:"checkbox","aria-checked":s,tabIndex:0,children:s&&e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})})}},y={render:()=>e.jsx("div",{className:"fn-checkbox fn-checkbox--checked",role:"checkbox","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})})},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx("div",{className:"fn-checkbox",role:"checkbox","aria-checked":"false","aria-disabled":"true",style:{opacity:.5,cursor:"not-allowed"}}),e.jsx("div",{className:"fn-checkbox fn-checkbox--checked",role:"checkbox","aria-checked":"true","aria-disabled":"true",style:{opacity:.5,cursor:"not-allowed"},children:e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})})]})},C={render:()=>{const[s,c]=n.useState(!1);return e.jsxs("label",{className:"fn-checkbox-field",onClick:()=>c(!s),children:[e.jsx("div",{className:`fn-checkbox ${s?"fn-checkbox--checked":""}`,role:"checkbox","aria-checked":s,tabIndex:0,children:s&&e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})}),e.jsx("span",{className:"fn-checkbox-field__label",children:"Accept terms and conditions"})]})}},S={render:()=>{const[s,c]=n.useState(!0);return e.jsx("div",{style:{width:"300px"},children:e.jsxs("label",{className:"fn-checkbox-field",onClick:()=>c(!s),children:[e.jsx("div",{className:`fn-checkbox ${s?"fn-checkbox--checked":""}`,role:"checkbox","aria-checked":s,tabIndex:0,children:s&&e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})}),e.jsxs("div",{className:"fn-checkbox-field__content",children:[e.jsx("span",{className:"fn-checkbox-field__label",children:"Email notifications"}),e.jsx("span",{className:"fn-checkbox-field__description",children:"Receive email updates about new features and content."})]})]})})}},I={render:()=>{const[s,c]=n.useState(["email"]),i=a=>{c(t=>t.includes(a)?t.filter(d=>d!==a):[...t,a])},r=[{id:"email",label:"Email notifications"},{id:"sms",label:"SMS notifications"},{id:"push",label:"Push notifications"}];return e.jsxs("div",{className:"fn-checkbox-group",style:{width:"250px"},children:[e.jsx("div",{className:"fn-checkbox-group__label",children:"Notification Preferences"}),r.map(a=>e.jsxs("label",{className:"fn-checkbox-field",onClick:()=>i(a.id),children:[e.jsx("div",{className:`fn-checkbox ${s.includes(a.id)?"fn-checkbox--checked":""}`,role:"checkbox","aria-checked":s.includes(a.id),tabIndex:0,children:s.includes(a.id)&&e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})}),e.jsx("span",{className:"fn-checkbox-field__label",children:a.label})]},a.id))]})}},E={render:()=>{const[s,c]=n.useState(!1);return e.jsx("div",{className:`fn-switch ${s?"fn-switch--checked":""}`,onClick:()=>c(!s),role:"switch","aria-checked":s,tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})}},A={render:()=>e.jsx("div",{className:"fn-switch fn-switch--checked",role:"switch","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})},D={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx("div",{className:"fn-switch",role:"switch","aria-checked":"false","aria-disabled":"true",style:{opacity:.5,cursor:"not-allowed"},children:e.jsx("span",{className:"fn-switch__thumb"})}),e.jsx("div",{className:"fn-switch fn-switch--checked",role:"switch","aria-checked":"true","aria-disabled":"true",style:{opacity:.5,cursor:"not-allowed"},children:e.jsx("span",{className:"fn-switch__thumb"})})]})},F={render:()=>{const[s,c]=n.useState(!0);return e.jsx("div",{style:{width:"300px"},children:e.jsxs("label",{className:"fn-switch-field",onClick:()=>c(!s),children:[e.jsxs("div",{className:"fn-switch-field__content",children:[e.jsx("span",{className:"fn-switch-field__label",children:"Dark mode"}),e.jsx("span",{className:"fn-switch-field__description",children:"Switch between light and dark themes."})]}),e.jsx("div",{className:`fn-switch ${s?"fn-switch--checked":""}`,role:"switch","aria-checked":s,tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})]})})}},L={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"SMALL"}),e.jsx("div",{className:"fn-checkbox fn-checkbox--small fn-checkbox--checked",role:"checkbox","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DEFAULT"}),e.jsx("div",{className:"fn-checkbox fn-checkbox--checked",role:"checkbox","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"LARGE"}),e.jsx("div",{className:"fn-checkbox fn-checkbox--large fn-checkbox--checked",role:"checkbox","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})})]})]}),decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(s,{})]})]},R={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"SMALL"}),e.jsx("div",{className:"fn-switch fn-switch--small fn-switch--checked",role:"switch","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DEFAULT"}),e.jsx("div",{className:"fn-switch fn-switch--checked",role:"switch","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"LARGE"}),e.jsx("div",{className:"fn-switch fn-switch--large fn-switch--checked",role:"switch","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})]})]}),decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(s,{})]})]},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"16px",color:"#1C1C1E"},children:"Checkbox States"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"UNCHECKED"}),e.jsx("div",{className:"fn-checkbox",role:"checkbox","aria-checked":"false",tabIndex:0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"CHECKED"}),e.jsx("div",{className:"fn-checkbox fn-checkbox--checked",role:"checkbox","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-checkbox__indicator",children:e.jsx(m,{})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DISABLED"}),e.jsx("div",{className:"fn-checkbox",role:"checkbox","aria-disabled":"true",style:{opacity:.5,cursor:"not-allowed"}})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"16px",color:"#1C1C1E"},children:"Switch States"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"OFF"}),e.jsx("div",{className:"fn-switch",role:"switch","aria-checked":"false",tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"ON"}),e.jsx("div",{className:"fn-switch fn-switch--checked",role:"switch","aria-checked":"true",tabIndex:0,children:e.jsx("span",{className:"fn-switch__thumb"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DISABLED"}),e.jsx("div",{className:"fn-switch",role:"switch","aria-disabled":"true",style:{opacity:.5,cursor:"not-allowed"},children:e.jsx("span",{className:"fn-switch__thumb"})})]})]})]})]}),decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(s,{})]})]},M={name:"Settings Panel Example",render:()=>{const[s,c]=n.useState({emailNotif:!0,smsNotif:!1,darkMode:!1,autoSave:!0}),i=r=>{c(a=>({...a,[r]:!a[r]}))};return e.jsxs("div",{style:{width:"400px",padding:"24px",backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #E5E5E0"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"20px",color:"#1C1C1E",marginBottom:"24px"},children:"Settings"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("label",{className:"fn-switch-field",onClick:()=>i("emailNotif"),children:[e.jsxs("div",{className:"fn-switch-field__content",children:[e.jsx("span",{className:"fn-switch-field__label",children:"Email notifications"}),e.jsx("span",{className:"fn-switch-field__description",children:"Receive updates about new content"})]}),e.jsx("div",{className:`fn-switch ${s.emailNotif?"fn-switch--checked":""}`,role:"switch","aria-checked":s.emailNotif,children:e.jsx("span",{className:"fn-switch__thumb"})})]}),e.jsxs("label",{className:"fn-switch-field",onClick:()=>i("smsNotif"),children:[e.jsxs("div",{className:"fn-switch-field__content",children:[e.jsx("span",{className:"fn-switch-field__label",children:"SMS notifications"}),e.jsx("span",{className:"fn-switch-field__description",children:"Get important alerts via text"})]}),e.jsx("div",{className:`fn-switch ${s.smsNotif?"fn-switch--checked":""}`,role:"switch","aria-checked":s.smsNotif,children:e.jsx("span",{className:"fn-switch__thumb"})})]}),e.jsx("div",{style:{borderTop:"1px solid #E5E5E0",paddingTop:"20px"},children:e.jsxs("label",{className:"fn-switch-field",onClick:()=>i("darkMode"),children:[e.jsxs("div",{className:"fn-switch-field__content",children:[e.jsx("span",{className:"fn-switch-field__label",children:"Dark mode"}),e.jsx("span",{className:"fn-switch-field__description",children:"Use dark theme throughout the app"})]}),e.jsx("div",{className:`fn-switch ${s.darkMode?"fn-switch--checked":""}`,role:"switch","aria-checked":s.darkMode,children:e.jsx("span",{className:"fn-switch__thumb"})})]})}),e.jsxs("label",{className:"fn-switch-field",onClick:()=>i("autoSave"),children:[e.jsxs("div",{className:"fn-switch-field__content",children:[e.jsx("span",{className:"fn-switch-field__label",children:"Auto-save"}),e.jsx("span",{className:"fn-switch-field__description",children:"Automatically save your progress"})]}),e.jsx("div",{className:`fn-switch ${s.autoSave?"fn-switch--checked":""}`,role:"switch","aria-checked":s.autoSave,children:e.jsx("span",{className:"fn-switch__thumb"})})]})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className={\`fn-checkbox \${checked ? 'fn-checkbox--checked' : ''}\`} onClick={() => setChecked(!checked)} role="checkbox" aria-checked={checked} tabIndex={0}>
        {checked && <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>}
      </div>;
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
      <span className="fn-checkbox__indicator">
        <CheckIcon />
      </span>
    </div>
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <div className="fn-checkbox" role="checkbox" aria-checked="false" aria-disabled="true" style={{
      opacity: 0.5,
      cursor: 'not-allowed'
    }}>
      </div>
      <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" aria-disabled="true" style={{
      opacity: 0.5,
      cursor: 'not-allowed'
    }}>
        <span className="fn-checkbox__indicator">
          <CheckIcon />
        </span>
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <label className="fn-checkbox-field" onClick={() => setChecked(!checked)}>
        <div className={\`fn-checkbox \${checked ? 'fn-checkbox--checked' : ''}\`} role="checkbox" aria-checked={checked} tabIndex={0}>
          {checked && <span className="fn-checkbox__indicator">
              <CheckIcon />
            </span>}
        </div>
        <span className="fn-checkbox-field__label">Accept terms and conditions</span>
      </label>;
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <div style={{
      width: '300px'
    }}>
        <label className="fn-checkbox-field" onClick={() => setChecked(!checked)}>
          <div className={\`fn-checkbox \${checked ? 'fn-checkbox--checked' : ''}\`} role="checkbox" aria-checked={checked} tabIndex={0}>
            {checked && <span className="fn-checkbox__indicator">
                <CheckIcon />
              </span>}
          </div>
          <div className="fn-checkbox-field__content">
            <span className="fn-checkbox-field__label">Email notifications</span>
            <span className="fn-checkbox-field__description">Receive email updates about new features and content.</span>
          </div>
        </label>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);
    const toggle = (id: string) => {
      setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };
    const items = [{
      id: 'email',
      label: 'Email notifications'
    }, {
      id: 'sms',
      label: 'SMS notifications'
    }, {
      id: 'push',
      label: 'Push notifications'
    }];
    return <div className="fn-checkbox-group" style={{
      width: '250px'
    }}>
        <div className="fn-checkbox-group__label">Notification Preferences</div>
        {items.map(item => <label key={item.id} className="fn-checkbox-field" onClick={() => toggle(item.id)}>
            <div className={\`fn-checkbox \${selected.includes(item.id) ? 'fn-checkbox--checked' : ''}\`} role="checkbox" aria-checked={selected.includes(item.id)} tabIndex={0}>
              {selected.includes(item.id) && <span className="fn-checkbox__indicator">
                  <CheckIcon />
                </span>}
            </div>
            <span className="fn-checkbox-field__label">{item.label}</span>
          </label>)}
      </div>;
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className={\`fn-switch \${checked ? 'fn-switch--checked' : ''}\`} onClick={() => setChecked(!checked)} role="switch" aria-checked={checked} tabIndex={0}>
        <span className="fn-switch__thumb" />
      </div>;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
      <span className="fn-switch__thumb" />
    </div>
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <div className="fn-switch" role="switch" aria-checked="false" aria-disabled="true" style={{
      opacity: 0.5,
      cursor: 'not-allowed'
    }}>
        <span className="fn-switch__thumb" />
      </div>
      <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" aria-disabled="true" style={{
      opacity: 0.5,
      cursor: 'not-allowed'
    }}>
        <span className="fn-switch__thumb" />
      </div>
    </div>
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <div style={{
      width: '300px'
    }}>
        <label className="fn-switch-field" onClick={() => setChecked(!checked)}>
          <div className="fn-switch-field__content">
            <span className="fn-switch-field__label">Dark mode</span>
            <span className="fn-switch-field__description">Switch between light and dark themes.</span>
          </div>
          <div className={\`fn-switch \${checked ? 'fn-switch--checked' : ''}\`} role="switch" aria-checked={checked} tabIndex={0}>
            <span className="fn-switch__thumb" />
          </div>
        </label>
      </div>;
  }
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  }}>
      <div>
        <p className="fn-story-label">SMALL</p>
        <div className="fn-checkbox fn-checkbox--small fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
          <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>
        </div>
      </div>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
          <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>
        </div>
      </div>
      <div>
        <p className="fn-story-label">LARGE</p>
        <div className="fn-checkbox fn-checkbox--large fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
          <span className="fn-checkbox__indicator">
            <CheckIcon />
          </span>
        </div>
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        \`}</style>
        <Story />
      </>]
}`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  }}>
      <div>
        <p className="fn-story-label">SMALL</p>
        <div className="fn-switch fn-switch--small fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
          <span className="fn-switch__thumb" />
        </div>
      </div>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
          <span className="fn-switch__thumb" />
        </div>
      </div>
      <div>
        <p className="fn-story-label">LARGE</p>
        <div className="fn-switch fn-switch--large fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
          <span className="fn-switch__thumb" />
        </div>
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        \`}</style>
        <Story />
      </>]
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        marginBottom: '16px',
        color: '#1C1C1E'
      }}>Checkbox States</h3>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
          <div>
            <p className="fn-story-label">UNCHECKED</p>
            <div className="fn-checkbox" role="checkbox" aria-checked="false" tabIndex={0} />
          </div>
          <div>
            <p className="fn-story-label">CHECKED</p>
            <div className="fn-checkbox fn-checkbox--checked" role="checkbox" aria-checked="true" tabIndex={0}>
              <span className="fn-checkbox__indicator">
                <CheckIcon />
              </span>
            </div>
          </div>
          <div>
            <p className="fn-story-label">DISABLED</p>
            <div className="fn-checkbox" role="checkbox" aria-disabled="true" style={{
            opacity: 0.5,
            cursor: 'not-allowed'
          }} />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        marginBottom: '16px',
        color: '#1C1C1E'
      }}>Switch States</h3>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
          <div>
            <p className="fn-story-label">OFF</p>
            <div className="fn-switch" role="switch" aria-checked="false" tabIndex={0}>
              <span className="fn-switch__thumb" />
            </div>
          </div>
          <div>
            <p className="fn-story-label">ON</p>
            <div className="fn-switch fn-switch--checked" role="switch" aria-checked="true" tabIndex={0}>
              <span className="fn-switch__thumb" />
            </div>
          </div>
          <div>
            <p className="fn-story-label">DISABLED</p>
            <div className="fn-switch" role="switch" aria-disabled="true" style={{
            opacity: 0.5,
            cursor: 'not-allowed'
          }}>
              <span className="fn-switch__thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        \`}</style>
        <Story />
      </>]
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Settings Panel Example',
  render: () => {
    const [settings, setSettings] = useState({
      emailNotif: true,
      smsNotif: false,
      darkMode: false,
      autoSave: true
    });
    const toggleSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    return <div style={{
      width: '400px',
      padding: '24px',
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      border: '1px solid #E5E5E0'
    }}>
        <h3 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '20px',
        color: '#1C1C1E',
        marginBottom: '24px'
      }}>Settings</h3>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
          <label className="fn-switch-field" onClick={() => toggleSetting('emailNotif')}>
            <div className="fn-switch-field__content">
              <span className="fn-switch-field__label">Email notifications</span>
              <span className="fn-switch-field__description">Receive updates about new content</span>
            </div>
            <div className={\`fn-switch \${settings.emailNotif ? 'fn-switch--checked' : ''}\`} role="switch" aria-checked={settings.emailNotif}>
              <span className="fn-switch__thumb" />
            </div>
          </label>

          <label className="fn-switch-field" onClick={() => toggleSetting('smsNotif')}>
            <div className="fn-switch-field__content">
              <span className="fn-switch-field__label">SMS notifications</span>
              <span className="fn-switch-field__description">Get important alerts via text</span>
            </div>
            <div className={\`fn-switch \${settings.smsNotif ? 'fn-switch--checked' : ''}\`} role="switch" aria-checked={settings.smsNotif}>
              <span className="fn-switch__thumb" />
            </div>
          </label>

          <div style={{
          borderTop: '1px solid #E5E5E0',
          paddingTop: '20px'
        }}>
            <label className="fn-switch-field" onClick={() => toggleSetting('darkMode')}>
              <div className="fn-switch-field__content">
                <span className="fn-switch-field__label">Dark mode</span>
                <span className="fn-switch-field__description">Use dark theme throughout the app</span>
              </div>
              <div className={\`fn-switch \${settings.darkMode ? 'fn-switch--checked' : ''}\`} role="switch" aria-checked={settings.darkMode}>
                <span className="fn-switch__thumb" />
              </div>
            </label>
          </div>

          <label className="fn-switch-field" onClick={() => toggleSetting('autoSave')}>
            <div className="fn-switch-field__content">
              <span className="fn-switch-field__label">Auto-save</span>
              <span className="fn-switch-field__description">Automatically save your progress</span>
            </div>
            <div className={\`fn-switch \${settings.autoSave ? 'fn-switch--checked' : ''}\`} role="switch" aria-checked={settings.autoSave}>
              <span className="fn-switch__thumb" />
            </div>
          </label>
        </div>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};const je=["CheckboxDefault","CheckboxChecked","CheckboxDisabled","CheckboxWithLabel","CheckboxWithDescription","CheckboxGroup","SwitchDefault","SwitchChecked","SwitchDisabled","SwitchWithLabel","CheckboxSizes","SwitchSizes","AllStates","SettingsExample"];export{P as AllStates,y as CheckboxChecked,g as CheckboxDefault,j as CheckboxDisabled,I as CheckboxGroup,L as CheckboxSizes,S as CheckboxWithDescription,C as CheckboxWithLabel,M as SettingsExample,A as SwitchChecked,E as SwitchDefault,D as SwitchDisabled,R as SwitchSizes,F as SwitchWithLabel,je as __namedExportsOrder,ye as default};
