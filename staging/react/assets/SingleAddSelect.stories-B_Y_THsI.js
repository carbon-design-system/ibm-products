import{e,S as c,r as d,B as u}from"./iframe-CtoKioxt.js";import{S as s}from"./SingleAddSelect-DLv20xp2.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-BpDcN5qy.js";import"./props-helper-B5pvbCOQ.js";import"./AddSelect-DHB7U_LQ.js";import"./Tag-CcGCr1ub.js";import"./Text-vtctM3R-.js";import"./DefinitionTooltip-C9lYYM92.js";import"./index-HEmqX-Cu.js";import"./bucket-18-22lNaWnZ.js";import"./utils-CqcRd8Iu.js";import"./AccordionItem-YF8pV8eS.js";import"./NoDataEmptyState-CNN5sXDe.js";import"./EmptyState-DE0v8Tkh.js";import"./EmptyStateV2.deprecated-DJ1amQdj.js";import"./Link-DwHVNOML.js";import"./index-DTsfMTRK.js";import"./NoDataIllustration-Ch-4CLKv.js";import"./useId-DOILeMkW.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DdBsCFcL.js";import"./bucket-13-DH4S8Q-V.js";import"./Dropdown-CEppJsEi.js";import"./index-Bexmo1Ys.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-4Dpo2sxO.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-BVbxDgXH.js";import"./bucket-19-uAShayzU.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-LN_GYSUt.js";import"./Checkbox-ymzLf8mF.js";import"./index-BSoC1KHw.js";import"./LayerContext-BaPPZ-kh.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-CgzTRfkm.js";import"./TooltipTrigger-BeW8YLdS.js";import"./bucket-7-CeLNIsQe.js";import"./bucket-14-77bPhugF.js";import"./Search-M8VRMu75.js";import"./bucket-15-YwHKJHA7.js";import"./MenuItem-DjmtQX8o.js";import"./useControllableState-Dfz1WBb9.js";import"./useAttachedMenu-Bqdk6DpD.js";import"./bucket-2-Dc1HokXJ.js";import"./index-DXIofiWL.js";import"./wrapFocus-BVfmuAZ2.js";import"./useOutsideClick-DrI2TK2-.js";import"./bucket-1-C8DJuThw.js";import"./bucket-6-i50ze4pO.js";import"./ButtonSet-Ce5dyIwV.js";import"./DismissibleTag-Ds86Ya5g.js";import"./NotFoundEmptyState-BjTYRvkk.js";import"./NotFoundIllustration-zSN-9En6.js";import"./Tearsheet-_5bLEKmW.js";import"./TearsheetShell-CTBWtS-X.js";import"./useResizeObserver-BRdPmGfe.js";import"./useIsomorphicEffect-CGzYvzD1.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-pOSCZM5i.js";import"./InlineLoading-DkB9Uu8m.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-Ct8otbRZ.js";import"./usePortalTarget-CFSarTX_.js";import"./index-CLRl8LFm.js";import"./useFocus-BVmJ_zV1.js";import"./usePreviousValue-CcZwIsc9.js";import"./ActionSet-UFeovBhW.js";import"./TearsheetNarrow-C4W1oO-J.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-B_Y_THsI.js.map
