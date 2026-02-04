import{j as e,aB as c,aD as v,aC as d,e as a}from"./iframe-BBf3bqTv.js";import{N as i,a as r,b as s}from"./Nav-CzQaLKhB.js";import{useMDXComponents as l}from"./index-BQtCSjrU.js";import{A as p}from"./index-Bva3mllS.js";import"./preload-helper-D9Z9MdNV.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-10-BG8-V5O3.js";import"./devtools-c2gfrTL0.js";import"./bucket-19-zmdOpOwk.js";function m(n){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"nav",children:"Nav"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(c,{children:e.jsx(v,{of:o})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function h(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(m,{...n})}):m(n)}const u="",{action:N}=__STORYBOOK_MODULE_ACTIONS__,b={title:"Deprecated/Nav",component:s,subcomponents:{NavList:r,NavItem:i},tags:["autodocs"],parameters:{styles:u,docs:{page:h}},decorators:[n=>a.createElement(p,{type:"deprecation-notice",text:a.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},x=n=>a.createElement(a.Fragment,null,a.createElement("div",{style:{width:"300px"}},a.createElement(s,{...n},a.createElement(r,{title:"Nav list 1"},a.createElement(i,{key:"navitem_1-1",element:"span",customprop:"uniqueValue",href:"#navitem_1-1"},"Nav item 1-1 (with a custom element)"),a.createElement(i,{key:"navitem_1-2",onClick:N("onClick"),href:"#navitem_1-2"},"Nav item 1-2")),a.createElement(r,{title:"Nav list 2 expanded on page load",isExpandedOnPageLoad:!0},a.createElement(i,{key:"navitem_2-1",href:"#navitem_2-1"},"Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),a.createElement(i,{key:"navitem_2-2",href:"#navitem_2-2"},"Nav item 2-2")),a.createElement(r,{title:"Nav list 3"},a.createElement(i,{key:"navitem_3-1",href:"#navitem_3-1"},"Nav item 3-1"),a.createElement(i,{key:"navitem_3-2",href:"https://www.ibm.com/"},"Nav item that is an external link and wraps to a new line"))))),o=x.bind({});o.storyName="Default";o.args={label:"Navigation",heading:"Nav example",activeHref:"#"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <>
      <div style={{
      width: '300px'
    }}>
        <Nav {...args}>
          <NavList title="Nav list 1">
            <NavItem key="navitem_1-1" element="span" customprop="uniqueValue" href="#navitem_1-1">
              Nav item 1-1 (with a custom element)
            </NavItem>
            <NavItem key="navitem_1-2" onClick={action('onClick')} href="#navitem_1-2">
              Nav item 1-2
            </NavItem>
          </NavList>
          <NavList title="Nav list 2 expanded on page load" isExpandedOnPageLoad>
            <NavItem key="navitem_2-1" href="#navitem_2-1">
              Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </NavItem>
            <NavItem key="navitem_2-2" href="#navitem_2-2">
              Nav item 2-2
            </NavItem>
          </NavList>
          <NavList title="Nav list 3">
            <NavItem key="navitem_3-1" href="#navitem_3-1">
              Nav item 3-1
            </NavItem>
            <NavItem key="navitem_3-2" href="https://www.ibm.com/">
              Nav item that is an external link and wraps to a new line
            </NavItem>
          </NavList>
        </Nav>
      </div>
    </>;
}`,...o.parameters?.docs?.source}}};const C=["nav"];export{C as __namedExportsOrder,b as default,o as nav};
//# sourceMappingURL=Nav.stories-PJggqPsd.js.map
