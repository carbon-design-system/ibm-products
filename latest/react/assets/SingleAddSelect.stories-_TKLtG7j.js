import{e,S as c,r as d,B as u}from"./iframe-Cff_uvRq.js";import{S as s}from"./SingleAddSelect-Dgb2YPup.js";import"./devtools-CBto78fy.js";import"./props-helper-BGCgvcot.js";import"./AddSelect-C1AoFqaA.js";import"./Tag-wjfQ9aRE.js";import"./DefinitionTooltip-C-WJpm3J.js";import"./index-A0BY4CbF.js";import"./bucket-18-DKBL0two.js";import"./utils-DxZkHSRU.js";import"./Text-BeripsbQ.js";import"./AccordionItem-Z1gAU3Jl.js";import"./NoDataEmptyState-DGuOpy4Z.js";import"./EmptyState-DgZd044g.js";import"./EmptyStateV2.deprecated-D7X5CUrb.js";import"./Link-BiS54jbp.js";import"./index-zgZhWPlI.js";import"./NoDataIllustration-C1SQ5hMp.js";import"./useId-QkOHumEp.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-CZ3KX4AC.js";import"./bucket-13-BlWKUG9u.js";import"./Dropdown-DvdXtL-Z.js";import"./index-DPBR-kvc.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-Bz91-0Aj.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-rzwpXw_n.js";import"./MultiSelect-BOGN5svO.js";import"./Checkbox-BB_T_On_.js";import"./index-BbMc6LY2.js";import"./LayerContext-aHU3kOUM.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-BJ7vcPEl.js";import"./TooltipTrigger-xu_my-hx.js";import"./bucket-7-BBQiCCMO.js";import"./bucket-14-BS7hPKin.js";import"./Search-BvuodLuk.js";import"./bucket-15-CPqQg4NJ.js";import"./MenuItem-DD03fVLn.js";import"./useControllableState-Ch9LF6fw.js";import"./useAttachedMenu-DpgeAf5_.js";import"./bucket-2-DFOEsNXn.js";import"./index-Bb_U4bQM.js";import"./wrapFocus-C0YgiTtk.js";import"./useOutsideClick-ogqAkNhv.js";import"./bucket-1-Cn2Vz24_.js";import"./bucket-6-Bvs71sA4.js";import"./ButtonSet-BsWxyNA0.js";import"./DismissibleTag-C3Le-g1Y.js";import"./NotFoundEmptyState-BqQxw90R.js";import"./NotFoundIllustration-CA56_qWn.js";import"./Tearsheet-D1bEoRx4.js";import"./TearsheetShell-BlQlb1Y3.js";import"./useResizeObserver-BVjEDJaE.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CLMfRped.js";import"./index-BEhuL1MR.js";import"./InlineLoading-Xj1uHorY.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-CquFYBfG.js";import"./usePortalTarget-Bg_OfAIC.js";import"./index-DfVNWw9q.js";import"./useFocus-D1ADdBuI.js";import"./usePreviousValue-CRGd6dk3.js";import"./useIsomorphicEffect-Dc9ng1CU.js";import"./ActionSet-Dwek2kBo.js";import"./TearsheetNarrow-C4_MmTK0.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
