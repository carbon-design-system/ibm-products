var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,aj as H,r as T,a as D}from"./iframe-CxssGfIx.js";import{s as z,m as I,E as b}from"./_storybook-styles-CY_XbBN6.js";import{D as y}from"./DatagridActions-CgxABBkX.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CPr6hJJH.js";import{u as N}from"./useExpandedRow-D0-xkEkL.js";import{u as G}from"./useSelectRows-D-oxpem2.js";import{c as P}from"./bucket-7-OCU3BT4m.js";import{T as _}from"./bucket-20-BIFULJnx.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-H7mQdMWY.js";import"./index-BYZvoV4K.js";import"./index-CWMOMp-b.js";import"./bucket-8-B1DAz3KR.js";import"./bucket-21-CFosKZLf.js";import"./MenuItem-DssvNz9_.js";import"./Text-D6GWTWaE.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bl0tRJ0y.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CnZ18wTe.js";import"./ComposedModal-CrYZI3d3.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DkLxpCKS.js";import"./LayerContext-C_5CgdjX.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-DDVMScul.js";import"./InlineLoading-CDh0dUGZ.js";import"./ButtonSet-DomsQFIK.js";import"./wrapFocus-Ci4BaSO3.js";import"./OverflowMenuItem-CfEf7CF9.js";import"./TableToolbarSearch-D_bUQ7Xw.js";import"./wrapComponent-CrasMR3L.js";import"./Search-CmByNr0i.js";import"./useNoInteractiveChildrenForLabel-CId5oWH1.js";import"./FormContext-BjQFomFa.js";import"./bucket-17-BF5Rew1w.js";import"./TableToolbar-Dx95hot_.js";import"./bucket-0-DBjt2rfb.js";import"./TableRow-DbhO5Wfz.js";import"./bucket-1-CkNy3Kt_.js";import"./index-JCGYHVJY.js";import"./index-ZVx3kOUf.js";import"./bucket-14-CibdW3fr.js";import"./useOutsideClick-DIdZMn1T.js";import"./Dropdown-vv2SUzDh.js";import"./downshift.esm-Cs0y05Iw.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-DzHYawdO.js";import"./index-mxPy_soy.js";import"./useFilterContext-DKyWndV6.js";import"./useIsomorphicEffect-CNSQVNA3.js";import"./bucket-6-DtP55P3U.js";import"./bucket-16-B7VWVqKK.js";import"./devtools-C3HuczRY.js";import"./ErrorEmptyState-DJhLUxX0.js";import"./EmptyState-D84R1H2P.js";import"./EmptyStateV2.deprecated-C_R7dExH.js";import"./Link-Bri_k6I9.js";import"./ErrorIllustration-ChQfgfwx.js";import"./useId-lls9HsYP.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-C7nCatF6.js";import"./NoDataIllustration-BB_Vkjym.js";import"./NotFoundEmptyState-Dk5Dun-E.js";import"./NotFoundIllustration-Xq5COnaz.js";import"./index.esm-CYKOhQ5U.js";import"./usePreviousValue-PTJOBmyx.js";import"./useResizeObserver-Dv8F0UVz.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./index-BPTEhXTz.js";import"./props-helper-D-zb_sYP.js";import"./useClickOutside-DqjUKVSs.js";import"./AccordionItem-BFI8pkI9.js";import"./Checkbox-DO-Rkv4h.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-ZxPDXvKq.js";import"./DatePicker-sR5wovbE.js";import"./FormGroup-BOye6MYk.js";import"./MultiSelect-DtaGQKAn.js";import"./NumberInput-B3EFQps3.js";import"./bucket-18-B4TYjtzN.js";import"./RadioButtonGroup-DFNS-6gL.js";import"./index-ij_LfqVK.js";import"./usePrefersReducedMotion-BN97V9sh.js";import"./usePresence-DxGA3Xto.js";import"./ActionSet-XEl64wft.js";import"./useWindowResize-DLSTwAYu.js";import"./TagSet-CDI-WSod.js";import"./Tag-BEJB1CTS.js";import"./DefinitionTooltip-VH7_r5IK.js";import"./DismissibleTag-CUYd2fgz.js";import"./usePortalTarget-CX-Yi4ru.js";import"./OperationalTag-8ibQVkWL.js";import"./SkeletonText-DcEK-pSg.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-diSXsbG8.js";import"./TableSelectRow-B-qGocKo.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,vo={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const ko=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,ko as __namedExportsOrder,vo as default};
//# sourceMappingURL=AiLabel.stories-CpGammUd.js.map
