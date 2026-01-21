import{j as a}from"./iframe-B_omF_R9.js";/* empty css                     */import"./preload-helper-Ct5FWWRu.js";function c({name:e,avatar:m,href:p,publishedAt:r,readTime:t,className:h=""}){const x=["fn-author-byline",h].filter(Boolean).join(" "),y=g=>new Date(g).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),u=a.jsxs(a.Fragment,{children:[m&&a.jsx("img",{src:m,alt:e,className:"fn-author-byline__avatar"}),a.jsx("span",{className:"fn-author-byline__name",children:e})]});return a.jsxs("div",{className:x,children:[p?a.jsx("a",{href:p,className:"fn-author-byline__link",children:u}):a.jsx("span",{className:"fn-author-byline__author",children:u}),(r||t)&&a.jsxs("div",{className:"fn-author-byline__meta",children:[r&&a.jsx("span",{className:"fn-author-byline__date",children:y(r)}),r&&t&&a.jsx("span",{className:"fn-author-byline__separator",children:"·"}),t&&a.jsxs("span",{className:"fn-author-byline__read-time",children:[t," min read"]})]})]})}c.__docgenInfo={description:`AuthorByline - Compact inline author credit

Displays author avatar, name, and optional publication metadata.
Used in article headers and post listings.`,methods:[],displayName:"AuthorByline",props:{name:{required:!0,tsType:{name:"string"},description:"Author name"},avatar:{required:!1,tsType:{name:"string"},description:"Author avatar URL"},href:{required:!1,tsType:{name:"string"},description:"Link to author page"},publishedAt:{required:!1,tsType:{name:"string"},description:"Publication date (ISO string)"},readTime:{required:!1,tsType:{name:"number"},description:"Read time in minutes"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const j={title:"Blog/AuthorByline",component:c,parameters:{layout:"padded",docs:{description:{component:"Compact inline author credit for article headers and listings."}}},tags:["autodocs"]},s={args:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan",publishedAt:"2026-01-15T10:00:00Z",readTime:8},decorators:[e=>a.jsx("div",{style:{maxWidth:"400px"},children:a.jsx(e,{})})]},n={args:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan",href:"/author/ruslan-faion",publishedAt:"2026-01-15T10:00:00Z",readTime:8},decorators:[e=>a.jsx("div",{style:{maxWidth:"400px"},children:a.jsx(e,{})})]},i={args:{name:"Anonymous Author",publishedAt:"2026-01-15T10:00:00Z",readTime:5},decorators:[e=>a.jsx("div",{style:{maxWidth:"400px"},children:a.jsx(e,{})})]},o={args:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan"},decorators:[e=>a.jsx("div",{style:{maxWidth:"400px"},children:a.jsx(e,{})})]},d={args:{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan",publishedAt:"2026-01-15T10:00:00Z"},decorators:[e=>a.jsx("div",{style:{maxWidth:"400px"},children:a.jsx(e,{})})]},l={render:()=>a.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[a.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",fontWeight:600,color:"#5D1F2D",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"12px"},children:"Product"}),a.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"36px",fontWeight:700,lineHeight:1.2,color:"#1C1C1E",marginBottom:"16px"},children:"Building Your First MVP: A Complete Guide"}),a.jsx("p",{style:{fontSize:"18px",lineHeight:1.6,color:"#4A4A4A",marginBottom:"24px"},children:"Learn the step-by-step process of building a minimum viable product that validates your business idea without wasting time or resources."}),a.jsx(c,{name:"Ruslan Faion",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan",href:"/author/ruslan-faion",publishedAt:"2026-01-15T10:00:00Z",readTime:8})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
    publishedAt: '2026-01-15T10:00:00Z',
    readTime: 8
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
    href: '/author/ruslan-faion',
    publishedAt: '2026-01-15T10:00:00Z',
    readTime: 8
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Anonymous Author',
    publishedAt: '2026-01-15T10:00:00Z',
    readTime: 5
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan'
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ruslan Faion',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan',
    publishedAt: '2026-01-15T10:00:00Z'
  },
  decorators: [Story => <div style={{
    maxWidth: '400px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: 600,
      color: '#5D1F2D',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '12px'
    }}>
        Product
      </p>
      <h1 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1C1C1E',
      marginBottom: '16px'
    }}>
        Building Your First MVP: A Complete Guide
      </h1>
      <p style={{
      fontSize: '18px',
      lineHeight: 1.6,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        Learn the step-by-step process of building a minimum viable product
        that validates your business idea without wasting time or resources.
      </p>
      <AuthorByline name="Ruslan Faion" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=ruslan" href="/author/ruslan-faion" publishedAt="2026-01-15T10:00:00Z" readTime={8} />
    </article>
}`,...l.parameters?.docs?.source}}};const S=["Default","WithLink","WithoutAvatar","NameOnly","DateOnly","InArticleHeader"];export{d as DateOnly,s as Default,l as InArticleHeader,o as NameOnly,n as WithLink,i as WithoutAvatar,S as __namedExportsOrder,j as default};
