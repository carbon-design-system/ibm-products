import{R as a}from"./index-BwDkhjyp.js";import{a as o}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-1qFQWJwK.js";import{e as h,i as d,C as x}from"./index-CuSCUedZ.js";import{s as u}from"./_storybook-styles-C0uQlRwR.js";import{F as p}from"./FilterPanelSearch-D6f22kfZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-DwMp3N-J.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-Dk74W0Oi.js";import"./index-CO-HQMMN.js";import"./Search-Bca_YerL.js";import"./events-OVwOsPzJ.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-mit-FcZ1.js";import"./devtools-7ohusRRR.js";import"./settings-9_3hiHpE.js";import"./index-CJvxHwuA.js";import"./index-DQ9l4IMz.js";function s(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"filterpanelsearch",children:"FilterPanelSearch"}),`
`,e.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"FilterPanelSearch"})," returns the value when the search value changes."]}),`
`,e.jsx(r.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(h,{children:e.jsx(d,{of:t})}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function j(n={}){const{wrapper:r}={...m(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}const f="filter-panel-stories",K={title:"Experimental/Components/Filter Panel/FilterPanelSearch",component:p,tags:["autodocs"],parameters:{styles:u,docs:{page:j}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}}}},v=n=>a.createElement("div",{className:`${f}__viewport`},a.createElement(p,{...n,searchProps:{labelText:"Search",placeholder:"Search",onChange:r=>{o('onChange "'+r.target.value+'"')(r)},onClear:()=>{o()("onClear")}}})),t=v.bind({});t.storyName="Default";t.args={};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
