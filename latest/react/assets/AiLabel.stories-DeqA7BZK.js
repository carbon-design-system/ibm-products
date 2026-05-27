var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,u as D}from"./iframe-Smi5ZmZZ.js";import{s as z,m as I,E as b}from"./_storybook-styles-3FNF8P-H.js";import{D as y}from"./DatagridActions-B2CJSCr4.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-BH4rLaat.js";import{u as N}from"./useExpandedRow-CVZEwEN_.js";import{u as G}from"./useSelectRows-BTUUv9gU.js";import{c as P}from"./bucket-6-B_hGfOXV.js";import{T as _}from"./bucket-19-CbQ0vYuu.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DT0DkBDy.js";import"./index-BiT27n2A.js";import"./index-DHhCJlCA.js";import"./bucket-7-DHpf5CJh.js";import"./bucket-20-B45IimhC.js";import"./MenuItem-sstkDcio.js";import"./Text-SBGzbUwt.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CTh-pYZB.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BZm7BkIH.js";import"./ComposedModal-BGvjEUGq.js";import"./mergeRefs-BH0-8uDG.js";import"./index-JayCqw4e.js";import"./LayerContext-DDd8mDPp.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-DOErXfNU.js";import"./InlineLoading-BeH_SHup.js";import"./ButtonSet-BYPHkzGz.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CzDUR3f4.js";import"./OverflowMenuItem-BVbrhquS.js";import"./TableToolbarSearch-Eil-aqfK.js";import"./wrapComponent-DlqAkAtf.js";import"./Search-Cv42ZPNW.js";import"./FormContext-Si0q5ZFN.js";import"./bucket-16-Wz1sRjKg.js";import"./index-JyCFZJUL.js";import"./bucket-13-Bqj4qWjj.js";import"./useOutsideClick-q6Np_dpQ.js";import"./Dropdown-uP4sY-nl.js";import"./useNormalizedInputProps-Cz-GxF9E.js";import"./downshift.esm-7BSB1ZPI.js";import"./inheritsLoose-CdLKJotq.js";import"./index-C8_KOQpe.js";import"./useFilterContext-BcFAAUhA.js";import"./useIsomorphicEffect-BkZZXn_D.js";import"./bucket-0-B-y6T4n_.js";import"./bucket-15-DWwCA3sP.js";import"./devtools-DrPHs2CJ.js";import"./TableRow-CWJODPpR.js";import"./bucket-1-BJs0ZmAn.js";import"./TableToolbar-DfWHqOkh.js";import"./index-B-qddijp.js";import"./ErrorEmptyState-DRVIVDKD.js";import"./EmptyState-3rMtDQ2S.js";import"./EmptyStateV2.deprecated-BIOBpvwS.js";import"./Link-BUz5GtLB.js";import"./ErrorIllustration-nlWFYVDy.js";import"./useId-LUtMqxGY.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BlF3QJg7.js";import"./NoDataIllustration-Lle6Azx2.js";import"./NotFoundEmptyState-BXwKTzFW.js";import"./NotFoundIllustration-G79yQj6y.js";import"./index.esm-Csjqds_p.js";import"./usePreviousValue-DN2xOXVl.js";import"./useResizeObserver-BUEaQv43.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D7vacKrU.js";import"./props-helper-CJQJkz-3.js";import"./useClickOutside-DkqFcgxh.js";import"./AccordionItem-DM-OAVRk.js";import"./Checkbox-DPK_bDOq.js";import"./hasHelperText-CcJ_VphT.js";import"./index-D0pPhKwU.js";import"./DatePicker-9ho1cbBk.js";import"./FormGroup-ZppHmEqZ.js";import"./MultiSelect-DVv_vDWn.js";import"./NumberInput-BmduIQ3_.js";import"./bucket-17-CuHOvvpQ.js";import"./RadioButtonGroup-C5sqpbM5.js";import"./usePrefersReducedMotion-Bsa7IcZO.js";import"./usePresence-B2tijZ7t.js";import"./ActionSet-BV161E1c.js";import"./useWindowResize-CpsicIzW.js";import"./TagSet-DrdXqWLx.js";import"./Tag-CRi3yKTB.js";import"./DefinitionTooltip-BYnr74kg.js";import"./DismissibleTag-FfOmw3Ka.js";import"./usePortalTarget-DeWIJHm2.js";import"./OperationalTag-SktqEXMs.js";import"./SkeletonText-DD2KHMEr.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-DTVfXfWm.js";import"./TableSelectRow-uG2E6YSf.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-DeqA7BZK.js.map
