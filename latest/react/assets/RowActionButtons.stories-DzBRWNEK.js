import{e as o,S as B,r as w,C as R}from"./iframe-CtoKioxt.js";import{s as H,m as g}from"./_storybook-styles-BrQeCyV7.js";import{D as A}from"./DatagridActions-DOXibWhp.js";import{D as h}from"./DatagridPagination-DABDJZD2.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CGd0x8Z3.js";import{u as b}from"./useActionsColumn-BJNtwvPe.js";import{u as k}from"./useStickyColumn-BBXNKCnH.js";import{u as v}from"./useSelectRows-BGO2pPuU.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-i50ze4pO.js";import{T as C}from"./bucket-18-22lNaWnZ.js";import{A as l}from"./bucket-0-DXtRMgo-.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-Dc1HokXJ.js";import"./index-HEmqX-Cu.js";import"./bucket-7-CeLNIsQe.js";import"./bucket-19-uAShayzU.js";import"./ComposedModal-pOSCZM5i.js";import"./index-BSoC1KHw.js";import"./LayerContext-BaPPZ-kh.js";import"./clamp--00YEiB8.js";import"./ButtonSet-Ce5dyIwV.js";import"./InlineLoading-DkB9Uu8m.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-BVfmuAZ2.js";import"./Text-vtctM3R-.js";import"./utils-CqcRd8Iu.js";import"./TableToolbarSearch-Cl_R2Czt.js";import"./wrapComponent-CXYKIYfS.js";import"./Search-M8VRMu75.js";import"./FormContext-4Dpo2sxO.js";import"./bucket-15-YwHKJHA7.js";import"./Dropdown-CEppJsEi.js";import"./index-Bexmo1Ys.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-BVbxDgXH.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-DjmtQX8o.js";import"./useControllableState-Dfz1WBb9.js";import"./useAttachedMenu-Bqdk6DpD.js";import"./index-DpImqhDG.js";import"./index-DXIofiWL.js";import"./bucket-13-DH4S8Q-V.js";import"./useOutsideClick-DrI2TK2-.js";import"./OverflowMenuItem-DjjDZLJ3.js";import"./useFilterContext-CWPq5HVw.js";import"./useIsomorphicEffect-CGzYvzD1.js";import"./bucket-14-77bPhugF.js";import"./Pagination-8AsCZutz.js";import"./Select-C7kr957Z.js";import"./SelectItem-D_CE_QNr.js";import"./MultiSelect-LN_GYSUt.js";import"./Checkbox-ymzLf8mF.js";import"./devtools-BpDcN5qy.js";import"./TableRow-BMp98_tw.js";import"./bucket-1-C8DJuThw.js";import"./TableToolbar-B5G2iR9g.js";import"./index-DTsfMTRK.js";import"./ErrorEmptyState-Vc13nK2N.js";import"./EmptyState-DE0v8Tkh.js";import"./EmptyStateV2.deprecated-DJ1amQdj.js";import"./Link-DwHVNOML.js";import"./ErrorIllustration-j18xd1Ii.js";import"./useId-DOILeMkW.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CNN5sXDe.js";import"./NoDataIllustration-Ch-4CLKv.js";import"./NotFoundEmptyState-BjTYRvkk.js";import"./NotFoundIllustration-zSN-9En6.js";import"./index.esm-E4Z4ZQDd.js";import"./usePreviousValue-CcZwIsc9.js";import"./useResizeObserver-BRdPmGfe.js";import"./getFocusableElements-BW7cf991.js";import"./index-CLRl8LFm.js";import"./props-helper-B5pvbCOQ.js";import"./useClickOutside-C9XSyVeA.js";import"./AccordionItem-YF8pV8eS.js";import"./DatePicker-B4899aqc.js";import"./documentLang-E105Y72C.js";import"./FormGroup-B0XPk2U9.js";import"./NumberInput-DaPfIJOD.js";import"./bucket-17-BQfr1mYr.js";import"./RadioButton-Gs5rkmcR.js";import"./RadioButtonGroup-Dqz5Dyvb.js";import"./usePrefersReducedMotion-CELNRsW6.js";import"./usePresence-DJYraiYT.js";import"./ActionSet-UFeovBhW.js";import"./useWindowResize-D9PpaIhZ.js";import"./TagSet-ovrbRFHI.js";import"./Tag-CcGCr1ub.js";import"./DefinitionTooltip-C9lYYM92.js";import"./DismissibleTag-Ds86Ya5g.js";import"./usePortalTarget-CFSarTX_.js";import"./OperationalTag-CRXNsrH_.js";import"./SkeletonText-B0_TKw0x.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-9G85h8eo.js";import"./TableSelectRow-CoT_Yxqy.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-DzBRWNEK.js.map
