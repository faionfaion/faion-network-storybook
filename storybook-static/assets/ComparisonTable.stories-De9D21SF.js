import{j as e}from"./iframe-B_omF_R9.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";const g=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16.667 5L7.5 14.167 3.333 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),y=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15 5L5 15M5 5l10 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function l({headers:a,rows:p,className:d=""}){const m=["fn-comparison-table",d].filter(Boolean).join(" "),f=r=>typeof r=="boolean"?r?e.jsx("span",{className:"fn-comparison-table__check",children:e.jsx(g,{})}):e.jsx("span",{className:"fn-comparison-table__x",children:e.jsx(y,{})}):e.jsx("span",{className:"fn-comparison-table__text",children:r});return e.jsx("div",{className:m,children:e.jsxs("table",{className:"fn-comparison-table__table",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fn-comparison-table__header-row",children:[e.jsx("th",{className:"fn-comparison-table__header fn-comparison-table__header--feature",children:"Feature"}),a.map((r,i)=>e.jsx("th",{className:"fn-comparison-table__header",children:r},i))]})}),e.jsx("tbody",{children:p.map((r,i)=>e.jsxs("tr",{className:"fn-comparison-table__row",children:[e.jsx("td",{className:"fn-comparison-table__cell fn-comparison-table__cell--feature",children:r.feature}),r.values.map((h,x)=>e.jsx("td",{className:"fn-comparison-table__cell",children:f(h)},x))]},i))})]})})}l.__docgenInfo={description:`ComparisonTable - Feature comparison table for MDX

Displays a comparison table with boolean (check/x) or text values.
Useful for plan comparisons, feature matrices, and pros/cons tables.`,methods:[],displayName:"ComparisonTable",props:{headers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Column headers"},rows:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  feature: string;
  values: (string | boolean)[];
}`,signature:{properties:[{key:"feature",value:{name:"string",required:!0}},{key:"values",value:{name:"Array",elements:[{name:"unknown"}],raw:"(string | boolean)[]",required:!0}}]}}],raw:`Array<{
  feature: string;
  values: (string | boolean)[];
}>`},description:"Table rows with feature name and values"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const A={title:"MDX/ComparisonTable",component:l,parameters:{layout:"padded",docs:{description:{component:"Feature comparison table for plans, products, or feature matrices."}}},tags:["autodocs"]},u=["Free","Plus","Pro","Team"],c=[{feature:"Methodology Access",values:["30%","Full","Full","Full"]},{feature:"MCP Connections",values:["1","1","1","5+"]},{feature:"Commercial Use",values:[!1,!0,!0,!0]},{feature:"SSO Authentication",values:[!1,!1,!0,!0]},{feature:"Team Management",values:[!1,!1,!1,!0]},{feature:"Priority Support",values:[!1,!1,!0,!0]}],w=["React","Vue","Angular","Svelte"],v=[{feature:"Learning Curve",values:["Medium","Easy","Steep","Easy"]},{feature:"TypeScript Support",values:[!0,!0,!0,!0]},{feature:"Virtual DOM",values:[!0,!0,!1,!1]},{feature:"Built-in Routing",values:[!1,!1,!0,!0]},{feature:"State Management",values:["External","External","Built-in","Built-in"]},{feature:"Community Size",values:["Large","Large","Medium","Growing"]}],s={args:{headers:u,rows:c},decorators:[a=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(a,{})})]},t={args:{headers:w,rows:v},decorators:[a=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(a,{})})]},n={args:{headers:["Option A","Option B"],rows:[{feature:"Price",values:["$99","$199"]},{feature:"Storage",values:["10 GB","100 GB"]},{feature:"Support",values:[!0,!0]},{feature:"Custom Domain",values:[!1,!0]},{feature:"Analytics",values:[!1,!0]}]},decorators:[a=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(a,{})})]},o={render:()=>e.jsxs("article",{style:{maxWidth:"800px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",marginBottom:"16px",color:"#1C1C1E"},children:"Choosing the Right Plan"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"Compare our subscription tiers to find the plan that best fits your needs. All plans include access to the core methodology library."}),e.jsx(l,{headers:u,rows:c}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginTop:"24px"},children:"Not sure which plan is right for you? Start with Free to explore the basics, then upgrade as your needs grow."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    headers: pricingHeaders,
    rows: pricingRows
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    headers: frameworkHeaders,
    rows: frameworkRows
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    headers: ['Option A', 'Option B'],
    rows: [{
      feature: 'Price',
      values: ['$99', '$199']
    }, {
      feature: 'Storage',
      values: ['10 GB', '100 GB']
    }, {
      feature: 'Support',
      values: [true, true]
    }, {
      feature: 'Custom Domain',
      values: [false, true]
    }, {
      feature: 'Analytics',
      values: [false, true]
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '800px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Choosing the Right Plan
      </h2>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Compare our subscription tiers to find the plan that best fits your needs.
        All plans include access to the core methodology library.
      </p>

      <ComparisonTable headers={pricingHeaders} rows={pricingRows} />

      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginTop: '24px'
    }}>
        Not sure which plan is right for you? Start with Free to explore the basics,
        then upgrade as your needs grow.
      </p>
    </article>
}`,...o.parameters?.docs?.source}}};const C=["Default","FrameworkComparison","SimpleComparison","InArticle"];export{s as Default,t as FrameworkComparison,o as InArticle,n as SimpleComparison,C as __namedExportsOrder,A as default};
