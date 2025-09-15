import{e as o,S as B,r as w,C as R}from"./iframe-DoONWhft.js";import{s as H,m as g}from"./_storybook-styles-Dih_2jL2.js";import{D as A}from"./DatagridActions-CQy1YHNx.js";import{D as h}from"./DatagridPagination-C_qsbIZY.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-BV-CQv71.js";import{u as b}from"./useActionsColumn-BmBo76re.js";import{u as k}from"./useStickyColumn-CeBSBT3x.js";import{u as v}from"./useSelectRows-4wZ3_tvG.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-Db2Sb-Fe.js";import{T as C}from"./bucket-18-DPfg6wFB.js";import{A as l}from"./bucket-0-uqkOWGHA.js";import"./bucket-2-qL1MgP2_.js";import"./index-Bnfmk4E7.js";import"./bucket-7-DJnsrDi0.js";import"./bucket-19-Cq7trOkA.js";import"./ComposedModal-CO73icGN.js";import"./index-BEhuL1MR.js";import"./index-CS_juDx4.js";import"./LayerContext-CR2yigRC.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BIsEMg7s.js";import"./InlineLoading-9sujfcCD.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BQ5Ztz-2.js";import"./Text-wCKpd-Jz.js";import"./utils-eIueeELw.js";import"./TableToolbarSearch-0rg_LMTI.js";import"./wrapComponent-a49TUMra.js";import"./Search-DOrlbM9o.js";import"./FormContext-DXPdmhvk.js";import"./bucket-15-Bej-6NQ9.js";import"./Dropdown-BfkEDVpY.js";import"./index-DqtL2min.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-BnFRV3Km.js";import"./useControllableState-BxL_A9i9.js";import"./useAttachedMenu-PIsCbOSk.js";import"./index-BfTEMZj-.js";import"./index-BCCfYvph.js";import"./bucket-13-whxGOphA.js";import"./useOutsideClick-fKMX5IHP.js";import"./OverflowMenuItem-yfxGa1i6.js";import"./useFilterContext-Bs2xyuna.js";import"./bucket-14-C5vuP1B-.js";import"./Pagination-PGayZ3yC.js";import"./Select-REq4Sblq.js";import"./SelectItem-DY346_9B.js";import"./MultiSelect-B6eEuFZb.js";import"./Checkbox-CoYK2NeI.js";import"./devtools-Bope-Kcp.js";import"./TableRow-BBB8tZBX.js";import"./bucket-1-Di6MhJUu.js";import"./TableToolbar-DZj6CrC6.js";import"./index-BVSll7PQ.js";import"./ErrorEmptyState-Dgovm1Sj.js";import"./EmptyState-Drj-En_s.js";import"./EmptyStateV2.deprecated-QuzrKzAu.js";import"./Link-Ifh5DqEn.js";import"./ErrorIllustration-C6eUVUMR.js";import"./useId-B8S0jltQ.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BxehcJSl.js";import"./NoDataIllustration-DEQxsMKw.js";import"./NotFoundEmptyState-DtH1tytc.js";import"./NotFoundIllustration-DVFcX8Qg.js";import"./index.esm-iwX-tHIA.js";import"./usePreviousValue-BM8J3eak.js";import"./useResizeObserver-D1Iv75rh.js";import"./useIsomorphicEffect-DNoZHH_8.js";import"./getFocusableElements-BW7cf991.js";import"./index-xRnkOPfZ.js";import"./props-helper-CgHaYMy-.js";import"./useClickOutside-DBu9ER0T.js";import"./AccordionItem-DUs3BITh.js";import"./DatePicker-BBBU7vkF.js";import"./FormGroup-Bo25NDoU.js";import"./NumberInput-CX0h-uN-.js";import"./useNormalizedInputProps-C4mFjT_j.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CnygcoxJ.js";import"./RadioButton-CsSHDCt1.js";import"./RadioButtonGroup-IbRUc0_r.js";import"./usePrefersReducedMotion-mcO4ENLb.js";import"./usePresence-DnxW7Fuq.js";import"./ActionSet-CjjXiJvi.js";import"./useWindowResize-DPDV0FhJ.js";import"./TagSet-B98xm1KY.js";import"./Tag-DBgKAnsH.js";import"./DefinitionTooltip-B1asZ6m5.js";import"./DismissibleTag-v3qU7Vsb.js";import"./usePortalTarget-CNTXyWag.js";import"./OperationalTag-CUpvV-kh.js";import"./SkeletonText-Cg669JDG.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-C8mXum8S.js";import"./TableSelectRow-D1Woscq_.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
