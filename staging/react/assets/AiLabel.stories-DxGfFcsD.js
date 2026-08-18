var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ag as H,r as T,a as D}from"./iframe-1IYrbML7.js";import{s as z,m as I,E as b}from"./_storybook-styles-CJ2SeowA.js";import{D as y}from"./DatagridActions-D12lWSj2.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-B0kKbIIE.js";import{u as N}from"./useExpandedRow-BblsYrF1.js";import{u as G}from"./useSelectRows-Be2j-u0f.js";import{a as P}from"./bucket-6-DF1-9TOA.js";import{T as _}from"./bucket-19-Dgb3FYmL.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DZOFFp2R.js";import"./index-BFuhdGQf.js";import"./index-CYUyvB3t.js";import"./bucket-20-DuHSi_VM.js";import"./bucket-7-DHuUxKrn.js";import"./MenuItem-BN45AZrY.js";import"./Text-CGH0tvjM.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bvvg38Cu.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BOScVoQC.js";import"./ComposedModal-DS4w2zQd.js";import"./mergeRefs-BH0-8uDG.js";import"./index-1pZSLDw2.js";import"./LayerContext-D3oew5Md.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-D6G8L1Es.js";import"./InlineLoading-BFd6-Jhe.js";import"./ButtonSet-DzlgNKDX.js";import"./wrapFocus-7mD-tbe-.js";import"./OverflowMenuItem-OGmR7FhR.js";import"./TableToolbarSearch-C2K41i-A.js";import"./wrapComponent-C22ed2HW.js";import"./Search-rEAGLUE1.js";import"./FormContext-wtA34ekt.js";import"./bucket-16-yGLssMBD.js";import"./TableToolbar-BQsZt1h-.js";import"./bucket-0-BuIX5h0A.js";import"./TableRow-CvM_8CTT.js";import"./bucket-1-mdoYg1ml.js";import"./index-BJRj69DC.js";import"./index-Ba-_4fjo.js";import"./bucket-14-2CFMNYC_.js";import"./useOutsideClick-DbUbFrF8.js";import"./Dropdown-DFInOVcc.js";import"./useNormalizedInputProps-wnazSRqn.js";import"./bucket-21-DShaIQEG.js";import"./downshift.esm-DBih4EUV.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DXAl5VrX.js";import"./useFilterContext-C3gEjOfi.js";import"./useIsomorphicEffect-CIQYWbK1.js";import"./bucket-15-BTU6yHew.js";import"./devtools-BfuSEd4k.js";import"./ErrorEmptyState-CUPxyqDC.js";import"./EmptyState-_geo7ZcW.js";import"./EmptyStateV2.deprecated-BKN4Zd1N.js";import"./Link-Ctu68J4U.js";import"./ErrorIllustration-b1ytA0lx.js";import"./useId-CMT86ArY.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-B0cGBuUK.js";import"./NoDataIllustration-DD-t_rVI.js";import"./NotFoundEmptyState-DNEfqvWW.js";import"./NotFoundIllustration-CyoRFEck.js";import"./index.esm-DYrIQPV2.js";import"./usePreviousValue-Cy-xU-we.js";import"./useResizeObserver-DOTZ221D.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DsXs-OUa.js";import"./props-helper-xm8U1bT6.js";import"./useClickOutside-D1sLD7DX.js";import"./AccordionItem-9hUunkls.js";import"./Checkbox-N-Ov_A-a.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-DFkttEdD.js";import"./DatePicker-F8Eu-ZXF.js";import"./FormGroup-B8H0XAAi.js";import"./MultiSelect-6JnP2E88.js";import"./NumberInput-BI562c4V.js";import"./bucket-18-BeU_yyV2.js";import"./RadioButtonGroup-DPT_3EPo.js";import"./index-R41Wwuyy.js";import"./usePrefersReducedMotion-hIh6WhbG.js";import"./usePresence-Bd6hWOwh.js";import"./ActionSet-B1Ix9t41.js";import"./useWindowResize-C7uhrmON.js";import"./TagSet-jn4rSWeT.js";import"./Tag-B3HE2IVm.js";import"./DefinitionTooltip-D1WVVafN.js";import"./DismissibleTag-DSrcqsRW.js";import"./usePortalTarget-MrDcAt72.js";import"./OperationalTag-B0pxVzsv.js";import"./SkeletonText-Cw5hCuCn.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CNG8AzJt.js";import"./TableSelectRow-BEqvfomT.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-DxGfFcsD.js.map
