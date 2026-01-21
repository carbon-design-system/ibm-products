import{e as l,S as C,r as E,u as H}from"./iframe-CtoKioxt.js";import{s as T,m as D,E as S}from"./_storybook-styles-BrQeCyV7.js";import{D as z}from"./DatagridActions-DOXibWhp.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CGd0x8Z3.js";import{u as f}from"./useExpandedRow-Nlp1dBKN.js";import{u as R}from"./useSelectRows-BGO2pPuU.js";import{E as N}from"./bucket-6-i50ze4pO.js";import{T as G}from"./bucket-18-22lNaWnZ.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-Dc1HokXJ.js";import"./index-HEmqX-Cu.js";import"./bucket-7-CeLNIsQe.js";import"./bucket-19-uAShayzU.js";import"./ComposedModal-pOSCZM5i.js";import"./index-BSoC1KHw.js";import"./LayerContext-BaPPZ-kh.js";import"./clamp--00YEiB8.js";import"./ButtonSet-Ce5dyIwV.js";import"./InlineLoading-DkB9Uu8m.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-BVfmuAZ2.js";import"./Text-vtctM3R-.js";import"./utils-CqcRd8Iu.js";import"./TableToolbarSearch-Cl_R2Czt.js";import"./wrapComponent-CXYKIYfS.js";import"./Search-M8VRMu75.js";import"./FormContext-4Dpo2sxO.js";import"./bucket-15-YwHKJHA7.js";import"./Dropdown-CEppJsEi.js";import"./index-Bexmo1Ys.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-BVbxDgXH.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-DjmtQX8o.js";import"./useControllableState-Dfz1WBb9.js";import"./useAttachedMenu-Bqdk6DpD.js";import"./index-DpImqhDG.js";import"./index-DXIofiWL.js";import"./bucket-13-DH4S8Q-V.js";import"./useOutsideClick-DrI2TK2-.js";import"./OverflowMenuItem-DjjDZLJ3.js";import"./useFilterContext-CWPq5HVw.js";import"./useIsomorphicEffect-CGzYvzD1.js";import"./bucket-0-DXtRMgo-.js";import"./bucket-14-77bPhugF.js";import"./devtools-BpDcN5qy.js";import"./TableRow-BMp98_tw.js";import"./bucket-1-C8DJuThw.js";import"./TableToolbar-B5G2iR9g.js";import"./index-DTsfMTRK.js";import"./ErrorEmptyState-Vc13nK2N.js";import"./EmptyState-DE0v8Tkh.js";import"./EmptyStateV2.deprecated-DJ1amQdj.js";import"./Link-DwHVNOML.js";import"./ErrorIllustration-j18xd1Ii.js";import"./useId-DOILeMkW.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CNN5sXDe.js";import"./NoDataIllustration-Ch-4CLKv.js";import"./NotFoundEmptyState-BjTYRvkk.js";import"./NotFoundIllustration-zSN-9En6.js";import"./index.esm-E4Z4ZQDd.js";import"./usePreviousValue-CcZwIsc9.js";import"./useResizeObserver-BRdPmGfe.js";import"./getFocusableElements-BW7cf991.js";import"./index-CLRl8LFm.js";import"./props-helper-B5pvbCOQ.js";import"./useClickOutside-C9XSyVeA.js";import"./AccordionItem-YF8pV8eS.js";import"./Checkbox-ymzLf8mF.js";import"./DatePicker-B4899aqc.js";import"./documentLang-E105Y72C.js";import"./FormGroup-B0XPk2U9.js";import"./MultiSelect-LN_GYSUt.js";import"./NumberInput-DaPfIJOD.js";import"./bucket-17-BQfr1mYr.js";import"./RadioButton-Gs5rkmcR.js";import"./RadioButtonGroup-Dqz5Dyvb.js";import"./usePrefersReducedMotion-CELNRsW6.js";import"./usePresence-DJYraiYT.js";import"./ActionSet-UFeovBhW.js";import"./useWindowResize-D9PpaIhZ.js";import"./TagSet-ovrbRFHI.js";import"./Tag-CcGCr1ub.js";import"./DefinitionTooltip-C9lYYM92.js";import"./DismissibleTag-Ds86Ya5g.js";import"./usePortalTarget-CFSarTX_.js";import"./OperationalTag-CRXNsrH_.js";import"./SkeletonText-B0_TKw0x.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-D1ltQ3Qb.js";import"./TableSelectRow-CoT_Yxqy.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
`}},{description:"To include a AILabel on the row level, include a `aiLabel` property in your row data with the same structure as outlined above."}]})},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleAILabel"]},P=(o,r)=>[{Header:"Row Index",accessor:(w,d)=>d,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,aiLabel:!o&&l.createElement(S,{align:r})},{Header:"Someone 1",accessor:"someone1",aiLabel:!o&&l.createElement(S,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:o=>{console.log("row size changed to: ",o)},rowActions:[{id:"edit",itemText:"Edit",icon:N,onClick:b("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:G,isDelete:!0,onClick:b("Clicked row action: delete")}]},m={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader,rowSize:p.rowSize,rowSizes:p.rowSizes,onRowSizeChange:p.onRowSizeChange},_=({row:o})=>{const r=H();return l.createElement("div",{className:`${r}__test-class-with-prefix-hook`},"Content for row index: ",o.id)},B=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:d,withExpansion:u,...g})=>{const h=l.useMemo(()=>P(o,r),[]),[L]=E.useState(D(10,2,{enableAIRow:o,aiLabelAlign:r})),x=I({columns:h,data:L,DatagridActions:z,ExpandedRowContentComponent:_,...g.defaultGridProps},w?y:"",d?R:"",u?f:"");return l.createElement(A,{datagridState:x})},c=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:d,withExpansion:u,...g})=>l.createElement(B,{defaultGridProps:{...g},withSorting:w,rowAiLabel:o,rowAiLabelAlign:r,withSelect:d,withExpansion:u}),v="Column AILabel",i=c.bind({});i.storyName=v;i.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};i.args={...m};const k="Column AILabel sort",t=c.bind({});t.storyName=k;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...m,withSorting:!0};const W="Row AILabel",a=c.bind({});a.storyName=W;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right"};const O="Row AILabel with selection",n=c.bind({});n.storyName=O;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0};const M="Row AILabel with selection and expansion",s=c.bind({});s.storyName=M;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0,withExpansion:!0};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...s.parameters?.docs?.source}}};const fo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,fo as __namedExportsOrder,yo as default};
//# sourceMappingURL=AiLabel.stories-BFrsurKb.js.map
