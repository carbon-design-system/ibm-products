var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-DhIv2Cz2.js";import{s as z,m as I,E as b}from"./_storybook-styles-BVRTvy6L.js";import{D as y}from"./DatagridActions-BF9tatMt.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-B3zeFIWJ.js";import{u as N}from"./useExpandedRow-D0dy6swj.js";import{u as G}from"./useSelectRows-B_GQQIDP.js";import{E as P}from"./bucket-6-gELQZyM7.js";import{T as _}from"./bucket-18-DwSZKhzU.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-bhxorkyk.js";import"./index-d8hsHx5V.js";import"./index-C1b99TSV.js";import"./bucket-19-0ioYX1hu.js";import"./bucket-7-ChCKEQjG.js";import"./ComposedModal-iTGiThv_.js";import"./index-Du8T86O1.js";import"./LayerContext-FIF-mJpy.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-B_BXmM1b.js";import"./InlineLoading-Bgh3e9T9.js";import"./mergeRefs-BH0-8uDG.js";import"./usePresenceContext-93kFRESp.js";import"./Text-OlEmoPCg.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-5tvSKAzz.js";import"./utils-A8kjRMc4.js";import"./TableToolbarSearch-DccDhjYy.js";import"./wrapComponent-s-x2995U.js";import"./Search-wqPxGHPL.js";import"./FormContext-DAgWiOK8.js";import"./bucket-16-C01d6Qhf.js";import"./Dropdown-BF9sC_vw.js";import"./index-BdnD2v1g.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-B_vakQDX.js";import"./bucket-20-BLUMbjfu.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-DKMBpR0M.js";import"./useControllableState-fPT1x_Ln.js";import"./useAttachedMenu-DMGjL-WQ.js";import"./environment-DRRHKtsv.js";import"./index-oiVpOFsS.js";import"./index-g9DVUp9g.js";import"./bucket-13-DyhhZxvH.js";import"./useOutsideClick-9VZ01zkD.js";import"./OverflowMenuItem-D3dWqOAs.js";import"./useFilterContext-C67Wmco7.js";import"./useIsomorphicEffect-DtbzomVA.js";import"./bucket-0-BqBXgcBa.js";import"./bucket-15-C1K9QxrW.js";import"./devtools-KpiUTsjr.js";import"./TableRow-C5W_Ihak.js";import"./bucket-1-D-iSrM3O.js";import"./TableToolbar-DqYbPjpX.js";import"./index-4j00D-3u.js";import"./ErrorEmptyState-mRt1sjSG.js";import"./EmptyState-Dl0Eh-O3.js";import"./EmptyStateV2.deprecated-DCC0P_lg.js";import"./Link-CWTaGkXd.js";import"./ErrorIllustration-eb7wH8mX.js";import"./useId-BhAClTZZ.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-LjuXuhO8.js";import"./NoDataIllustration-Cjab4e-M.js";import"./NotFoundEmptyState-_Z9sbgZX.js";import"./NotFoundIllustration-khG64cda.js";import"./index.esm-DzjJIS_2.js";import"./usePreviousValue-Dyx9Q-0l.js";import"./useResizeObserver-Cm2iF_nj.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-f0w4ifyk.js";import"./props-helper-CYANkYtB.js";import"./useClickOutside-BnNyVZrg.js";import"./AccordionItem-6ecSal5g.js";import"./Checkbox-uM1nplfy.js";import"./DatePicker-BRoQa0KB.js";import"./documentLang-E105Y72C.js";import"./FormGroup-BRj9ATHy.js";import"./MultiSelect-CiGlk7oX.js";import"./NumberInput-UdoCTq1_.js";import"./bucket-17-Cw9icrIT.js";import"./RadioButton-B3Rhhe_d.js";import"./RadioButtonGroup-CSrmGJ52.js";import"./usePrefersReducedMotion-Db4kU0hj.js";import"./usePresence-BZpvy8rl.js";import"./ActionSet-CRmQzfcZ.js";import"./useWindowResize-Dh2o6N6s.js";import"./TagSet-BrouRxQ8.js";import"./Tag-SRa8Jkg6.js";import"./DefinitionTooltip-CJc_xAEX.js";import"./DismissibleTag-EjLvQ1zX.js";import"./usePortalTarget-aIXbwh_C.js";import"./OperationalTag-B5aQgm5A.js";import"./SkeletonText-Ctv_2VkX.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-2LVa_Mtw.js";import"./TableSelectRow-Ba9WSd0F.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  aiLabel: <ExampleAILabel />,
}
`}},{description:"or used directly from the AILabel component itself",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  aiLabel: (
    <AILabel className="ai-label-container" autoAlign={false} align="bottom-right">
      <AILabelContent>
        ...
        ...
      </AILabelContent>
    </AILabel>
  ),
}
`}},{description:"To include a AILabel on the row level, include a `aiLabel` property in your row data with the same structure as outlined above."}]}),"page")},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleAILabel"]},B=i((o,r)=>[{Header:"Row Index",accessor:i((u,m)=>m,"accessor"),sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,aiLabel:!o&&p.createElement(b,{align:r})},{Header:"Someone 1",accessor:"someone1",aiLabel:!o&&p.createElement(b,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],"getDefaultHeader"),d={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:i(o=>{console.log("row size changed to: ",o)},"onRowSizeChange"),rowActions:[{id:"edit",itemText:"Edit",icon:P,onClick:A("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:_,isDelete:!0,onClick:A("Clicked row action: delete")}]},c={gridTitle:d.gridTitle,gridDescription:d.gridDescription,useDenseHeader:d.useDenseHeader,rowSize:d.rowSize,rowSizes:d.rowSizes,onRowSizeChange:d.onRowSizeChange},v=i(({row:o})=>{const r=D();return p.createElement("div",{className:`${r}__test-class-with-prefix-hook`},"Content for row index: ",o.id)},"ExpansionRenderer"),k=i(({rowAiLabel:o,rowAiLabelAlign:r,withSorting:u,withSelect:m,withExpansion:g,...S})=>{const L=p.useMemo(()=>B(o,r),[]),[x]=T.useState(I(10,2,{enableAIRow:o,aiLabelAlign:r})),C=f({columns:L,data:x,DatagridActions:y,ExpandedRowContentComponent:v,...S.defaultGridProps},u?R:"",m?G:"",g?N:"");return p.createElement(h,{datagridState:C})},"GridWithAILabelColumnHeader"),w=i(({rowAiLabel:o,rowAiLabelAlign:r,withSorting:u,withSelect:m,withExpansion:g,...S})=>p.createElement(k,{defaultGridProps:{...S},withSorting:u,rowAiLabel:o,rowAiLabelAlign:r,withSelect:m,withExpansion:g}),"GridWithAILabelColumnHeaderWrapper"),W="Column AILabel",t=w.bind({});t.storyName=W;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...c};const O="Column AILabel sort",a=w.bind({});a.storyName=O;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...c,withSorting:!0};const M="Row AILabel",n=w.bind({});n.storyName=M;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...c,rowAiLabel:!0,rowAiLabelAlign:"right"};const V="Row AILabel with selection",s=w.bind({});s.storyName=V;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...c,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0};const F="Row AILabel with selection and expansion",l=w.bind({});l.storyName=F;l.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};l.args={...c,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0,withExpansion:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  rowAiLabel,
  rowAiLabelAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithAILabelColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowAiLabel={rowAiLabel} rowAiLabelAlign={rowAiLabelAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...l.parameters?.docs?.source}}};const vo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,vo as __namedExportsOrder,Bo as default};
//# sourceMappingURL=AiLabel.stories-DQeLQ8P9.js.map
