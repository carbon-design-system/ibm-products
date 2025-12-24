import{e as t,S as b,p as g,r as y,B as v}from"./iframe-Bn5s87s4.js";import{i as S}from"./headshot-DLlybMEg.js";import{M as d}from"./MultiAddSelect-Db08awdw.js";import{D as i}from"./bucket-5-3PRz3JSU.js";import{G as m}from"./bucket-7-CvmQKYEr.js";import"./preload-helper-PPVm8Dsz.js";import"./devtools-mVE9FHp6.js";import"./AddSelect-CHzGjAlo.js";import"./Tag-sQsnyISB.js";import"./Text-DPxQhslY.js";import"./DefinitionTooltip-CwHpCgPH.js";import"./index-C9jChmFj.js";import"./bucket-18-CjQdBR0X.js";import"./utils-DQejB-zS.js";import"./AccordionItem-O5m-Fw82.js";import"./NoDataEmptyState-AwkmRdMV.js";import"./EmptyState-DS7S8eyD.js";import"./EmptyStateV2.deprecated-B31rEqbT.js";import"./Link-DzeRYl9b.js";import"./index-DlCtKpC6.js";import"./NoDataIllustration-DfcHc9y-.js";import"./useId-CzlKQG_-.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-D-vJ8KBr.js";import"./bucket-13-Dndxk466.js";import"./Dropdown-CMaceGXW.js";import"./index-wuqyTjN_.js";import"./inheritsLoose-DHKJTbHM.js";import"./FormContext-C5gYs1Iz.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-jypMYg7X.js";import"./bucket-19-C9HfQtRN.js";import"./defaultItemToString-zSItMTD_.js";import"./MultiSelect-bJRW7UcD.js";import"./Checkbox-CJXd6mx6.js";import"./index-D9UDgIUg.js";import"./LayerContext-BihYEre2.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-DPR0-Q_-.js";import"./TooltipTrigger-DQXjr-uF.js";import"./bucket-14-DJtJQxMb.js";import"./Search-T7tqaylz.js";import"./bucket-15-CS3Y4Mgh.js";import"./MenuItem-CrClIjlz.js";import"./useControllableState-CDFtAfEZ.js";import"./useAttachedMenu-DhlZrLf-.js";import"./bucket-2-S1beR83x.js";import"./index-DViADvk5.js";import"./wrapFocus-p8CeO0Q6.js";import"./useOutsideClick-f2_z0C-o.js";import"./bucket-1-0FbbcnG1.js";import"./bucket-6-4QPuED9F.js";import"./ButtonSet-CXQgRZeZ.js";import"./DismissibleTag-CfULJo6W.js";import"./NotFoundEmptyState-BiglsIAY.js";import"./NotFoundIllustration-rb0wsZRf.js";import"./Tearsheet-BeUiHKn8.js";import"./TearsheetShell-B43UyWKV.js";import"./useResizeObserver-tdiREPfS.js";import"./useIsomorphicEffect-C6KJAnKi.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./props-helper-CnD5lOtX.js";import"./ComposedModal-0BWEXzM1.js";import"./InlineLoading-D_UBaimj.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./Wrap-Chkdp82D.js";import"./usePortalTarget-GjmdVlNb.js";import"./index-CcsFybhx.js";import"./useFocus-D9EoHutA.js";import"./usePreviousValue-Sk-kuPEp.js";import"./ActionSet-GABrFEnO.js";import"./TearsheetNarrow-BPnVU72p.js";const u=()=>t.createElement(b,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]});u.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const p=`${g.prefix}--add-select__meta-panel`,We={title:"Patterns/Prebuilt patterns/Add and select/MultiAddSelect",component:d,tags:["autodocs"],parameters:{docs:{page:u}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${p}-entry`},t.createElement("p",{className:`${p}-entry-title`},"html support"),t.createElement("p",{className:`${p}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:e=>t.createElement(i,{size:16,...e}),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:e=>t.createElement(i,{size:16,...e})}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:e=>t.createElement(i,{size:16,...e})},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:e=>t.createElement(i,{size:16,...e})}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:e=>t.createElement(i,{size:16,...e})}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:S,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:e=>t.createElement(m,{size:24,...e}),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:e=>t.createElement(m,{size:24,...e}),theme:"light"}}]}}}}},a={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",noTearsheet:!1,onCloseButtonText:"Cancel",onSubmit:e=>console.log(e),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},n=(e,h)=>{const[f,c]=y.useState(h?.viewMode!=="docs");return t.createElement(t.Fragment,null,t.createElement(d,{...e,open:f,onClose:()=>c(!1)}),e?.noTearsheet===!1&&t.createElement(v,{onClick:()=>c(!0)},"Launch AddSelect"))},o=n.bind({});o.args={items:1,...a};const r=n.bind({});r.args={items:2,...a,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const s=n.bind({});s.args={items:3,...a};const l=n.bind({});l.args={items:4,...a};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      {args?.noTearsheet === false && <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>}
    </>;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args, context) => {
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
}`,...l.parameters?.docs?.source}}};const Re=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{o as Default,l as WithAvatars,r as WithHierarchy,s as WithModifiers,Re as __namedExportsOrder,We as default};
//# sourceMappingURL=MultiAddSelect.stories-Ck-ooxTM.js.map
