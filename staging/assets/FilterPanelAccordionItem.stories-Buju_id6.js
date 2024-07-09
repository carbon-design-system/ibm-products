import{j as e}from"./settings-BiUEFdm2.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as P}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as m,i as p,C as y}from"./index-CDYzkStP.js";import{u as b}from"./uuidv4-BQrI85uz.js";import{s as T}from"./_storybook-styles-C0uQlRwR.js";import{a as d,F as f}from"./FilterPanelAccordionItem-CoRbmKtS.js";import{a as k}from"./FilterPanelLabel-BZGwbzwr.js";import{F}from"./FilterPanelCheckbox-CAmvLBpx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./deprecate-D9ms-jbM.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./AccordionItem-DcUyOTy6.js";import"./Text-_TFgs5hl.js";import"./devtools-BPcQvzXy.js";import"./FilterPanelGroup-BtLLcONC.js";import"./ListItem-bxQFBg2r.js";import"./TruncatedList-DyMLFCxA.js";import"./Checkbox-78nhbV8e.js";import"./bucket-17-CArjO86K.js";function h(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...P(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filterpanelaccordionitem",children:"FilterPanelAccordionItem"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#truncated-usage",children:"Truncated usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterPanelAccordionItem"}),` can be expanded and collapsed and will accept any
number of `,e.jsx(n.code,{children:"children"}),". The ",e.jsx(n.code,{children:"children"}),` will be formatted as part of an internal
`,e.jsx(n.code,{children:"TruncatedList"}),"."]}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(m,{children:e.jsx(p,{of:i})}),`
`,e.jsx(n.h2,{id:"truncated-usage",children:"Truncated usage"}),`
`,e.jsx(m,{children:e.jsx(p,{of:o})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(y,{})]})}function I(r={}){const{wrapper:n}={...P(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(h,{...r})}):h(r)}const A="filter-panel-stories",me={title:"IBM Products/Components/Filter panel/FilterPanelAccordionItem",component:d,tags:["autodocs"],parameters:{styles:T,docs:{page:I}},argTypes:{children:{table:{disable:!0}},accordionItemProps:{control:{type:{}}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 12",2:'As string: "1,500"'}},mapping:{0:void 0,1:12,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion item",1:"Really, really long item name",2:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"item"})," name"]})},options:[0,1,2]},truncatedListProps:{control:{type:{}}}},args:{count:1,labelText:0}},w=r=>e.jsx("div",{className:`${A}__viewport`,children:e.jsx(k,{children:e.jsx(f,{labelText:"Accordion",children:e.jsx(d,{...r,accordionItemProps:{onHeadingClick:({isOpen:n,event:t})=>{a("onHeadingClick ({ isOpen, event })")(n,t)}},children:new Array(5).fill().map((n,t)=>e.jsx(F,{count:10,labelText:`Checkbox ${t+1}`,id:b(),onChange:(c,{checked:l,id:s})=>a("onChange Checkbox (event, { checked, id })")(c,l,s)},t))})})})}),_=r=>e.jsx("div",{className:`${A}__viewport`,children:e.jsx(k,{children:e.jsx(f,{labelText:"Accordion",children:e.jsx(d,{...r,accordionItemProps:{onHeadingClick:({isOpen:n,event:t})=>{a("onHeadingClick ({ isOpen, event })")(n,t)}},truncatedListProps:{expandedItemsLimit:15},children:new Array(12).fill().map((n,t)=>e.jsx(F,{count:10,labelText:`Checkbox ${t+1}`,id:b(),onChange:(c,{checked:l,id:s})=>a("onChange Checkbox (event, { checked, id })")(c,l,s)},t))})})})}),i=w.bind({});i.storyName="Default";i.args={title:""};const o=_.bind({});o.storyName="Truncated";o.args={title:""};var x,u,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
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
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var j,v,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const pe=["Default","Truncated"];export{i as Default,o as Truncated,pe as __namedExportsOrder,me as default};
