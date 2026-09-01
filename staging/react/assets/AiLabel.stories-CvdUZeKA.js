var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{R as p,ag as H,r as T,a as D}from"./iframe-BJEr8hIF.js";import{s as z,m as I,E as b}from"./_storybook-styles-BGANrhCR.js";import{D as y}from"./DatagridActions-DnRM1ZWn.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-D_adZgb-.js";import{u as N}from"./useExpandedRow-BAZYCsh2.js";import{u as G}from"./useSelectRows-XrhySlpY.js";import{a as P}from"./bucket-6-B7bAl6HI.js";import{T as _}from"./bucket-19-DGUM_j3B.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-C0xhMaii.js";import"./index-Bq9BqBSK.js";import"./index-2N0MzFsY.js";import"./bucket-20-pb4ZJRbV.js";import"./bucket-7-CorJFDPj.js";import"./MenuItem-Dl8KUyxG.js";import"./Text-BgS7oIBt.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CDXIHmy5.js";import"./environment-DRRHKtsv.js";import"./useControllableState-1TbgSIA5.js";import"./ComposedModal-BwPfIwbt.js";import"./mergeRefs-BH0-8uDG.js";import"./index-DDH51Mds.js";import"./LayerContext-CLnoCJoE.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-2oqSTPoF.js";import"./InlineLoading-BacyH5P8.js";import"./ButtonSet-B8sCMFQ7.js";import"./wrapFocus-BE4Fbj_7.js";import"./OverflowMenuItem-BzjAEGOA.js";import"./TableToolbarSearch-DerdSMGP.js";import"./wrapComponent-BIZLrif8.js";import"./Search-DbCKfOgU.js";import"./FormContext-C7vrrci6.js";import"./bucket-16-B2W10nSe.js";import"./TableToolbar-A9uazdY_.js";import"./bucket-0-18QjhVRW.js";import"./TableRow-BHGma4WH.js";import"./bucket-1-i0niiLMV.js";import"./index-9JBdAywC.js";import"./index-CPA5eF8D.js";import"./bucket-14-MsfSSSC3.js";import"./useOutsideClick-IZt9CdHd.js";import"./Dropdown-SaEbiK--.js";import"./useNormalizedInputProps-C4iCCUIy.js";import"./bucket-21-Bo-VTMHN.js";import"./downshift.esm-DuOguGWc.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DR6-pnnu.js";import"./useFilterContext-B4jy0FDl.js";import"./useIsomorphicEffect-BxVN6Xbk.js";import"./bucket-15-cMxfwZKM.js";import"./devtools-DIPHceHz.js";import"./ErrorEmptyState-C4eidnn1.js";import"./EmptyState-CKkqVXz3.js";import"./EmptyStateV2.deprecated-DgX6dO4l.js";import"./Link-CuQCSuxA.js";import"./ErrorIllustration-DJ75RVWA.js";import"./useId-lIQ3SZl5.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BmIpB2iG.js";import"./NoDataIllustration-By0GuNVa.js";import"./NotFoundEmptyState-8fMV3gtm.js";import"./NotFoundIllustration-j6qDUGXu.js";import"./index.esm-DM14xHaK.js";import"./usePreviousValue-wWfY7Tw5.js";import"./useResizeObserver-BCljDAVT.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BSqJd56P.js";import"./props-helper-But8QIhC.js";import"./useClickOutside-C60NH9eX.js";import"./AccordionItem-DVWqEco7.js";import"./Checkbox-ChTWSiy4.js";import"./hasHelperText-CcJ_VphT.js";import"./RadioButton-B-pJlsD4.js";import"./DatePicker-Db4KakN0.js";import"./FormGroup-Dvn1c9yi.js";import"./MultiSelect-B0thiY3X.js";import"./NumberInput-BWziubCu.js";import"./bucket-18-D8j4TCzx.js";import"./RadioButtonGroup-CCRf1brA.js";import"./index-DddStjgz.js";import"./usePrefersReducedMotion-Dhlp7W2a.js";import"./usePresence-OD4oxpTl.js";import"./ActionSet-C7zco3Ea.js";import"./useWindowResize-BsqUtPBj.js";import"./TagSet-EM_3lkLR.js";import"./Tag-Cjc0Ltuh.js";import"./DefinitionTooltip-CsT7oCIj.js";import"./DismissibleTag-gSLmNpdk.js";import"./usePortalTarget-D9cwg6Jm.js";import"./OperationalTag-yhbdaWLO.js";import"./SkeletonText-BUd9mzjX.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-Vf6kqsqb.js";import"./TableSelectRow-BBPKNMes.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...l.parameters?.docs?.source}}};const Bo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{t as AILabelColumnHeaderStory,l as AILabelRowSelectionAndExpandStory,s as AILabelRowSelectionStory,n as AILabelRowStory,a as AILabelSortableColumnHeaderStory,Bo as __namedExportsOrder,_o as default};
//# sourceMappingURL=AiLabel.stories-CvdUZeKA.js.map
