import{e as o}from"./index-DxDX2vOa.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as x}from"./uuidv4-BQrI85uz.js";import"./index-B_euquWE.js";import{O as l}from"./OverflowMenuItem-B2qt5S-L.js";import{aw as t,al as v,ax as u,ak as f}from"./index-DAMUIRRT.js";import{useMDXComponents as p}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-qxTmjHpU.js";import{s as k}from"./_storybook-styles-C0uQlRwR.js";import{A as C}from"./index-CJ0Gdo6o.js";import{F as d}from"./FilterPanelCheckboxWithOverflow-4_LTck3q.js";import{a as b}from"./FilterPanelLabel-Dr32Q7B5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-CaMJXrh2.js";import"./Text-9AedOkae.js";import"./iframe-C1IaBP6P.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./bucket-18-Dvh787Y8.js";import"./bucket-9-Clk9T-SZ.js";import"./index-BK04RsGV.js";import"./useAttachedMenu-CNodkuzW.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BnoODLmv.js";import"./wrapFocus-ChZuRP4g.js";import"./devtools-BlxCaI1L.js";import"./FilterPanelCheckbox-DZxSwh_h.js";import"./Checkbox-Ctty0aFL.js";function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"filterpanelcheckboxwithoverflow",children:"FilterPanelCheckboxWithOverflow"}),`
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
`,t.jsx(v,{children:t.jsx(u,{of:r})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(f,{})]})}function j(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}const w="filter-panel-stories",ie={title:"Deprecated/Filter panel/FilterPanelCheckboxWithOverflow",component:d,tags:["autodocs"],argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},id:{table:{disable:!0}},onChange:{table:{disable:!0}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Checkbox",1:"Really, really long checkbox name",2:o.createElement(o.Fragment,null,o.createElement("strong",null,"Formatted")," ",o.createElement("em",null,"checkbox"))},options:[0,1,2]}},args:{count:1,labelText:0},parameters:{styles:k,docs:{page:j}},decorators:[n=>o.createElement(C,{type:"deprecation-notice",text:o.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},n())]},g=n=>o.createElement("div",{className:`${w}__viewport`},o.createElement(b,null,o.createElement(d,{...n},o.createElement(l,{itemText:"Option 1",onClick:e=>{i("onClick (event)")(e)}}),o.createElement(l,{itemText:"Option 2, preselected",onClick:e=>{i("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),o.createElement(l,{itemText:"Option 3",onClick:e=>{i("onClick (event)")(e)}}),o.createElement(l,{itemText:"Option 4",onClick:e=>{i("onClick (event)")(e)}})))),r=g.bind({});r.storyName="Default";r.args={id:x(),onChange:(n,{checked:e,id:h})=>i("onChange Checkbox (event, { checked, id })")(n,e,h),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"},title:""};var c,s,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const le=["Default"];export{r as Default,le as __namedExportsOrder,ie as default};
