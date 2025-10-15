import{e as o,S as B,r as w,C as R}from"./iframe-CoewCovk.js";import{s as H,m as g}from"./_storybook-styles-BFvdjGMK.js";import{D as A}from"./DatagridActions-97kAof9x.js";import{D as h}from"./DatagridPagination-csJ2lEpl.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-Cr0FB-fQ.js";import{u as b}from"./useActionsColumn-3O34-t-b.js";import{u as k}from"./useStickyColumn-BsUg6Kn_.js";import{u as v}from"./useSelectRows-CzKeJSfK.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-CLYzFK7W.js";import{T as C}from"./bucket-18-BpzWYukX.js";import{A as l}from"./bucket-0-CMdbbcAW.js";import"./bucket-2-CtVldtpu.js";import"./index-CsmjhMFW.js";import"./bucket-7-Dj2rYaKi.js";import"./bucket-19-DKxd3UR5.js";import"./ComposedModal-D1Nxft6T.js";import"./index-BEhuL1MR.js";import"./index-Cyg7a7UP.js";import"./LayerContext-kuW0qxpN.js";import"./clamp--00YEiB8.js";import"./ButtonSet-Cr-Fqob5.js";import"./InlineLoading-B2eXnIkW.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-COQpSXAY.js";import"./Text-Db5H-8py.js";import"./utils-Bp6ze_2p.js";import"./TableToolbarSearch-BoSHteu8.js";import"./wrapComponent-BjK1lnee.js";import"./Search-B8UI4Fvk.js";import"./FormContext-CPXwcYYq.js";import"./bucket-15-4skPNO3q.js";import"./Dropdown-BS8RCd8O.js";import"./index-Lu5ZCrUL.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-BE_TxASK.js";import"./useControllableState-DaEX3sx9.js";import"./useAttachedMenu-DisMwIU8.js";import"./index-eE0c798V.js";import"./index-Db7cgiYO.js";import"./bucket-13-kEbwoQWW.js";import"./useOutsideClick-BjkaPmco.js";import"./OverflowMenuItem-AdOGI2xf.js";import"./useFilterContext-BujhTQ2Q.js";import"./bucket-14-BpzSdjlW.js";import"./Pagination-esX4XiS1.js";import"./Select-Ccd8k_Ot.js";import"./SelectItem-CKQ0nP1C.js";import"./MultiSelect-CfuJ0_2a.js";import"./Checkbox-DeqUwwo0.js";import"./devtools-9nvRWAoA.js";import"./TableRow-B3uq9iow.js";import"./bucket-1-y7LosGnP.js";import"./TableToolbar-CdPlZqhg.js";import"./index-Dci_9JXV.js";import"./ErrorEmptyState-BlcMRnOo.js";import"./EmptyState-CBI53Yk2.js";import"./EmptyStateV2.deprecated-rfGhLqIl.js";import"./Link-CnJKU312.js";import"./ErrorIllustration-DS0lnkhu.js";import"./useId-BX45mjmh.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DCdnEpTU.js";import"./NoDataIllustration-VGamBxGL.js";import"./NotFoundEmptyState-xz8YSirE.js";import"./NotFoundIllustration-KMs4-bG1.js";import"./index.esm-D3tP9Ffl.js";import"./usePreviousValue-CF6xtt65.js";import"./useResizeObserver-C89b-FZh.js";import"./useIsomorphicEffect-Cawv2SLq.js";import"./getFocusableElements-BW7cf991.js";import"./index-DERjXm5w.js";import"./props-helper-BRgWXp0Z.js";import"./useClickOutside-BM2XoXOW.js";import"./AccordionItem-DRYCMcXS.js";import"./DatePicker-DaoYkBcT.js";import"./FormGroup-MledKjZ_.js";import"./NumberInput-D2QuPvpm.js";import"./useNormalizedInputProps-2OS32PD4.js";import"./documentLang-E105Y72C.js";import"./bucket-16-cGJ0KSHs.js";import"./RadioButton-DBM0lH3Y.js";import"./RadioButtonGroup-CM9aMQRf.js";import"./usePrefersReducedMotion-DdHThNqK.js";import"./usePresence-DNqmtiug.js";import"./ActionSet-d0WjR72l.js";import"./useWindowResize-DksD137R.js";import"./TagSet-BgG3tROi.js";import"./Tag-DLc7aXsJ.js";import"./DefinitionTooltip-CDCcENL2.js";import"./DismissibleTag-IWYoLcTb.js";import"./usePortalTarget-DXZ_VUkb.js";import"./OperationalTag-BaI1cL_a.js";import"./SkeletonText-ZIMzN19w.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-Dx-tZprM.js";import"./TableSelectRow-BJnFvekA.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
