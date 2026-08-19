var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ag as H,r as T,a as D}from"./iframe-UFQ73af4.js";import{s as z,m as I,E as b}from"./_storybook-styles-CCLfYfn6.js";import{D as y}from"./DatagridActions-B--NYY3Z.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-qdfQnFDI.js";import{u as N}from"./useExpandedRow-Cp0z9cvv.js";import{u as G}from"./useSelectRows-Bd_BE_Hl.js";import{a as P}from"./bucket-6-CQCT5Kkd.js";import{T as _}from"./bucket-19-BJ1UJIsF.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BlLaQW-a.js";import"./index-yq8qzhNP.js";import"./index-LkBqL5iB.js";import"./bucket-20-CI4ecuyk.js";import"./bucket-7-BRXA3Wxg.js";import"./MenuItem-oW28ITkS.js";import"./Text-CGvfWv3Q.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bn0ckfw0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Df1xLZ11.js";import"./ComposedModal-C9MtSZdU.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BaBwsEpW.js";import"./LayerContext-CBEoaTMF.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-RHYbqF0i.js";import"./InlineLoading-YokHvcXP.js";import"./ButtonSet-pf7az1mw.js";import"./wrapFocus-CPFL6mF0.js";import"./OverflowMenuItem-BxYXHPE5.js";import"./TableToolbarSearch-XKF6Wj2Y.js";import"./wrapComponent-BqZOjmIN.js";import"./Search-TWwGqgnc.js";import"./FormContext-B8s6XRGS.js";import"./bucket-16-DKnENBlw.js";import"./TableToolbar-0UuNlyMW.js";import"./bucket-0-CNrGlA4x.js";import"./TableRow-6w1lU8l9.js";import"./bucket-1-CfJPJXdy.js";import"./index-B20rE21Y.js";import"./index-Bo-HDE2R.js";import"./bucket-14-SmraEgjA.js";import"./useOutsideClick-qq6sT7yN.js";import"./Dropdown-LuM3Wisp.js";import"./useNormalizedInputProps-CUnqHlUa.js";import"./bucket-21-d6_QJces.js";import"./downshift.esm-B6vbCc7O.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DVInaYZQ.js";import"./useFilterContext-DGnRU30e.js";import"./useIsomorphicEffect-BEWaERst.js";import"./bucket-15-vCUA1M5z.js";import"./devtools-CmzGK-FP.js";import"./ErrorEmptyState-CPnhREHZ.js";import"./EmptyState-C6Py6M9u.js";import"./EmptyStateV2.deprecated-BQ79GzBi.js";import"./Link-CvThHovb.js";import"./ErrorIllustration-B1MUwxoi.js";import"./useId-CN4GJ7sQ.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BEyaewvs.js";import"./NoDataIllustration-tRBupqq0.js";import"./NotFoundEmptyState-sdDWnE2s.js";import"./NotFoundIllustration-CTBmxpO5.js";import"./index.esm-DBLGO_eY.js";import"./usePreviousValue-Dqeoh45U.js";import"./useResizeObserver-CA30xuv-.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DxxTL-CI.js";import"./props-helper-D1ToC-Hg.js";import"./useClickOutside-Cn5zt29c.js";import"./AccordionItem-CZGm5D-d.js";import"./Checkbox-CSOZqpJw.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-BMXIL8F3.js";import"./DatePicker-BvCYgy_0.js";import"./FormGroup-B02592Kt.js";import"./MultiSelect-Dqo_O3cl.js";import"./NumberInput-CfN3zvdG.js";import"./bucket-18-BfgMBMBM.js";import"./RadioButtonGroup-DXkyUMrz.js";import"./index-DyaDtTmv.js";import"./usePrefersReducedMotion-DmUb3PPR.js";import"./usePresence-C31Ysexx.js";import"./ActionSet-CbMCDFvB.js";import"./useWindowResize-DdvfE8_8.js";import"./TagSet-HAV4h-39.js";import"./Tag-DmnTOq8o.js";import"./DefinitionTooltip-DoIHCPrw.js";import"./DismissibleTag-C0F2Uw6C.js";import"./usePortalTarget-DEIUGCVw.js";import"./OperationalTag-DRr8YlI9.js";import"./SkeletonText-DszfR4Se.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-BwPzB5wY.js";import"./TableSelectRow-XYYWJ6LP.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-CpzONP4q.js.map
