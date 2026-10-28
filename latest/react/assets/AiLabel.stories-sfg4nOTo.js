var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,aj as H,r as T,a as D}from"./iframe-BJ3oD3I6.js";import{s as z,m as I,E as b}from"./_storybook-styles-BhHyMEqn.js";import{D as y}from"./DatagridActions-BFOypyr8.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-j2eybjsg.js";import{u as N}from"./useExpandedRow-DdjLwQyo.js";import{u as G}from"./useSelectRows-RkEzgpvP.js";import{c as P}from"./bucket-7-BtrbsRa_.js";import{T as _}from"./bucket-20-Vj6m3ER2.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-WHjdTac2.js";import"./index-CfJuWsKG.js";import"./index-FQgPJb5I.js";import"./bucket-8-Dz3t5KtZ.js";import"./bucket-21-_gQwUv_z.js";import"./MenuItem-Cgh2v6_2.js";import"./Text-CKFCb-K0.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DeDdPkTy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CD5GBJ5k.js";import"./ComposedModal-BXLb-sEZ.js";import"./mergeRefs-BH0-8uDG.js";import"./index-B44qGmzH.js";import"./LayerContext-kZMSrgAm.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DvUtpNhe.js";import"./InlineLoading-DnTQB44j.js";import"./ButtonSet-DHBPfsAD.js";import"./wrapFocus-BG8cibfI.js";import"./OverflowMenuItem-BbOIs5ti.js";import"./TableToolbarSearch-CgGYjfmy.js";import"./wrapComponent-BcyC-l7S.js";import"./Search-CLvXAlj3.js";import"./useNoInteractiveChildrenForLabel-BAYLBxXJ.js";import"./FormContext-v-R-meOx.js";import"./bucket-17-CVaRNrPu.js";import"./TableToolbar-DORkhDCD.js";import"./bucket-0-C8OwWJ6y.js";import"./TableRow-C-ldmG3n.js";import"./bucket-1-Dg1sNCxj.js";import"./index-Vu7ywWcs.js";import"./index-z22PCSp-.js";import"./bucket-14-BH-thPNO.js";import"./useOutsideClick-DKA0pRcd.js";import"./Dropdown-Bex3-6T5.js";import"./downshift.esm-Dw2SeZdp.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-Bro2iP2D.js";import"./index-DfcbYHfn.js";import"./useFilterContext-DKGDNvwn.js";import"./useIsomorphicEffect-hpa23fp6.js";import"./bucket-6-BE8eMyYu.js";import"./bucket-16-CpQzcPZ0.js";import"./devtools-BnZ9dupT.js";import"./ErrorEmptyState-TNF-6WnQ.js";import"./EmptyState-DSs0V7hZ.js";import"./EmptyStateV2.deprecated-Ci_-072f.js";import"./Link-3VMMPuSQ.js";import"./ErrorIllustration-C1riNF2k.js";import"./useId-kRdbt123.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BXBPKjAZ.js";import"./NoDataIllustration-Bp1Lvqjp.js";import"./NotFoundEmptyState-DJbypX4Q.js";import"./NotFoundIllustration-BlCY_2qG.js";import"./index.esm-ztha_lWk.js";import"./usePreviousValue-iHNgpNoC.js";import"./useResizeObserver-BZ8dhILb.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-cqtLY_Mv.js";import"./props-helper-CK5SYOfC.js";import"./useClickOutside-PugCljFC.js";import"./AccordionItem-BuvKKQeD.js";import"./Checkbox-DX4eokQ9.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-Droun1M7.js";import"./DatePicker-DdQrEiz_.js";import"./FormGroup-DZPOnPUC.js";import"./MultiSelect-B3CIeNWA.js";import"./NumberInput-BkhgkrLm.js";import"./bucket-18-DgJDJTjr.js";import"./RadioButtonGroup-BmRL8z0P.js";import"./index-BfwNYZwD.js";import"./usePrefersReducedMotion-Cw-EfNLC.js";import"./usePresence-B3Vheq_Q.js";import"./ActionSet-BqX89kL9.js";import"./useWindowResize-Qim8zABh.js";import"./TagSet-CoFrcysU.js";import"./Tag-Br-1l77w.js";import"./DefinitionTooltip-BYYlk8JF.js";import"./DismissibleTag-G2zsr2Qd.js";import"./usePortalTarget-DuEDzpGP.js";import"./OperationalTag-DbTrMxSS.js";import"./SkeletonText-GJ2WUl6u.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-C3KCFED3.js";import"./TableSelectRow-CzRIX23J.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,vo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const ko=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,ko as __namedExportsOrder,vo as default};
//# sourceMappingURL=AiLabel.stories-sfg4nOTo.js.map
