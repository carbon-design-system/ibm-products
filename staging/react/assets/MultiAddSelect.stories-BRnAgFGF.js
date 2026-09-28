var g=Object.defineProperty;var i=(e,c)=>g(e,"name",{value:c,configurable:!0});import{R as t,ai as y,p as v,r as S,B as T}from"./iframe-DW3-uaTz.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-CrHmSN-d.js";import{G as u}from"./bucket-8-CN8ZzQUd.js";import{b as r}from"./bucket-6-Ctx0ea3s.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-stAW8lOV.js";import"./AddSelect-CtvRo_TL.js";import"./Tag-Cs5GVl_z.js";import"./Text-9Rf343bW.js";import"./DefinitionTooltip-Dhsz7ABs.js";import"./index-CW34tURC.js";import"./index-Dy_AUQjX.js";import"./bucket-20-CUMfyFy6.js";import"./AccordionItem-XCPzrN9x.js";import"./NoDataEmptyState-B4ZOFGeU.js";import"./EmptyState-D9VPXWl3.js";import"./EmptyStateV2.deprecated-B5AV6Y_S.js";import"./Link-CKVRvRPw.js";import"./index-Bi6NQqEv.js";import"./NoDataIllustration-Dqist2eY.js";import"./useId-BamGQC_a.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-t4HGPQt4.js";import"./index-D8tAyaP4.js";import"./bucket-14-C4mMYt2x.js";import"./index-RJBIqwkc.js";import"./LayerContext-i9ncoyA6.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-CVtr7oND.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-n6HiXoZA.js";import"./FormContext-BwoMjipg.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-tVgXN2Oy.js";import"./bucket-21-DsFiX9a0.js";import"./MultiSelect-BDkezzOM.js";import"./Checkbox-Q6xyGRrh.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-CpZ0LQj1.js";import"./TooltipTrigger-DANmZikO.js";import"./bucket-15-C_DAfMFG.js";import"./Search-9ZBB_MZB.js";import"./bucket-17-CdLpcUzb.js";import"./MenuItem-XPcmGuG-.js";import"./useAttachedMenu-CG0WK2n-.js";import"./environment-DRRHKtsv.js";import"./useControllableState-UV5x6JCJ.js";import"./bucket-2-KS0g-5Ga.js";import"./index-duEQkvY6.js";import"./wrapFocus-DiwjL0CJ.js";import"./useOutsideClick-tokrS-Hu.js";import"./bucket-1-CFREfPg1.js";import"./bucket-7-Bz-ZWQfx.js";import"./ButtonSet-C4e7u8tE.js";import"./DismissibleTag-C_j3X3wP.js";import"./NotFoundEmptyState-JvYwgCbU.js";import"./NotFoundIllustration-ByJWxne5.js";import"./Tearsheet-DCh2ZdF5.js";import"./TearsheetShell-UHadZWgZ.js";import"./useResizeObserver-DofD_Rfz.js";import"./useIsomorphicEffect-BHHWtsVv.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-BH28dCnP.js";import"./ComposedModal-Ba5IoVe_.js";import"./isTopmostVisibleModal-DsXee8yT.js";import"./InlineLoading-KkV8lkHX.js";import"./Wrap-HgNa8Cih.js";import"./usePortalTarget-Bs4GZfDm.js";import"./index-DY_lUEG4.js";import"./useFocus-Bt9Jk-8l.js";import"./usePresence-GPgFjelm.js";import"./usePreviousValue-CejRUetL.js";import"./ActionSet-CI1hp8Ws.js";import"./TearsheetNarrow-W-nXdjit.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=MultiAddSelect.stories-BRnAgFGF.js.map
