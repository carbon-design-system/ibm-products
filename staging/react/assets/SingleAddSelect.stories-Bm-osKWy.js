var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ag as u,r as h,B as g}from"./iframe-O9B_Dp_t.js";import{S as l}from"./SingleAddSelect-CT08R21s.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-C5uvsY8l.js";import"./props-helper-BNJB8r1t.js";import"./AddSelect-LEvZCA3l.js";import"./Tag-CPxoJg4V.js";import"./Text-CD4MWSZF.js";import"./DefinitionTooltip-B8H9u6N3.js";import"./index-CYLslu2X.js";import"./index-DdvpTaWJ.js";import"./bucket-20-BYEksR4G.js";import"./AccordionItem-Cyeq-pVU.js";import"./NoDataEmptyState-Brzh9L41.js";import"./EmptyState-BJDC8xJW.js";import"./EmptyStateV2.deprecated-DKiSfpaI.js";import"./Link-Bkxzc5gt.js";import"./index-VOpjc0lr.js";import"./NoDataIllustration-BjqfM6Qb.js";import"./useId-hFMDi7bC.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-DI9pH_hx.js";import"./index-D4Wo6sqM.js";import"./bucket-14-BhkSVdVU.js";import"./index-D__qcsVc.js";import"./LayerContext-Bct4nWnc.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DDW0po6o.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-ClcHRULe.js";import"./bucket-21-D-SZI-qq.js";import"./downshift.esm-Dz4Ky7hi.js";import"./FormContext-DFINhmTx.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-BNJrOubG.js";import"./Checkbox-BKgbWAAX.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-BfjonMjq.js";import"./TooltipTrigger-CdHBumok.js";import"./bucket-8-xbCpGhX2.js";import"./bucket-15-D15wjn_d.js";import"./Search-2gH7qaYi.js";import"./bucket-16-5JPlgjIq.js";import"./MenuItem-Ch4QZlhC.js";import"./useAttachedMenu-WO9d_haf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-AOOae36a.js";import"./bucket-2-BoI_oxUl.js";import"./index-Dui_dv2o.js";import"./wrapFocus-DSQ_FNNh.js";import"./useOutsideClick-CcHYmmH3.js";import"./bucket-1-hLZTjQRY.js";import"./bucket-7-DJHepK9E.js";import"./ButtonSet-yR2zg6Pu.js";import"./DismissibleTag-CSVTvAcW.js";import"./NotFoundEmptyState-BIu5k_0z.js";import"./NotFoundIllustration-DyE7UJ4T.js";import"./Tearsheet-CbqJwZM5.js";import"./TearsheetShell-BJ_Seoxn.js";import"./useResizeObserver-CCIbpI42.js";import"./useIsomorphicEffect-B_0rKcAy.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-i-JPFqjV.js";import"./isTopmostVisibleModal-rfkWZjSo.js";import"./InlineLoading--VyzWqGo.js";import"./Wrap-wGIsH0J3.js";import"./usePortalTarget-Crqijfut.js";import"./index-BE__AMQR.js";import"./useFocus-DuD_i0I-.js";import"./usePresence-BwymmIEh.js";import"./usePreviousValue-Fp3wVgvE.js";import"./ActionSet-C8sEoSeX.js";import"./TearsheetNarrow-FZl-RF9M.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-Bm-osKWy.js.map
