import{e as l,S as C,r as E,u as H}from"./iframe-Bt_4wi2_.js";import{s as T,m as D,E as S}from"./_storybook-styles-CWbGVUaz.js";import{D as z}from"./DatagridActions-mbamOpu9.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CCIMJzFR.js";import{u as f}from"./useExpandedRow-CtjQuxTb.js";import{u as R}from"./useSelectRows-CQcJfkqG.js";import{E as N}from"./bucket-6-DqzXE5dN.js";import{T as G}from"./bucket-17-B1WDuKPt.js";import"./bucket-2-Boc44dor.js";import"./index-xWfRmBau.js";import"./bucket-18-BNKdAP26.js";import"./bucket-7-B-udVZOd.js";import"./ComposedModal-47wjLjIr.js";import"./index-BEhuL1MR.js";import"./index-Dj5IO_sl.js";import"./LayerContext-BkO66YUX.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CKUC8hVh.js";import"./InlineLoading-DVx1EWEO.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DVXZPRDf.js";import"./Text-CKKshe8_.js";import"./utils-Dx5MzUE-.js";import"./TableToolbarSearch-CkHJo2ev.js";import"./wrapComponent-IgFyV2G4.js";import"./Search-CVSTT5z7.js";import"./FormContext-DZ5Pn6PQ.js";import"./bucket-15-Ch_KyqBs.js";import"./Dropdown-DALH0kRg.js";import"./index-Z1YAyleP.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-Cu112eOp.js";import"./MenuItem-D2pnsW7j.js";import"./useControllableState-DNtleL3k.js";import"./useAttachedMenu-C0yi6pnT.js";import"./index-C7wi-ghb.js";import"./index-DHyu7IcT.js";import"./bucket-12-CDc9yP7i.js";import"./useOutsideClick-D3OyQuUM.js";import"./OverflowMenuItem-ggN1m3Mj.js";import"./useFilterContext-DTR90qo_.js";import"./bucket-0-Bj1c77ki.js";import"./bucket-14-CUPfehuY.js";import"./devtools-BCl7cib1.js";import"./TableRow-C6xYuB6Q.js";import"./bucket-1-CILBsbE8.js";import"./TableToolbar-CjRb7GXR.js";import"./index-C6rFndyw.js";import"./ErrorEmptyState-zemEyeeQ.js";import"./EmptyState-O7tb8Xec.js";import"./EmptyStateV2.deprecated-CzR5da4a.js";import"./Link-BtVCBSi3.js";import"./ErrorIllustration-C20suZyp.js";import"./useId-C7vEoo7Q.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DHayk9gF.js";import"./NoDataIllustration-CzVtwb_5.js";import"./NotFoundEmptyState-D-iN-Km6.js";import"./NotFoundIllustration-CK78gLt7.js";import"./index.esm-Cd3d2ndm.js";import"./usePreviousValue-D6jr6a1I.js";import"./useResizeObserver-B7TK2lQu.js";import"./useIsomorphicEffect-D_1zDqSu.js";import"./getFocusableElements-BW7cf991.js";import"./index-BMUscg6k.js";import"./props-helper-uQ141h4h.js";import"./useClickOutside-DTdVa_Sp.js";import"./AccordionItem-CYO3lCiP.js";import"./Checkbox-CKmGiswn.js";import"./DatePicker-C791D37O.js";import"./FormGroup-C8xiXSF6.js";import"./MultiSelect-CJqcHJtI.js";import"./NumberInput-Crv8I7dK.js";import"./useNormalizedInputProps-Bd-xcf7G.js";import"./documentLang-E105Y72C.js";import"./bucket-16-D2Z2Dhjh.js";import"./RadioButton-W7ipeTeg.js";import"./RadioButtonGroup-DuAVjpvV.js";import"./usePrefersReducedMotion-BzmCcU9p.js";import"./usePresence-CoAJwV67.js";import"./ActionSet-I4afg10P.js";import"./useWindowResize-Cg0SJ3kR.js";import"./TagSet-DlcjLTtL.js";import"./Tag-Ex8z9_ne.js";import"./DefinitionTooltip-DhipDxYz.js";import"./DismissibleTag-CgEG4X9m.js";import"./usePortalTarget-BMZMDMfJ.js";import"./OperationalTag-DwMFZI3B.js";import"./SkeletonText-XtlMg-au.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-BxptPYQA.js";import"./TableSelectRow--WiDynAN.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
