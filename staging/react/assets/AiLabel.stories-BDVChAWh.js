var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ai as H,r as T,a as D}from"./iframe-DW3-uaTz.js";import{s as z,m as I,E as b}from"./_storybook-styles-Bv7jCdIU.js";import{D as y}from"./DatagridActions-DUM4uzWC.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-DHhb6scd.js";import{u as N}from"./useExpandedRow-BCM-NGB0.js";import{u as G}from"./useSelectRows-CDNbUvHO.js";import{a as P}from"./bucket-6-Ctx0ea3s.js";import{T as _}from"./bucket-20-CUMfyFy6.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-KS0g-5Ga.js";import"./index-CW34tURC.js";import"./index-Dy_AUQjX.js";import"./bucket-8-CN8ZzQUd.js";import"./bucket-21-DsFiX9a0.js";import"./MenuItem-XPcmGuG-.js";import"./Text-9Rf343bW.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CG0WK2n-.js";import"./environment-DRRHKtsv.js";import"./useControllableState-UV5x6JCJ.js";import"./ComposedModal-Ba5IoVe_.js";import"./mergeRefs-BH0-8uDG.js";import"./index-RJBIqwkc.js";import"./LayerContext-i9ncoyA6.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DsXee8yT.js";import"./InlineLoading-KkV8lkHX.js";import"./bucket-7-Bz-ZWQfx.js";import"./ButtonSet-C4e7u8tE.js";import"./wrapFocus-DiwjL0CJ.js";import"./OverflowMenuItem-GMC_V5wB.js";import"./TableToolbarSearch-COkxlwwx.js";import"./wrapComponent-rla5ju-s.js";import"./Search-9ZBB_MZB.js";import"./FormContext-BwoMjipg.js";import"./bucket-17-CdLpcUzb.js";import"./TableToolbar-DjSItkRi.js";import"./bucket-0-D2NgYBkJ.js";import"./TableRow-u4I3hf_3.js";import"./bucket-1-CFREfPg1.js";import"./index-Bi6NQqEv.js";import"./index-duEQkvY6.js";import"./bucket-14-C4mMYt2x.js";import"./useOutsideClick-tokrS-Hu.js";import"./Dropdown-CVtr7oND.js";import"./downshift.esm-n6HiXoZA.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-tVgXN2Oy.js";import"./index-DYPizu3b.js";import"./useFilterContext-BJzlr8_5.js";import"./useIsomorphicEffect-BHHWtsVv.js";import"./bucket-16-Xmlseq-H.js";import"./devtools-stAW8lOV.js";import"./ErrorEmptyState-DbLibAqt.js";import"./EmptyState-D9VPXWl3.js";import"./EmptyStateV2.deprecated-B5AV6Y_S.js";import"./Link-CKVRvRPw.js";import"./ErrorIllustration-DerATfth.js";import"./useId-BamGQC_a.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-B4ZOFGeU.js";import"./NoDataIllustration-Dqist2eY.js";import"./NotFoundEmptyState-JvYwgCbU.js";import"./NotFoundIllustration-ByJWxne5.js";import"./index.esm-DzNZZkZs.js";import"./usePreviousValue-CejRUetL.js";import"./useResizeObserver-DofD_Rfz.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-DY_lUEG4.js";import"./props-helper-BH28dCnP.js";import"./useClickOutside-CicAPxq8.js";import"./AccordionItem-XCPzrN9x.js";import"./Checkbox-Q6xyGRrh.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-CAz8c91J.js";import"./DatePicker-qtkEFZP2.js";import"./FormGroup-C5SWLcZC.js";import"./MultiSelect-BDkezzOM.js";import"./NumberInput-g1GOHu1h.js";import"./bucket-18-CiWVb8PA.js";import"./RadioButtonGroup-pLyTtHAP.js";import"./index-DyT3xC6X.js";import"./usePrefersReducedMotion-DyYCxLeu.js";import"./usePresence-P-aYr9md.js";import"./ActionSet-CI1hp8Ws.js";import"./useWindowResize-B_-iyI4p.js";import"./TagSet-D5En6kTT.js";import"./Tag-Cs5GVl_z.js";import"./DefinitionTooltip-Dhsz7ABs.js";import"./DismissibleTag-C_j3X3wP.js";import"./usePortalTarget-Bs4GZfDm.js";import"./OperationalTag-gEqupS_8.js";import"./SkeletonText-C0qE2hkq.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-Dkl8xEAh.js";import"./TableSelectRow-D8t_xxI9.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-BDVChAWh.js.map
