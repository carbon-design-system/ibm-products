var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-CjBCRFVj.js";import{S as l}from"./SingleAddSelect-BQyDtZZB.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CsBMoq7i.js";import"./props-helper-8n0VjC8z.js";import"./AddSelect-cuHAYpfX.js";import"./Tag-OCjn-Wte.js";import"./Text-BrH4C0jF.js";import"./DefinitionTooltip-DeVuspr6.js";import"./index-CzluofQO.js";import"./index-DInTrMzG.js";import"./bucket-19-BlJcL9aw.js";import"./utils-CfXDWtIp.js";import"./AccordionItem-Bi5vrGgL.js";import"./NoDataEmptyState-DuDhFQrT.js";import"./EmptyState-BTq5pjYg.js";import"./EmptyStateV2.deprecated-DsPnk_nf.js";import"./Link-B9fBvMD0.js";import"./index-B1DzEGCY.js";import"./NoDataIllustration-CmbaFDqc.js";import"./useId-CLJtNmwb.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CGciRIED.js";import"./bucket-13-C-q7moq6.js";import"./Dropdown-Bt_YWqm8.js";import"./index-_mo_hqZe.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-BppFagRd.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-iq3oC8B3.js";import"./bucket-20-BOI0trXu.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-BTPYHhXL.js";import"./Checkbox-CET8YCR1.js";import"./index-Srdo1RRm.js";import"./LayerContext-1C_CyexE.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-CuZK3FMP.js";import"./TooltipTrigger-BGVFvlhn.js";import"./bucket-8-Qag4o7z4.js";import"./bucket-14-Chd7Ro6t.js";import"./Search-DFoE4ByK.js";import"./bucket-16-D3maWZlk.js";import"./MenuItem-CsJ8k-Je.js";import"./useControllableState-DI7Xu23J.js";import"./useAttachedMenu-CotrszDl.js";import"./environment-DRRHKtsv.js";import"./bucket-2-EKCFwDEt.js";import"./index-Baa2ARkH.js";import"./wrapFocus-CFxqynwa.js";import"./useOutsideClick-eIEGF3iK.js";import"./bucket-1-CLzSBq5W.js";import"./bucket-7-D3wViG_p.js";import"./ButtonSet-CPatE6mM.js";import"./DismissibleTag-C22K1byy.js";import"./NotFoundEmptyState-5My0YZlJ.js";import"./NotFoundIllustration-Butpm8o1.js";import"./Tearsheet-Bclcz-d6.js";import"./TearsheetShell-CK_7nIp5.js";import"./useResizeObserver-CDXgigJs.js";import"./useIsomorphicEffect-CxQ5hh_U.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-bhxv7MDS.js";import"./InlineLoading-B5kGlaxG.js";import"./bucket-6-CXCYtBmh.js";import"./usePresenceContext-DUsD1D5h.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-Cn2LgJb-.js";import"./usePortalTarget-Do2gNt2e.js";import"./index-DVMCKYtv.js";import"./useFocus-CaJWVFXn.js";import"./usePresence-rKc1wULH.js";import"./usePreviousValue-DwrLjxQX.js";import"./ActionSet-Db6dLYiY.js";import"./TearsheetNarrow-CPfsVJ2J.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-BlnEU42F.js.map
