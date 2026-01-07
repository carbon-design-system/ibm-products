import{e as l,S as C,r as E,u as H}from"./iframe-M250dlZ7.js";import{s as T,m as D,E as S}from"./_storybook-styles-BeXQZZNE.js";import{D as z}from"./DatagridActions-Cs_e9OF1.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-B1gdrojT.js";import{u as f}from"./useExpandedRow-DTrfvFbC.js";import{u as R}from"./useSelectRows-Dkl84ldT.js";import{E as N}from"./bucket-6-lgQV42Us.js";import{T as G}from"./bucket-18-CvvInEBI.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-DdFQ7vqK.js";import"./index-9vrWmNr9.js";import"./bucket-7-uQ_GaLvg.js";import"./bucket-19-DknlKHKo.js";import"./ComposedModal-NhzZSPcA.js";import"./index-DIpZewyL.js";import"./LayerContext-yVVOGJcN.js";import"./clamp--00YEiB8.js";import"./ButtonSet-xXgFBzlD.js";import"./InlineLoading-BTbHugNz.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CKH4l4Wk.js";import"./Text-WGIoVIHq.js";import"./utils-Cr2j69g5.js";import"./TableToolbarSearch-Hykln28U.js";import"./wrapComponent-CksRYI9u.js";import"./Search-6U7RTJ9K.js";import"./FormContext-DAiGNY-F.js";import"./bucket-15-it1l9wVj.js";import"./Dropdown-YWHpcb_t.js";import"./index-Dty-NTvK.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-C9dF-U5T.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-wc7p_7-F.js";import"./useControllableState-DI2oM-1V.js";import"./useAttachedMenu-BO_Sauze.js";import"./index-A2le3gOJ.js";import"./index-C5YnOgUR.js";import"./bucket-13-Dpze7R2Q.js";import"./useOutsideClick-BG0etdOe.js";import"./OverflowMenuItem-C2SiIYIF.js";import"./useFilterContext-CQ78D9fl.js";import"./useIsomorphicEffect-CteZryyo.js";import"./bucket-0-CoRfPH3v.js";import"./bucket-14-BjdNefFw.js";import"./devtools-COwjwxDB.js";import"./TableRow-jnk_iZex.js";import"./bucket-1-CPtbOj2G.js";import"./TableToolbar-9eANy881.js";import"./index-BBPQGpGA.js";import"./ErrorEmptyState-DHU0diFc.js";import"./EmptyState-Cb_c6Dzz.js";import"./EmptyStateV2.deprecated-DiCE_tgh.js";import"./Link-DWMytJHh.js";import"./ErrorIllustration-BPQ1dNKd.js";import"./useId-BE7FQ0sr.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CstBa7WC.js";import"./NoDataIllustration-DpEiyIDA.js";import"./NotFoundEmptyState-B7RnBOe0.js";import"./NotFoundIllustration-CyPLgl54.js";import"./index.esm-PrVTv73j.js";import"./usePreviousValue-anNy5oWh.js";import"./useResizeObserver-D0iJlayU.js";import"./getFocusableElements-BW7cf991.js";import"./index-DMCzv8ZX.js";import"./props-helper-dY4jIZff.js";import"./useClickOutside-CHK7KnRf.js";import"./AccordionItem-BXjICIGf.js";import"./Checkbox-DS3cJcH0.js";import"./DatePicker-CkmRA_kV.js";import"./documentLang-E105Y72C.js";import"./FormGroup-YykFWvj4.js";import"./MultiSelect-DMdYwTxx.js";import"./NumberInput-DfaWyxjT.js";import"./bucket-17-C2cgme8y.js";import"./RadioButton-D0PFyiSS.js";import"./RadioButtonGroup-CbtBYzTv.js";import"./usePrefersReducedMotion-C9Tl-M7o.js";import"./usePresence-DxxTpaOZ.js";import"./ActionSet-Cb0JBCsM.js";import"./useWindowResize-CCQK6Hf8.js";import"./TagSet-BGK3YLQ6.js";import"./Tag-D-twCAcA.js";import"./DefinitionTooltip-bvK4A7-l.js";import"./DismissibleTag-Bwbv5xbp.js";import"./usePortalTarget-CSdiTDgO.js";import"./OperationalTag-CbgxlcEF.js";import"./SkeletonText-DBp1MC2t.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-CJpzui2v.js";import"./TableSelectRow-CjSA3Rf7.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
//# sourceMappingURL=AiLabel.stories-pBGODrWH.js.map
