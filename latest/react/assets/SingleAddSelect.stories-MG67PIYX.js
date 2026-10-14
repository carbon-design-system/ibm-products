var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ai as u,r as h,B as g}from"./iframe-DVd9vcGU.js";import{S as l}from"./SingleAddSelect-BMBMQmVk.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BesH-HZp.js";import"./props-helper-Cgnw3G9k.js";import"./AddSelect-Bw_g16Mc.js";import"./Tag-CrD9CEIo.js";import"./Text-DV9-Mjr0.js";import"./DefinitionTooltip-DXeHSrLD.js";import"./index-DosVcssD.js";import"./index-Cq97S7tC.js";import"./bucket-20-CIHM76kD.js";import"./AccordionItem-CFGsfYP-.js";import"./NoDataEmptyState-DOVTIfms.js";import"./EmptyState-C2SaV9KJ.js";import"./EmptyStateV2.deprecated-CZDn3IWx.js";import"./Link-BCdmVRNe.js";import"./index-B5TJhcrb.js";import"./NoDataIllustration-fQdYcZux.js";import"./useId-RUxCmBgx.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-DmxVZzxp.js";import"./index-DBdnCykv.js";import"./bucket-14-CYz0f0la.js";import"./index-Bx67NhBX.js";import"./LayerContext-MpoPJHNF.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-CD6M5w_-.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-7BR03Vpc.js";import"./FormContext-xJEFPa8c.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-BuZiZ9rP.js";import"./bucket-21-Cb3_HMBa.js";import"./MultiSelect-yMfQlTZx.js";import"./Checkbox-B_6sBQMw.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-CnNfkkg6.js";import"./TooltipTrigger-DQVRnDr1.js";import"./bucket-8-Dl_rElkL.js";import"./bucket-15-BJW7mzVV.js";import"./Search-BIGHArsK.js";import"./bucket-17-BqoxgkEm.js";import"./MenuItem-D6sgJ7Iz.js";import"./useAttachedMenu-ClE4WXq0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CUgugIkH.js";import"./bucket-2-Lc-sFvYQ.js";import"./index-BAqb6uzn.js";import"./wrapFocus-CVUKykfF.js";import"./useOutsideClick-B66mP4a-.js";import"./bucket-1-CZRk4HMw.js";import"./bucket-7-B00WowSE.js";import"./ButtonSet-YUvtI9UW.js";import"./DismissibleTag-B08-dPcV.js";import"./NotFoundEmptyState-DwYeMqys.js";import"./NotFoundIllustration-CbojNdZ-.js";import"./Tearsheet-44ueHkiM.js";import"./TearsheetShell-DDZ1yb8R.js";import"./useResizeObserver-5neUPqpH.js";import"./useIsomorphicEffect-CAlWORU7.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-Kuqffqwp.js";import"./isTopmostVisibleModal--B4sDzjk.js";import"./InlineLoading-Drafgksa.js";import"./Wrap-X6c5sK40.js";import"./usePortalTarget-C713aW1o.js";import"./index-Ih54qAyC.js";import"./useFocus-CxH00r9E.js";import"./usePresence--40urak1.js";import"./usePreviousValue-B_kjVhIW.js";import"./ActionSet-ChSdsXmR.js";import"./TearsheetNarrow-BWvxkS-Q.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-MG67PIYX.js.map
