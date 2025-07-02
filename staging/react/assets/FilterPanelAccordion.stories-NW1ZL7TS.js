import{e as n}from"./index-DtHxqM--.js";import{a}from"./index-B-lxVbXh.js";import{j as o}from"./index-DgLvjnYm.js";import{useMDXComponents as d}from"./index-CseD6FCQ.js";import"./index-BoUQZI5K.js";import{u as x}from"./uuidv4-BN2rGLQG.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as g}from"./index-Cr_YAIZY.js";import{F as p,a as v}from"./FilterPanelAccordionItem-BfU0IkcN.js";import{a as b}from"./FilterPanelLabel-DKXezEXL.js";import{F as j}from"./FilterPanelCheckbox-CpopSjqi.js";import{a as C,j as f,C as F}from"./index-BwG5U4EM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./index-CiYgQLeJ.js";import"./preview-DPD1RCF5.js";import"./iframe-Chm5YKQf.js";import"./DocsRenderer-CFRXHY34-Bv3MrXpg.js";import"./client-CZTHzaKS.js";import"./index-4poXP75K.js";import"./bucket-10-CJixWMOF.js";import"./bucket-19-D8xKEiK4.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./AccordionItem-BSN9nR-N.js";import"./Text-Cjos7Soh.js";import"./devtools-B69Kc3qg.js";import"./FilterPanelGroup-DVe1mXl7.js";import"./ListItem-BNaOEPt2.js";import"./TruncatedList-Dn3K8v22.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./Checkbox-BrqLuRFj.js";import"./index-CVEmjZFv.js";import"./bucket-18-338UTbBD.js";import"./utils--12iVJsW.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
`,o.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,o.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,o.jsxs(e.blockquote,{children:[`
`,o.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,o.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"FilterPanelAccordion"}),` is a container required for grouping
`,o.jsx(e.code,{children:"FilterPanelAccordionItems"})," with a label and optional count."]}),`
`,o.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,o.jsx(C,{children:o.jsx(f,{of:r})}),`
`,o.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(F,{})]})}function P(t={}){const{wrapper:e}={...d(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(l,{...t})}):l(t)}const A="filter-panel-stories",se={title:"Deprecated/Filter panel/FilterPanelAccordion",component:p,tags:["autodocs"],parameters:{styles:u,docs:{page:P}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:n.createElement(n.Fragment,null,"Formatted"," ",n.createElement("span",{style:{fontWeight:"normal"}},n.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>n.createElement(g,{type:"deprecation-notice",text:n.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},k=t=>n.createElement("div",{className:`${A}__viewport`},n.createElement(b,null,n.createElement(p,{...t},n.createElement(v,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:({isOpen:e,event:i})=>{a("onHeadingClick ({ isOpen, event })")(e,i)}}},n.createElement(j,{count:10,labelText:"Checkbox",id:x(),onChange:(e,{checked:i,id:h})=>a("onChange Checkbox (event, { checked, id })")(e,i,h)}))))),r=k.bind({});r.storyName="Default";r.args={title:""};var c,s,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const me=["Default"];export{r as Default,me as __namedExportsOrder,se as default};
