import{e as o,S as B,r as w,C as R}from"./iframe-DFpKMPby.js";import{s as H,m as g}from"./_storybook-styles-CBmTl_pd.js";import{D as A}from"./DatagridActions-BbBNPnUu.js";import{D as h}from"./DatagridPagination-Vdzexajt.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-B21XQCqO.js";import{u as b}from"./useActionsColumn-CiRcwHoK.js";import{u as k}from"./useStickyColumn-hKCwF93x.js";import{u as v}from"./useSelectRows-DYBiYCSO.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-B98T6Er9.js";import{T as C}from"./bucket-18-DKRlsMeP.js";import{A as l}from"./bucket-0-DdFwv4RV.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-BJtRM_L-.js";import"./index-B_RYS3B3.js";import"./bucket-19-BiWvxoBr.js";import"./bucket-7-Bx0zcbBe.js";import"./ComposedModal-C4zVvowC.js";import"./index-BZNQ76pD.js";import"./LayerContext-BsfSsn3u.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CbfhMW98.js";import"./InlineLoading-C4D8swtL.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-LRnjjuOM.js";import"./Text-DmSkCN9-.js";import"./utils-js3bPBK9.js";import"./TableToolbarSearch-Dk9gpNqd.js";import"./wrapComponent-D28wPHR7.js";import"./Search-DHSo-NRX.js";import"./FormContext-DhkisQRD.js";import"./bucket-15-CTGKYzk1.js";import"./Dropdown-DqIfgZp5.js";import"./index-ClXT6K7y.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-CUOp-3yA.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-DL5t9ruc.js";import"./useControllableState-BZJyIqgU.js";import"./useAttachedMenu-DtpWmR0R.js";import"./environment-DRRHKtsv.js";import"./index-DUaXoaGc.js";import"./index-BwbFax62.js";import"./bucket-13-nCeWtx-Y.js";import"./useOutsideClick-Dyno-D99.js";import"./OverflowMenuItem-CGB8UMzh.js";import"./useFilterContext-DfwN8t7J.js";import"./useIsomorphicEffect-D8ODjm2R.js";import"./Pagination-CoRqfLR8.js";import"./Select-B5p29ttn.js";import"./SelectItem-i4I3pVXG.js";import"./MultiSelect-DMtKNMJr.js";import"./Checkbox-CKECTXFq.js";import"./devtools-BTj-TFWE.js";import"./TableRow-D0UwMbKU.js";import"./bucket-1-CubUMv3g.js";import"./TableToolbar-C4rOViQ4.js";import"./index-DjtoZuLp.js";import"./ErrorEmptyState-BiDiFhvi.js";import"./EmptyState-D3ScweoC.js";import"./EmptyStateV2.deprecated-Cxm57ils.js";import"./Link-CzWKN6gF.js";import"./ErrorIllustration-D4EOM471.js";import"./useId-BDEqOPFK.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-ByxfvGT3.js";import"./NoDataIllustration-BIXT2HFa.js";import"./NotFoundEmptyState-C0mrM5Tb.js";import"./NotFoundIllustration-D4a-Y4C_.js";import"./index.esm-kjsVMGNX.js";import"./usePreviousValue-BJntbRdj.js";import"./useResizeObserver-BjbdykCB.js";import"./getFocusableElements-BW7cf991.js";import"./index-C7ycmAhm.js";import"./props-helper-IRa1SilK.js";import"./useClickOutside-DpM9DO1D.js";import"./AccordionItem-C1dawy3P.js";import"./DatePicker-CI4BWb5R.js";import"./documentLang-E105Y72C.js";import"./FormGroup-CStcLMkP.js";import"./NumberInput-B9DoUaSK.js";import"./bucket-17-BMHTEUf3.js";import"./RadioButton-DKxw8ESp.js";import"./RadioButtonGroup-bpKsy1F6.js";import"./usePrefersReducedMotion-iNk_fYdI.js";import"./usePresence-5eZ3iwCl.js";import"./ActionSet-Ddw8WSp7.js";import"./useWindowResize-CaqPyk-P.js";import"./TagSet-DFiYadK6.js";import"./Tag-Bo2WPtKs.js";import"./DefinitionTooltip-DcC1JVFA.js";import"./DismissibleTag-Dgl_DvA7.js";import"./usePortalTarget-BQit2Uui.js";import"./OperationalTag-BbFwxNme.js";import"./SkeletonText-D5kiG3Ie.js";import"./bucket-16-BE-04uEE.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-DBb2bw-c.js";import"./TableSelectRow-D5FlH_WN.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-BAwgTi1E.js.map
