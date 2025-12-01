import{e as l,S as C,r as E,u as H}from"./iframe-BM8UuOT_.js";import{s as T,m as D,E as S}from"./_storybook-styles-DOrKKOgo.js";import{D as z}from"./DatagridActions-dPtVk2kC.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-A0XkAOGV.js";import{u as f}from"./useExpandedRow-CoEPl7bm.js";import{u as R}from"./useSelectRows-B0UYzMrK.js";import{E as N}from"./bucket-6-Ce-CpZ2t.js";import{T as G}from"./bucket-18-BWfaT1BD.js";import"./bucket-2-DIBgyTH9.js";import"./index-B2-UkdcH.js";import"./bucket-7-BBzHZeZe.js";import"./bucket-19-C2Jy_3fG.js";import"./ComposedModal-DQU04RjK.js";import"./index-Dkc_HWs6.js";import"./LayerContext-kWUz0ybk.js";import"./clamp--00YEiB8.js";import"./ButtonSet-keZYC8CP.js";import"./InlineLoading-CV8Tykr1.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-BZutPaRn.js";import"./Text-Bp2pW92U.js";import"./utils-DEU5vRWz.js";import"./TableToolbarSearch-B9CVP5Ud.js";import"./wrapComponent-CbIGyXbF.js";import"./Search-DvUYMInW.js";import"./FormContext-BxAlDPBq.js";import"./bucket-15-CI4BnjUX.js";import"./Dropdown-hT-OjNB0.js";import"./index-DlLSDJCX.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-BjTLsKut.js";import"./useControllableState-_39iz1-m.js";import"./useAttachedMenu-CdxBgQP6.js";import"./index-Bpz1Xbcj.js";import"./index-CIBJun7w.js";import"./bucket-13-BX7KSF27.js";import"./useOutsideClick-B5AOX-v8.js";import"./OverflowMenuItem-CM7e3W_H.js";import"./useFilterContext-C2tbERi5.js";import"./useIsomorphicEffect-C12-vK0M.js";import"./bucket-0-CgecAV-v.js";import"./bucket-14-DbRvuHeU.js";import"./devtools-fbh1mIbq.js";import"./TableRow-DscPHTHZ.js";import"./bucket-1-BI-qRii9.js";import"./TableToolbar-CZWEUGeM.js";import"./index-DFhDnDPk.js";import"./ErrorEmptyState-D0--SWwI.js";import"./EmptyState-DWctqMgr.js";import"./EmptyStateV2.deprecated-CVgK2xip.js";import"./Link-C2kVZQrV.js";import"./ErrorIllustration-aB0_goXO.js";import"./useId-CZDnw4d1.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-C0uKIYNF.js";import"./NoDataIllustration-Dau-drCS.js";import"./NotFoundEmptyState-CZfJntYE.js";import"./NotFoundIllustration-BdAW901M.js";import"./index.esm-BCOJ2Hv5.js";import"./usePreviousValue-CLpMaOaT.js";import"./useResizeObserver-COxcZdgh.js";import"./getFocusableElements-BW7cf991.js";import"./index-UeJBVBy7.js";import"./props-helper-eWZkA9vW.js";import"./useClickOutside-EHIfC91Q.js";import"./AccordionItem-DgrNAC2C.js";import"./Checkbox-taXQVqsi.js";import"./DatePicker-D8Yqj67U.js";import"./documentLang-E105Y72C.js";import"./FormGroup-B3Qz05Rq.js";import"./MultiSelect-B6haW9Ug.js";import"./NumberInput-DARi5QNl.js";import"./useNormalizedInputProps-D8lHUjCQ.js";import"./bucket-16-29qTRgTN.js";import"./RadioButton-Cq3JxWVF.js";import"./RadioButtonGroup-Bo1Y_Olo.js";import"./usePrefersReducedMotion-Cfj05sB3.js";import"./usePresence-CWZLX8l3.js";import"./ActionSet-DKcPl8ho.js";import"./useWindowResize-Dx0owWqx.js";import"./TagSet-CIWBFXst.js";import"./Tag-CTiB40Z6.js";import"./DefinitionTooltip-BAxDhLZV.js";import"./DismissibleTag-CcMOVHV_.js";import"./usePortalTarget-CjNuplPl.js";import"./OperationalTag-DYSf_0d7.js";import"./SkeletonText-CUhyPsIO.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CLB6T3bD.js";import"./TableSelectRow-pwtVkqEB.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const yo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,yo as __namedExportsOrder,Io as default};
//# sourceMappingURL=AiLabel.stories-CeX5XLFl.js.map
