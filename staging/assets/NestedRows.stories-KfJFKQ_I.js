import{p as Q,j as l,c as $}from"./settings-B0yoEqB-.js";import{r as x,R as f}from"./index-BwDkhjyp.js";import{a as G}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as N,a as Z,m as D,u as z}from"./_storybook-styles-CychWhZE.js";import{D as H}from"./DatagridActions-QExTp5JD.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as ee}from"./StoryDocsPage-ChoQ20NW.js";import{c as T}from"./useMergedRefs-CY5AfkP4.js";import{u as te}from"./useFocusRowExpander-9BajiKyr.js";import{h as oe}from"./events-D6dlm1BF.js";import{u as re}from"./useSelectRows-B15I2Ah2.js";import{a as se}from"./bucket-6-DVxyWg0u.js";import{T as ie}from"./bucket-16-DL-AnbF2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./index-D2JPet7M.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./devtools-Cvhd47uB.js";import"./feature-flags-DaCaCBcF.js";import"./TableRow-CMq_6z-l.js";import"./wrapComponent-DiyfoJNm.js";import"./bucket-0-B0v4OsOH.js";import"./TableToolbar-Dxy_jSBy.js";import"./Text-CiWJR74P.js";import"./ErrorEmptyState-CaCg9ZED.js";import"./Link-CYjur6eE.js";import"./EmptyState-C99fAONT.js";import"./props-helper-TFaonUid.js";import"./EmptyStateV2-CXmn_rfu.js";import"./iframe-BBSBJ9v0.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-BKX974k2.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-B2cShDq1.js";import"./NoDataIllustration-BpOCLdu-.js";import"./NotFoundEmptyState-Bd7uIjya.js";import"./NotFoundIllustration-6y1G8FO-.js";import"./useMultipleKeyTracking-TKcR8IhZ.js";import"./extends-CCbyfPlC.js";import"./index-D4z3D3nr.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./usePreviousValue-DDnp_zt4.js";import"./useResizeObserver-CYrpFlRY.js";import"./useWindowResize-CQlRr8UY.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-BaaFYui-.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-Di2vWyb4.js";import"./index-DLwhpbfx.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-CTTBqoiX.js";import"./Search-C-IZ1uID.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-BdOImxz7.js";import"./index-BYHiJ3ZX.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-CO2N4_EX.js";import"./ButtonSet-reKR4OAu.js";import"./InlineLoading-C8yXZ83a.js";import"./Checkbox-BqOSqAbR.js";import"./bucket-18-CV2-K6tq.js";import"./DatePicker-B0hN9vV1.js";import"./bucket-1-BLdYOqeC.js";import"./Dropdown-72ZSyaFY.js";import"./index-DCRLsKDD.js";import"./index-DcAOwtUU.js";import"./FormGroup-B8MM2mOm.js";import"./NumberInput-cwIFqPC6.js";import"./useNormalizedInputProps-zMYHe45M.js";import"./bucket-15-BtEKbmNl.js";import"./RadioButton-B_Cet1lQ.js";import"./RadioButtonGroup-Bbs-xIeU.js";import"./MultiSelect-B3LL4IfL.js";import"./index-n5c_F1iv.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-DxQ5dgYp.js";import"./Tag-NhnQDXh6.js";import"./DefinitionTooltip-rqwY9pVN.js";import"./ComposedModal-BsRPX6M2.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-D0hq9jV7.js";import"./usePortalTarget-BFF9_zHB.js";import"./SkeletonText-DgCYmMgG.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-BTlTfnmk.js";import"./bucket-17-DEU5xTcO.js";import"./index-CRLQHgyt.js";import"./bucket-12-DR0XAE11.js";import"./TableToolbarSearch-BM6MIAq0.js";import"./bucket-5-4mfd4DYT.js";import"./bucket-13-DF9rL3Hb.js";import"./story-helper-CLT5J87X.js";import"./TableSelectRow-DUIShEDU.js";const b=`${Q.prefix}--datagrid`,ae=t=>{const s=x.useRef(),i=x.useRef(),d=R=>{s.current=R};te({instance:s==null?void 0:s.current,lastExpandedRowIndex:i==null?void 0:i.current,blockClass:b,activeElement:typeof document<"u"&&document.activeElement});const p=R=>[{id:"expander",Cell:({row:m})=>{const a={...m.getToggleRowExpandedProps(),onClick:c=>{c.stopPropagation(),m.toggleRowExpanded(),i.current=m.id}},{expanderButtonTitleExpanded:r="Collapse row",expanderButtonTitleCollapsed:o="Expand row"}=(s==null?void 0:s.current)||{},n=m.isExpanded?r:o;return m.canExpand&&l.jsx("button",{type:"button","aria-label":n,className:T(`${b}__row-expander`,`${$.prefix}--btn`,`${$.prefix}--btn--ghost`),...a,children:l.jsx(oe,{className:T(`${b}__expander-icon`,{[`${b}__expander-icon--not-open`]:!m.isExpanded,[`${b}__expander-icon--open`]:m.isExpanded})})})},width:48,disableResizing:!0,disableSortBy:!0,Header:""},...R];t.visibleColumns.push(p),t.useInstance.push(d)},L=`${Q.prefix}--datagrid`,v=t=>{ae(t);const s=i=>{x.useEffect(()=>{const{rows:a}=i,r=a.filter(o=>{var n;return(n=o==null?void 0:o.original)==null?void 0:n.defaultExpanded});r!=null&&r.length&&r.map(o=>{var n;if(!(o!=null&&o.isExpanded)&&!(o!=null&&o.hasExpanded)){(n=o==null?void 0:o.toggleRowExpanded)==null||n.call(o),o.hasExpanded=!0;return}})},[i,i.rows]),x.useEffect(()=>{const{rows:a,initialState:r}=i,{expandedRowIds:o}=r;o&&Object.keys(o).forEach(n=>{var E,I;const c=a.filter(_=>{var B,j;return _.id.toString()===n.toString()||((j=(B=_.original)==null?void 0:B.id)==null?void 0:j.toString())===n.toString()});(c.length&&n.toString()===c[0].id.toString()||c.length&&n.toString()===((I=(E=c[0].original)==null?void 0:E.id)==null?void 0:I.toString()))&&c[0].toggleRowExpanded()})},[i]);const d=24,p=(a,{row:r})=>[a,{className:T({[`${L}__carbon-nested-row`]:r.depth>0,[`${L}__carbon-row-expanded`]:r.isExpanded})}],R=(a,{row:r})=>[a,{style:{paddingLeft:`${r.depth>1?d*2+(r.depth-1)*(d+d/3):r.depth===1?d*2:0}px`}}],y=a=>32*a+16,m=(a,{cell:r,instance:o})=>{const n=o.columns.findIndex(c=>c.id===r.column.id)===0;return[a,{style:{marginRight:n&&r.row.depth>0&&parseInt(a.style.width,10)<=y(r.row.depth)+50?`${parseInt(a.style.width,10)-(y(r.row.depth)+50)}px`:"",width:n&&r.row.depth>0?parseInt(a.style.width,10)-y(r.row.depth):a.style.width}}]};Object.assign(i,{withNestedRows:!0}),t.getRowProps.push(p),t.getRowProps.push(R),t.getCellProps.push(m)};t.useInstance.push(s)},go={title:"IBM Products/Components/Datagrid/NestedRows",component:N,tags:["autodocs"],parameters:{styles:Z,docs:{page:()=>l.jsx(ee,{omitCodedExample:!0,blocks:[{title:"Nested rows",description:"Nested rows allow disclosing content in data tables progressively by displaying primary data first (parent row) and enabling users to navigate secondary information levels (child rows).\n- Include the `useNestedRows` hook\n- Make sure that any row you want to have nested rows in your data has a `subRows` property with an array of objects for each nested row. The row expander will be included by default as long as the `useNestedRows` hook is provided and it is detected that a row has `subRows` within it.\n          ",source:{code:`
const datagridState = useDatagrid(
  {
    columns,
    data,
    expanderButtonTitleExpanded: 'Collapse row',
    expanderButtonTitleCollapsed: 'Expand row',
  },
  useNestedRows
);

return <Datagrid datagridState={datagridState} />;
            `}}]})},layout:"padded"},argTypes:{featureFlags:{table:{disable:!0}}}},P=[{Header:"Row Index",accessor:(t,s)=>s,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:50},{Header:"Visits",accessor:"visits",width:60},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],h={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:se,onClick:G("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:ie,isDelete:!0,onClick:G("Clicked row action: delete")}]},C={gridTitle:h.gridTitle,gridDescription:h.gridDescription,useDenseHeader:h.useDenseHeader,rowSize:h.rowSize,rowSizes:h.rowSizes,onRowSizeChange:h.onRowSizeChange},ne=({...t})=>{const s=f.useMemo(()=>P,[]),[i]=x.useState(D(10,2)),d=z({columns:s,data:i,DatagridActions:H,...t.defaultGridProps,getSubRows:p=>p.subRows},v);return l.jsx(N,{datagridState:{...d}})},de=({...t})=>l.jsx(ne,{defaultGridProps:{...t}}),pe="With single-level nested rows",g=de.bind({});g.storyName=pe;g.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};g.args={...C,featureFlags:["Datagrid.useNestedRows"]};const me=({...t})=>{const s=f.useMemo(()=>P,[]),[i]=x.useState(D(10,5,2,2,{id:"testing-user-provided-id"})),d=z({columns:s,data:i,DatagridActions:H,...t.defaultGridProps,getSubRows:p=>p.subRows},v);return l.jsx(N,{datagridState:{...d}})},X=({...t})=>l.jsx(me,{defaultGridProps:{...t}}),ce="With nested rows",u=X.bind({});u.storyName=ce;u.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};u.args={...C};const le=({...t})=>{const s=f.useMemo(()=>P,[]),[i]=x.useState(D(10,5,2,2)),d=z({columns:s,data:i,DatagridActions:H,...t.defaultGridProps,getSubRows:p=>p.subRows},v,re);return l.jsx(N,{datagridState:{...d}})},ge=({...t})=>l.jsx(le,{defaultGridProps:{...t}}),ue="With selectable nested rows",w=ge.bind({});w.storyName=ue;w.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};w.args={...C};const we="With initially expanded nested rows",S=X.bind({});S.storyName=we;S.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};S.args={...C,initialState:{expandedRowIds:{"testing-user-provided-id__1":!0,3:!0}}};var k,U,W;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...args
}) => {
  return <SingleLevelNestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(W=(U=g.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var A,M,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`({
  ...args
}) => {
  return <NestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(F=(M=u.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var O,V,Y;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`({
  ...args
}) => {
  return <SelectableNestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(Y=(V=w.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var q,J,K;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`({
  ...args
}) => {
  return <NestedRows defaultGridProps={{
    ...args
  }} />;
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const uo=["SingleLevelNestedRowsUsageStory","NestedRowsUsageStory","SelectableNestedRowsUsageStory","NestedRowsInitialUsageStory"];export{S as NestedRowsInitialUsageStory,u as NestedRowsUsageStory,w as SelectableNestedRowsUsageStory,g as SingleLevelNestedRowsUsageStory,uo as __namedExportsOrder,go as default};
