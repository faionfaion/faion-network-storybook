import{j as a}from"./iframe-B_omF_R9.js";import{G as l}from"./GuidedFlow-DAmito9l.js";import"./preload-helper-Ct5FWWRu.js";import"./QuestionStep-DQpofJmC.js";/* empty css                     *//* empty css                   */const c={title:"TestimonialForm/GuidedFlow",component:l,parameters:{layout:"padded",docs:{description:{component:"Multi-step guided testimonial flow with progress indicator."}}},tags:["autodocs"]},s=[{id:"role",question:"What best describes your role?",options:[{label:"Solopreneur / Founder",value:"solopreneur"},{label:"Developer / Engineer",value:"developer"},{label:"Product Manager",value:"pm"},{label:"Designer",value:"designer"}],allowCustom:!0},{id:"feature",question:"What feature did you find most valuable?",options:[{label:"SDD Methodology",value:"sdd"},{label:"AI Agents & Skills",value:"agents"},{label:"Marketing Strategies",value:"marketing"},{label:"Product Development",value:"product"}],allowCustom:!0},{id:"impact",question:"How has Faion Network impacted your work?",options:[{label:"Saved me significant time",value:"time"},{label:"Improved my product quality",value:"quality"},{label:"Helped me launch faster",value:"launch"},{label:"Better organized my workflow",value:"workflow"}],allowCustom:!0},{id:"recommend",question:"Would you recommend Faion Network?",options:[{label:"Yes, to everyone!",value:"yes_all"},{label:"Yes, to solopreneurs",value:"yes_solo"},{label:"Yes, to developers",value:"yes_dev"},{label:"Maybe, depends on use case",value:"maybe"}],allowCustom:!1}],r=e=>`As a ${e.role||"user"}, I found the ${e.feature||"features"} most valuable. It has ${e.impact||"helped me"} in my work. I would definitely ${e.recommend||"recommend it"}!`,o={args:{questions:s,onComplete:e=>console.log("Completed:",e),onGeneratePreview:r},decorators:[e=>a.jsx("div",{style:{maxWidth:"600px"},children:a.jsx(e,{})})]},t={args:{questions:s.slice(0,2),onComplete:e=>console.log("Completed:",e),onGeneratePreview:r},decorators:[e=>a.jsx("div",{style:{maxWidth:"600px"},children:a.jsx(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    onComplete: answers => console.log('Completed:', answers),
    onGeneratePreview: generatePreview
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions.slice(0, 2),
    onComplete: answers => console.log('Completed:', answers),
    onGeneratePreview: generatePreview
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};const v=["Default","TwoQuestions"];export{o as Default,t as TwoQuestions,v as __namedExportsOrder,c as default};
