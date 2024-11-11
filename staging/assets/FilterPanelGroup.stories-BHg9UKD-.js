import{R as n}from"./index-BwDkhjyp.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BZ4mszu_.js";import{e as c,i as u,C as d}from"./index-BpGm7QiY.js";import{s as h}from"./_storybook-styles-C0uQlRwR.js";import{F as m}from"./FilterPanelGroup-B5tnUzlg.js";import{a as x}from"./FilterPanelLabel-C3lMMzTb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B6oKv5UQ.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-Dk74W0Oi.js";import"./index-C8rbkH0g.js";import"./devtools-BXUoVCj7.js";import"./settings-DI4GKhuL.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-7nuGG3yx.js";function l(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FilterPanelGroup"}),` is a container for visually grouping content with a label
and optional count.`]}),`
`,e.jsx(c,{children:e.jsx(u,{of:o})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function g(r={}){const{wrapper:t}={...p(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}const f="filter-panel-stories",U={title:"Experimental/Components/Filter panel/FilterPanelGroup",component:m,tags:["autodocs"],parameters:{styles:h,docs:{page:g}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:n.createElement(n.Fragment,null,"Formatted ",n.createElement("em",null,"group")," ",n.createElement("span",{style:{fontWeight:"normal"}},"label"))},options:[0,1,2]}},args:{count:1,labelText:0}},j=r=>n.createElement("div",{className:`${f}__viewport`},n.createElement(x,null,n.createElement(m,{...r}," "))),o=j.bind({});o.storyName="Default";o.args={title:""};var a,i,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,U as default};
