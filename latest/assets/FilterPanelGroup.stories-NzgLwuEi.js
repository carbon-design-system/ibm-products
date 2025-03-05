import{e as r}from"./index-BOZkNhcz.js";import{j as e,a as m,h as d,C as u}from"./index-k6DjlwLo.js";import{useMDXComponents as c}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-mrqLW0G7.js";import{s as h}from"./_storybook-styles-DYLPaI3o.js";import{A as x}from"./index-BI5UeCJp.js";import{F as p}from"./FilterPanelGroup-CjialMHl.js";import{a as j}from"./FilterPanelLabel-C4A0m7FU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CFrrarbq.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./index--clQM3eT.js";import"./bucket-10-D-kJO57o.js";import"./bucket-18-Dly-sSmK.js";import"./settings-BYgtfLKl.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./devtools-BSXGZlBP.js";function l(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
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
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterPanelGroup"}),` is a container for visually grouping content with a label
and optional count.`]}),`
`,e.jsx(m,{children:e.jsx(d,{of:o})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function f(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}const g="filter-panel-stories",L={title:"Deprecated/Filter panel/FilterPanelGroup",component:p,tags:["autodocs"],parameters:{styles:h,docs:{page:f}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:r.createElement(r.Fragment,null,"Formatted ",r.createElement("em",null,"group")," ",r.createElement("span",{style:{fontWeight:"normal"}},"label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>r.createElement(x,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},v=t=>r.createElement("div",{className:`${g}__viewport`},r.createElement(j,null,r.createElement(p,{...t}," "))),o=v.bind({});o.storyName="Default";o.args={title:""};var a,i,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,L as default};
