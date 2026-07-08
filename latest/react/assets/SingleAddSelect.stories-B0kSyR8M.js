var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-DQtlSwB0.js";import{S as l}from"./SingleAddSelect-DgT7KvE2.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CKq-cjSr.js";import"./props-helper-BEfR-CBa.js";import"./AddSelect-CWSmgMYb.js";import"./Tag-CpgNdznG.js";import"./Text-aeWWocZi.js";import"./DefinitionTooltip-Da2vOiUl.js";import"./index-HrSRrNhc.js";import"./index-DO9e1XXc.js";import"./bucket-19-BryqLv5V.js";import"./AccordionItem-BaNZ-UZl.js";import"./NoDataEmptyState-d5X-Di2p.js";import"./EmptyState-B7lyL1Yv.js";import"./EmptyStateV2.deprecated-HgEo7tYf.js";import"./Link-DMFtFmaW.js";import"./index-6N7phTXo.js";import"./NoDataIllustration-DVOb8fZ6.js";import"./useId-jf0fmR05.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-BEP1cZdq.js";import"./index-DFuekbr0.js";import"./bucket-13-B4AR-gP8.js";import"./index-B0En0VCR.js";import"./LayerContext-C0V86w6h.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-C8HdSQPV.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-c7o4VaT8.js";import"./bucket-20-BaUCyjiQ.js";import"./downshift.esm-fbTLaqIf.js";import"./FormContext-CtjnxQSN.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-DcwmATXD.js";import"./Checkbox-DA5dImZy.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-B_edIjXs.js";import"./TooltipTrigger-C9bzp6Zt.js";import"./bucket-8-BH-0Bl0S.js";import"./bucket-15-CmVLo3qv.js";import"./Search-Bt9lstfw.js";import"./bucket-16-B2xBWAu6.js";import"./MenuItem-BsFq2oKV.js";import"./useAttachedMenu-CNVssTOG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BxEbi6mu.js";import"./bucket-2-CoFJ47U9.js";import"./index-DYiMOPGb.js";import"./wrapFocus-BLa99PjJ.js";import"./useOutsideClick-CZNnivsi.js";import"./bucket-1-B1CRS2ls.js";import"./bucket-7-DXZvdKTt.js";import"./ButtonSet-C0880qiN.js";import"./DismissibleTag-DAiRcUbi.js";import"./NotFoundEmptyState-BiqRYh-U.js";import"./NotFoundIllustration-Dg0ntpKh.js";import"./Tearsheet-DzHdtRuH.js";import"./TearsheetShell-CW6XOo__.js";import"./useResizeObserver-4UkoSMZU.js";import"./useIsomorphicEffect-CQiBpG0E.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-DgnKG59i.js";import"./isTopmostVisibleModal-mS5hENDn.js";import"./InlineLoading-mxEuuwX0.js";import"./bucket-6-DF2gREQd.js";import"./Wrap-CKOGJa2O.js";import"./usePortalTarget-NQDZTbZz.js";import"./index-B_1PALIy.js";import"./useFocus-C98u63HS.js";import"./usePresence-oPmcqpZX.js";import"./usePreviousValue-Cu5p5XON.js";import"./ActionSet-BsVh9Suy.js";import"./TearsheetNarrow-2EnASHEm.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const He={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Ne=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ne as __namedExportsOrder,He as default};
//# sourceMappingURL=SingleAddSelect.stories-B0kSyR8M.js.map
