var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,aj as H,r as T,a as D}from"./iframe-CAHi-ash.js";import{s as z,m as I,E as b}from"./_storybook-styles-j6Rosior.js";import{D as y}from"./DatagridActions-BGiqaOKZ.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-yfBU40bC.js";import{u as N}from"./useExpandedRow-BSnMLm6j.js";import{u as G}from"./useSelectRows-B5b7V3eK.js";import{c as P}from"./bucket-7-D0gXeiJE.js";import{T as _}from"./bucket-20-B1yq3xQZ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BAtmiIyf.js";import"./index-jLaOlUcY.js";import"./index-DK2JkwdU.js";import"./bucket-8-Cb0KQluP.js";import"./bucket-21-CD0ipd9A.js";import"./MenuItem-akDrE2Gr.js";import"./Text-DsolOYEo.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CEJmMsbf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DMc6Pa5Q.js";import"./ComposedModal-CXrnX8xO.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BdnfRBBG.js";import"./LayerContext-ZOVV-hMu.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DeFV3US-.js";import"./InlineLoading-C0V9gGX-.js";import"./ButtonSet-BJimU4f6.js";import"./wrapFocus-DbuaTTNI.js";import"./OverflowMenuItem-Cd_OXepw.js";import"./TableToolbarSearch-q_ATp_YQ.js";import"./wrapComponent-BRREgjtm.js";import"./Search-BSWSNX6f.js";import"./useNoInteractiveChildrenForLabel-CUa-lZs9.js";import"./FormContext-a1LIIEAZ.js";import"./bucket-17-DWkJcv8y.js";import"./TableToolbar-BIaIp0Ts.js";import"./bucket-0-DjmiwkMM.js";import"./TableRow-Cy62KLCf.js";import"./bucket-1-Df6sWiux.js";import"./index-qdBxdvqW.js";import"./index-BTu5YF-G.js";import"./bucket-14-BYROENkX.js";import"./useOutsideClick-DHl_vKqQ.js";import"./Dropdown-BQvv5_Am.js";import"./downshift.esm-D7c-TRkM.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-D2SHc324.js";import"./index-CUQTJDA2.js";import"./useFilterContext-CXGWp-_0.js";import"./useIsomorphicEffect-BTuoj9LQ.js";import"./bucket-6-cuCxrebb.js";import"./bucket-16-CH7F6URe.js";import"./devtools-CF3eS4kS.js";import"./ErrorEmptyState-COjFi2Y0.js";import"./EmptyState-DaOmVGnC.js";import"./EmptyStateV2.deprecated-BIY9qQuA.js";import"./Link-Thsk_YUK.js";import"./ErrorIllustration-Czi5LKLg.js";import"./useId-Ctlf7PVu.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-KuoLOJt_.js";import"./NoDataIllustration-B8TwBhHF.js";import"./NotFoundEmptyState-By03GGSt.js";import"./NotFoundIllustration-DVWAK-Yh.js";import"./index.esm-DKgfUpzG.js";import"./usePreviousValue-aF8QrfT_.js";import"./useResizeObserver-B-_vnHM-.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-BkNZblnM.js";import"./props-helper-DntgWPHn.js";import"./useClickOutside-D1lc1mQ6.js";import"./AccordionItem-D9Uq0wTL.js";import"./Checkbox-B66lYW7C.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-QZ1FUBrh.js";import"./DatePicker-CaJ6-Arb.js";import"./FormGroup-Cm4eBAA3.js";import"./MultiSelect-BaO3vxje.js";import"./NumberInput-CadaUR2t.js";import"./bucket-18-B63ZNGVz.js";import"./RadioButtonGroup-BHPqEEkw.js";import"./index-DNGEKLLZ.js";import"./usePrefersReducedMotion-C1UVceYM.js";import"./usePresence-SgWlbhYp.js";import"./ActionSet-xyYTw4Ri.js";import"./useWindowResize-02PmyvEI.js";import"./TagSet-B61X5FDT.js";import"./Tag-CNMZYQD2.js";import"./DefinitionTooltip-BzdxlL2b.js";import"./DismissibleTag-DebYVXCG.js";import"./usePortalTarget-CHduIn6w.js";import"./OperationalTag-WaGggS6a.js";import"./SkeletonText-BGnaaE9N.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-BHOZf62c.js";import"./TableSelectRow-DA9j1PcK.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,vo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-0dzljx9z.js.map
