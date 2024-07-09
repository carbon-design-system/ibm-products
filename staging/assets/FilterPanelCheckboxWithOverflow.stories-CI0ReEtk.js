import{j as e}from"./settings-BiUEFdm2.js";import{a as r}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{u as h}from"./uuidv4-BQrI85uz.js";import"./deprecate-D9ms-jbM.js";import{a as i}from"./index-B7Id7uWF.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as d,i as v,C as u}from"./index-CDYzkStP.js";import{s as f}from"./_storybook-styles-C0uQlRwR.js";import{F as p}from"./FilterPanelCheckboxWithOverflow-g9HEQjq0.js";import{a as C}from"./FilterPanelLabel-BZGwbzwr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./Text-_TFgs5hl.js";import"./index-gKY8typL.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./devtools-BPcQvzXy.js";import"./FilterPanelCheckbox-CAmvLBpx.js";import"./Checkbox-78nhbV8e.js";import"./bucket-17-CArjO86K.js";function l(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanelcheckboxwithoverflow",children:"FilterPanelCheckboxWithOverflow"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FilterPanelCheckboxWithOverflow"})," is like ",e.jsx(t.code,{children:"FilterPanelCheckbox"}),`, but
provides access to an overflow menu with more options on hover.`]}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(d,{children:e.jsx(v,{of:n})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function k(o={}){const{wrapper:t}={...m(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(l,{...o})}):l(o)}const j="filter-panel-stories",ie={title:"IBM Products/Components/Filter panel/FilterPanelCheckboxWithOverflow",component:p,tags:["autodocs"],argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"checkbox"})]})},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:f,docs:{page:k}}},b=o=>e.jsx("div",{className:`${j}__viewport`,children:e.jsx(C,{children:e.jsxs(p,{...o,children:[e.jsx(i,{itemText:"Option 1",onClick:t=>{r("onClick (event)")(t)}}),e.jsx(i,{itemText:"Option 2, preselected",onClick:t=>{r("onClick (event)")(t)},"data-storybook-example-primary-focus":!0}),e.jsx(i,{itemText:"Option 3",onClick:t=>{r("onClick (event)")(t)}}),e.jsx(i,{itemText:"Option 4",onClick:t=>{r("onClick (event)")(t)}})]})})}),n=b.bind({});n.storyName="Default";n.args={id:h(),onChange:(o,{checked:t,id:x})=>r("onChange Checkbox (event, { checked, id })")(o,t,x),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"},title:""};var s,a,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const le=["Default"];export{n as Default,le as __namedExportsOrder,ie as default};
