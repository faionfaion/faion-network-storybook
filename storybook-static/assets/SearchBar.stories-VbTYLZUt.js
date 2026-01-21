import{r as i,j as e}from"./iframe-B_omF_R9.js";/* empty css                  */import"./preload-helper-Ct5FWWRu.js";const z=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),G=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function t({value:r,placeholder:C="Search...",onChange:p,onSubmit:h,isLoading:o=!1,size:F="default",showShortcut:l=!0,shortcut:c="K",expandable:a=!1,autoFocus:D=!1,className:_="",id:T,name:L}){const[N,B]=i.useState(""),[I,u]=i.useState(!a),d=i.useRef(null),k=r!==void 0?r:N,m=k.length>0,V=s=>{const n=s.target.value;r===void 0&&B(n),p?.(n)},E=()=>{r===void 0&&B(""),p?.(""),d.current?.focus()},q=s=>{s.key==="Enter"&&h?.(k),s.key==="Escape"&&(a&&m?E():a&&(u(!1),d.current?.blur()))},W=()=>{u(!0),setTimeout(()=>d.current?.focus(),100)},K=()=>{a&&!m&&u(!1)};i.useEffect(()=>{if(!l)return;const s=n=>{(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()===c.toLowerCase()&&(n.preventDefault(),a&&u(!0),d.current?.focus())};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[l,c,a]);const R=["fn-search-bar",`fn-search-bar--${F}`,o&&"fn-search-bar--loading",a&&"fn-search-bar--expandable",I&&"fn-search-bar--expanded",_].filter(Boolean).join(" ");return e.jsx("div",{className:R,children:e.jsxs("div",{className:"fn-search-bar__wrapper",children:[a&&!I&&e.jsx("button",{type:"button",className:"fn-search-bar__expand-btn",onClick:W,"aria-label":"Open search",children:e.jsx(z,{})}),o?e.jsx("span",{className:"fn-search-bar__spinner"}):e.jsx("span",{className:"fn-search-bar__icon",children:e.jsx(z,{})}),e.jsx("input",{ref:d,type:"search",id:T,name:L,className:"fn-search-bar__input",value:k,placeholder:C,onChange:V,onKeyDown:q,onBlur:K,autoFocus:D,autoComplete:"off","aria-label":"Search"}),l&&!m&&!o&&e.jsxs("span",{className:"fn-search-bar__hint",children:[e.jsx("kbd",{children:navigator.platform.includes("Mac")?"Cmd":"Ctrl"}),e.jsx("span",{children:"+"}),e.jsx("kbd",{children:c})]}),m&&!o&&e.jsx("button",{type:"button",className:"fn-search-bar__clear",onClick:E,"aria-label":"Clear search",children:e.jsx(G,{})})]})})}t.__docgenInfo={description:`SearchBar - Search input component

Search input with icon, clear button, and keyboard shortcut hint.`,methods:[],displayName:"SearchBar",props:{value:{required:!1,tsType:{name:"string"},description:"Current search value"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Search...'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Submit handler (on Enter)"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether search is loading",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},showShortcut:{required:!1,tsType:{name:"boolean"},description:"Show keyboard shortcut hint",defaultValue:{value:"true",computed:!1}},shortcut:{required:!1,tsType:{name:"string"},description:"Keyboard shortcut",defaultValue:{value:"'K'",computed:!1}},expandable:{required:!1,tsType:{name:"boolean"},description:"Expandable mode (click to expand)",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus on mount",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Input ID for accessibility"},name:{required:!1,tsType:{name:"string"},description:"Input name"}}};const $={title:"Content/SearchBar",component:t,parameters:{layout:"centered",docs:{description:{component:"Search input component with icon, clear button, and keyboard shortcut hint."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["default","compact"],description:"Size variant"},isLoading:{control:"boolean",description:"Loading state"},showShortcut:{control:"boolean",description:"Show keyboard shortcut"},expandable:{control:"boolean",description:"Expandable mode"}}},f={args:{placeholder:"Search methodologies...",showShortcut:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},x={args:{value:"SDD workflow",placeholder:"Search...",showShortcut:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},y={args:{value:"searching...",placeholder:"Search...",isLoading:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},S={args:{placeholder:"Search...",size:"compact",showShortcut:!1},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},g={args:{placeholder:"Search articles...",showShortcut:!1},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},v={args:{placeholder:"Search...",expandable:!0,showShortcut:!1}},P=()=>{const[r,C]=i.useState(""),[p,h]=i.useState(!1),[o,F]=i.useState(""),l=a=>{C(a),h(!0),setTimeout(()=>h(!1),500)},c=a=>{F(a)};return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(t,{value:r,onChange:l,onSubmit:c,isLoading:p,placeholder:"Search methodologies..."}),o&&e.jsxs("p",{style:{marginTop:"16px",fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:['Submitted: "',o,'"']})]})},j={render:()=>e.jsx(P,{})},w={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",background:"#FFFFFF",borderRadius:"8px",border:"1px solid #E5E5E0",width:"800px"},children:[e.jsx("div",{style:{fontFamily:"Georgia, serif",fontSize:"20px",fontWeight:700,color:"#1C1C1E"},children:"Faion Network"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsxs("nav",{style:{display:"flex",gap:"24px",fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:[e.jsx("a",{href:"#",style:{textDecoration:"none",color:"inherit"},children:"Methodologies"}),e.jsx("a",{href:"#",style:{textDecoration:"none",color:"inherit"},children:"Pricing"}),e.jsx("a",{href:"#",style:{textDecoration:"none",color:"inherit"},children:"Docs"})]}),e.jsx(t,{placeholder:"Search...",size:"compact",expandable:!0,showShortcut:!1})]})]})},b={render:()=>e.jsxs("div",{style:{maxWidth:"720px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",marginBottom:"8px",color:"#1C1C1E"},children:"Search Methodologies"}),e.jsx("p",{style:{color:"#4A4A4A",marginBottom:"24px"},children:"Find the methodology you need across 502 methodologies and 15 skills."}),e.jsx(t,{placeholder:"Search by name, skill, or keyword...",autoFocus:!0})]})},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Default with shortcut"}),e.jsx(t,{placeholder:"Search...",showShortcut:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"With value"}),e.jsx(t,{placeholder:"Search...",value:"RAG pipelines",showShortcut:!1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Loading"}),e.jsx(t,{placeholder:"Search...",value:"loading...",isLoading:!0,showShortcut:!1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Compact"}),e.jsx(t,{placeholder:"Search...",size:"compact",showShortcut:!1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Expandable (click icon)"}),e.jsx(t,{placeholder:"Search...",expandable:!0,showShortcut:!1})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search methodologies...',
    showShortcut: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'SDD workflow',
    placeholder: 'Search...',
    showShortcut: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'searching...',
    placeholder: 'Search...',
    isLoading: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    size: 'compact',
    showShortcut: false
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search articles...',
    showShortcut: false
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    expandable: true,
    showShortcut: false
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSearchBar />
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    background: '#FFFFFF',
    borderRadius: '8px',
    border: '1px solid #E5E5E0',
    width: '800px'
  }}>
      <div style={{
      fontFamily: 'Georgia, serif',
      fontSize: '20px',
      fontWeight: 700,
      color: '#1C1C1E'
    }}>
        Faion Network
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    }}>
        <nav style={{
        display: 'flex',
        gap: '24px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>
          <a href="#" style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>Methodologies</a>
          <a href="#" style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>Pricing</a>
          <a href="#" style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>Docs</a>
        </nav>
        <SearchBar placeholder="Search..." size="compact" expandable showShortcut={false} />
      </div>
    </div>
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h1 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '32px',
      marginBottom: '8px',
      color: '#1C1C1E'
    }}>
        Search Methodologies
      </h1>
      <p style={{
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Find the methodology you need across 502 methodologies and 15 skills.
      </p>
      <SearchBar placeholder="Search by name, skill, or keyword..." autoFocus />
    </div>
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
          Default with shortcut
        </p>
        <SearchBar placeholder="Search..." showShortcut />
      </div>
      <div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
          With value
        </p>
        <SearchBar placeholder="Search..." value="RAG pipelines" showShortcut={false} />
      </div>
      <div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
          Loading
        </p>
        <SearchBar placeholder="Search..." value="loading..." isLoading showShortcut={false} />
      </div>
      <div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
          Compact
        </p>
        <SearchBar placeholder="Search..." size="compact" showShortcut={false} />
      </div>
      <div>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#4A4A4A',
        marginBottom: '8px'
      }}>
          Expandable (click icon)
        </p>
        <SearchBar placeholder="Search..." expandable showShortcut={false} />
      </div>
    </div>
}`,...A.parameters?.docs?.source}}};const J=["Default","WithValue","Loading","Compact","NoShortcut","Expandable","Controlled","InHeader","InSearchPage","AllVariants"];export{A as AllVariants,S as Compact,j as Controlled,f as Default,v as Expandable,w as InHeader,b as InSearchPage,y as Loading,g as NoShortcut,x as WithValue,J as __namedExportsOrder,$ as default};
