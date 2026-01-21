import{r as C,j as e}from"./iframe-B_omF_R9.js";import{M as F}from"./Monogram-Ct6H_8uF.js";/* empty css                 *//* empty css                        */import"./preload-helper-Ct5FWWRu.js";const k=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"9",rx:"1"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"5",rx:"1"}),e.jsx("rect",{x:"14",y:"12",width:"7",height:"9",rx:"1"}),e.jsx("rect",{x:"3",y:"16",width:"7",height:"5",rx:"1"})]}),N=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M9 18l6-6-6-6"})}),S=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),I=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function u({navigation:a,activeNavId:f,breadcrumbs:m,user:i,children:g,onNavigate:x,onUserMenuClick:v,onLogoClick:y}){const[b,o]=C.useState(!1),j=n=>{x?.(n),o(!1)};return e.jsxs("div",{className:"fn-dashboard-layout",children:[e.jsxs("aside",{className:`fn-dashboard-sidebar ${b?"fn-dashboard-sidebar--open":""}`,children:[e.jsxs("div",{className:"fn-dashboard-sidebar__header",children:[e.jsx(F,{size:"medium",onClick:y}),e.jsx("button",{className:"fn-dashboard-sidebar__close",onClick:()=>o(!1),"aria-label":"Close sidebar",children:e.jsx(I,{})})]}),e.jsx("nav",{className:"fn-dashboard-sidebar__nav",children:a.map((n,t)=>e.jsxs("div",{className:"fn-dashboard-sidebar__section",children:[n.title&&e.jsx("h3",{className:"fn-dashboard-sidebar__section-title",children:n.title}),e.jsx("ul",{className:"fn-dashboard-sidebar__list",children:n.items.map(r=>e.jsx("li",{children:e.jsxs("button",{onClick:()=>j(r.href),className:`fn-dashboard-sidebar__link ${f===r.id?"fn-dashboard-sidebar__link--active":""}`,children:[e.jsx("span",{className:"fn-dashboard-sidebar__link-icon",children:r.icon||e.jsx(k,{})}),e.jsx("span",{className:"fn-dashboard-sidebar__link-label",children:r.label}),r.badge&&e.jsx("span",{className:"fn-dashboard-sidebar__link-badge",children:r.badge})]})},r.id))})]},t))})]}),e.jsxs("div",{className:"fn-dashboard-main",children:[e.jsxs("header",{className:"fn-dashboard-header",children:[e.jsxs("div",{className:"fn-dashboard-header__left",children:[e.jsx("button",{className:"fn-dashboard-header__menu-btn",onClick:()=>o(!0),"aria-label":"Open menu",children:e.jsx(S,{})}),m&&m.length>0&&e.jsx("nav",{className:"fn-dashboard-breadcrumbs","aria-label":"Breadcrumb",children:e.jsx("ol",{className:"fn-dashboard-breadcrumbs__list",children:m.map((n,t)=>e.jsxs("li",{className:"fn-dashboard-breadcrumbs__item",children:[t>0&&e.jsx("span",{className:"fn-dashboard-breadcrumbs__separator",children:e.jsx(N,{})}),n.href?e.jsx("button",{onClick:()=>x?.(n.href),className:"fn-dashboard-breadcrumbs__link",children:n.label}):e.jsx("span",{className:"fn-dashboard-breadcrumbs__current",children:n.label})]},t))})})]}),i&&e.jsxs("button",{className:"fn-dashboard-user",onClick:v,children:[e.jsx("div",{className:"fn-dashboard-user__avatar",children:i.avatarUrl?e.jsx("img",{src:i.avatarUrl,alt:i.name}):e.jsx("span",{children:i.initials||i.name.charAt(0)})}),e.jsxs("div",{className:"fn-dashboard-user__info",children:[e.jsx("span",{className:"fn-dashboard-user__name",children:i.name}),e.jsx("span",{className:"fn-dashboard-user__email",children:i.email})]})]})]}),e.jsx("main",{className:"fn-dashboard-content",children:g})]}),b&&e.jsx("div",{className:"fn-dashboard-overlay",onClick:()=>o(!1),"aria-hidden":"true"})]})}u.__docgenInfo={description:`DashboardLayout - Layout for authenticated dashboard pages

Features:
- Sidebar navigation component
- Header with user avatar/name
- Collapsible sidebar on mobile
- Proper content area spacing
- Breadcrumbs support`,methods:[],displayName:"DashboardLayout",props:{navigation:{required:!0,tsType:{name:"Array",elements:[{name:"NavSection"}],raw:"NavSection[]"},description:"Navigation sections"},activeNavId:{required:!1,tsType:{name:"string"},description:"Current active nav item id"},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Breadcrumbs"},user:{required:!1,tsType:{name:"UserInfo"},description:"User info for header"},children:{required:!0,tsType:{name:"ReactNode"},description:"Main content"},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:"Callback when nav item clicked"},onUserMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when user menu clicked"},onLogoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when logo clicked"}}};const w=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),_=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),E=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),A=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),M=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),z=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),D=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),s=[{items:[{id:"dashboard",label:"Dashboard",href:"/dashboard",icon:e.jsx(w,{})},{id:"methodologies",label:"Methodologies",href:"/methodologies",icon:e.jsx(_,{}),badge:"502"},{id:"favorites",label:"Favorites",href:"/favorites",icon:e.jsx(E,{})}]},{title:"Account",items:[{id:"profile",label:"Profile",href:"/profile",icon:e.jsx(A,{})},{id:"billing",label:"Billing",href:"/billing",icon:e.jsx(M,{})},{id:"settings",label:"Settings",href:"/settings",icon:e.jsx(z,{})}]},{title:"Support",items:[{id:"help",label:"Help Center",href:"/help",icon:e.jsx(D,{})}]}],U={title:"FAION/Layout/DashboardLayout",component:u,parameters:{layout:"fullscreen",docs:{description:{component:`
Layout for authenticated dashboard pages.

## Features
- Sidebar navigation with sections
- Header with user avatar and breadcrumbs
- Collapsible sidebar on mobile
- Badge support for nav items
- Custom icons support

## Use Cases
- User dashboard
- Methodology library
- Settings pages
- Billing management
- Profile pages
        `}}},tags:["autodocs"],argTypes:{activeNavId:{control:"select",options:["dashboard","methodologies","favorites","profile","billing","settings","help"],description:"Currently active navigation item"},onNavigate:{action:"navigate"},onUserMenuClick:{action:"user-menu-click"},onLogoClick:{action:"logo-click"}}},l={args:{navigation:s,activeNavId:"dashboard",user:{name:"Ruslan Faion",email:"ruslan@faion.net",initials:"RF"},breadcrumbs:[{label:"Dashboard"}],children:e.jsxs("div",{children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",color:"#1C1C1E",margin:"0 0 8px 0"},children:"Welcome back, Ruslan"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",margin:"0 0 32px 0"},children:"Here's what's happening with your account today."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px"},children:["Methodologies","Favorites","Progress"].map(a=>e.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",padding:"24px"},children:[e.jsx("p",{style:{fontFamily:"Inter",fontSize:"12px",color:"#4A4A4A",margin:"0 0 8px 0",textTransform:"uppercase",letterSpacing:"0.05em"},children:a}),e.jsx("p",{style:{fontFamily:"Georgia",fontSize:"36px",color:"#1C1C1E",margin:0},children:Math.floor(Math.random()*500)})]},a))})]})}},d={name:"Methodologies Page",args:{navigation:s,activeNavId:"methodologies",user:{name:"Ruslan Faion",email:"ruslan@faion.net",initials:"RF"},breadcrumbs:[{label:"Dashboard",href:"/dashboard"},{label:"Methodologies"}],children:e.jsxs("div",{children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",color:"#1C1C1E",margin:"0 0 24px 0"},children:"Methodologies"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["SDD Workflow","RICE Prioritization","User Story Mapping","RAG Pipeline Design"].map(a=>e.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"Inter",fontSize:"14px",color:"#1C1C1E"},children:a}),e.jsx("button",{style:{padding:"8px 16px",backgroundColor:"transparent",border:"1px solid #E5E5E0",borderRadius:"6px",fontFamily:"Inter",fontSize:"12px",cursor:"pointer"},children:"View"})]},a))})]})}},c={name:"Settings Page",args:{navigation:s,activeNavId:"settings",user:{name:"Ruslan Faion",email:"ruslan@faion.net",initials:"RF"},breadcrumbs:[{label:"Dashboard",href:"/dashboard"},{label:"Account",href:"/account"},{label:"Settings"}],children:e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",color:"#1C1C1E",margin:"0 0 24px 0"},children:"Settings"}),e.jsxs("div",{style:{backgroundColor:"#FFFFFF",border:"1px solid #E5E5E0",borderRadius:"8px",padding:"24px"},children:[e.jsx("h2",{style:{fontFamily:"Inter",fontSize:"14px",fontWeight:"600",color:"#1C1C1E",margin:"0 0 16px 0"},children:"Notifications"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["Email notifications","Product updates","New methodologies"].map(a=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",fontFamily:"Inter",fontSize:"14px",color:"#4A4A4A"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),a]},a))})]})]})}},h={name:"Without User Info",args:{navigation:s,activeNavId:"dashboard",breadcrumbs:[{label:"Dashboard"}],children:e.jsxs("div",{children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"32px",color:"#1C1C1E",margin:"0 0 24px 0"},children:"Dashboard"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:"Content area without user info in header."})]})}},p={name:"Mobile View",parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile, the sidebar is hidden by default. Click the hamburger menu to reveal it."}}},args:{navigation:s,activeNavId:"dashboard",user:{name:"Ruslan Faion",email:"ruslan@faion.net",initials:"RF"},breadcrumbs:[{label:"Dashboard"}],children:e.jsxs("div",{children:[e.jsx("h1",{style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E",margin:"0 0 16px 0"},children:"Dashboard"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A"},children:"Click the menu button to open the sidebar."})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: defaultNavigation,
    activeNavId: 'dashboard',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF'
    },
    breadcrumbs: [{
      label: 'Dashboard'
    }],
    children: <div>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#1C1C1E',
        margin: '0 0 8px 0'
      }}>
          Welcome back, Ruslan
        </h1>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        margin: '0 0 32px 0'
      }}>
          Here's what's happening with your account today.
        </p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }}>
          {['Methodologies', 'Favorites', 'Progress'].map(title => <div key={title} style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E0',
          borderRadius: '8px',
          padding: '24px'
        }}>
              <p style={{
            fontFamily: 'Inter',
            fontSize: '12px',
            color: '#4A4A4A',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>{title}</p>
              <p style={{
            fontFamily: 'Georgia',
            fontSize: '36px',
            color: '#1C1C1E',
            margin: 0
          }}>{Math.floor(Math.random() * 500)}</p>
            </div>)}
        </div>
      </div>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Methodologies Page',
  args: {
    navigation: defaultNavigation,
    activeNavId: 'methodologies',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF'
    },
    breadcrumbs: [{
      label: 'Dashboard',
      href: '/dashboard'
    }, {
      label: 'Methodologies'
    }],
    children: <div>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#1C1C1E',
        margin: '0 0 24px 0'
      }}>
          Methodologies
        </h1>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          {['SDD Workflow', 'RICE Prioritization', 'User Story Mapping', 'RAG Pipeline Design'].map(title => <div key={title} style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E0',
          borderRadius: '8px',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
              <span style={{
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#1C1C1E'
          }}>{title}</span>
              <button style={{
            padding: '8px 16px',
            backgroundColor: 'transparent',
            border: '1px solid #E5E5E0',
            borderRadius: '6px',
            fontFamily: 'Inter',
            fontSize: '12px',
            cursor: 'pointer'
          }}>View</button>
            </div>)}
        </div>
      </div>
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Settings Page',
  args: {
    navigation: defaultNavigation,
    activeNavId: 'settings',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF'
    },
    breadcrumbs: [{
      label: 'Dashboard',
      href: '/dashboard'
    }, {
      label: 'Account',
      href: '/account'
    }, {
      label: 'Settings'
    }],
    children: <div style={{
      maxWidth: '600px'
    }}>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#1C1C1E',
        margin: '0 0 24px 0'
      }}>
          Settings
        </h1>
        <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5E0',
        borderRadius: '8px',
        padding: '24px'
      }}>
          <h2 style={{
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '600',
          color: '#1C1C1E',
          margin: '0 0 16px 0'
        }}>Notifications</h2>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            {['Email notifications', 'Product updates', 'New methodologies'].map(label => <label key={label} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'Inter',
            fontSize: '14px',
            color: '#4A4A4A'
          }}>
                <input type="checkbox" defaultChecked />
                {label}
              </label>)}
          </div>
        </div>
      </div>
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Without User Info',
  args: {
    navigation: defaultNavigation,
    activeNavId: 'dashboard',
    breadcrumbs: [{
      label: 'Dashboard'
    }],
    children: <div>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '32px',
        color: '#1C1C1E',
        margin: '0 0 24px 0'
      }}>
          Dashboard
        </h1>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>
          Content area without user info in header.
        </p>
      </div>
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'On mobile, the sidebar is hidden by default. Click the hamburger menu to reveal it.'
      }
    }
  },
  args: {
    navigation: defaultNavigation,
    activeNavId: 'dashboard',
    user: {
      name: 'Ruslan Faion',
      email: 'ruslan@faion.net',
      initials: 'RF'
    },
    breadcrumbs: [{
      label: 'Dashboard'
    }],
    children: <div>
        <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        color: '#1C1C1E',
        margin: '0 0 16px 0'
      }}>
          Dashboard
        </h1>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A'
      }}>
          Click the menu button to open the sidebar.
        </p>
      </div>
  }
}`,...p.parameters?.docs?.source}}};const G=["Default","MethodologiesPage","SettingsPage","WithoutUser","MobileView"];export{l as Default,d as MethodologiesPage,p as MobileView,c as SettingsPage,h as WithoutUser,G as __namedExportsOrder,U as default};
