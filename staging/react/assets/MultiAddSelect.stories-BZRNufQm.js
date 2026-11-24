var g=Object.defineProperty;var i=(e,c)=>g(e,"name",{value:c,configurable:!0});import{R as t,aj as y,K as v,r as S,L as T}from"./iframe-CAHi-ash.js";import{i as w}from"./headshot-DLlybMEg.js";import{A as x}from"./index-juzYk_IH.js";import{M as h}from"./MultiAddSelect-BHKzqyXX.js";import{G as u}from"./bucket-8-Cb0KQluP.js";import{a as r}from"./bucket-6-cuCxrebb.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-wb9n9Mc6.js";import"./bucket-21-CD0ipd9A.js";import"./devtools-CF3eS4kS.js";import"./AddSelect-bpI-lY9f.js";import"./Tag-CNMZYQD2.js";import"./Text-DsolOYEo.js";import"./DefinitionTooltip-BzdxlL2b.js";import"./index-jLaOlUcY.js";import"./index-DK2JkwdU.js";import"./bucket-20-B1yq3xQZ.js";import"./AccordionItem-D9Uq0wTL.js";import"./NoDataEmptyState-KuoLOJt_.js";import"./EmptyState-DaOmVGnC.js";import"./EmptyStateV2.deprecated-BIY9qQuA.js";import"./Link-Thsk_YUK.js";import"./index-qdBxdvqW.js";import"./NoDataIllustration-B8TwBhHF.js";import"./useId-Ctlf7PVu.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-vGwX2FaP.js";import"./index-BkLgGYs5.js";import"./bucket-14-BYROENkX.js";import"./index-BdnfRBBG.js";import"./LayerContext-ZOVV-hMu.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-BQvv5_Am.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-D7c-TRkM.js";import"./FormContext-a1LIIEAZ.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-D2SHc324.js";import"./useNoInteractiveChildrenForLabel-CUa-lZs9.js";import"./MultiSelect-BaO3vxje.js";import"./Checkbox-B66lYW7C.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-CdVRh-P4.js";import"./TooltipTrigger-Sv_LrFkm.js";import"./bucket-15-Br-JD4Qm.js";import"./Search-BSWSNX6f.js";import"./bucket-17-DWkJcv8y.js";import"./MenuItem-akDrE2Gr.js";import"./useAttachedMenu-CEJmMsbf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DMc6Pa5Q.js";import"./bucket-2-BAtmiIyf.js";import"./index-BTu5YF-G.js";import"./wrapFocus-DbuaTTNI.js";import"./useOutsideClick-DHl_vKqQ.js";import"./bucket-1-Df6sWiux.js";import"./bucket-7-D0gXeiJE.js";import"./ButtonSet-BJimU4f6.js";import"./DismissibleTag-DebYVXCG.js";import"./NotFoundEmptyState-By03GGSt.js";import"./NotFoundIllustration-DVWAK-Yh.js";import"./Tearsheet-DhVtLjSI.js";import"./TearsheetShell-DfWTw8pD.js";import"./useResizeObserver-B-_vnHM-.js";import"./useIsomorphicEffect-BTuoj9LQ.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-DntgWPHn.js";import"./ComposedModal-CXrnX8xO.js";import"./isTopmostVisibleModal-DeFV3US-.js";import"./InlineLoading-C0V9gGX-.js";import"./Wrap-ByKg0mar.js";import"./usePortalTarget-CHduIn6w.js";import"./index-BkNZblnM.js";import"./useFocus-iYTaFa_8.js";import"./usePresence-yHrDfhuI.js";import"./usePreviousValue-aF8QrfT_.js";import"./ActionSet-xyYTw4Ri.js";import"./TearsheetNarrow-ChLzHw8x.js";const f=i(()=>t.createElement(y,{deprecationNotice:"This component is deprecated and will be removed in the next major version. Please migrate to the [MultiAddSelect](https://carbon-for-ibm-products.netlify.app/?path=/docs/patterns-add-and-select-multiaddselect--overview) pattern.",altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
the way the component is displayed and how you interact with it.

Let's walk through an example.`,source:{code:`items: {
  modifiers: { // adds a modifier dropdown inside the items
    label: PropTypes.string, // label for the dropdown
    options: PropTypes.array, // list of options / values for the dropdown
    multiSelect: PropTypes.bool // option to switch the options dropdown to multiselect
  },
  sortBy: ['title'], // designates which properties should be used to sort the column when using a hierarchy
  entries: [ // the actual list of items / entries
    {
      id: '1', // required unique id for the entry
      value: '1', // required value of the entry
      title: 'item 1', // required title to display
      subtitle: 'item 1 subtitle', // subtitle to display
      children: { // designates if entry has children. if the children prop is found a hierarchy list will be used
        sortBy: ['title', 'size'],
        filterBy: 'fileType', // designates which property should be used to filter the column of items
        entries: [
          {
            id: '1-1',
            value: 'file1.pdf',
            title: 'file1.pdf',
            fileType: 'pdf',
            size: '100',
            icon: Document16, // designates if an icon should be displayed. While similar to avatar icon, both have different displays.
            tag: 'business',
            avatar: { // designates if an avatar should be displayed
              alt: 'alt text',
              icon: <Icon />,
              src: 'avatar.png',
            },
          },
        ],
      },
    },
  ],
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]}),"DocsPage");f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const m=`${v.prefix}--add-select__meta-panel`,Ue={title:"Deprecated/Prebuilt patterns/Add and select/MultiAddSelect",component:h,tags:["autodocs"],parameters:{docs:{page:f}},decorators:[e=>t.createElement("div",null,t.createElement(x,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version. Please migrate to ",t.createElement("a",{href:"/?path=/docs/patterns-add-and-select-multiaddselect--overview"},"MultiAddSelect")," ","example pattern.")},e()))],argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${m}-entry`},t.createElement("p",{className:`${m}-entry-title`},"html support"),t.createElement("p",{className:`${m}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:i(e=>t.createElement(r,{size:16,...e}),"icon"),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:w,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),theme:"light"}}]}}}}},n={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:i(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},p=i((e,c)=>{const[b,d]=S.useState(c?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(h,{...e,open:b,onClose:i(()=>d(!1),"onClose")}),e?.noTearsheet===!1&&t.createElement(T,{onClick:i(()=>d(!0),"onClick")},"Launch AddSelect"))},"Template"),s=p.bind({});s.args={items:1,...n};const l=p.bind({});l.args={items:2,...n,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const a=p.bind({});a.args={items:3,...n};const o=p.bind({});o.parameters={chromatic:{disableSnapshot:!0}};o.args={items:4,...n};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...o.parameters?.docs?.source}}};const Xe=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{s as Default,o as WithAvatars,l as WithHierarchy,a as WithModifiers,Xe as __namedExportsOrder,Ue as default};
//# sourceMappingURL=MultiAddSelect.stories-BZRNufQm.js.map
