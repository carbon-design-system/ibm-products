var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-DgruYanb.js";import{S as l}from"./SingleAddSelect-CRx-u0bN.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CW8YVWZC.js";import"./props-helper-BEn8ZzZM.js";import"./AddSelect-wXAPSKFc.js";import"./Tag-BN75k8hg.js";import"./Text-D1lCafHM.js";import"./DefinitionTooltip-BB56GqSK.js";import"./index-xD4Xpd71.js";import"./index-BsYj2UP_.js";import"./bucket-19-CGApZllR.js";import"./utils-CA4RKgu6.js";import"./AccordionItem-DP_m4ane.js";import"./NoDataEmptyState-BtnA130i.js";import"./EmptyState-VZfftYMu.js";import"./EmptyStateV2.deprecated-CBfuZFEO.js";import"./Link-DjX-mWYc.js";import"./index-Dnru4M6s.js";import"./NoDataIllustration-Di9ABrYE.js";import"./useId-DNBOHGwI.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-UXo31Sr-.js";import"./index-D2ZbzVUq.js";import"./bucket-13-DzNOrorl.js";import"./index-lUPiKPy6.js";import"./LayerContext-_FEItnCz.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-B36DlBEE.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-CB3unjNa.js";import"./FormContext-CKm6c-rM.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-CeKYoSNT.js";import"./bucket-20-DHjQwcsG.js";import"./MultiSelect-BzYwdSZe.js";import"./Checkbox-CmV_WtVY.js";import"./UserProfileImage-D7N3R6cE.js";import"./TooltipTrigger-DrzwVWVv.js";import"./bucket-8-9uq5G4oI.js";import"./bucket-15-D7IBYmjj.js";import"./Search-Ds_vqIl7.js";import"./bucket-16-BhrlQ6ck.js";import"./MenuItem-Cr-MvNNh.js";import"./useAttachedMenu-DVWyH_8U.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D9nZ2lYi.js";import"./bucket-2-DjMc9QmT.js";import"./index-B911w2zo.js";import"./wrapFocus-CTeM4Oek.js";import"./useOutsideClick-DZy5JJee.js";import"./bucket-1-BZJ1OccQ.js";import"./bucket-7-BaAiWyCS.js";import"./ButtonSet-CbbT0T6N.js";import"./DismissibleTag-CuIkJMCF.js";import"./NotFoundEmptyState-DQJ6eodu.js";import"./NotFoundIllustration-DSBRYBPA.js";import"./Tearsheet-BFguYZIX.js";import"./TearsheetShell-kPchMTsC.js";import"./useResizeObserver-CP0wa2Cj.js";import"./useIsomorphicEffect-B6QIctlI.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-NRx_kf66.js";import"./toggleClass-Cl_8Rmh6.js";import"./InlineLoading-BL7zZaGk.js";import"./bucket-6-BPpGHdnV.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-B3uE9Uvf.js";import"./usePortalTarget-BW9a6DBL.js";import"./index-g4e2t4sN.js";import"./useFocus-BUqVHLBO.js";import"./usePresence-C3bCRfvm.js";import"./usePreviousValue-DCRYaoGC.js";import"./ActionSet-6aOKSBVg.js";import"./TearsheetNarrow-BZSxoJRX.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-Cnt41a7A.js.map
