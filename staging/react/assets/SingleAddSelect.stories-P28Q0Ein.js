var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-BJfS6TR2.js";import{S as l}from"./SingleAddSelect-Dy9WdU_3.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BK-O6ZTi.js";import"./props-helper-UsuoU5_v.js";import"./AddSelect-CXxcJj-o.js";import"./Tag-DkToHj7W.js";import"./Text-BAQNTtEB.js";import"./DefinitionTooltip-DIKStf7i.js";import"./index-BK1usqqk.js";import"./index-Nx5-3yW_.js";import"./bucket-19-eqggub-2.js";import"./AccordionItem-D8lGaxc5.js";import"./NoDataEmptyState-CRgjdabu.js";import"./EmptyState-BJFFYpPp.js";import"./EmptyStateV2.deprecated-CieHXddP.js";import"./Link-CNXNhgnO.js";import"./index-KMgszfVD.js";import"./NoDataIllustration-B8wtSbgZ.js";import"./useId-BlGB52Z5.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-C6N47sE_.js";import"./index-DDYrqF9w.js";import"./bucket-13-BogTAl92.js";import"./index-OuOVqiZr.js";import"./LayerContext-C_9YIeQ1.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DclHGyF9.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-BJ2U48Lt.js";import"./bucket-20-BhP_pvjx.js";import"./downshift.esm-C6-stRtx.js";import"./FormContext-B_fBxqkl.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-D3IoP4yS.js";import"./Checkbox-BFqI0_a0.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-iLqDL5MF.js";import"./TooltipTrigger-nX1KSEUV.js";import"./bucket-8-M-WpRXaZ.js";import"./bucket-15-BKBCWofc.js";import"./Search-D49GRVyn.js";import"./bucket-16-Bm6OjJGX.js";import"./MenuItem-Dt_IACOd.js";import"./useAttachedMenu-B-fu5Ypa.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLNdWP-M.js";import"./bucket-2-DhZwl8wu.js";import"./index-C_Pwui4q.js";import"./wrapFocus-Dh3S89fz.js";import"./useOutsideClick-n0iTSUaL.js";import"./bucket-1-vs56S9m2.js";import"./bucket-7-DIXVgq6-.js";import"./ButtonSet-CgqU260_.js";import"./DismissibleTag-CLmPSkgn.js";import"./NotFoundEmptyState-t4bmz1RH.js";import"./NotFoundIllustration-DgKJ5ZZ0.js";import"./Tearsheet-DfCx5cji.js";import"./TearsheetShell-DJYmEd9h.js";import"./useResizeObserver-Uv70ZBHr.js";import"./useIsomorphicEffect-D83N95Px.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-C3MAqUaA.js";import"./toggleClass-CDv8h4ly.js";import"./InlineLoading-DED7OqEE.js";import"./bucket-6-CBfFKy_q.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-xO49_1oq.js";import"./usePortalTarget-B9YhKQuY.js";import"./index-CuTIbJIS.js";import"./useFocus-B86Z6LZE.js";import"./usePresence-D8mW318X.js";import"./usePreviousValue-DQPoWaqB.js";import"./ActionSet-B6j7E-P6.js";import"./TearsheetNarrow-CtUSoRE_.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
the way the component is displayed and how you interact with it..

Let's walk through an example.`,source:{code:`items: {
  entries: [ // the actual list of items / entries
    {
      id: '1', // required unique id for the entry
      value: '1', // required value of the entry
      title: 'item 1', // required title to display
      subtitle: 'item 1 subtitle', // subtitle to display
      children: { // designates if entry has children. if the children prop is found a hierarchy list will be used
        entries: [
          {
            id: '1-1',
            value: 'file1.pdf',
            title: 'file1.pdf',
          },
        ],
      },
    },
  ],
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ne={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...o.parameters?.docs?.source}}};const Ie=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ie as __namedExportsOrder,Ne as default};
//# sourceMappingURL=SingleAddSelect.stories-P28Q0Ein.js.map
