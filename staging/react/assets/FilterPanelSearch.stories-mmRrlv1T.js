import{e as o}from"./index-DtHxqM--.js";import{a}from"./index-B-lxVbXh.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-BoUQZI5K.js";import{s as h}from"./_storybook-styles-DYLPaI3o.js";import{A as d}from"./index-Cr_YAIZY.js";import{F as m}from"./FilterPanelSearch-z83IMZkX.js";import{a as x,j as u,C as j}from"./index-BwG5U4EM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-DPD1RCF5.js";import"./iframe-Chm5YKQf.js";import"./DocsRenderer-CFRXHY34-Bv3MrXpg.js";import"./client-CZTHzaKS.js";import"./index-4poXP75K.js";import"./bucket-10-CJixWMOF.js";import"./bucket-19-D8xKEiK4.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./Search-Dh4hBxPL.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-B3K3_0FD.js";import"./devtools-B69Kc3qg.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function i(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"filterpanelsearch",children:"FilterPanelSearch"}),`
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
`,e.jsx(x,{children:e.jsx(u,{of:t})}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(j,{})]})}function v(n={}){const{wrapper:r}={...p(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}const f="filter-panel-stories",K={title:"Deprecated/Filter panel/FilterPanelSearch",component:m,tags:["autodocs"],parameters:{styles:h,docs:{page:v}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}}},decorators:[n=>o.createElement(d,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},g=n=>o.createElement("div",{className:`${f}__viewport`},o.createElement(m,{...n,searchProps:{labelText:"Search",placeholder:"Search",onChange:r=>{a('onChange "'+r.target.value+'"')(r)},onClear:()=>{a()("onClear")}}})),t=g.bind({});t.storyName="Default";t.args={};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Q=["Default"];export{t as Default,Q as __namedExportsOrder,K as default};
