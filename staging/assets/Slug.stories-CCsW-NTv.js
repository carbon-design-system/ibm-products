import{j as p}from"./settings-RejM0MIl.js";import{R as W,r as I}from"./index-BwDkhjyp.js";import{a as _}from"./floating-ui.react-DMp4y4mM.js";import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as B,a as M,m as V,u as F,b as L,E as h}from"./_storybook-styles-BIN39T_O.js";import{D as O}from"./DatagridActions-In0yObUZ.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as Y}from"./StoryDocsPage-D0ZlMQjf.js";import{u as $}from"./useExpandedRow-DPF0YuaU.js";import{u as q}from"./useSelectRows-CppYFAuV.js";import{a as J}from"./bucket-6-W_rBHQkv.js";import{T as K}from"./bucket-16-WQgD5HPz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-C3mJejkM.js";import"./index-CzgULgXp.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./devtools-DM-SaWXd.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./TableRow-D4GAcehC.js";import"./wrapComponent-DLIMH2gw.js";import"./bucket-0-BcfJCBD4.js";import"./TableToolbar-9XeADowj.js";import"./Text-DgK8TUAU.js";import"./ErrorEmptyState-TgK23jqY.js";import"./Link-Gytx0Oe9.js";import"./EmptyState-DNe9WRfc.js";import"./props-helper-MxF4Ec7y.js";import"./EmptyStateV2-Bke8DF6Q.js";import"./iframe-DoewZ_8I.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-DHlDif52.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-DNIc1-Sf.js";import"./NoDataIllustration-CafjfHFp.js";import"./NotFoundEmptyState-B275sfHi.js";import"./NotFoundIllustration-HJPYCFYl.js";import"./index.esm-CSqiz9SM.js";import"./usePreviousValue-DDnp_zt4.js";import"./extends-CCbyfPlC.js";import"./index-D1h9ywnJ.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./useWindowResize-DwFaXXYX.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-JDAsPBX5.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DEiA5Ca6.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-Ca1ApQ7o.js";import"./Search-CQpZNba5.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-Cn0Kqmaq.js";import"./index-DzDmuWYl.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-BNPDKGvd.js";import"./ButtonSet-BBETHK0Z.js";import"./InlineLoading-MFTaEf7Q.js";import"./Checkbox-BxJ5c5CY.js";import"./bucket-18-B1hZKqJv.js";import"./DatePicker-DZDWU3MO.js";import"./bucket-1-BLq-QJNX.js";import"./Dropdown-0xEPvOFl.js";import"./index-mxx-Mve7.js";import"./index-DcAOwtUU.js";import"./FormGroup-vcmiRT8k.js";import"./NumberInput-DaowFkqw.js";import"./useNormalizedInputProps-BOQjwhLP.js";import"./bucket-15-Xl1fzU6U.js";import"./RadioButton-DMRFpkTt.js";import"./RadioButtonGroup-B5IEXBc7.js";import"./MultiSelect-BBdaLlUW.js";import"./index-CfyPTyT-.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-C-3UtOfC.js";import"./Tag-BgY6Gmf7.js";import"./DefinitionTooltip-CgAlpbRh.js";import"./ComposedModal-BzqiIsg6.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-C8dDhlyb.js";import"./usePortalTarget-BvuJDQDm.js";import"./SkeletonText-CAZWEpYR.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-CmlJpOw_.js";import"./bucket-17-Ct9mOVQH.js";import"./index-CDqmW12E.js";import"./bucket-12-jEhP6zSm.js";import"./TableToolbarSearch-B5YNsK_y.js";import"./bucket-5-CkJxodIN.js";import"./bucket-13-Bb3ER_7z.js";import"./story-helper-BJP0smTN.js";import"./useFocusRowExpander-9BajiKyr.js";import"./TableSelectRow-GWT-ldMa.js";const tr={title:"IBM Products/Components/Datagrid/Slug",component:B,tags:["autodocs"],parameters:{styles:M,docs:{page:()=>p.jsx(Y,{omitCodedExample:!0,blocks:[{description:"A Carbon AI slug can be used within the Datagrid for both column headers and rows. To include a column header AI slug, include a `slug` property within your column definition and include the Slug component as it's own custom component",source:{code:`
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
}`,...(P=(G=a.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const ir=["SlugColumnHeaderStory","SlugSortableColumnHeaderStory","SlugRowStory","SlugRowSelectionStory","SlugRowSelectionAndExpandStory"];export{t as SlugColumnHeaderStory,a as SlugRowSelectionAndExpandStory,s as SlugRowSelectionStory,n as SlugRowStory,i as SlugSortableColumnHeaderStory,ir as __namedExportsOrder,tr as default};
