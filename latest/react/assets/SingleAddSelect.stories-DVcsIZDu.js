import{e,S as c,r as d,B as u}from"./iframe-D7eStwkL.js";import{S as s}from"./SingleAddSelect-DSrv6ah7.js";import"./devtools-Df6KS5y3.js";import"./props-helper-CnDIRZfz.js";import"./AddSelect-UtxaS-cV.js";import"./Tag-DTggSZHJ.js";import"./DefinitionTooltip-8CBhbmfn.js";import"./index-DtlUN_qQ.js";import"./bucket-18-BuJkdNpM.js";import"./utils-DEi-HpEF.js";import"./Text-CX3SBrnk.js";import"./AccordionItem-DuCHsT_A.js";import"./NoDataEmptyState-DoR7awrm.js";import"./EmptyState-y4UqLOac.js";import"./EmptyStateV2-BAe4fjrU.js";import"./Link-C9tp-_WB.js";import"./index-D6e51nWM.js";import"./NoDataIllustration-DyB9Ji-a.js";import"./useId-Df4HKPCr.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-9FSdE4nq.js";import"./bucket-12-CmVKm9rs.js";import"./Dropdown-CrE-YZp3.js";import"./index-7ZA3mLov.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DZrds_Pd.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-CU-7ragV.js";import"./MultiSelect-C82-1bLi.js";import"./Checkbox-Bb4PbV8H.js";import"./index-BwtNW634.js";import"./LayerContext-CYpz3aOG.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-JpbdD__r.js";import"./TooltipTrigger-0haCuwzD.js";import"./bucket-7-DwZZBlSx.js";import"./bucket-14-Dc70y2tn.js";import"./Search-DgqxHkqe.js";import"./bucket-15-CglRR68z.js";import"./MenuItem-DyqZFAAw.js";import"./useControllableState-Nc8tGw_d.js";import"./useAttachedMenu-B_FBdv8W.js";import"./bucket-2-B5tEtBVG.js";import"./index-mKbH19hl.js";import"./wrapFocus-BaNPWWSx.js";import"./useOutsideClick-C7cVWqUY.js";import"./bucket-1-Br50AaUq.js";import"./bucket-6-VqTa2pt7.js";import"./ButtonSet-DFPcwcVc.js";import"./DismissibleTag-BIGbYbYR.js";import"./NotFoundEmptyState-B5TfFXfG.js";import"./NotFoundIllustration-BV8LbgcU.js";import"./Tearsheet-y8_CYKgT.js";import"./TearsheetShell-BpoZHM47.js";import"./useResizeObserver-BMrbGDWb.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-Dj2JxVd0.js";import"./index-BEhuL1MR.js";import"./InlineLoading-D_3KuMGG.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-Cdz-8Rez.js";import"./usePortalTarget-B_qSnmJh.js";import"./index-D-rF9mbQ.js";import"./useFocus-1EvV_sw2.js";import"./usePreviousValue-BasY3WUO.js";import"./useIsomorphicEffect-DXbKZHyj.js";import"./ActionSet-CudTZLam.js";import"./TearsheetNarrow-DVxpozef.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
