import{e as l,S as C,r as E,u as H}from"./iframe-arkle79Y.js";import{s as T,m as D,E as S}from"./_storybook-styles-D4Qm49X0.js";import{D as z}from"./DatagridActions-BoOaIQv9.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-DUPmJdvZ.js";import{u as f}from"./useExpandedRow-CQMJ-pEM.js";import{u as R}from"./useSelectRows-DJ6oq-Na.js";import{E as N}from"./bucket-6-DcCyHKAe.js";import{T as G}from"./bucket-18-C_-fDTyz.js";import"./bucket-2-BjUncjOH.js";import"./index-Chb2kpTH.js";import"./bucket-7-CioXA59_.js";import"./bucket-19-ClJk_Iwe.js";import"./ComposedModal-BUCJFmQD.js";import"./index-CmrOtKYe.js";import"./LayerContext-BFXHEcAf.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CEIahZQo.js";import"./InlineLoading-BgRgURAS.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-oiRIiM73.js";import"./Text-pEBQpjZl.js";import"./utils-ChakNn1e.js";import"./TableToolbarSearch-2I3OwqeE.js";import"./wrapComponent-DJ2QeCUT.js";import"./Search-DtmYJQP4.js";import"./FormContext-CgeFsgSy.js";import"./bucket-15-Dyz0_xw9.js";import"./Dropdown-C6rbHrvJ.js";import"./index-x5Dgesel.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-D94upgqi.js";import"./useControllableState-DiUheEVj.js";import"./useAttachedMenu-bOf8RlpA.js";import"./index-DilhgHcj.js";import"./index-BwI-ewks.js";import"./bucket-13-BK2SHs0o.js";import"./useOutsideClick-BUP9YOI3.js";import"./OverflowMenuItem-CXsVT-BU.js";import"./useFilterContext-DgbFdB0P.js";import"./bucket-0-DH44BtVj.js";import"./bucket-14-CV3IhPoh.js";import"./devtools-BxzFCMfs.js";import"./TableRow-BP026flu.js";import"./bucket-1-ZwfIOy_w.js";import"./TableToolbar-BEropYpE.js";import"./index-Bv0Kxzda.js";import"./ErrorEmptyState-C-9c5Qgw.js";import"./EmptyState-6vcY-Hb7.js";import"./EmptyStateV2.deprecated-CENpCSs2.js";import"./Link-C5Cx_auS.js";import"./ErrorIllustration-BeENQw-G.js";import"./useId-jQ04caQW.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Cd7sORpl.js";import"./NoDataIllustration-BNWfpWI-.js";import"./NotFoundEmptyState-ChO1qUR1.js";import"./NotFoundIllustration-CZ1rtxL2.js";import"./index.esm-Gzck3rCZ.js";import"./usePreviousValue-BqGIc7VE.js";import"./useResizeObserver-0PE-sa49.js";import"./useIsomorphicEffect-CVBbaLXF.js";import"./getFocusableElements-BW7cf991.js";import"./index-B8FjtzAH.js";import"./props-helper-B3uqW2Cc.js";import"./useClickOutside-G6m0-dSx.js";import"./AccordionItem-DBSizL0t.js";import"./Checkbox-BmutBX2u.js";import"./DatePicker-B8x9tntQ.js";import"./FormGroup-Brf_bgWI.js";import"./MultiSelect-C7glb_F0.js";import"./NumberInput-C5o0CAOn.js";import"./useNormalizedInputProps-WzSxnLMD.js";import"./documentLang-E105Y72C.js";import"./bucket-16-BIMVP3DE.js";import"./RadioButton-DjWuvl3_.js";import"./RadioButtonGroup-CsBw_z1F.js";import"./usePrefersReducedMotion-3j9LEObF.js";import"./usePresence-KfcjewvI.js";import"./ActionSet-DYvKCQYa.js";import"./useWindowResize-CDUo4gRt.js";import"./TagSet-DzhjrBbQ.js";import"./Tag-BhIVQKKE.js";import"./DefinitionTooltip-CHXgJHjd.js";import"./DismissibleTag-C58BtcPV.js";import"./usePortalTarget-5IX0thUX.js";import"./OperationalTag-Cfkmf4CE.js";import"./SkeletonText-DJdg0E5L.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-BBAK8Jm7.js";import"./TableSelectRow-CVcRPl1x.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,zo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const Io=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,Io as __namedExportsOrder,zo as default};
