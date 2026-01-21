import{j as e,r as x}from"./iframe-B_omF_R9.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";function g({categories:t,activeCategory:o,onChange:r,showAll:m=!0,className:p=""}){const u=["fn-category-nav",p].filter(Boolean).join(" "),y=t.reduce((a,v)=>a+v.count,0);return e.jsx("nav",{className:u,"aria-label":"Blog categories",children:e.jsxs("ul",{className:"fn-category-nav__list",children:[m&&e.jsx("li",{className:"fn-category-nav__item",children:e.jsxs("button",{type:"button",className:`fn-category-nav__button ${o?"":"fn-category-nav__button--active"}`,onClick:()=>r(""),"aria-current":o?void 0:"true",children:[e.jsx("span",{className:"fn-category-nav__name",children:"All"}),e.jsx("span",{className:"fn-category-nav__count",children:y})]})}),t.map(a=>e.jsx("li",{className:"fn-category-nav__item",children:e.jsxs("button",{type:"button",className:`fn-category-nav__button ${o===a.id?"fn-category-nav__button--active":""}`,onClick:()=>r(a.id),"aria-current":o===a.id?"true":void 0,children:[e.jsx("span",{className:"fn-category-nav__name",children:a.name}),e.jsx("span",{className:"fn-category-nav__count",children:a.count})]})},a.id))]})})}g.__docgenInfo={description:`CategoryNav - Category filter navigation for blog

Displays a horizontal list of category pills for filtering blog posts.
Includes optional "All" category and post counts.`,methods:[],displayName:"CategoryNav",props:{categories:{required:!0,tsType:{name:"Array",elements:[{name:"Category"}],raw:"Category[]"},description:"List of categories"},activeCategory:{required:!1,tsType:{name:"string"},description:"Currently active category ID"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(categoryId: string) => void",signature:{arguments:[{type:{name:"string"},name:"categoryId"}],return:{name:"void"}}},description:"Callback when category changes"},showAll:{required:!1,tsType:{name:"boolean"},description:'Show "All" option',defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const S={title:"Blog/CategoryNav",component:g,parameters:{layout:"padded",docs:{description:{component:"Category filter navigation with post counts for blog listing pages."}}},tags:["autodocs"]},n=[{id:"product",name:"Product",count:15},{id:"sdd",name:"SDD",count:12},{id:"marketing",name:"Marketing",count:8},{id:"ai-ml",name:"AI/ML",count:20},{id:"development",name:"Development",count:35},{id:"devops",name:"DevOps",count:10}],s={args:{categories:n,onChange:t=>console.log("Selected category:",t)},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},i={args:{categories:n,activeCategory:"ai-ml",onChange:t=>console.log("Selected category:",t)},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},c={args:{categories:n,showAll:!1,onChange:t=>console.log("Selected category:",t)},decorators:[t=>e.jsx("div",{style:{maxWidth:"800px"},children:e.jsx(t,{})})]},l={args:{categories:n.slice(0,3),onChange:t=>console.log("Selected category:",t)},decorators:[t=>e.jsx("div",{style:{maxWidth:"500px"},children:e.jsx(t,{})})]},d={render:function(){const[o,r]=x.useState("");return e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx(g,{categories:n,activeCategory:o,onChange:r}),e.jsxs("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginTop:"16px"},children:["Selected: ",o||"All"]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    onChange: id => console.log('Selected category:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    activeCategory: 'ai-ml',
    onChange: id => console.log('Selected category:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories,
    showAll: false,
    onChange: id => console.log('Selected category:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '800px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    categories: sampleCategories.slice(0, 3),
    onChange: id => console.log('Selected category:', id)
  },
  decorators: [Story => <div style={{
    maxWidth: '500px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function InteractiveCategoryNav() {
    const [activeCategory, setActiveCategory] = useState<string>('');
    return <div style={{
      maxWidth: '800px'
    }}>
        <CategoryNav categories={sampleCategories} activeCategory={activeCategory} onChange={setActiveCategory} />
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        marginTop: '16px'
      }}>
          Selected: {activeCategory || 'All'}
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const _=["Default","WithActiveCategory","WithoutAll","FewCategories","Interactive"];export{s as Default,l as FewCategories,d as Interactive,i as WithActiveCategory,c as WithoutAll,_ as __namedExportsOrder,S as default};
