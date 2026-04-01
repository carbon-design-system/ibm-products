var d=Object.defineProperty;var r=(o,e)=>d(o,"name",{value:e,configurable:!0});import{j as t,aD as h,aF as x,aE as v,e as n}from"./iframe-MbX6O_l3.js";import{u}from"./uuidv4-Fbcg8Vng.js";import{O as a}from"./OverflowMenuItem-0Kk98sHN.js";import{useMDXComponents as s}from"./index-DTU5FsM8.js";import{s as f}from"./_storybook-styles-DYLPaI3o.js";import{A as C}from"./index-N_2lbQvY.js";import{F as m}from"./FilterPanelCheckboxWithOverflow-Cvlscq4c.js";import{a as k}from"./FilterPanelLabel-CaLZ7K8r.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-CGkcXwwU.js";import"./bucket-11-O6Jcnve-.js";import"./bucket-20-BbNq9mQU.js";import"./index-CwkF1Fqb.js";import"./mergeRefs-BH0-8uDG.js";import"./useAttachedMenu-B8eiXx33.js";import"./environment-DRRHKtsv.js";import"./bucket-13-iTFwt5qR.js";import"./wrapFocus-BcxHWVRm.js";import"./useOutsideClick-Cd3UXw0q.js";import"./devtools-UxvtFMDS.js";import"./FilterPanelCheckbox-C5MynrlF.js";import"./Checkbox-BP9srWZq.js";import"./index-DZQZPLt9.js";import"./index-BiRNu0WX.js";import"./bucket-19-CbuYtg5m.js";import"./utils-COcQ0-H9.js";function c(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"filterpanelcheckboxwithoverflow",children:"FilterPanelCheckboxWithOverflow"}),`
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
`,t.jsx(h,{children:t.jsx(x,{of:i})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(v,{})]})}r(c,"_createMdxContent");function b(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(c,{...o})}):c(o)}r(b,"MDXContent");const{action:l}=__STORYBOOK_MODULE_ACTIONS__,O="filter-panel-stories",H={title:"Deprecated/Filter panel/FilterPanelCheckboxWithOverflow",component:m,tags:["autodocs"],argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:n.createElement(n.Fragment,null,n.createElement("strong",null,"Formatted")," ",n.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:f,docs:{page:b}},decorators:[o=>n.createElement(C,{type:"deprecation-notice",text:n.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},o())]},j=r(o=>n.createElement("div",{className:`${O}__viewport`},n.createElement(k,null,n.createElement(m,{...o},n.createElement(a,{itemText:"Option 1",onClick:r(e=>{l("onClick (event)")(e)},"onClick")}),n.createElement(a,{itemText:"Option 2, preselected",onClick:r(e=>{l("onClick (event)")(e)},"onClick"),"data-storybook-example-primary-focus":!0}),n.createElement(a,{itemText:"Option 3",onClick:r(e=>{l("onClick (event)")(e)},"onClick")}),n.createElement(a,{itemText:"Option 4",onClick:r(e=>{l("onClick (event)")(e)},"onClick")})))),"Template"),i=j.bind({});i.storyName="Default";i.args={id:u(),onChange:r((o,{checked:e,id:p})=>l("onChange Checkbox (event, { checked, id })")(o,e,p),"onChange"),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"},title:""};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
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
}`,...i.parameters?.docs?.source}}};const J=["Default"];export{i as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=FilterPanelCheckboxWithOverflow.stories-D6WilH2d.js.map
