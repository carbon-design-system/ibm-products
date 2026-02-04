import{j as t,aB as h,aC as y,e}from"./iframe-BBf3bqTv.js";import{useMDXComponents as x}from"./index-BQtCSjrU.js";import{G as f,a,b,c as w}from"./GuidebannerElementLink-Cr-s-rfh.js";import"./preload-helper-D9Z9MdNV.js";import"./devtools-c2gfrTL0.js";import"./uuidv4-BN2rGLQG.js";import"./useControllableState-BX1cjhx5.js";import"./Carousel-Cug4A72a.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./bucket-2-4NArCtKQ.js";import"./bucket-9-Ce7lYRrw.js";import"./Link-qk3ncX2u.js";function g(i){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...x(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"guidebanner",children:"Guidebanner"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/guide-banner/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,t.jsxs(n.li,{children:[t.jsx(n.a,{href:"#example-usage",children:"Example usage"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#collapsible",children:"Collapsible"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#many-insights",children:"Many insights"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#few-insights",children:"Few insights"})}),`
`]}),`
`]}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(n.p,{children:`The guide banner sits at the top of a page, or page-level tab, to introduce
foundational concepts related to the page's content.`}),`
`,t.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(n.h3,{id:"collapsible",children:"Collapsible"}),`
`,t.jsx(h,{of:s}),`
`,t.jsx(n.h3,{id:"many-insights",children:"Many insights"}),`
`,t.jsx(h,{of:c}),`
`,t.jsx(n.h3,{id:"few-insights",children:"Few insights"}),`
`,t.jsx(h,{of:r}),`
`,t.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(y,{})]})}function U(i={}){const{wrapper:n}={...x(),...i.components};return n?t.jsx(n,{...i,children:t.jsx(g,{...i})}):g(i)}const j="#storybook-root{overflow-x:hidden}@supports (overflow-inline: hidden){#storybook-root{overflow-inline:hidden}}.non-linear-reading-stories__viewport{margin:0}",{action:d}=__STORYBOOK_MODULE_ACTIONS__,v="guidebanner-stories",B={title:"Preview Candidate/Onboarding/Guidebanner",component:f,tags:["autodocs","Onboarding"],parameters:{styles:j,layout:"fullscreen",docs:{page:U}},argTypes:{children:{table:{disable:!0}},theme:{table:{disable:!0}}}},p={onClose:()=>d("onClose()")(),title:"Page-related heading that can stand on its own",withLeftGutter:!1},m=()=>e.createElement(b,{type:"primary",onClick:()=>{d('GuidebannerElementButton.onClick() (type="primary")')()}},"Show Me"),l=()=>e.createElement(b,{onClick:()=>{d("GuidebannerElementButton.onClick()")()}},"Click me"),o=()=>e.createElement(w,{href:"https://www.ibm.com",target:"_blank",onClick:()=>{d("GuidebannerElementLink.onClick()")()}},"Learn more"),u=({children:i,...n})=>{const E=i.props.children;return e.createElement("div",{className:`${v}__viewport`},e.createElement(f,{...n},E))},s=u.bind({});s.args={...p,collapsible:!0,open:!0,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(m,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(o,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(o,null)}))};const c=u.bind({});c.args={...p,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(m,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(o,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(o,null)}))};const r=u.bind({});r.args={...p,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(m,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(o,null)}))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  children,
  ...rest
}) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;
  return <div className={\`\${storyClass}__viewport\`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>;
}`,...r.parameters?.docs?.source}}};const D=["collapsible","manyInsights","fewInsights"];export{D as __namedExportsOrder,s as collapsible,B as default,r as fewInsights,c as manyInsights};
//# sourceMappingURL=Guidebanner.stories-C7YMuO1Y.js.map
