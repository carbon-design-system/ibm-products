var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-D_TgCArL.js";import{S as l}from"./SingleAddSelect-VwBN3qUk.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BGZqfd5Y.js";import"./props-helper-mCcBl7fc.js";import"./AddSelect-eslXhQRo.js";import"./Tag-DwG5QxKI.js";import"./Text-dRt3vkhG.js";import"./DefinitionTooltip-CCUESeVH.js";import"./index-rkIh3fWn.js";import"./index-ByjH8V_s.js";import"./bucket-19-DTdadaEd.js";import"./AccordionItem-LnLX38WL.js";import"./NoDataEmptyState-DPGMZpNn.js";import"./EmptyState-9MXZSilL.js";import"./EmptyStateV2.deprecated-fMBzFI3J.js";import"./Link-DfZ7aJKy.js";import"./index-DSCJKvlP.js";import"./NoDataIllustration-6Xe6-gle.js";import"./useId-CGfxEokt.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-luJUEVBX.js";import"./index-BndSx2mu.js";import"./bucket-13-B66NcEIi.js";import"./index-C4I8n2OM.js";import"./LayerContext-cz8DORjj.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-CiTxYOtd.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-CsURg4Bb.js";import"./bucket-20-I6CTYn6M.js";import"./downshift.esm-CORxR4IN.js";import"./FormContext-BSRgfZem.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-BkfKI35f.js";import"./Checkbox-BhroKPX1.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-CX-D9lL6.js";import"./TooltipTrigger-BtoTmh5-.js";import"./bucket-8-Fiv9KCYs.js";import"./bucket-15-Djauy7UT.js";import"./Search-CFE_Nkyq.js";import"./bucket-16-BxRNo6ep.js";import"./MenuItem-of1z0pJX.js";import"./useAttachedMenu-GG8vFhDR.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BjOxIYPS.js";import"./bucket-2-DGcWyVgA.js";import"./index-ULHrowJv.js";import"./wrapFocus-ETscRDcT.js";import"./useOutsideClick-T8mS5L4_.js";import"./bucket-1-lBN47QRA.js";import"./bucket-7-Cu83Tgtz.js";import"./ButtonSet-D4f8odRz.js";import"./DismissibleTag-BJRFQ3-8.js";import"./NotFoundEmptyState-CucDan6A.js";import"./NotFoundIllustration-D8xTzJWf.js";import"./Tearsheet-CE_rhCT2.js";import"./TearsheetShell-Dpfg3vxH.js";import"./useResizeObserver-BKWzin4w.js";import"./useIsomorphicEffect-CR1p44dz.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-BnfFN913.js";import"./isTopmostVisibleModal-BR-FkALa.js";import"./InlineLoading-BGCjZ4v_.js";import"./bucket-6-CXN0yrIs.js";import"./Wrap-BLjom7wZ.js";import"./usePortalTarget-DnsJgKXA.js";import"./index-D0VNU8Gq.js";import"./useFocus-0BGQIA75.js";import"./usePresence-W3dLDr7Q.js";import"./usePreviousValue-DNpvF_F1.js";import"./ActionSet-DQlGvG51.js";import"./TearsheetNarrow-OVl1-7Cb.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const He={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Ne=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ne as __namedExportsOrder,He as default};
//# sourceMappingURL=SingleAddSelect.stories-CSO9y7sI.js.map
