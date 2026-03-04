var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-LiaStyBs.js";import{S as l}from"./SingleAddSelect-DYa6DdZe.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CUjvjodF.js";import"./props-helper-BjdYyuO_.js";import"./AddSelect-tWgMCqTS.js";import"./Tag-CTKCPFlt.js";import"./Text-CexaJYDP.js";import"./DefinitionTooltip-Qd5lxvh4.js";import"./index-4--JecgM.js";import"./index-BVtb6FYG.js";import"./bucket-19-B-wN5ejR.js";import"./utils-_nXq7M9N.js";import"./AccordionItem-aRtwn8aw.js";import"./NoDataEmptyState-BdTbLK8A.js";import"./EmptyState-DwxAjOaS.js";import"./EmptyStateV2.deprecated-CkeZ0stL.js";import"./Link-DjfPrp2-.js";import"./index-CE4j8fAC.js";import"./NoDataIllustration-BldMLTTC.js";import"./useId-Ot11TkSk.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CWTG_Ihv.js";import"./bucket-13-BmtSAaYC.js";import"./Dropdown-Bkdo5nJw.js";import"./index-DOxiW0Es.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-nVLDpaU3.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-_C0ZGaZw.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-DhOyh4gQ.js";import"./Checkbox-rx6HGWZq.js";import"./index-B9Zh2qAg.js";import"./LayerContext-Cg_WEBvk.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-CcDMjZpN.js";import"./TooltipTrigger-Dv4zH2qQ.js";import"./bucket-7-f1_emcWj.js";import"./bucket-14-C_d-5ArD.js";import"./Search-C91_18w-.js";import"./bucket-15-BYmdFG7n.js";import"./MenuItem-C-MCSwx-.js";import"./useControllableState-DbUlKvzw.js";import"./useAttachedMenu-DPXvWdxJ.js";import"./environment-DRRHKtsv.js";import"./bucket-2-CvyymruN.js";import"./index-krU3NIw9.js";import"./wrapFocus-DA3E1wc8.js";import"./useOutsideClick-DfrADdkp.js";import"./bucket-1-BUo40C5c.js";import"./ButtonSet-C_7Ys9Uu.js";import"./DismissibleTag-D0B_d-j7.js";import"./NotFoundEmptyState-D2dR4Fry.js";import"./NotFoundIllustration-C2L-Rmcs.js";import"./Tearsheet-CADMDR4n.js";import"./TearsheetShell-DvHD2PEu.js";import"./useResizeObserver-VSpjG3EC.js";import"./useIsomorphicEffect-DAk8_5ES.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-75vYZ7oq.js";import"./InlineLoading-Da6JDjkJ.js";import"./bucket-6-kYy7D16T.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-BR4Y-dYa.js";import"./usePortalTarget-BfnCHncQ.js";import"./index-D-KFmUce.js";import"./useFocus-BZN4T96g.js";import"./usePreviousValue-D7gue4nV.js";import"./ActionSet-CSFjceeU.js";import"./TearsheetNarrow-IQENrrK6.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-BShKBBNJ.js.map
