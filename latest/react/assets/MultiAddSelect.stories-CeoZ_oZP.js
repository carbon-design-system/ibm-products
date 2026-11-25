var g=Object.defineProperty;var i=(e,c)=>g(e,"name",{value:c,configurable:!0});import{R as t,aj as y,K as v,r as S,L as T}from"./iframe-D4ZNlhex.js";import{i as w}from"./headshot-DLlybMEg.js";import{A as x}from"./index-7eWKnxVS.js";import{M as h}from"./MultiAddSelect-84gi9AeL.js";import{G as u}from"./bucket-8-DhFnlBxN.js";import{a as r}from"./bucket-6-DqPudBAV.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-DhLs2RAA.js";import"./bucket-21-Hs8N1bt_.js";import"./devtools-DViE3VQV.js";import"./AddSelect-BppcukJ6.js";import"./Tag-Cz04dbUn.js";import"./Text-BFiLljUe.js";import"./DefinitionTooltip-CR_ShGMd.js";import"./index-Cao-7C0a.js";import"./index-BRJsLXjB.js";import"./bucket-20-gkMQqIp8.js";import"./AccordionItem-DtcNHpHj.js";import"./NoDataEmptyState-BUU2Rhk3.js";import"./EmptyState-CEqICMFs.js";import"./EmptyStateV2.deprecated-B1Roo50L.js";import"./Link-DMaMd0aW.js";import"./index-BNXmMFq-.js";import"./NoDataIllustration-B1dbh9sV.js";import"./useId-BAhhyiL4.js";import"./uuidv4-Fbcg8Vng.js";import"./BreadcrumbItem--zxukAkA.js";import"./index-DVlWHlQG.js";import"./bucket-14-Dx-xo6GD.js";import"./index-B11j6z7X.js";import"./LayerContext-CnF_2LIS.js";import"./clamp-ekNJC_Xv.js";import"./Dropdown-DYf3rN8T.js";import"./defaultItemToString-DDHghiWu.js";import"./downshift.esm-BMobXh-3.js";import"./FormContext-C8V-dtCn.js";import"./inheritsLoose-CdLKJotq.js";import"./mergeRefs-BH0-8uDG.js";import"./useNormalizedInputProps-wWIaiWPW.js";import"./useNoInteractiveChildrenForLabel-CA4kHAjX.js";import"./MultiSelect-D07Snb__.js";import"./Checkbox-6O6B4yM3.js";import"./hasHelperText-CcJ_VphT.js";import"./UserProfileImage-Cn9FzEQ_.js";import"./TooltipTrigger-CovXDrY-.js";import"./bucket-15-afOcBKCr.js";import"./Search-CfdElKFB.js";import"./bucket-17-Chydjutf.js";import"./MenuItem-Cgbzc84F.js";import"./useAttachedMenu-ByAy3J_D.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BXYtIRqX.js";import"./bucket-2-DJPOzxb9.js";import"./index-hFhe0ejJ.js";import"./wrapFocus-DsASMros.js";import"./useOutsideClick-tGCA8qrx.js";import"./bucket-1-DlvJv0Oz.js";import"./bucket-7-CcmuUw8_.js";import"./ButtonSet-B1q1jsNw.js";import"./DismissibleTag-4RQ2L9pW.js";import"./NotFoundEmptyState--2uVv1tI.js";import"./NotFoundIllustration-DoDiOwZj.js";import"./Tearsheet-Cy4Q-w-h.js";import"./TearsheetShell-Dnz_7ST3.js";import"./useResizeObserver-68nEIMyj.js";import"./useIsomorphicEffect-DOQnSDPs.js";import"./getNodeTextContent-CjFansOq.js";import"./props-helper-BMZxDTTj.js";import"./ComposedModal--U1045z8.js";import"./isTopmostVisibleModal-X8s_iQWQ.js";import"./InlineLoading-BxyF_Sbz.js";import"./Wrap-7W2WVnDZ.js";import"./usePortalTarget-Dl9O8tJb.js";import"./index-Bx9Ozrxi.js";import"./useFocus-Cd8AYRha.js";import"./usePresence-Bz58WhcL.js";import"./usePreviousValue-Btif0maI.js";import"./ActionSet-BAd8uqia.js";import"./TearsheetNarrow-B1GNgnEk.js";const f=i(()=>t.createElement(y,{deprecationNotice:"This component is deprecated and will be removed in the next major version. Please migrate to the [MultiAddSelect](https://carbon-for-ibm-products.netlify.app/?path=/docs/patterns-add-and-select-multiaddselect--overview) pattern.",altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
//# sourceMappingURL=MultiAddSelect.stories-CeoZ_oZP.js.map
