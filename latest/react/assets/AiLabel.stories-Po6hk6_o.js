var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ai as H,r as T,a as D}from"./iframe-5jkWRNEh.js";import{s as z,m as I,E as b}from"./_storybook-styles-CU_Z9zmL.js";import{D as y}from"./DatagridActions-Dg_GymMK.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-Bdosa7Fu.js";import{u as N}from"./useExpandedRow-DEWYOZ0R.js";import{u as G}from"./useSelectRows-DVF-ZBNG.js";import{a as P}from"./bucket-6-d10IvogL.js";import{T as _}from"./bucket-20-BYcDF6hY.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-e2HQl4bD.js";import"./index-gOFau5CO.js";import"./index-Cw1uA__0.js";import"./bucket-8-DNalHNjE.js";import"./bucket-21-DYJF9ey-.js";import"./MenuItem-1YYX5TLl.js";import"./Text-B_fCy4X0.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CUhwDBUE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRKctoUh.js";import"./ComposedModal-CHJ0hYAS.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DNgIlI9v.js";import"./LayerContext-td5tKO2Z.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-Dy_RFvoV.js";import"./InlineLoading-DD3bClkX.js";import"./bucket-7-C70zxdZ0.js";import"./ButtonSet-DKzXdsrO.js";import"./wrapFocus-BkgdcWXM.js";import"./OverflowMenuItem-DuIk-ESZ.js";import"./TableToolbarSearch-C_6oj4mf.js";import"./wrapComponent-CdGmuyGU.js";import"./Search-hh09MH46.js";import"./FormContext-BYFWq4QJ.js";import"./bucket-17-BdkGQe__.js";import"./TableToolbar-Dxc4veec.js";import"./bucket-0-DvrtaWUS.js";import"./TableRow-CkTDzieA.js";import"./bucket-1-B56AecfN.js";import"./index-B8j0J2OO.js";import"./index-BaoBDlWB.js";import"./bucket-14-BW81CKi4.js";import"./useOutsideClick-dijrvaOf.js";import"./Dropdown-DpUij69A.js";import"./downshift.esm-DC1zVHfe.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-iz9xzucL.js";import"./index-DeURvHk7.js";import"./useFilterContext-BtaoiR5Q.js";import"./useIsomorphicEffect-BX6HdFD7.js";import"./bucket-16-roY3v9A1.js";import"./devtools-DuzngOKQ.js";import"./ErrorEmptyState-xBJpn8tu.js";import"./EmptyState-BXjMeG49.js";import"./EmptyStateV2.deprecated-Br-4fqft.js";import"./Link-B1R8Y2Rj.js";import"./ErrorIllustration-CRo1Vqkn.js";import"./useId-DWD7qQwc.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-D8G1tGe9.js";import"./NoDataIllustration-BAnvpAI2.js";import"./NotFoundEmptyState-Cc7mVNm2.js";import"./NotFoundIllustration-DGXm3WAH.js";import"./index.esm-2ETbwIgG.js";import"./usePreviousValue-VvFEG8mi.js";import"./useResizeObserver-Ckf-AJW1.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./index-9vjhSHcW.js";import"./props-helper-2UI5cvDZ.js";import"./useClickOutside-iBq6tHRG.js";import"./AccordionItem-OG_Z-sA5.js";import"./Checkbox-BmfP8f1v.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-BO8-GGQs.js";import"./DatePicker-Ll8KEKWx.js";import"./FormGroup-C5dJjHAP.js";import"./MultiSelect-CfrW-6uG.js";import"./NumberInput-Be16yLU_.js";import"./bucket-18-DAftz4nV.js";import"./RadioButtonGroup-m-cjKEFj.js";import"./index-CPomTFJB.js";import"./usePrefersReducedMotion-BwaTEFaO.js";import"./usePresence-CMdXzsnx.js";import"./ActionSet-CqKtgRsG.js";import"./useWindowResize-EHlqajIg.js";import"./TagSet-DsOK8SBf.js";import"./Tag-0wVfSisJ.js";import"./DefinitionTooltip--SBxwBU8.js";import"./DismissibleTag-CGvrOtNa.js";import"./usePortalTarget-BJVbcSZv.js";import"./OperationalTag-Bt8LeAyy.js";import"./SkeletonText-XJTyfzut.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-D-7XVRii.js";import"./TableSelectRow-f1EmUImQ.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-Po6hk6_o.js.map
