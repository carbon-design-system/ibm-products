var p=Object.defineProperty;var i=(o,e)=>p(o,"name",{value:e,configurable:!0});import{j as n,aA as h,aC as x,aB as u,e as t}from"./iframe-D7SEW46n.js";import{useMDXComponents as s}from"./index-mjRP7aaa.js";import{u as g}from"./uuidv4-Fbcg8Vng.js";import{s as v}from"./_storybook-styles-DYLPaI3o.js";import{A as b}from"./index-0r6Ybb21.js";import{F as d,a as C}from"./FilterPanelAccordionItem-C0oZ5CAo.js";import{a as j}from"./FilterPanelLabel-BQKtkeri.js";import{F as f}from"./FilterPanelCheckbox-B3DwmkaC.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-10-CZYtW2_b.js";import"./bucket-19-CmSPB5ma.js";import"./AccordionItem-uP2XVX23.js";import"./Text-CpOZ4YWZ.js";import"./devtools-1BZM14jD.js";import"./FilterPanelGroup-Ci2SpxwU.js";import"./ListItem-DINWEcP_.js";import"./TruncatedList-DSxk5b-h.js";import"./useIsomorphicEffect-BXsFz5wQ.js";import"./Checkbox-IP95NoIw.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./utils-DwyE9iBt.js";function l(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"filterpanelaccordion",children:"FilterPanelAccordion"}),`
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
`,n.jsx(u,{})]})}i(l,"_createMdxContent");function A(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(l,{...o})}):l(o)}i(A,"MDXContent");const{action:c}=__STORYBOOK_MODULE_ACTIONS__,F="filter-panel-stories",Y={title:"Deprecated/Filter panel/FilterPanelAccordion",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:A}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Accordion name",1:"Really, really long accordion name",2:t.createElement(t.Fragment,null,"Formatted"," ",t.createElement("span",{style:{fontWeight:"normal"}},t.createElement("em",null,"accordion")," label"))},options:[0,1,2]}},args:{count:1,labelText:0},decorators:[o=>t.createElement(b,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},o())]},P=i(o=>t.createElement("div",{className:`${F}__viewport`},t.createElement(j,null,t.createElement(d,{...o},t.createElement(C,{labelText:"Accordion item",count:10,accordionItemProps:{onHeadingClick:i(({isOpen:e,event:a})=>{c("onHeadingClick ({ isOpen, event })")(e,a)},"onHeadingClick")}},t.createElement(f,{count:10,labelText:"Checkbox",id:g(),onChange:i((e,{checked:a,id:m})=>c("onChange Checkbox (event, { checked, id })")(e,a,m),"onChange")}))))),"Template"),r=P.bind({});r.storyName="Default";r.args={title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};const z=["Default"];export{r as Default,z as __namedExportsOrder,Y as default};
//# sourceMappingURL=FilterPanelAccordion.stories-C72ll5Vb.js.map
