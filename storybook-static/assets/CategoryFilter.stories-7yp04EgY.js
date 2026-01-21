import{r as i,j as e}from"./iframe-B_omF_R9.js";/* empty css                       */import"./preload-helper-Ct5FWWRu.js";function c({categories:t,selected:r="",onChange:n,multiSelect:v=!1,showAll:F=!0,allLabel:_="All",showCounts:j=!1,compact:M=!1,className:T=""}){const S=i.useRef(null),[b,I]=i.useState({left:!1,right:!1}),l=Array.isArray(r)?r:r?[r]:[],z=l.length===0,d=()=>{if(S.current){const{scrollLeft:s,scrollWidth:a,clientWidth:w}=S.current;I({left:s>0,right:s<a-w-1})}};i.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[]);const k=s=>{if(v){const a=l.includes(s)?l.filter(w=>w!==s):[...l,s];n?.(a)}else n?.(s===(Array.isArray(r)?"":r)?"":s)},N=()=>{n?.(v?[]:"")},R=["fn-category-filter",M&&"fn-category-filter--compact",b.left&&"fn-category-filter--scrollable-left",b.right&&"fn-category-filter--scrollable-right",T].filter(Boolean).join(" "),W=t.reduce((s,a)=>s+(a.count||0),0);return e.jsx("div",{className:R,children:e.jsxs("div",{ref:S,className:"fn-category-filter__scroll",onScroll:d,children:[F&&e.jsxs("button",{type:"button",className:`fn-category-filter__item ${z?"fn-category-filter__item--active":""}`,onClick:N,children:[_,j&&W>0&&e.jsx("span",{className:"fn-category-filter__count",children:W})]}),t.map(s=>{const a=l.includes(s.id);return e.jsxs("button",{type:"button",className:`fn-category-filter__item ${a?"fn-category-filter__item--active":""}`,onClick:()=>k(s.id),children:[s.name,j&&s.count!==void 0&&e.jsx("span",{className:"fn-category-filter__count",children:s.count})]},s.id)})]})})}c.__docgenInfo={description:`CategoryFilter - Horizontal filter pills

Horizontal scrollable list of category pills for filtering content.`,methods:[],displayName:"CategoryFilter",props:{categories:{required:!0,tsType:{name:"Array",elements:[{name:"CategoryOption"}],raw:"CategoryOption[]"},description:"Available categories"},selected:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently selected category ID(s)",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"selected"}],return:{name:"void"}}},description:"Selection change handler"},multiSelect:{required:!1,tsType:{name:"boolean"},description:"Allow multiple selection",defaultValue:{value:"false",computed:!1}},showAll:{required:!1,tsType:{name:"boolean"},description:'Show "All" option',defaultValue:{value:"true",computed:!1}},allLabel:{required:!1,tsType:{name:"string"},description:'"All" option label',defaultValue:{value:"'All'",computed:!1}},showCounts:{required:!1,tsType:{name:"boolean"},description:"Show counts",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"Compact variant",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const O={title:"Content/CategoryFilter",component:c,parameters:{layout:"padded",docs:{description:{component:"Horizontal scrollable category filter pills for filtering content."}}},tags:["autodocs"],argTypes:{multiSelect:{control:"boolean",description:"Allow multiple selection"},showAll:{control:"boolean",description:'Show "All" option'},showCounts:{control:"boolean",description:"Show item counts"},compact:{control:"boolean",description:"Compact variant"}}},o=[{id:"sdd",name:"SDD",count:17},{id:"development",name:"Development",count:106},{id:"devops",name:"DevOps",count:26},{id:"ai",name:"AI/ML",count:42},{id:"product",name:"Product",count:33},{id:"marketing",name:"Marketing",count:86},{id:"research",name:"Research",count:32},{id:"ux",name:"UX/UI",count:75}],u={args:{categories:o,selected:"",showAll:!0,showCounts:!1},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},m={args:{categories:o,selected:"",showAll:!0,showCounts:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},p={args:{categories:o,selected:"development",showAll:!0,showCounts:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},g={args:{categories:o,selected:["sdd","development"],multiSelect:!0,showAll:!0,showCounts:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},h={args:{categories:o,selected:"ai",showAll:!0,showCounts:!0,compact:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},f={args:{categories:o,selected:"sdd",showAll:!1,showCounts:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},q=()=>{const[t,r]=i.useState("");return e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx(c,{categories:o,selected:t,onChange:n=>r(n),showAll:!0,showCounts:!0}),e.jsxs("p",{style:{marginTop:"16px",fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:["Selected: ",t||"All"]})]})},y={render:()=>e.jsx(q,{})},B=()=>{const[t,r]=i.useState([]);return e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx(c,{categories:o,selected:t,onChange:n=>r(n),multiSelect:!0,showAll:!0,showCounts:!0}),e.jsxs("p",{style:{marginTop:"16px",fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:["Selected: ",t.length>0?t.join(", "):"All"]})]})},x={render:()=>e.jsx(B,{})},A={render:()=>e.jsxs("div",{style:{maxWidth:"1000px"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",marginBottom:"8px",color:"#1C1C1E"},children:"All Methodologies"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"24px"},children:"Browse 502 methodologies across 15 skills."}),e.jsx(c,{categories:o,selected:"",showAll:!0,showCounts:!0}),e.jsx("div",{style:{marginTop:"24px",padding:"48px",background:"#FAF9F6",borderRadius:"8px",textAlign:"center",fontFamily:"Inter, sans-serif",color:"#4A4A4A"},children:"Methodology cards would appear here"})]})},C={args:{categories:[...o,{id:"pm",name:"Project Management",count:46},{id:"ba",name:"Business Analysis",count:24},{id:"hr",name:"HR/Recruiting",count:5},{id:"comm",name:"Communication",count:10}],selected:"",showAll:!0,showCounts:!0},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    selected: '',
    showAll: true,
    showCounts: false
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    selected: '',
    showAll: true,
    showCounts: true
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    selected: 'development',
    showAll: true,
    showCounts: true
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    selected: ['sdd', 'development'],
    multiSelect: true,
    showAll: true,
    showCounts: true
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    selected: 'ai',
    showAll: true,
    showCounts: true,
    compact: true
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    selected: 'sdd',
    showAll: false,
    showCounts: true
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledCategoryFilter />
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <MultiSelectControlled />
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '1000px'
  }}>
      <h1 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '32px',
      marginBottom: '8px',
      color: '#1C1C1E'
    }}>
        All Methodologies
      </h1>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Browse 502 methodologies across 15 skills.
      </p>
      <CategoryFilter categories={sampleCategories} selected="" showAll={true} showCounts={true} />
      <div style={{
      marginTop: '24px',
      padding: '48px',
      background: '#FAF9F6',
      borderRadius: '8px',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      color: '#4A4A4A'
    }}>
        Methodology cards would appear here
      </div>
    </div>
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    categories: [...sampleCategories, {
      id: 'pm',
      name: 'Project Management',
      count: 46
    }, {
      id: 'ba',
      name: 'Business Analysis',
      count: 24
    }, {
      id: 'hr',
      name: 'HR/Recruiting',
      count: 5
    }, {
      id: 'comm',
      name: 'Communication',
      count: 10
    }],
    selected: '',
    showAll: true,
    showCounts: true
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...C.parameters?.docs?.source}}};const H=["Default","WithCounts","SingleSelected","MultiSelect","Compact","NoAllOption","Controlled","ControlledMultiSelect","InContentPage","ManyCategories"];export{h as Compact,y as Controlled,x as ControlledMultiSelect,u as Default,A as InContentPage,C as ManyCategories,g as MultiSelect,f as NoAllOption,p as SingleSelected,m as WithCounts,H as __namedExportsOrder,O as default};
