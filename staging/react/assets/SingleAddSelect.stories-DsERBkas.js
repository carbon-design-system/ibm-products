var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{e as i,S as u,r as h,B as g}from"./iframe-Cyj4LIh5.js";import{S as l}from"./SingleAddSelect-BFVsv-ZV.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DMaYy3Jo.js";import"./props-helper-BeW6tFoM.js";import"./AddSelect-CwkBayEP.js";import"./Tag-CJ0sxIBB.js";import"./Text-B0E6WkMH.js";import"./DefinitionTooltip-BE1ILu5m.js";import"./index-CrQOVYp8.js";import"./index-DbpC7nej.js";import"./bucket-19-B7hMRFoz.js";import"./AccordionItem-BwePvo_9.js";import"./NoDataEmptyState-CQQlat4h.js";import"./EmptyState-BSFMvmz1.js";import"./EmptyStateV2.deprecated-B8Z-XGEj.js";import"./Link-B2pfHtX8.js";import"./index-DZkQvb7J.js";import"./NoDataIllustration-DGE3hKFd.js";import"./useId-CZbCsq9r.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-DVRteFJh.js";import"./index-2ZoP8rOD.js";import"./bucket-13-BkGR996w.js";import"./index-vioIMqkQ.js";import"./LayerContext-DFxG2aK0.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DFN0MI2V.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-DwDb6zRU.js";import"./bucket-20-Dg4NJRV5.js";import"./downshift.esm-CJNHbtOw.js";import"./FormContext-DyuhYneE.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-C2K54h7R.js";import"./Checkbox-DK3hYZIl.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-5Qp5No0u.js";import"./TooltipTrigger-C8P2gN7s.js";import"./bucket-8-BnP5TzLW.js";import"./bucket-15-NHicM6Y1.js";import"./Search-DwAgCQJ9.js";import"./bucket-16-BokBCq4p.js";import"./MenuItem-CrhULKEy.js";import"./useAttachedMenu-C2Q1Osuc.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CO01KbI6.js";import"./bucket-2-hGDgkZDo.js";import"./index-sdxIuNoj.js";import"./wrapFocus-Xv7dNCVp.js";import"./useOutsideClick-C3GdYngI.js";import"./bucket-1-Bb5Y-ET4.js";import"./bucket-7-Dm8yNK4V.js";import"./ButtonSet-C5cAYjyA.js";import"./DismissibleTag-25UO8O-0.js";import"./NotFoundEmptyState-Bo2aMCbn.js";import"./NotFoundIllustration-BnSkb4Jn.js";import"./Tearsheet-GGJoqhYV.js";import"./TearsheetShell-CEmm5uVC.js";import"./useResizeObserver-YS0buUPl.js";import"./useIsomorphicEffect-CQvdjB27.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-DytiUj0S.js";import"./toggleClass-BAKBuigj.js";import"./InlineLoading-B1oqkF9D.js";import"./bucket-6-DL_KxiA5.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-D3Ev0dkB.js";import"./usePortalTarget-Bek0sZsK.js";import"./index-BQHgwKad.js";import"./useFocus-Beh_ysYk.js";import"./usePresence-AtfgPAs_.js";import"./usePreviousValue-Bjujx9j5.js";import"./ActionSet-DoSddDiM.js";import"./TearsheetNarrow-ChsHF6Gh.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Ne={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <SingleAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...o.parameters?.docs?.source}}};const Ie=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,Ie as __namedExportsOrder,Ne as default};
//# sourceMappingURL=SingleAddSelect.stories-DsERBkas.js.map
