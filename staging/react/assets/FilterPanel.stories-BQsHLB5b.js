var g=Object.defineProperty;var l=(i,n)=>g(i,"name",{value:n,configurable:!0});import{ae as b,j as o,aO as f,aU as F,aP as T,R as t,r as P}from"./iframe-Dwk9YmAN.js";import{O as d}from"./OverflowMenuItem-pxu0eFgc.js";import{g as E}from"./getNodeTextContent-CjFansOq.js";import{u as h}from"./uuidv4-Fbcg8Vng.js";import{s as O}from"./_storybook-styles-DYLPaI3o.js";import{A as w}from"./index-BF19EPb5.js";import{a as v}from"./FilterPanelLabel-DztgVjPk.js";import{F as y}from"./FilterPanelSearch-CuNt5zVs.js";import{F as p}from"./FilterPanelGroup-CwTF_BOV.js";import{F as s}from"./FilterPanelCheckbox-DsksYe67.js";import{F as x}from"./FilterPanelCheckboxWithOverflow-Dn_6gwC4.js";import{F as j,a as S}from"./FilterPanelAccordionItem-MoV4laiW.js";import"./preload-helper-Cc2_yIPf.js";import"./Text-BEmRygqo.js";import"./bucket-11-97vn27sn.js";import"./bucket-20-DcPWc3N9.js";import"./devtools-CxET2ftO.js";import"./Search-B4KoE-zl.js";import"./FormContext-hTfDBPYK.js";import"./bucket-16-B6GeJaNh.js";import"./Checkbox-CxqQisvn.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-B0FD4R8S.js";import"./index-x2rxOhL3.js";import"./index-TfXoLMHw.js";import"./bucket-19-CWKpn_IP.js";import"./index-Bx6QOSzn.js";import"./mergeRefs-BH0-8uDG.js";import"./useAttachedMenu-BDFTWMsy.js";import"./environment-DRRHKtsv.js";import"./bucket-13-DGAhRASv.js";import"./wrapFocus-CZYRSBAN.js";import"./useOutsideClick-Xg2vzzcr.js";import"./AccordionItem-ChY6w0Zn.js";import"./ListItem-C2LDRboc.js";import"./TruncatedList-CHedOT8g.js";import"./useIsomorphicEffect-uisrTcl0.js";function k(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...b(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n.h1,{id:"filterpanel",children:"FilterPanel"}),`
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
`,o.jsx(f,{children:o.jsx(F,{of:u})}),`
`,o.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,o.jsx(T,{})]})}l(k,"_createMdxContent");function A(i={}){const{wrapper:n}={...b(),...i.components};return n?o.jsx(n,{...i,children:o.jsx(k,{...i})}):k(i)}l(A,"MDXContent");const{action:r}=__STORYBOOK_MODULE_ACTIONS__,I="filter-panel-stories",ge={title:"Deprecated/Filter panel/FilterPanel",component:v,tags:["autodocs"],parameters:{styles:O,chromatic:{disableSnapshot:!0},docs:{page:A}},argTypes:{children:{control:{type:{}}},className:{control:{type:{}}},title:{control:{type:"select",labels:{0:"No title",1:"Plain text",2:"Using markup"}},mapping:{0:null,1:"Filter panel title",2:t.createElement(t.Fragment,null,t.createElement("strong",null,"Filter")," ",t.createElement("em",null,"panel")," title")},options:[0,1,2]}},args:{title:1},decorators:[i=>t.createElement(w,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},i())]},_=[{label:"Checkbox",count:6},{label:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),count:"1,500"},{label:"Really, really long checkbox name",count:10},{label:"Checkbox with menu 1",count:6},{label:"Checkbox with menu 2",count:6},{label:"Checkbox 1",count:10},{label:"Checkbox 2",count:10},{label:"Checkbox 3",count:15}],D=l((i,n)=>{let C,m=[];return n.length>0&&(m=i.filter(e=>{const a=E(e.label).toLowerCase(),c=n.toLowerCase();return a.indexOf(c)>-1})),n.length>0&&m.length===0?C=t.createElement("p",null,"No search results found."):n.length>0&&m.length>0&&(C=m.map((e,a)=>t.createElement(s,{key:a,labelText:e.label,count:e.count,id:h()}))),C},"getDemoSearchResults"),M=l(i=>{const[n,C]=P.useState(""),m=D(_,n);return t.createElement("div",{className:`${I}__viewport`},t.createElement(v,{...i},t.createElement(y,{searchProps:{labelText:"Search",onChange:l(e=>{r('onChange "'+e.target.value+'"')(e),C(e.target.value)},"onChange"),onClear:l(()=>{r()("onClear")},"onClear")}},m),t.createElement(p,{labelText:"Group"},t.createElement(s,{count:6,defaultChecked:!0,labelText:"Checkbox",id:h(),onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox")(a,c,e),"onChange")}),t.createElement(s,{count:"1,500",defaultChecked:!0,labelText:t.createElement(t.Fragment,null,t.createElement("strong",null,"Formatted")," ",t.createElement("em",null,"checkbox")),id:h(),onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox")(a,c,e),"onChange")}),t.createElement(s,{count:10,defaultChecked:!0,labelText:"Really, really long checkbox name",id:h(),onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox")(a,c,e),"onChange")})),t.createElement(p,{labelText:"Group",count:"6"},t.createElement(x,{...i,count:6,id:h(),labelText:"Checkbox with menu 1",onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox")(a,c,e),"onChange")},t.createElement(d,{itemText:"Option 1",onClick:l(e=>{r("onClick (event)")(e)},"onClick")}),t.createElement(d,{itemText:"Option 2",onClick:l(e=>{r("onClick (event)")(e)},"onClick")})),t.createElement(x,{...i,count:6,id:h(),labelText:"Checkbox with menu 2",onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox")(a,c,e),"onChange"),overflowMenuProps:{selectorPrimaryFocus:"[data-storybook-example-primary-focus]"}},t.createElement(d,{itemText:"Option 1",onClick:l(e=>{r("onClick (event)")(e)},"onClick")}),t.createElement(d,{itemText:"Option 2, preselected",onClick:l(e=>{r("onClick (event)")(e)},"onClick"),"data-storybook-example-primary-focus":!0}),t.createElement(d,{itemText:"Option 3",onClick:l(e=>{r("onClick (event)")(e)},"onClick")}),t.createElement(d,{itemText:"Option 4",onClick:l(e=>{r("onClick (event)")(e)},"onClick")}))),t.createElement(j,{labelText:"Accordion",count:35},t.createElement(S,{labelText:"Accordion item",count:35,accordionItemProps:{onHeadingClick:l(({isOpen:e,event:a})=>{r("onHeadingClick ({ isOpen, event })")(e,a)},"onHeadingClick")}},t.createElement(s,{count:10,labelText:"Checkbox 1",id:h(),onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox (event, { checked, id })")(e,a,c),"onChange")}),t.createElement(s,{count:10,labelText:"Checkbox 2",id:h(),onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox (event, { checked, id })")(e,a,c),"onChange")}),t.createElement(s,{count:15,labelText:"Checkbox 3",id:h(),onChange:l((e,{checked:a,id:c})=>r("onChange Checkbox (event, { checked, id })")(e,a,c),"onChange")})))))},"Template"),u=M.bind({});u.storyName="Default";u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
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
}`,...u.parameters?.docs?.source}}};const fe=["Default"];export{u as Default,fe as __namedExportsOrder,ge as default};
//# sourceMappingURL=FilterPanel.stories-BQsHLB5b.js.map
