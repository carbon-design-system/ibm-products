var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-jZWG66li.js";import{s as z,m as I,E as b}from"./_storybook-styles-DQmcUGty.js";import{D as y}from"./DatagridActions-WtD0m0dd.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-DGZSGfkU.js";import{u as N}from"./useExpandedRow-De0dD81D.js";import{u as G}from"./useSelectRows-DLov-KPl.js";import{c as P}from"./bucket-6-B2oAEAOa.js";import{T as _}from"./bucket-19-C2-W5HiT.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DWg0M4zV.js";import"./index-DCIajyCT.js";import"./index-CCsGhLAA.js";import"./bucket-7-BnXe9N7L.js";import"./bucket-20-B4uFpGKw.js";import"./MenuItem-Lljj5Fo2.js";import"./Text-MAmnaD9H.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-BeNbWoPS.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BmJIAqes.js";import"./ComposedModal-XylCDvoO.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Cn2PStIV.js";import"./LayerContext-CrUnT_W9.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-Ne6eOh2U.js";import"./InlineLoading-4R9NdHX-.js";import"./ButtonSet-B1bJuNqr.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-DtUmgvSF.js";import"./OverflowMenuItem-B0DWT-yr.js";import"./TableToolbarSearch-Wjm6LMy5.js";import"./wrapComponent-5SlpXrna.js";import"./Search-C4wa9sxa.js";import"./FormContext-B4fMb7EG.js";import"./bucket-16-CseOxs48.js";import"./index-du0qUBAz.js";import"./bucket-13-sI_lbNNR.js";import"./useOutsideClick-BJn37Z9d.js";import"./Dropdown-GlAaBZLC.js";import"./useNormalizedInputProps-C0p8WdxS.js";import"./downshift.esm-CAnJLABz.js";import"./inheritsLoose-CdLKJotq.js";import"./index-BC9wVj-F.js";import"./useFilterContext-CCnAB4f1.js";import"./useIsomorphicEffect-z083cbHj.js";import"./bucket-0-BUOyFyAa.js";import"./bucket-15-ClYjtQSj.js";import"./devtools-BmJuPbq5.js";import"./TableRow-bu7b4jFm.js";import"./bucket-1-obTWIw3W.js";import"./TableToolbar-CIVXDIRc.js";import"./index-CU2Cp-Qy.js";import"./ErrorEmptyState-ccL9vG-i.js";import"./EmptyState-BlR4Nsbn.js";import"./EmptyStateV2.deprecated-U9meRsNh.js";import"./Link-BaBq1H2r.js";import"./ErrorIllustration-C9Woy6Fk.js";import"./useId-JX4wW7oP.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bv-uFGYy.js";import"./NoDataIllustration-CxC2KFrP.js";import"./NotFoundEmptyState-D2hzckZD.js";import"./NotFoundIllustration-i8u3e8N5.js";import"./index.esm-CHdbjm7i.js";import"./usePreviousValue-D4uAI8q0.js";import"./useResizeObserver-CUi1ZAI7.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CuevfKHt.js";import"./props-helper-CbiDXG5b.js";import"./useClickOutside-7ucsBNQJ.js";import"./AccordionItem-h3Mh0u-I.js";import"./Checkbox-DUQsMQT9.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-BQR-_K1h.js";import"./DatePicker-tgfwm5gv.js";import"./FormGroup-aoqbWizZ.js";import"./MultiSelect-DZDC_2bl.js";import"./NumberInput-Diyyy3Ee.js";import"./bucket-17-BzsmRjq1.js";import"./RadioButtonGroup-WGqFPEq4.js";import"./index-DHzaXPYB.js";import"./usePrefersReducedMotion-CRRztKqh.js";import"./usePresence-Bng06AQO.js";import"./ActionSet-YWQ5N7Ld.js";import"./useWindowResize-Dk_ftXAg.js";import"./TagSet-EgBIxw0F.js";import"./Tag-BLpsojOG.js";import"./DefinitionTooltip-DcS0yaKE.js";import"./DismissibleTag-BAMetvFG.js";import"./usePortalTarget-Bt1p0OSJ.js";import"./OperationalTag-DOJqGKst.js";import"./SkeletonText-unH21SdB.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-4xYZ2irZ.js";import"./TableSelectRow-D8wbh2Kn.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-BCjKShpw.js.map
