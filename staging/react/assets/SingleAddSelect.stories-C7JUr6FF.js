import{e,S as c,r as d,B as u}from"./iframe-es3YFZs8.js";import{S as s}from"./SingleAddSelect-D4YLMkp2.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-B-NbPYgg.js";import"./props-helper-CpLSSfOq.js";import"./AddSelect-U2aTjv4q.js";import"./Tag-CCt-SUKl.js";import"./Text-MEHJpwZ2.js";import"./DefinitionTooltip-BmJBfddz.js";import"./index-B6dVoXy9.js";import"./bucket-18-B7e-BwYT.js";import"./utils-Whna5qm2.js";import"./AccordionItem-BgHsnZt0.js";import"./NoDataEmptyState-omrF4QQk.js";import"./EmptyState-yDQeqKRE.js";import"./EmptyStateV2.deprecated-B6wwNsEo.js";import"./Link-BSTPpK0O.js";import"./index-C-mu62QI.js";import"./NoDataIllustration-C_NaAJks.js";import"./useId-WDitYIyO.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DhgWO1GF.js";import"./bucket-13-vyqsHVy5.js";import"./Dropdown-DKaSKN6M.js";import"./index-cRBKcX7l.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-ijK0cFxQ.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-DEji8yld.js";import"./bucket-19-B3J48Rvk.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-DjPJlPqG.js";import"./Checkbox-DHwbz_p8.js";import"./index-C5Ro8ytP.js";import"./LayerContext-DYatxtHw.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-pxUmsfzd.js";import"./TooltipTrigger-C9mN1fQG.js";import"./bucket-7-BSUCCRQK.js";import"./bucket-14-CI7BQNS5.js";import"./Search-8qkKR353.js";import"./bucket-15-iOzd6Ht7.js";import"./MenuItem-BfBpJTe1.js";import"./useControllableState-DELe-cxK.js";import"./useAttachedMenu-L4-RfObX.js";import"./bucket-2-CfJzaJFg.js";import"./index-D3xTsq0I.js";import"./wrapFocus-DSN20C2k.js";import"./useOutsideClick-gw3CJW12.js";import"./bucket-1-4ztVL7Nr.js";import"./bucket-6-DYsIcumV.js";import"./ButtonSet-BK4TCPFN.js";import"./DismissibleTag-B4nxSUVr.js";import"./NotFoundEmptyState-Cmtn6uJ8.js";import"./NotFoundIllustration-DW-bTDS2.js";import"./Tearsheet-CYGwkz1b.js";import"./TearsheetShell-H1aXQOgq.js";import"./useResizeObserver-BclD7llf.js";import"./useIsomorphicEffect-D6rh4akx.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BNZ0xrNk.js";import"./InlineLoading-CtvpAno-.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-b_cKjVZR.js";import"./usePortalTarget-BODnGvh-.js";import"./index-C6RUA3w7.js";import"./useFocus-BAdyEDNm.js";import"./usePreviousValue-DmHE8q_K.js";import"./ActionSet-BRjQP7gr.js";import"./TearsheetNarrow-Cn6mr4Xp.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Le={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...i.parameters?.docs?.source}}};const Pe=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,Pe as __namedExportsOrder,Le as default};
//# sourceMappingURL=SingleAddSelect.stories-C7JUr6FF.js.map
