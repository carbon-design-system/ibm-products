import{j as e,aB as p,aD as d,aC as u,e as t}from"./iframe-arkle79Y.js";import{D as l,a as c,b as x,c as r,d as o}from"./DescriptionListRow-BXUiaJL1.js";import{useMDXComponents as m}from"./index-CmvJnCPZ.js";import{A as h}from"./index-C9tAxeEq.js";import"./devtools-BxzFCMfs.js";import"./StructuredList-hYv0qI6j.js";import"./useOutsideClick-BUP9YOI3.js";import"./Text-pEBQpjZl.js";import"./bucket-14-CV3IhPoh.js";import"./bucket-10-NvHEQBMv.js";import"./bucket-19-ClJk_Iwe.js";function a(n){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...m(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"descriptionlist",children:"DescriptionList"}),`
`,e.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(i.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(i.p,{children:"Type layouts provide an orderly layout of terms and definitions."}),`
`,e.jsx(i.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(p,{children:e.jsx(d,{of:s})}),`
`,e.jsx(i.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function D(n={}){const{wrapper:i}={...m(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}const L="",R={title:"Deprecated/DescriptionList",component:l,tags:["autodocs"],argTypes:{children:{control:{type:null}},size:{options:Object.values(c),control:{type:"radio"}}},parameters:{styles:L,docs:{page:D}},decorators:[n=>t.createElement(h,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},v=n=>t.createElement(t.Fragment,null,t.createElement(l,{...n},t.createElement(x,null,t.createElement(r,null,t.createElement(o,null,"Term 1"),t.createElement(o,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),t.createElement(r,null,t.createElement(o,null,"Term 2"),t.createElement(o,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis commodo.")),t.createElement(r,null,t.createElement(o,null,"Term 3"),t.createElement(o,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero."))))),s=v.bind({});s.args={border:!1,size:c.Medium};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <>
      <DescriptionList
    // TODO: handle events with action or local handler.
    // onTodo={action('onTodo log action')}
    {...args}>
        <DescriptionListBody>
          <DescriptionListRow>
            <DescriptionListCell>Term 1</DescriptionListCell>

            <DescriptionListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </DescriptionListCell>
          </DescriptionListRow>

          <DescriptionListRow>
            <DescriptionListCell>Term 2</DescriptionListCell>

            <DescriptionListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
              lacus ex at libero. Aenean euismod viverra odio, id volutpat
              turpis commodo.
            </DescriptionListCell>
          </DescriptionListRow>

          <DescriptionListRow>
            <DescriptionListCell>Term 3</DescriptionListCell>

            <DescriptionListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
              lacus ex at libero.
            </DescriptionListCell>
          </DescriptionListRow>
        </DescriptionListBody>
      </DescriptionList>
    </>;
}`,...s.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...s.parameters?.docs?.description}}};const q=["descriptionList"];export{q as __namedExportsOrder,R as default,s as descriptionList};
