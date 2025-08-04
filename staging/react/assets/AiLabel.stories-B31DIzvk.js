import{e as l,S as C,r as E,u as H}from"./iframe-BixY_nzU.js";import{s as T,m as D,E as S}from"./_storybook-styles-BjnquDfj.js";import{D as z}from"./DatagridActions-CSz_YLFx.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-C3hLtMc1.js";import{u as f}from"./useExpandedRow-lauOcjwl.js";import{u as R}from"./useSelectRows-Bvi8OoyE.js";import{E as N}from"./bucket-6-Ygy5YQ9m.js";import{T as G}from"./bucket-17-D2SvOvFl.js";import"./bucket-2-KtQy-gy7.js";import"./index-KoxcOYkd.js";import"./bucket-18-Cm0L4bq5.js";import"./bucket-7-BMRx2xk3.js";import"./ComposedModal-C-yJmSnV.js";import"./index-BEhuL1MR.js";import"./index-Dioc7bXy.js";import"./LayerContext-C8JKjCPJ.js";import"./clamp--00YEiB8.js";import"./ButtonSet-B_zKP9xZ.js";import"./InlineLoading-D56yXy8d.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-Bbgeg0Nx.js";import"./Text-B6SqPZCe.js";import"./utils-CYmHZlgn.js";import"./TableToolbarSearch-SBws6Dty.js";import"./wrapComponent-DJ4rNbJl.js";import"./Search-DgkMjmaf.js";import"./FormContext-ChfRT5-9.js";import"./bucket-15-CR51sp2K.js";import"./Dropdown-CA737wZu.js";import"./index-DGezsfQe.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-BnR_hMr3.js";import"./MenuItem-ZGtCy1zR.js";import"./useControllableState-DC7Ej6kn.js";import"./useAttachedMenu-BRh0V27n.js";import"./index-BBuXWzuS.js";import"./index-CCul1fp0.js";import"./bucket-12-C20f3iiV.js";import"./useOutsideClick-BEN9HQgE.js";import"./OverflowMenuItem-C7uN44t_.js";import"./useFilterContext-BsY2fjaK.js";import"./bucket-0-tkbzYG9T.js";import"./bucket-14-julK-VHp.js";import"./devtools-BgBiig7t.js";import"./TableRow-CmfIPmKY.js";import"./bucket-1-BHpIhqGK.js";import"./TableToolbar-m2gFp8dd.js";import"./index-D8hxD1Y6.js";import"./ErrorEmptyState-DsvVJbKR.js";import"./EmptyState-By9fZsJk.js";import"./EmptyStateV2-B8Eg_jZc.js";import"./Link-trOFoxkZ.js";import"./props-helper-nJuZcXxg.js";import"./ErrorIllustration-Buxf7vLz.js";import"./useId-CEgnz6Ws.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D3JQoXKy.js";import"./NoDataIllustration-ePnik9lE.js";import"./NotFoundEmptyState-Di5etujk.js";import"./NotFoundIllustration-BiHuHUk_.js";import"./index.esm-DxhhlNX-.js";import"./usePreviousValue-CTSbRzqP.js";import"./useResizeObserver-w6LHWa3u.js";import"./useIsomorphicEffect-BzCQADVB.js";import"./getFocusableElements-BW7cf991.js";import"./index-oT-iZzBF.js";import"./useClickOutside-DAucaBgU.js";import"./AccordionItem-nAc0ALKG.js";import"./Checkbox-CrO2TYcW.js";import"./DatePicker-C-aHxAcv.js";import"./FormGroup-TqDbofKg.js";import"./MultiSelect-DU3po3NM.js";import"./NumberInput-DbvJgXao.js";import"./useNormalizedInputProps-Bpt-5IUr.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CBPAJ3ia.js";import"./RadioButton-DFOMK8Cd.js";import"./RadioButtonGroup-B0lPsX87.js";import"./usePrefersReducedMotion-VKlGTiEJ.js";import"./usePresence-DOAybUGi.js";import"./ActionSet-BU7FdDgm.js";import"./useWindowResize-DVgsn1qn.js";import"./TagSet-Dhg_Qh0C.js";import"./Tag-CbXFe4uz.js";import"./DefinitionTooltip-C5zZShyp.js";import"./DismissibleTag-Dankl3fz.js";import"./usePortalTarget-DYGy-m0K.js";import"./OperationalTag-FQkyKd3P.js";import"./SkeletonText-R4JdAoTC.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-BawndHtc.js";import"./TableSelectRow-CEr1cHF1.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
