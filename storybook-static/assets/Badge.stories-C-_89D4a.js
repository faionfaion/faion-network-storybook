import{r as f,j as e}from"./iframe-B_omF_R9.js";/* empty css              */import{C as x,H as v,T as h,a as y}from"./trending-up-CiqHu9Y3.js";import"./preload-helper-Ct5FWWRu.js";import"./createLucideIcon-RZ8yy1X5.js";const d=f.forwardRef(({children:a,variant:l="neutral",size:r="default",className:i="",...t},n)=>{const u=r!=="default"?`fn-badge--${r}`:"";return e.jsx("span",{ref:n,className:`fn-badge fn-badge--${l} ${u} ${i}`.trim(),...t,children:a})});d.displayName="Badge";const s=f.forwardRef(({level:a,icon:l,className:r="",...i},t)=>{const n={starter:"STARTER",builder:"BUILDER",scaler:"SCALER",geek:"GEEK"};return e.jsxs("span",{ref:t,className:`fn-level-badge fn-level-badge--${a} ${r}`.trim(),...i,children:[l&&e.jsx("span",{className:"fn-level-badge__icon",children:l}),n[a]]})});s.displayName="LevelBadge";const j=f.forwardRef(({status:a,showDot:l=!0,className:r="",children:i,...t},n)=>{const u={active:"Active",pending:"Pending",inactive:"Inactive",error:"Error"};return e.jsxs("span",{ref:n,className:`fn-status-badge fn-status-badge--${a} ${r}`.trim(),...t,children:[l&&e.jsx("span",{className:"fn-status-badge__dot"}),i||u[a]]})});j.displayName="StatusBadge";d.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'neutral' | 'accent' | 'outline' | 'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};s.__docgenInfo={description:"",methods:[],displayName:"LevelBadge",props:{level:{required:!0,tsType:{name:"union",raw:"'starter' | 'builder' | 'scaler' | 'geek'",elements:[{name:"literal",value:"'starter'"},{name:"literal",value:"'builder'"},{name:"literal",value:"'scaler'"},{name:"literal",value:"'geek'"}]},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};j.__docgenInfo={description:"",methods:[],displayName:"StatusBadge",props:{status:{required:!0,tsType:{name:"union",raw:"'active' | 'pending' | 'inactive' | 'error'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'inactive'"},{name:"literal",value:"'error'"}]},description:""},showDot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const z={title:"FAION/Badge",component:d,parameters:{layout:"centered",docs:{description:{component:'Badge components following the Faion "Digital Journal" aesthetic. Includes simple badges and Level Badges (Technical Specification Labels). Pure CSS implementation.'}}},tags:["autodocs"]},c={args:{variant:"neutral",children:"Neutral Badge"}},o={args:{variant:"accent",children:"Accent Badge"}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(d,{variant:"neutral",children:"Neutral"}),e.jsx(d,{variant:"accent",children:"Accent"})]})},m={name:"Level Badges (Complexity Indicators)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(s,{level:"starter",icon:e.jsx(x,{size:14,strokeWidth:1.5})}),e.jsx("span",{className:"fn-badge-desc",children:"Best for beginners"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(s,{level:"builder",icon:e.jsx(v,{size:14,strokeWidth:1.5})}),e.jsx("span",{className:"fn-badge-desc",children:"For those actively building"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(s,{level:"scaler",icon:e.jsx(h,{size:14,strokeWidth:1.5})}),e.jsx("span",{className:"fn-badge-desc",children:"Focused on growth"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(s,{level:"geek",icon:e.jsx(y,{size:14,strokeWidth:1.5})}),e.jsx("span",{className:"fn-badge-desc",children:"Deep technical dives"})]})]}),decorators:[a=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-badge-desc {
            font-family: Inter, sans-serif;
            font-size: 14px;
            color: #4A4A4A;
          }
        `}),e.jsx(a,{})]})]},g={name:"Level Badge Specifications",render:()=>e.jsxs("div",{className:"fn-specs-container",children:[e.jsx("h3",{className:"fn-specs-title",children:"Technical Specifications"}),e.jsxs("ul",{className:"fn-specs-list",children:[e.jsx("li",{children:"Container: Transparent fill, 1px solid border, 6px radius"}),e.jsx("li",{children:"Typography: Uppercase Sans-serif (Inter), 11px, tracking 0.04em"}),e.jsx("li",{children:"Icons: 14px size, 1.5px stroke, outline only"}),e.jsx("li",{children:"Padding: 4px vertical, 8px horizontal"}),e.jsx("li",{children:"Height: 24px"})]}),e.jsxs("div",{style:{marginTop:"24px",display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(s,{level:"starter",icon:e.jsx(x,{size:14,strokeWidth:1.5})}),e.jsx(s,{level:"builder",icon:e.jsx(v,{size:14,strokeWidth:1.5})}),e.jsx(s,{level:"scaler",icon:e.jsx(h,{size:14,strokeWidth:1.5})}),e.jsx(s,{level:"geek",icon:e.jsx(y,{size:14,strokeWidth:1.5})})]})]}),decorators:[a=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-specs-container {
            background-color: #FAF9F6;
            padding: 32px;
            border-radius: 8px;
          }
          .fn-specs-title {
            font-family: Georgia, serif;
            font-size: 20px;
            color: #1C1C1E;
            margin-bottom: 16px;
          }
          .fn-specs-list {
            font-family: Inter, sans-serif;
            font-size: 14px;
            color: #4A4A4A;
            line-height: 2;
            padding-left: 20px;
          }
        `}),e.jsx(a,{})]})]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    children: 'Neutral Badge'
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Accent Badge'
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="accent">Accent</Badge>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Level Badges (Complexity Indicators)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <LevelBadge level="starter" icon={<Circle size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">Best for beginners</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <LevelBadge level="builder" icon={<Hammer size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">For those actively building</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <LevelBadge level="scaler" icon={<TrendingUp size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">Focused on growth</span>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <LevelBadge level="geek" icon={<Cpu size={14} strokeWidth={1.5} />} />
        <span className="fn-badge-desc">Deep technical dives</span>
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-badge-desc {
            font-family: Inter, sans-serif;
            font-size: 14px;
            color: #4A4A4A;
          }
        \`}</style>
        <Story />
      </>]
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Level Badge Specifications',
  render: () => <div className="fn-specs-container">
      <h3 className="fn-specs-title">Technical Specifications</h3>
      <ul className="fn-specs-list">
        <li>Container: Transparent fill, 1px solid border, 6px radius</li>
        <li>Typography: Uppercase Sans-serif (Inter), 11px, tracking 0.04em</li>
        <li>Icons: 14px size, 1.5px stroke, outline only</li>
        <li>Padding: 4px vertical, 8px horizontal</li>
        <li>Height: 24px</li>
      </ul>
      <div style={{
      marginTop: '24px',
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        <LevelBadge level="starter" icon={<Circle size={14} strokeWidth={1.5} />} />
        <LevelBadge level="builder" icon={<Hammer size={14} strokeWidth={1.5} />} />
        <LevelBadge level="scaler" icon={<TrendingUp size={14} strokeWidth={1.5} />} />
        <LevelBadge level="geek" icon={<Cpu size={14} strokeWidth={1.5} />} />
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-specs-container {
            background-color: #FAF9F6;
            padding: 32px;
            border-radius: 8px;
          }
          .fn-specs-title {
            font-family: Georgia, serif;
            font-size: 20px;
            color: #1C1C1E;
            margin-bottom: 16px;
          }
          .fn-specs-list {
            font-family: Inter, sans-serif;
            font-size: 14px;
            color: #4A4A4A;
            line-height: 2;
            padding-left: 20px;
          }
        \`}</style>
        <Story />
      </>]
}`,...g.parameters?.docs?.source}}};const I=["Neutral","Accent","AllBadges","LevelBadges","LevelBadgeSpecs"];export{o as Accent,p as AllBadges,g as LevelBadgeSpecs,m as LevelBadges,c as Neutral,I as __namedExportsOrder,z as default};
