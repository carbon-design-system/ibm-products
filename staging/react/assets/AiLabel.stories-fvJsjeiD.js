var E=Object.defineProperty;var i=(o,r)=>E(o,"name",{value:r,configurable:!0});import{e as p,S as H,r as T,u as D}from"./iframe-DgruYanb.js";import{s as z,m as I,E as b}from"./_storybook-styles-CLOQV3T2.js";import{D as y}from"./DatagridActions-JylF7Phf.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as h,u as f,a as R}from"./useDatagrid-CdRvW9Fb.js";import{u as N}from"./useExpandedRow-BeyMz-M-.js";import{u as G}from"./useSelectRows-kJevw6Ur.js";import{E as P}from"./bucket-6-BPpGHdnV.js";import{T as _}from"./bucket-19-CGApZllR.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DjMc9QmT.js";import"./index-xD4Xpd71.js";import"./index-BsYj2UP_.js";import"./bucket-7-BaAiWyCS.js";import"./bucket-20-DHjQwcsG.js";import"./MenuItem-Cr-MvNNh.js";import"./Text-D1lCafHM.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DVWyH_8U.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D9nZ2lYi.js";import"./ComposedModal-NRx_kf66.js";import"./utils-CA4RKgu6.js";import"./mergeRefs-BH0-8uDG.js";import"./index-lUPiKPy6.js";import"./LayerContext-_FEItnCz.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-Cl_8Rmh6.js";import"./InlineLoading-BL7zZaGk.js";import"./ButtonSet-CbbT0T6N.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CTeM4Oek.js";import"./OverflowMenuItem-KM0pxpoo.js";import"./TableToolbarSearch-ZoqRDnOE.js";import"./wrapComponent-CXI96JQ8.js";import"./Search-Ds_vqIl7.js";import"./FormContext-CKm6c-rM.js";import"./bucket-16-BhrlQ6ck.js";import"./index-B911w2zo.js";import"./bucket-13-DzNOrorl.js";import"./useOutsideClick-DZy5JJee.js";import"./Dropdown-B36DlBEE.js";import"./downshift.esm-CB3unjNa.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-CeKYoSNT.js";import"./index-Dpo7Ixdc.js";import"./useFilterContext-Cw6zMaj5.js";import"./useIsomorphicEffect-B6QIctlI.js";import"./bucket-0-DDPBpPhi.js";import"./bucket-15-D7IBYmjj.js";import"./devtools-CW8YVWZC.js";import"./TableRow-0_c8EbLQ.js";import"./bucket-1-BZJ1OccQ.js";import"./TableToolbar-DqNkzvNy.js";import"./index-Dnru4M6s.js";import"./ErrorEmptyState-CEReqF-e.js";import"./EmptyState-VZfftYMu.js";import"./EmptyStateV2.deprecated-CBfuZFEO.js";import"./Link-DjX-mWYc.js";import"./ErrorIllustration-Dv09fOxJ.js";import"./useId-DNBOHGwI.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BtnA130i.js";import"./NoDataIllustration-Di9ABrYE.js";import"./NotFoundEmptyState-DQJ6eodu.js";import"./NotFoundIllustration-DSBRYBPA.js";import"./index.esm-CQal-Oij.js";import"./usePreviousValue-DCRYaoGC.js";import"./useResizeObserver-CP0wa2Cj.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-g4e2t4sN.js";import"./props-helper-BEn8ZzZM.js";import"./useClickOutside-ChZJRKRx.js";import"./AccordionItem-DP_m4ane.js";import"./Checkbox-CmV_WtVY.js";import"./RadioButton-CapiPQZS.js";import"./DatePicker-DGISatI_.js";import"./FormGroup-DQ8ZBEmS.js";import"./MultiSelect-BzYwdSZe.js";import"./NumberInput-DIMtnGbt.js";import"./bucket-17-Cm4ex8DU.js";import"./RadioButtonGroup-D8mz7lI_.js";import"./usePrefersReducedMotion-DHhj9JSG.js";import"./usePresence-C5aSJKGL.js";import"./ActionSet-6aOKSBVg.js";import"./useWindowResize-DsaT-G7v.js";import"./TagSet-BV5fiLXI.js";import"./Tag-BN75k8hg.js";import"./DefinitionTooltip-BB56GqSK.js";import"./DismissibleTag-CuIkJMCF.js";import"./usePortalTarget-BW9a6DBL.js";import"./OperationalTag-BBv0NXlo.js";import"./SkeletonText-CeZkTe1Z.js";import"./getNodeTextContent-CjFansOq.js";import"./useFocusRowExpander-itiuj0Yt.js";import"./TableSelectRow-XBjsXogK.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,Po={title:"Deprecated/Datagrid/AILabel",component:h,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:z,docs:{page:i(()=>p.createElement(H,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-fvJsjeiD.js.map
