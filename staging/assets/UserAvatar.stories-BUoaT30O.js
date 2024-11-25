import{R as r}from"./index-BwDkhjyp.js";import"./index-CQ0F2wkl.js";import{T as m,u as E}from"./index-DCwB4X1m.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as v}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BgzNaMoH.js";import{e as c,i as l,C as y}from"./index-DXUYcqZv.js";import{U as s}from"./UserAvatar-ahtJt-Sa.js";import{U as A}from"./bucket-17-B1XGOcQQ.js";import{G as b}from"./bucket-7-CpB2uuCO.js";import{A as N}from"./bucket-0-DyNWBZ5j.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BONylQH5.js";import"./LayerContext-DbU-6VX4.js";import"./iframe-DanyPKBP.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./devtools-Bz70ioU6.js";import"./settings-xiNX1vM3.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./props-helper-BS5A6Pu3.js";import"./TooltipTrigger-VmqUvJWg.js";function h(n){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...v(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"useravatar",children:"UserAvatar"}),`
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
`,e.jsx(y,{})]})}function U(n={}){const{wrapper:t}={...v(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(h,{...n})}):h(n)}const w=".theme-section{padding:1rem;background:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616)}.theme-text{margin-bottom:.5rem}",C=""+new URL("headshot-BLzlzpzu.jpg",import.meta.url).href,se={title:"Experimental/Components/User avatar/UserAvatar",component:s,tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select"},options:["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]},renderIcon:{control:{type:"select"},options:["No icon","User","Group","Add"],mapping:{"No icon":"",User:A,Group:b,Add:N}},size:{control:{type:"radio"},options:["xl","lg","md","sm"]},tooltipAlignment:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]}},args:{size:"md",tooltipAlignment:"bottom"},parameters:{styles:w,docs:{page:U}}},i=()=>{const{theme:n,isDark:t}=E();return r.createElement("p",{className:"theme-text"},`useTheme reveals theme: '${n}', isDark: '${t}'`)},D=n=>r.createElement(s,{...n}),W=n=>r.createElement(r.Fragment,null,r.createElement(m,{theme:"white"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n}))),r.createElement(m,{theme:"g10"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n}))),r.createElement(m,{theme:"g90"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n}))),r.createElement(m,{theme:"g100"},r.createElement("section",{className:"theme-section"},r.createElement(i,null),r.createElement(s,{...n})))),o=W.bind({});o.storyName="Default";o.args={name:"thomas j. watson",tooltipText:"TW, Thomas J. Watson user profile",renderIcon:"No icon"};const a=D.bind({});a.storyName="WithImage";a.args={image:C,tooltipText:"TW, Thomas J. Watson user profile",imageDescription:"Avatar of Thomas J. Watson"};var p,d,g,u,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
NB no need for a 'Playground' because all stories have all controls anyway.`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var f,T,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <UserAvatar
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(j=(T=a.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const me=["Default","WithImage"];export{o as Default,a as WithImage,me as __namedExportsOrder,se as default};
