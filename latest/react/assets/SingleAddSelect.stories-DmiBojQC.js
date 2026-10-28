var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,aj as u,r as h,L as g}from"./iframe-BJ3oD3I6.js";import{S as l}from"./SingleAddSelect-Bw0oA61R.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BnZ9dupT.js";import"./props-helper-CK5SYOfC.js";import"./AddSelect-BE-xqDco.js";import"./Tag-Br-1l77w.js";import"./Text-CKFCb-K0.js";import"./DefinitionTooltip-BYYlk8JF.js";import"./index-CfJuWsKG.js";import"./index-FQgPJb5I.js";import"./bucket-20-Vj6m3ER2.js";import"./AccordionItem-BuvKKQeD.js";import"./NoDataEmptyState-BXBPKjAZ.js";import"./EmptyState-DSs0V7hZ.js";import"./EmptyStateV2.deprecated-Ci_-072f.js";import"./Link-3VMMPuSQ.js";import"./index-Vu7ywWcs.js";import"./NoDataIllustration-Bp1Lvqjp.js";import"./useId-kRdbt123.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-Dz5PsTBC.js";import"./index-BsM5luMF.js";import"./bucket-14-BH-thPNO.js";import"./index-B44qGmzH.js";import"./LayerContext-kZMSrgAm.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-Bex3-6T5.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-Dw2SeZdp.js";import"./FormContext-v-R-meOx.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-Bro2iP2D.js";import"./bucket-21-_gQwUv_z.js";import"./useNoInteractiveChildrenForLabel-BAYLBxXJ.js";import"./MultiSelect-B3CIeNWA.js";import"./Checkbox-DX4eokQ9.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DVSB82x0.js";import"./TooltipTrigger-DfehjQbR.js";import"./bucket-8-Dz3t5KtZ.js";import"./bucket-15-dQV6ezRU.js";import"./Search-CLvXAlj3.js";import"./bucket-17-CVaRNrPu.js";import"./MenuItem-Cgh2v6_2.js";import"./useAttachedMenu-DeDdPkTy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CD5GBJ5k.js";import"./bucket-2-WHjdTac2.js";import"./index-z22PCSp-.js";import"./wrapFocus-BG8cibfI.js";import"./useOutsideClick-DKA0pRcd.js";import"./bucket-1-Dg1sNCxj.js";import"./bucket-7-BtrbsRa_.js";import"./ButtonSet-DHBPfsAD.js";import"./DismissibleTag-G2zsr2Qd.js";import"./NotFoundEmptyState-DJbypX4Q.js";import"./NotFoundIllustration-BlCY_2qG.js";import"./Tearsheet-DvCJl91p.js";import"./TearsheetShell-DWRLA0PE.js";import"./useResizeObserver-BZ8dhILb.js";import"./useIsomorphicEffect-hpa23fp6.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-BXLb-sEZ.js";import"./isTopmostVisibleModal-DvUtpNhe.js";import"./InlineLoading-DnTQB44j.js";import"./Wrap-A1zli8WP.js";import"./usePortalTarget-DuEDzpGP.js";import"./index-cqtLY_Mv.js";import"./useFocus-B2sHbBnn.js";import"./usePresence-BeU_mIvQ.js";import"./usePreviousValue-iHNgpNoC.js";import"./ActionSet-BqX89kL9.js";import"./TearsheetNarrow-Cnd1EHyn.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-DmiBojQC.js.map
