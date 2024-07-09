import{j as e}from"./settings-BiUEFdm2.js";import{r as f}from"./index-BwDkhjyp.js";import{a as l}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./deprecate-D9ms-jbM.js";import{a as h}from"./index-B7Id7uWF.js";import{g as j}from"./getNodeTextContent-C8IeKkUQ.js";import{u as r}from"./uuidv4-BQrI85uz.js";import{useMDXComponents as v}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as F,i as P,C as T}from"./index-CDYzkStP.js";import{s as O}from"./_storybook-styles-C0uQlRwR.js";import{a as g}from"./FilterPanelLabel-BZGwbzwr.js";import{F as w}from"./FilterPanelSearch-CW2PY8lA.js";import{F as m}from"./FilterPanelGroup-BtLLcONC.js";import{F as a}from"./FilterPanelCheckbox-CAmvLBpx.js";import{F as u}from"./FilterPanelCheckboxWithOverflow-g9HEQjq0.js";import{F as y,a as S}from"./FilterPanelAccordionItem-CoRbmKtS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./Text-_TFgs5hl.js";import"./index-gKY8typL.js";import"./useAttachedMenu-BGzc4N1_.js";import"./bucket-11-S2aFzyL7.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./createClassWrapper-EbB2Yi8H.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./devtools-BPcQvzXy.js";import"./Search-BxJEuMG1.js";import"./FormContext-C7kRVu4t.js";import"./bucket-13-DC_Wi0nI.js";import"./Checkbox-78nhbV8e.js";import"./bucket-17-CArjO86K.js";import"./AccordionItem-DcUyOTy6.js";import"./ListItem-bxQFBg2r.js";import"./TruncatedList-DyMLFCxA.js";function C(c){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...v(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanel",children:"FilterPanel"}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"FilterPanel"})," is the container for its subcomponents."]}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(F,{children:e.jsx(P,{of:d})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(T,{})]})}function I(c={}){const{wrapper:t}={...v(),...c.components};return t?e.jsx(t,{...c,children:e.jsx(C,{...c})}):C(c)}const M="filter-panel-stories",ye={title:"IBM Products/Components/Filter panel/FilterPanel",component:g,tags:["autodocs"],parameters:{styles:O,docs:{page:I}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Filter"})," ",e.jsx("em",{children:"panel"})," title"]})},options:[0,1,2]}},args:{title:1}},A=[{label:"Checkbox",count:6},{label:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"checkbox"})]}),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],D=(c,t)=>{let x,s=[];return t.length>0&&(s=c.filter(n=>{const o=j(n.label).toLowerCase(),i=t.toLowerCase();return o.indexOf(i)>-1})),t.length>0&&s.length===0?x=e.jsx("p",{children:"No search results found."}):t.length>0&&s.length>0&&(x=s.map((n,o)=>e.jsx(a,{labelText:n.label,count:n.count,id:r()},o))),x},R=c=>{const[t,x]=f.useState(""),s=D(A,t);return e.jsx("div",{className:`${M}__viewport`,children:e.jsxs(g,{...c,children:[e.jsx(w,{searchProps:{labelText:"Search",onChange:n=>{l('onChange "'+n.target.value+'"')(n),x(n.target.value)},onClear:()=>{l()("onClear")}},children:s}),e.jsxs(m,{labelText:"Group",children:[e.jsx(a,{count:6,defaultChecked:!0,labelText:"Checkbox",id:r(),onChange:(n,{checked:o,id:i})=>l("onChange Checkbox")(o,i,n)}),e.jsx(a,{count:"1,500",defaultChecked:!0,labelText:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"checkbox"})]}),id:r(),onChange:(n,{checked:o,id:i})=>l("onChange Checkbox")(o,i,n)}),e.jsx(a,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:r(),onChange:(n,{checked:o,id:i})=>l("onChange Checkbox")(o,i,n)})]}),e.jsxs(m,{labelText:"Group",count:"6",children:[e.jsxs(u,{...c,count:6,id:r(),labelText:"Checkbox with menu 1",onChange:(n,{checked:o,id:i})=>l("onChange Checkbox")(o,i,n),children:[e.jsx(h,{itemText:"Option 1",onClick:n=>{l("onClick (event)")(n)}}),e.jsx(h,{itemText:"Option 2",onClick:n=>{l("onClick (event)")(n)}})]}),e.jsxs(u,{...c,count:6,id:r(),labelText:"Checkbox with menu 2",onChange:(n,{checked:o,id:i})=>l("onChange Checkbox")(o,i,n),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"},children:[e.jsx(h,{itemText:"Option 1",onClick:n=>{l("onClick (event)")(n)}}),e.jsx(h,{itemText:"Option 2, preselected",onClick:n=>{l("onClick (event)")(n)},"data-storybook-example-primary-focus":!0}),e.jsx(h,{itemText:"Option 3",onClick:n=>{l("onClick (event)")(n)}}),e.jsx(h,{itemText:"Option 4",onClick:n=>{l("onClick (event)")(n)}})]})]}),e.jsx(y,{labelText:"Accordion",count:35,children:e.jsxs(S,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:n,event:o})=>{l("onHeadingClick ({ isOpen, event })")(n,o)}},children:[e.jsx(a,{count:10,labelText:"Checkbox 1",id:r(),onChange:(n,{checked:o,id:i})=>l("onChange Checkbox (event, { checked, id })")(n,o,i)}),e.jsx(a,{count:10,labelText:"Checkbox 2",id:r(),onChange:(n,{checked:o,id:i})=>l("onChange Checkbox (event, { checked, id })")(n,o,i)}),e.jsx(a,{count:15,labelText:"Checkbox 3",id:r(),onChange:(n,{checked:o,id:i})=>l("onChange Checkbox (event, { checked, id })")(n,o,i)})]})})]})})},d=R.bind({});d.storyName="Default";var p,k,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const demoSearchResults = getDemoSearchResults(demoData, searchValue);
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel {...args}>
        <FilterPanelSearch searchProps={{
        labelText: 'Search',
        onChange: event => {
          action('onChange "' + event.target.value + '"')(event);
          setSearchValue(event.target.value);
        },
        onClear: () => {
          action()('onClear');
        }
      }}>
          {demoSearchResults}
        </FilterPanelSearch>
        <FilterPanelGroup labelText="Group">
          <FilterPanelCheckbox count={6} defaultChecked labelText="Checkbox"
        // "id" and "onChange" are pass-through props to Carbon's Checkbox.
        id={uuidv4()} onChange={(event, {
          checked,
          id
        }) => action('onChange Checkbox')(checked, id, event)} />
          <FilterPanelCheckbox count={'1,500'} defaultChecked labelText={<>
                <strong>Formatted</strong> <em>checkbox</em>
              </>} id={uuidv4()} onChange={(event, {
          checked,
          id
        }) => action('onChange Checkbox')(checked, id, event)} />
          <FilterPanelCheckbox count={10} defaultChecked labelText="Really, really long checkbox name" id={uuidv4()} onChange={(event, {
          checked,
          id
        }) => action('onChange Checkbox')(checked, id, event)} />
        </FilterPanelGroup>
        <FilterPanelGroup labelText="Group" count={'6'}>
          <FilterPanelCheckboxWithOverflow {...args} count={6} id={uuidv4()} labelText="Checkbox with menu 1" onChange={(event, {
          checked,
          id
        }) => action('onChange Checkbox')(checked, id, event)}>
            <OverflowMenuItem itemText="Option 1" onClick={event => {
            action('onClick (event)')(event);
          }} />
            <OverflowMenuItem itemText="Option 2" onClick={event => {
            action('onClick (event)')(event);
          }} />
          </FilterPanelCheckboxWithOverflow>
          <FilterPanelCheckboxWithOverflow {...args} count={6} id={uuidv4()} labelText="Checkbox with menu 2" onChange={(event, {
          checked,
          id
        }) => action('onChange Checkbox')(checked, id, event)} overflowMenuProps={{
          selectorPrimaryFocus: '[data-storybook-example-primary-focus]'
        }}>
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
        </FilterPanelGroup>
        <FilterPanelAccordion labelText="Accordion" count={35}>
          <FilterPanelAccordionItem labelText="Accordion item" count={35} accordionItemProps={{
          onHeadingClick: ({
            isOpen,
            event
          }) => {
            action('onHeadingClick ({ isOpen, event })')(isOpen, event);
          }
        }}>
            <FilterPanelCheckbox count={10} labelText="Checkbox 1" id={uuidv4()} onChange={(event, {
            checked,
            id
          }) => action('onChange Checkbox (event, { checked, id })')(event, checked, id)} />
            <FilterPanelCheckbox count={10} labelText="Checkbox 2" id={uuidv4()} onChange={(event, {
            checked,
            id
          }) => action('onChange Checkbox (event, { checked, id })')(event, checked, id)} />
            <FilterPanelCheckbox count={15} labelText="Checkbox 3" id={uuidv4()} onChange={(event, {
            checked,
            id
          }) => action('onChange Checkbox (event, { checked, id })')(event, checked, id)} />
          </FilterPanelAccordionItem>
        </FilterPanelAccordion>
      </FilterPanel>
    </div>;
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const Se=["Default"];export{d as Default,Se as __namedExportsOrder,ye as default};
