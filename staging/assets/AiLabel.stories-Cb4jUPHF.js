import{R as l,r as k}from"./index-BwDkhjyp.js";import{b as W}from"./index-C8rbkH0g.js";import{a as S}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as G,a as _,m as M,u as V,b as F,E as b}from"./_storybook-styles-TnmT4tvy.js";import{D as O}from"./DatagridActions-Ch7iIHec.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as Y}from"./StoryDocsPage-D0IWKjO6.js";import{u as $}from"./useExpandedRow-DUUsBHwW.js";import{u as j}from"./useSelectRows-D7WO0dG7.js";import{a as q}from"./bucket-6-D8gTeSgt.js";import{T as J}from"./bucket-17-7Xhb4oz5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./devtools-BXUoVCj7.js";import"./settings-DI4GKhuL.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";import"./index-7nuGG3yx.js";import"./feature-flags-o_Dvbe7r.js";import"./TableRow-BFdzMHLl.js";import"./wrapComponent-BxtqFmr4.js";import"./bucket-0-DwwVbvd9.js";import"./TableToolbar-D-NC65Nl.js";import"./Text-DZylbEPL.js";import"./ErrorEmptyState-XPpcPl0Q.js";import"./Link-DedcumfW.js";import"./EmptyState-fWaEHUgL.js";import"./props-helper-DbXaHz23.js";import"./EmptyStateV2-Bquhsl-W.js";import"./iframe-B6oKv5UQ.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-DI2jyblW.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-DlgcftZC.js";import"./NoDataIllustration-Bw0Fy4db.js";import"./NotFoundEmptyState-Cx8dDNcp.js";import"./NotFoundIllustration-AJnix7kW.js";import"./index.esm-C_vKi51W.js";import"./usePreviousValue-Cw-zRxyE.js";import"./extends-CCbyfPlC.js";import"./index-BpGm7QiY.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-BdMD_Om7.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-DeIo1fst.js";import"./bucket-2-BgPkDhJt.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-AYryEaYR.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-D_xDq4QW.js";import"./Search-C2YVmAvL.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-CF5C4Sen.js";import"./index-DE-lHwKS.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-DimiiQBT.js";import"./ButtonSet-BECKiWsh.js";import"./InlineLoading-CdHnoZn4.js";import"./Checkbox-BYXaHiKq.js";import"./bucket-18--U95jA7N.js";import"./DatePicker-HJxF1OG4.js";import"./bucket-1-DIhOpOgY.js";import"./Dropdown-BuzCkvAO.js";import"./index-Bo0ibsxA.js";import"./index-DcAOwtUU.js";import"./FormGroup-U0nC7yo_.js";import"./NumberInput-VX9OGJ6-.js";import"./useNormalizedInputProps-BXoiUTEC.js";import"./bucket-16-37j4Z-9c.js";import"./RadioButton-DGsh84ks.js";import"./RadioButtonGroup-BWB0dd1W.js";import"./MultiSelect-BkfUY6Ly.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-CtFN-Bdb.js";import"./Tag-CUZixLTe.js";import"./DefinitionTooltip-CS-ERqGw.js";import"./DismissibleTag-B1szOH83.js";import"./ComposedModal-B4D2akSI.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BBe48k1H.js";import"./usePortalTarget-2qC4C0m3.js";import"./OperationalTag-BJdzIQOb.js";import"./SkeletonText-D9T29KXc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-D9SQ_G7F.js";import"./bucket-7-E__9yUMB.js";import"./index-7ofX8jt7.js";import"./bucket-12-BdJxyMSm.js";import"./TableToolbarSearch-CUDUfOvP.js";import"./bucket-5-CcWS0Cgm.js";import"./story-helper-6_fmjwZ-.js";import"./useFocusRowExpander-9BajiKyr.js";import"./TableSelectRow-Cp0La-0d.js";const or={title:"IBM Products/Components/Datagrid/AILabel",component:G,tags:["autodocs"],parameters:{styles:_,docs:{page:()=>l.createElement(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
`}},{description:"To include a AILabel on the row level, include a `aiLabel` property in your row data with the same structure as outlined above."}]})},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleAILabel"]},K=(o,r)=>[{Header:"Row Index",accessor:(w,m)=>m,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,aiLabel:!o&&l.createElement(b,{align:r})},{Header:"Someone 1",accessor:"someone1",aiLabel:!o&&l.createElement(b,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],p={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:o=>{console.log("row size changed to: ",o)},rowActions:[{id:"edit",itemText:"Edit",icon:q,onClick:S("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:J,isDelete:!0,onClick:S("Clicked row action: delete")}]},d={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader,rowSize:p.rowSize,rowSizes:p.rowSizes,onRowSizeChange:p.onRowSizeChange},Q=({row:o})=>{const r=W();return l.createElement("div",{className:`${r}__test-class-with-prefix-hook`},"Content for row index: ",o.id)},U=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:m,withExpansion:g,...u})=>{const P=l.useMemo(()=>K(o,r),[]),[B]=k.useState(M(10,2,{enableAIRow:o,aiLabelAlign:r})),v=V({columns:P,data:B,DatagridActions:O,ExpandedRowContentComponent:Q,...u.defaultGridProps},w?F:"",m?j:"",g?$:"");return l.createElement(G,{datagridState:v})},c=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:m,withExpansion:g,...u})=>l.createElement(U,{defaultGridProps:{...u},withSorting:w,rowAiLabel:o,rowAiLabelAlign:r,withSelect:m,withExpansion:g}),X="Column AILabel",i=c.bind({});i.storyName=X;i.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};i.args={...d};const Z="Column AILabel sort",t=c.bind({});t.storyName=Z;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...d,withSorting:!0};const ee="Row AILabel",a=c.bind({});a.storyName=ee;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...d,rowAiLabel:!0,rowAiLabelAlign:"right"};const oe="Row AILabel with selection",n=c.bind({});n.storyName=oe;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...d,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0};const re="Row AILabel with selection and expansion",s=c.bind({});s.storyName=re;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...d,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0,withExpansion:!0};var A,h,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(L=(h=i.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var x,C,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`({
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
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var y,H,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(D=(H=a.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var T,z,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var f,R,N;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const rr=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,rr as __namedExportsOrder,or as default};
