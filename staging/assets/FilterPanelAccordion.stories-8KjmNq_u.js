import{e as o}from"./index-CPiZ6Cnx.js";import{a}from"./index-B-lxVbXh.js";import{j as n}from"./index-B83en7q5.js";import{useMDXComponents as d}from"./index-CUO_02de.js";import"./index-Kr43vjMr.js";import{u as x}from"./uuidv4-BN2rGLQG.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as g}from"./index-CT49tSwO.js";import{F as p,a as v}from"./FilterPanelAccordionItem-D1Lt7Nub.js";import{a as b}from"./FilterPanelLabel-DLk_vvrc.js";import{F as f}from"./FilterPanelCheckbox-DbeU_fyU.js";import{a as j,f as C,C as F}from"./index-C-2_Eo4o.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./index-ZKO_qc5e.js";import"./preview-BL8wQuie.js";import"./iframe-necW5_o2.js";import"./DocsRenderer-CFRXHY34-GHw2_TbQ.js";import"./client-BCQEsWlk.js";import"./index-BPCFiO9b.js";import"./bucket-10-COvSrTUI.js";import"./bucket-18-CAzey7tD.js";import"./settings-41bnSjHp.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./AccordionItem-BqwgX8kA.js";import"./Text-DJS5NTiV.js";import"./devtools-Ca6Wku6c.js";import"./FilterPanelGroup-DD6hu9wn.js";import"./ListItem-DPfNRx_s.js";import"./TruncatedList-DRAbbHt3.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./Checkbox-C003KrfO.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
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
`,n.jsx(j,{children:n.jsx(C,{of:r})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(F,{})]})}function P(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}const A="filter-panel-stories",le={title:"Deprecated/Filter panel/FilterPanelAccordion",component:p,tags:["autodocs"],parameters:{styles:u,docs:{page:P}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:o.createElement(o.Fragment,null,"Formatted"," ",o.createElement("span",{style:{fontWeight:"normal"}},o.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>o.createElement(g,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},k=t=>o.createElement("div",{className:`${A}__viewport`},o.createElement(b,null,o.createElement(p,{...t},o.createElement(v,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:({isOpen:e,event:i})=>{a("onHeadingClick ({ isOpen, event })")(e,i)}}},o.createElement(f,{count:10,labelText:"Checkbox",id:x(),onChange:(e,{checked:i,id:h})=>a("onChange Checkbox (event, { checked, id })")(e,i,h)}))))),r=k.bind({});r.storyName="Default";r.args={title:""};var c,s,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ce=["Default"];export{r as Default,ce as __namedExportsOrder,le as default};
