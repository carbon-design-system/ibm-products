import{e as o,S as B,r as w,C as R}from"./iframe-BfCV3bOI.js";import{s as H,m as g}from"./_storybook-styles-Cm6ufsjy.js";import{D as A}from"./DatagridActions-CutloQ9C.js";import{D as h}from"./DatagridPagination-BfRmSmzU.js";import{A as t}from"./getArgTypes-Ci8wh0IQ.js";import{D as u,u as D}from"./useDatagrid-BsRbYwqM.js";import{u as b}from"./useActionsColumn-BaCaKLh0.js";import{u as k}from"./useStickyColumn-gaDxlnKJ.js";import{u as v}from"./useSelectRows-yE9Gk8BE.js";import{u as P}from"./useDisableSelectRows-CUqmyeRS.js";import{E as S}from"./bucket-6-BUNG1ZbU.js";import{T as C}from"./bucket-18-C-6Yai3b.js";import{A as l}from"./bucket-0-Ciw2Dsly.js";import"./bucket-2-DscS7k4t.js";import"./index-CErJu9sK.js";import"./bucket-7-BlpeiSNu.js";import"./bucket-19-DXGPPlEX.js";import"./ComposedModal-DDr7rI1V.js";import"./index-BEhuL1MR.js";import"./index-DCClf6mH.js";import"./LayerContext-8SWqIeSi.js";import"./clamp--00YEiB8.js";import"./ButtonSet-DRScrKx_.js";import"./InlineLoading-BCFikEd9.js";import"./mergeRefs-D4pwfk3t.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-CtpBtbaA.js";import"./Text-CfUeD5YQ.js";import"./utils-DPQn4WAo.js";import"./TableToolbarSearch-BG-IM1t3.js";import"./wrapComponent-DjdlSN6x.js";import"./Search-DoApKEoI.js";import"./FormContext-DqvfHl8l.js";import"./bucket-15-B07QhFi5.js";import"./Dropdown-BBIIB9NB.js";import"./index-HRsRazA4.js";import"./inheritsLoose-DHKJTbHM.js";import"./MenuItem-CmMwkeOB.js";import"./useControllableState-DFU9FhNB.js";import"./useAttachedMenu-4VE0fpzo.js";import"./index-DEgrfpg6.js";import"./index-Dgw2jygY.js";import"./bucket-13-nosdxnow.js";import"./useOutsideClick-U-60qH6M.js";import"./OverflowMenuItem-CxOBAhX2.js";import"./useFilterContext-ByBTjWZN.js";import"./bucket-14-COfNRyTY.js";import"./Pagination-or5V6_ki.js";import"./Select-v6EoOGap.js";import"./SelectItem-Cgvlje2B.js";import"./MultiSelect-CDCE22uF.js";import"./Checkbox-Bpl7rgf3.js";import"./devtools-mGs0wnY2.js";import"./TableRow-C0W-tUi3.js";import"./bucket-1-59toT3oJ.js";import"./TableToolbar-wgb9xB32.js";import"./index-Rp0dLXSw.js";import"./ErrorEmptyState-B-iTFFq5.js";import"./EmptyState-uM4OJknX.js";import"./EmptyStateV2.deprecated-g_CB9kyt.js";import"./Link-DwEnb7bw.js";import"./ErrorIllustration-Do_HgjZI.js";import"./useId-Bnc4iy3Y.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DIv675NA.js";import"./NoDataIllustration-DwplAzsf.js";import"./NotFoundEmptyState-B2dSBol2.js";import"./NotFoundIllustration-DkmUMrFP.js";import"./index.esm-B2VHsvLW.js";import"./usePreviousValue-CIIC2c5_.js";import"./useResizeObserver-7trOekg4.js";import"./useIsomorphicEffect-CGC_2bjf.js";import"./getFocusableElements-BW7cf991.js";import"./index-2L8Eb6nd.js";import"./props-helper-B1pqY6OD.js";import"./useClickOutside-KpiYEaiC.js";import"./AccordionItem-C-x_NN9b.js";import"./DatePicker-BAOwiFbZ.js";import"./FormGroup-B8pJBJeD.js";import"./NumberInput-CrBT28od.js";import"./useNormalizedInputProps-BrwBC_vx.js";import"./documentLang-E105Y72C.js";import"./bucket-16-Lh1Yht85.js";import"./RadioButton-bwzgKOtN.js";import"./RadioButtonGroup-B4RvMw_Q.js";import"./usePrefersReducedMotion-BjFD9GIF.js";import"./usePresence-C_6nB3Ag.js";import"./ActionSet-BqEOyzaW.js";import"./useWindowResize-BODwJyRa.js";import"./TagSet-UmvG7OFG.js";import"./Tag-NIrrbvG7.js";import"./DefinitionTooltip-BKrU3q75.js";import"./DismissibleTag-DaGnLvfq.js";import"./usePortalTarget-DJLB0SuP.js";import"./OperationalTag-C6Zst86w.js";import"./SkeletonText-BwaOM_ry.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./Icon.Skeleton-D5z6sdy9.js";import"./TableSelectRow-CoXmN1Ig.js";const T=()=>o.createElement(B,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
