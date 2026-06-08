var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-ClFYBNZh.js";import{s as z,m as I,E as b}from"./_storybook-styles-CYm7Xc3B.js";import{D as y}from"./DatagridActions-GC15mOU_.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CezS7UPn.js";import{u as N}from"./useExpandedRow-B2Zrxtmf.js";import{u as G}from"./useSelectRows-D34UpkoA.js";import{c as P}from"./bucket-6-D62PGvFd.js";import{T as _}from"./bucket-19-CucHOJ3h.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DVXZJZ-O.js";import"./index-tgAZXQBu.js";import"./index-Beu57O9h.js";import"./bucket-7-Bsle6kMV.js";import"./bucket-20-D8sX7iXB.js";import"./MenuItem-nEeq18Ob.js";import"./Text-C6XdxEq2.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DRHCR9IE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8lkoBJZ.js";import"./ComposedModal-D0NdYhxR.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Dxnmtqj_.js";import"./LayerContext-BfozsjrW.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-Dodvdhmx.js";import"./InlineLoading-DApDyR0G.js";import"./ButtonSet-Bp-NMtjD.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-aIt59QJw.js";import"./OverflowMenuItem-7uG2nLMW.js";import"./TableToolbarSearch-C5bo1bAe.js";import"./wrapComponent-a2stfvCz.js";import"./Search-DawomRKR.js";import"./FormContext-yoh48WO7.js";import"./bucket-16-BrzprH3l.js";import"./index-qoSTJLaJ.js";import"./bucket-13-NXJbbJTL.js";import"./useOutsideClick-CQVIQ7GS.js";import"./Dropdown-C-EqgeIH.js";import"./useNormalizedInputProps-CXP9BsL8.js";import"./downshift.esm-BPMO5akI.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DAXLuT7F.js";import"./useFilterContext-_fnAZ3fw.js";import"./useIsomorphicEffect-DsvwjDgP.js";import"./bucket-0-35rJUJGZ.js";import"./bucket-15-cWner0Je.js";import"./devtools-DNttzqoV.js";import"./TableRow-C1qLuvNo.js";import"./bucket-1-jn5j668n.js";import"./TableToolbar-CztzCmqy.js";import"./index-CcR5el_A.js";import"./ErrorEmptyState-BTuw09pr.js";import"./EmptyState-DwmVK-az.js";import"./EmptyStateV2.deprecated-ChCIpEAh.js";import"./Link-_aMG5UC7.js";import"./ErrorIllustration-CGuBFC9N.js";import"./useId-DGUMXYpN.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bda_YBlm.js";import"./NoDataIllustration-C_RVARvK.js";import"./NotFoundEmptyState-BvfSxdkY.js";import"./NotFoundIllustration-CeRRDgEx.js";import"./index.esm-_Fa7413R.js";import"./usePreviousValue-D0q0-hY4.js";import"./useResizeObserver-CR1yd8DF.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D6ljBPxk.js";import"./props-helper-DgWwr2Da.js";import"./useClickOutside-dHWKzXnp.js";import"./AccordionItem-DbO-toAR.js";import"./Checkbox-omYaSXWw.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-clTtCXbC.js";import"./DatePicker-jX9JrGxa.js";import"./FormGroup-C7EcKpj4.js";import"./MultiSelect-zHMm9B2b.js";import"./NumberInput-C9wdTJZu.js";import"./bucket-17-DxPJxCfi.js";import"./RadioButtonGroup-CEJ7Q21q.js";import"./index-CGz8e9bG.js";import"./usePrefersReducedMotion-BS6fw3we.js";import"./usePresence-BI-0K1fI.js";import"./ActionSet-BohWKgod.js";import"./useWindowResize-GhNW7zDn.js";import"./TagSet-BwX3wbqa.js";import"./Tag-zJCMRUfq.js";import"./DefinitionTooltip-CVHk_-iQ.js";import"./DismissibleTag-BuAOT_qO.js";import"./usePortalTarget-B0RfQDa2.js";import"./OperationalTag-DQOtOa3-.js";import"./SkeletonText-v76Dysx5.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-BJRv2_r_.js";import"./TableSelectRow-dgVTgqvJ.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-Bm16Ym-Q.js.map
