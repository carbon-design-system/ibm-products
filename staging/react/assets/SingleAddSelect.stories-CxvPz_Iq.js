import{e,S as c,r as d,B as u}from"./iframe-CECvNR-E.js";import{S as s}from"./SingleAddSelect-NQbjwv8b.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-4IrNVtGE.js";import"./props-helper-BomzR2el.js";import"./AddSelect-H02FBmGt.js";import"./Tag-BXeLWXEp.js";import"./Text-JYrlRVpp.js";import"./DefinitionTooltip-CASlUOQ5.js";import"./index-CY5VH0Wo.js";import"./bucket-18-aLT4L9Ee.js";import"./utils-5D3DEOFD.js";import"./AccordionItem-BIHBNNEu.js";import"./NoDataEmptyState-CQWT0LH9.js";import"./EmptyState-B5t1fZwy.js";import"./EmptyStateV2.deprecated-DCZVLlaC.js";import"./Link-DC6sJXxH.js";import"./index-CeDLcdNt.js";import"./NoDataIllustration-DQjd0pNV.js";import"./useId-DvA9Olfl.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-BY3DiwHf.js";import"./bucket-13-BsaKR1EV.js";import"./Dropdown-B3sMF6DL.js";import"./index-nuXQNMyh.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-D-anyOyh.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-Bnm0Ei9o.js";import"./bucket-19-DzVW02r8.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-D63q8W5e.js";import"./Checkbox-GrZpxim0.js";import"./index-D9kzaMMU.js";import"./LayerContext-6g403wGD.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-mbQd-33Q.js";import"./TooltipTrigger-BnEIKuiA.js";import"./bucket-7-BNY8no_f.js";import"./bucket-14-CHDSepZv.js";import"./Search-C_NXnGDc.js";import"./bucket-15-B5w10YD2.js";import"./MenuItem-CuhJ5Fdm.js";import"./useControllableState-CeUHG2Ws.js";import"./useAttachedMenu-D1mlKi8p.js";import"./bucket-2-B2qVJJyY.js";import"./index-D6SLJGyk.js";import"./wrapFocus-2UnpdR_d.js";import"./useOutsideClick-NWUtwkfn.js";import"./bucket-1-CWEhWKsT.js";import"./bucket-6-6Xg8dT13.js";import"./ButtonSet-CJvqeno-.js";import"./DismissibleTag-0sJOjJTR.js";import"./NotFoundEmptyState-DeA3lE9B.js";import"./NotFoundIllustration-3KoYfl3e.js";import"./Tearsheet-BWuEZF7A.js";import"./TearsheetShell-CEkcJ_Um.js";import"./useResizeObserver-CFlkjV8G.js";import"./useIsomorphicEffect-BnVzRpkq.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-knVyg-RR.js";import"./InlineLoading-AxKMSEh1.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-C5bIeRKd.js";import"./usePortalTarget-DBlCnwG_.js";import"./index-JdFUOAZ1.js";import"./useFocus-D0TYUYNk.js";import"./usePreviousValue-DzUN10Wt.js";import"./ActionSet-BDx6M7Wm.js";import"./TearsheetNarrow-DMvfI02q.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-CxvPz_Iq.js.map
