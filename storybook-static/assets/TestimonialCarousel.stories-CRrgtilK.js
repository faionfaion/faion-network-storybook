import{r as n,j as t}from"./iframe-B_omF_R9.js";import{T as F}from"./TestimonialCard-DxAcjI7l.js";/* empty css                            */import"./preload-helper-Ct5FWWRu.js";/* empty css                        */function j({testimonials:i,autoRotateInterval:b=5e3,pauseOnHover:_=!0,showArrows:R=!0,showDots:D=!0,cardVariant:A="default",visibleCards:o=1}){const[r,V]=n.useState(0),[C,x]=n.useState(!1),S=n.useRef(null),q=n.useRef(null),l=Math.max(1,i.length-o+1),c=n.useCallback(a=>{let e=a;e<0&&(e=l-1),e>=l&&(e=0),V(e)},[l]),u=n.useCallback(()=>{c(r+1)},[r,c]),I=n.useCallback(()=>{c(r-1)},[r,c]);n.useEffect(()=>{if(b<=0||C||i.length<=o)return;const a=setInterval(u,b);return()=>clearInterval(a)},[b,C,u,i.length,o]);const N=a=>{S.current=a.touches[0].clientX},O=a=>{if(S.current===null)return;const e=a.changedTouches[0].clientX,k=S.current-e;Math.abs(k)>50&&(k>0?u():I()),S.current=null},M=a=>{a.key==="ArrowLeft"?I():a.key==="ArrowRight"&&u()};return i.length===0?null:t.jsxs("div",{className:"fn-carousel",onMouseEnter:()=>_&&x(!0),onMouseLeave:()=>_&&x(!1),onKeyDown:M,tabIndex:0,role:"region","aria-label":"Testimonials carousel",ref:q,children:[R&&i.length>o&&t.jsx("button",{className:"fn-carousel__arrow fn-carousel__arrow--prev",onClick:I,"aria-label":"Previous testimonial",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("polyline",{points:"15 18 9 12 15 6"})})}),t.jsx("div",{className:"fn-carousel__viewport",children:t.jsx("div",{className:`fn-carousel__track fn-carousel__track--${o}`,style:{transform:`translateX(-${r*(100/o)}%)`},onTouchStart:N,onTouchEnd:O,children:i.map((a,e)=>t.jsx("div",{className:"fn-carousel__slide","aria-hidden":e<r||e>=r+o,children:t.jsx(F,{...a,variant:A})},e))})}),R&&i.length>o&&t.jsx("button",{className:"fn-carousel__arrow fn-carousel__arrow--next",onClick:u,"aria-label":"Next testimonial",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("polyline",{points:"9 18 15 12 9 6"})})}),D&&l>1&&t.jsx("div",{className:"fn-carousel__dots",role:"tablist",children:Array.from({length:l}).map((a,e)=>t.jsx("button",{className:`fn-carousel__dot ${e===r?"fn-carousel__dot--active":""}`,onClick:()=>c(e),role:"tab","aria-selected":e===r,"aria-label":`Go to testimonial ${e+1}`},e))})]})}j.__docgenInfo={description:`TestimonialCarousel - Rotating testimonial display

Shows multiple testimonials with auto-rotation and navigation.
Follows the "Digital Journal" theme.`,methods:[],displayName:"TestimonialCarousel",props:{testimonials:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"TestimonialCardProps"},{name:"literal",value:"'variant'"}],raw:"Omit<TestimonialCardProps, 'variant'>"}],raw:"Omit<TestimonialCardProps, 'variant'>[]"},description:"Array of testimonials"},autoRotateInterval:{required:!1,tsType:{name:"number"},description:"Auto-rotation interval in ms (0 to disable)",defaultValue:{value:"5000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"Pause on hover",defaultValue:{value:"true",computed:!1}},showArrows:{required:!1,tsType:{name:"boolean"},description:"Show navigation arrows",defaultValue:{value:"true",computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"Show dot indicators",defaultValue:{value:"true",computed:!1}},cardVariant:{required:!1,tsType:{name:"union",raw:"'default' | 'featured' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'featured'"},{name:"literal",value:"'compact'"}]},description:"Card variant to use",defaultValue:{value:"'default'",computed:!1}},visibleCards:{required:!1,tsType:{name:"number"},description:"Number of visible cards (1-3)",defaultValue:{value:"1",computed:!1}}}};const W={title:"Testimonial/TestimonialCarousel",component:j,parameters:{layout:"padded",docs:{description:{component:"Carousel component for displaying multiple testimonials with auto-rotation, navigation controls, and touch support."}}},tags:["autodocs"]},s=[{quote:"The SDD methodology completely transformed how I approach building products. I went from endless planning to shipping in weeks.",name:"Alex Chen",role:"Founder",company:"TechStartup",initials:"AC",rating:5,verified:!0},{quote:"Best investment I made for my solopreneur journey. The methodologies are practical and immediately actionable.",name:"Sarah Johnson",role:"Indie Maker",initials:"SJ",rating:5,verified:!0},{quote:"I went from $0 to $15K MRR in 8 months following the product methodologies. The structured approach eliminated my analysis paralysis.",name:"Michael Park",role:"SaaS Founder",company:"CloudTools",initials:"MP",rating:5,verified:!0},{quote:"The AI methodologies helped me build and deploy my first RAG application in just 2 weeks. Incredibly detailed guides.",name:"David Kumar",role:"ML Engineer",company:"DataCorp",initials:"DK",rating:5,verified:!0},{quote:"Finally found a resource that covers both the technical and business aspects of being a solopreneur.",name:"Lisa Thompson",company:"Self-employed",initials:"LT",rating:4}],m={args:{testimonials:s,autoRotateInterval:5e3,pauseOnHover:!0,showArrows:!0,showDots:!0}},d={args:{testimonials:s,visibleCards:2,autoRotateInterval:0}},p={args:{testimonials:s,visibleCards:3,autoRotateInterval:0,cardVariant:"compact"}},h={args:{testimonials:s,autoRotateInterval:0}},f={args:{testimonials:s,showArrows:!1,autoRotateInterval:3e3}},g={args:{testimonials:s,showDots:!1,autoRotateInterval:0}},v={args:{testimonials:s.slice(0,3),cardVariant:"featured",autoRotateInterval:0}},T={args:{testimonials:s,autoRotateInterval:2e3}},y={args:{testimonials:[s[0]]}},w={args:{testimonials:s.slice(0,2)}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials,
    autoRotateInterval: 5000,
    pauseOnHover: true,
    showArrows: true,
    showDots: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Single visible card with auto-rotation",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials,
    visibleCards: 2,
    autoRotateInterval: 0
  }
}`,...d.parameters?.docs?.source},description:{story:"Two visible cards",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials,
    visibleCards: 3,
    autoRotateInterval: 0,
    cardVariant: 'compact'
  }
}`,...p.parameters?.docs?.source},description:{story:"Three visible cards",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials,
    autoRotateInterval: 0
  }
}`,...h.parameters?.docs?.source},description:{story:"Without auto-rotation",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials,
    showArrows: false,
    autoRotateInterval: 3000
  }
}`,...f.parameters?.docs?.source},description:{story:"Without navigation arrows",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials,
    showDots: false,
    autoRotateInterval: 0
  }
}`,...g.parameters?.docs?.source},description:{story:"Without dots",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials.slice(0, 3),
    cardVariant: 'featured',
    autoRotateInterval: 0
  }
}`,...v.parameters?.docs?.source},description:{story:"Featured card variant",...v.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials,
    autoRotateInterval: 2000
  }
}`,...T.parameters?.docs?.source},description:{story:"Fast rotation",...T.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: [sampleTestimonials[0]]
  }
}`,...y.parameters?.docs?.source},description:{story:"Single testimonial",...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    testimonials: sampleTestimonials.slice(0, 2)
  }
}`,...w.parameters?.docs?.source},description:{story:"Two testimonials",...w.parameters?.docs?.description}}};const X=["Default","TwoCards","ThreeCards","ManualOnly","DotsOnly","ArrowsOnly","FeaturedVariant","FastRotation","SingleTestimonial","TwoTestimonials"];export{g as ArrowsOnly,m as Default,f as DotsOnly,T as FastRotation,v as FeaturedVariant,h as ManualOnly,y as SingleTestimonial,p as ThreeCards,d as TwoCards,w as TwoTestimonials,X as __namedExportsOrder,W as default};
