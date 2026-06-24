var w=Object.defineProperty;var i=(s,n)=>w(s,"name",{value:n,configurable:!0});import{u as f,j as t,aO as p,aP as U,R as e}from"./iframe-BJfS6TR2.js";import{G as b,a,b as E,c as j}from"./GuidebannerElementLink-DM3h0CCB.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BK-O6ZTi.js";import"./uuidv4-Fbcg8Vng.js";import"./useControllableState-BNHtf1yN.js";import"./Carousel-BvrNFuHK.js";import"./useIsomorphicEffect-D83N95Px.js";import"./bucket-2-DhZwl8wu.js";import"./bucket-10-DGHr7O4P.js";import"./Link-CNXNhgnO.js";function x(s){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...f(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(n.h1,{id:"guidebanner",children:"Guidebanner"}),`
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
foundational concepts related to the page's content. The component is a
collapsible banner that provides guidance or information to users. It features a
horizontal scrollable list of guide elements with navigation controls, and can
be expanded or collapsed to show or hide detailed content.`}),`
`,t.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(n.h3,{id:"collapsible",children:"Collapsible"}),`
`,t.jsx(p,{of:c}),`
`,t.jsx(n.h3,{id:"many-insights",children:"Many insights"}),`
`,t.jsx(p,{of:r}),`
`,t.jsx(n.h3,{id:"few-insights",children:"Few insights"}),`
`,t.jsx(p,{of:o}),`
`,t.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(U,{})]})}i(x,"_createMdxContent");function v(s={}){const{wrapper:n}={...f(),...s.components};return n?t.jsx(n,{...s,children:t.jsx(x,{...s})}):x(s)}i(v,"MDXContent");const G="#storybook-root{overflow-x:hidden}@supports (overflow-inline: hidden){#storybook-root{overflow-inline:hidden}}.non-linear-reading-stories__viewport{margin:0}",{action:h}=__STORYBOOK_MODULE_ACTIONS__,C="guidebanner-stories",R={title:"Preview Candidate/Onboarding/Guidebanner",component:b,tags:["autodocs","Onboarding"],parameters:{styles:G,layout:"fullscreen",docs:{page:v}},argTypes:{children:{table:{disable:!0}},theme:{table:{disable:!0}}}},m={onClose:i(()=>h("onClose()")(),"onClose"),title:"Page-related heading that can stand on its own",withLeftGutter:!1},u=i(()=>e.createElement(E,{type:"primary",onClick:i(()=>{h('GuidebannerElementButton.onClick() (type="primary")')()},"onClick")},"Show Me"),"DefaultButtonLarge"),d=i(()=>e.createElement(E,{onClick:i(()=>{h("GuidebannerElementButton.onClick()")()},"onClick")},"Click me"),"DefaultButtonSmall"),l=i(()=>e.createElement(j,{href:"https://www.ibm.com",target:"_blank",onClick:i(()=>{h("GuidebannerElementLink.onClick()")()},"onClick")},"Learn more"),"DefaultLink"),g=i(({children:s,...n})=>{const y=s.props.children;return e.createElement("div",{className:`${C}__viewport`},e.createElement(b,{...n},y))},"Template"),c=g.bind({});c.args={...m,collapsible:!0,open:!0,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(u,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(d,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(d,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}))};const r=g.bind({});r.args={...m,collapsible:!0,open:!1,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(u,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(d,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(d,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}))};const o=g.bind({});o.args={...m,collapsible:!0,open:!1,children:e.createElement(e.Fragment,null,e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(u,null)}),e.createElement(a,{title:"Use-case specific heading",description:"Use-case specific content related to the heading that explains the concept or adds context.",button:e.createElement(l,null)}))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const B=["collapsible","manyInsights","fewInsights"];export{B as __namedExportsOrder,c as collapsible,R as default,o as fewInsights,r as manyInsights};
//# sourceMappingURL=Guidebanner.stories-DUic7Ypi.js.map
