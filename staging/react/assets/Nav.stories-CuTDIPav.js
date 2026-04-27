var v=Object.defineProperty;var r=(n,t)=>v(n,"name",{value:t,configurable:!0});import{j as e,aH as d,aJ as p,aI as h,e as a}from"./iframe-BlOC0pA1.js";import{N as i,a as m,b as l}from"./Nav-Bhny0Bw6.js";import{useMDXComponents as c}from"./index-lCuXp6Hj.js";import{A as u}from"./index-BVDl2kOt.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-DrbgTs29.js";import"./uuidv4-Fbcg8Vng.js";import"./devtools-PisD3bve.js";import"./bucket-20-CeVQz5jy.js";function s(n){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"nav",children:"Nav"}),`
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
`,e.jsx(d,{children:e.jsx(p,{of:o})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(h,{})]})}r(s,"_createMdxContent");function N(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}r(N,"MDXContent");const x="",{action:_}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Deprecated/Nav",component:l,subcomponents:{NavList:m,NavItem:i},tags:["autodocs"],parameters:{styles:x,docs:{page:N}},decorators:[n=>a.createElement(u,{type:"deprecation-notice",text:a.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},f=r(n=>a.createElement(a.Fragment,null,a.createElement("div",{style:{width:"300px"}},a.createElement(l,{...n},a.createElement(m,{title:"Nav list 1"},a.createElement(i,{key:"navitem_1-1",element:"span",customprop:"uniqueValue",href:"#navitem_1-1"},"Nav item 1-1 (with a custom element)"),a.createElement(i,{key:"navitem_1-2",onClick:_("onClick"),href:"#navitem_1-2"},"Nav item 1-2")),a.createElement(m,{title:"Nav list 2 expanded on page load",isExpandedOnPageLoad:!0},a.createElement(i,{key:"navitem_2-1",href:"#navitem_2-1"},"Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),a.createElement(i,{key:"navitem_2-2",href:"#navitem_2-2"},"Nav item 2-2")),a.createElement(m,{title:"Nav list 3"},a.createElement(i,{key:"navitem_3-1",href:"#navitem_3-1"},"Nav item 3-1"),a.createElement(i,{key:"navitem_3-2",href:"https://www.ibm.com/"},"Nav item that is an external link and wraps to a new line"))))),"Template"),o=f.bind({});o.storyName="Default";o.args={label:"Navigation",heading:"Nav example",activeHref:"#"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};const q=["nav"];export{q as __namedExportsOrder,O as default,o as nav};
//# sourceMappingURL=Nav.stories-CuTDIPav.js.map
