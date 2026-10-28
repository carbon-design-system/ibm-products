var g=Object.defineProperty;var i=(e,m)=>g(e,"name",{value:m,configurable:!0});import{R as t,aj as y,K as v,r as S,L as T}from"./iframe-BJ3oD3I6.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-DvExrak_.js";import{G as u}from"./bucket-8-Dz3t5KtZ.js";import{a as r}from"./bucket-6-BE8eMyYu.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-BnZ9dupT.js";import"./AddSelect-BE-xqDco.js";import"./Tag-Br-1l77w.js";import"./Text-CKFCb-K0.js";import"./DefinitionTooltip-BYYlk8JF.js";import"./index-CfJuWsKG.js";import"./index-FQgPJb5I.js";import"./bucket-20-Vj6m3ER2.js";import"./AccordionItem-BuvKKQeD.js";import"./NoDataEmptyState-BXBPKjAZ.js";import"./EmptyState-DSs0V7hZ.js";import"./EmptyStateV2.deprecated-Ci_-072f.js";import"./Link-3VMMPuSQ.js";import"./index-Vu7ywWcs.js";import"./NoDataIllustration-Bp1Lvqjp.js";import"./useId-kRdbt123.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-Dz5PsTBC.js";import"./index-BsM5luMF.js";import"./bucket-14-BH-thPNO.js";import"./index-B44qGmzH.js";import"./LayerContext-kZMSrgAm.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-Bex3-6T5.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-Dw2SeZdp.js";import"./FormContext-v-R-meOx.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-Bro2iP2D.js";import"./bucket-21-_gQwUv_z.js";import"./useNoInteractiveChildrenForLabel-BAYLBxXJ.js";import"./MultiSelect-B3CIeNWA.js";import"./Checkbox-DX4eokQ9.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-DVSB82x0.js";import"./TooltipTrigger-DfehjQbR.js";import"./bucket-15-dQV6ezRU.js";import"./Search-CLvXAlj3.js";import"./bucket-17-CVaRNrPu.js";import"./MenuItem-Cgh2v6_2.js";import"./useAttachedMenu-DeDdPkTy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CD5GBJ5k.js";import"./bucket-2-WHjdTac2.js";import"./index-z22PCSp-.js";import"./wrapFocus-BG8cibfI.js";import"./useOutsideClick-DKA0pRcd.js";import"./bucket-1-Dg1sNCxj.js";import"./bucket-7-BtrbsRa_.js";import"./ButtonSet-DHBPfsAD.js";import"./DismissibleTag-G2zsr2Qd.js";import"./NotFoundEmptyState-DJbypX4Q.js";import"./NotFoundIllustration-BlCY_2qG.js";import"./Tearsheet-DvCJl91p.js";import"./TearsheetShell-DWRLA0PE.js";import"./useResizeObserver-BZ8dhILb.js";import"./useIsomorphicEffect-hpa23fp6.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-CK5SYOfC.js";import"./ComposedModal-BXLb-sEZ.js";import"./isTopmostVisibleModal-DvUtpNhe.js";import"./InlineLoading-DnTQB44j.js";import"./Wrap-A1zli8WP.js";import"./usePortalTarget-DuEDzpGP.js";import"./index-cqtLY_Mv.js";import"./useFocus-B2sHbBnn.js";import"./usePresence-BeU_mIvQ.js";import"./usePreviousValue-iHNgpNoC.js";import"./ActionSet-BqX89kL9.js";import"./TearsheetNarrow-Cnd1EHyn.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]}),"DocsPage");f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const c=`${v.prefix}--add-select__meta-panel`,Ke={title:"Patterns/Prebuilt patterns/Add and select/MultiAddSelect",component:h,tags:["autodocs"],parameters:{docs:{page:f}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${c}-entry`},t.createElement("p",{className:`${c}-entry-title`},"html support"),t.createElement("p",{className:`${c}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:i(e=>t.createElement(r,{size:16,...e}),"icon"),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:w,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),theme:"light"}}]}}}}},n={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:i(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},p=i((e,m)=>{const[b,d]=S.useState(m?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(h,{...e,open:b,onClose:i(()=>d(!1),"onClose")}),e?.noTearsheet===!1&&t.createElement(T,{onClick:i(()=>d(!0),"onClick")},"Launch AddSelect"))},"Template"),s=p.bind({});s.args={items:1,...n};const l=p.bind({});l.args={items:2,...n,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const a=p.bind({});a.args={items:3,...n};const o=p.bind({});o.parameters={chromatic:{disableSnapshot:!0}};o.args={items:4,...n};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Je=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{s as Default,o as WithAvatars,l as WithHierarchy,a as WithModifiers,Je as __namedExportsOrder,Ke as default};
//# sourceMappingURL=MultiAddSelect.stories-B4WNUxXY.js.map
