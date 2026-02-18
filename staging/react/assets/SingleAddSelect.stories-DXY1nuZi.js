import{e,S as c,r as d,B as u}from"./iframe-BbXUUjd_.js";import{S as s}from"./SingleAddSelect-CGNmX-9C.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-c1cFm99f.js";import"./props-helper-DXuQWHiI.js";import"./AddSelect-BGx5u6KM.js";import"./Tag-DVW51ef6.js";import"./Text-Bbz3GFY2.js";import"./DefinitionTooltip-D1ZjE1pE.js";import"./index-5wdsmiYB.js";import"./bucket-19-D_AfXLYY.js";import"./utils-BOvPdNkn.js";import"./AccordionItem-DicmOdSc.js";import"./NoDataEmptyState-fPsD1muL.js";import"./EmptyState-BzHeXB6p.js";import"./EmptyStateV2.deprecated-BGo5TH4f.js";import"./Link-Bbu9l37B.js";import"./index-Doz2zLLk.js";import"./NoDataIllustration-DpJVzVco.js";import"./useId-B_5ZULSM.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-WJv2hM9E.js";import"./bucket-13-DpTpFo6N.js";import"./Dropdown-2nePbHNc.js";import"./index-DJIZl_dZ.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DLymYVx5.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-B5K2lX4C.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-Bdg83ZaU.js";import"./Checkbox-DA1Tp4F1.js";import"./index-DcPoEpgU.js";import"./LayerContext-Bytv4zrP.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-BG4JW56H.js";import"./TooltipTrigger-CJEKzkMY.js";import"./bucket-7-DgIxtDP7.js";import"./bucket-14-BfDuqi5H.js";import"./Search-CziQ13Zm.js";import"./bucket-15-CBNpOkFH.js";import"./MenuItem-GM9cwDgU.js";import"./useControllableState-BZS90GNH.js";import"./useAttachedMenu-kpO217Y9.js";import"./environment-DRRHKtsv.js";import"./bucket-2-AIq4o4H9.js";import"./index-Bit37Dcs.js";import"./wrapFocus-Wym4UGgT.js";import"./useOutsideClick-DTSzTXra.js";import"./bucket-1-DLhfM8qe.js";import"./ButtonSet-BMnlZwEF.js";import"./DismissibleTag-Bn3_7Jv_.js";import"./NotFoundEmptyState-W6R8qNiE.js";import"./NotFoundIllustration-ZMhTjGkU.js";import"./Tearsheet-CyZuVXi_.js";import"./TearsheetShell-Bg_0pAgS.js";import"./useResizeObserver-C8GvvISo.js";import"./useIsomorphicEffect-Ckqx_rZa.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BkgIOMZV.js";import"./InlineLoading-D1aGZn20.js";import"./bucket-6-CfXH_CLd.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-CQHUcYTE.js";import"./usePortalTarget-Dap0Fhp-.js";import"./index-Ti0MHKIa.js";import"./useFocus-uDjtlbxG.js";import"./usePreviousValue-CCx64fdl.js";import"./ActionSet-D7S-ikyt.js";import"./TearsheetNarrow-OIJVsfM5.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]});a.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Le={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:s,tags:["autodocs"],parameters:{docs:{page:a}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},l={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:r=>console.log(r),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},n=(r,p)=>{const[m,o]=d.useState(p?.viewMode!=="docs");return e.createElement(e.Fragment,null,e.createElement(s,{...r,open:m,onClose:()=>o(!1)}),r?.noTearsheet===!1&&e.createElement(u,{onClick:()=>o(!0)},"Launch AddSelect"))},t=n.bind({});t.args={items:1,...l};const i=n.bind({});i.args={items:2,...l};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...i.parameters?.docs?.source}}};const Pe=["Default","WithHierarchy"];export{t as Default,i as WithHierarchy,Pe as __namedExportsOrder,Le as default};
//# sourceMappingURL=SingleAddSelect.stories-DXY1nuZi.js.map
