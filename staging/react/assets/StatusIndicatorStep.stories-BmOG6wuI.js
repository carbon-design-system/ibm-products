import{j as e,eo as c,eq as d,ep as p,e as r}from"./iframe-BlQ-LkYW.js";import{useMDXComponents as a}from"./index-BYVA8DqO.js";import{s as l}from"./_storybook-styles-BshvqKA3.js";import{A as m}from"./index-aaSzoyUx.js";import{S as i}from"./StatusIndicatorStep-ZpAuvBoZ.js";import"./bucket-10-Jky8j9pz.js";import"./bucket-19-Ds7BYjit.js";import"./devtools-BJZSxg-N.js";import"./InlineLoading-BiPU-E2v.js";import"./bucket-6-C4pRq2Bl.js";function s(n){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"statusindicatorstep",children:"StatusIndicatorStep"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(c,{children:e.jsx(d,{of:o})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(p,{})]})}function u(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}const y={title:"Deprecated/Status indicator/StatusIndicatorStep",component:i,tags:["autodocs"],argTypes:{className:{table:{disable:!0}}},parameters:{styles:l,layout:"padded",docs:{page:u}},decorators:[n=>r.createElement(m,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},x=n=>r.createElement("ul",null,r.createElement(i,{...n})),o=x.bind({});o.storyName="StatusIndicatorStep";o.args={description:"Descriptive text",errorMessage:"Error message.",status:"inactive"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <ul>
      <StatusIndicatorStep {...args} />
    </ul>;
}`,...o.parameters?.docs?.source}}};const D=["statusIndicatorStep"];export{D as __namedExportsOrder,y as default,o as statusIndicatorStep};
