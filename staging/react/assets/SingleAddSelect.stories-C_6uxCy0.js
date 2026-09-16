var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ai as u,r as h,B as g}from"./iframe-i4lJGu2h.js";import{S as l}from"./SingleAddSelect-CeoWShWv.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BVSjn6-P.js";import"./props-helper-ktKsHiYb.js";import"./AddSelect-wO19YJfx.js";import"./Tag-B93tQ9a2.js";import"./Text-Beop0pyf.js";import"./DefinitionTooltip-Pe1xRFXF.js";import"./index-CNgPc1KL.js";import"./index-BhFkI0cE.js";import"./bucket-20-ClQuJJZQ.js";import"./AccordionItem-2x0kiVSn.js";import"./NoDataEmptyState-7jEoXZXg.js";import"./EmptyState-Cgf8hglv.js";import"./EmptyStateV2.deprecated-6byZSTJI.js";import"./Link-CJxYz1Zu.js";import"./index-lHmXBgQY.js";import"./NoDataIllustration-BAppWnJA.js";import"./useId-CU-AzrlT.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-C0ZIgXLC.js";import"./index-B-YYjY0g.js";import"./bucket-14-COgSPOA5.js";import"./index-BIVY5pTa.js";import"./LayerContext-Bd5U9gUC.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-WGVTE-Kt.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-XI7SrJa1.js";import"./FormContext-DWpfzSnB.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-BhTqP7ia.js";import"./bucket-21-CNxINDYf.js";import"./MultiSelect-CDzzdBVs.js";import"./Checkbox-CflZQwF_.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-eqQbbGnW.js";import"./TooltipTrigger-D7qb_PBO.js";import"./bucket-8-Dl6tDtDl.js";import"./bucket-15-0CFZrE7L.js";import"./Search-Cg3N8lHe.js";import"./bucket-17-VSt7x90e.js";import"./MenuItem-BglKA2rA.js";import"./useAttachedMenu-DDPRo2A0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BzYQcoyp.js";import"./bucket-2-DJJpuEQA.js";import"./index-BUgATU43.js";import"./wrapFocus-D75OU94c.js";import"./useOutsideClick-Da7ss3G7.js";import"./bucket-1-ZTiTYh2G.js";import"./bucket-7-D13TTfCT.js";import"./ButtonSet-B2RkLua3.js";import"./DismissibleTag-72xv6LCI.js";import"./NotFoundEmptyState-DNzYYn1f.js";import"./NotFoundIllustration-DjR8paQ6.js";import"./Tearsheet-BDtJ-Oje.js";import"./TearsheetShell-BJGG0OVx.js";import"./useResizeObserver-CCIOUN8K.js";import"./useIsomorphicEffect-Z--hJSZ8.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-B_dkAzs0.js";import"./isTopmostVisibleModal-B-3BHaLZ.js";import"./InlineLoading-CWI5pVJm.js";import"./Wrap-7dj0Xgis.js";import"./usePortalTarget-CoiY1Qgy.js";import"./index-C4Zj7t-u.js";import"./useFocus-DljtV-tF.js";import"./usePresence-CV7i8dMY.js";import"./usePreviousValue-Ct5Dt6pM.js";import"./ActionSet-C8-CN-Qq.js";import"./TearsheetNarrow-D-slXe3-.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-C_6uxCy0.js.map
