var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-MbX6O_l3.js";import{s as z,m as I,E as b}from"./_storybook-styles-C0DNqNWm.js";import{D as y}from"./DatagridActions-B7P4ef22.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Blp460ql.js";import{u as N}from"./useExpandedRow-CROq3UgS.js";import{u as G}from"./useSelectRows-BSZowarx.js";import{E as P}from"./bucket-6-ClxjjQ-P.js";import{T as _}from"./bucket-19-CbuYtg5m.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CP-VvrhO.js";import"./index-DZQZPLt9.js";import"./index-BiRNu0WX.js";import"./bucket-7-CbLXh9_4.js";import"./bucket-20-BbNq9mQU.js";import"./MenuItem-CtQhmmc4.js";import"./Text-CGkcXwwU.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B8eiXx33.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8t1Osgo.js";import"./ComposedModal-BgYCvC2-.js";import"./utils-COcQ0-H9.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Dpkiuvbd.js";import"./LayerContext-sXsr9J2X.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-D-pxEH4s.js";import"./InlineLoading-QgPkS09t.js";import"./ButtonSet-BYuDMQ2p.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-BcxHWVRm.js";import"./OverflowMenuItem-0Kk98sHN.js";import"./TableToolbarSearch-As_FoWIn.js";import"./wrapComponent-CbRKB334.js";import"./Search-6H74v4Ei.js";import"./FormContext-B3A0tQKz.js";import"./bucket-16-DGpCezh5.js";import"./index-CwkF1Fqb.js";import"./bucket-13-iTFwt5qR.js";import"./useOutsideClick-Cd3UXw0q.js";import"./Dropdown-wamdCKqu.js";import"./downshift.esm-Bj70pSEP.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-CqWNvZm-.js";import"./index-CwuE8FYM.js";import"./useFilterContext-CzCxI-Ac.js";import"./useIsomorphicEffect-CPUpql7u.js";import"./bucket-0-PGo-UAyK.js";import"./bucket-15-BV1R1XvD.js";import"./devtools-UxvtFMDS.js";import"./TableRow-C5mtkH3l.js";import"./bucket-1-DblwsfGv.js";import"./TableToolbar-BUhmueXs.js";import"./index-BIzQX_SE.js";import"./ErrorEmptyState-dg71Pkx5.js";import"./EmptyState-CJogAyXI.js";import"./EmptyStateV2.deprecated-QsN2RsbY.js";import"./Link-Czy19ou2.js";import"./ErrorIllustration-KDEh2bcn.js";import"./useId-CFU2GwDF.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BOXX_tlM.js";import"./NoDataIllustration-DO8AyjrY.js";import"./NotFoundEmptyState-CIkt7q_4.js";import"./NotFoundIllustration-DH_NLmhk.js";import"./index.esm-B3trnhPe.js";import"./usePreviousValue-mOcrCg9F.js";import"./useResizeObserver-Y69FW7Op.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-59LePvo2.js";import"./props-helper-As6vworV.js";import"./useClickOutside-CKvCYS4r.js";import"./AccordionItem-DMiPpgnV.js";import"./Checkbox-BP9srWZq.js";import"./RadioButton-CVGHaTpZ.js";import"./DatePicker-BzyQcH8a.js";import"./FormGroup-CqnNCeNX.js";import"./MultiSelect-YMX9IcLk.js";import"./NumberInput-ChJb-_Fy.js";import"./bucket-17-Bt7T_EXg.js";import"./RadioButtonGroup-Bl7CVsQh.js";import"./usePrefersReducedMotion-De7iKs09.js";import"./usePresence-B4w5OzNV.js";import"./ActionSet-CYGTKe13.js";import"./useWindowResize-Cn_kgAtd.js";import"./TagSet-D0-NpdlX.js";import"./Tag-CX3zQXmj.js";import"./DefinitionTooltip-B78ETCiz.js";import"./DismissibleTag-PiRX92Yn.js";import"./usePortalTarget-CSEQGbXj.js";import"./OperationalTag-C26nZcU8.js";import"./SkeletonText-Bvw8jmEV.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CmQUKwXH.js";import"./TableSelectRow-CgXa0Tdn.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-jxfdkDCR.js.map
