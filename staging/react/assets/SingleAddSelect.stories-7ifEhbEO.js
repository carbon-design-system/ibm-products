var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-nyWj9AFG.js";import{S as l}from"./SingleAddSelect-BvFsr0ik.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-bEKes8mp.js";import"./props-helper-Dbiph8mZ.js";import"./AddSelect-D5ASFOUZ.js";import"./Tag-DueSeaUB.js";import"./Text-ugVjbrM6.js";import"./DefinitionTooltip-DpYlQa4t.js";import"./index-BW3OgNnr.js";import"./index-BfgIMR11.js";import"./bucket-19-DESzYyzb.js";import"./AccordionItem-B8Xd1fIV.js";import"./NoDataEmptyState-Bn3D65BU.js";import"./EmptyState-Bu0zEo87.js";import"./EmptyStateV2.deprecated-Dk0z7dz9.js";import"./Link-DESAjkNF.js";import"./index-CJhEv1XZ.js";import"./NoDataIllustration-kfPyRSyO.js";import"./useId-BwPKdf4k.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-iI4QSw1z.js";import"./index-BP5HDjxR.js";import"./bucket-13-BQAQJByg.js";import"./index-Bip5r7cE.js";import"./LayerContext-TY8Rr565.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-BGldWS1M.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-OnrN8UbL.js";import"./bucket-20-QNu5uAOp.js";import"./downshift.esm-CL6tmTgM.js";import"./FormContext-Ca9jqY9Q.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-0FETypkX.js";import"./Checkbox-wLWb-MZ1.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-tNGdi6N5.js";import"./TooltipTrigger-BFkGKevF.js";import"./bucket-8-CaQDbZPY.js";import"./bucket-15-C3lLpWQU.js";import"./Search-VbXGv_8g.js";import"./bucket-16-0phSzhqh.js";import"./MenuItem-Cu0-mTTm.js";import"./useAttachedMenu-B2H7bdhi.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Br8GBSt6.js";import"./bucket-2-BFZsdHKx.js";import"./index-C0WS_wN3.js";import"./wrapFocus-kvvUkrL0.js";import"./useOutsideClick-TRDJNVTG.js";import"./bucket-1-CTqwJdcL.js";import"./bucket-7-Di7sqyQo.js";import"./ButtonSet-C1mE44Y9.js";import"./DismissibleTag-BNuTHFkk.js";import"./NotFoundEmptyState-wqsmlPgP.js";import"./NotFoundIllustration-Dr3wHW1m.js";import"./Tearsheet-4Uc1Oi-d.js";import"./TearsheetShell-D8WsFOf2.js";import"./useResizeObserver-8ywXsdiU.js";import"./useIsomorphicEffect-DiSxRFeJ.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-D66gEHIC.js";import"./toggleClass-A14-NzTB.js";import"./InlineLoading-B7IBbyIF.js";import"./bucket-6-B-Zq8ItY.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-Cw8Opmib.js";import"./usePortalTarget-BKqoXfXv.js";import"./index-Dsqef-Wi.js";import"./useFocus-BDqLXX8V.js";import"./usePresence-DyQAQ3jM.js";import"./usePreviousValue-MbZnQ0tT.js";import"./ActionSet-Bb_K9hKd.js";import"./TearsheetNarrow-DlfK-X2n.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-7ifEhbEO.js.map
