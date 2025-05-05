import{e as t,r as F}from"./index-DtHxqM--.js";import{a}from"./index-B-lxVbXh.js";import"./index-CGLP8AGt.js";import{O as s}from"./OverflowMenuItem-BSUkOq-a.js";import{g as T}from"./getNodeTextContent-C8IeKkUQ.js";import{u as i}from"./uuidv4-BN2rGLQG.js";import{j as o}from"./index-DgLvjnYm.js";import{useMDXComponents as g}from"./index-CseD6FCQ.js";import"./index-R5I2sGCW.js";import{s as P}from"./_storybook-styles-DYLPaI3o.js";import{A as E}from"./index-CHR6uWaP.js";import{a as f}from"./FilterPanelLabel-CP7vd7uP.js";import{F as O}from"./FilterPanelSearch-B1J37Bhd.js";import{F as p}from"./FilterPanelGroup-BqzLM9W8.js";import{F as m}from"./FilterPanelCheckbox-oCD_2HQ3.js";import{F as C}from"./FilterPanelCheckboxWithOverflow-D6r5YCS4.js";import{F as w,a as j}from"./FilterPanelAccordionItem-BU1HFUWY.js";import{a as y,j as S,C as A}from"./index-HDDpa7CF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./Text-CeswpK61.js";import"./index-CiYgQLeJ.js";import"./preview-BDYrD1iz.js";import"./iframe-C04Vc2cR.js";import"./DocsRenderer-CFRXHY34-BeCith_b.js";import"./client-CZTHzaKS.js";import"./bucket-10-DVt4Ot_f.js";import"./bucket-18-OZh5kibs.js";import"./settings-xxMXFJdE.js";import"./events-OVwOsPzJ.js";import"./index-BeQw6zoj.js";import"./devtools-DANatd7d.js";import"./Search-D0F4D2aG.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-BkQJIuEn.js";import"./Checkbox-Bywtu1Sx.js";import"./index-C7k0PzCi.js";import"./useAttachedMenu-DarvD7vl.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BmEV_IPc.js";import"./wrapFocus-CrmkdVI3.js";import"./useOutsideClick-CYyIhNNK.js";import"./AccordionItem-E2X0419z.js";import"./ListItem-A796zF2p.js";import"./TruncatedList-DmKHj4IP.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function x(r){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...g(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n.h1,{id:"filterpanel",children:"FilterPanel"}),`
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
`,o.jsx(y,{children:o.jsx(S,{of:d})}),`
`,o.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(A,{})]})}function I(r={}){const{wrapper:n}={...g(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(x,{...r})}):x(r)}const D="filter-panel-stories",Ae={title:"Deprecated/Filter panel/FilterPanel",component:f,tags:["autodocs"],parameters:{styles:P,docs:{page:I}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Filter")," ",t.createElement("em",null,"panel")," title")},options:[0,1,2]}},args:{title:1},decorators:[r=>t.createElement(E,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},r())]},M=[{label:"Checkbox",count:6},{label:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],R=(r,n)=>{let u,h=[];return n.length>0&&(h=r.filter(e=>{const l=T(e.label).toLowerCase(),c=n.toLowerCase();return l.indexOf(c)>-1})),n.length>0&&h.length===0?u=t.createElement("p",null,"No search results found."):n.length>0&&h.length>0&&(u=h.map((e,l)=>t.createElement(m,{key:l,labelText:e.label,count:e.count,id:i()}))),u},G=r=>{const[n,u]=F.useState(""),h=R(M,n);return t.createElement("div",{className:`${D}__viewport`},t.createElement(f,{...r},t.createElement(O,{searchProps:{labelText:"Search",onChange:e=>{a('onChange "'+e.target.value+'"')(e),u(e.target.value)},onClear:()=>{a()("onClear")}}},h),t.createElement(p,{labelText:"Group"},t.createElement(m,{count:6,defaultChecked:!0,labelText:"Checkbox",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)}),t.createElement(m,{count:"1,500",defaultChecked:!0,labelText:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)}),t.createElement(m,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)})),t.createElement(p,{labelText:"Group",count:"6"},t.createElement(C,{...r,count:6,id:i(),labelText:"Checkbox with menu 1",onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e)},t.createElement(s,{itemText:"Option 1",onClick:e=>{a("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 2",onClick:e=>{a("onClick (event)")(e)}})),t.createElement(C,{...r,count:6,id:i(),labelText:"Checkbox with menu 2",onChange:(e,{checked:l,id:c})=>a("onChange Checkbox")(l,c,e),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"}},t.createElement(s,{itemText:"Option 1",onClick:e=>{a("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 2, preselected",onClick:e=>{a("onClick (event)")(e)},"data-storybook-example-primary-focus":!0}),t.createElement(s,{itemText:"Option 3",onClick:e=>{a("onClick (event)")(e)}}),t.createElement(s,{itemText:"Option 4",onClick:e=>{a("onClick (event)")(e)}}))),t.createElement(w,{labelText:"Accordion",count:35},t.createElement(j,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:({isOpen:e,event:l})=>{a("onHeadingClick ({ isOpen, event })")(e,l)}}},t.createElement(m,{count:10,labelText:"Checkbox 1",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)}),t.createElement(m,{count:10,labelText:"Checkbox 2",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)}),t.createElement(m,{count:15,labelText:"Checkbox 3",id:i(),onChange:(e,{checked:l,id:c})=>a("onChange Checkbox (event, { checked, id })")(e,l,c)})))))},d=G.bind({});d.storyName="Default";var k,b,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const Ie=["Default"];export{d as Default,Ie as __namedExportsOrder,Ae as default};
