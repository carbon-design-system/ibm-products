var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-DU3fWsEq.js";import{s as z,m as I,E as b}from"./_storybook-styles-BlvBJy88.js";import{D as y}from"./DatagridActions-BjkrSSLY.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Bnv9TsVu.js";import{u as N}from"./useExpandedRow-ysVrV9XX.js";import{u as G}from"./useSelectRows-Dmuw5kzu.js";import{E as P}from"./bucket-6-CYCyVP6N.js";import{T as _}from"./bucket-19-Be1_xXYE.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-D0gel0uj.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-7-Yi-B9hmh.js";import"./bucket-20-CmByzEsl.js";import"./MenuItem-CEv7K7e7.js";import"./Text-BMNkTgzs.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-KXj_FgJe.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DmxEIS6S.js";import"./ComposedModal-DNlEtFPF.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BiE6xxiG.js";import"./LayerContext-Clj7bd5Z.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-DE6Cjo8X.js";import"./InlineLoading-DCLgadCg.js";import"./ButtonSet-TigcdyOE.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-bGeByaic.js";import"./OverflowMenuItem-CtcnMT75.js";import"./TableToolbarSearch-Bgf_CpGp.js";import"./wrapComponent-MlWw9uxf.js";import"./Search-DQ49nJq_.js";import"./FormContext-DWfhBwkE.js";import"./bucket-16-BLwVjLVi.js";import"./index-CEG-E_Tw.js";import"./bucket-13-BWXQHhec.js";import"./useOutsideClick-CRPvwvmN.js";import"./Dropdown-DYfcOZ8h.js";import"./downshift.esm-D4fflNyB.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./index-BsKVZa7c.js";import"./useFilterContext-DKjilMIt.js";import"./useIsomorphicEffect-rJHRE8hL.js";import"./bucket-0-DJtoSbW8.js";import"./bucket-15-BC--RWeH.js";import"./devtools-D1O-44XN.js";import"./TableRow-DrBHq3_g.js";import"./bucket-1-CetRUY_f.js";import"./TableToolbar-DL_eqmOE.js";import"./index-CzJj9-T5.js";import"./ErrorEmptyState-VH96aW0k.js";import"./EmptyState-kTYpcu8v.js";import"./EmptyStateV2.deprecated-3YcwFgGj.js";import"./Link-L5rA4zHd.js";import"./ErrorIllustration-Dc_h-mvP.js";import"./useId-DL4LrsM7.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cgy0Ac0a.js";import"./NoDataIllustration-BB7B6ow3.js";import"./NotFoundEmptyState-jPIiXi80.js";import"./NotFoundIllustration-CCS-ZEog.js";import"./index.esm-ESHtQFbu.js";import"./usePreviousValue-Dy_YEFje.js";import"./useResizeObserver-IK2T-B-k.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-CHJSsczR.js";import"./props-helper-D-MGgUNp.js";import"./useClickOutside-HC0RQlWu.js";import"./AccordionItem-BY0R0ZbP.js";import"./Checkbox-DPhEN4jN.js";import"./RadioButton-aVRfOY8G.js";import"./DatePicker-BMolIoKN.js";import"./FormGroup-DzyROZ99.js";import"./MultiSelect-3hMD_0IK.js";import"./NumberInput-Cpqim228.js";import"./bucket-17-0E7988s6.js";import"./RadioButtonGroup-9ebgYWnW.js";import"./usePrefersReducedMotion-Bjmq5o4u.js";import"./usePresence-DJOw8O-I.js";import"./ActionSet-DoeQiy-Y.js";import"./useWindowResize-DQAgZkOv.js";import"./TagSet-DhYsJrcH.js";import"./Tag-BUPZHD8e.js";import"./DefinitionTooltip-DV7wJZxM.js";import"./DismissibleTag-p8oU3cF1.js";import"./usePortalTarget-aX8U2yX0.js";import"./OperationalTag-9BRu9g2h.js";import"./SkeletonText-8IZR3vl2.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-CELkR4At.js";import"./TableSelectRow-DlHSfLi2.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Go={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const Po=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,Po as __namedExportsOrder,Go as default};
//# sourceMappingURL=AiLabel.stories-Dbml9ctk.js.map
