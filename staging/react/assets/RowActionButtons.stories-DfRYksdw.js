var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ag as H,r as g,C as v}from"./iframe-O9B_Dp_t.js";import{s as P,m as A}from"./_storybook-styles-Cn0XBeBy.js";import{D as h}from"./DatagridActions-DGZsbU7u.js";import{D}from"./DatagridPagination-DrXLqWj3.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-PqmLu7as.js";import{u as k}from"./useActionsColumn-Dh1pUqW-.js";import{u as f}from"./useStickyColumn-bGFJ12eI.js";import{u as E}from"./useSelectRows-Drw6uhbf.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-yuMI_qTT.js";import{T}from"./bucket-19-DfaBoN51.js";import{a as u}from"./bucket-0-BR4TyOdb.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BoI_oxUl.js";import"./index-CYLslu2X.js";import"./index-DdvpTaWJ.js";import"./bucket-20-BYEksR4G.js";import"./bucket-7-DJHepK9E.js";import"./MenuItem-Ch4QZlhC.js";import"./Text-CD4MWSZF.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-WO9d_haf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-AOOae36a.js";import"./ComposedModal-i-JPFqjV.js";import"./mergeRefs-BH0-8uDG.js";import"./index-D__qcsVc.js";import"./LayerContext-Bct4nWnc.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-rfkWZjSo.js";import"./InlineLoading--VyzWqGo.js";import"./ButtonSet-yR2zg6Pu.js";import"./wrapFocus-DSQ_FNNh.js";import"./OverflowMenuItem-DE8DpUn_.js";import"./TableToolbarSearch-BO2hWyST.js";import"./wrapComponent-B40Kt4X1.js";import"./Search-2gH7qaYi.js";import"./FormContext-DFINhmTx.js";import"./bucket-16-5JPlgjIq.js";import"./TableToolbar-CONxneD5.js";import"./TableRow-ByBm-ez8.js";import"./bucket-1-hLZTjQRY.js";import"./index-VOpjc0lr.js";import"./index-Dui_dv2o.js";import"./bucket-14-BhkSVdVU.js";import"./useOutsideClick-CcHYmmH3.js";import"./Dropdown-DDW0po6o.js";import"./useNormalizedInputProps-ClcHRULe.js";import"./bucket-21-D-SZI-qq.js";import"./downshift.esm-Dz4Ky7hi.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DzB4OZpy.js";import"./useFilterContext-DvwYr312.js";import"./useIsomorphicEffect-B_0rKcAy.js";import"./bucket-15-D15wjn_d.js";import"./Pagination-DijuVx76.js";import"./usePreviousValue-D2JiEJfp.js";import"./Select-TIpfBg38.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-B-Q4QNr8.js";import"./MultiSelect-BNJrOubG.js";import"./Checkbox-BKgbWAAX.js";import"./devtools-C5uvsY8l.js";import"./ErrorEmptyState-UJe-oKPb.js";import"./EmptyState-BJDC8xJW.js";import"./EmptyStateV2.deprecated-DKiSfpaI.js";import"./Link-Bkxzc5gt.js";import"./ErrorIllustration-KKPUYq4z.js";import"./useId-hFMDi7bC.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Brzh9L41.js";import"./NoDataIllustration-BjqfM6Qb.js";import"./NotFoundEmptyState-BIu5k_0z.js";import"./NotFoundIllustration-DyE7UJ4T.js";import"./index.esm-B4WzpKDx.js";import"./usePreviousValue-Fp3wVgvE.js";import"./useResizeObserver-CCIbpI42.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BE__AMQR.js";import"./props-helper-BNJB8r1t.js";import"./useClickOutside-CyqzWiRF.js";import"./AccordionItem-Cyeq-pVU.js";import"./RadioButton-NpdWzYHx.js";import"./DatePicker-CRP3KFEB.js";import"./FormGroup-DuUW4ox8.js";import"./NumberInput-kVdzS54w.js";import"./bucket-18-DsaZ136a.js";import"./RadioButtonGroup-y_gN2yqd.js";import"./index-DphEcO7w.js";import"./usePrefersReducedMotion-BixTOlMV.js";import"./usePresence-Bkf5S7MM.js";import"./ActionSet-C8sEoSeX.js";import"./useWindowResize-DGqU049Y.js";import"./TagSet-Cu-1VBil.js";import"./Tag-CPxoJg4V.js";import"./DefinitionTooltip-B8H9u6N3.js";import"./DismissibleTag-CSVTvAcW.js";import"./usePortalTarget-Crqijfut.js";import"./OperationalTag-41dcbxy2.js";import"./SkeletonText-CEa_FvAG.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DZtI8hyW.js";import"./TableSelectRow-BH0nK5tZ.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Lo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...m.parameters?.docs?.source}}};const Yo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Yo as __namedExportsOrder,Lo as default};
//# sourceMappingURL=RowActionButtons.stories-DfRYksdw.js.map
