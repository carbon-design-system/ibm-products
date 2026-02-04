import{j as t,aB as p,aD as d,aC as h,e as o}from"./iframe-BBf3bqTv.js";import{u as x}from"./uuidv4-BN2rGLQG.js";import{O as l}from"./OverflowMenuItem-iRr-fNZ0.js";import{useMDXComponents as c}from"./index-BQtCSjrU.js";import{s as v}from"./_storybook-styles-DYLPaI3o.js";import{A as u}from"./index-Bva3mllS.js";import{F as s}from"./FilterPanelCheckboxWithOverflow-BmLFbyIP.js";import{a as C}from"./FilterPanelLabel-CFLDatg2.js";import"./preload-helper-D9Z9MdNV.js";import"./Text-CaNb5F2n.js";import"./bucket-10-BG8-V5O3.js";import"./bucket-19-zmdOpOwk.js";import"./index-Kk4BUWQg.js";import"./useAttachedMenu-tCJ9pwqm.js";import"./mergeRefs-BZpmU3mx.js";import"./bucket-13-h41i3c0G.js";import"./wrapFocus-DaSELL9x.js";import"./useOutsideClick-DliSUker.js";import"./devtools-c2gfrTL0.js";import"./FilterPanelCheckbox-ONhAGTj8.js";import"./Checkbox-CFWURQEX.js";import"./index-DOwP6x5e.js";import"./utils-BgfmaY2S.js";function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"filterpanelcheckboxwithoverflow",children:"FilterPanelCheckboxWithOverflow"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"FilterPanelCheckboxWithOverflow"})," is like ",t.jsx(e.code,{children:"FilterPanelCheckbox"}),`, but
provides access to an overflow menu with more options on hover.`]}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(p,{children:t.jsx(d,{of:r})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(h,{})]})}function f(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}const{action:i}=__STORYBOOK_MODULE_ACTIONS__,k="filter-panel-stories",$={title:"Deprecated/Filter panel/FilterPanelCheckboxWithOverflow",component:s,tags:["autodocs"],argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:v,docs:{page:f}},decorators:[n=>o.createElement(u,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},b=n=>o.createElement("div",{className:`${k}__viewport`},o.createElement(C,null,o.createElement(s,{...n},o.createElement(l,{itemText:"Option 1",onClick:e=>{i("onClick (event)")(e)}}),o.createElement(l,{itemText:"Option 2, preselected",onClick:e=>{i("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),o.createElement(l,{itemText:"Option 3",onClick:e=>{i("onClick (event)")(e)}}),o.createElement(l,{itemText:"Option 4",onClick:e=>{i("onClick (event)")(e)}})))),r=b.bind({});r.storyName="Default";r.args={id:x(),onChange:(n,{checked:e,id:m})=>i("onChange Checkbox (event, { checked, id })")(n,e,m),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"},title:""};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelCheckboxWithOverflow {...args}>
          <OverflowMenuItem itemText="Option 1" onClick={event => {
          action('onClick (event)')(event);
        }} />
          <OverflowMenuItem itemText="Option 2, preselected" onClick={event => {
          action('onClick (event)')(event);
        }} data-storybook-example-primary-focus />
          <OverflowMenuItem itemText="Option 3" onClick={event => {
          action('onClick (event)')(event);
        }} />
          <OverflowMenuItem itemText="Option 4" onClick={event => {
          action('onClick (event)')(event);
        }} />
        </FilterPanelCheckboxWithOverflow>
      </FilterPanel>
    </div>;
}`,...r.parameters?.docs?.source}}};const K=["Default"];export{r as Default,K as __namedExportsOrder,$ as default};
//# sourceMappingURL=FilterPanelCheckboxWithOverflow.stories-DSIW_3HL.js.map
