import{j as e}from"./iframe-B_omF_R9.js";import"./PaywallOverlay-Bgfnmi5c.js";import"./PaywallCTA-C-gRdULe.js";import"./ContentGate-CpnbBMWE.js";import"./PremiumContent-C7GKKaoi.js";import"./PremiumLoadingSkeleton-DZo68rDk.js";import{L as P}from"./LockedBadge-Bib7e-34.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";/* empty css                       *//* empty css                   *//* empty css                    *//* empty css                       *//* empty css                               *//* empty css                    */const b={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},T=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),e.jsx("path",{d:"M2 17l10 5 10-5"}),e.jsx("path",{d:"M2 12l10 5 10-5"})]});function t({id:i,title:x,description:f,skill:y,difficulty:m,isPremium:g=!1,premiumTier:M="plus",variant:D="default",onClick:h,href:v,className:w="",skillIcon:S}){const j=["fn-methodology-card",`fn-methodology-card--${D}`,g&&"fn-methodology-card--locked",w].filter(Boolean).join(" "),k=()=>{h?h():v&&(window.location.href=v)},C=u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),k())};return e.jsxs("article",{className:j,onClick:k,onKeyDown:C,role:"link",tabIndex:0,children:[e.jsxs("div",{className:"fn-methodology-card__header",children:[e.jsx("span",{className:"fn-methodology-card__id",children:i}),e.jsx("div",{className:"fn-methodology-card__badges",children:g&&e.jsx(P,{tier:M,size:"small"})})]}),e.jsx("h3",{className:"fn-methodology-card__title",children:x}),f&&e.jsx("p",{className:"fn-methodology-card__description",children:f}),e.jsxs("div",{className:"fn-methodology-card__footer",children:[y&&e.jsxs("span",{className:"fn-methodology-card__skill",children:[e.jsx("span",{className:"fn-methodology-card__skill-icon",children:S||e.jsx(T,{})}),y]}),m&&e.jsx("span",{className:`fn-methodology-card__difficulty fn-methodology-card__difficulty--${m}`,children:b[m]})]})]})}t.__docgenInfo={description:`MethodologyCard - Card component for methodology previews

Displays methodology ID, title, description, skill, and difficulty.`,methods:[],displayName:"MethodologyCard",props:{id:{required:!0,tsType:{name:"string"},description:"Methodology ID (e.g., M-DEV-001)"},title:{required:!0,tsType:{name:"string"},description:"Methodology title"},description:{required:!1,tsType:{name:"string"},description:"Description"},skill:{required:!1,tsType:{name:"string"},description:"Associated skill name"},difficulty:{required:!1,tsType:{name:"union",raw:"'beginner' | 'intermediate' | 'advanced'",elements:[{name:"literal",value:"'beginner'"},{name:"literal",value:"'intermediate'"},{name:"literal",value:"'advanced'"}]},description:"Difficulty level"},isPremium:{required:!1,tsType:{name:"boolean"},description:"Whether methodology is premium",defaultValue:{value:"false",computed:!1}},premiumTier:{required:!1,tsType:{name:"union",raw:"'plus' | 'pro' | 'team' | 'ultimate'",elements:[{name:"literal",value:"'plus'"},{name:"literal",value:"'pro'"},{name:"literal",value:"'team'"},{name:"literal",value:"'ultimate'"}]},description:"Premium tier required",defaultValue:{value:"'plus'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'featured'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'featured'"}]},description:"Card variant",defaultValue:{value:"'default'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},href:{required:!1,tsType:{name:"string"},description:"Methodology URL for link"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}},skillIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom skill icon"}}};const z={title:"Content/MethodologyCard",component:t,parameters:{layout:"centered",docs:{description:{component:"Card component for displaying methodology previews with ID, title, skill, and difficulty."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","featured"],description:"Card variant"},difficulty:{control:"select",options:["beginner","intermediate","advanced"],description:"Difficulty level"},isPremium:{control:"boolean",description:"Whether methodology is premium"}}},r={args:{id:"M-SDD-001",title:"SDD Workflow Overview",description:"Learn the complete Specification-Driven Development workflow from idea to implementation.",skill:"faion-sdd",difficulty:"beginner"},decorators:[i=>e.jsx("div",{style:{width:"360px"},children:e.jsx(i,{})})]},n={args:{id:"M-DEV-027",title:"Clean Architecture Patterns",description:"Implement clean architecture in your projects with practical examples and best practices.",skill:"faion-software-developer",difficulty:"advanced",isPremium:!0,premiumTier:"plus"},decorators:[i=>e.jsx("div",{style:{width:"360px"},children:e.jsx(i,{})})]},s={args:{id:"M-ML-021",title:"Enterprise RAG Pipeline",description:"Build production-ready RAG systems for enterprise applications with advanced security.",skill:"faion-ml-engineer",difficulty:"advanced",isPremium:!0,premiumTier:"pro"},decorators:[i=>e.jsx("div",{style:{width:"360px"},children:e.jsx(i,{})})]},a={args:{id:"M-PM-003",title:"WBS Decomposition",description:"Break down projects into manageable work packages.",skill:"faion-project-manager",difficulty:"intermediate",variant:"compact"},decorators:[i=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{})})]},o={args:{id:"M-RES-001",title:"Idea Generation with SCAMPER",description:"Use the SCAMPER framework to generate innovative business ideas by transforming existing concepts.",skill:"faion-researcher",difficulty:"beginner",variant:"featured"},decorators:[i=>e.jsx("div",{style:{width:"400px"},children:e.jsx(i,{})})]},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px",maxWidth:"1200px"},children:[e.jsx(t,{id:"M-SDD-001",title:"SDD Workflow Overview",description:"Complete workflow from specification to implementation.",skill:"faion-sdd",difficulty:"beginner"}),e.jsx(t,{id:"M-DEV-001",title:"Django Fundamentals",description:"Core concepts and patterns for Django development.",skill:"faion-software-developer",difficulty:"beginner"}),e.jsx(t,{id:"M-ML-001",title:"OpenAI API Integration",description:"Connect and use OpenAI APIs in your applications.",skill:"faion-ml-engineer",difficulty:"intermediate",isPremium:!0}),e.jsx(t,{id:"M-OPS-001",title:"Docker Fundamentals",description:"Containerize your applications with Docker.",skill:"faion-devops-engineer",difficulty:"beginner"}),e.jsx(t,{id:"M-MKT-001",title:"GTM Strategy",description:"Plan and execute your go-to-market strategy.",skill:"faion-marketing-manager",difficulty:"intermediate",isPremium:!0}),e.jsx(t,{id:"M-UX-001",title:"Usability Heuristics",description:"Apply Nielsen Norman 10 heuristics to your designs.",skill:"faion-ux-ui-designer",difficulty:"beginner"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"M-BA-001",title:"Requirements Basics",description:"Introduction to requirements engineering.",skill:"faion-business-analyst",difficulty:"beginner"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"M-BA-005",title:"Traceability Matrix",description:"Track requirements through implementation.",skill:"faion-business-analyst",difficulty:"intermediate"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{id:"M-BA-012",title:"Advanced Process Modeling",description:"BPMN 2.0 and enterprise process architecture.",skill:"faion-business-analyst",difficulty:"advanced"})})]})},c={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px",maxWidth:"1200px"},children:[{id:"M-SDD-001",title:"SDD Workflow",skill:"faion-sdd"},{id:"M-SDD-002",title:"Writing Specs",skill:"faion-sdd"},{id:"M-SDD-003",title:"Design Docs",skill:"faion-sdd"},{id:"M-SDD-004",title:"Implementation Plans",skill:"faion-sdd"},{id:"M-SDD-005",title:"Task Creation",skill:"faion-sdd"},{id:"M-SDD-006",title:"Execute Task",skill:"faion-sdd",isPremium:!0},{id:"M-SDD-007",title:"Quality Gates",skill:"faion-sdd",isPremium:!0},{id:"M-SDD-008",title:"Reflexion Learning",skill:"faion-sdd",isPremium:!0}].map(i=>e.jsx(t,{id:i.id,title:i.title,skill:i.skill,difficulty:"beginner",variant:"compact",isPremium:i.isPremium},i.id))})},p={args:{id:"M-HR-001",title:"Talent Acquisition",description:"Strategies for attracting top talent to your organization.",skill:"faion-hr-recruiter",difficulty:"intermediate",skillIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})},decorators:[i=>e.jsx("div",{style:{width:"360px"},children:e.jsx(i,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'M-SDD-001',
    title: 'SDD Workflow Overview',
    description: 'Learn the complete Specification-Driven Development workflow from idea to implementation.',
    skill: 'faion-sdd',
    difficulty: 'beginner'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'M-DEV-027',
    title: 'Clean Architecture Patterns',
    description: 'Implement clean architecture in your projects with practical examples and best practices.',
    skill: 'faion-software-developer',
    difficulty: 'advanced',
    isPremium: true,
    premiumTier: 'plus'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'M-ML-021',
    title: 'Enterprise RAG Pipeline',
    description: 'Build production-ready RAG systems for enterprise applications with advanced security.',
    skill: 'faion-ml-engineer',
    difficulty: 'advanced',
    isPremium: true,
    premiumTier: 'pro'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'M-PM-003',
    title: 'WBS Decomposition',
    description: 'Break down projects into manageable work packages.',
    skill: 'faion-project-manager',
    difficulty: 'intermediate',
    variant: 'compact'
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'M-RES-001',
    title: 'Idea Generation with SCAMPER',
    description: 'Use the SCAMPER framework to generate innovative business ideas by transforming existing concepts.',
    skill: 'faion-researcher',
    difficulty: 'beginner',
    variant: 'featured'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    maxWidth: '1200px'
  }}>
      <MethodologyCard id="M-SDD-001" title="SDD Workflow Overview" description="Complete workflow from specification to implementation." skill="faion-sdd" difficulty="beginner" />
      <MethodologyCard id="M-DEV-001" title="Django Fundamentals" description="Core concepts and patterns for Django development." skill="faion-software-developer" difficulty="beginner" />
      <MethodologyCard id="M-ML-001" title="OpenAI API Integration" description="Connect and use OpenAI APIs in your applications." skill="faion-ml-engineer" difficulty="intermediate" isPremium />
      <MethodologyCard id="M-OPS-001" title="Docker Fundamentals" description="Containerize your applications with Docker." skill="faion-devops-engineer" difficulty="beginner" />
      <MethodologyCard id="M-MKT-001" title="GTM Strategy" description="Plan and execute your go-to-market strategy." skill="faion-marketing-manager" difficulty="intermediate" isPremium />
      <MethodologyCard id="M-UX-001" title="Usability Heuristics" description="Apply Nielsen Norman 10 heuristics to your designs." skill="faion-ux-ui-designer" difficulty="beginner" />
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <div style={{
      width: '300px'
    }}>
        <MethodologyCard id="M-BA-001" title="Requirements Basics" description="Introduction to requirements engineering." skill="faion-business-analyst" difficulty="beginner" />
      </div>
      <div style={{
      width: '300px'
    }}>
        <MethodologyCard id="M-BA-005" title="Traceability Matrix" description="Track requirements through implementation." skill="faion-business-analyst" difficulty="intermediate" />
      </div>
      <div style={{
      width: '300px'
    }}>
        <MethodologyCard id="M-BA-012" title="Advanced Process Modeling" description="BPMN 2.0 and enterprise process architecture." skill="faion-business-analyst" difficulty="advanced" />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    maxWidth: '1200px'
  }}>
      {[{
      id: 'M-SDD-001',
      title: 'SDD Workflow',
      skill: 'faion-sdd'
    }, {
      id: 'M-SDD-002',
      title: 'Writing Specs',
      skill: 'faion-sdd'
    }, {
      id: 'M-SDD-003',
      title: 'Design Docs',
      skill: 'faion-sdd'
    }, {
      id: 'M-SDD-004',
      title: 'Implementation Plans',
      skill: 'faion-sdd'
    }, {
      id: 'M-SDD-005',
      title: 'Task Creation',
      skill: 'faion-sdd'
    }, {
      id: 'M-SDD-006',
      title: 'Execute Task',
      skill: 'faion-sdd',
      isPremium: true
    }, {
      id: 'M-SDD-007',
      title: 'Quality Gates',
      skill: 'faion-sdd',
      isPremium: true
    }, {
      id: 'M-SDD-008',
      title: 'Reflexion Learning',
      skill: 'faion-sdd',
      isPremium: true
    }].map(m => <MethodologyCard key={m.id} id={m.id} title={m.title} skill={m.skill} difficulty="beginner" variant="compact" isPremium={m.isPremium} />)}
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'M-HR-001',
    title: 'Talent Acquisition',
    description: 'Strategies for attracting top talent to your organization.',
    skill: 'faion-hr-recruiter',
    difficulty: 'intermediate',
    skillIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};const H=["Default","Premium","ProTier","Compact","Featured","MethodologyGrid","AllDifficulties","CompactGrid","WithCustomIcon"];export{d as AllDifficulties,a as Compact,c as CompactGrid,r as Default,o as Featured,l as MethodologyGrid,n as Premium,s as ProTier,p as WithCustomIcon,H as __namedExportsOrder,z as default};
