import{e as l,S as C,r as E,u as H}from"./iframe-DMSo7fNu.js";import{s as T,m as D,E as S}from"./_storybook-styles-BpOvjpfr.js";import{D as z}from"./DatagridActions-B3x6eXSO.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-DfPF5bxg.js";import{u as f}from"./useExpandedRow-BB0IIDE7.js";import{u as R}from"./useSelectRows-BPK8RjC3.js";import{E as N}from"./bucket-6-DMXDSOZz.js";import{T as G}from"./bucket-17-DIH2Yt6y.js";import"./bucket-2-aw6a38Ug.js";import"./index-BkMDkXli.js";import"./bucket-18-NqwZiyr7.js";import"./bucket-7-DTE3iurw.js";import"./ComposedModal-OT4_uwBu.js";import"./index-BEhuL1MR.js";import"./index-_65DErXo.js";import"./LayerContext-DVn4I5BR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-mGwPz82B.js";import"./InlineLoading-BB9NEor7.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-C9KaZbQS.js";import"./Text-Dh2QBwQf.js";import"./utils-CkYnHtpG.js";import"./TableToolbarSearch-p3Z4rvHD.js";import"./wrapComponent-Ww63Most.js";import"./Search-Ck63I16p.js";import"./FormContext-EOTHCOkS.js";import"./bucket-15-BaxoEXEo.js";import"./Dropdown-DMYPv8tR.js";import"./index-CigMzKTM.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-D9iFC4WK.js";import"./MenuItem-3EeEiQgS.js";import"./useControllableState-CChOc1hs.js";import"./useAttachedMenu-DL7ROuXb.js";import"./index-COsD0hq7.js";import"./index-D8xUF5XL.js";import"./bucket-12-BT6xutBI.js";import"./useOutsideClick-D5Q6wfnz.js";import"./OverflowMenuItem-BS43Op2H.js";import"./useFilterContext-Cz4lOa3E.js";import"./bucket-0-B55rfkQc.js";import"./bucket-14-DQCQ8B9u.js";import"./devtools-BJavCYMb.js";import"./TableRow-RFn4w6w2.js";import"./bucket-1-DDKI4-PL.js";import"./TableToolbar-xpz0pFQD.js";import"./index-WXunxWmO.js";import"./ErrorEmptyState-BQf_dpGi.js";import"./EmptyState-B2dbkea7.js";import"./EmptyStateV2-Cg9jQa3R.js";import"./Link-BdXLZ6TX.js";import"./props-helper-CdGlpuWB.js";import"./ErrorIllustration-BxXaoWBT.js";import"./useId-uDqo1bvY.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D2xkBCsx.js";import"./NoDataIllustration-6tc6uhCJ.js";import"./NotFoundEmptyState-Y8HzLjkX.js";import"./NotFoundIllustration-LMXpa8pK.js";import"./index.esm-CZp1nbiG.js";import"./usePreviousValue-DCWj1W1B.js";import"./useResizeObserver-DBjG5WR6.js";import"./useIsomorphicEffect-DTtEIILN.js";import"./getFocusableElements-BW7cf991.js";import"./index-COd7or6r.js";import"./useClickOutside-CAidSw2p.js";import"./AccordionItem-Dr_ROvrb.js";import"./Checkbox-Ct6BjSZ4.js";import"./DatePicker-DM8jDEF4.js";import"./FormGroup-rrCsSmYk.js";import"./MultiSelect-DonrfaUD.js";import"./NumberInput-D0Vn7lWt.js";import"./useNormalizedInputProps-BShytrhy.js";import"./documentLang-E105Y72C.js";import"./bucket-16-vF1hqtDX.js";import"./RadioButton-Bccck1zG.js";import"./RadioButtonGroup-G4t-CenT.js";import"./usePrefersReducedMotion-C0lvOnb6.js";import"./usePresence-BKlO43KP.js";import"./ActionSet-B20GRHRo.js";import"./useWindowResize-biiCItwS.js";import"./TagSet-BKu8SzFZ.js";import"./Tag-D28a0JZP.js";import"./DefinitionTooltip-DJqKdJxI.js";import"./DismissibleTag-BAfTJg1F.js";import"./usePortalTarget-CHvIgtI6.js";import"./OperationalTag-BrXVeuQ3.js";import"./SkeletonText-B22brlck.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-VR3zVvND.js";import"./TableSelectRow-wSp1YrZM.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,yo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
