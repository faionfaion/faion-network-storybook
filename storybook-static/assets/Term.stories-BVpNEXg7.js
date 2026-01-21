import{r as o,j as e}from"./iframe-B_omF_R9.js";/* empty css             */import"./preload-helper-Ct5FWWRu.js";function n({term:t,definition:y,href:m,children:x}){const[i,r]=o.useState(!1),[v,g]=o.useState("top"),p=o.useRef(null),f=o.useRef(null);o.useEffect(()=>{if(i&&p.current&&f.current){const D=p.current.getBoundingClientRect(),j=f.current.offsetHeight;D.top<j+16?g("bottom"):g("top")}},[i]);const A=()=>r(!0),b=()=>r(!1),w=()=>r(!0),S=()=>r(!1),h=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"fn-term__text",children:x}),e.jsxs("span",{ref:f,className:`fn-term__tooltip fn-term__tooltip--${v} ${i?"fn-term__tooltip--visible":""}`,role:"tooltip","aria-hidden":!i,children:[e.jsx("span",{className:"fn-term__tooltip-term",children:t}),e.jsx("span",{className:"fn-term__tooltip-definition",children:y}),m&&e.jsx("span",{className:"fn-term__tooltip-link",children:"View in glossary"})]})]}),u={ref:p,className:"fn-term",onMouseEnter:A,onMouseLeave:b,onFocus:w,onBlur:S,tabIndex:0,"aria-describedby":i?`term-${t}`:void 0};return m?e.jsx("a",{...u,href:m,children:h}):e.jsx("span",{...u,children:h})}n.__docgenInfo={description:`Term - Inline term with tooltip for MDX

Displays a term with a definition tooltip on hover/focus.
Useful for technical terms, acronyms, and jargon.`,methods:[],displayName:"Term",props:{term:{required:!0,tsType:{name:"string"},description:"Term being defined"},definition:{required:!0,tsType:{name:"string"},description:"Definition of the term"},href:{required:!1,tsType:{name:"string"},description:"Optional link to full glossary entry"},children:{required:!0,tsType:{name:"ReactNode"},description:"Term text to display (defaults to term)"}}};const z={title:"MDX/Term",component:n,parameters:{layout:"padded",docs:{description:{component:"Inline term with tooltip definition for technical terms, acronyms, and jargon."}}},tags:["autodocs"]},a={args:{term:"SDD",definition:"Specification-Driven Development - a methodology that emphasizes clear documentation before implementation.",children:"SDD"},decorators:[t=>e.jsx("div",{style:{padding:"60px 40px",fontFamily:"Inter, sans-serif",fontSize:"16px",lineHeight:1.7},children:e.jsxs("p",{children:["The ",e.jsx(t,{})," methodology helps teams build better software."]})})]},s={args:{term:"MCP",definition:"Model Context Protocol - a standardized way for AI models to interact with external tools and data sources.",href:"/glossary/mcp",children:"MCP"},decorators:[t=>e.jsx("div",{style:{padding:"60px 40px",fontFamily:"Inter, sans-serif",fontSize:"16px",lineHeight:1.7},children:e.jsxs("p",{children:["Content is delivered via ",e.jsx(t,{})," server."]})})]},l={args:{term:"RAG",definition:"Retrieval-Augmented Generation - an AI technique that combines large language models with a retrieval system to generate responses based on relevant documents from a knowledge base, improving accuracy and reducing hallucinations.",children:"RAG pipeline"},decorators:[t=>e.jsx("div",{style:{padding:"60px 40px",fontFamily:"Inter, sans-serif",fontSize:"16px",lineHeight:1.7},children:e.jsxs("p",{children:["You can build a ",e.jsx(t,{})," using LangChain or LlamaIndex."]})})]},d={render:()=>e.jsx("div",{style:{padding:"60px 40px",fontFamily:"Inter, sans-serif",fontSize:"16px",lineHeight:1.7,maxWidth:"600px"},children:e.jsxs("p",{style:{color:"#4A4A4A"},children:["The"," ",e.jsx(n,{term:"SDD",definition:"Specification-Driven Development - a methodology that emphasizes clear documentation before implementation.",children:"SDD"})," ","workflow starts with writing a specification, then creating a design document, and finally implementing tasks. Our"," ",e.jsx(n,{term:"MCP",definition:"Model Context Protocol - a standardized way for AI models to interact with external tools and data sources.",href:"/glossary/mcp",children:"MCP server"})," ","delivers all 502 methodologies in real-time."]})})},c={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif",padding:"60px 20px"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",marginBottom:"16px",color:"#1C1C1E"},children:"Understanding the AI Development Stack"}),e.jsxs("p",{style:{fontSize:"16px",lineHeight:1.8,color:"#4A4A4A",marginBottom:"20px"},children:["Modern AI development involves several key concepts. A"," ",e.jsx(n,{term:"RAG",definition:"Retrieval-Augmented Generation - combines LLMs with retrieval systems to generate responses based on relevant documents.",href:"/glossary/rag",children:"RAG pipeline"})," ","allows you to ground your AI responses in factual data from your own knowledge base."]}),e.jsxs("p",{style:{fontSize:"16px",lineHeight:1.8,color:"#4A4A4A",marginBottom:"20px"},children:["To store and retrieve documents efficiently, you will use a"," ",e.jsx(n,{term:"Vector Database",definition:"A database optimized for storing and querying high-dimensional vectors, typically used for semantic search and similarity matching.",children:"vector database"})," ","like Pinecone, Chroma, or Weaviate. These databases use"," ",e.jsx(n,{term:"Embeddings",definition:"Dense numerical representations of text that capture semantic meaning, enabling similarity comparisons between documents.",children:"embeddings"})," ","to find semantically similar content."]}),e.jsxs("p",{style:{fontSize:"16px",lineHeight:1.8,color:"#4A4A4A"},children:["For orchestrating these components, frameworks like"," ",e.jsx(n,{term:"LangChain",definition:"A framework for developing applications powered by language models, providing tools for chains, agents, and memory.",href:"/glossary/langchain",children:"LangChain"})," ","and"," ",e.jsx(n,{term:"LlamaIndex",definition:"A data framework for LLM applications, focused on connecting custom data sources to large language models.",href:"/glossary/llamaindex",children:"LlamaIndex"})," ","provide helpful abstractions."]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'SDD',
    definition: 'Specification-Driven Development - a methodology that emphasizes clear documentation before implementation.',
    children: 'SDD'
  },
  decorators: [Story => <div style={{
    padding: '60px 40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: 1.7
  }}>
        <p>
          The <Story /> methodology helps teams build better software.
        </p>
      </div>]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'MCP',
    definition: 'Model Context Protocol - a standardized way for AI models to interact with external tools and data sources.',
    href: '/glossary/mcp',
    children: 'MCP'
  },
  decorators: [Story => <div style={{
    padding: '60px 40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: 1.7
  }}>
        <p>
          Content is delivered via <Story /> server.
        </p>
      </div>]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'RAG',
    definition: 'Retrieval-Augmented Generation - an AI technique that combines large language models with a retrieval system to generate responses based on relevant documents from a knowledge base, improving accuracy and reducing hallucinations.',
    children: 'RAG pipeline'
  },
  decorators: [Story => <div style={{
    padding: '60px 40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: 1.7
  }}>
        <p>
          You can build a <Story /> using LangChain or LlamaIndex.
        </p>
      </div>]
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '60px 40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    lineHeight: 1.7,
    maxWidth: '600px'
  }}>
      <p style={{
      color: '#4A4A4A'
    }}>
        The{' '}
        <Term term="SDD" definition="Specification-Driven Development - a methodology that emphasizes clear documentation before implementation.">
          SDD
        </Term>{' '}
        workflow starts with writing a specification, then creating a design document,
        and finally implementing tasks. Our{' '}
        <Term term="MCP" definition="Model Context Protocol - a standardized way for AI models to interact with external tools and data sources." href="/glossary/mcp">
          MCP server
        </Term>{' '}
        delivers all 502 methodologies in real-time.
      </p>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif',
    padding: '60px 20px'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Understanding the AI Development Stack
      </h2>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.8,
      color: '#4A4A4A',
      marginBottom: '20px'
    }}>
        Modern AI development involves several key concepts. A{' '}
        <Term term="RAG" definition="Retrieval-Augmented Generation - combines LLMs with retrieval systems to generate responses based on relevant documents." href="/glossary/rag">
          RAG pipeline
        </Term>{' '}
        allows you to ground your AI responses in factual data from your own knowledge base.
      </p>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.8,
      color: '#4A4A4A',
      marginBottom: '20px'
    }}>
        To store and retrieve documents efficiently, you will use a{' '}
        <Term term="Vector Database" definition="A database optimized for storing and querying high-dimensional vectors, typically used for semantic search and similarity matching.">
          vector database
        </Term>{' '}
        like Pinecone, Chroma, or Weaviate. These databases use{' '}
        <Term term="Embeddings" definition="Dense numerical representations of text that capture semantic meaning, enabling similarity comparisons between documents.">
          embeddings
        </Term>{' '}
        to find semantically similar content.
      </p>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.8,
      color: '#4A4A4A'
    }}>
        For orchestrating these components, frameworks like{' '}
        <Term term="LangChain" definition="A framework for developing applications powered by language models, providing tools for chains, agents, and memory." href="/glossary/langchain">
          LangChain
        </Term>{' '}
        and{' '}
        <Term term="LlamaIndex" definition="A data framework for LLM applications, focused on connecting custom data sources to large language models." href="/glossary/llamaindex">
          LlamaIndex
        </Term>{' '}
        provide helpful abstractions.
      </p>
    </article>
}`,...c.parameters?.docs?.source}}};const L=["Default","WithLink","LongDefinition","MultipleTerms","InArticle"];export{a as Default,c as InArticle,l as LongDefinition,d as MultipleTerms,s as WithLink,L as __namedExportsOrder,z as default};
