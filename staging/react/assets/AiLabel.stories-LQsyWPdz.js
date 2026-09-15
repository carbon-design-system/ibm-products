var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ai as H,r as T,a as D}from"./iframe-CN5GxhYW.js";import{s as z,m as I,E as b}from"./_storybook-styles-DPTkNyOt.js";import{D as y}from"./DatagridActions-Cv-P83Eo.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Do1mzOxB.js";import{u as N}from"./useExpandedRow-CzEN6knN.js";import{u as G}from"./useSelectRows-BrIW0BIP.js";import{a as P}from"./bucket-6-DHtDR2Ag.js";import{T as _}from"./bucket-20-y6b6UwuS.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Ba1-mJht.js";import"./index-DSYn1vMq.js";import"./index-CYg9OXdX.js";import"./bucket-8-DiaNSyZb.js";import"./bucket-21-BrCzSrZF.js";import"./MenuItem-Dbo8zrcE.js";import"./Text-Co6YBuGU.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CjGjZJ8h.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DlUuHtEk.js";import"./ComposedModal-D1v7ivyj.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DB40h0fE.js";import"./LayerContext-ceyDb81d.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-iW97RJzz.js";import"./InlineLoading-BzS4iPtX.js";import"./bucket-7-ClP0NUKT.js";import"./ButtonSet-CMCk3317.js";import"./wrapFocus-Bfo9V0Ng.js";import"./OverflowMenuItem-BNQX2nsS.js";import"./TableToolbarSearch-C_ddJgwn.js";import"./wrapComponent-D2VWFFhO.js";import"./Search-B0thv2O-.js";import"./FormContext-BxWLgyc8.js";import"./bucket-17-D2wZR_Rm.js";import"./TableToolbar-CIp64M4P.js";import"./bucket-0-CoX2M9H0.js";import"./TableRow-CVIsCxty.js";import"./bucket-1-WAE3b166.js";import"./index-CT6QfXDz.js";import"./index-BFu4nDOV.js";import"./bucket-14-D9LIC7EP.js";import"./useOutsideClick-DJDLKHI9.js";import"./Dropdown-DV6xTivr.js";import"./downshift.esm-DqAWtRY4.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-DDVLdI9l.js";import"./index-DXp9qtLS.js";import"./useFilterContext-DFfM8flI.js";import"./useIsomorphicEffect-DOmH7t3h.js";import"./bucket-16-BnUrXLap.js";import"./devtools-CdXbYj-o.js";import"./ErrorEmptyState-GJQIfndN.js";import"./EmptyState-DRshmJkd.js";import"./EmptyStateV2.deprecated-Bqfo5gpY.js";import"./Link-CLAEikxt.js";import"./ErrorIllustration-B9gMt3sz.js";import"./useId-C8l2f045.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BehFETME.js";import"./NoDataIllustration-BENu0PAG.js";import"./NotFoundEmptyState-DUQefjcs.js";import"./NotFoundIllustration-Bkgngvju.js";import"./index.esm-CZrVJ6J4.js";import"./usePreviousValue-CrAdM6Zb.js";import"./useResizeObserver-BbDftPVh.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-BFeqe0Ah.js";import"./props-helper-HULA5OMF.js";import"./useClickOutside-ST42z5R-.js";import"./AccordionItem-Cdqzmg-p.js";import"./Checkbox-CFXwspey.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-oUHe2hSs.js";import"./DatePicker-CEdo1Rlq.js";import"./FormGroup-7uvDXL8E.js";import"./MultiSelect-Cc_dC328.js";import"./NumberInput-D7VT6uSR.js";import"./bucket-18-CdbQNyuD.js";import"./RadioButtonGroup-aG0CKz3E.js";import"./index-t8wrbEZd.js";import"./usePrefersReducedMotion-Dvp1_Qb4.js";import"./usePresence-B6-PTWen.js";import"./ActionSet-BRUzwzrA.js";import"./useWindowResize-CPny2yK7.js";import"./TagSet-CTNisN27.js";import"./Tag-B6E9phzO.js";import"./DefinitionTooltip-BY6nODSV.js";import"./DismissibleTag-R93B7B8p.js";import"./usePortalTarget-BdkRgD5g.js";import"./OperationalTag-D4nbrnjy.js";import"./SkeletonText-mmd4RU53.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-Ct9SlUzl.js";import"./TableSelectRow-TGxG3is5.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-LQsyWPdz.js.map
