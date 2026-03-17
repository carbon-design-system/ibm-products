var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-D0YM396L.js";import{S as l}from"./SingleAddSelect-8VNRimOF.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CeMp0EuZ.js";import"./props-helper-pSJPf7kN.js";import"./AddSelect-mz3AV_Re.js";import"./Tag-HhuYZmna.js";import"./Text-B5bUU6xC.js";import"./DefinitionTooltip-Ty8Szx8E.js";import"./index-B9Pud9qF.js";import"./index-sOaB66XM.js";import"./bucket-19-DWCiPMcf.js";import"./utils-Cdf1ZlrJ.js";import"./AccordionItem-CQ_PyidO.js";import"./NoDataEmptyState-Cv-WQjou.js";import"./EmptyState-CJZ5iPQC.js";import"./EmptyStateV2.deprecated-BaeGkrHR.js";import"./Link-hAWk4UjX.js";import"./index-Demuok-K.js";import"./NoDataIllustration-ClYiRGgh.js";import"./useId-C8GwI6Y0.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CoyS_4hq.js";import"./bucket-13-BO6lA4tP.js";import"./Dropdown-Bgj29EwO.js";import"./index-0x_rhNbx.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-CRsJl1v9.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-r6tM1s5M.js";import"./bucket-20-CVsPViOq.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-qTQm25UJ.js";import"./Checkbox-BeypPpH4.js";import"./index-DsE5wpZZ.js";import"./LayerContext-fYtJ8nRu.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-B-sYNy-4.js";import"./TooltipTrigger-ijamCFJo.js";import"./bucket-8-B7ompPpn.js";import"./bucket-14-BK5KhPFL.js";import"./Search-BgRauPlC.js";import"./bucket-16-B7-jv19o.js";import"./MenuItem-CmpkzDcK.js";import"./useControllableState-DyIY710x.js";import"./useAttachedMenu-Cv__XPlW.js";import"./environment-DRRHKtsv.js";import"./bucket-2-XrGoRIHr.js";import"./index-DOD2SiBE.js";import"./wrapFocus-DGGJHyeS.js";import"./useOutsideClick-CsUK_QrA.js";import"./bucket-1-vjyamaxx.js";import"./bucket-7-BCBSl9It.js";import"./ButtonSet-C8U0UJ24.js";import"./DismissibleTag-CgY4wkFP.js";import"./NotFoundEmptyState-DDowPQls.js";import"./NotFoundIllustration-B7Hero4C.js";import"./Tearsheet-ZKVm2D6v.js";import"./TearsheetShell-B61TkP7f.js";import"./useResizeObserver-DlF2t09E.js";import"./useIsomorphicEffect-TepxVVef.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-CdFJkbFc.js";import"./InlineLoading-BxEXu-mD.js";import"./bucket-6-DBflVpa1.js";import"./usePresenceContext-BJIVOvN0.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-XpoNR3tg.js";import"./usePortalTarget-DdXPgdsp.js";import"./index-BBr64BdR.js";import"./useFocus-CGqcPl0F.js";import"./usePresence-BHpB3dZ4.js";import"./usePreviousValue-fX8N9WeB.js";import"./ActionSet-CQ7juXA1.js";import"./TearsheetNarrow-CWC5oStH.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Re={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Ne=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ne as __namedExportsOrder,Re as default};
//# sourceMappingURL=SingleAddSelect.stories-fN8HXw4r.js.map
