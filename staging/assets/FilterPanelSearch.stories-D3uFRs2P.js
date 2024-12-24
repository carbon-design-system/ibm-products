import{e as o}from"./index-CPiZ6Cnx.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{j as e}from"./jsx-runtime-Dc-z7RWI.js";import{useMDXComponents as m}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-DAfSjhFL.js";import{al as h,aw as d,ak as x}from"./index-B_DdD064.js";import{s as u}from"./_storybook-styles-C0uQlRwR.js";import{A as j}from"./index-DVpmqM_A.js";import{F as p}from"./FilterPanelSearch-xaePvQK4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-BFx4DPzL.js";import"../sb-preview/runtime.js";import"./react-18-C6q_qjn2.js";import"./index-Bsyy8W_U.js";import"./index-BSHYryQu.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./index-CXyjPnaX.js";import"./settings-iwZeeh4T.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./bucket-18-By6NmkK1.js";import"./bucket-9-BSWQ2dSd.js";import"./Search-soxfLq4A.js";import"./FormContext-CgeSXHS1.js";import"./bucket-14-BKxafgTW.js";import"./devtools-CjVY-wQW.js";function i(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"filterpanelsearch",children:"FilterPanelSearch"}),`
`,e.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(r.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"FilterPanelSearch"})," returns the value when the search value changes."]}),`
`,e.jsx(r.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(h,{children:e.jsx(d,{of:t})}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function v(n={}){const{wrapper:r}={...m(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}const f="filter-panel-stories",U={title:"Deprecated/Filter Panel/FilterPanelSearch",component:p,tags:["autodocs"],parameters:{styles:u,docs:{page:v}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}}},decorators:[n=>o.createElement(j,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},g=n=>o.createElement("div",{className:`${f}__viewport`},o.createElement(p,{...n,searchProps:{labelText:"Search",placeholder:"Search",onChange:r=>{a('onChange "'+r.target.value+'"')(r)},onClear:()=>{a()("onClear")}}})),t=g.bind({});t.storyName="Default";t.args={};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,U as default};
