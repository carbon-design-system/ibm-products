var p=Object.defineProperty;var i=(o,e)=>p(o,"name",{value:e,configurable:!0});import{j as n,aH as h,aJ as x,aI as u,e as t}from"./iframe-t6K2KT89.js";import{useMDXComponents as s}from"./index-CcGpqAnU.js";import{u as g}from"./uuidv4-Fbcg8Vng.js";import{s as v}from"./_storybook-styles-DYLPaI3o.js";import{A as b}from"./index-CMLNWzVP.js";import{F as d,a as j}from"./FilterPanelAccordionItem-CNOA6Je_.js";import{a as C}from"./FilterPanelLabel-DOgq_vtJ.js";import{F as f}from"./FilterPanelCheckbox-mBTFNSdW.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-Cx8VWvu-.js";import"./bucket-20-RO2qCJtZ.js";import"./AccordionItem-CXVg-nSx.js";import"./Text-DAQ2PBki.js";import"./devtools-W8hnGsLd.js";import"./FilterPanelGroup-C7r6-T9J.js";import"./ListItem-B6LQ435N.js";import"./TruncatedList-BPh9Lyen.js";import"./useIsomorphicEffect-yAsi5cdK.js";import"./Checkbox-Ddp6lQzA.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CnzvYlOI.js";import"./index-CRnkdfzI.js";import"./index-BYKt6Fpu.js";import"./bucket-19-Dcgt9bs5.js";function l(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
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
`,n.jsx(h,{children:n.jsx(x,{of:r})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(u,{})]})}i(l,"_createMdxContent");function F(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(l,{...o})}):l(o)}i(F,"MDXContent");const{action:c}=__STORYBOOK_MODULE_ACTIONS__,A="filter-panel-stories",z={title:"Deprecated/Filter panel/FilterPanelAccordion",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:F}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:t.createElement(t.Fragment,null,"Formatted"," ",t.createElement("span",{style:{fontWeight:"normal"}},t.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[o=>t.createElement(b,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},o())]},P=i(o=>t.createElement("div",{className:`${A}__viewport`},t.createElement(C,null,t.createElement(d,{...o},t.createElement(j,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:i(({isOpen:e,event:a})=>{c("onHeadingClick ({ isOpen, event })")(e,a)},"onHeadingClick")}},t.createElement(f,{count:10,labelText:"Checkbox",id:g(),onChange:i((e,{checked:a,id:m})=>c("onChange Checkbox (event, { checked, id })")(e,a,m),"onChange")}))))),"Template"),r=P.bind({});r.storyName="Default";r.args={title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,z as default};
//# sourceMappingURL=FilterPanelAccordion.stories-D0DIOBpC.js.map
