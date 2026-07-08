var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ah as H,r as T,a as D}from"./iframe-DQtlSwB0.js";import{s as z,m as I,E as b}from"./_storybook-styles-CWATYktQ.js";import{D as y}from"./DatagridActions-MWoFAGWS.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Bp7kGK_g.js";import{u as N}from"./useExpandedRow-D59Az9R_.js";import{u as G}from"./useSelectRows-JesaOsfP.js";import{c as P}from"./bucket-6-DF2gREQd.js";import{T as _}from"./bucket-19-BryqLv5V.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CoFJ47U9.js";import"./index-HrSRrNhc.js";import"./index-DO9e1XXc.js";import"./bucket-7-DXZvdKTt.js";import"./bucket-20-BaUCyjiQ.js";import"./MenuItem-BsFq2oKV.js";import"./Text-aeWWocZi.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CNVssTOG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BxEbi6mu.js";import"./ComposedModal-DgnKG59i.js";import"./mergeRefs-BH0-8uDG.js";import"./index-B0En0VCR.js";import"./LayerContext-C0V86w6h.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-mS5hENDn.js";import"./InlineLoading-mxEuuwX0.js";import"./ButtonSet-C0880qiN.js";import"./wrapFocus-BLa99PjJ.js";import"./OverflowMenuItem-DsHfBOtF.js";import"./TableToolbarSearch-DvZIzZFP.js";import"./wrapComponent-lmPvCr02.js";import"./Search-Bt9lstfw.js";import"./FormContext-CtjnxQSN.js";import"./bucket-16-B2xBWAu6.js";import"./TableToolbar-DiQKXhfK.js";import"./bucket-0-B2DKmzmX.js";import"./TableRow-ChhxaYIm.js";import"./bucket-1-B1CRS2ls.js";import"./index-6N7phTXo.js";import"./index-DYiMOPGb.js";import"./bucket-13-B4AR-gP8.js";import"./useOutsideClick-CZNnivsi.js";import"./Dropdown-C8HdSQPV.js";import"./useNormalizedInputProps-c7o4VaT8.js";import"./downshift.esm-fbTLaqIf.js";import"./inheritsLoose-CdLKJotq.js";import"./index-D4kPqY-9.js";import"./useFilterContext-vCXNCPu1.js";import"./useIsomorphicEffect-CQiBpG0E.js";import"./bucket-15-CmVLo3qv.js";import"./devtools-CKq-cjSr.js";import"./ErrorEmptyState-IKtq03Ro.js";import"./EmptyState-B7lyL1Yv.js";import"./EmptyStateV2.deprecated-HgEo7tYf.js";import"./Link-DMFtFmaW.js";import"./ErrorIllustration-DcA0L1gf.js";import"./useId-jf0fmR05.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-d5X-Di2p.js";import"./NoDataIllustration-DVOb8fZ6.js";import"./NotFoundEmptyState-BiqRYh-U.js";import"./NotFoundIllustration-Dg0ntpKh.js";import"./index.esm-CreLN5lX.js";import"./usePreviousValue-Cu5p5XON.js";import"./useResizeObserver-4UkoSMZU.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B_1PALIy.js";import"./props-helper-BEfR-CBa.js";import"./useClickOutside-D_y9vV6K.js";import"./AccordionItem-BaNZ-UZl.js";import"./Checkbox-DA5dImZy.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-Cv8rsy_z.js";import"./DatePicker-cEftXz7I.js";import"./FormGroup-B0Lp6MXu.js";import"./MultiSelect-DcwmATXD.js";import"./NumberInput-B9UIKID9.js";import"./bucket-17-AFGsyIeq.js";import"./RadioButtonGroup-LoD6qbPx.js";import"./index-LCxZFDNt.js";import"./usePrefersReducedMotion-DMntZYJK.js";import"./usePresence-qxcOlxpe.js";import"./ActionSet-BsVh9Suy.js";import"./useWindowResize-BRUM5M8j.js";import"./TagSet-Dmix9Ko6.js";import"./Tag-CpgNdznG.js";import"./DefinitionTooltip-Da2vOiUl.js";import"./DismissibleTag-DAiRcUbi.js";import"./usePortalTarget-NQDZTbZz.js";import"./OperationalTag-CXxvLiL8.js";import"./SkeletonText-DG_jj3nj.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-B08sudAD.js";import"./TableSelectRow-D0E-agYb.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-OZ5kfuBX.js.map
