var B=Object.defineProperty;var i=(t,a)=>B(t,"name",{value:a,configurable:!0});import{R as e,ah as H,r as g,C as v}from"./iframe-D_TgCArL.js";import{s as P,m as A}from"./_storybook-styles-CKO__dnP.js";import{D as h}from"./DatagridActions-CPdZmuro.js";import{D}from"./DatagridPagination-Dpyc1EQa.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-DsyyF3IZ.js";import{u as k}from"./useActionsColumn-EZcn5vV-.js";import{u as f}from"./useStickyColumn-B1_-pGWa.js";import{u as E}from"./useSelectRows-DaT3uL-7.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{c as C}from"./bucket-6-CXN0yrIs.js";import{T}from"./bucket-19-DTdadaEd.js";import{a as u}from"./bucket-0-5-RCdAp8.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DGcWyVgA.js";import"./index-rkIh3fWn.js";import"./index-ByjH8V_s.js";import"./bucket-7-Cu83Tgtz.js";import"./bucket-20-I6CTYn6M.js";import"./MenuItem-of1z0pJX.js";import"./Text-dRt3vkhG.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-GG8vFhDR.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BjOxIYPS.js";import"./ComposedModal-BnfFN913.js";import"./mergeRefs-BH0-8uDG.js";import"./index-C4I8n2OM.js";import"./LayerContext-cz8DORjj.js";import"./clamp-ekNJC_Xv.js";import"./isTopmostVisibleModal-BR-FkALa.js";import"./InlineLoading-BGCjZ4v_.js";import"./ButtonSet-D4f8odRz.js";import"./wrapFocus-ETscRDcT.js";import"./OverflowMenuItem-yVD7zv4H.js";import"./TableToolbarSearch-D-uZTPCo.js";import"./wrapComponent-CutgLoKv.js";import"./Search-CFE_Nkyq.js";import"./FormContext-BSRgfZem.js";import"./bucket-16-BxRNo6ep.js";import"./TableToolbar-Cn8G74hZ.js";import"./TableRow-Cau4cDV5.js";import"./bucket-1-lBN47QRA.js";import"./index-DSCJKvlP.js";import"./index-ULHrowJv.js";import"./bucket-13-B66NcEIi.js";import"./useOutsideClick-T8mS5L4_.js";import"./Dropdown-CiTxYOtd.js";import"./useNormalizedInputProps-CsURg4Bb.js";import"./downshift.esm-CORxR4IN.js";import"./inheritsLoose-CdLKJotq.js";import"./index-DDyhfRTP.js";import"./useFilterContext-kLreGwtv.js";import"./useIsomorphicEffect-CR1p44dz.js";import"./bucket-15-Djauy7UT.js";import"./Pagination-CYRzN8LQ.js";import"./usePreviousValue-DuLishmK.js";import"./Select-BQjIUT3w.js";import"./hasHelperText-CcJ_VphT.js";import"./SelectItem-7k_H5QXZ.js";import"./MultiSelect-BkfKI35f.js";import"./Checkbox-BhroKPX1.js";import"./devtools-BGZqfd5Y.js";import"./ErrorEmptyState-CMDm59NH.js";import"./EmptyState-9MXZSilL.js";import"./EmptyStateV2.deprecated-fMBzFI3J.js";import"./Link-DfZ7aJKy.js";import"./ErrorIllustration-Srt4WvE9.js";import"./useId-CGfxEokt.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DPGMZpNn.js";import"./NoDataIllustration-6Xe6-gle.js";import"./NotFoundEmptyState-CucDan6A.js";import"./NotFoundIllustration-D8xTzJWf.js";import"./index.esm-C0ljhTrT.js";import"./usePreviousValue-DNpvF_F1.js";import"./useResizeObserver-BKWzin4w.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-D0VNU8Gq.js";import"./props-helper-mCcBl7fc.js";import"./useClickOutside-cZUT7nNv.js";import"./AccordionItem-LnLX38WL.js";import"./RadioButton-BQ30rKMg.js";import"./DatePicker-B7VMR9AY.js";import"./FormGroup-D9G9nnoJ.js";import"./NumberInput-g61CL_Xu.js";import"./bucket-17-DbzW9rmA.js";import"./RadioButtonGroup-D9yh9ENA.js";import"./index-D_6p7cdU.js";import"./usePrefersReducedMotion-CsjvWLNE.js";import"./usePresence-BuaLlaxK.js";import"./ActionSet-DQlGvG51.js";import"./useWindowResize-B0NL8UT8.js";import"./TagSet-DNaIqZje.js";import"./Tag-DwG5QxKI.js";import"./DefinitionTooltip-CCUESeVH.js";import"./DismissibleTag-BJRFQ3-8.js";import"./usePortalTarget-DnsJgKXA.js";import"./OperationalTag-Cl7M_My3.js";import"./SkeletonText-BDgrBTrk.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-y7a3Gb3M.js";import"./TableSelectRow-COnOpdn9.js";const R=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");R.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Fo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:R},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(y=>y.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Lo=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{d as ManyRowActionButtonsUsageStory,m as RowActionButtonsBatchActionsUsageStory,c as RowActionButtonsUsageStory,Lo as __namedExportsOrder,Fo as default};
//# sourceMappingURL=RowActionButtons.stories-V8KsYmuo.js.map
