var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-DqlTQ60u.js";import{s as z,m as I,E as b}from"./_storybook-styles-CtTJGDun.js";import{D as y}from"./DatagridActions-CgTLEusB.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-DiA1y2e2.js";import{u as N}from"./useExpandedRow-BRKE84T-.js";import{u as G}from"./useSelectRows-DVtPPkRd.js";import{c as P}from"./bucket-6-Ci6XPTYv.js";import{T as _}from"./bucket-19-Bl6YGOgX.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-1qJPwgxr.js";import"./index-Dmh7by5P.js";import"./index-I133Egmb.js";import"./bucket-7-BRJdpH87.js";import"./bucket-20-DNbJQAaN.js";import"./MenuItem-DX6Dhl15.js";import"./Text-C_hBiMwV.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DFyr3dyq.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLKc2yz8.js";import"./ComposedModal-BIuMYipc.js";import"./mergeRefs-BH0-8uDG.js";import"./index-gxNZoIp9.js";import"./LayerContext-CMfAIrnS.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-7nifezvp.js";import"./InlineLoading-DLsVoIA8.js";import"./ButtonSet-Qe_jbSYo.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CPa3H9Wu.js";import"./OverflowMenuItem-DK_0gtFj.js";import"./TableToolbarSearch-CJflmG-0.js";import"./wrapComponent-CGmf1esL.js";import"./Search-DeK_EN0c.js";import"./FormContext-DBobOUqy.js";import"./bucket-16-CAKCo8VO.js";import"./index-Bgd8S7Yd.js";import"./bucket-13-BtpItG6_.js";import"./useOutsideClick-Cgj5c5nU.js";import"./Dropdown-Df5asNig.js";import"./useNormalizedInputProps-BdKeC2wm.js";import"./downshift.esm-CAQmdjfM.js";import"./inheritsLoose-CdLKJotq.js";import"./index-Bu84p2gl.js";import"./useFilterContext-Dz9XjWrK.js";import"./useIsomorphicEffect-fdw4_oyY.js";import"./bucket-0-LPimrmrR.js";import"./bucket-15-TcwQyLY-.js";import"./devtools-B5kwQgE6.js";import"./TableRow-8rB-0lKQ.js";import"./bucket-1-07O7_BXh.js";import"./TableToolbar-C5xv-GbK.js";import"./index-BULlMr4z.js";import"./ErrorEmptyState-BZsd6RZP.js";import"./EmptyState-CaPVb7y1.js";import"./EmptyStateV2.deprecated-BKxIVNQt.js";import"./Link-DJn5Fe6d.js";import"./ErrorIllustration-DswySO5R.js";import"./useId-Cz6CmHcG.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CB_8iwSh.js";import"./NoDataIllustration-DN3pYqGI.js";import"./NotFoundEmptyState-C0OMl-bh.js";import"./NotFoundIllustration-Du2-Mqjj.js";import"./index.esm-BRAeakpg.js";import"./usePreviousValue-BBfGKPqo.js";import"./useResizeObserver-D8wNq_KX.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BItMFHta.js";import"./props-helper-BixCVTGM.js";import"./useClickOutside-CGtPfakl.js";import"./AccordionItem-CMfo9mFc.js";import"./Checkbox-DxBQcqGW.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-xnmNGPMa.js";import"./DatePicker-C9N5NaqO.js";import"./FormGroup-CNF2X2MM.js";import"./MultiSelect-NrAJ7cAQ.js";import"./NumberInput-DP190IRS.js";import"./bucket-17-Kbq1Lr0J.js";import"./RadioButtonGroup-C8LCDrfl.js";import"./index-CZicoawm.js";import"./usePrefersReducedMotion-V8hT7M9C.js";import"./usePresence-yJahfh1s.js";import"./ActionSet-FICcreUW.js";import"./useWindowResize-Bj8OmIlj.js";import"./TagSet-CnEfK8Er.js";import"./Tag-DShRle_w.js";import"./DefinitionTooltip-mL6qb3jN.js";import"./DismissibleTag-DPyYs0ly.js";import"./usePortalTarget-B28u9rUF.js";import"./OperationalTag-CzGHdqHP.js";import"./SkeletonText-DMZWaUbe.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-VPYOokc1.js";import"./TableSelectRow-CYRqnx1e.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-BXGgB3PM.js.map
