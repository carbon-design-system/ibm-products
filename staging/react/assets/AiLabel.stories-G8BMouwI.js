var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ai as H,r as T,a as D}from"./iframe-BNGWoFVN.js";import{s as z,m as I,E as b}from"./_storybook-styles-CkYL2q34.js";import{D as y}from"./DatagridActions-LRrGiKux.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-267wUqFf.js";import{u as N}from"./useExpandedRow-CDKTFiX_.js";import{u as G}from"./useSelectRows-Rc6VdUeH.js";import{a as P}from"./bucket-6-B7ttew9n.js";import{T as _}from"./bucket-20-DnGv9FGc.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-yBl_RuSX.js";import"./index-BGVaWMRy.js";import"./index-CbhpwO1D.js";import"./bucket-8-DBsmuUY8.js";import"./bucket-21-Dc8elOVL.js";import"./MenuItem-Bd8_llpQ.js";import"./Text-BKVLrozK.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DMTLmPWt.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DD-t2lIg.js";import"./ComposedModal-CHYY0ruW.js";import"./mergeRefs-BH0-8uDG.js";import"./index-CFH01y5t.js";import"./LayerContext-BHqy-tts.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-CNMer6m0.js";import"./InlineLoading-BUwmRQvj.js";import"./bucket-7-DFXPTo5t.js";import"./ButtonSet-D35-9THN.js";import"./wrapFocus-D8wRDpML.js";import"./OverflowMenuItem-CxFX2uZf.js";import"./TableToolbarSearch-BQrpdthI.js";import"./wrapComponent-DoqHm0qK.js";import"./Search-C5dMMEkN.js";import"./FormContext-BOkH4Ia3.js";import"./bucket-17-CY2a9dUg.js";import"./TableToolbar-D-XVw5Pq.js";import"./bucket-0-DgGA-qIJ.js";import"./TableRow-bJblJQR1.js";import"./bucket-1-Di7Dv4UB.js";import"./index-CdROyjJO.js";import"./index-CZq5bCWz.js";import"./bucket-14-pD4ajBcY.js";import"./useOutsideClick-B2zj3EcL.js";import"./Dropdown-BQ_2wzrz.js";import"./downshift.esm-CKmaosc4.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BZ7mSUIs.js";import"./index-DtRfS0d4.js";import"./useFilterContext-Cz07zkbJ.js";import"./useIsomorphicEffect-C3WxPeS7.js";import"./bucket-16-QrFJfXf4.js";import"./devtools-DfKI38aY.js";import"./ErrorEmptyState-C1rEHoa2.js";import"./EmptyState-Bl9fqBZl.js";import"./EmptyStateV2.deprecated-Ds1d_b0j.js";import"./Link-BwA2TWAV.js";import"./ErrorIllustration-C1i3KJSu.js";import"./useId-BJfoE5r_.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BwXIvFk5.js";import"./NoDataIllustration-BDsfo_8B.js";import"./NotFoundEmptyState-CLlFVYCL.js";import"./NotFoundIllustration-B8XpHc0n.js";import"./index.esm-CRzRCy5C.js";import"./usePreviousValue-BTb-B77j.js";import"./useResizeObserver-DhHCg6Do.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-BzfEn4D3.js";import"./props-helper-BtRmhizd.js";import"./useClickOutside-Dt8Jpb-t.js";import"./AccordionItem-Do-CsFKs.js";import"./Checkbox-BKsKyFWP.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-BTGq9aKc.js";import"./DatePicker-DhPa1FcI.js";import"./FormGroup-CiGW62au.js";import"./MultiSelect-B33wh34j.js";import"./NumberInput-Cq_mItwW.js";import"./bucket-18-CXNFW6DE.js";import"./RadioButtonGroup-DlBc9YJn.js";import"./index-K68prMtv.js";import"./usePrefersReducedMotion-NQP7UZXs.js";import"./usePresence-Bs4KUcSK.js";import"./ActionSet-BUDcAy3c.js";import"./useWindowResize-CpmXYLhw.js";import"./TagSet-Be2CyfhI.js";import"./Tag-71Cjwhd2.js";import"./DefinitionTooltip-BL8zZUMg.js";import"./DismissibleTag-DYJc7d_g.js";import"./usePortalTarget-BsDIf4KV.js";import"./OperationalTag-CCOUFMZK.js";import"./SkeletonText-ayGDBLzc.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-C49GzP6-.js";import"./TableSelectRow-BoMdNFn9.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-G8BMouwI.js.map
