import{j as n,aB as p,aD as h,aC as k,e as t}from"./iframe-BbTYfv9-.js";import{useMDXComponents as x}from"./index-BBorVmTi.js";import{u as g}from"./uuidv4-BN2rGLQG.js";import{s as P}from"./_storybook-styles-DYLPaI3o.js";import{A as f}from"./index-KnhCxvuW.js";import{a as m,F as v}from"./FilterPanelAccordionItem-CJeUJSIG.js";import{a as C}from"./FilterPanelLabel-Btcw7oi0.js";import{F as b}from"./FilterPanelCheckbox-C_IEMcsy.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-10-Cya3ufu0.js";import"./bucket-19-DKyp3qQO.js";import"./AccordionItem-PfkOwNmu.js";import"./Text-CJYku-mr.js";import"./devtools-KS_k4bKc.js";import"./FilterPanelGroup-CwMCv25E.js";import"./ListItem-ByZKorbv.js";import"./TruncatedList-Dq5N2Dh9.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./Checkbox-C_vI3TFv.js";import"./index-DxihRps1.js";import"./utils-C-ow7gcy.js";function u(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...x(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordionitem",children:"FilterPanelAccordionItem"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#truncated-usage",children:"Truncated usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"FilterPanelAccordionItem"}),` can be expanded and collapsed and will accept any
number of `,n.jsx(e.code,{children:"children"}),". The ",n.jsx(e.code,{children:"children"}),` will be formatted as part of an internal
`,n.jsx(e.code,{children:"TruncatedList"}),"."]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(p,{children:n.jsx(h,{of:i})}),`
`,n.jsx(e.h2,{id:"truncated-usage",children:"Truncated usage"}),`
`,n.jsx(p,{children:n.jsx(h,{of:a})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(k,{})]})}function A(r={}){const{wrapper:e}={...x(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(u,{...r})}):u(r)}const{action:c}=__STORYBOOK_MODULE_ACTIONS__,j="filter-panel-stories",z={title:"Deprecated/Filter panel/FilterPanelAccordionItem",component:m,tags:["autodocs"],parameters:{styles:P,docs:{page:A}},argTypes:{children:{table:{disable:!0}},accordionItemProps:{control:{type:{}}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 12",2:'As string: "1,500"'}},mapping:{0:void 0,1:12,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion item",1:"Really, really long item name",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"item")," name")},options:[0,1,2]},truncatedListProps:{control:{type:{}}}},args:{count:1,labelText:0},decorators:[r=>t.createElement(f,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},y=r=>t.createElement("div",{className:`${j}__viewport`},t.createElement(C,null,t.createElement(v,{labelText:"Accordion"},t.createElement(m,{...r,accordionItemProps:{onHeadingClick:({isOpen:e,event:o})=>{c("onHeadingClick ({ isOpen, event })")(e,o)}}},new Array(5).fill().map((e,o)=>t.createElement(b,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:g(),onChange:(l,{checked:s,id:d})=>c("onChange Checkbox (event, { checked, id })")(l,s,d)})))))),F=r=>t.createElement("div",{className:`${j}__viewport`},t.createElement(C,null,t.createElement(v,{labelText:"Accordion"},t.createElement(m,{...r,accordionItemProps:{onHeadingClick:({isOpen:e,event:o})=>{c("onHeadingClick ({ isOpen, event })")(e,o)}},truncatedListProps:{expandedItemsLimit:15}},new Array(12).fill().map((e,o)=>t.createElement(b,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:g(),onChange:(l,{checked:s,id:d})=>c("onChange Checkbox (event, { checked, id })")(l,s,d)})))))),i=y.bind({});i.storyName="Default";i.args={title:""};const a=F.bind({});a.storyName="Truncated";a.args={title:""};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelAccordion labelText="Accordion">
          <FilterPanelAccordionItem {...args} accordionItemProps={{
          onHeadingClick: ({
            isOpen,
            event
          }) => {
            action('onHeadingClick ({ isOpen, event })')(isOpen, event);
          }
        }}>
            {new Array(5).fill().map((item, index) => {
            return <FilterPanelCheckbox key={index} count={10} labelText={\`Checkbox \${index + 1}\`} id={uuidv4()} onChange={(event, {
              checked,
              id
            }) => action('onChange Checkbox (event, { checked, id })')(event, checked, id)} />;
          })}
          </FilterPanelAccordionItem>
        </FilterPanelAccordion>
      </FilterPanel>
    </div>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelAccordion labelText="Accordion">
          <FilterPanelAccordionItem {...args} accordionItemProps={{
          onHeadingClick: ({
            isOpen,
            event
          }) => {
            action('onHeadingClick ({ isOpen, event })')(isOpen, event);
          }
        }} truncatedListProps={{
          expandedItemsLimit: 15
        }}>
            {new Array(12).fill().map((item, index) => {
            return <FilterPanelCheckbox key={index} count={10} labelText={\`Checkbox \${index + 1}\`} id={uuidv4()} onChange={(event, {
              checked,
              id
            }) => action('onChange Checkbox (event, { checked, id })')(event, checked, id)} />;
          })}
          </FilterPanelAccordionItem>
        </FilterPanelAccordion>
      </FilterPanel>
    </div>;
}`,...a.parameters?.docs?.source}}};const G=["Default","Truncated"];export{i as Default,a as Truncated,G as __namedExportsOrder,z as default};
//# sourceMappingURL=FilterPanelAccordionItem.stories-BwpYxx0I.js.map
