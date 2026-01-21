import{j as e}from"./iframe-B_omF_R9.js";/* empty css                      */const d=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),u=a=>a<1?"< 1 min read":a===1?"1 min read":`${a} min read`;function o({minutes:a,size:n="medium",showIcon:i=!0,icon:r,formatLabel:t=u,showBackground:s=!1,className:m=""}){const l=["fn-read-time-badge",n!=="medium"&&`fn-read-time-badge--${n}`,s&&"fn-read-time-badge--background",m].filter(Boolean).join(" ");return e.jsxs("span",{className:l,children:[i&&e.jsx("span",{className:"fn-read-time-badge__icon",children:r||e.jsx(d,{})}),e.jsx("span",{children:t(a)})]})}o.__docgenInfo={description:`ReadTimeBadge - Estimated read time indicator

Displays clock icon with estimated reading time in minutes.`,methods:[],displayName:"ReadTimeBadge",props:{minutes:{required:!0,tsType:{name:"number"},description:"Read time in minutes"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon"},formatLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(minutes: number) => string",signature:{arguments:[{type:{name:"number"},name:"minutes"}],return:{name:"string"}}},description:"Custom label format",defaultValue:{value:`(minutes: number): string => {
  if (minutes < 1) {
    return '< 1 min read';
  }
  if (minutes === 1) {
    return '1 min read';
  }
  return \`\${minutes} min read\`;
}`,computed:!1}},showBackground:{required:!1,tsType:{name:"boolean"},description:"Show background",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};export{o as R};
