import{j as e}from"./iframe-B_omF_R9.js";/* empty css                    */import{R as s}from"./ReadTimeBadge-CAd9F2or.js";import{D as r}from"./DifficultyBadge-DU1H8V_K.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                      *//* empty css                        */const w=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),b=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),M=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]});function t({step:a,title:D,description:f,state:i="pending",variant:y="default",meta:j,onClick:v,href:h,className:T=""}){const C=i!=="locked"&&(!!v||!!h),S=["fn-roadmap-card",`fn-roadmap-card--${i}`,y!=="default"&&`fn-roadmap-card--${y}`,T].filter(Boolean).join(" "),k=o=>{if(i==="locked"){o.preventDefault();return}v?.()},A=o=>{i!=="locked"&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),v?.())},R=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fn-roadmap-card__step",children:i==="completed"?e.jsx(w,{}):a}),e.jsxs("div",{className:"fn-roadmap-card__content",children:[e.jsx("h3",{className:"fn-roadmap-card__title",children:D}),f&&e.jsx("p",{className:"fn-roadmap-card__description",children:f}),j&&e.jsx("div",{className:"fn-roadmap-card__meta",children:j})]}),e.jsxs("div",{className:"fn-roadmap-card__indicator",children:[i==="completed"&&e.jsx(w,{}),i==="active"&&e.jsx(b,{}),i==="locked"&&e.jsx(M,{}),i==="pending"&&e.jsx(b,{})]})]});return h&&i!=="locked"?e.jsx("a",{href:h,className:S,onClick:k,children:R}):e.jsx("article",{className:S,onClick:k,onKeyDown:A,role:C?"link":void 0,tabIndex:C?0:void 0,children:R})}t.__docgenInfo={description:`RoadmapCard - Card for roadmap steps

Displays step number, title, description, and progress state.`,methods:[],displayName:"RoadmapCard",props:{step:{required:!0,tsType:{name:"number"},description:"Step number"},title:{required:!0,tsType:{name:"string"},description:"Step title"},description:{required:!1,tsType:{name:"string"},description:"Step description"},state:{required:!1,tsType:{name:"union",raw:"'pending' | 'active' | 'completed' | 'locked'",elements:[{name:"literal",value:"'pending'"},{name:"literal",value:"'active'"},{name:"literal",value:"'completed'"},{name:"literal",value:"'locked'"}]},description:"Step state",defaultValue:{value:"'pending'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"Card variant",defaultValue:{value:"'default'",computed:!1}},meta:{required:!1,tsType:{name:"ReactNode"},description:"Meta content (badges, read time, etc.)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},href:{required:!1,tsType:{name:"string"},description:"Link URL"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const _={title:"Content/RoadmapCard",component:t,parameters:{layout:"padded",docs:{description:{component:"Card component for roadmap steps with progress indicator and state."}}},tags:["autodocs"],argTypes:{state:{control:"select",options:["pending","active","completed","locked"],description:"Step state"},variant:{control:"select",options:["default","compact"],description:"Card variant"}}},n={args:{step:1,title:"Define Your Niche",description:"Use the SCAMPER framework to identify opportunities in existing markets.",state:"pending"},decorators:[a=>e.jsx("div",{style:{width:"480px"},children:e.jsx(a,{})})]},d={args:{step:2,title:"Validate Your Idea",description:"Apply the Mom Test methodology to validate without leading questions.",state:"active"},decorators:[a=>e.jsx("div",{style:{width:"480px"},children:e.jsx(a,{})})]},c={args:{step:1,title:"Define Your Niche",description:"Use the SCAMPER framework to identify opportunities.",state:"completed"},decorators:[a=>e.jsx("div",{style:{width:"480px"},children:e.jsx(a,{})})]},l={args:{step:5,title:"Scale to $20K/month",description:"Advanced strategies for scaling your solo business.",state:"locked"},decorators:[a=>e.jsx("div",{style:{width:"480px"},children:e.jsx(a,{})})]},p={args:{step:3,title:"Build Your MVP",description:"Create a Minimum Viable Product.",state:"active",variant:"compact"},decorators:[a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{})})]},m={args:{step:2,title:"Validate Your Idea",description:"Apply the Mom Test methodology to validate your business idea.",state:"active",meta:e.jsxs(e.Fragment,{children:[e.jsx(s,{minutes:15}),e.jsx(r,{level:"beginner",size:"small"})]})},decorators:[a=>e.jsx("div",{style:{width:"480px"},children:e.jsx(a,{})})]},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"520px"},children:[e.jsx(t,{step:1,title:"Define Your Niche",description:"Use the SCAMPER framework to identify opportunities in existing markets.",state:"completed",meta:e.jsxs(e.Fragment,{children:[e.jsx(s,{minutes:10}),e.jsx(r,{level:"beginner",size:"small"})]})}),e.jsx(t,{step:2,title:"Validate Your Idea",description:"Apply the Mom Test methodology to validate without leading questions.",state:"completed",meta:e.jsxs(e.Fragment,{children:[e.jsx(s,{minutes:15}),e.jsx(r,{level:"beginner",size:"small"})]})}),e.jsx(t,{step:3,title:"Build Your MVP",description:"Create a Minimum Viable Product that solves the core problem.",state:"active",meta:e.jsxs(e.Fragment,{children:[e.jsx(s,{minutes:25}),e.jsx(r,{level:"intermediate",size:"small"})]})}),e.jsx(t,{step:4,title:"Launch and Iterate",description:"Ship your product and collect feedback from early users.",state:"pending",meta:e.jsxs(e.Fragment,{children:[e.jsx(s,{minutes:20}),e.jsx(r,{level:"intermediate",size:"small"})]})}),e.jsx(t,{step:5,title:"Scale to $20K/month",description:"Advanced strategies for scaling your solo business.",state:"locked",meta:e.jsxs(e.Fragment,{children:[e.jsx(s,{minutes:45}),e.jsx(r,{level:"advanced",size:"small"})]})})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxWidth:"400px"},children:[e.jsx(t,{step:1,title:"Introduction to SDD",description:"Learn the basics",state:"completed",variant:"compact"}),e.jsx(t,{step:2,title:"Writing Specifications",description:"SMART criteria",state:"completed",variant:"compact"}),e.jsx(t,{step:3,title:"Design Documents",description:"Technical approach",state:"active",variant:"compact"}),e.jsx(t,{step:4,title:"Task Execution",description:"Implementation",state:"pending",variant:"compact"})]})},g={render:()=>e.jsxs("div",{style:{width:"320px",padding:"24px",background:"#FAF9F6",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"16px",color:"#1C1C1E"},children:"Your Learning Path"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{step:1,title:"Getting Started",state:"completed",variant:"compact"}),e.jsx(t,{step:2,title:"Core Concepts",state:"active",variant:"compact"}),e.jsx(t,{step:3,title:"Advanced Topics",state:"pending",variant:"compact"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    step: 1,
    title: 'Define Your Niche',
    description: 'Use the SCAMPER framework to identify opportunities in existing markets.',
    state: 'pending'
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    step: 2,
    title: 'Validate Your Idea',
    description: 'Apply the Mom Test methodology to validate without leading questions.',
    state: 'active'
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    step: 1,
    title: 'Define Your Niche',
    description: 'Use the SCAMPER framework to identify opportunities.',
    state: 'completed'
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    step: 5,
    title: 'Scale to $20K/month',
    description: 'Advanced strategies for scaling your solo business.',
    state: 'locked'
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: 3,
    title: 'Build Your MVP',
    description: 'Create a Minimum Viable Product.',
    state: 'active',
    variant: 'compact'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    step: 2,
    title: 'Validate Your Idea',
    description: 'Apply the Mom Test methodology to validate your business idea.',
    state: 'active',
    meta: <>
        <ReadTimeBadge minutes={15} />
        <DifficultyBadge level="beginner" size="small" />
      </>
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '520px'
  }}>
      <RoadmapCard step={1} title="Define Your Niche" description="Use the SCAMPER framework to identify opportunities in existing markets." state="completed" meta={<>
            <ReadTimeBadge minutes={10} />
            <DifficultyBadge level="beginner" size="small" />
          </>} />
      <RoadmapCard step={2} title="Validate Your Idea" description="Apply the Mom Test methodology to validate without leading questions." state="completed" meta={<>
            <ReadTimeBadge minutes={15} />
            <DifficultyBadge level="beginner" size="small" />
          </>} />
      <RoadmapCard step={3} title="Build Your MVP" description="Create a Minimum Viable Product that solves the core problem." state="active" meta={<>
            <ReadTimeBadge minutes={25} />
            <DifficultyBadge level="intermediate" size="small" />
          </>} />
      <RoadmapCard step={4} title="Launch and Iterate" description="Ship your product and collect feedback from early users." state="pending" meta={<>
            <ReadTimeBadge minutes={20} />
            <DifficultyBadge level="intermediate" size="small" />
          </>} />
      <RoadmapCard step={5} title="Scale to $20K/month" description="Advanced strategies for scaling your solo business." state="locked" meta={<>
            <ReadTimeBadge minutes={45} />
            <DifficultyBadge level="advanced" size="small" />
          </>} />
    </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '400px'
  }}>
      <RoadmapCard step={1} title="Introduction to SDD" description="Learn the basics" state="completed" variant="compact" />
      <RoadmapCard step={2} title="Writing Specifications" description="SMART criteria" state="completed" variant="compact" />
      <RoadmapCard step={3} title="Design Documents" description="Technical approach" state="active" variant="compact" />
      <RoadmapCard step={4} title="Task Execution" description="Implementation" state="pending" variant="compact" />
    </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px',
    padding: '24px',
    background: '#FAF9F6',
    borderRadius: '8px'
  }}>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Your Learning Path
      </h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <RoadmapCard step={1} title="Getting Started" state="completed" variant="compact" />
        <RoadmapCard step={2} title="Core Concepts" state="active" variant="compact" />
        <RoadmapCard step={3} title="Advanced Topics" state="pending" variant="compact" />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};const z=["Pending","Active","Completed","Locked","Compact","WithMeta","FullRoadmap","CompactRoadmap","InSidebar"];export{d as Active,p as Compact,x as CompactRoadmap,c as Completed,u as FullRoadmap,g as InSidebar,l as Locked,n as Pending,m as WithMeta,z as __namedExportsOrder,_ as default};
