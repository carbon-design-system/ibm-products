import{e as l,S as C,r as E,u as H}from"./iframe-Cff_uvRq.js";import{s as T,m as D,E as S}from"./_storybook-styles-DoDUiXs9.js";import{D as z}from"./DatagridActions-BBmzZw19.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-BsKXOQhy.js";import{u as f}from"./useExpandedRow-B3KjpFGr.js";import{u as R}from"./useSelectRows-CejnUYwD.js";import{E as N}from"./bucket-6-Bvs71sA4.js";import{T as G}from"./bucket-18-DKBL0two.js";import"./bucket-2-DFOEsNXn.js";import"./index-A0BY4CbF.js";import"./bucket-7-BBQiCCMO.js";import"./bucket-19-rzwpXw_n.js";import"./ComposedModal-CLMfRped.js";import"./index-BEhuL1MR.js";import"./index-BbMc6LY2.js";import"./LayerContext-aHU3kOUM.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BsWxyNA0.js";import"./InlineLoading-Xj1uHorY.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-C0YgiTtk.js";import"./Text-BeripsbQ.js";import"./utils-DxZkHSRU.js";import"./TableToolbarSearch-CMcNT0bV.js";import"./wrapComponent-CVCUSENg.js";import"./Search-BvuodLuk.js";import"./FormContext-Bz91-0Aj.js";import"./bucket-15-CPqQg4NJ.js";import"./Dropdown-DvdXtL-Z.js";import"./index-DPBR-kvc.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-DD03fVLn.js";import"./useControllableState-Ch9LF6fw.js";import"./useAttachedMenu-DpgeAf5_.js";import"./index-BZcBv8El.js";import"./index-Bb_U4bQM.js";import"./bucket-13-BlWKUG9u.js";import"./useOutsideClick-ogqAkNhv.js";import"./OverflowMenuItem-DzcA6dIy.js";import"./useFilterContext-BPGPM2fu.js";import"./bucket-0-BHUvdcmU.js";import"./bucket-14-BS7hPKin.js";import"./devtools-CBto78fy.js";import"./TableRow-BhNSqxZo.js";import"./bucket-1-Cn2Vz24_.js";import"./TableToolbar-D6iB3_vq.js";import"./index-zgZhWPlI.js";import"./ErrorEmptyState-CGcUWn7O.js";import"./EmptyState-DgZd044g.js";import"./EmptyStateV2.deprecated-D7X5CUrb.js";import"./Link-BiS54jbp.js";import"./ErrorIllustration-C3iaufbG.js";import"./useId-QkOHumEp.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DGuOpy4Z.js";import"./NoDataIllustration-C1SQ5hMp.js";import"./NotFoundEmptyState-BqQxw90R.js";import"./NotFoundIllustration-CA56_qWn.js";import"./index.esm-D88yBwuJ.js";import"./usePreviousValue-CRGd6dk3.js";import"./useResizeObserver-BVjEDJaE.js";import"./useIsomorphicEffect-Dc9ng1CU.js";import"./getFocusableElements-BW7cf991.js";import"./index-DfVNWw9q.js";import"./props-helper-BGCgvcot.js";import"./useClickOutside-D_ffJB1P.js";import"./AccordionItem-Z1gAU3Jl.js";import"./Checkbox-BB_T_On_.js";import"./DatePicker-D6zSzG4c.js";import"./FormGroup-D6wjMItX.js";import"./MultiSelect-BOGN5svO.js";import"./NumberInput-BfXXC_uh.js";import"./useNormalizedInputProps-BM2ZcbR9.js";import"./documentLang-E105Y72C.js";import"./bucket-16-DYaMwKSM.js";import"./RadioButton-rc8OeF9C.js";import"./RadioButtonGroup-C4nRYsc2.js";import"./usePrefersReducedMotion-DdXGT2yu.js";import"./usePresence-DoPIX10u.js";import"./ActionSet-Dwek2kBo.js";import"./useWindowResize-BGm2n6oI.js";import"./TagSet-DVrsmARa.js";import"./Tag-wjfQ9aRE.js";import"./DefinitionTooltip-C-WJpm3J.js";import"./DismissibleTag-C3Le-g1Y.js";import"./usePortalTarget-Bg_OfAIC.js";import"./OperationalTag-BfbVw8PI.js";import"./SkeletonText-DpJZDqeY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CxmEXPfI.js";import"./TableSelectRow-B8_IWBq6.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
