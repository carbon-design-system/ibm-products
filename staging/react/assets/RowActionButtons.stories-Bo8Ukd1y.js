import{e as o,S as B,r as w,C as R}from"./iframe-CECvNR-E.js";import{s as H,m as g}from"./_storybook-styles-DyhsE4gt.js";import{D as A}from"./DatagridActions-Cry70NW6.js";import{D as h}from"./DatagridPagination-Cf0wJVH3.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-CLGBu0KZ.js";import{u as b}from"./useActionsColumn-D_juIamp.js";import{u as k}from"./useStickyColumn-BvaARtYA.js";import{u as v}from"./useSelectRows-DqJC3zoB.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-6Xg8dT13.js";import{T as C}from"./bucket-18-aLT4L9Ee.js";import{A as l}from"./bucket-0-Ct-c54fM.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-B2qVJJyY.js";import"./index-CY5VH0Wo.js";import"./bucket-7-BNY8no_f.js";import"./bucket-19-DzVW02r8.js";import"./ComposedModal-knVyg-RR.js";import"./index-D9kzaMMU.js";import"./LayerContext-6g403wGD.js";import"./clamp--00YEiB8.js";import"./ButtonSet-CJvqeno-.js";import"./InlineLoading-AxKMSEh1.js";import"./mergeRefs-BZpmU3mx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-2UnpdR_d.js";import"./Text-JYrlRVpp.js";import"./utils-5D3DEOFD.js";import"./TableToolbarSearch-FT_JklIp.js";import"./wrapComponent-CgUKGyK0.js";import"./Search-C_NXnGDc.js";import"./FormContext-D-anyOyh.js";import"./bucket-15-B5w10YD2.js";import"./Dropdown-B3sMF6DL.js";import"./index-nuXQNMyh.js";import"./inheritsLoose-DHKJTbHM.js";import"./useNormalizedInputProps-Bnm0Ei9o.js";import"./defaultItemToString-zSItMTD_.js";import"./MenuItem-CuhJ5Fdm.js";import"./useControllableState-CeUHG2Ws.js";import"./useAttachedMenu-D1mlKi8p.js";import"./index-OyYMWOsD.js";import"./index-D6SLJGyk.js";import"./bucket-13-BsaKR1EV.js";import"./useOutsideClick-NWUtwkfn.js";import"./OverflowMenuItem-CuAQreUF.js";import"./useFilterContext-5K42m0LH.js";import"./useIsomorphicEffect-BnVzRpkq.js";import"./bucket-14-CHDSepZv.js";import"./Pagination-Dbk6zCJh.js";import"./Select-CottMwKN.js";import"./SelectItem-C63vC68U.js";import"./MultiSelect-D63q8W5e.js";import"./Checkbox-GrZpxim0.js";import"./devtools-4IrNVtGE.js";import"./TableRow-nE5Z2m4H.js";import"./bucket-1-CWEhWKsT.js";import"./TableToolbar-CgZQ2mCp.js";import"./index-CeDLcdNt.js";import"./ErrorEmptyState-CIYSmPjf.js";import"./EmptyState-B5t1fZwy.js";import"./EmptyStateV2.deprecated-DCZVLlaC.js";import"./Link-DC6sJXxH.js";import"./ErrorIllustration-IOVb8kFl.js";import"./useId-DvA9Olfl.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CQWT0LH9.js";import"./NoDataIllustration-DQjd0pNV.js";import"./NotFoundEmptyState-DeA3lE9B.js";import"./NotFoundIllustration-3KoYfl3e.js";import"./index.esm-CB6JTwDV.js";import"./usePreviousValue-DzUN10Wt.js";import"./useResizeObserver-CFlkjV8G.js";import"./getFocusableElements-BW7cf991.js";import"./index-JdFUOAZ1.js";import"./props-helper-BomzR2el.js";import"./useClickOutside-D2zkx6aO.js";import"./AccordionItem-BIHBNNEu.js";import"./DatePicker-DJAC_JWU.js";import"./documentLang-E105Y72C.js";import"./FormGroup-tt2ybUGc.js";import"./NumberInput-rbdBayvn.js";import"./bucket-17-BzB5Sqr3.js";import"./RadioButton-DvcfIgXl.js";import"./RadioButtonGroup-ewWImFG-.js";import"./usePrefersReducedMotion-YBMc9ewZ.js";import"./usePresence-BS1FhAiy.js";import"./ActionSet-BDx6M7Wm.js";import"./useWindowResize-Wc-sHMx3.js";import"./TagSet-D8ljy7tq.js";import"./Tag-BXeLWXEp.js";import"./DefinitionTooltip-CASlUOQ5.js";import"./DismissibleTag-0sJOjJTR.js";import"./usePortalTarget-DBlCnwG_.js";import"./OperationalTag-CBsDAR3R.js";import"./SkeletonText-CxUnjpMl.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-BBOl6a3w.js";import"./TableSelectRow-CV2wRaCK.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-Bo8Ukd1y.js.map
