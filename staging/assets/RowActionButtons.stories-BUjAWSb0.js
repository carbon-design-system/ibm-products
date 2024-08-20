import{j as m}from"./settings-DDDiKwEV.js";import{R as d,r as w}from"./index-BwDkhjyp.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as g,a as j,m as A,u as h}from"./_storybook-styles-DWjD7-VX.js";import{S as z}from"./StoryDocsPage-C3kkfnsW.js";import{D as b}from"./DatagridActions-CYe1I4M6.js";import{D}from"./DatagridPagination-sK1QUb_k.js";import{A as o}from"./getArgTypes-CUsKgYxs.js";import{u as k}from"./useActionsColumn-B6Z5_bGx.js";import{u as f}from"./useStickyColumn-vENOag5_.js";import{u as N}from"./useSelectRows-Brfe138I.js";import{a as I}from"./bucket-6-CS7rNrxx.js";import{T as M}from"./bucket-16-DFCeQRVG.js";import{C as G}from"./events-Dp3Lalez.js";import{A as u}from"./bucket-0-Cw-xsoio.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./floating-ui.react-BgNs4SA8.js";import"./index-BONylQH5.js";import"./index-BLdp044m.js";import"./v4-CQkTLCs1.js";import"./devtools-C7Iu0rt6.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./TableRow-CUMskZDA.js";import"./wrapComponent-EQHqN-fS.js";import"./TableToolbar-DziYVX_8.js";import"./Text-DpcC0Z3Y.js";import"./ErrorEmptyState-2ggPGo6Y.js";import"./Link-DHwEx_0L.js";import"./EmptyState-DXGs2fSK.js";import"./props-helper-D2PZmIqz.js";import"./EmptyStateV2-3mI4Vf1q.js";import"./iframe-DqqWLuMW.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-BhpMbBlL.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-BfREo0aM.js";import"./NoDataIllustration-DPQ5KKyn.js";import"./NotFoundEmptyState-DC5R5GfK.js";import"./NotFoundIllustration-jlgxfDSo.js";import"./index.esm-CshDyTK3.js";import"./usePreviousValue-DDnp_zt4.js";import"./extends-CCbyfPlC.js";import"./index-Ypkytheb.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./useResizeObserver-CYrpFlRY.js";import"./useWindowResize-DdSPNfdm.js";import"./useControllableState-DwpxGhsf.js";import"./useAttachedMenu-Ba8a--1h.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-DW1YkzHB.js";import"./useClickOutside-Dcd11u7q.js";import"./AccordionItem-PQBPj2OV.js";import"./Search-DEO4IeZ8.js";import"./FormContext-C7kRVu4t.js";import"./bucket-14-BmSAzvkd.js";import"./index-Bd0eoXr0.js";import"./LayerContext-DbU-6VX4.js";import"./motionConstants-CR5hPmRc.js";import"./tslib.es6-B4_xh3D5.js";import"./use-reduced-motion-BisnjenD.js";import"./index-DkUr2NOz.js";import"./ActionSet-7kyZHLkU.js";import"./ButtonSet-Dwf_xrN7.js";import"./InlineLoading-BvhLs1sa.js";import"./Checkbox-Eq23awQn.js";import"./bucket-18-D_XNNF5i.js";import"./DatePicker-Dr8agIg8.js";import"./bucket-1-DMFHDXY9.js";import"./Dropdown-kl0VN08K.js";import"./index-C7XzgV7l.js";import"./index-DcAOwtUU.js";import"./FormGroup-DoLxBdhK.js";import"./NumberInput-NTFTuQL2.js";import"./useNormalizedInputProps-DtF50Ia0.js";import"./bucket-15-DqJqYgDY.js";import"./RadioButton-Dk88TpeT.js";import"./RadioButtonGroup-CQZQsCyP.js";import"./MultiSelect-CexdsJ1A.js";import"./index-CfyPTyT-.js";import"./debounce-CI22LTdx.js";import"./toNumber-DVQITUtX.js";import"./TagSet-CHGYYjbB.js";import"./Tag-CpKCZnUV.js";import"./DefinitionTooltip-MY7U3cvT.js";import"./ComposedModal-BB3t0zem.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-BK1SMh4y.js";import"./usePortalTarget-BD2WdNlr.js";import"./SkeletonText-CniiJqu_.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-C9z6BHTc.js";import"./bucket-17-B2E3mTyd.js";import"./story-helper-BB2of0Wm.js";import"./index-D9ju4W2A.js";import"./bucket-12-C33cLYA1.js";import"./TableToolbarSearch-D107niuO.js";import"./bucket-5-BlAGcMmC.js";import"./bucket-13-DEUQBRGC.js";import"./Select-BVpTfUmF.js";import"./SelectItem-CxQTInqA.js";import"./TableSelectRow-BKjySdBz.js";const E=()=>m.jsx(z,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
const columns = [
  // other columns
  {
    Header: '',
    accessor: 'actions',
    isAction: true,
  },
];
const onActionClick = (actionId, row, event) => {};
const datagridState = useDatagrid(
  {
    columns,
    data,
    rowActions: [
      {
        id: 'edit',
        itemText: 'Edit',
        onClick: onActionClick,
      },
      {
        id: 'hidden',
        itemText: 'Hidden item',
        onClick: onActionClick,
        shouldHideMenuItem: () => true,
      },
      {
        id: 'delete',
        itemText: 'Delete',
        hasDivider: true,
        isDelete: true,
        onClick: onActionClick,
      },
    ],
  },
  useActionsColumn
);

return <Datagrid datagridState={datagridState} />;`}}]});E.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const $o={title:"IBM Products/Components/Datagrid/RowActionButtons",component:g,tags:["autodocs"],parameters:{styles:j,docs:{page:E},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:(t,s)=>s,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],e={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,onClick:i("Clicked row action: delete"),align:"top-right"}]},U=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},O=({...t})=>m.jsx(U,{defaultGridProps:{...t}}),W={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions},_="With row action buttons",a=O.bind({});a.storyName=_;a.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};a.args={...W};const F=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},L=({...t})=>m.jsx(F,{defaultGridProps:{...t}}),V={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:G,onClick:i("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,hasDivider:!0,onClick:i("Clicked row action: delete")}]},Y="With many row action buttons",n=L.bind({});n.storyName=Y;n.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};n.args={...V};const q=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k,N);return m.jsx(g,{datagridState:l})},J=()=>[{label:"Duplicate",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:i("Clicked batch action button"),hasDivider:!0,kind:"danger"}],K=({...t})=>m.jsx(q,{defaultGridProps:{...t}}),Q={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,toolbarBatchActions:J(),batchActions:!0},X="With row action buttons and batch actions",c=K.bind({});c.storyName=X;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};c.args={...Q};var T,C,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var x,B,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(R=(B=n.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var H,v,P;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const te=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{n as ManyRowActionButtonsUsageStory,c as RowActionButtonsBatchActionsUsageStory,a as RowActionButtonsUsageStory,te as __namedExportsOrder,$o as default};
