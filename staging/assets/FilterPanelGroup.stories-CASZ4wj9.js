import{e as r}from"./index-DtHxqM--.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-Bq0jCRb-.js";import{s as m}from"./_storybook-styles-DYLPaI3o.js";import{A as d}from"./index-CDaAlKON.js";import{F as c}from"./FilterPanelGroup-BcaZuWHe.js";import{a as u}from"./FilterPanelLabel-IxdL5AHF.js";import{a as h,j as x,C as j}from"./index-BridxrSo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CiYgQLeJ.js";import"./preview-DZaLbi38.js";import"./iframe-CjQaoex9.js";import"./DocsRenderer-CFRXHY34-LUAN-qqw.js";import"./client-CZTHzaKS.js";import"./index-CMVdkQrl.js";import"./bucket-10-BzYiIxX7.js";import"./bucket-18-xYgoy0Nr.js";import"./settings-C3kz8lqM.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./devtools-CJD9WatR.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function l(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
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
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FilterPanelGroup"}),` is a container for visually grouping content with a label
and optional count.`]}),`
`,e.jsx(h,{children:e.jsx(x,{of:o})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(j,{})]})}function f(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}const g="filter-panel-stories",V={title:"Deprecated/Filter panel/FilterPanelGroup",component:c,tags:["autodocs"],parameters:{styles:m,docs:{page:f}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:r.createElement(r.Fragment,null,"Formatted ",r.createElement("em",null,"group")," ",r.createElement("span",{style:{fontWeight:"normal"}},"label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[n=>r.createElement(d,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},v=n=>r.createElement("div",{className:`${g}__viewport`},r.createElement(u,null,r.createElement(c,{...n}," "))),o=v.bind({});o.storyName="Default";o.args={title:""};var a,i,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,V as default};
