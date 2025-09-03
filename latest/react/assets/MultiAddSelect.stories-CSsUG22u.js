import{e as t,S as b,p as g,r as y,B as v}from"./iframe-BlQ-LkYW.js";import{i as S}from"./headshot-DLlybMEg.js";import{M as d}from"./MultiAddSelect-DsE52tRR.js";import{at as i}from"./bucket-5-CmeHbo7D.js";import{G as m}from"./bucket-7-DldHT251.js";import"./devtools-BJZSxg-N.js";import"./AddSelect-mrbJj2Xh.js";import"./Tag-CsYb8P2P.js";import"./DefinitionTooltip-Ch2quHzY.js";import"./index-CgaasdUn.js";import"./bucket-18-Bl8QDCbK.js";import"./utils-BevHIbez.js";import"./Text-DSSpV4WJ.js";import"./AccordionItem-BhtMrcrS.js";import"./NoDataEmptyState-Ct01DPXx.js";import"./EmptyState-UEgZGf8z.js";import"./EmptyStateV2.deprecated-CJfAaoaS.js";import"./Link-CMYINvP1.js";import"./index-DNGc5teW.js";import"./NoDataIllustration-D99JvkUc.js";import"./useId-C2_b1b81.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-MNQyZhp_.js";import"./bucket-12-DYGdvqH1.js";import"./Dropdown-BvmhsKBp.js";import"./index-CXYHyzp2.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-DkhQXZ0G.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-Ds7BYjit.js";import"./MultiSelect-B_rQyAfc.js";import"./Checkbox-KCN2jQ_S.js";import"./index-DZN9_q_B.js";import"./LayerContext-BvuXYV0V.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DJp0gzVb.js";import"./TooltipTrigger-OSww4Xu7.js";import"./bucket-14-DLbuTogh.js";import"./Search-KyKbUvD4.js";import"./bucket-15-CM_J5Vvb.js";import"./MenuItem-Cde_w9Z-.js";import"./useControllableState-C05qBH-j.js";import"./useAttachedMenu-BakFN8R8.js";import"./bucket-2-BDIkUbzC.js";import"./index-VNwEaoKl.js";import"./wrapFocus-C2HPB9zJ.js";import"./useOutsideClick-DRiKtgqC.js";import"./bucket-1-DU5MGOmF.js";import"./bucket-6-C4pRq2Bl.js";import"./ButtonSet-BLtxr1g9.js";import"./DismissibleTag-Da7z3e6w.js";import"./NotFoundEmptyState-CExQFyMc.js";import"./NotFoundIllustration-B0zRLUCn.js";import"./Tearsheet-Bh1nDzzQ.js";import"./TearsheetShell-Bdk0FY1t.js";import"./useResizeObserver-w8n_UuuT.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-DmAPJ46T.js";import"./ComposedModal-CtswQ6eu.js";import"./index-BEhuL1MR.js";import"./InlineLoading-BiPU-E2v.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-Zd5LDKuM.js";import"./usePortalTarget-a9acdh7P.js";import"./index-DwBZIlXB.js";import"./useFocus-CTb6PBXw.js";import"./usePreviousValue-BfWd4m5G.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./ActionSet-DxtE6QvT.js";import"./TearsheetNarrow-D24bpYEv.js";const u=()=>t.createElement(b,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]});u.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const p=`${g.prefix}--add-select__meta-panel`,Ie={title:"Patterns/Prebuilt patterns/Add and select/MultiAddSelect",component:d,tags:["autodocs"],parameters:{docs:{page:u}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${p}-entry`},t.createElement("p",{className:`${p}-entry-title`},"html support"),t.createElement("p",{className:`${p}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:e=>t.createElement(i,{size:16,...e}),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:e=>t.createElement(i,{size:16,...e})}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:e=>t.createElement(i,{size:16,...e})},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:e=>t.createElement(i,{size:16,...e})}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:e=>t.createElement(i,{size:16,...e})}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:S,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:e=>t.createElement(m,{size:24,...e}),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:e=>t.createElement(m,{size:24,...e}),theme:"light"}}]}}}}},a={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:e=>console.log(e),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},n=(e,h)=>{const[f,c]=y.useState(h?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(d,{...e,open:f,onClose:()=>c(!1)}),t.createElement(v,{onClick:()=>c(!0)},"Launch AddSelect"))},o=n.bind({});o.args={items:1,...a};const r=n.bind({});r.args={items:2,...a,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const s=n.bind({});s.args={items:3,...a};const l=n.bind({});l.args={items:4,...a};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...l.parameters?.docs?.source}}};const Ne=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{o as Default,l as WithAvatars,r as WithHierarchy,s as WithModifiers,Ne as __namedExportsOrder,Ie as default};
