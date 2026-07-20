var d=Object.defineProperty;var t=(e,s)=>d(e,"name",{value:s,configurable:!0});import{R as i,ag as u,r as h,B as g}from"./iframe-LxOZQDAZ.js";import{S as l}from"./SingleAddSelect-BmFXtC28.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-B1WIs_qd.js";import"./props-helper-BGW8o-_q.js";import"./AddSelect-DthRDyKI.js";import"./Tag-wrrC6e9Z.js";import"./Text-BRhHXZCE.js";import"./DefinitionTooltip-DC4sG6U1.js";import"./index-NOUejIsb.js";import"./index-By2Zbst-.js";import"./bucket-20-CPLXmsjx.js";import"./AccordionItem-BzurocPC.js";import"./NoDataEmptyState-DZ4GXqCi.js";import"./EmptyState-ms93KNPc.js";import"./EmptyStateV2.deprecated-Ck7ZJf2i.js";import"./Link-CEy6-L-o.js";import"./index-V-GITaOS.js";import"./NoDataIllustration-CZLlSyLF.js";import"./useId-B0NVw4Zp.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-B5ObVhIj.js";import"./index-CDtnFB5P.js";import"./bucket-14-CAGGJN8o.js";import"./index-Cuq_gYqS.js";import"./LayerContext-Dp9ZRtSj.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-CbTb0lto.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-QJ6MvXNJ.js";import"./bucket-21-CQi2gVtC.js";import"./downshift.esm-B7sI8gv5.js";import"./FormContext-Cdv1M00w.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-39kT9rzb.js";import"./Checkbox-DwDZTjIL.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DPpjmYAc.js";import"./TooltipTrigger-DlMEMAsJ.js";import"./bucket-8-Dy4AfuZN.js";import"./bucket-15-BmdsY-A1.js";import"./Search-D2pQ-dze.js";import"./bucket-16-Ce8uDpVR.js";import"./MenuItem-BefqR5qR.js";import"./useAttachedMenu-Bj_4he62.js";import"./environment-DRRHKtsv.js";import"./useControllableState-C0cmDY6p.js";import"./bucket-2-DObUo3cn.js";import"./index-CrSJzJsf.js";import"./wrapFocus-D_OwerMA.js";import"./useOutsideClick-z7-4Y9KH.js";import"./bucket-1-B6LDmGWR.js";import"./bucket-7-1DWIAd7h.js";import"./ButtonSet-Q9L3O0X_.js";import"./DismissibleTag-CFZGepQR.js";import"./NotFoundEmptyState-BG94aUCm.js";import"./NotFoundIllustration-BMdoaoeY.js";import"./Tearsheet-A5ppyTIS.js";import"./TearsheetShell-BRgNPYn9.js";import"./useResizeObserver-CBkH9Iwd.js";import"./useIsomorphicEffect-Cxr7g83s.js";import"./getNodeTextContent-CjFansOq.js";import"./ComposedModal-izsZFTgD.js";import"./isTopmostVisibleModal-Dn58-e0P.js";import"./InlineLoading-DbhE4RnG.js";import"./Wrap-Dmi6w_jm.js";import"./usePortalTarget-Dt2lWXez.js";import"./index-DH8D3rrj.js";import"./useFocus-C64I-osv.js";import"./usePresence-CMQGKdCM.js";import"./usePreviousValue-CD8ZFEAM.js";import"./ActionSet-DpmqCooQ.js";import"./TearsheetNarrow-Dbw3dPmm.js";const n=t(()=>i.createElement(u,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=SingleAddSelect.stories-B87YftBR.js.map
