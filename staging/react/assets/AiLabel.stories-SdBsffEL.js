import{e as l,S as C,r as E,u as H}from"./iframe-Bn5s87s4.js";import{s as T,m as D,E as S}from"./_storybook-styles-D17NSFyp.js";import{D as z}from"./DatagridActions-BapSElcR.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CjRHd8zp.js";import{u as f}from"./useExpandedRow-CjgBenlh.js";import{u as R}from"./useSelectRows-DYaPxBTh.js";import{E as N}from"./bucket-6-4QPuED9F.js";import{T as G}from"./bucket-18-CjQdBR0X.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-S1beR83x.js";import"./index-C9jChmFj.js";import"./bucket-7-CvmQKYEr.js";import"./bucket-19-C9HfQtRN.js";import"./ComposedModal-0BWEXzM1.js";import"./index-D9UDgIUg.js";import"./LayerContext-BihYEre2.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CXQgRZeZ.js";import"./InlineLoading-D_UBaimj.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-p8CeO0Q6.js";import"./Text-DPxQhslY.js";import"./utils-DQejB-zS.js";import"./TableToolbarSearch-CSL-UoeE.js";import"./wrapComponent-CnV40MCj.js";import"./Search-T7tqaylz.js";import"./FormContext-C5gYs1Iz.js";import"./bucket-15-CS3Y4Mgh.js";import"./Dropdown-CMaceGXW.js";import"./index-wuqyTjN_.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-jypMYg7X.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CrClIjlz.js";import"./useControllableState-CDFtAfEZ.js";import"./useAttachedMenu-DhlZrLf-.js";import"./index-BRKV1vw1.js";import"./index-DViADvk5.js";import"./bucket-13-Dndxk466.js";import"./useOutsideClick-f2_z0C-o.js";import"./OverflowMenuItem-BnHmJgeq.js";import"./useFilterContext-CVr5yklU.js";import"./useIsomorphicEffect-C6KJAnKi.js";import"./bucket-0-Ba9itZYk.js";import"./bucket-14-DJtJQxMb.js";import"./devtools-mVE9FHp6.js";import"./TableRow-CM86TcFN.js";import"./bucket-1-0FbbcnG1.js";import"./TableToolbar-CvvJsKwN.js";import"./index-DlCtKpC6.js";import"./ErrorEmptyState-Bj9P51WJ.js";import"./EmptyState-DS7S8eyD.js";import"./EmptyStateV2.deprecated-B31rEqbT.js";import"./Link-DzeRYl9b.js";import"./ErrorIllustration-x1-D-gMA.js";import"./useId-CzlKQG_-.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-AwkmRdMV.js";import"./NoDataIllustration-DfcHc9y-.js";import"./NotFoundEmptyState-BiglsIAY.js";import"./NotFoundIllustration-rb0wsZRf.js";import"./index.esm-D4y7DyfZ.js";import"./usePreviousValue-Sk-kuPEp.js";import"./useResizeObserver-tdiREPfS.js";import"./getFocusableElements-BW7cf991.js";import"./index-CcsFybhx.js";import"./props-helper-CnD5lOtX.js";import"./useClickOutside--bgovvKE.js";import"./AccordionItem-O5m-Fw82.js";import"./Checkbox-CJXd6mx6.js";import"./DatePicker-DtfW-GAe.js";import"./documentLang-E105Y72C.js";import"./FormGroup-D7ED0Srn.js";import"./MultiSelect-bJRW7UcD.js";import"./NumberInput-Ce4px8fu.js";import"./bucket-17-CLqhTMCi.js";import"./RadioButton-BvWHKHci.js";import"./RadioButtonGroup-CzVvexCl.js";import"./usePrefersReducedMotion-BH6pVHWR.js";import"./usePresence-DF_StNwK.js";import"./ActionSet-GABrFEnO.js";import"./useWindowResize-z9b_8b40.js";import"./TagSet-CNqanwCI.js";import"./Tag-sQsnyISB.js";import"./DefinitionTooltip-CwHpCgPH.js";import"./DismissibleTag-CfULJo6W.js";import"./usePortalTarget-GjmdVlNb.js";import"./OperationalTag-B-TUI2Gy.js";import"./SkeletonText-CDcl1bge.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-99g8Qx1X.js";import"./TableSelectRow-B808eWj6.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-SdBsffEL.js.map
