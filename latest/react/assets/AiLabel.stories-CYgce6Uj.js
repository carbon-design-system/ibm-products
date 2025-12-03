import{e as l,S as C,r as E,u as H}from"./iframe-BpnXlfCj.js";import{s as T,m as D,E as S}from"./_storybook-styles-DokGoEoa.js";import{D as z}from"./DatagridActions-CufL04Lt.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-vr6jWMEZ.js";import{u as f}from"./useExpandedRow-C4qhkU17.js";import{u as R}from"./useSelectRows-DaAkxaMt.js";import{E as N}from"./bucket-6-B_FLEktr.js";import{T as G}from"./bucket-18-Bt5XfLp4.js";import"./bucket-2-DiXr9shK.js";import"./index-DPMY8_9A.js";import"./bucket-7-TKXqELSz.js";import"./bucket-19-n6rjqwPs.js";import"./ComposedModal-Cw0oS8zL.js";import"./index-DRcCnkC0.js";import"./LayerContext-CFAKZEMe.js";import"./clamp--00YEiB8.js";import"./ButtonSet-C7MVPbL1.js";import"./InlineLoading-CWjefk2p.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-B-05VqgP.js";import"./Text-BpAfJDkp.js";import"./utils-DBpcsmaj.js";import"./TableToolbarSearch-5DO05UZi.js";import"./wrapComponent-DdBKfYGP.js";import"./Search-Sdy1hcCL.js";import"./FormContext-B2T6I968.js";import"./bucket-15-DlmcttK6.js";import"./Dropdown-B4sScu1y.js";import"./index-C1jbJtX3.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-Cv_efqzb.js";import"./useControllableState-CvRlaRn1.js";import"./useAttachedMenu-CjUBRJxP.js";import"./index-ChM06sxo.js";import"./index-BgW1FdY9.js";import"./bucket-13-BW8mKYI8.js";import"./useOutsideClick-D6ARJrF8.js";import"./OverflowMenuItem-CPCItbcs.js";import"./useFilterContext-pE2X531k.js";import"./useIsomorphicEffect-DqCel4oz.js";import"./bucket-0-DE0eLhU9.js";import"./bucket-14-pGnYuTZT.js";import"./devtools-ChJlzgtM.js";import"./TableRow-v4m8UBCS.js";import"./bucket-1-DQgXp-J7.js";import"./TableToolbar-BhRbTxn9.js";import"./index-CBLguE03.js";import"./ErrorEmptyState-HlI_alZm.js";import"./EmptyState-VdKhgoYC.js";import"./EmptyStateV2.deprecated-B_4LluuA.js";import"./Link-DVHh8Q_B.js";import"./ErrorIllustration-DvRUJi6u.js";import"./useId-DuMqr9lp.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Clj6rB4-.js";import"./NoDataIllustration-DN0eYdci.js";import"./NotFoundEmptyState-BRkC7HJR.js";import"./NotFoundIllustration-DndXsVCN.js";import"./index.esm-DOeY3VMM.js";import"./usePreviousValue-DCv9d7QT.js";import"./useResizeObserver-1ERxt38-.js";import"./getFocusableElements-BW7cf991.js";import"./index-DZ9GGEG8.js";import"./props-helper-Dw4X6PMf.js";import"./useClickOutside-C-4iTcLW.js";import"./AccordionItem-BtUgW_O0.js";import"./Checkbox-CqzTIRL0.js";import"./DatePicker-CjAegHPw.js";import"./documentLang-E105Y72C.js";import"./FormGroup-E1DBolbr.js";import"./MultiSelect-BkYLBvUy.js";import"./NumberInput-BjROmOML.js";import"./useNormalizedInputProps-BQu7iz8F.js";import"./bucket-16-DW1vKuDp.js";import"./RadioButton-BWNllfSN.js";import"./RadioButtonGroup-Bn-WWqH8.js";import"./usePrefersReducedMotion-Ccu7e3bc.js";import"./usePresence-pQDWnH-n.js";import"./ActionSet-DQqhpXMy.js";import"./useWindowResize-DVzDDxD-.js";import"./TagSet-BLaMKQrl.js";import"./Tag-DNcbbO5i.js";import"./DefinitionTooltip-CQ34iqFE.js";import"./DismissibleTag-D3-7-IVN.js";import"./usePortalTarget-DCQhZSnb.js";import"./OperationalTag-B3RyCH8n.js";import"./SkeletonText-CtaNkzFE.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-B59IfBja.js";import"./TableSelectRow-B0vvv1R9.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,Io={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const yo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,yo as __namedExportsOrder,Io as default};
//# sourceMappingURL=AiLabel.stories-CYgce6Uj.js.map
