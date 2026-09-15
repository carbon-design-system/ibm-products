var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ai as u,r as h,B as g}from"./iframe-CN5GxhYW.js";import{S as l}from"./SingleAddSelect-D1qc4Lye.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CdXbYj-o.js";import"./props-helper-HULA5OMF.js";import"./AddSelect-Ds9OkSYt.js";import"./Tag-B6E9phzO.js";import"./Text-Co6YBuGU.js";import"./DefinitionTooltip-BY6nODSV.js";import"./index-DSYn1vMq.js";import"./index-CYg9OXdX.js";import"./bucket-20-y6b6UwuS.js";import"./AccordionItem-Cdqzmg-p.js";import"./NoDataEmptyState-BehFETME.js";import"./EmptyState-DRshmJkd.js";import"./EmptyStateV2.deprecated-Bqfo5gpY.js";import"./Link-CLAEikxt.js";import"./index-CT6QfXDz.js";import"./NoDataIllustration-BENu0PAG.js";import"./useId-C8l2f045.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-D6y5KahD.js";import"./index-Cld__xtM.js";import"./bucket-14-D9LIC7EP.js";import"./index-DB40h0fE.js";import"./LayerContext-ceyDb81d.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DV6xTivr.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-DqAWtRY4.js";import"./FormContext-BxWLgyc8.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-DDVLdI9l.js";import"./bucket-21-BrCzSrZF.js";import"./MultiSelect-Cc_dC328.js";import"./Checkbox-CFXwspey.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-89y3hWRx.js";import"./TooltipTrigger-CMB1BaRj.js";import"./bucket-8-DiaNSyZb.js";import"./bucket-15-BAspkgAR.js";import"./Search-B0thv2O-.js";import"./bucket-17-D2wZR_Rm.js";import"./MenuItem-Dbo8zrcE.js";import"./useAttachedMenu-CjGjZJ8h.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DlUuHtEk.js";import"./bucket-2-Ba1-mJht.js";import"./index-BFu4nDOV.js";import"./wrapFocus-Bfo9V0Ng.js";import"./useOutsideClick-DJDLKHI9.js";import"./bucket-1-WAE3b166.js";import"./bucket-7-ClP0NUKT.js";import"./ButtonSet-CMCk3317.js";import"./DismissibleTag-R93B7B8p.js";import"./NotFoundEmptyState-DUQefjcs.js";import"./NotFoundIllustration-Bkgngvju.js";import"./Tearsheet-hsc2t4K7.js";import"./TearsheetShell-BwtCGRSr.js";import"./useResizeObserver-BbDftPVh.js";import"./useIsomorphicEffect-DOmH7t3h.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-D1v7ivyj.js";import"./isTopmostVisibleModal-iW97RJzz.js";import"./InlineLoading-BzS4iPtX.js";import"./Wrap-CHrXG0jL.js";import"./usePortalTarget-BdkRgD5g.js";import"./index-BFeqe0Ah.js";import"./useFocus-WRyD7wqW.js";import"./usePresence-BlUMI6Vb.js";import"./usePreviousValue-CrAdM6Zb.js";import"./ActionSet-BRUzwzrA.js";import"./TearsheetNarrow-C0l_afhr.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-D28G1kHh.js.map
