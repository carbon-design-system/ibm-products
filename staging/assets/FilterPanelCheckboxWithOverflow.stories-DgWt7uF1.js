import{e as o}from"./index-DtHxqM--.js";import{a as i}from"./index-B-lxVbXh.js";import{u as x}from"./uuidv4-BN2rGLQG.js";import"./index-CGLP8AGt.js";import{O as l}from"./OverflowMenuItem-BSUkOq-a.js";import{j as t}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-R5I2sGCW.js";import{s as v}from"./_storybook-styles-DYLPaI3o.js";import{A as u}from"./index-CHR6uWaP.js";import{F as d}from"./FilterPanelCheckboxWithOverflow-D6r5YCS4.js";import{a as f}from"./FilterPanelLabel-CP7vd7uP.js";import{a as C,j as k,C as b}from"./index-HDDpa7CF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./Text-CeswpK61.js";import"./index-CiYgQLeJ.js";import"./preview-BDYrD1iz.js";import"./iframe-C04Vc2cR.js";import"./DocsRenderer-CFRXHY34-BeCith_b.js";import"./client-CZTHzaKS.js";import"./bucket-10-DVt4Ot_f.js";import"./bucket-18-OZh5kibs.js";import"./settings-xxMXFJdE.js";import"./events-OVwOsPzJ.js";import"./index-BeQw6zoj.js";import"./index-C7k0PzCi.js";import"./useAttachedMenu-DarvD7vl.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BmEV_IPc.js";import"./wrapFocus-CrmkdVI3.js";import"./useOutsideClick-CYyIhNNK.js";import"./devtools-DANatd7d.js";import"./FilterPanelCheckbox-oCD_2HQ3.js";import"./Checkbox-Bywtu1Sx.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"filterpanelcheckboxwithoverflow",children:"FilterPanelCheckboxWithOverflow"}),`
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
