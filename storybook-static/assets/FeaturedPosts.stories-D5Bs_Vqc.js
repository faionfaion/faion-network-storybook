import{j as e}from"./iframe-B_omF_R9.js";import{B as l}from"./BlogPostCard-DeDt7VHq.js";/* empty css                      */import"./preload-helper-Ct5FWWRu.js";/* empty css                     */function p({posts:s,title:n="Featured Posts",className:c=""}){const m=["fn-featured-posts",c].filter(Boolean).join(" ");if(s.length===0)return null;const[u,...d]=s;return e.jsxs("section",{className:m,children:[n&&e.jsx("h2",{className:"fn-featured-posts__title",children:n}),e.jsxs("div",{className:"fn-featured-posts__grid",children:[e.jsx("div",{className:"fn-featured-posts__hero",children:e.jsx(l,{...u,className:"fn-featured-posts__hero-card"})}),d.length>0&&e.jsx("div",{className:"fn-featured-posts__sidebar",children:d.slice(0,3).map((g,h)=>e.jsx(l,{...g,className:"fn-featured-posts__sidebar-card"},h))})]})]})}p.__docgenInfo={description:`FeaturedPosts - Featured posts grid section

Displays a grid of featured blog posts with an optional section title.
First post is displayed larger as the hero post.`,methods:[],displayName:"FeaturedPosts",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"BlogPostCardProps"}],raw:"BlogPostCardProps[]"},description:"List of featured posts"},title:{required:!1,tsType:{name:"string"},description:"Section title",defaultValue:{value:"'Featured Posts'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const P={title:"Blog/FeaturedPosts",component:p,parameters:{layout:"padded",docs:{description:{component:"Featured posts grid section with hero post layout."}}},tags:["autodocs"]},i=[{title:"Building Your First MVP: A Complete Guide",excerpt:"Learn the step-by-step process of building a minimum viable product that validates your business idea without wasting time or resources.",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",category:"Product",author:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan"},publishedAt:"2026-01-15T10:00:00Z",readTime:8,href:"/blog/building-first-mvp"},{title:"SDD Methodology Overview",excerpt:"Specification-Driven Development helps you build better software faster.",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",category:"SDD",author:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan"},publishedAt:"2026-01-10T10:00:00Z",readTime:10,href:"/blog/sdd-methodology"},{title:"Marketing for Solopreneurs",excerpt:"How to launch your product with a solid go-to-market strategy.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",category:"Marketing",author:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan"},publishedAt:"2026-01-05T10:00:00Z",readTime:6,href:"/blog/marketing-solopreneurs"},{title:"Understanding RAG Pipelines",excerpt:"From basics to advanced implementation of retrieval-augmented generation.",image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",category:"AI/ML",author:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan"},publishedAt:"2026-01-01T10:00:00Z",readTime:12,href:"/blog/understanding-rag"}],t={args:{posts:i},decorators:[s=>e.jsx("div",{style:{maxWidth:"1200px"},children:e.jsx(s,{})})]},a={args:{posts:i,title:"Latest Articles"},decorators:[s=>e.jsx("div",{style:{maxWidth:"1200px"},children:e.jsx(s,{})})]},r={args:{posts:i.slice(0,2)},decorators:[s=>e.jsx("div",{style:{maxWidth:"1200px"},children:e.jsx(s,{})})]},o={args:{posts:[i[0]],title:"Featured Article"},decorators:[s=>e.jsx("div",{style:{maxWidth:"1200px"},children:e.jsx(s,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts
  },
  decorators: [Story => <div style={{
    maxWidth: '1200px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts,
    title: 'Latest Articles'
  },
  decorators: [Story => <div style={{
    maxWidth: '1200px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    posts: samplePosts.slice(0, 2)
  },
  decorators: [Story => <div style={{
    maxWidth: '1200px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    posts: [samplePosts[0]],
    title: 'Featured Article'
  },
  decorators: [Story => <div style={{
    maxWidth: '1200px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};const S=["Default","CustomTitle","TwoPosts","SinglePost"];export{a as CustomTitle,t as Default,o as SinglePost,r as TwoPosts,S as __namedExportsOrder,P as default};
