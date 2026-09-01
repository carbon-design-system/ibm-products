var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ag as u,r as h,B as g}from"./iframe-BJEr8hIF.js";import{S as l}from"./SingleAddSelect-DRiiTdk2.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DIPHceHz.js";import"./props-helper-But8QIhC.js";import"./AddSelect-DjWYLGQZ.js";import"./Tag-Cjc0Ltuh.js";import"./Text-BgS7oIBt.js";import"./DefinitionTooltip-CsT7oCIj.js";import"./index-Bq9BqBSK.js";import"./index-2N0MzFsY.js";import"./bucket-20-pb4ZJRbV.js";import"./AccordionItem-DVWqEco7.js";import"./NoDataEmptyState-BmIpB2iG.js";import"./EmptyState-CKkqVXz3.js";import"./EmptyStateV2.deprecated-DgX6dO4l.js";import"./Link-CuQCSuxA.js";import"./index-9JBdAywC.js";import"./NoDataIllustration-By0GuNVa.js";import"./useId-lIQ3SZl5.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-Bu8ZRkZr.js";import"./index-CiaQViB8.js";import"./bucket-14-MsfSSSC3.js";import"./index-DDH51Mds.js";import"./LayerContext-CLnoCJoE.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-SaEbiK--.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-C4iCCUIy.js";import"./bucket-21-Bo-VTMHN.js";import"./downshift.esm-DuOguGWc.js";import"./FormContext-C7vrrci6.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-B0thiY3X.js";import"./Checkbox-ChTWSiy4.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-dz5GtNHY.js";import"./TooltipTrigger-EaP0wrWW.js";import"./bucket-8-BOjnbbLp.js";import"./bucket-15-cMxfwZKM.js";import"./Search-DbCKfOgU.js";import"./bucket-16-B2W10nSe.js";import"./MenuItem-Dl8KUyxG.js";import"./useAttachedMenu-CDXIHmy5.js";import"./environment-DRRHKtsv.js";import"./useControllableState-1TbgSIA5.js";import"./bucket-2-C0xhMaii.js";import"./index-CPA5eF8D.js";import"./wrapFocus-BE4Fbj_7.js";import"./useOutsideClick-IZt9CdHd.js";import"./bucket-1-i0niiLMV.js";import"./bucket-7-CorJFDPj.js";import"./ButtonSet-B8sCMFQ7.js";import"./DismissibleTag-gSLmNpdk.js";import"./NotFoundEmptyState-8fMV3gtm.js";import"./NotFoundIllustration-j6qDUGXu.js";import"./Tearsheet-Ti8Za0VG.js";import"./TearsheetShell-BjeX8l2p.js";import"./useResizeObserver-BCljDAVT.js";import"./useIsomorphicEffect-BxVN6Xbk.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-BwPfIwbt.js";import"./isTopmostVisibleModal-2oqSTPoF.js";import"./InlineLoading-BacyH5P8.js";import"./Wrap-B5nPOcBt.js";import"./usePortalTarget-D9cwg6Jm.js";import"./index-BSqJd56P.js";import"./useFocus-B2Oyy1Uc.js";import"./usePresence-BQxnWuuL.js";import"./usePreviousValue-wWfY7Tw5.js";import"./ActionSet-C7zco3Ea.js";import"./TearsheetNarrow-CIOqZEe5.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-B9bXuaby.js.map
