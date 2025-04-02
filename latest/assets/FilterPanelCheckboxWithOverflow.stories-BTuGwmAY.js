import{e as o}from"./index-CPiZ6Cnx.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./uuidv4-BN2rGLQG.js";import"./index-BPCFiO9b.js";import{O as l}from"./OverflowMenuItem-Bes9qn8M.js";import{j as t}from"./index-B83en7q5.js";import{useMDXComponents as p}from"./index-CUO_02de.js";import"./index-Bf_H9q8r.js";import{s as v}from"./_storybook-styles-DYLPaI3o.js";import{A as u}from"./index-CT49tSwO.js";import{F as d}from"./FilterPanelCheckboxWithOverflow-DOVSvHTP.js";import{a as f}from"./FilterPanelLabel-DLk_vvrc.js";import{a as C,f as k,C as b}from"./index-DblCLej2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./Text-DJS5NTiV.js";import"./index-ZKO_qc5e.js";import"./preview-DUa2hDsf.js";import"./iframe-DG_HeTRT.js";import"./DocsRenderer-CFRXHY34-DtZUrKsm.js";import"./client-BCQEsWlk.js";import"./bucket-10-COvSrTUI.js";import"./bucket-18-CAzey7tD.js";import"./settings-41bnSjHp.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./index-BZnmZh5O.js";import"./useAttachedMenu-CqlpaYyp.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-6vZmyEHs.js";import"./wrapFocus-Dfrp1CCV.js";import"./createClassWrapper-CfmfodUV.js";import"./devtools-Ca6Wku6c.js";import"./FilterPanelCheckbox-DbeU_fyU.js";import"./Checkbox-C003KrfO.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"filterpanelcheckboxwithoverflow",children:"FilterPanelCheckboxWithOverflow"}),`
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
`,t.jsx(C,{children:t.jsx(k,{of:r})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(b,{})]})}function j(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}const w="filter-panel-stories",ae={title:"Deprecated/Filter panel/FilterPanelCheckboxWithOverflow",component:d,tags:["autodocs"],argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:v,docs:{page:j}},decorators:[n=>o.createElement(u,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},g=n=>o.createElement("div",{className:`${w}__viewport`},o.createElement(f,null,o.createElement(d,{...n},o.createElement(l,{itemText:"Option 1",onClick:e=>{i("onClick (event)")(e)}}),o.createElement(l,{itemText:"Option 2, preselected",onClick:e=>{i("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),o.createElement(l,{itemText:"Option 3",onClick:e=>{i("onClick (event)")(e)}}),o.createElement(l,{itemText:"Option 4",onClick:e=>{i("onClick (event)")(e)}})))),r=g.bind({});r.storyName="Default";r.args={id:x(),onChange:(n,{checked:e,id:h})=>i("onChange Checkbox (event, { checked, id })")(n,e,h),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"},title:""};var c,s,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ce=["Default"];export{r as Default,ce as __namedExportsOrder,ae as default};
