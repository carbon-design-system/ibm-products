import{e as l,S as C,r as E,u as H}from"./iframe-YKw9nL_F.js";import{s as T,m as D,E as S}from"./_storybook-styles-qwLrOXbE.js";import{D as z}from"./DatagridActions-8FLDfdER.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CcFff8kI.js";import{u as f}from"./useExpandedRow-6f9Arh4k.js";import{u as R}from"./useSelectRows-OfO0p_Pv.js";import{E as N}from"./bucket-6-BAcs6e6G.js";import{T as G}from"./bucket-17-C_gzCj3y.js";import"./bucket-2-CwIRUxho.js";import"./index-CXIj4-f9.js";import"./bucket-18-DZTAQj9X.js";import"./bucket-7-DiHxbQPt.js";import"./ComposedModal-Cmmd5CvA.js";import"./index-BEhuL1MR.js";import"./index-CPo7HSbm.js";import"./LayerContext-BQcY-NI5.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CmKBrh9d.js";import"./InlineLoading-CCmO3uOS.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DNecG-Dg.js";import"./Text-CjneqIZ1.js";import"./utils-Cep3OMNO.js";import"./TableToolbarSearch-CBIbwfMq.js";import"./wrapComponent-BYWBwwwb.js";import"./Search-Eel-vNyd.js";import"./FormContext-BU2ukkNq.js";import"./bucket-15-DYvFGyvv.js";import"./Dropdown-DYkEQHNe.js";import"./index-CjSFe2a0.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-BU_wesH_.js";import"./MenuItem-DOVlXix4.js";import"./useControllableState-KAFbqoVc.js";import"./useAttachedMenu-Di7wXaNY.js";import"./index-CNHmpVfc.js";import"./index-BF8Zf0QK.js";import"./bucket-12-DXgkfsZm.js";import"./useOutsideClick-BuwC9cvu.js";import"./OverflowMenuItem-tgqxnhno.js";import"./useFilterContext-nj7u5dFz.js";import"./bucket-0-glzR4AjS.js";import"./bucket-14-B3pmzkvl.js";import"./devtools-DSZ92uOv.js";import"./TableRow-CEzGvxM9.js";import"./bucket-1-BfuDTa5x.js";import"./TableToolbar-Dcz0WKQP.js";import"./index-ed0vUSqW.js";import"./ErrorEmptyState-vDYEn1wM.js";import"./EmptyState-BSmRLz4v.js";import"./EmptyStateV2-XL_tjcIC.js";import"./Link-CyN3x2Zk.js";import"./ErrorIllustration-BwAe1T_i.js";import"./useId-DF1Qh0C_.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BFs113T_.js";import"./NoDataIllustration-oFw7MJoO.js";import"./NotFoundEmptyState-B67Got9I.js";import"./NotFoundIllustration-B2vHpung.js";import"./index.esm-C1MtVFME.js";import"./usePreviousValue-Dpk5kspb.js";import"./useResizeObserver-Bbd8IY5t.js";import"./useIsomorphicEffect-C-0NYl-N.js";import"./getFocusableElements-BW7cf991.js";import"./index-CqMbcN6m.js";import"./props-helper-CihWmQAT.js";import"./useClickOutside-C2QAiZyI.js";import"./AccordionItem-DGZJqZWM.js";import"./Checkbox-ChRqkdmE.js";import"./DatePicker-CsVctaUI.js";import"./FormGroup-BidIjjuX.js";import"./MultiSelect-BWBlgV0p.js";import"./NumberInput-C-oCxd9B.js";import"./useNormalizedInputProps-CRs_cU1L.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CN3rodRl.js";import"./RadioButton-By6PBv1P.js";import"./RadioButtonGroup-kGMjCzg7.js";import"./usePrefersReducedMotion-BYGYFI31.js";import"./usePresence-Cp6m5svw.js";import"./ActionSet-D1XsrE9C.js";import"./useWindowResize-sd03rsgR.js";import"./TagSet-DTACHIpK.js";import"./Tag-SycbJDbH.js";import"./DefinitionTooltip-AXgDNA1V.js";import"./DismissibleTag-BtKcWFRj.js";import"./usePortalTarget-BYUdZyYt.js";import"./OperationalTag-Dnu6AwfC.js";import"./SkeletonText-DObhG0lc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-icR_1JoQ.js";import"./TableSelectRow-Ck3Nk057.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
