import{e,S as c,r as d,B as u}from"./iframe-CoewCovk.js";import{S as s}from"./SingleAddSelect-DxDz0RNp.js";import"./devtools-9nvRWAoA.js";import"./props-helper-BRgWXp0Z.js";import"./AddSelect-Qkszfq8D.js";import"./Tag-DLc7aXsJ.js";import"./DefinitionTooltip-CDCcENL2.js";import"./index-CsmjhMFW.js";import"./bucket-18-BpzWYukX.js";import"./utils-Bp6ze_2p.js";import"./Text-Db5H-8py.js";import"./AccordionItem-DRYCMcXS.js";import"./NoDataEmptyState-DCdnEpTU.js";import"./EmptyState-CBI53Yk2.js";import"./EmptyStateV2.deprecated-rfGhLqIl.js";import"./Link-CnJKU312.js";import"./index-Dci_9JXV.js";import"./NoDataIllustration-VGamBxGL.js";import"./useId-BX45mjmh.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DKly1MJY.js";import"./bucket-13-kEbwoQWW.js";import"./Dropdown-BS8RCd8O.js";import"./index-Lu5ZCrUL.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CPXwcYYq.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-DKxd3UR5.js";import"./MultiSelect-CfuJ0_2a.js";import"./Checkbox-DeqUwwo0.js";import"./index-Cyg7a7UP.js";import"./LayerContext-kuW0qxpN.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DLikXobE.js";import"./TooltipTrigger-zmfBqZ8V.js";import"./bucket-7-Dj2rYaKi.js";import"./bucket-14-BpzSdjlW.js";import"./Search-B8UI4Fvk.js";import"./bucket-15-4skPNO3q.js";import"./MenuItem-BE_TxASK.js";import"./useControllableState-DaEX3sx9.js";import"./useAttachedMenu-DisMwIU8.js";import"./bucket-2-CtVldtpu.js";import"./index-Db7cgiYO.js";import"./wrapFocus-COQpSXAY.js";import"./useOutsideClick-BjkaPmco.js";import"./bucket-1-y7LosGnP.js";import"./bucket-6-CLYzFK7W.js";import"./ButtonSet-Cr-Fqob5.js";import"./DismissibleTag-IWYoLcTb.js";import"./NotFoundEmptyState-xz8YSirE.js";import"./NotFoundIllustration-KMs4-bG1.js";import"./Tearsheet-B9Pw9A76.js";import"./TearsheetShell-Bey2ONQ1.js";import"./useResizeObserver-C89b-FZh.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-D1Nxft6T.js";import"./index-BEhuL1MR.js";import"./InlineLoading-B2eXnIkW.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-DGZ4AszG.js";import"./usePortalTarget-DXZ_VUkb.js";import"./index-DERjXm5w.js";import"./useFocus-BjhHFv5X.js";import"./usePreviousValue-CF6xtt65.js";import"./useIsomorphicEffect-Cawv2SLq.js";import"./ActionSet-d0WjR72l.js";import"./TearsheetNarrow-DWdzvFXY.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
