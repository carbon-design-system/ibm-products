import{e as l,S as C,r as E,u as H}from"./iframe-HX3uP5rF.js";import{s as T,m as D,E as S}from"./_storybook-styles-Du4BBk2J.js";import{D as z}from"./DatagridActions-XzBSGeGZ.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-D2Epou2Y.js";import{u as f}from"./useExpandedRow-CeRmYANu.js";import{u as R}from"./useSelectRows-DMez4sq9.js";import{E as N}from"./bucket-6-CUA0OKoV.js";import{T as G}from"./bucket-17-D_IiUgFQ.js";import"./bucket-2-B3fTYnsS.js";import"./index-BzsQW5qN.js";import"./bucket-18-KiX7pVM7.js";import"./bucket-7-C0o2ku32.js";import"./ComposedModal-Perag1HR.js";import"./index-BEhuL1MR.js";import"./index-DaYmMccZ.js";import"./LayerContext-ukaL0H1D.js";import"./clamp--00YEiB8.js";import"./ButtonSet-oAnUf3Md.js";import"./InlineLoading-BBzqH8Wg.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DuBvmbL6.js";import"./Text-DBtsZOEn.js";import"./utils-CeAP7Zfj.js";import"./TableToolbarSearch-CETVY211.js";import"./wrapComponent-C_MeYdc2.js";import"./Search-D0434wgb.js";import"./FormContext-D8zI7Kke.js";import"./bucket-15-CLxl_Own.js";import"./Dropdown-D-M7Pgrf.js";import"./index-7Qnefi6R.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-DB0RW10U.js";import"./MenuItem-BIFmRzEC.js";import"./useControllableState-D00pB8BY.js";import"./useAttachedMenu-cmTbMPST.js";import"./index-DFLvviES.js";import"./index-BDcd2g_t.js";import"./bucket-12-CwLSzf2K.js";import"./useOutsideClick-BYUuh41p.js";import"./OverflowMenuItem-Cj0lizFz.js";import"./useFilterContext-CErJQtux.js";import"./bucket-0-BYnxl-xo.js";import"./bucket-14-B4uFnJJd.js";import"./devtools-CNhWTRl7.js";import"./TableRow-ko7y-xlb.js";import"./bucket-1-CV829xS4.js";import"./TableToolbar-Pu1Eqx1y.js";import"./index-CmB6Vns6.js";import"./ErrorEmptyState-DvxCoRo3.js";import"./EmptyState-BzREjhfS.js";import"./props-helper-BQIeo-gE.js";import"./Link-Cfrp7F3L.js";import"./EmptyStateV2-BDi3BN_s.js";import"./ErrorIllustration-guoCGqLk.js";import"./useId-C7snKMrq.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-C4BRRVHZ.js";import"./NoDataIllustration-7eha6Pth.js";import"./NotFoundEmptyState-DlFX0nxF.js";import"./NotFoundIllustration-VMqpsUl5.js";import"./index.esm-Dsa8IpI1.js";import"./usePreviousValue-2yHnmDm2.js";import"./useResizeObserver-Clxhuppz.js";import"./useIsomorphicEffect-DVsAn1Kk.js";import"./getFocusableElements-BW7cf991.js";import"./index-D2lKpEPM.js";import"./useClickOutside-RpRJvgtI.js";import"./AccordionItem-C_AAt3Sd.js";import"./Checkbox-D4xbVJpr.js";import"./DatePicker-CI1fuGEG.js";import"./FormGroup-Dngd2jIR.js";import"./MultiSelect-Gk6HO01T.js";import"./NumberInput-xthfq6y8.js";import"./useNormalizedInputProps-tAk74Vxi.js";import"./documentLang-E105Y72C.js";import"./bucket-16-oQ1bIA4Q.js";import"./RadioButton-B1Rnt81N.js";import"./RadioButtonGroup-D9vhiaAv.js";import"./usePrefersReducedMotion-oVmD-23-.js";import"./usePresence-BOdxUfig.js";import"./ActionSet-80ARld3N.js";import"./useWindowResize-B0CqaTIb.js";import"./TagSet-DYePRGHW.js";import"./Tag-BpNcgXsJ.js";import"./DefinitionTooltip-CRzfjG3b.js";import"./DismissibleTag-B8B-ymSl.js";import"./usePortalTarget-CISdp02a.js";import"./OperationalTag-BClxn1Ta.js";import"./SkeletonText-ChBAiwSl.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-DROxy2D4.js";import"./TableSelectRow-DPlxtiiw.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
