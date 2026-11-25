var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,aj as H,r as T,a as D}from"./iframe-D4ZNlhex.js";import{s as z,m as I,E as b}from"./_storybook-styles-DO2NVtgj.js";import{D as y}from"./DatagridActions-DMIFQy9x.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CWNiZ2wE.js";import{u as N}from"./useExpandedRow-BqiiKVp8.js";import{u as G}from"./useSelectRows-By5blKAv.js";import{c as P}from"./bucket-7-CcmuUw8_.js";import{T as _}from"./bucket-20-gkMQqIp8.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DJPOzxb9.js";import"./index-Cao-7C0a.js";import"./index-BRJsLXjB.js";import"./bucket-8-DhFnlBxN.js";import"./bucket-21-Hs8N1bt_.js";import"./MenuItem-Cgbzc84F.js";import"./Text-BFiLljUe.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-ByAy3J_D.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BXYtIRqX.js";import"./ComposedModal--U1045z8.js";import"./mergeRefs-BH0-8uDG.js";import"./index-B11j6z7X.js";import"./LayerContext-CnF_2LIS.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-X8s_iQWQ.js";import"./InlineLoading-BxyF_Sbz.js";import"./ButtonSet-B1q1jsNw.js";import"./wrapFocus-DsASMros.js";import"./OverflowMenuItem-C0TmxlJM.js";import"./TableToolbarSearch-CWzrku9s.js";import"./wrapComponent-CkoqiyiR.js";import"./Search-CfdElKFB.js";import"./useNoInteractiveChildrenForLabel-CA4kHAjX.js";import"./FormContext-C8V-dtCn.js";import"./bucket-17-Chydjutf.js";import"./TableToolbar-DtNocKrl.js";import"./bucket-0-DY1uVxYR.js";import"./TableRow-6MA9SN1V.js";import"./bucket-1-DlvJv0Oz.js";import"./index-BNXmMFq-.js";import"./index-hFhe0ejJ.js";import"./bucket-14-Dx-xo6GD.js";import"./useOutsideClick-tGCA8qrx.js";import"./Dropdown-DYf3rN8T.js";import"./downshift.esm-BMobXh-3.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-wWIaiWPW.js";import"./index-DtPgg7BG.js";import"./useFilterContext-Bwk7bNxi.js";import"./useIsomorphicEffect-DOQnSDPs.js";import"./bucket-6-DqPudBAV.js";import"./bucket-16-DbDhwaLt.js";import"./devtools-DViE3VQV.js";import"./ErrorEmptyState-CyQtx4p4.js";import"./EmptyState-CEqICMFs.js";import"./EmptyStateV2.deprecated-B1Roo50L.js";import"./Link-DMaMd0aW.js";import"./ErrorIllustration-CIP0Xe_u.js";import"./useId-BAhhyiL4.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BUU2Rhk3.js";import"./NoDataIllustration-B1dbh9sV.js";import"./NotFoundEmptyState--2uVv1tI.js";import"./NotFoundIllustration-DoDiOwZj.js";import"./index.esm-Dso_0_iG.js";import"./usePreviousValue-Btif0maI.js";import"./useResizeObserver-68nEIMyj.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-Bx9Ozrxi.js";import"./props-helper-BMZxDTTj.js";import"./useClickOutside-Bmjk-235.js";import"./AccordionItem-DtcNHpHj.js";import"./Checkbox-6O6B4yM3.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-CsRwIfyL.js";import"./DatePicker-DCpveE_j.js";import"./FormGroup-BKrwBBdk.js";import"./MultiSelect-D07Snb__.js";import"./NumberInput-CzAT1i1M.js";import"./bucket-18-eQAwwXQw.js";import"./RadioButtonGroup-DSXl_pc9.js";import"./index-OVrV2Z4S.js";import"./usePrefersReducedMotion-Dd9EJuaE.js";import"./usePresence-CpoS0O_1.js";import"./ActionSet-BAd8uqia.js";import"./useWindowResize-B2zNrl-h.js";import"./TagSet-THPyjVml.js";import"./Tag-Cz04dbUn.js";import"./DefinitionTooltip-CR_ShGMd.js";import"./DismissibleTag-4RQ2L9pW.js";import"./usePortalTarget-Dl9O8tJb.js";import"./OperationalTag-DMV6MdoJ.js";import"./SkeletonText-Cg11Jsq4.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander--Mcv1lNu.js";import"./TableSelectRow-Dck1yr2Y.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,vo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const ko=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,ko as __namedExportsOrder,vo as default};
//# sourceMappingURL=AiLabel.stories-CxlQN_-Y.js.map
