import{e,S as c,r as d,B as u}from"./iframe-Bt_4wi2_.js";import{S as s}from"./SingleAddSelect-DC15Feur.js";import"./devtools-BCl7cib1.js";import"./props-helper-uQ141h4h.js";import"./AddSelect-DjtIBZ8o.js";import"./Tag-Ex8z9_ne.js";import"./DefinitionTooltip-DhipDxYz.js";import"./index-xWfRmBau.js";import"./bucket-18-BNKdAP26.js";import"./utils-Dx5MzUE-.js";import"./Text-CKKshe8_.js";import"./AccordionItem-CYO3lCiP.js";import"./NoDataEmptyState-DHayk9gF.js";import"./EmptyState-O7tb8Xec.js";import"./EmptyStateV2.deprecated-CzR5da4a.js";import"./Link-BtVCBSi3.js";import"./index-C6rFndyw.js";import"./NoDataIllustration-CzVtwb_5.js";import"./useId-C7vEoo7Q.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-_udyJMBX.js";import"./bucket-12-CDc9yP7i.js";import"./Dropdown-DALH0kRg.js";import"./index-Z1YAyleP.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DZ5Pn6PQ.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-Cu112eOp.js";import"./MultiSelect-CJqcHJtI.js";import"./Checkbox-CKmGiswn.js";import"./index-Dj5IO_sl.js";import"./LayerContext-BkO66YUX.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-C1HMm-vq.js";import"./TooltipTrigger-BQVEd-aa.js";import"./bucket-7-B-udVZOd.js";import"./bucket-14-CUPfehuY.js";import"./Search-CVSTT5z7.js";import"./bucket-15-Ch_KyqBs.js";import"./MenuItem-D2pnsW7j.js";import"./useControllableState-DNtleL3k.js";import"./useAttachedMenu-C0yi6pnT.js";import"./bucket-2-Boc44dor.js";import"./index-DHyu7IcT.js";import"./wrapFocus-DVXZPRDf.js";import"./useOutsideClick-D3OyQuUM.js";import"./bucket-1-CILBsbE8.js";import"./bucket-6-DqzXE5dN.js";import"./ButtonSet-CKUC8hVh.js";import"./DismissibleTag-CgEG4X9m.js";import"./NotFoundEmptyState-D-iN-Km6.js";import"./NotFoundIllustration-CK78gLt7.js";import"./Tearsheet-DnsEA5bG.js";import"./TearsheetShell-vb-2VaD5.js";import"./useResizeObserver-B7TK2lQu.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-47wjLjIr.js";import"./index-BEhuL1MR.js";import"./InlineLoading-DVx1EWEO.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-DfwNoD2Z.js";import"./usePortalTarget-BMZMDMfJ.js";import"./index-BMUscg6k.js";import"./useFocus-DrsdxZqy.js";import"./usePreviousValue-D6jr6a1I.js";import"./useIsomorphicEffect-D_1zDqSu.js";import"./ActionSet-I4afg10P.js";import"./TearsheetNarrow-BwOum83s.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ke={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...i.parameters?.docs?.source}}};const De=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,De as __namedExportsOrder,ke as default};
