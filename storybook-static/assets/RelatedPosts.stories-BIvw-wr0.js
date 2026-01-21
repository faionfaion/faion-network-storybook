import{j as e}from"./iframe-B_omF_R9.js";/* empty css                     */import"./preload-helper-Ct5FWWRu.js";function c({posts:s,title:d="Related Posts",className:m=""}){const p=["fn-related-posts",m].filter(Boolean).join(" ");return s.length===0?null:e.jsxs("section",{className:p,children:[e.jsx("h3",{className:"fn-related-posts__title",children:d}),e.jsx("div",{className:"fn-related-posts__grid",children:s.slice(0,3).map((t,u)=>e.jsxs("a",{href:t.href,className:"fn-related-posts__item",children:[t.image&&e.jsx("div",{className:"fn-related-posts__image-wrapper",children:e.jsx("img",{src:t.image,alt:t.title,className:"fn-related-posts__image",loading:"lazy"})}),e.jsx("h4",{className:"fn-related-posts__item-title",children:t.title})]},u))})]})}c.__docgenInfo={description:`RelatedPosts - Related posts section

Displays a list of related posts with optional images.
Used at the end of blog posts for content discovery.`,methods:[],displayName:"RelatedPosts",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"RelatedPost"}],raw:"RelatedPost[]"},description:"List of related posts"},title:{required:!1,tsType:{name:"string"},description:"Section title",defaultValue:{value:"'Related Posts'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const x={title:"Blog/RelatedPosts",component:c,parameters:{layout:"padded",docs:{description:{component:"Related posts section for content discovery at the end of blog posts."}}},tags:["autodocs"]},a=[{title:"SDD Methodology: A Complete Overview",href:"/blog/sdd-methodology",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"},{title:"Marketing for Solopreneurs: Go-to-Market Strategy",href:"/blog/marketing-solopreneurs",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"},{title:"Understanding RAG Pipelines: From Basics to Advanced",href:"/blog/understanding-rag",image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"}],o={args:{posts:a},decorators:[s=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(s,{})})]},r={args:{posts:a,title:"You might also like"},decorators:[s=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(s,{})})]},n={args:{posts:a.map(({title:s,href:d})=>({title:s,href:d}))},decorators:[s=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(s,{})})]},i={args:{posts:a.slice(0,2)},decorators:[s=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(s,{})})]},l={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"This concludes our guide to building your first MVP. Remember, the key is to start small, validate early, and iterate based on real user feedback."}),e.jsx(c,{posts:a})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts,
    title: 'You might also like'
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts.map(({
      title,
      href
    }) => ({
      title,
      href
    }))
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts.slice(0, 2)
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        This concludes our guide to building your first MVP. Remember, the key is to
        start small, validate early, and iterate based on real user feedback.
      </p>

      <RelatedPosts posts={samplePosts} />
    </article>
}`,...l.parameters?.docs?.source}}};const y=["Default","CustomTitle","WithoutImages","TwoPosts","InArticle"];export{r as CustomTitle,o as Default,l as InArticle,i as TwoPosts,n as WithoutImages,y as __namedExportsOrder,x as default};
