import{e as t}from"./index-CPiZ6Cnx.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{aw as n,al as p,ax as h,ak as T}from"./index-Bns_Ssrt.js";import{useMDXComponents as j}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-BrfLt39G.js";import{u as f}from"./uuidv4-BQrI85uz.js";import{s as E}from"./_storybook-styles-C0uQlRwR.js";import{A as w}from"./index-DVpmqM_A.js";import{a as m,F as P}from"./FilterPanelAccordionItem-D-WwaHkA.js";import{a as A}from"./FilterPanelLabel-BLb6uvin.js";import{F as y}from"./FilterPanelCheckbox-Bki4vH9y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-CXupES5w.js";import"../sb-preview/runtime.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./index-CXyjPnaX.js";import"./settings-iwZeeh4T.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./bucket-18-By6NmkK1.js";import"./bucket-9-BSWQ2dSd.js";import"./AccordionItem-DdQEl6DI.js";import"./Text-vNWzJqus.js";import"./devtools-CjVY-wQW.js";import"./FilterPanelGroup-DK5CN7BI.js";import"./ListItem-C-nvXM00.js";import"./TruncatedList-B29G1f0X.js";import"./Checkbox-UQpZ5X10.js";function u(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...j(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordionitem",children:"FilterPanelAccordionItem"}),`
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
`,n.jsx(T,{})]})}function I(r={}){const{wrapper:e}={...j(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(u,{...r})}):u(r)}const F="filter-panel-stories",he={title:"Deprecated/Filter panel/FilterPanelAccordionItem",component:m,tags:["autodocs"],parameters:{styles:E,docs:{page:I}},argTypes:{children:{table:{disable:!0}},accordionItemProps:{control:{type:{}}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 12",2:'As string: "1,500"'}},mapping:{0:void 0,1:12,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion item",1:"Really, really long item name",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"item")," name")},options:[0,1,2]},truncatedListProps:{control:{type:{}}}},args:{count:1,labelText:0},decorators:[r=>t.createElement(w,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},_=r=>t.createElement("div",{className:`${F}__viewport`},t.createElement(A,null,t.createElement(P,{labelText:"Accordion"},t.createElement(m,{...r,accordionItemProps:{onHeadingClick:({isOpen:e,event:o})=>{c("onHeadingClick ({ isOpen, event })")(e,o)}}},new Array(5).fill().map((e,o)=>t.createElement(y,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:f(),onChange:(l,{checked:s,id:d})=>c("onChange Checkbox (event, { checked, id })")(l,s,d)})))))),O=r=>t.createElement("div",{className:`${F}__viewport`},t.createElement(A,null,t.createElement(P,{labelText:"Accordion"},t.createElement(m,{...r,accordionItemProps:{onHeadingClick:({isOpen:e,event:o})=>{c("onHeadingClick ({ isOpen, event })")(e,o)}},truncatedListProps:{expandedItemsLimit:15}},new Array(12).fill().map((e,o)=>t.createElement(y,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:f(),onChange:(l,{checked:s,id:d})=>c("onChange Checkbox (event, { checked, id })")(l,s,d)})))))),i=_.bind({});i.storyName="Default";i.args={title:""};const a=O.bind({});a.storyName="Truncated";a.args={title:""};var x,g,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
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
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,C,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const ue=["Default","Truncated"];export{i as Default,a as Truncated,ue as __namedExportsOrder,he as default};
