var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-BJfS6TR2.js";import{s as z,m as I,E as b}from"./_storybook-styles-CsZIYQly.js";import{D as y}from"./DatagridActions-DPRW1rnb.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-BjvV3w6s.js";import{u as N}from"./useExpandedRow-CzVMHif0.js";import{u as G}from"./useSelectRows-DmNAl1hR.js";import{c as P}from"./bucket-6-CBfFKy_q.js";import{T as _}from"./bucket-19-eqggub-2.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DhZwl8wu.js";import"./index-BK1usqqk.js";import"./index-Nx5-3yW_.js";import"./bucket-7-DIXVgq6-.js";import"./bucket-20-BhP_pvjx.js";import"./MenuItem-Dt_IACOd.js";import"./Text-BAQNTtEB.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B-fu5Ypa.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLNdWP-M.js";import"./ComposedModal-C3MAqUaA.js";import"./mergeRefs-BH0-8uDG.js";import"./index-OuOVqiZr.js";import"./LayerContext-C_9YIeQ1.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-CDv8h4ly.js";import"./InlineLoading-DED7OqEE.js";import"./ButtonSet-CgqU260_.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-Dh3S89fz.js";import"./OverflowMenuItem-Qha8f4w7.js";import"./TableToolbarSearch-CKRs6i68.js";import"./wrapComponent-BpQufo1H.js";import"./Search-D49GRVyn.js";import"./FormContext-B_fBxqkl.js";import"./bucket-16-Bm6OjJGX.js";import"./index-C_Pwui4q.js";import"./bucket-13-BogTAl92.js";import"./useOutsideClick-n0iTSUaL.js";import"./Dropdown-DclHGyF9.js";import"./useNormalizedInputProps-BJ2U48Lt.js";import"./downshift.esm-C6-stRtx.js";import"./inheritsLoose-CdLKJotq.js";import"./index-fQVM-pDZ.js";import"./useFilterContext-DhuG2i63.js";import"./useIsomorphicEffect-D83N95Px.js";import"./bucket-0-BBoKauOS.js";import"./bucket-15-BKBCWofc.js";import"./devtools-BK-O6ZTi.js";import"./TableRow-TlgpVL6c.js";import"./bucket-1-vs56S9m2.js";import"./TableToolbar-BceUArDV.js";import"./index-KMgszfVD.js";import"./ErrorEmptyState-DmuCLqR9.js";import"./EmptyState-BJFFYpPp.js";import"./EmptyStateV2.deprecated-CieHXddP.js";import"./Link-CNXNhgnO.js";import"./ErrorIllustration-BaeIbMnO.js";import"./useId-BlGB52Z5.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CRgjdabu.js";import"./NoDataIllustration-B8wtSbgZ.js";import"./NotFoundEmptyState-t4bmz1RH.js";import"./NotFoundIllustration-DgKJ5ZZ0.js";import"./index.esm-CesEQXCt.js";import"./usePreviousValue-DQPoWaqB.js";import"./useResizeObserver-Uv70ZBHr.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CuTIbJIS.js";import"./props-helper-UsuoU5_v.js";import"./useClickOutside-BGFb35wr.js";import"./AccordionItem-D8lGaxc5.js";import"./Checkbox-BFqI0_a0.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-CCBl_L8V.js";import"./DatePicker-DUD_Ubtr.js";import"./FormGroup-CeUYGdmJ.js";import"./MultiSelect-D3IoP4yS.js";import"./NumberInput-mZahYnrz.js";import"./bucket-17-2KFt3nNe.js";import"./RadioButtonGroup-HCk42cWa.js";import"./index-CvqQxeu_.js";import"./usePrefersReducedMotion-BOp5LYbx.js";import"./usePresence-Bu42Jyf1.js";import"./ActionSet-B6j7E-P6.js";import"./useWindowResize-Di3iKAIh.js";import"./TagSet-1TrNE7Gc.js";import"./Tag-DkToHj7W.js";import"./DefinitionTooltip-DIKStf7i.js";import"./DismissibleTag-CLmPSkgn.js";import"./usePortalTarget-B9YhKQuY.js";import"./OperationalTag-BdqsdZ_P.js";import"./SkeletonText-8lW9XFPH.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-BLOdrsts.js";import"./TableSelectRow-Dx0d6J58.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const Bo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,Bo as __namedExportsOrder,_o as default};
//# sourceMappingURL=AiLabel.stories-DxpDetHt.js.map
