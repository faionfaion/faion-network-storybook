import{j as r}from"./iframe-B_omF_R9.js";/* empty css                   */import"./preload-helper-Ct5FWWRu.js";const R=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),V=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),A=()=>r.jsxs("svg",{viewBox:"0 0 24 24",children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:"halfGrad",children:[r.jsx("stop",{offset:"50%",stopColor:"currentColor"}),r.jsx("stop",{offset:"50%",stopColor:"transparent"})]})}),r.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"url(#halfGrad)",stroke:"currentColor",strokeWidth:"2"})]});function e({rating:a,maxStars:f=5,size:x="md",halfStars:y=!0,showValue:v=!1,ariaLabel:j}){const h=Math.min(Math.max(0,a),f),w=S=>{const s=h-S;return s>=1?r.jsx(R,{}):y&&s>=.5?r.jsx(A,{}):r.jsx(V,{})},z=j||`Rating: ${h} out of ${f} stars`;return r.jsxs("div",{className:`fn-star-rating fn-star-rating--${x}`,role:"img","aria-label":z,children:[r.jsx("div",{className:"fn-star-rating__stars",children:Array.from({length:f}).map((S,s)=>r.jsx("span",{className:"fn-star-rating__star",children:w(s)},s))}),v&&r.jsx("span",{className:"fn-star-rating__value",children:h.toFixed(1)})]})}e.__docgenInfo={description:`StarRating - Rating display component

Shows 1-5 stars with optional half-star support.
Follows the "Digital Journal" theme.`,methods:[],displayName:"StarRating",props:{rating:{required:!0,tsType:{name:"number"},description:"Rating value (0-5)"},maxStars:{required:!1,tsType:{name:"number"},description:"Maximum stars",defaultValue:{value:"5",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},halfStars:{required:!1,tsType:{name:"boolean"},description:"Show half stars",defaultValue:{value:"true",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"Show numeric value",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Custom aria label"}}};const b={title:"Testimonial/StarRating",component:e,parameters:{layout:"centered",docs:{description:{component:"Star rating display component showing 1-5 stars with optional half-star support."}}},tags:["autodocs"]},t={args:{rating:5}},n={args:{rating:4.5,halfStars:!0}},o={args:{rating:4}},i={args:{rating:3.5,halfStars:!0}},l={args:{rating:2}},c={args:{rating:5,size:"sm"}},p={args:{rating:4.5,size:"lg",halfStars:!0}},d={args:{rating:4.7,showValue:!0,halfStars:!0}},u={args:{rating:4.7,halfStars:!1}},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(e,{rating:5,size:"sm",showValue:!0}),r.jsx(e,{rating:4.5,size:"md",showValue:!0,halfStars:!0}),r.jsx(e,{rating:4,size:"lg",showValue:!0})]})},g={render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[5,4.5,4,3.5,3,2.5,2,1.5,1,.5].map(a=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[r.jsx("span",{style:{width:"30px",textAlign:"right"},children:a}),r.jsx(e,{rating:a,halfStars:!0})]},a))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 5
  }
}`,...t.parameters?.docs?.source},description:{story:"Full 5-star rating",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 4.5,
    halfStars: true
  }
}`,...n.parameters?.docs?.source},description:{story:"4.5 stars with half-star",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 4
  }
}`,...o.parameters?.docs?.source},description:{story:"4 stars",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 3.5,
    halfStars: true
  }
}`,...i.parameters?.docs?.source},description:{story:"3.5 stars",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 2
  }
}`,...l.parameters?.docs?.source},description:{story:"Low rating",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 5,
    size: 'sm'
  }
}`,...c.parameters?.docs?.source},description:{story:"Small size",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 4.5,
    size: 'lg',
    halfStars: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Large size",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 4.7,
    showValue: true,
    halfStars: true
  }
}`,...d.parameters?.docs?.source},description:{story:"With numeric value displayed",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 4.7,
    halfStars: false
  }
}`,...u.parameters?.docs?.source},description:{story:"Without half stars (rounds down)",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <StarRating rating={5} size="sm" showValue />
      <StarRating rating={4.5} size="md" showValue halfStars />
      <StarRating rating={4} size="lg" showValue />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"All sizes comparison",...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5].map(rating => <div key={rating} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        width: '30px',
        textAlign: 'right'
      }}>{rating}</span>
          <StarRating rating={rating} halfStars />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:"All ratings comparison",...g.parameters?.docs?.description}}};const C=["FiveStars","FourAndHalf","FourStars","ThreeAndHalf","LowRating","SmallSize","LargeSize","WithValue","NoHalfStars","AllSizes","AllRatings"];export{g as AllRatings,m as AllSizes,t as FiveStars,n as FourAndHalf,o as FourStars,p as LargeSize,l as LowRating,u as NoHalfStars,c as SmallSize,i as ThreeAndHalf,d as WithValue,C as __namedExportsOrder,b as default};
