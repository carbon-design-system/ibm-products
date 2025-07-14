import{e,S as c,r as d,B as u}from"./iframe-Cbdf71kV.js";import{S as s}from"./SingleAddSelect--P_wkKR4.js";import"./devtools-BsT0_Owc.js";import"./props-helper-DqfsKzpa.js";import"./AddSelect-L6nqs5GF.js";import"./Tag-nqTZA0wF.js";import"./DefinitionTooltip-CJlV5yRZ.js";import"./index-DgPdVJKo.js";import"./bucket-18-DV2Au_NX.js";import"./utils-Rl5Zs1h-.js";import"./Text-ByKyVd5E.js";import"./AccordionItem-BVcrCqLd.js";import"./NoDataEmptyState-Dxz0XsqI.js";import"./EmptyState-a2h_WSAg.js";import"./Link-CCRD-roz.js";import"./index-C7uzh38o.js";import"./EmptyStateV2-B_pFntri.js";import"./NoDataIllustration-aAGauCbj.js";import"./useId-DuEKhUSL.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BT4Vz5CP.js";import"./bucket-12-Bk4MPs7x.js";import"./Dropdown-CaUv9lOM.js";import"./index-BhC_9JVN.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-ChOR-8Xx.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-CLDj7gXe.js";import"./MultiSelect-BrY82tK2.js";import"./Checkbox-BvGpbVrt.js";import"./index-QS6KczTe.js";import"./LayerContext-CszjMr56.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-BdQvxdfR.js";import"./TooltipTrigger-CHXAXfje.js";import"./bucket-7-PHG--wod.js";import"./bucket-14-DJq4_6YR.js";import"./Search-C7JQKTZg.js";import"./bucket-15-ChlaTHT7.js";import"./MenuItem-Bo2vpwwn.js";import"./useControllableState-DbGBZOCF.js";import"./useAttachedMenu-C1kZRlVt.js";import"./bucket-2-D5C3PV8a.js";import"./index-C0spF9CE.js";import"./wrapFocus-bi0LZfCr.js";import"./useOutsideClick-CMmEFlbp.js";import"./bucket-1-UwX97pQm.js";import"./bucket-6-BiOweKob.js";import"./ButtonSet-BMY4CLjn.js";import"./DismissibleTag-BEWryI1z.js";import"./NotFoundEmptyState-gX1ruwky.js";import"./NotFoundIllustration-O2rP2xrO.js";import"./Tearsheet-Dn_jgr-W.js";import"./TearsheetShell-DI3dHXhx.js";import"./useResizeObserver-CHiKmAS_.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Bq5ZjMWK.js";import"./index-BEhuL1MR.js";import"./InlineLoading-DLaaz_4f.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-DqktJTTy.js";import"./usePortalTarget-D9BcsXEH.js";import"./index-B1vwz3bX.js";import"./useFocus-DEs0yeUq.js";import"./usePreviousValue-DaZSyAQn.js";import"./useIsomorphicEffect-BHn7yZvq.js";import"./ActionSet-DUU_jnHS.js";import"./TearsheetNarrow-DXCPSXxE.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
