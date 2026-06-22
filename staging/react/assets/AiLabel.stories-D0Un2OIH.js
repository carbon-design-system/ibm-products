var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-nyWj9AFG.js";import{s as z,m as I,E as b}from"./_storybook-styles-CquGyz4V.js";import{D as y}from"./DatagridActions-qR2yMzH_.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-qI7Y6gAh.js";import{u as N}from"./useExpandedRow-BHLPR2Js.js";import{u as G}from"./useSelectRows-B7-A5flD.js";import{c as P}from"./bucket-6-B-Zq8ItY.js";import{T as _}from"./bucket-19-DESzYyzb.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BFZsdHKx.js";import"./index-BW3OgNnr.js";import"./index-BfgIMR11.js";import"./bucket-7-Di7sqyQo.js";import"./bucket-20-QNu5uAOp.js";import"./MenuItem-Cu0-mTTm.js";import"./Text-ugVjbrM6.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B2H7bdhi.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Br8GBSt6.js";import"./ComposedModal-D66gEHIC.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Bip5r7cE.js";import"./LayerContext-TY8Rr565.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-A14-NzTB.js";import"./InlineLoading-B7IBbyIF.js";import"./ButtonSet-C1mE44Y9.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-kvvUkrL0.js";import"./OverflowMenuItem-BOWiUweJ.js";import"./TableToolbarSearch-D42hgbBr.js";import"./wrapComponent-BqRQ5VZj.js";import"./Search-VbXGv_8g.js";import"./FormContext-Ca9jqY9Q.js";import"./bucket-16-0phSzhqh.js";import"./index-C0WS_wN3.js";import"./bucket-13-BQAQJByg.js";import"./useOutsideClick-TRDJNVTG.js";import"./Dropdown-BGldWS1M.js";import"./useNormalizedInputProps-OnrN8UbL.js";import"./downshift.esm-CL6tmTgM.js";import"./inheritsLoose-CdLKJotq.js";import"./index-FUYD_9Sv.js";import"./useFilterContext-BaMYvbMq.js";import"./useIsomorphicEffect-DiSxRFeJ.js";import"./bucket-0-BEFIQVr3.js";import"./bucket-15-C3lLpWQU.js";import"./devtools-bEKes8mp.js";import"./TableRow-DiTRIUG3.js";import"./bucket-1-CTqwJdcL.js";import"./TableToolbar-6JNcEJEC.js";import"./index-CJhEv1XZ.js";import"./ErrorEmptyState-CgXYYCmn.js";import"./EmptyState-Bu0zEo87.js";import"./EmptyStateV2.deprecated-Dk0z7dz9.js";import"./Link-DESAjkNF.js";import"./ErrorIllustration-BMHnyGda.js";import"./useId-BwPKdf4k.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bn3D65BU.js";import"./NoDataIllustration-kfPyRSyO.js";import"./NotFoundEmptyState-wqsmlPgP.js";import"./NotFoundIllustration-Dr3wHW1m.js";import"./index.esm-BJ6EDc4j.js";import"./usePreviousValue-MbZnQ0tT.js";import"./useResizeObserver-8ywXsdiU.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-Dsqef-Wi.js";import"./props-helper-Dbiph8mZ.js";import"./useClickOutside-DFWooBKB.js";import"./AccordionItem-B8Xd1fIV.js";import"./Checkbox-wLWb-MZ1.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-C9Giqkfh.js";import"./DatePicker-CD22RHqs.js";import"./FormGroup-C5czTfBG.js";import"./MultiSelect-0FETypkX.js";import"./NumberInput-DX9r2zsN.js";import"./bucket-17-D7ZRxT5S.js";import"./RadioButtonGroup-CmM8ZIhj.js";import"./index-BKOmZCUq.js";import"./usePrefersReducedMotion-DWvZuShJ.js";import"./usePresence-C_e8iz6y.js";import"./ActionSet-Bb_K9hKd.js";import"./useWindowResize-704ZnHUm.js";import"./TagSet-DBH_9yfg.js";import"./Tag-DueSeaUB.js";import"./DefinitionTooltip-DpYlQa4t.js";import"./DismissibleTag-BNuTHFkk.js";import"./usePortalTarget-BKqoXfXv.js";import"./OperationalTag-C8UIsJbz.js";import"./SkeletonText-BXgvJdOL.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-DV3WxqEU.js";import"./TableSelectRow-BHw-h7NJ.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-D0Un2OIH.js.map
