import{e as l,r as k}from"./index-DxDX2vOa.js";import{b as W}from"./index-B_euquWE.js";import{a as S}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as G,a as _,m as V,u as F,b as M,E as b}from"./_storybook-styles-8HZJ3LJ2.js";import{D as O}from"./DatagridActions-6GEN38EF.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as Y}from"./StoryDocsPage-CSDwatIL.js";import{u as $}from"./useExpandedRow-B8a4w8gg.js";import{u as j}from"./useSelectRows-0t67NiFi.js";import{a as q}from"./bucket-6-Cw3hdw1e.js";import{T as J}from"./bucket-17-BLAXVSDb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CaMJXrh2.js";import"./v4-CQkTLCs1.js";import"./devtools-BlxCaI1L.js";import"./settings-0ThqPtR3.js";import"./events-OVwOsPzJ.js";import"./index-YDq2Pj7F.js";import"./feature-flags-BboNqy5q.js";import"./TableRow-Cz9rtho0.js";import"./wrapComponent-cYcURnZ2.js";import"./bucket-0-DEgqxqZV.js";import"./TableToolbar-Bwrml3P6.js";import"./Text-9AedOkae.js";import"./ErrorEmptyState-BQbnYVFY.js";import"./Link-Czg4mzd7.js";import"./EmptyState-CXr66qq-.js";import"./props-helper-DmbAnr2a.js";import"./EmptyStateV2-CIGif9xR.js";import"./iframe-Cku1tuHn.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-Dcmz1ADk.js";import"./useId-DKdY3qo2.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-By0ewpIL.js";import"./NoDataIllustration-DL6XN-06.js";import"./NotFoundEmptyState-DJRFGeok.js";import"./NotFoundIllustration-AGAJ1woW.js";import"./index.esm-CsFWLHj3.js";import"./usePreviousValue-CLgSY5iR.js";import"./useResizeObserver-DUmvKY5Q.js";import"./useIsomorphicEffect-BPCmBl9Y.js";import"./MenuItem-DWuSrVzG.js";import"./useControllableState-BEU9Cr15.js";import"./useAttachedMenu-CNodkuzW.js";import"./bucket-2-BDpMY3Ys.js";import"./useWindowResize-v9xhRqmX.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DYXyeV2p.js";import"./useClickOutside-BZUjepjm.js";import"./AccordionItem-C6Zmne57.js";import"./Search-Cwr2QiaX.js";import"./FormContext-Dj7olUH1.js";import"./bucket-14-C1Z-80MS.js";import"./index-B1YmXwfC.js";import"./LayerContext-BLFdRioi.js";import"./motionConstants-BwVwxeFP.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-DIWO13co.js";import"./index-DkUr2NOz.js";import"./ActionSet-0Lk-L5n-.js";import"./ButtonSet-epghEKVn.js";import"./InlineLoading-CIMtbZ0Q.js";import"./Checkbox-Ctty0aFL.js";import"./bucket-18-Dvh787Y8.js";import"./DatePicker-DGWQ9G1M.js";import"./bucket-1-DID1vhVO.js";import"./Dropdown-DnYB61C4.js";import"./index-D4Cc84yY.js";import"./FormGroup-BHxKds7u.js";import"./NumberInput-B5Nr-RgL.js";import"./useNormalizedInputProps-BaY27oQV.js";import"./bucket-16-BwEHvyin.js";import"./RadioButton-wK6B5koV.js";import"./RadioButtonGroup-BFKhdgSb.js";import"./MultiSelect-Dg3yFEyH.js";import"./toNumber-CjkmaA9J.js";import"./TagSet-Cq9F0ScF.js";import"./Tag-CQrPIH3H.js";import"./DefinitionTooltip-CFcrL78F.js";import"./DismissibleTag-g9t9_3jR.js";import"./ComposedModal-BsLCo1xi.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ChZuRP4g.js";import"./usePortalTarget-BfZpr1XQ.js";import"./OperationalTag-BJymOJkN.js";import"./SkeletonText-Bkj60K0L.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-DkxCE0a1.js";import"./bucket-7-D9w4nlSg.js";import"./index-BK04RsGV.js";import"./bucket-12-BnoODLmv.js";import"./OverflowMenuItem-B2qt5S-L.js";import"./TableToolbarSearch-Bm9UckLj.js";import"./bucket-5-nfnHYhtc.js";import"./index-CYHZTqqy.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./story-helper-BvAgcfdm.js";import"./useFocusRowExpander-gm9MWuS_.js";import"./TableSelectRow-BDIpowsj.js";const Zo={title:"Deprecated/Datagrid/Datagrid/AILabel",component:G,tags:["autodocs"],parameters:{styles:_,docs:{page:()=>l.createElement(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
`}},{description:"To include a AILabel on the row level, include a `aiLabel` property in your row data with the same structure as outlined above."}]})},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleAILabel"]},K=(o,r)=>[{Header:"Row Index",accessor:(w,m)=>m,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,aiLabel:!o&&l.createElement(b,{align:r})},{Header:"Someone 1",accessor:"someone1",aiLabel:!o&&l.createElement(b,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],p={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:o=>{console.log("row size changed to: ",o)},rowActions:[{id:"edit",itemText:"Edit",icon:q,onClick:S("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:J,isDelete:!0,onClick:S("Clicked row action: delete")}]},d={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader,rowSize:p.rowSize,rowSizes:p.rowSizes,onRowSizeChange:p.onRowSizeChange},Q=({row:o})=>{const r=W();return l.createElement("div",{className:`${r}__test-class-with-prefix-hook`},"Content for row index: ",o.id)},U=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:m,withExpansion:g,...u})=>{const P=l.useMemo(()=>K(o,r),[]),[v]=k.useState(V(10,2,{enableAIRow:o,aiLabelAlign:r})),B=F({columns:P,data:v,DatagridActions:O,ExpandedRowContentComponent:Q,...u.defaultGridProps},w?M:"",m?j:"",g?$:"");return l.createElement(G,{datagridState:B})},c=({rowAiLabel:o,rowAiLabelAlign:r,withSorting:w,withSelect:m,withExpansion:g,...u})=>l.createElement(U,{defaultGridProps:{...u},withSorting:w,rowAiLabel:o,rowAiLabelAlign:r,withSelect:m,withExpansion:g}),X="Column AILabel",i=c.bind({});i.storyName=X;i.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};i.args={...d};const Z="Column AILabel sort",t=c.bind({});t.storyName=Z;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...d,withSorting:!0};const ee="Row AILabel",a=c.bind({});a.storyName=ee;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...d,rowAiLabel:!0,rowAiLabelAlign:"right"};const oe="Row AILabel with selection",n=c.bind({});n.storyName=oe;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...d,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0};const re="Row AILabel with selection and expansion",s=c.bind({});s.storyName=re;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...d,rowAiLabel:!0,rowAiLabelAlign:"right",withSelect:!0,withExpansion:!0};var A,h,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var y,D,H;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(H=(D=a.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var T,z,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
}`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const er=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,er as __namedExportsOrder,Zo as default};
