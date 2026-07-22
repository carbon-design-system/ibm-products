var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ag as H,r as T,a as D}from"./iframe-CBbsTnF_.js";import{s as z,m as I,E as b}from"./_storybook-styles-D_DGGZC0.js";import{D as y}from"./DatagridActions-Cc6tYN2N.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-maDCLGxE.js";import{u as N}from"./useExpandedRow-D-2NzW45.js";import{u as G}from"./useSelectRows-D9nwM7W0.js";import{a as P}from"./bucket-6-B8pT7bnc.js";import{T as _}from"./bucket-19-DoxJ8ShQ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-qXrxOS5n.js";import"./index-Oq1pl7uZ.js";import"./index-C1ESR1Ui.js";import"./bucket-20-KObgbE_k.js";import"./bucket-7-CVLuGNxZ.js";import"./MenuItem-CxjDKHmc.js";import"./Text-DvTPV9oD.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-cJjnJZVN.js";import"./environment-DRRHKtsv.js";import"./useControllableState-s8tjdqa7.js";import"./ComposedModal-COQ2iRaS.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BG0xu17i.js";import"./LayerContext-Cr1eioga.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DZ0C-crR.js";import"./InlineLoading-bJ87Jj-C.js";import"./ButtonSet-Dl-m46xt.js";import"./wrapFocus-DCsrfHAe.js";import"./OverflowMenuItem-CY0MGUWx.js";import"./TableToolbarSearch-BU9fCQ4b.js";import"./wrapComponent-BfqH61zw.js";import"./Search-DbCw8fhv.js";import"./FormContext-DLYWJRF8.js";import"./bucket-16-BqxRZrGo.js";import"./TableToolbar-BCjtvpMb.js";import"./bucket-0-BlE5zwi6.js";import"./TableRow-2RRJGBgo.js";import"./bucket-1-DWGO8Ltu.js";import"./index-C5RwWCjb.js";import"./index-BQvUoh0W.js";import"./bucket-14-HrGZoweV.js";import"./useOutsideClick-BX9MgbbS.js";import"./Dropdown-DeRJjzuU.js";import"./useNormalizedInputProps-DI_yvwK9.js";import"./bucket-21-DrGVxIti.js";import"./downshift.esm-DtmY99lK.js";import"./inheritsLoose-CdLKJotq.js";import"./index-Cqs9Ggoe.js";import"./useFilterContext-Dq-RQCya.js";import"./useIsomorphicEffect-FBsKdk5s.js";import"./bucket-15-rEgRknYX.js";import"./devtools-DcyO26L0.js";import"./ErrorEmptyState-vWy6Phzu.js";import"./EmptyState-D1RSj_xx.js";import"./EmptyStateV2.deprecated-D6vjezXi.js";import"./Link-Cg74ZIB3.js";import"./ErrorIllustration-DQgsV9Nr.js";import"./useId-C5RSjPpv.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DQrQ1D1k.js";import"./NoDataIllustration-DihvEzTG.js";import"./NotFoundEmptyState-lTtYbJwG.js";import"./NotFoundIllustration-hVrbTksX.js";import"./index.esm-Ca7igDRc.js";import"./usePreviousValue-Bmn3UyY9.js";import"./useResizeObserver-C01tPNC8.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DxkpgPV8.js";import"./props-helper-BXE8i0Sa.js";import"./useClickOutside-FPlLjcJi.js";import"./AccordionItem-D3f2cLA2.js";import"./Checkbox-Bl-HPuOl.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-DyY4Y2xv.js";import"./DatePicker-CFvaHhgI.js";import"./FormGroup-ybXlacIz.js";import"./MultiSelect-DcgSKwcR.js";import"./NumberInput-BsI3Nlz_.js";import"./bucket-18-DjlJOIwU.js";import"./RadioButtonGroup-CCcHBtWc.js";import"./index-D-uKBElP.js";import"./usePrefersReducedMotion-CjSYGGjZ.js";import"./usePresence-LNL47s9e.js";import"./ActionSet-DkdVH1FT.js";import"./useWindowResize-C72HE7Pn.js";import"./TagSet-CuOSnqCu.js";import"./Tag-DD_Zsd-t.js";import"./DefinitionTooltip-DJCK-c2b.js";import"./DismissibleTag-Cbg0YGSt.js";import"./usePortalTarget-Ds0Tr6Rx.js";import"./OperationalTag-D-dk_RBJ.js";import"./SkeletonText-Bovf0oET.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-DC9KRGCD.js";import"./TableSelectRow-CLKpy7sI.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-tKSprF0k.js.map
