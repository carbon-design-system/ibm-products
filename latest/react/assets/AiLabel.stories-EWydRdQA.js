var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,aj as H,r as T,a as D}from"./iframe-CmZeheT6.js";import{s as z,m as I,E as b}from"./_storybook-styles-m-2R2B9T.js";import{D as y}from"./DatagridActions-Do5IGlSU.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-N56H4v69.js";import{u as N}from"./useExpandedRow-CYEhsX5p.js";import{u as G}from"./useSelectRows-FNRScQ3H.js";import{c as P}from"./bucket-7-CvCQ4FQX.js";import{T as _}from"./bucket-20-C7kq65Sj.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BRiQQ9US.js";import"./index-B9JydE09.js";import"./index-DFz6yjde.js";import"./bucket-8-COOn61zI.js";import"./bucket-21-KTYeptVo.js";import"./MenuItem-CYvQMTLi.js";import"./Text-CMDH-C6P.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DSwCvxHn.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BGD6uns2.js";import"./ComposedModal-D_dUPG_t.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BUGcLexz.js";import"./LayerContext-oZslXO7m.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-D1SR6nBO.js";import"./InlineLoading-CqW6qhLd.js";import"./ButtonSet-DHkjwoc0.js";import"./wrapFocus-buExbJ95.js";import"./OverflowMenuItem-DL0VUO_R.js";import"./TableToolbarSearch-B85GPx1v.js";import"./wrapComponent-DtisQTy_.js";import"./Search-BD0UeimG.js";import"./useNoInteractiveChildrenForLabel-CdyTHLPU.js";import"./FormContext-DNV35YkH.js";import"./bucket-17-BBPjp_HC.js";import"./TableToolbar-CsENfnD2.js";import"./bucket-0-CfKp2P8J.js";import"./TableRow-CaaO_Zln.js";import"./bucket-1-Bi0i4V73.js";import"./index-u1K3GKU6.js";import"./index-BDnJfxKc.js";import"./bucket-14-D2t_v-do.js";import"./useOutsideClick-DZLjB_2e.js";import"./Dropdown-B4tjbMs6.js";import"./downshift.esm-BzDbQhI0.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BGRlyean.js";import"./index-C1o99fmS.js";import"./useFilterContext-DrYofdmB.js";import"./useIsomorphicEffect-DQ0EsNEL.js";import"./bucket-6-C2Z2DTFL.js";import"./bucket-16-n8udRij-.js";import"./devtools-B-HeQd45.js";import"./ErrorEmptyState-C5PwzUh2.js";import"./EmptyState-BB3b7Cy6.js";import"./EmptyStateV2.deprecated-MCeLUYFT.js";import"./Link-DMNJzXga.js";import"./ErrorIllustration-D5VvgfMp.js";import"./useId-BQ_kEwCe.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BtTFZCj2.js";import"./NoDataIllustration-ccPm6mQS.js";import"./NotFoundEmptyState-CRqgS0Bs.js";import"./NotFoundIllustration-CQ8nUoRf.js";import"./index.esm-A4ErlNDN.js";import"./usePreviousValue-BjJw38mJ.js";import"./useResizeObserver-DDMui9ob.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-C47CQjbS.js";import"./props-helper-ByZt1ChO.js";import"./useClickOutside-CGJdzi2p.js";import"./AccordionItem-B5hDylX-.js";import"./Checkbox-BGA6wYAD.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-DeeWJA9Y.js";import"./DatePicker-BOsd_Dxb.js";import"./FormGroup-8jDNcMfQ.js";import"./MultiSelect-CDF0nNaX.js";import"./NumberInput-Bm1Bf6gU.js";import"./bucket-18-BgC2P19b.js";import"./RadioButtonGroup-CnWPhPT4.js";import"./index-DaSW_oFl.js";import"./usePrefersReducedMotion-BT2bVWL_.js";import"./usePresence-C2Dju66v.js";import"./ActionSet-A8M6YsX4.js";import"./useWindowResize-URRhLwvZ.js";import"./TagSet-BxBgc1Qw.js";import"./Tag-CH7dVAMb.js";import"./DefinitionTooltip-BL-DQGH5.js";import"./DismissibleTag-D5DiXv9m.js";import"./usePortalTarget-rrY8xbyq.js";import"./OperationalTag-Dextsd8i.js";import"./SkeletonText-DwR12Pq2.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-qVdJq5t3.js";import"./TableSelectRow-BvVawmY1.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,vo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-EWydRdQA.js.map
