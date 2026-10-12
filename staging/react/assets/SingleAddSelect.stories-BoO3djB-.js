var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ai as u,r as h,B as g}from"./iframe-BNGWoFVN.js";import{S as l}from"./SingleAddSelect-CgMxTl_A.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DfKI38aY.js";import"./props-helper-BtRmhizd.js";import"./AddSelect-DwuQ8kWB.js";import"./Tag-71Cjwhd2.js";import"./Text-BKVLrozK.js";import"./DefinitionTooltip-BL8zZUMg.js";import"./index-BGVaWMRy.js";import"./index-CbhpwO1D.js";import"./bucket-20-DnGv9FGc.js";import"./AccordionItem-Do-CsFKs.js";import"./NoDataEmptyState-BwXIvFk5.js";import"./EmptyState-Bl9fqBZl.js";import"./EmptyStateV2.deprecated-Ds1d_b0j.js";import"./Link-BwA2TWAV.js";import"./index-CdROyjJO.js";import"./NoDataIllustration-BDsfo_8B.js";import"./useId-BJfoE5r_.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-Cbk50WGZ.js";import"./index-C2RK30Kd.js";import"./bucket-14-pD4ajBcY.js";import"./index-CFH01y5t.js";import"./LayerContext-BHqy-tts.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-BQ_2wzrz.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-CKmaosc4.js";import"./FormContext-BOkH4Ia3.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-BZ7mSUIs.js";import"./bucket-21-Dc8elOVL.js";import"./MultiSelect-B33wh34j.js";import"./Checkbox-BKsKyFWP.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DSfSIeJS.js";import"./TooltipTrigger-BDuPc0z8.js";import"./bucket-8-DBsmuUY8.js";import"./bucket-15-0yAfmkaH.js";import"./Search-C5dMMEkN.js";import"./bucket-17-CY2a9dUg.js";import"./MenuItem-Bd8_llpQ.js";import"./useAttachedMenu-DMTLmPWt.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DD-t2lIg.js";import"./bucket-2-yBl_RuSX.js";import"./index-CZq5bCWz.js";import"./wrapFocus-D8wRDpML.js";import"./useOutsideClick-B2zj3EcL.js";import"./bucket-1-Di7Dv4UB.js";import"./bucket-7-DFXPTo5t.js";import"./ButtonSet-D35-9THN.js";import"./DismissibleTag-DYJc7d_g.js";import"./NotFoundEmptyState-CLlFVYCL.js";import"./NotFoundIllustration-B8XpHc0n.js";import"./Tearsheet-Bjv4G_2U.js";import"./TearsheetShell-3Dg2OuQ6.js";import"./useResizeObserver-DhHCg6Do.js";import"./useIsomorphicEffect-C3WxPeS7.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-CHYY0ruW.js";import"./isTopmostVisibleModal-CNMer6m0.js";import"./InlineLoading-BUwmRQvj.js";import"./Wrap-B6-sXQHz.js";import"./usePortalTarget-BsDIf4KV.js";import"./index-BzfEn4D3.js";import"./useFocus-lrb9v1Au.js";import"./usePresence-Ba3W4fjL.js";import"./usePreviousValue-BTb-B77j.js";import"./ActionSet-BUDcAy3c.js";import"./TearsheetNarrow-RxwmkY5x.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Fe={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const He=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,He as __namedExportsOrder,Fe as default};
//# sourceMappingURL=SingleAddSelect.stories-BoO3djB-.js.map
