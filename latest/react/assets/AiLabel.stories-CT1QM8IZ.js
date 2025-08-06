import{e as l,S as C,r as E,u as H}from"./iframe-BIFZhnVI.js";import{s as T,m as D,E as S}from"./_storybook-styles-BfIyjn8_.js";import{D as z}from"./DatagridActions-DBkBhiJd.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-D5qrL6yy.js";import{u as f}from"./useExpandedRow-7RHY9gu9.js";import{u as R}from"./useSelectRows-BfgOkMyy.js";import{E as N}from"./bucket-6-D78KEThR.js";import{T as G}from"./bucket-17-k5VeaHnj.js";import"./bucket-2-CqoFS1Sx.js";import"./index-f5OplNpe.js";import"./bucket-18-gGZYZqnV.js";import"./bucket-7-BZOQq6pn.js";import"./ComposedModal-BRvJkANc.js";import"./index-BEhuL1MR.js";import"./index-YsSTEGS5.js";import"./LayerContext-F4WW4Vix.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BoMgkE12.js";import"./InlineLoading-D2bFvRJo.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-Cv59NQgU.js";import"./Text-De_FGo-w.js";import"./utils-Dr8OqWgi.js";import"./TableToolbarSearch-DVVHyzNw.js";import"./wrapComponent-kYzNr5sH.js";import"./Search-DEL4HtAI.js";import"./FormContext-CFAm_7fa.js";import"./bucket-15-DlwXdW_V.js";import"./Dropdown-DEWyiB4Z.js";import"./index-DGan2qnv.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-BZJlF_R9.js";import"./MenuItem-DIiYNEEd.js";import"./useControllableState-BX4U6x41.js";import"./useAttachedMenu-C5NN-QeW.js";import"./index-C3kjPWmu.js";import"./index-B07VMW4b.js";import"./bucket-12-Dw8KRV1d.js";import"./useOutsideClick-BnL9xlTI.js";import"./OverflowMenuItem-B0PP6aBA.js";import"./useFilterContext-gSxb74Y3.js";import"./bucket-0-DCpLKNHt.js";import"./bucket-14-CaGhjY69.js";import"./devtools-CwY7Nwoz.js";import"./TableRow-B6VPz9a-.js";import"./bucket-1-CXEoC0iP.js";import"./TableToolbar-T-iysOV6.js";import"./index-Cadwwfc1.js";import"./ErrorEmptyState-CbL2u_XG.js";import"./EmptyState-Coy_-JQD.js";import"./EmptyStateV2-C0zlLdVw.js";import"./Link-D35FEmIt.js";import"./props-helper-DjmSBFn9.js";import"./ErrorIllustration--hNj3dSx.js";import"./useId-C3GxNxEZ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-PpjlCL-m.js";import"./NoDataIllustration-D8JES9HQ.js";import"./NotFoundEmptyState-BXqnSAGu.js";import"./NotFoundIllustration-kgt-4xOe.js";import"./index.esm-BkTKBd1Q.js";import"./usePreviousValue-CmKce-sY.js";import"./useResizeObserver-BEXCT2dX.js";import"./useIsomorphicEffect-BtioHI2r.js";import"./getFocusableElements-BW7cf991.js";import"./index-DEXbOqQ6.js";import"./useClickOutside-BAzBLvYA.js";import"./AccordionItem-DUCphrnj.js";import"./Checkbox-DDtP4ZQv.js";import"./DatePicker-r9P7J_vL.js";import"./FormGroup-OjAZbJ3E.js";import"./MultiSelect-CWe0g1Uo.js";import"./NumberInput-B58ny9xU.js";import"./useNormalizedInputProps-DQpAPIMf.js";import"./documentLang-E105Y72C.js";import"./bucket-16-VXRgqweq.js";import"./RadioButton-BC5PUZAl.js";import"./RadioButtonGroup-CdXWCA6g.js";import"./usePrefersReducedMotion-CJIZ4eYS.js";import"./usePresence-DPgtSzPE.js";import"./ActionSet-CJUwVbYk.js";import"./useWindowResize-C_XlvzvM.js";import"./TagSet-Cog8SJk6.js";import"./Tag-Dt3sXznE.js";import"./DefinitionTooltip-CFqcVxyo.js";import"./DismissibleTag-DZT3OLx0.js";import"./usePortalTarget-BsUxYanV.js";import"./OperationalTag-D498OLpq.js";import"./SkeletonText-nu44_sil.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-Bb7bB3G3.js";import"./TableSelectRow-DfJpQmv8.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
