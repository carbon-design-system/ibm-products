import{e as l,r as k}from"./index-CPiZ6Cnx.js";import{b as W}from"./index-CXyjPnaX.js";import{a as S}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{D as G,a as _,m as V,u as F,b as M,E as b}from"./_storybook-styles-BGLJR536.js";import{D as O}from"./DatagridActions-CU0Xw3sA.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as Y}from"./StoryDocsPage-B_QkJq2W.js";import{u as $}from"./useExpandedRow-DQI-taZZ.js";import{u as j}from"./useSelectRows-BrMYJ6MB.js";import{a as q}from"./bucket-6-BQYdmIZX.js";import{T as J}from"./bucket-17-Ddrrb1BH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BSHYryQu.js";import"./index-Bsyy8W_U.js";import"./v4-CQkTLCs1.js";import"./devtools-BgfuqBVa.js";import"./settings-DkGFwmHv.js";import"./events-OVwOsPzJ.js";import"./index-DJK44odq.js";import"./feature-flags-B_abUzZ5.js";import"./TableRow-D3yAcReO.js";import"./wrapComponent-fq0T_7oD.js";import"./bucket-0-DUfmGMOu.js";import"./TableToolbar-Ct4VknGD.js";import"./Text-vNWzJqus.js";import"./ErrorEmptyState-BmnmOYHm.js";import"./Link-EP4KkhUp.js";import"./EmptyState-CUkH7jOq.js";import"./props-helper-C4XfpXsc.js";import"./index-Bd5XT4xl.js";import"./EmptyStateV2-4jIz0TGx.js";import"./iframe-BAt2XFX8.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-CT4uFz_c.js";import"./useId-BvKGLBYe.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-Bne6n0HF.js";import"./NoDataIllustration-CphiFmfE.js";import"./NotFoundEmptyState-BUvXFb66.js";import"./NotFoundIllustration-CSqqjm0d.js";import"./index.esm-DXfeWmHt.js";import"./usePreviousValue-CSEZflXC.js";import"./useResizeObserver-CZKdqPxj.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./MenuItem-8LA01F7J.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-MiCadXk0.js";import"./bucket-2-L5Cs0C3i.js";import"./useWindowResize-D2S-8bQl.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-BLF2Ep9P.js";import"./useClickOutside-CmCSbinx.js";import"./AccordionItem-DdQEl6DI.js";import"./Search-soxfLq4A.js";import"./FormContext-CgeSXHS1.js";import"./bucket-14-BKxafgTW.js";import"./index-Dcfl0vi2.js";import"./LayerContext-BGhaVt7n.js";import"./motionConstants-DlACNM8M.js";import"./use-reduced-motion-BpDRJM_F.js";import"./index-DkUr2NOz.js";import"./ActionSet-niQNGcwi.js";import"./ButtonSet-DCPCKVSR.js";import"./InlineLoading-DZri6jHG.js";import"./Checkbox-CPOZKaZ_.js";import"./bucket-18-By6NmkK1.js";import"./DatePicker-BtYXwe2U.js";import"./bucket-1-EQaPuUyr.js";import"./Dropdown-Bou1JX7F.js";import"./index-ieEXB2QH.js";import"./FormGroup-9BStNhuZ.js";import"./NumberInput-7N1NynOx.js";import"./useNormalizedInputProps-Dv8FHz9Q.js";import"./bucket-16-DAqQSLfq.js";import"./RadioButton-DFKglrJp.js";import"./RadioButtonGroup-CxQn_S4P.js";import"./MultiSelect-Dga-GlIZ.js";import"./toNumber-CT-AZYiF.js";import"./TagSet-DjhKdSeL.js";import"./Tag-C5xfWRec.js";import"./DefinitionTooltip-BPN6Mdin.js";import"./DismissibleTag-CXwbi23M.js";import"./ComposedModal-DIgif1vZ.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-i_P_nIQh.js";import"./usePortalTarget-D7xkRihu.js";import"./OperationalTag-BZksMbtL.js";import"./SkeletonText-B30TI_EU.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CwMfrGy4.js";import"./bucket-7-DdSKRZLi.js";import"./index-mnDakJPj.js";import"./bucket-12-Oh5ngpb2.js";import"./OverflowMenuItem-B5Kp6Vn3.js";import"./TableToolbarSearch-BaoSzmTx.js";import"./bucket-5-CJguTH3X.js";import"./index-z3zJDXtl.js";import"./index-Df9so8jS.js";import"./index-DMCuvgYY.js";import"./index-DrFu-skq.js";import"./story-helper-CTHQ3yzD.js";import"./useFocusRowExpander-E1_-eRc0.js";import"./TableSelectRow-Bd7IFPa8.js";const er={title:"Deprecated/Datagrid/Datagrid/AILabel",component:G,tags:["autodocs"],parameters:{styles:_,docs:{page:()=>l.createElement(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const or=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,or as __namedExportsOrder,er as default};
