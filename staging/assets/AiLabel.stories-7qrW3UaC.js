import{e as l,r as k}from"./index-BOZkNhcz.js";import{b as W}from"./index--clQM3eT.js";import{a as S}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{a as _,D as G,m as V,u as F,E as b,b as M}from"./_storybook-styles-BjK23sID.js";import{D as O}from"./DatagridActions-CiDU9ILQ.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{S as Y}from"./StoryDocsPage-DUYNgJVx.js";import{u as $}from"./useExpandedRow-C7UHdOHk.js";import{u as j}from"./useSelectRows-BDRUYYol.js";import{a as q}from"./bucket-6-B5NNCZ27.js";import{T as J}from"./bucket-17-Dbz5FtJu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-hBZdtWkn.js";import"./index-2uioG_CI.js";import"./v4-CtRu48qb.js";import"./devtools-BSXGZlBP.js";import"./settings-BYgtfLKl.js";import"./events-OVwOsPzJ.js";import"./index-YZUn1U4D.js";import"./feature-flags-opBMwCDq.js";import"./TableRow-B3UC0sp5.js";import"./wrapComponent-Bc-EthYV.js";import"./bucket-0-tjTgXQWL.js";import"./TableToolbar-DT-kZZ1C.js";import"./Text-C-NQiyV2.js";import"./ErrorEmptyState-DP7zsOwL.js";import"./Link-BFsW3ySJ.js";import"./EmptyState-gDUsG0U-.js";import"./props-helper-BNocl_Zr.js";import"./index-Cz7DMDvM.js";import"./EmptyStateV2-CflP1-8z.js";import"./iframe--Hb3m1kv.js";import"./ErrorIllustration-Dz1tKV6c.js";import"./useId-3RkIcX0R.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-6gyqpqAD.js";import"./NoDataIllustration-DXQPoSCV.js";import"./NotFoundEmptyState-BRDl4Kj7.js";import"./NotFoundIllustration-BrUgbhvY.js";import"./index.esm-C32hhDZ_.js";import"./usePreviousValue-BEwlonP-.js";import"./useResizeObserver-DcNhBpO-.js";import"./useIsomorphicEffect-C0ObacuX.js";import"./MenuItem-BSeNOHR5.js";import"./useControllableState-BHFQnaNh.js";import"./useAttachedMenu-BS0JXRSz.js";import"./bucket-2-rFuAlaTW.js";import"./useWindowResize-C1HduLvd.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-D8bRXWRJ.js";import"./useClickOutside-DHVF5Qo6.js";import"./AccordionItem-CFt1CKpn.js";import"./Search-Cvevq9lI.js";import"./FormContext-qEw5DNxz.js";import"./bucket-14-CgdCrYMN.js";import"./index-_87NmGAs.js";import"./LayerContext-DxTbsTfh.js";import"./index-BfLKLwdO.js";import"./Checkbox-BkhXuVvJ.js";import"./bucket-18-Dly-sSmK.js";import"./DatePicker-CfM7iejN.js";import"./bucket-1-Dse7f7ir.js";import"./Dropdown-DUiNNuDy.js";import"./index-CVAOgdFx.js";import"./FormGroup-C9yKEUD9.js";import"./NumberInput-wLF2-I7y.js";import"./useNormalizedInputProps-BDKhkbhJ.js";import"./bucket-16-BFXGSpzc.js";import"./RadioButton-BG56v3Z_.js";import"./RadioButtonGroup-BNG-Ca3n.js";import"./MultiSelect-D4ulrWpb.js";import"./ActionSet-UhZB57-y.js";import"./ButtonSet-BHSafAHF.js";import"./InlineLoading-CRp3J8hh.js";import"./TagSet-heaoH4__.js";import"./Tag-poJ4g3DE.js";import"./DefinitionTooltip-Dmd5thZA.js";import"./DismissibleTag-CCIQD6y1.js";import"./ComposedModal-B5GOofnJ.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DuCohhwL.js";import"./usePortalTarget-BnwBxO9W.js";import"./OperationalTag-Dy-8SFeE.js";import"./SkeletonText-CEI9dtvU.js";import"./bucket-15-BIyYeSsH.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CKq6Ewiq.js";import"./bucket-7-DfvGlUO7.js";import"./index-0E3e6jj2.js";import"./bucket-12-BQFRxjkG.js";import"./OverflowMenuItem-vAGvlICf.js";import"./TableToolbarSearch-Bicm2rxe.js";import"./bucket-5-D_VnmO9x.js";import"./index-KgSg3jcr.js";import"./index-CO8sV34W.js";import"./index-ogSvIofg.js";import"./story-helper-DEC8H8IF.js";import"./useFocusRowExpander-UbaPBXPx.js";import"./TableSelectRow-DN4YIujg.js";const Uo={title:"Deprecated/Datagrid/Datagrid/AILabel",component:G,tags:["autodocs"],parameters:{styles:_,docs:{page:()=>l.createElement(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
