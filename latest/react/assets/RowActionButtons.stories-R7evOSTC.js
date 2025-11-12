import{e as o,S as B,r as w,C as R}from"./iframe-DL4rv6Sk.js";import{s as H,m as g}from"./_storybook-styles-DIFln6A_.js";import{D as A}from"./DatagridActions-Wg41OAU2.js";import{D as h}from"./DatagridPagination-CBsFbEcz.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-DY8OnLlC.js";import{u as b}from"./useActionsColumn-C5J9vVLe.js";import{u as k}from"./useStickyColumn-Cbj-d64t.js";import{u as v}from"./useSelectRows-BqG8ytUM.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-0n8zOi6E.js";import{T as C}from"./bucket-18-DasBym7s.js";import{A as l}from"./bucket-0-Cgp4qbK4.js";import"./bucket-2-DWbjyfbr.js";import"./index-DKpSrTTL.js";import"./bucket-7-BiGpzwL2.js";import"./bucket-19-Yu9VpGqT.js";import"./ComposedModal-BvVC1jwz.js";import"./index-Dki116_N.js";import"./LayerContext-DNs21za5.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DZW6ssTo.js";import"./InlineLoading-Cf_Gl0tC.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-Dt-_dlb_.js";import"./Text-BLHpolkk.js";import"./utils-Cs9s9lyq.js";import"./TableToolbarSearch-g8jP6x7x.js";import"./wrapComponent-Ba8Fa1EF.js";import"./Search-BGrfLMFt.js";import"./FormContext-BcuiRe3h.js";import"./bucket-15-BI4sGmKb.js";import"./Dropdown-CyUaYcPb.js";import"./index-SxnJxQcD.js";import"./inheritsLoose-DHKJTbHM.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-Cpai8mbK.js";import"./useControllableState-DHHb1dfh.js";import"./useAttachedMenu-D80ddK7-.js";import"./index-F65_Irgf.js";import"./index-DtzGVvRZ.js";import"./bucket-13-cFnmK9fX.js";import"./useOutsideClick-DsRk1Hgy.js";import"./OverflowMenuItem-BASIVaZU.js";import"./useFilterContext-BqTZ9ykb.js";import"./bucket-14-DLpkyXtR.js";import"./Pagination-JtSHL2KN.js";import"./Select-BZU0SCN9.js";import"./SelectItem-BKm20SdQ.js";import"./MultiSelect-C9lrAlyX.js";import"./Checkbox-DRM5iQKY.js";import"./devtools-DjJC0kZ2.js";import"./TableRow-DfeweyVp.js";import"./bucket-1-CkPu7SeY.js";import"./TableToolbar-DIhTMzCc.js";import"./index-BjjzEPqz.js";import"./ErrorEmptyState-Du7wNyXG.js";import"./EmptyState-DroN0Ebo.js";import"./EmptyStateV2.deprecated-C2lKMAHZ.js";import"./Link-BscjaeLg.js";import"./ErrorIllustration-CZQX160J.js";import"./useId-BImvC5MC.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BNE48fIJ.js";import"./NoDataIllustration-DbcqDpZZ.js";import"./NotFoundEmptyState-BVMc0OMh.js";import"./NotFoundIllustration-BLLGz4Tp.js";import"./index.esm-DUH_AICA.js";import"./usePreviousValue-Cageflr8.js";import"./useResizeObserver-DlxIFv70.js";import"./useIsomorphicEffect-b9OUvWaC.js";import"./getFocusableElements-BW7cf991.js";import"./index-B2ykNYPT.js";import"./props-helper-gcNr1tii.js";import"./useClickOutside-CDQDDKVX.js";import"./AccordionItem-ENzMG0oJ.js";import"./DatePicker-DmEXwBVg.js";import"./NumberInput-CeWQadbk.js";import"./useNormalizedInputProps-DUnwy-61.js";import"./bucket-16-CzPuKptk.js";import"./FormGroup-BtbL8ZGF.js";import"./RadioButton-TqM8hUAl.js";import"./RadioButtonGroup-NBAGYvP5.js";import"./usePrefersReducedMotion-L8WGJvSg.js";import"./usePresence-Dm0hdG4v.js";import"./ActionSet-CP5R2yLL.js";import"./useWindowResize-DtC6Mjtf.js";import"./TagSet-BoiTapEM.js";import"./Tag-C0IsdLhR.js";import"./DefinitionTooltip-FuJSB5-l.js";import"./DismissibleTag-BlaQjnkZ.js";import"./usePortalTarget-DYH9lnLV.js";import"./OperationalTag-BpSG_X4i.js";import"./SkeletonText--lkC769G.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-BjcPxC77.js";import"./TableSelectRow-DFT7reWN.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]});T.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,No={title:"Deprecated/Datagrid/RowActionButtons",component:u,tags:["autodocs"],parameters:{styles:H,docs:{page:T},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},f=[{Header:"Row Index",accessor:(e,a)=>a,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],i={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,onClick:r("Clicked row action: delete"),align:"top-right"}]},E=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},I=({...e})=>o.createElement(E,{defaultGridProps:{...e}}),M={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions},x="With row action buttons",n=I.bind({});n.storyName=x;n.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};n.args={...M};const N=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(10)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,...e.defaultGridProps},k,b);return o.createElement(u,{datagridState:p})},_=({...e})=>o.createElement(N,{defaultGridProps:{...e}}),O={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:S,onClick:r("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:R,onClick:r("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:C,isDelete:!0,hasDivider:!0,onClick:r("Clicked row action: delete")}]},G="With many row action buttons",c=_.bind({});c.storyName=G;c.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions};c.args={...O};const U=({...e})=>{const a=o.useMemo(()=>[...f,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[s]=w.useState(g(50)),m=o.useMemo(()=>s,[s]),p=D({columns:a,data:m,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:A,DatagridPagination:h,endPlugins:[P],shouldDisableSelectRow:y=>y.id%5===0,...e.defaultGridProps},k,b,v);return o.createElement(u,{datagridState:p})},z=()=>[{label:"Duplicate",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Add",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Publish to catalog",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Download",renderIcon:l,onClick:r("Clicked batch action button")},{label:"Delete",renderIcon:l,onClick:r("Clicked batch action button"),hasDivider:!0,kind:"danger"}],W=({...e})=>o.createElement(U,{defaultGridProps:{...e}}),j={gridTitle:i.gridTitle,gridDescription:i.gridDescription,useDenseHeader:i.useDenseHeader,rowActions:i.rowActions,toolbarBatchActions:z(),batchActions:!0},F="With row action buttons and batch actions",d=W.bind({});d.storyName=F;d.argTypes={gridTitle:t.gridTitle,gridDescription:t.gridDescription,useDenseHeader:t.useDenseHeader,rowActions:t.rowActions,batchActions:t.batchActions};d.args={...j};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...d.parameters?.docs?.source}}};const _o=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{c as ManyRowActionButtonsUsageStory,d as RowActionButtonsBatchActionsUsageStory,n as RowActionButtonsUsageStory,_o as __namedExportsOrder,No as default};
