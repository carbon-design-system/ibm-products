var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ag as H,r as g,C as v}from"./iframe-UFQ73af4.js";import{s as P,m as A}from"./_storybook-styles-CCLfYfn6.js";import{D as h}from"./DatagridActions-B--NYY3Z.js";import{D}from"./DatagridPagination-Dhp8mkSk.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-qdfQnFDI.js";import{u as k}from"./useActionsColumn-ByiAefzk.js";import{u as f}from"./useStickyColumn-DHq5fv3L.js";import{u as E}from"./useSelectRows-Bd_BE_Hl.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{a as C}from"./bucket-6-CQCT5Kkd.js";import{T}from"./bucket-19-BJ1UJIsF.js";import{a as u}from"./bucket-0-CNrGlA4x.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BlLaQW-a.js";import"./index-yq8qzhNP.js";import"./index-LkBqL5iB.js";import"./bucket-20-CI4ecuyk.js";import"./bucket-7-BRXA3Wxg.js";import"./MenuItem-oW28ITkS.js";import"./Text-CGvfWv3Q.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bn0ckfw0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Df1xLZ11.js";import"./ComposedModal-C9MtSZdU.js";import"./mergeRefs-BH0-8uDG.js";import"./index-BaBwsEpW.js";import"./LayerContext-CBEoaTMF.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-RHYbqF0i.js";import"./InlineLoading-YokHvcXP.js";import"./ButtonSet-pf7az1mw.js";import"./wrapFocus-CPFL6mF0.js";import"./OverflowMenuItem-BxYXHPE5.js";import"./TableToolbarSearch-XKF6Wj2Y.js";import"./wrapComponent-BqZOjmIN.js";import"./Search-TWwGqgnc.js";import"./FormContext-B8s6XRGS.js";import"./bucket-16-DKnENBlw.js";import"./TableToolbar-0UuNlyMW.js";import"./TableRow-6w1lU8l9.js";import"./bucket-1-CfJPJXdy.js";import"./index-B20rE21Y.js";import"./index-Bo-HDE2R.js";import"./bucket-14-SmraEgjA.js";import"./useOutsideClick-qq6sT7yN.js";import"./Dropdown-LuM3Wisp.js";import"./useNormalizedInputProps-CUnqHlUa.js";import"./bucket-21-d6_QJces.js";import"./downshift.esm-B6vbCc7O.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DVInaYZQ.js";import"./useFilterContext-DGnRU30e.js";import"./useIsomorphicEffect-BEWaERst.js";import"./bucket-15-vCUA1M5z.js";import"./Pagination-DfbRp-jv.js";import"./usePreviousValue-EK1DJuZ2.js";import"./Select-3ARL4EBl.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-d_qRSaIf.js";import"./MultiSelect-Dqo_O3cl.js";import"./Checkbox-CSOZqpJw.js";import"./devtools-CmzGK-FP.js";import"./ErrorEmptyState-CPnhREHZ.js";import"./EmptyState-C6Py6M9u.js";import"./EmptyStateV2.deprecated-BQ79GzBi.js";import"./Link-CvThHovb.js";import"./ErrorIllustration-B1MUwxoi.js";import"./useId-CN4GJ7sQ.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BEyaewvs.js";import"./NoDataIllustration-tRBupqq0.js";import"./NotFoundEmptyState-sdDWnE2s.js";import"./NotFoundIllustration-CTBmxpO5.js";import"./index.esm-DBLGO_eY.js";import"./usePreviousValue-Dqeoh45U.js";import"./useResizeObserver-CA30xuv-.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DxxTL-CI.js";import"./props-helper-D1ToC-Hg.js";import"./useClickOutside-Cn5zt29c.js";import"./AccordionItem-CZGm5D-d.js";import"./RadioButton-BMXIL8F3.js";import"./DatePicker-BvCYgy_0.js";import"./FormGroup-B02592Kt.js";import"./NumberInput-CfN3zvdG.js";import"./bucket-18-BfgMBMBM.js";import"./RadioButtonGroup-DXkyUMrz.js";import"./index-DyaDtTmv.js";import"./usePrefersReducedMotion-DmUb3PPR.js";import"./usePresence-C31Ysexx.js";import"./ActionSet-CbMCDFvB.js";import"./useWindowResize-DdvfE8_8.js";import"./TagSet-HAV4h-39.js";import"./Tag-DmnTOq8o.js";import"./DefinitionTooltip-DoIHCPrw.js";import"./DismissibleTag-C0F2Uw6C.js";import"./usePortalTarget-DEIUGCVw.js";import"./OperationalTag-DRr8YlI9.js";import"./SkeletonText-DszfR4Se.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-Cd2iI2gz.js";import"./TableSelectRow-XYYWJ6LP.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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
//# sourceMappingURL=RowActionButtons.stories-DANNCiZz.js.map
