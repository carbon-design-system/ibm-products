var p=Object.defineProperty;var s=(t,e)=>p(t,"name",{value:e,configurable:!0});import{j as n,aH as m,aI as u,e as r}from"./iframe-DU3fWsEq.js";import{T as c,u as g}from"./index-C1ldElKp.js";import{useMDXComponents as h}from"./index-Y1jbeCiL.js";import{U as i}from"./UserAvatar-1_IYOl4I.js";import{A as x}from"./bucket-0-DJtoSbW8.js";import{G as f}from"./bucket-8-DZ_gH73Z.js";import{a as j}from"./bucket-19-Be1_xXYE.js";import"./preload-helper-Cc2_yIPf.js";import"./LayerContext-Clj7bd5Z.js";import"./useMatchMedia-C86Qs9wA.js";import"./devtools-D1O-44XN.js";import"./TooltipTrigger-DOcnutkP.js";function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"useravatar",children:"UserAvatar"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/user-avatar/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[`User avatars are a representation of a user or group of users. They can be used
to identify a user or indicate collaborators. By default the component will
display `,n.jsx(e.code,{children:"name"}),` on a 'order-1-cyan' background if name exist else it will render
a user icon. UserAvatar allows an image of the user to be displayed by passing
in the `,n.jsx(e.code,{children:"image"})," prop as well as customizing icons using ",n.jsx(e.code,{children:"renderIcon"})," prop."]}),`
`,n.jsxs(e.h2,{id:"migration-from-userprofileimage",children:["Migration from ",n.jsx(e.code,{children:"UserProfileImage"})]}),`
`,n.jsxs(e.p,{children:["If you are currently using ",n.jsx(e.code,{children:"UserProfileImage"}),` you can use the following guide to
migrate to the newer `,n.jsx(e.code,{children:"UserAvatar"})," component using the below command:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"npx @carbon/upgrade migrate ibm-products-update-userprofileimage --write"})}),`
`,n.jsxs(e.p,{children:["The following props have been updated in ",n.jsx(e.code,{children:"UserAvatar"}),":"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"icon"})," has been replaced with ",n.jsx(e.code,{children:"renderIcon"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"backgroundColor"}),` remains the same but the values have changed. To see the new
values please refer to the component API table below.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"initials"})," has been replaced with ",n.jsx(e.code,{children:"name"}),`. Please refer to the component API
table below to see the new specifications.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"sm"})," has been added to the list of available ",n.jsx(e.code,{children:"size"})," options"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"theme"})," and ",n.jsx(e.code,{children:"kind"})," have been removed"]}),`
`,n.jsx(e.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,n.jsx(e.p,{children:`The user avatar supports all the 4 theme variants from carbon (white, g10, g90
and g100). The backgroundColor and font color will adapt dynamically based on
the lighter and darker themes.`}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(m,{of:o}),`
`,n.jsx(e.h3,{id:"with-image",children:"With Image"}),`
`,n.jsx(m,{of:a}),`
`,n.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(u,{})]})}s(d,"_createMdxContent");function T(t={}){const{wrapper:e}={...h(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(d,{...t})}):d(t)}s(T,"MDXContent");const b=".theme-section{padding:1rem;background:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616)}.theme-text{margin-block-end:.5rem}",v=""+new URL("headshot-BLzlzpzu.jpg",import.meta.url).href,_={title:"Components/UserAvatar",component:i,tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select"},options:["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]},renderIcon:{control:{type:"select"},options:["No icon","User","Group","Add"],mapping:{"No icon":"",User:j,Group:f,Add:x}},size:{control:{type:"radio"},options:["xl","lg","md","sm"]},tooltipAlignment:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]}},args:{size:"md",tooltipAlignment:"right"},parameters:{styles:b,docs:{page:T}}},l=s(()=>{const{theme:t,isDark:e}=g();return r.createElement("p",{className:"theme-text"},`useTheme reveals theme: '${t}', isDark: '${e}'`)},"ThemeText"),y=s(t=>r.createElement("main",null,r.createElement(i,{...t})),"Template"),w=s(t=>r.createElement("main",null,r.createElement(c,{theme:"white"},r.createElement("section",{className:"theme-section"},r.createElement(l,null),r.createElement(i,{...t}))),r.createElement(c,{theme:"g10"},r.createElement("section",{className:"theme-section"},r.createElement(l,null),r.createElement(i,{...t}))),r.createElement(c,{theme:"g90"},r.createElement("section",{className:"theme-section"},r.createElement(l,null),r.createElement(i,{...t}))),r.createElement(c,{theme:"g100"},r.createElement("section",{className:"theme-section"},r.createElement(l,null),r.createElement(i,{...t})))),"ThemeTemplate"),o=w.bind({});o.storyName="Default";o.args={name:"thomas j. watson",tooltipText:"TW, Thomas J. Watson user profile",renderIcon:"No icon"};const a=y.bind({});a.storyName="WithImage";a.args={image:v,tooltipText:"TW, Thomas J. Watson user profile",imageDescription:"Avatar of Thomas J. Watson"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};const B=["Default","WithImage"];export{o as Default,a as WithImage,B as __namedExportsOrder,_ as default};
//# sourceMappingURL=UserAvatar.stories-CV58bnYg.js.map
