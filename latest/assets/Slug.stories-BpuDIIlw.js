import{j as p}from"./settings-DEdZ0TrD.js";import{R as W,r as I}from"./index-BwDkhjyp.js";import{a as _}from"./floating-ui.core.mjs-LzsX8FoD.js";import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as B,a as M,m as V,u as F,b as L,E as h}from"./_storybook-styles-IAKOnpYX.js";import{D as O}from"./DatagridActions-jRZ8vd0V.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as Y}from"./StoryDocsPage-CxMYxNDO.js";import{u as $}from"./useExpandedRow-CWwbWFCs.js";import{u as q}from"./useSelectRows-CDNBOgs3.js";import{a as J}from"./bucket-6-COExmpDO.js";import{T as K}from"./bucket-17-Cv_pKmw7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-BwXSUnsA.js";import"./index-CtP8jiW9.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./devtools-BMJcATO0.js";import"./feature-flags-ZUymDm0z.js";import"./TableRow-CbG9n4BV.js";import"./wrapComponent-DouC4vuJ.js";import"./bucket-0-DWSbtM9A.js";import"./TableToolbar-CndNLzEH.js";import"./Text-DzW_iQLr.js";import"./ErrorEmptyState-B-CngyBr.js";import"./Link-Dcx-j9tl.js";import"./EmptyState-AwaedRSM.js";import"./props-helper-Bq60RLbY.js";import"./EmptyStateV2-CDbEDoov.js";import"./iframe-HHF2JHdl.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-ByS_MGs5.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-DNEhri3_.js";import"./NoDataIllustration-CDaoSmH9.js";import"./NotFoundEmptyState-DZqpxlLS.js";import"./NotFoundIllustration-BjNgXaPp.js";import"./index.esm-D1ej05RU.js";import"./usePreviousValue-DDnp_zt4.js";import"./extends-CCbyfPlC.js";import"./index-DeGQKZDn.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-B5WYYPi1.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-DHwtw2Df.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-BkXf54zg.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-CMtJJchE.js";import"./Search-BNsOkhPW.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-nEnLeouB.js";import"./index-B19trKVm.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-aBtXfkQ8.js";import"./ButtonSet-B0eeKBZg.js";import"./InlineLoading-b-XMbmpT.js";import"./Checkbox-BLZlWiKF.js";import"./bucket-18-BepxNBd9.js";import"./DatePicker-DvhXI59Q.js";import"./bucket-1-XoaEU4JE.js";import"./Dropdown-B7QPq3_7.js";import"./index-DEc8pD2w.js";import"./index-DcAOwtUU.js";import"./FormGroup-2MNJUnTV.js";import"./NumberInput-B_FODUnF.js";import"./useNormalizedInputProps-SnNF9w2p.js";import"./bucket-15-BdI7pN81.js";import"./RadioButton-RVFxoHP5.js";import"./RadioButtonGroup-C9o-g5EX.js";import"./MultiSelect-2vXNKeno.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-BmEQlLlo.js";import"./Tag-D0bJ7i5y.js";import"./DefinitionTooltip-BKLgLTUt.js";import"./ComposedModal-Bz57YeIR.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-DKhmFa_m.js";import"./index-Jn_1HPt0.js";import"./usePortalTarget-C9qZOTQP.js";import"./OperationalTag-B3HIPX8m.js";import"./SkeletonText-CfIwLT9n.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-B87aoAka.js";import"./index-wQDODWB9.js";import"./bucket-12-rDfie8WR.js";import"./TableToolbarSearch-DM6tuCEg.js";import"./bucket-5-CnrlLpeo.js";import"./bucket-13-K9d64cD_.js";import"./story-helper-CtkteSRf.js";import"./useFocusRowExpander-9BajiKyr.js";import"./TableSelectRow-ap-9JYe1.js";const or={title:"IBM Products/Components/Datagrid/Slug",component:B,tags:["autodocs"],parameters:{styles:M,docs:{page:()=>p.jsx(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI slug can be used within the Datagrid for both column headers and rows. To include a column header AI slug, include a `slug` property within your column definition and include the Slug component as it's own custom component",source:{code:`
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
}`,...(P=(G=a.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const rr=["SlugColumnHeaderStory","SlugSortableColumnHeaderStory","SlugRowStory","SlugRowSelectionStory","SlugRowSelectionAndExpandStory"];export{t as SlugColumnHeaderStory,a as SlugRowSelectionAndExpandStory,s as SlugRowSelectionStory,n as SlugRowStory,i as SlugSortableColumnHeaderStory,rr as __namedExportsOrder,or as default};
