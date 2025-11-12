import{e,S as c,r as d,B as u}from"./iframe-DL4rv6Sk.js";import{S as s}from"./SingleAddSelect--DPOwWsp.js";import"./devtools-DjJC0kZ2.js";import"./props-helper-gcNr1tii.js";import"./AddSelect-D6fxnOSF.js";import"./Tag-C0IsdLhR.js";import"./Text-BLHpolkk.js";import"./DefinitionTooltip-FuJSB5-l.js";import"./index-DKpSrTTL.js";import"./bucket-18-DasBym7s.js";import"./utils-Cs9s9lyq.js";import"./AccordionItem-ENzMG0oJ.js";import"./NoDataEmptyState-BNE48fIJ.js";import"./EmptyState-DroN0Ebo.js";import"./EmptyStateV2.deprecated-C2lKMAHZ.js";import"./Link-BscjaeLg.js";import"./index-BjjzEPqz.js";import"./NoDataIllustration-DbcqDpZZ.js";import"./useId-BImvC5MC.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-CJuMv1pL.js";import"./bucket-13-cFnmK9fX.js";import"./Dropdown-CyUaYcPb.js";import"./index-SxnJxQcD.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-BcuiRe3h.js";import"./mergeRefs-BZpmU3mx.js";import"./defaultItemToString-zSItMTD_.js";import"./bucket-19-Yu9VpGqT.js";import"./MultiSelect-C9lrAlyX.js";import"./Checkbox-DRM5iQKY.js";import"./index-Dki116_N.js";import"./LayerContext-DNs21za5.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-BAN_ptBj.js";import"./TooltipTrigger-DaigCZxr.js";import"./bucket-7-BiGpzwL2.js";import"./bucket-14-DLpkyXtR.js";import"./Search-BGrfLMFt.js";import"./bucket-15-BI4sGmKb.js";import"./MenuItem-Cpai8mbK.js";import"./useControllableState-DHHb1dfh.js";import"./useAttachedMenu-D80ddK7-.js";import"./bucket-2-DWbjyfbr.js";import"./index-DtzGVvRZ.js";import"./wrapFocus-Dt-_dlb_.js";import"./useOutsideClick-DsRk1Hgy.js";import"./bucket-1-CkPu7SeY.js";import"./bucket-6-0n8zOi6E.js";import"./ButtonSet-DZW6ssTo.js";import"./DismissibleTag-BlaQjnkZ.js";import"./NotFoundEmptyState-BVMc0OMh.js";import"./NotFoundIllustration-BLLGz4Tp.js";import"./Tearsheet-C9vZ6q4u.js";import"./TearsheetShell-Dp4Uhj8P.js";import"./useResizeObserver-DlxIFv70.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BvVC1jwz.js";import"./InlineLoading-Cf_Gl0tC.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-C92y7cEl.js";import"./usePortalTarget-DYH9lnLV.js";import"./index-B2ykNYPT.js";import"./useFocus-D-Tfhy1Q.js";import"./usePreviousValue-Cageflr8.js";import"./useIsomorphicEffect-b9OUvWaC.js";import"./ActionSet-CP5R2yLL.js";import"./TearsheetNarrow-D2ssH-hf.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ke={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...i.parameters?.docs?.source}}};const De=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,De as __namedExportsOrder,ke as default};
