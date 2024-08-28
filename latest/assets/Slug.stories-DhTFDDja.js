import{j as p}from"./settings-DDDiKwEV.js";import{R as W,r as I}from"./index-BwDkhjyp.js";import{a as _}from"./floating-ui.react-BgNs4SA8.js";import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as B,a as M,m as V,u as F,b as L,E as h}from"./_storybook-styles-h9--y7BH.js";import{D as O}from"./DatagridActions-DyMyt3M6.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as Y}from"./StoryDocsPage-CfmQO964.js";import{u as $}from"./useExpandedRow-C7rK8GuL.js";import{u as q}from"./useSelectRows-CXe7onvQ.js";import{a as J}from"./bucket-6-CS7rNrxx.js";import{T as K}from"./bucket-16-DFCeQRVG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./devtools-C7Iu0rt6.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./TableRow-CUMskZDA.js";import"./wrapComponent-EQHqN-fS.js";import"./bucket-0-Cw-xsoio.js";import"./TableToolbar-DziYVX_8.js";import"./Text-DpcC0Z3Y.js";import"./ErrorEmptyState-DuJZAuOh.js";import"./Link-DHwEx_0L.js";import"./EmptyState-CjHe8Iv0.js";import"./props-helper-D2PZmIqz.js";import"./EmptyStateV2-CHRoigZZ.js";import"./iframe-D1NHqrr9.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-BhpMbBlL.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-C6BC1rJ0.js";import"./NoDataIllustration-DPQ5KKyn.js";import"./NotFoundEmptyState-BbZN2vrh.js";import"./NotFoundIllustration-jlgxfDSo.js";import"./index.esm-qM8NAUcO.js";import"./usePreviousValue-DDnp_zt4.js";import"./extends-CCbyfPlC.js";import"./index-Cfxh4ZWR.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useWindowResize-DdSPNfdm.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-Ba8a--1h.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DW1YkzHB.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-PQBPj2OV.js";import"./Search-DEO4IeZ8.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-BmSAzvkd.js";import"./index-Bd0eoXr0.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-7kyZHLkU.js";import"./ButtonSet-Dwf_xrN7.js";import"./InlineLoading-BvhLs1sa.js";import"./Checkbox-Eq23awQn.js";import"./bucket-18-D_XNNF5i.js";import"./DatePicker-Dr8agIg8.js";import"./bucket-1-DMFHDXY9.js";import"./Dropdown-kl0VN08K.js";import"./index-C7XzgV7l.js";import"./index-DcAOwtUU.js";import"./FormGroup-DoLxBdhK.js";import"./NumberInput-NTFTuQL2.js";import"./useNormalizedInputProps-DtF50Ia0.js";import"./bucket-15-DqJqYgDY.js";import"./RadioButton-Dk88TpeT.js";import"./RadioButtonGroup-CQZQsCyP.js";import"./MultiSelect-CexdsJ1A.js";import"./index-CfyPTyT-.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-CHGYYjbB.js";import"./Tag-CpKCZnUV.js";import"./DefinitionTooltip-MY7U3cvT.js";import"./ComposedModal-BB3t0zem.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-BK1SMh4y.js";import"./usePortalTarget-BD2WdNlr.js";import"./SkeletonText-CniiJqu_.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-C9z6BHTc.js";import"./bucket-17-B2E3mTyd.js";import"./index-D9ju4W2A.js";import"./bucket-12-C33cLYA1.js";import"./TableToolbarSearch-D107niuO.js";import"./bucket-5-BlAGcMmC.js";import"./bucket-13-DEUQBRGC.js";import"./story-helper-BB2of0Wm.js";import"./useFocusRowExpander-9BajiKyr.js";import"./TableSelectRow-BKjySdBz.js";const rr={title:"IBM Products/Components/Datagrid/Slug",component:B,tags:["autodocs"],parameters:{styles:M,docs:{page:()=>p.jsx(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI slug can be used within the Datagrid for both column headers and rows. To include a column header AI slug, include a `slug` property within your column definition and include the Slug component as it's own custom component",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  slug: <ExampleSlug />,
}
`}},{description:"or used directly from the Slug component itself",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  slug: (
    <Slug className="slug-container" autoAlign={false} align="bottom-right">
      <SlugContent>
        ...
        ...
      </SlugContent>
    </Slug>
  ),
}
`}},{description:"To include a slug on the row level, include a `slug` property in your row data with the same structure as outlined above."}]})},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleSlug"]},Q=(o,r)=>[{Header:"Row Index",accessor:(u,m)=>m,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,slug:!o&&p.jsx(h,{align:r})},{Header:"Someone 1",accessor:"someone1",slug:!o&&p.jsx(h,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],l={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:o=>{console.log("row size changed to: ",o)},rowActions:[{id:"edit",itemText:"Edit",icon:J,onClick:w("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:K,isDelete:!0,onClick:w("Clicked row action: delete")}]},d={gridTitle:l.gridTitle,gridDescription:l.gridDescription,useDenseHeader:l.useDenseHeader,rowSize:l.rowSize,rowSizes:l.rowSizes,onRowSizeChange:l.onRowSizeChange},U=({row:o})=>{const r=_();return p.jsxs("div",{className:`${r}__test-class-with-prefix-hook`,children:["Content for row index: ",o.id]})},X=({rowSlug:o,rowSlugAlign:r,withSorting:u,withSelect:m,withExpansion:S,...c})=>{const v=W.useMemo(()=>Q(o,r),[]),[j]=I.useState(V(10,2,{enableAIRow:o,slugAlign:r})),k=F({columns:v,data:j,DatagridActions:O,ExpandedRowContentComponent:U,...c.defaultGridProps},u?L:"",m?q:"",S?$:"");return p.jsx(B,{datagridState:k})},g=({rowSlug:o,rowSlugAlign:r,withSorting:u,withSelect:m,withExpansion:S,...c})=>p.jsx(X,{defaultGridProps:{...c},withSorting:u,rowSlug:o,rowSlugAlign:r,withSelect:m,withExpansion:S}),Z="Column slug",t=g.bind({});t.storyName=Z;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...d};const ee="Column slug sort",i=g.bind({});i.storyName=ee;i.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};i.args={...d,withSorting:!0};const oe="Row slug",n=g.bind({});n.storyName=oe;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...d,rowSlug:!0,rowSlugAlign:"right"};const re="Row slug with selection",s=g.bind({});s.storyName=re;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...d,rowSlug:!0,rowSlugAlign:"right",withSelect:!0};const te="Row slug with selection and expansion",a=g.bind({});a.storyName=te;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...d,rowSlug:!0,rowSlugAlign:"right",withSelect:!0,withExpansion:!0};var x,C,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var H,D,y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var z,T,f;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var R,A,b;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(b=(A=s.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var N,G,P;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(P=(G=a.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const tr=["SlugColumnHeaderStory","SlugSortableColumnHeaderStory","SlugRowStory","SlugRowSelectionStory","SlugRowSelectionAndExpandStory"];export{t as SlugColumnHeaderStory,a as SlugRowSelectionAndExpandStory,s as SlugRowSelectionStory,n as SlugRowStory,i as SlugSortableColumnHeaderStory,tr as __namedExportsOrder,rr as default};
