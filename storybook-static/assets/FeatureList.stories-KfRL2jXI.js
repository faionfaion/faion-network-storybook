import{j as e}from"./iframe-B_omF_R9.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";const S=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),I=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),_=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}),M=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),T=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),z=t=>typeof t=="string"?{text:t,status:"included"}:{status:"included",...t},B=(t,a,g)=>{if(a==="number")return e.jsx("span",{className:"fn-feature-list__number",children:g+1});if(a==="bullet")return e.jsx("span",{className:"fn-feature-list__bullet"});switch(t){case"included":return e.jsx(S,{});case"excluded":return e.jsx(I,{});case"limited":return e.jsx(_,{});case"coming":return e.jsx(M,{});default:return e.jsx(S,{})}};function n({features:t,variant:a="default",iconStyle:g="check",maxVisible:o,expandable:C=!1,columns:b=1,className:w=""}){const v=t.map(z),P=o?v.slice(0,o):v,F=o?v.length-o:0,k=["fn-feature-list",`fn-feature-list--${a}`,`fn-feature-list--cols-${b}`,w].filter(Boolean).join(" ");return e.jsxs("ul",{className:k,children:[P.map((s,j)=>{const A=`fn-feature-list__item--${s.status}`;return e.jsxs("li",{className:`fn-feature-list__item ${A}`,children:[e.jsx("span",{className:`fn-feature-list__icon fn-feature-list__icon--${s.status}`,children:B(s.status||"included",g,j)}),e.jsxs("span",{className:"fn-feature-list__text",children:[s.text,s.limitText&&e.jsx("span",{className:"fn-feature-list__limit",children:s.limitText})]}),s.tooltip&&e.jsx("span",{className:"fn-feature-list__tooltip-trigger",title:s.tooltip,children:e.jsx(T,{})})]},j)}),F>0&&e.jsx("li",{className:"fn-feature-list__more",children:C?e.jsxs("button",{type:"button",className:"fn-feature-list__expand",children:["+ ",F," more features"]}):e.jsxs("span",{children:["+ ",F," more features"]})})]})}n.__docgenInfo={description:`FeatureList - Displays a list of features with check/x icons

Used in pricing cards to show included and excluded features.`,methods:[],displayName:"FeatureList",props:{features:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | FeatureItem)[]"},description:"List of features"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'detailed'"}]},description:"List variant",defaultValue:{value:"'default'",computed:!1}},iconStyle:{required:!1,tsType:{name:"union",raw:"'check' | 'bullet' | 'number'",elements:[{name:"literal",value:"'check'"},{name:"literal",value:"'bullet'"},{name:"literal",value:"'number'"}]},description:"Icon style",defaultValue:{value:"'check'",computed:!1}},maxVisible:{required:!1,tsType:{name:"number"},description:'Max items to show before "and X more"'},expandable:{required:!1,tsType:{name:"boolean"},description:"Show expand button when truncated",defaultValue:{value:"false",computed:!1}},columns:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:"Column layout",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const L={title:"Pricing/FeatureList",component:n,parameters:{layout:"centered",docs:{description:{component:"Displays a list of features with check/x icons. Used in pricing cards to show included and excluded features."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","detailed"],description:"List variant"},iconStyle:{control:"select",options:["check","bullet","number"],description:"Icon style"},columns:{control:"select",options:[1,2],description:"Column layout"}}},r=["Full methodology access","All 15 AI skills","502+ methodologies","MCP server access","Real-time updates"],D=[{text:"Full methodology access",status:"included"},{text:"All 15 AI skills",status:"included"},{text:"1 MCP connection",status:"included",limitText:"up to 1"},{text:"Priority support",status:"excluded"},{text:"Commercial license",status:"excluded"}],W=[{text:"Complete methodology library",status:"included",tooltip:"Access to all 502+ methodologies across 15 skills"},{text:"AI agents and skills",status:"included",tooltip:"Full access to 1 agent and 15 role-based skills"},{text:"MCP server connections",status:"limited",limitText:"5 seats",tooltip:"For team plans"},{text:"SSO authentication",status:"coming",tooltip:"Coming Q2 2026"},{text:"White-label support",status:"excluded"}],i={args:{features:r},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})]},l={args:{features:D},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})]},c={args:{features:W,variant:"detailed"},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})]},d={args:{features:r,variant:"compact"},decorators:[t=>e.jsx("div",{style:{width:"280px"},children:e.jsx(t,{})})]},u={args:{features:r,variant:"detailed"},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})]},p={args:{features:r,iconStyle:"bullet"},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})]},m={args:{features:r,iconStyle:"number"},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})]},x={args:{features:["Full methodology access","All 15 AI skills","502+ methodologies","MCP server access","Real-time updates","Email support","Priority queue","API access"],columns:2},decorators:[t=>e.jsx("div",{style:{width:"600px"},children:e.jsx(t,{})})]},f={args:{features:["Full methodology access","All 15 AI skills","502+ methodologies","MCP server access","Real-time updates","Email support","Priority queue","API access"],maxVisible:5,expandable:!0},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})]},y={render:()=>e.jsxs("div",{style:{width:"340px",background:"#FFFFFF",border:"2px solid #5D1F2D",borderRadius:"12px",padding:"24px"},children:[e.jsx("div",{style:{display:"inline-block",padding:"4px 12px",background:"#5D1F2D",color:"white",borderRadius:"4px",fontSize:"12px",fontWeight:600,marginBottom:"16px",fontFamily:"Inter, sans-serif"},children:"MOST POPULAR"}),e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"24px",fontWeight:700,color:"#1C1C1E",margin:"0 0 4px"},children:"Plus"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:"0 0 16px"},children:"For solopreneurs"}),e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"4px",marginBottom:"24px"},children:[e.jsx("span",{style:{fontFamily:"Georgia, serif",fontSize:"40px",fontWeight:700,color:"#1C1C1E"},children:"$19"}),e.jsx("span",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:"/month"})]}),e.jsx(n,{features:["Full methodology access","All 15 AI skills","502+ methodologies","1 MCP connection","Personal use only"]}),e.jsx("button",{style:{width:"100%",marginTop:"24px",padding:"12px",background:"#5D1F2D",color:"white",border:"none",borderRadius:"8px",fontFamily:"Inter, sans-serif",fontSize:"15px",fontWeight:600,cursor:"pointer"},children:"Get Started"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsxs("div",{style:{width:"280px"},children:[e.jsx("h4",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"16px",color:"#1C1C1E"},children:"Free"}),e.jsx(n,{features:[{text:"Limited methodology preview",status:"included"},{text:"Non-commercial use only",status:"included"},{text:"1 MCP connection",status:"included",limitText:"basic"},{text:"Full guide access",status:"excluded"},{text:"Commercial license",status:"excluded"}],variant:"compact"})]}),e.jsxs("div",{style:{width:"280px"},children:[e.jsx("h4",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"16px",color:"#1C1C1E"},children:"Plus"}),e.jsx(n,{features:[{text:"Full methodology access",status:"included"},{text:"Personal use",status:"included"},{text:"1 MCP connection",status:"included"},{text:"Ultimate Guide included",status:"included"},{text:"Commercial license",status:"excluded"}],variant:"compact"})]}),e.jsxs("div",{style:{width:"280px"},children:[e.jsx("h4",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"16px",color:"#1C1C1E"},children:"Pro"}),e.jsx(n,{features:[{text:"Full methodology access",status:"included"},{text:"Commercial use",status:"included"},{text:"1 MCP connection",status:"included"},{text:"Ultimate Guide included",status:"included"},{text:"SSO authentication",status:"included"}],variant:"compact"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    features: basicFeatures
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    features: mixedFeatures
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    features: detailedFeatures,
    variant: 'detailed'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    features: basicFeatures,
    variant: 'compact'
  },
  decorators: [Story => <div style={{
    width: '280px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    features: basicFeatures,
    variant: 'detailed'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    features: basicFeatures,
    iconStyle: 'bullet'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    features: basicFeatures,
    iconStyle: 'number'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    features: ['Full methodology access', 'All 15 AI skills', '502+ methodologies', 'MCP server access', 'Real-time updates', 'Email support', 'Priority queue', 'API access'],
    columns: 2
  },
  decorators: [Story => <div style={{
    width: '600px'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    features: ['Full methodology access', 'All 15 AI skills', '502+ methodologies', 'MCP server access', 'Real-time updates', 'Email support', 'Priority queue', 'API access'],
    maxVisible: 5,
    expandable: true
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '340px',
    background: '#FFFFFF',
    border: '2px solid #5D1F2D',
    borderRadius: '12px',
    padding: '24px'
  }}>
      <div style={{
      display: 'inline-block',
      padding: '4px 12px',
      background: '#5D1F2D',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 600,
      marginBottom: '16px',
      fontFamily: 'Inter, sans-serif'
    }}>
        MOST POPULAR
      </div>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      fontWeight: 700,
      color: '#1C1C1E',
      margin: '0 0 4px'
    }}>
        Plus
      </h3>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      margin: '0 0 16px'
    }}>
        For solopreneurs
      </p>
      <div style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px',
      marginBottom: '24px'
    }}>
        <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: '40px',
        fontWeight: 700,
        color: '#1C1C1E'
      }}>$19</span>
        <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>/month</span>
      </div>
      <FeatureList features={['Full methodology access', 'All 15 AI skills', '502+ methodologies', '1 MCP connection', 'Personal use only']} />
      <button style={{
      width: '100%',
      marginTop: '24px',
      padding: '12px',
      background: '#5D1F2D',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      fontWeight: 600,
      cursor: 'pointer'
    }}>
        Get Started
      </button>
    </div>
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <div style={{
      width: '280px'
    }}>
        <h4 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        marginBottom: '16px',
        color: '#1C1C1E'
      }}>Free</h4>
        <FeatureList features={[{
        text: 'Limited methodology preview',
        status: 'included'
      }, {
        text: 'Non-commercial use only',
        status: 'included'
      }, {
        text: '1 MCP connection',
        status: 'included',
        limitText: 'basic'
      }, {
        text: 'Full guide access',
        status: 'excluded'
      }, {
        text: 'Commercial license',
        status: 'excluded'
      }]} variant="compact" />
      </div>
      <div style={{
      width: '280px'
    }}>
        <h4 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        marginBottom: '16px',
        color: '#1C1C1E'
      }}>Plus</h4>
        <FeatureList features={[{
        text: 'Full methodology access',
        status: 'included'
      }, {
        text: 'Personal use',
        status: 'included'
      }, {
        text: '1 MCP connection',
        status: 'included'
      }, {
        text: 'Ultimate Guide included',
        status: 'included'
      }, {
        text: 'Commercial license',
        status: 'excluded'
      }]} variant="compact" />
      </div>
      <div style={{
      width: '280px'
    }}>
        <h4 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '18px',
        marginBottom: '16px',
        color: '#1C1C1E'
      }}>Pro</h4>
        <FeatureList features={[{
        text: 'Full methodology access',
        status: 'included'
      }, {
        text: 'Commercial use',
        status: 'included'
      }, {
        text: '1 MCP connection',
        status: 'included'
      }, {
        text: 'Ultimate Guide included',
        status: 'included'
      }, {
        text: 'SSO authentication',
        status: 'included'
      }]} variant="compact" />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};const R=["Default","MixedStatuses","WithTooltips","Compact","Detailed","BulletStyle","NumberedStyle","TwoColumns","WithMaxVisible","InPricingCard","PlanComparison"];export{p as BulletStyle,d as Compact,i as Default,u as Detailed,y as InPricingCard,l as MixedStatuses,m as NumberedStyle,h as PlanComparison,x as TwoColumns,f as WithMaxVisible,c as WithTooltips,R as __namedExportsOrder,L as default};
