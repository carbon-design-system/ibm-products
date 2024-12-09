import{e as t,r as F}from"./index-DxDX2vOa.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-B_euquWE.js";import{O as s}from"./OverflowMenuItem-B2qt5S-L.js";import{g as T}from"./getNodeTextContent-C8IeKkUQ.js";import{u as i}from"./uuidv4-BQrI85uz.js";import{aw as o,al as P,ax as E,ak as O}from"./index-DAMUIRRT.js";import{useMDXComponents as g}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-qxTmjHpU.js";import{s as w}from"./_storybook-styles-C0uQlRwR.js";import{A as y}from"./index-CJ0Gdo6o.js";import{a as f}from"./FilterPanelLabel-Dr32Q7B5.js";import{F as j}from"./FilterPanelSearch-BowHeMOo.js";import{F as p}from"./FilterPanelGroup-CItwlYkT.js";import{F as h}from"./FilterPanelCheckbox-DZxSwh_h.js";import{F as x}from"./FilterPanelCheckboxWithOverflow-4_LTck3q.js";import{F as S,a as A}from"./FilterPanelAccordionItem-7yww-EU8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-CaMJXrh2.js";import"./Text-9AedOkae.js";import"./iframe-C1IaBP6P.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./bucket-18-Dvh787Y8.js";import"./bucket-9-Clk9T-SZ.js";import"./devtools-BlxCaI1L.js";import"./Search-Cwr2QiaX.js";import"./FormContext-Dj7olUH1.js";import"./bucket-14-C1Z-80MS.js";import"./Checkbox-Ctty0aFL.js";import"./index-BK04RsGV.js";import"./useAttachedMenu-CNodkuzW.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BnoODLmv.js";import"./wrapFocus-ChZuRP4g.js";import"./AccordionItem-C6Zmne57.js";import"./ListItem-D-NIYBD9.js";import"./TruncatedList-C40eyFNK.js";function C(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...g(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n.h1,{id:"filterpanel",children:"FilterPanel"}),`
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
`,o.jsx(P,{children:o.jsx(E,{of:d})}),`
`,o.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(O,{})]})}function I(r={}){const{wrapper:n}={...g(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(C,{...r})}):C(r)}const D="filter-panel-stories",ye={title:"Deprecated/Filter panel/FilterPanel",component:f,tags:["autodocs"],parameters:{styles:w,docs:{page:I}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Filter")," ",t.createElement("em",null,"panel")," title")},options:[0,1,2]}},args:{title:1},decorators:[r=>t.createElement(y,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},M=[{label:"Checkbox",count:6},{label:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],R=(r,n)=>{let u,m=[];return n.length>0&&(m=r.filter(e=>{const l=T(e.label).toLowerCase(),a=n.toLowerCase();return l.indexOf(a)>-1})),n.length>0&&m.length===0?u=t.createElement("p",null,"No search results found."):n.length>0&&m.length>0&&(u=m.map((e,l)=>t.createElement(h,{key:l,labelText:e.label,count:e.count,id:i()}))),u},G=r=>{const[n,u]=F.useState(""),m=R(M,n);return t.createElement("div",{className:`${D}__viewport`},t.createElement(f,{...r},t.createElement(j,{searchProps:{labelText:"Search",onChange:e=>{c('onChange "'+e.target.value+'"')(e),u(e.target.value)},onClear:()=>{c()("onClear")}}},m),t.createElement(p,{labelText:"Group"},t.createElement(h,{count:6,defaultChecked:!0,labelText:"Checkbox",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)}),t.createElement(h,{count:"1,500",defaultChecked:!0,labelText:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)}),t.createElement(h,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)})),t.createElement(p,{labelText:"Group",count:"6"},t.createElement(x,{...r,count:6,id:i(),labelText:"Checkbox with menu 1",onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)},t.createElement(s,{itemText:"Option 1",onClick:e=>{c("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 2",onClick:e=>{c("onClick (event)")(e)}})),t.createElement(x,{...r,count:6,id:i(),labelText:"Checkbox with menu 2",onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"}},t.createElement(s,{itemText:"Option 1",onClick:e=>{c("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 2, preselected",onClick:e=>{c("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),t.createElement(s,{itemText:"Option 3",onClick:e=>{c("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 4",onClick:e=>{c("onClick (event)")(e)}}))),t.createElement(S,{labelText:"Accordion",count:35},t.createElement(A,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:e,event:l})=>{c("onHeadingClick ({ isOpen, event })")(e,l)}}},t.createElement(h,{count:10,labelText:"Checkbox 1",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,l,a)}),t.createElement(h,{count:10,labelText:"Checkbox 2",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,l,a)}),t.createElement(h,{count:15,labelText:"Checkbox 3",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,l,a)})))))},d=G.bind({});d.storyName="Default";var k,b,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
