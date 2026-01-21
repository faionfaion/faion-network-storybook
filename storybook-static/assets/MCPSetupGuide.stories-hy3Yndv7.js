import{r as h,j as e}from"./iframe-B_omF_R9.js";import"./preload-helper-Ct5FWWRu.js";function x({licenseKey:s,serverUrl:f="https://mcp.faion.net/sse",className:j=""}){const[a,t]=h.useState(null),[r,y]=h.useState(1),g=["fn-mcp-setup",j].filter(Boolean).join(" "),u=`{
  "mcpServers": {
    "faion-network": {
      "url": "${f}",
      "headers": {
        "Authorization": "Bearer ${s}"
      }
    }
  }
}`,l=async(n,m)=>{try{await navigator.clipboard.writeText(n),t(m),setTimeout(()=>t(null),2e3)}catch{const o=document.createElement("textarea");o.value=n,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),t(m),setTimeout(()=>t(null),2e3)}},C=[{number:1,title:"Open Claude Code Settings",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Open your Claude Code settings file located at:"}),e.jsxs("div",{className:"fn-mcp-setup__code-block",children:[e.jsx("code",{children:"~/.claude/settings.json"}),e.jsx("button",{type:"button",className:"fn-mcp-setup__copy-btn",onClick:()=>l("~/.claude/settings.json",1),"aria-label":"Copy path",children:a===1?e.jsx(p,{}):e.jsx(d,{})})]})]})},{number:2,title:"Add MCP Configuration",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Add the following configuration to your settings file:"}),e.jsxs("div",{className:"fn-mcp-setup__code-block fn-mcp-setup__code-block--multiline",children:[e.jsx("pre",{children:e.jsx("code",{children:u})}),e.jsx("button",{type:"button",className:"fn-mcp-setup__copy-btn",onClick:()=>l(u,2),"aria-label":"Copy configuration",children:a===2?e.jsx(p,{}):e.jsx(d,{})})]})]})},{number:3,title:"Restart Claude Code",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Restart Claude Code to apply the changes. You can do this by:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Closing and reopening your terminal"}),e.jsxs("li",{children:["Or running ",e.jsx("code",{children:"claude --restart"})]})]})]})},{number:4,title:"Verify Connection",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Test your connection by running a Faion Network skill:"}),e.jsxs("div",{className:"fn-mcp-setup__code-block",children:[e.jsx("code",{children:"/faion-net"}),e.jsx("button",{type:"button",className:"fn-mcp-setup__copy-btn",onClick:()=>l("/faion-net",4),"aria-label":"Copy command",children:a===4?e.jsx(p,{}):e.jsx(d,{})})]}),e.jsx("p",{className:"fn-mcp-setup__note",children:"If successful, you'll see the Faion Network skill interface."})]})}];return e.jsxs("div",{className:g,children:[e.jsxs("div",{className:"fn-mcp-setup__header",children:[e.jsx("h3",{className:"fn-mcp-setup__title",children:"MCP Setup Guide"}),e.jsx("p",{className:"fn-mcp-setup__description",children:"Follow these steps to connect Claude Code to your Faion Network subscription."})]}),e.jsx("div",{className:"fn-mcp-setup__steps",children:C.map(n=>e.jsxs("div",{className:`fn-mcp-setup__step ${r===n.number?"fn-mcp-setup__step--expanded":""}`,children:[e.jsxs("button",{type:"button",className:"fn-mcp-setup__step-header",onClick:()=>y(r===n.number?0:n.number),"aria-expanded":r===n.number,children:[e.jsx("span",{className:"fn-mcp-setup__step-number",children:n.number}),e.jsx("span",{className:"fn-mcp-setup__step-title",children:n.title}),e.jsx(_,{})]}),r===n.number&&e.jsx("div",{className:"fn-mcp-setup__step-content",children:n.content})]},n.number))})]})}function d(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}function p(){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}function _(){return e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})}x.__docgenInfo={description:`MCPSetupGuide - Step-by-step guide for MCP configuration

Shows instructions for configuring Claude Code with MCP server access.`,methods:[],displayName:"MCPSetupGuide",props:{licenseKey:{required:!0,tsType:{name:"string"},description:"User's license key"},serverUrl:{required:!1,tsType:{name:"string"},description:"MCP server URL",defaultValue:{value:"'https://mcp.faion.net/sse'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name",defaultValue:{value:"''",computed:!1}}}};const k={title:"UserDashboard/MCPSetupGuide",component:x,parameters:{layout:"padded",docs:{description:{component:"Step-by-step guide for configuring Claude Code with MCP server access."}}},tags:["autodocs"]},i={args:{licenseKey:"lic_abc123def456ghi789jkl012mno345",serverUrl:"https://mcp.faion.net/sse"},decorators:[s=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(s,{})})]},c={args:{licenseKey:"lic_team_xyz789abc456def123ghi012",serverUrl:"https://mcp-staging.faion.net/sse"},decorators:[s=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(s,{})})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    licenseKey: 'lic_abc123def456ghi789jkl012mno345',
    serverUrl: 'https://mcp.faion.net/sse'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    licenseKey: 'lic_team_xyz789abc456def123ghi012',
    serverUrl: 'https://mcp-staging.faion.net/sse'
  },
  decorators: [Story => <div style={{
    maxWidth: '600px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};const S=["Default","CustomServer"];export{c as CustomServer,i as Default,S as __namedExportsOrder,k as default};
