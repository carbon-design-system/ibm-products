var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-Cyj4LIh5.js";import{s as z,m as I,E as b}from"./_storybook-styles-BfZsCYec.js";import{D as y}from"./DatagridActions-C2knOGDR.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CVVoMHMT.js";import{u as N}from"./useExpandedRow-Cm46Mbxr.js";import{u as G}from"./useSelectRows-Drg5iB_9.js";import{E as P}from"./bucket-6-DL_KxiA5.js";import{T as _}from"./bucket-19-B7hMRFoz.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-hGDgkZDo.js";import"./index-CrQOVYp8.js";import"./index-DbpC7nej.js";import"./bucket-7-Dm8yNK4V.js";import"./bucket-20-Dg4NJRV5.js";import"./MenuItem-CrhULKEy.js";import"./Text-B0E6WkMH.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-C2Q1Osuc.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CO01KbI6.js";import"./ComposedModal-DytiUj0S.js";import"./mergeRefs-BH0-8uDG.js";import"./index-vioIMqkQ.js";import"./LayerContext-DFxG2aK0.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-BAKBuigj.js";import"./InlineLoading-B1oqkF9D.js";import"./ButtonSet-C5cAYjyA.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-Xv7dNCVp.js";import"./OverflowMenuItem-A5L2ErRE.js";import"./TableToolbarSearch-Cl0MBhTZ.js";import"./wrapComponent-CSLQrzVD.js";import"./Search-DwAgCQJ9.js";import"./FormContext-DyuhYneE.js";import"./bucket-16-BokBCq4p.js";import"./index-sdxIuNoj.js";import"./bucket-13-BkGR996w.js";import"./useOutsideClick-C3GdYngI.js";import"./Dropdown-DFN0MI2V.js";import"./useNormalizedInputProps-DwDb6zRU.js";import"./downshift.esm-CJNHbtOw.js";import"./inheritsLoose-CdLKJotq.js";import"./index-Dvx0FKHV.js";import"./useFilterContext-D6Ld6Zl6.js";import"./useIsomorphicEffect-CQvdjB27.js";import"./bucket-0-DaAi4Fe5.js";import"./bucket-15-NHicM6Y1.js";import"./devtools-DMaYy3Jo.js";import"./TableRow-me4Jvbcm.js";import"./bucket-1-Bb5Y-ET4.js";import"./TableToolbar-8MyzU2mJ.js";import"./index-DZkQvb7J.js";import"./ErrorEmptyState-BwzerY7y.js";import"./EmptyState-BSFMvmz1.js";import"./EmptyStateV2.deprecated-B8Z-XGEj.js";import"./Link-B2pfHtX8.js";import"./ErrorIllustration-B8vMAyAC.js";import"./useId-CZbCsq9r.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CQQlat4h.js";import"./NoDataIllustration-DGE3hKFd.js";import"./NotFoundEmptyState-Bo2aMCbn.js";import"./NotFoundIllustration-BnSkb4Jn.js";import"./index.esm-C4umZs2t.js";import"./usePreviousValue-Bjujx9j5.js";import"./useResizeObserver-YS0buUPl.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BQHgwKad.js";import"./props-helper-BeW6tFoM.js";import"./useClickOutside-B93TtIXi.js";import"./AccordionItem-BwePvo_9.js";import"./Checkbox-DK3hYZIl.js";import"./hasHelperText-CcJ_VphT.js";import"./index-BUCxBALq.js";import"./DatePicker-pVaaULEx.js";import"./FormGroup-gic93zTi.js";import"./MultiSelect-C2K54h7R.js";import"./NumberInput-CBcnLFy_.js";import"./bucket-17-Bj5oC3tN.js";import"./RadioButtonGroup-DzzMyLRI.js";import"./usePrefersReducedMotion-BgCpKvj3.js";import"./usePresence-CzBXfber.js";import"./ActionSet-DoSddDiM.js";import"./useWindowResize-9pQxPi5j.js";import"./TagSet-Yu_7ogjA.js";import"./Tag-CJ0sxIBB.js";import"./DefinitionTooltip-BE1ILu5m.js";import"./DismissibleTag-25UO8O-0.js";import"./usePortalTarget-Bek0sZsK.js";import"./OperationalTag-BD6ve_XB.js";import"./SkeletonText-BF68X2de.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-mpegkUao.js";import"./TableSelectRow-3dX3-4Dc.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const _o=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,_o as __namedExportsOrder,Po as default};
//# sourceMappingURL=AiLabel.stories-BwdHhNSU.js.map
