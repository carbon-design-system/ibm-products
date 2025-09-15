import{e,S as c,r as d,B as u}from"./iframe-DoONWhft.js";import{S as s}from"./SingleAddSelect-g_Iwy2HX.js";import"./devtools-Bope-Kcp.js";import"./props-helper-CgHaYMy-.js";import"./AddSelect-D7b8OU9n.js";import"./Tag-DBgKAnsH.js";import"./DefinitionTooltip-B1asZ6m5.js";import"./index-Bnfmk4E7.js";import"./bucket-18-DPfg6wFB.js";import"./utils-eIueeELw.js";import"./Text-wCKpd-Jz.js";import"./AccordionItem-DUs3BITh.js";import"./NoDataEmptyState-BxehcJSl.js";import"./EmptyState-Drj-En_s.js";import"./EmptyStateV2.deprecated-QuzrKzAu.js";import"./Link-Ifh5DqEn.js";import"./index-BVSll7PQ.js";import"./NoDataIllustration-DEQxsMKw.js";import"./useId-B8S0jltQ.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-CrhzIvxu.js";import"./bucket-13-whxGOphA.js";import"./Dropdown-BfkEDVpY.js";import"./index-DqtL2min.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DXPdmhvk.js";import"./mergeRefs-D4pwfk3t.js";import"./bucket-19-Cq7trOkA.js";import"./MultiSelect-B6eEuFZb.js";import"./Checkbox-CoYK2NeI.js";import"./index-CS_juDx4.js";import"./LayerContext-CR2yigRC.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-VgvPjpCo.js";import"./TooltipTrigger-Curhxiqw.js";import"./bucket-7-DJnsrDi0.js";import"./bucket-14-C5vuP1B-.js";import"./Search-DOrlbM9o.js";import"./bucket-15-Bej-6NQ9.js";import"./MenuItem-BnFRV3Km.js";import"./useControllableState-BxL_A9i9.js";import"./useAttachedMenu-PIsCbOSk.js";import"./bucket-2-qL1MgP2_.js";import"./index-BCCfYvph.js";import"./wrapFocus-BQ5Ztz-2.js";import"./useOutsideClick-fKMX5IHP.js";import"./bucket-1-Di6MhJUu.js";import"./bucket-6-Db2Sb-Fe.js";import"./ButtonSet-BIsEMg7s.js";import"./DismissibleTag-v3qU7Vsb.js";import"./NotFoundEmptyState-DtH1tytc.js";import"./NotFoundIllustration-DVFcX8Qg.js";import"./Tearsheet-foly9GIb.js";import"./TearsheetShell-BvezJUGw.js";import"./useResizeObserver-D1Iv75rh.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-CO73icGN.js";import"./index-BEhuL1MR.js";import"./InlineLoading-9sujfcCD.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-Bz2zt6vJ.js";import"./usePortalTarget-CNTXyWag.js";import"./index-xRnkOPfZ.js";import"./useFocus-BVkkhMaz.js";import"./usePreviousValue-BM8J3eak.js";import"./useIsomorphicEffect-DNoZHH_8.js";import"./ActionSet-CjjXiJvi.js";import"./TearsheetNarrow-ByxkFIO9.js";const a=()=>e.createElement(c,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
