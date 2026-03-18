var g=Object.defineProperty;var i=(e,m)=>g(e,"name",{value:m,configurable:!0});import{e as t,S as y,p as v,r as S,B as T}from"./iframe-DhIv2Cz2.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-CkwUdncg.js";import{e as r}from"./bucket-6-gELQZyM7.js";import{G as u}from"./bucket-8-DvN3WrMx.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-KpiUTsjr.js";import"./AddSelect-ByWzQrxI.js";import"./Tag-SRa8Jkg6.js";import"./Text-OlEmoPCg.js";import"./DefinitionTooltip-CJc_xAEX.js";import"./index-d8hsHx5V.js";import"./index-C1b99TSV.js";import"./bucket-19-0ioYX1hu.js";import"./utils-A8kjRMc4.js";import"./AccordionItem-6ecSal5g.js";import"./NoDataEmptyState-LjuXuhO8.js";import"./EmptyState-Dl0Eh-O3.js";import"./EmptyStateV2.deprecated-DCC0P_lg.js";import"./Link-CWTaGkXd.js";import"./index-4j00D-3u.js";import"./NoDataIllustration-Cjab4e-M.js";import"./useId-BhAClTZZ.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-ZXMYRKB8.js";import"./bucket-13-DyhhZxvH.js";import"./Dropdown-BF9sC_vw.js";import"./index-BdnD2v1g.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-DAgWiOK8.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-B_vakQDX.js";import"./bucket-20-BLUMbjfu.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-CiGlk7oX.js";import"./Checkbox-uM1nplfy.js";import"./index-Du8T86O1.js";import"./LayerContext-FIF-mJpy.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-BumFITnl.js";import"./TooltipTrigger-D1cKnShc.js";import"./bucket-14-BcBQF4gP.js";import"./Search-wqPxGHPL.js";import"./bucket-16-C01d6Qhf.js";import"./MenuItem-DKMBpR0M.js";import"./useControllableState-fPT1x_Ln.js";import"./useAttachedMenu-DMGjL-WQ.js";import"./environment-DRRHKtsv.js";import"./bucket-2-bhxorkyk.js";import"./index-g9DVUp9g.js";import"./wrapFocus-5tvSKAzz.js";import"./useOutsideClick-9VZ01zkD.js";import"./bucket-1-D-iSrM3O.js";import"./bucket-7-ChCKEQjG.js";import"./ButtonSet-B_BXmM1b.js";import"./DismissibleTag-EjLvQ1zX.js";import"./NotFoundEmptyState-_Z9sbgZX.js";import"./NotFoundIllustration-khG64cda.js";import"./Tearsheet-uyiZe2CU.js";import"./TearsheetShell-znaPRztQ.js";import"./useResizeObserver-Cm2iF_nj.js";import"./useIsomorphicEffect-DtbzomVA.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-CYANkYtB.js";import"./ComposedModal-iTGiThv_.js";import"./InlineLoading-Bgh3e9T9.js";import"./usePresenceContext-93kFRESp.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-C2tDyNS4.js";import"./usePortalTarget-aIXbwh_C.js";import"./index-f0w4ifyk.js";import"./useFocus-CCtkVOet.js";import"./usePresence-BloXpzMd.js";import"./usePreviousValue-Dyx9Q-0l.js";import"./ActionSet-CRmQzfcZ.js";import"./TearsheetNarrow-DZUTrlZu.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]}),"DocsPage");f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const c=`${v.prefix}--add-select__meta-panel`,Ve={title:"Patterns/Prebuilt patterns/Add and select/MultiAddSelect",component:h,tags:["autodocs"],parameters:{docs:{page:f}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${c}-entry`},t.createElement("p",{className:`${c}-entry-title`},"html support"),t.createElement("p",{className:`${c}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:i(e=>t.createElement(r,{size:16,...e}),"icon"),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:w,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),theme:"light"}}]}}}}},n={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:i(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},p=i((e,m)=>{const[b,d]=S.useState(m?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(h,{...e,open:b,onClose:i(()=>d(!1),"onClose")}),e?.noTearsheet===!1&&t.createElement(T,{onClick:i(()=>d(!0),"onClick")},"Launch AddSelect"))},"Template"),s=p.bind({});s.args={items:1,...n};const l=p.bind({});l.args={items:2,...n,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const a=p.bind({});a.args={items:3,...n};const o=p.bind({});o.parameters={chromatic:{disableSnapshot:!0}};o.args={items:4,...n};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Je=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{s as Default,o as WithAvatars,l as WithHierarchy,a as WithModifiers,Je as __namedExportsOrder,Ve as default};
//# sourceMappingURL=MultiAddSelect.stories-C366MbUm.js.map
