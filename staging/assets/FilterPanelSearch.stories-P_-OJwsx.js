import{e as o}from"./index-DzvNrmz8.js";import{a}from"./index-B-lxVbXh.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as m}from"./index-B7BkHM3Y.js";import"./index-DzeuwgLe.js";import{s as h}from"./_storybook-styles-DYLPaI3o.js";import{A as d}from"./index-DaecxxNR.js";import{F as p}from"./FilterPanelSearch-D5rKQGs6.js";import{a as x,j as u,C as j}from"./index-B_2-5AJB.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-Bv4JGo1_.js";import"./preview-BxD30hs5.js";import"./iframe-DJDim8wj.js";import"./DocsRenderer-CFRXHY34-qaNuuHq1.js";import"./client-fwTTGz69.js";import"./index-5As4T26e.js";import"./bucket-10-BLMdRzi0.js";import"./bucket-18-D-cwffHE.js";import"./settings-DbzZchXt.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./Search-BqckCrhT.js";import"./FormContext-TkVWILkp.js";import"./bucket-15-BuGLwsj4.js";import"./devtools-CskDVa8y.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function i(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"filterpanelsearch",children:"FilterPanelSearch"}),`
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
`,e.jsx(j,{})]})}function v(n={}){const{wrapper:r}={...m(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}const f="filter-panel-stories",Q={title:"Deprecated/Filter Panel/FilterPanelSearch",component:p,tags:["autodocs"],parameters:{styles:h,docs:{page:v}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}}},decorators:[n=>o.createElement(d,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},g=n=>o.createElement("div",{className:`${f}__viewport`},o.createElement(p,{...n,searchProps:{labelText:"Search",placeholder:"Search",onChange:r=>{a('onChange "'+r.target.value+'"')(r)},onClear:()=>{a()("onClear")}}})),t=g.bind({});t.storyName="Default";t.args={};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,Q as default};
