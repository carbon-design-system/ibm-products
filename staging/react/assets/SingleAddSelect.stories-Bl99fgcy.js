import{e,S as c,r as d,B as u}from"./iframe-BM8UuOT_.js";import{S as s}from"./SingleAddSelect-Diud3D6n.js";import"./devtools-fbh1mIbq.js";import"./props-helper-eWZkA9vW.js";import"./AddSelect-kkDu_4m_.js";import"./Tag-CTiB40Z6.js";import"./Text-Bp2pW92U.js";import"./DefinitionTooltip-BAxDhLZV.js";import"./index-B2-UkdcH.js";import"./bucket-18-BWfaT1BD.js";import"./utils-DEU5vRWz.js";import"./AccordionItem-DgrNAC2C.js";import"./NoDataEmptyState-C0uKIYNF.js";import"./EmptyState-DWctqMgr.js";import"./EmptyStateV2.deprecated-CVgK2xip.js";import"./Link-C2kVZQrV.js";import"./index-DFhDnDPk.js";import"./NoDataIllustration-Dau-drCS.js";import"./useId-CZDnw4d1.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-EjTGjXxK.js";import"./bucket-13-BX7KSF27.js";import"./Dropdown-hT-OjNB0.js";import"./index-DlLSDJCX.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-BxAlDPBq.js";import"./mergeRefs-BZpmU3mx.js";import"./defaultItemToString-zSItMTD_.js";import"./bucket-19-C2Jy_3fG.js";import"./MultiSelect-B6haW9Ug.js";import"./Checkbox-taXQVqsi.js";import"./index-Dkc_HWs6.js";import"./LayerContext-kWUz0ybk.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-TKqIVrcm.js";import"./TooltipTrigger-S2ovmjAm.js";import"./bucket-7-BBzHZeZe.js";import"./bucket-14-DbRvuHeU.js";import"./Search-DvUYMInW.js";import"./bucket-15-CI4BnjUX.js";import"./MenuItem-BjTLsKut.js";import"./useControllableState-_39iz1-m.js";import"./useAttachedMenu-CdxBgQP6.js";import"./bucket-2-DIBgyTH9.js";import"./index-CIBJun7w.js";import"./wrapFocus-BZutPaRn.js";import"./useOutsideClick-B5AOX-v8.js";import"./bucket-1-BI-qRii9.js";import"./bucket-6-Ce-CpZ2t.js";import"./ButtonSet-keZYC8CP.js";import"./DismissibleTag-CcMOVHV_.js";import"./NotFoundEmptyState-CZfJntYE.js";import"./NotFoundIllustration-BdAW901M.js";import"./Tearsheet-CPWpfXdn.js";import"./TearsheetShell-Br_-XOX5.js";import"./useResizeObserver-COxcZdgh.js";import"./useIsomorphicEffect-C12-vK0M.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DQU04RjK.js";import"./InlineLoading-CV8Tykr1.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-u3Oz-LI9.js";import"./usePortalTarget-CjNuplPl.js";import"./index-UeJBVBy7.js";import"./useFocus-DW5dpJXt.js";import"./usePreviousValue-CLpMaOaT.js";import"./ActionSet-DKcPl8ho.js";import"./TearsheetNarrow-CweKJsBw.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-Bl99fgcy.js.map
