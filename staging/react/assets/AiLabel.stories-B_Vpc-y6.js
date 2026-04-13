var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-B4rJbuYi.js";import{s as z,m as I,E as b}from"./_storybook-styles-B7c-cr7l.js";import{D as y}from"./DatagridActions-Dt_5uZzE.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CQK6Yrof.js";import{u as N}from"./useExpandedRow-0fBN2ini.js";import{u as G}from"./useSelectRows-Cf5MWtoo.js";import{E as P}from"./bucket-6-0Oc9PexT.js";import{T as _}from"./bucket-19-Bd0ix_8N.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CxDkhrve.js";import"./index-2cgUJDVc.js";import"./index-xYa1U4c2.js";import"./bucket-7-xTtm0AKl.js";import"./bucket-20-CW2CpDM7.js";import"./MenuItem-Dfmxkm6z.js";import"./Text-Drzp9J0j.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Qv0RgJ-X.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CL83lEzG.js";import"./ComposedModal-DsRaguaU.js";import"./utils-CEm6Ryh0.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DK1CVULi.js";import"./LayerContext-Bxhywl2x.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-C-4mpgrX.js";import"./InlineLoading-xiZHHIVS.js";import"./ButtonSet-D6G4_VtK.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-nUCJraCO.js";import"./OverflowMenuItem-uIHqzxD_.js";import"./TableToolbarSearch-BKiraI9E.js";import"./wrapComponent-B3BcOve2.js";import"./Search-BpLV1Oom.js";import"./FormContext-_ii8s4P8.js";import"./bucket-16-M5Y7R26b.js";import"./index-BF_nLJlH.js";import"./bucket-13-a6tMIzrK.js";import"./useOutsideClick-DsnIuXly.js";import"./Dropdown-C0dAAfkE.js";import"./downshift.esm-BJX4hjuy.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-DnTF4qMt.js";import"./index-7yaexF9A.js";import"./useFilterContext-BBrN7URN.js";import"./useIsomorphicEffect-QUdGuKKq.js";import"./bucket-0-BXxytn2O.js";import"./bucket-15-Di2mMX16.js";import"./devtools-Dw762fyJ.js";import"./TableRow-BHzOF9K_.js";import"./bucket-1-CXjG_z7I.js";import"./TableToolbar-Dl-ECb-J.js";import"./index-1NvPDlBW.js";import"./ErrorEmptyState-CHxR2BGH.js";import"./EmptyState-CcSFVeus.js";import"./EmptyStateV2.deprecated-BmL_2ygS.js";import"./Link-pH65GHmt.js";import"./ErrorIllustration-DQYuJDBV.js";import"./useId-C8xWp-BM.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-D3dApQK4.js";import"./NoDataIllustration-B2qLv9Zd.js";import"./NotFoundEmptyState-bmRlQy1k.js";import"./NotFoundIllustration-DJATW0BB.js";import"./index.esm-Dj_YmWk5.js";import"./usePreviousValue-D-lYg0PR.js";import"./useResizeObserver-DM-QaFHv.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CUZU0i_P.js";import"./props-helper-PSqayA2r.js";import"./useClickOutside-DgF_wQOb.js";import"./AccordionItem-Ba6fUepl.js";import"./Checkbox-BYDjfuTW.js";import"./RadioButton-DIm1K_CN.js";import"./DatePicker-cFKuQxIF.js";import"./FormGroup-wyW43abC.js";import"./MultiSelect-BV6p08Fy.js";import"./NumberInput-IJylqX_9.js";import"./bucket-17-CKEYdR6z.js";import"./RadioButtonGroup-DBDuEoiL.js";import"./usePrefersReducedMotion-DiTuOfLH.js";import"./usePresence-Csg8rd6o.js";import"./ActionSet-DX86x4_7.js";import"./useWindowResize-DinTFh3h.js";import"./TagSet-DJ3bqMQ1.js";import"./Tag-B0Z3gEnR.js";import"./DefinitionTooltip-CuQBL0CI.js";import"./DismissibleTag-PcNNPbZk.js";import"./usePortalTarget-CTaYNTaO.js";import"./OperationalTag-DEWJWCWQ.js";import"./SkeletonText-DabfefIp.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-XN50gO3d.js";import"./TableSelectRow-B2Uu52sQ.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-B_Vpc-y6.js.map
