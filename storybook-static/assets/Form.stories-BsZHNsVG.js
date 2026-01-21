import{j as e}from"./iframe-B_omF_R9.js";import{F as r,I as o,T as b,a as l}from"./Input-CA3R2Fs4.js";import{B as i}from"./Button-qKon32FP.js";/* empty css              *//* empty css               *//* empty css             */import"./preload-helper-Ct5FWWRu.js";const q={title:"FAION/Core UI/Form",parameters:{layout:"centered",docs:{description:{component:`
Form layout components following the Faion "Digital Journal" aesthetic.

## Features
- Label styling with required indicator
- Form item with proper spacing (8-point grid)
- Form description (help text) in Graphite
- Form message (error) in red
- Form sections with titles
- Form actions with alignment options
- Grid layouts for multi-column forms

## Design Specs
- **Input Height:** Default 44px, Small 36px, Large 52px
- **Border:** 1px Taupe Grey (#E5E5E0)
- **Focus Ring:** 3px burgundy (rgba(93, 31, 45, 0.15))
- **Border Radius:** 6px
- **Font:** Inter, 16px

## Layout Components
- **FormField**: Label + input + hint/error wrapper
- **Form Group**: Vertical stack of form items
- **Form Section**: Titled section with border
- **Form Actions**: Button row with alignment
- **Form Grid**: Multi-column layout
        `}}},tags:["autodocs"]},y=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}),e.jsx("path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"})]}),w=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"8",r:"5"}),e.jsx("path",{d:"M20 21a8 8 0 0 0-16 0"})]}),j=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),t={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Email Address",required:!0,children:e.jsx(o,{type:"email",placeholder:"name@example.com"})})})},s={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Password",required:!0,hint:"Must be at least 8 characters",children:e.jsx(o,{type:"password",placeholder:"Enter password"})})})},a={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{label:"Email Address",required:!0,error:"Please enter a valid email address",children:e.jsx(o,{type:"email",error:!0,defaultValue:"invalid-email"})})})},n={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{label:"Bio",hint:"Tell us about yourself (max 500 characters)",children:e.jsx(b,{placeholder:"I'm a solopreneur who..."})})})},d={render:()=>e.jsxs("div",{className:"fn-form-group",style:{width:"400px"},children:[e.jsx(r,{label:"Full Name",required:!0,children:e.jsx(o,{placeholder:"John Doe"})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(l,{iconLeft:e.jsx(y,{}),type:"email",placeholder:"john@example.com"})}),e.jsx(r,{label:"Message",required:!0,children:e.jsx(b,{placeholder:"How can we help?"})}),e.jsxs("div",{className:"fn-form-actions fn-form-actions--end",children:[e.jsx(i,{variant:"ghost",children:"Cancel"}),e.jsx(i,{variant:"primary",children:"Send Message"})]})]}),parameters:{docs:{description:{story:"Standard vertical form layout with form group for consistent spacing."}}}},c={render:()=>e.jsxs("div",{className:"fn-form-inline",style:{width:"600px"},children:[e.jsx(r,{label:"Search",children:e.jsx(o,{placeholder:"Enter keyword..."})}),e.jsx(i,{variant:"primary",children:"Search"})]}),parameters:{docs:{description:{story:"Inline form layout for search bars and simple filters."}}}},p={render:()=>e.jsxs("div",{style:{width:"600px"},children:[e.jsxs("div",{className:"fn-form-grid fn-form-grid--2col",children:[e.jsx(r,{label:"First Name",required:!0,children:e.jsx(o,{placeholder:"John"})}),e.jsx(r,{label:"Last Name",required:!0,children:e.jsx(o,{placeholder:"Doe"})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(o,{type:"email",placeholder:"john@example.com"})}),e.jsx(r,{label:"Phone",children:e.jsx(o,{type:"tel",placeholder:"+1 (555) 000-0000"})})]}),e.jsxs("div",{className:"fn-form-actions fn-form-actions--end",style:{marginTop:"24px"},children:[e.jsx(i,{variant:"ghost",children:"Cancel"}),e.jsx(i,{variant:"primary",children:"Save"})]})]}),parameters:{docs:{description:{story:"Two-column grid layout for longer forms. Responsive to single column on mobile."}}}},m={render:()=>e.jsxs("div",{style:{width:"500px"},children:[e.jsxs("div",{className:"fn-form-section",children:[e.jsx("h3",{className:"fn-form-section__title",children:"Personal Information"}),e.jsx("p",{className:"fn-form-section__description",children:"Tell us about yourself"}),e.jsxs("div",{className:"fn-form-group",children:[e.jsx(r,{label:"Full Name",required:!0,children:e.jsx(o,{placeholder:"John Doe"})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(o,{type:"email",placeholder:"john@example.com"})})]})]}),e.jsxs("div",{className:"fn-form-section",children:[e.jsx("h3",{className:"fn-form-section__title",children:"Company Details"}),e.jsx("p",{className:"fn-form-section__description",children:"Optional for solo users"}),e.jsxs("div",{className:"fn-form-group",children:[e.jsx(r,{label:"Company Name",children:e.jsx(o,{placeholder:"Acme Inc."})}),e.jsx(r,{label:"Role",children:e.jsx(o,{placeholder:"Founder"})})]})]}),e.jsxs("div",{className:"fn-form-actions fn-form-actions--end",children:[e.jsx(i,{variant:"ghost",children:"Cancel"}),e.jsx(i,{variant:"primary",children:"Save Profile"})]})]}),parameters:{docs:{description:{story:"Form with titled sections, useful for settings or profile pages."}}}},h={render:()=>e.jsxs("div",{style:{width:"400px",padding:"32px",backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #E5E5E0"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",fontWeight:400,color:"#1C1C1E",marginBottom:"8px",textAlign:"center"},children:"Welcome back"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"24px",textAlign:"center"},children:"Sign in to your account"}),e.jsxs("div",{className:"fn-form-group",children:[e.jsx(r,{label:"Email",required:!0,children:e.jsx(l,{iconLeft:e.jsx(y,{}),type:"email",placeholder:"name@example.com"})}),e.jsx(r,{label:"Password",required:!0,children:e.jsx(l,{iconLeft:e.jsx(j,{}),type:"password",placeholder:"Enter password"})}),e.jsx(i,{variant:"primary",fullWidth:!0,children:"Sign In"}),e.jsxs("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",textAlign:"center",margin:0},children:["Don't have an account? ",e.jsx("a",{href:"#",style:{color:"#5D1F2D",textDecoration:"none"},children:"Sign up"})]})]})]}),parameters:{docs:{description:{story:"Complete login form example with icons and branding."}}}},u={render:()=>e.jsxs("div",{style:{width:"450px",padding:"32px",backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #E5E5E0"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"28px",fontWeight:400,color:"#1C1C1E",marginBottom:"8px",textAlign:"center"},children:"Create your account"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",marginBottom:"24px",textAlign:"center"},children:"Start your solopreneur journey"}),e.jsxs("div",{className:"fn-form-group",children:[e.jsxs("div",{className:"fn-form-grid fn-form-grid--2col",children:[e.jsx(r,{label:"First Name",required:!0,children:e.jsx(o,{placeholder:"John"})}),e.jsx(r,{label:"Last Name",required:!0,children:e.jsx(o,{placeholder:"Doe"})})]}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(l,{iconLeft:e.jsx(y,{}),type:"email",placeholder:"name@example.com"})}),e.jsx(r,{label:"Password",required:!0,hint:"Min 8 characters, 1 uppercase, 1 number",children:e.jsx(l,{iconLeft:e.jsx(j,{}),type:"password",placeholder:"Create password"})}),e.jsx(r,{label:"Confirm Password",required:!0,children:e.jsx(l,{iconLeft:e.jsx(j,{}),type:"password",placeholder:"Confirm password"})}),e.jsx(i,{variant:"primary",fullWidth:!0,children:"Create Account"}),e.jsxs("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#4A4A4A",textAlign:"center",margin:0},children:["By signing up, you agree to our ",e.jsx("a",{href:"#",style:{color:"#5D1F2D",textDecoration:"none"},children:"Terms"})," and ",e.jsx("a",{href:"#",style:{color:"#5D1F2D",textDecoration:"none"},children:"Privacy Policy"})]})]})]}),parameters:{docs:{description:{story:"Complete signup form example with validation hints."}}}},x={render:()=>e.jsxs("div",{style:{width:"500px",padding:"32px",backgroundColor:"#FAF9F6",borderRadius:"12px"},children:[e.jsx("h2",{style:{fontFamily:"Georgia, serif",fontSize:"32px",fontWeight:400,color:"#1C1C1E",marginBottom:"8px"},children:"Get in touch"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"16px",color:"#4A4A4A",marginBottom:"32px"},children:"We'd love to hear from you. Send us a message and we'll respond within 24 hours."}),e.jsxs("div",{className:"fn-form-group fn-form-group--spacious",children:[e.jsx(r,{label:"Name",required:!0,children:e.jsx(l,{iconLeft:e.jsx(w,{}),placeholder:"Your name"})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(l,{iconLeft:e.jsx(y,{}),type:"email",placeholder:"your@email.com"})}),e.jsx(r,{label:"Subject",required:!0,children:e.jsx(o,{placeholder:"How can we help?"})}),e.jsx(r,{label:"Message",required:!0,hint:"Please be as detailed as possible",children:e.jsx(b,{placeholder:"Tell us more about your inquiry...",style:{minHeight:"150px"}})}),e.jsx(i,{variant:"primary",size:"large",fullWidth:!0,children:"Send Message"})]})]}),parameters:{docs:{description:{story:"Contact form with warm background and spacious layout."}}}},f={name:"Newsletter Signup",render:()=>e.jsxs("div",{style:{width:"500px",padding:"40px",backgroundColor:"#FAF9F6",border:"1px solid #E5E5E0",borderRadius:"8px",textAlign:"center"},children:[e.jsx("h3",{style:{fontFamily:"Georgia, serif",fontSize:"28px",color:"#1C1C1E",marginBottom:"12px"},children:"Stay Updated"}),e.jsx("p",{style:{fontFamily:"Inter, sans-serif",fontSize:"16px",color:"#4A4A4A",marginBottom:"24px",lineHeight:1.6},children:"Subscribe to our newsletter for the latest insights and updates."}),e.jsxs("div",{className:"fn-form-inline",style:{maxWidth:"400px",margin:"0 auto"},children:[e.jsx(o,{type:"email",placeholder:"Enter your email"}),e.jsx(i,{variant:"primary",children:"Subscribe"})]})]})},F={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"350px"},children:[e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DEFAULT"}),e.jsx(r,{label:"Field Label",children:e.jsx(o,{placeholder:"Enter value..."})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"REQUIRED"}),e.jsx(r,{label:"Field Label",required:!0,children:e.jsx(o,{placeholder:"This field is required"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"WITH HINT"}),e.jsx(r,{label:"Field Label",hint:"This is helpful hint text",children:e.jsx(o,{placeholder:"Enter value..."})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"WITH ERROR"}),e.jsx(r,{label:"Field Label",required:!0,error:"This field has an error",children:e.jsx(o,{error:!0,defaultValue:"Invalid value"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"fn-story-label",children:"DISABLED"}),e.jsx(r,{label:"Field Label",children:e.jsx(o,{disabled:!0,defaultValue:"Cannot edit"})})]})]}),decorators:[v=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .fn-story-label {
            font-family: Inter, sans-serif;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4A4A4A;
            margin-bottom: 8px;
            font-weight: 500;
          }
        `}),e.jsx(v,{})]})]},g={name:"Form Specifications",render:()=>e.jsxs("div",{style:{padding:"24px",backgroundColor:"#FAF9F6",border:"1px solid #E5E5E0",borderRadius:"8px",maxWidth:"600px"},children:[e.jsx("div",{style:{fontFamily:"Inter, sans-serif",fontSize:"13px",textTransform:"uppercase",letterSpacing:"0.15em",fontWeight:600,color:"#4A4A4A",marginBottom:"16px"},children:"Technical Specifications"}),e.jsxs("ul",{style:{fontFamily:"Inter, sans-serif",fontSize:"14px",color:"#4A4A4A",lineHeight:1.8,listStyle:"none",padding:0,margin:0},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Input Height:"})," Default 44px, Small 36px, Large 52px"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Border:"})," 1px solid #E5E5E0"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Focus:"})," Border #5D1F2D + 3px ring"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Border Radius:"})," 6px"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Padding:"})," 10px 14px"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Font:"})," Inter, 16px, Normal weight"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Placeholder Color:"})," #4A4A4A (70% opacity)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Background:"})," #FFFFFF"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Label:"})," Inter, 14px, Medium weight, #1C1C1E"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error Text:"})," 12px, #EF4444"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hint Text:"})," 12px, #4A4A4A"]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Email Address" required>
        <Input type="email" placeholder="name@example.com" />
      </FormField>
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Password" required hint="Must be at least 8 characters">
        <Input type="password" placeholder="Enter password" />
      </FormField>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <FormField label="Email Address" required error="Please enter a valid email address">
        <Input type="email" error defaultValue="invalid-email" />
      </FormField>
    </div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <FormField label="Bio" hint="Tell us about yourself (max 500 characters)">
        <Textarea placeholder="I'm a solopreneur who..." />
      </FormField>
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fn-form-group" style={{
    width: '400px'
  }}>
      <FormField label="Full Name" required>
        <Input placeholder="John Doe" />
      </FormField>

      <FormField label="Email" required>
        <InputWithIcon iconLeft={<MailIcon />} type="email" placeholder="john@example.com" />
      </FormField>

      <FormField label="Message" required>
        <Textarea placeholder="How can we help?" />
      </FormField>

      <div className="fn-form-actions fn-form-actions--end">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Send Message</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Standard vertical form layout with form group for consistent spacing.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fn-form-inline" style={{
    width: '600px'
  }}>
      <FormField label="Search">
        <Input placeholder="Enter keyword..." />
      </FormField>
      <Button variant="primary">Search</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Inline form layout for search bars and simple filters.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>
      <div className="fn-form-grid fn-form-grid--2col">
        <FormField label="First Name" required>
          <Input placeholder="John" />
        </FormField>

        <FormField label="Last Name" required>
          <Input placeholder="Doe" />
        </FormField>

        <FormField label="Email" required>
          <Input type="email" placeholder="john@example.com" />
        </FormField>

        <FormField label="Phone">
          <Input type="tel" placeholder="+1 (555) 000-0000" />
        </FormField>
      </div>

      <div className="fn-form-actions fn-form-actions--end" style={{
      marginTop: '24px'
    }}>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Two-column grid layout for longer forms. Responsive to single column on mobile.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <div className="fn-form-section">
        <h3 className="fn-form-section__title">Personal Information</h3>
        <p className="fn-form-section__description">Tell us about yourself</p>

        <div className="fn-form-group">
          <FormField label="Full Name" required>
            <Input placeholder="John Doe" />
          </FormField>

          <FormField label="Email" required>
            <Input type="email" placeholder="john@example.com" />
          </FormField>
        </div>
      </div>

      <div className="fn-form-section">
        <h3 className="fn-form-section__title">Company Details</h3>
        <p className="fn-form-section__description">Optional for solo users</p>

        <div className="fn-form-group">
          <FormField label="Company Name">
            <Input placeholder="Acme Inc." />
          </FormField>

          <FormField label="Role">
            <Input placeholder="Founder" />
          </FormField>
        </div>
      </div>

      <div className="fn-form-actions fn-form-actions--end">
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Save Profile</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Form with titled sections, useful for settings or profile pages.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    padding: '32px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E5E0'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      fontWeight: 400,
      color: '#1C1C1E',
      marginBottom: '8px',
      textAlign: 'center'
    }}>Welcome back</h2>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      marginBottom: '24px',
      textAlign: 'center'
    }}>Sign in to your account</p>

      <div className="fn-form-group">
        <FormField label="Email" required>
          <InputWithIcon iconLeft={<MailIcon />} type="email" placeholder="name@example.com" />
        </FormField>

        <FormField label="Password" required>
          <InputWithIcon iconLeft={<LockIcon />} type="password" placeholder="Enter password" />
        </FormField>

        <Button variant="primary" fullWidth>Sign In</Button>

        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#4A4A4A',
        textAlign: 'center',
        margin: 0
      }}>
          Don't have an account? <a href="#" style={{
          color: '#5D1F2D',
          textDecoration: 'none'
        }}>Sign up</a>
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete login form example with icons and branding.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '450px',
    padding: '32px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    border: '1px solid #E5E5E0'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      fontWeight: 400,
      color: '#1C1C1E',
      marginBottom: '8px',
      textAlign: 'center'
    }}>Create your account</h2>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      marginBottom: '24px',
      textAlign: 'center'
    }}>Start your solopreneur journey</p>

      <div className="fn-form-group">
        <div className="fn-form-grid fn-form-grid--2col">
          <FormField label="First Name" required>
            <Input placeholder="John" />
          </FormField>

          <FormField label="Last Name" required>
            <Input placeholder="Doe" />
          </FormField>
        </div>

        <FormField label="Email" required>
          <InputWithIcon iconLeft={<MailIcon />} type="email" placeholder="name@example.com" />
        </FormField>

        <FormField label="Password" required hint="Min 8 characters, 1 uppercase, 1 number">
          <InputWithIcon iconLeft={<LockIcon />} type="password" placeholder="Create password" />
        </FormField>

        <FormField label="Confirm Password" required>
          <InputWithIcon iconLeft={<LockIcon />} type="password" placeholder="Confirm password" />
        </FormField>

        <Button variant="primary" fullWidth>Create Account</Button>

        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: '#4A4A4A',
        textAlign: 'center',
        margin: 0
      }}>
          By signing up, you agree to our <a href="#" style={{
          color: '#5D1F2D',
          textDecoration: 'none'
        }}>Terms</a> and <a href="#" style={{
          color: '#5D1F2D',
          textDecoration: 'none'
        }}>Privacy Policy</a>
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete signup form example with validation hints.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px',
    padding: '32px',
    backgroundColor: '#FAF9F6',
    borderRadius: '12px'
  }}>
      <h2 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '32px',
      fontWeight: 400,
      color: '#1C1C1E',
      marginBottom: '8px'
    }}>Get in touch</h2>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      color: '#4A4A4A',
      marginBottom: '32px'
    }}>We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>

      <div className="fn-form-group fn-form-group--spacious">
        <FormField label="Name" required>
          <InputWithIcon iconLeft={<UserIcon />} placeholder="Your name" />
        </FormField>

        <FormField label="Email" required>
          <InputWithIcon iconLeft={<MailIcon />} type="email" placeholder="your@email.com" />
        </FormField>

        <FormField label="Subject" required>
          <Input placeholder="How can we help?" />
        </FormField>

        <FormField label="Message" required hint="Please be as detailed as possible">
          <Textarea placeholder="Tell us more about your inquiry..." style={{
          minHeight: '150px'
        }} />
        </FormField>

        <Button variant="primary" size="large" fullWidth>Send Message</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Contact form with warm background and spacious layout.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Newsletter Signup',
  render: () => <div style={{
    width: '500px',
    padding: '40px',
    backgroundColor: '#FAF9F6',
    border: '1px solid #E5E5E0',
    borderRadius: '8px',
    textAlign: 'center'
  }}>
      <h3 style={{
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      color: '#1C1C1E',
      marginBottom: '12px'
    }}>Stay Updated</h3>
      <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      color: '#4A4A4A',
      marginBottom: '24px',
      lineHeight: 1.6
    }}>
        Subscribe to our newsletter for the latest insights and updates.
      </p>

      <div className="fn-form-inline" style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <Input type="email" placeholder="Enter your email" />
        <Button variant="primary">Subscribe</Button>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '350px'
  }}>
      <div>
        <p className="fn-story-label">DEFAULT</p>
        <FormField label="Field Label">
          <Input placeholder="Enter value..." />
        </FormField>
      </div>

      <div>
        <p className="fn-story-label">REQUIRED</p>
        <FormField label="Field Label" required>
          <Input placeholder="This field is required" />
        </FormField>
      </div>

      <div>
        <p className="fn-story-label">WITH HINT</p>
        <FormField label="Field Label" hint="This is helpful hint text">
          <Input placeholder="Enter value..." />
        </FormField>
      </div>

      <div>
        <p className="fn-story-label">WITH ERROR</p>
        <FormField label="Field Label" required error="This field has an error">
          <Input error defaultValue="Invalid value" />
        </FormField>
      </div>

      <div>
        <p className="fn-story-label">DISABLED</p>
        <FormField label="Field Label">
          <Input disabled defaultValue="Cannot edit" />
        </FormField>
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
}`,...F.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Form Specifications',
  render: () => <div style={{
    padding: '24px',
    backgroundColor: '#FAF9F6',
    border: '1px solid #E5E5E0',
    borderRadius: '8px',
    maxWidth: '600px'
  }}>
      <div style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '13px',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      fontWeight: 600,
      color: '#4A4A4A',
      marginBottom: '16px'
    }}>Technical Specifications</div>
      <ul style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#4A4A4A',
      lineHeight: 1.8,
      listStyle: 'none',
      padding: 0,
      margin: 0
    }}>
        <li><strong>Input Height:</strong> Default 44px, Small 36px, Large 52px</li>
        <li><strong>Border:</strong> 1px solid #E5E5E0</li>
        <li><strong>Focus:</strong> Border #5D1F2D + 3px ring</li>
        <li><strong>Border Radius:</strong> 6px</li>
        <li><strong>Padding:</strong> 10px 14px</li>
        <li><strong>Font:</strong> Inter, 16px, Normal weight</li>
        <li><strong>Placeholder Color:</strong> #4A4A4A (70% opacity)</li>
        <li><strong>Background:</strong> #FFFFFF</li>
        <li><strong>Label:</strong> Inter, 14px, Medium weight, #1C1C1E</li>
        <li><strong>Error Text:</strong> 12px, #EF4444</li>
        <li><strong>Hint Text:</strong> 12px, #4A4A4A</li>
      </ul>
    </div>
}`,...g.parameters?.docs?.source}}};const D=["BasicFormField","FormFieldWithHint","FormFieldWithError","FormFieldTextarea","VerticalForm","InlineForm","TwoColumnForm","FormWithSections","LoginForm","SignupForm","ContactForm","NewsletterSignup","AllFormStates","FormSpecs"];export{F as AllFormStates,t as BasicFormField,x as ContactForm,n as FormFieldTextarea,a as FormFieldWithError,s as FormFieldWithHint,g as FormSpecs,m as FormWithSections,c as InlineForm,h as LoginForm,f as NewsletterSignup,u as SignupForm,p as TwoColumnForm,d as VerticalForm,D as __namedExportsOrder,q as default};
