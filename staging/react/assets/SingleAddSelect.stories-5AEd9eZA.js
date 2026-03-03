var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-D7SEW46n.js";import{S as l}from"./SingleAddSelect-4mwaSxzg.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-1BZM14jD.js";import"./props-helper-OxKO76gf.js";import"./AddSelect-3RH3SGl3.js";import"./Tag-BC0RpE8B.js";import"./Text-CpOZ4YWZ.js";import"./DefinitionTooltip-4VNSzV6_.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./bucket-19-CmSPB5ma.js";import"./utils-DwyE9iBt.js";import"./AccordionItem-uP2XVX23.js";import"./NoDataEmptyState-uNKt9zYR.js";import"./EmptyState-DYIZMgMk.js";import"./EmptyStateV2.deprecated-fVBmDwDA.js";import"./Link-OOPgBSwU.js";import"./index-Db4es_qP.js";import"./NoDataIllustration-D4kCfvHM.js";import"./useId-BxkPAL_z.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-DsP_RCEN.js";import"./bucket-13-C7lPX_P3.js";import"./Dropdown-C82rGXpz.js";import"./index-CAZ07BHJ.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-CPS5qPuK.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-qNpjkVGD.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-Dy9k0WaO.js";import"./Checkbox-IP95NoIw.js";import"./index-BwA9w7xH.js";import"./LayerContext-C_uCIRSN.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-DMV7nIJa.js";import"./TooltipTrigger-BU8EAN8v.js";import"./bucket-7-CRuC58BF.js";import"./bucket-14-NSdcIF6f.js";import"./Search-BzMD7ewh.js";import"./bucket-15-BKeoxuDz.js";import"./MenuItem-C_lxbBvq.js";import"./useControllableState-2egPo8bY.js";import"./useAttachedMenu-DZQd9qUW.js";import"./environment-DRRHKtsv.js";import"./bucket-2-WRuin4Ws.js";import"./index-DN6cfLXq.js";import"./wrapFocus-Bvs_mQRd.js";import"./useOutsideClick-CLLScqF7.js";import"./bucket-1-DHUuE59V.js";import"./ButtonSet-CFLMeBKE.js";import"./DismissibleTag-DJKiZ4P5.js";import"./NotFoundEmptyState-Czz5SyLP.js";import"./NotFoundIllustration-C8ZWqolK.js";import"./Tearsheet-Dlz3eSDL.js";import"./TearsheetShell-Dv2CJ5gT.js";import"./useResizeObserver-B5slglQP.js";import"./useIsomorphicEffect-BXsFz5wQ.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-sVw-jxq1.js";import"./InlineLoading-Dh4labHv.js";import"./bucket-6-zb7qZtic.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-DbjNrh6Y.js";import"./usePortalTarget-mUvvQ8K9.js";import"./index-ps_JZmSe.js";import"./useFocus-B4ilG4Vh.js";import"./usePreviousValue-Czkq6tDo.js";import"./ActionSet-Bv_ruqbR.js";import"./TearsheetNarrow-iLmNQvB_.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const _e={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const qe=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,qe as __namedExportsOrder,_e as default};
//# sourceMappingURL=SingleAddSelect.stories-5AEd9eZA.js.map
