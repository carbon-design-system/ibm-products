var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-Cyj4LIh5.js";import{s as P,m as A}from"./_storybook-styles-BfZsCYec.js";import{D as h}from"./DatagridActions-C2knOGDR.js";import{D}from"./DatagridPagination-BOvgjrlG.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-CVVoMHMT.js";import{u as k}from"./useActionsColumn-BOJviwf2.js";import{u as f}from"./useStickyColumn-DPQT595T.js";import{u as E}from"./useSelectRows-Drg5iB_9.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-DL_KxiA5.js";import{T}from"./bucket-19-B7hMRFoz.js";import{A as u}from"./bucket-0-DaAi4Fe5.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-hGDgkZDo.js";import"./index-CrQOVYp8.js";import"./index-DbpC7nej.js";import"./bucket-7-Dm8yNK4V.js";import"./bucket-20-Dg4NJRV5.js";import"./MenuItem-CrhULKEy.js";import"./Text-B0E6WkMH.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-C2Q1Osuc.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CO01KbI6.js";import"./ComposedModal-DytiUj0S.js";import"./mergeRefs-BH0-8uDG.js";import"./index-vioIMqkQ.js";import"./LayerContext-DFxG2aK0.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-BAKBuigj.js";import"./InlineLoading-B1oqkF9D.js";import"./ButtonSet-C5cAYjyA.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-Xv7dNCVp.js";import"./OverflowMenuItem-A5L2ErRE.js";import"./TableToolbarSearch-Cl0MBhTZ.js";import"./wrapComponent-CSLQrzVD.js";import"./Search-DwAgCQJ9.js";import"./FormContext-DyuhYneE.js";import"./bucket-16-BokBCq4p.js";import"./index-sdxIuNoj.js";import"./bucket-13-BkGR996w.js";import"./useOutsideClick-C3GdYngI.js";import"./Dropdown-DFN0MI2V.js";import"./useNormalizedInputProps-DwDb6zRU.js";import"./downshift.esm-CJNHbtOw.js";import"./inheritsLoose-CdLKJotq.js";import"./index-Dvx0FKHV.js";import"./useFilterContext-D6Ld6Zl6.js";import"./useIsomorphicEffect-CQvdjB27.js";import"./bucket-15-NHicM6Y1.js";import"./Pagination-BLrOn1jh.js";import"./usePreviousValue-D9LwyvxN.js";import"./Select-BYCQEHsA.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-C9taOIM6.js";import"./MultiSelect-C2K54h7R.js";import"./Checkbox-DK3hYZIl.js";import"./devtools-DMaYy3Jo.js";import"./TableRow-me4Jvbcm.js";import"./bucket-1-Bb5Y-ET4.js";import"./TableToolbar-8MyzU2mJ.js";import"./index-DZkQvb7J.js";import"./ErrorEmptyState-BwzerY7y.js";import"./EmptyState-BSFMvmz1.js";import"./EmptyStateV2.deprecated-B8Z-XGEj.js";import"./Link-B2pfHtX8.js";import"./ErrorIllustration-B8vMAyAC.js";import"./useId-CZbCsq9r.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CQQlat4h.js";import"./NoDataIllustration-DGE3hKFd.js";import"./NotFoundEmptyState-Bo2aMCbn.js";import"./NotFoundIllustration-BnSkb4Jn.js";import"./index.esm-C4umZs2t.js";import"./usePreviousValue-Bjujx9j5.js";import"./useResizeObserver-YS0buUPl.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-BQHgwKad.js";import"./props-helper-BeW6tFoM.js";import"./useClickOutside-B93TtIXi.js";import"./AccordionItem-BwePvo_9.js";import"./index-BUCxBALq.js";import"./DatePicker-pVaaULEx.js";import"./FormGroup-gic93zTi.js";import"./NumberInput-CBcnLFy_.js";import"./bucket-17-Bj5oC3tN.js";import"./RadioButtonGroup-DzzMyLRI.js";import"./usePrefersReducedMotion-BgCpKvj3.js";import"./usePresence-CzBXfber.js";import"./ActionSet-DoSddDiM.js";import"./useWindowResize-9pQxPi5j.js";import"./TagSet-Yu_7ogjA.js";import"./Tag-CJ0sxIBB.js";import"./DefinitionTooltip-BE1ILu5m.js";import"./DismissibleTag-25UO8O-0.js";import"./usePortalTarget-Bek0sZsK.js";import"./OperationalTag-BD6ve_XB.js";import"./SkeletonText-BF68X2de.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BDxBMB_o.js";import"./TableSelectRow-3dX3-4Dc.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Fo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Lo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Lo as __namedExportsOrder,Fo as default};
//# sourceMappingURL=RowActionButtons.stories-OQctkial.js.map
