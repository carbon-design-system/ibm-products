var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ai as H,r as T,a as D}from"./iframe-i4lJGu2h.js";import{s as z,m as I,E as b}from"./_storybook-styles-DOIHqlmt.js";import{D as y}from"./DatagridActions-DZ9JoJW8.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-D7TpuVBW.js";import{u as N}from"./useExpandedRow-BFIyoFEI.js";import{u as G}from"./useSelectRows-gf8BODxG.js";import{a as P}from"./bucket-6-NtPkENmD.js";import{T as _}from"./bucket-20-ClQuJJZQ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DJJpuEQA.js";import"./index-CNgPc1KL.js";import"./index-BhFkI0cE.js";import"./bucket-8-Dl6tDtDl.js";import"./bucket-21-CNxINDYf.js";import"./MenuItem-BglKA2rA.js";import"./Text-Beop0pyf.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DDPRo2A0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BzYQcoyp.js";import"./ComposedModal-B_dkAzs0.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BIVY5pTa.js";import"./LayerContext-Bd5U9gUC.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-B-3BHaLZ.js";import"./InlineLoading-CWI5pVJm.js";import"./bucket-7-D13TTfCT.js";import"./ButtonSet-B2RkLua3.js";import"./wrapFocus-D75OU94c.js";import"./OverflowMenuItem-BT6qSwLy.js";import"./TableToolbarSearch-CdXvAOkn.js";import"./wrapComponent-D_MMWsF8.js";import"./Search-Cg3N8lHe.js";import"./FormContext-DWpfzSnB.js";import"./bucket-17-VSt7x90e.js";import"./TableToolbar-BnYFRTwg.js";import"./bucket-0-Y-gCa3AL.js";import"./TableRow-DtotDZLx.js";import"./bucket-1-ZTiTYh2G.js";import"./index-lHmXBgQY.js";import"./index-BUgATU43.js";import"./bucket-14-COgSPOA5.js";import"./useOutsideClick-Da7ss3G7.js";import"./Dropdown-WGVTE-Kt.js";import"./downshift.esm-XI7SrJa1.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BhTqP7ia.js";import"./index-D7O6qqfZ.js";import"./useFilterContext-Bq0HgRa_.js";import"./useIsomorphicEffect-Z--hJSZ8.js";import"./bucket-16-BhRAv0Vv.js";import"./devtools-BVSjn6-P.js";import"./ErrorEmptyState-i8FgOA8n.js";import"./EmptyState-Cgf8hglv.js";import"./EmptyStateV2.deprecated-6byZSTJI.js";import"./Link-CJxYz1Zu.js";import"./ErrorIllustration-Bd61ygpe.js";import"./useId-CU-AzrlT.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-7jEoXZXg.js";import"./NoDataIllustration-BAppWnJA.js";import"./NotFoundEmptyState-DNzYYn1f.js";import"./NotFoundIllustration-DjR8paQ6.js";import"./index.esm-Ds2azPFr.js";import"./usePreviousValue-Ct5Dt6pM.js";import"./useResizeObserver-CCIOUN8K.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-C4Zj7t-u.js";import"./props-helper-ktKsHiYb.js";import"./useClickOutside-BZVj4d2e.js";import"./AccordionItem-2x0kiVSn.js";import"./Checkbox-CflZQwF_.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-XkIQdU_Z.js";import"./DatePicker-BAgk0Kge.js";import"./FormGroup-p4RN-TMw.js";import"./MultiSelect-CDzzdBVs.js";import"./NumberInput-CjolfbFG.js";import"./bucket-18-CO1y8u8q.js";import"./RadioButtonGroup-CrdTgPeh.js";import"./index-B1Vuu76l.js";import"./usePrefersReducedMotion-DngSLEk2.js";import"./usePresence-wtJ-Pwta.js";import"./ActionSet-C8-CN-Qq.js";import"./useWindowResize-CsBfTC56.js";import"./TagSet-C8TN5TD5.js";import"./Tag-B93tQ9a2.js";import"./DefinitionTooltip-Pe1xRFXF.js";import"./DismissibleTag-72xv6LCI.js";import"./usePortalTarget-CoiY1Qgy.js";import"./OperationalTag-CMjr6iAM.js";import"./SkeletonText-yI54trfy.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-DdNpKA0v.js";import"./TableSelectRow-DhLmrOWa.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-DJyFt2a2.js.map
