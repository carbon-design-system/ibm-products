import{e,S as c,r as d,B as u}from"./iframe-DFpKMPby.js";import{S as s}from"./SingleAddSelect-Cq0L0UhJ.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-BTj-TFWE.js";import"./props-helper-IRa1SilK.js";import"./AddSelect-W487CsjE.js";import"./Tag-Bo2WPtKs.js";import"./Text-DmSkCN9-.js";import"./DefinitionTooltip-DcC1JVFA.js";import"./index-B_RYS3B3.js";import"./bucket-19-BiWvxoBr.js";import"./utils-js3bPBK9.js";import"./AccordionItem-C1dawy3P.js";import"./NoDataEmptyState-ByxfvGT3.js";import"./EmptyState-D3ScweoC.js";import"./EmptyStateV2.deprecated-Cxm57ils.js";import"./Link-CzWKN6gF.js";import"./index-DjtoZuLp.js";import"./NoDataIllustration-BIXT2HFa.js";import"./useId-BDEqOPFK.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BWtZlZku.js";import"./bucket-13-nCeWtx-Y.js";import"./Dropdown-DqIfgZp5.js";import"./index-ClXT6K7y.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DhkisQRD.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-CUOp-3yA.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-DMtKNMJr.js";import"./Checkbox-CKECTXFq.js";import"./index-BZNQ76pD.js";import"./LayerContext-BsfSsn3u.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-Cy-U9hWl.js";import"./TooltipTrigger-CGRFR1zq.js";import"./bucket-7-Bx0zcbBe.js";import"./bucket-14-KXHAg4ne.js";import"./Search-DHSo-NRX.js";import"./bucket-15-CTGKYzk1.js";import"./MenuItem-DL5t9ruc.js";import"./useControllableState-BZJyIqgU.js";import"./useAttachedMenu-DtpWmR0R.js";import"./environment-DRRHKtsv.js";import"./bucket-2-BJtRM_L-.js";import"./index-BwbFax62.js";import"./wrapFocus-LRnjjuOM.js";import"./useOutsideClick-Dyno-D99.js";import"./bucket-1-CubUMv3g.js";import"./ButtonSet-CbfhMW98.js";import"./DismissibleTag-Dgl_DvA7.js";import"./NotFoundEmptyState-C0mrM5Tb.js";import"./NotFoundIllustration-D4a-Y4C_.js";import"./Tearsheet-6VmEF0Wq.js";import"./TearsheetShell-BL0GeXR5.js";import"./useResizeObserver-BjbdykCB.js";import"./useIsomorphicEffect-D8ODjm2R.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-C4zVvowC.js";import"./InlineLoading-C4D8swtL.js";import"./bucket-6-B98T6Er9.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-DO_T519W.js";import"./usePortalTarget-BQit2Uui.js";import"./index-C7ycmAhm.js";import"./useFocus-COk-fU9I.js";import"./usePreviousValue-BJntbRdj.js";import"./ActionSet-Ddw8WSp7.js";import"./TearsheetNarrow-CEoUuK-H.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-DfAeqdfG.js.map
