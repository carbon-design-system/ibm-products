import{e as o}from"./index-BOZkNhcz.js";import{a}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{j as n,a as u,h as x,C as g}from"./index-KgSg3jcr.js";import{useMDXComponents as d}from"./index-aaDvWpb8.js";import"./DocsRenderer-CFRXHY34-A56J-102.js";import{u as v}from"./uuidv4-BN2rGLQG.js";import{s as b}from"./_storybook-styles-DYLPaI3o.js";import{A as j}from"./index-BI5UeCJp.js";import{F as p,a as C}from"./FilterPanelAccordionItem-DDKdHjdf.js";import{a as f}from"./FilterPanelLabel-C4A0m7FU.js";import{F}from"./FilterPanelCheckbox-BTzZxfTX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./iframe--Hb3m1kv.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./react-18-Cs6RDBhU.js";import"./index--clQM3eT.js";import"./bucket-10-D-kJO57o.js";import"./bucket-18-Dly-sSmK.js";import"./settings-BYgtfLKl.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./AccordionItem-CFt1CKpn.js";import"./Text-C-NQiyV2.js";import"./devtools-BSXGZlBP.js";import"./FilterPanelGroup-CjialMHl.js";import"./ListItem-yx784rOX.js";import"./TruncatedList-wvQa0bcT.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./Checkbox-BkhXuVvJ.js";function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"FilterPanelAccordion"}),` is a container required for grouping
`,n.jsx(e.code,{children:"FilterPanelAccordionItems"})," with a label and optional count."]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(u,{children:n.jsx(x,{of:r})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(g,{})]})}function P(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}const A="filter-panel-stories",ie={title:"Deprecated/Filter panel/FilterPanelAccordion",component:p,tags:["autodocs"],parameters:{styles:b,docs:{page:P}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:o.createElement(o.Fragment,null,"Formatted"," ",o.createElement("span",{style:{fontWeight:"normal"}},o.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>o.createElement(j,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},k=t=>o.createElement("div",{className:`${A}__viewport`},o.createElement(f,null,o.createElement(p,{...t},o.createElement(C,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:({isOpen:e,event:i})=>{a("onHeadingClick ({ isOpen, event })")(e,i)}}},o.createElement(F,{count:10,labelText:"Checkbox",id:v(),onChange:(e,{checked:i,id:h})=>a("onChange Checkbox (event, { checked, id })")(e,i,h)}))))),r=k.bind({});r.storyName="Default";r.args={title:""};var c,s,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelAccordion {...args}>
          <FilterPanelAccordionItem labelText="Accordion item" count={10} accordionItemProps={{
          onHeadingClick: ({
            isOpen,
            event
          }) => {
            action('onHeadingClick ({ isOpen, event })')(isOpen, event);
          }
        }}>
            <FilterPanelCheckbox count={10} labelText="Checkbox"
          // "id" and "onChange" are pass-through props to Carbon's Checkbox.
          id={uuidv4()} onChange={(event, {
            checked,
            id
          }) => action('onChange Checkbox (event, { checked, id })')(event, checked, id)} />
          </FilterPanelAccordionItem>
        </FilterPanelAccordion>
      </FilterPanel>
    </div>;
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ae=["Default"];export{r as Default,ae as __namedExportsOrder,ie as default};
