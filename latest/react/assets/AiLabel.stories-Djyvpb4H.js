var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ai as H,r as T,a as D}from"./iframe-DVd9vcGU.js";import{s as z,m as I,E as b}from"./_storybook-styles-ClmxIQN4.js";import{D as y}from"./DatagridActions-DHLcsWNx.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CAa5hjCc.js";import{u as N}from"./useExpandedRow-C13iqoea.js";import{u as G}from"./useSelectRows-CfEn_Qly.js";import{a as P}from"./bucket-6-D9ar7pnY.js";import{T as _}from"./bucket-20-CIHM76kD.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Lc-sFvYQ.js";import"./index-DosVcssD.js";import"./index-Cq97S7tC.js";import"./bucket-8-Dl_rElkL.js";import"./bucket-21-Cb3_HMBa.js";import"./MenuItem-D6sgJ7Iz.js";import"./Text-DV9-Mjr0.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-ClE4WXq0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CUgugIkH.js";import"./ComposedModal-Kuqffqwp.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Bx67NhBX.js";import"./LayerContext-MpoPJHNF.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal--B4sDzjk.js";import"./InlineLoading-Drafgksa.js";import"./bucket-7-B00WowSE.js";import"./ButtonSet-YUvtI9UW.js";import"./wrapFocus-CVUKykfF.js";import"./OverflowMenuItem-DKVSTuiQ.js";import"./TableToolbarSearch-CBSMUVpR.js";import"./wrapComponent-CicVNMae.js";import"./Search-BIGHArsK.js";import"./FormContext-xJEFPa8c.js";import"./bucket-17-BqoxgkEm.js";import"./TableToolbar-GC5XT35H.js";import"./bucket-0-DsQIryCB.js";import"./TableRow-CgClCd0w.js";import"./bucket-1-CZRk4HMw.js";import"./index-B5TJhcrb.js";import"./index-BAqb6uzn.js";import"./bucket-14-CYz0f0la.js";import"./useOutsideClick-B66mP4a-.js";import"./Dropdown-CD6M5w_-.js";import"./downshift.esm-7BR03Vpc.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-BuZiZ9rP.js";import"./index-BRUgpDB1.js";import"./useFilterContext-BtMwkhoN.js";import"./useIsomorphicEffect-CAlWORU7.js";import"./bucket-16-BL2thx47.js";import"./devtools-BesH-HZp.js";import"./ErrorEmptyState-QGanbPXz.js";import"./EmptyState-C2SaV9KJ.js";import"./EmptyStateV2.deprecated-CZDn3IWx.js";import"./Link-BCdmVRNe.js";import"./ErrorIllustration-BM5WNbL5.js";import"./useId-RUxCmBgx.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DOVTIfms.js";import"./NoDataIllustration-fQdYcZux.js";import"./NotFoundEmptyState-DwYeMqys.js";import"./NotFoundIllustration-CbojNdZ-.js";import"./index.esm-DmtK06k7.js";import"./usePreviousValue-B_kjVhIW.js";import"./useResizeObserver-5neUPqpH.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-Ih54qAyC.js";import"./props-helper-Cgnw3G9k.js";import"./useClickOutside-DgJ2YNoK.js";import"./AccordionItem-CFGsfYP-.js";import"./Checkbox-B_6sBQMw.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-6TMgNTOZ.js";import"./DatePicker-3LbksUCL.js";import"./FormGroup-DEXmcWIZ.js";import"./MultiSelect-yMfQlTZx.js";import"./NumberInput-CiLoRS_t.js";import"./bucket-18-Bd98iWDb.js";import"./RadioButtonGroup-YXPRf8gY.js";import"./index-CwUMjKQR.js";import"./usePrefersReducedMotion-CqwzYxvo.js";import"./usePresence-hXI3boO_.js";import"./ActionSet-ChSdsXmR.js";import"./useWindowResize-CB81jpwB.js";import"./TagSet-DCFattrI.js";import"./Tag-CrD9CEIo.js";import"./DefinitionTooltip-DXeHSrLD.js";import"./DismissibleTag-B08-dPcV.js";import"./usePortalTarget-C713aW1o.js";import"./OperationalTag-D8H6EIs0.js";import"./SkeletonText-D02XqRRI.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CGeveoCI.js";import"./TableSelectRow-Bb_Z85Yz.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const vo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,vo as __namedExportsOrder,Bo as default};
//# sourceMappingURL=AiLabel.stories-Djyvpb4H.js.map
