var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-DhIv2Cz2.js";import{S as l}from"./SingleAddSelect-W8eJNm1d.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-KpiUTsjr.js";import"./props-helper-CYANkYtB.js";import"./AddSelect-ByWzQrxI.js";import"./Tag-SRa8Jkg6.js";import"./Text-OlEmoPCg.js";import"./DefinitionTooltip-CJc_xAEX.js";import"./index-d8hsHx5V.js";import"./index-C1b99TSV.js";import"./bucket-19-0ioYX1hu.js";import"./utils-A8kjRMc4.js";import"./AccordionItem-6ecSal5g.js";import"./NoDataEmptyState-LjuXuhO8.js";import"./EmptyState-Dl0Eh-O3.js";import"./EmptyStateV2.deprecated-DCC0P_lg.js";import"./Link-CWTaGkXd.js";import"./index-4j00D-3u.js";import"./NoDataIllustration-Cjab4e-M.js";import"./useId-BhAClTZZ.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-ZXMYRKB8.js";import"./bucket-13-DyhhZxvH.js";import"./Dropdown-BF9sC_vw.js";import"./index-BdnD2v1g.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-DAgWiOK8.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-B_vakQDX.js";import"./bucket-20-BLUMbjfu.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-CiGlk7oX.js";import"./Checkbox-uM1nplfy.js";import"./index-Du8T86O1.js";import"./LayerContext-FIF-mJpy.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-BumFITnl.js";import"./TooltipTrigger-D1cKnShc.js";import"./bucket-8-DvN3WrMx.js";import"./bucket-14-BcBQF4gP.js";import"./Search-wqPxGHPL.js";import"./bucket-16-C01d6Qhf.js";import"./MenuItem-DKMBpR0M.js";import"./useControllableState-fPT1x_Ln.js";import"./useAttachedMenu-DMGjL-WQ.js";import"./environment-DRRHKtsv.js";import"./bucket-2-bhxorkyk.js";import"./index-g9DVUp9g.js";import"./wrapFocus-5tvSKAzz.js";import"./useOutsideClick-9VZ01zkD.js";import"./bucket-1-D-iSrM3O.js";import"./bucket-7-ChCKEQjG.js";import"./ButtonSet-B_BXmM1b.js";import"./DismissibleTag-EjLvQ1zX.js";import"./NotFoundEmptyState-_Z9sbgZX.js";import"./NotFoundIllustration-khG64cda.js";import"./Tearsheet-uyiZe2CU.js";import"./TearsheetShell-znaPRztQ.js";import"./useResizeObserver-Cm2iF_nj.js";import"./useIsomorphicEffect-DtbzomVA.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-iTGiThv_.js";import"./InlineLoading-Bgh3e9T9.js";import"./bucket-6-gELQZyM7.js";import"./usePresenceContext-93kFRESp.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-C2tDyNS4.js";import"./usePortalTarget-aIXbwh_C.js";import"./index-f0w4ifyk.js";import"./useFocus-CCtkVOet.js";import"./usePresence-BloXpzMd.js";import"./usePreviousValue-Dyx9Q-0l.js";import"./ActionSet-CRmQzfcZ.js";import"./TearsheetNarrow-DZUTrlZu.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Re={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Ne=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ne as __namedExportsOrder,Re as default};
//# sourceMappingURL=SingleAddSelect.stories-DtVUmHH_.js.map
