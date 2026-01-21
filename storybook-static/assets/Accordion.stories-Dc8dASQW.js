import{r as u,j as e,R as m}from"./iframe-B_omF_R9.js";import{c as z,u as G,P as _,a as K,b as xe}from"./index-CAE3x1vS.js";import{u as W,c as ge,a as Ae}from"./index-DuLUcHMv.js";import{u as Y}from"./index-CphaJNQg.js";import{P as he}from"./index-DQmmJmiN.js";/* empty css                  */import{C as ve}from"./chevron-down-Idv_iLq3.js";import"./preload-helper-Ct5FWWRu.js";import"./index-C1lO9W1D.js";import"./index-BF5zjZAA.js";import"./createLucideIcon-RZ8yy1X5.js";var D="Collapsible",[Ce,X]=z(D),[je,H]=Ce(D),Z=u.forwardRef((o,r)=>{const{__scopeCollapsible:n,open:t,defaultOpen:i,disabled:c,onOpenChange:a,...l}=o,[d,p]=G({prop:t,defaultProp:i??!1,onChange:a,caller:D});return e.jsx(je,{scope:n,disabled:c,contentId:W(),open:d,onOpenToggle:u.useCallback(()=>p(f=>!f),[p]),children:e.jsx(_.div,{"data-state":L(d),"data-disabled":c?"":void 0,...l,ref:r})})});Z.displayName=D;var ee="CollapsibleTrigger",oe=u.forwardRef((o,r)=>{const{__scopeCollapsible:n,...t}=o,i=H(ee,n);return e.jsx(_.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":L(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...t,ref:r,onClick:K(o.onClick,i.onOpenToggle)})});oe.displayName=ee;var B="CollapsibleContent",ne=u.forwardRef((o,r)=>{const{forceMount:n,...t}=o,i=H(B,o.__scopeCollapsible);return e.jsx(he,{present:n||i.open,children:({present:c})=>e.jsx(be,{...t,ref:r,present:c})})});ne.displayName=B;var be=u.forwardRef((o,r)=>{const{__scopeCollapsible:n,present:t,children:i,...c}=o,a=H(B,n),[l,d]=u.useState(t),p=u.useRef(null),f=Y(r,p),x=u.useRef(0),I=x.current,C=u.useRef(0),S=C.current,j=a.open||l,b=u.useRef(j),y=u.useRef(void 0);return u.useEffect(()=>{const s=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(s)},[]),xe(()=>{const s=p.current;if(s){y.current=y.current||{transitionDuration:s.style.transitionDuration,animationName:s.style.animationName},s.style.transitionDuration="0s",s.style.animationName="none";const N=s.getBoundingClientRect();x.current=N.height,C.current=N.width,b.current||(s.style.transitionDuration=y.current.transitionDuration,s.style.animationName=y.current.animationName),d(t)}},[a.open,t]),e.jsx(_.div,{"data-state":L(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!j,...c,ref:f,style:{"--radix-collapsible-content-height":I?`${I}px`:void 0,"--radix-collapsible-content-width":S?`${S}px`:void 0,...o.style},children:j&&i})});function L(o){return o?"open":"closed"}var ye=Z,Ie=oe,Ne=ne,g="Accordion",_e=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[J,Fe,Se]=ge(g),[E]=z(g,[Se,X]),Q=X(),re=m.forwardRef((o,r)=>{const{type:n,...t}=o,i=t,c=t;return e.jsx(J.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e.jsx(Pe,{...c,ref:r}):e.jsx(Re,{...i,ref:r})})});re.displayName=g;var[ce,Te]=E(g),[te,we]=E(g,{collapsible:!1}),Re=m.forwardRef((o,r)=>{const{value:n,defaultValue:t,onValueChange:i=()=>{},collapsible:c=!1,...a}=o,[l,d]=G({prop:n,defaultProp:t??"",onChange:i,caller:g});return e.jsx(ce,{scope:o.__scopeAccordion,value:m.useMemo(()=>l?[l]:[],[l]),onItemOpen:d,onItemClose:m.useCallback(()=>c&&d(""),[c,d]),children:e.jsx(te,{scope:o.__scopeAccordion,collapsible:c,children:e.jsx(ie,{...a,ref:r})})})}),Pe=m.forwardRef((o,r)=>{const{value:n,defaultValue:t,onValueChange:i=()=>{},...c}=o,[a,l]=G({prop:n,defaultProp:t??[],onChange:i,caller:g}),d=m.useCallback(f=>l((x=[])=>[...x,f]),[l]),p=m.useCallback(f=>l((x=[])=>x.filter(I=>I!==f)),[l]);return e.jsx(ce,{scope:o.__scopeAccordion,value:a,onItemOpen:d,onItemClose:p,children:e.jsx(te,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(ie,{...c,ref:r})})})}),[De,M]=E(g),ie=m.forwardRef((o,r)=>{const{__scopeAccordion:n,disabled:t,dir:i,orientation:c="vertical",...a}=o,l=m.useRef(null),d=Y(l,r),p=Fe(n),x=Ae(i)==="ltr",I=K(o.onKeyDown,C=>{if(!_e.includes(C.key))return;const S=C.target,j=p().filter($=>!$.ref.current?.disabled),b=j.findIndex($=>$.ref.current===S),y=j.length;if(b===-1)return;C.preventDefault();let s=b;const N=0,O=y-1,k=()=>{s=b+1,s>O&&(s=N)},q=()=>{s=b-1,s<N&&(s=O)};switch(C.key){case"Home":s=N;break;case"End":s=O;break;case"ArrowRight":c==="horizontal"&&(x?k():q());break;case"ArrowDown":c==="vertical"&&k();break;case"ArrowLeft":c==="horizontal"&&(x?q():k());break;case"ArrowUp":c==="vertical"&&q();break}const fe=s%y;j[fe].ref.current?.focus()});return e.jsx(De,{scope:n,disabled:t,direction:i,orientation:c,children:e.jsx(J.Slot,{scope:n,children:e.jsx(_.div,{...a,"data-orientation":c,ref:d,onKeyDown:t?void 0:I})})})}),P="AccordionItem",[Ee,U]=E(P),ae=m.forwardRef((o,r)=>{const{__scopeAccordion:n,value:t,...i}=o,c=M(P,n),a=Te(P,n),l=Q(n),d=W(),p=t&&a.value.includes(t)||!1,f=c.disabled||o.disabled;return e.jsx(Ee,{scope:n,open:p,disabled:f,triggerId:d,children:e.jsx(ye,{"data-orientation":c.orientation,"data-state":ue(p),...l,...i,ref:r,disabled:f,open:p,onOpenChange:x=>{x?a.onItemOpen(t):a.onItemClose(t)}})})});ae.displayName=P;var se="AccordionHeader",le=m.forwardRef((o,r)=>{const{__scopeAccordion:n,...t}=o,i=M(g,n),c=U(se,n);return e.jsx(_.h3,{"data-orientation":i.orientation,"data-state":ue(c.open),"data-disabled":c.disabled?"":void 0,...t,ref:r})});le.displayName=se;var V="AccordionTrigger",de=m.forwardRef((o,r)=>{const{__scopeAccordion:n,...t}=o,i=M(g,n),c=U(V,n),a=we(V,n),l=Q(n);return e.jsx(J.ItemSlot,{scope:n,children:e.jsx(Ie,{"aria-disabled":c.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:c.triggerId,...l,...t,ref:r})})});de.displayName=V;var pe="AccordionContent",me=m.forwardRef((o,r)=>{const{__scopeAccordion:n,...t}=o,i=M(g,n),c=U(pe,n),a=Q(n);return e.jsx(Ne,{role:"region","aria-labelledby":c.triggerId,"data-orientation":i.orientation,...a,...t,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});me.displayName=pe;function ue(o){return o?"open":"closed"}var Me=re,Oe=ae,ke=le,qe=de,$e=me;function F({className:o="",...r}){return e.jsx(Me,{"data-slot":"accordion",className:`fn-accordion ${o}`,...r})}function A({className:o="",...r}){return e.jsx(Oe,{"data-slot":"accordion-item",className:`fn-accordion-item ${o}`,...r})}function h({className:o="",children:r,...n}){return e.jsx(ke,{className:"fn-accordion-header",children:e.jsxs(qe,{"data-slot":"accordion-trigger",className:`fn-accordion-trigger ${o}`,...n,children:[r,e.jsx(ve,{className:"fn-accordion-chevron"})]})})}function v({className:o="",children:r,...n}){return e.jsx($e,{"data-slot":"accordion-content",className:"fn-accordion-content",...n,children:e.jsx("div",{className:`fn-accordion-content__inner ${o}`,children:r})})}F.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};A.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};v.__docgenInfo={description:"",methods:[],displayName:"AccordionContent",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Ye={title:"FAION/Core UI/Accordion",component:F,parameters:{layout:"centered",docs:{description:{component:`
Accordion component following the Faion "Digital Journal" aesthetic.

## Features
- Typography hierarchy for triggers
- Taupe Grey borders between items
- Smooth expand/collapse animation
- Card variant for FAQ sections
- Burgundy hover state

## Sub-components
- **Accordion**: Root wrapper (type="single" or "multiple")
- **AccordionItem**: Individual panel
- **AccordionTrigger**: Clickable header
- **AccordionContent**: Expandable content
        `}}},tags:["autodocs"]},T={render:()=>e.jsx("div",{className:"fn-accordion-demo",children:e.jsxs(F,{type:"single",collapsible:!0,children:[e.jsxs(A,{value:"item-1",children:[e.jsx(h,{children:"Що таке дизайн-система?"}),e.jsx(v,{children:"Дизайн-система — це набір стандартів, компонентів та інструкцій, які забезпечують узгодженість і послідовність у дизайні та розробці продуктів."})]}),e.jsxs(A,{value:"item-2",children:[e.jsx(h,{children:"Яка філософія Faion Network?"}),e.jsx(v,{children:'"The Digital Journal" — естетика академічних журналів та преміальної друкованої продукції. Відмова від tech startup трендів на користь чіткості та авторитетності.'})]}),e.jsxs(A,{value:"item-3",children:[e.jsx(h,{children:"Які шрифти використовуються?"}),e.jsx(v,{children:"Dual-Font System: Serif (Georgia/Merriweather) для заголовків і цитат, Sans-Serif (Inter) для основного тексту та UI елементів."})]})]})}),decorators:[o=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-accordion-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        `}),e.jsx(o,{})]})]},w={name:"Multiple Items Open",render:()=>e.jsx("div",{className:"fn-accordion-demo",children:e.jsxs(F,{type:"multiple",children:[e.jsxs(A,{value:"colors",children:[e.jsx(h,{children:"Кольори"}),e.jsx(v,{children:e.jsxs("ul",{className:"fn-accordion-list",children:[e.jsx("li",{children:"Warm Alabaster (#FAF9F6) — основний фон"}),e.jsx("li",{children:"Pure Cream (#FFFFFF) — картки"}),e.jsx("li",{children:"Deep Burgundy (#5D1F2D) — акцент"})]})})]}),e.jsxs(A,{value:"typography",children:[e.jsx(h,{children:"Типографіка"}),e.jsx(v,{children:e.jsxs("ul",{className:"fn-accordion-list",children:[e.jsx("li",{children:"H1: 48px Serif"}),e.jsx("li",{children:"H2: 36px Serif"}),e.jsx("li",{children:"Body: 16px Sans-Serif"})]})})]}),e.jsxs(A,{value:"spacing",children:[e.jsx(h,{children:"Відступи"}),e.jsxs(v,{children:[e.jsx("p",{children:"8-точкова система: всі відступи кратні 8px."}),e.jsx("p",{style:{marginTop:"8px"},children:"Micro: 4, 8, 16, 24, 32px"}),e.jsx("p",{children:"Macro: 48, 64, 80, 120, 160px"})]})]})]})}),decorators:[o=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-accordion-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        `}),e.jsx(o,{})]})]},R={name:"FAQ Style",render:()=>e.jsxs("div",{className:"fn-faq-demo",children:[e.jsx("h2",{className:"fn-faq-demo__title",children:"Часті питання"}),e.jsxs(F,{type:"single",collapsible:!0,children:[e.jsxs(A,{value:"q1",className:"fn-accordion-item--card",children:[e.jsx(h,{children:"Як розпочати роботу з дизайн-системою?"}),e.jsx(v,{children:"Почніть з вивчення документації та принципів дизайну. Потім імпортуйте необхідні компоненти та застосуйте кольорову палітру та типографіку."})]}),e.jsxs(A,{value:"q2",className:"fn-accordion-item--card",children:[e.jsx(h,{children:"Чи підтримується темний режим?"}),e.jsx(v,{children:'Ні. Дизайн-система свідомо відмовляється від темного режиму на користь теплої, паперової естетики "Digital Journal".'})]}),e.jsxs(A,{value:"q3",className:"fn-accordion-item--card",children:[e.jsx(h,{children:"Які стандарти доступності підтримуються?"}),e.jsx(v,{children:"Дизайн-система відповідає WCAG 2.2 AA: контрастність кольорів, клавіатурна навігація, сумісність зі скрін-рідерами."})]})]})]}),decorators:[o=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-faq-demo {
            background-color: #FAF9F6;
            padding: 32px;
            max-width: 700px;
          }
          .fn-faq-demo__title {
            font-family: Georgia, serif;
            font-size: 32px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
        `}),e.jsx(o,{})]})]};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fn-accordion-demo">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Що таке дизайн-система?</AccordionTrigger>
          <AccordionContent>
            Дизайн-система — це набір стандартів, компонентів та інструкцій, які забезпечують
            узгодженість і послідовність у дизайні та розробці продуктів.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Яка філософія Faion Network?</AccordionTrigger>
          <AccordionContent>
            "The Digital Journal" — естетика академічних журналів та преміальної друкованої
            продукції. Відмова від tech startup трендів на користь чіткості та авторитетності.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Які шрифти використовуються?</AccordionTrigger>
          <AccordionContent>
            Dual-Font System: Serif (Georgia/Merriweather) для заголовків і цитат,
            Sans-Serif (Inter) для основного тексту та UI елементів.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-accordion-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        \`}</style>
        <Story />
      </>]
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Multiple Items Open',
  render: () => <div className="fn-accordion-demo">
      <Accordion type="multiple">
        <AccordionItem value="colors">
          <AccordionTrigger>Кольори</AccordionTrigger>
          <AccordionContent>
            <ul className="fn-accordion-list">
              <li>Warm Alabaster (#FAF9F6) — основний фон</li>
              <li>Pure Cream (#FFFFFF) — картки</li>
              <li>Deep Burgundy (#5D1F2D) — акцент</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="typography">
          <AccordionTrigger>Типографіка</AccordionTrigger>
          <AccordionContent>
            <ul className="fn-accordion-list">
              <li>H1: 48px Serif</li>
              <li>H2: 36px Serif</li>
              <li>Body: 16px Sans-Serif</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="spacing">
          <AccordionTrigger>Відступи</AccordionTrigger>
          <AccordionContent>
            <p>8-точкова система: всі відступи кратні 8px.</p>
            <p style={{
            marginTop: '8px'
          }}>Micro: 4, 8, 16, 24, 32px</p>
            <p>Macro: 48, 64, 80, 120, 160px</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-accordion-demo {
            background-color: #FAF9F6;
            padding: 24px;
            max-width: 600px;
          }
        \`}</style>
        <Story />
      </>]
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'FAQ Style',
  render: () => <div className="fn-faq-demo">
      <h2 className="fn-faq-demo__title">Часті питання</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="q1" className="fn-accordion-item--card">
          <AccordionTrigger>Як розпочати роботу з дизайн-системою?</AccordionTrigger>
          <AccordionContent>
            Почніть з вивчення документації та принципів дизайну. Потім імпортуйте
            необхідні компоненти та застосуйте кольорову палітру та типографіку.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2" className="fn-accordion-item--card">
          <AccordionTrigger>Чи підтримується темний режим?</AccordionTrigger>
          <AccordionContent>
            Ні. Дизайн-система свідомо відмовляється від темного режиму на користь
            теплої, паперової естетики "Digital Journal".
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3" className="fn-accordion-item--card">
          <AccordionTrigger>Які стандарти доступності підтримуються?</AccordionTrigger>
          <AccordionContent>
            Дизайн-система відповідає WCAG 2.2 AA: контрастність кольорів,
            клавіатурна навігація, сумісність зі скрін-рідерами.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-faq-demo {
            background-color: #FAF9F6;
            padding: 32px;
            max-width: 700px;
          }
          .fn-faq-demo__title {
            font-family: Georgia, serif;
            font-size: 32px;
            color: #1C1C1E;
            margin-bottom: 24px;
          }
        \`}</style>
        <Story />
      </>]
}`,...R.parameters?.docs?.source}}};const Xe=["Default","MultipleOpen","FAQ"];export{T as Default,R as FAQ,w as MultipleOpen,Xe as __namedExportsOrder,Ye as default};
