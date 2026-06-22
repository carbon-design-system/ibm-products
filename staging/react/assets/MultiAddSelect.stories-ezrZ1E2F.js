var g=Object.defineProperty;var i=(e,m)=>g(e,"name",{value:m,configurable:!0});import{R as t,ah as y,p as v,r as S,B as T}from"./iframe-nyWj9AFG.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-B4GJjQu3.js";import{G as u}from"./bucket-8-CaQDbZPY.js";import{e as r}from"./bucket-6-B-Zq8ItY.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-bEKes8mp.js";import"./AddSelect-D5ASFOUZ.js";import"./Tag-DueSeaUB.js";import"./Text-ugVjbrM6.js";import"./DefinitionTooltip-DpYlQa4t.js";import"./index-BW3OgNnr.js";import"./index-BfgIMR11.js";import"./bucket-19-DESzYyzb.js";import"./AccordionItem-B8Xd1fIV.js";import"./NoDataEmptyState-Bn3D65BU.js";import"./EmptyState-Bu0zEo87.js";import"./EmptyStateV2.deprecated-Dk0z7dz9.js";import"./Link-DESAjkNF.js";import"./index-CJhEv1XZ.js";import"./NoDataIllustration-kfPyRSyO.js";import"./useId-BwPKdf4k.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-iI4QSw1z.js";import"./index-BP5HDjxR.js";import"./bucket-13-BQAQJByg.js";import"./index-Bip5r7cE.js";import"./LayerContext-TY8Rr565.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-BGldWS1M.js";import"./defaultItemToString-DDHghiWu.js";import"./useNormalizedInputProps-OnrN8UbL.js";import"./bucket-20-QNu5uAOp.js";import"./downshift.esm-CL6tmTgM.js";import"./FormContext-Ca9jqY9Q.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./MultiSelect-0FETypkX.js";import"./Checkbox-wLWb-MZ1.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-tNGdi6N5.js";import"./TooltipTrigger-BFkGKevF.js";import"./bucket-15-C3lLpWQU.js";import"./Search-VbXGv_8g.js";import"./bucket-16-0phSzhqh.js";import"./MenuItem-Cu0-mTTm.js";import"./useAttachedMenu-B2H7bdhi.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Br8GBSt6.js";import"./bucket-2-BFZsdHKx.js";import"./index-C0WS_wN3.js";import"./wrapFocus-kvvUkrL0.js";import"./useOutsideClick-TRDJNVTG.js";import"./bucket-1-CTqwJdcL.js";import"./bucket-7-Di7sqyQo.js";import"./ButtonSet-C1mE44Y9.js";import"./DismissibleTag-BNuTHFkk.js";import"./NotFoundEmptyState-wqsmlPgP.js";import"./NotFoundIllustration-Dr3wHW1m.js";import"./Tearsheet-4Uc1Oi-d.js";import"./TearsheetShell-D8WsFOf2.js";import"./useResizeObserver-8ywXsdiU.js";import"./useIsomorphicEffect-DiSxRFeJ.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-Dbiph8mZ.js";import"./ComposedModal-D66gEHIC.js";import"./toggleClass-A14-NzTB.js";import"./InlineLoading-B7IBbyIF.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./Wrap-Cw8Opmib.js";import"./usePortalTarget-BKqoXfXv.js";import"./index-Dsqef-Wi.js";import"./useFocus-BDqLXX8V.js";import"./usePresence-DyQAQ3jM.js";import"./usePreviousValue-MbZnQ0tT.js";import"./ActionSet-Bb_K9hKd.js";import"./TearsheetNarrow-DlfK-X2n.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=MultiAddSelect.stories-ezrZ1E2F.js.map
