import{j as e,r as L}from"./iframe-B_omF_R9.js";/* empty css                   */import"./preload-helper-Ct5FWWRu.js";const T=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),B=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),R=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polyline",{points:"11 17 6 12 11 7"}),e.jsx("polyline",{points:"18 17 13 12 18 7"})]}),q=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polyline",{points:"13 17 18 12 13 7"}),e.jsx("polyline",{points:"6 17 11 12 6 7"})]}),M=(a,n,s)=>{if(s*2+5>=n)return Array.from({length:n},(t,u)=>u+1);const i=Math.max(a-s,1),l=Math.min(a+s,n),c=i>2,m=l<n-1;if(!c&&m){const t=3+2*s;return[...Array.from({length:t},(f,g)=>g+1),"ellipsis",n]}if(c&&!m){const t=3+2*s;return[1,"ellipsis",...Array.from({length:t},(f,g)=>n-t+g+1)]}return c&&m?[1,"ellipsis",...Array.from({length:l-i+1},(u,f)=>i+f),"ellipsis",n]:[]};function d({currentPage:a,totalPages:n,onPageChange:s,siblingCount:x=1,showFirstLast:i=!0,showPrevNext:l=!0,variant:c="default",size:m="md",disabled:t=!1,className:u=""}){if(n<=1)return null;const f=M(a,n,x),g=a===1,N=a===n,p=r=>{!t&&r!==a&&r>=1&&r<=n&&s(r)},k=["fn-pagination",`fn-pagination--${c}`,`fn-pagination--${m}`,t&&"fn-pagination--disabled",u].filter(Boolean).join(" ");return c==="simple"?e.jsxs("nav",{className:k,"aria-label":"Pagination",children:[e.jsxs("button",{type:"button",className:"fn-pagination__button fn-pagination__button--prev",onClick:()=>p(a-1),disabled:t||g,"aria-label":"Previous page",children:[e.jsx(T,{}),e.jsx("span",{children:"Previous"})]}),e.jsxs("span",{className:"fn-pagination__info",children:["Page ",a," of ",n]}),e.jsxs("button",{type:"button",className:"fn-pagination__button fn-pagination__button--next",onClick:()=>p(a+1),disabled:t||N,"aria-label":"Next page",children:[e.jsx("span",{children:"Next"}),e.jsx(B,{})]})]}):e.jsxs("nav",{className:k,"aria-label":"Pagination",children:[i&&e.jsx("button",{type:"button",className:"fn-pagination__button fn-pagination__button--first",onClick:()=>p(1),disabled:t||g,"aria-label":"First page",children:e.jsx(R,{})}),l&&e.jsx("button",{type:"button",className:"fn-pagination__button fn-pagination__button--prev",onClick:()=>p(a-1),disabled:t||g,"aria-label":"Previous page",children:e.jsx(T,{})}),c!=="compact"&&e.jsx("div",{className:"fn-pagination__pages",children:f.map((r,E)=>r==="ellipsis"?e.jsx("span",{className:"fn-pagination__ellipsis",children:"..."},`ellipsis-${E}`):e.jsx("button",{type:"button",className:`fn-pagination__page ${r===a?"fn-pagination__page--active":""}`,onClick:()=>p(r),disabled:t,"aria-label":`Page ${r}`,"aria-current":r===a?"page":void 0,children:r},r))}),c==="compact"&&e.jsxs("span",{className:"fn-pagination__info",children:[a," / ",n]}),l&&e.jsx("button",{type:"button",className:"fn-pagination__button fn-pagination__button--next",onClick:()=>p(a+1),disabled:t||N,"aria-label":"Next page",children:e.jsx(B,{})}),i&&e.jsx("button",{type:"button",className:"fn-pagination__button fn-pagination__button--last",onClick:()=>p(n),disabled:t||N,"aria-label":"Last page",children:e.jsx(q,{})})]})}d.__docgenInfo={description:`Pagination - Page navigation component

Supports prev/next, first/last, and numbered page buttons.`,methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"Current page (1-indexed)"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes"},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of page buttons to show",defaultValue:{value:"1",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"Show first/last buttons",defaultValue:{value:"true",computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:"Show prev/next buttons",defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'simple'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'simple'"}]},description:"Variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const W={title:"Content/Pagination",component:d,parameters:{layout:"centered",docs:{description:{component:"Page navigation component with support for prev/next, first/last, and numbered page buttons."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","compact","simple"],description:"Pagination variant"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},showFirstLast:{control:"boolean",description:"Show first/last buttons"},showPrevNext:{control:"boolean",description:"Show prev/next buttons"},disabled:{control:"boolean",description:"Disabled state"}}},o=a=>{const[n,s]=L.useState(a.currentPage||1);return e.jsx(d,{...a,currentPage:n,totalPages:a.totalPages||10,onPageChange:s})},P={render:a=>e.jsx(o,{...a}),args:{currentPage:1,totalPages:10}},h={render:a=>e.jsx(o,{...a}),args:{currentPage:5,totalPages:10}},v={render:a=>e.jsx(o,{...a}),args:{currentPage:10,totalPages:10}},y={render:a=>e.jsx(o,{...a}),args:{currentPage:50,totalPages:100,siblingCount:2}},b={render:a=>e.jsx(o,{...a}),args:{currentPage:2,totalPages:5}},j={render:a=>e.jsx(o,{...a}),args:{currentPage:5,totalPages:20,variant:"compact"}},S={render:a=>e.jsx(o,{...a}),args:{currentPage:3,totalPages:10,variant:"simple"},decorators:[a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{})})]},C={render:a=>e.jsx(o,{...a}),args:{currentPage:5,totalPages:10,size:"sm"}},_={render:a=>e.jsx(o,{...a}),args:{currentPage:5,totalPages:10,size:"lg"}},A={render:a=>e.jsx(o,{...a}),args:{currentPage:5,totalPages:10,showFirstLast:!1}},F={render:a=>e.jsx(o,{...a}),args:{currentPage:5,totalPages:10,showFirstLast:!1,variant:"compact"}},I={args:{currentPage:5,totalPages:10,disabled:!0,onPageChange:()=>{}}},w={render:()=>{const[a,n]=L.useState(1),s=8,x=Array.from({length:6},(i,l)=>({title:`Article ${(a-1)*6+l+1}`,excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}));return e.jsxs("div",{style:{width:"800px"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",marginBottom:"32px"},children:x.map((i,l)=>e.jsxs("div",{style:{padding:"16px",background:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"16px",margin:"0 0 8px",color:"#1C1C1E"},children:i.title}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"13px",color:"#4A4A4A",margin:0},children:i.excerpt})]},l))}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(d,{currentPage:a,totalPages:s,onPageChange:n})})]})}},z={render:()=>{const[a,n]=L.useState(5);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Small"}),e.jsx(d,{currentPage:a,totalPages:10,onPageChange:n,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Medium"}),e.jsx(d,{currentPage:a,totalPages:10,onPageChange:n,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",marginBottom:"8px"},children:"Large"}),e.jsx(d,{currentPage:a,totalPages:10,onPageChange:n,size:"lg"})]})]})}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10
  }
}`,...P.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 10,
    totalPages: 10
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 50,
    totalPages: 100,
    siblingCount: 2
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 2,
    totalPages: 5
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'compact'
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'simple'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    size: 'sm'
  }
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    size: 'lg'
  }
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false
  }
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationInteractive {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
    variant: 'compact'
  }
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
    onPageChange: () => {}
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 8;

    // Mock articles
    const articles = Array.from({
      length: 6
    }, (_, i) => ({
      title: \`Article \${(currentPage - 1) * 6 + i + 1}\`,
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }));
    return <div style={{
      width: '800px'
    }}>
        {/* Article grid */}
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '32px'
      }}>
          {articles.map((article, i) => <div key={i} style={{
          padding: '16px',
          background: '#FFFFFF',
          border: '1px solid #E5E5E0',
          borderRadius: '8px'
        }}>
              <h3 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '16px',
            margin: '0 0 8px',
            color: '#1C1C1E'
          }}>
                {article.title}
              </h3>
              <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#4A4A4A',
            margin: 0
          }}>
                {article.excerpt}
              </p>
            </div>)}
        </div>

        {/* Pagination */}
        <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(5);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'center'
    }}>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Small</p>
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="sm" />
        </div>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Medium</p>
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="md" />
        </div>
        <div>
          <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#4A4A4A',
          marginBottom: '8px'
        }}>Large</p>
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} size="lg" />
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const O=["Default","MiddlePage","LastPage","ManyPages","FewPages","Compact","Simple","SmallSize","LargeSize","NoFirstLast","OnlyArrows","Disabled","InArticleList","AllSizes"];export{z as AllSizes,j as Compact,P as Default,I as Disabled,b as FewPages,w as InArticleList,_ as LargeSize,v as LastPage,y as ManyPages,h as MiddlePage,A as NoFirstLast,F as OnlyArrows,S as Simple,C as SmallSize,O as __namedExportsOrder,W as default};
