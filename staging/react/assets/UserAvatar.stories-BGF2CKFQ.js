import{el as e,em as l,eo as m,en as p,e as r}from"./iframe-Cbdf71kV.js";import{T as i,u}from"./index-CIgJxBzb.js";import{useMDXComponents as h}from"./index-Bz9OSaUz.js";import{U as s}from"./UserAvatar-OlFDdd4g.js";import{A as g}from"./bucket-0-DLaAcJTT.js";import{G as x}from"./bucket-7-PHG--wod.js";import{c as f}from"./bucket-18-DV2Au_NX.js";import"./LayerContext-CszjMr56.js";import"./useMatchMedia-u-c5Smb4.js";import"./devtools-BsT0_Owc.js";import"./props-helper-DqfsKzpa.js";import"./TooltipTrigger-CHXAXfje.js";function d(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useravatar",children:"UserAvatar"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/user-avatar/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[`User avatars are a representation of a user or group of users. They can be used
to identify a user or indicate collaborators. By default the component will
display `,e.jsx(n.code,{children:"name"}),` on a 'order-1-cyan' background if name exist else it will render
a user icon. UserAvatar allows an image of the user to be displayed by passing
in the `,e.jsx(n.code,{children:"image"})," prop as well as customizing icons using ",e.jsx(n.code,{children:"renderIcon"})," prop."]}),`
`,e.jsxs(n.h2,{id:"migration-from-userprofileimage",children:["Migration from ",e.jsx(n.code,{children:"UserProfileImage"})]}),`
`,e.jsxs(n.p,{children:["If you are currently using ",e.jsx(n.code,{children:"UserProfileImage"}),` you can use the following guide to
migrate to the newer `,e.jsx(n.code,{children:"UserAvatar"})," component using the below command:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"npx @carbon/upgrade migrate ibm-products-update-userprofileimage --write"})}),`
`,e.jsxs(n.p,{children:["The following props have been updated in ",e.jsx(n.code,{children:"UserAvatar"}),":"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," has been replaced with ",e.jsx(n.code,{children:"renderIcon"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"backgroundColor"}),` remains the same but the values have changed. To see the new
values please refer to the component API table below.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"initials"})," has been replaced with ",e.jsx(n.code,{children:"name"}),`. Please refer to the component API
table below to see the new specifications.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sm"})," has been added to the list of available ",e.jsx(n.code,{children:"size"})," options"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"theme"})," and ",e.jsx(n.code,{children:"kind"})," have been removed"]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The user avatar supports all the 4 theme variants from carbon (white, g10, g90
and g100). The backgroundColor and font color will adapt dynamically based on
the lighter and darker themes.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{children:e.jsx(m,{of:o})}),`
`,e.jsx(n.h3,{id:"with-image",children:"With Image"}),`
`,e.jsx(l,{children:e.jsx(m,{of:a})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(p,{})]})}function j(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}const T=".theme-section{padding:1rem;background:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616)}.theme-text{margin-block-end:.5rem}",b=""+new URL("headshot-BLzlzpzu.jpg",import.meta.url).href,O={title:"Components/UserAvatar",component:s,tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select"},options:["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]},renderIcon:{control:{type:"select"},options:["No icon","User","Group","Add"],mapping:{"No icon":"",User:f,Group:x,Add:g}},size:{control:{type:"radio"},options:["xl","lg","md","sm"]},tooltipAlignment:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]}},args:{size:"md",tooltipAlignment:"bottom"},parameters:{styles:T,docs:{page:j}}},c=()=>{const{theme:t,isDark:n}=u();return r.createElement("p",{className:"theme-text"},`useTheme reveals theme: '${t}', isDark: '${n}'`)},v=t=>r.createElement("main",null,r.createElement(s,{...t})),y=t=>r.createElement("main",null,r.createElement(i,{theme:"white"},r.createElement("section",{className:"theme-section"},r.createElement(c,null),r.createElement(s,{...t}))),r.createElement(i,{theme:"g10"},r.createElement("section",{className:"theme-section"},r.createElement(c,null),r.createElement(s,{...t}))),r.createElement(i,{theme:"g90"},r.createElement("section",{className:"theme-section"},r.createElement(c,null),r.createElement(s,{...t}))),r.createElement(i,{theme:"g100"},r.createElement("section",{className:"theme-section"},r.createElement(c,null),r.createElement(s,{...t})))),o=y.bind({});o.storyName="Default";o.args={name:"thomas j. watson",tooltipText:"TW, Thomas J. Watson user profile",renderIcon:"No icon"};const a=v.bind({});a.storyName="WithImage";a.args={image:b,tooltipText:"TW, Thomas J. Watson user profile",imageDescription:"Avatar of Thomas J. Watson"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <main>
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
    </main>;
}`,...o.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <main>
      <UserAvatar
    // TODO: handle events with action or local handler.
    // onTodo={action('onTodo log action')}
    {...args} />
    </main>;
}`,...a.parameters?.docs?.source}}};const M=["Default","WithImage"];export{o as Default,a as WithImage,M as __namedExportsOrder,O as default};
