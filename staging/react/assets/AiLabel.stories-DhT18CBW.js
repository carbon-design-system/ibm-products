var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-BlOC0pA1.js";import{s as z,m as I,E as b}from"./_storybook-styles-DiMO0v3Z.js";import{D as y}from"./DatagridActions-D4IEksWN.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Dwx8GliQ.js";import{u as N}from"./useExpandedRow-CBe6g0kl.js";import{u as G}from"./useSelectRows-CRQbLVBK.js";import{E as P}from"./bucket-6-Bhi7puzq.js";import{T as _}from"./bucket-19-D7qwhym0.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CRbSQdfG.js";import"./index-DCjUOJAY.js";import"./index-DM6fwa49.js";import"./bucket-7-xD7wUqDy.js";import"./bucket-20-CeVQz5jy.js";import"./MenuItem-cg4JmAW_.js";import"./Text-Cp4U2L1v.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-uPzKvwam.js";import"./environment-DRRHKtsv.js";import"./useControllableState-ClGudATx.js";import"./ComposedModal-CT45rnKG.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DNDXHd8F.js";import"./LayerContext-DWkp40hc.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-CLau3MKB.js";import"./InlineLoading-3LUrVCXD.js";import"./ButtonSet-BlPHxy7J.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-DuZLEN6D.js";import"./OverflowMenuItem-gIbxD1mP.js";import"./TableToolbarSearch-Dlyjz0qi.js";import"./wrapComponent-BPO8na_N.js";import"./Search-DY9yFbDU.js";import"./FormContext-Ct3xSnYs.js";import"./bucket-16-4csj2bYY.js";import"./index-CFem3ifY.js";import"./bucket-13-BRvGgRkW.js";import"./useOutsideClick-_g6kuMYP.js";import"./Dropdown-1NvCiWax.js";import"./downshift.esm-DbyPiPDQ.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-C1KfNHvX.js";import"./index-GR22jYx8.js";import"./useFilterContext-CoLXtEfm.js";import"./useIsomorphicEffect-TwSdq75_.js";import"./bucket-0-CLO8-Rl9.js";import"./bucket-15-BGX7bQdL.js";import"./devtools-PisD3bve.js";import"./TableRow-BOh--30a.js";import"./bucket-1-DZ13MlUN.js";import"./TableToolbar-cOIMpao4.js";import"./index-DeFlcz3Q.js";import"./ErrorEmptyState-BaTb7mbn.js";import"./EmptyState-k_qZ7fhp.js";import"./EmptyStateV2.deprecated-CqyzMhnf.js";import"./Link-HOxydKq1.js";import"./ErrorIllustration-BIkGaqZI.js";import"./useId-BAsTH3YN.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-0Sx3jwuB.js";import"./NoDataIllustration-v9DVrs3T.js";import"./NotFoundEmptyState-DBkNbDym.js";import"./NotFoundIllustration-BK3ud_3o.js";import"./index.esm-ChiHJ2lM.js";import"./usePreviousValue-DO-TURt-.js";import"./useResizeObserver-DCJzwT7K.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-ZE5nj42R.js";import"./props-helper-BJbMNkZu.js";import"./useClickOutside-BF22WKkT.js";import"./AccordionItem-Bpd7RSqu.js";import"./Checkbox-JLajw0rH.js";import"./RadioButton-fjbJ6SCv.js";import"./DatePicker-D5gFM-c-.js";import"./FormGroup-EW4x_Q9b.js";import"./MultiSelect-C8YPRRM2.js";import"./NumberInput-CGk1Zq7D.js";import"./bucket-17-DulqQMal.js";import"./RadioButtonGroup-CfT_p8cx.js";import"./usePrefersReducedMotion-BHsPT3E9.js";import"./usePresence-Bs15XNld.js";import"./ActionSet-Cr9ov0V5.js";import"./useWindowResize-DSbOKKJC.js";import"./TagSet-C3UCZpmi.js";import"./Tag-7gsWik5w.js";import"./DefinitionTooltip-o9ok-SuY.js";import"./DismissibleTag-BIu91aa9.js";import"./usePortalTarget-3tM0TYLb.js";import"./OperationalTag-Bqk5dMc3.js";import"./SkeletonText-CGTa2r3w.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-Bzc1A1Fu.js";import"./TableSelectRow-BfBHBocP.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Go={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const Po=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,Po as __namedExportsOrder,Go as default};
//# sourceMappingURL=AiLabel.stories-DhT18CBW.js.map
