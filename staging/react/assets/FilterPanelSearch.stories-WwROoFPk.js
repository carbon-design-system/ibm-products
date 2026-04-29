var h=Object.defineProperty;var a=(r,e)=>h(r,"name",{value:e,configurable:!0});import{j as n,aH as d,aJ as p,aI as m,e as o}from"./iframe-DU3fWsEq.js";import{useMDXComponents as i}from"./index-Y1jbeCiL.js";import{s as x}from"./_storybook-styles-DYLPaI3o.js";import{A as u}from"./index-DTbFSqPm.js";import{F as c}from"./FilterPanelSearch-DgKVFg0X.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-Bqu2xQ11.js";import"./bucket-20-CmByzEsl.js";import"./Search-DQ49nJq_.js";import"./FormContext-DWfhBwkE.js";import"./bucket-16-BLwVjLVi.js";import"./devtools-D1O-44XN.js";function s(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelsearch",children:"FilterPanelSearch"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"FilterPanelSearch"})," returns the value when the search value changes."]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(d,{children:n.jsx(p,{of:t})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(m,{})]})}a(s,"_createMdxContent");function j(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}a(j,"MDXContent");const{action:l}=__STORYBOOK_MODULE_ACTIONS__,v="filter-panel-stories",A={title:"Deprecated/Filter panel/FilterPanelSearch",component:c,tags:["autodocs"],parameters:{styles:x,docs:{page:j}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}}},decorators:[r=>o.createElement(u,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},f=a(r=>o.createElement("div",{className:`${v}__viewport`},o.createElement(c,{...r,searchProps:{labelText:"Search",placeholder:"Search",onChange:a(e=>{l('onChange "'+e.target.value+'"')(e)},"onChange"),onClear:a(()=>{l()("onClear")},"onClear")}})),"Template"),t=f.bind({});t.storyName="Default";t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanelSearch {...args} searchProps={{
      labelText: 'Search',
      placeholder: 'Search',
      onChange: event => {
        action('onChange "' + event.target.value + '"')(event);
      },
      onClear: () => {
        action()('onClear');
      }
    }} />
    </div>;
}`,...t.parameters?.docs?.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,A as default};
//# sourceMappingURL=FilterPanelSearch.stories-WwROoFPk.js.map
