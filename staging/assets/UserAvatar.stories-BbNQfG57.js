import{e as n}from"./index-DzvNrmz8.js";import"./index-5As4T26e.js";import{T as i,u as v}from"./index-BwV_ULQ7.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as b}from"./index-B7BkHM3Y.js";import"./index-yZ7SzbPB.js";import{U as s}from"./UserAvatar-C8BeQPC0.js";import{b as y}from"./bucket-0-C6v-wDs9.js";import{G as w}from"./bucket-7-WdCg4nGt.js";import{U as E}from"./bucket-18-D-cwffHE.js";import{a as l,j as m,C as A}from"./index-CzcKhd7Q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./LayerContext-DfrloTEd.js";import"./useMatchMedia-T2GVo85G.js";import"./index-Bv4JGo1_.js";import"./preview-CtqmI_Lj.js";import"./iframe-Czcp_UX8.js";import"./DocsRenderer-CFRXHY34-DLQHOBuc.js";import"./client-fwTTGz69.js";import"./devtools-B_dijMH7.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./props-helper-DCsMHcG1.js";import"./TooltipTrigger-CGNkg_DF.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function d(t){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...b(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"useravatar",children:"UserAvatar"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/user-avatar/usage/",rel:"nofollow",children:"UserAvatar usage guidelines"})}),`
`,e.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:[`User avatars are a representation of a user or group of users. They can be used
to identify a user or indicate collaborators. By default the component will
display `,e.jsx(r.code,{children:"name"}),` on a 'order-1-cyan' background if name exist else it will render
a user icon. UserAvatar allows an image of the user to be displayed by passing
in the `,e.jsx(r.code,{children:"image"})," prop as well as customizing icons using ",e.jsx(r.code,{children:"renderIcon"})," prop."]}),`
`,e.jsxs(r.h2,{id:"migration-from-userprofileimage",children:["Migration from ",e.jsx(r.code,{children:"UserProfileImage"})]}),`
`,e.jsxs(r.p,{children:["If you are currently using ",e.jsx(r.code,{children:"UserProfileImage"}),` you can use the following guide to
migrate to the newer `,e.jsx(r.code,{children:"UserAvatar"})," component using the below command:"]}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"npx @carbon/upgrade migrate ibm-products-update-userprofileimage --write"})}),`
`,e.jsxs(r.p,{children:["The following props have been updated in ",e.jsx(r.code,{children:"UserAvatar"}),":"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"icon"})," has been replaced with ",e.jsx(r.code,{children:"renderIcon"})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"backgroundColor"}),` remains the same but the values have changed. To see the new
values please refer to the component API table below.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"initials"})," has been replaced with ",e.jsx(r.code,{children:"name"}),`. Please refer to the component API
table below to see the new specifications.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"sm"})," has been added to the list of available ",e.jsx(r.code,{children:"size"})," options"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"theme"})," and ",e.jsx(r.code,{children:"kind"})," have been removed"]}),`
`,e.jsx(r.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(r.p,{children:`The user avatar supports all the 4 theme variants from carbon (white, g10, g90
and g100). The backgroundColor and font color will adapt dynamically based on
the lighter and darker themes.`}),`
`,e.jsx(r.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(r.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{children:e.jsx(m,{of:o})}),`
`,e.jsx(r.h3,{id:"with-image",children:"With Image"}),`
`,e.jsx(l,{children:e.jsx(m,{of:a})}),`
`,e.jsx(r.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(A,{})]})}function U(t={}){const{wrapper:r}={...b(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(d,{...t})}):d(t)}const I=".theme-section{padding:1rem;background:var(--cds-background, #ffffff);color:var(--cds-text-primary, #161616)}.theme-text{margin-block-end:.5rem}",N=""+new URL("headshot-BLzlzpzu.jpg",import.meta.url).href,oe={title:"IBM Products/Components/User avatar/UserAvatar",component:s,tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select"},options:["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]},renderIcon:{control:{type:"select"},options:["No icon","User","Group","Add"],mapping:{"No icon":"",User:E,Group:w,Add:y}},size:{control:{type:"radio"},options:["xl","lg","md","sm"]},tooltipAlignment:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]}},args:{size:"md",tooltipAlignment:"bottom"},parameters:{styles:I,docs:{page:U}}},c=()=>{const{theme:t,isDark:r}=v();return n.createElement("p",{className:"theme-text"},`useTheme reveals theme: '${t}', isDark: '${r}'`)},C=t=>n.createElement(s,{...t}),D=t=>n.createElement(n.Fragment,null,n.createElement(i,{theme:"white"},n.createElement("section",{className:"theme-section"},n.createElement(c,null),n.createElement(s,{...t}))),n.createElement(i,{theme:"g10"},n.createElement("section",{className:"theme-section"},n.createElement(c,null),n.createElement(s,{...t}))),n.createElement(i,{theme:"g90"},n.createElement("section",{className:"theme-section"},n.createElement(c,null),n.createElement(s,{...t}))),n.createElement(i,{theme:"g100"},n.createElement("section",{className:"theme-section"},n.createElement(c,null),n.createElement(s,{...t})))),o=D.bind({});o.storyName="Default";o.args={name:"thomas j. watson",tooltipText:"TW, Thomas J. Watson user profile",renderIcon:"No icon"};const a=C.bind({});a.storyName="WithImage";a.args={image:N,tooltipText:"TW, Thomas J. Watson user profile",imageDescription:"Avatar of Thomas J. Watson"};var h,p,u,g,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var f,j,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <UserAvatar
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args} />;
}`,...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const ae=["Default","WithImage"];export{o as Default,a as WithImage,ae as __namedExportsOrder,oe as default};
