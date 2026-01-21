import{j as t,r as d}from"./iframe-B_omF_R9.js";import{Q as i}from"./QuestionStep-DQpofJmC.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                     */const x={title:"TestimonialForm/QuestionStep",component:i,parameters:{layout:"padded",docs:{description:{component:"Single question step in the guided testimonial flow."}}},tags:["autodocs"]},r={id:"feature",question:"What feature did you find most valuable?",options:[{label:"SDD Methodology",value:"sdd"},{label:"AI Agents",value:"agents"},{label:"Marketing Strategies",value:"marketing"},{label:"Product Development",value:"product"}],allowCustom:!0},c={id:"recommendation",question:"Would you recommend Faion Network to a friend?",options:[{label:"Yes, definitely!",value:"yes"},{label:"Maybe, depends on their needs",value:"maybe"},{label:"Not sure yet",value:"not_sure"}],allowCustom:!1},o={args:{question:r,value:"",onChange:e=>console.log("Selected:",e)},decorators:[e=>t.jsx("div",{style:{maxWidth:"500px"},children:t.jsx(e,{})})]},n={args:{question:r,value:"agents",onChange:e=>console.log("Selected:",e)},decorators:[e=>t.jsx("div",{style:{maxWidth:"500px"},children:t.jsx(e,{})})]},s={args:{question:c,value:"",onChange:e=>console.log("Selected:",e)},decorators:[e=>t.jsx("div",{style:{maxWidth:"500px"},children:t.jsx(e,{})})]},a={render:function(){const[l,u]=d.useState("");return t.jsxs("div",{style:{maxWidth:"500px"},children:[t.jsx(i,{question:r,value:l,onChange:u}),t.jsxs("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginTop:"16px"},children:["Selected value: ",t.jsx("strong",{children:l||"(none)"})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    question: sampleQuestion,
    value: '',
    onChange: value => console.log('Selected:', value)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    question: sampleQuestion,
    value: 'agents',
    onChange: value => console.log('Selected:', value)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    question: simpleQuestion,
    value: '',
    onChange: value => console.log('Selected:', value)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function InteractiveQuestionStep() {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: '500px'
    }}>
        <QuestionStep question={sampleQuestion} value={value} onChange={setValue} />
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        marginTop: '16px'
      }}>
          Selected value: <strong>{value || '(none)'}</strong>
        </p>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const S=["Default","WithSelectedValue","WithoutCustomOption","Interactive"];export{o as Default,a as Interactive,n as WithSelectedValue,s as WithoutCustomOption,S as __namedExportsOrder,x as default};
