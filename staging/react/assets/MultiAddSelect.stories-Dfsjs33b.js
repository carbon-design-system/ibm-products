var g=Object.defineProperty;var i=(e,c)=>g(e,"name",{value:c,configurable:!0});import{e as t,S as y,p as v,r as S,B as T}from"./iframe-D7SEW46n.js";import{i as w}from"./headshot-DLlybMEg.js";import{M as h}from"./MultiAddSelect-C31yQH41.js";import{D as o}from"./bucket-5-D3dcz00j.js";import{G as u}from"./bucket-7-CRuC58BF.js";import"./preload-helper-Cc2_yIPf.js";import"./devtools-1BZM14jD.js";import"./AddSelect-3RH3SGl3.js";import"./Tag-BC0RpE8B.js";import"./Text-CpOZ4YWZ.js";import"./DefinitionTooltip-4VNSzV6_.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./bucket-19-CmSPB5ma.js";import"./utils-DwyE9iBt.js";import"./AccordionItem-uP2XVX23.js";import"./NoDataEmptyState-uNKt9zYR.js";import"./EmptyState-DYIZMgMk.js";import"./EmptyStateV2.deprecated-fVBmDwDA.js";import"./Link-OOPgBSwU.js";import"./index-Db4es_qP.js";import"./NoDataIllustration-D4kCfvHM.js";import"./useId-BxkPAL_z.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem-DsP_RCEN.js";import"./bucket-13-C7lPX_P3.js";import"./Dropdown-C82rGXpz.js";import"./index-CAZ07BHJ.js";import"./inheritsLoose-CdLKJotq.js";import"./FormContext-CPS5qPuK.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-qNpjkVGD.js";import"./defaultItemToString-DDHghiWu.js";import"./MultiSelect-Dy9k0WaO.js";import"./Checkbox-IP95NoIw.js";import"./index-BwA9w7xH.js";import"./LayerContext-C_uCIRSN.js";import"./clamp-ekNJC_Xv.js";import"./UserProfileImage-DMV7nIJa.js";import"./TooltipTrigger-BU8EAN8v.js";import"./bucket-14-NSdcIF6f.js";import"./Search-BzMD7ewh.js";import"./bucket-15-BKeoxuDz.js";import"./MenuItem-C_lxbBvq.js";import"./useControllableState-2egPo8bY.js";import"./useAttachedMenu-DZQd9qUW.js";import"./environment-DRRHKtsv.js";import"./bucket-2-WRuin4Ws.js";import"./index-DN6cfLXq.js";import"./wrapFocus-Bvs_mQRd.js";import"./useOutsideClick-CLLScqF7.js";import"./bucket-1-DHUuE59V.js";import"./ButtonSet-CFLMeBKE.js";import"./DismissibleTag-DJKiZ4P5.js";import"./NotFoundEmptyState-Czz5SyLP.js";import"./NotFoundIllustration-C8ZWqolK.js";import"./Tearsheet-Dlz3eSDL.js";import"./TearsheetShell-Dv2CJ5gT.js";import"./useResizeObserver-B5slglQP.js";import"./useIsomorphicEffect-BXsFz5wQ.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-OxKO76gf.js";import"./ComposedModal-sVw-jxq1.js";import"./InlineLoading-Dh4labHv.js";import"./bucket-6-zb7qZtic.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./Wrap-DbjNrh6Y.js";import"./usePortalTarget-mUvvQ8K9.js";import"./index-ps_JZmSe.js";import"./useFocus-B4ilG4Vh.js";import"./usePreviousValue-Czkq6tDo.js";import"./ActionSet-Bv_ruqbR.js";import"./TearsheetNarrow-iLmNQvB_.js";const f=i(()=>t.createElement(y,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]}),"DocsPage");f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const m=`${v.prefix}--add-select__meta-panel`,$e={title:"Patterns/Prebuilt patterns/Add and select/MultiAddSelect",component:h,tags:["autodocs"],parameters:{docs:{page:f}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${m}-entry`},t.createElement("p",{className:`${m}-entry-title`},"html support"),t.createElement("p",{className:`${m}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:i(e=>t.createElement(o,{size:16,...e}),"icon"),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:i(e=>t.createElement(o,{size:16,...e}),"icon")}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:i(e=>t.createElement(o,{size:16,...e}),"icon")},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:i(e=>t.createElement(o,{size:16,...e}),"icon")}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:i(e=>t.createElement(o,{size:16,...e}),"icon")}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:w,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:i(e=>t.createElement(u,{size:24,...e}),"icon"),theme:"light"}}]}}}}},n={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:i(e=>console.log(e),"onSubmit"),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},p=i((e,c)=>{const[b,d]=S.useState(c?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(h,{...e,open:b,onClose:i(()=>d(!1),"onClose")}),e?.noTearsheet===!1&&t.createElement(T,{onClick:i(()=>d(!0),"onClick")},"Launch AddSelect"))},"Template"),r=p.bind({});r.args={items:1,...n};const s=p.bind({});s.args={items:2,...n,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const l=p.bind({});l.args={items:3,...n};const a=p.bind({});a.args={items:4,...n};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...a.parameters?.docs?.source}}};const Ge=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{r as Default,a as WithAvatars,s as WithHierarchy,l as WithModifiers,Ge as __namedExportsOrder,$e as default};
//# sourceMappingURL=MultiAddSelect.stories-Dfsjs33b.js.map
