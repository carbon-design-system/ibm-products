import{e as t,r as F}from"./index-CPiZ6Cnx.js";import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./index-CXyjPnaX.js";import{O as s}from"./OverflowMenuItem-B5Kp6Vn3.js";import{g as T}from"./getNodeTextContent-C8IeKkUQ.js";import{u as i}from"./uuidv4-BQrI85uz.js";import{aw as o,al as P,ax as E,ak as O}from"./index-Be1mmqnw.js";import{useMDXComponents as g}from"./index-CUO_02de.js";import"./chunk-NUUEMKO5-Dwg16tLQ.js";import{s as w}from"./_storybook-styles-C0uQlRwR.js";import{A as y}from"./index-Spu41qs0.js";import{a as f}from"./FilterPanelLabel-C45yLOB6.js";import{F as j}from"./FilterPanelSearch-Ci_aEFLw.js";import{F as p}from"./FilterPanelGroup-_hghb52v.js";import{F as m}from"./FilterPanelCheckbox-yUDG6M6Z.js";import{F as x}from"./FilterPanelCheckboxWithOverflow-BcSobpj-.js";import{F as S,a as A}from"./FilterPanelAccordionItem-BFVD2mpV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./Text-vNWzJqus.js";import"./iframe-C_4cBVrG.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./react-18-C6q_qjn2.js";import"./settings-DkGFwmHv.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./bucket-18-By6NmkK1.js";import"./bucket-9-BSWQ2dSd.js";import"./devtools-BgfuqBVa.js";import"./Search-soxfLq4A.js";import"./FormContext-CgeSXHS1.js";import"./bucket-14-BKxafgTW.js";import"./Checkbox-CPOZKaZ_.js";import"./index-mnDakJPj.js";import"./useAttachedMenu-MiCadXk0.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-Oh5ngpb2.js";import"./wrapFocus-i_P_nIQh.js";import"./AccordionItem-DdQEl6DI.js";import"./ListItem-C-nvXM00.js";import"./TruncatedList-DDSlFQ6t.js";import"./useIsomorphicEffect-CqAX3nH-.js";function C(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...g(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n.h1,{id:"filterpanel",children:"FilterPanel"}),`
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
`,o.jsx(O,{})]})}function I(r={}){const{wrapper:n}={...g(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(C,{...r})}):C(r)}const D="filter-panel-stories",Se={title:"Deprecated/Filter panel/FilterPanel",component:f,tags:["autodocs"],parameters:{styles:w,docs:{page:I}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Filter")," ",t.createElement("em",null,"panel")," title")},options:[0,1,2]}},args:{title:1},decorators:[r=>t.createElement(y,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},M=[{label:"Checkbox",count:6},{label:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],R=(r,n)=>{let u,h=[];return n.length>0&&(h=r.filter(e=>{const l=T(e.label).toLowerCase(),a=n.toLowerCase();return l.indexOf(a)>-1})),n.length>0&&h.length===0?u=t.createElement("p",null,"No search results found."):n.length>0&&h.length>0&&(u=h.map((e,l)=>t.createElement(m,{key:l,labelText:e.label,count:e.count,id:i()}))),u},G=r=>{const[n,u]=F.useState(""),h=R(M,n);return t.createElement("div",{className:`${D}__viewport`},t.createElement(f,{...r},t.createElement(j,{searchProps:{labelText:"Search",onChange:e=>{c('onChange "'+e.target.value+'"')(e),u(e.target.value)},onClear:()=>{c()("onClear")}}},h),t.createElement(p,{labelText:"Group"},t.createElement(m,{count:6,defaultChecked:!0,labelText:"Checkbox",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)}),t.createElement(m,{count:"1,500",defaultChecked:!0,labelText:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)}),t.createElement(m,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)})),t.createElement(p,{labelText:"Group",count:"6"},t.createElement(x,{...r,count:6,id:i(),labelText:"Checkbox with menu 1",onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e)},t.createElement(s,{itemText:"Option 1",onClick:e=>{c("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 2",onClick:e=>{c("onClick (event)")(e)}})),t.createElement(x,{...r,count:6,id:i(),labelText:"Checkbox with menu 2",onChange:(e,{checked:l,id:a})=>c("onChange Checkbox")(l,a,e),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"}},t.createElement(s,{itemText:"Option 1",onClick:e=>{c("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 2, preselected",onClick:e=>{c("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),t.createElement(s,{itemText:"Option 3",onClick:e=>{c("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 4",onClick:e=>{c("onClick (event)")(e)}}))),t.createElement(S,{labelText:"Accordion",count:35},t.createElement(A,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:e,event:l})=>{c("onHeadingClick ({ isOpen, event })")(e,l)}}},t.createElement(m,{count:10,labelText:"Checkbox 1",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,l,a)}),t.createElement(m,{count:10,labelText:"Checkbox 2",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,l,a)}),t.createElement(m,{count:15,labelText:"Checkbox 3",id:i(),onChange:(e,{checked:l,id:a})=>c("onChange Checkbox (event, { checked, id })")(e,l,a)})))))},d=G.bind({});d.storyName="Default";var k,b,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const Ae=["Default"];export{d as Default,Ae as __namedExportsOrder,Se as default};
