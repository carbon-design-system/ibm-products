var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-nyWj9AFG.js";import{s as P,m as A}from"./_storybook-styles-CquGyz4V.js";import{D as h}from"./DatagridActions-qR2yMzH_.js";import{D}from"./DatagridPagination-D66EJR4J.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-qI7Y6gAh.js";import{u as k}from"./useActionsColumn-Dqby64l7.js";import{u as f}from"./useStickyColumn-DkKzw3zG.js";import{u as E}from"./useSelectRows-B7-A5flD.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-B-Zq8ItY.js";import{T}from"./bucket-19-DESzYyzb.js";import{a as u}from"./bucket-0-BEFIQVr3.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BFZsdHKx.js";import"./index-BW3OgNnr.js";import"./index-BfgIMR11.js";import"./bucket-7-Di7sqyQo.js";import"./bucket-20-QNu5uAOp.js";import"./MenuItem-Cu0-mTTm.js";import"./Text-ugVjbrM6.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B2H7bdhi.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Br8GBSt6.js";import"./ComposedModal-D66gEHIC.js";import"./mergeRefs-BH0-8uDG.js";import"./index-Bip5r7cE.js";import"./LayerContext-TY8Rr565.js";import"./clamp-ekNJC_Xv.js";import"./toggleClass-A14-NzTB.js";import"./InlineLoading-B7IBbyIF.js";import"./ButtonSet-C1mE44Y9.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-kvvUkrL0.js";import"./OverflowMenuItem-BOWiUweJ.js";import"./TableToolbarSearch-D42hgbBr.js";import"./wrapComponent-BqRQ5VZj.js";import"./Search-VbXGv_8g.js";import"./FormContext-Ca9jqY9Q.js";import"./bucket-16-0phSzhqh.js";import"./index-C0WS_wN3.js";import"./bucket-13-BQAQJByg.js";import"./useOutsideClick-TRDJNVTG.js";import"./Dropdown-BGldWS1M.js";import"./useNormalizedInputProps-OnrN8UbL.js";import"./downshift.esm-CL6tmTgM.js";import"./inheritsLoose-CdLKJotq.js";import"./index-FUYD_9Sv.js";import"./useFilterContext-BaMYvbMq.js";import"./useIsomorphicEffect-DiSxRFeJ.js";import"./bucket-15-C3lLpWQU.js";import"./Pagination-BrIShPr2.js";import"./usePreviousValue-DhjyoRJm.js";import"./Select-BvOfinI1.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-prJeBVDX.js";import"./MultiSelect-0FETypkX.js";import"./Checkbox-wLWb-MZ1.js";import"./devtools-bEKes8mp.js";import"./TableRow-DiTRIUG3.js";import"./bucket-1-CTqwJdcL.js";import"./TableToolbar-6JNcEJEC.js";import"./index-CJhEv1XZ.js";import"./ErrorEmptyState-CgXYYCmn.js";import"./EmptyState-Bu0zEo87.js";import"./EmptyStateV2.deprecated-Dk0z7dz9.js";import"./Link-DESAjkNF.js";import"./ErrorIllustration-BMHnyGda.js";import"./useId-BwPKdf4k.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bn3D65BU.js";import"./NoDataIllustration-kfPyRSyO.js";import"./NotFoundEmptyState-wqsmlPgP.js";import"./NotFoundIllustration-Dr3wHW1m.js";import"./index.esm-BJ6EDc4j.js";import"./usePreviousValue-MbZnQ0tT.js";import"./useResizeObserver-8ywXsdiU.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-Dsqef-Wi.js";import"./props-helper-Dbiph8mZ.js";import"./useClickOutside-DFWooBKB.js";import"./AccordionItem-B8Xd1fIV.js";import"./RadioButton-C9Giqkfh.js";import"./DatePicker-CD22RHqs.js";import"./FormGroup-C5czTfBG.js";import"./NumberInput-DX9r2zsN.js";import"./bucket-17-D7ZRxT5S.js";import"./RadioButtonGroup-CmM8ZIhj.js";import"./index-BKOmZCUq.js";import"./usePrefersReducedMotion-DWvZuShJ.js";import"./usePresence-C_e8iz6y.js";import"./ActionSet-Bb_K9hKd.js";import"./useWindowResize-704ZnHUm.js";import"./TagSet-DBH_9yfg.js";import"./Tag-DueSeaUB.js";import"./DefinitionTooltip-DpYlQa4t.js";import"./DismissibleTag-BNuTHFkk.js";import"./usePortalTarget-BKqoXfXv.js";import"./OperationalTag-C8UIsJbz.js";import"./SkeletonText-BXgvJdOL.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-BkFtvJoc.js";import"./TableSelectRow-BHw-h7NJ.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Lo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...m.parameters?.docs?.source}}};const Yo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Yo as __namedExportsOrder,Lo as default};
//# sourceMappingURL=RowActionButtons.stories-9pMXnl8_.js.map
