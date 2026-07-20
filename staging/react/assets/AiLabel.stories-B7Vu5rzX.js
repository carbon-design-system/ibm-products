var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ag as H,r as T,a as D}from"./iframe-LxOZQDAZ.js";import{s as z,m as I,E as b}from"./_storybook-styles-Bc24vKhO.js";import{D as y}from"./DatagridActions-BgZVFYQP.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid--rDM18W2.js";import{u as N}from"./useExpandedRow-CBBa-QqQ.js";import{u as G}from"./useSelectRows-DrJL5omk.js";import{a as P}from"./bucket-6-Ciq4juOh.js";import{T as _}from"./bucket-19-DlKwwYYK.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DObUo3cn.js";import"./index-NOUejIsb.js";import"./index-By2Zbst-.js";import"./bucket-20-CPLXmsjx.js";import"./bucket-7-1DWIAd7h.js";import"./MenuItem-BefqR5qR.js";import"./Text-BRhHXZCE.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bj_4he62.js";import"./environment-DRRHKtsv.js";import"./useControllableState-C0cmDY6p.js";import"./ComposedModal-izsZFTgD.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Cuq_gYqS.js";import"./LayerContext-Dp9ZRtSj.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-Dn58-e0P.js";import"./InlineLoading-DbhE4RnG.js";import"./ButtonSet-Q9L3O0X_.js";import"./wrapFocus-D_OwerMA.js";import"./OverflowMenuItem-DT60MaEo.js";import"./TableToolbarSearch-D2IC4PMn.js";import"./wrapComponent-CdVkv_gc.js";import"./Search-D2pQ-dze.js";import"./FormContext-Cdv1M00w.js";import"./bucket-16-Ce8uDpVR.js";import"./TableToolbar-CB8deJPh.js";import"./bucket-0-dfuKY6jq.js";import"./TableRow-Cm7oXW-3.js";import"./bucket-1-B6LDmGWR.js";import"./index-V-GITaOS.js";import"./index-CrSJzJsf.js";import"./bucket-14-CAGGJN8o.js";import"./useOutsideClick-z7-4Y9KH.js";import"./Dropdown-CbTb0lto.js";import"./useNormalizedInputProps-QJ6MvXNJ.js";import"./bucket-21-CQi2gVtC.js";import"./downshift.esm-B7sI8gv5.js";import"./inheritsLoose-CdLKJotq.js";import"./index-eKG50g_E.js";import"./useFilterContext-hrEfunDx.js";import"./useIsomorphicEffect-Cxr7g83s.js";import"./bucket-15-BmdsY-A1.js";import"./devtools-B1WIs_qd.js";import"./ErrorEmptyState-D7Z9RnbA.js";import"./EmptyState-ms93KNPc.js";import"./EmptyStateV2.deprecated-Ck7ZJf2i.js";import"./Link-CEy6-L-o.js";import"./ErrorIllustration-ql6xbozg.js";import"./useId-B0NVw4Zp.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DZ4GXqCi.js";import"./NoDataIllustration-CZLlSyLF.js";import"./NotFoundEmptyState-BG94aUCm.js";import"./NotFoundIllustration-BMdoaoeY.js";import"./index.esm-BUNkAqHX.js";import"./usePreviousValue-CD8ZFEAM.js";import"./useResizeObserver-CBkH9Iwd.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DH8D3rrj.js";import"./props-helper-BGW8o-_q.js";import"./useClickOutside-BTXTbuS9.js";import"./AccordionItem-BzurocPC.js";import"./Checkbox-DwDZTjIL.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-BDaV_pKP.js";import"./DatePicker-BJqUmti_.js";import"./FormGroup-DGIszK2Y.js";import"./MultiSelect-39kT9rzb.js";import"./NumberInput-BziJhKz0.js";import"./bucket-18-Ar-ngw05.js";import"./RadioButtonGroup-P8wr2TyW.js";import"./index-gez6ZtXT.js";import"./usePrefersReducedMotion-CVY5qbgp.js";import"./usePresence-QfAcXbB8.js";import"./ActionSet-DpmqCooQ.js";import"./useWindowResize-C31CoKoj.js";import"./TagSet-CHCPA_k-.js";import"./Tag-wrrC6e9Z.js";import"./DefinitionTooltip-DC4sG6U1.js";import"./DismissibleTag-CFZGepQR.js";import"./usePortalTarget-Dt2lWXez.js";import"./OperationalTag-BpdH8-L9.js";import"./SkeletonText-Bs3pts_Z.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CUIetCHO.js";import"./TableSelectRow-D38zlIaG.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const Bo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,Bo as __namedExportsOrder,_o as default};
//# sourceMappingURL=AiLabel.stories-B7Vu5rzX.js.map
