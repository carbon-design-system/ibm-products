import{R as n,r as F}from"./index-BwDkhjyp.js";import{a as c}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./index-C8rbkH0g.js";import{a as s}from"./index-7ofX8jt7.js";import{g as P}from"./getNodeTextContent-C8IeKkUQ.js";import{u as i}from"./uuidv4-BQrI85uz.js";import{j as l}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as g}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BZ4mszu_.js";import{e as T,i as E,C as O}from"./index-BpGm7QiY.js";import{s as w}from"./_storybook-styles-C0uQlRwR.js";import{a as f}from"./FilterPanelLabel-C3lMMzTb.js";import{F as y}from"./FilterPanelSearch-CC2JRo_I.js";import{F as C}from"./FilterPanelGroup-B5tnUzlg.js";import{F as m}from"./FilterPanelCheckbox-BA5qwQWS.js";import{F as p}from"./FilterPanelCheckboxWithOverflow-N9bEwMHr.js";import{F as j,a as S}from"./FilterPanelAccordionItem-CMrzOZhH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Dk74W0Oi.js";import"./index-BONylQH5.js";import"./Text-DZylbEPL.js";import"./settings-DI4GKhuL.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-7nuGG3yx.js";import"./useAttachedMenu-DeIo1fst.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BdJxyMSm.js";import"./wrapFocus-BBe48k1H.js";import"./iframe-B6oKv5UQ.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./devtools-BXUoVCj7.js";import"./Search-C2YVmAvL.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-CF5C4Sen.js";import"./Checkbox-BYXaHiKq.js";import"./bucket-18--U95jA7N.js";import"./AccordionItem-D_xDq4QW.js";import"./ListItem-CS4vjtLU.js";import"./TruncatedList-B5cxLz8W.js";function x(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...g(),...r.components};return l.jsxs(l.Fragment,{children:[l.jsx(t.h1,{id:"filterpanel",children:"FilterPanel"}),`
`,l.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,l.jsxs(t.ul,{children:[`
`,l.jsx(t.li,{children:l.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,l.jsx(t.li,{children:l.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,l.jsx(t.li,{children:l.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,l.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,l.jsxs(t.p,{children:["The ",l.jsx(t.code,{children:"FilterPanel"})," is the container for its subcomponents."]}),`
`,l.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,l.jsx(T,{children:l.jsx(E,{of:d})}),`
`,l.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,l.jsx(O,{})]})}function I(r={}){const{wrapper:t}={...g(),...r.components};return t?l.jsx(t,{...r,children:l.jsx(x,{...r})}):x(r)}const M="filter-panel-stories",ye={title:"Experimental/Components/Filter panel/FilterPanel",component:f,tags:["autodocs"],parameters:{styles:w,docs:{page:I}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:n.createElement(n.Fragment,null,n.createElement("strong",null,"Filter")," ",n.createElement("em",null,"panel")," title")},options:[0,1,2]}},args:{title:1}},A=[{label:"Checkbox",count:6},{label:n.createElement(n.Fragment,null,n.createElement("strong",null,"Formatted")," ",n.createElement("em",null,"checkbox")),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],R=(r,t)=>{let u,h=[];return t.length>0&&(h=r.filter(e=>{const o=P(e.label).toLowerCase(),a=t.toLowerCase();return o.indexOf(a)>-1})),t.length>0&&h.length===0?u=n.createElement("p",null,"No search results found."):t.length>0&&h.length>0&&(u=h.map((e,o)=>n.createElement(m,{key:o,labelText:e.label,count:e.count,id:i()}))),u},D=r=>{const[t,u]=F.useState(""),h=R(A,t);return n.createElement("div",{className:`${M}__viewport`},n.createElement(f,{...r},n.createElement(y,{searchProps:{labelText:"Search",onChange:e=>{c('onChange "'+e.target.value+'"')(e),u(e.target.value)},onClear:()=>{c()("onClear")}}},h),n.createElement(C,{labelText:"Group"},n.createElement(m,{count:6,defaultChecked:!0,labelText:"Checkbox",id:i(),onChange:(e,{checked:o,id:a})=>c("onChange Checkbox")(o,a,e)}),n.createElement(m,{count:"1,500",defaultChecked:!0,labelText:n.createElement(n.Fragment,null,n.createElement("strong",null,"Formatted")," ",n.createElement("em",null,"checkbox")),id:i(),onChange:(e,{checked:o,id:a})=>c("onChange Checkbox")(o,a,e)}),n.createElement(m,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:i(),onChange:(e,{checked:o,id:a})=>c("onChange Checkbox")(o,a,e)})),n.createElement(C,{labelText:"Group",count:"6"},n.createElement(p,{...r,count:6,id:i(),labelText:"Checkbox with menu 1",onChange:(e,{checked:o,id:a})=>c("onChange Checkbox")(o,a,e)},n.createElement(s,{itemText:"Option 1",onClick:e=>{c("onClick (event)")(e)}}),n.createElement(s,{itemText:"Option 2",onClick:e=>{c("onClick (event)")(e)}})),n.createElement(p,{...r,count:6,id:i(),labelText:"Checkbox with menu 2",onChange:(e,{checked:o,id:a})=>c("onChange Checkbox")(o,a,e),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"}},n.createElement(s,{itemText:"Option 1",onClick:e=>{c("onClick (event)")(e)}}),n.createElement(s,{itemText:"Option 2, preselected",onClick:e=>{c("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),n.createElement(s,{itemText:"Option 3",onClick:e=>{c("onClick (event)")(e)}}),n.createElement(s,{itemText:"Option 4",onClick:e=>{c("onClick (event)")(e)}}))),n.createElement(j,{labelText:"Accordion",count:35},n.createElement(S,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:e,event:o})=>{c("onHeadingClick ({ isOpen, event })")(e,o)}}},n.createElement(m,{count:10,labelText:"Checkbox 1",id:i(),onChange:(e,{checked:o,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,o,a)}),n.createElement(m,{count:10,labelText:"Checkbox 2",id:i(),onChange:(e,{checked:o,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,o,a)}),n.createElement(m,{count:15,labelText:"Checkbox 3",id:i(),onChange:(e,{checked:o,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,o,a)})))))},d=D.bind({});d.storyName="Default";var k,b,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const je=["Default"];export{d as Default,je as __namedExportsOrder,ye as default};
