var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ah as u,r as h,B as g}from"./iframe-DqlTQ60u.js";import{S as l}from"./SingleAddSelect-jlboljdR.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-B5kwQgE6.js";import"./props-helper-BixCVTGM.js";import"./AddSelect-DBDVEcks.js";import"./Tag-DShRle_w.js";import"./Text-C_hBiMwV.js";import"./DefinitionTooltip-mL6qb3jN.js";import"./index-Dmh7by5P.js";import"./index-I133Egmb.js";import"./bucket-19-Bl6YGOgX.js";import"./AccordionItem-CMfo9mFc.js";import"./NoDataEmptyState-CB_8iwSh.js";import"./EmptyState-CaPVb7y1.js";import"./EmptyStateV2.deprecated-BKxIVNQt.js";import"./Link-DJn5Fe6d.js";import"./index-BULlMr4z.js";import"./NoDataIllustration-DN3pYqGI.js";import"./useId-Cz6CmHcG.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-DBBJj7WV.js";import"./index-BdtOQhN5.js";import"./bucket-13-BtpItG6_.js";import"./index-gxNZoIp9.js";import"./LayerContext-CMfAIrnS.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-Df5asNig.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-BdKeC2wm.js";import"./bucket-20-DNbJQAaN.js";import"./downshift.esm-CAQmdjfM.js";import"./FormContext-DBobOUqy.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-NrAJ7cAQ.js";import"./Checkbox-DxBQcqGW.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-BdppQNXg.js";import"./TooltipTrigger-CDFUwxIK.js";import"./bucket-8-CTYvV6MI.js";import"./bucket-15-TcwQyLY-.js";import"./Search-DeK_EN0c.js";import"./bucket-16-CAKCo8VO.js";import"./MenuItem-DX6Dhl15.js";import"./useAttachedMenu-DFyr3dyq.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLKc2yz8.js";import"./bucket-2-1qJPwgxr.js";import"./index-Bgd8S7Yd.js";import"./wrapFocus-CPa3H9Wu.js";import"./useOutsideClick-Cgj5c5nU.js";import"./bucket-1-07O7_BXh.js";import"./bucket-7-BRJdpH87.js";import"./ButtonSet-Qe_jbSYo.js";import"./DismissibleTag-DPyYs0ly.js";import"./NotFoundEmptyState-C0OMl-bh.js";import"./NotFoundIllustration-Du2-Mqjj.js";import"./Tearsheet-BChTlwT0.js";import"./TearsheetShell-BEfHXnGb.js";import"./useResizeObserver-D8wNq_KX.js";import"./useIsomorphicEffect-fdw4_oyY.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-BIuMYipc.js";import"./toggleClass-7nifezvp.js";import"./InlineLoading-DLsVoIA8.js";import"./bucket-6-Ci6XPTYv.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-DYdH825H.js";import"./usePortalTarget-B28u9rUF.js";import"./index-BItMFHta.js";import"./useFocus-DSGrA6Fh.js";import"./usePresence-Mr5EL5o5.js";import"./usePreviousValue-BBfGKPqo.js";import"./ActionSet-FICcreUW.js";import"./TearsheetNarrow-CLMkI6Tt.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-DQqgR-yf.js.map
