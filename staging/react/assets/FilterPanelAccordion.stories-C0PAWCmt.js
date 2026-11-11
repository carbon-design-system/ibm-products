var p=Object.defineProperty;var i=(t,e)=>p(t,"name",{value:e,configurable:!0});import{u as s,j as n,aO as h,aR as u,aS as x,R as o}from"./iframe-CmZeheT6.js";import{u as g}from"./uuidv4-Fbcg8Vng.js";import{s as v}from"./_storybook-styles-DYLPaI3o.js";import{A as b}from"./index-B_DVOlna.js";import{F as d,a as j}from"./FilterPanelAccordionItem-CdoYRfjI.js";import{a as C}from"./FilterPanelLabel-CkjpN_NV.js";import{F as f}from"./FilterPanelCheckbox-CMtM5h68.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-CB-8MoXe.js";import"./bucket-21-KTYeptVo.js";import"./AccordionItem-B5hDylX-.js";import"./Text-CMDH-C6P.js";import"./devtools-B-HeQd45.js";import"./FilterPanelGroup-CsJRyIY9.js";import"./ListItem-jHpiD5xN.js";import"./TruncatedList-Bo7frXcL.js";import"./useIsomorphicEffect-DQ0EsNEL.js";import"./Checkbox-BGA6wYAD.js";import"./index-B9JydE09.js";import"./index-DFz6yjde.js";import"./bucket-20-C7kq65Sj.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BGRlyean.js";import"./useNoInteractiveChildrenForLabel-CdyTHLPU.js";function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
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
`,n.jsx(h,{children:n.jsx(u,{of:r})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(x,{})]})}i(l,"_createMdxContent");function F(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}i(F,"MDXContent");const{action:c}=__STORYBOOK_MODULE_ACTIONS__,A="filter-panel-stories",G={title:"Deprecated/Filter panel/FilterPanelAccordion",component:d,tags:["autodocs"],parameters:{styles:v,chromatic:{disableSnapshot:!0},docs:{page:F}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:o.createElement(o.Fragment,null,"Formatted"," ",o.createElement("span",{style:{fontWeight:"normal"}},o.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>o.createElement(b,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},P=i(t=>o.createElement("div",{className:`${A}__viewport`},o.createElement(C,null,o.createElement(d,{...t},o.createElement(j,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:i(({isOpen:e,event:a})=>{c("onHeadingClick ({ isOpen, event })")(e,a)},"onHeadingClick")}},o.createElement(f,{count:10,labelText:"Checkbox",id:g(),onChange:i((e,{checked:a,id:m})=>c("onChange Checkbox (event, { checked, id })")(e,a,m),"onChange")}))))),"Template"),r=P.bind({});r.storyName="Default";r.args={title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const J=["Default"];export{r as Default,J as __namedExportsOrder,G as default};
//# sourceMappingURL=FilterPanelAccordion.stories-C0PAWCmt.js.map
