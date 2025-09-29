import{e,S as c,r as d,B as u}from"./iframe-BfCV3bOI.js";import{S as s}from"./SingleAddSelect-J19uL4X_.js";import"./devtools-mGs0wnY2.js";import"./props-helper-B1pqY6OD.js";import"./AddSelect-CG05CJVn.js";import"./Tag-NIrrbvG7.js";import"./DefinitionTooltip-BKrU3q75.js";import"./index-CErJu9sK.js";import"./bucket-18-C-6Yai3b.js";import"./utils-DPQn4WAo.js";import"./Text-CfUeD5YQ.js";import"./AccordionItem-C-x_NN9b.js";import"./NoDataEmptyState-DIv675NA.js";import"./EmptyState-uM4OJknX.js";import"./EmptyStateV2.deprecated-g_CB9kyt.js";import"./Link-DwEnb7bw.js";import"./index-Rp0dLXSw.js";import"./NoDataIllustration-DwplAzsf.js";import"./useId-Bnc4iy3Y.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-IHncIJd-.js";import"./bucket-13-nosdxnow.js";import"./Dropdown-BBIIB9NB.js";import"./index-HRsRazA4.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DqvfHl8l.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-DXGPPlEX.js";import"./MultiSelect-CDCE22uF.js";import"./Checkbox-Bpl7rgf3.js";import"./index-DCClf6mH.js";import"./LayerContext-8SWqIeSi.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-XDTJrsiJ.js";import"./TooltipTrigger-DPEgsGHb.js";import"./bucket-7-BlpeiSNu.js";import"./bucket-14-COfNRyTY.js";import"./Search-DoApKEoI.js";import"./bucket-15-B07QhFi5.js";import"./MenuItem-CmMwkeOB.js";import"./useControllableState-DFU9FhNB.js";import"./useAttachedMenu-4VE0fpzo.js";import"./bucket-2-DscS7k4t.js";import"./index-Dgw2jygY.js";import"./wrapFocus-CtpBtbaA.js";import"./useOutsideClick-U-60qH6M.js";import"./bucket-1-59toT3oJ.js";import"./bucket-6-BUNG1ZbU.js";import"./ButtonSet-DRScrKx_.js";import"./DismissibleTag-DaGnLvfq.js";import"./NotFoundEmptyState-B2dSBol2.js";import"./NotFoundIllustration-DkmUMrFP.js";import"./Tearsheet-CwUdjVYB.js";import"./TearsheetShell-eInN9xZ0.js";import"./useResizeObserver-7trOekg4.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DDr7rI1V.js";import"./index-BEhuL1MR.js";import"./InlineLoading-BCFikEd9.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-CEArbgLa.js";import"./usePortalTarget-DJLB0SuP.js";import"./index-2L8Eb6nd.js";import"./useFocus-CKBx_p50.js";import"./usePreviousValue-CIIC2c5_.js";import"./useIsomorphicEffect-CGC_2bjf.js";import"./ActionSet-BqEOyzaW.js";import"./TearsheetNarrow-DkXfCOf3.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
