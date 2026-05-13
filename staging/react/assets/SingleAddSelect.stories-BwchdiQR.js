var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-t6K2KT89.js";import{S as l}from"./SingleAddSelect-DfcngE_m.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-W8hnGsLd.js";import"./props-helper-DCQo5VD9.js";import"./AddSelect-DTwsiUGh.js";import"./Tag-DFi4pEk8.js";import"./Text-DAQ2PBki.js";import"./DefinitionTooltip-lZlDCfPI.js";import"./index-CRnkdfzI.js";import"./index-BYKt6Fpu.js";import"./bucket-19-Dcgt9bs5.js";import"./AccordionItem-CXVg-nSx.js";import"./NoDataEmptyState-jo0vxUlo.js";import"./EmptyState-kvr3TUyC.js";import"./EmptyStateV2.deprecated-CI-Uv_TE.js";import"./Link-B4ammGPw.js";import"./index-CAdb8dcH.js";import"./NoDataIllustration-DLWbYi73.js";import"./useId-BW3ntvKq.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CplQH4Yk.js";import"./index-DbNaZvk9.js";import"./bucket-13-Bxyq0euO.js";import"./index-DvXgXORc.js";import"./LayerContext-DAYQB8RQ.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-yum4ktVp.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-CnzvYlOI.js";import"./bucket-20-RO2qCJtZ.js";import"./downshift.esm-DYpHsINJ.js";import"./FormContext-Cx3DeHPy.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-DEWFrMgJ.js";import"./Checkbox-Ddp6lQzA.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DhHN58hn.js";import"./TooltipTrigger-c-sQY-Sg.js";import"./bucket-8-h2wfmVQg.js";import"./bucket-15-ClZkLA1X.js";import"./Search-_a77g0Fq.js";import"./bucket-16-mg6NFGY4.js";import"./MenuItem-d2tgjLh6.js";import"./useAttachedMenu-De7RQ6C_.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRwEFL3T.js";import"./bucket-2-CR5JuJ6A.js";import"./index-_BBVVFwt.js";import"./wrapFocus-kxKl7KnS.js";import"./useOutsideClick-BtTQRwc6.js";import"./bucket-1-C4ZTtrlT.js";import"./bucket-7-BdydbOMy.js";import"./ButtonSet-BpIizn8P.js";import"./DismissibleTag-CC2EeLVX.js";import"./NotFoundEmptyState-8RW72Jzh.js";import"./NotFoundIllustration-BQKoDRPM.js";import"./Tearsheet-BXC0L_qZ.js";import"./TearsheetShell-w8ohfQCG.js";import"./useResizeObserver-BfQhVOEy.js";import"./useIsomorphicEffect-yAsi5cdK.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-Bnad8y0j.js";import"./toggleClass-DwDrthKE.js";import"./InlineLoading-DgJRJu1I.js";import"./bucket-6-Bl2Z_cQh.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-Rw3S_ZJW.js";import"./usePortalTarget-C6FkQ04J.js";import"./index-D5ZkQQoe.js";import"./useFocus-C9sAALGh.js";import"./usePresence-ClWK6ibQ.js";import"./usePreviousValue-Dm16o7nR.js";import"./ActionSet-B8w3Fv3P.js";import"./TearsheetNarrow-EGmM7O9e.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-BwchdiQR.js.map
