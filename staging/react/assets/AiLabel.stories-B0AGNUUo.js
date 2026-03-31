var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-CjBCRFVj.js";import{s as z,m as I,E as b}from"./_storybook-styles-BUKzP9ZN.js";import{D as y}from"./DatagridActions-LvY8cGLo.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-STIH-Knh.js";import{u as N}from"./useExpandedRow-6p07mbbO.js";import{u as G}from"./useSelectRows-DRwa9V5v.js";import{E as P}from"./bucket-6-CXCYtBmh.js";import{T as _}from"./bucket-18-CPmY87zn.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-EKCFwDEt.js";import"./index-CzluofQO.js";import"./index-DInTrMzG.js";import"./bucket-19-BlJcL9aw.js";import"./bucket-7-D3wViG_p.js";import"./ComposedModal-bhxv7MDS.js";import"./index-Srdo1RRm.js";import"./LayerContext-1C_CyexE.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-CPatE6mM.js";import"./InlineLoading-B5kGlaxG.js";import"./mergeRefs-BH0-8uDG.js";import"./usePresenceContext-DUsD1D5h.js";import"./Text-BrH4C0jF.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-CFxqynwa.js";import"./utils-CfXDWtIp.js";import"./TableToolbarSearch-CPCp6Dao.js";import"./wrapComponent-C1Km820s.js";import"./Search-DFoE4ByK.js";import"./FormContext-BppFagRd.js";import"./bucket-16-D3maWZlk.js";import"./Dropdown-Bt_YWqm8.js";import"./index-_mo_hqZe.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-iq3oC8B3.js";import"./bucket-20-BOI0trXu.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-CsJ8k-Je.js";import"./useControllableState-DI7Xu23J.js";import"./useAttachedMenu-CotrszDl.js";import"./environment-DRRHKtsv.js";import"./index-OXjqpiFs.js";import"./index-Baa2ARkH.js";import"./bucket-13-C-q7moq6.js";import"./useOutsideClick-eIEGF3iK.js";import"./OverflowMenuItem-3jL3Lu5M.js";import"./useFilterContext-Zg582R9i.js";import"./useIsomorphicEffect-CxQ5hh_U.js";import"./bucket-0-DPFyNFTi.js";import"./bucket-15-BD4oam8i.js";import"./devtools-CsBMoq7i.js";import"./TableRow-HEVOVCRX.js";import"./bucket-1-CLzSBq5W.js";import"./TableToolbar-D6eXopVb.js";import"./index-B1DzEGCY.js";import"./ErrorEmptyState-CkQW9SAw.js";import"./EmptyState-BTq5pjYg.js";import"./EmptyStateV2.deprecated-DsPnk_nf.js";import"./Link-B9fBvMD0.js";import"./ErrorIllustration-CsyjYbI0.js";import"./useId-CLJtNmwb.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DuDhFQrT.js";import"./NoDataIllustration-CmbaFDqc.js";import"./NotFoundEmptyState-5My0YZlJ.js";import"./NotFoundIllustration-Butpm8o1.js";import"./index.esm-BetCui6K.js";import"./usePreviousValue-DwrLjxQX.js";import"./useResizeObserver-CDXgigJs.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DVMCKYtv.js";import"./props-helper-8n0VjC8z.js";import"./useClickOutside-aIv50K4g.js";import"./AccordionItem-Bi5vrGgL.js";import"./Checkbox-CET8YCR1.js";import"./DatePicker-B8qlFZb-.js";import"./documentLang-E105Y72C.js";import"./FormGroup-BWFLobqU.js";import"./MultiSelect-BTPYHhXL.js";import"./NumberInput-DAmJMtSG.js";import"./bucket-17-Bd47KcNt.js";import"./RadioButton-s3rMrPv_.js";import"./RadioButtonGroup-0uan1ved.js";import"./usePrefersReducedMotion-BU726rf2.js";import"./usePresence-KyrXCG6c.js";import"./ActionSet-Db6dLYiY.js";import"./useWindowResize-DLnE8bHM.js";import"./TagSet-Ctk9E3zn.js";import"./Tag-OCjn-Wte.js";import"./DefinitionTooltip-DeVuspr6.js";import"./DismissibleTag-C22K1byy.js";import"./usePortalTarget-Do2gNt2e.js";import"./OperationalTag-hsmkht3G.js";import"./SkeletonText-C1dl_uj7.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CeANUZrT.js";import"./TableSelectRow-DW7wojGj.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const vo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,vo as __namedExportsOrder,Bo as default};
//# sourceMappingURL=AiLabel.stories-B0AGNUUo.js.map
