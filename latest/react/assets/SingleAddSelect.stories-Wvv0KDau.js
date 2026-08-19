var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ag as u,r as h,B as g}from"./iframe-UFQ73af4.js";import{S as l}from"./SingleAddSelect-HQwa1POS.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CmzGK-FP.js";import"./props-helper-D1ToC-Hg.js";import"./AddSelect-DLr_VDlz.js";import"./Tag-DmnTOq8o.js";import"./Text-CGvfWv3Q.js";import"./DefinitionTooltip-DoIHCPrw.js";import"./index-yq8qzhNP.js";import"./index-LkBqL5iB.js";import"./bucket-20-CI4ecuyk.js";import"./AccordionItem-CZGm5D-d.js";import"./NoDataEmptyState-BEyaewvs.js";import"./EmptyState-C6Py6M9u.js";import"./EmptyStateV2.deprecated-BQ79GzBi.js";import"./Link-CvThHovb.js";import"./index-B20rE21Y.js";import"./NoDataIllustration-tRBupqq0.js";import"./useId-CN4GJ7sQ.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-QaAA70PL.js";import"./index-EoKbwtUG.js";import"./bucket-14-SmraEgjA.js";import"./index-BaBwsEpW.js";import"./LayerContext-CBEoaTMF.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-LuM3Wisp.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-CUnqHlUa.js";import"./bucket-21-d6_QJces.js";import"./downshift.esm-B6vbCc7O.js";import"./FormContext-B8s6XRGS.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-Dqo_O3cl.js";import"./Checkbox-CSOZqpJw.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-BDkM9zGh.js";import"./TooltipTrigger-Lw1GKXOx.js";import"./bucket-8-BA3SmMhx.js";import"./bucket-15-vCUA1M5z.js";import"./Search-TWwGqgnc.js";import"./bucket-16-DKnENBlw.js";import"./MenuItem-oW28ITkS.js";import"./useAttachedMenu-Bn0ckfw0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Df1xLZ11.js";import"./bucket-2-BlLaQW-a.js";import"./index-Bo-HDE2R.js";import"./wrapFocus-CPFL6mF0.js";import"./useOutsideClick-qq6sT7yN.js";import"./bucket-1-CfJPJXdy.js";import"./bucket-7-BRXA3Wxg.js";import"./ButtonSet-pf7az1mw.js";import"./DismissibleTag-C0F2Uw6C.js";import"./NotFoundEmptyState-sdDWnE2s.js";import"./NotFoundIllustration-CTBmxpO5.js";import"./Tearsheet-BAvjT6_n.js";import"./TearsheetShell-C7pmfOMn.js";import"./useResizeObserver-CA30xuv-.js";import"./useIsomorphicEffect-BEWaERst.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-C9MtSZdU.js";import"./isTopmostVisibleModal-RHYbqF0i.js";import"./InlineLoading-YokHvcXP.js";import"./Wrap-B63WPz7U.js";import"./usePortalTarget-DEIUGCVw.js";import"./index-DxxTL-CI.js";import"./useFocus-O_SRCSW6.js";import"./usePresence-BYHF4Kb6.js";import"./usePreviousValue-Dqeoh45U.js";import"./ActionSet-CbMCDFvB.js";import"./TearsheetNarrow-B-8RyU6H.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-Wvv0KDau.js.map
