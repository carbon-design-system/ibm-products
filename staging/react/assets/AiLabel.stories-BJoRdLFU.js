var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ag as H,r as T,a as D}from"./iframe-O9B_Dp_t.js";import{s as z,m as I,E as b}from"./_storybook-styles-Cn0XBeBy.js";import{D as y}from"./DatagridActions-DGZsbU7u.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-PqmLu7as.js";import{u as N}from"./useExpandedRow-DCLglaze.js";import{u as G}from"./useSelectRows-Drw6uhbf.js";import{a as P}from"./bucket-6-yuMI_qTT.js";import{T as _}from"./bucket-19-DfaBoN51.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BoI_oxUl.js";import"./index-CYLslu2X.js";import"./index-DdvpTaWJ.js";import"./bucket-20-BYEksR4G.js";import"./bucket-7-DJHepK9E.js";import"./MenuItem-Ch4QZlhC.js";import"./Text-CD4MWSZF.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-WO9d_haf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-AOOae36a.js";import"./ComposedModal-i-JPFqjV.js";import"./mergeRefs-BH0-8uDG.js";import"./index-D__qcsVc.js";import"./LayerContext-Bct4nWnc.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-rfkWZjSo.js";import"./InlineLoading--VyzWqGo.js";import"./ButtonSet-yR2zg6Pu.js";import"./wrapFocus-DSQ_FNNh.js";import"./OverflowMenuItem-DE8DpUn_.js";import"./TableToolbarSearch-BO2hWyST.js";import"./wrapComponent-B40Kt4X1.js";import"./Search-2gH7qaYi.js";import"./FormContext-DFINhmTx.js";import"./bucket-16-5JPlgjIq.js";import"./TableToolbar-CONxneD5.js";import"./bucket-0-BR4TyOdb.js";import"./TableRow-ByBm-ez8.js";import"./bucket-1-hLZTjQRY.js";import"./index-VOpjc0lr.js";import"./index-Dui_dv2o.js";import"./bucket-14-BhkSVdVU.js";import"./useOutsideClick-CcHYmmH3.js";import"./Dropdown-DDW0po6o.js";import"./useNormalizedInputProps-ClcHRULe.js";import"./bucket-21-D-SZI-qq.js";import"./downshift.esm-Dz4Ky7hi.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DzB4OZpy.js";import"./useFilterContext-DvwYr312.js";import"./useIsomorphicEffect-B_0rKcAy.js";import"./bucket-15-D15wjn_d.js";import"./devtools-C5uvsY8l.js";import"./ErrorEmptyState-UJe-oKPb.js";import"./EmptyState-BJDC8xJW.js";import"./EmptyStateV2.deprecated-DKiSfpaI.js";import"./Link-Bkxzc5gt.js";import"./ErrorIllustration-KKPUYq4z.js";import"./useId-hFMDi7bC.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Brzh9L41.js";import"./NoDataIllustration-BjqfM6Qb.js";import"./NotFoundEmptyState-BIu5k_0z.js";import"./NotFoundIllustration-DyE7UJ4T.js";import"./index.esm-B4WzpKDx.js";import"./usePreviousValue-Fp3wVgvE.js";import"./useResizeObserver-CCIbpI42.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BE__AMQR.js";import"./props-helper-BNJB8r1t.js";import"./useClickOutside-CyqzWiRF.js";import"./AccordionItem-Cyeq-pVU.js";import"./Checkbox-BKgbWAAX.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-NpdWzYHx.js";import"./DatePicker-CRP3KFEB.js";import"./FormGroup-DuUW4ox8.js";import"./MultiSelect-BNJrOubG.js";import"./NumberInput-kVdzS54w.js";import"./bucket-18-DsaZ136a.js";import"./RadioButtonGroup-y_gN2yqd.js";import"./index-DphEcO7w.js";import"./usePrefersReducedMotion-BixTOlMV.js";import"./usePresence-Bkf5S7MM.js";import"./ActionSet-C8sEoSeX.js";import"./useWindowResize-DGqU049Y.js";import"./TagSet-Cu-1VBil.js";import"./Tag-CPxoJg4V.js";import"./DefinitionTooltip-B8H9u6N3.js";import"./DismissibleTag-CSVTvAcW.js";import"./usePortalTarget-Crqijfut.js";import"./OperationalTag-41dcbxy2.js";import"./SkeletonText-CEa_FvAG.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-D-LbRuwd.js";import"./TableSelectRow-BH0nK5tZ.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-BJoRdLFU.js.map
