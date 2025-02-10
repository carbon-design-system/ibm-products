import{e as l,r as k}from"./index-BOZkNhcz.js";import{b as W}from"./index-Cd8snwnz.js";import{a as S}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{a as _,D as G,m as V,u as F,E as b,b as M}from"./_storybook-styles-gYCrqgPX.js";import{D as O}from"./DatagridActions-C9yLdlJ4.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{S as Y}from"./StoryDocsPage-BhgqlSUq.js";import{u as $}from"./useExpandedRow-CozUhLKL.js";import{u as j}from"./useSelectRows-DSlCxAqi.js";import{a as q}from"./bucket-6-Bh7P8rIU.js";import{T as J}from"./bucket-17-CXe10FQN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./v4-CtRu48qb.js";import"./devtools-Bjt2CwRv.js";import"./settings-DqneCnpo.js";import"./events-OVwOsPzJ.js";import"./index-CN8ymWyE.js";import"./feature-flags-D5BeACme.js";import"./TableRow-CU2-ZFr3.js";import"./wrapComponent-BmELSzk6.js";import"./bucket-0-BxsXdw_5.js";import"./TableToolbar-EFhxjZFU.js";import"./Text-Rb3iZwUo.js";import"./ErrorEmptyState-DmVH-tBu.js";import"./Link-BqtwLYC0.js";import"./EmptyState-DBARPyVY.js";import"./props-helper-DIx2Ramn.js";import"./index-pvIsy2-t.js";import"./EmptyStateV2-ZUIsdWvP.js";import"./iframe-BLi-C7G1.js";import"./ErrorIllustration-DDV2YgoZ.js";import"./useId-Cb6M4-BZ.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-BQTPr5nG.js";import"./NoDataIllustration-CxP-HZKR.js";import"./NotFoundEmptyState-DWxOYvcu.js";import"./NotFoundIllustration-CUhP8rkd.js";import"./index.esm-BDMpHATI.js";import"./usePreviousValue-BEwlonP-.js";import"./useResizeObserver-DcNhBpO-.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./MenuItem-BUajeAL9.js";import"./useControllableState-BHFQnaNh.js";import"./useAttachedMenu-S-3pNb8o.js";import"./bucket-2-BRYD7UVO.js";import"./useWindowResize-CIi3x59S.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-BwgvqBjT.js";import"./useClickOutside-DHVF5Qo6.js";import"./AccordionItem-B9o-Ah8b.js";import"./Search-ByDDtaAB.js";import"./FormContext-qEw5DNxz.js";import"./bucket-14-B-58TyUV.js";import"./index-26QMFoPE.js";import"./LayerContext-DxTbsTfh.js";import"./index-BfLKLwdO.js";import"./Checkbox-DURplLdT.js";import"./bucket-18-D95sPjw6.js";import"./DatePicker-C50cTdwC.js";import"./bucket-1-D7l_4S5E.js";import"./Dropdown-D4dJ8elh.js";import"./index-CNhKwCqX.js";import"./FormGroup-CwhL9o_y.js";import"./NumberInput-CtjGEpw1.js";import"./useNormalizedInputProps-CMiK_Vbq.js";import"./bucket-16-B-hxUebt.js";import"./RadioButton-57mE-Hhs.js";import"./RadioButtonGroup-DraaP4WA.js";import"./MultiSelect-tJEJ51mj.js";import"./toNumber-cOipFfRl.js";import"./ActionSet-BJEln6zp.js";import"./ButtonSet-DkA8no1v.js";import"./InlineLoading-82KDAKCf.js";import"./TagSet-KyB4Tq5X.js";import"./Tag-Ld9LHRlu.js";import"./DefinitionTooltip-J5OgfIIa.js";import"./DismissibleTag-CgAkKprD.js";import"./ComposedModal-CpktCI_l.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CTxWTAfl.js";import"./usePortalTarget-D4ub4VO0.js";import"./OperationalTag-CxiLneNY.js";import"./SkeletonText-C_VQyL87.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CD9LV9at.js";import"./bucket-7-Djjnd2yB.js";import"./index-DUK5nPFV.js";import"./bucket-12-CsE6RCLW.js";import"./OverflowMenuItem-BblcxAUS.js";import"./TableToolbarSearch-CVRewwJu.js";import"./bucket-5-DaBRhwMZ.js";import"./index-CKePA1sA.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-HIAsLHzl.js";import"./useFocusRowExpander-UbaPBXPx.js";import"./TableSelectRow-DmUXdobQ.js";const Uo={title:"Deprecated/Datagrid/Datagrid/AILabel",component:G,tags:["autodocs"],parameters:{styles:_,docs:{page:()=>l.createElement(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const Xo=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,Xo as __namedExportsOrder,Uo as default};
