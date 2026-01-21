import{e as l,S as C,r as E,u as H}from"./iframe-CECvNR-E.js";import{s as T,m as D,E as S}from"./_storybook-styles-DyhsE4gt.js";import{D as z}from"./DatagridActions-Cry70NW6.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CLGBu0KZ.js";import{u as f}from"./useExpandedRow-DZfSbgYj.js";import{u as R}from"./useSelectRows-DqJC3zoB.js";import{E as N}from"./bucket-6-6Xg8dT13.js";import{T as G}from"./bucket-18-aLT4L9Ee.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-B2qVJJyY.js";import"./index-CY5VH0Wo.js";import"./bucket-7-BNY8no_f.js";import"./bucket-19-DzVW02r8.js";import"./ComposedModal-knVyg-RR.js";import"./index-D9kzaMMU.js";import"./LayerContext-6g403wGD.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CJvqeno-.js";import"./InlineLoading-AxKMSEh1.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-2UnpdR_d.js";import"./Text-JYrlRVpp.js";import"./utils-5D3DEOFD.js";import"./TableToolbarSearch-FT_JklIp.js";import"./wrapComponent-CgUKGyK0.js";import"./Search-C_NXnGDc.js";import"./FormContext-D-anyOyh.js";import"./bucket-15-B5w10YD2.js";import"./Dropdown-B3sMF6DL.js";import"./index-nuXQNMyh.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-Bnm0Ei9o.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CuhJ5Fdm.js";import"./useControllableState-CeUHG2Ws.js";import"./useAttachedMenu-D1mlKi8p.js";import"./index-OyYMWOsD.js";import"./index-D6SLJGyk.js";import"./bucket-13-BsaKR1EV.js";import"./useOutsideClick-NWUtwkfn.js";import"./OverflowMenuItem-CuAQreUF.js";import"./useFilterContext-5K42m0LH.js";import"./useIsomorphicEffect-BnVzRpkq.js";import"./bucket-0-Ct-c54fM.js";import"./bucket-14-CHDSepZv.js";import"./devtools-4IrNVtGE.js";import"./TableRow-nE5Z2m4H.js";import"./bucket-1-CWEhWKsT.js";import"./TableToolbar-CgZQ2mCp.js";import"./index-CeDLcdNt.js";import"./ErrorEmptyState-CIYSmPjf.js";import"./EmptyState-B5t1fZwy.js";import"./EmptyStateV2.deprecated-DCZVLlaC.js";import"./Link-DC6sJXxH.js";import"./ErrorIllustration-IOVb8kFl.js";import"./useId-DvA9Olfl.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CQWT0LH9.js";import"./NoDataIllustration-DQjd0pNV.js";import"./NotFoundEmptyState-DeA3lE9B.js";import"./NotFoundIllustration-3KoYfl3e.js";import"./index.esm-CB6JTwDV.js";import"./usePreviousValue-DzUN10Wt.js";import"./useResizeObserver-CFlkjV8G.js";import"./getFocusableElements-BW7cf991.js";import"./index-JdFUOAZ1.js";import"./props-helper-BomzR2el.js";import"./useClickOutside-D2zkx6aO.js";import"./AccordionItem-BIHBNNEu.js";import"./Checkbox-GrZpxim0.js";import"./DatePicker-DJAC_JWU.js";import"./documentLang-E105Y72C.js";import"./FormGroup-tt2ybUGc.js";import"./MultiSelect-D63q8W5e.js";import"./NumberInput-rbdBayvn.js";import"./bucket-17-BzB5Sqr3.js";import"./RadioButton-DvcfIgXl.js";import"./RadioButtonGroup-ewWImFG-.js";import"./usePrefersReducedMotion-YBMc9ewZ.js";import"./usePresence-BS1FhAiy.js";import"./ActionSet-BDx6M7Wm.js";import"./useWindowResize-Wc-sHMx3.js";import"./TagSet-D8ljy7tq.js";import"./Tag-BXeLWXEp.js";import"./DefinitionTooltip-CASlUOQ5.js";import"./DismissibleTag-0sJOjJTR.js";import"./usePortalTarget-DBlCnwG_.js";import"./OperationalTag-CBsDAR3R.js";import"./SkeletonText-CxUnjpMl.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-VWg-dJpZ.js";import"./TableSelectRow-CV2wRaCK.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const fo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,fo as __namedExportsOrder,yo as default};
//# sourceMappingURL=AiLabel.stories-3YnaiIsq.js.map
