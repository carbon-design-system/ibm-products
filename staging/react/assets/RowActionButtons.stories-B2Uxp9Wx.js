import{e as o,S as B,r as w,C as R}from"./iframe-BixY_nzU.js";import{s as H,m as g}from"./_storybook-styles-BjnquDfj.js";import{D as A}from"./DatagridActions-CSz_YLFx.js";import{D as h}from"./DatagridPagination-DatV2WQq.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-C3hLtMc1.js";import{u as b}from"./useActionsColumn-BYDRHES9.js";import{u as k}from"./useStickyColumn-BEkdsfiS.js";import{u as v}from"./useSelectRows-Bvi8OoyE.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-Ygy5YQ9m.js";import{T as C}from"./bucket-17-D2SvOvFl.js";import{A as l}from"./bucket-0-tkbzYG9T.js";import"./bucket-2-KtQy-gy7.js";import"./index-KoxcOYkd.js";import"./bucket-18-Cm0L4bq5.js";import"./bucket-7-BMRx2xk3.js";import"./ComposedModal-C-yJmSnV.js";import"./index-BEhuL1MR.js";import"./index-Dioc7bXy.js";import"./LayerContext-C8JKjCPJ.js";import"./clamp--00YEiB8.js";import"./ButtonSet-B_zKP9xZ.js";import"./InlineLoading-D56yXy8d.js";import"./mergeRefs-91-mP8KM.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-Bbgeg0Nx.js";import"./Text-B6SqPZCe.js";import"./utils-CYmHZlgn.js";import"./TableToolbarSearch-SBws6Dty.js";import"./wrapComponent-DJ4rNbJl.js";import"./Search-DgkMjmaf.js";import"./FormContext-ChfRT5-9.js";import"./bucket-15-CR51sp2K.js";import"./Dropdown-CA737wZu.js";import"./index-DGezsfQe.js";import"./inheritsLoose-DHKJTbHM.js";import"./bucket-19-BnR_hMr3.js";import"./MenuItem-ZGtCy1zR.js";import"./useControllableState-DC7Ej6kn.js";import"./useAttachedMenu-BRh0V27n.js";import"./index-BBuXWzuS.js";import"./index-CCul1fp0.js";import"./bucket-12-C20f3iiV.js";import"./useOutsideClick-BEN9HQgE.js";import"./OverflowMenuItem-C7uN44t_.js";import"./useFilterContext-BsY2fjaK.js";import"./bucket-14-julK-VHp.js";import"./Pagination-CygFgA8L.js";import"./Select-D2qoOMRJ.js";import"./SelectItem-CrqdL3W6.js";import"./MultiSelect-DU3po3NM.js";import"./Checkbox-CrO2TYcW.js";import"./devtools-BgBiig7t.js";import"./TableRow-CmfIPmKY.js";import"./bucket-1-BHpIhqGK.js";import"./TableToolbar-m2gFp8dd.js";import"./index-D8hxD1Y6.js";import"./ErrorEmptyState-DsvVJbKR.js";import"./EmptyState-By9fZsJk.js";import"./EmptyStateV2-B8Eg_jZc.js";import"./Link-trOFoxkZ.js";import"./props-helper-nJuZcXxg.js";import"./ErrorIllustration-Buxf7vLz.js";import"./useId-CEgnz6Ws.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-D3JQoXKy.js";import"./NoDataIllustration-ePnik9lE.js";import"./NotFoundEmptyState-Di5etujk.js";import"./NotFoundIllustration-BiHuHUk_.js";import"./index.esm-DxhhlNX-.js";import"./usePreviousValue-CTSbRzqP.js";import"./useResizeObserver-w6LHWa3u.js";import"./useIsomorphicEffect-BzCQADVB.js";import"./getFocusableElements-BW7cf991.js";import"./index-oT-iZzBF.js";import"./useClickOutside-DAucaBgU.js";import"./AccordionItem-nAc0ALKG.js";import"./DatePicker-C-aHxAcv.js";import"./FormGroup-TqDbofKg.js";import"./NumberInput-DbvJgXao.js";import"./useNormalizedInputProps-Bpt-5IUr.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CBPAJ3ia.js";import"./RadioButton-DFOMK8Cd.js";import"./RadioButtonGroup-B0lPsX87.js";import"./usePrefersReducedMotion-VKlGTiEJ.js";import"./usePresence-DOAybUGi.js";import"./ActionSet-BU7FdDgm.js";import"./useWindowResize-DVgsn1qn.js";import"./TagSet-Dhg_Qh0C.js";import"./Tag-CbXFe4uz.js";import"./DefinitionTooltip-C5zZShyp.js";import"./DismissibleTag-Dankl3fz.js";import"./usePortalTarget-DYGy-m0K.js";import"./OperationalTag-FQkyKd3P.js";import"./SkeletonText-R4JdAoTC.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-BDt0H2QA.js";import"./TableSelectRow-CEr1cHF1.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
