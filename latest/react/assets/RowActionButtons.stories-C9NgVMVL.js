import{e as o,S as B,r as w,C as R}from"./iframe-BlQ-LkYW.js";import{s as H,m as g}from"./_storybook-styles-CVByPx4P.js";import{D as A}from"./DatagridActions-rp_PS2EP.js";import{D as h}from"./DatagridPagination-BLPg-9LM.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CnxV8z7J.js";import{u as b}from"./useActionsColumn-BncNzlQl.js";import{u as k}from"./useStickyColumn-LptrHT6Y.js";import{u as v}from"./useSelectRows-41OVCwd5.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-C4pRq2Bl.js";import{T as C}from"./bucket-17-CcHsRNDR.js";import{A as l}from"./bucket-0-6Q7N9SpP.js";import"./bucket-2-BDIkUbzC.js";import"./index-CgaasdUn.js";import"./bucket-18-Bl8QDCbK.js";import"./bucket-7-DldHT251.js";import"./ComposedModal-CtswQ6eu.js";import"./index-BEhuL1MR.js";import"./index-DZN9_q_B.js";import"./LayerContext-BvuXYV0V.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BLtxr1g9.js";import"./InlineLoading-BiPU-E2v.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-C2HPB9zJ.js";import"./Text-DSSpV4WJ.js";import"./utils-BevHIbez.js";import"./TableToolbarSearch-DhPhQlSt.js";import"./wrapComponent-BDK0h1Zk.js";import"./Search-KyKbUvD4.js";import"./FormContext-DkhQXZ0G.js";import"./bucket-15-CM_J5Vvb.js";import"./Dropdown-BvmhsKBp.js";import"./index-CXYHyzp2.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-Ds7BYjit.js";import"./MenuItem-Cde_w9Z-.js";import"./useControllableState-C05qBH-j.js";import"./useAttachedMenu-BakFN8R8.js";import"./index-CFF1FOUA.js";import"./index-VNwEaoKl.js";import"./bucket-12-DYGdvqH1.js";import"./useOutsideClick-DRiKtgqC.js";import"./OverflowMenuItem-ByvfIQCP.js";import"./useFilterContext-hthDLudy.js";import"./bucket-14-DLbuTogh.js";import"./Pagination-DuhC2SEM.js";import"./Select-PlQrN08w.js";import"./SelectItem-ipEXQ9_P.js";import"./MultiSelect-B_rQyAfc.js";import"./Checkbox-KCN2jQ_S.js";import"./devtools-BJZSxg-N.js";import"./TableRow-BYIk4P8t.js";import"./bucket-1-DU5MGOmF.js";import"./TableToolbar-BKBISmpj.js";import"./index-DNGc5teW.js";import"./ErrorEmptyState-DN0qShT7.js";import"./EmptyState-UEgZGf8z.js";import"./EmptyStateV2.deprecated-CJfAaoaS.js";import"./Link-CMYINvP1.js";import"./ErrorIllustration-D8EqFHGf.js";import"./useId-C2_b1b81.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Ct01DPXx.js";import"./NoDataIllustration-D99JvkUc.js";import"./NotFoundEmptyState-CExQFyMc.js";import"./NotFoundIllustration-B0zRLUCn.js";import"./index.esm-B2BF8_Xw.js";import"./usePreviousValue-BfWd4m5G.js";import"./useResizeObserver-w8n_UuuT.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./getFocusableElements-BW7cf991.js";import"./index-DwBZIlXB.js";import"./props-helper-DmAPJ46T.js";import"./useClickOutside-j6p6RzvJ.js";import"./AccordionItem-BhtMrcrS.js";import"./DatePicker-DamDW6cE.js";import"./FormGroup-B1IMtc-E.js";import"./NumberInput-bpDngU1O.js";import"./useNormalizedInputProps-Dz70CF1S.js";import"./documentLang-E105Y72C.js";import"./bucket-16-D881Un-v.js";import"./RadioButton-zRgIFODd.js";import"./RadioButtonGroup-eRaykhRX.js";import"./usePrefersReducedMotion-C1fBtu2H.js";import"./usePresence-tZhDiWEQ.js";import"./ActionSet-DxtE6QvT.js";import"./useWindowResize-DGjBxvCI.js";import"./TagSet-Dhe0S5N8.js";import"./Tag-CsYb8P2P.js";import"./DefinitionTooltip-Ch2quHzY.js";import"./DismissibleTag-Da7z3e6w.js";import"./usePortalTarget-a9acdh7P.js";import"./OperationalTag-BUphsu11.js";import"./SkeletonText-DEkHw7eg.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-CazYzSGh.js";import"./TableSelectRow-JZBhanNh.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
