import{e as l,S as C,r as E,u as H}from"./iframe-BlQ-LkYW.js";import{s as T,m as D,E as S}from"./_storybook-styles-CVByPx4P.js";import{D as z}from"./DatagridActions-rp_PS2EP.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CnxV8z7J.js";import{u as f}from"./useExpandedRow-vHpfruXw.js";import{u as R}from"./useSelectRows-41OVCwd5.js";import{E as N}from"./bucket-6-C4pRq2Bl.js";import{T as G}from"./bucket-17-CcHsRNDR.js";import"./bucket-2-BDIkUbzC.js";import"./index-CgaasdUn.js";import"./bucket-18-Bl8QDCbK.js";import"./bucket-7-DldHT251.js";import"./ComposedModal-CtswQ6eu.js";import"./index-BEhuL1MR.js";import"./index-DZN9_q_B.js";import"./LayerContext-BvuXYV0V.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BLtxr1g9.js";import"./InlineLoading-BiPU-E2v.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-C2HPB9zJ.js";import"./Text-DSSpV4WJ.js";import"./utils-BevHIbez.js";import"./TableToolbarSearch-DhPhQlSt.js";import"./wrapComponent-BDK0h1Zk.js";import"./Search-KyKbUvD4.js";import"./FormContext-DkhQXZ0G.js";import"./bucket-15-CM_J5Vvb.js";import"./Dropdown-BvmhsKBp.js";import"./index-CXYHyzp2.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-Ds7BYjit.js";import"./MenuItem-Cde_w9Z-.js";import"./useControllableState-C05qBH-j.js";import"./useAttachedMenu-BakFN8R8.js";import"./index-CFF1FOUA.js";import"./index-VNwEaoKl.js";import"./bucket-12-DYGdvqH1.js";import"./useOutsideClick-DRiKtgqC.js";import"./OverflowMenuItem-ByvfIQCP.js";import"./useFilterContext-hthDLudy.js";import"./bucket-0-6Q7N9SpP.js";import"./bucket-14-DLbuTogh.js";import"./devtools-BJZSxg-N.js";import"./TableRow-BYIk4P8t.js";import"./bucket-1-DU5MGOmF.js";import"./TableToolbar-BKBISmpj.js";import"./index-DNGc5teW.js";import"./ErrorEmptyState-DN0qShT7.js";import"./EmptyState-UEgZGf8z.js";import"./EmptyStateV2.deprecated-CJfAaoaS.js";import"./Link-CMYINvP1.js";import"./ErrorIllustration-D8EqFHGf.js";import"./useId-C2_b1b81.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Ct01DPXx.js";import"./NoDataIllustration-D99JvkUc.js";import"./NotFoundEmptyState-CExQFyMc.js";import"./NotFoundIllustration-B0zRLUCn.js";import"./index.esm-B2BF8_Xw.js";import"./usePreviousValue-BfWd4m5G.js";import"./useResizeObserver-w8n_UuuT.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./getFocusableElements-BW7cf991.js";import"./index-DwBZIlXB.js";import"./props-helper-DmAPJ46T.js";import"./useClickOutside-j6p6RzvJ.js";import"./AccordionItem-BhtMrcrS.js";import"./Checkbox-KCN2jQ_S.js";import"./DatePicker-DamDW6cE.js";import"./FormGroup-B1IMtc-E.js";import"./MultiSelect-B_rQyAfc.js";import"./NumberInput-bpDngU1O.js";import"./useNormalizedInputProps-Dz70CF1S.js";import"./documentLang-E105Y72C.js";import"./bucket-16-D881Un-v.js";import"./RadioButton-zRgIFODd.js";import"./RadioButtonGroup-eRaykhRX.js";import"./usePrefersReducedMotion-C1fBtu2H.js";import"./usePresence-tZhDiWEQ.js";import"./ActionSet-DxtE6QvT.js";import"./useWindowResize-DGjBxvCI.js";import"./TagSet-Dhe0S5N8.js";import"./Tag-CsYb8P2P.js";import"./DefinitionTooltip-Ch2quHzY.js";import"./DismissibleTag-Da7z3e6w.js";import"./usePortalTarget-a9acdh7P.js";import"./OperationalTag-BUphsu11.js";import"./SkeletonText-DEkHw7eg.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-BBFnW6rv.js";import"./TableSelectRow-JZBhanNh.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const fo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,fo as __namedExportsOrder,yo as default};
