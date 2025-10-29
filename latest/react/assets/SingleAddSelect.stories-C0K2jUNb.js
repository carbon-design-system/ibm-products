import{e,S as c,r as d,B as u}from"./iframe-B06X_oSn.js";import{S as s}from"./SingleAddSelect-Ddwe8Bxi.js";import"./devtools-BYTU908B.js";import"./props-helper-CTf-A1om.js";import"./AddSelect-CtXAeLpM.js";import"./Tag-WKxTmgqK.js";import"./DefinitionTooltip-PpE6ZZSr.js";import"./index-BYuspRHq.js";import"./bucket-18-hOSj86Ex.js";import"./utils-CAn8HyWE.js";import"./Text-BNZPVZMz.js";import"./AccordionItem-CfOaNMpL.js";import"./NoDataEmptyState-B4lhXCHd.js";import"./EmptyState-8hsF-QY9.js";import"./EmptyStateV2.deprecated-BkZ-C1N-.js";import"./Link-DbpUCrpK.js";import"./index-Bo2paA6_.js";import"./NoDataIllustration-DisLshay.js";import"./useId-BAfT9MjJ.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DVUHoFcS.js";import"./bucket-13-Cf4diNHv.js";import"./Dropdown-D9S0rVlu.js";import"./index-BRivBB8X.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CV1tIC8k.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-DIBHTWkV.js";import"./MultiSelect-C4X_Ukqa.js";import"./Checkbox-9HmCQOfr.js";import"./index-B0VEw6cB.js";import"./LayerContext-CMp3yckT.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-CXbvoOzV.js";import"./TooltipTrigger-C6lQCTQo.js";import"./bucket-7-mkInqmAK.js";import"./bucket-14-Br7jBy00.js";import"./Search-Do8DlnXk.js";import"./bucket-15-uKcem5Zx.js";import"./MenuItem-C094aA21.js";import"./useControllableState-CVLdOTaw.js";import"./useAttachedMenu-BK1NY8rH.js";import"./bucket-2-DTaJ0mg9.js";import"./index-C-Kp80_u.js";import"./wrapFocus-BbzW8Hks.js";import"./useOutsideClick-CyPXp_NH.js";import"./bucket-1-bKXnQraS.js";import"./bucket-6-CXHwg_52.js";import"./ButtonSet-oAVNqJ7O.js";import"./DismissibleTag-BfWHynv2.js";import"./NotFoundEmptyState-HgaMVIcv.js";import"./NotFoundIllustration-CEZMgiBE.js";import"./Tearsheet-CePMml5k.js";import"./TearsheetShell-CTtBojwZ.js";import"./useResizeObserver-CDwlcMV3.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CwZ0Pnju.js";import"./InlineLoading-DpNzirJ0.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-BOtiQjkB.js";import"./usePortalTarget-Dhd837UD.js";import"./index-K6A31R8p.js";import"./useFocus-BsD4RQSy.js";import"./usePreviousValue-CKJ1yiIZ.js";import"./useIsomorphicEffect-Cw3FTHuQ.js";import"./ActionSet-jRuZbZ14.js";import"./TearsheetNarrow-CAeAYLS2.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Oe={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...i.parameters?.docs?.source}}};const ke=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,ke as __namedExportsOrder,Oe as default};
