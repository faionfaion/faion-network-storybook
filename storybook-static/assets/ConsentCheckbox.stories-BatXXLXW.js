import{j as n,r as i}from"./iframe-B_omF_R9.js";import{C as a}from"./ConsentCheckbox-BFlpLCMP.js";import"./preload-helper-Ct5FWWRu.js";/* empty css                        */const x={title:"TestimonialForm/ConsentCheckbox",component:a,parameters:{layout:"padded",docs:{description:{component:"Consent checkbox for testimonial submission."}}},tags:["autodocs"]},o={args:{checked:!1,onChange:e=>console.log("Checked:",e)},decorators:[e=>n.jsx("div",{style:{maxWidth:"500px"},children:n.jsx(e,{})})]},r={args:{checked:!0,onChange:e=>console.log("Checked:",e)},decorators:[e=>n.jsx("div",{style:{maxWidth:"500px"},children:n.jsx(e,{})})]},s={args:{checked:!1,onChange:e=>console.log("Checked:",e),error:"You must agree to the consent before submitting."},decorators:[e=>n.jsx("div",{style:{maxWidth:"500px"},children:n.jsx(e,{})})]},t={render:function(){const[c,d]=i.useState(!1);return n.jsxs("div",{style:{maxWidth:"500px"},children:[n.jsx(a,{checked:c,onChange:d}),n.jsxs("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginTop:"16px"},children:["Consent given: ",n.jsx("strong",{children:c?"Yes":"No"})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    onChange: checked => console.log('Checked:', checked)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: checked => console.log('Checked:', checked)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    onChange: checked => console.log('Checked:', checked),
    error: 'You must agree to the consent before submitting.'
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function InteractiveConsentCheckbox() {
    const [checked, setChecked] = useState(false);
    return <div style={{
      maxWidth: '500px'
    }}>
        <ConsentCheckbox checked={checked} onChange={setChecked} />
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        marginTop: '16px'
      }}>
          Consent given: <strong>{checked ? 'Yes' : 'No'}</strong>
        </p>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const g=["Default","Checked","WithError","Interactive"];export{r as Checked,o as Default,t as Interactive,s as WithError,g as __namedExportsOrder,x as default};
