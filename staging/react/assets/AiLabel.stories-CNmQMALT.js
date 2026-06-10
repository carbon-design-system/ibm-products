var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-AQ-BiXqb.js";import{s as z,m as I,E as b}from"./_storybook-styles-9eVXp3vO.js";import{D as y}from"./DatagridActions-CascMYOS.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Bl69KB1F.js";import{u as N}from"./useExpandedRow-DrTWFLWR.js";import{u as G}from"./useSelectRows-DQLGyslb.js";import{c as P}from"./bucket-6-Ch-ncPVP.js";import{T as _}from"./bucket-19-CwFHWh6u.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-aHk5mYoj.js";import"./index-qzm5qFKq.js";import"./index-Fa8k82Av.js";import"./bucket-7-tab54nW3.js";import"./bucket-20-BcR2p0qs.js";import"./MenuItem-MpOKSCPJ.js";import"./Text-Dsm_R2xh.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-UOIHoVe3.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BkXCH9yg.js";import"./ComposedModal-DmVWaX7l.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BqjEa5xh.js";import"./LayerContext-XFxZ9wyv.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-nCY9tTpf.js";import"./InlineLoading-C_kEiLlS.js";import"./ButtonSet-DxHfgiWq.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-BuLK8cQJ.js";import"./OverflowMenuItem-BuTlWkl5.js";import"./TableToolbarSearch-CfZIO7Eo.js";import"./wrapComponent-CyiWSxuX.js";import"./Search-DBptsoHk.js";import"./FormContext-D-Seu0q0.js";import"./bucket-16-BGUoj5XK.js";import"./index-mTy_SdKb.js";import"./bucket-13-B-osKcD1.js";import"./useOutsideClick-ZehDB9uA.js";import"./Dropdown-Dx5BSpjE.js";import"./useNormalizedInputProps-BnR5QOMF.js";import"./downshift.esm-ChF4f0t9.js";import"./inheritsLoose-CdLKJotq.js";import"./index-ytLdzjrr.js";import"./useFilterContext-COJAufjt.js";import"./useIsomorphicEffect-6UMNTwlI.js";import"./bucket-0-CR3j4wIT.js";import"./bucket-15-BXLjJhBT.js";import"./devtools-B5UnDfi3.js";import"./TableRow-CShNNA8y.js";import"./bucket-1-DF2v7-E6.js";import"./TableToolbar-DR2GCL7o.js";import"./index-B4M1cy69.js";import"./ErrorEmptyState-BULQ-g-6.js";import"./EmptyState-P3BCljf1.js";import"./EmptyStateV2.deprecated-CO6NzPJC.js";import"./Link-DN5xsnES.js";import"./ErrorIllustration-BGgMKysi.js";import"./useId-BIuPFXmX.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DYfkNhxS.js";import"./NoDataIllustration-fGANT2WQ.js";import"./NotFoundEmptyState-DC3Xri1m.js";import"./NotFoundIllustration-B6NWiMN4.js";import"./index.esm-DRV6XETn.js";import"./usePreviousValue-0TKt-UMc.js";import"./useResizeObserver-Do33kQkr.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BADmuj8j.js";import"./props-helper-B9mZyXXv.js";import"./useClickOutside-E7WLw_zC.js";import"./AccordionItem-Wfk2S72t.js";import"./Checkbox-xcGS3ZaG.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-DwflTQNc.js";import"./DatePicker-DfF6dxA2.js";import"./FormGroup-gqlUTVoT.js";import"./MultiSelect-KiIHh3Qe.js";import"./NumberInput-DrqcwUKg.js";import"./bucket-17-CAM4_o7B.js";import"./RadioButtonGroup-CYw4GU3v.js";import"./index-ZKW0is5F.js";import"./usePrefersReducedMotion-RXqdn_5B.js";import"./usePresence-BB6vzuSY.js";import"./ActionSet-CPJK-4Zj.js";import"./useWindowResize-D9jPf5aG.js";import"./TagSet-DnPI4ohe.js";import"./Tag-CFFUxQ8H.js";import"./DefinitionTooltip--5fW-VE2.js";import"./DismissibleTag-Dd9fQNta.js";import"./usePortalTarget-B4MSwqBR.js";import"./OperationalTag-Bogi5eQu.js";import"./SkeletonText-DEOxQPSp.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CGuudQSx.js";import"./TableSelectRow-BEaZ_B0P.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-CNmQMALT.js.map
