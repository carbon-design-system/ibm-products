import{e as r}from"./index-DxDX2vOa.js";import{aw as e,al as m,ax as d,ak as u}from"./index-D8dBwTvW.js";import{useMDXComponents as p}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-B1BFoXdD.js";import{s as h}from"./_storybook-styles-C0uQlRwR.js";import{A as x}from"./index-CJ0Gdo6o.js";import{F as c}from"./FilterPanelGroup-CItwlYkT.js";import{a as j}from"./FilterPanelLabel-Dr32Q7B5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DyaN4Ozd.js";import"../sb-preview/runtime.js";import"./index-CaMJXrh2.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./index-B_euquWE.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./bucket-18-Dvh787Y8.js";import"./bucket-9-Clk9T-SZ.js";import"./devtools-BlxCaI1L.js";function l(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
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
`,e.jsx(m,{children:e.jsx(d,{of:o})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function g(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}const f="filter-panel-stories",U={title:"Deprecated/Filter panel/FilterPanelGroup",component:c,tags:["autodocs"],parameters:{styles:h,docs:{page:g}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:r.createElement(r.Fragment,null,"Formatted ",r.createElement("em",null,"group")," ",r.createElement("span",{style:{fontWeight:"normal"}},"label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[n=>r.createElement(x,{type:"deprecation-notice",text:r.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},v=n=>r.createElement("div",{className:`${f}__viewport`},r.createElement(j,null,r.createElement(c,{...n}," "))),o=v.bind({});o.storyName="Default";o.args={title:""};var a,i,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,U as default};
