import{e as t}from"./index-DtHxqM--.js";import{D as u,a as x,b as D,c as s,d as r}from"./DescriptionListRow-feQDFf7F.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as h}from"./index-CseD6FCQ.js";import"./index-lMmuxduI.js";import{A as L}from"./index-FZeL_GBE.js";import{a as v,j,C as g}from"./index-BEF4m_XO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ccw_5OKp.js";import"./devtools-DSwQefcu.js";import"./settings-JuRwpTYJ.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./StructuredList-BsWLGy07.js";import"./useOutsideClick-Cw2MDLHB.js";import"./Text-CPocCdE2.js";import"./bucket-13-D8HWi43x.js";import"./index-CiYgQLeJ.js";import"./preview-jePjwBR5.js";import"./iframe-Dt20USK0.js";import"./DocsRenderer-CFRXHY34-C0lv72g2.js";import"./client-CZTHzaKS.js";import"./bucket-10-D5QqA8rU.js";import"./bucket-18-CKSgrqVQ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function a(n){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...h(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"descriptionlist",children:"DescriptionList"}),`
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
`,e.jsx(v,{children:e.jsx(j,{of:o})}),`
`,e.jsx(i.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(g,{})]})}function C(n={}){const{wrapper:i}={...h(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(a,{...n})}):a(n)}const f="",W={title:"Deprecated/DescriptionList",component:u,tags:["autodocs"],argTypes:{children:{control:{type:null}},size:{options:Object.values(x),control:{type:"radio"}}},parameters:{styles:f,docs:{page:C}},decorators:[n=>t.createElement(L,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},y=n=>t.createElement(t.Fragment,null,t.createElement(u,{...n},t.createElement(D,null,t.createElement(s,null,t.createElement(r,null,"Term 1"),t.createElement(r,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),t.createElement(s,null,t.createElement(r,null,"Term 2"),t.createElement(r,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis commodo.")),t.createElement(s,null,t.createElement(r,null,"Term 3"),t.createElement(r,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius lacus ex at libero."))))),o=y.bind({});o.args={border:!1,size:x.Medium};var l,c,m,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};const Y=["descriptionList"];export{Y as __namedExportsOrder,W as default,o as descriptionList};
