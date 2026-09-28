var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ai as u,r as h,B as g}from"./iframe-DW3-uaTz.js";import{S as l}from"./SingleAddSelect-CKmJI2ku.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-stAW8lOV.js";import"./props-helper-BH28dCnP.js";import"./AddSelect-CtvRo_TL.js";import"./Tag-Cs5GVl_z.js";import"./Text-9Rf343bW.js";import"./DefinitionTooltip-Dhsz7ABs.js";import"./index-CW34tURC.js";import"./index-Dy_AUQjX.js";import"./bucket-20-CUMfyFy6.js";import"./AccordionItem-XCPzrN9x.js";import"./NoDataEmptyState-B4ZOFGeU.js";import"./EmptyState-D9VPXWl3.js";import"./EmptyStateV2.deprecated-B5AV6Y_S.js";import"./Link-CKVRvRPw.js";import"./index-Bi6NQqEv.js";import"./NoDataIllustration-Dqist2eY.js";import"./useId-BamGQC_a.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-t4HGPQt4.js";import"./index-D8tAyaP4.js";import"./bucket-14-C4mMYt2x.js";import"./index-RJBIqwkc.js";import"./LayerContext-i9ncoyA6.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-CVtr7oND.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-n6HiXoZA.js";import"./FormContext-BwoMjipg.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-tVgXN2Oy.js";import"./bucket-21-DsFiX9a0.js";import"./MultiSelect-BDkezzOM.js";import"./Checkbox-Q6xyGRrh.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-CpZ0LQj1.js";import"./TooltipTrigger-DANmZikO.js";import"./bucket-8-CN8ZzQUd.js";import"./bucket-15-C_DAfMFG.js";import"./Search-9ZBB_MZB.js";import"./bucket-17-CdLpcUzb.js";import"./MenuItem-XPcmGuG-.js";import"./useAttachedMenu-CG0WK2n-.js";import"./environment-DRRHKtsv.js";import"./useControllableState-UV5x6JCJ.js";import"./bucket-2-KS0g-5Ga.js";import"./index-duEQkvY6.js";import"./wrapFocus-DiwjL0CJ.js";import"./useOutsideClick-tokrS-Hu.js";import"./bucket-1-CFREfPg1.js";import"./bucket-7-Bz-ZWQfx.js";import"./ButtonSet-C4e7u8tE.js";import"./DismissibleTag-C_j3X3wP.js";import"./NotFoundEmptyState-JvYwgCbU.js";import"./NotFoundIllustration-ByJWxne5.js";import"./Tearsheet-DCh2ZdF5.js";import"./TearsheetShell-UHadZWgZ.js";import"./useResizeObserver-DofD_Rfz.js";import"./useIsomorphicEffect-BHHWtsVv.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-Ba5IoVe_.js";import"./isTopmostVisibleModal-DsXee8yT.js";import"./InlineLoading-KkV8lkHX.js";import"./Wrap-HgNa8Cih.js";import"./usePortalTarget-Bs4GZfDm.js";import"./index-DY_lUEG4.js";import"./useFocus-Bt9Jk-8l.js";import"./usePresence-GPgFjelm.js";import"./usePreviousValue-CejRUetL.js";import"./ActionSet-CI1hp8Ws.js";import"./TearsheetNarrow-W-nXdjit.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-B0XXUOFZ.js.map
