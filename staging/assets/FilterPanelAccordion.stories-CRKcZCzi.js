import{j as e}from"./settings-BiUEFdm2.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as d}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as h,i as x,C as u}from"./index-CDYzkStP.js";import{u as g}from"./uuidv4-BQrI85uz.js";import{s as j}from"./_storybook-styles-C0uQlRwR.js";import{F as m,a as C}from"./FilterPanelAccordionItem-CoRbmKtS.js";import{a as v}from"./FilterPanelLabel-BZGwbzwr.js";import{F as f}from"./FilterPanelCheckbox-CAmvLBpx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./deprecate-D9ms-jbM.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./AccordionItem-DcUyOTy6.js";import"./Text-_TFgs5hl.js";import"./devtools-BPcQvzXy.js";import"./FilterPanelGroup-BtLLcONC.js";import"./ListItem-bxQFBg2r.js";import"./TruncatedList-DyMLFCxA.js";import"./Checkbox-78nhbV8e.js";import"./bucket-17-CArjO86K.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterPanelAccordion"}),` is a container required for grouping
`,e.jsx(n.code,{children:"FilterPanelAccordionItems"})," with a label and optional count."]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(h,{children:e.jsx(x,{of:r})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function b(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}const F="filter-panel-stories",te={title:"IBM Products/Components/Filter panel/FilterPanelAccordion",component:m,tags:["autodocs"],parameters:{styles:j,docs:{page:b}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:e.jsxs(e.Fragment,{children:["Formatted"," ",e.jsxs("span",{style:{fontWeight:"normal"},children:[e.jsx("em",{children:"accordion"})," label"]})]})},options:[0,1,2]}},args:{count:1,labelText:0}},P=o=>e.jsx("div",{className:`${F}__viewport`,children:e.jsx(v,{children:e.jsx(m,{...o,children:e.jsx(C,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:({isOpen:n,event:t})=>{i("onHeadingClick ({ isOpen, event })")(n,t)}},children:e.jsx(f,{count:10,labelText:"Checkbox",id:g(),onChange:(n,{checked:t,id:p})=>i("onChange Checkbox (event, { checked, id })")(n,t,p)})})})})}),r=P.bind({});r.storyName="Default";r.args={title:""};var l,c,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(s=(c=r.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const ie=["Default"];export{r as Default,ie as __namedExportsOrder,te as default};
