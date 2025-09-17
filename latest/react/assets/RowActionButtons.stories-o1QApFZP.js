import{e as o,S as B,r as w,C as R}from"./iframe-BCQS5_Al.js";import{s as H,m as g}from"./_storybook-styles-CQOK6ab9.js";import{D as A}from"./DatagridActions-L87vr302.js";import{D as h}from"./DatagridPagination-C5mtlyMC.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-cAsz3Two.js";import{u as b}from"./useActionsColumn-CnOF1hLQ.js";import{u as k}from"./useStickyColumn-eYJLxBRe.js";import{u as v}from"./useSelectRows-C6jtsMOR.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-BnWBUhiK.js";import{T as C}from"./bucket-18-DXk0sF99.js";import{A as l}from"./bucket-0-C_pPC6Ym.js";import"./bucket-2-CBnjIFj8.js";import"./index-C48XjYHO.js";import"./bucket-7-BgA2t6hd.js";import"./bucket-19-PZtVqhwH.js";import"./ComposedModal-CMyFULfX.js";import"./index-BEhuL1MR.js";import"./index-CdXMAzYd.js";import"./LayerContext-CVvjLuUj.js";import"./clamp--00YEiB8.js";import"./ButtonSet-Cb_bUCa1.js";import"./InlineLoading-CTAg-ra2.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-2z7irFo7.js";import"./Text-BG1KUeND.js";import"./utils-no3s3AXY.js";import"./TableToolbarSearch-KGqbQhta.js";import"./wrapComponent-Ci-1JrHB.js";import"./Search-CBYfLWWC.js";import"./FormContext-Bn8H75JH.js";import"./bucket-15-CBzffSSV.js";import"./Dropdown-B0wBVDRR.js";import"./index-D9TBFdHI.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-Yg3ilBaI.js";import"./useControllableState-CqyXdKnA.js";import"./useAttachedMenu-BABmdu1_.js";import"./index-Cae4270G.js";import"./index-D19lx2Ep.js";import"./bucket-13-DfemzzhA.js";import"./useOutsideClick-Bns9MH_j.js";import"./OverflowMenuItem-nvlmZvNb.js";import"./useFilterContext-CDBnOp1A.js";import"./bucket-14-BQhkeLU9.js";import"./Pagination-G1aDl7-u.js";import"./Select-CYwyrRZH.js";import"./SelectItem-CfYbAF1a.js";import"./MultiSelect-BPmu86gl.js";import"./Checkbox-Cfr6AEd4.js";import"./devtools-BnxPUADb.js";import"./TableRow-4U3wdrDq.js";import"./bucket-1-pWlg4EMK.js";import"./TableToolbar-D1lkrVO5.js";import"./index-OfZkcaMw.js";import"./ErrorEmptyState-DQe14o7X.js";import"./EmptyState-BZkXwjor.js";import"./EmptyStateV2.deprecated-CJ5xGOxC.js";import"./Link-C98KlpiF.js";import"./ErrorIllustration-DbCYpo63.js";import"./useId-DiFn3R-L.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CbpoqgOn.js";import"./NoDataIllustration-sZS7qjTO.js";import"./NotFoundEmptyState-B5lH7ycl.js";import"./NotFoundIllustration--MNV-kTQ.js";import"./index.esm-nggaN46X.js";import"./usePreviousValue-C2-cz8-7.js";import"./useResizeObserver-B51VLK5G.js";import"./useIsomorphicEffect-Dk79jGD5.js";import"./getFocusableElements-BW7cf991.js";import"./index-BjeY-wZk.js";import"./props-helper-BMnMmxLT.js";import"./useClickOutside-BeSBwKF9.js";import"./AccordionItem-Da3t-MbS.js";import"./DatePicker-D_xdCxJr.js";import"./FormGroup-DpRa_VRl.js";import"./NumberInput-McI5bb0U.js";import"./useNormalizedInputProps-DeyYuBaD.js";import"./documentLang-E105Y72C.js";import"./bucket-16-_N2sYb8a.js";import"./RadioButton-4O64ZZyC.js";import"./RadioButtonGroup-D0_8VsFI.js";import"./usePrefersReducedMotion-DhCxHpRy.js";import"./usePresence-BqKQWQDL.js";import"./ActionSet-Bg9Z6v0o.js";import"./useWindowResize-BrCgUT6Y.js";import"./TagSet-CR2BkYIk.js";import"./Tag-FHKzdPo3.js";import"./DefinitionTooltip-B8pPQwHf.js";import"./DismissibleTag-COfCywV5.js";import"./usePortalTarget-Cyw6i5As.js";import"./OperationalTag-Cx1oFtII.js";import"./SkeletonText-DaEfaMe5.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-D88WDYam.js";import"./TableSelectRow-DjwQwOAi.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
