var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ag as H,r as T,a as D}from"./iframe-DS02e2Nt.js";import{s as z,m as I,E as b}from"./_storybook-styles-BKvavHKv.js";import{D as y}from"./DatagridActions-DXwQWF6-.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Bd1ik_IU.js";import{u as N}from"./useExpandedRow-DykYzlGg.js";import{u as G}from"./useSelectRows-CpNhlj9n.js";import{a as P}from"./bucket-6-CtPi5ij7.js";import{T as _}from"./bucket-19-CXgbaG7y.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Y2X-CGmZ.js";import"./index-qEnSGODh.js";import"./index-DcUJ4pnV.js";import"./bucket-20-BaUmkZX5.js";import"./bucket-7-z8kwq4sq.js";import"./MenuItem-CvMFZPkW.js";import"./Text-53bktq_X.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CayauLGZ.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CCFfW63x.js";import"./ComposedModal-Cjw2bjsE.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DernP3XJ.js";import"./LayerContext-DP63q_g-.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-CFbq52Te.js";import"./InlineLoading-CRDLxsk0.js";import"./ButtonSet-BNk_kxER.js";import"./wrapFocus-DzBTv3RN.js";import"./OverflowMenuItem-CKsxbQZJ.js";import"./TableToolbarSearch-z8Hyy-mT.js";import"./wrapComponent-Ds8kKncc.js";import"./Search-cS1gVrP0.js";import"./FormContext-DzZrHLuK.js";import"./bucket-16-nZ5pUWoD.js";import"./TableToolbar-7F2AYhjH.js";import"./bucket-0-bVNERcyL.js";import"./TableRow-BXh40hhH.js";import"./bucket-1-Ey-WkFi7.js";import"./index-DrYZzYiY.js";import"./index-BqCWi17V.js";import"./bucket-14-BPM0M4U1.js";import"./useOutsideClick-CWb-LrtL.js";import"./Dropdown-D1Wzd2LM.js";import"./useNormalizedInputProps-DiNT5NbB.js";import"./bucket-21-CmBNykUN.js";import"./downshift.esm-BwopKnTd.js";import"./inheritsLoose-CdLKJotq.js";import"./index-BQlXF0k_.js";import"./useFilterContext-DQ7FkoI4.js";import"./useIsomorphicEffect-BFqnqv4P.js";import"./bucket-15-CzjF6NRG.js";import"./devtools-DQlxl8yG.js";import"./ErrorEmptyState-BgSKVjlU.js";import"./EmptyState-CfFL5ScB.js";import"./EmptyStateV2.deprecated-DBsQzdCR.js";import"./Link-CRViJIT_.js";import"./ErrorIllustration-CYj8YQfP.js";import"./useId-CptZhySD.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BNiv-Xmh.js";import"./NoDataIllustration-BNWoXiiP.js";import"./NotFoundEmptyState-Yiqe76B4.js";import"./NotFoundIllustration-BkC4jD8d.js";import"./index.esm-DOBWp1iL.js";import"./usePreviousValue-DXcziui_.js";import"./useResizeObserver-D3JZ9rBF.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-iaEe97zR.js";import"./props-helper-D1pSUW0Q.js";import"./useClickOutside-0ghHmBdk.js";import"./AccordionItem-Bcx96xT2.js";import"./Checkbox-CcaR_usH.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-D01Wdhpi.js";import"./DatePicker-DWDWjZkN.js";import"./FormGroup-BaxHgaBt.js";import"./MultiSelect-DJ-KWG3L.js";import"./NumberInput-BXJnWwYz.js";import"./bucket-18-Df9qVwbh.js";import"./RadioButtonGroup-BwAs2x4R.js";import"./index-D6A0WD3N.js";import"./usePrefersReducedMotion-7uOfAxMV.js";import"./usePresence-CZjBhXb5.js";import"./ActionSet-DWDV0HPk.js";import"./useWindowResize-Cy0mnNpd.js";import"./TagSet-DT1Cj2xB.js";import"./Tag-BeZgjXvE.js";import"./DefinitionTooltip-B-rH83Zi.js";import"./DismissibleTag-CHz0fkGu.js";import"./usePortalTarget-Nm4VSi3y.js";import"./OperationalTag-DsGh7sjz.js";import"./SkeletonText-DAqf_eOS.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-BTSoUoCE.js";import"./TableSelectRow-0CtOwUnw.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-MCGBznPx.js.map
