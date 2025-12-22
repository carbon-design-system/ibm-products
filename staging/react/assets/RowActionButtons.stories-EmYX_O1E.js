import{e as o,S as B,r as w,C as R}from"./iframe-es3YFZs8.js";import{s as H,m as g}from"./_storybook-styles-bQlMiNTF.js";import{D as A}from"./DatagridActions-C3q405hQ.js";import{D as h}from"./DatagridPagination-DGiEjhYH.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-Dt9nJfPX.js";import{u as b}from"./useActionsColumn-B5iOoZGo.js";import{u as k}from"./useStickyColumn-CUrUdKdX.js";import{u as v}from"./useSelectRows-CFR-ho-v.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-DYsIcumV.js";import{T as C}from"./bucket-18-B7e-BwYT.js";import{A as l}from"./bucket-0-7b3rlN-t.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-CfJzaJFg.js";import"./index-B6dVoXy9.js";import"./bucket-7-BSUCCRQK.js";import"./bucket-19-B3J48Rvk.js";import"./ComposedModal-BNZ0xrNk.js";import"./index-C5Ro8ytP.js";import"./LayerContext-DYatxtHw.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BK4TCPFN.js";import"./InlineLoading-CtvpAno-.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DSN20C2k.js";import"./Text-MEHJpwZ2.js";import"./utils-Whna5qm2.js";import"./TableToolbarSearch-DTp67H_T.js";import"./wrapComponent-D4YPO8FS.js";import"./Search-8qkKR353.js";import"./FormContext-ijK0cFxQ.js";import"./bucket-15-iOzd6Ht7.js";import"./Dropdown-DKaSKN6M.js";import"./index-cRBKcX7l.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-DEji8yld.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-BfBpJTe1.js";import"./useControllableState-DELe-cxK.js";import"./useAttachedMenu-L4-RfObX.js";import"./index-BFX3rzvs.js";import"./index-D3xTsq0I.js";import"./bucket-13-vyqsHVy5.js";import"./useOutsideClick-gw3CJW12.js";import"./OverflowMenuItem-B2CL77qn.js";import"./useFilterContext-DKRDDwMA.js";import"./useIsomorphicEffect-D6rh4akx.js";import"./bucket-14-CI7BQNS5.js";import"./Pagination-DA6eTXHN.js";import"./Select-Dy1xUdPG.js";import"./SelectItem-Da3tHF7Y.js";import"./MultiSelect-DjPJlPqG.js";import"./Checkbox-DHwbz_p8.js";import"./devtools-B-NbPYgg.js";import"./TableRow-Cv5S-WrU.js";import"./bucket-1-4ztVL7Nr.js";import"./TableToolbar-C4KFl_de.js";import"./index-C-mu62QI.js";import"./ErrorEmptyState-CkBP2O_Y.js";import"./EmptyState-yDQeqKRE.js";import"./EmptyStateV2.deprecated-B6wwNsEo.js";import"./Link-BSTPpK0O.js";import"./ErrorIllustration-D6A8s776.js";import"./useId-WDitYIyO.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-omrF4QQk.js";import"./NoDataIllustration-C_NaAJks.js";import"./NotFoundEmptyState-Cmtn6uJ8.js";import"./NotFoundIllustration-DW-bTDS2.js";import"./index.esm-CbRqHJ5S.js";import"./usePreviousValue-DmHE8q_K.js";import"./useResizeObserver-BclD7llf.js";import"./getFocusableElements-BW7cf991.js";import"./index-C6RUA3w7.js";import"./props-helper-CpLSSfOq.js";import"./useClickOutside-C4h4A7_X.js";import"./AccordionItem-BgHsnZt0.js";import"./DatePicker-CmJbYbbQ.js";import"./documentLang-E105Y72C.js";import"./FormGroup-BwWqmRgE.js";import"./NumberInput-CzB54gI7.js";import"./bucket-17-lykMG0e3.js";import"./RadioButton-CUNsrnSe.js";import"./RadioButtonGroup-v0f1gLCr.js";import"./usePrefersReducedMotion-DD4USbO9.js";import"./usePresence-DohOf6JM.js";import"./ActionSet-BRjQP7gr.js";import"./useWindowResize-DX9REKJk.js";import"./TagSet-DgwhCVYv.js";import"./Tag-CCt-SUKl.js";import"./DefinitionTooltip-BmJBfddz.js";import"./DismissibleTag-B4nxSUVr.js";import"./usePortalTarget-BODnGvh-.js";import"./OperationalTag-D8mQBR7x.js";import"./SkeletonText-C99bY-rA.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-CRqxubG1.js";import"./TableSelectRow-CdkDQqMF.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-EmYX_O1E.js.map
