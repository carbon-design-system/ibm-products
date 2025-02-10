import{e as i}from"./index-BOZkNhcz.js";import{j as e,a as m,h as u,C as x}from"./index-CKePA1sA.js";import{useMDXComponents as p}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-CAZB0tDV.js";import{I as h}from"./InterstitialScreenView-BAFu2mJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BLi-C7G1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./index-Cd8snwnz.js";import"./devtools-Bjt2CwRv.js";import"./settings-DqneCnpo.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"interstitialscreenview",children:"InterstitialScreenView"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["InterstitialScreenView is designed as a child of ",e.jsx(n.strong,{children:"InterstitialScreen"}),`. The
provided `,e.jsx(n.code,{children:"stepTitle"}),` prop is used as an aria-label within the component, as well
as by the parent InterstitialScreen component when multiple
InterstitialScreenView's are used in a Carbon
`,e.jsx(n.a,{href:"https://carbondesignsystem.com/components/progress-indicator/usage/",rel:"nofollow",children:"ProgressIndicator"}),`
to display the user's progression.`]}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(m,{children:e.jsx(u,{of:t})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<InterstitialScreenView stepTitle="Step 1">
  <div>Hello world</div>
</InterstitialScreenView>
`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function g(r={}){const{wrapper:n}={...p(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}const j="",X={title:"Experimental/Onboarding/Interstitial screen/InterstitialScreenView",component:h,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}},parameters:{styles:j,docs:{page:g}}},w=r=>i.createElement(h,{...r},i.createElement("div",null,"Hello world")),t=w.bind({});t.args={stepTitle:"Step 1"};var s,a,l,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <InterstitialScreenView
  // TODO: handle events with action or local handler.
  // onTodo={action('onTodo log action')}
  {...args}>
      <div>Hello world</div>
    </InterstitialScreenView>;
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};const N=["interstitialScreenView"];export{N as __namedExportsOrder,X as default,t as interstitialScreenView};
