import{e as l,S as C,r as E,u as H}from"./iframe-BfCV3bOI.js";import{s as T,m as D,E as S}from"./_storybook-styles-Cm6ufsjy.js";import{D as z}from"./DatagridActions-CutloQ9C.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-BsRbYwqM.js";import{u as f}from"./useExpandedRow-2jKZUwYg.js";import{u as R}from"./useSelectRows-yE9Gk8BE.js";import{E as N}from"./bucket-6-BUNG1ZbU.js";import{T as G}from"./bucket-18-C-6Yai3b.js";import"./bucket-2-DscS7k4t.js";import"./index-CErJu9sK.js";import"./bucket-7-BlpeiSNu.js";import"./bucket-19-DXGPPlEX.js";import"./ComposedModal-DDr7rI1V.js";import"./index-BEhuL1MR.js";import"./index-DCClf6mH.js";import"./LayerContext-8SWqIeSi.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DRScrKx_.js";import"./InlineLoading-BCFikEd9.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-CtpBtbaA.js";import"./Text-CfUeD5YQ.js";import"./utils-DPQn4WAo.js";import"./TableToolbarSearch-BG-IM1t3.js";import"./wrapComponent-DjdlSN6x.js";import"./Search-DoApKEoI.js";import"./FormContext-DqvfHl8l.js";import"./bucket-15-B07QhFi5.js";import"./Dropdown-BBIIB9NB.js";import"./index-HRsRazA4.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-CmMwkeOB.js";import"./useControllableState-DFU9FhNB.js";import"./useAttachedMenu-4VE0fpzo.js";import"./index-DEgrfpg6.js";import"./index-Dgw2jygY.js";import"./bucket-13-nosdxnow.js";import"./useOutsideClick-U-60qH6M.js";import"./OverflowMenuItem-CxOBAhX2.js";import"./useFilterContext-ByBTjWZN.js";import"./bucket-0-Ciw2Dsly.js";import"./bucket-14-COfNRyTY.js";import"./devtools-mGs0wnY2.js";import"./TableRow-C0W-tUi3.js";import"./bucket-1-59toT3oJ.js";import"./TableToolbar-wgb9xB32.js";import"./index-Rp0dLXSw.js";import"./ErrorEmptyState-B-iTFFq5.js";import"./EmptyState-uM4OJknX.js";import"./EmptyStateV2.deprecated-g_CB9kyt.js";import"./Link-DwEnb7bw.js";import"./ErrorIllustration-Do_HgjZI.js";import"./useId-Bnc4iy3Y.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DIv675NA.js";import"./NoDataIllustration-DwplAzsf.js";import"./NotFoundEmptyState-B2dSBol2.js";import"./NotFoundIllustration-DkmUMrFP.js";import"./index.esm-B2VHsvLW.js";import"./usePreviousValue-CIIC2c5_.js";import"./useResizeObserver-7trOekg4.js";import"./useIsomorphicEffect-CGC_2bjf.js";import"./getFocusableElements-BW7cf991.js";import"./index-2L8Eb6nd.js";import"./props-helper-B1pqY6OD.js";import"./useClickOutside-KpiYEaiC.js";import"./AccordionItem-C-x_NN9b.js";import"./Checkbox-Bpl7rgf3.js";import"./DatePicker-BAOwiFbZ.js";import"./FormGroup-B8pJBJeD.js";import"./MultiSelect-CDCE22uF.js";import"./NumberInput-CrBT28od.js";import"./useNormalizedInputProps-BrwBC_vx.js";import"./documentLang-E105Y72C.js";import"./bucket-16-Lh1Yht85.js";import"./RadioButton-bwzgKOtN.js";import"./RadioButtonGroup-B4RvMw_Q.js";import"./usePrefersReducedMotion-BjFD9GIF.js";import"./usePresence-C_6nB3Ag.js";import"./ActionSet-BqEOyzaW.js";import"./useWindowResize-BODwJyRa.js";import"./TagSet-UmvG7OFG.js";import"./Tag-NIrrbvG7.js";import"./DefinitionTooltip-BKrU3q75.js";import"./DismissibleTag-DaGnLvfq.js";import"./usePortalTarget-DJLB0SuP.js";import"./OperationalTag-C6Zst86w.js";import"./SkeletonText-BwaOM_ry.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-4YNvg0wJ.js";import"./TableSelectRow-CoXmN1Ig.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
