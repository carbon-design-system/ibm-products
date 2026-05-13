var P=Object.defineProperty;var i=(r,e)=>P(r,"name",{value:e,configurable:!0});import{j as n,aH as h,aJ as u,aI as f,e as t}from"./iframe-t6K2KT89.js";import{useMDXComponents as g}from"./index-CcGpqAnU.js";import{u as v}from"./uuidv4-Fbcg8Vng.js";import{s as A}from"./_storybook-styles-DYLPaI3o.js";import{A as y}from"./index-CMLNWzVP.js";import{a as p,F as C}from"./FilterPanelAccordionItem-CNOA6Je_.js";import{a as b}from"./FilterPanelLabel-DOgq_vtJ.js";import{F as j}from"./FilterPanelCheckbox-mBTFNSdW.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-Cx8VWvu-.js";import"./bucket-20-RO2qCJtZ.js";import"./AccordionItem-CXVg-nSx.js";import"./Text-DAQ2PBki.js";import"./devtools-W8hnGsLd.js";import"./FilterPanelGroup-C7r6-T9J.js";import"./ListItem-B6LQ435N.js";import"./TruncatedList-BPh9Lyen.js";import"./useIsomorphicEffect-yAsi5cdK.js";import"./Checkbox-Ddp6lQzA.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CnzvYlOI.js";import"./index-CRnkdfzI.js";import"./index-BYKt6Fpu.js";import"./bucket-19-Dcgt9bs5.js";function x(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...g(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordionitem",children:"FilterPanelAccordionItem"}),`
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
`,n.jsx(h,{children:n.jsx(u,{of:a})}),`
`,n.jsx(e.h2,{id:"truncated-usage",children:"Truncated usage"}),`
`,n.jsx(h,{children:n.jsx(u,{of:c})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(f,{})]})}i(x,"_createMdxContent");function F(r={}){const{wrapper:e}={...g(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(x,{...r})}):x(r)}i(F,"MDXContent");const{action:l}=__STORYBOOK_MODULE_ACTIONS__,k="filter-panel-stories",ee={title:"Deprecated/Filter panel/FilterPanelAccordionItem",component:p,tags:["autodocs"],parameters:{styles:A,docs:{page:F}},argTypes:{children:{table:{disable:!0}},accordionItemProps:{control:{type:{}}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 12",2:'As string: "1,500"'}},mapping:{0:void 0,1:12,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion item",1:"Really, really long item name",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"item")," name")},options:[0,1,2]},truncatedListProps:{control:{type:{}}}},args:{count:1,labelText:0},decorators:[r=>t.createElement(y,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},T=i(r=>t.createElement("div",{className:`${k}__viewport`},t.createElement(b,null,t.createElement(C,{labelText:"Accordion"},t.createElement(p,{...r,accordionItemProps:{onHeadingClick:i(({isOpen:e,event:o})=>{l("onHeadingClick ({ isOpen, event })")(e,o)},"onHeadingClick")}},new Array(5).fill().map((e,o)=>t.createElement(j,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:v(),onChange:i((s,{checked:d,id:m})=>l("onChange Checkbox (event, { checked, id })")(s,d,m),"onChange")})))))),"Template"),E=i(r=>t.createElement("div",{className:`${k}__viewport`},t.createElement(b,null,t.createElement(C,{labelText:"Accordion"},t.createElement(p,{...r,accordionItemProps:{onHeadingClick:i(({isOpen:e,event:o})=>{l("onHeadingClick ({ isOpen, event })")(e,o)},"onHeadingClick")},truncatedListProps:{expandedItemsLimit:15}},new Array(12).fill().map((e,o)=>t.createElement(j,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:v(),onChange:i((s,{checked:d,id:m})=>l("onChange Checkbox (event, { checked, id })")(s,d,m),"onChange")})))))),"TemplateMany"),a=T.bind({});a.storyName="Default";a.args={title:""};const c=E.bind({});c.storyName="Truncated";c.args={title:""};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
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
}`,...c.parameters?.docs?.source}}};const ne=["Default","Truncated"];export{a as Default,c as Truncated,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=FilterPanelAccordionItem.stories-m5in-1sd.js.map
