import{j as e,aA as c,aC as h,aB as d,e as a}from"./iframe-Bn5s87s4.js";import{useMDXComponents as l}from"./index-DEJj3RFA.js";import{s as p}from"./_storybook-styles-DYLPaI3o.js";import{A as m}from"./index-DD9uUUeA.js";import{F as i}from"./FilterPanelSearch-CYkScsMz.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-10-BuKWHJFA.js";import"./bucket-19-C9HfQtRN.js";import"./Search-T7tqaylz.js";import"./FormContext-C5gYs1Iz.js";import"./bucket-15-CS3Y4Mgh.js";import"./devtools-mVE9FHp6.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelsearch",children:"FilterPanelSearch"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterPanelSearch"})," returns the value when the search value changes."]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(c,{children:e.jsx(h,{of:t})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function x(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}const{action:s}=__STORYBOOK_MODULE_ACTIONS__,u="filter-panel-stories",E={title:"Deprecated/Filter panel/FilterPanelSearch",component:i,tags:["autodocs"],parameters:{styles:p,docs:{page:x}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}}},decorators:[r=>a.createElement(m,{type:"deprecation-notice",text:a.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},j=r=>a.createElement("div",{className:`${u}__viewport`},a.createElement(i,{...r,searchProps:{labelText:"Search",placeholder:"Search",onChange:n=>{s('onChange "'+n.target.value+'"')(n)},onClear:()=>{s()("onClear")}}})),t=j.bind({});t.storyName="Default";t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,E as default};
//# sourceMappingURL=FilterPanelSearch.stories-CB1zLf2P.js.map
