var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-t6K2KT89.js";import{s as z,m as I,E as b}from"./_storybook-styles-B0YmOHbg.js";import{D as y}from"./DatagridActions-CU2gP11k.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Bxzktirq.js";import{u as N}from"./useExpandedRow-CXfVMIeK.js";import{u as G}from"./useSelectRows-CUpyKbxy.js";import{E as P}from"./bucket-6-Bl2Z_cQh.js";import{T as _}from"./bucket-19-Dcgt9bs5.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CR5JuJ6A.js";import"./index-CRnkdfzI.js";import"./index-BYKt6Fpu.js";import"./bucket-7-BdydbOMy.js";import"./bucket-20-RO2qCJtZ.js";import"./MenuItem-d2tgjLh6.js";import"./Text-DAQ2PBki.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-De7RQ6C_.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRwEFL3T.js";import"./ComposedModal-Bnad8y0j.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DvXgXORc.js";import"./LayerContext-DAYQB8RQ.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-DwDrthKE.js";import"./InlineLoading-DgJRJu1I.js";import"./ButtonSet-BpIizn8P.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-kxKl7KnS.js";import"./OverflowMenuItem-DN8tHZ_Y.js";import"./TableToolbarSearch-BwWyDUuv.js";import"./wrapComponent-B_L5P_0G.js";import"./Search-_a77g0Fq.js";import"./FormContext-Cx3DeHPy.js";import"./bucket-16-mg6NFGY4.js";import"./index-_BBVVFwt.js";import"./bucket-13-Bxyq0euO.js";import"./useOutsideClick-BtTQRwc6.js";import"./Dropdown-yum4ktVp.js";import"./useNormalizedInputProps-CnzvYlOI.js";import"./downshift.esm-DYpHsINJ.js";import"./inheritsLoose-CdLKJotq.js";import"./index-cfnEDrfl.js";import"./useFilterContext-DJa1rg35.js";import"./useIsomorphicEffect-yAsi5cdK.js";import"./bucket-0-CRPhmQn7.js";import"./bucket-15-ClZkLA1X.js";import"./devtools-W8hnGsLd.js";import"./TableRow-Cg_JxJ0E.js";import"./bucket-1-C4ZTtrlT.js";import"./TableToolbar-C3q02r-F.js";import"./index-CAdb8dcH.js";import"./ErrorEmptyState-C6DzwyyD.js";import"./EmptyState-kvr3TUyC.js";import"./EmptyStateV2.deprecated-CI-Uv_TE.js";import"./Link-B4ammGPw.js";import"./ErrorIllustration-D6_wbvZN.js";import"./useId-BW3ntvKq.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-jo0vxUlo.js";import"./NoDataIllustration-DLWbYi73.js";import"./NotFoundEmptyState-8RW72Jzh.js";import"./NotFoundIllustration-BQKoDRPM.js";import"./index.esm-BHiqjeLt.js";import"./usePreviousValue-Dm16o7nR.js";import"./useResizeObserver-BfQhVOEy.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D5ZkQQoe.js";import"./props-helper-DCQo5VD9.js";import"./useClickOutside-C3_zkE7j.js";import"./AccordionItem-CXVg-nSx.js";import"./Checkbox-Ddp6lQzA.js";import"./hasHelperText-CcJ_VphT.js";import"./index-xGdBb0TQ.js";import"./DatePicker-BcB1yven.js";import"./FormGroup-BFMyQrm7.js";import"./MultiSelect-DEWFrMgJ.js";import"./NumberInput-B9yKto6D.js";import"./bucket-17-xArZ0Jj7.js";import"./RadioButtonGroup-Dsq8YIXu.js";import"./usePrefersReducedMotion-BgL7RC56.js";import"./usePresence-cyr2rQFC.js";import"./ActionSet-B8w3Fv3P.js";import"./useWindowResize-4Bbp-dcN.js";import"./TagSet-Clv1gBf6.js";import"./Tag-DFi4pEk8.js";import"./DefinitionTooltip-lZlDCfPI.js";import"./DismissibleTag-CC2EeLVX.js";import"./usePortalTarget-C6FkQ04J.js";import"./OperationalTag-Egt8AIs0.js";import"./SkeletonText-pfetmgMv.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-BQbbyURR.js";import"./TableSelectRow-unLQRwlO.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const _o=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,_o as __namedExportsOrder,Po as default};
//# sourceMappingURL=AiLabel.stories-BtL2-6OR.js.map
