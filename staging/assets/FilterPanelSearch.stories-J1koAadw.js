import{j as e}from"./settings-RejM0MIl.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CqQ3qX2e.js";import{e as m,i as h,C as d}from"./index-BvMpw_97.js";import{s as x}from"./_storybook-styles-C0uQlRwR.js";import{F as p}from"./FilterPanelSearch-DPt7ijdM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-DMp4y4mM.js";import"./index-BONylQH5.js";import"./events-C3mJejkM.js";import"./index-CzgULgXp.js";import"./v4-CQkTLCs1.js";import"./iframe-Cx6l2hzy.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./Search-CQpZNba5.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-Cn0Kqmaq.js";import"./devtools-DM-SaWXd.js";function o(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"filterpanelsearch",children:"FilterPanelSearch"}),`
`,e.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"FilterPanelSearch"})," returns the value when the search value changes."]}),`
`,e.jsx(r.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(m,{children:e.jsx(h,{of:t})}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function u(n={}){const{wrapper:r}={...c(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}const j="filter-panel-stories",H={title:"Experimental/Components/Filter Panel/FilterPanelSearch",component:p,tags:["autodocs"],parameters:{styles:x,docs:{page:u}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}}}},f=n=>e.jsx("div",{className:`${j}__viewport`,children:e.jsx(p,{...n,searchProps:{labelText:"Search",placeholder:"Search",onChange:r=>{a('onChange "'+r.target.value+'"')(r)},onClear:()=>{a()("onClear")}}})}),t=f.bind({});t.storyName="Default";t.args={};var s,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const J=["Default"];export{t as Default,J as __namedExportsOrder,H as default};
