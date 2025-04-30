import{e as t}from"./index-DzvNrmz8.js";import{a as c}from"./index-B-lxVbXh.js";import{j as n}from"./index-Cg1swjps.js";import{useMDXComponents as k}from"./index-B7BkHM3Y.js";import"./index-TT84mNRS.js";import{u as f}from"./uuidv4-BN2rGLQG.js";import{s as T}from"./_storybook-styles-DYLPaI3o.js";import{A as E}from"./index-B9fxRmSt.js";import{a as m,F as P}from"./FilterPanelAccordionItem-D5MUeL6n.js";import{a as A}from"./FilterPanelLabel-Dg4bcQ5_.js";import{F as y}from"./FilterPanelCheckbox-BXVuHxZ6.js";import{a as p,j as h,C as I}from"./index-CwcgRXWl.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./v4-CtRu48qb.js";import"./index-Bv4JGo1_.js";import"./preview-B_jYMs5d.js";import"./iframe-BsXekYnT.js";import"./DocsRenderer-CFRXHY34-Dv3JWg4F.js";import"./client-fwTTGz69.js";import"./index-5As4T26e.js";import"./bucket-10-BLMdRzi0.js";import"./bucket-18-D-cwffHE.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./AccordionItem-NFjBSBpp.js";import"./Text-DyBNjUAs.js";import"./devtools-B_dijMH7.js";import"./FilterPanelGroup-CzDB70Xh.js";import"./ListItem-CQiAF2jW.js";import"./TruncatedList-Bc7umcZ8.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./Checkbox-BedUlDBz.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function u(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...k(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordionitem",children:"FilterPanelAccordionItem"}),`
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
`,n.jsx(I,{})]})}function w(r={}){const{wrapper:e}={...k(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(u,{...r})}):u(r)}const F="filter-panel-stories",ue={title:"Deprecated/Filter panel/FilterPanelAccordionItem",component:m,tags:["autodocs"],parameters:{styles:T,docs:{page:w}},argTypes:{children:{table:{disable:!0}},accordionItemProps:{control:{type:{}}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 12",2:'As string: "1,500"'}},mapping:{0:void 0,1:12,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion item",1:"Really, really long item name",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"item")," name")},options:[0,1,2]},truncatedListProps:{control:{type:{}}}},args:{count:1,labelText:0},decorators:[r=>t.createElement(E,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},_=r=>t.createElement("div",{className:`${F}__viewport`},t.createElement(A,null,t.createElement(P,{labelText:"Accordion"},t.createElement(m,{...r,accordionItemProps:{onHeadingClick:({isOpen:e,event:o})=>{c("onHeadingClick ({ isOpen, event })")(e,o)}}},new Array(5).fill().map((e,o)=>t.createElement(y,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:f(),onChange:(l,{checked:s,id:d})=>c("onChange Checkbox (event, { checked, id })")(l,s,d)})))))),O=r=>t.createElement("div",{className:`${F}__viewport`},t.createElement(A,null,t.createElement(P,{labelText:"Accordion"},t.createElement(m,{...r,accordionItemProps:{onHeadingClick:({isOpen:e,event:o})=>{c("onHeadingClick ({ isOpen, event })")(e,o)}},truncatedListProps:{expandedItemsLimit:15}},new Array(12).fill().map((e,o)=>t.createElement(y,{key:o,count:10,labelText:`Checkbox ${o+1}`,id:f(),onChange:(l,{checked:s,id:d})=>c("onChange Checkbox (event, { checked, id })")(l,s,d)})))))),i=_.bind({});i.storyName="Default";i.args={title:""};const a=O.bind({});a.storyName="Truncated";a.args={title:""};var x,g,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
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
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var C,b,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const xe=["Default","Truncated"];export{i as Default,a as Truncated,xe as __namedExportsOrder,ue as default};
