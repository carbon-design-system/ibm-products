import{e as l,S as C,r as E,u as H}from"./iframe-DaJ7qZFz.js";import{s as T,m as D,E as S}from"./_storybook-styles-CIwNXjpZ.js";import{D as z}from"./DatagridActions-CcbVNrYn.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-BB26jHLG.js";import{u as f}from"./useExpandedRow-DF8XS4rG.js";import{u as R}from"./useSelectRows-18X0m3aF.js";import{E as N}from"./bucket-6-BJYpAUvA.js";import{T as G}from"./bucket-17-B_zXmHYU.js";import"./bucket-2-P2R9j-W1.js";import"./index-Z5fLEIA0.js";import"./bucket-18-ByTZLmmx.js";import"./bucket-7-Cb-OIaT0.js";import"./ComposedModal-BzOonGp7.js";import"./index-BEhuL1MR.js";import"./index-BpcqVyGu.js";import"./LayerContext-vGQTArkS.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DJKPI3Nr.js";import"./InlineLoading-DLeNTBnm.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-D2fPHIkV.js";import"./Text-DAzzyO_r.js";import"./utils-sYH23xe2.js";import"./TableToolbarSearch-DT4Hw_h2.js";import"./wrapComponent-BwhF63QN.js";import"./Search-C1j5IXK_.js";import"./FormContext-CxwIFKWz.js";import"./bucket-15-CzkBbepc.js";import"./Dropdown-DehTuAds.js";import"./index-BUQhqYck.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-CTkSN82q.js";import"./MenuItem-XyuHpF2L.js";import"./useControllableState-B4EUufmp.js";import"./useAttachedMenu-CjuWjUj6.js";import"./index-D4mpTMcf.js";import"./index-BR5lI6dj.js";import"./bucket-12-B9hKFMO6.js";import"./useOutsideClick-Cu2grhFH.js";import"./OverflowMenuItem-BdTRLdr9.js";import"./useFilterContext-CgRSX_Dl.js";import"./bucket-0-CrmspZNA.js";import"./bucket-14-DXuzSbLU.js";import"./devtools-fyD2yDo2.js";import"./TableRow-BVu2jI1u.js";import"./bucket-1-BS6eur1g.js";import"./TableToolbar-CkC68ua3.js";import"./index-Aneys0Pd.js";import"./ErrorEmptyState-BdSzZia8.js";import"./EmptyState-CM5V6CpY.js";import"./EmptyStateV2-DptYBUYu.js";import"./Link-BEYL5508.js";import"./props-helper-CIQFiJAN.js";import"./ErrorIllustration-D_n2p4Kc.js";import"./useId-CtFBCo7Z.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D-bQqg8b.js";import"./NoDataIllustration-rmxnUzJb.js";import"./NotFoundEmptyState-C2nkzLxV.js";import"./NotFoundIllustration-DtvclZTU.js";import"./index.esm-CrR524Ho.js";import"./usePreviousValue-CgrRdUpw.js";import"./useResizeObserver-BSHR1HYJ.js";import"./useIsomorphicEffect-ODhclyWJ.js";import"./getFocusableElements-BW7cf991.js";import"./index-BwEyRhpR.js";import"./useClickOutside-Db0NgZOo.js";import"./AccordionItem-BhmLDKu6.js";import"./Checkbox-JgT7PCYa.js";import"./DatePicker-BUr2r0lY.js";import"./FormGroup-B2hJAePc.js";import"./MultiSelect-B-k-6OVV.js";import"./NumberInput-DZyvCCBG.js";import"./useNormalizedInputProps-BHISR_Rl.js";import"./documentLang-E105Y72C.js";import"./bucket-16-Dxofq6tm.js";import"./RadioButton-gRg8VN4w.js";import"./RadioButtonGroup-BV801ATA.js";import"./usePrefersReducedMotion-W8OAEwi4.js";import"./usePresence-CKqzmrZ8.js";import"./ActionSet-BTJ2RB7T.js";import"./useWindowResize-FBiPseeK.js";import"./TagSet-DgGPnnpD.js";import"./Tag-CCW5k4jG.js";import"./DefinitionTooltip-DxTvn53E.js";import"./DismissibleTag-CZ0-AC-i.js";import"./usePortalTarget-BTAgzjDA.js";import"./OperationalTag-CwEvQ1Zw.js";import"./SkeletonText-BkPZdxkH.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-DpydXPYJ.js";import"./TableSelectRow-COn66nMO.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
