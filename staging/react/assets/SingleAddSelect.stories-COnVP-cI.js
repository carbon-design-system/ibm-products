var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,aj as u,r as h,L as g}from"./iframe-CaYiXxeb.js";import{S as l}from"./SingleAddSelect-CrbdaBN6.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-Op8SBfoQ.js";import"./props-helper-DaiXPvfv.js";import"./AddSelect-D1_HKsjX.js";import"./Tag-C1OHW9GU.js";import"./Text-CGI6c8pb.js";import"./DefinitionTooltip-TbUUdaQu.js";import"./index-BX-ljRwx.js";import"./index-jlb8RiJl.js";import"./bucket-20-BIxJnZZV.js";import"./AccordionItem-DfBfsUQS.js";import"./NoDataEmptyState-CGJa-HU6.js";import"./EmptyState-ChcPqICq.js";import"./EmptyStateV2.deprecated-Ec1-hoIE.js";import"./Link-DLhwDTY_.js";import"./index-D0ueUpbx.js";import"./NoDataIllustration-CinZmDhZ.js";import"./useId-W2h0r20i.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-BUgjkWWP.js";import"./index-Cui2iJ7W.js";import"./bucket-14-B5wBEtv-.js";import"./index-CbznafVO.js";import"./LayerContext-C_jiTdxa.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-B9OdtyB8.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-BAyf-FyY.js";import"./FormContext-D-VIdrjx.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-C--Qe6YU.js";import"./bucket-21-C4ELoiYU.js";import"./useNoInteractiveChildrenForLabel-1_tyUqLF.js";import"./MultiSelect-9i2g6EC3.js";import"./Checkbox-Cc29oIS_.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-gdUEh6td.js";import"./TooltipTrigger-B2yqVmna.js";import"./bucket-8-C2tuhNCq.js";import"./bucket-15-B_hz82pn.js";import"./Search-BnZ9r0_7.js";import"./bucket-17-qOCo0CKL.js";import"./MenuItem-BMMprwrM.js";import"./useAttachedMenu-C981KQUf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DBHvgFWc.js";import"./bucket-2-B-5ATZBS.js";import"./index-B7rHjqKx.js";import"./wrapFocus-BaZdYIcz.js";import"./useOutsideClick-DYApPV8J.js";import"./bucket-1-CbK5Zgvg.js";import"./bucket-7-BfvkBBdh.js";import"./ButtonSet-kpfj_AKD.js";import"./DismissibleTag-CVgiX6De.js";import"./NotFoundEmptyState-miUHXy7A.js";import"./NotFoundIllustration-QjaoQ6vS.js";import"./Tearsheet-CByTil9N.js";import"./TearsheetShell-DE_dKgUI.js";import"./useResizeObserver-R4NKztwC.js";import"./useIsomorphicEffect-CelFyGs3.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-BCG556m2.js";import"./isTopmostVisibleModal-uVUXmJ0D.js";import"./InlineLoading-ZgtWNWQn.js";import"./Wrap-D7yYtBnZ.js";import"./usePortalTarget-PQnIa8FM.js";import"./index-Db3Fyji3.js";import"./useFocus-BSiYcBdv.js";import"./usePresence-0Us7zbuF.js";import"./usePreviousValue-CI6rS2zt.js";import"./ActionSet-CxEDqNZ6.js";import"./TearsheetNarrow-34nEyubO.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const He={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Ne=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ne as __namedExportsOrder,He as default};
//# sourceMappingURL=SingleAddSelect.stories-COnVP-cI.js.map
