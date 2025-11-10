import{e as l,S as C,r as E,u as H}from"./iframe-Cx5KSUkN.js";import{s as T,m as D,E as S}from"./_storybook-styles-DK4c8Cql.js";import{D as z}from"./DatagridActions-BjuKCRhf.js";import{A as e}from"./getArgTypes-Ci8wh0IQ.js";import{D as A,u as I,a as y}from"./useDatagrid-CVUznwVZ.js";import{u as f}from"./useExpandedRow-tiX0pNt6.js";import{u as R}from"./useSelectRows-2305DGq7.js";import{E as N}from"./bucket-6-CTMsIO5l.js";import{T as G}from"./bucket-18-BsWhzxVc.js";import"./bucket-2-BlvkVtPX.js";import"./index-B9RenrJ5.js";import"./bucket-7-RD2fLsYP.js";import"./bucket-19-L8p_zxw3.js";import"./ComposedModal-CZIDkxYx.js";import"./index-CiscxeF_.js";import"./LayerContext-cpvj6sRw.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DM5qsHJo.js";import"./InlineLoading-CiXSaq1b.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DKguJtfl.js";import"./Text-Dfk9uCpH.js";import"./utils-Cm2OYkF4.js";import"./TableToolbarSearch-B6flQQoC.js";import"./wrapComponent-Cn-xnvE3.js";import"./Search-BGGTyo9i.js";import"./FormContext-B2Gj6hIG.js";import"./bucket-15-Cv3_8V3l.js";import"./Dropdown-UDtNxzP0.js";import"./index-DMtEKiNH.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CWMHTNfB.js";import"./useControllableState-K1GvegTe.js";import"./useAttachedMenu-8SzJaBid.js";import"./index-Dk561UWg.js";import"./index-sYdbAcSp.js";import"./bucket-13-Dcu5duvg.js";import"./useOutsideClick-jUy6eBsu.js";import"./OverflowMenuItem-6yxr4_5x.js";import"./useFilterContext-D-NHk4cP.js";import"./bucket-0-DSsX9IMy.js";import"./bucket-14-moavN2LV.js";import"./devtools-CqSmu32c.js";import"./TableRow-DzqLFxTX.js";import"./bucket-1-DxKSVg0b.js";import"./TableToolbar-BnP_KZ9E.js";import"./index-DDD0vdKi.js";import"./ErrorEmptyState-Jkm_-7d3.js";import"./EmptyState-CgKCaGif.js";import"./EmptyStateV2.deprecated-DYZkHc79.js";import"./Link-CqhHBFwL.js";import"./ErrorIllustration-B96CjSRD.js";import"./useId-BTc5klc9.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CLpWRCVP.js";import"./NoDataIllustration-B7Bbl5wa.js";import"./NotFoundEmptyState-CAxq5P_b.js";import"./NotFoundIllustration-CMK6UhYh.js";import"./index.esm-ncvLhiMo.js";import"./usePreviousValue-DG0Xxt-O.js";import"./useResizeObserver-BaCXyUct.js";import"./useIsomorphicEffect-Bv6TiHW8.js";import"./getFocusableElements-BW7cf991.js";import"./index-BJ4wCti9.js";import"./props-helper-DUN9rRLy.js";import"./useClickOutside-Be2nU8fi.js";import"./AccordionItem-l1ahdCo-.js";import"./Checkbox-D0CmUts8.js";import"./DatePicker-BHTipTjE.js";import"./NumberInput-BsNfWt2F.js";import"./useNormalizedInputProps-Ckl1dNXt.js";import"./bucket-16-CUZPTeHj.js";import"./FormGroup-BK3HGy7x.js";import"./MultiSelect-QRL94PtN.js";import"./RadioButton-C-R-Tpyc.js";import"./RadioButtonGroup-9N2R0eij.js";import"./usePrefersReducedMotion-CvDA_HDZ.js";import"./usePresence-j19rLO5g.js";import"./ActionSet-xL6a_vbL.js";import"./useWindowResize-Ba0asv8I.js";import"./TagSet-D0c3ZaSP.js";import"./Tag-CKDyYBWG.js";import"./DefinitionTooltip-B_d1_SjV.js";import"./DismissibleTag-Jzqa0QEv.js";import"./usePortalTarget-1MKh9o9m.js";import"./OperationalTag-D2fJj9gl.js";import"./SkeletonText-DlkLeaaB.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./useFocusRowExpander-rgEsEWCX.js";import"./TableSelectRow-CzEltwVB.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,zo={title:"Deprecated/Datagrid/AILabel",component:A,tags:["autodocs"],parameters:{styles:T,docs:{page:()=>l.createElement(C,{omitCodedExample:!0,blocks:[{description:"A Carbon AI Label can be used within the Datagrid for both column headers and rows. To include a column header AI Label, include a `aiLabel` property within your column definition and include the AILabel component as it's own custom component. <br/> The `slug` property has been deprecated. It will only be supported for a limited time in future. Please use `aiLabel` property instead.",source:{code:`
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
}`,...s.parameters?.docs?.source}}};const Io=["AILabelColumnHeaderStory","AILabelSortableColumnHeaderStory","AILabelRowStory","AILabelRowSelectionStory","AILabelRowSelectionAndExpandStory"];export{i as AILabelColumnHeaderStory,s as AILabelRowSelectionAndExpandStory,n as AILabelRowSelectionStory,a as AILabelRowStory,t as AILabelSortableColumnHeaderStory,Io as __namedExportsOrder,zo as default};
