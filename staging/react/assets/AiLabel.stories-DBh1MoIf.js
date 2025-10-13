import{e as l,S as C,r as E,u as H}from"./iframe-DKsKIeO_.js";import{s as T,m as D,E as S}from"./_storybook-styles-HxjOp6y4.js";import{D as z}from"./DatagridActions-gDMflxoN.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CbYSSwGV.js";import{u as f}from"./useExpandedRow-95j4msQg.js";import{u as R}from"./useSelectRows-DurCWAZV.js";import{E as N}from"./bucket-6-BDZoIsJJ.js";import{T as G}from"./bucket-18-DCBnxAKD.js";import"./bucket-2-BMfBeLco.js";import"./index-zH3n7d5W.js";import"./bucket-7-ZHd8Hq_g.js";import"./bucket-19-CjGrDCAa.js";import"./ComposedModal-B2ovIMVM.js";import"./index-BEhuL1MR.js";import"./index-CDQbx0x2.js";import"./LayerContext-NMcPk0Nw.js";import"./clamp--00YEiB8.js";import"./ButtonSet-B47ramhY.js";import"./InlineLoading-p56X7jsD.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DEXO-vbF.js";import"./Text-DWkOwfBd.js";import"./utils-BNH49ZRR.js";import"./TableToolbarSearch-gtWb3WuC.js";import"./wrapComponent-BUo4YaXY.js";import"./Search-B5qeZUes.js";import"./FormContext-DnXssUoQ.js";import"./bucket-15-DC9m_l6j.js";import"./Dropdown-mBk2AehQ.js";import"./index-CQX_odjL.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-C7wXSQ0S.js";import"./useControllableState-DfPh9Ar9.js";import"./useAttachedMenu-BjAAxBze.js";import"./index-D1B3TaZ1.js";import"./index-Ca_0obo9.js";import"./bucket-13-NrRSRe7I.js";import"./useOutsideClick-yet8EmE5.js";import"./OverflowMenuItem-BuZM9I4z.js";import"./useFilterContext-o9TFIe8A.js";import"./bucket-0-Bkg56oSG.js";import"./bucket-14-D4sfvfzO.js";import"./devtools-Bn3omVKL.js";import"./TableRow-5xPbsC76.js";import"./bucket-1-CTMMvGsV.js";import"./TableToolbar-DBlCa349.js";import"./index-Do60dg14.js";import"./ErrorEmptyState-Dm_1Wvjt.js";import"./EmptyState-wViNJKuF.js";import"./EmptyStateV2.deprecated-BpJMV6nf.js";import"./Link-DPOhQJ5Q.js";import"./ErrorIllustration-DQHGJrs8.js";import"./useId-DN3dyYk2.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-XVEeo0Bq.js";import"./NoDataIllustration-CxpZ_fEc.js";import"./NotFoundEmptyState-DCarVAL4.js";import"./NotFoundIllustration-D0ijBfZA.js";import"./index.esm-B9NAOgwl.js";import"./usePreviousValue-CMAapDDk.js";import"./useResizeObserver-CBxb5I5g.js";import"./useIsomorphicEffect-0hnIMifz.js";import"./getFocusableElements-BW7cf991.js";import"./index-KIjfM1LT.js";import"./props-helper-CC7b4v3b.js";import"./useClickOutside-DhQqKS6x.js";import"./AccordionItem--x4dxrtI.js";import"./Checkbox-CVRUThck.js";import"./DatePicker-BNhrw3vx.js";import"./FormGroup-B5HCBD0l.js";import"./MultiSelect-oe5NxaTz.js";import"./NumberInput-BuZdcNXo.js";import"./useNormalizedInputProps-LQxEukKR.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CF33Nm7Q.js";import"./RadioButton-9Z9dZEZL.js";import"./RadioButtonGroup-ngT64JIY.js";import"./usePrefersReducedMotion-DGVUvi25.js";import"./usePresence-gTeZZjwL.js";import"./ActionSet-G6HtkfUk.js";import"./useWindowResize-DFqNbx9a.js";import"./TagSet-DRBAq23W.js";import"./Tag-ByT5Z9aM.js";import"./DefinitionTooltip-62O3uvQ_.js";import"./DismissibleTag-BIVmDsJ-.js";import"./usePortalTarget-Dftb10Sg.js";import"./OperationalTag-dmWZlAvX.js";import"./SkeletonText-BEb1LIUU.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CnXSbJ17.js";import"./TableSelectRow-CYS7XonB.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const yo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,yo as __namedExportsOrder,Io as default};
