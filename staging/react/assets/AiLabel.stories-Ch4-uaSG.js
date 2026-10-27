var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,aj as H,r as T,a as D}from"./iframe-CaYiXxeb.js";import{s as z,m as I,E as b}from"./_storybook-styles-C7glXxSo.js";import{D as y}from"./DatagridActions-DcDtxeOI.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Ca-7w4T0.js";import{u as N}from"./useExpandedRow-XIGfIdBY.js";import{u as G}from"./useSelectRows-DZhKJbXK.js";import{c as P}from"./bucket-7-BfvkBBdh.js";import{T as _}from"./bucket-20-BIxJnZZV.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-B-5ATZBS.js";import"./index-BX-ljRwx.js";import"./index-jlb8RiJl.js";import"./bucket-8-C2tuhNCq.js";import"./bucket-21-C4ELoiYU.js";import"./MenuItem-BMMprwrM.js";import"./Text-CGI6c8pb.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-C981KQUf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DBHvgFWc.js";import"./ComposedModal-BCG556m2.js";import"./mergeRefs-BH0-8uDG.js";import"./index-CbznafVO.js";import"./LayerContext-C_jiTdxa.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-uVUXmJ0D.js";import"./InlineLoading-ZgtWNWQn.js";import"./ButtonSet-kpfj_AKD.js";import"./wrapFocus-BaZdYIcz.js";import"./OverflowMenuItem-DFWyXgW0.js";import"./TableToolbarSearch-BemKjBpg.js";import"./wrapComponent-4R77IWCT.js";import"./Search-BnZ9r0_7.js";import"./useNoInteractiveChildrenForLabel-1_tyUqLF.js";import"./FormContext-D-VIdrjx.js";import"./bucket-17-qOCo0CKL.js";import"./TableToolbar-LYhACb2s.js";import"./bucket-0-BZoPvsPe.js";import"./TableRow-rRVJ73ie.js";import"./bucket-1-CbK5Zgvg.js";import"./index-D0ueUpbx.js";import"./index-B7rHjqKx.js";import"./bucket-14-B5wBEtv-.js";import"./useOutsideClick-DYApPV8J.js";import"./Dropdown-B9OdtyB8.js";import"./downshift.esm-BAyf-FyY.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-C--Qe6YU.js";import"./index-BFK90Ci4.js";import"./useFilterContext-lxgNuOW8.js";import"./useIsomorphicEffect-CelFyGs3.js";import"./bucket-6-CYcR4NQl.js";import"./bucket-16-B0TQ1w0t.js";import"./devtools-Op8SBfoQ.js";import"./ErrorEmptyState-BYfD13dq.js";import"./EmptyState-ChcPqICq.js";import"./EmptyStateV2.deprecated-Ec1-hoIE.js";import"./Link-DLhwDTY_.js";import"./ErrorIllustration-DzwUVoKa.js";import"./useId-W2h0r20i.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CGJa-HU6.js";import"./NoDataIllustration-CinZmDhZ.js";import"./NotFoundEmptyState-miUHXy7A.js";import"./NotFoundIllustration-QjaoQ6vS.js";import"./index.esm-DgKSX2Zb.js";import"./usePreviousValue-CI6rS2zt.js";import"./useResizeObserver-R4NKztwC.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-Db3Fyji3.js";import"./props-helper-DaiXPvfv.js";import"./useClickOutside-DYW-D94F.js";import"./AccordionItem-DfBfsUQS.js";import"./Checkbox-Cc29oIS_.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-Ct-VDQwJ.js";import"./DatePicker-a4pbyO7U.js";import"./FormGroup-BzpKQVTj.js";import"./MultiSelect-9i2g6EC3.js";import"./NumberInput-DUaGKBiQ.js";import"./bucket-18-DHNTnyIv.js";import"./RadioButtonGroup-ujo-N2XQ.js";import"./index-5yStg3sU.js";import"./usePrefersReducedMotion-DWAg04Sp.js";import"./usePresence-CP8eBXhm.js";import"./ActionSet-CxEDqNZ6.js";import"./useWindowResize-DKl4K286.js";import"./TagSet-D1aDFuzC.js";import"./Tag-C1OHW9GU.js";import"./DefinitionTooltip-TbUUdaQu.js";import"./DismissibleTag-CVgiX6De.js";import"./usePortalTarget-PQnIa8FM.js";import"./OperationalTag-B91QuMw0.js";import"./SkeletonText-C1ONMzLV.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-Dzre81Ze.js";import"./TableSelectRow-CDxso3fh.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,vo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-Ch4-uaSG.js.map
