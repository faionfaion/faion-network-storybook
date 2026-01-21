import{j as e}from"./iframe-B_omF_R9.js";/* empty css                   */import"./preload-helper-Ct5FWWRu.js";const j=({number:t})=>e.jsx("span",{className:"fn-step-by-step__number",children:t});function m({steps:t,variant:y="default",showNumbers:x=!0,orientation:f="vertical",className:g=""}){const v=["fn-step-by-step",`fn-step-by-step--${y}`,`fn-step-by-step--${f}`,g].filter(Boolean).join(" ");return e.jsx("div",{className:v,children:t.map((n,p)=>{const S=p+1,u=p===t.length-1;return e.jsxs("div",{className:`fn-step-by-step__step ${u?"fn-step-by-step__step--last":""}`,children:[e.jsxs("div",{className:"fn-step-by-step__indicator",children:[n.icon?e.jsx("span",{className:"fn-step-by-step__icon",children:n.icon}):x?e.jsx(j,{number:S}):e.jsx("span",{className:"fn-step-by-step__dot"}),!u&&e.jsx("div",{className:"fn-step-by-step__line"})]}),e.jsxs("div",{className:"fn-step-by-step__content",children:[e.jsxs("div",{className:"fn-step-by-step__header",children:[e.jsx("h3",{className:"fn-step-by-step__title",children:n.title}),n.duration&&e.jsx("span",{className:"fn-step-by-step__duration",children:n.duration})]}),e.jsx("div",{className:"fn-step-by-step__body",children:n.content})]})]},p)})})}m.__docgenInfo={description:`StepByStep - Numbered process steps for MDX

Displays a sequence of steps with numbers, titles, and content.`,methods:[],displayName:"StepByStep",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"Step"}],raw:"Step[]"},description:"List of steps"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'cards'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'cards'"}]},description:"Variant",defaultValue:{value:"'default'",computed:!1}},showNumbers:{required:!1,tsType:{name:"boolean"},description:"Show step numbers",defaultValue:{value:"true",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Orientation",defaultValue:{value:"'vertical'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const _={title:"MDX/StepByStep",component:m,parameters:{layout:"padded",docs:{description:{component:"Numbered process steps for displaying sequential instructions or workflows."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","cards"],description:"Step display variant"},orientation:{control:"select",options:["vertical","horizontal"],description:"Step orientation"},showNumbers:{control:"boolean",description:"Show step numbers"}}},d=[{title:"Install Dependencies",content:"Run npm install or yarn to install all required packages for the project."},{title:"Configure Environment",content:"Copy .env.example to .env and fill in your API keys and configuration values."},{title:"Start Development Server",content:"Run npm run dev to start the development server on localhost:3000."},{title:"Build for Production",content:"When ready, run npm run build to create an optimized production build."}],h=[{title:"Research & Discovery",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Begin by understanding the problem space and your target users."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Conduct market research using the faion-researcher skill"}),e.jsx("li",{children:"Create user personas based on interviews and data"}),e.jsx("li",{children:"Identify key pain points and opportunities"})]})]}),duration:"1-2 weeks"},{title:"Write Specification",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Document your findings and define what you are going to build."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Create a spec.md file following SDD methodology"}),e.jsx("li",{children:"Define functional and non-functional requirements"}),e.jsx("li",{children:"Get stakeholder sign-off before proceeding"})]})]}),duration:"3-5 days"},{title:"Design System",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Design the technical architecture and user interface."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Create design.md with architecture decisions"}),e.jsx("li",{children:"Design UI mockups and component library"}),e.jsx("li",{children:"Plan data models and API contracts"})]})]}),duration:"1 week"},{title:"Implementation",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Build the product following the specification and design."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Break work into tasks using implementation-plan.md"}),e.jsx("li",{children:"Develop features iteratively with testing"}),e.jsx("li",{children:"Conduct code reviews and quality checks"})]})]}),duration:"2-4 weeks"}],s={args:{steps:d},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},r={args:{steps:h},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},a={args:{steps:d,variant:"compact"},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},i={args:{steps:d,variant:"cards"},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},o={args:{steps:d,showNumbers:!1},decorators:[t=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(t,{})})]},l={args:{steps:[{title:"Plan",content:"Define requirements"},{title:"Design",content:"Create architecture"},{title:"Build",content:"Implement features"},{title:"Test",content:"Verify quality"},{title:"Deploy",content:"Ship to production"}],orientation:"horizontal"},decorators:[t=>e.jsx("div",{style:{maxWidth:"900px"},children:e.jsx(t,{})})]},c={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",marginBottom:"16px",color:"#1C1C1E"},children:"Getting Started with SDD"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"Specification-Driven Development (SDD) is a methodology that emphasizes clear documentation before implementation. Follow these steps to get started:"}),e.jsx(m,{steps:h}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginTop:"24px"},children:"By following this process, you will have a clear understanding of what you are building and why, reducing rework and improving quality."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    steps: detailedSteps
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    variant: 'compact'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    variant: 'cards'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    showNumbers: false
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Plan',
      content: 'Define requirements'
    }, {
      title: 'Design',
      content: 'Create architecture'
    }, {
      title: 'Build',
      content: 'Implement features'
    }, {
      title: 'Test',
      content: 'Verify quality'
    }, {
      title: 'Deploy',
      content: 'Ship to production'
    }],
    orientation: 'horizontal'
  },
  decorators: [Story => <div style={{
    maxWidth: '900px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Getting Started with SDD
      </h2>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Specification-Driven Development (SDD) is a methodology that emphasizes clear documentation
        before implementation. Follow these steps to get started:
      </p>

      <StepByStep steps={detailedSteps} />

      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginTop: '24px'
    }}>
        By following this process, you will have a clear understanding of what you are building
        and why, reducing rework and improving quality.
      </p>
    </article>
}`,...c.parameters?.docs?.source}}};const N=["Default","WithDuration","Compact","Cards","WithoutNumbers","Horizontal","InArticle"];export{i as Cards,a as Compact,s as Default,l as Horizontal,c as InArticle,r as WithDuration,o as WithoutNumbers,N as __namedExportsOrder,_ as default};
