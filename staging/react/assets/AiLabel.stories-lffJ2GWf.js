import{e as l,S as C,r as E,u as H}from"./iframe-B06X_oSn.js";import{s as T,m as D,E as S}from"./_storybook-styles-DN99CvGS.js";import{D as z}from"./DatagridActions-Dpy64I61.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-Bnex4JxP.js";import{u as f}from"./useExpandedRow-zQ41DqUz.js";import{u as R}from"./useSelectRows-BL_ErnUS.js";import{E as N}from"./bucket-6-CXHwg_52.js";import{T as G}from"./bucket-18-hOSj86Ex.js";import"./bucket-2-DTaJ0mg9.js";import"./index-BYuspRHq.js";import"./bucket-7-mkInqmAK.js";import"./bucket-19-DIBHTWkV.js";import"./ComposedModal-CwZ0Pnju.js";import"./index-B0VEw6cB.js";import"./LayerContext-CMp3yckT.js";import"./clamp--00YEiB8.js";import"./ButtonSet-oAVNqJ7O.js";import"./InlineLoading-DpNzirJ0.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BbzW8Hks.js";import"./Text-BNZPVZMz.js";import"./utils-CAn8HyWE.js";import"./TableToolbarSearch-hhU8_V7h.js";import"./wrapComponent-D9H0lsxi.js";import"./Search-Do8DlnXk.js";import"./FormContext-CV1tIC8k.js";import"./bucket-15-uKcem5Zx.js";import"./Dropdown-D9S0rVlu.js";import"./index-BRivBB8X.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-C094aA21.js";import"./useControllableState-CVLdOTaw.js";import"./useAttachedMenu-BK1NY8rH.js";import"./index-DmBxKwuV.js";import"./index-C-Kp80_u.js";import"./bucket-13-Cf4diNHv.js";import"./useOutsideClick-CyPXp_NH.js";import"./OverflowMenuItem-6k5kdran.js";import"./useFilterContext-eVZccNjG.js";import"./bucket-0-BPVGxoL3.js";import"./bucket-14-Br7jBy00.js";import"./devtools-BYTU908B.js";import"./TableRow-DpROseOI.js";import"./bucket-1-bKXnQraS.js";import"./TableToolbar-CqEl6zxh.js";import"./index-Bo2paA6_.js";import"./ErrorEmptyState-CmrgEayk.js";import"./EmptyState-8hsF-QY9.js";import"./EmptyStateV2.deprecated-BkZ-C1N-.js";import"./Link-DbpUCrpK.js";import"./ErrorIllustration-BH-HImzj.js";import"./useId-BAfT9MjJ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-B4lhXCHd.js";import"./NoDataIllustration-DisLshay.js";import"./NotFoundEmptyState-HgaMVIcv.js";import"./NotFoundIllustration-CEZMgiBE.js";import"./index.esm-CvkSHfno.js";import"./usePreviousValue-CKJ1yiIZ.js";import"./useResizeObserver-CDwlcMV3.js";import"./useIsomorphicEffect-Cw3FTHuQ.js";import"./getFocusableElements-BW7cf991.js";import"./index-K6A31R8p.js";import"./props-helper-CTf-A1om.js";import"./useClickOutside-BCXEJHNU.js";import"./AccordionItem-CfOaNMpL.js";import"./Checkbox-9HmCQOfr.js";import"./DatePicker-Ca5kmlmY.js";import"./FormGroup-CcdXe4xs.js";import"./MultiSelect-C4X_Ukqa.js";import"./NumberInput-B79ztScf.js";import"./useNormalizedInputProps-CZEJUS1l.js";import"./documentLang-E105Y72C.js";import"./bucket-16-BLpQeLrN.js";import"./RadioButton-C6Qt3oJ6.js";import"./RadioButtonGroup-SOVGOyBi.js";import"./usePrefersReducedMotion-R7cmgpMo.js";import"./usePresence-CYrAcx58.js";import"./ActionSet-jRuZbZ14.js";import"./useWindowResize-LvSsTceT.js";import"./TagSet-Bs6O-vdy.js";import"./Tag-WKxTmgqK.js";import"./DefinitionTooltip-PpE6ZZSr.js";import"./DismissibleTag-BfWHynv2.js";import"./usePortalTarget-Dhd837UD.js";import"./OperationalTag-BxaTSISh.js";import"./SkeletonText-Cl4iQ8tB.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CDcLOcOn.js";import"./TableSelectRow-kgpT8G2R.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,zo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const Io=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,Io as __namedExportsOrder,zo as default};
