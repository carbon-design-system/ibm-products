import{e as o,S as B,r as w,C as R}from"./iframe-Bt_4wi2_.js";import{s as H,m as g}from"./_storybook-styles-CWbGVUaz.js";import{D as A}from"./DatagridActions-mbamOpu9.js";import{D as h}from"./DatagridPagination-YmR0XqPq.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CCIMJzFR.js";import{u as b}from"./useActionsColumn-fgF6u1ta.js";import{u as k}from"./useStickyColumn-C5bV6exo.js";import{u as v}from"./useSelectRows-CQcJfkqG.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-DqzXE5dN.js";import{T as C}from"./bucket-17-B1WDuKPt.js";import{A as l}from"./bucket-0-Bj1c77ki.js";import"./bucket-2-Boc44dor.js";import"./index-xWfRmBau.js";import"./bucket-18-BNKdAP26.js";import"./bucket-7-B-udVZOd.js";import"./ComposedModal-47wjLjIr.js";import"./index-BEhuL1MR.js";import"./index-Dj5IO_sl.js";import"./LayerContext-BkO66YUX.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CKUC8hVh.js";import"./InlineLoading-DVx1EWEO.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DVXZPRDf.js";import"./Text-CKKshe8_.js";import"./utils-Dx5MzUE-.js";import"./TableToolbarSearch-CkHJo2ev.js";import"./wrapComponent-IgFyV2G4.js";import"./Search-CVSTT5z7.js";import"./FormContext-DZ5Pn6PQ.js";import"./bucket-15-Ch_KyqBs.js";import"./Dropdown-DALH0kRg.js";import"./index-Z1YAyleP.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-Cu112eOp.js";import"./MenuItem-D2pnsW7j.js";import"./useControllableState-DNtleL3k.js";import"./useAttachedMenu-C0yi6pnT.js";import"./index-C7wi-ghb.js";import"./index-DHyu7IcT.js";import"./bucket-12-CDc9yP7i.js";import"./useOutsideClick-D3OyQuUM.js";import"./OverflowMenuItem-ggN1m3Mj.js";import"./useFilterContext-DTR90qo_.js";import"./bucket-14-CUPfehuY.js";import"./Pagination-BeAzhfTN.js";import"./Select-CtL1yraa.js";import"./SelectItem-B-4g44IU.js";import"./MultiSelect-CJqcHJtI.js";import"./Checkbox-CKmGiswn.js";import"./devtools-BCl7cib1.js";import"./TableRow-C6xYuB6Q.js";import"./bucket-1-CILBsbE8.js";import"./TableToolbar-CjRb7GXR.js";import"./index-C6rFndyw.js";import"./ErrorEmptyState-zemEyeeQ.js";import"./EmptyState-O7tb8Xec.js";import"./EmptyStateV2.deprecated-CzR5da4a.js";import"./Link-BtVCBSi3.js";import"./ErrorIllustration-C20suZyp.js";import"./useId-C7vEoo7Q.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DHayk9gF.js";import"./NoDataIllustration-CzVtwb_5.js";import"./NotFoundEmptyState-D-iN-Km6.js";import"./NotFoundIllustration-CK78gLt7.js";import"./index.esm-Cd3d2ndm.js";import"./usePreviousValue-D6jr6a1I.js";import"./useResizeObserver-B7TK2lQu.js";import"./useIsomorphicEffect-D_1zDqSu.js";import"./getFocusableElements-BW7cf991.js";import"./index-BMUscg6k.js";import"./props-helper-uQ141h4h.js";import"./useClickOutside-DTdVa_Sp.js";import"./AccordionItem-CYO3lCiP.js";import"./DatePicker-C791D37O.js";import"./FormGroup-C8xiXSF6.js";import"./NumberInput-Crv8I7dK.js";import"./useNormalizedInputProps-Bd-xcf7G.js";import"./documentLang-E105Y72C.js";import"./bucket-16-D2Z2Dhjh.js";import"./RadioButton-W7ipeTeg.js";import"./RadioButtonGroup-DuAVjpvV.js";import"./usePrefersReducedMotion-BzmCcU9p.js";import"./usePresence-CoAJwV67.js";import"./ActionSet-I4afg10P.js";import"./useWindowResize-Cg0SJ3kR.js";import"./TagSet-DlcjLTtL.js";import"./Tag-Ex8z9_ne.js";import"./DefinitionTooltip-DhipDxYz.js";import"./DismissibleTag-CgEG4X9m.js";import"./usePortalTarget-BMZMDMfJ.js";import"./OperationalTag-DwMFZI3B.js";import"./SkeletonText-XtlMg-au.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-CFCvIUrE.js";import"./TableSelectRow--WiDynAN.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
