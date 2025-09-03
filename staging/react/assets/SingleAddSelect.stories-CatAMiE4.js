import{e,S as c,r as d,B as u}from"./iframe-BlQ-LkYW.js";import{S as s}from"./SingleAddSelect-DeoAHWp6.js";import"./devtools-BJZSxg-N.js";import"./props-helper-DmAPJ46T.js";import"./AddSelect-mrbJj2Xh.js";import"./Tag-CsYb8P2P.js";import"./DefinitionTooltip-Ch2quHzY.js";import"./index-CgaasdUn.js";import"./bucket-18-Bl8QDCbK.js";import"./utils-BevHIbez.js";import"./Text-DSSpV4WJ.js";import"./AccordionItem-BhtMrcrS.js";import"./NoDataEmptyState-Ct01DPXx.js";import"./EmptyState-UEgZGf8z.js";import"./EmptyStateV2.deprecated-CJfAaoaS.js";import"./Link-CMYINvP1.js";import"./index-DNGc5teW.js";import"./NoDataIllustration-D99JvkUc.js";import"./useId-C2_b1b81.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-MNQyZhp_.js";import"./bucket-12-DYGdvqH1.js";import"./Dropdown-BvmhsKBp.js";import"./index-CXYHyzp2.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DkhQXZ0G.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-Ds7BYjit.js";import"./MultiSelect-B_rQyAfc.js";import"./Checkbox-KCN2jQ_S.js";import"./index-DZN9_q_B.js";import"./LayerContext-BvuXYV0V.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DJp0gzVb.js";import"./TooltipTrigger-OSww4Xu7.js";import"./bucket-7-DldHT251.js";import"./bucket-14-DLbuTogh.js";import"./Search-KyKbUvD4.js";import"./bucket-15-CM_J5Vvb.js";import"./MenuItem-Cde_w9Z-.js";import"./useControllableState-C05qBH-j.js";import"./useAttachedMenu-BakFN8R8.js";import"./bucket-2-BDIkUbzC.js";import"./index-VNwEaoKl.js";import"./wrapFocus-C2HPB9zJ.js";import"./useOutsideClick-DRiKtgqC.js";import"./bucket-1-DU5MGOmF.js";import"./bucket-6-C4pRq2Bl.js";import"./ButtonSet-BLtxr1g9.js";import"./DismissibleTag-Da7z3e6w.js";import"./NotFoundEmptyState-CExQFyMc.js";import"./NotFoundIllustration-B0zRLUCn.js";import"./Tearsheet-Bh1nDzzQ.js";import"./TearsheetShell-Bdk0FY1t.js";import"./useResizeObserver-w8n_UuuT.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CtswQ6eu.js";import"./index-BEhuL1MR.js";import"./InlineLoading-BiPU-E2v.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-Zd5LDKuM.js";import"./usePortalTarget-a9acdh7P.js";import"./index-DwBZIlXB.js";import"./useFocus-CTb6PBXw.js";import"./usePreviousValue-BfWd4m5G.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./ActionSet-DxtE6QvT.js";import"./TearsheetNarrow-D24bpYEv.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
