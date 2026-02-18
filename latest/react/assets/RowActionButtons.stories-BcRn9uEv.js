import{e as o,S as B,r as w,C as R}from"./iframe-BbXUUjd_.js";import{s as H,m as g}from"./_storybook-styles-DlZkcqih.js";import{D as A}from"./DatagridActions-BIxHRqjG.js";import{D as h}from"./DatagridPagination-effMMZNP.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-6arTmOhi.js";import{u as b}from"./useActionsColumn-BB7xmcL2.js";import{u as k}from"./useStickyColumn-DAW-T2Uo.js";import{u as v}from"./useSelectRows-BbFPvLDe.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-CfXH_CLd.js";import{T as C}from"./bucket-18-Eqhj5FgP.js";import{A as l}from"./bucket-0-XgBeGnkT.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-AIq4o4H9.js";import"./index-5wdsmiYB.js";import"./bucket-19-D_AfXLYY.js";import"./bucket-7-DgIxtDP7.js";import"./ComposedModal-BkgIOMZV.js";import"./index-DcPoEpgU.js";import"./LayerContext-Bytv4zrP.js";import"./clamp--00YEiB8.js";import"./ButtonSet-BMnlZwEF.js";import"./InlineLoading-D1aGZn20.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-Wym4UGgT.js";import"./Text-Bbz3GFY2.js";import"./utils-BOvPdNkn.js";import"./TableToolbarSearch-Dt9gP2kL.js";import"./wrapComponent-BYoRkSUS.js";import"./Search-CziQ13Zm.js";import"./FormContext-DLymYVx5.js";import"./bucket-15-CBNpOkFH.js";import"./Dropdown-2nePbHNc.js";import"./index-DJIZl_dZ.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-B5K2lX4C.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-GM9cwDgU.js";import"./useControllableState-BZS90GNH.js";import"./useAttachedMenu-kpO217Y9.js";import"./environment-DRRHKtsv.js";import"./index-CAtTluKL.js";import"./index-Bit37Dcs.js";import"./bucket-13-DpTpFo6N.js";import"./useOutsideClick-DTSzTXra.js";import"./OverflowMenuItem-CKgNgQFP.js";import"./useFilterContext-Cje1T6pI.js";import"./useIsomorphicEffect-Ckqx_rZa.js";import"./Pagination-BVntte-W.js";import"./Select-D0q4b9P2.js";import"./SelectItem-CzvjgQz1.js";import"./MultiSelect-Bdg83ZaU.js";import"./Checkbox-DA1Tp4F1.js";import"./devtools-c1cFm99f.js";import"./TableRow-B-Snxy3l.js";import"./bucket-1-DLhfM8qe.js";import"./TableToolbar-C6g4aPLu.js";import"./index-Doz2zLLk.js";import"./ErrorEmptyState-ByhLG8S1.js";import"./EmptyState-BzHeXB6p.js";import"./EmptyStateV2.deprecated-BGo5TH4f.js";import"./Link-Bbu9l37B.js";import"./ErrorIllustration-DTefJ6WE.js";import"./useId-B_5ZULSM.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-fPsD1muL.js";import"./NoDataIllustration-DpJVzVco.js";import"./NotFoundEmptyState-W6R8qNiE.js";import"./NotFoundIllustration-ZMhTjGkU.js";import"./index.esm-PtBsoDXv.js";import"./usePreviousValue-CCx64fdl.js";import"./useResizeObserver-C8GvvISo.js";import"./getFocusableElements-BW7cf991.js";import"./index-Ti0MHKIa.js";import"./props-helper-DXuQWHiI.js";import"./useClickOutside-BH6_hqBi.js";import"./AccordionItem-DicmOdSc.js";import"./DatePicker-Bz3ffG6m.js";import"./documentLang-E105Y72C.js";import"./FormGroup-RnwmISsp.js";import"./NumberInput-CH2coJOL.js";import"./bucket-17-D-hvZsd8.js";import"./RadioButton-khxpqx3v.js";import"./RadioButtonGroup-B8NLcoy8.js";import"./usePrefersReducedMotion-Dkir7oBy.js";import"./usePresence-v55_n0mJ.js";import"./ActionSet-D7S-ikyt.js";import"./useWindowResize-B-iNBRVC.js";import"./TagSet--kzD8XZj.js";import"./Tag-DVW51ef6.js";import"./DefinitionTooltip-D1ZjE1pE.js";import"./DismissibleTag-Bn3_7Jv_.js";import"./usePortalTarget-Dap0Fhp-.js";import"./OperationalTag-DhdsaTCi.js";import"./SkeletonText-BCMmkJwd.js";import"./bucket-16-ooxM2VmG.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-CBZ4Tz7o.js";import"./TableSelectRow-WNMKe7Hf.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,Go={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const Uo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,Uo as __namedExportsOrder,Go as default};
//# sourceMappingURL=RowActionButtons.stories-BcRn9uEv.js.map
