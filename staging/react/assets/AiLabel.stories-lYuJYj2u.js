var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-D7SEW46n.js";import{s as z,m as I,E as b}from"./_storybook-styles-BKwXHi_h.js";import{D as y}from"./DatagridActions-C0OTqaxZ.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CKJcGf-K.js";import{u as N}from"./useExpandedRow-BLEVC_rX.js";import{u as G}from"./useSelectRows-B-uGZK7S.js";import{E as P}from"./bucket-6-zb7qZtic.js";import{T as _}from"./bucket-18-5bMwkei1.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-WRuin4Ws.js";import"./index-CnSU-Q9T.js";import"./index-5XOxg9sF.js";import"./bucket-19-CmSPB5ma.js";import"./bucket-7-CRuC58BF.js";import"./ComposedModal-sVw-jxq1.js";import"./index-BwA9w7xH.js";import"./LayerContext-C_uCIRSN.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-CFLMeBKE.js";import"./InlineLoading-Dh4labHv.js";import"./mergeRefs-BH0-8uDG.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-Bvs_mQRd.js";import"./Text-CpOZ4YWZ.js";import"./utils-DwyE9iBt.js";import"./TableToolbarSearch-BVATPljt.js";import"./wrapComponent-CdEs17e2.js";import"./Search-BzMD7ewh.js";import"./FormContext-CPS5qPuK.js";import"./bucket-15-BKeoxuDz.js";import"./Dropdown-C82rGXpz.js";import"./index-CAZ07BHJ.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-qNpjkVGD.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-C_lxbBvq.js";import"./useControllableState-2egPo8bY.js";import"./useAttachedMenu-DZQd9qUW.js";import"./environment-DRRHKtsv.js";import"./index-CZYoPSDE.js";import"./index-DN6cfLXq.js";import"./bucket-13-C7lPX_P3.js";import"./useOutsideClick-CLLScqF7.js";import"./OverflowMenuItem-lDVswTNd.js";import"./useFilterContext-5uSfC_D_.js";import"./useIsomorphicEffect-BXsFz5wQ.js";import"./bucket-0-BgtGj57N.js";import"./devtools-1BZM14jD.js";import"./TableRow-1w0xvoLq.js";import"./bucket-1-DHUuE59V.js";import"./TableToolbar-BOVfmSCm.js";import"./index-Db4es_qP.js";import"./ErrorEmptyState-DKsYPxEo.js";import"./EmptyState-DYIZMgMk.js";import"./EmptyStateV2.deprecated-fVBmDwDA.js";import"./Link-OOPgBSwU.js";import"./ErrorIllustration-DFSOuIJX.js";import"./useId-BxkPAL_z.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-uNKt9zYR.js";import"./NoDataIllustration-D4kCfvHM.js";import"./NotFoundEmptyState-Czz5SyLP.js";import"./NotFoundIllustration-C8ZWqolK.js";import"./index.esm-BYEBAWYi.js";import"./usePreviousValue-Czkq6tDo.js";import"./useResizeObserver-B5slglQP.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-ps_JZmSe.js";import"./props-helper-OxKO76gf.js";import"./useClickOutside-LKFYNxrV.js";import"./AccordionItem-uP2XVX23.js";import"./Checkbox-IP95NoIw.js";import"./DatePicker-DXsaUQIY.js";import"./documentLang-E105Y72C.js";import"./FormGroup-0tZF36IH.js";import"./MultiSelect-Dy9k0WaO.js";import"./NumberInput-DPgoQtVT.js";import"./bucket-17-BEZ3lf7h.js";import"./RadioButton-CMkbwF-A.js";import"./RadioButtonGroup-DejpDCTa.js";import"./usePrefersReducedMotion-hLa-qrHF.js";import"./usePresence-DvUhiEDW.js";import"./ActionSet-Bv_ruqbR.js";import"./useWindowResize-C16QeJ_r.js";import"./TagSet-DGplimVe.js";import"./Tag-BC0RpE8B.js";import"./DefinitionTooltip-4VNSzV6_.js";import"./DismissibleTag-DJKiZ4P5.js";import"./usePortalTarget-mUvvQ8K9.js";import"./OperationalTag-Cv6hXO9c.js";import"./SkeletonText-DD_siXSr.js";import"./bucket-16-CiA4SR8i.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-cNeWV8io.js";import"./TableSelectRow-CffB6Ini.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-lYuJYj2u.js.map
