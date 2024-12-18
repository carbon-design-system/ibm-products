import{e as r}from"./index-DxDX2vOa.js";import"./index-B_euquWE.js";import{T as m,u as E}from"./index-oO2dig9i.js";import{aw as e,al as c,ax as l,ak as y}from"./index-6asNl-3l.js";import{useMDXComponents as v}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-xM5q-MF7.js";import{U as s}from"./UserAvatar-C26i0ePf.js";import{b}from"./bucket-17-BLAXVSDb.js";import{G as A}from"./bucket-7-D9w4nlSg.js";import{A as N}from"./bucket-0-DEgqxqZV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CaMJXrh2.js";import"./LayerContext-BLFdRioi.js";import"./iframe-Bz0rEyEi.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./devtools-BlxCaI1L.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./props-helper-DmbAnr2a.js";import"./TooltipTrigger-vQXCwy5h.js";function h(n){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...v(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useravatar",children:"UserAvatar"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(t.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(t.p,{children:`The user avatar supports all the 4 theme variants from carbon (white, g10, g90 and g100).
The backgroundColor and font color will adapt dynamically based on the lighter and darker themes.`}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(c,{children:e.jsx(l,{of:o})}),`
`,e.jsx(t.h3,{id:"with-image",children:"With Image"}),`
`,e.jsx(c,{children:e.jsx(l,{of:a})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(y,{})]})}function w(n={}){const{wrapper:t}={...v(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(h,{...n})}):h(n)}const U=".theme-section{padding:1rem;background:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616)}.theme-text{margin-bottom:.5rem}",D=""+new URL("headshot-BLzlzpzu.jpg",import.meta.url).href,re={title:"IBM Products/Components/User avatar/UserAvatar",component:s,tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select"},options:["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]},renderIcon:{control:{type:"select"},options:["No icon","User","Group","Add"],mapping:{"No icon":"",User:b,Group:A,Add:N}},size:{control:{type:"radio"},options:["xl","lg","md","sm"]},tooltipAlignment:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]}},args:{size:"md",tooltipAlignment:"bottom"},parameters:{styles:U,docs:{page:w}}},i=()=>{const{theme:n,isDark:t}=E();return r.createElement("p",{className:"theme-text"},`useTheme reveals theme: '${n}', isDark: '${t}'`)},C=n=>r.createElement(s,{...n}),I=n=>r.createElement(r.Fragment,null,r.createElement(m,{theme:"white"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n}))),r.createElement(m,{theme:"g10"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n}))),r.createElement(m,{theme:"g90"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n}))),r.createElement(m,{theme:"g100"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n})))),o=I.bind({});o.storyName="Default";o.args={name:"thomas j. watson",tooltipText:"TW, Thomas J. Watson user profile",renderIcon:"No icon"};const a=C.bind({});a.storyName="WithImage";a.args={image:D,tooltipText:"TW, Thomas J. Watson user profile",imageDescription:"Avatar of Thomas J. Watson"};var p,d,g,u,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <>
      <Theme theme="white">
        <section className="theme-section">
          <ThemeText />
          <UserAvatar {...args} />
        </section>
      </Theme>
      <Theme theme="g10">
        <section className="theme-section">
          <ThemeText />
          <UserAvatar {...args} />
        </section>
      </Theme>
      <Theme theme="g90">
        <section className="theme-section">
          <ThemeText />
          <UserAvatar {...args} />
        </section>
      </Theme>
      <Theme theme="g100">
        <section className="theme-section">
          <ThemeText />
          <UserAvatar {...args} />
        </section>
      </Theme>
    </>;
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var T,f,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <UserAvatar
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const ne=["Default","WithImage"];export{o as Default,a as WithImage,ne as __namedExportsOrder,re as default};
