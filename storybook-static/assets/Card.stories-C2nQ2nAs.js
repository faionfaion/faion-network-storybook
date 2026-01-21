import{r as c,j as e}from"./iframe-B_omF_R9.js";/* empty css             */import{B as b}from"./Button-qKon32FP.js";/* empty css               */import"./preload-helper-Ct5FWWRu.js";const o=c.forwardRef(({children:r,className:i="",topBar:s=!1,padding:n="default",hoverable:T=!1,variant:A="default",...w},H)=>{const S=n!=="default"?`fn-card--padding-${n}`:"",D=s?"fn-card--with-topbar":"",N=T?"fn-card--hoverable":"",E=A!=="default"?`fn-card--${A}`:"";return e.jsxs("div",{ref:H,className:`fn-card ${S} ${D} ${N} ${E} ${i}`.trim(),...w,children:[s&&e.jsx("div",{className:"fn-card__topbar"}),r]})});o.displayName="Card";const a=c.forwardRef(({children:r,className:i="",...s},n)=>e.jsx("div",{ref:n,className:`fn-card__header ${i}`.trim(),...s,children:r}));a.displayName="CardHeader";const t=c.forwardRef(({children:r,className:i="",as:s="h3",...n},T)=>e.jsx(s,{ref:T,className:`fn-card__title ${i}`.trim(),...n,children:r}));t.displayName="CardTitle";const d=c.forwardRef(({children:r,className:i="",...s},n)=>e.jsx("p",{ref:n,className:`fn-card__description ${i}`.trim(),...s,children:r}));d.displayName="CardDescription";const l=c.forwardRef(({children:r,className:i="",...s},n)=>e.jsx("div",{ref:n,className:`fn-card__content ${i}`.trim(),...s,children:r}));l.displayName="CardContent";const p=c.forwardRef(({children:r,className:i="",...s},n)=>e.jsx("div",{ref:n,className:`fn-card__footer ${i}`.trim(),...s,children:r}));p.displayName="CardFooter";o.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},topBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'compact' | 'default' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'default'"},{name:"literal",value:"'spacious'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};a.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};t.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h3'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};d.__docgenInfo={description:"",methods:[],displayName:"CardDescription",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};l.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};p.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const V={title:"FAION/Core UI/Card",component:o,parameters:{layout:"centered",docs:{description:{component:`
Card component following the Faion "Digital Journal" aesthetic.

## Features
- Pure Cream background with Taupe Grey border
- Optional burgundy top bar accent
- Hoverable variant with lift effect
- Elevated variant with shadow
- Responsive padding

## Sub-components
- **CardHeader**: Header section
- **CardTitle**: Title text (serif font)
- **CardDescription**: Description text
- **CardContent**: Main content area
- **CardFooter**: Footer with border-top
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"Visual style variant"},padding:{control:"select",options:["none","compact","default","spacious"],description:"Internal padding"},topBar:{control:"boolean",description:"Show burgundy top bar accent"},hoverable:{control:"boolean",description:"Enable hover lift effect"}}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Card Title"}),e.jsx(d,{children:"This is a description of the card content."})]}),e.jsx(l,{children:e.jsx("p",{style:{margin:0,color:"#4A4A4A"},children:"Card content goes here. This can include any content like text, images, or other components."})})]})},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},h={args:{topBar:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Featured Content"}),e.jsx(d,{children:"The burgundy top bar indicates featured or important content."})]}),e.jsx(l,{children:e.jsx("p",{style:{margin:0,color:"#4A4A4A"},children:"This card uses the topBar prop to show a burgundy accent line at the top."})})]})},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},u={args:{hoverable:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Interactive Card"}),e.jsx(d,{children:"Hover over this card to see the lift effect."})]}),e.jsx(l,{children:e.jsx("p",{style:{margin:0,color:"#4A4A4A"},children:"Hoverable cards are great for lists of clickable items like articles, products, or navigation."})})]})},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},C={args:{variant:"elevated",children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Elevated Card"}),e.jsx(d,{children:"No border, subtle shadow for depth."})]}),e.jsx(l,{children:e.jsx("p",{style:{margin:0,color:"#4A4A4A"},children:"The elevated variant removes the border and adds a subtle shadow for a floating effect."})})]})},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Card with Actions"}),e.jsx(d,{children:"Cards can have a footer with action buttons."})]}),e.jsx(l,{children:e.jsx("p",{style:{margin:0,color:"#4A4A4A"},children:"Main content of the card with detailed information."})}),e.jsxs(p,{children:[e.jsx(b,{variant:"primary",size:"small",children:"Save"}),e.jsx(b,{variant:"ghost",size:"small",children:"Cancel"})]})]})},decorators:[r=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{})})]},x={args:{padding:"compact",children:e.jsx(e.Fragment,{children:e.jsxs(a,{children:[e.jsx(t,{children:"Compact Card"}),e.jsx(d,{children:"Uses less internal padding."})]})})},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},v={args:{padding:"spacious",children:e.jsx(e.Fragment,{children:e.jsxs(a,{children:[e.jsx(t,{children:"Spacious Card"}),e.jsx(d,{children:"Uses more internal padding for emphasis."})]})})},decorators:[r=>e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{})})]},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DEFAULT"}),e.jsx(o,{children:e.jsxs(a,{children:[e.jsx(t,{children:"Default Card"}),e.jsx(d,{children:"Standard bordered card"})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"WITH TOP BAR"}),e.jsx(o,{topBar:!0,children:e.jsxs(a,{children:[e.jsx(t,{children:"Featured Card"}),e.jsx(d,{children:"With burgundy accent"})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"ELEVATED"}),e.jsx(o,{variant:"elevated",children:e.jsxs(a,{children:[e.jsx(t,{children:"Elevated Card"}),e.jsx(d,{children:"Shadow instead of border"})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"HOVERABLE"}),e.jsx(o,{hoverable:!0,children:e.jsxs(a,{children:[e.jsx(t,{children:"Interactive Card"}),e.jsx(d,{children:"Hover to see lift effect"})]})})]})]}),decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(r,{})]})]},g={name:"Card Grid (3 columns)",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px",width:"900px"},children:[1,2,3,4,5,6].map(r=>e.jsxs(o,{hoverable:!0,children:[e.jsxs(a,{children:[e.jsxs(t,{children:["Article ",r]}),e.jsx(d,{children:"A brief description of this article content."})]}),e.jsx(p,{children:e.jsx(b,{variant:"link",size:"small",children:"Read more"})})]},r))}),parameters:{layout:"padded",docs:{description:{story:"Cards in a responsive grid layout, commonly used for article listings."}}}},j={name:"Pricing Card Example",render:()=>e.jsxs(o,{topBar:!0,padding:"spacious",style:{width:"320px"},children:[e.jsxs(a,{children:[e.jsx(t,{children:"Pro Plan"}),e.jsx(d,{children:"Perfect for growing businesses"})]}),e.jsxs(l,{children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("span",{style:{fontFamily:"Georgia, serif",fontSize:"48px",fontWeight:700,color:"#1C1C1E"},children:"$35"}),e.jsx("span",{style:{color:"#4A4A4A",fontSize:"14px"},children:"/month"})]}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:["Full methodology access","Commercial license","SSO support","Priority support"].map(r=>e.jsx("li",{style:{padding:"8px 0",borderBottom:"1px solid #E5E5E0",color:"#4A4A4A"},children:r},r))})]}),e.jsx(p,{children:e.jsx(b,{variant:"primary",fullWidth:!0,children:"Get Started"})})]}),parameters:{docs:{description:{story:"Example of a pricing card with top bar accent and full-width CTA."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a description of the card content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{
          margin: 0,
          color: '#4A4A4A'
        }}>
            Card content goes here. This can include any content like text, images, or other components.
          </p>
        </CardContent>
      </>
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    topBar: true,
    children: <>
        <CardHeader>
          <CardTitle>Featured Content</CardTitle>
          <CardDescription>The burgundy top bar indicates featured or important content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{
          margin: 0,
          color: '#4A4A4A'
        }}>
            This card uses the topBar prop to show a burgundy accent line at the top.
          </p>
        </CardContent>
      </>
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    hoverable: true,
    children: <>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Hover over this card to see the lift effect.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{
          margin: 0,
          color: '#4A4A4A'
        }}>
            Hoverable cards are great for lists of clickable items like articles, products, or navigation.
          </p>
        </CardContent>
      </>
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    children: <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>No border, subtle shadow for depth.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{
          margin: 0,
          color: '#4A4A4A'
        }}>
            The elevated variant removes the border and adds a subtle shadow for a floating effect.
          </p>
        </CardContent>
      </>
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader>
          <CardTitle>Card with Actions</CardTitle>
          <CardDescription>Cards can have a footer with action buttons.</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{
          margin: 0,
          color: '#4A4A4A'
        }}>
            Main content of the card with detailed information.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="small">Save</Button>
          <Button variant="ghost" size="small">Cancel</Button>
        </CardFooter>
      </>
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'compact',
    children: <>
        <CardHeader>
          <CardTitle>Compact Card</CardTitle>
          <CardDescription>Uses less internal padding.</CardDescription>
        </CardHeader>
      </>
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'spacious',
    children: <>
        <CardHeader>
          <CardTitle>Spacious Card</CardTitle>
          <CardDescription>Uses more internal padding for emphasis.</CardDescription>
        </CardHeader>
      </>
  },
  decorators: [Story => <div style={{
    width: '500px'
  }}>
        <Story />
      </div>]
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Standard bordered card</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <p className="fn-story-label">WITH TOP BAR</p>
        <Card topBar>
          <CardHeader>
            <CardTitle>Featured Card</CardTitle>
            <CardDescription>With burgundy accent</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <p className="fn-story-label">ELEVATED</p>
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>Shadow instead of border</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <p className="fn-story-label">HOVERABLE</p>
        <Card hoverable>
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>Hover to see lift effect</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>,
  decorators: [Story => <>
        <style>{\`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        \`}</style>
        <Story />
      </>]
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Card Grid (3 columns)',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    width: '900px'
  }}>
      {[1, 2, 3, 4, 5, 6].map(i => <Card key={i} hoverable>
          <CardHeader>
            <CardTitle>Article {i}</CardTitle>
            <CardDescription>A brief description of this article content.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" size="small">Read more</Button>
          </CardFooter>
        </Card>)}
    </div>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Cards in a responsive grid layout, commonly used for article listings.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Pricing Card Example',
  render: () => <Card topBar padding="spacious" style={{
    width: '320px'
  }}>
      <CardHeader>
        <CardTitle>Pro Plan</CardTitle>
        <CardDescription>Perfect for growing businesses</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{
        marginBottom: '24px'
      }}>
          <span style={{
          fontFamily: 'Georgia, serif',
          fontSize: '48px',
          fontWeight: 700,
          color: '#1C1C1E'
        }}>$35</span>
          <span style={{
          color: '#4A4A4A',
          fontSize: '14px'
        }}>/month</span>
        </div>
        <ul style={{
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }}>
          {['Full methodology access', 'Commercial license', 'SSO support', 'Priority support'].map(feature => <li key={feature} style={{
          padding: '8px 0',
          borderBottom: '1px solid #E5E5E0',
          color: '#4A4A4A'
        }}>
              {feature}
            </li>)}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="primary" fullWidth>Get Started</Button>
      </CardFooter>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Example of a pricing card with top bar accent and full-width CTA.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};const q=["Default","WithTopBar","Hoverable","Elevated","WithFooter","CompactPadding","SpaciousPadding","AllVariants","CardGrid","PricingCard"];export{y as AllVariants,g as CardGrid,x as CompactPadding,m as Default,C as Elevated,u as Hoverable,j as PricingCard,v as SpaciousPadding,f as WithFooter,h as WithTopBar,q as __namedExportsOrder,V as default};
