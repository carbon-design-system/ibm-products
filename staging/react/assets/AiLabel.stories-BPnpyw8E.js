import{e as l,S as C,r as E,u as H}from"./iframe-D7eStwkL.js";import{s as T,m as D,E as S}from"./_storybook-styles-CrIbyvWE.js";import{D as z}from"./DatagridActions-CaHXUpNT.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-BaTG9-YH.js";import{u as f}from"./useExpandedRow-C7Qjt3rv.js";import{u as R}from"./useSelectRows-DmD7T-i0.js";import{E as N}from"./bucket-6-VqTa2pt7.js";import{T as G}from"./bucket-17-D8BvaLsm.js";import"./bucket-2-B5tEtBVG.js";import"./index-DtlUN_qQ.js";import"./bucket-18-BuJkdNpM.js";import"./bucket-7-DwZZBlSx.js";import"./ComposedModal-Dj2JxVd0.js";import"./index-BEhuL1MR.js";import"./index-BwtNW634.js";import"./LayerContext-CYpz3aOG.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DFPcwcVc.js";import"./InlineLoading-D_3KuMGG.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BaNPWWSx.js";import"./Text-CX3SBrnk.js";import"./utils-DEi-HpEF.js";import"./TableToolbarSearch-GvzW7hS3.js";import"./wrapComponent-DyImDxEd.js";import"./Search-DgqxHkqe.js";import"./FormContext-DZrds_Pd.js";import"./bucket-15-CglRR68z.js";import"./Dropdown-CrE-YZp3.js";import"./index-7ZA3mLov.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-CU-7ragV.js";import"./MenuItem-DyqZFAAw.js";import"./useControllableState-Nc8tGw_d.js";import"./useAttachedMenu-B_FBdv8W.js";import"./index-C9AI0Q5Z.js";import"./index-mKbH19hl.js";import"./bucket-12-CmVKm9rs.js";import"./useOutsideClick-C7cVWqUY.js";import"./OverflowMenuItem-UPp1xDAY.js";import"./useFilterContext-CK7Dedg3.js";import"./bucket-0-L01MYrbT.js";import"./bucket-14-Dc70y2tn.js";import"./devtools-Df6KS5y3.js";import"./TableRow-BgdWJQw4.js";import"./bucket-1-Br50AaUq.js";import"./TableToolbar-E8Ueg5WG.js";import"./index-D6e51nWM.js";import"./ErrorEmptyState-CfEhXZwo.js";import"./EmptyState-y4UqLOac.js";import"./EmptyStateV2-BAe4fjrU.js";import"./Link-C9tp-_WB.js";import"./ErrorIllustration-DYxlcaFP.js";import"./useId-Df4HKPCr.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DoR7awrm.js";import"./NoDataIllustration-DyB9Ji-a.js";import"./NotFoundEmptyState-B5TfFXfG.js";import"./NotFoundIllustration-BV8LbgcU.js";import"./index.esm-Bl_iVLFX.js";import"./usePreviousValue-BasY3WUO.js";import"./useResizeObserver-BMrbGDWb.js";import"./useIsomorphicEffect-DXbKZHyj.js";import"./getFocusableElements-BW7cf991.js";import"./index-D-rF9mbQ.js";import"./props-helper-CnDIRZfz.js";import"./useClickOutside-DM83YkYK.js";import"./AccordionItem-DuCHsT_A.js";import"./Checkbox-Bb4PbV8H.js";import"./DatePicker-BsVq3iuW.js";import"./FormGroup-b4GVl1RU.js";import"./MultiSelect-C82-1bLi.js";import"./NumberInput-Df4ifTAi.js";import"./useNormalizedInputProps-OBtWfA41.js";import"./documentLang-E105Y72C.js";import"./bucket-16-B9n8vlra.js";import"./RadioButton-DGTJQI38.js";import"./RadioButtonGroup-dywnGiko.js";import"./usePrefersReducedMotion-DrOjculO.js";import"./usePresence-Dip6Bx8l.js";import"./ActionSet-CudTZLam.js";import"./useWindowResize-VotVidr5.js";import"./TagSet-CcDGL_ZN.js";import"./Tag-DTggSZHJ.js";import"./DefinitionTooltip-8CBhbmfn.js";import"./DismissibleTag-BIGbYbYR.js";import"./usePortalTarget-B_qSnmJh.js";import"./OperationalTag-C9kChyHW.js";import"./SkeletonText-BzbRo6y5.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-BagXOmld.js";import"./TableSelectRow-DxRL5j3I.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const fo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,fo as __namedExportsOrder,yo as default};
