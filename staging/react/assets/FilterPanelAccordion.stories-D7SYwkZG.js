import{j as n,ej as m,el as p,ek as h,e as o}from"./iframe-DKsKIeO_.js";import{useMDXComponents as c}from"./index-DnTQNC1B.js";import{u as x}from"./uuidv4-BN2rGLQG.js";import{s as u}from"./_storybook-styles-DYLPaI3o.js";import{A as g}from"./index-BvgnVJp0.js";import{F as s,a as v}from"./FilterPanelAccordionItem-CeW3PG0M.js";import{a as b}from"./FilterPanelLabel-X-eE9TOD.js";import{F as j}from"./FilterPanelCheckbox-BheayTH-.js";import"./bucket-10-Bu-sNLdl.js";import"./bucket-19-CjGrDCAa.js";import"./AccordionItem--x4dxrtI.js";import"./Text-DWkOwfBd.js";import"./devtools-Bn3omVKL.js";import"./FilterPanelGroup-DNu0dar1.js";import"./ListItem-C3m-xwBO.js";import"./TruncatedList-C3mjXowM.js";import"./useIsomorphicEffect-0hnIMifz.js";import"./Checkbox-CVRUThck.js";import"./index-zH3n7d5W.js";import"./bucket-18-DCBnxAKD.js";import"./utils-BNH49ZRR.js";function a(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
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
`,n.jsx(m,{children:n.jsx(p,{of:r})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(h,{})]})}function C(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}const{action:l}=__STORYBOOK_MODULE_ACTIONS__,f="filter-panel-stories",B={title:"Deprecated/Filter panel/FilterPanelAccordion",component:s,tags:["autodocs"],parameters:{styles:u,docs:{page:C}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:o.createElement(o.Fragment,null,"Formatted"," ",o.createElement("span",{style:{fontWeight:"normal"}},o.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[t=>o.createElement(g,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},t())]},F=t=>o.createElement("div",{className:`${f}__viewport`},o.createElement(b,null,o.createElement(s,{...t},o.createElement(v,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:({isOpen:e,event:i})=>{l("onHeadingClick ({ isOpen, event })")(e,i)}}},o.createElement(j,{count:10,labelText:"Checkbox",id:x(),onChange:(e,{checked:i,id:d})=>l("onChange Checkbox (event, { checked, id })")(e,i,d)}))))),r=F.bind({});r.storyName="Default";r.args={title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const K=["Default"];export{r as Default,K as __namedExportsOrder,B as default};
