var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-BlOC0pA1.js";import{S as l}from"./SingleAddSelect-DeVH1zyl.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-PisD3bve.js";import"./props-helper-BJbMNkZu.js";import"./AddSelect-D0PS4sTV.js";import"./Tag-7gsWik5w.js";import"./Text-Cp4U2L1v.js";import"./DefinitionTooltip-o9ok-SuY.js";import"./index-DCjUOJAY.js";import"./index-DM6fwa49.js";import"./bucket-19-D7qwhym0.js";import"./AccordionItem-Bpd7RSqu.js";import"./NoDataEmptyState-0Sx3jwuB.js";import"./EmptyState-k_qZ7fhp.js";import"./EmptyStateV2.deprecated-CqyzMhnf.js";import"./Link-HOxydKq1.js";import"./index-DeFlcz3Q.js";import"./NoDataIllustration-v9DVrs3T.js";import"./useId-BAsTH3YN.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-D1sooeku.js";import"./index-BrA8t5Wz.js";import"./bucket-13-BRvGgRkW.js";import"./index-DNDXHd8F.js";import"./LayerContext-DWkp40hc.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-1NvCiWax.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-DbyPiPDQ.js";import"./FormContext-Ct3xSnYs.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-C1KfNHvX.js";import"./bucket-20-CeVQz5jy.js";import"./MultiSelect-C8YPRRM2.js";import"./Checkbox-JLajw0rH.js";import"./UserProfileImage-Bq8lSfLB.js";import"./TooltipTrigger-Cf_Z7gq4.js";import"./bucket-8-D5Q_imEF.js";import"./bucket-15-BGX7bQdL.js";import"./Search-DY9yFbDU.js";import"./bucket-16-4csj2bYY.js";import"./MenuItem-cg4JmAW_.js";import"./useAttachedMenu-uPzKvwam.js";import"./environment-DRRHKtsv.js";import"./useControllableState-ClGudATx.js";import"./bucket-2-CRbSQdfG.js";import"./index-CFem3ifY.js";import"./wrapFocus-DuZLEN6D.js";import"./useOutsideClick-_g6kuMYP.js";import"./bucket-1-DZ13MlUN.js";import"./bucket-7-xD7wUqDy.js";import"./ButtonSet-BlPHxy7J.js";import"./DismissibleTag-BIu91aa9.js";import"./NotFoundEmptyState-DBkNbDym.js";import"./NotFoundIllustration-BK3ud_3o.js";import"./Tearsheet-DQJS-pCD.js";import"./TearsheetShell-BB622NR2.js";import"./useResizeObserver-DCJzwT7K.js";import"./useIsomorphicEffect-TwSdq75_.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-CT45rnKG.js";import"./toggleClass-CLau3MKB.js";import"./InlineLoading-3LUrVCXD.js";import"./bucket-6-Bhi7puzq.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-C5kujqui.js";import"./usePortalTarget-3tM0TYLb.js";import"./index-ZE5nj42R.js";import"./useFocus-B2K9WnRm.js";import"./usePresence-DHZIEfUH.js";import"./usePreviousValue-DO-TURt-.js";import"./ActionSet-Cr9ov0V5.js";import"./TearsheetNarrow-DG_y8wdh.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-vuldIVFU.js.map
