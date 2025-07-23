import{e,S as c,r as d,B as u}from"./iframe-C3VsvcP9.js";import{S as s}from"./SingleAddSelect-T2QXw4dS.js";import"./devtools-BjHf0isC.js";import"./props-helper-BrmPtLqI.js";import"./AddSelect-2pnh8_S-.js";import"./Tag-CkReqKIz.js";import"./DefinitionTooltip-CVPO1WqB.js";import"./index-2VSnzl5A.js";import"./bucket-18-Ctp_kJlg.js";import"./utils-DTYRHBXP.js";import"./Text-Deo-qbq3.js";import"./AccordionItem-BcdTncBK.js";import"./NoDataEmptyState-Bu73g3HU.js";import"./EmptyState-BvBgcN9F.js";import"./Link-VBwvbQXg.js";import"./index-BEVy0Ul0.js";import"./EmptyStateV2-D5RVLTjr.js";import"./NoDataIllustration-DfWjDa5F.js";import"./useId-YTeng8i2.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-XCuyP6-W.js";import"./bucket-12-DrtzkUGW.js";import"./Dropdown-JmpdO0OT.js";import"./index-BwfDabtT.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-QDgbKXU5.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-DdtfpNln.js";import"./MultiSelect-BOcX-1MQ.js";import"./Checkbox-7GlD-LN-.js";import"./index-BE_xx21s.js";import"./LayerContext-BU_ygKHE.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-BiOytaZ0.js";import"./TooltipTrigger-5JLAEkYQ.js";import"./bucket-7-CawwMIPp.js";import"./bucket-14-BSNImc6g.js";import"./Search-CZ7Xq8Hj.js";import"./bucket-15-7qvePeJD.js";import"./MenuItem-5zxM7A3O.js";import"./useControllableState-BJB23Zhp.js";import"./useAttachedMenu-BlxDu2aa.js";import"./bucket-2-ClJ42iNs.js";import"./index-DoFt_alO.js";import"./wrapFocus-D809mY0y.js";import"./useOutsideClick-CD3FvkGX.js";import"./bucket-1-aSxP9hG3.js";import"./bucket-6-CZ4baeq2.js";import"./ButtonSet-DWufBl0Z.js";import"./DismissibleTag-Cou1xx-O.js";import"./NotFoundEmptyState-Dt5Wigi8.js";import"./NotFoundIllustration-B6kP1sV2.js";import"./Tearsheet-BG14KiQD.js";import"./TearsheetShell-CE-It0H-.js";import"./useResizeObserver-BR_0OKz2.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CKf6hdHj.js";import"./index-BEhuL1MR.js";import"./InlineLoading-CTBjshum.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-BzA3_VJX.js";import"./usePortalTarget-BdGFdCd6.js";import"./index-C3eFE35T.js";import"./useFocus-B1bLZwJr.js";import"./usePreviousValue-Bc_HSeid.js";import"./useIsomorphicEffect-X37BQc6H.js";import"./ActionSet-ClQ4Ohv5.js";import"./TearsheetNarrow-BuaCGBCf.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
