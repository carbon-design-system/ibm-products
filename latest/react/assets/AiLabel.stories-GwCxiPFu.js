var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-LiaStyBs.js";import{s as z,m as I,E as b}from"./_storybook-styles-X5-Ocyog.js";import{D as y}from"./DatagridActions-CRj8UUpr.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Ds3RzIxi.js";import{u as N}from"./useExpandedRow-CaGoJPYV.js";import{u as G}from"./useSelectRows-BwLFmjXN.js";import{E as P}from"./bucket-6-kYy7D16T.js";import{T as _}from"./bucket-18-Zs2TZmFD.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CvyymruN.js";import"./index-4--JecgM.js";import"./index-BVtb6FYG.js";import"./bucket-19-B-wN5ejR.js";import"./bucket-7-f1_emcWj.js";import"./ComposedModal-75vYZ7oq.js";import"./index-B9Zh2qAg.js";import"./LayerContext-Cg_WEBvk.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-C_7Ys9Uu.js";import"./InlineLoading-Da6JDjkJ.js";import"./mergeRefs-BH0-8uDG.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-DA3E1wc8.js";import"./Text-CexaJYDP.js";import"./utils-_nXq7M9N.js";import"./TableToolbarSearch-Buep7Nyy.js";import"./wrapComponent-_sXs07Ar.js";import"./Search-C91_18w-.js";import"./FormContext-nVLDpaU3.js";import"./bucket-15-BYmdFG7n.js";import"./Dropdown-Bkdo5nJw.js";import"./index-DOxiW0Es.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-_C0ZGaZw.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-C-MCSwx-.js";import"./useControllableState-DbUlKvzw.js";import"./useAttachedMenu-DPXvWdxJ.js";import"./environment-DRRHKtsv.js";import"./index-DM1lKnXz.js";import"./index-krU3NIw9.js";import"./bucket-13-BmtSAaYC.js";import"./useOutsideClick-DfrADdkp.js";import"./OverflowMenuItem-Bg6gtY33.js";import"./useFilterContext-DwS5rBrT.js";import"./useIsomorphicEffect-DAk8_5ES.js";import"./bucket-0-Cgu_CioR.js";import"./devtools-CUjvjodF.js";import"./TableRow-DFkLvb9L.js";import"./bucket-1-BUo40C5c.js";import"./TableToolbar-Kyjg0LnE.js";import"./index-CE4j8fAC.js";import"./ErrorEmptyState-CFsB9zQB.js";import"./EmptyState-DwxAjOaS.js";import"./EmptyStateV2.deprecated-CkeZ0stL.js";import"./Link-DjfPrp2-.js";import"./ErrorIllustration-BGTJbIjL.js";import"./useId-Ot11TkSk.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BdTbLK8A.js";import"./NoDataIllustration-BldMLTTC.js";import"./NotFoundEmptyState-D2dR4Fry.js";import"./NotFoundIllustration-C2L-Rmcs.js";import"./index.esm-DcU8uWQZ.js";import"./usePreviousValue-D7gue4nV.js";import"./useResizeObserver-VSpjG3EC.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D-KFmUce.js";import"./props-helper-BjdYyuO_.js";import"./useClickOutside-cI5lq6Qk.js";import"./AccordionItem-aRtwn8aw.js";import"./Checkbox-rx6HGWZq.js";import"./DatePicker-DpYfDFBN.js";import"./documentLang-E105Y72C.js";import"./FormGroup-CjwI_7Hs.js";import"./MultiSelect-DhOyh4gQ.js";import"./NumberInput-Oez7I6Kc.js";import"./bucket-17-BMdERR9P.js";import"./RadioButton-CzBD7vee.js";import"./RadioButtonGroup-Dxl-Sc9y.js";import"./usePrefersReducedMotion-DbbjPPrU.js";import"./usePresence-C8LCYL8t.js";import"./ActionSet-CSFjceeU.js";import"./useWindowResize-D-7rIa0c.js";import"./TagSet-DTx2UZg3.js";import"./Tag-CTKCPFlt.js";import"./DefinitionTooltip-Qd5lxvh4.js";import"./DismissibleTag-D0B_d-j7.js";import"./usePortalTarget-BfnCHncQ.js";import"./OperationalTag-BdQDQO1K.js";import"./SkeletonText-BL3QqUnU.js";import"./bucket-16-B705s3uU.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-D1a3zwF9.js";import"./TableSelectRow-B4jkQICx.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-GwCxiPFu.js.map
