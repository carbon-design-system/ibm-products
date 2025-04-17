import{e as a}from"./index-DzvNrmz8.js";import{a as p}from"./index-B-lxVbXh.js";import{N as i,a as r,b as v}from"./Nav-9T91nNje.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as d}from"./index-B7BkHM3Y.js";import"./index-52KsHLmw.js";import{A as h}from"./index-DaecxxNR.js";import{a as u,j as N,C as x}from"./index-C_-_U5WJ.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-5As4T26e.js";import"./settings-DbzZchXt.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-10-BLMdRzi0.js";import"./devtools-CskDVa8y.js";import"./index-Bv4JGo1_.js";import"./preview-DORzmaO-.js";import"./iframe-CBXui-ld.js";import"./DocsRenderer-CFRXHY34-DTsNfGzG.js";import"./client-fwTTGz69.js";import"./bucket-18-D-cwffHE.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function m(n){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"nav",children:"Nav"}),`
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
`,e.jsx(u,{children:e.jsx(N,{of:o})}),`
`,e.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function f(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(m,{...n})}):m(n)}const j="",J={title:"Deprecated/Nav",component:v,subcomponents:{NavList:r,NavItem:i},tags:["autodocs"],parameters:{styles:j,docs:{page:f}},decorators:[n=>a.createElement(h,{type:"deprecation-notice",text:a.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},_=n=>a.createElement(a.Fragment,null,a.createElement("div",{style:{width:"300px"}},a.createElement(v,{...n},a.createElement(r,{title:"Nav list 1"},a.createElement(i,{key:"navitem_1-1",element:"span",customprop:"uniqueValue",href:"#navitem_1-1"},"Nav item 1-1 (with a custom element)"),a.createElement(i,{key:"navitem_1-2",onClick:p("onClick"),href:"#navitem_1-2"},"Nav item 1-2")),a.createElement(r,{title:"Nav list 2 expanded on page load",isExpandedOnPageLoad:!0},a.createElement(i,{key:"navitem_2-1",href:"#navitem_2-1"},"Nav item 2-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),a.createElement(i,{key:"navitem_2-2",href:"#navitem_2-2"},"Nav item 2-2")),a.createElement(r,{title:"Nav list 3"},a.createElement(i,{key:"navitem_3-1",href:"#navitem_3-1"},"Nav item 3-1"),a.createElement(i,{key:"navitem_3-2",href:"https://www.ibm.com/"},"Nav item that is an external link and wraps to a new line"))))),o=_.bind({});o.storyName="Default";o.args={label:"Navigation",heading:"Nav example",activeHref:"#"};var s,l,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const K=["nav"];export{K as __namedExportsOrder,J as default,o as nav};
