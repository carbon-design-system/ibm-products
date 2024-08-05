import{j as e}from"./settings-B0yoEqB-.js";import{r as f}from"./index-BwDkhjyp.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./useMergedRefs-CY5AfkP4.js";import{a as h}from"./index-CRLQHgyt.js";import{g as j}from"./getNodeTextContent-C8IeKkUQ.js";import{u as r}from"./uuidv4-BQrI85uz.js";import{useMDXComponents as v}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-C8rwFTKs.js";import{e as F,i as P,C as T}from"./index-D4z3D3nr.js";import{s as O}from"./_storybook-styles-C0uQlRwR.js";import{a as g}from"./FilterPanelLabel-BNjg-721.js";import{F as w}from"./FilterPanelSearch-UT6V3r5O.js";import{F as m}from"./FilterPanelGroup-BmlDuIVA.js";import{F as a}from"./FilterPanelCheckbox-CufhJmbS.js";import{F as u}from"./FilterPanelCheckboxWithOverflow-B1somvzQ.js";import{F as y,a as S}from"./FilterPanelAccordionItem-CHSExead.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-D6dlm1BF.js";import"./index-D2JPet7M.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./Text-CiWJR74P.js";import"./index-D0hq9jV7.js";import"./useAttachedMenu-BaaFYui-.js";import"./bucket-12-DR0XAE11.js";import"./wrapFocus-CuszVIVc.js";import"./mergeRefs-CTUecegF.js";import"./iframe-BBSBJ9v0.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./devtools-Cvhd47uB.js";import"./Search-C-IZ1uID.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-BdOImxz7.js";import"./Checkbox-BqOSqAbR.js";import"./bucket-18-CV2-K6tq.js";import"./AccordionItem-CTTBqoiX.js";import"./ListItem-DWqe2A4Q.js";import"./TruncatedList-Bh8d9boi.js";function C(c){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...v(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"filterpanel",children:"FilterPanel"}),`
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
`,e.jsx(T,{})]})}function I(c={}){const{wrapper:t}={...v(),...c.components};return t?e.jsx(t,{...c,children:e.jsx(C,{...c})}):C(c)}const M="filter-panel-stories",we={title:"Experimental/Components/Filter panel/FilterPanel",component:g,tags:["autodocs"],parameters:{styles:O,docs:{page:I}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Filter"})," ",e.jsx("em",{children:"panel"})," title"]})},options:[0,1,2]}},args:{title:1}},A=[{label:"Checkbox",count:6},{label:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"checkbox"})]}),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],D=(c,t)=>{let x,s=[];return t.length>0&&(s=c.filter(n=>{const o=j(n.label).toLowerCase(),l=t.toLowerCase();return o.indexOf(l)>-1})),t.length>0&&s.length===0?x=e.jsx("p",{children:"No search results found."}):t.length>0&&s.length>0&&(x=s.map((n,o)=>e.jsx(a,{labelText:n.label,count:n.count,id:r()},o))),x},R=c=>{const[t,x]=f.useState(""),s=D(A,t);return e.jsx("div",{className:`${M}__viewport`,children:e.jsxs(g,{...c,children:[e.jsx(w,{searchProps:{labelText:"Search",onChange:n=>{i('onChange "'+n.target.value+'"')(n),x(n.target.value)},onClear:()=>{i()("onClear")}},children:s}),e.jsxs(m,{labelText:"Group",children:[e.jsx(a,{count:6,defaultChecked:!0,labelText:"Checkbox",id:r(),onChange:(n,{checked:o,id:l})=>i("onChange Checkbox")(o,l,n)}),e.jsx(a,{count:"1,500",defaultChecked:!0,labelText:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Formatted"})," ",e.jsx("em",{children:"checkbox"})]}),id:r(),onChange:(n,{checked:o,id:l})=>i("onChange Checkbox")(o,l,n)}),e.jsx(a,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:r(),onChange:(n,{checked:o,id:l})=>i("onChange Checkbox")(o,l,n)})]}),e.jsxs(m,{labelText:"Group",count:"6",children:[e.jsxs(u,{...c,count:6,id:r(),labelText:"Checkbox with menu 1",onChange:(n,{checked:o,id:l})=>i("onChange Checkbox")(o,l,n),children:[e.jsx(h,{itemText:"Option 1",onClick:n=>{i("onClick (event)")(n)}}),e.jsx(h,{itemText:"Option 2",onClick:n=>{i("onClick (event)")(n)}})]}),e.jsxs(u,{...c,count:6,id:r(),labelText:"Checkbox with menu 2",onChange:(n,{checked:o,id:l})=>i("onChange Checkbox")(o,l,n),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"},children:[e.jsx(h,{itemText:"Option 1",onClick:n=>{i("onClick (event)")(n)}}),e.jsx(h,{itemText:"Option 2, preselected",onClick:n=>{i("onClick (event)")(n)},"data-storybook-example-primary-focus":!0}),e.jsx(h,{itemText:"Option 3",onClick:n=>{i("onClick (event)")(n)}}),e.jsx(h,{itemText:"Option 4",onClick:n=>{i("onClick (event)")(n)}})]})]}),e.jsx(y,{labelText:"Accordion",count:35,children:e.jsxs(S,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:n,event:o})=>{i("onHeadingClick ({ isOpen, event })")(n,o)}},children:[e.jsx(a,{count:10,labelText:"Checkbox 1",id:r(),onChange:(n,{checked:o,id:l})=>i("onChange Checkbox (event, { checked, id })")(n,o,l)}),e.jsx(a,{count:10,labelText:"Checkbox 2",id:r(),onChange:(n,{checked:o,id:l})=>i("onChange Checkbox (event, { checked, id })")(n,o,l)}),e.jsx(a,{count:15,labelText:"Checkbox 3",id:r(),onChange:(n,{checked:o,id:l})=>i("onChange Checkbox (event, { checked, id })")(n,o,l)})]})})]})})},d=R.bind({});d.storyName="Default";var p,k,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const ye=["Default"];export{d as Default,ye as __namedExportsOrder,we as default};
