import{e as l,S as C,r as E,u as H}from"./iframe-C3VsvcP9.js";import{s as T,m as D,E as S}from"./_storybook-styles-C-dPDa-y.js";import{D as z}from"./DatagridActions-9yxxcrZA.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-BWGO2qC4.js";import{u as f}from"./useExpandedRow-wjlmBlkA.js";import{u as R}from"./useSelectRows-C6Rtov5n.js";import{E as N}from"./bucket-6-CZ4baeq2.js";import{T as G}from"./bucket-17-Dgq3jiin.js";import"./bucket-2-ClJ42iNs.js";import"./index-2VSnzl5A.js";import"./bucket-18-Ctp_kJlg.js";import"./bucket-7-CawwMIPp.js";import"./ComposedModal-CKf6hdHj.js";import"./index-BEhuL1MR.js";import"./index-BE_xx21s.js";import"./LayerContext-BU_ygKHE.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DWufBl0Z.js";import"./InlineLoading-CTBjshum.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-D809mY0y.js";import"./Text-Deo-qbq3.js";import"./utils-DTYRHBXP.js";import"./TableToolbarSearch-BOvJc1mF.js";import"./wrapComponent-DqZ_vTR7.js";import"./Search-CZ7Xq8Hj.js";import"./FormContext-QDgbKXU5.js";import"./bucket-15-7qvePeJD.js";import"./Dropdown-JmpdO0OT.js";import"./index-BwfDabtT.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-DdtfpNln.js";import"./MenuItem-5zxM7A3O.js";import"./useControllableState-BJB23Zhp.js";import"./useAttachedMenu-BlxDu2aa.js";import"./index-CXD845F9.js";import"./index-DoFt_alO.js";import"./bucket-12-DrtzkUGW.js";import"./useOutsideClick-CD3FvkGX.js";import"./OverflowMenuItem-CzaFxSyE.js";import"./useFilterContext-DWov6dNL.js";import"./bucket-0-qf3IPsyL.js";import"./bucket-14-BSNImc6g.js";import"./devtools-BjHf0isC.js";import"./TableRow-QlCxZCTa.js";import"./bucket-1-aSxP9hG3.js";import"./TableToolbar-BC0vNkzB.js";import"./index-BEVy0Ul0.js";import"./ErrorEmptyState-u8Laol2X.js";import"./EmptyState-BvBgcN9F.js";import"./props-helper-BrmPtLqI.js";import"./Link-VBwvbQXg.js";import"./EmptyStateV2-D5RVLTjr.js";import"./ErrorIllustration-CS9j6DfM.js";import"./useId-YTeng8i2.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Bu73g3HU.js";import"./NoDataIllustration-DfWjDa5F.js";import"./NotFoundEmptyState-Dt5Wigi8.js";import"./NotFoundIllustration-B6kP1sV2.js";import"./index.esm-BYoO4Q4F.js";import"./usePreviousValue-Bc_HSeid.js";import"./useResizeObserver-BR_0OKz2.js";import"./useIsomorphicEffect-X37BQc6H.js";import"./getFocusableElements-BW7cf991.js";import"./index-C3eFE35T.js";import"./useClickOutside-CSqqc8w1.js";import"./AccordionItem-BcdTncBK.js";import"./Checkbox-7GlD-LN-.js";import"./DatePicker-BNMZQ-X_.js";import"./FormGroup-5eRQaJF7.js";import"./MultiSelect-BOcX-1MQ.js";import"./NumberInput-CS41rp5O.js";import"./useNormalizedInputProps-CiBIJrsU.js";import"./documentLang-E105Y72C.js";import"./bucket-16-H5ot9CRJ.js";import"./RadioButton-DOtUEVrL.js";import"./RadioButtonGroup-B43pTYvp.js";import"./usePrefersReducedMotion-BQ_NTXri.js";import"./usePresence-B-Qs1Axp.js";import"./ActionSet-ClQ4Ohv5.js";import"./useWindowResize-Swxgy74p.js";import"./TagSet-XD0RiOJj.js";import"./Tag-CkReqKIz.js";import"./DefinitionTooltip-CVPO1WqB.js";import"./DismissibleTag-Cou1xx-O.js";import"./usePortalTarget-BdGFdCd6.js";import"./OperationalTag-CQpXwJM_.js";import"./SkeletonText-bsLCvOuS.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-Fo6DDUD6.js";import"./TableSelectRow-gdt5BjsN.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
