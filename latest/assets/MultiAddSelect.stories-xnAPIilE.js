import{e as t,r as E}from"./index-DtHxqM--.js";import"./index-CMVdkQrl.js";import{p as M,B as O}from"./settings-C3kz8lqM.js";import{i as P}from"./headshot-DLlybMEg.js";import{S as k}from"./StoryDocsPage-BVsvdpr0.js";import{M as z}from"./MultiAddSelect-C2bIrDhg.js";import{al as i}from"./bucket-5-BJPJ9WD6.js";import{G as d}from"./bucket-7-Ca02d0BY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./index-BridxrSo.js";import"./iframe-CjQaoex9.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-CmBIJVOZ.js";import"./devtools-CJD9WatR.js";import"./AddSelect-Ce3cOsF9.js";import"./Tag-TnuyD0LA.js";import"./DefinitionTooltip-LoiwcsAO.js";import"./Text-DeLhjZ72.js";import"./AccordionItem-mW9-CnqC.js";import"./NoDataEmptyState-DoRMV19h.js";import"./Link-C2-sHeI7.js";import"./EmptyState-GqVIdKJ1.js";import"./props-helper-3VCN3cvm.js";import"./index-BUpfIj5_.js";import"./EmptyStateV2-CQrG6WlY.js";import"./NoDataIllustration-GZbV9jT2.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./BreadcrumbItem-Cw5n7web.js";import"./bucket-12-sLjQv6-z.js";import"./Dropdown-B-2WRuCt.js";import"./index-BCwPvCrC.js";import"./inheritsLoose-D3Az7yH5.js";import"./FormContext-C4Nuixum.js";import"./mergeRefs-CTUecegF.js";import"./bucket-18-xYgoy0Nr.js";import"./MultiSelect-gOpyhhlY.js";import"./Checkbox-CVg4b6-b.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./UserProfileImage-0bChlYVO.js";import"./TooltipTrigger-XoCaIUMA.js";import"./bucket-2-D0m0gcwr.js";import"./bucket-13-RRzC-37m.js";import"./index-CrpWSFad.js";import"./useAttachedMenu-C8bta719.js";import"./wrapFocus-4QzkQnOM.js";import"./useOutsideClick-ChWAVyF5.js";import"./Search-QqBUyI3s.js";import"./bucket-15-DPFZzV9q.js";import"./OverflowMenuItem-CqnmCkEJ.js";import"./bucket-0-CHtg8bFp.js";import"./bucket-1-wrgsOOV0.js";import"./bucket-6-CRocNvF-.js";import"./ButtonSet-S29aEq84.js";import"./DismissibleTag-DlU6OkfL.js";import"./NotFoundEmptyState-DIZoLXD1.js";import"./NotFoundIllustration-BoSJ_VqF.js";import"./Tearsheet-7xt4N6ny.js";import"./TearsheetShell-Crph82d4.js";import"./useResizeObserver-DtwIjblY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DK_gDe0c.js";import"./InlineLoading-C_FY6vWy.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./Wrap-EeCeAlef.js";import"./usePortalTarget-BpuhspP7.js";import"./feature-flags-CgeLICHA.js";import"./index-BLKsqoyU.js";import"./useFocus-WYpTfz8b.js";import"./usePreviousValue-CuNkkQo9.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./ActionSet-CwOjg9U4.js";import"./TearsheetNarrow-BNWzNt73.js";const A=()=>t.createElement(k,{altGuidelinesHref:"https://pages.github.ibm.com/carbon/ibm-products/patterns/add-and-select/usage",blocks:[{title:"Structuring items",description:`The \`items\` object has a lot of customization potential and can greatly effect
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
}`}},{description:"The properties that have been commented on like `id`, `value`, and `icon` have\nspecific use within the component and are generally required. Other properties\nlike `fileType` and `size` do not and will simply show up as details in the\nsidebar when selected."}]});A.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const m=`${M.prefix}--add-select__meta-panel`,st={title:"IBM Products/Patterns/Add and select/MultiAddSelect",component:z,tags:["autodocs"],parameters:{docs:{page:A}},argTypes:{items:{control:{type:"select",labels:{0:"no items",1:"three items",2:"with hierarchy",3:"with modifiers",4:"with avatars"}},options:[0,1,2,3,4],mapping:{0:{entries:[]},1:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",meta:t.createElement("div",{className:`${m}-entry`},t.createElement("p",{className:`${m}-entry-title`},"html support"),t.createElement("p",{className:`${m}-entry-body`},"also supports nodes in the meta attribute"))},{id:"2",value:"2",title:"item 2",meta:[{id:"description",title:"description",value:"description text"},{id:"secondary_category",title:"secondary category",value:"knowledge accelerator"}]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle"}]},2:{sortBy:["title"],entries:[{id:"1",value:"folder 1",title:"folder 1",children:{sortBy:["title","size"],filterBy:"fileType",entries:[{id:"1-1",value:"file1.pdf",title:"file1.pdf",fileType:"pdf",size:"100",icon:e=>t.createElement(i,{size:16,...e}),tag:"business",children:{entries:[{id:"9000",value:"9000.html",title:"9000.html",fileType:"html",size:"9000",icon:e=>t.createElement(i,{size:16,...e})}]}},{id:"1-2",value:"index.js",title:"index.js",fileType:"js",size:"200",icon:e=>t.createElement(i,{size:16,...e})},{id:"1-3",value:"sitemap.xml",title:"sitemap.xml",fileType:"xml",size:"10",icon:e=>t.createElement(i,{size:16,...e})}]}},{id:"2",value:"folder 2",title:"folder 2",children:{entries:[{id:"7000",value:"7000.html",title:"7000.html",fileType:"html",size:"7000",icon:e=>t.createElement(i,{size:16,...e})}]}}]},3:{modifiers:{id:"role",label:"Select Roles",title:"Role",options:["editor","viewer","admin"],multiSelect:!0},entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",role:["editor","viewer"]},{id:"2",value:"2",title:"item 2",role:["editor"]},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",role:["admin"]}]},4:{entries:[{id:"1",value:"1",title:"item 1",subtitle:"item 1 subtitle",avatar:{src:P,alt:"head shot",theme:"light"}},{id:"2",value:"2",title:"item 2",subtitle:"item 2 subtitle",avatar:{icon:e=>t.createElement(d,{size:24,...e}),backgroundColor:"dark-green",theme:"light"}},{id:"3",value:"3",title:"item 3",subtitle:"item 3 subtitle",avatar:{icon:e=>t.createElement(d,{size:24,...e}),theme:"light"}}]}}}}},a={className:"placeholder-class",clearFiltersText:"Clear filters",closeIconDescription:"Close",columnInputPlaceholder:"Find",description:"Select business terms from the list",globalSearchLabel:"global search label",globalSearchPlaceholder:"Find business terms",illustrationTheme:"light",influencerTitle:"Selected business terms",itemsLabel:"Business terms",metaIconDescription:"View meta information",metaPanelTitle:"Personal information",navIconDescription:"View children",noResultsTitle:"No results",noSelectionDescription:"Select a term to include the full set of the governance artifacts it contains in the governance scope.",noSelectionTitle:"No business terms selected",noResultsDescription:"Try again",onCloseButtonText:"Cancel",onSubmit:e=>console.log(e),onSubmitButtonText:"Add",searchResultsTitle:"Search results",title:"Add business terms",sortByLabel:"Sort",filterByLabel:"Filter"},n=(e,p)=>{const[C,c]=E.useState((p==null?void 0:p.viewMode)!=="docs");return t.createElement(t.Fragment,null,t.createElement(z,{...e,open:C,onClose:()=>c(!1)}),t.createElement(O,{onClick:()=>c(!0)},"Launch AddSelect"))},o=n.bind({});o.args={items:1,...a};const r=n.bind({});r.args={items:2,...a,globalFilters:[{id:"fileType",label:"File type"},{id:"size",label:"Size"},{id:"tag",label:"Tag"}],globalFiltersIconDescription:"Filter",globalFiltersLabel:"Filters",globalFiltersPlaceholderText:"Choose an option",globalFiltersPrimaryButtonText:"Apply",globalFiltersSecondaryButtonText:"Reset",globalSortBy:["title"]};const s=n.bind({});s.args={items:3,...a};const l=n.bind({});l.args={items:4,...a};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,g,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,S,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,B,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(args, context) => {
  const [open, setOpen] = useState(context?.viewMode !== 'docs');
  return <>
      <MultiAddSelect {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </>;
}`,...(x=(B=l.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const lt=["Default","WithHierarchy","WithModifiers","WithAvatars"];export{o as Default,l as WithAvatars,r as WithHierarchy,s as WithModifiers,lt as __namedExportsOrder,st as default};
