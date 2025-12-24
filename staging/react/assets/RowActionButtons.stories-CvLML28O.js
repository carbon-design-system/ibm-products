import{e as o,S as B,r as w,C as R}from"./iframe-Bn5s87s4.js";import{s as H,m as g}from"./_storybook-styles-D17NSFyp.js";import{D as A}from"./DatagridActions-BapSElcR.js";import{D as h}from"./DatagridPagination-D74TZGYH.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CjRHd8zp.js";import{u as b}from"./useActionsColumn-mgXDAFoh.js";import{u as k}from"./useStickyColumn-CXtbnW4b.js";import{u as v}from"./useSelectRows-DYaPxBTh.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-4QPuED9F.js";import{T as C}from"./bucket-18-CjQdBR0X.js";import{A as l}from"./bucket-0-Ba9itZYk.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-S1beR83x.js";import"./index-C9jChmFj.js";import"./bucket-7-CvmQKYEr.js";import"./bucket-19-C9HfQtRN.js";import"./ComposedModal-0BWEXzM1.js";import"./index-D9UDgIUg.js";import"./LayerContext-BihYEre2.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CXQgRZeZ.js";import"./InlineLoading-D_UBaimj.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-p8CeO0Q6.js";import"./Text-DPxQhslY.js";import"./utils-DQejB-zS.js";import"./TableToolbarSearch-CSL-UoeE.js";import"./wrapComponent-CnV40MCj.js";import"./Search-T7tqaylz.js";import"./FormContext-C5gYs1Iz.js";import"./bucket-15-CS3Y4Mgh.js";import"./Dropdown-CMaceGXW.js";import"./index-wuqyTjN_.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-jypMYg7X.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CrClIjlz.js";import"./useControllableState-CDFtAfEZ.js";import"./useAttachedMenu-DhlZrLf-.js";import"./index-BRKV1vw1.js";import"./index-DViADvk5.js";import"./bucket-13-Dndxk466.js";import"./useOutsideClick-f2_z0C-o.js";import"./OverflowMenuItem-BnHmJgeq.js";import"./useFilterContext-CVr5yklU.js";import"./useIsomorphicEffect-C6KJAnKi.js";import"./bucket-14-DJtJQxMb.js";import"./Pagination-CTZw782r.js";import"./Select-BguIcjbH.js";import"./SelectItem-DqTdUuEX.js";import"./MultiSelect-bJRW7UcD.js";import"./Checkbox-CJXd6mx6.js";import"./devtools-mVE9FHp6.js";import"./TableRow-CM86TcFN.js";import"./bucket-1-0FbbcnG1.js";import"./TableToolbar-CvvJsKwN.js";import"./index-DlCtKpC6.js";import"./ErrorEmptyState-Bj9P51WJ.js";import"./EmptyState-DS7S8eyD.js";import"./EmptyStateV2.deprecated-B31rEqbT.js";import"./Link-DzeRYl9b.js";import"./ErrorIllustration-x1-D-gMA.js";import"./useId-CzlKQG_-.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-AwkmRdMV.js";import"./NoDataIllustration-DfcHc9y-.js";import"./NotFoundEmptyState-BiglsIAY.js";import"./NotFoundIllustration-rb0wsZRf.js";import"./index.esm-D4y7DyfZ.js";import"./usePreviousValue-Sk-kuPEp.js";import"./useResizeObserver-tdiREPfS.js";import"./getFocusableElements-BW7cf991.js";import"./index-CcsFybhx.js";import"./props-helper-CnD5lOtX.js";import"./useClickOutside--bgovvKE.js";import"./AccordionItem-O5m-Fw82.js";import"./DatePicker-DtfW-GAe.js";import"./documentLang-E105Y72C.js";import"./FormGroup-D7ED0Srn.js";import"./NumberInput-Ce4px8fu.js";import"./bucket-17-CLqhTMCi.js";import"./RadioButton-BvWHKHci.js";import"./RadioButtonGroup-CzVvexCl.js";import"./usePrefersReducedMotion-BH6pVHWR.js";import"./usePresence-DF_StNwK.js";import"./ActionSet-GABrFEnO.js";import"./useWindowResize-z9b_8b40.js";import"./TagSet-CNqanwCI.js";import"./Tag-sQsnyISB.js";import"./DefinitionTooltip-CwHpCgPH.js";import"./DismissibleTag-CfULJo6W.js";import"./usePortalTarget-GjmdVlNb.js";import"./OperationalTag-B-TUI2Gy.js";import"./SkeletonText-CDcl1bge.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-JtbM36CA.js";import"./TableSelectRow-B808eWj6.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-CvLML28O.js.map
