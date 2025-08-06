import{e as t,S as b,p as g,r as y,B as v}from"./iframe-BIFZhnVI.js";import{i as S}from"./headshot-DLlybMEg.js";import{M as d}from"./MultiAddSelect-CoKXP4cv.js";import{at as i}from"./bucket-5-D0HOc1op.js";import{G as m}from"./bucket-7-BZOQq6pn.js";import"./devtools-CwY7Nwoz.js";import"./AddSelect-BXOsc0wh.js";import"./Tag-Dt3sXznE.js";import"./DefinitionTooltip-CFqcVxyo.js";import"./index-f5OplNpe.js";import"./bucket-18-gGZYZqnV.js";import"./utils-Dr8OqWgi.js";import"./Text-De_FGo-w.js";import"./AccordionItem-DUCphrnj.js";import"./NoDataEmptyState-PpjlCL-m.js";import"./EmptyState-Coy_-JQD.js";import"./EmptyStateV2-C0zlLdVw.js";import"./Link-D35FEmIt.js";import"./props-helper-DjmSBFn9.js";import"./index-Cadwwfc1.js";import"./NoDataIllustration-D8JES9HQ.js";import"./useId-C3GxNxEZ.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-DBV-gce7.js";import"./bucket-12-Dw8KRV1d.js";import"./Dropdown-DEWyiB4Z.js";import"./index-DGan2qnv.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-CFAm_7fa.js";import"./mergeRefs-91-mP8KM.js";import"./bucket-19-BZJlF_R9.js";import"./MultiSelect-CWe0g1Uo.js";import"./Checkbox-DDtP4ZQv.js";import"./index-YsSTEGS5.js";import"./LayerContext-F4WW4Vix.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-4SqwYFiy.js";import"./TooltipTrigger-DWECKQAZ.js";import"./bucket-14-CaGhjY69.js";import"./Search-DEL4HtAI.js";import"./bucket-15-DlwXdW_V.js";import"./MenuItem-DIiYNEEd.js";import"./useControllableState-BX4U6x41.js";import"./useAttachedMenu-C5NN-QeW.js";import"./bucket-2-CqoFS1Sx.js";import"./index-B07VMW4b.js";import"./wrapFocus-Cv59NQgU.js";import"./useOutsideClick-BnL9xlTI.js";import"./bucket-1-CXEoC0iP.js";import"./bucket-6-D78KEThR.js";import"./ButtonSet-BoMgkE12.js";import"./DismissibleTag-DZT3OLx0.js";import"./NotFoundEmptyState-BXqnSAGu.js";import"./NotFoundIllustration-kgt-4xOe.js";import"./Tearsheet-Ks2SW8hD.js";import"./TearsheetShell-DprdQp4w.js";import"./useResizeObserver-BEXCT2dX.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-BRvJkANc.js";import"./index-BEhuL1MR.js";import"./InlineLoading-D2bFvRJo.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./Wrap-VoqUg_AJ.js";import"./usePortalTarget-BsUxYanV.js";import"./index-DEXbOqQ6.js";import"./useFocus-Bpz0egyf.js";import"./usePreviousValue-CmKce-sY.js";import"./useIsomorphicEffect-BtioHI2r.js";import"./ActionSet-CJUwVbYk.js";import"./TearsheetNarrow-I5A_vwQS.js";const u=()=>t.createElement(b,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
