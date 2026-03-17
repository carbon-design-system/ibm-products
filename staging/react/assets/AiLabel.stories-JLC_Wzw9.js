var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-D0YM396L.js";import{s as z,m as I,E as b}from"./_storybook-styles-BxFn0XYC.js";import{D as y}from"./DatagridActions-BFWkbGpN.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-DEP-QSpX.js";import{u as N}from"./useExpandedRow-C3iRGg0X.js";import{u as G}from"./useSelectRows-XidYJf8N.js";import{E as P}from"./bucket-6-DBflVpa1.js";import{T as _}from"./bucket-18-eDbIoxck.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-XrGoRIHr.js";import"./index-B9Pud9qF.js";import"./index-sOaB66XM.js";import"./bucket-19-DWCiPMcf.js";import"./bucket-7-BCBSl9It.js";import"./ComposedModal-CdFJkbFc.js";import"./index-DsE5wpZZ.js";import"./LayerContext-fYtJ8nRu.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-C8U0UJ24.js";import"./InlineLoading-BxEXu-mD.js";import"./mergeRefs-BH0-8uDG.js";import"./usePresenceContext-BJIVOvN0.js";import"./Text-B5bUU6xC.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-DGGJHyeS.js";import"./utils-Cdf1ZlrJ.js";import"./TableToolbarSearch-CtfQFgbX.js";import"./wrapComponent-gTpjNDoB.js";import"./Search-BgRauPlC.js";import"./FormContext-CRsJl1v9.js";import"./bucket-16-B7-jv19o.js";import"./Dropdown-Bgj29EwO.js";import"./index-0x_rhNbx.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-r6tM1s5M.js";import"./bucket-20-CVsPViOq.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-CmpkzDcK.js";import"./useControllableState-DyIY710x.js";import"./useAttachedMenu-Cv__XPlW.js";import"./environment-DRRHKtsv.js";import"./index-Cb3njjzi.js";import"./index-DOD2SiBE.js";import"./bucket-13-BO6lA4tP.js";import"./useOutsideClick-CsUK_QrA.js";import"./OverflowMenuItem-CSCInmGD.js";import"./useFilterContext-C6pk3Eq5.js";import"./useIsomorphicEffect-TepxVVef.js";import"./bucket-0-CdeN0Amv.js";import"./bucket-15-C8IqoWAd.js";import"./devtools-CeMp0EuZ.js";import"./TableRow-4APJjtYd.js";import"./bucket-1-vjyamaxx.js";import"./TableToolbar-gFlXPrf-.js";import"./index-Demuok-K.js";import"./ErrorEmptyState-D4bluKvF.js";import"./EmptyState-CJZ5iPQC.js";import"./EmptyStateV2.deprecated-BaeGkrHR.js";import"./Link-hAWk4UjX.js";import"./ErrorIllustration-BLL0MN5p.js";import"./useId-C8GwI6Y0.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cv-WQjou.js";import"./NoDataIllustration-ClYiRGgh.js";import"./NotFoundEmptyState-DDowPQls.js";import"./NotFoundIllustration-B7Hero4C.js";import"./index.esm-D79quNzD.js";import"./usePreviousValue-fX8N9WeB.js";import"./useResizeObserver-DlF2t09E.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BBr64BdR.js";import"./props-helper-pSJPf7kN.js";import"./useClickOutside-BQ3qo9kK.js";import"./AccordionItem-CQ_PyidO.js";import"./Checkbox-BeypPpH4.js";import"./DatePicker-p0ADPQbx.js";import"./documentLang-E105Y72C.js";import"./FormGroup-C33vSMRL.js";import"./MultiSelect-qTQm25UJ.js";import"./NumberInput-BMqnSDi3.js";import"./bucket-17-BIvN5-58.js";import"./RadioButton-BBkdPJXc.js";import"./RadioButtonGroup-CZDaqtyu.js";import"./usePrefersReducedMotion-DuVViLPi.js";import"./usePresence-vDeLheBe.js";import"./ActionSet-CQ7juXA1.js";import"./useWindowResize-HgqZyqR6.js";import"./TagSet-CozPd-jj.js";import"./Tag-HhuYZmna.js";import"./DefinitionTooltip-Ty8Szx8E.js";import"./DismissibleTag-CgY4wkFP.js";import"./usePortalTarget-DdXPgdsp.js";import"./OperationalTag-BjLKvNIg.js";import"./SkeletonText-DVTT-gmP.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-Uk4eyFtu.js";import"./TableSelectRow-z2xKTfWv.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-JLC_Wzw9.js.map
