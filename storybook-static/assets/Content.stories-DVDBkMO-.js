import{j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function a({children:t,maxWidth:o="medium",className:r=""}){return e.jsx("div",{className:`fn-content fn-content--${o} ${r}`,children:t})}function s({level:t,children:o,className:r=""}){const b=`h${t}`;return e.jsx(b,{className:`fn-heading fn-heading--${t} ${r}`,children:o})}function n({children:t,size:o="base",className:r=""}){return e.jsx("p",{className:`fn-text fn-text--${o} ${r}`,children:t})}function c({children:t,className:o=""}){return e.jsx("blockquote",{className:`fn-blockquote ${o}`,children:e.jsx("p",{className:"fn-blockquote__text",children:t})})}function l({items:t,ordered:o=!1,className:r=""}){const b=o?"ol":"ul";return e.jsx(b,{className:`fn-list ${o?"fn-list--ordered":""} ${r}`,children:t.map((j,k)=>e.jsx("li",{className:"fn-list__item",children:j},k))})}function d({href:t,children:o,className:r=""}){return e.jsx("a",{href:t,className:`fn-link ${r}`,children:o})}function v({className:t=""}){return e.jsx("hr",{className:`fn-divider ${t}`})}function i({children:t,className:o=""}){return e.jsx("span",{className:`fn-label ${o}`,children:t})}a.__docgenInfo={description:`Content Container - "The Book Column"
Responsive: 320px - 1440px
Limits text width for optimal readability (60-75 characters per line)`,methods:[],displayName:"Content",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'narrow' | 'medium' | 'wide'",elements:[{name:"literal",value:"'narrow'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'wide'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};s.__docgenInfo={description:`Content Heading - Serif typography for authority
Responsive font sizes: Mobile (320px) → Tablet (768px) → Desktop (1440px)`,methods:[],displayName:"ContentHeading",props:{level:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};n.__docgenInfo={description:`Content Text - Sans-serif for readability
Responsive: adjusts on mobile`,methods:[],displayName:"ContentText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'base' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'base'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};c.__docgenInfo={description:`Content Blockquote - Serif italic with burgundy border
Responsive: smaller on mobile`,methods:[],displayName:"ContentBlockquote",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};l.__docgenInfo={description:"Content List - Burgundy bullets/numbers",methods:[],displayName:"ContentList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""},ordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};d.__docgenInfo={description:"Content Link - Burgundy underlined",methods:[],displayName:"ContentLink",props:{href:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};v.__docgenInfo={description:"Content Divider - Chapter break",methods:[],displayName:"ContentDivider",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};i.__docgenInfo={description:"Content Label - Uppercase category/section label",methods:[],displayName:"ContentLabel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const F={title:"Components/Content",component:a,parameters:{layout:"padded",docs:{description:{component:'Editorial content components following the "Digital Journal" typography system. Includes headings (serif), body text (sans-serif), blockquotes, lists, links, and dividers. Uses pure CSS (no Tailwind). Responsive: 320px-1440px.'}}},tags:["autodocs"]},m={name:"All Content Elements",render:()=>e.jsx("div",{className:"fn-page-bg",children:e.jsxs(a,{maxWidth:"medium",children:[e.jsx(i,{children:"Design System"}),e.jsx(s,{level:1,children:"The Digital Journal Aesthetic"}),e.jsx(n,{size:"large",children:'The design rejects "tech startup" trends in favor of clarity, permanence, and authority. It should feel like a high-end physical object digitized.'}),e.jsx(v,{}),e.jsx(s,{level:2,children:"Typography as Interface"}),e.jsx(n,{children:'We use a Dual-Font System: a Serif for the "Voice" (Brand) and a Sans-Serif for "Utility" (Interface). This creates a clear hierarchy between editorial content and functional UI elements.'}),e.jsx(c,{children:'"Typography is the interface. Content is the experience."'}),e.jsx(s,{level:3,children:"Core Principles"}),e.jsx(l,{items:["Content-first design philosophy","Warm alabaster backgrounds for reduced eye strain","Strict 8-point grid system for mathematical harmony",e.jsxs(e.Fragment,{children:["Learn more about ",e.jsx(d,{href:"#",children:"the SDD framework"})," in our docs"]})]}),e.jsx(s,{level:4,children:"Implementation Notes"}),e.jsx(n,{size:"small",children:"All spacing values are multiples of 8px. This provides mathematical harmony and scales perfectly across all screen sizes."})]})}),decorators:[t=>e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px",minHeight:"100vh"},children:e.jsx(t,{})})]},p={name:"Heading Hierarchy",render:()=>e.jsxs(a,{maxWidth:"wide",children:[e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx(i,{children:"Level 1 - Display"}),e.jsx(s,{level:1,children:"Display Heading (48px desktop)"})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx(i,{children:"Level 2 - Section"}),e.jsx(s,{level:2,children:"Section Heading (36px desktop)"})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx(i,{children:"Level 3 - Subsection"}),e.jsx(s,{level:3,children:"Subsection Heading (24px desktop)"})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx(i,{children:"Level 4 - Detail"}),e.jsx(s,{level:4,children:"Detail Heading (18px desktop)"})]})]}),decorators:[t=>e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px"},children:e.jsx(t,{})})]},h={name:"Text Sizes",render:()=>e.jsxs(a,{maxWidth:"medium",children:[e.jsx(i,{children:"Large (18px desktop) - Lead paragraphs"}),e.jsx(n,{size:"large",children:'The design rejects "tech startup" trends (gradients, neon, dark mode) in favor of clarity, permanence, and authority.'}),e.jsx(i,{children:"Base (16px desktop) - Body copy"}),e.jsx(n,{size:"base",children:"Body copy is set in a geometric sans-serif at 16px with a line height of 170% for optimal readability across all devices and screen sizes."}),e.jsx(i,{children:"Small (14px desktop) - Captions & notes"}),e.jsx(n,{size:"small",children:"Small text is used for captions, footnotes, and supplementary information that supports the main content without competing for attention."})]}),decorators:[t=>e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px"},children:e.jsx(t,{})})]},u={name:"Blockquotes",render:()=>e.jsxs(a,{maxWidth:"medium",children:[e.jsx(n,{children:"The following quote demonstrates the editorial blockquote style with a burgundy left border and serif italic typography:"}),e.jsx(c,{children:'"Typography is the interface. Content is the experience. Every design decision should serve the reader, not the designer."'}),e.jsx(n,{children:'Blockquotes use the serif typeface in italic to highlight the "human" voice and create visual distinction from body text.'})]}),decorators:[t=>e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px"},children:e.jsx(t,{})})]},x={name:"Lists",render:()=>e.jsxs(a,{maxWidth:"medium",children:[e.jsx(s,{level:3,children:"Unordered List"}),e.jsx(l,{items:["Content-first design philosophy","Warm alabaster backgrounds","Strict 8-point grid system","Dual-font typography hierarchy"]}),e.jsx(s,{level:3,children:"Ordered List"}),e.jsx(l,{ordered:!0,items:["Define the content structure","Apply typography hierarchy","Implement spacing rhythm","Verify accessibility compliance"]})]}),decorators:[t=>e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px"},children:e.jsx(t,{})})]},g={name:"Inline Links",render:()=>e.jsxs(a,{maxWidth:"medium",children:[e.jsxs(n,{children:['The design system rejects "tech startup" trends. Learn more about'," ",e.jsx(d,{href:"#",children:"the SDD framework"})," in our documentation. You can also explore ",e.jsx(d,{href:"#",children:"color guidelines"})," and"," ",e.jsx(d,{href:"#",children:"typography specifications"}),"."]}),e.jsx("div",{style:{marginTop:"24px",padding:"16px",backgroundColor:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px"},children:e.jsxs(n,{size:"small",children:[e.jsx("strong",{children:"Link Style:"})," Deep Burgundy (#5D1F2D), underlined, 80% opacity on hover"]})})]}),decorators:[t=>e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px"},children:e.jsx(t,{})})]},y={name:"Column Widths",render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx(i,{children:"Narrow (600px desktop)"}),e.jsx(a,{maxWidth:"narrow",className:"fn-demo-box",children:e.jsx(n,{children:"Narrow columns are ideal for focused reading experiences like articles and documentation sections."})})]}),e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx(i,{children:"Medium (700px desktop) - Default"}),e.jsx(a,{maxWidth:"medium",className:"fn-demo-box",children:e.jsx(n,{children:'Medium width is the default "book column" providing optimal readability at 60-75 characters per line.'})})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Wide (900px desktop)"}),e.jsx(a,{maxWidth:"wide",className:"fn-demo-box",children:e.jsx(n,{children:"Wide columns accommodate content that needs more horizontal space, such as tables, code blocks, or side-by-side comparisons."})})]})]}),decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-demo-box {
            background: white;
            border: 1px solid #E5E5E0;
            padding: 24px;
            border-radius: 8px;
            margin-top: 8px;
          }
          .fn-demo-box .fn-text {
            margin-bottom: 0;
          }
        `}),e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px"},children:e.jsx(t,{})})]})]},C={name:"Article Layout Example",render:()=>e.jsxs(a,{maxWidth:"medium",className:"fn-article",children:[e.jsx(i,{children:"Methodology"}),e.jsx(s,{level:1,children:"Building Scalable Design Systems"}),e.jsx(n,{size:"large",children:"A comprehensive guide to creating design systems that scale with your organization while maintaining consistency and developer experience."}),e.jsx(v,{}),e.jsx(s,{level:2,children:"Introduction"}),e.jsx(n,{children:"Design systems are more than component libraries. They represent a shared language between design and development, ensuring consistency across products while accelerating delivery."}),e.jsx(c,{children:'"A design system is a living document that evolves with your product and organization."'}),e.jsx(s,{level:2,children:"Core Principles"}),e.jsx(n,{children:"When building a design system, consider these foundational principles:"}),e.jsx(l,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Consistency"})," — Every component should follow the same patterns and conventions"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Flexibility"})," — Components should adapt to various contexts without breaking"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Documentation"})," — Clear guidelines help teams adopt the system effectively"]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Accessibility"})," — Built-in compliance with"," ",e.jsx(d,{href:"#",children:"WCAG 2.2 AA standards"})]})]}),e.jsx(v,{}),e.jsx(n,{size:"small",children:"Last updated: January 2026 · Version 2.0"})]}),decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-article {
            margin: 0 auto;
          }
        `}),e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"48px 24px",minHeight:"100vh"},children:e.jsx(t,{})})]})]},f={name:"Responsive (resize window)",render:()=>e.jsxs(a,{maxWidth:"medium",className:"fn-article",children:[e.jsx(i,{children:"Responsive Demo"}),e.jsx(s,{level:1,children:"Resize the Window"}),e.jsx(n,{size:"large",children:"This demo shows how content adapts from 320px mobile to 1440px desktop. Try resizing the browser window to see the responsive behavior."}),e.jsx(s,{level:2,children:"Breakpoints"}),e.jsx(l,{items:["320px - Mobile (base styles)","640px - Small tablet (sm:)","768px - Tablet/Desktop (md:)"]}),e.jsx(c,{children:'"Design for the smallest screen first, then enhance for larger screens."'}),e.jsx(n,{children:"All typography, spacing, and layout adjusts smoothly across these breakpoints, maintaining readability and visual hierarchy at every size."})]}),decorators:[t=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-article {
            margin: 0 auto;
          }
        `}),e.jsx("div",{style:{backgroundColor:"#FAF9F6",padding:"24px",minHeight:"100vh"},children:e.jsx(t,{})})]})]};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'All Content Elements',
  render: () => <div className="fn-page-bg">
      <Content maxWidth="medium">
        <ContentLabel>Design System</ContentLabel>

        <ContentHeading level={1}>
          The Digital Journal Aesthetic
        </ContentHeading>

        <ContentText size="large">
          The design rejects "tech startup" trends in favor of clarity, permanence, and authority.
          It should feel like a high-end physical object digitized.
        </ContentText>

        <ContentDivider />

        <ContentHeading level={2}>
          Typography as Interface
        </ContentHeading>

        <ContentText>
          We use a Dual-Font System: a Serif for the "Voice" (Brand) and a Sans-Serif for
          "Utility" (Interface). This creates a clear hierarchy between editorial content
          and functional UI elements.
        </ContentText>

        <ContentBlockquote>
          "Typography is the interface. Content is the experience."
        </ContentBlockquote>

        <ContentHeading level={3}>
          Core Principles
        </ContentHeading>

        <ContentList items={['Content-first design philosophy', 'Warm alabaster backgrounds for reduced eye strain', 'Strict 8-point grid system for mathematical harmony', <>Learn more about <ContentLink href="#">the SDD framework</ContentLink> in our docs</>]} />

        <ContentHeading level={4}>
          Implementation Notes
        </ContentHeading>

        <ContentText size="small">
          All spacing values are multiples of 8px. This provides mathematical harmony
          and scales perfectly across all screen sizes.
        </ContentText>
      </Content>
    </div>,
  decorators: [Story => <div style={{
    backgroundColor: '#FAF9F6',
    padding: '48px',
    minHeight: '100vh'
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Heading Hierarchy',
  render: () => <Content maxWidth="wide">
      <div style={{
      marginBottom: '32px'
    }}>
        <ContentLabel>Level 1 - Display</ContentLabel>
        <ContentHeading level={1}>Display Heading (48px desktop)</ContentHeading>
      </div>

      <div style={{
      marginBottom: '32px'
    }}>
        <ContentLabel>Level 2 - Section</ContentLabel>
        <ContentHeading level={2}>Section Heading (36px desktop)</ContentHeading>
      </div>

      <div style={{
      marginBottom: '32px'
    }}>
        <ContentLabel>Level 3 - Subsection</ContentLabel>
        <ContentHeading level={3}>Subsection Heading (24px desktop)</ContentHeading>
      </div>

      <div style={{
      marginBottom: '32px'
    }}>
        <ContentLabel>Level 4 - Detail</ContentLabel>
        <ContentHeading level={4}>Detail Heading (18px desktop)</ContentHeading>
      </div>
    </Content>,
  decorators: [Story => <div style={{
    backgroundColor: '#FAF9F6',
    padding: '48px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Text Sizes',
  render: () => <Content maxWidth="medium">
      <ContentLabel>Large (18px desktop) - Lead paragraphs</ContentLabel>
      <ContentText size="large">
        The design rejects "tech startup" trends (gradients, neon, dark mode) in favor
        of clarity, permanence, and authority.
      </ContentText>

      <ContentLabel>Base (16px desktop) - Body copy</ContentLabel>
      <ContentText size="base">
        Body copy is set in a geometric sans-serif at 16px with a line height of 170%
        for optimal readability across all devices and screen sizes.
      </ContentText>

      <ContentLabel>Small (14px desktop) - Captions & notes</ContentLabel>
      <ContentText size="small">
        Small text is used for captions, footnotes, and supplementary information
        that supports the main content without competing for attention.
      </ContentText>
    </Content>,
  decorators: [Story => <div style={{
    backgroundColor: '#FAF9F6',
    padding: '48px'
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Blockquotes',
  render: () => <Content maxWidth="medium">
      <ContentText>
        The following quote demonstrates the editorial blockquote style with
        a burgundy left border and serif italic typography:
      </ContentText>

      <ContentBlockquote>
        "Typography is the interface. Content is the experience. Every design
        decision should serve the reader, not the designer."
      </ContentBlockquote>

      <ContentText>
        Blockquotes use the serif typeface in italic to highlight the "human"
        voice and create visual distinction from body text.
      </ContentText>
    </Content>,
  decorators: [Story => <div style={{
    backgroundColor: '#FAF9F6',
    padding: '48px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Lists',
  render: () => <Content maxWidth="medium">
      <ContentHeading level={3}>Unordered List</ContentHeading>
      <ContentList items={['Content-first design philosophy', 'Warm alabaster backgrounds', 'Strict 8-point grid system', 'Dual-font typography hierarchy']} />

      <ContentHeading level={3}>Ordered List</ContentHeading>
      <ContentList ordered items={['Define the content structure', 'Apply typography hierarchy', 'Implement spacing rhythm', 'Verify accessibility compliance']} />
    </Content>,
  decorators: [Story => <div style={{
    backgroundColor: '#FAF9F6',
    padding: '48px'
  }}>
        <Story />
      </div>]
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Inline Links',
  render: () => <Content maxWidth="medium">
      <ContentText>
        The design system rejects "tech startup" trends. Learn more about{' '}
        <ContentLink href="#">the SDD framework</ContentLink> in our documentation.
        You can also explore <ContentLink href="#">color guidelines</ContentLink> and{' '}
        <ContentLink href="#">typography specifications</ContentLink>.
      </ContentText>

      <div style={{
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E5E0',
      borderRadius: '8px'
    }}>
        <ContentText size="small">
          <strong>Link Style:</strong> Deep Burgundy (#5D1F2D), underlined, 80% opacity on hover
        </ContentText>
      </div>
    </Content>,
  decorators: [Story => <div style={{
    backgroundColor: '#FAF9F6',
    padding: '48px'
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Column Widths',
  render: () => <>
      <div style={{
      marginBottom: '48px'
    }}>
        <ContentLabel>Narrow (600px desktop)</ContentLabel>
        <Content maxWidth="narrow" className="fn-demo-box">
          <ContentText>
            Narrow columns are ideal for focused reading experiences like articles
            and documentation sections.
          </ContentText>
        </Content>
      </div>

      <div style={{
      marginBottom: '48px'
    }}>
        <ContentLabel>Medium (700px desktop) - Default</ContentLabel>
        <Content maxWidth="medium" className="fn-demo-box">
          <ContentText>
            Medium width is the default "book column" providing optimal readability
            at 60-75 characters per line.
          </ContentText>
        </Content>
      </div>

      <div>
        <ContentLabel>Wide (900px desktop)</ContentLabel>
        <Content maxWidth="wide" className="fn-demo-box">
          <ContentText>
            Wide columns accommodate content that needs more horizontal space, such as
            tables, code blocks, or side-by-side comparisons.
          </ContentText>
        </Content>
      </div>
    </>,
  decorators: [Story => <>
        <style>{\`
          .fn-demo-box {
            background: white;
            border: 1px solid #E5E5E0;
            padding: 24px;
            border-radius: 8px;
            margin-top: 8px;
          }
          .fn-demo-box .fn-text {
            margin-bottom: 0;
          }
        \`}</style>
        <div style={{
      backgroundColor: '#FAF9F6',
      padding: '48px'
    }}>
          <Story />
        </div>
      </>]
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Article Layout Example',
  render: () => <Content maxWidth="medium" className="fn-article">
      <ContentLabel>Methodology</ContentLabel>

      <ContentHeading level={1}>
        Building Scalable Design Systems
      </ContentHeading>

      <ContentText size="large">
        A comprehensive guide to creating design systems that scale with your
        organization while maintaining consistency and developer experience.
      </ContentText>

      <ContentDivider />

      <ContentHeading level={2}>
        Introduction
      </ContentHeading>

      <ContentText>
        Design systems are more than component libraries. They represent a shared
        language between design and development, ensuring consistency across products
        while accelerating delivery.
      </ContentText>

      <ContentBlockquote>
        "A design system is a living document that evolves with your product
        and organization."
      </ContentBlockquote>

      <ContentHeading level={2}>
        Core Principles
      </ContentHeading>

      <ContentText>
        When building a design system, consider these foundational principles:
      </ContentText>

      <ContentList items={[<>
            <strong>Consistency</strong> — Every component should follow the same
            patterns and conventions
          </>, <>
            <strong>Flexibility</strong> — Components should adapt to various contexts
            without breaking
          </>, <>
            <strong>Documentation</strong> — Clear guidelines help teams adopt the
            system effectively
          </>, <>
            <strong>Accessibility</strong> — Built-in compliance with{' '}
            <ContentLink href="#">WCAG 2.2 AA standards</ContentLink>
          </>]} />

      <ContentDivider />

      <ContentText size="small">
        Last updated: January 2026 · Version 2.0
      </ContentText>
    </Content>,
  decorators: [Story => <>
        <style>{\`
          .fn-article {
            margin: 0 auto;
          }
        \`}</style>
        <div style={{
      backgroundColor: '#FAF9F6',
      padding: '48px 24px',
      minHeight: '100vh'
    }}>
          <Story />
        </div>
      </>]
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Responsive (resize window)',
  render: () => <Content maxWidth="medium" className="fn-article">
      <ContentLabel>Responsive Demo</ContentLabel>

      <ContentHeading level={1}>
        Resize the Window
      </ContentHeading>

      <ContentText size="large">
        This demo shows how content adapts from 320px mobile to 1440px desktop.
        Try resizing the browser window to see the responsive behavior.
      </ContentText>

      <ContentHeading level={2}>
        Breakpoints
      </ContentHeading>

      <ContentList items={['320px - Mobile (base styles)', '640px - Small tablet (sm:)', '768px - Tablet/Desktop (md:)']} />

      <ContentBlockquote>
        "Design for the smallest screen first, then enhance for larger screens."
      </ContentBlockquote>

      <ContentText>
        All typography, spacing, and layout adjusts smoothly across these breakpoints,
        maintaining readability and visual hierarchy at every size.
      </ContentText>
    </Content>,
  decorators: [Story => <>
        <style>{\`
          .fn-article {
            margin: 0 auto;
          }
        \`}</style>
        <div style={{
      backgroundColor: '#FAF9F6',
      padding: '24px',
      minHeight: '100vh'
    }}>
          <Story />
        </div>
      </>]
}`,...f.parameters?.docs?.source}}};const S=["AllElements","Headings","TextSizes","Blockquotes","Lists","Links","ColumnWidths","ArticleExample","ResponsiveDemo"];export{m as AllElements,C as ArticleExample,u as Blockquotes,y as ColumnWidths,p as Headings,g as Links,x as Lists,f as ResponsiveDemo,h as TextSizes,S as __namedExportsOrder,F as default};
