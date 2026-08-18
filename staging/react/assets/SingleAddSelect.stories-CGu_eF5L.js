var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ag as u,r as h,B as g}from"./iframe-1IYrbML7.js";import{S as l}from"./SingleAddSelect-2hXfJviE.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BfuSEd4k.js";import"./props-helper-xm8U1bT6.js";import"./AddSelect-BDZEMug7.js";import"./Tag-B3HE2IVm.js";import"./Text-CGH0tvjM.js";import"./DefinitionTooltip-D1WVVafN.js";import"./index-BFuhdGQf.js";import"./index-CYUyvB3t.js";import"./bucket-20-DuHSi_VM.js";import"./AccordionItem-9hUunkls.js";import"./NoDataEmptyState-B0cGBuUK.js";import"./EmptyState-_geo7ZcW.js";import"./EmptyStateV2.deprecated-BKN4Zd1N.js";import"./Link-Ctu68J4U.js";import"./index-BJRj69DC.js";import"./NoDataIllustration-DD-t_rVI.js";import"./useId-CMT86ArY.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-DVomkDfZ.js";import"./index-VZydWTJa.js";import"./bucket-14-2CFMNYC_.js";import"./index-1pZSLDw2.js";import"./LayerContext-D3oew5Md.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DFInOVcc.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-wnazSRqn.js";import"./bucket-21-DShaIQEG.js";import"./downshift.esm-DBih4EUV.js";import"./FormContext-wtA34ekt.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-6JnP2E88.js";import"./Checkbox-N-Ov_A-a.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DsmGTBDR.js";import"./TooltipTrigger-CM4RTJVX.js";import"./bucket-8-B_YlZdlU.js";import"./bucket-15-BTU6yHew.js";import"./Search-rEAGLUE1.js";import"./bucket-16-yGLssMBD.js";import"./MenuItem-BN45AZrY.js";import"./useAttachedMenu-Bvvg38Cu.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BOScVoQC.js";import"./bucket-2-DZOFFp2R.js";import"./index-Ba-_4fjo.js";import"./wrapFocus-7mD-tbe-.js";import"./useOutsideClick-DbUbFrF8.js";import"./bucket-1-mdoYg1ml.js";import"./bucket-7-DHuUxKrn.js";import"./ButtonSet-DzlgNKDX.js";import"./DismissibleTag-DSrcqsRW.js";import"./NotFoundEmptyState-DNEfqvWW.js";import"./NotFoundIllustration-CyoRFEck.js";import"./Tearsheet-CKQvuwn-.js";import"./TearsheetShell-DDUsx6cp.js";import"./useResizeObserver-DOTZ221D.js";import"./useIsomorphicEffect-CIQYWbK1.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-DS4w2zQd.js";import"./isTopmostVisibleModal-D6G8L1Es.js";import"./InlineLoading-BFd6-Jhe.js";import"./Wrap-DxFy3gCI.js";import"./usePortalTarget-MrDcAt72.js";import"./index-DsXs-OUa.js";import"./useFocus-CdC2vcvq.js";import"./usePresence-B4wIwN2_.js";import"./usePreviousValue-Cy-xU-we.js";import"./ActionSet-B1Ix9t41.js";import"./TearsheetNarrow-BUexfz16.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-CGu_eF5L.js.map
