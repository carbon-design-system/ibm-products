import{R as n,r as F}from"./index-BwDkhjyp.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./index-CQ0F2wkl.js";import{O as s}from"./OverflowMenuItem-piys-31F.js";import{g as T}from"./getNodeTextContent-C8IeKkUQ.js";import{u as i}from"./uuidv4-BQrI85uz.js";import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as g}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-UdGwiunq.js";import{e as P,i as E,C as O}from"./index-CTiS1d2M.js";import{s as w}from"./_storybook-styles-C0uQlRwR.js";import{A as y}from"./index-DznJAQiH.js";import{a as f}from"./FilterPanelLabel-Dq8uMmgD.js";import{F as j}from"./FilterPanelSearch-D0ZQPjme.js";import{F as p}from"./FilterPanelGroup-DsPsGfsG.js";import{F as m}from"./FilterPanelCheckbox-xejk3Za4.js";import{F as C}from"./FilterPanelCheckboxWithOverflow-vYvjprVY.js";import{F as S,a as A}from"./FilterPanelAccordionItem-_B9omw8U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Dk74W0Oi.js";import"./index-BONylQH5.js";import"./Text-BiMgJRID.js";import"./iframe-t6fBb6Y8.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./settings-xiNX1vM3.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-ABeo-Xma.js";import"./bucket-18-DbwFKOtV.js";import"./bucket-9-BGCJpvdq.js";import"./devtools-Bz70ioU6.js";import"./Search-CuE4XdDa.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-BEt3Y4-s.js";import"./Checkbox-NbGVaYV6.js";import"./index-Bp_RdxBV.js";import"./useAttachedMenu-DuO3mIji.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-C1h62Pz5.js";import"./wrapFocus-0D7LLA53.js";import"./AccordionItem-C1_nOVGv.js";import"./ListItem-BMyRYSTP.js";import"./TruncatedList-BZ2blH9n.js";function x(r){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...g(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(t.h1,{id:"filterpanel",children:"FilterPanel"}),`
`,o.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,o.jsx(t.li,{children:o.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,o.jsx(t.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsx(t.p,{children:"This component is deprecated and will be removed in the next major version."}),`
`]}),`
`,o.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"FilterPanel"})," is the container for its subcomponents."]}),`
`,o.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,o.jsx(P,{children:o.jsx(E,{of:d})}),`
`,o.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(O,{})]})}function I(r={}){const{wrapper:t}={...g(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(x,{...r})}):x(r)}const D="filter-panel-stories",Ie={title:"Deprecated/Filter panel/FilterPanel",component:f,tags:["autodocs"],parameters:{styles:w,docs:{page:I}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:n.createElement(n.Fragment,null,n.createElement("strong",null,"Filter")," ",n.createElement("em",null,"panel")," title")},options:[0,1,2]}},args:{title:1},decorators:[r=>n.createElement(y,{type:"deprecation-notice",text:n.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},M=[{label:"Checkbox",count:6},{label:n.createElement(n.Fragment,null,n.createElement("strong",null,"Formatted")," ",n.createElement("em",null,"checkbox")),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],R=(r,t)=>{let u,h=[];return t.length>0&&(h=r.filter(e=>{const l=T(e.label).toLowerCase(),c=t.toLowerCase();return l.indexOf(c)>-1})),t.length>0&&h.length===0?u=n.createElement("p",null,"No search results found."):t.length>0&&h.length>0&&(u=h.map((e,l)=>n.createElement(m,{key:l,labelText:e.label,count:e.count,id:i()}))),u},G=r=>{const[t,u]=F.useState(""),h=R(M,t);return n.createElement("div",{className:`${D}__viewport`},n.createElement(f,{...r},n.createElement(j,{searchProps:{labelText:"Search",onChange:e=>{a('onChange "'+e.target.value+'"')(e),u(e.target.value)},onClear:()=>{a()("onClear")}}},h),n.createElement(p,{labelText:"Group"},n.createElement(m,{count:6,defaultChecked:!0,labelText:"Checkbox",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)}),n.createElement(m,{count:"1,500",defaultChecked:!0,labelText:n.createElement(n.Fragment,null,n.createElement("strong",null,"Formatted")," ",n.createElement("em",null,"checkbox")),id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)}),n.createElement(m,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)})),n.createElement(p,{labelText:"Group",count:"6"},n.createElement(C,{...r,count:6,id:i(),labelText:"Checkbox with menu 1",onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)},n.createElement(s,{itemText:"Option 1",onClick:e=>{a("onClick (event)")(e)}}),n.createElement(s,{itemText:"Option 2",onClick:e=>{a("onClick (event)")(e)}})),n.createElement(C,{...r,count:6,id:i(),labelText:"Checkbox with menu 2",onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"}},n.createElement(s,{itemText:"Option 1",onClick:e=>{a("onClick (event)")(e)}}),n.createElement(s,{itemText:"Option 2, preselected",onClick:e=>{a("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),n.createElement(s,{itemText:"Option 3",onClick:e=>{a("onClick (event)")(e)}}),n.createElement(s,{itemText:"Option 4",onClick:e=>{a("onClick (event)")(e)}}))),n.createElement(S,{labelText:"Accordion",count:35},n.createElement(A,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:e,event:l})=>{a("onHeadingClick ({ isOpen, event })")(e,l)}}},n.createElement(m,{count:10,labelText:"Checkbox 1",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)}),n.createElement(m,{count:10,labelText:"Checkbox 2",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)}),n.createElement(m,{count:15,labelText:"Checkbox 3",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)})))))},d=G.bind({});d.storyName="Default";var k,b,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const De=["Default"];export{d as Default,De as __namedExportsOrder,Ie as default};
