import{e as l,S as C,r as E,u as H}from"./iframe-BbXUUjd_.js";import{s as T,m as D,E as S}from"./_storybook-styles-DlZkcqih.js";import{D as z}from"./DatagridActions-BIxHRqjG.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-6arTmOhi.js";import{u as f}from"./useExpandedRow-BuuxVii-.js";import{u as R}from"./useSelectRows-BbFPvLDe.js";import{E as N}from"./bucket-6-CfXH_CLd.js";import{T as G}from"./bucket-18-Eqhj5FgP.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-AIq4o4H9.js";import"./index-5wdsmiYB.js";import"./bucket-19-D_AfXLYY.js";import"./bucket-7-DgIxtDP7.js";import"./ComposedModal-BkgIOMZV.js";import"./index-DcPoEpgU.js";import"./LayerContext-Bytv4zrP.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BMnlZwEF.js";import"./InlineLoading-D1aGZn20.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-Wym4UGgT.js";import"./Text-Bbz3GFY2.js";import"./utils-BOvPdNkn.js";import"./TableToolbarSearch-Dt9gP2kL.js";import"./wrapComponent-BYoRkSUS.js";import"./Search-CziQ13Zm.js";import"./FormContext-DLymYVx5.js";import"./bucket-15-CBNpOkFH.js";import"./Dropdown-2nePbHNc.js";import"./index-DJIZl_dZ.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-B5K2lX4C.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-GM9cwDgU.js";import"./useControllableState-BZS90GNH.js";import"./useAttachedMenu-kpO217Y9.js";import"./environment-DRRHKtsv.js";import"./index-CAtTluKL.js";import"./index-Bit37Dcs.js";import"./bucket-13-DpTpFo6N.js";import"./useOutsideClick-DTSzTXra.js";import"./OverflowMenuItem-CKgNgQFP.js";import"./useFilterContext-Cje1T6pI.js";import"./useIsomorphicEffect-Ckqx_rZa.js";import"./bucket-0-XgBeGnkT.js";import"./devtools-c1cFm99f.js";import"./TableRow-B-Snxy3l.js";import"./bucket-1-DLhfM8qe.js";import"./TableToolbar-C6g4aPLu.js";import"./index-Doz2zLLk.js";import"./ErrorEmptyState-ByhLG8S1.js";import"./EmptyState-BzHeXB6p.js";import"./EmptyStateV2.deprecated-BGo5TH4f.js";import"./Link-Bbu9l37B.js";import"./ErrorIllustration-DTefJ6WE.js";import"./useId-B_5ZULSM.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-fPsD1muL.js";import"./NoDataIllustration-DpJVzVco.js";import"./NotFoundEmptyState-W6R8qNiE.js";import"./NotFoundIllustration-ZMhTjGkU.js";import"./index.esm-PtBsoDXv.js";import"./usePreviousValue-CCx64fdl.js";import"./useResizeObserver-C8GvvISo.js";import"./getFocusableElements-BW7cf991.js";import"./index-Ti0MHKIa.js";import"./props-helper-DXuQWHiI.js";import"./useClickOutside-BH6_hqBi.js";import"./AccordionItem-DicmOdSc.js";import"./Checkbox-DA1Tp4F1.js";import"./DatePicker-Bz3ffG6m.js";import"./documentLang-E105Y72C.js";import"./FormGroup-RnwmISsp.js";import"./MultiSelect-Bdg83ZaU.js";import"./NumberInput-CH2coJOL.js";import"./bucket-17-D-hvZsd8.js";import"./RadioButton-khxpqx3v.js";import"./RadioButtonGroup-B8NLcoy8.js";import"./usePrefersReducedMotion-Dkir7oBy.js";import"./usePresence-v55_n0mJ.js";import"./ActionSet-D7S-ikyt.js";import"./useWindowResize-B-iNBRVC.js";import"./TagSet--kzD8XZj.js";import"./Tag-DVW51ef6.js";import"./DefinitionTooltip-D1ZjE1pE.js";import"./DismissibleTag-Bn3_7Jv_.js";import"./usePortalTarget-Dap0Fhp-.js";import"./OperationalTag-DhdsaTCi.js";import"./SkeletonText-BCMmkJwd.js";import"./bucket-16-ooxM2VmG.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CGLUYJEM.js";import"./TableSelectRow-WNMKe7Hf.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,fo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const Ro=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,Ro as __namedExportsOrder,fo as default};
//# sourceMappingURL=AiLabel.stories-FSei1V5a.js.map
