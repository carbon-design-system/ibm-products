import{e,S as c,r as d,B as u}from"./iframe-DKsKIeO_.js";import{S as s}from"./SingleAddSelect-C37-GTmI.js";import"./devtools-Bn3omVKL.js";import"./props-helper-CC7b4v3b.js";import"./AddSelect-DK6WdVer.js";import"./Tag-ByT5Z9aM.js";import"./DefinitionTooltip-62O3uvQ_.js";import"./index-zH3n7d5W.js";import"./bucket-18-DCBnxAKD.js";import"./utils-BNH49ZRR.js";import"./Text-DWkOwfBd.js";import"./AccordionItem--x4dxrtI.js";import"./NoDataEmptyState-XVEeo0Bq.js";import"./EmptyState-wViNJKuF.js";import"./EmptyStateV2.deprecated-BpJMV6nf.js";import"./Link-DPOhQJ5Q.js";import"./index-Do60dg14.js";import"./NoDataIllustration-CxpZ_fEc.js";import"./useId-DN3dyYk2.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-C0B-YysJ.js";import"./bucket-13-NrRSRe7I.js";import"./Dropdown-mBk2AehQ.js";import"./index-CQX_odjL.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DnXssUoQ.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-CjGrDCAa.js";import"./MultiSelect-oe5NxaTz.js";import"./Checkbox-CVRUThck.js";import"./index-CDQbx0x2.js";import"./LayerContext-NMcPk0Nw.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-1QB3TEH2.js";import"./TooltipTrigger-hlUgaDR7.js";import"./bucket-7-ZHd8Hq_g.js";import"./bucket-14-D4sfvfzO.js";import"./Search-B5qeZUes.js";import"./bucket-15-DC9m_l6j.js";import"./MenuItem-C7wXSQ0S.js";import"./useControllableState-DfPh9Ar9.js";import"./useAttachedMenu-BjAAxBze.js";import"./bucket-2-BMfBeLco.js";import"./index-Ca_0obo9.js";import"./wrapFocus-DEXO-vbF.js";import"./useOutsideClick-yet8EmE5.js";import"./bucket-1-CTMMvGsV.js";import"./bucket-6-BDZoIsJJ.js";import"./ButtonSet-B47ramhY.js";import"./DismissibleTag-BIVmDsJ-.js";import"./NotFoundEmptyState-DCarVAL4.js";import"./NotFoundIllustration-D0ijBfZA.js";import"./Tearsheet-CYYyLBbn.js";import"./TearsheetShell-BE6NJ0k6.js";import"./useResizeObserver-CBxb5I5g.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-B2ovIMVM.js";import"./index-BEhuL1MR.js";import"./InlineLoading-p56X7jsD.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-IseX1EVB.js";import"./usePortalTarget-Dftb10Sg.js";import"./index-KIjfM1LT.js";import"./useFocus-CkthKn4P.js";import"./usePreviousValue-CMAapDDk.js";import"./useIsomorphicEffect-0hnIMifz.js";import"./ActionSet-G6HtkfUk.js";import"./TearsheetNarrow-C2XT-l8A.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
