import{e as o,S as B,r as w,C as R}from"./iframe-DCfjJu_F.js";import{s as H,m as g}from"./_storybook-styles-D7mUqNm0.js";import{D as A}from"./DatagridActions-C5NSruz-.js";import{D as h}from"./DatagridPagination-BdAc1oLI.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-Bn0wRTpj.js";import{u as b}from"./useActionsColumn-DvXjJ5-z.js";import{u as k}from"./useStickyColumn-DeqUuMc7.js";import{u as v}from"./useSelectRows-LZhuxXrr.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-DCXoSG9N.js";import{T as C}from"./bucket-18-CAKstFHh.js";import{A as l}from"./bucket-0-fVXhX98s.js";import"./bucket-2-CM6WUjLH.js";import"./index-DggURKcq.js";import"./bucket-7-DyUsK330.js";import"./bucket-19-DaUFX3rW.js";import"./ComposedModal-B2bQRqbr.js";import"./index-BEhuL1MR.js";import"./index-DLE1X6F3.js";import"./LayerContext-D75seshR.js";import"./clamp--00YEiB8.js";import"./ButtonSet-euj9gTPO.js";import"./InlineLoading-CRiW5teS.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-XuLZef_t.js";import"./Text-BBeCTcnD.js";import"./utils-CHds83dj.js";import"./TableToolbarSearch-DDmgJqvQ.js";import"./wrapComponent-J4tuQwf1.js";import"./Search-BmE2giQX.js";import"./FormContext-zJNsbdVC.js";import"./bucket-15-DPP6yuyp.js";import"./Dropdown-D1QwjIVp.js";import"./index-BgLL8Ey7.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-BmxVw0NX.js";import"./useControllableState-CvJtX0qn.js";import"./useAttachedMenu-7Ip5kQ2D.js";import"./index-BC1G6xB0.js";import"./index-DIfk5cyb.js";import"./bucket-13-COHK2cHs.js";import"./useOutsideClick-tAow3AKx.js";import"./OverflowMenuItem-WI9DgxqP.js";import"./useFilterContext-BHSxgc_H.js";import"./bucket-14-hK2psUUY.js";import"./Pagination-CphljnGz.js";import"./Select-CxlEUv0c.js";import"./SelectItem-B2jTNrlm.js";import"./MultiSelect-CeCJGOxw.js";import"./Checkbox-D9UbsuV-.js";import"./devtools-Dq6cNnKA.js";import"./TableRow-Fck1UAqI.js";import"./bucket-1-QfmfktZY.js";import"./TableToolbar-DnrhumUt.js";import"./index-D5yRydeU.js";import"./ErrorEmptyState-CVZqa5cH.js";import"./EmptyState-CTxGgD0p.js";import"./EmptyStateV2.deprecated-DYMI9PQt.js";import"./Link-D1p4ezde.js";import"./ErrorIllustration-CxTq4x7O.js";import"./useId-D2QmEKez.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-y13XT-QW.js";import"./NoDataIllustration-CPRbiszZ.js";import"./NotFoundEmptyState-RO_AWlsN.js";import"./NotFoundIllustration-m0Gx9b3K.js";import"./index.esm-DxLVAyv5.js";import"./usePreviousValue-CBp7NEq-.js";import"./useResizeObserver-CSc2h2KH.js";import"./useIsomorphicEffect-Cv3WfcJG.js";import"./getFocusableElements-BW7cf991.js";import"./index-pMTGHuqE.js";import"./props-helper-z_EuKbf-.js";import"./useClickOutside-BGQNUCe3.js";import"./AccordionItem-C7en308N.js";import"./DatePicker-DKknci41.js";import"./FormGroup-Syt6qd0m.js";import"./NumberInput-6QMDORen.js";import"./useNormalizedInputProps-CNsxTdqX.js";import"./documentLang-E105Y72C.js";import"./bucket-16-FQKZxNTK.js";import"./RadioButton-DWsH_Zfh.js";import"./RadioButtonGroup-BUBw6Nws.js";import"./usePrefersReducedMotion-DsMsVVIx.js";import"./usePresence-CqSe_d7p.js";import"./ActionSet-BVtq0oD_.js";import"./useWindowResize-C4OFVNT3.js";import"./TagSet-B6xqiZ_g.js";import"./Tag-Do4AOXQ3.js";import"./DefinitionTooltip-FHGQOFPQ.js";import"./DismissibleTag-BqY_z83F.js";import"./usePortalTarget-Cjf1FlSN.js";import"./OperationalTag-DYiAg5m0.js";import"./SkeletonText-CDRuNfgd.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-C3Q_0RW7.js";import"./TableSelectRow-wSBu-_4c.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,_o={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Oo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Oo as __namedExportsOrder,_o as default};
