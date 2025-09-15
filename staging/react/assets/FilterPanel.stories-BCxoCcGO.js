import{j as o,ej as v,el as g,ek as f,e as t,r as F}from"./iframe-DoONWhft.js";import{O as m}from"./OverflowMenuItem-yfxGa1i6.js";import{g as T}from"./getNodeTextContent-C8IeKkUQ.js";import{u as i}from"./uuidv4-BN2rGLQG.js";import{useMDXComponents as k}from"./index-DnlZ0ZDV.js";import{s as P}from"./_storybook-styles-DYLPaI3o.js";import{A as E}from"./index-BM4YEInf.js";import{a as b}from"./FilterPanelLabel-iqXMg-KZ.js";import{F as O}from"./FilterPanelSearch-DDokm0Wc.js";import{F as C}from"./FilterPanelGroup-CEcdMxza.js";import{F as h}from"./FilterPanelCheckbox-Cr6B12Vp.js";import{F as x}from"./FilterPanelCheckboxWithOverflow-CivbUFDn.js";import{F as w,a as j}from"./FilterPanelAccordionItem-BFAMBBe_.js";import"./Text-wCKpd-Jz.js";import"./bucket-10-WxCFkm-W.js";import"./bucket-19-Cq7trOkA.js";import"./devtools-Bope-Kcp.js";import"./Search-DOrlbM9o.js";import"./FormContext-DXPdmhvk.js";import"./bucket-15-Bej-6NQ9.js";import"./Checkbox-CoYK2NeI.js";import"./index-Bnfmk4E7.js";import"./bucket-18-DPfg6wFB.js";import"./utils-eIueeELw.js";import"./index-BCCfYvph.js";import"./useAttachedMenu-PIsCbOSk.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-13-whxGOphA.js";import"./wrapFocus-BQ5Ztz-2.js";import"./useOutsideClick-fKMX5IHP.js";import"./AccordionItem-DUs3BITh.js";import"./ListItem-w-lt6__n.js";import"./TruncatedList-DDmc0Cxn.js";import"./useIsomorphicEffect-DNoZHH_8.js";function p(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...k(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n.h1,{id:"filterpanel",children:"FilterPanel"}),`
`,o.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,o.jsx(n.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsx(n.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,o.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,o.jsxs(n.p,{children:["The ",o.jsx(n.code,{children:"FilterPanel"})," is the container for its subcomponents."]}),`
`,o.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,o.jsx(v,{children:o.jsx(g,{of:d})}),`
`,o.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(f,{})]})}function y(r={}){const{wrapper:n}={...k(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(p,{...r})}):p(r)}const{action:a}=__STORYBOOK_MODULE_ACTIONS__,S="filter-panel-stories",Ce={title:"Deprecated/Filter panel/FilterPanel",component:b,tags:["autodocs"],parameters:{styles:P,docs:{page:y}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Filter")," ",t.createElement("em",null,"panel")," title")},options:[0,1,2]}},args:{title:1},decorators:[r=>t.createElement(E,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},A=[{label:"Checkbox",count:6},{label:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],I=(r,n)=>{let u,s=[];return n.length>0&&(s=r.filter(e=>{const l=T(e.label).toLowerCase(),c=n.toLowerCase();return l.indexOf(c)>-1})),n.length>0&&s.length===0?u=t.createElement("p",null,"No search results found."):n.length>0&&s.length>0&&(u=s.map((e,l)=>t.createElement(h,{key:l,labelText:e.label,count:e.count,id:i()}))),u},_=r=>{const[n,u]=F.useState(""),s=I(A,n);return t.createElement("div",{className:`${S}__viewport`},t.createElement(b,{...r},t.createElement(O,{searchProps:{labelText:"Search",onChange:e=>{a('onChange "'+e.target.value+'"')(e),u(e.target.value)},onClear:()=>{a()("onClear")}}},s),t.createElement(C,{labelText:"Group"},t.createElement(h,{count:6,defaultChecked:!0,labelText:"Checkbox",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)}),t.createElement(h,{count:"1,500",defaultChecked:!0,labelText:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)}),t.createElement(h,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)})),t.createElement(C,{labelText:"Group",count:"6"},t.createElement(x,{...r,count:6,id:i(),labelText:"Checkbox with menu 1",onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)},t.createElement(m,{itemText:"Option 1",onClick:e=>{a("onClick (event)")(e)}}),t.createElement(m,{itemText:"Option 2",onClick:e=>{a("onClick (event)")(e)}})),t.createElement(x,{...r,count:6,id:i(),labelText:"Checkbox with menu 2",onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"}},t.createElement(m,{itemText:"Option 1",onClick:e=>{a("onClick (event)")(e)}}),t.createElement(m,{itemText:"Option 2, preselected",onClick:e=>{a("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),t.createElement(m,{itemText:"Option 3",onClick:e=>{a("onClick (event)")(e)}}),t.createElement(m,{itemText:"Option 4",onClick:e=>{a("onClick (event)")(e)}}))),t.createElement(w,{labelText:"Accordion",count:35},t.createElement(j,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:e,event:l})=>{a("onHeadingClick ({ isOpen, event })")(e,l)}}},t.createElement(h,{count:10,labelText:"Checkbox 1",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)}),t.createElement(h,{count:10,labelText:"Checkbox 2",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)}),t.createElement(h,{count:15,labelText:"Checkbox 3",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)})))))},d=_.bind({});d.storyName="Default";d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
}`,...d.parameters?.docs?.source}}};const xe=["Default"];export{d as Default,xe as __namedExportsOrder,Ce as default};
