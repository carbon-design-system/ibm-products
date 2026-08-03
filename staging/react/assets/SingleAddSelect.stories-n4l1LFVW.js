var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ag as u,r as h,B as g}from"./iframe-DS02e2Nt.js";import{S as l}from"./SingleAddSelect-U-l7Qr9Q.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DQlxl8yG.js";import"./props-helper-D1pSUW0Q.js";import"./AddSelect-BGMF6tN5.js";import"./Tag-BeZgjXvE.js";import"./Text-53bktq_X.js";import"./DefinitionTooltip-B-rH83Zi.js";import"./index-qEnSGODh.js";import"./index-DcUJ4pnV.js";import"./bucket-20-BaUmkZX5.js";import"./AccordionItem-Bcx96xT2.js";import"./NoDataEmptyState-BNiv-Xmh.js";import"./EmptyState-CfFL5ScB.js";import"./EmptyStateV2.deprecated-DBsQzdCR.js";import"./Link-CRViJIT_.js";import"./index-DrYZzYiY.js";import"./NoDataIllustration-BNWoXiiP.js";import"./useId-CptZhySD.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CQeV6JTt.js";import"./index-Bvj3k9Sl.js";import"./bucket-14-BPM0M4U1.js";import"./index-DernP3XJ.js";import"./LayerContext-DP63q_g-.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-D1Wzd2LM.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-DiNT5NbB.js";import"./bucket-21-CmBNykUN.js";import"./downshift.esm-BwopKnTd.js";import"./FormContext-DzZrHLuK.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-DJ-KWG3L.js";import"./Checkbox-CcaR_usH.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DYrXTI_n.js";import"./TooltipTrigger-DcHcKS0k.js";import"./bucket-8-BZBneXu6.js";import"./bucket-15-CzjF6NRG.js";import"./Search-cS1gVrP0.js";import"./bucket-16-nZ5pUWoD.js";import"./MenuItem-CvMFZPkW.js";import"./useAttachedMenu-CayauLGZ.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CCFfW63x.js";import"./bucket-2-Y2X-CGmZ.js";import"./index-BqCWi17V.js";import"./wrapFocus-DzBTv3RN.js";import"./useOutsideClick-CWb-LrtL.js";import"./bucket-1-Ey-WkFi7.js";import"./bucket-7-z8kwq4sq.js";import"./ButtonSet-BNk_kxER.js";import"./DismissibleTag-CHz0fkGu.js";import"./NotFoundEmptyState-Yiqe76B4.js";import"./NotFoundIllustration-BkC4jD8d.js";import"./Tearsheet-Cx4HQ6e-.js";import"./TearsheetShell-_P1PAxAJ.js";import"./useResizeObserver-D3JZ9rBF.js";import"./useIsomorphicEffect-BFqnqv4P.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-Cjw2bjsE.js";import"./isTopmostVisibleModal-CFbq52Te.js";import"./InlineLoading-CRDLxsk0.js";import"./Wrap-Dm37_LUZ.js";import"./usePortalTarget-Nm4VSi3y.js";import"./index-iaEe97zR.js";import"./useFocus-CHw3ddRI.js";import"./usePresence-CWi3LrGe.js";import"./usePreviousValue-DXcziui_.js";import"./ActionSet-DWDV0HPk.js";import"./TearsheetNarrow-D3kyLi4P.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}}]}),"DocsPage");n.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Fe={title:"Patterns/Prebuilt patterns/Add and select/SingleAddSelect",component:l,tags:["autodocs"],parameters:{docs:{page:n}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy"}},options:[0,1,2],mapping:{0:{entries:[]},1:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"}]},2:{entries:[{id:"1",title:"Kansas",value:"kansas"},{id:"2",title:"Texas",value:"texas"},{id:"3",title:"Florida",value:"florida"},{id:"4",title:"California",value:"california",children:{entries:[{id:"5",title:"Los Angeles",value:"la",children:{entries:[{id:"6",title:"Beverly Hills",value:"bh"},{id:"7",title:"Malibu",value:"malibu",children:{entries:[{id:"8",title:"Malibu Rd",value:"malibu-rd"}]}}]}}]}}]}}}}},p={className:"placeholder-class",description:"select a category lorem ipsum",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find categories",illustrationTheme:"light",itemsLabel:"Categories",navIconDescription:"View children",noResultsTitle:"No results",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:t(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Select",searchResultsTitle:"Search results",title:"Select category"},m=t((e,s)=>{const[c,a]=h.useState(s?.viewMode!=="docs");return i.createElement(i.Fragment,null,i.createElement(l,{...e,open:c,onClose:t(()=>a(!1),"onClose")}),e?.noTearsheet===!1&&i.createElement(g,{onClick:t(()=>a(!0),"onClick")},"Launch AddSelect"))},"Template"),r=m.bind({});r.args={items:1,...p};const o=m.bind({});o.args={items:2,...p};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const He=["Default","WithHierarchy"];export{r as Default,o as WithHierarchy,He as __namedExportsOrder,Fe as default};
//# sourceMappingURL=SingleAddSelect.stories-n4l1LFVW.js.map
