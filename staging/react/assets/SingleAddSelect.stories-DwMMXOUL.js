import{e,S as c,r as d,B as u}from"./iframe-BixY_nzU.js";import{S as s}from"./SingleAddSelect-CnDURWZv.js";import"./devtools-BgBiig7t.js";import"./props-helper-nJuZcXxg.js";import"./AddSelect-Cv2huuml.js";import"./Tag-CbXFe4uz.js";import"./DefinitionTooltip-C5zZShyp.js";import"./index-KoxcOYkd.js";import"./bucket-18-Cm0L4bq5.js";import"./utils-CYmHZlgn.js";import"./Text-B6SqPZCe.js";import"./AccordionItem-nAc0ALKG.js";import"./NoDataEmptyState-D3JQoXKy.js";import"./EmptyState-By9fZsJk.js";import"./EmptyStateV2-B8Eg_jZc.js";import"./Link-trOFoxkZ.js";import"./index-D8hxD1Y6.js";import"./NoDataIllustration-ePnik9lE.js";import"./useId-CEgnz6Ws.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-xTy3Wxv8.js";import"./bucket-12-C20f3iiV.js";import"./Dropdown-CA737wZu.js";import"./index-DGezsfQe.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-ChfRT5-9.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-BnR_hMr3.js";import"./MultiSelect-DU3po3NM.js";import"./Checkbox-CrO2TYcW.js";import"./index-Dioc7bXy.js";import"./LayerContext-C8JKjCPJ.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-r9epZwYO.js";import"./TooltipTrigger-CCg5DkE0.js";import"./bucket-7-BMRx2xk3.js";import"./bucket-14-julK-VHp.js";import"./Search-DgkMjmaf.js";import"./bucket-15-CR51sp2K.js";import"./MenuItem-ZGtCy1zR.js";import"./useControllableState-DC7Ej6kn.js";import"./useAttachedMenu-BRh0V27n.js";import"./bucket-2-KtQy-gy7.js";import"./index-CCul1fp0.js";import"./wrapFocus-Bbgeg0Nx.js";import"./useOutsideClick-BEN9HQgE.js";import"./bucket-1-BHpIhqGK.js";import"./bucket-6-Ygy5YQ9m.js";import"./ButtonSet-B_zKP9xZ.js";import"./DismissibleTag-Dankl3fz.js";import"./NotFoundEmptyState-Di5etujk.js";import"./NotFoundIllustration-BiHuHUk_.js";import"./Tearsheet-2H90TATG.js";import"./TearsheetShell-DRNQqiiX.js";import"./useResizeObserver-w6LHWa3u.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-C-yJmSnV.js";import"./index-BEhuL1MR.js";import"./InlineLoading-D56yXy8d.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-DOMVA_GN.js";import"./usePortalTarget-DYGy-m0K.js";import"./index-oT-iZzBF.js";import"./useFocus-BLVDorXY.js";import"./usePreviousValue-CTSbRzqP.js";import"./useIsomorphicEffect-BzCQADVB.js";import"./ActionSet-BU7FdDgm.js";import"./TearsheetNarrow-kMnJ567f.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
