var g=Object.defineProperty;var i=(e,c)=>g(e,"name",{value:c,configurable:!0});import{R as t,ag as y,p as v,r as S,B as T}from"./iframe-BJEr8hIF.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-C2y9I0ib.js";import{G as u}from"./bucket-8-BOjnbbLp.js";import{b as r}from"./bucket-6-B7bAl6HI.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-DIPHceHz.js";import"./AddSelect-DjWYLGQZ.js";import"./Tag-Cjc0Ltuh.js";import"./Text-BgS7oIBt.js";import"./DefinitionTooltip-CsT7oCIj.js";import"./index-Bq9BqBSK.js";import"./index-2N0MzFsY.js";import"./bucket-20-pb4ZJRbV.js";import"./AccordionItem-DVWqEco7.js";import"./NoDataEmptyState-BmIpB2iG.js";import"./EmptyState-CKkqVXz3.js";import"./EmptyStateV2.deprecated-DgX6dO4l.js";import"./Link-CuQCSuxA.js";import"./index-9JBdAywC.js";import"./NoDataIllustration-By0GuNVa.js";import"./useId-lIQ3SZl5.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-Bu8ZRkZr.js";import"./index-CiaQViB8.js";import"./bucket-14-MsfSSSC3.js";import"./index-DDH51Mds.js";import"./LayerContext-CLnoCJoE.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-SaEbiK--.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-C4iCCUIy.js";import"./bucket-21-Bo-VTMHN.js";import"./downshift.esm-DuOguGWc.js";import"./FormContext-C7vrrci6.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-B0thiY3X.js";import"./Checkbox-ChTWSiy4.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-dz5GtNHY.js";import"./TooltipTrigger-EaP0wrWW.js";import"./bucket-15-cMxfwZKM.js";import"./Search-DbCKfOgU.js";import"./bucket-16-B2W10nSe.js";import"./MenuItem-Dl8KUyxG.js";import"./useAttachedMenu-CDXIHmy5.js";import"./environment-DRRHKtsv.js";import"./useControllableState-1TbgSIA5.js";import"./bucket-2-C0xhMaii.js";import"./index-CPA5eF8D.js";import"./wrapFocus-BE4Fbj_7.js";import"./useOutsideClick-IZt9CdHd.js";import"./bucket-1-i0niiLMV.js";import"./bucket-7-CorJFDPj.js";import"./ButtonSet-B8sCMFQ7.js";import"./DismissibleTag-gSLmNpdk.js";import"./NotFoundEmptyState-8fMV3gtm.js";import"./NotFoundIllustration-j6qDUGXu.js";import"./Tearsheet-Ti8Za0VG.js";import"./TearsheetShell-BjeX8l2p.js";import"./useResizeObserver-BCljDAVT.js";import"./useIsomorphicEffect-BxVN6Xbk.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-But8QIhC.js";import"./ComposedModal-BwPfIwbt.js";import"./isTopmostVisibleModal-2oqSTPoF.js";import"./InlineLoading-BacyH5P8.js";import"./Wrap-B5nPOcBt.js";import"./usePortalTarget-D9cwg6Jm.js";import"./index-BSqJd56P.js";import"./useFocus-B2Oyy1Uc.js";import"./usePresence-BQxnWuuL.js";import"./usePreviousValue-wWfY7Tw5.js";import"./ActionSet-C7zco3Ea.js";import"./TearsheetNarrow-CIOqZEe5.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]}),"DocsPage");f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const m=`${v.prefix}--add-select__meta-panel`,Ve={title:"Patterns/Prebuilt patterns/Add and select/MultiAddSelect",component:h,tags:["autodocs"],parameters:{docs:{page:f}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${m}-entry`},t.createElement("p",{className:`${m}-entry-title`},"html support"),t.createElement("p",{className:`${m}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:i(e=>t.createElement(r,{size:16,...e}),"icon"),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:i(e=>t.createElement(r,{size:16,...e}),"icon")}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:w,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),theme:"light"}}]}}}}},n={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:i(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},p=i((e,c)=>{const[b,d]=S.useState(c?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(h,{...e,open:b,onClose:i(()=>d(!1),"onClose")}),e?.noTearsheet===!1&&t.createElement(T,{onClick:i(()=>d(!0),"onClick")},"Launch AddSelect"))},"Template"),s=p.bind({});s.args={items:1,...n};const l=p.bind({});l.args={items:2,...n,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const a=p.bind({});a.args={items:3,...n};const o=p.bind({});o.parameters={chromatic:{disableSnapshot:!0}};o.args={items:4,...n};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, context) => {
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
//# sourceMappingURL=MultiAddSelect.stories-DG0jIlHX.js.map
