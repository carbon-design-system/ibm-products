var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-ClFYBNZh.js";import{S as l}from"./SingleAddSelect-DAyunCjO.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DNttzqoV.js";import"./props-helper-DgWwr2Da.js";import"./AddSelect-7AM86nz1.js";import"./Tag-zJCMRUfq.js";import"./Text-C6XdxEq2.js";import"./DefinitionTooltip-CVHk_-iQ.js";import"./index-tgAZXQBu.js";import"./index-Beu57O9h.js";import"./bucket-19-CucHOJ3h.js";import"./AccordionItem-DbO-toAR.js";import"./NoDataEmptyState-Bda_YBlm.js";import"./EmptyState-DwmVK-az.js";import"./EmptyStateV2.deprecated-ChCIpEAh.js";import"./Link-_aMG5UC7.js";import"./index-CcR5el_A.js";import"./NoDataIllustration-C_RVARvK.js";import"./useId-DGUMXYpN.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-iHv3Ai5s.js";import"./index-NXcoyEmE.js";import"./bucket-13-NXJbbJTL.js";import"./index-Dxnmtqj_.js";import"./LayerContext-BfozsjrW.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-C-EqgeIH.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-CXP9BsL8.js";import"./bucket-20-D8sX7iXB.js";import"./downshift.esm-BPMO5akI.js";import"./FormContext-yoh48WO7.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-zHMm9B2b.js";import"./Checkbox-omYaSXWw.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-C0H0b2iT.js";import"./TooltipTrigger-CzQN3pvR.js";import"./bucket-8-DE07vIy0.js";import"./bucket-15-cWner0Je.js";import"./Search-DawomRKR.js";import"./bucket-16-BrzprH3l.js";import"./MenuItem-nEeq18Ob.js";import"./useAttachedMenu-DRHCR9IE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8lkoBJZ.js";import"./bucket-2-DVXZJZ-O.js";import"./index-qoSTJLaJ.js";import"./wrapFocus-aIt59QJw.js";import"./useOutsideClick-CQVIQ7GS.js";import"./bucket-1-jn5j668n.js";import"./bucket-7-Bsle6kMV.js";import"./ButtonSet-Bp-NMtjD.js";import"./DismissibleTag-BuAOT_qO.js";import"./NotFoundEmptyState-BvfSxdkY.js";import"./NotFoundIllustration-CeRRDgEx.js";import"./Tearsheet-CQ4JgMdL.js";import"./TearsheetShell-N-4DnCOi.js";import"./useResizeObserver-CR1yd8DF.js";import"./useIsomorphicEffect-DsvwjDgP.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-D0NdYhxR.js";import"./toggleClass-Dodvdhmx.js";import"./InlineLoading-DApDyR0G.js";import"./bucket-6-D62PGvFd.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-CknSnmKI.js";import"./usePortalTarget-B0RfQDa2.js";import"./index-D6ljBPxk.js";import"./useFocus-BsJMkLqC.js";import"./usePresence-DMXF_A8u.js";import"./usePreviousValue-D0q0-hY4.js";import"./ActionSet-BohWKgod.js";import"./TearsheetNarrow-BDl7Ck1p.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-CP8oX527.js.map
