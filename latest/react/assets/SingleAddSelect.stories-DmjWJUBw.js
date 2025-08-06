import{e,S as c,r as d,B as u}from"./iframe-BIFZhnVI.js";import{S as s}from"./SingleAddSelect-Dh7sGVK4.js";import"./devtools-CwY7Nwoz.js";import"./props-helper-DjmSBFn9.js";import"./AddSelect-BXOsc0wh.js";import"./Tag-Dt3sXznE.js";import"./DefinitionTooltip-CFqcVxyo.js";import"./index-f5OplNpe.js";import"./bucket-18-gGZYZqnV.js";import"./utils-Dr8OqWgi.js";import"./Text-De_FGo-w.js";import"./AccordionItem-DUCphrnj.js";import"./NoDataEmptyState-PpjlCL-m.js";import"./EmptyState-Coy_-JQD.js";import"./EmptyStateV2-C0zlLdVw.js";import"./Link-D35FEmIt.js";import"./index-Cadwwfc1.js";import"./NoDataIllustration-D8JES9HQ.js";import"./useId-C3GxNxEZ.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DBV-gce7.js";import"./bucket-12-Dw8KRV1d.js";import"./Dropdown-DEWyiB4Z.js";import"./index-DGan2qnv.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CFAm_7fa.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-BZJlF_R9.js";import"./MultiSelect-CWe0g1Uo.js";import"./Checkbox-DDtP4ZQv.js";import"./index-YsSTEGS5.js";import"./LayerContext-F4WW4Vix.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-4SqwYFiy.js";import"./TooltipTrigger-DWECKQAZ.js";import"./bucket-7-BZOQq6pn.js";import"./bucket-14-CaGhjY69.js";import"./Search-DEL4HtAI.js";import"./bucket-15-DlwXdW_V.js";import"./MenuItem-DIiYNEEd.js";import"./useControllableState-BX4U6x41.js";import"./useAttachedMenu-C5NN-QeW.js";import"./bucket-2-CqoFS1Sx.js";import"./index-B07VMW4b.js";import"./wrapFocus-Cv59NQgU.js";import"./useOutsideClick-BnL9xlTI.js";import"./bucket-1-CXEoC0iP.js";import"./bucket-6-D78KEThR.js";import"./ButtonSet-BoMgkE12.js";import"./DismissibleTag-DZT3OLx0.js";import"./NotFoundEmptyState-BXqnSAGu.js";import"./NotFoundIllustration-kgt-4xOe.js";import"./Tearsheet-Ks2SW8hD.js";import"./TearsheetShell-DprdQp4w.js";import"./useResizeObserver-BEXCT2dX.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BRvJkANc.js";import"./index-BEhuL1MR.js";import"./InlineLoading-D2bFvRJo.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-VoqUg_AJ.js";import"./usePortalTarget-BsUxYanV.js";import"./index-DEXbOqQ6.js";import"./useFocus-Bpz0egyf.js";import"./usePreviousValue-CmKce-sY.js";import"./useIsomorphicEffect-BtioHI2r.js";import"./ActionSet-CJUwVbYk.js";import"./TearsheetNarrow-I5A_vwQS.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
