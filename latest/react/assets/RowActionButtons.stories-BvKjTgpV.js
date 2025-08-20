import{e as o,S as B,r as w,C as R}from"./iframe-6Ea7Lnhj.js";import{s as H,m as g}from"./_storybook-styles-CQW9oa64.js";import{D as A}from"./DatagridActions-DtbyxzqF.js";import{D as h}from"./DatagridPagination-BVxnZsMw.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-Dww695vK.js";import{u as b}from"./useActionsColumn--FKiIv8h.js";import{u as k}from"./useStickyColumn-C5HAFuFf.js";import{u as v}from"./useSelectRows-DVRxYSdF.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-BuyWAmS2.js";import{T as C}from"./bucket-17-BqAcT4u7.js";import{A as l}from"./bucket-0-BdiYAbr0.js";import"./bucket-2-SPcLEvyK.js";import"./index-DRv8Cx3Q.js";import"./bucket-18-PnJVTM1G.js";import"./bucket-7-DDubFi6M.js";import"./ComposedModal-ClCBM6ur.js";import"./index-BEhuL1MR.js";import"./index-B5Rz7fVC.js";import"./LayerContext-CYcSFm8I.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BQOUGgo1.js";import"./InlineLoading-DYP2wGFG.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-8mk42Nj3.js";import"./Text-CVT3kS-3.js";import"./utils-DSvpuMUF.js";import"./TableToolbarSearch-B9haTG4V.js";import"./wrapComponent-Br9tHTRf.js";import"./Search-Dtb-kHGZ.js";import"./FormContext-D8Mn8o3U.js";import"./bucket-15-CAEq-59T.js";import"./Dropdown-CJiIVugV.js";import"./index-DegWqaip.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-B56Rjjwc.js";import"./MenuItem-0vI0bCph.js";import"./useControllableState-sQbf9Uv-.js";import"./useAttachedMenu-DlDWY8of.js";import"./index-C_1lpD7R.js";import"./index-B8GXHlmk.js";import"./bucket-12-DOa0UrGz.js";import"./useOutsideClick-C2JpVKPa.js";import"./OverflowMenuItem-C4qZrH_9.js";import"./useFilterContext-Bvcctoc4.js";import"./bucket-14-BCa3FpXH.js";import"./Pagination-B1POIzdP.js";import"./Select-C-W9fH1i.js";import"./SelectItem-BKg7931i.js";import"./MultiSelect-DlIAEBm-.js";import"./Checkbox-Bhl7pOTE.js";import"./devtools-t5hVrn0E.js";import"./TableRow-CQ08Va_q.js";import"./bucket-1--YU9IgqT.js";import"./TableToolbar-CS8C2llb.js";import"./index-BeeWDbkh.js";import"./ErrorEmptyState-Cc8nx_xR.js";import"./EmptyState-CZj-C2Z_.js";import"./EmptyStateV2-DjecLa_i.js";import"./Link-CmZ5dDmd.js";import"./props-helper-BxLyO66a.js";import"./ErrorIllustration-CgWkJiq1.js";import"./useId-BZQMDDt0.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-ClRlgUrZ.js";import"./NoDataIllustration-BZgOfQqd.js";import"./NotFoundEmptyState-NyR-QLpl.js";import"./NotFoundIllustration-DzeuBZdb.js";import"./index.esm-BVE6nUHW.js";import"./usePreviousValue-DiMdwUAm.js";import"./useResizeObserver-CotxvpG2.js";import"./useIsomorphicEffect-ysnJcn6W.js";import"./getFocusableElements-BW7cf991.js";import"./index-DsGHyTPv.js";import"./useClickOutside-CuY2rVwU.js";import"./AccordionItem-D7_IyILq.js";import"./DatePicker-DHP833ao.js";import"./FormGroup-CjTSc011.js";import"./NumberInput-ChAV0JSA.js";import"./useNormalizedInputProps-mUOGJzSx.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CvJUHKHx.js";import"./RadioButton-Qd_nE-nY.js";import"./RadioButtonGroup-noIwC_Jp.js";import"./usePrefersReducedMotion-Dli3-6Pp.js";import"./usePresence-Dt2KC1z3.js";import"./ActionSet-eDEhiAWN.js";import"./useWindowResize-CWHFMd4f.js";import"./TagSet-CPNei8P8.js";import"./Tag-Dlmz-yFz.js";import"./DefinitionTooltip-B2nUGEgz.js";import"./DismissibleTag-CqdcL7KM.js";import"./usePortalTarget-RdbJmDu1.js";import"./OperationalTag-BmphgG3b.js";import"./SkeletonText-D3QFfIzL.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-Cc6XVsAb.js";import"./TableSelectRow-k96HeY78.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,Oo={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...d.parameters?.docs?.source}}};const Go=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Go as __namedExportsOrder,Oo as default};
