var g=Object.defineProperty;var i=(e,m)=>g(e,"name",{value:m,configurable:!0});import{e as t,S as y,p as v,r as S,B as T}from"./iframe-B4rJbuYi.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-BdB0Ys7V.js";import{e as r}from"./bucket-6-0Oc9PexT.js";import{G as u}from"./bucket-8-DGYM8c3c.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-Dw762fyJ.js";import"./AddSelect-BY0gfuVU.js";import"./Tag-B0Z3gEnR.js";import"./Text-Drzp9J0j.js";import"./DefinitionTooltip-CuQBL0CI.js";import"./index-2cgUJDVc.js";import"./index-xYa1U4c2.js";import"./bucket-19-Bd0ix_8N.js";import"./utils-CEm6Ryh0.js";import"./AccordionItem-Ba6fUepl.js";import"./NoDataEmptyState-D3dApQK4.js";import"./EmptyState-CcSFVeus.js";import"./EmptyStateV2.deprecated-BmL_2ygS.js";import"./Link-pH65GHmt.js";import"./index-1NvPDlBW.js";import"./NoDataIllustration-B2qLv9Zd.js";import"./useId-C8xWp-BM.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-BJ9ZerKN.js";import"./index-D6Npww_Q.js";import"./bucket-13-a6tMIzrK.js";import"./index-DK1CVULi.js";import"./LayerContext-Bxhywl2x.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-C0dAAfkE.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-BJX4hjuy.js";import"./FormContext-_ii8s4P8.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-DnTF4qMt.js";import"./bucket-20-CW2CpDM7.js";import"./MultiSelect-BV6p08Fy.js";import"./Checkbox-BYDjfuTW.js";import"./UserProfileImage-UtxmF-TN.js";import"./TooltipTrigger-DcBSDHdx.js";import"./bucket-15-Di2mMX16.js";import"./Search-BpLV1Oom.js";import"./bucket-16-M5Y7R26b.js";import"./MenuItem-Dfmxkm6z.js";import"./useAttachedMenu-Qv0RgJ-X.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CL83lEzG.js";import"./bucket-2-CxDkhrve.js";import"./index-BF_nLJlH.js";import"./wrapFocus-nUCJraCO.js";import"./useOutsideClick-DsnIuXly.js";import"./bucket-1-CXjG_z7I.js";import"./bucket-7-xTtm0AKl.js";import"./ButtonSet-D6G4_VtK.js";import"./DismissibleTag-PcNNPbZk.js";import"./NotFoundEmptyState-bmRlQy1k.js";import"./NotFoundIllustration-DJATW0BB.js";import"./Tearsheet-DyUiYa9_.js";import"./TearsheetShell-Dtvod5sV.js";import"./useResizeObserver-DM-QaFHv.js";import"./useIsomorphicEffect-QUdGuKKq.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-PSqayA2r.js";import"./ComposedModal-DsRaguaU.js";import"./toggleClass-C-4mpgrX.js";import"./InlineLoading-xiZHHIVS.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-CNQSG7w2.js";import"./usePortalTarget-CTaYNTaO.js";import"./index-CUZU0i_P.js";import"./useFocus-T0-glpx1.js";import"./usePresence-BFJKd65E.js";import"./usePreviousValue-D-lYg0PR.js";import"./ActionSet-DX86x4_7.js";import"./TearsheetNarrow-CRPn0oAs.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]}),"DocsPage");f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const c=`${v.prefix}--add-select__meta-panel`,Je={title:"Patterns/Prebuilt patterns/Add and select/MultiAddSelect",component:h,tags:["autodocs"],parameters:{docs:{page:f}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${c}-entry`},t.createElement("p",{className:`${c}-entry-title`},"html support"),t.createElement("p",{className:`${c}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:i(e=>t.createElement(r,{size:16,...e}),"icon"),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:w,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),theme:"light"}}]}}}}},n={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:i(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},p=i((e,m)=>{const[b,d]=S.useState(m?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(h,{...e,open:b,onClose:i(()=>d(!1),"onClose")}),e?.noTearsheet===!1&&t.createElement(T,{onClick:i(()=>d(!0),"onClick")},"Launch AddSelect"))},"Template"),s=p.bind({});s.args={items:1,...n};const l=p.bind({});l.args={items:2,...n,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const a=p.bind({});a.args={items:3,...n};const o=p.bind({});o.parameters={chromatic:{disableSnapshot:!0}};o.args={items:4,...n};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...o.parameters?.docs?.source}}};const Ke=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{s as Default,o as WithAvatars,l as WithHierarchy,a as WithModifiers,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=MultiAddSelect.stories-ClVE82sw.js.map
