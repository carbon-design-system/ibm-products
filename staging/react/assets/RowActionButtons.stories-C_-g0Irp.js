var R=Object.defineProperty;var i=(t,a)=>R(t,"name",{value:a,configurable:!0});import{e,S as H,r as g,C as v}from"./iframe-DhIv2Cz2.js";import{s as P,m as A}from"./_storybook-styles-BVRTvy6L.js";import{D as h}from"./DatagridActions-BF9tatMt.js";import{D}from"./DatagridPagination-tPLKuD_n.js";import{A as o}from"./getArgTypes-Ci8wh0IQ.js";import{D as w,u as b}from"./useDatagrid-B3zeFIWJ.js";import{u as k}from"./useActionsColumn-8JZWP2Bt.js";import{u as f}from"./useStickyColumn-BTwBJAaD.js";import{u as E}from"./useSelectRows-B_GQQIDP.js";import{u as I}from"./useDisableSelectRows-cAZ92SwL.js";import{E as C}from"./bucket-6-gELQZyM7.js";import{T}from"./bucket-18-DwSZKhzU.js";import{A as u}from"./bucket-0-BqBXgcBa.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-bhxorkyk.js";import"./index-d8hsHx5V.js";import"./index-C1b99TSV.js";import"./bucket-19-0ioYX1hu.js";import"./bucket-7-ChCKEQjG.js";import"./ComposedModal-iTGiThv_.js";import"./index-Du8T86O1.js";import"./LayerContext-FIF-mJpy.js";import"./clamp-ekNJC_Xv.js";import"./ButtonSet-B_BXmM1b.js";import"./InlineLoading-Bgh3e9T9.js";import"./mergeRefs-BH0-8uDG.js";import"./usePresenceContext-93kFRESp.js";import"./Text-OlEmoPCg.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-5tvSKAzz.js";import"./utils-A8kjRMc4.js";import"./TableToolbarSearch-DccDhjYy.js";import"./wrapComponent-s-x2995U.js";import"./Search-wqPxGHPL.js";import"./FormContext-DAgWiOK8.js";import"./bucket-16-C01d6Qhf.js";import"./Dropdown-BF9sC_vw.js";import"./index-BdnD2v1g.js";import"./inheritsLoose-CdLKJotq.js";import"./useNormalizedInputProps-B_vakQDX.js";import"./bucket-20-BLUMbjfu.js";import"./defaultItemToString-DDHghiWu.js";import"./MenuItem-DKMBpR0M.js";import"./useControllableState-fPT1x_Ln.js";import"./useAttachedMenu-DMGjL-WQ.js";import"./environment-DRRHKtsv.js";import"./index-oiVpOFsS.js";import"./index-g9DVUp9g.js";import"./bucket-13-DyhhZxvH.js";import"./useOutsideClick-9VZ01zkD.js";import"./OverflowMenuItem-D3dWqOAs.js";import"./useFilterContext-C67Wmco7.js";import"./useIsomorphicEffect-DtbzomVA.js";import"./bucket-15-C1K9QxrW.js";import"./Pagination-bypl6Qo7.js";import"./Select-B8OIPNAx.js";import"./SelectItem-GkrmyZtT.js";import"./MultiSelect-CiGlk7oX.js";import"./Checkbox-uM1nplfy.js";import"./devtools-KpiUTsjr.js";import"./TableRow-C5W_Ihak.js";import"./bucket-1-D-iSrM3O.js";import"./TableToolbar-DqYbPjpX.js";import"./index-4j00D-3u.js";import"./ErrorEmptyState-mRt1sjSG.js";import"./EmptyState-Dl0Eh-O3.js";import"./EmptyStateV2.deprecated-DCC0P_lg.js";import"./Link-CWTaGkXd.js";import"./ErrorIllustration-eb7wH8mX.js";import"./useId-BhAClTZZ.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-LjuXuhO8.js";import"./NoDataIllustration-Cjab4e-M.js";import"./NotFoundEmptyState-_Z9sbgZX.js";import"./NotFoundIllustration-khG64cda.js";import"./index.esm-DzjJIS_2.js";import"./usePreviousValue-Dyx9Q-0l.js";import"./useResizeObserver-Cm2iF_nj.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-f0w4ifyk.js";import"./props-helper-CYANkYtB.js";import"./useClickOutside-BnNyVZrg.js";import"./AccordionItem-6ecSal5g.js";import"./DatePicker-BRoQa0KB.js";import"./documentLang-E105Y72C.js";import"./FormGroup-BRj9ATHy.js";import"./NumberInput-UdoCTq1_.js";import"./bucket-17-Cw9icrIT.js";import"./RadioButton-B3Rhhe_d.js";import"./RadioButtonGroup-CSrmGJ52.js";import"./usePrefersReducedMotion-Db4kU0hj.js";import"./usePresence-BZpvy8rl.js";import"./ActionSet-CRmQzfcZ.js";import"./useWindowResize-Dh2o6N6s.js";import"./TagSet-BrouRxQ8.js";import"./Tag-SRa8Jkg6.js";import"./DefinitionTooltip-CJc_xAEX.js";import"./DismissibleTag-EjLvQ1zX.js";import"./usePortalTarget-aIXbwh_C.js";import"./OperationalTag-B5aQgm5A.js";import"./SkeletonText-Ctv_2VkX.js";import"./getNodeTextContent-CjFansOq.js";import"./Icon.Skeleton-DDYcLWzz.js";import"./TableSelectRow-Ba9WSd0F.js";const y=i(()=>e.createElement(H,{omitCodedExample:!0,blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
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

return <Datagrid datagridState={datagridState} />;`}}]}),"DocsPage");y.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:s}=__STORYBOOK_MODULE_ACTIONS__,Lo={title:"Deprecated/Datagrid/RowActionButtons",component:w,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:P,docs:{page:y},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:i((t,a)=>a,"accessor"),id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],r={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,onClick:s("Clicked row action: delete"),align:"top-right"}]},M=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtons"),x=i(({...t})=>e.createElement(M,{defaultGridProps:{...t}}),"RowActionButtonTemplateWrapper"),N={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions},_="With row action buttons",c=x.bind({});c.storyName=_;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};c.args={...N};const O=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(10)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,...t.defaultGridProps},f,k);return e.createElement(w,{datagridState:l})},"RowActionButtonsOverflow"),G=i(({...t})=>e.createElement(O,{defaultGridProps:{...t}}),"RowActionButtonOverflowTemplateWrapper"),U={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:C,onClick:s("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:v,onClick:s("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:T,isDelete:!0,hasDivider:!0,onClick:s("Clicked row action: delete")}]},z="With many row action buttons",d=G.bind({});d.storyName=z;d.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};d.args={...U};const W=i(({...t})=>{const a=e.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[n]=g.useState(A(50)),p=e.useMemo(()=>n,[n]),l=b({columns:a,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:h,DatagridPagination:D,endPlugins:[I],shouldDisableSelectRow:i(B=>B.id%5===0,"shouldDisableSelectRow"),...t.defaultGridProps},f,k,E);return e.createElement(w,{datagridState:l})},"RowActionButtonsBatchActions"),j=i(()=>[{label:"Duplicate",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:s("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:s("Clicked batch action button"),hasDivider:!0,kind:"danger"}],"getBatchActions"),F=i(({...t})=>e.createElement(W,{defaultGridProps:{...t}}),"RowActionButtonBatchTemplateWrapper"),L={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,rowActions:r.rowActions,toolbarBatchActions:j(),batchActions:!0},Y="With row action buttons and batch actions",m=F.bind({});m.storyName=Y;m.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};m.args={...L};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=RowActionButtons.stories-C_-g0Irp.js.map
