import{e as l,r as k}from"./index-CPiZ6Cnx.js";import{b as W}from"./index-BPCFiO9b.js";import{a as S}from"./index-B-lxVbXh.js";import{a as _,D as G,m as V,u as F,E as b,b as M}from"./_storybook-styles-BRltiawO.js";import{D as O}from"./DatagridActions-DzVzJfi4.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{S as Y}from"./StoryDocsPage-vEZJbmBv.js";import{u as $}from"./useExpandedRow-CZdRzU_h.js";import{u as j}from"./useSelectRows-Cjkn6e3k.js";import{a as q}from"./bucket-6-CO2LLwKX.js";import{T as J}from"./bucket-17-VMH0CKri.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./v4-CtRu48qb.js";import"./devtools-Ca6Wku6c.js";import"./settings-41bnSjHp.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./feature-flags-CMZHtsao.js";import"./TableRow-DwiBFqxp.js";import"./wrapComponent-NawzZkim.js";import"./bucket-0-BYIdRiFw.js";import"./bucket-1-2OIQCase.js";import"./TableToolbar-D7ssWpP4.js";import"./Text-DJS5NTiV.js";import"./ErrorEmptyState-DrAz5YzV.js";import"./Link-BmRyJrPM.js";import"./EmptyState-DH2gBtAG.js";import"./props-helper-C4WGU-Xx.js";import"./index-DtQVt1M7.js";import"./EmptyStateV2-CLfnSPcH.js";import"./iframe-DG_HeTRT.js";import"./ErrorIllustration-Dy4XNg1g.js";import"./useId-f4Cxwosn.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BgXsN8c1.js";import"./NoDataIllustration-B46ecV68.js";import"./NotFoundEmptyState-qEKIMMW-.js";import"./NotFoundIllustration-BAzohCYd.js";import"./index.esm-Un75556h.js";import"./usePreviousValue-CSEZflXC.js";import"./extends-CF3RwP-h.js";import"./useResizeObserver-CZKdqPxj.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./MenuItem-qN6UbXhC.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-CqlpaYyp.js";import"./bucket-2-Bg39G-BA.js";import"./useWindowResize-Bp7C0uQJ.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-BI1fCQHV.js";import"./useClickOutside-CmCSbinx.js";import"./AccordionItem-BqwgX8kA.js";import"./Search-Cc2Df4em.js";import"./FormContext-CgeSXHS1.js";import"./bucket-15-e1AWIpaL.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./Checkbox-C003KrfO.js";import"./bucket-18-CAzey7tD.js";import"./DatePicker-ClN6dyFZ.js";import"./Dropdown-CFsOHIZw.js";import"./index-B0LLDM2X.js";import"./FormGroup-BF7c02p3.js";import"./NumberInput-B32JHXD-.js";import"./useNormalizedInputProps-CqoVIYpB.js";import"./bucket-16-D6LVaITE.js";import"./RadioButton-CQKVrHNr.js";import"./RadioButtonGroup-DgAqhidy.js";import"./MultiSelect-CPsAePV3.js";import"./usePrefersReducedMotion-B4CsCXC2.js";import"./usePresence-V30dXmOF.js";import"./ActionSet-DmJNgN-v.js";import"./ButtonSet-BTIAcY4e.js";import"./InlineLoading-Cst7O9Fk.js";import"./TagSet-C1mdPl0m.js";import"./Tag-BJO4fr33.js";import"./DefinitionTooltip-3iCit3mp.js";import"./DismissibleTag-CbjlURNz.js";import"./ComposedModal-CgRKyN5W.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-Dfrp1CCV.js";import"./usePortalTarget-DAnmNO4S.js";import"./OperationalTag-BdUw-zPm.js";import"./SkeletonText-Dd-IYFPc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-GAgccHqf.js";import"./bucket-7-ouWb30ej.js";import"./index-BZnmZh5O.js";import"./bucket-12-6vZmyEHs.js";import"./createClassWrapper-CfmfodUV.js";import"./OverflowMenuItem-Bes9qn8M.js";import"./TableToolbarSearch-CNIJHaPG.js";import"./bucket-5-B7bOdntf.js";import"./bucket-14-30MmQ0EF.js";import"./index-DblCLej2.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./useFocusRowExpander-E1_-eRc0.js";import"./TableSelectRow-DPCkEOdX.js";const er={title:"Deprecated/Datagrid/Datagrid/AILabel",component:G,tags:["autodocs"],parameters:{styles:_,docs:{page:()=>l.createElement(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
`}},{description:"To include a AILabel on the row level, include a `aiLabel` property in your row data with the same structure as outlined above."}]})},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleAILabel"]},K=(o,r)=>[{Header:"Row Index",accessor:(w,d)=>d,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,aiLabel:!o&&l.createElement(b,{align:r})},{Header:"Someone 1",accessor:"someone1",aiLabel:!o&&l.createElement(b,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:o=>{console.log("row size changed to: ",o)},rowActions:[{id:"edit",itemText:"Edit",icon:q,onClick:S("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:J,isDelete:!0,onClick:S("Clicked row action: delete")}]},m={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader,rowSize:p.rowSize,rowSizes:p.rowSizes,onRowSizeChange:p.onRowSizeChange},Q=({row:o})=>{const r=W();return l.createElement("div",{className:`${r}__test-class-with-prefix-hook`},"Content for row index: ",o.id)},U=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:d,withExpansion:g,...u})=>{const P=l.useMemo(()=>K(o,r),[]),[v]=k.useState(V(10,2,{enableAIRow:o,aiLabelAlign:r})),B=F({columns:P,data:v,DatagridActions:O,ExpandedRowContentComponent:Q,...u.defaultGridProps},w?M:"",d?j:"",g?$:"");return l.createElement(G,{datagridState:B})},c=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:d,withExpansion:g,...u})=>l.createElement(U,{defaultGridProps:{...u},withSorting:w,rowAiLabel:o,rowAiLabelAlign:r,withSelect:d,withExpansion:g}),X="Column AILabel",i=c.bind({});i.storyName=X;i.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};i.args={...m};const Z="Column AILabel sort",t=c.bind({});t.storyName=Z;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...m,withSorting:!0};const ee="Row AILabel",a=c.bind({});a.storyName=ee;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right"};const oe="Row AILabel with selection",n=c.bind({});n.storyName=oe;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0};const re="Row AILabel with selection and expansion",s=c.bind({});s.storyName=re;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...m,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0,withExpansion:!0};var A,h,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var H,D,T;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`({
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
}`,...(T=(D=a.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var z,I,f;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
}`,...(f=(I=n.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var y,R,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const or=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,or as __namedExportsOrder,er as default};
