import{r as I,j as e}from"./iframe-B_omF_R9.js";/* empty css                    */import"./preload-helper-Ct5FWWRu.js";const k=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),M=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),q=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"})]}),B={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",bash:"Bash",shell:"Shell",sh:"Shell",json:"JSON",yaml:"YAML",yml:"YAML",css:"CSS",html:"HTML",md:"Markdown",markdown:"Markdown",sql:"SQL",go:"Go",rust:"Rust",java:"Java",cpp:"C++",c:"C"};function g({code:n,language:s="text",filename:y,showLineNumbers:f=!0,highlightLines:C=[],showCopy:_=!0,maxHeight:j,caption:v,className:T=""}){const[t,S]=I.useState(!1),W=n.split(`
`),A=B[s.toLowerCase()]||s,N=new Set(C),L=async()=>{try{await navigator.clipboard.writeText(n),S(!0),setTimeout(()=>S(!1),2e3)}catch(h){console.error("Failed to copy:",h)}},H=["fn-code-example",f&&"fn-code-example--with-lines",T].filter(Boolean).join(" ");return e.jsxs("div",{className:H,children:[e.jsxs("div",{className:"fn-code-example__header",children:[e.jsx("div",{className:"fn-code-example__info",children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"fn-code-example__file-icon",children:e.jsx(q,{})}),e.jsx("span",{className:"fn-code-example__filename",children:y})]}):e.jsx("span",{className:"fn-code-example__language",children:A})}),_&&e.jsxs("button",{type:"button",className:`fn-code-example__copy ${t?"fn-code-example__copy--copied":""}`,onClick:L,"aria-label":t?"Copied!":"Copy code",children:[t?e.jsx(M,{}):e.jsx(k,{}),e.jsx("span",{children:t?"Copied!":"Copy"})]})]}),e.jsx("div",{className:"fn-code-example__content",style:j?{maxHeight:j,overflowY:"auto"}:void 0,children:e.jsx("pre",{className:"fn-code-example__pre",children:e.jsx("code",{className:`fn-code-example__code language-${s}`,children:W.map((h,b)=>{const w=b+1,E=N.has(w);return e.jsxs("div",{className:`fn-code-example__line ${E?"fn-code-example__line--highlighted":""}`,children:[f&&e.jsx("span",{className:"fn-code-example__line-number",children:w}),e.jsx("span",{className:"fn-code-example__line-content",children:h||" "})]},b)})})})}),v&&e.jsx("div",{className:"fn-code-example__caption",children:v})]})}g.__docgenInfo={description:`CodeExample - Syntax-highlighted code block for MDX

Displays code with optional line numbers, highlighting, and copy button.`,methods:[],displayName:"CodeExample",props:{code:{required:!0,tsType:{name:"string"},description:"Code content"},language:{required:!1,tsType:{name:"string"},description:"Programming language",defaultValue:{value:"'text'",computed:!1}},filename:{required:!1,tsType:{name:"string"},description:"Optional filename"},showLineNumbers:{required:!1,tsType:{name:"boolean"},description:"Show line numbers",defaultValue:{value:"true",computed:!1}},highlightLines:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Lines to highlight (1-indexed)",defaultValue:{value:"[]",computed:!1}},showCopy:{required:!1,tsType:{name:"boolean"},description:"Show copy button",defaultValue:{value:"true",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"Max height with scroll"},caption:{required:!1,tsType:{name:"string"},description:"Caption or description"},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const V={title:"MDX/CodeExample",component:g,parameters:{layout:"padded",docs:{description:{component:"Syntax-highlighted code block with copy button, line numbers, and highlighting support."}}},tags:["autodocs"],argTypes:{showLineNumbers:{control:"boolean",description:"Show line numbers"},showCopy:{control:"boolean",description:"Show copy button"}}},u=`function greet(name) {
  const greeting = \`Hello, \${name}!\`;
  console.log(greeting);
  return greeting;
}

// Usage
greet('World');`,x=`interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`,P=`def calculate_fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence up to n numbers."""
    if n <= 0:
        return []
    if n == 1:
        return [0]

    fib = [0, 1]
    while len(fib) < n:
        fib.append(fib[-1] + fib[-2])

    return fib

# Generate first 10 Fibonacci numbers
result = calculate_fibonacci(10)
print(result)`,F=`#!/bin/bash

# Deploy script for faion.net
echo "Starting deployment..."

npm run build
rsync -avz ./dist/ user@server:/var/www/faion.net/

echo "Deployment complete!"`,a={args:{code:u,language:"javascript"},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},o={args:{code:x,language:"typescript",filename:"api/users.ts"},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},r={args:{code:P,language:"python",filename:"fibonacci.py"},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},i={args:{code:F,language:"bash",filename:"deploy.sh"},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},c={args:{code:x,language:"typescript",highlightLines:[7,8,9],caption:"Lines 7-9 show the async fetch implementation"},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},l={args:{code:u,language:"javascript",showLineNumbers:!1},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},p={args:{code:`// Long code example
${Array.from({length:30},(n,s)=>`console.log('Line ${s+1}');`).join(`
`)}`,language:"javascript",maxHeight:"300px"},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},d={args:{code:u,language:"javascript",caption:"Example: A simple greeting function"},decorators:[n=>e.jsx("div",{style:{maxWidth:"700px"},children:e.jsx(n,{})})]},m={render:()=>e.jsxs("article",{style:{maxWidth:"700px",fontFamily:"Inter, sans-serif"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"24px",marginBottom:"16px",color:"#1C1C1E"},children:"Creating a Simple API Endpoint"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginBottom:"24px"},children:"In this example, we will create a simple TypeScript function to fetch user data from an API. This pattern is commonly used in modern web applications."}),e.jsx(g,{code:x,language:"typescript",filename:"api/users.ts",highlightLines:[7,8,9],caption:"The fetchUser function demonstrates async/await pattern"}),e.jsx("p",{style:{fontSize:"16px",lineHeight:1.7,color:"#4A4A4A",marginTop:"24px"},children:"Notice how we use TypeScript interfaces to define the shape of our data. This provides type safety and better developer experience."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    code: jsCode,
    language: 'javascript'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    code: tsCode,
    language: 'typescript',
    filename: 'api/users.ts'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    code: pythonCode,
    language: 'python',
    filename: 'fibonacci.py'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    code: bashCode,
    language: 'bash',
    filename: 'deploy.sh'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    code: tsCode,
    language: 'typescript',
    highlightLines: [7, 8, 9],
    caption: 'Lines 7-9 show the async fetch implementation'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    code: jsCode,
    language: 'javascript',
    showLineNumbers: false
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    code: \`// Long code example
\${Array.from({
      length: 30
    }, (_, i) => \`console.log('Line \${i + 1}');\`).join('\\n')}\`,
    language: 'javascript',
    maxHeight: '300px'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    code: jsCode,
    language: 'javascript',
    caption: 'Example: A simple greeting function'
  },
  decorators: [Story => <div style={{
    maxWidth: '700px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <article style={{
    maxWidth: '700px',
    fontFamily: 'Inter, sans-serif'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      marginBottom: '16px',
      color: '#1C1C1E'
    }}>
        Creating a Simple API Endpoint
      </h2>
      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginBottom: '24px'
    }}>
        In this example, we will create a simple TypeScript function to fetch user data from an API.
        This pattern is commonly used in modern web applications.
      </p>

      <CodeExample code={tsCode} language="typescript" filename="api/users.ts" highlightLines={[7, 8, 9]} caption="The fetchUser function demonstrates async/await pattern" />

      <p style={{
      fontSize: '16px',
      lineHeight: 1.7,
      color: '#4A4A4A',
      marginTop: '24px'
    }}>
        Notice how we use TypeScript interfaces to define the shape of our data.
        This provides type safety and better developer experience.
      </p>
    </article>
}`,...m.parameters?.docs?.source}}};const U=["Default","TypeScript","Python","Bash","WithHighlightedLines","WithoutLineNumbers","WithMaxHeight","WithCaption","InArticle"];export{i as Bash,a as Default,m as InArticle,r as Python,o as TypeScript,d as WithCaption,c as WithHighlightedLines,p as WithMaxHeight,l as WithoutLineNumbers,U as __namedExportsOrder,V as default};
