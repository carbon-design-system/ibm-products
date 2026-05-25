var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,u as D}from"./iframe-Dwk9YmAN.js";import{s as z,m as I,E as b}from"./_storybook-styles-De8X9dJk.js";import{D as y}from"./DatagridActions-DRJp69Aw.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-BuDfZyfm.js";import{u as N}from"./useExpandedRow-DKivR84w.js";import{u as G}from"./useSelectRows-BX_B19hD.js";import{c as P}from"./bucket-6-C7Zuoocv.js";import{T as _}from"./bucket-19-CWKpn_IP.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-IOa-ILaZ.js";import"./index-x2rxOhL3.js";import"./index-TfXoLMHw.js";import"./bucket-7-1zfGAt3a.js";import"./bucket-20-DcPWc3N9.js";import"./MenuItem-BJFeFFwe.js";import"./Text-BEmRygqo.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-BDFTWMsy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-RmzHfMFB.js";import"./ComposedModal-DDcxqtyW.js";import"./mergeRefs-BH0-8uDG.js";import"./index-D_94dRAP.js";import"./LayerContext-ClG4rrRp.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-h78Z_bAy.js";import"./InlineLoading-Sqv6uuP8.js";import"./ButtonSet-zfetG-87.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CZYRSBAN.js";import"./OverflowMenuItem-pxu0eFgc.js";import"./TableToolbarSearch-CC-971Fv.js";import"./wrapComponent-n17OTyPh.js";import"./Search-B4KoE-zl.js";import"./FormContext-hTfDBPYK.js";import"./bucket-16-B6GeJaNh.js";import"./index-Bx6QOSzn.js";import"./bucket-13-DGAhRASv.js";import"./useOutsideClick-Xg2vzzcr.js";import"./Dropdown--gE3CvR7.js";import"./useNormalizedInputProps-B0FD4R8S.js";import"./downshift.esm-DY19WzQJ.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DI-uk1KT.js";import"./useFilterContext-xzh8K2vS.js";import"./useIsomorphicEffect-uisrTcl0.js";import"./bucket-0-C-FoML7a.js";import"./bucket-15-nEu6Tnsk.js";import"./devtools-CxET2ftO.js";import"./TableRow-DdqMf1IG.js";import"./bucket-1-BOYVwKkN.js";import"./TableToolbar-CwOzbese.js";import"./index-BTMjr9al.js";import"./ErrorEmptyState-DJd8E25n.js";import"./EmptyState-CMaaIfVp.js";import"./EmptyStateV2.deprecated-AM4jC8Q0.js";import"./Link-Eqbn2GoD.js";import"./ErrorIllustration-CffuLcGW.js";import"./useId-C1iLHqii.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cwcjuv-m.js";import"./NoDataIllustration-D7YTHHk-.js";import"./NotFoundEmptyState-DMoKK6b3.js";import"./NotFoundIllustration-aP0Bjg_R.js";import"./index.esm-DEu94qFr.js";import"./usePreviousValue-DSgPtnPQ.js";import"./useResizeObserver-DtXh7as7.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-yTnoKGWJ.js";import"./props-helper-CVt7QmCF.js";import"./useClickOutside-DtfbwcKM.js";import"./AccordionItem-ChY6w0Zn.js";import"./Checkbox-CxqQisvn.js";import"./hasHelperText-CcJ_VphT.js";import"./index-DOzIepnf.js";import"./DatePicker-DjVofFfV.js";import"./FormGroup-C-L47loB.js";import"./MultiSelect-BsLitK8L.js";import"./NumberInput-fQ2VHwR4.js";import"./bucket-17-8_34DI9m.js";import"./RadioButtonGroup-B2RTCPsc.js";import"./usePrefersReducedMotion-D5lx-DYe.js";import"./usePresence-CzZ1Knu9.js";import"./ActionSet-C4t2Y-YL.js";import"./useWindowResize-L01zFNbk.js";import"./TagSet-Bj1CCkkb.js";import"./Tag-B_Unk92v.js";import"./DefinitionTooltip-DBzKN1bs.js";import"./DismissibleTag-BMk3Ypgd.js";import"./usePortalTarget-CyoylMcm.js";import"./OperationalTag-BmkE7HJC.js";import"./SkeletonText-37Ys9OdI.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CHxUGYD1.js";import"./TableSelectRow-CGol-xwC.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-Bafxw2hd.js.map
