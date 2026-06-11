var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-DjhatwYN.js";import{S as l}from"./SingleAddSelect-BqLhJEFq.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-Dn6AC_oR.js";import"./props-helper-Cqqcv9Dj.js";import"./AddSelect-DMhtgDhW.js";import"./Tag-BNEOudzH.js";import"./Text-BaETmR7U.js";import"./DefinitionTooltip-CtDR--kN.js";import"./index-owJ4jz1M.js";import"./index-DcoRJSfi.js";import"./bucket-19-DIg4M51W.js";import"./AccordionItem-9hnoGIT2.js";import"./NoDataEmptyState-CBLKbgG4.js";import"./EmptyState-CgXbf1T_.js";import"./EmptyStateV2.deprecated-B0ZqDIqG.js";import"./Link-BvFMN3La.js";import"./index-B440oqQp.js";import"./NoDataIllustration-DpmB-7Fu.js";import"./useId-BEl_syO7.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-D_xyO9wB.js";import"./index-h4Fcz4Tu.js";import"./bucket-13-szDtigQL.js";import"./index-CAyd05U7.js";import"./LayerContext-C8LqyRYa.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-8jOeisn5.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-DpdCEWIZ.js";import"./bucket-20-D8k5DkrN.js";import"./downshift.esm-CM8vMYzw.js";import"./FormContext-BMDfFsRX.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-DUcHhZt6.js";import"./Checkbox-HeyXaFW2.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-Dnc79t8s.js";import"./TooltipTrigger-BUsAzneO.js";import"./bucket-8-D-z1irc5.js";import"./bucket-15-B_udJxkS.js";import"./Search-DYgJ0ULE.js";import"./bucket-16-CDb8Xiex.js";import"./MenuItem-AiQT_bx9.js";import"./useAttachedMenu-CiypQ9pG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BDHtwbPd.js";import"./bucket-2-CDb9kUsn.js";import"./index-BJtVRVtG.js";import"./wrapFocus-CXSYhBnP.js";import"./useOutsideClick-C4lkmPMe.js";import"./bucket-1-DV6WRrpg.js";import"./bucket-7-DzUCZQqj.js";import"./ButtonSet-Brqzjdle.js";import"./DismissibleTag-CJGNo0d6.js";import"./NotFoundEmptyState-CxB0EMTX.js";import"./NotFoundIllustration-C5hpLchS.js";import"./Tearsheet-Dd07OuAP.js";import"./TearsheetShell-BHUNtlLP.js";import"./useResizeObserver-CZwRZha8.js";import"./useIsomorphicEffect-z7MnJin8.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-B_P_c2C_.js";import"./toggleClass-blI8iiAX.js";import"./InlineLoading-GFCyMXpZ.js";import"./bucket-6-BheI4vap.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-CFNve7sC.js";import"./usePortalTarget-CNcdiaVp.js";import"./index-DEsaE2yn.js";import"./useFocus-P0-mt_nC.js";import"./usePresence-Dn2hpJtj.js";import"./usePreviousValue-Cqtyehn-.js";import"./ActionSet-ddlXAvmX.js";import"./TearsheetNarrow-ASxIdwsD.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-DdipT1SQ.js.map
