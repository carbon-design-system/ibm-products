import{e as l,S as C,r as E,u as H}from"./iframe-Cbdf71kV.js";import{s as T,m as D,E as S}from"./_storybook-styles-Dcp-q267.js";import{D as z}from"./DatagridActions-Csl207B4.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CCUBBHiu.js";import{u as f}from"./useExpandedRow-Cd7CO7Q_.js";import{u as R}from"./useSelectRows-BRRChLgf.js";import{E as N}from"./bucket-6-BiOweKob.js";import{T as G}from"./bucket-17-EDub3a_N.js";import"./bucket-2-D5C3PV8a.js";import"./index-DgPdVJKo.js";import"./bucket-18-DV2Au_NX.js";import"./bucket-7-PHG--wod.js";import"./ComposedModal-Bq5ZjMWK.js";import"./index-BEhuL1MR.js";import"./index-QS6KczTe.js";import"./LayerContext-CszjMr56.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BMY4CLjn.js";import"./InlineLoading-DLaaz_4f.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-bi0LZfCr.js";import"./Text-ByKyVd5E.js";import"./utils-Rl5Zs1h-.js";import"./TableToolbarSearch-BeU5cYwb.js";import"./wrapComponent-6pCNybjM.js";import"./Search-C7JQKTZg.js";import"./FormContext-ChOR-8Xx.js";import"./bucket-15-ChlaTHT7.js";import"./Dropdown-CaUv9lOM.js";import"./index-BhC_9JVN.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-CLDj7gXe.js";import"./MenuItem-Bo2vpwwn.js";import"./useControllableState-DbGBZOCF.js";import"./useAttachedMenu-C1kZRlVt.js";import"./index-B-ZGWXBA.js";import"./index-C0spF9CE.js";import"./bucket-12-Bk4MPs7x.js";import"./useOutsideClick-CMmEFlbp.js";import"./OverflowMenuItem-DMIMlpdR.js";import"./useFilterContext-BdhZNmTC.js";import"./bucket-0-DLaAcJTT.js";import"./bucket-14-DJq4_6YR.js";import"./devtools-BsT0_Owc.js";import"./TableRow-8kxUzvw7.js";import"./bucket-1-UwX97pQm.js";import"./TableToolbar-CA0WFVAE.js";import"./index-C7uzh38o.js";import"./ErrorEmptyState-Fvwsskak.js";import"./EmptyState-a2h_WSAg.js";import"./props-helper-DqfsKzpa.js";import"./Link-CCRD-roz.js";import"./EmptyStateV2-B_pFntri.js";import"./ErrorIllustration-voXf930C.js";import"./useId-DuEKhUSL.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Dxz0XsqI.js";import"./NoDataIllustration-aAGauCbj.js";import"./NotFoundEmptyState-gX1ruwky.js";import"./NotFoundIllustration-O2rP2xrO.js";import"./index.esm-Drl2VZFI.js";import"./usePreviousValue-DaZSyAQn.js";import"./useResizeObserver-CHiKmAS_.js";import"./useIsomorphicEffect-BHn7yZvq.js";import"./getFocusableElements-BW7cf991.js";import"./index-B1vwz3bX.js";import"./useClickOutside-2vuCWMc6.js";import"./AccordionItem-BVcrCqLd.js";import"./Checkbox-BvGpbVrt.js";import"./DatePicker-B3Vhtj2N.js";import"./FormGroup-Cn0kfrVG.js";import"./MultiSelect-BrY82tK2.js";import"./NumberInput-CKIdJc9G.js";import"./useNormalizedInputProps-BAp2UTAQ.js";import"./documentLang-E105Y72C.js";import"./bucket-16-DhadWLG_.js";import"./RadioButton-BQbGm97X.js";import"./RadioButtonGroup-CNJR6wJv.js";import"./usePrefersReducedMotion-DIJT2YR_.js";import"./usePresence-DNY-Q6Ev.js";import"./ActionSet-DUU_jnHS.js";import"./useWindowResize-E5YOh0xP.js";import"./TagSet-JPt6FeBY.js";import"./Tag-nqTZA0wF.js";import"./DefinitionTooltip-CJlV5yRZ.js";import"./DismissibleTag-BEWryI1z.js";import"./usePortalTarget-D9BcsXEH.js";import"./OperationalTag-DJ9vnd-a.js";import"./SkeletonText-C9cAPVd3.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CqVyzEAB.js";import"./TableSelectRow-DG3Gk9ks.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
