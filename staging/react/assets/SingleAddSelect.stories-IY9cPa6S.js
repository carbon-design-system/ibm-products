var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-Dwk9YmAN.js";import{S as l}from"./SingleAddSelect-DYLMwkOI.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CxET2ftO.js";import"./props-helper-CVt7QmCF.js";import"./AddSelect-Eqa-6FBm.js";import"./Tag-B_Unk92v.js";import"./Text-BEmRygqo.js";import"./DefinitionTooltip-DBzKN1bs.js";import"./index-x2rxOhL3.js";import"./index-TfXoLMHw.js";import"./bucket-19-CWKpn_IP.js";import"./AccordionItem-ChY6w0Zn.js";import"./NoDataEmptyState-Cwcjuv-m.js";import"./EmptyState-CMaaIfVp.js";import"./EmptyStateV2.deprecated-AM4jC8Q0.js";import"./Link-Eqbn2GoD.js";import"./index-BTMjr9al.js";import"./NoDataIllustration-D7YTHHk-.js";import"./useId-C1iLHqii.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-ChpRQ9k6.js";import"./index-Duve-hAI.js";import"./bucket-13-DGAhRASv.js";import"./index-D_94dRAP.js";import"./LayerContext-ClG4rrRp.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown--gE3CvR7.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-B0FD4R8S.js";import"./bucket-20-DcPWc3N9.js";import"./downshift.esm-DY19WzQJ.js";import"./FormContext-hTfDBPYK.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-BsLitK8L.js";import"./Checkbox-CxqQisvn.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-CevVJSvE.js";import"./TooltipTrigger-DNA3QWHT.js";import"./bucket-8-CLBpStsT.js";import"./bucket-15-nEu6Tnsk.js";import"./Search-B4KoE-zl.js";import"./bucket-16-B6GeJaNh.js";import"./MenuItem-BJFeFFwe.js";import"./useAttachedMenu-BDFTWMsy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-RmzHfMFB.js";import"./bucket-2-IOa-ILaZ.js";import"./index-Bx6QOSzn.js";import"./wrapFocus-CZYRSBAN.js";import"./useOutsideClick-Xg2vzzcr.js";import"./bucket-1-BOYVwKkN.js";import"./bucket-7-1zfGAt3a.js";import"./ButtonSet-zfetG-87.js";import"./DismissibleTag-BMk3Ypgd.js";import"./NotFoundEmptyState-DMoKK6b3.js";import"./NotFoundIllustration-aP0Bjg_R.js";import"./Tearsheet-RCMLajZ4.js";import"./TearsheetShell-C7IdpeGN.js";import"./useResizeObserver-DtXh7as7.js";import"./useIsomorphicEffect-uisrTcl0.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-DDcxqtyW.js";import"./toggleClass-h78Z_bAy.js";import"./InlineLoading-Sqv6uuP8.js";import"./bucket-6-C7Zuoocv.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-OytPhzll.js";import"./usePortalTarget-CyoylMcm.js";import"./index-yTnoKGWJ.js";import"./useFocus-D7k_PtM3.js";import"./usePresence-CyvNe4oG.js";import"./usePreviousValue-DSgPtnPQ.js";import"./ActionSet-C4t2Y-YL.js";import"./TearsheetNarrow-BCJ3SV7f.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-IY9cPa6S.js.map
