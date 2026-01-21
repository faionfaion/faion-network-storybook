import{r as c,j as e}from"./iframe-B_omF_R9.js";import{c as $,P as y,a as h,u as B}from"./index-CAE3x1vS.js";import{c as pe,u as q,a as z}from"./index-DuLUcHMv.js";import{u as me}from"./index-CphaJNQg.js";import{u as ge}from"./index-B19zRkKU.js";import{P as ve}from"./index-DQmmJmiN.js";/* empty css             */import"./preload-helper-Ct5FWWRu.js";import"./index-C1lO9W1D.js";import"./index-BF5zjZAA.js";var V="rovingFocusGroup.onEntryFocus",xe={bubbles:!1,cancelable:!0},_="RovingFocusGroup",[G,W,Te]=pe(_),[he,Y]=$(_,[Te]),[Ne,je]=he(_),H=c.forwardRef((n,a)=>e.jsx(G.Provider,{scope:n.__scopeRovingFocusGroup,children:e.jsx(G.Slot,{scope:n.__scopeRovingFocusGroup,children:e.jsx(Fe,{...n,ref:a})})}));H.displayName=_;var Fe=c.forwardRef((n,a)=>{const{__scopeRovingFocusGroup:r,orientation:t,loop:d=!1,dir:u,currentTabStopId:o,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:T,onEntryFocus:p,preventScrollOnEntryFocus:s=!1,...l}=n,m=c.useRef(null),I=me(a,m),w=z(u),[A,i]=B({prop:o,defaultProp:b??null,onChange:T,caller:_}),[N,L]=c.useState(!1),g=ge(p),j=W(r),k=c.useRef(!1),[ie,K]=c.useState(0);return c.useEffect(()=>{const f=m.current;if(f)return f.addEventListener(V,g),()=>f.removeEventListener(V,g)},[g]),e.jsx(Ne,{scope:r,orientation:t,dir:w,loop:d,currentTabStopId:A,onItemFocus:c.useCallback(f=>i(f),[i]),onItemShiftTab:c.useCallback(()=>L(!0),[]),onFocusableItemAdd:c.useCallback(()=>K(f=>f+1),[]),onFocusableItemRemove:c.useCallback(()=>K(f=>f-1),[]),children:e.jsx(y.div,{tabIndex:N||ie===0?-1:0,"data-orientation":t,...l,ref:I,style:{outline:"none",...n.style},onMouseDown:h(n.onMouseDown,()=>{k.current=!0}),onFocus:h(n.onFocus,f=>{const de=!k.current;if(f.target===f.currentTarget&&de&&!N){const U=new CustomEvent(V,xe);if(f.currentTarget.dispatchEvent(U),!U.defaultPrevented){const M=j().filter(F=>F.focusable),ue=M.find(F=>F.active),fe=M.find(F=>F.id===A),be=[ue,fe,...M].filter(Boolean).map(F=>F.ref.current);X(be,s)}}k.current=!1}),onBlur:h(n.onBlur,()=>L(!1))})})}),J="RovingFocusGroupItem",Q=c.forwardRef((n,a)=>{const{__scopeRovingFocusGroup:r,focusable:t=!0,active:d=!1,tabStopId:u,children:o,...b}=n,T=q(),p=u||T,s=je(J,r),l=s.currentTabStopId===p,m=W(r),{onFocusableItemAdd:I,onFocusableItemRemove:w,currentTabStopId:A}=s;return c.useEffect(()=>{if(t)return I(),()=>w()},[t,I,w]),e.jsx(G.ItemSlot,{scope:r,id:p,focusable:t,active:d,children:e.jsx(y.span,{tabIndex:l?0:-1,"data-orientation":s.orientation,...b,ref:a,onMouseDown:h(n.onMouseDown,i=>{t?s.onItemFocus(p):i.preventDefault()}),onFocus:h(n.onFocus,()=>s.onItemFocus(p)),onKeyDown:h(n.onKeyDown,i=>{if(i.key==="Tab"&&i.shiftKey){s.onItemShiftTab();return}if(i.target!==i.currentTarget)return;const N=Ce(i,s.orientation,s.dir);if(N!==void 0){if(i.metaKey||i.ctrlKey||i.altKey||i.shiftKey)return;i.preventDefault();let g=m().filter(j=>j.focusable).map(j=>j.ref.current);if(N==="last")g.reverse();else if(N==="prev"||N==="next"){N==="prev"&&g.reverse();const j=g.indexOf(i.currentTarget);g=s.loop?Ie(g,j+1):g.slice(j+1)}setTimeout(()=>X(g))}}),children:typeof o=="function"?o({isCurrentTabStop:l,hasTabStop:A!=null}):o})})});Q.displayName=J;var ye={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _e(n,a){return a!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function Ce(n,a,r){const t=_e(n.key,r);if(!(a==="vertical"&&["ArrowLeft","ArrowRight"].includes(t))&&!(a==="horizontal"&&["ArrowUp","ArrowDown"].includes(t)))return ye[t]}function X(n,a=!1){const r=document.activeElement;for(const t of n)if(t===r||(t.focus({preventScroll:a}),document.activeElement!==r))return}function Ie(n,a){return n.map((r,t)=>n[(a+t)%n.length])}var we=H,Ae=Q,P="Tabs",[Se]=$(P,[Y]),Z=Y(),[Re,O]=Se(P),ee=c.forwardRef((n,a)=>{const{__scopeTabs:r,value:t,onValueChange:d,defaultValue:u,orientation:o="horizontal",dir:b,activationMode:T="automatic",...p}=n,s=z(b),[l,m]=B({prop:t,onChange:d,defaultProp:u??"",caller:P});return e.jsx(Re,{scope:r,baseId:q(),value:l,onValueChange:m,orientation:o,dir:s,activationMode:T,children:e.jsx(y.div,{dir:s,"data-orientation":o,...p,ref:a})})});ee.displayName=P;var ne="TabsList",ae=c.forwardRef((n,a)=>{const{__scopeTabs:r,loop:t=!0,...d}=n,u=O(ne,r),o=Z(r);return e.jsx(we,{asChild:!0,...o,orientation:u.orientation,dir:u.dir,loop:t,children:e.jsx(y.div,{role:"tablist","aria-orientation":u.orientation,...d,ref:a})})});ae.displayName=ne;var te="TabsTrigger",se=c.forwardRef((n,a)=>{const{__scopeTabs:r,value:t,disabled:d=!1,...u}=n,o=O(te,r),b=Z(r),T=ce(o.baseId,t),p=le(o.baseId,t),s=t===o.value;return e.jsx(Ae,{asChild:!0,...b,focusable:!d,active:s,children:e.jsx(y.button,{type:"button",role:"tab","aria-selected":s,"aria-controls":p,"data-state":s?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:T,...u,ref:a,onMouseDown:h(n.onMouseDown,l=>{!d&&l.button===0&&l.ctrlKey===!1?o.onValueChange(t):l.preventDefault()}),onKeyDown:h(n.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&o.onValueChange(t)}),onFocus:h(n.onFocus,()=>{const l=o.activationMode!=="manual";!s&&!d&&l&&o.onValueChange(t)})})})});se.displayName=te;var re="TabsContent",oe=c.forwardRef((n,a)=>{const{__scopeTabs:r,value:t,forceMount:d,children:u,...o}=n,b=O(re,r),T=ce(b.baseId,t),p=le(b.baseId,t),s=t===b.value,l=c.useRef(s);return c.useEffect(()=>{const m=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(ve,{present:d||s,children:({present:m})=>e.jsx(y.div,{"data-state":s?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":T,hidden:!m,id:p,tabIndex:0,...o,ref:a,style:{...n.style,animationDuration:l.current?"0s":void 0},children:m&&u})})});oe.displayName=re;function ce(n,a){return`${n}-trigger-${a}`}function le(n,a){return`${n}-content-${a}`}var Ee=ee,Pe=ae,De=se,Le=oe;function C({className:n="",...a}){return e.jsx(Ee,{"data-slot":"tabs",className:`fn-tabs ${n}`,...a})}function D({className:n="",...a}){return e.jsx(Pe,{"data-slot":"tabs-list",className:`fn-tabs-list ${n}`,...a})}function v({className:n="",...a}){return e.jsx(De,{"data-slot":"tabs-trigger",className:`fn-tabs-trigger ${n}`,...a})}function x({className:n="",...a}){return e.jsx(Le,{"data-slot":"tabs-content",className:`fn-tabs-content ${n}`,...a})}C.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};D.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};v.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};x.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const We={title:"Components/Tabs",component:C,parameters:{layout:"padded",docs:{description:{component:"Tab navigation component styled with Faion design system colors. Clean, minimal appearance with burgundy active state. Pure CSS implementation."}}},tags:["autodocs"]},S={render:()=>e.jsx("div",{className:"fn-tabs-demo",children:e.jsxs(C,{defaultValue:"overview",children:[e.jsxs(D,{children:[e.jsx(v,{value:"overview",children:"Огляд"}),e.jsx(v,{value:"specs",children:"Специфікації"}),e.jsx(v,{value:"examples",children:"Приклади"})]}),e.jsx(x,{value:"overview",className:"fn-tabs-content--spacing",children:e.jsxs("div",{className:"fn-tabs-panel",children:[e.jsx("h3",{className:"fn-tabs-panel__title",children:"Огляд компонента"}),e.jsx("p",{className:"fn-tabs-panel__text",children:"Загальна інформація про компонент та його призначення в дизайн-системі."})]})}),e.jsx(x,{value:"specs",className:"fn-tabs-content--spacing",children:e.jsxs("div",{className:"fn-tabs-panel",children:[e.jsx("h3",{className:"fn-tabs-panel__title",children:"Технічні специфікації"}),e.jsx("p",{className:"fn-tabs-panel__text",children:"Детальні параметри: розміри, відступи, кольори, типографіка."})]})}),e.jsx(x,{value:"examples",className:"fn-tabs-content--spacing",children:e.jsxs("div",{className:"fn-tabs-panel",children:[e.jsx("h3",{className:"fn-tabs-panel__title",children:"Приклади використання"}),e.jsx("p",{className:"fn-tabs-panel__text",children:"Код та демонстрації різних варіантів застосування."})]})})]})}),decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        `}),e.jsx(n,{})]})]},R={name:"Underline Style",render:()=>e.jsx("div",{className:"fn-tabs-demo",children:e.jsxs(C,{defaultValue:"colors",children:[e.jsxs(D,{className:"fn-tabs-list--underline",children:[e.jsx(v,{value:"colors",className:"fn-tabs-trigger--underline",children:"Кольори"}),e.jsx(v,{value:"typography",className:"fn-tabs-trigger--underline",children:"Типографіка"}),e.jsx(v,{value:"spacing",className:"fn-tabs-trigger--underline",children:"Відступи"})]}),e.jsx(x,{value:"colors",className:"fn-tabs-content--spacing",children:e.jsx("p",{className:"fn-tabs-text",children:"Палітра кольорів дизайн-системи Faion Network."})}),e.jsx(x,{value:"typography",className:"fn-tabs-content--spacing",children:e.jsx("p",{className:"fn-tabs-text",children:"Система типографіки з подвійним шрифтом."})}),e.jsx(x,{value:"spacing",className:"fn-tabs-content--spacing",children:e.jsx("p",{className:"fn-tabs-text",children:"8-точкова система відступів."})})]})}),decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
          .fn-tabs-text {
            font-family: Inter, sans-serif;
            font-size: 15px;
            color: #4A4A4A;
          }
        `}),e.jsx(n,{})]})]},E={name:"Full Width",render:()=>e.jsx("div",{className:"fn-tabs-demo",children:e.jsxs(C,{defaultValue:"tab1",children:[e.jsxs(D,{className:"fn-tabs-list--full-width",children:[e.jsx(v,{value:"tab1",className:"fn-tabs-trigger--flex",children:"Перший"}),e.jsx(v,{value:"tab2",className:"fn-tabs-trigger--flex",children:"Другий"}),e.jsx(v,{value:"tab3",className:"fn-tabs-trigger--flex",children:"Третій"})]}),e.jsx(x,{value:"tab1",className:"fn-tabs-content--spacing",children:e.jsx("div",{className:"fn-tabs-panel fn-tabs-panel--center",children:e.jsx("p",{className:"fn-tabs-text",children:"Вміст першого табу"})})}),e.jsx(x,{value:"tab2",className:"fn-tabs-content--spacing",children:e.jsx("div",{className:"fn-tabs-panel fn-tabs-panel--center",children:e.jsx("p",{className:"fn-tabs-text",children:"Вміст другого табу"})})}),e.jsx(x,{value:"tab3",className:"fn-tabs-content--spacing",children:e.jsx("div",{className:"fn-tabs-panel fn-tabs-panel--center",children:e.jsx("p",{className:"fn-tabs-text",children:"Вміст третього табу"})})})]})}),decorators:[n=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
          .fn-tabs-text {
            font-family: Inter, sans-serif;
            color: #4A4A4A;
          }
          .fn-tabs-panel--center {
            text-align: center;
          }
        `}),e.jsx(n,{})]})]};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fn-tabs-demo">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Огляд</TabsTrigger>
          <TabsTrigger value="specs">Специфікації</TabsTrigger>
          <TabsTrigger value="examples">Приклади</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel">
            <h3 className="fn-tabs-panel__title">Огляд компонента</h3>
            <p className="fn-tabs-panel__text">
              Загальна інформація про компонент та його призначення в дизайн-системі.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="specs" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel">
            <h3 className="fn-tabs-panel__title">Технічні специфікації</h3>
            <p className="fn-tabs-panel__text">
              Детальні параметри: розміри, відступи, кольори, типографіка.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel">
            <h3 className="fn-tabs-panel__title">Приклади використання</h3>
            <p className="fn-tabs-panel__text">
              Код та демонстрації різних варіантів застосування.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        \`}</style>
        <Story />
      </>]
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Underline Style',
  render: () => <div className="fn-tabs-demo">
      <Tabs defaultValue="colors">
        <TabsList className="fn-tabs-list--underline">
          <TabsTrigger value="colors" className="fn-tabs-trigger--underline">Кольори</TabsTrigger>
          <TabsTrigger value="typography" className="fn-tabs-trigger--underline">Типографіка</TabsTrigger>
          <TabsTrigger value="spacing" className="fn-tabs-trigger--underline">Відступи</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="fn-tabs-content--spacing">
          <p className="fn-tabs-text">Палітра кольорів дизайн-системи Faion Network.</p>
        </TabsContent>
        <TabsContent value="typography" className="fn-tabs-content--spacing">
          <p className="fn-tabs-text">Система типографіки з подвійним шрифтом.</p>
        </TabsContent>
        <TabsContent value="spacing" className="fn-tabs-content--spacing">
          <p className="fn-tabs-text">8-точкова система відступів.</p>
        </TabsContent>
      </Tabs>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
          .fn-tabs-text {
            font-family: Inter, sans-serif;
            font-size: 15px;
            color: #4A4A4A;
          }
        \`}</style>
        <Story />
      </>]
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Full Width',
  render: () => <div className="fn-tabs-demo">
      <Tabs defaultValue="tab1">
        <TabsList className="fn-tabs-list--full-width">
          <TabsTrigger value="tab1" className="fn-tabs-trigger--flex">Перший</TabsTrigger>
          <TabsTrigger value="tab2" className="fn-tabs-trigger--flex">Другий</TabsTrigger>
          <TabsTrigger value="tab3" className="fn-tabs-trigger--flex">Третій</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel fn-tabs-panel--center">
            <p className="fn-tabs-text">Вміст першого табу</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel fn-tabs-panel--center">
            <p className="fn-tabs-text">Вміст другого табу</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3" className="fn-tabs-content--spacing">
          <div className="fn-tabs-panel fn-tabs-panel--center">
            <p className="fn-tabs-text">Вміст третього табу</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-tabs-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
          .fn-tabs-text {
            font-family: Inter, sans-serif;
            color: #4A4A4A;
          }
          .fn-tabs-panel--center {
            text-align: center;
          }
        \`}</style>
        <Story />
      </>]
}`,...E.parameters?.docs?.source}}};const Ye=["Default","UnderlineStyle","FullWidth"];export{S as Default,E as FullWidth,R as UnderlineStyle,Ye as __namedExportsOrder,We as default};
