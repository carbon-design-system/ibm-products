var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-jZWG66li.js";import{S as l}from"./SingleAddSelect-CjbqVajp.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BmJuPbq5.js";import"./props-helper-CbiDXG5b.js";import"./AddSelect-CyBDcLRg.js";import"./Tag-BLpsojOG.js";import"./Text-MAmnaD9H.js";import"./DefinitionTooltip-DcS0yaKE.js";import"./index-DCIajyCT.js";import"./index-CCsGhLAA.js";import"./bucket-19-C2-W5HiT.js";import"./AccordionItem-h3Mh0u-I.js";import"./NoDataEmptyState-Bv-uFGYy.js";import"./EmptyState-BlR4Nsbn.js";import"./EmptyStateV2.deprecated-U9meRsNh.js";import"./Link-BaBq1H2r.js";import"./index-CU2Cp-Qy.js";import"./NoDataIllustration-CxC2KFrP.js";import"./useId-JX4wW7oP.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CTs13yo9.js";import"./index-jppSwiR5.js";import"./bucket-13-sI_lbNNR.js";import"./index-Cn2PStIV.js";import"./LayerContext-CrUnT_W9.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-GlAaBZLC.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-C0p8WdxS.js";import"./bucket-20-B4uFpGKw.js";import"./downshift.esm-CAnJLABz.js";import"./FormContext-B4fMb7EG.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-DZDC_2bl.js";import"./Checkbox-DUQsMQT9.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DoKSDqHF.js";import"./TooltipTrigger-BIJ--RZP.js";import"./bucket-8-Bvylky_X.js";import"./bucket-15-ClYjtQSj.js";import"./Search-C4wa9sxa.js";import"./bucket-16-CseOxs48.js";import"./MenuItem-Lljj5Fo2.js";import"./useAttachedMenu-BeNbWoPS.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BmJIAqes.js";import"./bucket-2-DWg0M4zV.js";import"./index-du0qUBAz.js";import"./wrapFocus-DtUmgvSF.js";import"./useOutsideClick-BJn37Z9d.js";import"./bucket-1-obTWIw3W.js";import"./bucket-7-BnXe9N7L.js";import"./ButtonSet-B1bJuNqr.js";import"./DismissibleTag-BAMetvFG.js";import"./NotFoundEmptyState-D2hzckZD.js";import"./NotFoundIllustration-i8u3e8N5.js";import"./Tearsheet-DbXY50nk.js";import"./TearsheetShell-i5URtWiC.js";import"./useResizeObserver-CUi1ZAI7.js";import"./useIsomorphicEffect-z083cbHj.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-XylCDvoO.js";import"./toggleClass-Ne6eOh2U.js";import"./InlineLoading-4R9NdHX-.js";import"./bucket-6-B2oAEAOa.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-BEk9gVfG.js";import"./usePortalTarget-Bt1p0OSJ.js";import"./index-CuevfKHt.js";import"./useFocus-4QwAHaXZ.js";import"./usePresence-AVtmMk5q.js";import"./usePreviousValue-D4uAI8q0.js";import"./ActionSet-YWQ5N7Ld.js";import"./TearsheetNarrow-DMxI4xe-.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-CaPHiokI.js.map
