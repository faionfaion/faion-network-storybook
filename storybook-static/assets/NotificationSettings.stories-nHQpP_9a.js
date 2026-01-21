import{j as e,r as u}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function d({preferences:n,onChange:c,className:l=""}){const s=["fn-notification-settings",l].filter(Boolean).join(" "),m=t=>{c({...n,[t]:!n[t]})},p=[{key:"email_updates",label:"Product Updates",description:"New features, improvements, and platform updates."},{key:"email_marketing",label:"Marketing & Promotions",description:"Special offers, discounts, and promotional content."},{key:"email_product",label:"New Content",description:"New methodologies, articles, and learning resources."},{key:"email_security",label:"Security Alerts",description:"Account security notifications and login alerts.",disabled:!0,hint:"Required for account security"}];return e.jsxs("div",{className:s,children:[e.jsxs("div",{className:"fn-notification-settings__header",children:[e.jsx("h3",{className:"fn-notification-settings__title",children:"Email Notifications"}),e.jsx("p",{className:"fn-notification-settings__description",children:"Choose which emails you'd like to receive from us."})]}),e.jsx("div",{className:"fn-notification-settings__list",children:p.map(t=>e.jsxs("div",{className:"fn-notification-settings__item",children:[e.jsxs("div",{className:"fn-notification-settings__item-content",children:[e.jsx("span",{className:"fn-notification-settings__item-label",children:t.label}),e.jsx("span",{className:"fn-notification-settings__item-description",children:t.description}),t.hint&&e.jsx("span",{className:"fn-notification-settings__item-hint",children:t.hint})]}),e.jsxs("label",{className:"fn-notification-settings__toggle",children:[e.jsx("input",{type:"checkbox",checked:n[t.key],onChange:()=>m(t.key),disabled:t.disabled}),e.jsx("span",{className:"fn-notification-settings__toggle-track",children:e.jsx("span",{className:"fn-notification-settings__toggle-thumb"})})]})]},t.key))})]})}d.__docgenInfo={description:`NotificationSettings - Email notification preferences

Allows users to manage their email notification preferences.`,methods:[],displayName:"NotificationSettings",props:{preferences:{required:!0,tsType:{name:"NotificationPreferences"},description:"Current notification preferences"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(preferences: NotificationPreferences) => void",signature:{arguments:[{type:{name:"NotificationPreferences"},name:"preferences"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const _={title:"UserDashboard/NotificationSettings",component:d,parameters:{layout:"padded",docs:{description:{component:"Settings panel for managing email notification preferences."}}},tags:["autodocs"]},a={args:{preferences:{email_updates:!0,email_marketing:!1,email_product:!0,email_security:!0},onChange:n=>console.log("Changed:",n)},decorators:[n=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(n,{})})]},i={args:{preferences:{email_updates:!0,email_marketing:!0,email_product:!0,email_security:!0},onChange:n=>console.log("Changed:",n)},decorators:[n=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(n,{})})]},r={args:{preferences:{email_updates:!1,email_marketing:!1,email_product:!1,email_security:!0},onChange:n=>console.log("Changed:",n)},decorators:[n=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(n,{})})]},o={render:function(){const[c,l]=u.useState({email_updates:!0,email_marketing:!1,email_product:!0,email_security:!0});return e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(d,{preferences:c,onChange:s=>{l(s),console.log("Updated preferences:",s)}})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    preferences: {
      email_updates: true,
      email_marketing: false,
      email_product: true,
      email_security: true
    },
    onChange: prefs => console.log('Changed:', prefs)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    preferences: {
      email_updates: true,
      email_marketing: true,
      email_product: true,
      email_security: true
    },
    onChange: prefs => console.log('Changed:', prefs)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    preferences: {
      email_updates: false,
      email_marketing: false,
      email_product: false,
      email_security: true
    },
    onChange: prefs => console.log('Changed:', prefs)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [preferences, setPreferences] = useState<NotificationPreferences>({
      email_updates: true,
      email_marketing: false,
      email_product: true,
      email_security: true
    });
    return <div style={{
      maxWidth: '500px'
    }}>
        <NotificationSettings preferences={preferences} onChange={newPrefs => {
        setPreferences(newPrefs);
        console.log('Updated preferences:', newPrefs);
      }} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","AllEnabled","MinimalEnabled","Interactive"];export{i as AllEnabled,a as Default,o as Interactive,r as MinimalEnabled,h as __namedExportsOrder,_ as default};
