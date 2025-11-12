import{e as l,S as C,r as E,u as H}from"./iframe-DL4rv6Sk.js";import{s as T,m as D,E as S}from"./_storybook-styles-DIFln6A_.js";import{D as z}from"./DatagridActions-Wg41OAU2.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-DY8OnLlC.js";import{u as f}from"./useExpandedRow-CXmZu0tO.js";import{u as R}from"./useSelectRows-BqG8ytUM.js";import{E as N}from"./bucket-6-0n8zOi6E.js";import{T as G}from"./bucket-18-DasBym7s.js";import"./bucket-2-DWbjyfbr.js";import"./index-DKpSrTTL.js";import"./bucket-7-BiGpzwL2.js";import"./bucket-19-Yu9VpGqT.js";import"./ComposedModal-BvVC1jwz.js";import"./index-Dki116_N.js";import"./LayerContext-DNs21za5.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DZW6ssTo.js";import"./InlineLoading-Cf_Gl0tC.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-Dt-_dlb_.js";import"./Text-BLHpolkk.js";import"./utils-Cs9s9lyq.js";import"./TableToolbarSearch-g8jP6x7x.js";import"./wrapComponent-Ba8Fa1EF.js";import"./Search-BGrfLMFt.js";import"./FormContext-BcuiRe3h.js";import"./bucket-15-BI4sGmKb.js";import"./Dropdown-CyUaYcPb.js";import"./index-SxnJxQcD.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-Cpai8mbK.js";import"./useControllableState-DHHb1dfh.js";import"./useAttachedMenu-D80ddK7-.js";import"./index-F65_Irgf.js";import"./index-DtzGVvRZ.js";import"./bucket-13-cFnmK9fX.js";import"./useOutsideClick-DsRk1Hgy.js";import"./OverflowMenuItem-BASIVaZU.js";import"./useFilterContext-BqTZ9ykb.js";import"./bucket-0-Cgp4qbK4.js";import"./bucket-14-DLpkyXtR.js";import"./devtools-DjJC0kZ2.js";import"./TableRow-DfeweyVp.js";import"./bucket-1-CkPu7SeY.js";import"./TableToolbar-DIhTMzCc.js";import"./index-BjjzEPqz.js";import"./ErrorEmptyState-Du7wNyXG.js";import"./EmptyState-DroN0Ebo.js";import"./EmptyStateV2.deprecated-C2lKMAHZ.js";import"./Link-BscjaeLg.js";import"./ErrorIllustration-CZQX160J.js";import"./useId-BImvC5MC.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BNE48fIJ.js";import"./NoDataIllustration-DbcqDpZZ.js";import"./NotFoundEmptyState-BVMc0OMh.js";import"./NotFoundIllustration-BLLGz4Tp.js";import"./index.esm-DUH_AICA.js";import"./usePreviousValue-Cageflr8.js";import"./useResizeObserver-DlxIFv70.js";import"./useIsomorphicEffect-b9OUvWaC.js";import"./getFocusableElements-BW7cf991.js";import"./index-B2ykNYPT.js";import"./props-helper-gcNr1tii.js";import"./useClickOutside-CDQDDKVX.js";import"./AccordionItem-ENzMG0oJ.js";import"./Checkbox-DRM5iQKY.js";import"./DatePicker-DmEXwBVg.js";import"./NumberInput-CeWQadbk.js";import"./useNormalizedInputProps-DUnwy-61.js";import"./bucket-16-CzPuKptk.js";import"./FormGroup-BtbL8ZGF.js";import"./MultiSelect-C9lrAlyX.js";import"./RadioButton-TqM8hUAl.js";import"./RadioButtonGroup-NBAGYvP5.js";import"./usePrefersReducedMotion-L8WGJvSg.js";import"./usePresence-Dm0hdG4v.js";import"./ActionSet-CP5R2yLL.js";import"./useWindowResize-DtC6Mjtf.js";import"./TagSet-BoiTapEM.js";import"./Tag-C0IsdLhR.js";import"./DefinitionTooltip-FuJSB5-l.js";import"./DismissibleTag-BlaQjnkZ.js";import"./usePortalTarget-DYH9lnLV.js";import"./OperationalTag-BpSG_X4i.js";import"./SkeletonText--lkC769G.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-Dp86McvH.js";import"./TableSelectRow-DFT7reWN.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,zo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const Io=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,Io as __namedExportsOrder,zo as default};
