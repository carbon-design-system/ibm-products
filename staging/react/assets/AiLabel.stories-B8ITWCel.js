import{e as l,S as C,r as E,u as H}from"./iframe-BbTYfv9-.js";import{s as T,m as D,E as S}from"./_storybook-styles-BTBWKaWn.js";import{D as z}from"./DatagridActions-DXvytjna.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CAIaMFvY.js";import{u as f}from"./useExpandedRow-CXnXgCg1.js";import{u as R}from"./useSelectRows-QkCSNAP9.js";import{E as N}from"./bucket-6-D484BBya.js";import{T as G}from"./bucket-18-BvkG-bKs.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-2-BqdtHwJF.js";import"./index-DxihRps1.js";import"./bucket-19-DKyp3qQO.js";import"./bucket-7-Db9Zkpvj.js";import"./ComposedModal-DsGf30ws.js";import"./index-CiA8v0SK.js";import"./LayerContext-DTkiAC__.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CRhG9zQ2.js";import"./InlineLoading-J4T5f71r.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CeU4PdEv.js";import"./Text-CJYku-mr.js";import"./utils-C-ow7gcy.js";import"./TableToolbarSearch-Bmbg6jK6.js";import"./wrapComponent-CuAt2Unq.js";import"./Search-BOcIk9Rm.js";import"./FormContext-DY8rSwJV.js";import"./bucket-15-B4sRXbv_.js";import"./Dropdown-BsaPmP1_.js";import"./index-Bo8gO87W.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-DZ8P3UsW.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-C_s8hbQW.js";import"./useControllableState-D_LENDKK.js";import"./useAttachedMenu-wuMnyGSa.js";import"./index-CqBphhZJ.js";import"./index-DxyAS3QW.js";import"./bucket-13-CbrtgyZp.js";import"./useOutsideClick-te459-kT.js";import"./OverflowMenuItem-BH5I5zXc.js";import"./useFilterContext-IORrEimj.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./bucket-0-DpCnEeoO.js";import"./devtools-KS_k4bKc.js";import"./TableRow-BRMSMudN.js";import"./bucket-1-C8b05e8n.js";import"./TableToolbar-BaEWHkeg.js";import"./index-DADqHIn3.js";import"./ErrorEmptyState-C496QIxD.js";import"./EmptyState-CVDSw39s.js";import"./EmptyStateV2.deprecated-bdM0Vfu0.js";import"./Link-CLBD2w3u.js";import"./ErrorIllustration-BfU-B7uW.js";import"./useId-C2YpaygB.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BPqdcXmN.js";import"./NoDataIllustration-aNp7ADy8.js";import"./NotFoundEmptyState-BfP7OGK3.js";import"./NotFoundIllustration-CuqJkqo6.js";import"./index.esm-C5qPCjKu.js";import"./usePreviousValue-z0wuNVJu.js";import"./useResizeObserver-DG4fyqZH.js";import"./getFocusableElements-BW7cf991.js";import"./index-aiv_WSu0.js";import"./props-helper-fbCn-Z71.js";import"./useClickOutside-CVNVqS5h.js";import"./AccordionItem-PfkOwNmu.js";import"./Checkbox-C_vI3TFv.js";import"./DatePicker-DtueQuq2.js";import"./NumberInput-Bq5ylnNA.js";import"./bucket-17-CwHsRtB8.js";import"./FormGroup-B3b7XRZY.js";import"./MultiSelect-BQTbEAvY.js";import"./RadioButton-BEzYjobE.js";import"./RadioButtonGroup-C9S45n6Q.js";import"./usePrefersReducedMotion-DFJAWd-w.js";import"./usePresence-CR1b5qhP.js";import"./ActionSet-BkLkGxhx.js";import"./useWindowResize-Cuv2EGmt.js";import"./TagSet-D1uSa9Ws.js";import"./Tag-LHH5a8V-.js";import"./DefinitionTooltip-BGxvqF2J.js";import"./DismissibleTag-NYkkv5JE.js";import"./usePortalTarget-CQmsAlyZ.js";import"./OperationalTag-Dx2rZe9X.js";import"./SkeletonText-wBJC0ugk.js";import"./bucket-16-Bdv0o6Pm.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CS8PEkFo.js";import"./TableSelectRow-C79cZLNP.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-B8ITWCel.js.map
