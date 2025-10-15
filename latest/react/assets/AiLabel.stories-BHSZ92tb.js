import{e as l,S as C,r as E,u as H}from"./iframe-CoewCovk.js";import{s as T,m as D,E as S}from"./_storybook-styles-BFvdjGMK.js";import{D as z}from"./DatagridActions-97kAof9x.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-Cr0FB-fQ.js";import{u as f}from"./useExpandedRow-B77oLjKX.js";import{u as R}from"./useSelectRows-CzKeJSfK.js";import{E as N}from"./bucket-6-CLYzFK7W.js";import{T as G}from"./bucket-18-BpzWYukX.js";import"./bucket-2-CtVldtpu.js";import"./index-CsmjhMFW.js";import"./bucket-7-Dj2rYaKi.js";import"./bucket-19-DKxd3UR5.js";import"./ComposedModal-D1Nxft6T.js";import"./index-BEhuL1MR.js";import"./index-Cyg7a7UP.js";import"./LayerContext-kuW0qxpN.js";import"./clamp--00YEiB8.js";import"./ButtonSet-Cr-Fqob5.js";import"./InlineLoading-B2eXnIkW.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-COQpSXAY.js";import"./Text-Db5H-8py.js";import"./utils-Bp6ze_2p.js";import"./TableToolbarSearch-BoSHteu8.js";import"./wrapComponent-BjK1lnee.js";import"./Search-B8UI4Fvk.js";import"./FormContext-CPXwcYYq.js";import"./bucket-15-4skPNO3q.js";import"./Dropdown-BS8RCd8O.js";import"./index-Lu5ZCrUL.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-BE_TxASK.js";import"./useControllableState-DaEX3sx9.js";import"./useAttachedMenu-DisMwIU8.js";import"./index-eE0c798V.js";import"./index-Db7cgiYO.js";import"./bucket-13-kEbwoQWW.js";import"./useOutsideClick-BjkaPmco.js";import"./OverflowMenuItem-AdOGI2xf.js";import"./useFilterContext-BujhTQ2Q.js";import"./bucket-0-CMdbbcAW.js";import"./bucket-14-BpzSdjlW.js";import"./devtools-9nvRWAoA.js";import"./TableRow-B3uq9iow.js";import"./bucket-1-y7LosGnP.js";import"./TableToolbar-CdPlZqhg.js";import"./index-Dci_9JXV.js";import"./ErrorEmptyState-BlcMRnOo.js";import"./EmptyState-CBI53Yk2.js";import"./EmptyStateV2.deprecated-rfGhLqIl.js";import"./Link-CnJKU312.js";import"./ErrorIllustration-DS0lnkhu.js";import"./useId-BX45mjmh.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DCdnEpTU.js";import"./NoDataIllustration-VGamBxGL.js";import"./NotFoundEmptyState-xz8YSirE.js";import"./NotFoundIllustration-KMs4-bG1.js";import"./index.esm-D3tP9Ffl.js";import"./usePreviousValue-CF6xtt65.js";import"./useResizeObserver-C89b-FZh.js";import"./useIsomorphicEffect-Cawv2SLq.js";import"./getFocusableElements-BW7cf991.js";import"./index-DERjXm5w.js";import"./props-helper-BRgWXp0Z.js";import"./useClickOutside-BM2XoXOW.js";import"./AccordionItem-DRYCMcXS.js";import"./Checkbox-DeqUwwo0.js";import"./DatePicker-DaoYkBcT.js";import"./FormGroup-MledKjZ_.js";import"./MultiSelect-CfuJ0_2a.js";import"./NumberInput-D2QuPvpm.js";import"./useNormalizedInputProps-2OS32PD4.js";import"./documentLang-E105Y72C.js";import"./bucket-16-cGJ0KSHs.js";import"./RadioButton-DBM0lH3Y.js";import"./RadioButtonGroup-CM9aMQRf.js";import"./usePrefersReducedMotion-DdHThNqK.js";import"./usePresence-DNqmtiug.js";import"./ActionSet-d0WjR72l.js";import"./useWindowResize-DksD137R.js";import"./TagSet-BgG3tROi.js";import"./Tag-DLc7aXsJ.js";import"./DefinitionTooltip-CDCcENL2.js";import"./DismissibleTag-IWYoLcTb.js";import"./usePortalTarget-DXZ_VUkb.js";import"./OperationalTag-BaI1cL_a.js";import"./SkeletonText-ZIMzN19w.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-C_O2-Pit.js";import"./TableSelectRow-BJnFvekA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
