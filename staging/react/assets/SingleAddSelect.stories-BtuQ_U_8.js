var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-AQ-BiXqb.js";import{S as l}from"./SingleAddSelect-Z542OipC.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-B5UnDfi3.js";import"./props-helper-B9mZyXXv.js";import"./AddSelect-CwLFDh3e.js";import"./Tag-CFFUxQ8H.js";import"./Text-Dsm_R2xh.js";import"./DefinitionTooltip--5fW-VE2.js";import"./index-qzm5qFKq.js";import"./index-Fa8k82Av.js";import"./bucket-19-CwFHWh6u.js";import"./AccordionItem-Wfk2S72t.js";import"./NoDataEmptyState-DYfkNhxS.js";import"./EmptyState-P3BCljf1.js";import"./EmptyStateV2.deprecated-CO6NzPJC.js";import"./Link-DN5xsnES.js";import"./index-B4M1cy69.js";import"./NoDataIllustration-fGANT2WQ.js";import"./useId-BIuPFXmX.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CEMuqwic.js";import"./index-DSfXcdqe.js";import"./bucket-13-B-osKcD1.js";import"./index-BqjEa5xh.js";import"./LayerContext-XFxZ9wyv.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-Dx5BSpjE.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-BnR5QOMF.js";import"./bucket-20-BcR2p0qs.js";import"./downshift.esm-ChF4f0t9.js";import"./FormContext-D-Seu0q0.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-KiIHh3Qe.js";import"./Checkbox-xcGS3ZaG.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-D27uGBkm.js";import"./TooltipTrigger-cDD4JQmu.js";import"./bucket-8-Be_RGz4b.js";import"./bucket-15-BXLjJhBT.js";import"./Search-DBptsoHk.js";import"./bucket-16-BGUoj5XK.js";import"./MenuItem-MpOKSCPJ.js";import"./useAttachedMenu-UOIHoVe3.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BkXCH9yg.js";import"./bucket-2-aHk5mYoj.js";import"./index-mTy_SdKb.js";import"./wrapFocus-BuLK8cQJ.js";import"./useOutsideClick-ZehDB9uA.js";import"./bucket-1-DF2v7-E6.js";import"./bucket-7-tab54nW3.js";import"./ButtonSet-DxHfgiWq.js";import"./DismissibleTag-Dd9fQNta.js";import"./NotFoundEmptyState-DC3Xri1m.js";import"./NotFoundIllustration-B6NWiMN4.js";import"./Tearsheet-hyEKeAcy.js";import"./TearsheetShell-BgfXhB84.js";import"./useResizeObserver-Do33kQkr.js";import"./useIsomorphicEffect-6UMNTwlI.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-DmVWaX7l.js";import"./toggleClass-nCY9tTpf.js";import"./InlineLoading-C_kEiLlS.js";import"./bucket-6-Ch-ncPVP.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-C6n7qtqI.js";import"./usePortalTarget-B4MSwqBR.js";import"./index-BADmuj8j.js";import"./useFocus-BL0kPL6u.js";import"./usePresence-9BRczg7C.js";import"./usePreviousValue-0TKt-UMc.js";import"./ActionSet-CPJK-4Zj.js";import"./TearsheetNarrow-CSbaJ6XZ.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-BtuQ_U_8.js.map
