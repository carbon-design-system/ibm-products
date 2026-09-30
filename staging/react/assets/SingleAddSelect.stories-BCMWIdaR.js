var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ai as u,r as h,B as g}from"./iframe-5jkWRNEh.js";import{S as l}from"./SingleAddSelect-CuTi_oSs.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DuzngOKQ.js";import"./props-helper-2UI5cvDZ.js";import"./AddSelect-CSHTk4oE.js";import"./Tag-0wVfSisJ.js";import"./Text-B_fCy4X0.js";import"./DefinitionTooltip--SBxwBU8.js";import"./index-gOFau5CO.js";import"./index-Cw1uA__0.js";import"./bucket-20-BYcDF6hY.js";import"./AccordionItem-OG_Z-sA5.js";import"./NoDataEmptyState-D8G1tGe9.js";import"./EmptyState-BXjMeG49.js";import"./EmptyStateV2.deprecated-Br-4fqft.js";import"./Link-B1R8Y2Rj.js";import"./index-B8j0J2OO.js";import"./NoDataIllustration-BAnvpAI2.js";import"./useId-DWD7qQwc.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-Bv-qIAUw.js";import"./index-Da4mpkrc.js";import"./bucket-14-BW81CKi4.js";import"./index-DNgIlI9v.js";import"./LayerContext-td5tKO2Z.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DpUij69A.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-DC1zVHfe.js";import"./FormContext-BYFWq4QJ.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-iz9xzucL.js";import"./bucket-21-DYJF9ey-.js";import"./MultiSelect-CfrW-6uG.js";import"./Checkbox-BmfP8f1v.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DKBi6jkP.js";import"./TooltipTrigger-CArDrHKR.js";import"./bucket-8-DNalHNjE.js";import"./bucket-15-B-VeCCP6.js";import"./Search-hh09MH46.js";import"./bucket-17-BdkGQe__.js";import"./MenuItem-1YYX5TLl.js";import"./useAttachedMenu-CUhwDBUE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRKctoUh.js";import"./bucket-2-e2HQl4bD.js";import"./index-BaoBDlWB.js";import"./wrapFocus-BkgdcWXM.js";import"./useOutsideClick-dijrvaOf.js";import"./bucket-1-B56AecfN.js";import"./bucket-7-C70zxdZ0.js";import"./ButtonSet-DKzXdsrO.js";import"./DismissibleTag-CGvrOtNa.js";import"./NotFoundEmptyState-Cc7mVNm2.js";import"./NotFoundIllustration-DGXm3WAH.js";import"./Tearsheet-Dff4mQ6j.js";import"./TearsheetShell-FotMdUVj.js";import"./useResizeObserver-Ckf-AJW1.js";import"./useIsomorphicEffect-BX6HdFD7.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-CHJ0hYAS.js";import"./isTopmostVisibleModal-Dy_RFvoV.js";import"./InlineLoading-DD3bClkX.js";import"./Wrap-DceYmJOy.js";import"./usePortalTarget-BJVbcSZv.js";import"./index-9vjhSHcW.js";import"./useFocus-B3kAhz1n.js";import"./usePresence-CBW5FuHs.js";import"./usePreviousValue-VvFEG8mi.js";import"./ActionSet-CqKtgRsG.js";import"./TearsheetNarrow-C6-x3RUK.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-BCMWIdaR.js.map
