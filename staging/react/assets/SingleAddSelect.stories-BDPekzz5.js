import{e,S as c,r as d,B as u}from"./iframe-BCQS5_Al.js";import{S as s}from"./SingleAddSelect-D8ht2oAE.js";import"./devtools-BnxPUADb.js";import"./props-helper-BMnMmxLT.js";import"./AddSelect-47D0dpv2.js";import"./Tag-FHKzdPo3.js";import"./DefinitionTooltip-B8pPQwHf.js";import"./index-C48XjYHO.js";import"./bucket-18-DXk0sF99.js";import"./utils-no3s3AXY.js";import"./Text-BG1KUeND.js";import"./AccordionItem-Da3t-MbS.js";import"./NoDataEmptyState-CbpoqgOn.js";import"./EmptyState-BZkXwjor.js";import"./EmptyStateV2.deprecated-CJ5xGOxC.js";import"./Link-C98KlpiF.js";import"./index-OfZkcaMw.js";import"./NoDataIllustration-sZS7qjTO.js";import"./useId-DiFn3R-L.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-C9eEx1nD.js";import"./bucket-13-DfemzzhA.js";import"./Dropdown-B0wBVDRR.js";import"./index-D9TBFdHI.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-Bn8H75JH.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-PZtVqhwH.js";import"./MultiSelect-BPmu86gl.js";import"./Checkbox-Cfr6AEd4.js";import"./index-CdXMAzYd.js";import"./LayerContext-CVvjLuUj.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DW1IucsG.js";import"./TooltipTrigger-DzdBl5YU.js";import"./bucket-7-BgA2t6hd.js";import"./bucket-14-BQhkeLU9.js";import"./Search-CBYfLWWC.js";import"./bucket-15-CBzffSSV.js";import"./MenuItem-Yg3ilBaI.js";import"./useControllableState-CqyXdKnA.js";import"./useAttachedMenu-BABmdu1_.js";import"./bucket-2-CBnjIFj8.js";import"./index-D19lx2Ep.js";import"./wrapFocus-2z7irFo7.js";import"./useOutsideClick-Bns9MH_j.js";import"./bucket-1-pWlg4EMK.js";import"./bucket-6-BnWBUhiK.js";import"./ButtonSet-Cb_bUCa1.js";import"./DismissibleTag-COfCywV5.js";import"./NotFoundEmptyState-B5lH7ycl.js";import"./NotFoundIllustration--MNV-kTQ.js";import"./Tearsheet-gM-ZNv9q.js";import"./TearsheetShell-nt4rb1zZ.js";import"./useResizeObserver-B51VLK5G.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CMyFULfX.js";import"./index-BEhuL1MR.js";import"./InlineLoading-CTAg-ra2.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-BjdGxsCf.js";import"./usePortalTarget-Cyw6i5As.js";import"./index-BjeY-wZk.js";import"./useFocus-BJ5xmGfM.js";import"./usePreviousValue-C2-cz8-7.js";import"./useIsomorphicEffect-Dk79jGD5.js";import"./ActionSet-Bg9Z6v0o.js";import"./TearsheetNarrow-DH8CF6dX.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
