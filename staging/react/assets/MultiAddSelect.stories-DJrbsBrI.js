var g=Object.defineProperty;var i=(e,m)=>g(e,"name",{value:m,configurable:!0});import{e as t,S as y,p as v,r as S,B as T}from"./iframe-CjBCRFVj.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-Dn3Y7ra6.js";import{e as r}from"./bucket-6-CXCYtBmh.js";import{G as u}from"./bucket-8-Qag4o7z4.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-CsBMoq7i.js";import"./AddSelect-cuHAYpfX.js";import"./Tag-OCjn-Wte.js";import"./Text-BrH4C0jF.js";import"./DefinitionTooltip-DeVuspr6.js";import"./index-CzluofQO.js";import"./index-DInTrMzG.js";import"./bucket-19-BlJcL9aw.js";import"./utils-CfXDWtIp.js";import"./AccordionItem-Bi5vrGgL.js";import"./NoDataEmptyState-DuDhFQrT.js";import"./EmptyState-BTq5pjYg.js";import"./EmptyStateV2.deprecated-DsPnk_nf.js";import"./Link-B9fBvMD0.js";import"./index-B1DzEGCY.js";import"./NoDataIllustration-CmbaFDqc.js";import"./useId-CLJtNmwb.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-CGciRIED.js";import"./bucket-13-C-q7moq6.js";import"./Dropdown-Bt_YWqm8.js";import"./index-_mo_hqZe.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-BppFagRd.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-iq3oC8B3.js";import"./bucket-20-BOI0trXu.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-BTPYHhXL.js";import"./Checkbox-CET8YCR1.js";import"./index-Srdo1RRm.js";import"./LayerContext-1C_CyexE.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-CuZK3FMP.js";import"./TooltipTrigger-BGVFvlhn.js";import"./bucket-14-Chd7Ro6t.js";import"./Search-DFoE4ByK.js";import"./bucket-16-D3maWZlk.js";import"./MenuItem-CsJ8k-Je.js";import"./useControllableState-DI7Xu23J.js";import"./useAttachedMenu-CotrszDl.js";import"./environment-DRRHKtsv.js";import"./bucket-2-EKCFwDEt.js";import"./index-Baa2ARkH.js";import"./wrapFocus-CFxqynwa.js";import"./useOutsideClick-eIEGF3iK.js";import"./bucket-1-CLzSBq5W.js";import"./bucket-7-D3wViG_p.js";import"./ButtonSet-CPatE6mM.js";import"./DismissibleTag-C22K1byy.js";import"./NotFoundEmptyState-5My0YZlJ.js";import"./NotFoundIllustration-Butpm8o1.js";import"./Tearsheet-Bclcz-d6.js";import"./TearsheetShell-CK_7nIp5.js";import"./useResizeObserver-CDXgigJs.js";import"./useIsomorphicEffect-CxQ5hh_U.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-8n0VjC8z.js";import"./ComposedModal-bhxv7MDS.js";import"./InlineLoading-B5kGlaxG.js";import"./usePresenceContext-DUsD1D5h.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-Cn2LgJb-.js";import"./usePortalTarget-Do2gNt2e.js";import"./index-DVMCKYtv.js";import"./useFocus-CaJWVFXn.js";import"./usePresence-rKc1wULH.js";import"./usePreviousValue-DwrLjxQX.js";import"./ActionSet-Db6dLYiY.js";import"./TearsheetNarrow-CPfsVJ2J.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=MultiAddSelect.stories-DJrbsBrI.js.map
