import{r as o,j as e}from"./iframe-B_omF_R9.js";/* empty css                         */import"./preload-helper-Ct5FWWRu.js";const D=[{code:"en",name:"English",nativeName:"English",flag:"🇺🇸"},{code:"uk",name:"Ukrainian",nativeName:"Українська",flag:"🇺🇦"},{code:"pt",name:"Portuguese",nativeName:"Português",flag:"🇧🇷"},{code:"es",name:"Spanish",nativeName:"Español",flag:"🇪🇸"},{code:"fr",name:"French",nativeName:"Français",flag:"🇫🇷"},{code:"de",name:"German",nativeName:"Deutsch",flag:"🇩🇪"},{code:"hi",name:"Hindi",nativeName:"हिन्दी",flag:"🇮🇳"},{code:"pl",name:"Polish",nativeName:"Polski",flag:"🇵🇱"}],V=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),B=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),T=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})});function r({value:a,onChange:s,languages:i=D,variant:E="default",size:w="md",showNativeName:L=!0,disabled:F=!1,className:A=""}){const[u,d]=o.useState(!1),k=o.useRef(null),c=i.find(n=>n.code===a)||i[0];o.useEffect(()=>{const n=l=>{k.current&&!k.current.contains(l.target)&&d(!1)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[]),o.useEffect(()=>{const n=l=>{l.key==="Escape"&&d(!1)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]);const I=()=>{F||d(!u)},_=n=>{s(n),d(!1)},z=(n,l)=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),l?_(l):I())},b=["fn-language-selector",`fn-language-selector--${E}`,`fn-language-selector--${w}`,u&&"fn-language-selector--open",F&&"fn-language-selector--disabled",A].filter(Boolean).join(" ");return e.jsxs("div",{ref:k,className:b,children:[e.jsx("button",{type:"button",className:"fn-language-selector__trigger",onClick:I,onKeyDown:n=>z(n),"aria-expanded":u,"aria-haspopup":"listbox","aria-label":`Select language. Current: ${c.name}`,disabled:F,children:E==="minimal"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"fn-language-selector__icon",children:e.jsx(B,{})}),e.jsx("span",{className:"fn-language-selector__code",children:c.code.toUpperCase()})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"fn-language-selector__flag",children:c.flag}),e.jsx("span",{className:"fn-language-selector__text",children:L?c.nativeName:c.name}),e.jsx("span",{className:"fn-language-selector__chevron",children:e.jsx(V,{})})]})}),u&&e.jsx("div",{className:"fn-language-selector__dropdown",role:"listbox",children:i.map(n=>e.jsxs("button",{type:"button",className:`fn-language-selector__option ${n.code===a?"fn-language-selector__option--selected":""}`,onClick:()=>_(n.code),onKeyDown:l=>z(l,n.code),role:"option","aria-selected":n.code===a,children:[e.jsx("span",{className:"fn-language-selector__option-flag",children:n.flag}),e.jsxs("span",{className:"fn-language-selector__option-text",children:[e.jsx("span",{className:"fn-language-selector__option-name",children:L?n.nativeName:n.name}),L&&e.jsx("span",{className:"fn-language-selector__option-english",children:n.name})]}),n.code===a&&e.jsx("span",{className:"fn-language-selector__option-check",children:e.jsx(T,{})})]},n.code))})]})}r.__docgenInfo={description:`LanguageSelector - Dropdown for selecting UI language

Supports 8 languages as defined in the constitution.`,methods:[],displayName:"LanguageSelector",props:{value:{required:!0,tsType:{name:"union",raw:"'uk' | 'en' | 'pt' | 'es' | 'fr' | 'de' | 'hi' | 'pl'",elements:[{name:"literal",value:"'uk'"},{name:"literal",value:"'en'"},{name:"literal",value:"'pt'"},{name:"literal",value:"'es'"},{name:"literal",value:"'fr'"},{name:"literal",value:"'de'"},{name:"literal",value:"'hi'"},{name:"literal",value:"'pl'"}]},description:"Currently selected language code"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(code: LanguageCode) => void",signature:{arguments:[{type:{name:"union",raw:"'uk' | 'en' | 'pt' | 'es' | 'fr' | 'de' | 'hi' | 'pl'",elements:[{name:"literal",value:"'uk'"},{name:"literal",value:"'en'"},{name:"literal",value:"'pt'"},{name:"literal",value:"'es'"},{name:"literal",value:"'fr'"},{name:"literal",value:"'de'"},{name:"literal",value:"'hi'"},{name:"literal",value:"'pl'"}]},name:"code"}],return:{name:"void"}}},description:"Callback when language changes"},languages:{required:!1,tsType:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},description:"Available languages (defaults to all 8)",defaultValue:{value:`[
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
]`,computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'minimal'"}]},description:"Selector variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},showNativeName:{required:!1,tsType:{name:"boolean"},description:"Show native language name",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const W={title:"Layout/LanguageSelector",component:r,parameters:{layout:"centered",docs:{description:{component:"Dropdown component for selecting UI language. Supports 8 languages as defined in the Faion Network constitution."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","minimal"],description:"Selector variant"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},showNativeName:{control:"boolean",description:"Show native language name"},disabled:{control:"boolean",description:"Disabled state"}}},t=a=>{const[s,i]=o.useState(a.value||"en");return e.jsx(r,{...a,value:s,onChange:i})},m={render:a=>e.jsx(t,{...a}),args:{value:"en"}},g={render:a=>e.jsx(t,{...a}),args:{value:"uk"}},p={render:a=>e.jsx(t,{...a}),args:{value:"en",variant:"compact"}},f={render:a=>e.jsx(t,{...a}),args:{value:"en",variant:"minimal"}},v={render:a=>e.jsx(t,{...a}),args:{value:"en",size:"sm"}},x={render:a=>e.jsx(t,{...a}),args:{value:"en",size:"lg"}},h={render:a=>e.jsx(t,{...a}),args:{value:"de",showNativeName:!1}},y={render:a=>e.jsx(t,{...a}),args:{value:"en",disabled:!0}},S={render:a=>e.jsx(t,{...a}),args:{value:"en",languages:D.slice(0,4)}},j={render:()=>{const[a,s]=o.useState("en");return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",background:"#FFFFFF",borderBottom:"1px solid #E5E5E0",width:"800px"},children:[e.jsx("div",{style:{fontFamily:"Georgia, serif",fontWeight:700,fontSize:"20px",color:"#5D1F2D"},children:"Faion Network"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("nav",{style:{display:"flex",gap:"24px",fontFamily:"Inter, sans-serif",fontSize:"14px"},children:[e.jsx("a",{href:"#",style:{color:"#1C1C1E",textDecoration:"none"},children:"Features"}),e.jsx("a",{href:"#",style:{color:"#1C1C1E",textDecoration:"none"},children:"Pricing"}),e.jsx("a",{href:"#",style:{color:"#1C1C1E",textDecoration:"none"},children:"Docs"})]}),e.jsx(r,{value:a,onChange:s,variant:"compact",size:"sm"})]})]})}},C={render:()=>{const[a,s]=o.useState("en");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Default"}),e.jsx(r,{value:a,onChange:s,variant:"default"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Compact"}),e.jsx(r,{value:a,onChange:s,variant:"compact"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Minimal"}),e.jsx(r,{value:a,onChange:s,variant:"minimal"})]})]})}},N={render:()=>{const[a,s]=o.useState("en");return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(r,{value:a,onChange:s,size:"sm"}),e.jsx(r,{value:a,onChange:s,size:"md"}),e.jsx(r,{value:a,onChange:s,size:"lg"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'uk'
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    variant: 'compact'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    variant: 'minimal'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    size: 'sm'
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    size: 'lg'
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'de',
    showNativeName: false
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    disabled: true
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <LanguageSelectorInteractive {...args} />,
  args: {
    value: 'en',
    languages: DEFAULT_LANGUAGES.slice(0, 4)
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<LanguageCode>('en');
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      background: '#FFFFFF',
      borderBottom: '1px solid #E5E5E0',
      width: '800px'
    }}>
        <div style={{
        fontFamily: 'Georgia, serif',
        fontWeight: 700,
        fontSize: '20px',
        color: '#5D1F2D'
      }}>
          Faion Network
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
          <nav style={{
          display: 'flex',
          gap: '24px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px'
        }}>
            <a href="#" style={{
            color: '#1C1C1E',
            textDecoration: 'none'
          }}>Features</a>
            <a href="#" style={{
            color: '#1C1C1E',
            textDecoration: 'none'
          }}>Pricing</a>
            <a href="#" style={{
            color: '#1C1C1E',
            textDecoration: 'none'
          }}>Docs</a>
          </nav>
          <LanguageSelector value={value} onChange={setValue} variant="compact" size="sm" />
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<LanguageCode>('en');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'flex-start'
    }}>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Default</p>
          <LanguageSelector value={value} onChange={setValue} variant="default" />
        </div>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Compact</p>
          <LanguageSelector value={value} onChange={setValue} variant="compact" />
        </div>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Minimal</p>
          <LanguageSelector value={value} onChange={setValue} variant="minimal" />
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<LanguageCode>('en');
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <LanguageSelector value={value} onChange={setValue} size="sm" />
        <LanguageSelector value={value} onChange={setValue} size="md" />
        <LanguageSelector value={value} onChange={setValue} size="lg" />
      </div>;
  }
}`,...N.parameters?.docs?.source}}};const q=["Default","WithUkrainian","Compact","Minimal","SmallSize","LargeSize","WithEnglishNames","Disabled","LimitedLanguages","InHeader","AllVariants","AllSizes"];export{N as AllSizes,C as AllVariants,p as Compact,m as Default,y as Disabled,j as InHeader,x as LargeSize,S as LimitedLanguages,f as Minimal,v as SmallSize,h as WithEnglishNames,g as WithUkrainian,q as __namedExportsOrder,W as default};
