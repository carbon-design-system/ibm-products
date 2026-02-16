import{e as l,S as C,r as E,u as H}from"./iframe-DFpKMPby.js";import{s as T,m as D,E as S}from"./_storybook-styles-CBmTl_pd.js";import{D as z}from"./DatagridActions-BbBNPnUu.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-B21XQCqO.js";import{u as f}from"./useExpandedRow-BZoXJ09j.js";import{u as R}from"./useSelectRows-DYBiYCSO.js";import{E as N}from"./bucket-6-B98T6Er9.js";import{T as G}from"./bucket-18-DKRlsMeP.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-BJtRM_L-.js";import"./index-B_RYS3B3.js";import"./bucket-19-BiWvxoBr.js";import"./bucket-7-Bx0zcbBe.js";import"./ComposedModal-C4zVvowC.js";import"./index-BZNQ76pD.js";import"./LayerContext-BsfSsn3u.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CbfhMW98.js";import"./InlineLoading-C4D8swtL.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-LRnjjuOM.js";import"./Text-DmSkCN9-.js";import"./utils-js3bPBK9.js";import"./TableToolbarSearch-Dk9gpNqd.js";import"./wrapComponent-D28wPHR7.js";import"./Search-DHSo-NRX.js";import"./FormContext-DhkisQRD.js";import"./bucket-15-CTGKYzk1.js";import"./Dropdown-DqIfgZp5.js";import"./index-ClXT6K7y.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-CUOp-3yA.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-DL5t9ruc.js";import"./useControllableState-BZJyIqgU.js";import"./useAttachedMenu-DtpWmR0R.js";import"./environment-DRRHKtsv.js";import"./index-DUaXoaGc.js";import"./index-BwbFax62.js";import"./bucket-13-nCeWtx-Y.js";import"./useOutsideClick-Dyno-D99.js";import"./OverflowMenuItem-CGB8UMzh.js";import"./useFilterContext-DfwN8t7J.js";import"./useIsomorphicEffect-D8ODjm2R.js";import"./bucket-0-DdFwv4RV.js";import"./devtools-BTj-TFWE.js";import"./TableRow-D0UwMbKU.js";import"./bucket-1-CubUMv3g.js";import"./TableToolbar-C4rOViQ4.js";import"./index-DjtoZuLp.js";import"./ErrorEmptyState-BiDiFhvi.js";import"./EmptyState-D3ScweoC.js";import"./EmptyStateV2.deprecated-Cxm57ils.js";import"./Link-CzWKN6gF.js";import"./ErrorIllustration-D4EOM471.js";import"./useId-BDEqOPFK.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-ByxfvGT3.js";import"./NoDataIllustration-BIXT2HFa.js";import"./NotFoundEmptyState-C0mrM5Tb.js";import"./NotFoundIllustration-D4a-Y4C_.js";import"./index.esm-kjsVMGNX.js";import"./usePreviousValue-BJntbRdj.js";import"./useResizeObserver-BjbdykCB.js";import"./getFocusableElements-BW7cf991.js";import"./index-C7ycmAhm.js";import"./props-helper-IRa1SilK.js";import"./useClickOutside-DpM9DO1D.js";import"./AccordionItem-C1dawy3P.js";import"./Checkbox-CKECTXFq.js";import"./DatePicker-CI4BWb5R.js";import"./documentLang-E105Y72C.js";import"./FormGroup-CStcLMkP.js";import"./MultiSelect-DMtKNMJr.js";import"./NumberInput-B9DoUaSK.js";import"./bucket-17-BMHTEUf3.js";import"./RadioButton-DKxw8ESp.js";import"./RadioButtonGroup-bpKsy1F6.js";import"./usePrefersReducedMotion-iNk_fYdI.js";import"./usePresence-5eZ3iwCl.js";import"./ActionSet-Ddw8WSp7.js";import"./useWindowResize-CaqPyk-P.js";import"./TagSet-DFiYadK6.js";import"./Tag-Bo2WPtKs.js";import"./DefinitionTooltip-DcC1JVFA.js";import"./DismissibleTag-Dgl_DvA7.js";import"./usePortalTarget-BQit2Uui.js";import"./OperationalTag-BbFwxNme.js";import"./SkeletonText-D5kiG3Ie.js";import"./bucket-16-BE-04uEE.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-DuSbCl7r.js";import"./TableSelectRow-D5FlH_WN.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,fo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const Ro=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,Ro as __namedExportsOrder,fo as default};
//# sourceMappingURL=AiLabel.stories-CKspHmnl.js.map
