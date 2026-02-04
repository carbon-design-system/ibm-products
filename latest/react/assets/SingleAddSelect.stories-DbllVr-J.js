import{e,S as c,r as d,B as u}from"./iframe-BBf3bqTv.js";import{S as s}from"./SingleAddSelect-BucBp4Vp.js";import"./preload-helper-D9Z9MdNV.js";import"./devtools-c2gfrTL0.js";import"./props-helper-CYOz70En.js";import"./AddSelect-BXq2vNjz.js";import"./Tag-Dhuk6mzi.js";import"./Text-CaNb5F2n.js";import"./DefinitionTooltip-D6H_RviI.js";import"./index-DOwP6x5e.js";import"./bucket-19-zmdOpOwk.js";import"./utils-BgfmaY2S.js";import"./AccordionItem-CADLo6EL.js";import"./NoDataEmptyState-0zoIvmyQ.js";import"./EmptyState-D-YP1Etv.js";import"./EmptyStateV2.deprecated-CLCET4gM.js";import"./Link-qk3ncX2u.js";import"./index-7K8oyqWX.js";import"./NoDataIllustration-DaITKjDr.js";import"./useId-BfWl2o0S.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-CsQ7MXUh.js";import"./bucket-13-h41i3c0G.js";import"./Dropdown-BaNsfuLx.js";import"./index-C9bxGSfS.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CW3fTVyM.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-BgZ5uQfL.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-Cw-UfjV_.js";import"./Checkbox-CFWURQEX.js";import"./index-CbeIurAw.js";import"./LayerContext-BOWqFdTq.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-Ddp81q4_.js";import"./TooltipTrigger-DsTD6yE8.js";import"./bucket-7-BPudp2JA.js";import"./bucket-14-B8ZTzdcx.js";import"./Search-Cp-mgmER.js";import"./bucket-15-BCSW9ZGk.js";import"./MenuItem-CtjsENDt.js";import"./useControllableState-DY2q8Reb.js";import"./useAttachedMenu-tCJ9pwqm.js";import"./bucket-2-4NArCtKQ.js";import"./index-Kk4BUWQg.js";import"./wrapFocus-DaSELL9x.js";import"./useOutsideClick-DliSUker.js";import"./bucket-1-DySQS0Gd.js";import"./ButtonSet-C3GUdjVj.js";import"./DismissibleTag-BLhYz9T-.js";import"./NotFoundEmptyState-BpEfywk3.js";import"./NotFoundIllustration-CMoKrDk4.js";import"./Tearsheet-CHNI1rWR.js";import"./TearsheetShell-D6-OMKbK.js";import"./useResizeObserver-CVVoysON.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BW2ljFCb.js";import"./InlineLoading-Iu2BiOBt.js";import"./bucket-6-TRoxTq9G.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-BwGjSwQP.js";import"./usePortalTarget-wcltUqTk.js";import"./index-hrngNdBX.js";import"./useFocus-BlxCTRT7.js";import"./usePreviousValue-Bzpu_MqH.js";import"./ActionSet-ByaSX0Ns.js";import"./TearsheetNarrow-M2rtEqTy.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const De={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...i.parameters?.docs?.source}}};const Le=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,Le as __namedExportsOrder,De as default};
//# sourceMappingURL=SingleAddSelect.stories-DbllVr-J.js.map
