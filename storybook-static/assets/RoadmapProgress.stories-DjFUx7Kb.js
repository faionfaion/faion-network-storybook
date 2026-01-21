import{j as e}from"./iframe-B_omF_R9.js";/* empty css                        */import"./preload-helper-Ct5FWWRu.js";function t({completed:r,total:o,label:x="Progress",showPercentage:y=!1,showCount:h=!0,showMarkers:v=!1,variant:f="default",animated:F=!0,className:w=""}){const g=o>0?Math.round(r/o*100):0,b=["fn-roadmap-progress",`fn-roadmap-progress--${f}`,F&&"fn-roadmap-progress--animated",w].filter(Boolean).join(" ");return e.jsxs("div",{className:b,children:[f!=="compact"&&(h||x)&&e.jsxs("div",{className:"fn-roadmap-progress__header",children:[e.jsx("span",{className:"fn-roadmap-progress__label",children:x}),h&&e.jsxs("span",{className:"fn-roadmap-progress__count",children:[e.jsx("span",{children:r})," / ",o," completed"]})]}),e.jsx("div",{className:"fn-roadmap-progress__bar",children:e.jsx("div",{className:"fn-roadmap-progress__fill",style:{width:`${g}%`},role:"progressbar","aria-valuenow":g,"aria-valuemin":0,"aria-valuemax":100})}),v&&o>0&&e.jsx("div",{className:"fn-roadmap-progress__markers",children:Array.from({length:o}).map((E,a)=>{const C=(a+.5)/o*100,S=a<r,j=a===r;return e.jsx("div",{className:`fn-roadmap-progress__marker ${S?"fn-roadmap-progress__marker--completed":""} ${j?"fn-roadmap-progress__marker--current":""}`,style:{left:`${C}%`}},a)})}),y&&e.jsxs("div",{className:"fn-roadmap-progress__percentage",children:[g,"%"]})]})}t.__docgenInfo={description:`RoadmapProgress - Progress bar for roadmap completion

Visual indicator of completed steps with percentage and count.`,methods:[],displayName:"RoadmapProgress",props:{completed:{required:!0,tsType:{name:"number"},description:"Number of completed steps"},total:{required:!0,tsType:{name:"number"},description:"Total number of steps"},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Progress'",computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"Show percentage",defaultValue:{value:"false",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"Show step count",defaultValue:{value:"true",computed:!1}},showMarkers:{required:!1,tsType:{name:"boolean"},description:"Show step markers",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'large'"}]},description:"Variant",defaultValue:{value:"'default'",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"Animated fill on mount",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const k={title:"Content/RoadmapProgress",component:t,parameters:{layout:"padded",docs:{description:{component:"Progress bar component for roadmap completion with step count and percentage."}}},tags:["autodocs"],argTypes:{completed:{control:{type:"range",min:0,max:10},description:"Completed steps"},total:{control:{type:"range",min:1,max:10},description:"Total steps"},variant:{control:"select",options:["default","compact","large"],description:"Variant"},showPercentage:{control:"boolean",description:"Show percentage"},showCount:{control:"boolean",description:"Show step count"},showMarkers:{control:"boolean",description:"Show step markers"}}},s={args:{completed:3,total:7,label:"Progress",showCount:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},n={args:{completed:5,total:8,label:"Progress",showCount:!0,showPercentage:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},d={args:{completed:4,total:7,label:"Progress",showCount:!0,showMarkers:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},l={args:{completed:3,total:5,variant:"compact",showPercentage:!0},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},i={args:{completed:6,total:10,variant:"large",label:"Roadmap Progress",showCount:!0,showPercentage:!0},decorators:[r=>e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{})})]},p={args:{completed:0,total:5,label:"Not started",showCount:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},c={args:{completed:7,total:7,label:"Completed",showCount:!0,showPercentage:!0},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},m={render:()=>e.jsxs("div",{style:{padding:"24px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",maxWidth:"400px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"18px",marginBottom:"8px",color:"#1C1C1E"},children:"SDD Fundamentals"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"16px",lineHeight:1.5},children:"Learn the basics of Specification-Driven Development."}),e.jsx(t,{completed:3,total:7,label:"Your progress",showCount:!0})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontFamily:"Georgia, serif",fontSize:"16px",marginBottom:"12px",color:"#1C1C1E"},children:"Getting Started"}),e.jsx(t,{completed:7,total:7,showCount:!0})]}),e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontFamily:"Georgia, serif",fontSize:"16px",marginBottom:"12px",color:"#1C1C1E"},children:"Building Your First Product"}),e.jsx(t,{completed:4,total:10,showCount:!0})]}),e.jsxs("div",{style:{padding:"20px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontFamily:"Georgia, serif",fontSize:"16px",marginBottom:"12px",color:"#1C1C1E"},children:"Scaling to $20K/month"}),e.jsx(t,{completed:0,total:8,showCount:!0})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 3,
    total: 7,
    label: 'Progress',
    showCount: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 5,
    total: 8,
    label: 'Progress',
    showCount: true,
    showPercentage: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 4,
    total: 7,
    label: 'Progress',
    showCount: true,
    showMarkers: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 3,
    total: 5,
    variant: 'compact',
    showPercentage: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 6,
    total: 10,
    variant: 'large',
    label: 'Roadmap Progress',
    showCount: true,
    showPercentage: true
  },
  decorators: [Story => <div style={{
    width: '500px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 0,
    total: 5,
    label: 'Not started',
    showCount: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 7,
    total: 7,
    label: 'Completed',
    showCount: true,
    showPercentage: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: '#FFFFFF',
    border: '1px solid #E5E5E0',
    borderRadius: '8px',
    maxWidth: '400px'
  }}>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      marginBottom: '8px',
      color: '#1C1C1E'
    }}>
        SDD Fundamentals
      </h3>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      marginBottom: '16px',
      lineHeight: 1.5
    }}>
        Learn the basics of Specification-Driven Development.
      </p>
      <RoadmapProgress completed={3} total={7} label="Your progress" showCount={true} />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '400px'
  }}>
      <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px'
    }}>
        <h4 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '16px',
        marginBottom: '12px',
        color: '#1C1C1E'
      }}>
          Getting Started
        </h4>
        <RoadmapProgress completed={7} total={7} showCount />
      </div>

      <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px'
    }}>
        <h4 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '16px',
        marginBottom: '12px',
        color: '#1C1C1E'
      }}>
          Building Your First Product
        </h4>
        <RoadmapProgress completed={4} total={10} showCount />
      </div>

      <div style={{
      padding: '20px',
      background: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px'
    }}>
        <h4 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '16px',
        marginBottom: '12px',
        color: '#1C1C1E'
      }}>
          Scaling to $20K/month
        </h4>
        <RoadmapProgress completed={0} total={8} showCount />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const N=["Default","WithPercentage","WithMarkers","Compact","Large","Empty","Complete","InRoadmapCard","MultipleRoadmaps"];export{l as Compact,c as Complete,s as Default,p as Empty,m as InRoadmapCard,i as Large,u as MultipleRoadmaps,d as WithMarkers,n as WithPercentage,N as __namedExportsOrder,k as default};
