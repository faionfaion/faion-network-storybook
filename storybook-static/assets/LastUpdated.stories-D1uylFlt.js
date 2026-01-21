import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function s({date:t,format:r="long",className:m=""}){const a=new Date(t),o=f(a,r),p=["fn-last-updated",m].filter(Boolean).join(" ");return e.jsxs("div",{className:p,children:[e.jsx("span",{className:"fn-last-updated__label",children:"Last updated:"}),e.jsx("time",{className:"fn-last-updated__date",dateTime:a.toISOString(),children:o})]})}function f(t,r){if(isNaN(t.getTime()))return"Invalid date";switch(r){case"long":return t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});case"short":return t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});case"relative":return u(t);default:return t.toLocaleDateString("en-US")}}function u(t){const m=new Date().getTime()-t.getTime(),a=Math.floor(m/(1e3*60*60*24));if(a===0)return"Today";if(a===1)return"Yesterday";if(a<7)return`${a} days ago`;if(a<30){const o=Math.floor(a/7);return o===1?"1 week ago":`${o} weeks ago`}else if(a<365){const o=Math.floor(a/30);return o===1?"1 month ago":`${o} months ago`}else{const o=Math.floor(a/365);return o===1?"1 year ago":`${o} years ago`}}s.__docgenInfo={description:`LastUpdated - Displays last updated date for legal documents

Shows when a policy or legal document was last modified.`,methods:[],displayName:"LastUpdated",props:{date:{required:!0,tsType:{name:"string"},description:"Date string (ISO format or any parseable format)"},format:{required:!1,tsType:{name:"union",raw:"'long' | 'short' | 'relative'",elements:[{name:"literal",value:"'long'"},{name:"literal",value:"'short'"},{name:"literal",value:"'relative'"}]},description:"Display format: 'long', 'short', or 'relative'",defaultValue:{value:"'long'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const h={title:"Legal/LastUpdated",component:s,parameters:{layout:"padded",docs:{description:{component:"Displays when a legal document was last updated."}}},tags:["autodocs"]},n={args:{date:"2025-01-15",format:"long"}},i={args:{date:"2025-01-15",format:"short"}},l={args:{date:new Date(Date.now()-10080*60*1e3).toISOString(),format:"relative"}},d={render:()=>{const t="2025-01-15",r=new Date(Date.now()-2592e5).toISOString();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#6B6B6B",marginBottom:"4px"},children:"Long format:"}),e.jsx(s,{date:t,format:"long"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#6B6B6B",marginBottom:"4px"},children:"Short format:"}),e.jsx(s,{date:t,format:"short"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#6B6B6B",marginBottom:"4px"},children:"Relative format (3 days ago):"}),e.jsx(s,{date:r,format:"relative"})]})]})}},c={render:()=>e.jsxs("div",{style:{maxWidth:"700px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"32px"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",color:"#1C1C1E",margin:0},children:"Privacy Policy"}),e.jsx(s,{date:"2025-01-15",format:"long"})]}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"15px",lineHeight:1.7,color:"#4A4A4A"},children:"This Privacy Policy describes how Faion Network collects, uses, and shares your personal information when you use our services. By using our services, you agree to the collection and use of information in accordance with this policy."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    date: '2025-01-15',
    format: 'long'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    date: '2025-01-15',
    format: 'short'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    // 7 days ago
    format: 'relative'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const date = '2025-01-15';
    const recentDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#6B6B6B',
          marginBottom: '4px'
        }}>
            Long format:
          </p>
          <LastUpdated date={date} format="long" />
        </div>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#6B6B6B',
          marginBottom: '4px'
        }}>
            Short format:
          </p>
          <LastUpdated date={date} format="short" />
        </div>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#6B6B6B',
          marginBottom: '4px'
        }}>
            Relative format (3 days ago):
          </p>
          <LastUpdated date={recentDate} format="relative" />
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '700px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '32px'
    }}>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#1C1C1E',
        margin: 0
      }}>
          Privacy Policy
        </h1>
        <LastUpdated date="2025-01-15" format="long" />
      </div>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      lineHeight: 1.7,
      color: '#4A4A4A'
    }}>
        This Privacy Policy describes how Faion Network collects, uses, and shares your personal information
        when you use our services. By using our services, you agree to the collection and use of information
        in accordance with this policy.
      </p>
    </div>
}`,...c.parameters?.docs?.source}}};const x=["LongFormat","ShortFormat","RelativeFormat","AllFormats","InContext"];export{d as AllFormats,c as InContext,n as LongFormat,l as RelativeFormat,i as ShortFormat,x as __namedExportsOrder,h as default};
