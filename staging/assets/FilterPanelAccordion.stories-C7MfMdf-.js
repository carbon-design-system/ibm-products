import{R as o}from"./index-BwDkhjyp.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{j as n}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as d}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BgzNaMoH.js";import{e as x,i as u,C as g}from"./index-DXUYcqZv.js";import{u as v}from"./uuidv4-BQrI85uz.js";import{s as b}from"./_storybook-styles-C0uQlRwR.js";import{A as j}from"./index-DznJAQiH.js";import{F as p,a as C}from"./FilterPanelAccordionItem-_B9omw8U.js";import{a as f}from"./FilterPanelLabel-Dq8uMmgD.js";import{F}from"./FilterPanelCheckbox-xejk3Za4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./iframe-DanyPKBP.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-Dk74W0Oi.js";import"./index-CQ0F2wkl.js";import"./settings-xiNX1vM3.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./bucket-18-DbwFKOtV.js";import"./bucket-9-BGCJpvdq.js";import"./AccordionItem-C1_nOVGv.js";import"./Text-BiMgJRID.js";import"./devtools-Bz70ioU6.js";import"./FilterPanelGroup-DsPsGfsG.js";import"./ListItem-BMyRYSTP.js";import"./TruncatedList-BZ2blH9n.js";import"./Checkbox-NbGVaYV6.js";function l(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
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
`,n.jsx(x,{children:n.jsx(u,{of:r})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(g,{})]})}function P(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}const A="filter-panel-stories",se={title:"Deprecated/Filter panel/FilterPanelAccordion",component:p,tags:["autodocs"],parameters:{styles:b,docs:{page:P}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:o.createElement(o.Fragment,null,"Formatted"," ",o.createElement("span",{style:{fontWeight:"normal"}},o.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>o.createElement(j,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},k=t=>o.createElement("div",{className:`${A}__viewport`},o.createElement(f,null,o.createElement(p,{...t},o.createElement(C,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:({isOpen:e,event:i})=>{a("onHeadingClick ({ isOpen, event })")(e,i)}}},o.createElement(F,{count:10,labelText:"Checkbox",id:v(),onChange:(e,{checked:i,id:h})=>a("onChange Checkbox (event, { checked, id })")(e,i,h)}))))),r=k.bind({});r.storyName="Default";r.args={title:""};var c,s,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
