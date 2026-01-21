import{j as e}from"./iframe-B_omF_R9.js";/* empty css                      */import"./preload-helper-Ct5FWWRu.js";const x=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"currentColor"}),e.jsx("path",{d:"M9 12l2 2 4-4",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});function s({showLabel:p=!0,labelText:u="Verified",tooltip:m="This review is from a verified customer",size:f="md",variant:g="default"}){return e.jsxs("span",{className:`fn-verified fn-verified--${f} fn-verified--${g}`,title:m,children:[e.jsx("span",{className:"fn-verified__icon",children:e.jsx(x,{})}),p&&e.jsx("span",{className:"fn-verified__label",children:u})]})}s.__docgenInfo={description:`VerifiedBadge - Verification indicator

Shows verified status for testimonials and reviews.
Follows the "Digital Journal" theme.`,methods:[],displayName:"VerifiedBadge",props:{showLabel:{required:!1,tsType:{name:"boolean"},description:"Show text label",defaultValue:{value:"true",computed:!1}},labelText:{required:!1,tsType:{name:"string"},description:"Custom label text",defaultValue:{value:"'Verified'",computed:!1}},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text",defaultValue:{value:"'This review is from a verified customer'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'subtle'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'subtle'"}]},description:"Badge variant",defaultValue:{value:"'default'",computed:!1}}}};const b={title:"Testimonial/VerifiedBadge",component:s,parameters:{layout:"centered",docs:{description:{component:"Verified badge component for testimonials and reviews with checkmark icon."}}},tags:["autodocs"]},a={args:{showLabel:!0,labelText:"Verified"}},r={args:{showLabel:!1,tooltip:"Verified customer"}},i={args:{labelText:"Verified Purchase"}},t={args:{size:"sm"}},l={args:{size:"lg"}},n={args:{variant:"outlined"}},o={args:{variant:"subtle"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{width:"80px"},children:"Default:"}),e.jsx(s,{variant:"default"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{width:"80px"},children:"Outlined:"}),e.jsx(s,{variant:"outlined"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{width:"80px"},children:"Subtle:"}),e.jsx(s,{variant:"subtle"})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: true,
    labelText: 'Verified'
  }
}`,...a.parameters?.docs?.source},description:{story:"Default verified badge",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    tooltip: 'Verified customer'
  }
}`,...r.parameters?.docs?.source},description:{story:"Icon only (no label)",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    labelText: 'Verified Purchase'
  }
}`,...i.parameters?.docs?.source},description:{story:"Custom label",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...t.parameters?.docs?.source},description:{story:"Small size",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...l.parameters?.docs?.source},description:{story:"Large size",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...n.parameters?.docs?.source},description:{story:"Outlined variant",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'subtle'
  }
}`,...o.parameters?.docs?.source},description:{story:"Subtle variant",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span style={{
        width: '80px'
      }}>Default:</span>
        <VerifiedBadge variant="default" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span style={{
        width: '80px'
      }}>Outlined:</span>
        <VerifiedBadge variant="outlined" />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span style={{
        width: '80px'
      }}>Subtle:</span>
        <VerifiedBadge variant="subtle" />
      </div>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"All variants",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  }}>
      <VerifiedBadge size="sm" />
      <VerifiedBadge size="md" />
      <VerifiedBadge size="lg" />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"All sizes",...c.parameters?.docs?.description}}};const V=["Default","IconOnly","CustomLabel","SmallSize","LargeSize","Outlined","Subtle","AllVariants","AllSizes"];export{c as AllSizes,d as AllVariants,i as CustomLabel,a as Default,r as IconOnly,l as LargeSize,n as Outlined,t as SmallSize,o as Subtle,V as __namedExportsOrder,b as default};
