import{j as e,r as I}from"./iframe-B_omF_R9.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";const z="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function l({activeLetter:t,onLetterClick:a,availableLetters:i,showAll:o=!0,allLabel:x="All",variant:s="default",size:S="md",disabled:c=!1,className:k=""}){const D=i?new Set(i.map(n=>n.toUpperCase())):null,L=n=>{c||a(n||"")},F=n=>D?D.has(n):!0,w=["fn-alphabet-nav",`fn-alphabet-nav--${s}`,`fn-alphabet-nav--${S}`,c&&"fn-alphabet-nav--disabled",k].filter(Boolean).join(" ");return e.jsxs("nav",{className:w,"aria-label":"Alphabetical navigation",children:[o&&e.jsx("button",{type:"button",className:`fn-alphabet-nav__button fn-alphabet-nav__button--all ${t?"":"fn-alphabet-nav__button--active"}`,onClick:()=>L(null),disabled:c,"aria-label":"Show all","aria-pressed":!t,children:x}),e.jsx("div",{className:"fn-alphabet-nav__letters",children:z.map(n=>{const C=F(n),j=t?.toUpperCase()===n;return e.jsx("button",{type:"button",className:`fn-alphabet-nav__button ${j?"fn-alphabet-nav__button--active":""} ${C?"":"fn-alphabet-nav__button--disabled"}`,onClick:()=>C&&L(n),disabled:c||!C,"aria-label":`Show items starting with ${n}`,"aria-pressed":j,children:n},n)})}),e.jsx("button",{type:"button",className:`fn-alphabet-nav__button fn-alphabet-nav__button--other ${t==="#"?"fn-alphabet-nav__button--active":""}`,onClick:()=>L("#"),disabled:c,"aria-label":"Show items starting with numbers or symbols","aria-pressed":t==="#",children:"#"})]})}l.__docgenInfo={description:`AlphabetNav - A-Z navigation for glossary and alphabetical content

Used in the Terminology Dictionary for quick letter navigation.`,methods:[],displayName:"AlphabetNav",props:{activeLetter:{required:!1,tsType:{name:"string"},description:"Currently selected letter"},onLetterClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(letter: string) => void",signature:{arguments:[{type:{name:"string"},name:"letter"}],return:{name:"void"}}},description:"Callback when letter is selected"},availableLetters:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Letters that have content (others will be disabled)"},showAll:{required:!1,tsType:{name:"boolean"},description:'Show "All" option',defaultValue:{value:"true",computed:!1}},allLabel:{required:!1,tsType:{name:"string"},description:'"All" label text',defaultValue:{value:"'All'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'sticky'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'sticky'"}]},description:"Variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const P={title:"Content/AlphabetNav",component:l,parameters:{layout:"centered",docs:{description:{component:"A-Z navigation for glossary and alphabetical content. Used in the Terminology Dictionary."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","sticky"],description:"Navigation variant"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},showAll:{control:"boolean",description:'Show "All" option'},disabled:{control:"boolean",description:"Disabled state"}}},r=t=>{const[a,i]=I.useState(t.activeLetter);return e.jsx(l,{...t,activeLetter:a,onLetterClick:o=>i(o||void 0)})},p={render:t=>e.jsx(r,{...t}),args:{}},d={render:t=>e.jsx(r,{...t}),args:{activeLetter:"M"}},m={render:t=>e.jsx(r,{...t}),args:{availableLetters:["A","B","C","D","M","P","R","S","T","U"]}},u={render:t=>e.jsx(r,{...t}),args:{variant:"compact",activeLetter:"A"}},f={render:t=>e.jsx(r,{...t}),args:{size:"sm"}},g={render:t=>e.jsx(r,{...t}),args:{size:"lg"}},v={render:t=>e.jsx(r,{...t}),args:{showAll:!1,activeLetter:"A"}},A={render:t=>e.jsx(r,{...t}),args:{allLabel:"View All"}},h={args:{disabled:!0,onLetterClick:()=>{}}},b={render:()=>{const[t,a]=I.useState(""),i=["A","B","C","D","E","F","G","I","L","M","O","P","R","S","T","U","V","W"],o={"":[{term:"API",definition:"Application Programming Interface"},{term:"Backlog",definition:"A prioritized list of work for a development team"},{term:"CI/CD",definition:"Continuous Integration and Continuous Deployment"}],A:[{term:"API",definition:"Application Programming Interface"},{term:"Agent",definition:"An autonomous AI entity that can perform tasks"},{term:"Acceptance Criteria",definition:"Conditions that must be met for a user story to be complete"}],M:[{term:"MCP",definition:"Model Context Protocol - A protocol for AI model communication"},{term:"Methodology",definition:"A systematic approach or process for achieving a goal"},{term:"MVP",definition:"Minimum Viable Product"}],S:[{term:"SDD",definition:"Specification-Driven Development"},{term:"Solopreneur",definition:"An entrepreneur who runs their business alone"},{term:"Sprint",definition:"A time-boxed iteration in agile development"}]},x=o[t]||o[""];return e.jsxs("div",{style:{width:"800px"},children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",fontWeight:700,color:"#1C1C1E",margin:"0 0 8px"},children:"Terminology Dictionary"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"16px",color:"#4A4A4A",margin:0},children:"Definitions of key terms used throughout the platform"})]}),e.jsx("div",{style:{marginBottom:"32px"},children:e.jsx(l,{activeLetter:t,onLetterClick:s=>a(s),availableLetters:i})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:x.map((s,S)=>e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",fontWeight:700,color:"#1C1C1E",margin:"0 0 8px"},children:s.term}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:0,lineHeight:1.6},children:s.definition})]},S))})]})}},y={render:()=>{const[t,a]=I.useState("A");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Default"}),e.jsx(l,{activeLetter:t,onLetterClick:a})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Compact"}),e.jsx(l,{activeLetter:t,onLetterClick:a,variant:"compact"})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {}
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {
    activeLetter: 'M'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {
    availableLetters: ['A', 'B', 'C', 'D', 'M', 'P', 'R', 'S', 'T', 'U']
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {
    variant: 'compact',
    activeLetter: 'A'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {
    size: 'lg'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {
    showAll: false,
    activeLetter: 'A'
  }
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <AlphabetNavInteractive {...args} />,
  args: {
    allLabel: 'View All'
  }
}`,...A.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onLetterClick: () => {}
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeLetter, setActiveLetter] = useState<string>('');
    const availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'L', 'M', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W'];
    const terms: Record<string, Array<{
      term: string;
      definition: string;
    }>> = {
      '': [{
        term: 'API',
        definition: 'Application Programming Interface'
      }, {
        term: 'Backlog',
        definition: 'A prioritized list of work for a development team'
      }, {
        term: 'CI/CD',
        definition: 'Continuous Integration and Continuous Deployment'
      }],
      'A': [{
        term: 'API',
        definition: 'Application Programming Interface'
      }, {
        term: 'Agent',
        definition: 'An autonomous AI entity that can perform tasks'
      }, {
        term: 'Acceptance Criteria',
        definition: 'Conditions that must be met for a user story to be complete'
      }],
      'M': [{
        term: 'MCP',
        definition: 'Model Context Protocol - A protocol for AI model communication'
      }, {
        term: 'Methodology',
        definition: 'A systematic approach or process for achieving a goal'
      }, {
        term: 'MVP',
        definition: 'Minimum Viable Product'
      }],
      'S': [{
        term: 'SDD',
        definition: 'Specification-Driven Development'
      }, {
        term: 'Solopreneur',
        definition: 'An entrepreneur who runs their business alone'
      }, {
        term: 'Sprint',
        definition: 'A time-boxed iteration in agile development'
      }]
    };
    const displayTerms = terms[activeLetter] || terms[''];
    return <div style={{
      width: '800px'
    }}>
        {/* Header */}
        <div style={{
        marginBottom: '24px'
      }}>
          <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '32px',
          fontWeight: 700,
          color: '#1C1C1E',
          margin: '0 0 8px'
        }}>
            Terminology Dictionary
          </h1>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: '#4A4A4A',
          margin: 0
        }}>
            Definitions of key terms used throughout the platform
          </p>
        </div>

        {/* Alphabet navigation */}
        <div style={{
        marginBottom: '32px'
      }}>
          <AlphabetNav activeLetter={activeLetter} onLetterClick={letter => setActiveLetter(letter)} availableLetters={availableLetters} />
        </div>

        {/* Terms list */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {displayTerms.map((item, i) => <div key={i} style={{
          padding: '20px',
          background: '#FFFFFF',
          border: '1px solid #E5E5E0',
          borderRadius: '8px'
        }}>
              <h3 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#1C1C1E',
            margin: '0 0 8px'
          }}>
                {item.term}
              </h3>
              <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#4A4A4A',
            margin: 0,
            lineHeight: 1.6
          }}>
                {item.definition}
              </p>
            </div>)}
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [letter, setLetter] = useState<string>('A');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Default</p>
          <AlphabetNav activeLetter={letter} onLetterClick={setLetter} />
        </div>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Compact</p>
          <AlphabetNav activeLetter={letter} onLetterClick={setLetter} variant="compact" />
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const M=["Default","WithActiveLetter","LimitedLetters","Compact","SmallSize","LargeSize","WithoutAll","CustomAllLabel","Disabled","InGlossary","AllVariants"];export{y as AllVariants,u as Compact,A as CustomAllLabel,p as Default,h as Disabled,b as InGlossary,g as LargeSize,m as LimitedLetters,f as SmallSize,d as WithActiveLetter,v as WithoutAll,M as __namedExportsOrder,P as default};
