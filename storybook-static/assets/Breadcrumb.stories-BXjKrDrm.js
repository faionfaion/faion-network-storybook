import{r as c,a as v,j as e}from"./iframe-B_omF_R9.js";import{c as E}from"./index-CphaJNQg.js";/* empty css                   */import{c as L}from"./createLucideIcon-RZ8yy1X5.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],P=L("chevron-right",C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],D=L("ellipsis",T);var A=Symbol.for("react.lazy"),_=v[" use ".trim().toString()];function $(r){return typeof r=="object"&&r!==null&&"then"in r}function S(r){return r!=null&&typeof r=="object"&&"$$typeof"in r&&r.$$typeof===A&&"_payload"in r&&$(r._payload)}function V(r){const a=F(r),t=c.forwardRef((s,n)=>{let{children:i,...u}=s;S(i)&&typeof _=="function"&&(i=_(i._payload));const l=c.Children.toArray(i),f=l.find(q);if(f){const b=f.props.children,k=l.map(I=>I===f?c.Children.count(b)>1?c.Children.only(null):c.isValidElement(b)?b.props.children:null:I);return e.jsx(a,{...u,ref:n,children:c.isValidElement(b)?c.cloneElement(b,void 0,k):null})}return e.jsx(a,{...u,ref:n,children:i})});return t.displayName=`${r}.Slot`,t}var w=V("Slot");function F(r){const a=c.forwardRef((t,s)=>{let{children:n,...i}=t;if(S(n)&&typeof _=="function"&&(n=_(n._payload)),c.isValidElement(n)){const u=z(n),l=W(i,n.props);return n.type!==c.Fragment&&(l.ref=s?E(s,u):u),c.cloneElement(n,l)}return c.Children.count(n)>1?c.Children.only(null):null});return a.displayName=`${r}.SlotClone`,a}var R=Symbol("radix.slottable");function q(r){return c.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===R}function W(r,a){const t={...a};for(const s in a){const n=r[s],i=a[s];/^on[A-Z]/.test(s)?n&&i?t[s]=(...l)=>{const f=i(...l);return n(...l),f}:n&&(t[s]=n):s==="style"?t[s]={...n,...i}:s==="className"&&(t[s]=[n,i].filter(Boolean).join(" "))}return{...r,...t}}function z(r){let a=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,t=a&&"isReactWarning"in a&&a.isReactWarning;return t?r.ref:(a=Object.getOwnPropertyDescriptor(r,"ref")?.get,t=a&&"isReactWarning"in a&&a.isReactWarning,t?r.props.ref:r.props.ref||r.ref)}function p({className:r="",...a}){return e.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",className:`fn-breadcrumb ${r}`,...a})}function h({className:r="",...a}){return e.jsx("ol",{"data-slot":"breadcrumb-list",className:`fn-breadcrumb-list ${r}`,...a})}function o({className:r="",...a}){return e.jsx("li",{"data-slot":"breadcrumb-item",className:`fn-breadcrumb-item ${r}`,...a})}function m({asChild:r,className:a="",...t}){const s=r?w:"a";return e.jsx(s,{"data-slot":"breadcrumb-link",className:`fn-breadcrumb-link ${a}`,...t})}function x({className:r="",...a}){return e.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:`fn-breadcrumb-page ${r}`,...a})}function d({children:r,className:a="",...t}){return e.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:`fn-breadcrumb-separator ${a}`,...t,children:r??e.jsx(P,{})})}function N({className:r="",...a}){return e.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:`fn-breadcrumb-ellipsis ${r}`,...a,children:[e.jsx(D,{}),e.jsx("span",{className:"fn-sr-only",children:"More"})]})}p.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};x.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const J={title:"Components/Breadcrumb",component:p,parameters:{layout:"padded",docs:{description:{component:'Navigation breadcrumbs following the Faion "Digital Journal" aesthetic. Uses burgundy accent for links and clean typography. Pure CSS implementation.'}}},tags:["autodocs"]},g={render:()=>e.jsx(p,{children:e.jsxs(h,{children:[e.jsx(o,{children:e.jsx(m,{href:"#",children:"Головна"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(m,{href:"#",children:"Документація"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(x,{children:"Типографіка"})})]})})},B={name:"With Ellipsis (Long Path)",render:()=>e.jsx(p,{children:e.jsxs(h,{children:[e.jsx(o,{children:e.jsx(m,{href:"#",children:"Головна"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(N,{})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(m,{href:"#",children:"Компоненти"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(x,{children:"Кнопки"})})]})})},y={name:"Two Levels",render:()=>e.jsx(p,{children:e.jsxs(h,{children:[e.jsx(o,{children:e.jsx(m,{href:"#",children:"Методології"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(x,{children:"SDD Framework"})})]})})},j={name:"In Page Context",render:()=>e.jsxs("div",{className:"fn-page-context",children:[e.jsx(p,{children:e.jsxs(h,{children:[e.jsx(o,{children:e.jsx(m,{href:"#",children:"Головна"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(m,{href:"#",children:"Документація"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(x,{children:"Design System"})})]})}),e.jsx("h1",{className:"fn-page-context__title",children:"Design System Documentation"}),e.jsx("p",{className:"fn-page-context__text",children:"Breadcrumbs provide context and navigation hierarchy for the current page."})]}),decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-page-context {
            background-color: #FAF9F6;
            padding: 24px;
          }
          .fn-page-context__title {
            font-family: Georgia, serif;
            font-size: 36px;
            color: #1C1C1E;
            margin-top: 24px;
            margin-bottom: 16px;
          }
          .fn-page-context__text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
          }
        `}),e.jsx(r,{})]})]};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Головна</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Документація</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Типографіка</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With Ellipsis (Long Path)',
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Головна</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Компоненти</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Кнопки</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...B.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Two Levels',
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Методології</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>SDD Framework</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'In Page Context',
  render: () => <div className="fn-page-context">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Головна</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Документація</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Design System</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="fn-page-context__title">Design System Documentation</h1>
      <p className="fn-page-context__text">
        Breadcrumbs provide context and navigation hierarchy for the current page.
      </p>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-page-context {
            background-color: #FAF9F6;
            padding: 24px;
          }
          .fn-page-context__title {
            font-family: Georgia, serif;
            font-size: 36px;
            color: #1C1C1E;
            margin-top: 24px;
            margin-bottom: 16px;
          }
          .fn-page-context__text {
            font-family: Inter, sans-serif;
            font-size: 16px;
            color: #4A4A4A;
            line-height: 1.7;
          }
        \`}</style>
        <Story />
      </>]
}`,...j.parameters?.docs?.source}}};const M=["Default","WithEllipsis","TwoLevels","InPageContext"];export{g as Default,j as InPageContext,y as TwoLevels,B as WithEllipsis,M as __namedExportsOrder,J as default};
