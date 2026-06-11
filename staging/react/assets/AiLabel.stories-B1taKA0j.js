var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-DjhatwYN.js";import{s as z,m as I,E as b}from"./_storybook-styles-Cq5yozWn.js";import{D as y}from"./DatagridActions-DSRUKSrd.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Y-PawOrl.js";import{u as N}from"./useExpandedRow-BFDkHii2.js";import{u as G}from"./useSelectRows-wz1AfGxO.js";import{c as P}from"./bucket-6-BheI4vap.js";import{T as _}from"./bucket-19-DIg4M51W.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CDb9kUsn.js";import"./index-owJ4jz1M.js";import"./index-DcoRJSfi.js";import"./bucket-7-DzUCZQqj.js";import"./bucket-20-D8k5DkrN.js";import"./MenuItem-AiQT_bx9.js";import"./Text-BaETmR7U.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CiypQ9pG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BDHtwbPd.js";import"./ComposedModal-B_P_c2C_.js";import"./mergeRefs-BH0-8uDG.js";import"./index-CAyd05U7.js";import"./LayerContext-C8LqyRYa.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-blI8iiAX.js";import"./InlineLoading-GFCyMXpZ.js";import"./ButtonSet-Brqzjdle.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CXSYhBnP.js";import"./OverflowMenuItem-Dsj8XncV.js";import"./TableToolbarSearch-Bc_4qicE.js";import"./wrapComponent-BJDnhPAl.js";import"./Search-DYgJ0ULE.js";import"./FormContext-BMDfFsRX.js";import"./bucket-16-CDb8Xiex.js";import"./index-BJtVRVtG.js";import"./bucket-13-szDtigQL.js";import"./useOutsideClick-C4lkmPMe.js";import"./Dropdown-8jOeisn5.js";import"./useNormalizedInputProps-DpdCEWIZ.js";import"./downshift.esm-CM8vMYzw.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DZGnyKhd.js";import"./useFilterContext-DDRyWf4O.js";import"./useIsomorphicEffect-z7MnJin8.js";import"./bucket-0-B2i1_Gfd.js";import"./bucket-15-B_udJxkS.js";import"./devtools-Dn6AC_oR.js";import"./TableRow-CQQKux7j.js";import"./bucket-1-DV6WRrpg.js";import"./TableToolbar-DSG04oBe.js";import"./index-B440oqQp.js";import"./ErrorEmptyState-DbnPn74W.js";import"./EmptyState-CgXbf1T_.js";import"./EmptyStateV2.deprecated-B0ZqDIqG.js";import"./Link-BvFMN3La.js";import"./ErrorIllustration-BpfOr-h5.js";import"./useId-BEl_syO7.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CBLKbgG4.js";import"./NoDataIllustration-DpmB-7Fu.js";import"./NotFoundEmptyState-CxB0EMTX.js";import"./NotFoundIllustration-C5hpLchS.js";import"./index.esm-ChKKjNg5.js";import"./usePreviousValue-Cqtyehn-.js";import"./useResizeObserver-CZwRZha8.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DEsaE2yn.js";import"./props-helper-Cqqcv9Dj.js";import"./useClickOutside-D9tgg4mq.js";import"./AccordionItem-9hnoGIT2.js";import"./Checkbox-HeyXaFW2.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-BiPmwXj5.js";import"./DatePicker-rIlixyCW.js";import"./FormGroup-Ce2MYPCK.js";import"./MultiSelect-DUcHhZt6.js";import"./NumberInput-Cfu3bQhE.js";import"./bucket-17-B8jXhyJH.js";import"./RadioButtonGroup-PGaCu7Ix.js";import"./index-CowYo_RF.js";import"./usePrefersReducedMotion-gWsl8x-8.js";import"./usePresence-Dm24K1ni.js";import"./ActionSet-ddlXAvmX.js";import"./useWindowResize-BLjP8SSz.js";import"./TagSet-DbX5RlwW.js";import"./Tag-BNEOudzH.js";import"./DefinitionTooltip-CtDR--kN.js";import"./DismissibleTag-CJGNo0d6.js";import"./usePortalTarget-CNcdiaVp.js";import"./OperationalTag-GoF5PrRB.js";import"./SkeletonText-C2So6Znj.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CLOQiuhu.js";import"./TableSelectRow-CKvFcw6I.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-B1taKA0j.js.map
